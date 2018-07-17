module.exports = function(req, res, next){
    res.status(404);


    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }

};