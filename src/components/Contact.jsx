import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tutaj logika do wysyłania formularza, np. do zewnętrznego serwisu
        console.log('Dane z formularza:', formData);
        alert('Wiadomość wysłana!');
        setFormData({ name: '', email: '', message: '' }); // Reset formularza
    };

    return (
        <section className="contact" id="contact">
            <h2>Skontaktuj się ze mną</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Imię i nazwisko"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Adres e-mail"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Twoja wiadomość"
                    required
                />
                <button type="submit">Wyślij</button>
            </form>
        </section>
    );
};

export default Contact;