const defaultRoutes = async (app, options) => {

    app.get('/', async (request, response) => {
        return response.status(200).send({
            success: true,
            statusCode: 200,
            message: 'Bem vindo a semana do conhecimento BV 2022'
        });
    });
};

module.exports = defaultRoutes;