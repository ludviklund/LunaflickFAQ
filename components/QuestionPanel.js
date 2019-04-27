import React, { Component } from 'react';
import { Col, PanelGroup } from 'react-bootstrap';
import AddQuestion from './AddQuestion.js';
import AddPanelTextBox from './AddPanelTextBox.js';
import Loader from 'react-loader-spinner';

class QuestionPanel extends Component {

    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            isLoading: false,
            activeKey: null, // Verdi som bestemmer hvilket panel som er aktivt. Spørsmål bruker id som nøkkel, stille eget spørsmål er alltid 0
            questions: [     // State-verdi som etter componentDidMount() inneholder alle spørsmål fra database
                { id: 0, question: null, answer: null, upVotes: null, downVotes: null, totalVotes: null }
            ]
        };
    }

    // Legger til panel for hvert spørsmål som ligger i databasen
    addAllQuestions() {
        return this.state.questions.map(q =>
            <AddQuestion
                key={q.id}
                eventKey={q.id}
                panelTitle={q.question}
                panelBody={q.answer}
                upVotes={q.upVotes}
                totalVotes={q.totalVotes}
            />
        )
    }

    // Henter alle spørsmål fra database ved å kalle på kontroller metode, gir også en loading-indikator mens den holder på
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('/api/Db/FetchAll')
            .then(response => response.json())
            .then(q => this.setState({ questions: q, isLoading: false }))
    }

    // For å velge hvilket panel som vises
    handleSelect(activeKey) {   
        this.setState({ activeKey });
    }

    render() {
        if (this.state.isLoading) return <Loader type="Oval" color="rgb(230,0,6)" height="100" width="100" />
        return (
            <div className="userTable">
                <Col xs={8} xsOffset={2}>
                    <PanelGroup
                        accordion
                        id="accordion-controlled"
                        activeKey={this.state.activeKey}
                        onSelect={this.handleSelect}
                    >
                        {this.addAllQuestions()}
                        <AddPanelTextBox eventKey={0} />
                    </PanelGroup>
                </Col>
            </div>
        );
    }
}

export default QuestionPanel;
