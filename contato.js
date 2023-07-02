const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Preencha o seu nome");
        return;
    }

    //verifica se o email está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Preencha o seu email");
        return;
    }

    //verificar a mensagem preenchida

    if(messageTextarea.value === ""){
        alert("preencha sua mensagem");
        return;
    }
    
    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();

});

//Função que valida o email
    function isEmailValid(email){

        //cria uma regex para validar email
        const emailRegex = new RegExp(
            //usuario12@host.com.br
            /^[a-zA=Z0-9._-]+@[a-zA=Z0-9._-]+\.[a-z]{2,}$/
        );

        if(emailRegex.test(email)){
            return true;
        }

        return false;

    }




