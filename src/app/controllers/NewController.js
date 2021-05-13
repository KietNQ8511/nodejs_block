class NewController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('it details ... ');
    }

}

module.exports = new NewController;
