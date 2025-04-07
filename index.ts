import { connectDB } from "./config/mongoDB";

connectDB()

//  Schema de libros:
//Titulo -> string -> required
//Autor ->sting -> required
//Anio_publicacion -> number -> required
//Genero -> string -> required