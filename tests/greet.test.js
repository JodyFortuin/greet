describe("Greet Unit Test", function() {
  
  it("should greet name entered (Kyle)", function() {
    
    var greetName = greetFactory();
   
    assert.equal("Hello, Kyle", greetName.language('Kyle', 'English'));
  });
  

  it("should greet name entered using only letters that are entered (Jody instead of $*Jody*$123)", function() {
    
    var greetName = greetFactory();
   
    assert.equal("Jody", greetName.regex('$*Jody*$123'));
  });


  it("should greet in the language chosen (English)", function() {

    var greetName = greetFactory();  

    assert.equal('Hello, Jack', greetName.language('Jack', 'English'));
  });


  it("should greet in the language chosen (Afrikaans)", function() {

    var greetName = greetFactory();   

    assert.equal('Halo, James', greetName.language('James', 'Afrikaans'));
  });


  it("should greet in the language chosen (isiXhosa)", function() {

    var greetName = greetFactory();

    assert.equal('Molo, Julien', greetName.language('Julien', 'isiXhosa'));

  });

});
