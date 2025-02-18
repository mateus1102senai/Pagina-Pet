function teste() {
    const nome = document.getElementById("nome").value;
    alert(nome);
}

function enviarEmail() {



const public_key = "po25BxTneRoQJnoYA";
const secret_key = "lxDQ8CA4T1HLX_UTVdONv";

(function () {
    emailjs.init(public_key);
})();

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
});

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Por favor preencha todos os campos!");
        return;
    }

    const params = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    const service_id = "service_rj39bpk";
    const template_id = "template_tccrlrr";

    emailjs.send(service_id, template_id, params).then((res) => {
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
        console.log(res);
        alert("Mensagem enviada com sucesso!");
    })
    .catch((err) => console.log(err));
}
