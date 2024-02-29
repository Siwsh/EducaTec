function mostrarPopup() {
    var nome = document.getElementById("Nome").value;
    var email = document.getElementById("Email").value;

    if (nome.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    document.getElementById("Nome").value = "";
    document.getElementById("Email").value = "";

    document.getElementById("popupCadastro").style.display = "block";
    document.getElementById("mensagemConfirmacao").innerText = `Cadastro feito com sucesso, ${nome}! Verifique o e-mail ${email} para confirmação.`;

}

function fecharPopup() {
    document.getElementById("popupCadastro").style.display = "none";
}

document.getElementById('scrollButton').addEventListener('click', function() {
    const scrollPosition = 930;-

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    });
         const scroll = new LocomotiveScroll({
            el:document.querySelector('[data-scroll-container]'),
            smooth: true
         });
