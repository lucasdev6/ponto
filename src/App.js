import './App.css';
import React, { useState } from "react";

function App() {
  const [hora1, setHora1] = useState('');
  const [hora2, setHora2] = useState('');
  const [hora3, setHora3] = useState('');
  const [horaTrabalhada, setHoraTrabalhada] = useState('')
  const [ativo, setAtivo] = useState(false)
 
  const alerta = ()=>{
    const startHours = parseInt(hora1.split(":")[0]);
    const startMinutes = parseInt(hora1.split(":")[1]);
    
    const endHours = parseInt(hora2.split(":")[0]);
    const endMinutes = parseInt(hora2.split(":")[1]);
    
    const differenceInMinutes = (endHours - startHours) * 60 + (endMinutes - startMinutes);
    
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    const result1 = `${hours}:${minutes}`
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
    //-------------------------------------------------------------
    const startHours3 = parseInt(result1.split(":")[0]);
    const startMinutes3 = parseInt(result1.split(":")[1]);
    
    const endHours3 = parseInt(result2.split(":")[0]);
    const endMinutes3 = parseInt(result2.split(":")[1]);
    
    const differenceInMinutes3 = (startHours3 + endHours3) * 60 + (startMinutes3 + endMinutes3);
    
    const hours4 = Math.floor(differenceInMinutes3 / 60);
    const minutes4 = ("00"+differenceInMinutes3 % 60).slice(-2);
    setHoraTrabalhada(`${hours4}:${minutes4}`)
    setAtivo(true)
  }
  return (
    <div className="bg-slate-600 flex justify-center h-screen flex-col text-white">
      <div className='flex space-x-4 justify-center content-center'>
        <div>
        <h3>Inicio</h3>
        <input className='border-2 border-black text-right text-black' type='time' value={hora1} onChange={event=>setHora1(event.target.value)}></input>
        </div>
        <div>
        <h3>Pausa</h3>
        <input className='border-2 border-black text-right text-black' type='time' value={hora2} onChange={event=>setHora2(event.target.value)}></input>
        </div>
        <div>
        <h3>Retorno</h3>
        <input className='border-2 border-black text-right text-black' type='time' value={hora3} onChange={event=>setHora3(event.target.value)}></input>
        </div>
      </div>
      <div className='flex justify-center content-center'>
        <button onClick={alerta} className=' border-2 bg-white my-4 px-6 text-black'>Calcular</button>
      </div>
      {ativo ? <>
        <div className='flex justify-center content-center text-xl '>
          <p>Horas trabalhadas: {horaTrabalhada}</p>
        </div>
      </> : <></>}
    </div>
  );
}

export default App;
