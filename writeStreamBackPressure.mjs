import fs from "fs";

const readableFile = fs.createReadStream("playvideo.mp4", {
  highWaterMark: 1024 * 1024,
});
const writableFile = fs.createWriteStream("output.mp4");

let bytesCounter = 0;

readableFile.on("data", (chunk) => {
  bytesCounter += chunk.length;
  console.log(`${(chunk.length / 1024).toFixed(0)} KBytes readed...`);

  const result = writableFile.write(chunk);

  if (!result) {
    readableFile.pause();
  }
});

writableFile.on("drain", () => {
  console.log(`${(bytesCounter / 1024).toFixed(0)} KBytes writted...`);
  readableFile.resume();
});

readableFile.on("end", () => {
  console.log("Success: all bytes were been readed.");
  return writableFile.end();
});

writableFile.on("close", () =>
  console.log("Sucess: All bytes were been writted.")
);
