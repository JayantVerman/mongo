// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url,{useNewUrlParser:true});

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   console.log("Connected successfully to server");
//   assert.equal(null, err);

//   const db = client.db(dbName);

//   client.close();
// });





// const { MongoClient } = require('mongodb');
// const assert = require('assert');
// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Connect to the MongoDB server
// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected successfully to MongoDB');

//     // Perform database operations here

//     // Close the connection when you're done
//     const db =client.db(dbName);
//     insertDocuments(db,function(){
//       client.close();
//     });
//     console.log('Connection closed');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }

// connectToDatabase();


// const insertDocuments=function(db,callback){
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {name:"apple",quantity:5,price:4,review: "best"},
//     {name:"Orange",quantity:4,price:3,review: "better"},
//     {name:"Banana",quantity:3,price:2,review: "good"}
 
//   ],function(err,result){
//     assert.equal(err,null);
//     assert.equal(3,result.result.n);
//     assert.equal(3,result.ops.length);
//     console.log("Inserted 3 Documents into the collection");
//     callback(result);
//   });
//   }


// // this is third code in this i am using the callback function which is not executing
// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';

// // Database Name
// const dbName = 'clothesDB';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Connect to the MongoDB server
// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected successfully to MongoDB');

//     const db = client.db(dbName);

//     // Perform database operations here
//     insertDocuments(db, function () {
//       client.close();
//     });
//     console.log('Connection closed');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }

// connectToDatabase();

// const insertDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection('clothes');
//   // Insert some documents
//   collection.insertMany([
//     { name: "apple", quantity: 5, price: 4, review: "best" },
//     { name: "Orange", quantity: 4, price: 3, review: "better" },
//     { name: "Banana", quantity: 3, price: 2, review: "good" }
//   ], function (err, result) {
//     if (err) {
//       console.error('Error inserting documents:', err);
//     } else {
//       console.log("Inserted", result.insertedCount, "documents into the collection");
//       callback(result);
//     }
//   });
// }





// //fourth code
// //this code is working in all the way and instead of callback we are using here async and wait function

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Connect to the MongoDB server
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);

    // Perform database insertion operations here
    // await insertDocuments(db);
    // console.log('Documents inserted successfully');


    // Perform database display in console operations here
    await displayDocuments(db, 'fruits');

    // Close the connection when you're done
    client.close();
    console.log('Connection closed');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToDatabase();

// // for the insertions of the data in the collectioins
const insertDocuments = async function (db) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  try {
    const result = await collection.insertMany([
      { name: "apple", quantity: 5, price: 4, review: "best" },
      { name: "Orange", quantity: 4, price: 3, review: "better" },
      { name: "Banana", quantity: 3, price: 2, review: "good" }
    ]);
    console.log("Inserted", result.insertedCount, "documents into the collection");
  } catch (err) {
    console.error('Error inserting documents:', err);
  }
};

  
// //for seeing the data of collections int he console
async function displayDocuments(db, collectionName) {
  try {
    const collection = db.collection(collectionName);
    const documents = await collection.find({}).toArray();
    console.log(`Documents in collection '${collectionName}':`);
    console.log(documents);
  } catch (err) {
    console.error('Error retrieving documents:', err);
  }
}






//working but having some issues but this code is using assert for validation and tesing

// const { MongoClient } = require('mongodb');
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';

// // Database Name
// const dbName = 'goodsDB';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Connect to the MongoDB server
// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected successfully to MongoDB');

//     const db = client.db(dbName);

//     // Perform database operations here
//     await insertDocuments(db);
//     console.log('Documents inserted successfully');

//     // Close the connection when you're done
//     client.close();
//     console.log('Connection closed');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }

// connectToDatabase();

// const insertDocuments = async function (db) {
//   try {
//     // Get the documents collection
//     const collection = db.collection('goodss');
//     // Insert some documents
//     const result = await collection.insertMany([
//       { name: "apple", quantity: 5, price: 4, review: "best" },
//       { name: "Orange", quantity: 4, price: 3, review: "better" },
//       { name: "Banana", quantity: 3, price: 2, review: "good" }
//     ]);
//     assert.equal(result.result.n, 3);
//     assert.equal(result.ops.length, 3);
//     console.log("Inserted 3 Documents into the collection");
//   } catch (err) {
//     console.error('Error inserting documents:', err);
//   }
// };









// //  this code is giving assertion error but documents inserted successfully

// const { MongoClient } = require('mongodb');
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';

// // Database Name
// const dbName = 'pattaDB';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Connect to the MongoDB server
// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected successfully to MongoDB');

//     const db = client.db(dbName);

//     // Perform database operations here
//     await insertDocuments(db);
//     console.log('Documents inserted successfully');

//     // Close the connection when you're done
//     client.close();
//     console.log('Connection closed');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }

// connectToDatabase();

// const insertDocuments = async function (db) {
//   try {
//     // Get the documents collection
//     const collection = db.collection('patta');
//     // Insert some documents
//     const result = await collection.insertMany([
//       { name: "apple", quantity: 5, price: 4, review: "best" },
//       { name: "Orange", quantity: 4, price: 3, review: "better" },
//       { name: "Banana", quantity: 3, price: 2, review: "good" }
//     ]);
//     assert.equal(result.insertedCount, 3);
//     assert.equal(result.insertedIds.length, 3);
//     console.log("Inserted 3 Documents into the collection");
//   } catch (err) {
//     console.error('Error inserting documents:', err);
//   }
// };







//these codes are not working well

// const { MongoClient } = require('mongodb');
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Connect to the MongoDB server
// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected successfully to MongoDB');

//     const db = client.db(dbName);

//     // Perform database operations here
//     const insertResult = await insertDocuments(db);
//     assert.equal(insertResult.result.n, 3);
//     console.log('Documents inserted successfully');

//     // Close the connection when you're done
//     client.close();
//     console.log('Connection closed');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }

// connectToDatabase();

// const insertDocuments = async function (db) {
//   try {
//     // Get the documents collection
//     const collection = db.collection('foo');
//     // Insert some documents
//     const result = await collection.insertMany([
//       { name: "apple", quantity: 5, price: 4, review: "best" },
//       { name: "Orange", quantity: 4, price: 3, review: "better" },
//       { name: "Banana", quantity: 3, price: 2, review: "good" }
//     ]);
//     return result;
//   } catch (err) {
//     console.error('Error inserting documents:', err);
//   }
// };
