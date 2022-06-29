var app = express();

app.get('/',function(req,res){
    res.send('this is homepage');
});
app.get('/contact',function(req,res){
    res.send('this is contactpage');
});
app.get('/profile/:name',function(req,res){
    res.send('You are requested to see the profile with the id of '+req.params.id);
});
app.listen(3000);

