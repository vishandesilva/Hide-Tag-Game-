var t;
function animateScript() 
{
var pos = 320; 
const interval = 250; 

t = setInterval ( () => 
{
document.getElementById("image").style.backgroundPosition = `0px -${pos}px`; 

if (pos < 640)
{ pos += 320;
}

else
{ pos = 320; }

}
, interval );
}