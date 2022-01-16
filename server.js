const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const Router = require('koa-router');
const faker = require('faker');
const slow = require('koa-slow');

const router = new Router();
const app = new Koa();

const news = {
    date: 'date',
    img: 'http://url.com',
    text: 'Dune - 2021'
}

app.use(koaBody({
    text: true,
    urlencoded: true,
    multipart: true,
    json: true,
}));

app.use(cors({
    origin: '*',
    credentials: true,
    'Access-Control-Allow-Origin': true,
    allowMethods: ['GET']
}));

router.get('/news', async (ctx) => {
    ctx.response.body = news;
    ctx.status = 200;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3333;
app.listen(port, () => console.log('Server started'));