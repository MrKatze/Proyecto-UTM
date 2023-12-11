import { Router } from 'express';
import { rolesController } from '../controllers/rolesController';
import { validarToken } from '../middleware/auth';

class RolesRoutes{
    public router: Router=Router();
    constructor(){
        this.config();
    }

    config() : void{
        //this.router.get('/mostrarTodosRoles/',(req,res) => res.send('probando Roles'));
        this.router.get('/mostrarTodosRoles/', validarToken, rolesController.mostrar_todos_roles);
        this.router.get('/obtenerRol/:id', validarToken, rolesController.listOne);
        this.router.post('/crearRol/', validarToken, rolesController.createRol);
        this.router.put('/actualizarRol/:id', validarToken, rolesController.actualizarRol);
        this.router.delete('/eliminarRol/:id', validarToken, rolesController.eliminarRol);
    }
}

const rolesRoutes= new RolesRoutes();
export default rolesRoutes.router;