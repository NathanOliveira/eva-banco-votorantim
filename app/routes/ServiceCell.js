controller = require('../controller/ServiceCellController');
module.exports = function (app) {

    app.post('/servicecell',(req,resp) => {
        controller.ServiceCell(req,resp);
    })

}