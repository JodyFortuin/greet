 /* const greetFact = greetFunction(nameMap);*/
const nameElem = document.querySelector(".nameEntered");
const languageElem = document.querySelector(".languageRadio");
const greetBtn = document.querySelector(".greetBtn");
const greetCounterElem = document.querySelector(".greetCounter");

const namesInLocalStorage = localStorage['namesListed'];
  let nameMap = null;
  if (namesInLocalStorage) {
	nameMap = JSON.parse(namesInLocalStorage);
  }

function greetBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='langItem']:checked");
    var langItem = checkedRadioBtn.value;
    var name = nameElem.value;
    const greeting = greet(name);
    greetCounterElem.innerHTML = greetTotal;
}

var greetTotal = 0;
greetBtn.addEventListener('click', function(){
    greetTotal++;
    let name;
	  if (nameElem && nameElem.value) {
      name = nameEntered.value;
	  } else {
		return;
    }
    /*message.innerHTML = greetFact.greet(name);*/
  
    localStorage['namesListed'] = JSON.stringify(greetFact.namesListed());
});
