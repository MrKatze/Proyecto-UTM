"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservacionesController = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos
class ReservacionesController {
    mostrar_reservaciones_por_fecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fecha } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM reservaciones WHERE FechaEntrada = ?', [fecha]);
            res.json(respuesta);
        });
    }
    mostrar_reservaciones_por_rango_fecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechas = req.body;
            var consulta = `SELECT * FROM reservaciones WHERE FechaEntrada >= '${fechas.FechaUno}' AND FechaEntrada <= '${fechas.FechaDos}'`;
            const resp = yield database_1.default.query(consulta);
            res.json(resp);
        });
    }
    hacer_reservacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos_reserva = req.body;
            var insert_reserva = `INSERT INTO Reservaciones (IDCuenta, FechaEntrada, FechaSalida, HoraLlegada) VALUES ('${datos_reserva.IDCuenta}', '${datos_reserva.FechaEntrada}', '${datos_reserva.FechaSalida}', '${datos_reserva.HoraLlegada}')`;
            const consulta = yield database_1.default.query(insert_reserva);
            res.json(consulta);
            console.log(consulta);
            var insert_detallesReser = `INSERT INTO DetallesReservacion (IDReservacion, IDHabitacion, CantidadHabitaciones) VALUES ('${consulta.insertId}', '${datos_reserva.IDHabitacion}', '${datos_reserva.CantidadHabitaciones}');`;
            const consulta2 = yield database_1.default.query(insert_detallesReser);
            res.json(consulta2);
            var update = `UPDATE disponibilidadporfecha SET TotalHabitacionesDisponibles = TotalHabitacionesDisponibles - '${datos_reserva.CantidadHabitaciones}' WHERE Fecha = '${datos_reserva.FechaEntrada}' AND IDTipoHabitacion = '${datos_reserva.IDHabitacion}'`;
            const consulta3 = yield database_1.default.query(update);
            res.json(consulta3);
        });
    }
    modificar_reservacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const resp = yield database_1.default.query("UPDATE reservaciones set ? WHERE IDReserva = ?", [req.body, id]);
            res.json(resp);
        });
    }
    cancelar_reservacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM reservaciones WHERE IDReserva = ${id}`);
            const resp2 = yield database_1.default.query(`DELETE FROM detallesreservacion WHERE IDReservacion = ${id}`);
            res.json(resp);
        });
    }
    modificar_estado_reserva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resp = yield database_1.default.query('UPDATE reservaciones SET ? WHERE IDReserva = ?', [req.body, id]);
            console.log(req.body);
            res.json(resp);
        });
    }
}
exports.reservacionesController = new ReservacionesController();
