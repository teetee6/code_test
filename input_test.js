// https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/
const start = performance.now();
/*
source file: 94MB
default heap memory usage : 3.78MB
default execution time : 0.00384s
*/


//// 1. readFileSync (225MB, 15.62s) - buffering whole file in memory (no recommend)
// const fs = require('fs');

// const allFileContents = fs.readFileSync('broadband.sql', 'utf-8'); // 798184 lines
// allFileContents.split(/\r?\n/).forEach(line =>  {
//   console.log(`Line from file: ${line}`);
// });

// console.log('------------------');
// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// const end = performance.now();
// console.log(
//     `Execution time: ${(end - start).toFixed(5)}ms` + 
//     `(${((end - start) / 1000).toFixed(5)} s)`
// );


//// 2. event - readline (4.96MB, 15.29s) - read from stream
// const events = require('events');
// const fs = require('fs');
// const readline = require('readline');

// (async function processLineByLine() {
//   try {
//     const rl = readline.createInterface({
//       input: fs.createReadStream('broadband.sql'),
//       crlfDelay: Infinity
//     });

//     // for await (const line of rl) { 사용해도 됨
//     rl.on('line', (line) => {
//       console.log(`Line from file: ${line}`);
//     });

//     await events.once(rl, 'close');

//     console.log('------------------');
//     const used = process.memoryUsage().heapUsed / 1024 / 1024;
//     console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
//     const end = performance.now();
//     console.log(
//         `Execution time: ${(end - start).toFixed(5)}ms` + 
//         `(${((end - start) / 1000).toFixed(5)} s)`
//     );
//   } catch (err) {
//     console.error(err);
//   }
// })();

//// 3. n-readlines (14.47MB, 16s) - read the file’s content in chunks using Buffer(no stream) 
//// npm i --save n-readlines
// const nReadlines = require('n-readlines');
// const broadbandLines = new nReadlines('broadband.sql');

// let line;
// let lineNumber = 1;

// while (line = broadbandLines.next()) {
//     console.log(`Line ${lineNumber} has: ${line.toString('ascii')}`);
//     lineNumber++;
// }

// console.log('------------------');
// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// const end = performance.now();
// console.log(
//     `Execution time: ${(end - start).toFixed(5)}ms` + 
//     `(${((end - start) / 1000).toFixed(5)} s)`
// );

//// 4. line-reader (4.72MB, 34s) - “Asynchronous, buffered, line-by-line file/stream reader with support for user-defined line separators.”
//// npm i --save line-reader
const lineReader = require('line-reader');

lineReader.eachLine('broadband.sql', function(line, last) { // async
  console.log(`Line from file: ${line}`);
  if(last) {
    console.log('------------------');
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    const end = performance.now();
    console.log(
        `Execution time: ${(end - start).toFixed(5)}ms` + 
        `(${((end - start) / 1000).toFixed(5)} s)`
    );
  }
});