This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

```
ES6 Revision

var -> function
let -> block
const -> block

const are immutable

Objects are generally key value pairs
functions with in a objects are called methods

objects in ES6

const person = {
  name: "Happy",
  walk(str) { console.log(str) }
}

person.walk("three steps")
person['walk'] = "small steps"

this key word in ES6

const person = {
  name: "Happy",
  walk() { console.log(this) }
}
person.walk(); // simple returns the reference of the current object

const walk = person.walk;
console.log(walk); // now this is set to the walk function,
walk(); // gives undefined

If we call function as a method to the object it will return the reference to the object.
But if we call stand alone function or outside of an object if will return by default global object i.e window obj but we got undefined (because of strick mode)

How to fix it.
In javascript functions are the objects
const strol = person.walk.bind(person) // helps bind the function to object i.e now strol with point to person object

strol();

=> functions

const square = (num) => {
  return num * num
}
console.log(square(3))

one param one line => function
const square = num => num * num
console.log(square(7))

Arrow functions don't re-bind this

const person = {
  talk(){
    setTimeout(function() {
      console.log('this', this);
    }, 1000);
  }
} // function () rebinds 'this' to window

To solve re-bind we did the following in the earlier times

const person = {
  talk(){
    var self = this;
    setTimeout(function() {
      console.log('self', self);
    }, 1000);
  }
}

but now we can use the arrow function
const person = {
  talk(){
    setTimeout(() => {
      console.log('this', this);
    }, 1000);
  }
}

person.talk()

Arrays and map
const colors = ['red', 'green', 'blue']
colors.map((color)=> { return console.log(color) })

const colors = ['red', 'green', 'blue']
const items = colors.map(color => `<li>${color}</li>`);
console.log(items)

Object Destructuring

const address = {
  street: '12 avenue',
  city: 'london',
  country: 'UK'
}

const { street, city, country } = address
console.log(street)
console.log(country)
console.log(city)

const {street: onlyStreetwithAlias } = address
console.log(onlyStreetwithAlias)

Spread Operator

const first = [1,2,3,5,4,6]
const second = [8,9,10]
// const combined = first.concat(second) // old way
let combine = [...first, ...second] //new way
combine = [...first, 'joins', ...second]
console.log(combine)

let clone = [...first]
console.log(clone)

const first = {name: 'Nidhi'};
const second = {job: 'ROR Devloper'}
const combine = {...first, ...second, location: 'India'}
console.log(combine)

Classes and Inheritence

class Person {
  constructor(name){
    this.name = name
  }

  walk(){
    console.log('walk');
  }
}

class Teacher extends Person{
  constructor(name, degree){
    super(name)
    this.degree = degree
  }

  teach(){
    console.log('teach');
  }
}

const teacher = new Teacher('martha', 'phd')
console.log(teacher);
teacher.walk();
teacher.teach();

Module: files are divided into different files
Object defined in a module are private therefore we need to export them

just prefix the class with export

example -> export class Teacher extends Person

default and named exports
Default -> import ... from '';
Named -> import { ... } from '';

```

Difference between Props and State

```
Props ->
props are params
that we pass on to
another component.

+ Props are read only

State ->
while states are internal and
only used with a component in
isolation.

+ States can be modified throught out the
life cycle of the component.
```

```
The component that owns the piece of state
should be the one modifying it.
```
