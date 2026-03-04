# Doraemon CLI Utility

Doraemon is a simple Command Line Interface (CLI) tool built using Node.js and TypeScript.  
It provides several useful commands that can perform mathematical calculations, validate inputs, read file details, generate random numbers, and fetch live information such as cryptocurrency prices, country data, and your public IP address.

## Requirements

Before running this project, ensure that the following are installed on your system:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

Download Node.js from: https://nodejs.org

## Installation

### 1. Clone the repository

git clone https://github.com/Kundan-CR7/CLI-doraemon
cd ssedworkshop-2

### 2. Install dependencies

npm install

### 3. Compile the TypeScript files

npx tsc

### 4. Link the CLI globally (optional)

npm link

After linking, you can use the CLI from anywhere using the command **doraemon**.

## Available Commands

| Command | Description | Example |
|------|------|------|
| add <a> <b> | Adds two numbers | doraemon add 4 6 |
| subtract <a> <b> | Subtracts the second number from the first | doraemon subtract 10 3 |
| interest <p> <r> <t> | Calculates simple interest | doraemon interest 2000 5 2 |
| validate-phone <number> | Checks if a phone number has 10 digits | doraemon validate-phone 9876543210 |
| validate-email <email> | Validates email format | doraemon validate-email user@mail.com |
| time | Shows the current system time | doraemon time |
| file-info <filePath> | Displays file details and contents | doraemon file-info ./package.json |
| random <min> <max> | Generates a random number between min and max | doraemon random 1 50 |
| encode-base64 <text> | Converts text into Base64 | doraemon encode-base64 "hello" |
| decode-base64 <text> | Decodes Base64 text | doraemon decode-base64 "aGVsbG8=" |
| crypto <coin> | Fetches the price of a cryptocurrency in USD | doraemon crypto bitcoin |
| country <name> | Shows basic information about a country | doraemon country japan |
| ip | Displays your public IP address | doraemon ip |

## Running Without Global Link

If you did not run `npm link`, you can still run the CLI using:

node dist/index.js add 5 7

or

npx ts-node index.ts

## Help

To see all available commands and options, run:

doraemon --help

## About

This project was developed as part of a CLI development workshop to demonstrate how command line tools can be built using Node.js and TypeScript.
EOF