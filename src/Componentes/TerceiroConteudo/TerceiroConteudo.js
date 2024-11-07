import React from "react";
import "./style.css";

export function TerceiroConteudo() {
    const handleSubmit = (evento) => {
        evento.preventDefault(); 

        const formEl = evento.target;
        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData);
        
        fetch('https://formsubmit.co/gustavocesarlobo@gmail.com', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            formEl.reset();
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
                
                    <form onSubmit={handleSubmit} className="form" id="form-api">
                        <input type="text" name="nome" className="Nome" placeholder="Seu nome" />
                        <input type="text" name="email" className="Email" placeholder="Seu E-mail" />
                        <input type="text" name="Assunto" className="Assunto" placeholder="Assunto" />
                        <textarea name="mensagem" placeholder="Digite sua mensagem" className="Texto"></textarea>
                        <button type="submit" className="enviar">Enviar Mensagem</button>

                        <input type="hidden" name="_subject" value="Mensagem Do Portifolio"></input>
                        <input type="text "name="_honey" style={{ display: "none" }}></input>
                        <input type="hidden" name="_captcha" value = "false"></input>
                    </form>
                </div>
            </div>
        </>
    );
}
