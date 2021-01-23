import React from 'react'
import { render } from 'react-dom';

class Contact extends React.Component {

    // Constructeur de la classe 
    constructor() {
        super();
        this.state = {
            lastName: "",
            firstName: "",
            email: "",
            motif: "",
        }
        // Déclaration des fonctions de la classe dans le constructeur 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleChange(event){
       return function(e){
           const state ={};
           state[event]= e.target.value;
           this.setState(state);
       }.bind(this);
   }

   /*
   * Fonction qui met à jour les valeurs du state
   * @param event 
   * */ 
    handleSubmit(event) {
        const data = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            email: this.state.email,
            motif: this.state.motif
        }
        event.preventDefault();
        if (!this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`/\{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            console.log("le mail n'est pas valide");
            alert("Le mail saisi n'est pas valide");
        } 
        // Affiche les valeurs du formulaire dans la console    
        console.log(data);

    }

    
 
    render() {
        return (
            <div>
                <div className="header-wraper" id="contact">
                    <div className="main-info-contact">
                        <h2>Contact</h2>
                        <p>Pour toute information, n'hésitez pas à me contacter, je vous répondrai dans les meilleurs délais</p>
                        <div className="content-contact">
                            <form onSubmit={this.handleSubmit}>
                                <li><label>
                                    NOM :
                                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange('lastName')} />
                                <span id="misslastName"></span>
                                </label>
                                </li>
                                <li>
                                    <label>
                                        Prénom :
                                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange('firstName')}/>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        E-mail :
                                <input type="text" name="email" value={this.state.email} onChange={this.handleChange('email')} />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        Motif :
                                <input type="text" name="motif" value={this.state.motif} onChange={this.handleChange('motif')}/>
                                    </label>
                                </li>
                                <li><input type="submit" value="Envoyer" id="submit"/>
                                </li>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
