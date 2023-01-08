const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy!",
});

// fruit.save();

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "Decent fruit.",
});

mango.save();

Person.updateOne({name: "John"}, { favouriteFruit: mango }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit.",
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me",
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird texture",
});

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);

    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   {
//     _id: "63ba6ed416f0cef58ef1f8ee",
//   },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document.");
//     }
//   }
// );

// Fruit.deleteOne({_id: "63ba6ed416f0cef58ef1f8ee"},   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully deleted the document");
//     }
//   })

// Person.deleteMany({name: "John"},   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully deleted all the document");
//     }
//   })
