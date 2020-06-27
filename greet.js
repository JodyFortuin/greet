const nameElem = document.querySelector(".nameEntered");
 const languageElem = document.querySelector(".languageRadio");
 const greetBtn = document.querySelector(".greetBtn");
 const greetCounterElem = document.querySelector(".greetCounter");
 const greetings = document.querySelector(".greeting");
 const namesInLocalStorage = localStorage['namesListed'];
   let nameMap = null;
   if (namesInLocalStorage) {
     nameMap = JSON.parse(namesInLocalStorage);
   }
 
  

 var greetTotal = 0;
 var langItem = '';
 var name = '';

function language(name, langItem) {
  //greet.validate(langItem, name)
  if (name !== "" && langItem !== "") {
      if (langItem === "English") {
        greetTotal++
          greeting = "Hello, " + name;
      }
      else if (langItem === "Afrikaans") {
        greetTotal++
          greeting = "Halo, " + name;
      }
      else if (langItem === "isiXhosa") {
        greetTotal++
          greeting = "Molo, " + name;
      }
  }
  return greeting
}



greetBtn.addEventListener('click', function(){

  var checkedRadioBtn = document.querySelector("input[name='langItem']:checked");
  var langItem = checkedRadioBtn.value;
  var name = nameElem.value;
  greetings.innerHTML = "";
  
  greetCounterElem.innerHTML = greetTotal;

  let name;
       if (nameEntered && nameEntered.value) {
       name = nameEntered.value;
       } else {
         return;
     }
  greetings.innerHTML = language(name, langItem);

  
});

//greetBtn.addEventListener('click', greetBtnClicked);

const greetFact = greetFact(savedState);


 /*greetBtn.addEventListener('click', function(){

     let name;
       if (nameEntered && nameEntered.value) {
       name = nameEntered.value;
       } else {
         return;
     }
     greetings.innerHTML = language(name, langItem);
   
     localStorage['namesListed'] = JSON.stringify(greetFact.allNames());
 });*/
 
