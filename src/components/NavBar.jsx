import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="p-3 mb-2 bg-success-subtle text-emphasis-success container-fluid">
                    <a className=" m-3 col  navbar-brand" href="#">Candy Store</a>
                    <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className=" m-3 nav-item dropdown">
                                <a className=" col btn btn-secondary nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">action1</a></li>
                                    <li><a className="dropdown-item" href="#">action2</a></li>
                                    <li><a className="dropdown-item" href="#">action3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='col-2'>
                        <CartWidget />
                    </div>
                </div>
            </nav>








        </>
    )
}

export default NavBar