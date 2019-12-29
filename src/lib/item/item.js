import Class from "../_core/class.js";
import data from "./data.js";

class Item extends Class {
    constructor(obj = {}) {
        super();

        this.name = obj.name;
        this.lvl = obj.lvl || 1;

        // - vlastník/držitel itemu??
        // - opotřebovanost itemu
        // - magický efekty
        // - sockety na kameny
        // - attack speed (rychlost)
        // - range (vzdálenost)
        // - hands (one-handed, two-handed)
        // - slot (levá ruka, hlava, rukavice, ..)

        // inspirace D2: https://diablo.gamepedia.com/Items_(Diablo_II)

        this.attrs = {
            strength: obj.strength || 5,    // budeme na základě classy postavy rozlišovat na čem se staví dmg (např. barbar síla, kouzelník inteligence, atp..)?
            vitality: obj.vitality || 5,    // na základě vitality by se měl vypočítávat život
            damage: obj.damage ||  2    // dmg neni atribut a měl by být vypočítavanej a ne natvrdo
        }
    }
}

export default { class: Item, data };