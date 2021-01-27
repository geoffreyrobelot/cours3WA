import React from 'react';
import Typed from 'react-typed';

class Header extends React.Component {

    render() {

        const nom = "Geoffrey ROBELOT";

        return (
            <div className="header-wraper">
                <div className="main-info">
                    <h2>{nom}</h2>
                    <Typed
                        className="typed-text"
                        strings={["Développeur Web"]}
                        typeSpeed={50}
                    /* backSpeed={150} */
                    />
                    <Typed
                        className="typed-text-2"
                        strings={["En alternance 2021 - 2022"]}
                        typeSpeed={80}
                    /* backSpeed={50} */
                    />
                </div>
            </div>
        )
    }
}

export default Header
