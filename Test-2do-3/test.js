const fs = require('fs');

class Contenedor {

constructor(archivo){
    this.archivo = archivo;
    }

    async save(producto){
        try {
        // Verificar si ya existe un producto 
        let products = producto;

        if (products.hasOwnProperty('id') === false) {
            products.id = 1 
        } else {
            products.id += 1;
        } 
        console.log("Productos:",products);

        let newProducts = JSON.stringify(products)

        await fs.promises.writeFile(this.archivo, newProducts,'utf-8');
        // return products.newId;
    
        } catch (error) {
            console.log("No pudimos, error metodo save()",error);
        }
    }
}

let obj =  {                                                                                                                                                    
    title: 'Escuadra2',                                                                                                                                 
    price: '325',                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                                                                 
}
let obj2 =  {                                                                                                                                                    
    title: 'Escuadra3',                                                                                                                                 
    price: '500',                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                                                                 
}
let obj3 =  {                                                                                                                                                    
    title: 'Escuadra4',                                                                                                                                 
    price: '600',                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                                                                 
}

const file = process.argv[2];
let fileContainer = new Contenedor (file);

fileContainer.save(obj);
fileContainer.save(obj2);
fileContainer.save(obj3);