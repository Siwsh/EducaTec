document.getElementById('emailButton').addEventListener('click', sendMail);

function sendMail (e) {

    e.preventDefault();
    alert('test heitor');

    const mail = document.getElementById('email').value;
    const name = document.getElementById('nome').value;

    if (mail && name) {
        alert('test 4');

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "educatecoficiall@gmail.com",
            Password: "099D2A59F6674538C70F4A07C283E3173DF9",
            To: mail,
            From: "educatecoficiall@gmail.com",
            Subject: "Email de Verificação",
            Body: "Seu e-mail foi verificado com sucesso! Você será o primeiro a ser informado sobre todas as atualizações do nosso projeto. Agradecemos imensamente pelo seu apoio!",
          })   
}}

document.getElementById('emailButton').addEventListener('click', sendEmail);

function sendEmail() {

  const mail = document.getElementById('email').value;
  const nome = document.getElementById('nome').value;
  alert('test 1');

  if (nome.trim() === '' || mail.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      alert('test 2');
      return;
  }

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";

  document.getElementById("sendEmail").style.display = "block";
  document.getElementById("mensagemConfirmacao").innerText = `Cadastro feito com sucesso, ${nome}! Verifique o e-mail ${mail} para confirmação.`;

}

function fecharPopup() {
  document.getElementById("sendEmail").style.display = "none";
}
