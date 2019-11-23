module.exports = function(app)
{
     app.get('/',function(req,res){
      res.set({
         'Access-Control-Allow-Origin' : '*'
      });
      return res.render('index.html');
     });

     app.get('/login',function(req,res){
        res.render('login.html');
    });
     
    app.get('/leaderboards',function(req,res){
      res.render('leaderboards.html');
  });
   
  app.get('/register',function(req,res){
   res.render('register.html');
});

    app.route('/registration')
       .get((req,res) => {
       res.render('register.html')
    })
 }
 
