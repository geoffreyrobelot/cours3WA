import React from 'react'


function Contact() {
    
    return (
        <div>
        <div className="header-wraper" id="contact">
            <div className="main-info-contact">
                <h2>Contact</h2>
                <p>Pour toute information, n'hésitez pas à me contacter, je vous répondrai dans les meilleurs délais</p>
                    <div className="content-contact">
                        <form>
                            <li><label>
                                NOM :
                                <input type="text" name="name" />
                            </label>
                            </li>
                            <li>
                            <label>
                                Prénom :
                                <input type="text" name="prenom" />
                            </label>
                            </li>
                            <li>
                            <label>
                                E-mail :
                                <input type="text" name="email" />
                            </label>
                            </li>
                            <li>
                            <label>
                                Motif :
                                <input type="text" name="motif" />
                            </label>
                            </li>
                            <li><input type="submit" value="Envoyer" />
                            </li>
                            
                        </form>
                </div>
            </div>
        </div>
    </div>
    )
}





export default Contact
