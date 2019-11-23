<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
	<title>Registration system PHP and MySQL</title>
</head>
<style>
 body {
	background-image: linear-gradient(110deg,#f39c12, #c0392b);
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .login{
	  width: 400px;
	  background: whitesmoke;
	  height: 500px;
	  padding: 40px 40px;
	  border-radius: 5px;
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  transform: translate(-50%,-50%);
  }
  .login h1{
	  text-align: center;
	  margin-bottom: 50px;
  }
  .LoginCredentials{
	  border-bottom: 1px solid gray;
	  position: relative;
	  margin: 30px 0;
  }
  
  .LoginCredentials input{
	  
	  font-size: 15px;
  color: #333333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 5px;
  height: 40px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  }
  .login-btn {
	  display: block;
	  width: 100%;
	  height: 50px;
	  border: none;
	  background: linear-gradient(110deg,#f39c12, #c0392b);
	  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	  background-size: 200%;
	  color: whitesmoke;
	  font-size:20px;
	  outline: none;
	  cursor: pointer;
	  transition: .5s;
  }

  .login-btn:hover{
	  background-position: right; 
  }

  .hasAccount{
	  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	  margin-top: 20px;
	  text-align: center;
	  font-size: 15px;
  }
</style>

<body>
	
	
	<form method="post" action="register.php" class="login">
	  
		<div>
		<h2 style="text-align: center;">Register</h2>
		</div>

		<?php include('errors.php'); ?>

		<div class="LoginCredentials">
		
			<input type="text" name="username" placeholder="Username">
		</div>
		<div class="LoginCredentials">
			<input type="email" name="email" placeholder="E-mail">
		</div>
		<div class="LoginCredentials">
			
			<input type="password" placeholder="Password"  name="password_1">
		</div>
		<div class="LoginCredentials">
		
			<input type="password" placeholder="Re-Type Password"  name="password_2">
		</div>
		<div class="LoginCredentials">
			<button type="submit" class="login-btn" name="reg_user">Register</button>
		</div>
		<p class="hasAccount">
			Already a member? <a href="/login">Sign in</a>
		</p>
	</form>
</body>
</html>