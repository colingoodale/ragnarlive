const db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/sign-up", function (req, res) {
    res.json("user-info");
  });

  app.post("/api/sign-up", function (req, res) {
    db.User.create({
      user_email: req.body.user_email,
      user_password: req.body.user_password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      home_address_1: req.body.home_address_1,
      home_address_2: req.body.home_address_2,
      home_city: req.body.home_city,
      home_state: req.body.home_state,
      home_zipcode: req.body.home_zipcode,
      credit_numb: req.body.credit_numb,
    })
      .then(function () {
        res.redirect("/petsignup");
      });
  });

  app.post("/api/petsignup", function (req, res) {
    db.Pets.create({
      pet_name: req.body.pet_name,
      pet_type: req.body.pet_type,
      pet_breed: req.body.pet_breed,
      pet_picture_url: req.body.pet_picture,
      service_animal: req.body.service,
      userId: 1
    })
      .then(function () {
        res.json({ "msg": "Your pet info is saved" })
      }).catch(function (err) {
        console.log(err);
      });
  });

  app.post("/api/subs", function m(req, res) {
    db.Subs.create({
      food_sub: req.body.food_sub,
      groom_sub: req.body.groom_sub,
      walk_sub: req.body.walk_sub,
      sit_sub: req.body.sit_sub
    })
      .then(function () {
        res.json({ "msg": "Saved Subscription Info" })
      }).catch(function (err) {
        console.log(err);
      });
  });


};
