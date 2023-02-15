import './App.css';
import React, { useState } from "react";

function App() {
  const [hora1, setHora1] = useState('');
  const [hora2, setHora2] = useState('');
  const [hora3, setHora3] = useState('');
 
  const alerta = ()=>{
    const startHours = parseInt(hora1.split(":")[0]);
    const startMinutes = parseInt(hora1.split(":")[1]);
    
    const endHours = parseInt(hora2.split(":")[0]);
    const endMinutes = parseInt(hora2.split(":")[1]);
    
    const differenceInMinutes = (endHours - startHours) * 60 + (endMinutes - startMinutes);
    
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    const result1 = `${hours}:${minutes}`
    console.log(`passousub1 ${result1}`);
    //------------------------------------------------------------
    const date = new Date();
    const hours2 = date.getHours();
    const minutes2 = date.getMinutes();

    const hora4 = `${hours2}:${minutes2}`

    const startHours2 = parseInt(hora3.split(":")[0]);
    const startMinutes2 = parseInt(hora3.split(":")[1]);
    
    const endHours2 = parseInt(hora4.split(":")[0]);
    const endMinutes2 = parseInt(hora4.split(":")[1]);
    
    const differenceInMinutes2 = (endHours2 - startHours2) * 60 + (endMinutes2 - startMinutes2);
    
    const hours3 = Math.floor(differenceInMinutes2 / 60);
    const minutes3 = differenceInMinutes2 % 60;

    const result2 = `${hours3}:${minutes3}`
    console.log(`passousub2 ${result2}`);
    //-------------------------------------------------------------
    const startHours3 = parseInt(result1.split(":")[0]);
    const startMinutes3 = parseInt(result1.split(":")[1]);
    
    const endHours3 = parseInt(result2.split(":")[0]);
    const endMinutes3 = parseInt(result2.split(":")[1]);
    
    const differenceInMinutes3 = (startHours3 + endHours3) * 60 + (startMinutes3 + endMinutes3);
    
    const hours4 = Math.floor(differenceInMinutes3 / 60);
    const minutes4 = differenceInMinutes3 % 60;
    const horaTrabalhada = `${hours4}:${minutes4}`
    console.log(`passousoma ${horaTrabalhada}`);
    alert(`Horas Trabalhadas: ${horaTrabalhada}`);
  }
  return (
    <div className="App">
      <div className='grid-cols-3'>
        <div>
        <h3>Inicio</h3>
        <input className='border-2 border-black text-right' type='time' value={hora1} onChange={event=>setHora1(event.target.value)}></input>
        </div>
        <div>
        <h3>Pausa</h3>
        <input className='border-2 border-black text-right' type='time' value={hora2} onChange={event=>setHora2(event.target.value)}></input>
        </div>
        <div>
        <h3>Retorno</h3>
        <input className='border-2 border-black text-right' type='time' value={hora3} onChange={event=>setHora3(event.target.value)}></input>
        </div>
      </div>
      <button onClick={alerta}>Clicar</button>

    </div>
  );
}

export default App;
