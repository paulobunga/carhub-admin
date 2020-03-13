import { combineReducers } from 'redux';

import posts from './posts';
import admins from './admins';
import categories from './categories';
import productTypes from './productTypes';
import hubs from './hubs';
import employees from './employees';

export default combineReducers({
  posts,
  admins,
  categories,
  productTypes,
  hubs,
  employees,
});
