const express = require("express")
const app = express()
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/main/html/index.html');
    res.send()
});
app.listen(3000)