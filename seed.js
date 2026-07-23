// seed.js
const { db, Poll, Option, Vote } = require('./database_scripts/index');

async function seed() {
    try {
        await db.sync({ force: true });

        const poll1 = await Poll.create({
            title: 'Favorite programming language?',
            description: 'Pick the one you enjoy writing the most.',
        });

        const [js, py, go] = await Promise.all([
            Option.create({ text: 'JavaScript', PollId: poll1.id }),
            Option.create({ text: 'Python', PollId: poll1.id }),
            Option.create({ text: 'Go', PollId: poll1.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: js.id }),
            Vote.create({ OptionId: js.id }),
            Vote.create({ OptionId: py.id }),
            Vote.create({ OptionId: go.id }),
            Vote.create({ OptionId: js.id }),
        ]);

        const poll2 = await Poll.create({
            title: 'Best time for the team meeting?',
        });

        const [morning, afternoon] = await Promise.all([
            Option.create({ text: '10:00 AM', PollId: poll2.id }),
            Option.create({ text: '2:00 PM', PollId: poll2.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: morning.id }),
            Vote.create({ OptionId: afternoon.id }),
            Vote.create({ OptionId: afternoon.id }),
        ]);

        const poll3 = await Poll.create({ title: 'Favorite database?' });

        const [mysql, postgres, sqlite, mongodb] = await Promise.all([
            Option.create({ text: 'MySQL', PollId: poll3.id }),
            Option.create({ text: 'PostgreSQL', PollId: poll3.id }),
            Option.create({ text: 'SQLite', PollId: poll3.id }),
            Option.create({ text: 'MongoDB', PollId: poll3.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: mysql.id }),
            Vote.create({ OptionId: postgres.id }),
            Vote.create({ OptionId: postgres.id }),
            Vote.create({ OptionId: sqlite.id }),
            Vote.create({ OptionId: mongodb.id }),
            Vote.create({ OptionId: postgres.id }),
            Vote.create({ OptionId: mysql.id }),
            Vote.create({ OptionId: postgres.id }),
        ]);

        const poll4 = await Poll.create({ title: 'Preferred code editor?' });

        const [vscode, intellij, vim, sublime] = await Promise.all([
            Option.create({ text: 'VS Code', PollId: poll4.id }),
            Option.create({ text: 'IntelliJ IDEA', PollId: poll4.id }),
            Option.create({ text: 'Vim', PollId: poll4.id }),
            Option.create({ text: 'Sublime Text', PollId: poll4.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: vscode.id }),
            Vote.create({ OptionId: vscode.id }),
            Vote.create({ OptionId: vscode.id }),
            Vote.create({ OptionId: vscode.id }),
            Vote.create({ OptionId: intellij.id }),
            Vote.create({ OptionId: vim.id }),
            Vote.create({ OptionId: vscode.id }),
            Vote.create({ OptionId: sublime.id }),
            Vote.create({ OptionId: intellij.id }),
            Vote.create({ OptionId: vscode.id }),
        ]);

        const poll5 = await Poll.create({ title: 'Favorite operating system?' });

        const [windows, linux, macos] = await Promise.all([
            Option.create({ text: 'Windows', PollId: poll5.id }),
            Option.create({ text: 'Linux', PollId: poll5.id }),
            Option.create({ text: 'macOS', PollId: poll5.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: linux.id }),
            Vote.create({ OptionId: linux.id }),
            Vote.create({ OptionId: windows.id }),
            Vote.create({ OptionId: macos.id }),
            Vote.create({ OptionId: linux.id }),
            Vote.create({ OptionId: windows.id }),
            Vote.create({ OptionId: linux.id }),
        ]);

        const poll6 = await Poll.create({ title: 'Favorite frontend framework?' });

        const [react, vue, angular, svelte] = await Promise.all([
            Option.create({ text: 'React', PollId: poll6.id }),
            Option.create({ text: 'Vue', PollId: poll6.id }),
            Option.create({ text: 'Angular', PollId: poll6.id }),
            Option.create({ text: 'Svelte', PollId: poll6.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: react.id }),
            Vote.create({ OptionId: react.id }),
            Vote.create({ OptionId: react.id }),
            Vote.create({ OptionId: vue.id }),
            Vote.create({ OptionId: angular.id }),
            Vote.create({ OptionId: react.id }),
            Vote.create({ OptionId: svelte.id }),
            Vote.create({ OptionId: react.id }),
            Vote.create({ OptionId: vue.id }),
            Vote.create({ OptionId: react.id }),
            Vote.create({ OptionId: react.id }),
            Vote.create({ OptionId: angular.id }),
        ]);

        const poll7 = await Poll.create({ title: 'Favorite beverage?' });

        const [coffee, tea, juice, soda, water] = await Promise.all([
            Option.create({ text: 'Coffee', PollId: poll7.id }),
            Option.create({ text: 'Tea', PollId: poll7.id }),
            Option.create({ text: 'Juice', PollId: poll7.id }),
            Option.create({ text: 'Soda', PollId: poll7.id }),
            Option.create({ text: 'Water', PollId: poll7.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: coffee.id }),
            Vote.create({ OptionId: coffee.id }),
            Vote.create({ OptionId: tea.id }),
            Vote.create({ OptionId: water.id }),
            Vote.create({ OptionId: coffee.id }),
            Vote.create({ OptionId: soda.id }),
            Vote.create({ OptionId: juice.id }),
            Vote.create({ OptionId: water.id }),
            Vote.create({ OptionId: coffee.id }),
        ]);

        const poll8 = await Poll.create({ title: 'Preferred mobile platform?' });

        const [android, ios, other] = await Promise.all([
            Option.create({ text: 'Android', PollId: poll8.id }),
            Option.create({ text: 'iOS', PollId: poll8.id }),
            Option.create({ text: 'Other', PollId: poll8.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: android.id }),
            Vote.create({ OptionId: android.id }),
            Vote.create({ OptionId: ios.id }),
            Vote.create({ OptionId: android.id }),
            Vote.create({ OptionId: ios.id }),
            Vote.create({ OptionId: other.id }),
            Vote.create({ OptionId: android.id }),
            Vote.create({ OptionId: android.id }),
            Vote.create({ OptionId: ios.id }),
            Vote.create({ OptionId: android.id }),
            Vote.create({ OptionId: android.id }),
        ]);

        const poll9 = await Poll.create({ title: 'Favorite season?' });

        const [spring, summer, autumn, winter] = await Promise.all([
            Option.create({ text: 'Spring', PollId: poll9.id }),
            Option.create({ text: 'Summer', PollId: poll9.id }),
            Option.create({ text: 'Autumn', PollId: poll9.id }),
            Option.create({ text: 'Winter', PollId: poll9.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: spring.id }),
            Vote.create({ OptionId: summer.id }),
            Vote.create({ OptionId: autumn.id }),
            Vote.create({ OptionId: winter.id }),
            Vote.create({ OptionId: winter.id }),
            Vote.create({ OptionId: autumn.id }),
            Vote.create({ OptionId: summer.id }),
            Vote.create({ OptionId: winter.id }),
        ]);

        const poll10 = await Poll.create({ title: 'Favorite cloud provider?' });

        const [aws, azure, gcp] = await Promise.all([
            Option.create({ text: 'AWS', PollId: poll10.id }),
            Option.create({ text: 'Azure', PollId: poll10.id }),
            Option.create({ text: 'Google Cloud', PollId: poll10.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: aws.id }),
            Vote.create({ OptionId: aws.id }),
            Vote.create({ OptionId: azure.id }),
            Vote.create({ OptionId: gcp.id }),
            Vote.create({ OptionId: aws.id }),
            Vote.create({ OptionId: azure.id }),
            Vote.create({ OptionId: aws.id }),
            Vote.create({ OptionId: gcp.id }),
            Vote.create({ OptionId: aws.id }),
            Vote.create({ OptionId: aws.id }),
            Vote.create({ OptionId: azure.id }),
            Vote.create({ OptionId: aws.id }),
            Vote.create({ OptionId: gcp.id }),
            Vote.create({ OptionId: aws.id }),
        ]);

        const poll11 = await Poll.create({ title: 'Favorite learning platform?' });

        const [youtube, udemy, coursera, freecodecamp] = await Promise.all([
            Option.create({ text: 'YouTube', PollId: poll11.id }),
            Option.create({ text: 'Udemy', PollId: poll11.id }),
            Option.create({ text: 'Coursera', PollId: poll11.id }),
            Option.create({ text: 'freeCodeCamp', PollId: poll11.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: youtube.id }),
            Vote.create({ OptionId: youtube.id }),
            Vote.create({ OptionId: freecodecamp.id }),
            Vote.create({ OptionId: coursera.id }),
            Vote.create({ OptionId: udemy.id }),
            Vote.create({ OptionId: youtube.id }),
            Vote.create({ OptionId: freecodecamp.id }),
            Vote.create({ OptionId: youtube.id }),
            Vote.create({ OptionId: udemy.id }),
        ]);

        const poll12 = await Poll.create({ title: 'Preferred work style?' });

        const [remote, hybrid, onsite] = await Promise.all([
            Option.create({ text: 'Remote', PollId: poll12.id }),
            Option.create({ text: 'Hybrid', PollId: poll12.id }),
            Option.create({ text: 'On-site', PollId: poll12.id }),
        ]);

        await Promise.all([
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: hybrid.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: onsite.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: hybrid.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: onsite.id }),
            Vote.create({ OptionId: hybrid.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: hybrid.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: onsite.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: hybrid.id }),
            Vote.create({ OptionId: remote.id }),
            Vote.create({ OptionId: remote.id }),
        ]);

        console.log('✅ Seed data created successfully.');
    } catch (err) {
        console.error('❌ Error seeding data:', err);
    } finally {
        await db.close();
    }
}

seed();