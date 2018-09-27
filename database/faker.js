var faker = require('faker');
var {product, reviews} = require('./models.js');
var counter = 1;
for (var i = 0; i < 10; i++) {
  var prodArr = [];
  var revArr = [];
  for (var j = 0; j < 1; j++) {
    var prodObj = {
      productId: counter,
      product_info: {
        product_dimensions: {
          max: faker.random.number(50),
          width: faker.random.number(50),
          diameter: faker.random.number(50),
          cord_length: faker.random.number(50),
          power: faker.random.number(50),
          assembly: faker.random.boolean(),
          designer: faker.random.word()
        },
        bullets: [
          faker.random.words(10),
          faker.random.words(10),
          faker.random.words(10),
        ],
        good_to_know: [
          faker.random.words(25),
          faker.random.words(25),
          faker.random.words(25),
        ],
        care_instructions: [
          faker.random.words(10),
          faker.random.words(10),
        ]
      },
      materials_env: {
        weight: [faker.random.word()],
        shade: [faker.random.word(),faker.random.word()],
        tube: [faker.random.word(),faker.random.word(),faker.random.word()]
      },
      assembly_docs: {
        instructions: faker.random.word() + '.ppt',
        manual: faker.random.word()+ '.xls'
      },
      package_details: {
        article_number: faker.random.number(50),
        packages: faker.random.number(10000),
        width: faker.random.number(200),
        height: faker.random.number(200),
        length: faker.random.number(200),
        weight: faker.random.number(50)
      }
    }

    var revObj = {
      productId: counter,
      rating: faker.random.number(5),
      review_body: faker.random.words(10),
      review_title: faker.random.words(1),
      created_at: faker.date.between("2018-06-12T20:57:00.212Z","2018-09-24T20:57:00.212Z").toString(),
      recommended: faker.random.boolean(),
      helpful: { yes: faker.random.number(300), no: faker.random.number(300) },
      specifics: {
        value: faker.random.number(5),
        quality: faker.random.number(5),
        appearance: faker.random.number(5),
        ease: faker.random.number(5),
        expected: faker.random.number(5)
      },
      username: faker.internet.userName()
    }
    prodArr.push(prodObj);
    revArr.push(revObj);
    counter++;
  }
  console.log(counter);
  product.collection.insertMany(prodArr, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Added products successfully!')
    }
  });
  
  reviews.collection.insertMany(revArr, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Added reviews successfully!');
    }
  });

}