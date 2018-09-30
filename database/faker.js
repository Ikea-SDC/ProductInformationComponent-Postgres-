var faker = require('faker');
var fs = require('fs');
var timer = require('performance-now');
var writeStream = fs.createWriteStream('./revSqlData.tsv', {'flags': 'a'});
// writeStream.once('open', (fd) => {
//   for (var j = 0; j < 5000000; j++) {
//     var prodStr = `${j + 1}\t${Math.floor(Math.random() * 51)}\t${Math.floor(Math.random() * 51)}\t${Math.floor(Math.random() * 51)}\t${Math.floor(Math.random() * 51)}\t${Math.floor(Math.random() * 51)}\t${faker.random.boolean()}\t${faker.random.word()}\t{${[faker.random.words(10),faker.random.words(10),faker.random.words(10)]}}\t{${[faker.random.words(25),faker.random.words(25),faker.random.words(25)]}}\t{${[faker.random.words(10),faker.random.words(10)]}}\t{${[faker.random.word()]}}\t{${[faker.random.word(),faker.random.word()]}}\t{${[faker.random.word(),faker.random.word(),faker.random.word()]}}\t${faker.random.word() + '.ppt'}\t${faker.random.word()+ '.xls'}\t${Math.floor(Math.random() * 51)}\t${Math.floor(Math.random() * 10000)}\t${Math.floor(Math.random() * 201)}\t${Math.floor(Math.random() * 201)}\t${Math.floor(Math.random() * 201)}\t${Math.floor(Math.random() * 51)}`
//     var revStr = `${j + 1}\t${Math.floor(Math.random() * 6)}\t${faker.random.words(10)}\t${faker.random.words(1)}\t${faker.date.between("2018-06-12T20:57:00.212Z","2018-09-24T20:57:00.212Z").toString()}\t${faker.random.boolean()}\t${Math.floor(Math.random() * 301)}\t${Math.floor(Math.random() * 301)}\t${Math.floor(Math.random() * 6)}\t${Math.floor(Math.random() * 6)}\t${Math.floor(Math.random() * 6)}\t${Math.floor(Math.random() * 6)}\t${Math.floor(Math.random() * 6)}\t${faker.internet.userName()}`
//     writeStream.write(prodStr + '\n');
//     if (j % 10000 === 0) {
//       console.log(j);
//     }
//   }
//   writeStream.end();
// })

let i = 0;
write();
function write() {
  let ok = true;
  let start = timer();
  do {
    i++;
    var data = `${i + 1}\t${Math.floor(Math.random() * 6)}\t${faker.random.words(10)}\t${faker.random.words(1)}\t${faker.date.between("2018-06-12T20:57:00.212Z","2018-09-24T20:57:00.212Z").toString()}\t${faker.random.boolean()}\t${Math.floor(Math.random() * 301)}\t${Math.floor(Math.random() * 301)}\t${Math.floor(Math.random() * 6)}\t${Math.floor(Math.random() * 6)}\t${Math.floor(Math.random() * 6)}\t${Math.floor(Math.random() * 6)}\t${Math.floor(Math.random() * 6)}\t${faker.internet.userName()}\n`
    if (i === 5000000) {
      // last time!
      writeStream.write(data, 'utf8', () => {
        let end = timer();
        console.log('total time ran: ', (end - start) / 1000)
      });
    } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
      ok = writeStream.write(data, 'utf8');
    }
    if (i % 50000 === 0) {
      console.log(i);
    }
  } while (i < 5000000 && ok);
  if (i < 5000000) {
    // had to stop early!
    // write some more once it drains
    writeStream.once('drain', write);
  }
}