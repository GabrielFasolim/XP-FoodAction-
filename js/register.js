function successMessage() {
    alert("Registro realizado com sucesso!");
}

function confirmFields() {
    user_name = document.getElementById("fname").value;
    user_last_name = document.getElementById("sname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("fphone").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirm_password").value;
    borned = document.getElementById("borned").value;

    if(user_name.length < 2 && user_last_name.length < 2) {
        alert("Informe um nome válido")
    }

    else if(email.length < 0) {
        alert("Informe um e-mail válido")
    }

    else if(phone.length < 11) {
        alert("Digite um número de contato contendo 2 dígitos para DDD e 9 números para o telefone.")
    }

    else if(password.length < 9 && confirmPassword.length < 9) {
        alert("A senha deve conter pelo menos 8 dígitos.")
    }

    else if(borned.length < 0) {
        alert("Informe uma data de nascimento válida")
    }

    else {
        successMessage();
    }
}