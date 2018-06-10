import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter'
import Form from './Form'

class Root extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render () {
        return (
            <div>
                {this.state.counter === undefined
                    ? <Form onSubmit={this.initializeCounter}/> 
                    : <Counter 
                        counterValue={this.state.counter} 
                        increase={this.povecaj} 
                        decrease={this.smanji}/>
                }
            </div>
        )
    }
    initializeCounter = (value) => {
        this.setState({
            counter: +value
        })
    }

    povecaj = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }
  
    smanji = () => {
        if(this.state.counter === 0)
            return
  
        this.setState({
            counter: this.state.counter-1
        })
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));
