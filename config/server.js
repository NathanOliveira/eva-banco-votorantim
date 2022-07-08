const app = require('fastify')({
    logger: true
})

//REGISTER ROUTERS
app.register(require('../app/routes/api/index'));

//WELCOME
app.register(require('../app/routes/index'));

var port = process.env.PORT || 80;

app.listen(port, process.env.APP_HOST, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`);
})