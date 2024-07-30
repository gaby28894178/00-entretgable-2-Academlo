const catchError = require('../utils/catchError');
const Productos = require('../models/productos.Models');

// Get All
const getAll = catchError(async (req, res) => {
    const product = await Productos.findAll();
    return res.json(product);
});

// Get One
const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const product = await Productos.findByPk(id);
    return !product ? res.status(404).json({ msj: 'Nada q Mostrar' }) : res.json(product);
});

// POST
const create = catchError(async (req, res) => {
    const product = await Productos.create(req.body);
    return res.status(201).json(product);
});

// UPDATE
const update = catchError(async (req, res) => {
    const { id } = req.params;
    const product = await Productos.update(req.body, { where: { id }, returning: true });
    return product[0] === 0 ? res.sendStatus(404) : res.json(product[1][0]);
});

// DELETE
const destroy = catchError(async (req, res) => {
    const { id } = req.params;
    const product = await Productos.destroy({ where: { id } });
    return !product ? res.status(404).json({ msj: 'Nada Para mostrar' }) : res.status(204).json({ msg: 'Dato Eliminado con Exito' });
});

module.exports = {
    getAll,
    getOne,
    create,
    update,
    destroy
};