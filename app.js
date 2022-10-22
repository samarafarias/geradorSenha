let slider = document.querySelector("#slider");
let button = document.querySelector("#button");
let valor = document.querySelector("#valor");
let senha = document.querySelector("#senha");
let containerSenha = document.querySelector("#container-senha");


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
let novaSenha = "";


valor.innerHTML = slider.value;
slider.oninput = function(){
    valor.innerHTML = this.value;
}

function gerarSenha(){
    let pass = "";
    for(let i=0, n= charset.length; i < slider.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));    
    }

    containerSenha.classList.remove("hide");
    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha(){
    alert("senha copiada");
    navigator.clipboard.writeText(novaSenha);
}