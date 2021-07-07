import {combineReducers} from 'redux';
import blockChainReducer from './blockchain.reducer';

const rootReducer = combineReducers({

    blockChainReducer,
})

export default rootReducer;
