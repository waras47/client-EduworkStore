import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './features/Auth/reducer';
import cartReducer from './features/Cart/reducer';
import productReducer from './features/Product/reducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
  auth : authReducer,
  products : productReducer,
  cart: cartReducer
});
const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(thunk)));


export default store