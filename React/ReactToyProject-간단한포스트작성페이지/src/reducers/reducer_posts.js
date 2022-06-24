import _ from "lodash";
import { DELETE_POST, FETCH_POST, FETCH_POSTS } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      console.log("state", state, "action", action);
      console.log(_.omit(state, action.payload), "omit");
      return _.omit(state, action.payload);
    case FETCH_POST:
      //   const post = action.payload.data;
      //   const newState = {...state};
      //   newState[post.id] = post;
      //   return newState;

      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
