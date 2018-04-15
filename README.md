# real-javascript-functional
###Undefined vs null vs empty 
## typeof(undfined) is always undefined
## typeof(null) is always object
## typeof(empty) is alwyas stirng

`
let value;
console.log(value) would be undefined
console.log(value?"has value":"no value" outputs "no value"
`const people = [
 { name: ‘John Doe’, age: 16 },
 { name: ‘Thomas Calls’, age: 19 },
 { name: ‘Liam Smith’, age: 20 },
 { name: ‘Jessy Pinkman’, age: 18 },
];

###impreative
const peopleAbove18 = (collection) => {
  const results = [];
 
  for (let i = 0; i < collection.length; i++) {
    const person = collection[i];
 
    if (person.age >= 18) {
      results.push(person);
    }
  }
  return results;
};

####functional 

const peopleAbove18 = (collection) => {
  return collection
    .filter((person) => person.age >= 18);
}


functional vs imprarative in javascript
`README.md

Thinking in functional from imprative background

loadash 

why should i write more readable code
 
why should i avoid !!value
