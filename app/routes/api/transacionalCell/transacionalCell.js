const controller = require("../../../controller/transacionalCell/transactionalCellController");

const transacionalRoutes = async (app, options) => {
    app.post('/transactionalCell/usuario/dados/obter', (request, resp) => {
        return controller.getUsers(request, resp);
    });
};

module.exports = transacionalRoutes;