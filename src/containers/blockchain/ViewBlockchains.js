import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBlockChains} from '../../actions/blockChain.action';
import BlockChainCard from '../../components/BlockChainCard';
import './ViewBlockchains.css';

import initialState from '../../store/initialState';

export default function ViewBlockchains() {

    const dispatch = useDispatch();

    const [timeInterval, setTimeInterval] = useState(0);

    setTimeout(() => {
        setTimeInterval(timeInterval + 1);
    }, 20000);

    useEffect(() => {
        dispatch(fetchBlockChains());
    }, [timeInterval]);

    const {blockChain: {blockChainList, loading}} = useSelector(({blockChainReducer}) => ({
        blockChain: blockChainReducer
    }));

    return (
        <div>
            <div className="container-fluid">
                <p className="header_text">BlockChains</p>
                {!loading ? (
                    <div style={{textAlign: 'center', marginTop: '30px'}}>
                        <div className="spinner-border text-danger " role="status" >
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    ):(
                        <div className="row">
                        {blockChainList.map(bc => {
                            return(
                                <BlockChainCard key={bc.id} data={bc}/>
                            )
                        })}
                    </div>
                    )}
            </div>
        </div>
    )
}
