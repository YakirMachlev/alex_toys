module.exports = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    res.status(400).json({
        status: 'fail',
        message: err.message
    })
}