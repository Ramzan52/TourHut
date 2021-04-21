import * as ActionList from "../Actions/ActionsList";
const initialState = {
  IS_LOGGED: false,
  TOKEN: null,
  info: null,
  right:false,
  all_tours:[],
};
// eslint-disable-next-line
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionList.IS_LOGGED_IN:
      return { ...state, IS_LOGGED: true };
    case ActionList.IS_LOGGED_OUT:
      return { ...state, IS_LOGGED: false };
    case ActionList.TOKEN:
      return { ...state, TOKEN: payload };
    case ActionList.RIGHT:
      return { ...state, right: payload };
    case ActionList.ALL_TOURS:
      return { ...state, all_tours: payload };
      case ActionList.NEAR_TOURS:
        return { ...state, near_tours: payload };
        case ActionList.FAMILY_TOURS:
        return { ...state, family_tours: payload };
        case ActionList.COUPLE_TOURS:
          return { ...state, couple_tours: payload };
          case ActionList.APPROVE_COMPANY:
          return { ...state, approve_company: payload };
    default:
      return state;
  }
};
