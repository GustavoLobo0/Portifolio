import React, { useState } from "react";
import "./style.css";

export function TerceiroConteudo() { 
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

    const handleSubmit = (evento) => {
        evento.preventDefault(); 
        
        const formEl = evento.target;
        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData);
        
        fetch('https://formsubmit.co/gustavocesarlobo@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) {
                setMensagemEnviada(true); 
                formEl.reset(); 
                setTimeout(() => setMensagemEnviada(false), 5000); 
            } else {
                console.error("Erro ao enviar dados:", res.statusText);
            }
        })
        .catch((error) => {
            console.error('Erro ao enviar dados:', error);
        });
    };

    return (
        <>
            <div className="fundoFormulario" id="ParteContato">
                <div className="formulario">
                    <h2 className="tituloContato">Contato</h2>
                    
                    {mensagemEnviada && <p className="mensagem-confirmacao">Mensagem enviada com sucesso!</p>}
                    
                    <form onSubmit={handleSubmit} className="form" id="form-api">
                        <input type="text" name="nome" className="Nome" placeholder="Seu nome" required />
                        <input type="email" name="email" className="Email" placeholder="Seu E-mail" required />
                        <input type="text" name="Assunto" className="Assunto" placeholder="Assunto" required />
                        <textarea name="mensagem" placeholder="Digite sua mensagem" className="Texto" required></textarea>
                        <button type="submit" className="enviar">Enviar Mensagem</button>

                        <input type="hidden" name="_subject" value="Mensagem Do Portifolio" />
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </div>
        </>
    );
}
