/**
 * Lógica de Validação - Atividade Prática
 * Aluno: Rodrigo Moraes | RU: 5342953
 */

// Captura o formulário pelo ID único
const formulario = document.getElementById('formRodrigo');

formulario.addEventListener('submit', function(evento) {
    // Bloqueia o envio automático para validar (Requisito obrigatório)
    evento.preventDefault();

    const nome = document.getElementById('campo-nome').value;
    const email = document.getElementById('campo-email').value;
    const msg = document.getElementById('campo-msg').value;

    // Validação de campos vazios
    if (nome.length < 3) {
        alert("Por favor, digite seu nome completo.");
        return;
    }

    // Validação de e-mail usando lógica simples (sem frameworks)
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("O formato do e-mail parece inválido. Verifique.");
        return;
    }

    // Se passar nas validações
    console.log("Dados validados para o RU: 5342953");
    alert("Sucesso, " + nome + "! Seus dados foram validados via JavaScript e o formulário está pronto.");
    
    // Limpando campos
    formulario.reset();
});
