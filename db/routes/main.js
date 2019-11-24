module.exports = function(app)
{
     app.get('/',function(req,res){
      res.set({
         'Access-Control-Allow-Origin' : '*'
      });
      return res.render('index.html');
     });

     app.get('/about',function(req,res){
        res.render('about.html');
    });
     app.get('/leaderboards',function(req,res){
        res.render('leaderboards.html');
    });

    app.route('/login')
    .get((req,res) => {
       res.render('login.html');
    })

    .post((req, res) => {
      var mongo = require('mongodb');
      var url = "mongodb://localhost/userdb";
      mongo.connect(url, function(err, db) {
         db.collection('id').findOne({ name: req.body.name}, function(err, user) {
                   if(user === null){
                     res.end("Wrong Credentials");
                  }else if (name === req.body.name && password === req.body.pass ){
                  res.render('Profilecomp',{profileData:user});
                } else {
                  console.log("Wrong Login/Credentials");
                  res.end("Wrong Credentials");

                  return res.render('index-login.html');  
                }
         });
       });
      });
      
     
    app.route('/signup')
    .get((req,res) => {
       res.render('signup.html');
    })

    .post((req, res) => {
      var mongo = require('mongodb');
      var crypto = require('crypto');
      var user_db = "mongodb://localhost/userdb";

      var getHash = ( pass , name ) => {
         
         var hmac = crypto.createHmac('sha512', name);

         data = hmac.update(pass);
         gen_hmac= data.digest('hex');
         console.log("hmac : " + gen_hmac);
         return gen_hmac;
      }

       var NAME = req.body.name;
       var pass = req.body.password;

   //     var fs = require('fs')

   //     fs.readFile(index-login.html, 'utf8', function (err,data) {
   //       if (err) {
   //         return console.log(err);
   //       }

   //     var username = data.replace(/<li><a class="User"><li>/, '<div>' + name +'</div>');

   //     fs.writeFile(index-login.html, username, 'utf8' , function (err) {
   //       if (err) return console.log(err);
   //    });
   //  });


       var password = getHash( pass , NAME); 				
   
      
       var data = {
         "name":NAME,	
         "password": password
         
      }
      
      mongo.connect(user_db , function(error , db){
         if (error){
            throw error;
         }
         console.log("connected to database successfully");
         db.collection("users").insertOne(data, (err , collection) => {
            if(err) throw err;
            console.log("Record inserted successfully");
            console.log(collection);
         });
      });
      
      console.log("DATA is " + JSON.stringify(data) );
      res.set({
         'Access-Control-Allow-Origin' : '*'
      });
      return res.render('index-login.html');  
   
   });

   
}