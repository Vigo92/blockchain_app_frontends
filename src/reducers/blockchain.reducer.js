import * as types from '../actions/action.types';
import initialState from '../store/initialState';

const { blockChain } = initialState;


const blockChainReducer = (state = blockChain, action) => {

    switch (action.type) {
        case types.FETCH_BLOCK_CHAIN_REQUEST:
            return{
                ...state,
                loading: action.payload.loading,
            }
        case types.FETCH_BLOCK_CHAIN_SUCCESS:
            return{
                ...state,
                loading: action.payload.loading,
                blockChain: action.payload.data,
            }
        case types.FETCH_BLOCK_CHAIN_ERROR:
            return{
                ...state,
                loading: action.payload.loading,
            }

        default:
            return state;
                
    }
}


export default blockChainReducer;