function greetFactory(savedState) {

    var namesListedMap = savedState || {};

    function reset() {
        namesListedMap = {};
    }

    function addMap(name) {
        if (namesListedMap[name] === undefined){
        namesListedMap[name] = 1;
        }
    } 

    function language(name, langItem) {
        if (name !== "" && langItem !== "") {
            if (langItem === "English") {
                greeting = "Hello, " + name;
            }
            else if (langItem === "Afrikaans") {
                greeting = "Halo, " + name;
            }
            else if (langItem === "isiXhosa") {
                greeting = "Molo, " + name;
            } 
        }
        return greeting
      }

    function countNames() {
        var greetTotal = Object.keys(namesListedMap)
        return greetTotal.length;
    }
    
    function regex(nameInput) {
        var characters = /[^A-Za-z]/g;
        if (nameInput !== "") {
        var newName = nameInput.replace(characters, "")
        var capital = newName[0].toUpperCase() + newName.slice(1).toLowerCase();
        return capital;
     }
    return "";
    }

    function allNames() {
        return namesListedMap;
    }

    return {
        reset,
        addMap,
        language,
        countNames, 
        regex,
        allNames,
    }
}
