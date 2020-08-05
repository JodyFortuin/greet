var figlet = require('figlet');
const chalk = require('chalk')


figlet('Hello World!', function(err, message){ 
    if (err) {
        console.log("error");
        console.dir(err);
        return;
    }
    const figletText = chalk.bgGreen.black(message);
    console.log(figletText)
});


