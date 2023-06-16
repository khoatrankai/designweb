const newsRouter = require('./news')
const orderRouter = require('./order')
const homeRouter = require('./home')
const createRouter = require('./create')
const meRouter = require('./me')
const editRouter = require('./edit')

function route(app) {
    app.use('/news', newsRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    app.use('/', homeRouter);
    app.use('/', orderRouter);
    app.use('/create', createRouter);
    app.use('/me', meRouter);
    app.use('/me/courses', editRouter);
    
    
}

module.exports = route;
