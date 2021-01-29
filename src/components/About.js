import React from 'react';
import cv from '../Miniature_CV_3WA.png';
import cv_grand from '../Complet_CV_3WA.png';
import git from '../git.jpg';

class About extends React.Component {

    render(){

        const titre= "A propos de moi";
        const texte= "Passionné par les nouvelles technologies et le développement informatique";
        const texte1= "Je vous invite à visiter mon dépôt Git avec mes différents projets et prendre connaissance de mon CV";
        const texte2= "Je suis actuellement une formation à la 3W Academy afin de progresser dans les langages JavaScript et PHP";

        return (
            <div>
                <div className="header-wraper" id="about">
                    <div className="main-info-about">
                        <h2>{titre}</h2>
                        <div className="content-about">
                            <div id="un">
                                <p>{texte}</p>
                                <p>{texte2}</p>
                                <p>{texte1}</p>
                            </div>

                            <div className="git-cv">
                                <a href="https://github.com/geoffreyrobelot" title="Lien vers mon dépôt git" target="_blank" rel="noreferrer">
                                    <img alt="Vignette de mon dépôt git"
                                        src={git}
                                        width="250em"
                                        height="250em" />
                                </a>

                                <a href={cv_grand} title="Lien vers la version originale de mon CV" target="_blank" rel="noreferrer">
                                    <img alt="Vignette de mon CV"
                                        src={cv}
                                        width="250em"
                                        height="250em" />
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
