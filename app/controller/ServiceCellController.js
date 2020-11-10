function ServiceCell(req, resp) {
    const months = ["VALID", "NOT_VALID","VALID"];
    const random = Math.floor(Math.random() * months.length);
    
    var option = months[random];
    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        option
    }

    resp.status(200).send(response);
}

module.exports = {
    ServiceCell
}