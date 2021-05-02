const router = require("express").Router();
var fs = require("fs");
const bcrypt = require("bcrypt");

router.route("/").get((req, res) => {

  res.render("index.ejs");

});

router.route("/twitter-help").get((req, res) => {

  res.render("twitter.ejs");

});

router.route("/login").get((req, res) => {

  res.render("login.ejs", { status: 0 });

});

router.route("/register").get((req, res) => {

  res.render("register1.ejs", { status: 0 });

});

router.route("/donate").get((req, res) => {

  res.render("donate.ejs");

});

router.route("/fundraiser").get((req, res) => {

  res.render("fundraiser.ejs");

});

router.route("/user-r").get((req, res) => {

  res.render("recepientAdmin/index.ejs");

});

router.route("/user-d").get((req, res) => {

  res.render("donorAdmin/index.ejs");

});

router.route("/posts-r").get((req, res) => {

  res.render("recepientAdmin/requests.ejs");

});




// router.route("/register").get((req, res) => {

//   res.render("register.ejs");

// });
router.post('/register-x', async (req, res) => {

  let { fullname, age, email, phone, password, state, check } = req.body;

  console.log(req.body)
  try {

    if (!fullname || !email || !password || !phone) {
      res.render("register1.ejs", { status: 1 })

      return;
    }
    else if (password.length <= 5) {
      res.render("register1.ejs", { status: 2 })

    }

    else {
      sql = "select * from users where email = '" + email + "'";
      db.query(sql, (err, result) => {

        if (result[0]) {
          res.render("register1.ejs", { status: 3 })

          return;
        }


        var password_hashed = bcrypt.hashSync(password, 10);

        var role = 'r';
        if (check) {
          role = 'd';
        }


        sql = "insert into users(fullname, age, email ,phone, password, state, role) values(?,?,?,?,?,?,?)";
        db.query(sql, [fullname, age, email, phone, password_hashed, state, role], (err, result) => {
          if (err) {
            res.render("register1.ejs", { status: 4 })

            return;
          }
          else {
            req.session.email = email;
            if (role == 'r') {
              res.redirect("/user-r");
            } else if (role == 'd') {
              res.redirect("/user-d");
            }

          }

        });

      });
    }
  } catch (error) {
    console.log(error)
    res.render("register1.ejs", { status: 5 });
    return;
  }


});

// router.post('/login-x', (req, res) => {



//   let { email, password } = req.body;
//   console.log(req.body)
//   // var sql = "select * from users where email = '" + email + "'";

//   var sql = 'SELECT * FROM users WHERE email = ?';
//   db.query(sql, [email], (error, result) => {
//     console.log(result)
//     if (result[0]) {
//       if (bcrypt.compareSync(password, result[0].password)) {

//         req.session.email = result[0].email;
//         res.render("dashboard.ejs")

//       } else {
//         res.render("login.ejs", { status: 1 });
//       }
//     }
//     else
//       res.render("login.ejs", { status: 2 });

//   });

// });

router.route("/login-x").post((req, res) => {
  var sess = req.session;
  let { email, password } = req.body;


  var sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (error, result) => {
    console.log(result)
    if (result[0]) {
      if (bcrypt.compareSync(password, result[0].password)) {

        req.session.email = result[0].email;

        if (result[0].role == 'r') {
          res.redirect("/user-r");
        } else if (result[0].role == 'd') {
          res.redirect("/user-d");
        }

      } else {
        res.render("login.ejs", { status: 1 });
      }
    }
    else
      res.render("login.ejs", { status: 2 });

  });


});





module.exports = router;
