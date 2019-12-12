export default function reducer(
  state = {
    loginStatus: 'uninitiated',
    user: {},
  },
  action,
) {
  switch (action.type) {
    case 'DO_LOGIN_STARTED': {
      return {...state, loginStatus: 'ongoing'};
    }
    case 'DO_LOGIN_SUCCESS': {
      return {...state, loginStatus: 'success', user: action.payload};
    }
    case 'DO_LOGIN_FAILED': {
      return {...state, loginStatus: 'failed', user: action.payload};
    }
    default: {
      return state;
    }
  }
}
