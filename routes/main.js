module.exports = function(app)
{
     app.get('/',function(req,res){
      res.set({
         'Access-Control-Allow-Origin' : '*'
      });
      return res.render('index.php');
     });

     app.get('/login',function(req,res){
        res.render('login.php');
    });
     
    app.route('/registration')
       .get((req,res) => {
       res.render('register.php')
    })
 }
 
