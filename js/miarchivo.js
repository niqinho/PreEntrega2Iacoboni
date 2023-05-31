class Producto{
    constructor( nombre , precio , stock ){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("INFORMACIÓN");
        console.log("Nombre: ", this.nombre)
        console.log("Precio: ", this.precio)
        console.log("Stock: ", this.stock)
        console.log("");
    }

    get_stock(){
        if( this.stock <= 0 ){
            return false
        }
        else{
            return true
        }
    }

    venta_stock( cantidad ){
        if( this.stock >= cantidad ){
            this.stock = this.stock - cantidad;
            return true
        }
        else{
            return false
        }
    }
}

let Listado = [];

Listado.push( new Producto("Minitorta" , 2500 , 10));
Listado.push( new Producto("Torta" , 5000 , 10));
Listado.push( new Producto("Chocotorta" , 500 , 10));
Listado.push( new Producto("Chocopostre" , 2000 , 10));
Listado.push( new Producto("Lemonpie" , 2555 , 0));
Listado.push( new Producto("Chocohelado" , 3000 , 10));
Listado.push( new Producto("Megatorta" , 5000 , 10));

console.log( "Listado de Productos" );

for( let Producto of Listado ){
    Producto.get_datos();
}

function Buscar_Producto( Producto ){
    return Producto.nombre == compra_usuario
}

let compra_usuario = prompt( "Hola, ingresá el nombre del producto que buscas" );
let resultado_producto = Listado.find( Buscar_Producto );

console.log( resultado_producto );

if( resultado_producto != undefined ){


if( resultado_producto.get_stock()){
    let Cantidad =  prompt("Ingresá la cantidad");
    if( resultado_producto.venta_stock( Cantidad )){
    console.log(`Compraste ${Cantidad} ${resultado_producto.nombre}`);
    }
    else{
        console.log( "No se puede realizar la transacción" )
        console.log( "El Stock disponible es de: ", resultado_producto.stock );
    }
}

else{
    console.log( "En este momento no disponemos de: ", resultado_producto.nombre );
}
}

else{
    console.log( "En este momento no disponemos de: ", compra_usuario );
}

