import {observable,action} from "mobx";

class User{
    @observable name="Lings"
    @action rename = name=>{
        this.name = name;
        console.log(name)
    }
}

const self = new User();
export default self;