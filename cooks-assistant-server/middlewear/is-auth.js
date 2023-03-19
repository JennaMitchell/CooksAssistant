const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Auth Header Failure.", status: 401 });
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JSW_PASS);
    console.log(decodedToken);

    if (!decodedToken) {
      console.log(20);
      return res
        .status(401)
        .json({ message: "Not Authenticated!", status: 401 });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err, message: "Server Error" });
  }
  req.userId = decodedToken.userId;

  console.log("NEXT");

  next();
};
