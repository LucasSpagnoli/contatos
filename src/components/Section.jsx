import React from "react";
import '../styles/section.css';

function Section() {

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      console.log("Mensagem enviada:", data);
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
    }
  };

  return (
    <section id="section">

      <div id="img-section">
        <h1>CONTATOS</h1>
      </div>

      <div id="text-section">
        <h2>Precisa de ajuda com sua empresa?</h2>
        <p>Entre em contato conosco e vamos ajudá-lo a crescer!</p>
      </div>

      <form onSubmit={handleSubmit} method="post" id="contact-form">
        <div className="form-group">
          <input type="text" id="first name" name="first name" required placeholder="Nome"/>
        </div>
        <div className="form-group">
          <input type="text" id="last name" name="last name" required placeholder="Sobrenome"/>
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" required placeholder="E-mail"/>
        </div>
        <div className="form-group">
          <input type="tel" id="phone" name="phone" required placeholder="Celular"/>
        </div>
        <div className="form-group">
          <textarea id="message" name="message" rows="4" required placeholder="Mensagem"></textarea>
        </div>
        <div className="form-group">
          <button type="submit">ENVIAR</button>
        </div>
      </form>

    </section>
  );
}

export default Section;
