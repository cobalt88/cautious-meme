const fs = require('fs');
const path = require('path')

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(__dirname, 'db', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if(!err) {
        products = JSON.parse(fileContent)
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.error(`Error encoutered in product-model save: ${err}`);
      })
    });
  };


  static fetchAll(cb) {
    const p = path.join(__dirname, 'db', 'products.json');
    fs.readFile(p, (err, fileContent) => {
      if(!err) {
        cb([])
      }
      cb(JSON.parse(fileContent));
    })
  }
}