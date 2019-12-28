import uuid from "uuid/v4";

export default class Class {
    constructor(obj = {}) {
        this.id = uuid();
        this.created = Date.now();
    }
}