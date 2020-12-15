function getProducts(req, resp) {

    console.log('body', req.body)

    let answer = req.body.answer;

    let buttons = [
        {name: "Conta Corrente", value: "Conta Corrente"},
        {name: "Poupança", value: "Poupança"},
        {name: "Carteira de investimentos", value: "Carteira de investimentos"}
    ]

    answer.content.buttons = buttons;

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        answer
    }


    resp.status(200).send(response);
    
}

function getPhones(req, resp) {

    var answer = req.body.answer;

    var buttons = [
        {name: "(11) 1234-5678", value: "C:123456"},
        {name: "(11) 1111-1111", value: "C:123456"},
        {name: "(11) 2222-2222", value: "C:123456"}
    ]
    answer.content.buttons = buttons;

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        answer
    }

    resp.status(200).send(response);
}
function replace(req,resp){
    var answerText = req.body.answer.content.content;
    for(var parameter in req.query){
        answerText = answerText.replace(`__${parameter}__`,req.query[parameter]);
    }
    var answer = req.body.answer;
    answer.content.content = answerText; 
    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        answer
    }
    resp.status(200).send(response);
}

module.exports = {
    getProducts,
    getPhones,
    replace
};