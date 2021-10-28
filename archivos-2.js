const fs = require('fs');

class Contenedor {
  constructor(archivo){
    this.archivo = archivo;
}

      save(){
        let data = fs.readFileSync('Productos.txt', 'utf-8');
        let myData = JSON.parse(data);

        let filterId = myData.map((e)=>{
          return `${e.id}`
      })
        let newId = filterId.length + 1 ;
        
        console.log("New Id", newId);

        myData.push({'title':this.title, 'price':this.price, 'id':newId});
        let myDataTxt = JSON.stringify(myData)
        fs.appendFile("Productos.txt",myDataTxt,(err) =>{
          if (err) {
          console.log("Falló", err);
          }else{
          console.log("Funcionó");
        }
      })
      }

      getById(num){
        let data = fs.readFileSync('Productos.txt', 'utf-8');
        let myData = JSON.parse(data);

        let filterId = myData.map((e) =>{
          return `${e.id}`
        })

        let result = myData.find((element) => {
          return element.id == num;
      })

      if (result === undefined) {
        console.log("Vacio");
      }else{
        console.log("Id Objeto",result);
      }

      }

      getAll(){
        let data = fs.readFileSync('Productos.txt', 'utf-8');
        let myData = JSON.parse(data); 
        console.log("Productos", myData);
      }

      deleteById(num){
        let data = fs.readFileSync('Productos.txt', 'utf-8');
        let myData = JSON.parse(data);

        let deleteId = myData.filter((a) => {return a.id !==num})
        let upDated = JSON.stringify(deleteId)

        fs.writeFile("Productos.txt", upDated, (err) => {
            if(err){
                console.log("error", err)
            }
            else(console.log("Objets deleted by Id number"))
        })
    }
    deleteAll(){
      fs.unlink("Productos.txt")
      console.log("Todo borrado");
    }


}

const file = process.argv[2];
let fileContainer = new Contenedor (file);

fileContainer.save();
// fileContainer.getById();
// fileContainer.getAll();
// fileContainer.getAll();
// fileContainer.deleteAll();

