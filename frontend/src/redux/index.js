import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from './reducers/authReducer'
import postsReducer from './reducers/postsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer,
    post: postsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;