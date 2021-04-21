import * as ActionList from "./ActionsList";
import API from "../../API/Backend";
// import jwtdecode from "jwt-decode";
import { toast } from "react-toastify";

const SUCCESS = (msg) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const ERROR = (msg) => {
  return toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const IS_LOGGED_IN = (payload) => ({
  type: ActionList.IS_LOGGED_IN,
});

export const IS_LOGGED_OUT = (payload) => ({
  type: ActionList.IS_LOGGED_IN,
});

export const TOKEN = (payload) => ({
  type: ActionList.TOKEN,
  payload,
});

export const RIGHT = (payload) => ({
  type: ActionList.RIGHT,
  payload,
});


export const ALL_TOURS = (payload) => ({
  type: ActionList.ALL_TOURS,
  payload,
});

export const GET_ALL_TOURS = (callback) => {
    return async (dispatch) => {
      await API.get("/tours")
        .then((res) => {
          console.log(res.data)
          dispatch(ALL_TOURS(res.data))
          callback()
        })
        .catch((error) => {
          if (error.response) {
            ERROR(error.response.data);
          } else if (error.request) {
            ERROR(error.message);
          } else {
            ERROR(error.message);
          }
          callback()
        });
    };
  };
  export const NEAR_TOURS = (payload) => ({
    type: ActionList.NEAR_TOURS,
    payload,
  });
  export const GET_NEAR_TOURS = (callback) => {
    return async (dispatch) => {
      await API.get("/tours?_limit=5&_sort=Departure_Day")
        .then((res) => {
          console.log(res.data)
          dispatch(NEAR_TOURS(res.data))
          callback()
        })
        .catch((error) => {
          if (error.response) {
            ERROR(error.response.data);
          } else if (error.request) {
            ERROR(error.message);
          } else {
            ERROR(error.message);
          }
          callback()
        });
    };
  };
  export const FAMILY_TOURS = (payload) => ({
    type: ActionList.FAMILY_TOURS,
    payload,
  });
  export const GET_FAMILY_TOURS = (callback) => {
    return async (dispatch) => {
      await API.get("/tours?Category=Family")
        .then((res) => {
          console.log(res.data)
          dispatch(FAMILY_TOURS(res.data))
          callback()
        })
        .catch((error) => {
          if (error.response) {
            ERROR(error.response.data);
          } else if (error.request) {
            ERROR(error.message);
          } else {
            ERROR(error.message);
          }
          callback()
        });
    };
  };
  export const COUPLE_TOURS = (payload) => ({
    type: ActionList.COUPLE_TOURS,
    payload,
  });
  export const GET_COUPLE_TOURS = (callback) => {
    return async (dispatch) => {
      await API.get("/tours?Category=Couple")
        .then((res) => {
          console.log(res.data)
          dispatch(COUPLE_TOURS(res.data))
          callback()
        })
        .catch((error) => {
          if (error.response) {
            ERROR(error.response.data);
          } else if (error.request) {
            ERROR(error.message);
          } else {
            ERROR(error.message);
          }
          callback()
        });
    };
  };
  export const APPROVE_COMPANY = (payload) => ({
    type: ActionList.APPROVE_COMPANY,
    payload,
  });
  export const GET_APPROVE_COMPANY = (callback) => {
    return async (dispatch) => {
      await API.get("companies?Category=approve")
        .then((res) => {
          console.log(res.data)
          dispatch(APPROVE_COMPANY(res.data))
          callback()
        })
        .catch((error) => {
          if (error.response) {
            ERROR(error.response.data);
          } else if (error.request) {
            ERROR(error.message);
          } else {
            ERROR(error.message);
          }
          callback()
        });
    };
  };
export const USER = (data) => {
  return async (dispatch) => {
    await window.localStorage.setItem("Token", JSON.stringify(data));
    // dispatch(TOKEN(jwtdecode(data)));
    dispatch(IS_LOGGED_IN());
  };
};

export const USER_STATUS_IN = () => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem("Token");
    if (token !== null) {
      // dispatch(TOKEN(jwtdecode(token)));
      dispatch(IS_LOGGED_IN());
    }
  };
};

export const USER_STATUS_OUT = () => {
  return async (dispatch) => {
    await window.localStorage.removeItem("Token");
    dispatch(IS_LOGGED_OUT());
  };
};



// export const LOGIN = (data, callback) => {
//   return async (dispatch) => {
//     await API.post("/adminLogin", data)
//       .then((res) => {
//         SUCCESS("");
//         callback()
//       })
//       .catch((error) => {
//         if (error.response) {
//           ERROR(error.response.data);
//         } else if (error.request) {
//           ERROR(error.message);
//         } else {
//           ERROR(error.message);
//         }
//       });
//   };
// };
