import { useState } from 'react';
import { Button } from 'react-bootstrap';

function ComponentFonct() {
    const [monTexte, setMonTexte] = useState("Hello 4TWIN7");
    const [value, setValue] = useState(0);
    const handleClick = () => {
        setValue(value + 1);
    }

 

    return (<>    

        Ceci un composant fonctionnel
        <br/>
        {monTexte}
        <br/>
        <br/>
        <Button variant="primary" onClick={()=>handleClick()}>Incrémenter</Button>
        <br/>
        {value}

      

      </>);

  }

 

export default ComponentFonct;