#!/usr/bin/env node
const { Command } = require("commander");
const chalk = require("chalk");
const axios = require("axios");
console.log(chalk.red("Hello"));
console.log(chalk.green("Kundan"));
const api = "https://zenquotes.io/api/random";
const program = new Command();
program.command(`greet <name>`).action((name) => {
    console.log(`Hello ${name}`);
});
program.command("add <n1> <n2>").description("ADD 2 Numbers").action((n1, n2) => {
    console.log(Number(n1) + Number(n2));
});
program.command("random").description("Generates a random number between 1 and 1000").action(() => {
    console.log(Math.floor(Math.random() * 100) + 1);
});
program.command("style <name>").action((name) => {
    console.log(`\x1b[31mHello ${name} 🚀\x1b[0m`);
});
program.command("joke").description("Generate Random Joke").action(async () => {
    try {
        const res = await axios.get(api);
        // console.log(res)
        const setup = res.data;
        console.log(setup);
        // const punchline = res.data.a
        // console.log(`Setup: ${setup}`)
        // console.log(`Punchline: ${punchline}`)
    }
    catch (error) {
        console.log(error);
    }
});
program.parse();
