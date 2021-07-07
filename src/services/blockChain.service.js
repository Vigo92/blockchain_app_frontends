import axios from "./index";

export default class BlockChain{

    static fetchAll(){
        console.log("fetching...")
        return axios({
            method: 'get',
            url: '/api/v1/chains',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}