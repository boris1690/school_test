const validateRequest = (schema) => (req, res, next) => {
    console.log(1.1)
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        console.log(1.2)

        next();
        console.log(1.3)
    } catch (error) {
        const formattedErrors = error.errors.map((err) => ({
            path: err.path.join('.'),
            message: err.message,
        }));

        return res.status(400).json({
            error: "Validation error",
            detail: formattedErrors
        });
    }
}

module.exports = {
    validateRequest
};
