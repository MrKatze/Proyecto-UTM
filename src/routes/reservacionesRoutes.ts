import { Router } from 'express';
import { reservacionesController } from '../controllers/reservacionesController';
import { validarToken } from '../middleware/auth';

class ReservacionesRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }

    config() : void{
        this.router.put('/modificar_reservacion/:id', validarToken, reservacionesController.modificar_reservacion);
        this.router.post('/hacer_reservacion/', validarToken, reservacionesController.hacer_reservacion);
        this.router.delete('/cancelar_reservacion/:id', validarToken, reservacionesController.cancelar_reservacion);
        this.router.get('/mostrar_reservaciones_por_fecha/:fecha', validarToken, reservacionesController.mostrar_reservaciones_por_fecha);
        this.router.post('/mostrar_reservaciones_por_rango_fecha/', validarToken, reservacionesController.mostrar_reservaciones_por_rango_fecha);
        this.router.put('/modificar_estado_reserva/:id', validarToken, reservacionesController.modificar_estado_reserva);
    }
}

const reservacionesRoutes = new ReservacionesRoutes();
export default reservacionesRoutes.router;