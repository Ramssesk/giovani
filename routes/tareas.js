const express = require('express');
const router = express.Router();
const {crearTarea, obtenerTareas, actualizarTarea, eliminarTarea} 
    = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');
 // crear una tarea
// api/tareas
router.post('/', 
    auth,
    [
        check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El Proyecto es obligatorio').not().isEmpty()
    ],
    crearTarea
);

// Obtener las tareas por proyecto
router.get('/',
    auth,
    obtenerTareas
);

// Actualizar tarea
router.put('/:id', 
    auth,
    actualizarTarea
);

// Eliminar tarea
router.delete('/:id', 
    auth,
    eliminarTarea
);

module.exports = router;