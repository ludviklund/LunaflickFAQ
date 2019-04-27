import React, { Component } from 'react';

class VotePanel extends Component {

    constructor(props) {
        super(props);
        this.upvoteOnClick = this.upvoteOnClick.bind(this);
    }

    // Kaller på metode fra kontroller som oppdaterer ratingen til spørsmål avhengig om man trykker up- eller downvote.
    async upvoteOnClick(isUpVote, id) {
        const url = `/api/Db/IncrementVote?isUpVote=${isUpVote}`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(id),
        };

        const request = new Request(url, options);
        const response = await fetch(request);
        const status = response.status;
        
        if (status === 200) {
            this.props.funcOnClick(); // Kaller på metode fra parent som laster ny komponent hvis bruker voter
        }
    }

    render() {
        return (
            <div className="panel-body panel-body-border-top">
                <i className="grey-font">Var dette spørsmålet hjelpsomt for deg?</i> <br />
                <button className="thumb-down thumb-button" onClick={() => this.upvoteOnClick(false, this.props.id)}><i className="far fa-thumbs-down icon-flip"></i></button>
                <button className="thumb-up thumb-button" onClick={() => this.upvoteOnClick(true, this.props.id)}><i className="far fa-thumbs-up"></i></button>
            </div>
        );
    }
}

export default VotePanel;
