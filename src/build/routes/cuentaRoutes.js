"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaController_1 = require("../controllers/cuentaController");
const auth_1 = require("../middleware/auth");
class RolesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.put('/actualizar_cuenta/:id', auth_1.validarToken, cuentaController_1.cuentaController.actualizar_cuenta);
        this.router.post('/crear_cuenta/', auth_1.validarToken, cuentaController_1.cuentaController.crear_cuenta);
        this.router.delete('/eliminar_cuenta/:id', auth_1.validarToken, cuentaController_1.cuentaController.eliminar_cuenta);
        this.router.get('/mostrar_cuenta/:id', auth_1.validarToken, cuentaController_1.cuentaController.mostrar_cuenta);
        this.router.get('/mostrar_todas_cuentas/', auth_1.validarToken, cuentaController_1.cuentaController.mostrar_todas_cuentas);
        this.router.post('/validar_cuenta/', auth_1.validarToken, cuentaController_1.cuentaController.validar_cuenta);
    }
}
const rolesRoutes = new RolesRoutes();
exports.default = rolesRoutes.router;
