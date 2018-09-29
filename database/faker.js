var faker = require('faker');
var fs = require('fs');
var writeStream = fs.createWriteStream('./prodSqlData.tsv', {'flags': 'a'});
writeStream.once('open', (fd) => {
  for (var j = 0; j < 200000; j++) {
    var prodStr = `${j + 1}\t${faker.random.number(50)}\t${faker.random.number(50)}\t${faker.random.number(50)}\t${faker.random.number(50)}\t${faker.random.number(50)}\t${faker.random.boolean()}\t${faker.random.word()}\t${[faker.random.words(10),faker.random.words(10),faker.random.words(10)]}\t${[faker.random.words(25),faker.random.words(25),faker.random.words(25)]}\t${[faker.random.words(10),faker.random.words(10)]}\t${[faker.random.word()]}\t${[faker.random.word(),faker.random.word()]}\t${[faker.random.word(),faker.random.word(),faker.random.word()]}\t${faker.random.word() + '.ppt'}\t${faker.random.word()+ '.xls'}\t${faker.random.number(50)}\t${faker.random.number(10000)}\t${faker.random.number(200)}\t${faker.random.number(200)}\t${faker.random.number(200)}\t${faker.random.number(50)}`
    // var revStr = `${j + 1},${faker.random.number(5)},${faker.random.words(10)},${faker.random.words(1)},${faker.date.between("2018-06-12T20:57:00.212Z","2018-09-24T20:57:00.212Z").toString()},${faker.random.boolean()},${faker.random.number(300)},${faker.random.number(300)},${faker.random.number(5)},${faker.random.number(5)},${faker.random.number(5)},${faker.random.number(5)},${faker.random.number(5)},${faker.internet.userName()}`
    writeStream.write(prodStr + '\n');
    if (j % 10000 === 0) {
      console.log(j);
    }
  }
  writeStream.end();
})
