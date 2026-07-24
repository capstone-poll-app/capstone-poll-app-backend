const cron = require("node-cron");
const { Op } = require("sequelize");
const { Poll } = require("../database_scripts/index");

function startPollExpiryJob() {
  cron.schedule("* * * * *", async () => {
    try {
      const cutoff = new Date(Date.now() - 24* 60* 60 * 1000);

      const [affectedCount] = await Poll.update(
        { status: false },
        {
          where: {
            status: true,
            createdAt: { [Op.lte]: cutoff },
          },
        },
      );

      if(affectedCount > 0){
        console.log(`Closed ${affectedCount} expired polls`);
      }
    } catch (err) {
        console.error("Error closing expired polls: ", err)
    }
  });

  console.log("Poll expiry scheduled")
}

module.exports = startPollExpiryJob;
