  
app = require("./config/server");

// var port = process.env.PORT||3000;
var port = 3030;

app.listen(port, function () {
    console.log(`Server runing on ${port}`);
}); 