function signup(event) {

    event.preventDefault();


    var useremail = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confpass = document.getElementById("confirmpassword").value;

    if (useremail === "example123@gmail.com" && password === "admin" && confpass === "admin") {
        Swal.fire({
            title: 'cadastro realizado!',
            text: 'Seu cadastro foi realizado com sucesso!',
            icon: 'sucess',
            confirmButtomText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "#";
            }, 100);
        });


    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Verifique os campos preenchidos',
            icon: 'error',
            confirmButtomText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "#";
            }, 100);
        });
    }
}