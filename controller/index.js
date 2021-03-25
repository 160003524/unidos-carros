const { response, request } = require('express');



const NuevoCarro = (req, res = response) => {

   const {placa,marca,propietario} = req.body;
   //const carro = new Carro({placa,marca,propietario})
    res.json({
        msg: 'se inserto el nuevo carro',
        //carro
        placa,
        marca,
        propietario
    });
}

module.exports= {NuevoCarro};