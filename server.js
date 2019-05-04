require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '?public')));


//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOption.force top true
//clearing the testdb
if (process.env.NODE_ENV === "test") {
    syncOptions.force = "true";
}

//Starting the server, sycning models
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log("==> Listening on port %s. Visit http://localhost:%s in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;