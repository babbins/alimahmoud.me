import React, { Component } from 'react';
export default class QuoteSwap extends Component {
  constructor() {
    super();
    this.state = {
      currQuote: '',
      quotes: [
        '"HAHAHAHAHAH HIIIII!"',
        '"Toast Is Like dead bread for your head"',
        '"How can we be real if our eyes aren\'t real?"',
        '"PORKCHOP SANDWICHES!"',
        '"Band Name: Blank Space Babies"',
        '"Please hire me..."'
      ]
    };

    this.randomQuote = this.randomQuote.bind(this);
  }

  componentDidMount() {
    this.setState({currQuote: this.randomQuote()});
    this.quoteInterval = setInterval(() => {
      this.setState({currQuote: this.randomQuote()});
    }, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.quoteInterval);
  }

  randomQuote() {
    return this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
  }

  render() {
    return (
      <div className="quoteSwap">
        {this.state.currQuote}
      </div>
    )
  }
}
