const controller = require('../controller/TransactionAnswer');
module.exports = (app) =>{

    app.post('/transactionalCell/setPhones',(req,resp) => {
        controller.getPhones(req,resp);
    });

}