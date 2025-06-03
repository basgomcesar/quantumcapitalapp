// src/lib/models/Client.js

/**
 * @typedef {Object} Reclamo
 * @property {number} id
 * @property {string} fechaReclamo
 * @property {string} descripcionReclamo
 * @property {string} dictamen
 * @property {number} idCredito
 */

/**
 * @typedef {Object} Credito
 * @property {number} id
 * @property {number} montoPrestado
 * @property {number} saldoPendiente
 * @property {string} fechaApertura
 * @property {number} plazoMesesAPagar
 * @property {number} idUsuario
 * @property {number} idDomicilioPersonal
 * @property {number} idDomicilioEmpleo
 * @property {number} idCalificacionMensual
 * @property {number} idEstadoCredito
 * @property {Reclamo[]} reclamos
 */