const fs = require("fs");

// ? FLOWING MODE.

const streamReadFile = fs.createReadStream("playvideo.mp4");

let totalRead = 0;
let totalBytes = 0;

streamReadFile.on("data", (chunk) => {
  totalRead++;
  totalBytes += chunk.length;
  console.log(`${chunk.length} bytes lidos`);
});
streamReadFile.on("end", (chunk) =>
  console.log(`Fim - ${totalRead} leitura/${totalBytes} bytes.`)
);

process.stdin.on("data", (data) => {
  console.log(data);
});
