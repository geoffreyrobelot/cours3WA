import React from 'react';

// Constantes d'erreur 
const ERROR_NOM = "Le nom saisi n'est pas valide";
const PAS_DERREUR = "";

class Contact extends React.Component {

    // Constructeur de la classe 
    constructor() {
        super();
        this.state = {
            lastName: "",
            firstName: "",
            email: "",
            motif: "",
            errorMessage: "",
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

    componentDidMount(){
        if (this.state.lastName.length >0 && this.state.lastName.length <=1){
            this.setState({
                errorMessage: ERROR_NOM,
            })
        } else if(this.state.lastName.length >1) {
            this.setState({
                errorMessage: PAS_DERREUR,
            })
        } 
    }

    componentDidUpdate(previousProps, previousState){
        if ((this.state.lastName.length <=1 && this.state.lastName.length >0) && this.state.errorMessage !== ERROR_NOM){
            this.setState({
                errorMessage: ERROR_NOM,
            })
        } else if(this.state.lastName.length >1 && this.state.errorMessage !==PAS_DERREUR){
            this.setState({
                errorMessage: PAS_DERREUR,
            })
        } 
        
    }
 
    render() {
        // Déclaration des constantes 
        const titre = "Contact";
        const texte = "Pour toute information, vous pouvez compléter ce formulaire.";
        const texte1 = "Je vous répondrai dans les meilleurs délais.";

        // Constantes du formulaire 
        const nom = "Nom : ";
        const prenom = "Prénom : "; 
        const mail = "Email : ";
        const motif = "Motif : ";

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
                                       {nom}
                                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange('lastName')} />
                                <span id="misslastName"></span>
                                </label>
                                <h5 style={{color:"red"}}>{this.state.errorMessage}</h5>
                                </li>
                                <li>
                                    <label>
                                        {prenom}
                                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange('firstName')}/>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        {mail}
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange('email')} />
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        {motif}
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
