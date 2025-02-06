import { Component } from 'react';
import { Button } from 'react-bootstrap';


class ComponentClass extends Component {
    state = {monTexte: "Hello 4TWIN7", value: 0};
    
    handleClick = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

  render() { 

    return (<>    

      Ceci un composant de classe
      {this.state.monTexte}
      

      <br/>
      <Button variant="primary" onClick={this.handleClick}>Incrémenter</Button>
      <br/>
      {this.state.value}

      

      </>);

  }}

 

export default ComponentClass;