require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/* CREATE A PERSON WITH PROTOTYPE */
const personSchema = new mongoose.Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    dateOfBirth: {type: Date, required: true},
    age: {type: Number, required: true},
    skill: {type: [String], required: true},
    favoriteFood: {type: [String], required: true}
});

const Person = mongoose.model('Person', personSchema);

/* CREATE AND SAVE A RECORD OF A model */
/*
const newPerson = new Person(
    {
        name: 'Bro',
        userName: 'Br000',
        email: 'vv@gmail.com',
        dateOfBirth: new Date(1999, 3, 24),    // 0 = Januari, 3 = April
        age: 24,
        skill: ['CEO', 'UI/UX design', 'Fullstack Javascript'],
        favoriteFood: ['Pizza', 'Burger']
    },
) */

/* CREATE MANY RECORDS WITH model.create() */
/*
Person.create([
    {
        name: 'Bro',
        userName: 'Bro000',
        email: 'brobro000@gmail.com',
        dateOfBirth: new Date(1999, 3, 24),    // 0 = Januari, 3 = April
        age: 24,
        skill: ['CEO', 'UI/UX design', 'Fullstack Javascript'],
        favoriteFood: ['Sushi', 'Burger', 'Noodle']
    },
    {
        name: 'Joko',
        userName: 'JokoMiaww',
        email: 'jokoMiyaww999@gmail.com',
        dateOfBirth: new Date(2003, 6, 2),    // 0 = Januari, 6 = July
        age: 20,
        skill: ['Python', 'Machine Learning'],
        favoriteFood: ['Potatoes', 'Fried Chicken', 'Fried Rice']
    },
    {
        name: 'Dosan',
        userName: 'D00Sann',
        email: 'dosanSan5@gmail.com',
        dateOfBirth: new Date(2003, 0, 10),    // 0 = Januari
        age: 20,
        skill: ['Security', 'Dev Ops'],
        favoriteFood:['Pizza', 'Steak', 'Pasta']
    },
    {
        name: 'Alice',
        userName: 'alice123',
        email: 'alice@gmail.com',
        dateOfBirth: new Date(2001, 8, 12),
        age: 22,
        skill: ['Secertary','Web Development', 'Graphic Design'],
        favoriteFood: ['Sushi', 'Pasta']
    },
    {
        name: 'John',
        userName: 'john_doe',
        email: 'john.doe@example.com',
        dateOfBirth: new Date(1999, 5, 18),
        age: 24,
        skill: ['Finance', 'Backend Development', 'Database Management'],
        favoriteFood: ['Steak', 'Potatoes']
    },
    {
        name: 'Emma',
        userName: 'emma_28',
        email: 'emma@example.com',
        dateOfBirth: new Date(1999, 10, 5),
        age: 24,
        skill: ['Mobile App Development', 'User Experience'],
        favoriteFood: ['Tacos', 'Roasted Chicken']
    },
    {
        name: 'David',
        userName: 'david22',
        email: 'david@email.com',
        dateOfBirth: new Date(1999, 1, 8),
        age: 24,
        skill: ['Data Science', 'Machine Learning'],
        favoriteFood: ['Sushi', 'Roasted Chicken', 'Fried Rice']
    },
    {
        name: 'Sophia',
        userName: 'sophia_grace',
        email: 'sophia@example.com',
        dateOfBirth: new Date(2000, 6, 30),
        age: 23,
        skill: ['Frontend Development', 'UI Design'],
        favoriteFood: ['Salad', 'Potatoes']
    },
    {
        name: 'Michael',
        userName: 'michael34',
        email: 'michael@email.com',
        dateOfBirth: new Date(2000, 11, 15),
        age: 23,
        skill: ['DevOps', 'Cloud Computing'],
        favoriteFood: ['Burger', 'Fries']
    },
    {
        name: 'Mary',
        userName: 'mary_19',
        email: 'mary@example.com',
        dateOfBirth: new Date(2001, 4, 22),
        age: 22,
        skill: ['UI Design', 'Illustration'],
        favoriteFood: ['Pizza', 'Noodle']
    },
    {
        name: 'Ryan',
        userName: 'ryan01',
        email: 'ryan@example.com',
        dateOfBirth: new Date(2002, 2, 10),
        age: 21,
        skill: ['Frontend Development', 'React'],
        favoriteFood: ['Burger', 'Pizza']
    },
    {
        name: 'Lily',
        userName: 'lily_15',
        email: 'lily@email.com',
        dateOfBirth: new Date(2003, 7, 9),
        age: 20,
        skill: ['UI/UX Design', 'Illustration'],
        favoriteFood: ['Pasta', 'Noodle', 'Salad']
    }    
])*/


/* USE model.save() TO SAVE A RECORD   // FOR SAVING 1 PERSON
newPerson.save()
    .then(savedPerson => {
        console.log('Person saved:', savedPerson)
    })
    .catch(err => {
        console.log('Error saving person', err)
    })
*/


/* USE model.find() TO SEARCH DATABASE
Person.find({})
    .then(persons => {
        console.log('Persons found:', persons)
    })
    .catch(err => {
        console.log('Error finding persons', err)
    })
*/


/* USE model.findOne() TO RETURN A SINGLE MATCHING DOCUMENT FROM DATABASE
Person.findOne({
    // name: 'Bro'
    // favoriteFood: 'Pizza'
    favoriteFood: { $regex: 'burger', $options: 'i' }
})
    .then(person => {
        console.log('Person found:', person)
    })
    .catch(err => {
        console.log('Error finding person', err)
    })
*/


/* USE model.findById() TO SEARCH DATABASE BY _id
Person.findById('64e08415563873704a8fd124')
    .then(person => {
        console.log('Person found:', person)
    })
    .catch(err => {
        console.log('Error finding person', err)
    })
*/


/* PERFORM CLASSIC UPDATES BY RUNNING find, edit, then save
const personId = '64e0de80fdd968dd720ea584';
Person.findById(personId)
    .then(person => {
        if (!person) {
            console.log('Person not found')
            return;
        }
        person.favoriteFood.push('Hamburger');
        person.save()
        .then(updatedPerson  => {
            console.log('Updated person', updatedPerson)
        })
        
        .catch(err => {
            console.log('Error saving updated person', err)
        });
    })
    .catch(err => {
        console.log('Error finding person', err)
    })
*/

/* PERFORM NEW UPDATES ON A DOCUMENT USING model.findOneAndUpdate()
Person.findOneAndUpdate(
    {userName: 'sophia_grace'},
    {
        dateOfBirth: new Date(2003, 3, 24),
        age: 20
    },
    {new: true},
    {runValidators: true}
)
    .then(updatedPerson => {
        console.log('Updated person:', updatedPerson);
    })
    .catch(err => {
        console.log('Error updating person', err);
    })
*/


/* DELETE ONE DOCUMENT USING model.findByIdAndRemove() OR findOneAndRemove()
// const personId = '64e0de80fdd968dd720ea587';
const userName = 'michael34'
Person.findOneAndRemove({userName})
    .then(deletedPerson => {
        console.log(`${userName} has been deleted`, deletedPerson);
    })
    .catch(err => {
        console.log(`Error deleting ${userName}`, err)
    })
/*


/* MongoDB AND Mongoose - DELETE MANY DOCUMENTS USING model.remove() */

