import fs from "fs";

process.stdin.pipe(fs.createWriteStream("logs.txt"));
