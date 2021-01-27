import React from 'react';

class Competences extends React.Component {
    
    render() {
        // Constantes développement web
        const java = "JAVA";
        const html = "HTML / CSS";
        const JavaScript = "JavaScript";
        const php = "PHP"; 
        const sql = "SQL";
        const uml = "UML";

        // Constantes environnement de développement 
        const visual = "Visual Studio Code";
        const Notepad = "NotePad ++";
        const eclipse = "Eclipse";
        const android = "Android Studio";
        
        return (
            <div>
                <div className="header-wraper" id="competences">
                    <div className="main-info-competences">
                        <h2>Mes Compétences</h2>
                        <div className="content-competences">
                            <h3>Développement Web</h3>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '70%' }} data-perc="70%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{java}</p>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '75%' }} data-perc="75%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{html}</p>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '35%' }} data-perc="35%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{JavaScript}</p>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '35%' }} data-perc="35%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{php}</p>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '75%' }} data-perc="75%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{sql}</p>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '60%' }} data-perc="60%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{uml}</p>
                                </div>
                            </div>
                        </div>


                        <h3>Environnements de développement</h3>
                        <div className="Softskills">
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '70%' }} data-perc="70%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{visual}</p>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '85%' }} data-perc="85%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{eclipse}</p>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '90%' }} data-perc="90%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{Notepad}</p>
                                </div>
                            </div>
                            <div className="bar">
                                <div className="percentage has-tip" style={{ width: '65%' }} data-perc="66%">
                                    <p style={{ color: 'white', fontSize: "20px", paddingLeft: "50px" }}>{android}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

}

export default Competences
