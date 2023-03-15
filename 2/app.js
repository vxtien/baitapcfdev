function isEmpty(obj) {
    for(let key in obj) {
        if (obj[key] !== "") {
            return false;
        }
    } 
    return true;
}
let p1 = {};
let p2 = {x : 1};

console.log(isEmpty(p1));
console.log(isEmpty(p2));