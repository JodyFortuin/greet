function greetFact(nameState){
    var namesListedMap = nameState || {};

const namesListedMap = document.createElement(li);{
li.innerHTML = nameEntered.value;
names.appendChild(li);
nameEntered.value = '';
}

function greet(name) {
    if (namesListedMap[name] === undefined){
    namesListedMap[name] = 1;
    }
} 

function allNames(){
    return namesListedMap;
}

return {
    greet,
    allNames,
};

}
