var fs = require('fs');

fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){

        if (err) console.log(err);

        fs.writeFile('./stuff/writeMe.txt',data, (err) => {

            if (err) console.log(err);
        });
    });
});
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdirSync('stuff');
})