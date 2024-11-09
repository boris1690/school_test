const { ApiError } = require("../utils");

const handleGlobalError = (err, req, res, next) => {
    console.log('handleGlobalError');
    console.error(err);
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({ error: err.message });
    }

    return res.status(500).json({ error: err });
}

module.exports = { handleGlobalError };
