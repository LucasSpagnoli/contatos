import React from "react";
import '../styles/section.css';

function Section() {
// --- Variáveis e Funções ---
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [enviado, setEnviado] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      console.log("Mensagem enviada:", data);
      alert("Mensagem enviada com sucesso!");
      setEnviado(true);
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
    }
  };

// --- Renderização do Componente ---
  return (
    <section id="section">

      {/* --- Imagem de fundo --- */}
      <div id="img-section">
        <h1>CONTATOS</h1>
      </div>

      {/* --- Formulário de Contato --- */}
      <div id="text-section">
        <h2>{nome ? `${nome}, precisa de ajuda com sua empresa?` : `Precisa de ajuda com sua empresa?`}</h2>
        <p>{nome && `${nome}, entre em contato conosco e vamos ajudá-lo a crescer!`}</p>
      </div>

      <form onSubmit={handleSubmit} method="post" id="contact-form">
        <div className="form-group">
          <input type="text" id="first name" name="first name" required placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={nome}/>
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
