import datos from "../datos/datos.json"

export const pedidoDeDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
    resolve(datos);
}, 500)
    })
}
export const pedirItemId =(id)=>{
return new Promise((resolve, reject) => {
    const item =datos.find ((el) => el.id===id)
    if (item){
        resolve(item)
    }
    else{
        reject({
            error :"no se encontro el producto"
        })
    }
})
}