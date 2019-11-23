module.exports = function(app)
{
     app.get('/',function(req,res){
       res.render('index.html');
     });

     app.get('/login',function(req,res){
        res.render('login.html');
    });
     
    app.get('/leaderboards',function(req,res){
      res.render('leaderboards.html');
  });

    app.route('/register')
       .get((req,res) => {
       res.render('register.html')
    })
       .post((req,res) => {
         var username = request.body.username;
         var password = request.body.password;
         if (username && password) {
            connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
               if (results.length > 0) {
                  request.session.loggedin = true;
                  request.session.username = username;
                  response.redirect('/home');
               } else {
                  response.send('Incorrect Username and/or Password!');
               }			
               response.end();
            });
         } else {
            response.send('Please enter Username and Password!');
            response.end();
         }
      });
      
       
 } 
 
