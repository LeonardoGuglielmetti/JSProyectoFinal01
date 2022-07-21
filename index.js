
const contenedor = document.getElementById("turnos");

const TURNOS =[
   
{   
    id: 1,
    nombre: "Turno 08:00 hs",
    profesora: "Diana",
    lugares: "Lugares Disponibles: 3",
    imagen: "https://dw24840-diegogarciamellado.000webhostapp.com/img/nosotros_2.png"

},
{
    id: 2,
    nombre: "Turno 10:00 hs",
    profesora: "Josefina",
    lugares: "Lugares Disponibles: 5",
    imagen: "https://dw24840-diegogarciamellado.000webhostapp.com/img/nosotros_1.png",

},
];



const cargarTurnos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? getRow(el) : getCard(el);
    })
    console.log(acumulador);
    nodo.innerHTML = acumulador;
    carritoStorage();
    
    
    
    
};

const reservarClase = (id) =>{
    const seleccion = TURNOS.find(item => item.id===id);
    

   
    carrito.push({
        id: seleccion.id,
        nombre: seleccion.nombre,
        profesora: seleccion.profesora,
        lugares: seleccion.lugares,
        imagen: seleccion.imagen,
    })
    
  
    cargarTurnos(carrito, tablaCarrito, true);
    carritoStorage();
    
    
    
}

cargarTurnos(TURNOS, contenedor, false);
