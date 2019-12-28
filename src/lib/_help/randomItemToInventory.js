import Item from "../item/item.js";
import Inventory from "../inventory/inventory.js";
import getRandomInRange from "./getRandomInRange.js";

const inventory = new Inventory.class();

export default function randomItemToInventory(folder = "weapons", type="swords") {
    if(Item.data[folder] && Item.data[folder][type]) {
        let length = Item.data[folder][type].length,
            random = getRandomInRange(0, length),
            data = Item.data[folder][type][random],
            item = new Item.class(data);

        inventory.addItem(item);
        inventory.logItems();
    }
}