import Class from "../_core/class.js";
import data from "./data.js";

class Item extends Class {
    constructor(obj = {}) {
        super();
        // this.neco = obj.neco;

        console.log(obj);

        this.name = obj.name;
        this.lvl = obj.lvl || 1;
    
        this.attrs = {
            strength: obj.strength || 5,
            vitality: obj.vitality || 5,
            damage: obj.damage ||  2
        }
    }
}

export default { class: Item, data };