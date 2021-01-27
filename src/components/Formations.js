import React from 'react'

class Formations extends React.Component {

    render() {

        const devWeb = "Développeur Web";
        const devApp = "Concepteur Développeur d'Applications";
        const bts= "BTS Diététique";
        const dut= "DUT MMI (Métiers du multimédia et de l'Internet";
        
        return (
            <div>
                <div className="header-wraper" id="formations">
                    <div className="main-info-formations">
                        <h2>Mes formations</h2>
                        <div className="content-formations">
                            <li>
                                <h3>{devWeb}</h3>
                                <li>
                                    <p>3W Academy</p>
                                    <li>
                                        <p>Depuis novembre 2020</p>
                                    </li>
                                </li>
                            </li>
                            <li>
                                <h3>{devApp}</h3>
                                <li>
                                    <p>Greta des Yvelines</p>
                                    <li>
                                        <p>2019 - 2020</p>
                                    </li>
                                </li>
                            </li>
                            <li>
                                <h3>{bts}</h3>
                                <li>
                                    <p>CNED</p>
                                    <li>
                                        <p>2014 - 2016</p>
                                    </li>
                                </li>
                            </li>
                            <li>
                                <h3>{dut}</h3>
                                <li>
                                    <p>Université de Vélizy</p>
                                    <li>
                                        <p>2013 - 2014</p>
                                    </li>
                                </li>
                            </li>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Formations
