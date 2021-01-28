import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="main-footer" id="footer">
                <div className="container">
                    <div className="row">
                        {/* column 1 */}
                        <div className="col">
                            <h4>Concepteur Développeur Informatique</h4>
                            <ul className="list">
                                <li>Développeur Web</li>
                                <li>Développeur d'Applications</li>
                                <li>A venir</li>
                            </ul>
                        </div>
                        {/* column 2 */}
                        <div className="col">
                            <h4>Geoffrey ROBELOT</h4>
                            <ul className="list">
                                <li>06 61 86 23 31</li>
                                <li>geoffreyrobelot@gmail.com</li>
                                <li>Yvelines</li>
                            </ul>
                        </div>
                        {/* column 3 */}
                        <div className="col">
                            <h4>Liens utiles</h4>
                            <ul className="list">
                                <li>...</li>
                                <li>...</li>
                                <li>...</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm" style={{textAlign:"center"}}>
                            &copy; {new Date().getFullYear()} | Tous droits réservés | Plan du site | Mentions légales
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
