import Class from "../_core/class.js";

class Inventory extends Class {
    constructor(obj = {}) {
        super();

        this.size = obj.size || 16;
        this.items = obj.items || [];
    }

    addItem(item) {
        if(this.items.length < this.size) this.items.push(item);   
    }

    logItems() {
        console.clear();
        console.log(this.items);
    }
}

export default { class: Inventory, data: {} };