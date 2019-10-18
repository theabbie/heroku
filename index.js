var app = require('express')();
var axios = require("axios")

app.get("/*", function(req,res) {
var list = [];
for (i=0;i<100;i++) {list[i]=axios("https://screenshot-v2.now.sh/https:/www.buzzfeed.com/abhishek7gg7/how-boring-are-you-biydj0dk4j")}
function go() {
Promise.all(list).then(function() {go()})
}
go()
})

app.listen(process.env.PORT);
