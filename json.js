// json
const person = {
    name: 'Abdul',
    age: 25
};
// JSON convert back and forth
const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);

//local storage
//localStorage.setItem('userId', 1245);
const userId = localStorage.getItem('userId');
//console.log(userId);
localStorage.setItem('person', JSON.stringify (person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(storedPerson.age);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);