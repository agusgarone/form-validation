function isEmail(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);

}
$("#boton").click(function(){

    var campovacio = "";
    var msjerror = "";
    if ($("#email").val() == "") {
        campovacio = campovacio + "email <br>";
    }

    if ($("#telefono").val() == "") {
        campovacio = campovacio + "telefono <br>";
    }

    if ($("#password").val() == "") {
        campovacio = campovacio + "contraseña <br>";
    }

    if ($("#confpass").val() == "") {
        campovacio = campovacio + "confirmacion <br>";
    }
    if (campovacio!= "") {
        msjerror = "<p>Los campos vacios son los siguientes: </p>" + campovacio + msjerror;
    }
    //validacion de mail
    if(isEmail($("#email").val()) == false){
        msjerror = msjerror + "<p> Tu direccion de mail no es valida </p>";
    }
    //validacion telefonica
    if($.isNumeric($("#telefono").val())== false){
        msjerror = msjerror + "<p> Ese telefono no es valido </p>";
    } 
    //validacion de contraseña
    if($("#password").val() != $("#confpass").val()){
       
        msjerror = msjerror + "<p> La contraseña no es la misma </p>";
    }

    if (msjerror != "") {
        $("#mensajeError").html(msjerror);
    }else{
        $("#exito").html("Te has registrado con exito!");
    }

});