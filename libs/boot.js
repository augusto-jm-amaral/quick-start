module.exports = function(app) {
    app.listen(app.get('port'), () => {
        console.log('Quick Start Online - porta ' + app.get('port'));
    });
};
