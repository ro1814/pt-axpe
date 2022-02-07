import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userMarkReducer } from './reducers/markReducers'

const reducer = combineReducers({

    userMark: userMarkReducer,

})

const userMarkFromStorage = localStorage.getItem('userMarkItems') ? JSON.parse(localStorage.getItem('userMarkItems')) : []

const initialState = {
    userMark: { userMarkItems : userMarkFromStorage }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store