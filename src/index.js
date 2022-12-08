/*Clase Miercoles*/

const express = require("express");
const movieAdminApp = express();
const bodyParser = require("body-parser");
const { application } = require("express");
require('dotenv').config();

let moviesDb = [
    {id: 0, title: "Matrix", year: "2000", price: 10}, 
    {id:1, title: "Matrix Reloaded", year: "2005", price: 25}
];

movieAdminApp.listen(process.env.PORT, () => {
    console.log("Server active");
})

//Route -> https://localhost:3000/

movieAdminApp.get('localhost:3000/:title', (req, res) => {
    const {title} = req.params;
    const searched = moviesDb.filter((movie) => movie.title === title)
    res.json(searched);
});

//Route -> https://localhost:3000/










/*Clase Lunes*/

// const express = require("express");
// const app = express();
// const bodyParser = require('body-parser');
// const port = 3000;
// let db = [
//     {id: 1, address: 'direccion 1'}, 
//     {id: 2, address: 'direccion 2'}, 
//     {id: 3, address: 'direccion 3'}
// ]

// app.listen(
//     port, () => {
//         console.log(`Servidor activo en el puerto ${port}`);
//     }
// );

// //https://localhost:3000

// app.get("/", (req, res) => {
//     res.send('metodo GET');
// });

// app.use(bodyParser.json());

// //https://localhost:3000/direcciones
// app.get("/direcciones", (req, res) => {
//     console.log('consumo endpoint GET');
//     //res.send('metodo GET');

//     const response = {
//         msg: 'direcciones obtenidas',
//         data: db,
//         status: 'ok',
//         total: db.length
//     }
//     res.json(response);
//     res.json(db);
// });

// //https://localhost:3000/direcciones
// app.post('/direcciones', (req, res) => {
//     console.log(req.body);
//     db.push(req.body);
//     // res.send('post');
//     const response = {
//         msg: 'direcciones obtenidas',
//         data: db,
//         status: 'ok',
//         total: db.length
//     }
//     res.json(response);
// });

// //https://localhost:3000/direcciones
// app.delete('/direcciones/:id', (req, res) => {
//     const {id} = req.params;
//     const direccion = db.find(direccion => {
//         return parseInt(direccion.id) === parseInt(id);
//     })

//     db.splice(db.indexOf(direccion), 1);
    

//     const resp = {
//         msg: 'direccion eliminada',
//         data: id,
//         status: 'ok',
//         total: db.length
//     }; 
//     res.json(resp);
// });

// ////https://localhost:3000/direcciones
// app.put('/direcciones/:id', (req, res) => {
//     const {id} = req.params;
//     const direccion = db.find(direccion => {
//         return parseInt(direccion.id) === parseInt(id);
//     });
//     direccion.address = req.body.address;
//     const response = {
//         msg: 'direcciones obtenidas',
//         data: db,
//         status: 'ok',
//         total: db.length
//     }
//     res.json(response);
// });

