import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => {
  return (
    <div>
      <h1> {props.name} </h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Result = (props) => {
  return (
    <div>
      <p> {props.quote} </p>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titlePage: 'Quotes',
      curQuote: 0,
      nextBtn : 'Next Quote',
      quotes : [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
      ]
    
    }
  }

  selectNextQuote = (value) => {
    return () => {
      this.setState({curQuote: value})
    }
  }
  


  render() {
        return (
        
          <div>
            <Title name = {this.state.titlePage} /> 
            <Result  quote = {this.state.quotes[this.state.curQuote]} 
            /> 
            <Button
                handleClick={this.selectNextQuote(this.state.curQuote+1)}
                text= {this.state.nextBtn}
            />
          </div>
        

    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
