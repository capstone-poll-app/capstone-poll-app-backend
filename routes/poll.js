const express = require("express");
const router = express.Router();
const { Poll, Option, Vote } = require("../database_scripts/models");
const { version } = require("node:os");

//implementing long polling
const Poll_timeout_ms = 60 * 1000;
const Check_interval_ms = 3 * 1000;

router.get("/", (req, res) => {
  res.redirect("/polls");
});

router.get("/polls", async (req, res) => {
  console.log("→ /polls hit, since:", req.query.since);
  const clientVersion = req.query.since ? new Date(req.query.since) : null;
  let finished = false;

  let intervalId = null;
  let timeoutId = null;

  const sendResponse = async (data, changed) => {
    console.log("send response called", changed);
    if (finished) return;
    finished = true;

    if (intervalId) clearInterval(intervalId);
    if (timeoutId) clearTimeout(timeoutId);

    res.json({
      data,
      changed,
      version: new Date().toISOString(),
    });
  };

  async function checkStateChange() {
    try {
      const data = await Poll.findAll();
      const latestUpdated = data.reduce((max, poll)=>{
        return poll.updatedAt > max ? poll.updatedAt : max;
      }, new Date(0));

      const changed = !clientVersion || latestUpdated > clientVersion

      if (changed){
        await sendResponse(data, true);
      }
    } catch (err) {
        if (!finished) {
          finished = true;
          if (intervalId) clearInterval(intervalId);
          if (timeoutId) clearTimeout(timeoutId);
          console.error("Error fetching polls:", err);
          res.status(500).json({ error: "Failed to fetch polls" });
        }
    }
  }

  console.log("run")
  await checkStateChange();
  console.log("after run", finished)
  if (finished) return;
  intervalId = setInterval(checkStateChange, Check_interval_ms)
  timeoutId = setTimeout(async ()=>{
    if(finished) return;

    try {
      const data = await Poll.findAll();
      sendResponse(data, false);
    } catch (err) {
      finished = true;
      clearInterval(intervalId);
      console.error("Error fetching polls:", err);
      res.status(500).json({ error: "Failed to fetch polls" });
    }
  }, Poll_timeout_ms);

  req.on("close", () => {
    finished = true;
    if (intervalId) clearInterval(intervalId);
    if (timeoutId) clearTimeout(timeoutId);
  });
});

router.get("/polls/:id", async (req, res) => {
  try {
    const data = await Poll.findByPk(req.params.id, {
      include: { model: Option, include: Vote },
    });
    res.json(data);
  } catch (err) {
    console.error("Error fetching poll:", err);
    res.status(500).json({ error: "Failed to fetch polls" });
  }
});

router.patch("/polls/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const poll = await Poll.findByPk(req.params.id);

    if (!poll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    poll.status = status;
    await poll.save();

    res.json(poll);
  } catch (err) {
    console.error("Error patching poll:", err);
    res.status(500).json({ error: "Failed to patch polls" });
  }
});

router.post("/polls", async (req, res) => {
  try {
    const { title, description, options } = req.body;

    if (
      !title ||
      !Array.isArray(options) ||
      options.length < 2 ||
      options.length > 5
    ) {
      return res
        .status(400)
        .json({ error: "At least two options and no more than 5" });
    }

    const poll = await Poll.create({ title, description });

    const createdOptions = await Promise.all(
      options.map((text) => Option.create({ text, PollId: poll.id })),
    );

    res.status(201).json({ ...poll.toJSON(), options: createdOptions });
  } catch (err) {
    console.error("Error creating poll:", err);
    res.status(500).json({ error: "Failed to create poll" });
  }
});

router.delete("/polls/:id", async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.id);
    if (!poll) return res.status(400).json({ error: "Polls does not exist" });

    await poll.destroy();
    res.status(200).json({ message: "Poll deleted" });
  } catch (err) {
    console.error("Error deleting poll:", err);
    res.status(500).json({ error: "Failed to delete poll" });
  }
});

module.exports = router;
