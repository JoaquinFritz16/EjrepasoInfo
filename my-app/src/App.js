import {useState} from 'react'
import './App.css';

function App() {
  const [count, Setcount] = useState(0); 
  const [text, Settext] = useState('');
  const [DisplayText, SetDisplayText]=useState('');
  const [numero,setnumero] = useState(0);
  const [displaynumber,Setdisplaynumber]=useState('');
  const [selectedColor, SetselectedColor]=useState('');
  const [textoej5,Settextoej5]=useState('');
  const [num, Setnum]=useState(0);
  const [word, Setword]=useState('');
  const [textoej7, Settextoej7]=useState('');
  const [numEj7, SetnumEj7]=useState(0);
  const handleCount=()=>{
    Setcount(prevCount => prevCount+1);
  };
  const handleText=(e)=>{
    Settext(e.target.value);
  }
  const handleDisplay=(e)=>{
    e.preventDefault();
    SetDisplayText(text);
  }
  const handleNumberby2=(e)=>{
    const inputNumber = Number(e.target.value);
    setnumero(inputNumber);
    Setdisplaynumber(inputNumber*2);
  }
  const handleColorChange=(e)=>{
    SetselectedColor(e.target.value);
  }
  const handleTextChange=(e)=>{
    Settextoej5(e.target.value);
    };
  const handleSubmit=(e)=>{
    e.preventDefault();
    window.alert(textoej5)
  }
  const handleWordEj6=(e)=>{
    Setword(e.target.value);
  }
  const handleNumEj6=(e)=>{
    Setnum(e.target.value);
  }
  const handleSubmit2=(e)=>{
    e.preventDefault();
    window.alert(num+word)
  }
  const handleTextChangeEj7=(e)=>{
    Settextoej7(e.target.value);
  }
  const handleNumEj7=(e)=>{
    SetnumEj7(Number(e.target.value));
  }
  const handleSubmit3 = (e) => {
    e.preventDefault();
    let resultado='';
    for (let i = 0; i < numEj7; i++) {
      resultado += textoej7 + ' ';
      }
    window.alert(resultado);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicio 1</h1>
        <input type="button"
        value="incrementar"
        onClick={handleCount}></input>
        <p>Incremento: {count}</p>
        <h1>Ejercicio 2</h1>
        <input
        type='text'
        value={text}
        onChange={handleText}>
        </input>
        <input type="button" value='text' onClick={handleDisplay}>
        </input>
        <p>{DisplayText}</p>
        <h1>Ejercicio 3</h1>
        <input
        type='number'
        value={numero}
        onChange={handleNumberby2}></input>
        <p>{displaynumber}</p>
        <h1>Ejercicio 4</h1>
        <select value={selectedColor} 
        onChange={handleColorChange} 
        style={{backgroundColor: selectedColor}}>
          <option value="red">rojo</option>
          <option value="green">verde</option>
          <option value="blue">azul</option>
          <option value="yellow">amarillo</option>
          <option value="orange">naranja</option>
          <option value="purple">purpura</option>
          <option value="black">negro</option>
          <option value="brown">marron</option>
          <option value="white">blanco</option>
        </select>
        <h1>Ejercicio 5</h1>
        <form onSubmit={handleSubmit}>
          <input
          type='text'
          value={textoej5}
          onChange={handleTextChange}></input>
          <button type="submit">Mostrar</button>
        </form>
        <h1>Ejercicio 6</h1>
        <form onSubmit={handleSubmit2}>
          <input
          type='number'
          value={num}
          onChange={handleNumEj6}></input>
          <input
          type='text'
          value={word}
          onChange={handleWordEj6}></input>
          <button type="submit">Concatenado</button>
        </form>
        <h1>Ejercicio 7</h1>
        <form onSubmit={handleSubmit3}>
          <input 
          type='text'
          value={textoej7}
          onChange={handleTextChangeEj7}></input>
          <input
          type='number'
          value={numEj7}
          onChange={handleNumEj7}></input>
          <button type="submit">Mostrar las veces deseadas</button>
        </form>
        </header>
    </div>
  );
}

export default App;
