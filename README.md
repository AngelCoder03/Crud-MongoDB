# Crud-MongoDB
## CRUD basico creado con Typescript,NodeJS y MongoDB

## Mi crud toma como base la gestion basica de una libreria, cada libro contiene titulo,autos,año de publicacion y genero.

## Contiene funciones las cuales pueden retornar un libro en especifico tomando como parametro el ID del mismo u obtener directamente todos los lisbros en la DB utilizando las funciones de mongoose.

## Hay tambien funciones para actualizar los datos de un libro en la que recibe como parametro el ID del libro a modificar y un objeto con los datos que se actualizaran, todo eso especificado con partial<LibroInterface>.

## Tambien esta la funcion de borrarLibroById la cual toma como parametro el ID del libro en cuestion y lo elimina utilizando el deleteById de Mongoose.

## Por ultimo esta la funcion que permite agregar un libro nuevo que creando una instancia nueva de LibroModelo y luego save(), inserta un nuevo libro en la DB por ahora no de manera dinamica.
