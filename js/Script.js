function validar()
{
    var nombre = document.formulario.txt_nombre.value
    var apellidos = document.formulario.txt_apellidos.value
    var telefono = document.formulario.txt_telefono.value
    var correo = document.formulario.txt_correo.value
    var rut = document.formulario.txt_rut.value
    var checkbox1 = document.formulario.checkbox1.value

    if (nombre.length<3)
    {
        alert("Nombre debe tener al menos 3 caracteres")
        document.formulario.txt_nombre.focus();
        return false;
    }
    if (apellidos.length<3)
    {
        alert("Apellidos debe tener al menos 3 caracteres")
        document.formulario.txt_apellidos.focus();
        return false;
    }
    if (rut.length<9 || rut.length>10)
    {
        alert("RUT debe tener entre 9 y 10 caracteres")
        document.formulario.txt_rut.focus()
        return false
    }
    if (telefono.substring(0,1)!="9" || telefono.length<8|| telefono.length>9)
    {
        alert("Teléfono debe comenzar con 9 y debe contener 9 caracteres")
        document.formulario.txt_telefono.focus()
        return false;
    }
    if (correo.indexOf('@')<0 || correo.indexOf('.')<0)
    {
        alert("Debe ingresar un correo correcto")
        document.formulario.txt_correo.focus()
        return false
    }
    if (checkbox1.checked === false)
    {
        alert("No haz aceptado nuestros términos y condiciones")
    }
    alert("Todo correctamente ingresado")
    document.formulario.action() = "..."
}