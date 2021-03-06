const fs = require('fs');

let obj =  {                                                                                                                                                    
    title: 'Escuadra2',                                                                                                                                 
    price: '325',                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                                                                                                                                                                 
}


class Contenedor {

constructor(archivo){
    this.archivo = archivo;
    }

    async save(producto){
        try {

        // Verificar si ya existe un producto 
        let products = producto
        this.getAll()
        console.log("Productos:",products);
        let newId;
        console.log("Nuevo ID:",newId);

        products.lengh === 0 ? newId = 1 : newId = products[products.lengh -1].id + 1 ;
        let newProduct = {...products, id : newId}
        await fs.writeFile.promises(this.archivo, newProduct,'utf-8');
        return newId;
    
        } catch (error) {
            console.log("No pudimos, error metodo save()",error);
        }
    }
    
    async getById(num){
        try{
        let data = await fs.promises.readFile(this.archivo, 'utf-8');
        let misdatos = JSON.parse(data);
        
        
        let filtroid = misdatos.map(function(element){
            return `${element.id}`
        })

        let resultado = misdatos.find(function(e){
            return e.id == num;
        });

        if (resultado === undefined){
            console.log("Objeto no encontrado")
        }else{
            console.log("Objeto Filtrado por Id: ", resultado)
        }
        }
        catch(error){
        console.log("Error metodo getById() ",error);
    }
}
    async getAll(){
    try {
        let data = await fs.promises.readFile(this.archivo, 'utf-8');
        let misdatos = JSON.parse(data); 
        console.log(misdatos)

    } catch (error) {
        console.log("Error en el metodo getAll() ",error);
    }
}
    async deleteById(num){
    try {
        let data = await fs.promises.readFile(this.archivo, 'utf-8');
        let misdatos = JSON.parse(data);
        
        let deleteData = misdatos.filter((a) => {return a.id !== num})
        let actualizado = JSON.stringify(deleteData);
        
        fs.writeFile("productos.txt", actualizado, (err) => {
        if (err) {
        console.log("error");
        }else
        (console.log("Objeto borrado de la lista"));
        })
        } 
    catch (error) {
            console.log("Errores en el metodo deleteById()",error);
        }
    }

    async deleteAll(){
        try {
        await fs.promises.unlink("Productos.txt")
        console.log("Todo borrado");
        }
        catch (error) {
        console.log("Error en el metodo deleteAll()",error);
        }
    }
}

const file = process.argv[2];
let fileContainer = new Contenedor (file);

fileContainer.save(obj);
// fileContainer.save(2,"Torta",300);
// fileContainer.save(2,"Torta Fritas",200);
// fileContainer.save(2,"Media lunas",280);
//? Hay un error con el metodo save() un error con el callback que no entiendo
//? Funcion?? el appendFile() creo el archivo y tambi??n guardo el obj en JSON(string)en el archivo
// fileContainer.getById(2);
//? Hay un error con metodo getById() en el JSON.parce() no entiendo lo que puede ser.
// fileContainer.getAll();
//? Hay un error con metodo getAll() en el JSON.parce() no entiendo lo que puede ser.
// fileContainer.deleteById(1);
//? Hay un error con metodo deleteById() en el JSON.parce() no entiendo lo que puede ser.
// fileContainer.deleteAll(); 
//? El metodo deleteAll() worked

//* No entiendo como trabajar con el this.archivo del contructor seguramente es por eso los errores

