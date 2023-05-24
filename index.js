const express = require('express');
const hbs = require('express-handlebars');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
const { db } = require('./utlis/db');

const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.static('public'));
app.use(express.json());
app.engine(
	'.hbs',
	hbs.engine({
		extname: '.hbs',
		// helpers: handlebarsHelpers,
	})
);
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);
app.get('/test', (req, res) => {
	res.send(db.getOne('14781bbd-d6de-4e21-95f8-c11c407395b2').name);
});

app.listen(3000, 'localhost', () => {
	console.log(`Server started on port 3000`);
});
