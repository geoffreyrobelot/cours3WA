import React from 'react';

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
        /*
        * Fonctionnalité qui permet de vérifier l'expression mail
        * if (!this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`/\{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        *    Affiche lorsque le mail entré n'est pas valide dans la console 
        *    console.log("le mail n'est pas valide");
        *    Affiche sur la page une alerte 
        *    alert("Le mail saisi n'est pas valide");
        * } 
        */ 
        
        // Affiche les valeurs du formulaire dans la console    
        console.log(data);

    }
 
    render() {

        const titre = "Contact";
        const texte = "Pour toute information, vous pouvez compléter ce formulaire.";
        const texte1 = "Je vous répondrai dans les meilleurs délais.";

        return (
            <div>
                <div className="header-wraper" id="contact">
                    <div className="main-info-contact">
                        <h2>{titre}</h2>
                        <p>{texte}</p>
                        <p>{texte1}</p>
                        <div className="content-contact">
                            <form onSubmit={this.handleSubmit}>
                                <li>
                                    <label>
                                        Nom :
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
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange('email')} />
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
