"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservacionesController_1 = require("../controllers/reservacionesController");
const auth_1 = require("../middleware/auth");
class ReservacionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.put('/modificar_reservacion/:id', auth_1.validarToken, reservacionesController_1.reservacionesController.modificar_reservacion);
        this.router.post('/hacer_reservacion/', auth_1.validarToken, reservacionesController_1.reservacionesController.hacer_reservacion);
        this.router.delete('/cancelar_reservacion/:id', auth_1.validarToken, reservacionesController_1.reservacionesController.cancelar_reservacion);
        this.router.get('/mostrar_reservaciones_por_fecha/:fecha', auth_1.validarToken, reservacionesController_1.reservacionesController.mostrar_reservaciones_por_fecha);
        this.router.post('/mostrar_reservaciones_por_rango_fecha/', auth_1.validarToken, reservacionesController_1.reservacionesController.mostrar_reservaciones_por_rango_fecha);
        this.router.put('/modificar_estado_reserva/:id', auth_1.validarToken, reservacionesController_1.reservacionesController.modificar_estado_reserva);
    }
}
const reservacionesRoutes = new ReservacionesRoutes();
exports.default = reservacionesRoutes.router;
