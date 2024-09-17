const d = document,
        w = window;

w.onload = () => {
    d.getElementById("enviar-get").onclick = validarDatosGET;
    d.getElementById("enviar-post").onclick = validarDatosPOST;
}

function validarDatosGET(){
    const nombre = d.getElementById("name-get").value,
            password = d.getElementById("password-get").value,
            sexo = d.getElementsByName("sexo_rdo");
    
    let validar = true;

    if(!nombre){
        alert("El nombre esta vacio");
        validar = false;
    } else if(!password){
        alert("Ingresa contraseña");
        validar = false;
    } else if(!sexo[0].checked && !sexo[1].checked){
        alert("Selecciona el sexo");
        validar = false;
    }

    if(validar){
        d.getElementsByName("valida_get_frm")[0].submit();
        console.log("asd");
    }
};

function validarDatosPOST(){
    const nombre = d.getElementById("name-post").value,
            password = d.getElementById("password-post").value,
            sexo = d.getElementsByName("sexo_rdo-post");
    
    let validar = true;

    console.log("post")

    if(!nombre){
        alert("El nombre esta vacio");
        validar = false;
    } else if(!password){
        alert("Ingresa contraseña");
        validar = false;
    } else if(!sexo[0].checked && !sexo[1].checked){
        alert("Selecciona el sexo");
        validar = false;
    }

    if(validar){
        d.getElementsByName("valida_post_frm")[0].submit();
        console.log("asd");
    }
};