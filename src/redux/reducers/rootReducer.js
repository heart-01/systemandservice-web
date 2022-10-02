import { combineReducers } from 'redux'
import questionReducer from './questionReducer'
import accountReducer from './accountReducer'
import contactReducer from './contactReducer'
import productReducer from './productReducer'
import customerReducer from './customerReducer'
import saleReducer from './saleReducer'
import picworkReducer from './picworkReducer'
import repairReducer from './repairReducer'

const createRootReducer = combineReducers ({
    question: questionReducer,
    account: accountReducer,
    contact: contactReducer,
    product: productReducer,
    customer: customerReducer,
    sale: saleReducer,
    picwork: picworkReducer,
    repair: repairReducer,
})

export default createRootReducer