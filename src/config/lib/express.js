const userRoutes = require('../../modules/user/user.routes');
const express = require('express');

module.exports = function () {
const app = express();
app.use(express.json());

userRoutes(app);

app.set('port', process.env.PORT);

return app;
}