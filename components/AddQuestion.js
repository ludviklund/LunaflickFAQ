import React, { Component } from 'react';
import { Row, Panel } from 'react-bootstrap';
import VotePanel from './VotePanel.js';
import RatingPanel from './RatingPanel.js';

class AddQuestion extends Component {

    constructor(props) {
        super(props)
        this.funcOnClick = this.funcOnClick.bind(this);
        this.state = { showVote: true }; // Viser komponent for å stemme på spørsmål
    }

    // Sjekker om kunde har stemt på spørsmål, og setter isåfall showVote til true slik at ny komponent med vote-oversikt kan vises
    funcOnClick() {
        let newVote = this.state.showVote && false;
        this.setState({ showVote: newVote });
    }

    render() {
        const {eventKey, panelTitle, panelBody} = this.props; // Gir relevante props variabler 
        const notAnsweredString = 'Dette spørsmålet har enda ikke blitt besvart.'; // Default svar til alle nye spørsmål
        const bodyIfQuestionIsAnswered = (
            <Row>
                {this.state.showVote ? 
                <VotePanel id={eventKey} funcOnClick={this.funcOnClick} /> : 
                <RatingPanel id={eventKey} />}
            </Row>
        );

        return (
            <Panel eventKey={eventKey}>
                <Panel.Heading>
                    <Panel.Title toggle>{panelTitle}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <Row>
                        <div className="panel-body">
                            {panelBody}
                        </div>
                    </Row>
                    {panelBody !== notAnsweredString && bodyIfQuestionIsAnswered}
                    {
                    /* Kommenter ut linjen over, og fjern kommentar på linjen under hvis du ønsker å teste ratingfunksjonen på nye spørsmål */
                    /* {bodyIfQuestionIsAnswered}
                    /**/
                    }
                </Panel.Body>
            </Panel>
        );
    }
}

export default AddQuestion;
