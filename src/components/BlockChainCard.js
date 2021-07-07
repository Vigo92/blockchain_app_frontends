import React from 'react'
import './BlockChainCard.css'

export default function BlockChainCard({data}) {
    return (
        <div className="block_card">
            <h4>Size: <span style={{fontWeight: "normal"}}>{data.size}</span></h4>
            <h4>Number: <span style={{fontWeight: "normal"}}>{data.number}</span></h4>
            <h4>Timestamp: <span style={{fontWeight: "normal"}}>{data.timestamp}</span></h4>
            <h4>Nonce: <span style={{fontWeight: "normal"}}>{data.nonce}</span></h4>
            <h4>GasLimit: <span style={{fontWeight: "normal"}}>{data.gasLimit}</span></h4>
            <h4>Hash: <span style={{fontWeight: "normal"}}>{data.hash}</span></h4> 
        </div>
    )
}
