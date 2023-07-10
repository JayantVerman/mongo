//mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
});

// // this is schema
const fruitSchema = new mongoose.Schema({
  name: {type:String,required:[true,"please check your data entry it is without name field which is required"]},
  rating: { type: Number, min: 1, max: 10 },
  review: String,
});

// // this is model
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "orange",
  rating: 7,
  review: "good orange are very sweet"
});

// fruit.save()
// .then(()=>{
//     mongoose.connection.close();
//     console.log("Closed succesfully");
// })
// .catch(error=>{
//     console.log('Error:', error);
// })

// // // for update
// //update a single document
// People.updateOne(
//     {name:"mohan"}, // filter condition
//     {favouriteFruit:fruit} //updated condition
// )
// .then(()=>{
//     console.log("successfullt updated");
//     mongoose.connection.close();
// })
// .catch(error=>{
//     console.log(`failed to upate ${error}`) ;
// })

// // update multiple documents
// Fruit.updateMany(
//     { rating: { $lt: 9 } }, // Filter condition
//     { $set: { review: "under rated fruits" } } // Updated fields
//   )
//     .then(()=> {
//       console.log('Documents updated successfully');
//     })
//     .catch(error => {
//       console.error('Error updating documents:', error);
//     });




// // // for Delete
// //Delete a single document
// Fruit.deleteOne({ name: 'Apple' }) // Filter condition
//   .then(result => {
//     if (result.deletedCount === 0) {
//       console.log('Document not found');
//     } else {
//       console.log('Document deleted successfully');
//     }
//   })
//   .catch(error => {
//     console.error('Error deleting document:', error);
//   });

// //Delete multiple documents
// Fruit.deleteMany({ rating: { $lt: 5 } }) // Filter condition
//   .then(result => {
//     console.log(`${result.deletedCount} documents deleted successfully`);
//   })
//   .catch(error => {
//     console.error('Error deleting documents:', error);
//   });












// // // second collection people  start

const peopleSchema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    favouriteFruit:fruitSchema   //this is how we can establish relationship of documents
})
const People=mongoose.model("people",peopleSchema);




// // // For Insertion

// // for single insertion
// const people=new People(
//     {name:"RAM",
//     age:30,
//     city:"gurgaon",
//     favouriteFruit:fruit    //documents relationship
// })
// people.save();

// // for bulk insertions
// const ram=new People(
//     {name:"RAM",
//     age:30,
//     city:"gurgaon"
// })

// const rohan=new People(
//     {name:"Rohan",
//     age:40,
//     city:"gurgaon"
// })

// const mohan=new People(
//     {name:"Mohan",
//     age:40,
//     city:"gurgaon"
// })

// // model.insertMany() no longer accepts a callback function
// People.insertMany([ram,rohan,mohan],function(err){
// if(err){
//     console.log('Error', err);
// }else{
//     console.log('Data inserted successfully');
// }
// })

// // other way to insertMany
// People.insertMany([ram, rohan, mohan])
//   .then(() => {
//     console.log('People documents inserted successfully');
//   })
//   .catch(error => {
//     console.error('Error inserting people documents:', error);
//   });

// // // to read/see the collections data
// // using this method mongoose error model.find() no loger able to support callback function
// People.find((err,peoples)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(peoples)
//     }
// })

// // will work
// People.find()
//   .then(people => {
//     // console.log('People documents found:', people);
//     people.forEach((element)=>{
//         console.log(element.name);
//         mongoose.connection.close();
//     })
//   })
//   .catch(error => {
//     console.error('Error finding people documents:', error);
//   });

// //second collection people end
