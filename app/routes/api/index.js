const apiRoutes = async (app, options) => {
    // app.register(require('./servicecell/serviceCell'));
    app.register(require('./transacionalcell/transacionalCell'));
};

module.exports = apiRoutes;