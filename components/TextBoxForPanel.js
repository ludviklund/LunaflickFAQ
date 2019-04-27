import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TextBoxForPanel extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = { newQuestion: '' }; // Det nye spørsmålet kunden vil sende inn
    }

    // Bind tekst fra tekstboks til state newQuestion
    onChange(e) {
        this.setState({ newQuestion: e.target.value });
    }

    // Kall på kontroller-metode for å legge til entry i database
    async onSubmit(e) {
        e.preventDefault(); // Unngå at form-submit refresher siden

        const post = this.state.newQuestion;
        const url = 'api/Db/AddNewQuestion';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(post), // Spørsmålet blir sendt til kontrolleren via body
        };

        const request = new Request(url, options);
        const response = await fetch(request);
        const status = response.status;

        if (status === 200) {
            this.props.funcOnClick(); // Metode fra parent som viser ny komponent hvis spørsmålet blir sendt gjennom
        }
    }

    render() {
        const textboxPlaceholder = 'Skriv inn ditt spørsmål her, så svarer vi på det så fort vi kan...';
        return (
            <React.Fragment>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <textarea type="text" className="form-control" onChange={this.onChange} placeholder={textboxPlaceholder} rows="3">
                        </textarea>
                        <Button type="submit">Send inn</Button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default TextBoxForPanel;