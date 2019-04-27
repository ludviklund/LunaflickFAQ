import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import TextBoxForPanel from './TextBoxForPanel';
import QuestionAddedFeedback from './QuestionAddedFeedback';

class AddPanelTextBox extends Component {

    constructor(props) {
        super(props);
        this.funcOnClick = this.funcOnClick.bind(this);
        this.state = { showFeedback: false };
    }

    // Sjekker om kunden har stilt nytt spørsmål via state, og gir isåfall ny state-verdi som igjen laster ny komponent
    funcOnClick() {
        let newFeedback = !this.state.showFeedback && true; // Ekstra sjekk for state-verdi, muligens overflødig (skal i prinsippet bare komme en gang)
        this.setState({ showFeedback: newFeedback }); // Kunden har stilt spørsmål, så ny komponent vises
    }

    render() {
        return (
            <Panel eventKey={this.props.eventKey}>
                <Panel.Heading>
                    <Panel.Title toggle><i>Jeg har et annet spørsmål....</i></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    { this.state.showFeedback ? <QuestionAddedFeedback /> : <TextBoxForPanel funcOnClick={this.funcOnClick} /> }
                </Panel.Body>
            </Panel>
        );
    }
}

export default AddPanelTextBox;