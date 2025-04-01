import { useState } from "react";
import picture from "../assets/lauren_mancke_unsplash.webp"

function Contact(){
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
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="form__input" 
                />
                {errors.email && <p className="form__inputError">{errors.email}</p>}
              </div>
              <div className="form__labelAndInput">
                <label className="form__label">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="form__input message" 
                />
                {errors.message && <p className="form__inputError">{errors.message}</p>}
              </div>
              <button type="submit" className="btn">Envoyer</button>
              </form>
            </div>
            <div className="contact__pictures">
              <div className="contact__pictureCover"></div>
              <img className="contact__picture" src={picture}></img>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact






  






