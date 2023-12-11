"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolesController_1 = require("../controllers/rolesController");
const auth_1 = require("../middleware/auth");
class RolesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/mostrarTodosRoles/',(req,res) => res.send('probando Roles'));
        this.router.get('/mostrarTodosRoles/', auth_1.validarToken, rolesController_1.rolesController.mostrar_todos_roles);
        this.router.get('/obtenerRol/:id', auth_1.validarToken, rolesController_1.rolesController.listOne);
        this.router.post('/crearRol/', auth_1.validarToken, rolesController_1.rolesController.createRol);
        this.router.put('/actualizarRol/:id', auth_1.validarToken, rolesController_1.rolesController.actualizarRol);
        this.router.delete('/eliminarRol/:id', auth_1.validarToken, rolesController_1.rolesController.eliminarRol);
    }
}
const rolesRoutes = new RolesRoutes();
exports.default = rolesRoutes.router;
