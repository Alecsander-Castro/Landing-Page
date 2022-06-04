const ContactComponent = () => {
    return (
        <div className="contact-form">
            <form>
                    <input type="text" name="name" id="name" placeholder="Nome" required />
                    <input type="text" name="lname" id="lname" placeholder="Sobrenome" required />
                    <textarea name="area" id="area" cols="20" rows="10" placeholder="Escreva sua dúvida" required></textarea>
                    <button className="button3" type="submit">Enviar</button>
            </form>
            
        </div>
    );
}

export default ContactComponent;