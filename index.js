

let alunos = []


function enviar() {

    if (document.querySelector(".nome-form").value == "" || document.querySelector(".idade-form").value == "" || document.querySelector(".email-form").value == ""){
        alert("Preencha todos os campos(Nome, Idade, E-mail)")
    }else {
        let aluno = {}

        
        aluno.nome = document.querySelector(".nome-form").value
        aluno.idade = parseInt(document.querySelector(".idade-form").value)
        aluno.email = document.querySelector(".email-form").value
        aluno.maiorIdade = document.querySelector('.maiorIdade').checked
        aluno.newsletter = document.querySelector(".newsletter").checked
        aluno.msg = document.querySelector(".msg-txt").value

        const radiobox = document.getElementById("radiobox")
        radiobox.checked = false
        
        const check = document.getElementById("checkbox")
        check.checked = false

        
        
        alunos.push(aluno)

        
        console.log(aluno) 
    }
    // if (document.querySelector(".nome-form").value == ""){
    //     alert("Campo NOME obrigatorio")
    // }else if (document.querySelector(".idade-form").value == ""){
    //     alert("Campo IDADE obrigatorio.")
    // }else{
    //     alert("Formulario enviado com sucesso")
    // }
    
}
console.log(alunos)

function limpar() {

    document.querySelector(".nome-form").value = ""
    document.querySelector(".idade-form").value = ""
    document.querySelector(".email-form").value = ""
    document.querySelector(".msg-txt").value = ""

    const radioBtn2 = document.querySelector(".maiorIdade")
    radioBtn2.checked = false
    

    const check = document.getElementById("checkbox")
    check.checked = false
    
    document.getElementById("alerta-nome").innerHTML = "";
    document.getElementById("alerta-idade").innerHTML = "";
    document.getElementById("alerta-email").innerHTML = "";
    document.getElementById("alerta-msg").innerHTML = "";
}
    


