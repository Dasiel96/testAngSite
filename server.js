//Install express server
const express = require('express');
const path = require('path');

const app = express();
const app_name = "test-app"
const path1 = `/dist/${app_name}`
const path2 =`${path1}/index.html`

// Serve only the static files form the dist directory
app.use(express.static(__dirname + path1));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname + path2));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);