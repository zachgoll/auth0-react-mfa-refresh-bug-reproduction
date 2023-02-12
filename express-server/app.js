const express = require("express");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const cors = require("cors");

const app = express();

app.use(
  jwt.expressjwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://dev-mm-92021.us.auth0.com/.well-known/jwks.json",
    }),
    audience: "https://auth0-react-test-api/",
    issuer: "https://dev-mm-92021.us.auth0.com/",
    algorithms: ["RS256"],
  })
);

app.use(cors());

app.get("/", (req, res, next) => {
  console.log(req.auth);
  res.json({ test: true });
});

app.listen(8080, () =>
  console.log("Server listening at http://localhost:8080")
);
