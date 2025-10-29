const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('public'));
app.get('/health', (_req,res)=>res.status(200).send('ok'));
app.listen(port, '0.0.0.0', ()=>console.log('listening on '+port));
