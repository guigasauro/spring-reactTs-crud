import React, { Component } from 'react';

const footerStyle = {
    marginBottom: '5px'
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="fixed-bottom" style={footerStyle}>
                    <span className="text-muted">@guigasauro. 2022</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;