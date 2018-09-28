import {EventEmitter} from "events";

class HKStore extends EventEmitter{
    constructor(){
        super()
        this.HKDevoteesData=[];
    }

    getaAll(){
        return this.HKDevoteesData;
    }
}

const HKstore =new HKStore;

export default HKstore;