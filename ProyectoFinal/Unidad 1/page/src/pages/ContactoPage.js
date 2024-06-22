import React from "react";
const ContactoPage = (props) => {
    return (
       
        <section className="section-formulario" id="section-formulario">
        <h2>Formulario de Contacto</h2>
        <form action="/submit_form" method="post">
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/>
            </div>
            <div>
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required/>
            </div>
            <div>
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div>
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </section>
    );
}

export default ContactoPage;