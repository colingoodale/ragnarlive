var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index"));
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "/login"));
  });

  app.get("/sign-up", function (req, res) {
    res.sendFile(path.join(__dirname, "/sign-up"));
  });

  app.get("/service", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/service.html"));
  });

  app.get("/404", function (req, res) {
    res.sendFile(path.join(__dirname, "/404"));
  });
  app.get("/petsignup", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/pets.html"))
  })
  app.get("/subs", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/services.html"))
  })
  app.get("/thankyou", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/TYpage.html"))
  })
};
