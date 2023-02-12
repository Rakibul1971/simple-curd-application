module.exports.start = function () {

const app = require('./express')();
app.listen(app.get('port'), function () {
    console.log("The port 3000 running successfully!");
});
}
