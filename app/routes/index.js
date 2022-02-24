
const routes = require('./contact.routes');

function route(app) {
   
    app.use("/api/contacts", routes);
    
    app.use((err, req, res, next) => {
        // Middleware xử lý lỗi tập trung.
        // Trong các đoạn code xử lý ở các route, gọi next(error)
        // sẽ chuyển về middleware xử lý lỗi này
        errorHandler.handleError(error, res);
        });
}

module.exports = route; 