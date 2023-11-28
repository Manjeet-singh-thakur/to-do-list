import React from 'react'
import "./Nav.css"

function Navbar() {
    return (
        <div>
            <nav className='navigator'>
                <div className="text">
                    <h1>Textutils</h1>
                </div>
                <div className="about">
                    <div>
                        <ul>
                            <li>
                                About                            </li>
                        </ul>
                    </div>
                    <div> <ul>
                        <li>
                           ChangeText
                        </li>
                    </ul></div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
