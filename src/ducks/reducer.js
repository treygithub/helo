const initialState = {
  userName: "",
  id: "",
  profilePic: ""
};

const REDUCER_USER_NAME = "USER_NAME";
const REDUCER_ID = "ID";
const REDUCER_PROFILE_PIC = "PROFILE_PIC";

function reducer(state = initialState, action) {
  switch (action.type) {
    case REDUCER_USER_NAME:
      return Object.assign(state, { userName: action.payload });

    case REDUCER_ID:
      return {
        ...state,
        id: action.payload
      };

    case REDUCER_PROFILE_PIC:
      return Object.assign(state, { profilePic: action.payload });

    default:
      return state;
  }
}

export function reducerUserName(userName) {
  return {
    type: REDUCER_USER_NAME,
    payload: userName
  };
}

export function reducerID(id) {
  return {
    type: REDUCER_ID,
    payload: id
  };
}
export function reducerProfilePic(profilePic) {
  return {
    type: REDUCER_PROFILE_PIC,
    payload: profilePic
  };
}

export default reducer;