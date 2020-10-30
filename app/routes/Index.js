module.exports = function (app) {

    app.get('/',function(req,resp){
        resp.status(200).send('OK');
    })

}