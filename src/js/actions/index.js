import * as type from "../actionTypes";


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

export const getDataAction = function() {
  return function(dispatch, getState) {
    dispatch({
      type: type.INCREMENT
    });
    setTimeout(function() {
      dispatch({
        type: type.INCREMENT
      })
    }, 2000);

  }

}