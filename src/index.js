"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const mongoDB_1 = require("./config/mongoDB");
(0, mongoDB_1.connectDB)();
// Definicion del esquema de libros, un molde para los datos que enviare a la DB
const libroSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anio_publicacion: { type: Number, required: true },
    genero: { type: String, required: true }
}, { timestamps: true, versionKey: false });
const libroModelo = mongoose_1.default.model("libro", libroSchema);
libroSchema.set("strict", true);
const createLibro = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const libro = new libroModelo({
            titulo: "Hola",
            autor: "Mundo",
            anio_publicacion: 2023,
            genero: "Ficcion"
        });
        yield libro.save(); //InsertOne()
        console.log("✅ Libro creado con éxito.");
    }
    catch (error) {
        console.error(" Error creando el libro:", error);
    }
});
(0, mongoDB_1.connectDB)();
createLibro();
