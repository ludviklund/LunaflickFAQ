import React, { Component } from 'react';

class QuestionAddedFeedback extends Component {
    render() {
        return (
            <div className="panel-body">
                <i className="grey-font">Takk for at du stilte ditt spørsmål.<br />
                    Vi vil svare på spørsmålet ditt så fort vi kan, men siden dette<br />
                    bare er en skoleoppgave ville jeg ikke holdt pusten.</i>
            </div>
        );
    }
}

export default QuestionAddedFeedback;