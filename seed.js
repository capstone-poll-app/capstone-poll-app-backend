// seed.js
const { db, Poll, Option, Vote } = require('./database_scripts/index');

async function seed() {
    try {
        // WARNING: force:true drops and recreates all tables — dev/test only
        await db.sync({ force: true });

        const poll1 = await Poll.create({
            title: 'Favorite programming language?',
            description: 'Pick the one you enjoy writing the most.',
        });

        const [js, py, go] = await Promise.all([
            Option.create({ text: 'JavaScript', pollId: poll1.id }),
            Option.create({ text: 'Python', pollId: poll1.id }),
            Option.create({ text: 'Go', pollId: poll1.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: js.id }),
            Vote.create({ optionId: js.id }),
            Vote.create({ optionId: py.id }),
            Vote.create({ optionId: go.id }),
            Vote.create({ optionId: js.id }),
        ]);

        const poll2 = await Poll.create({
            title: 'Best time for the team meeting?',
        });

        const [morning, afternoon] = await Promise.all([
            Option.create({ text: '10:00 AM', pollId: poll2.id }),
            Option.create({ text: '2:00 PM', pollId: poll2.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: morning.id }),
            Vote.create({ optionId: afternoon.id }),
            Vote.create({ optionId: afternoon.id }),
        ]);

        // Poll 3
        const poll3 = await Poll.create({
            title: 'Favorite database?',
        });

        const [mysql, postgres, sqlite, mongodb] = await Promise.all([
            Option.create({ text: 'MySQL', pollId: poll3.id }),
            Option.create({ text: 'PostgreSQL', pollId: poll3.id }),
            Option.create({ text: 'SQLite', pollId: poll3.id }),
            Option.create({ text: 'MongoDB', pollId: poll3.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: mysql.id }),
            Vote.create({ optionId: postgres.id }),
            Vote.create({ optionId: postgres.id }),
            Vote.create({ optionId: sqlite.id }),
            Vote.create({ optionId: mongodb.id }),
            Vote.create({ optionId: postgres.id }),
            Vote.create({ optionId: mysql.id }),
            Vote.create({ optionId: postgres.id }),
        ]);

        // Poll 4
        const poll4 = await Poll.create({
            title: 'Preferred code editor?',
        });

        const [vscode, intellij, vim, sublime] = await Promise.all([
            Option.create({ text: 'VS Code', pollId: poll4.id }),
            Option.create({ text: 'IntelliJ IDEA', pollId: poll4.id }),
            Option.create({ text: 'Vim', pollId: poll4.id }),
            Option.create({ text: 'Sublime Text', pollId: poll4.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: vscode.id }),
            Vote.create({ optionId: vscode.id }),
            Vote.create({ optionId: vscode.id }),
            Vote.create({ optionId: vscode.id }),
            Vote.create({ optionId: intellij.id }),
            Vote.create({ optionId: vim.id }),
            Vote.create({ optionId: vscode.id }),
            Vote.create({ optionId: sublime.id }),
            Vote.create({ optionId: intellij.id }),
            Vote.create({ optionId: vscode.id }),
        ]);

        // Poll 5
        const poll5 = await Poll.create({
            title: 'Favorite operating system?',
        });

        const [windows, linux, macos] = await Promise.all([
            Option.create({ text: 'Windows', pollId: poll5.id }),
            Option.create({ text: 'Linux', pollId: poll5.id }),
            Option.create({ text: 'macOS', pollId: poll5.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: linux.id }),
            Vote.create({ optionId: linux.id }),
            Vote.create({ optionId: windows.id }),
            Vote.create({ optionId: macos.id }),
            Vote.create({ optionId: linux.id }),
            Vote.create({ optionId: windows.id }),
            Vote.create({ optionId: linux.id }),
        ]);

        // Poll 6
        const poll6 = await Poll.create({
            title: 'Favorite frontend framework?',
        });

        const [react, vue, angular, svelte] = await Promise.all([
            Option.create({ text: 'React', pollId: poll6.id }),
            Option.create({ text: 'Vue', pollId: poll6.id }),
            Option.create({ text: 'Angular', pollId: poll6.id }),
            Option.create({ text: 'Svelte', pollId: poll6.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: react.id }),
            Vote.create({ optionId: react.id }),
            Vote.create({ optionId: react.id }),
            Vote.create({ optionId: vue.id }),
            Vote.create({ optionId: angular.id }),
            Vote.create({ optionId: react.id }),
            Vote.create({ optionId: svelte.id }),
            Vote.create({ optionId: react.id }),
            Vote.create({ optionId: vue.id }),
            Vote.create({ optionId: react.id }),
            Vote.create({ optionId: react.id }),
            Vote.create({ optionId: angular.id }),
        ]);

        // Poll 7
        const poll7 = await Poll.create({
            title: 'Favorite beverage?',
        });

        const [coffee, tea, juice, soda, water] = await Promise.all([
            Option.create({ text: 'Coffee', pollId: poll7.id }),
            Option.create({ text: 'Tea', pollId: poll7.id }),
            Option.create({ text: 'Juice', pollId: poll7.id }),
            Option.create({ text: 'Soda', pollId: poll7.id }),
            Option.create({ text: 'Water', pollId: poll7.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: coffee.id }),
            Vote.create({ optionId: coffee.id }),
            Vote.create({ optionId: tea.id }),
            Vote.create({ optionId: water.id }),
            Vote.create({ optionId: coffee.id }),
            Vote.create({ optionId: soda.id }),
            Vote.create({ optionId: juice.id }),
            Vote.create({ optionId: water.id }),
            Vote.create({ optionId: coffee.id }),
        ]);

        // Poll 8
        const poll8 = await Poll.create({
            title: 'Preferred mobile platform?',
        });

        const [android, ios, other] = await Promise.all([
            Option.create({ text: 'Android', pollId: poll8.id }),
            Option.create({ text: 'iOS', pollId: poll8.id }),
            Option.create({ text: 'Other', pollId: poll8.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: android.id }),
            Vote.create({ optionId: android.id }),
            Vote.create({ optionId: ios.id }),
            Vote.create({ optionId: android.id }),
            Vote.create({ optionId: ios.id }),
            Vote.create({ optionId: other.id }),
            Vote.create({ optionId: android.id }),
            Vote.create({ optionId: android.id }),
            Vote.create({ optionId: ios.id }),
            Vote.create({ optionId: android.id }),
            Vote.create({ optionId: android.id }),
        ]);

        // Poll 9
        const poll9 = await Poll.create({
            title: 'Favorite season?',
        });

        const [spring, summer, autumn, winter] = await Promise.all([
            Option.create({ text: 'Spring', pollId: poll9.id }),
            Option.create({ text: 'Summer', pollId: poll9.id }),
            Option.create({ text: 'Autumn', pollId: poll9.id }),
            Option.create({ text: 'Winter', pollId: poll9.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: spring.id }),
            Vote.create({ optionId: summer.id }),
            Vote.create({ optionId: autumn.id }),
            Vote.create({ optionId: winter.id }),
            Vote.create({ optionId: winter.id }),
            Vote.create({ optionId: autumn.id }),
            Vote.create({ optionId: summer.id }),
            Vote.create({ optionId: winter.id }),
        ]);

        // Poll 10
        const poll10 = await Poll.create({
            title: 'Favorite cloud provider?',
        });

        const [aws, azure, gcp] = await Promise.all([
            Option.create({ text: 'AWS', pollId: poll10.id }),
            Option.create({ text: 'Azure', pollId: poll10.id }),
            Option.create({ text: 'Google Cloud', pollId: poll10.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: aws.id }),
            Vote.create({ optionId: aws.id }),
            Vote.create({ optionId: azure.id }),
            Vote.create({ optionId: gcp.id }),
            Vote.create({ optionId: aws.id }),
            Vote.create({ optionId: azure.id }),
            Vote.create({ optionId: aws.id }),
            Vote.create({ optionId: gcp.id }),
            Vote.create({ optionId: aws.id }),
            Vote.create({ optionId: aws.id }),
            Vote.create({ optionId: azure.id }),
            Vote.create({ optionId: aws.id }),
            Vote.create({ optionId: gcp.id }),
            Vote.create({ optionId: aws.id }),
        ]);

        // Poll 11
        const poll11 = await Poll.create({
            title: 'Favorite learning platform?',
        });

        const [youtube, udemy, coursera, freecodecamp] = await Promise.all([
            Option.create({ text: 'YouTube', pollId: poll11.id }),
            Option.create({ text: 'Udemy', pollId: poll11.id }),
            Option.create({ text: 'Coursera', pollId: poll11.id }),
            Option.create({ text: 'freeCodeCamp', pollId: poll11.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: youtube.id }),
            Vote.create({ optionId: youtube.id }),
            Vote.create({ optionId: freecodecamp.id }),
            Vote.create({ optionId: coursera.id }),
            Vote.create({ optionId: udemy.id }),
            Vote.create({ optionId: youtube.id }),
            Vote.create({ optionId: freecodecamp.id }),
            Vote.create({ optionId: youtube.id }),
            Vote.create({ optionId: udemy.id }),
        ]);

        // Poll 12
        const poll12 = await Poll.create({
            title: 'Preferred work style?',
        });

        const [remote, hybrid, onsite] = await Promise.all([
            Option.create({ text: 'Remote', pollId: poll12.id }),
            Option.create({ text: 'Hybrid', pollId: poll12.id }),
            Option.create({ text: 'On-site', pollId: poll12.id }),
        ]);

        await Promise.all([
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: hybrid.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: onsite.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: hybrid.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: onsite.id }),
            Vote.create({ optionId: hybrid.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: hybrid.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: onsite.id }),
            Vote.create({ optionId:remote.id }),
            Vote.create({ optionId: hybrid.id }),
            Vote.create({ optionId: remote.id }),
            Vote.create({ optionId: remote.id }),
        ]);

        console.log('✅ Seed data created successfully.');
    } catch (err) {
        console.error('❌ Error seeding data:', err);
    } finally {
        await db.close();
    }
}

seed();