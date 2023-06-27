
module.exports = (req, res, next) => {

  if(req.session){
    next()
  }
  else{
    res.status(401).json({
      message: "token invalid"
    })
  }
console.log(req.session)
  next()
  // if (){
  //   next()
  // }
  // else{
  //   next({status: 401, message: "token invalid"})
  // }
  //   /*
  //     IMPLEMENT

  //     1- On valid token in the Authorization header, call next.

  //     2- On missing token in the Authorization header,
  //       the response body should include a string exactly as follows: "token required".

  //     3- On invalid or expired token in the Authorization header,
  //       the response body should include a string exactly as follows: "token invalid".
  //   */
};
