module.exports = {
    getUsers: (request) => {
        var answerText = request.body.answer.content.content;

        //REGRA: MUDAR USUARIO CONFORME PARAMETRO CONTEXT

        let listUser = [
            {
                id: 1,
                nome: "Nathan Oliveira",
                cpf: "042.791.110-90",
                saldo: "R$ 500.000,00",
                tipoCliente: "gold"
            },
            {
                id: 2,
                nome: "Flávio Benedetti",
                cpf: "421.100.770-00",
                saldo: "R$ 450.000,00",
                tipoCliente: "gold"
            },
            {
                id: 3,
                nome: "Vagner Souza",
                cpf: "367.764.980-32",
                saldo: "R$ 100.000,00",
                tipoCliente: "silver"
            },
            {
                id: 4,
                nome: "Priscila Veras",
                cpf: "172.146.630-40",
                saldo: "R$ 650.000,00",
                tipoCliente: "gold"
            },
            {
                id: 5,
                nome: "Nicole Fernanda",
                cpf: "592.541.820-44",
                saldo: "R$ 100.000,00",
                tipoCliente: "silver"
            }

        ];

        let idUsuario = request.body.hiddenContext.identificacaoUsuario ? request.body.hiddenContext.identificacaoUsuario : 1;

        let usuario = listUser.find(element => element.id == idUsuario);

        //REGRA: MONTAR REPLACE
        answerText = answerText.replace("__nome__", usuario.nome);
        answerText = answerText.replace("__cpf__", usuario.cpf);
        answerText = answerText.replace("__saldo__", usuario.saldo);

        var answer = request.body.answer;
        answer.content.content = answerText;

        return {
            openContext: request.body.openContext,
            visibleContext: request.body.visibleContext,
            hiddenContext: { ...request.body.hiddenContext, ...usuario },
            answer
        }
    },
}