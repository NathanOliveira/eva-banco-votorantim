const controller = require('../controller/TransactionAnswer');
module.exports = (app) =>{

    app.post('/transactionalCell/setPhones',(req,resp) => {
        controller.getPhones(req,resp);
    });
    app.post('/transactionalCell/replace',(req,resp) => {
        controller.replace(req,resp);
    });

}