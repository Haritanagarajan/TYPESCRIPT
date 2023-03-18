"use strict";
function getdata() {
    return fetch('user.json')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        return res;
    });
}
getdata();
