const { response } = require('express');
const pool = require('../db/config');


const getcarros = async (req, res) => {
    try {
        const resp = await pool.query('SELECT * FROM carros');
        console.log(resp.rows);
        res.status(200).json(resp.rows);
    } catch (error) {
        return res.status(400).json(resp);
    }
}

module.exports = {
    getcarros
}