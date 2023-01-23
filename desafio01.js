class producManager {
    constructor(){
        this.products = [];
    }

    getProduc = () =>{
        return this.products;
    }

    generadorIds = () => {
        const count  = this.products.length
        if(count === 0){
            return 1
        }else{
            return (this.products[count-1].id) + 1
        }
        
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error('el producto no puede ser agregado porque faltan datos');
           return
        }

        if(this.products.find(elem => elem.code === code)){
           console.error('el codigo ya existe');
           return
        }
        
        const id = this.generadorIds();

        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })

    }

    getProductById = (id) =>{
        let prod = this.products.find(elem => elem.id == id)
        if (prod != undefined){
            return prod
        }else{
            return console.log('el Id no corresponde a ningun producto')
        }
        
            
       
    }
}

const producto = new producManager();

producto.addProduct('plancha','plancha de uso dosmetico', 1500, 'una ruta de imagen', '10010',5)
producto.addProduct('cocina','cocina de 4 hornallas ', 45000, 'una ruta de imagen', '10011',6)
producto.addProduct('lavarropas','capacidad de 9kg', 90000, 'una ruta de imagen', '10012',9)

console.log(producto.getProduc())

console.log(producto.getProductById(2))
