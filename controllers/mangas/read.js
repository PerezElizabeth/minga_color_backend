//por ahora COMO NO VOY A DEVOLVER LOS CAPITULOS
//voy a definir un controlador SINCRONO
export default function(req,res){
    try{
        return res.status(200).json({
            success:true,
            response:'luego nos vamos a conectar a mongo en el sprint 3',
            message:'/mangas'
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            response:null,
            message:error.message
        })
    }
}