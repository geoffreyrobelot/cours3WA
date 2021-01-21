import React from 'react';
import Typed from 'react-typed';

function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Portfolio Geoffrey R.</h1>

                <Typed
                    className="typed-text"
                    strings={["Développeur Web", "Développeur d'Applications"]}
                    typeSpeed={60}
                    backSpeed={70}
                    loop
                />

            </div>

            <div className="header-content">
                <h2>Bienvenue</h2>
            </div>

        </div>
    )
}

export default Header
