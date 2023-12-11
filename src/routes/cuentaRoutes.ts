import { Router } from 'express';
import { cuentaController } from '../controllers/cuentaController';
import { validarToken } from '../middleware/auth';

class RolesRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config() : void{
        this.router.put('/actualizar_cuenta/:id', validarToken, cuentaController.actualizar_cuenta);
        this.router.post('/crear_cuenta/', validarToken, cuentaController.crear_cuenta);
        this.router.delete('/eliminar_cuenta/:id', validarToken, cuentaController.eliminar_cuenta);
        this.router.get('/mostrar_cuenta/:id', validarToken, cuentaController.mostrar_cuenta);
        this.router.get('/mostrar_todas_cuentas/', validarToken, cuentaController.mostrar_todas_cuentas);
        this.router.post('/validar_cuenta/', validarToken, cuentaController.validar_cuenta);
    }
}

const rolesRoutes = new RolesRoutes();
export default rolesRoutes.router;