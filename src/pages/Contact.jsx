import { useState } from "react";
import picture from "../assets/lauren_mancke_unsplash.webp"

/* function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Champ obligatoire";
    if (!formData.email) {
      newErrors.email = "Champ obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.message) newErrors.message = "Champ obligatoire";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Formulaire envoyé avec succès");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return(
    <div className="contact">
      <div className="contact__introduction">
          <h1>Contact</h1>
          <p className="contact__paragraph">Vous recherchez une personne motivée, dynamique et qui apprend vite ? Je suis la personne qu'il vous faut !</p>
          <div className="contact__formAndPicture">
            <div className="contact__form">
              <form onSubmit={handleSubmit} className="form__container">
              <div className="form__labelAndInput">
                <label className="form__label">Nom</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="form__input" 
                />
                {errors.name && <p className="form__inputError">{errors.name}</p>}
              </div>
              <div className="form__labelAndInput">
                <label className="form__label">Email</label>
            
              </div>
              
             
            </div>
         
          </div>
      </div>
    </div>
  )
} */
  import React, { useRef } from 'react';
  import emailjs from '@emailjs/browser';
  
  function Contact(){
    const form = useRef();


    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const validate = () => {
      let newErrors = {};
      if (!formData.name) newErrors.name = "Champ obligatoire";
      if (!formData.email) {
        newErrors.email = "Champ obligatoire";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Format d'email invalide";
      }
      if (!formData.message) newErrors.message = "Champ obligatoire";
      return newErrors;
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
      const validationErrors = validate();
     
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      emailjs
      
        .sendForm('service_6nmoly9', 'template_ks8fqw6', form.current, {
          publicKey: 'SzQqMCHvocExbXUZj',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Formulaire envoyé avec succès");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


    return (
      <div className="contact">
      <div className="contact__introduction">
          <h1>Contact</h1>
          <p className="contact__paragraph">Vous recherchez une personne motivée, dynamique et qui apprend vite ? Je suis la personne qu'il vous faut !</p>
          <div className="contact__formAndPicture">
            <div className="contact__form">

      <form ref={form} onSubmit={sendEmail} className="form__container">
        <div className="form__labelAndInput">
          <label className="form__label">Votre nom</label>
          <input className="form__input" 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <p className="form__inputError">{errors.name}</p>}
        </div>
        <div className="form__labelAndInput">
          <label className="form__label">Votre courriel</label>
          <input className="form__input" 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            />
          {errors.email && <p className="form__inputError">{errors.email}</p>}
        </div>
        <div className="form__labelAndInput">
          <label className="form__label">Votre message</label>
          <textarea className="form__input message" 
            name="message" 
            onChange={handleChange} 
            value={formData.message} 
          />
          {errors.message && <p className="form__inputError">{errors.message}</p>}
        </div>
        <input type="submit" value="Envoyer" className="btn"/>
      </form>
    </div>
    <div className="contact__pictures">
      <div className="contact__pictureCover"></div>
      <img className="contact__picture" src={picture}></img>
    </div>
    </div>
    </div>
    </div>


    );
  };
  

export default Contact






  






