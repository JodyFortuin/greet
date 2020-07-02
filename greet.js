const greetBtn = document.querySelector(".greetBtn")
const resetBtn = document.querySelector(".resetBtn")
const greetings = document.querySelector(".greeting")
const greetCounterElem = document.querySelector(".greetCounter")
const nameElem = document.querySelector(".nameEntered")

  var savedState = localStorage['namesListed'] ? JSON.parse(localStorage['namesListed']) : {};

  const GreetFact = greetFactory(savedState);

function reset(){
  GreetFact.reset();
  window.location.reload(true);
  localStorage.clear('namesListed');
}

resetBtn.addEventListener('click', reset);

greetBtn.addEventListener("click", function () {
    var nameEntered = nameElem.value;
    var checkedRadioBtn = document.querySelector("input[name='langItem']:checked");
    if (checkedRadioBtn) {
      var langItem = checkedRadioBtn.value;
        var name = GreetFact.regex(nameEntered)
        if (name !== "") {
            GreetFact.addMap(name);
            greetings.innerHTML = GreetFact.language(name, langItem)
            greetCounterElem.innerHTML = GreetFact.greetTotal();
            localStorage['namesListed'] = JSON.stringify(GreetFact.allNames());
    }
}
});



