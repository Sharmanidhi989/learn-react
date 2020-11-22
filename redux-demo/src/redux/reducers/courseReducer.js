import { act } from "react-dom/test-utils";

export default function courseReducer(state = [], action) {
  switch(action.type){
    case "CREATE_COURSE":
      // state.push(action.course) // not to be done as state is imutable
      return [...state, { ...action.course }];
    default:
      return state;     
  }
}
// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape 
// reading resource
