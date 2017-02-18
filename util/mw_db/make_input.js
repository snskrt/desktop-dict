'use strict';

const readline = require('readline');
const fs = require('fs');
const os = require('os');

const makeInput = (pathToXml, pathToInputFile) => {
    if (fs.existsSync(pathToInputFile)) {
        fs.unlink(pathToInputFile);
    }

    const rl = readline.createInterface({
        input: fs.createReadStream(pathToXml)
    });

    rl.on('line', function (line) {
        line.trim();
        if (!line.match(/^<H/)) {
            return;
        }

        const match = line.match(/<key1>(.*?)<\/key1>.*<L.*?>(.*?)<\/L>/);
        if (!match) {
            console.error(`Could not find key1, lnum from line ${line}`);
        }

        const key1 = match[1];
        const lnum = match[2];
        const out = `${key1}\t${lnum}\t${line}${os.EOL}`;

        fs.appendFile(pathToInputFile, out);
    });
};

let pathToXml = process.argv[2];
let pathToInputFile = process.argv[3];

makeInput(pathToXml, pathToInputFile);
