import * as types from './action.types';
import BlockChain from '../services/blockChain.service';
import {actionType} from '../utils/helper';


export const fetchBlockChains = () => async dispatch => {

    try{
        dispatch(actionType({loading: true}, types.FETCH_BLOCK_CHAIN_REQUEST));
        const { data } = await BlockChain.fetchAll();
        dispatch(actionType({loading: false, data: data}, types.FETCH_BLOCK_CHAIN_SUCCESS));
    }catch(error){
        console.log(error)
        dispatch(actionType({loading: false}, types.FETCH_BLOCK_CHAIN_ERROR));
    }
}