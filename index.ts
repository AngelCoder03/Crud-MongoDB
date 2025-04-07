import mongoose, {Document,Schema} from "mongoose";
import { connectDB } from "./config/mongoDB";

connectDB()

//  Schema de libros:
//Titulo -> string -> required
//Autor ->sting -> required
//Anio_publicacion -> number -> required
//Genero -> string -> required


// Definicion de la interfaz de libro para el propio programa
interface libro extends Document {
    titulo: string;
    autor: string;
    anio_publicacion: number;
    genero: string;
}
// Definicion del esquema de libros, un molde para los datos que enviare a la DB
const libroSchema : Schema = new Schema<libro>({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anio_publicacion: { type: Number, required: true },
    genero: { type: String, required: true }
})
