var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    var filtro = this.value.toLowerCase(); // Convertendo o valor do filtro para minúsculas
    
    if(filtro.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent.toLowerCase(); // Convertendo o nome do paciente para minúsculas
            
            if(nome.indexOf(filtro) == -1){ // Verificando se o filtro não está no nome
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
