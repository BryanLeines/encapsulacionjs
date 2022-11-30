var privado = (function(){
    var datoPrivado ="Este dato es privado";
    var metodoPrivado = function (tipoPrivado) {
        alert(datoPrivado+ "fecha: " +tipoPrivado);
    }
    return{
        datoPublico:"Este dato es publico",
        metodoPublico:function (argumentoPublico) {
            datoPrivado += "(Esto se vera a traves del Publico)";
            metodoPrivado(argumentoPublico);
        }
    }
})();
