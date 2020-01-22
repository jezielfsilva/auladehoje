import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    }
  }

  handlesubmit = ev => {
    ev.preventDefault();
    const { lista } = this.state

    lista.push(this.inputText.value)

    this.setState({
      lista,
    })
    
    this.inputText.value = ''
  }

  render () {
    return (
      <div className="box-form">
        <form className="container-form" onSubmit={this.handlesubmit}>
          <input className="text-box" type="text" ref={node => this.inputText = node}/>
          <button className="click">adicionar</button>
        </form>
        {this.state.lista.map(item => <p className="text">{item}</p>)}
      </div>
    )
  }
}


export default App;
