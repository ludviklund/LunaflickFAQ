import React, { Component } from 'react';

class PageSection extends Component {
    render() {
        return (
            <div className="container-fluid mypage-section">
                { this.props.children }
            </div>
        );
    }
}

export default PageSection;