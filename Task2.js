//Задание 2//

function showProp(obj, objKeyName) {
    return (objKeyName in obj);
}

const user = {
    name: "Alexey", 
    city: "SPB",
    age: 34,
    course: "Frontend-Developer"
};


console.log(showProp(user, "city"));  // false
console.log(showProp(luser, "name"));  // true