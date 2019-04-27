import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import PageHeader from './components/PageHeader.js';
import PageSection from './components/PageSection.js';
import QuestionPanel from './components/QuestionPanel.js';
import './index.css';

class App extends Component {
    render() {
        const pageTitle = 'FAQ';
        const pageDescription = 'Her kan du lese ofte stilte spørsmål, eller stille ditt eget hvis du ønsker det';
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <div className="mypage">
                        <PageSection>
                            <PageHeader pageTitle={pageTitle} pageDescription={pageDescription} />
                            <QuestionPanel />
                        </PageSection>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;