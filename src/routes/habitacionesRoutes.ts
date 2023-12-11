import { Router } from 'express';
import { habitacionesController } from '../controllers/habitacionesController';
import { validarToken } from '../middleware/auth';

class HabitacionesRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }

    config() : void{
        this.router.put('/actualizar_habitacion/:id', validarToken, habitacionesController.actualizar_habitacion);
        this.router.post('/crear_habitacion/', validarToken, habitacionesController.crear_habitacion);
        this.router.delete('/eliminar_habitacion/:id', validarToken, habitacionesController.eliminar_habitacion);
        this.router.get('/mostrar_habitacion/:id', validarToken, habitacionesController.mostrar_habitacion);
        this.router.get('/mostrar_todas_habitaciones/', validarToken, habitacionesController.mostrar_todas_habitaciones);
    }
}

const habitacionesRoutes = new HabitacionesRoutes();
export default habitacionesRoutes.router;