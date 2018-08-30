import * as type from "../actionTypes";
import axios from 'axios';

// action creators
export const initComments = (comments) => {
  return { type: type.INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
  return { type: type.ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
  return { type: type.DELETE_COMMENT, commentIndex }
}

export const increment = () => {
  return { type: type.INCREMENT }
}

export const decrement = () => {
  return {type: type.DECREMENT }
}



// 异步action
// redux-thunk
// 一个返回函数的action creator
export const fetchData = () => async function(dispatch, getState) {
  // 先发出一个action，表示操作开始
  dispatch({
    type: type.FETCH_START
  });

  try {
    const response = await axios.get('https://cnodejs.org/api/v1/topics');
    if (response.status == 200) {
      const total = response.data.data.length;
      // 再发出一个action，表示操作结束
      dispatch({
        type: type.FETCH_SUCCESS,
        step: total
      });
    } else {
      throw new Error('fetch failure');
    }
  } catch(e) {
    dispatch({
      type: type.FETCH_FAILURE
    });
  }

}

