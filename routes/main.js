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

     app.get('/login',function(req,res){
        res.render('login.html');
    });

     app.route('/signup')
       .get((req,res) => {
       res.render('signup.html');
    })

       .post((req, res) => {
       var mongo = require('mongodb');
       var crypto = require('crypto');
       var new_db = "mongodb://localhost/database_name";

       var getHash = ( pass , phone ) => {
         
         var hmac = crypto.createHmac('sha512', phone);
         
         //passing the data to be hashed
         data = hmac.update(pass);
         //Creating the hmac in the required format
         gen_hmac= data.digest('hex');
         //Printing the output on the console
         console.log("hmac : " + gen_hmac);
         return gen_hmac;
      }

       var name = req.body.name;
       var pass = req.body.password;
   
       var password = getHash( pass , name); 				
   
      
       var data = {
         "name":name,	
         "password": password
         
      }
      
      mongo.connect(new_db , function(error , db){
         db.collection('Persons', function (err, collection) {
        
            collection.find().toArray(function(err, items) {
               if(err) throw err;    
               console.log(items);            
           });
           
       });
         console.log("connected to database successfully");
         //CREATING A COLLECTION IN MONGODB USING NODE.JS
         db.collection("details").insertOne(data, (err , collection) => {
            if(err) throw err;
            console.log("Record inserted successfully");
            console.log(collection);
         });
      });
      
      console.log("DATA is " + JSON.stringify(data) );
      res.set({
         'Access-Control-Allow-Origin' : '*'
      });
      return res.render('index.html');  
   
   });
 
 
}
