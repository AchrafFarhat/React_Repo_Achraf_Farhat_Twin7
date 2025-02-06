import React, { useRef, useState } from 'react';
 
function RenderCounter() {
  const renderCount = useRef(0); // Compteur qui persiste
  const [state, setState] = useState(0);
 
  renderCount.current += 1;
 
  return (
    <div>
      <p>Le composant a été rendu {renderCount.current} fois.</p>
      <button onClick={() => setState(state + 1)}>Changer l'état</button>
    </div>
  );
}
 
export default RenderCounter;