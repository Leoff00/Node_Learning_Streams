const fs = require("fs");

// ? PAUSED MODE.

const streamReadFile = fs.createReadStream("playvideo.mp4");

let totalRead = 0;
let totalBytes = 0;
streamReadFile.pause();
console.log(streamReadFile.isPaused());
streamReadFile.on("data", (chunk) => {
  totalRead++;
  totalBytes += chunk.length;
  console.log(`${chunk.length} bytes lidos`);
});

streamReadFile.on("end", (chunk) =>
  console.log(`fim - ${totalRead} leitura/${totalBytes} bytes.`)
);

process.stdin.on("data", (line) => {
  streamReadFile.read();
});
