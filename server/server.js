const express=require('express');
//En caso de requerir lectura o escritura de archivos usar la línea de abajo
//const path=require('path');
const app=express();
const port=3000;
//Serve static files from the angular dist folder
//Usar la línea de abajo en caso de solo querer mostrar una sola página
//app.use(express.static(path.join(__dirname, '../signin/dist/signin')));
app.use(express.json());
//catch all the other routes and return the index file
//En caso de usar el path, usar las 3 líneas siguientes
//app.get('*',(req,res)=>{
//    res.sendFile(path.join(__dirname,'../signin/dist/signing/index.html'));
//});
app.post('/api/login',(req,res)=>{
    console.log(req.body);
    res.redirect('http://localhost:4200/dashboard/')
});
//Start the server
//En caso de usar el path de arriba usar la línea de abajo
//const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server escuchando en el puerto ${port}`);
});