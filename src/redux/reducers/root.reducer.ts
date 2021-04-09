import { combineReducers } from 'redux';

import signInReducer from './sign-in.reducer';
import signUpReducer from './sign-up.reducer';
import listOfUsersReducer from './list-of-users.reducer';
import deleteUserReducer from './delete-user.reducer';

const rootReducer = combineReducers({
  auth: signInReducer,
  registration: signUpReducer,
  list: listOfUsersReducer,
  delete: deleteUserReducer,
});

export { rootReducer };
