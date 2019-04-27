import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class RatingPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            question: [] // State-verdi som etter componentDidMount() har kjørt vil inneholde rating for spørsmålet bruker nettopp ratet
        }
    }

    // Kaller på metode fra kontroller som viser rating for spørsmålet bruker nettopp har ratet, og viser laster-indikator mens den holder på
    componentDidMount() {
        this.setState({ isLoading: true });
        const id = this.props.id;
        const url = `api/Db/GetEntryById?id=${id}`;
        fetch(url)
            .then(response => response.json())
            .then(q => this.setState({ question: q, isLoading: false }))
    }


    render() {
        const votePercent = Math.round((this.state.question.upVotes / this.state.question.totalVotes) * 100);
        if (this.state.isLoading) return <Loader type="Oval" color="rgb(230,0,6)" height="50" width="50" />
        return (
            <div className="panel-body panel-body-border-top">
                <i className="grey-font">Takk for din stemme.<br />
                {votePercent >= 0 && `${votePercent}% av våre brukere fant dette svaret hjelpsomt.`}</i>
            </div>
        );
    }
}

export default RatingPanel;