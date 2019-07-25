const express = require('express');

const app = express();

const port = 3300;

app.get('/test', (req, res) => {
	console.log(req.headers);
	res.send('hello');
});

app.listen(port, () => {
	console.log(`server started at port ${port}`);
})