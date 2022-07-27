function upload() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("02 - UPLOAD CONCLUÍDO")
                resolve()
            })
        }) 
}
async function uploadFoto () {
    console.log("01 - INICIANDO UPLOAD")
    await upload()
    console.log("03 - EXECUÇÃO FINALIZADA")     
}
uploadFoto()


