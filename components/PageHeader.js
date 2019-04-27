import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class PageHeader extends Component {
    render() {
        const {pageTitle, pageDescription} = this.props;
        return (
            <Jumbotron className="mypage-section">
                <h1 className="mypage-header">{pageTitle}</h1>
                <p>{pageDescription}</p>
            </Jumbotron>
        );
    }
}

export default PageHeader;