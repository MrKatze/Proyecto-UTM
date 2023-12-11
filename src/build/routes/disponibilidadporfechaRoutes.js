"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const disponibilidadporfechaController_1 = require("../controllers/disponibilidadporfechaController");
const auth_1 = require("../middleware/auth");
class DisponibilidadporFechaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrar_disponibilidad_fecha/:fecha', auth_1.validarToken, disponibilidadporfechaController_1.disponibilidadporfechaController.mostrar_disponibilidad_fecha);
        this.router.post('/agregar_disponibilidad/', auth_1.validarToken, disponibilidadporfechaController_1.disponibilidadporfechaController.agregar_disponibilidad);
    }
}
const disponibilidadporFechaRoutes = new DisponibilidadporFechaRoutes();
exports.default = disponibilidadporFechaRoutes.router;
