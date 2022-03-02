const config = {
    app: {
        port: process.env.PORT || 27017,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/contact"
    }
};

module.exports = config;