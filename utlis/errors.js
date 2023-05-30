class ValidationError extends Error {}

function handleError(err, req, res, next) {
    res.render('error', {
        message: err instanceof ValidationError ? err.message : 'Przepraszamy spróbuj ponownie za jakiś czas.',
    })
}


module.exports = {
    handleError,
    ValidationError,
}