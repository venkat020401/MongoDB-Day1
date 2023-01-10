//Day 1 MongoDB Task

//Find all the information about each products
db.datas.find();

//Find the product price which are between 400 to 800
db.datas.find({ product_price:{$gte:400,$lte:800}});

//Find the product price which are not between 400 to 600
db.datas.find( { product_price: { $not: { $gte:400,$lte:800 }}});

//List the four product which are grater than 500 in price
db.datas.find({ product_price:{$gte:500}},{product_name:4, product_price:4});

//Find the product name and product material of each products
db.datas.find({},{product_name:1,product_material:1});

//Find the product with a row id of 10
db.datas.find({id:'10'});

//Find only the product name and product material
db.datas.find({},{product_name:1,product_material:1});

//Find all products which contain the value of soft in product material 
db.datas.find({product_material: 'Soft'});

//Find products which contain product color indigo  and product price 492.00
 db.datas.find({product_color:'indigo',product_price:492});
 
//Delete the products which product price value are same
//Step 1 - find the product id which product price value are same
db.datas.aggregate([
   {
    '$group': {
       '_id': '$product_price',
       'count': {
        '$count': {}
       }
     }
   }, 
   {
     '$match': {
      'count': {
         '$gt': 1
       }
     }
   }
 ]);
//Step 2 - Delete the products which products find in step 1
db.datas.deleteMany({product_price:{$in:[47,36]}});