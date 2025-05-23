import mongoose, {Document,Schema} from "mongoose";
import { connectDB } from "./config/mongoDB";


connectDB()

//  Schema de libros:
//Titulo -> string -> required
//Autor ->sting -> required
//Anio_publicacion -> number -> required
//Genero -> string -> required


// Definicion de la interfaz de libro para el propio programa
interface libroInterface extends Document {
    titulo: string;
    autor: string;
    anio_publicacion: number;
    genero: string;
}
// Definicion del esquema de libros, un molde para los datos que enviare a la DB
const libroSchema : Schema = new Schema<libroInterface>({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anio_publicacion: { type: Number, required: true },
    genero: { type: String, required: true }},
    {timestamps: true,versionKey: false}
)

const libroModelo = mongoose.model<libroInterface>("libro", libroSchema);
libroSchema.set("strict",true)


const createLibro = async () => {
    try {
      const libro  = new libroModelo({
        titulo: "Hola",
        autor: "Mundo",
        anio_publicacion: 2023,
        genero: "Ficcion"
    });
      await libro.save(); //InsertOne()
      console.log("✅ Libro creado con éxito.");
    } catch (error) {
      console.error(" Error creando el libro:", error);
    }
  };

const borrarLibroById = async(id:string) =>{
  try {
    const resultado = await libroModelo.findByIdAndDelete(id)
    if (resultado){
      console.log("Libro eliminado exitosamente.")
    }else{
      console.log("No se encontro ningun libro con el id correspondiente.")
    }
  } catch (error) {
      console.error("Error al eliminar el libro",error)
    }
}

const encontrarLibroPorId = async(id:string) =>{
  try {
    const resultado = await libroModelo.findById(id)
    if (resultado){
      console.log(`Libro encontrado exitosamente : ${resultado}`)
    }else{
      console.log("No se encuentra ningun libro con ese id.")
    }
  } catch (error) {
      console.error("Error al intentar encontrar el libro.",error)
  }
}

const obtenerTodosLosLibros = async () => {
  try {
    const resultado = await libroModelo.find();
    console.log(" Libros encontrados:", resultado);
  } catch (error) {
    console.error(" Error al obtener los libros:", error);
  }
}

const actualizarLibro = async (id: string, nuevosDatos: Partial<libroInterface>) => {
  try {
    const libroActualizado = await libroModelo.findByIdAndUpdate(id, nuevosDatos, {
      new: true,
      runValidators: true 
    });

    if (libroActualizado) {
      console.log(" Libro actualizado con éxito:", libroActualizado);
    } else {
      console.log(" No se encontró ningún libro con ese ID.");
    }
  } catch (error) {
    console.error(" Error al actualizar el libro:", error);
  }
};



connectDB()
/* createLibro()
borrarLibroById('6805a22ecf88e555b5cd2cb5') 

encontrarLibroPorId('6805a25e2b296a1ac59b0d94')*/
obtenerTodosLosLibros()
actualizarLibro('68059dfe73ddac4f267eadc5',{titulo:"Holanda"})