/**
 * Script para validação do formulário de contato
 * Rodrigo Moraes - RU: 5342953
 */

document.getElementById('formPortfolio').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário para validar com JS
    event.preventDefault();

    // Captura dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Lógica de validação simples
    if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    // Validação básica de formato de e-mail
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Feedback visual para o usuário (Simulação de envio)
    alert("Obrigado pelo contato, " + nome + "! Sua mensagem foi validada e enviada com sucesso (Simulação).");

    // Limpa o formulário após o sucesso
    this.reset();
});
