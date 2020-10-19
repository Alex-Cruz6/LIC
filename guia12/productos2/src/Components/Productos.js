import React, { Component } from 'react';
//agregamos referencia al archivo json
import ListaProductos from '../data/productos.json';
import Card from './card';
class Productos extends Component {
    render() {
        //Recorrido del json para mostrar los datos en componente Card
        return (
            <div className="row">
                {ListaProductos.map((ProductosDetalle, index) => (
                    <Card
                        MarcaProducto={ProductosDetalle.value.marca}
                        NombreProducto={ProductosDetalle.value.nombre}
                        PresentacionProducto={ProductosDetalle.value.presentacion}
                    />
                ))}
            </div>
        );
    }
}
export default Productos;