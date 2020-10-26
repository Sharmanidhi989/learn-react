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

### The Redux core:

**Actions:**

actions are events that take place in an app.
Action must have a type.
Action must have a type and the rest could be anything that can be serializeable.
Promises and Function are not allowed.

```
// action creator
rateCourse(rating){
  return { type: RATE_COURSE, rating: rating } // actions
}
```

**Stores**

```
let store = createStore(reducer);

store.dispatch(action);
store.subscribe(listner);
store.getState();
replaceReducer(nextRducer); // use for hot reloading
```

**Imutability**

To change state, return a new object

```
Imutable already in js      |  Mutable
-> Number                   |  Arrays
-> String                   |  Objects
-> Boolean                  |  Functions
-> Undefined                |
-> Null                     |
```

Handling Imutable data in JS

1. Object.assign [Signature: Object.assign(target, ...sources); example: Object.assign({}, state, {role: 'admin'})]
2. spread operator [example: const newState = {...state, role: 'admin'}, const newUser = [...state.users] // clone users array]
3. map [imutable friendly array methods map, filter & reduce]

Always remember to copy nested objects. Both object.assign and spread operator creates shallow copies.

example: const newUser = { ...user, address: { ...user.address } };

But only clones what changes:

1. Deep Cloning is expensive
2. Deep Cloning is typically wasteful
3. Deeo claning causes unncessary renders

// clone.deep and loadash.merge \_\_used for the nested cloning
// can also user immer

```
import produce from 'immer';
const user = {
  name: 'Cory',
  address: {
    state: 'California'
  }
}

const userCopy = produce (user, draftState => {
  draftState.address.state = "New York";
})
```

While using arrays must avoid mutable array methods:

push, pop, array

instead use map, filter, reduce, find, concat, spread

**_Reducers_**

```
function myReducer(state, Action){
  // return new state based on action passed
}
```

Forbidden in Reducers

1. Mutate arguments
2. Perform side effects {api calls or routing transition}
3. Call non-pure functions example: { Math.random(), Date.now() }


help resource:

redux-immutable-state-invariant (warns when store is mutated)

1 State Multiple Reducers

All reducers are called on Each Dispatch.

Write independent small reducer fuctions that are each responsible for updates to a specific slice of state.
We call pattern "reducer composition". A given action could be handled by all, some or none of them.
 