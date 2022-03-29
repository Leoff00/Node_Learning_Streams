<h1 align="center"> Learning about NODE.JS Streams </h1>

## Methods used:

#
> createReadStream: 
Creates a Buffer from the file that you need to manipulate, example:

```
const readableStream = fs.createReadStream(foo.txt)

readableFile.on("data", (chunk) => {
  console.log(chunk // <Buffer: ...>, chunk.toString() // your buffer transformed to an type of data).
```

#

> createWriteStream: 
Creates any file with any extensions that can be readed, it work together the readableStream, example: 

```
readableFile.on("data", (chunk) => {
   writableFile.write(chunk);

   // write or overwrite in memory or in your disk the chunks processed, its an I/O of events.
});
```
#

<h3 align="center"> NodeJS Streams, read and write methods. </h3>
