"use strict";
class details {
    getdata() {
        console.log(`the name of the person is ${this._name} and age of the person is ${this._age}`);
    }
    setdata(value, value1) {
        this._name = value;
        this._age = value1;
    }
}
let d = new details();
d.setdata('hari', 23);
d.getdata();
