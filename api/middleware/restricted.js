const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({message: "Did you hear about the guy whose"});
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key');

    // You can optionally attach the decoded user information to the request for further processing
    req.user = decoded;

    // Call next to proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: 'token invalid' });
  }
}

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

