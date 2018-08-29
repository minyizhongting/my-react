import { INIT_COMMENTS, ADD_COMMENT, DELETE_COMMENT} from "../actionTypes";

// reducer
export default function(state, action) {
  if (!state) {
    state = {
      comments: []
    };
  }

  switch(action.type) {
    case INIT_COMMENTS:
      return { comments: action.comments };
    case ADD_COMMENT:
      return {
        comments: [...state.comments, action.comment]
      };
    case DELETE_COMMENT:
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex+1)
        ]
      };
    default:
      return state;
  }

}


