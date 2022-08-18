exports.getLogin = (req, res, next) => {
    console.log(req.session);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated:req.session.isLoggedIn
      });
  };

  exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn=true;
    req.session.save(err=>{
        res.redirect("/");
    });
  };

  exports.postLogout = (req, res, next) => {
    req.session.destroy(()=>{
        res.redirect("/");
    });
  };