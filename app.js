const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res,) => {
  res.status(404).send('<h1>Error 404, Page Not Found</h1>');
});

app.listen(PORT);