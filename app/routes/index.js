
const routes = require('./contact.routes');

function route(app) {
   
    app.use("/api/contacts", routes);
}

module.exports = route; 