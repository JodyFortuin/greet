const nameElem = document.querySelector(".nameEntered");
const languageElem = document.querySelector(".languageRadio");
const greetBtn = document.querySelector(".greetBtn");
const greetCounterElem = document.querySelector(".greetCounter");

function greet(name) {
    var nameEnt = name.split(',');
    var greetTotal = 0;
    for(var i=0; i < nameEnt.length; i++){
      var names = nameEnt[i].trim();
        if (names == String){
            greetTotal += 1;
         }
    }
  var greeting = "Hello, " + name;
  return greeting;
}

function greetBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='langItem']:checked");
    var langItem = checkedRadioBtn.value;
    var name = nameElem.value;
    const greeting = greet(name);
    greetCounterElem.innerHTML = greetTotal;
    
}

greetBtn.addEventListener('click', greetBtnClicked); 