import {INCREMENT, DECREMENT, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from "../actionTypes";

export default (state = 0, action) => {
  let step = 1;
  if (action.step !== undefined) {
    step = action.step;
  }
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case FETCH_START:
      console.log('%c fetch data start......', 'color:orange');
      return state;
    case FETCH_SUCCESS:
      console.log('%c fetch data success......', 'color:orange');
      return state + step;
    case FETCH_FAILURE:
      console.error('%c fetch data error......', 'color:orange');
      return state;
    default:
      return state;
  }
}
