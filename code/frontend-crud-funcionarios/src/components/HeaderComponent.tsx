import React, { Component } from 'react';

const logoStyle = {
    marginRight: '15px',
    borderRadius: '20px'
}

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">
                                <img src="https://avatars.githubusercontent.com/u/73141392?v=4" style={logoStyle} alt="logo" width="30" height="30" className="d-inline-block align-text-top" />
                                Gerenciamento de Funcionários
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;