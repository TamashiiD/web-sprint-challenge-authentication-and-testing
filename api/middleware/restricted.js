const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'token required' });
  }

  try {
   
    if (isValidToken(token)) {
      next();
    }
    else{
      return res.status(401).json({ message: 'token invalid' })
    }
   
  } catch (error) {
    return res.status(401).json({ message: 'token invalid' });
  }

}



function isValidToken(token) {
  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, "keep it secret");

    // Perform additional checks or validations
    // For example, you could check the token expiration
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTimestamp) {
      // Token is expired
      return false;
    }

    // Return true if the token is considered valid
    return true;
  } 
  catch (error) {
    // Return false if there's any error during token verification
    return false;
  }
}


  //   /*
  //     IMPLEMENT

  //     1- On valid token in the Authorization header, call next.

  //     2- On missing token in the Authorization header,
  //       the response body should include a string exactly as follows: "token required".

  //     3- On invalid or expired token in the Authorization header,
  //       the response body should include a string exactly as follows: "token invalid".
  //   */

