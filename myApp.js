require('dotenv').config();
let mongoose = require('mongoose');
let express = require('express');

let app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// absolutePath = __dirname + '/views/index.html';

// app.get("/", function(req, res) {
//   res.sendFile(absolutePath)
// })
app.get('/', function(req, res) {
  res.render('/views/index.html');
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema)

let person = new Person({
  name: "Ada Lovelace",
  age: 44,
  favouriteFoods: ['bbq', 'rice', 'grapes']
});

// create and save model:
const createAndSavePerson = (done) => {
  person
    .save()
    .then((doc) => {
      console.log(doc)
      done(null, doc);

    })
    .catch((err) => {
      console.error(err)
    });
};

// adding arry of people:
let arrayOfPeople = [{
  name: "Franz Schubert",
  age: 65,
  favouriteFoods: ['wine', 'ratatouie', 'grapes']
}, {
  name: "Beethoven",
  age: 32,
  favouriteFoods: ['bread', 'cheese', 'venison']
}, {
  name: "Beyonce",
  age: 47,
  favouriteFoods: ['bbq', 'seafood boil', 'corn bread']
}]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople)
    .then((doc) => {
      console.log(doc)
      done(null, doc);

    })
    .catch((err) => {
      console.error(err)
    });
};

// finding and searching the database:
// let personName = {name: 'Beyonce'}

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName })
    .then((doc) => {
      console.log(doc)
      done(null, doc);

    })
    .catch((err) => {
      console.error(err)
    });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food })
    .then((doc) => {
      console.log(doc)
      done(null, doc)

    })
    .catch((err) => {
      console.error(err)
    })
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId })
    .then((doc) => {
      console.log(doc)
      done(null, doc)

    })
    .catch((err) => {
      console.error(err)
    })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById({ _id: personId })
    .then((doc) => {
      console.log(doc)
      doc.favoriteFoods.push(foodToAdd)
      doc.save()
        .then((docTwo) => {
          console.log(docTwo)
          done(null, docTwo);

        })
        .catch((err) => {
          console.error(err)
        });

    })
    .catch((err) => {
      console.error(err)
    })

};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    {
      name: personName
    },
    {
      age: ageToSet
    },
    {
      new: true,
      runValidators: true
    }
  )
    .then((doc) => {
      console.log(doc)
      done(null, doc);

    })
    .catch((err) => {
      console.error(err)
    });

};

const removeById = (personId, done) => {
  Person.findOneAndRemove(
    {
      _id: personId
    }
  )
    .then((doc) => {
      console.log(doc)
      done(null, doc);

    })
    .catch((err) => {
      console.error(err)
    });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove })
    .then((doc) => {
      console.log(doc)
      done(null, doc);

    })
    .catch((err) => {
      console.error(err)
    });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name: 1 })
    .limit(2)
    .select({
      name: true, favoriteFoods: truef
        .then((doc) => {
          console.log(doc)
          done(null, doc);

        })
        .catch((err) => {
          console.error(err)
        })
      // .exec()
    })
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
