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

    function greetTotal() {
        var greetTotal = Object.keys(namesListedMap)
        return greetTotal.length;
    }
    
    function regex(nameInput) {
        var characters = /[^A-Za-z]/g;
        if (nameInput !== "") {
        var newName = nameInput.replace(characters, "")
        return newName;
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
        greetTotal,
        regex,
        allNames,
    }
}
