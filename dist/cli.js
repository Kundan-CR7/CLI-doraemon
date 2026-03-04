#!/usr/bin/env node
const { Command } = require("commander");
const fs = require("fs");
const program = new Command();
program
    .command("add <n1> <n2>")
    .description("Add two numbers")
    .action((n1, n2) => {
    console.log(Number(n1) + Number(n2));
});
program
    .command("subtract <n1> <n2>")
    .description("Subtract second number from first")
    .action((n1, n2) => {
    console.log(Number(n1) - Number(n2));
});
program
    .command("interest <principal> <rate> <time>")
    .description("Calculate simple interest")
    .action((principal, rate, time) => {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);
    console.log((p * r * t) / 100);
});
program
    .command("validate-phone <phone>")
    .description("Validate if a string is a standard 10-digit phone number")
    .action((phone) => {
    const isValid = /^\d{10}$/.test(phone);
    console.log(isValid ? "Valid phone number" : "Invalid phone number");
});
program
    .command("validate-email <email>")
    .description("Validate email address format")
    .action((email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    console.log(isValid ? "Valid email address" : "Invalid email address");
});
program
    .command("time")
    .description("Get current time")
    .action(() => {
    console.log(new Date().toLocaleTimeString());
});
program
    .command("file-info <filepath>")
    .description("Read file and display basic file info with its content")
    .action((filepath) => {
    try {
        const stats = fs.statSync(filepath);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created: ${stats.birthtime}`);
        console.log(`\nContent:\n${fs.readFileSync(filepath, "utf8")}`);
    }
    catch (err) {
        console.error("Error reading file:", err.message);
    }
});
program
    .command("random <min> <max>")
    .description("Generate a random number between min and max")
    .action((min, max) => {
    const minNum = Math.ceil(Number(min));
    const maxNum = Math.floor(Number(max));
    console.log(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
});
program
    .command("encode-base64 <data>")
    .description("Convert string or number to base64")
    .action((data) => {
    console.log(Buffer.from(data).toString("base64"));
});
program
    .command("decode-base64 <data>")
    .description("Decode base64 string")
    .action((data) => {
    console.log(Buffer.from(data, "base64").toString("utf-8"));
});
program
    .command("crypto <coin>")
    .description("Get cryptocurrency price in USD")
    .action(async (coin) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.toLowerCase()}&vs_currencies=usd`);
        const data = await response.json();
        if (data[coin.toLowerCase()] && data[coin.toLowerCase()].usd) {
            console.log(`Current price of ${coin}: $${data[coin.toLowerCase()].usd}`);
        }
        else {
            console.log(`Could not find price for ${coin}. Ensure you use the full coin name (e.g., bitcoin) or correct ID.`);
        }
    }
    catch (error) {
        console.error("Error fetching crypto data:", error.message);
    }
});
program
    .command("country <name>")
    .description("Get country information")
    .action(async (name) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            const country = data[0];
            console.log(`Name: ${country.name.common}`);
            console.log(`Capital: ${country.capital ? country.capital[0] : 'N/A'}`);
            console.log(`Region: ${country.region}`);
            console.log(`Population: ${country.population.toLocaleString()}`);
        }
        else {
            console.log(`Could not find country: ${name}`);
        }
    }
    catch (error) {
        console.error("Error fetching country data:", error.message);
    }
});
program
    .command("ip")
    .description("Get your public IP address")
    .action(async () => {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        console.log(`Your IP Address is: ${data.ip}`);
    }
    catch (error) {
        console.error("Error fetching IP:", error.message);
    }
});
program.parse();
