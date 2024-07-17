import express from 'express';

const app = express();

app.get('/',(req, res) =>{
    res.send('Server is ready');
});
const PORT = process.env.port || 3000;

app.listen(PORT,()=>{
    console.log(`Server at http://localhost:${PORT}`)
});