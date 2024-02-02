import { useState } from 'react';
import './App.css';

function App() {

  let [input,setinput] = useState("")
  let [val , setval] = useState("")
  let [lastval] = useState("");
  let [sign , setsing] = useState("")
 
  let [delval , setdelval] = useState("")
  let [hexval , sethexval] = useState("")

  const  data = (m) => {
    setinput(input + m);
  }

  const caldata = (d) => {
    setval(input);
    setinput("");
    setsing(d);
  }
  
  const lastvalue = () => {

     lastval = input;
    switch (sign)
    {
      case '1':
				setinput(String(parseFloat(val) + parseFloat(lastval)));
				break;
      
      case '2':
        setinput(String(parseFloat(val) - parseFloat(lastval)));
        break;

        case '3':
          setinput(String(parseFloat(val) * parseFloat(lastval)));
          break;

        case '4':
            if(parseFloat(lastval)===0)
            {
              setinput("zero not divad")
            }else
            {
            setinput(String(parseFloat(val) / parseFloat(lastval)));
            }
            break;
         case'6':
         setinput(String(parseFloat(val) % parseFloat(lastval)));
         break;
        default:
          setinput("Error");

    }
  }

  const clr = () => {
    setinput("");
  }

  const rdata = () => {
    setdelval(input);
    delval = input.substring(0,input.length-1) 
    setinput(delval );
  }

  return (
    <div className="App">
      <center>
        <div className='pad'></div>
          <div className='cal'>
            
                <input type='text'className='dis'  disabled value={input}></input>
          
            
            <div className='cal_3'>
                <input type='button'className='btn1' value='%'onClick={() => caldata('6')} ></input>
                <input type='button'className='btn1' value='CE' onClick={clr}></input>
                <input type='button'className='btn1' value='C' onClick={rdata}></input>
                <input type='button'className='btn1' value='/' onClick={() => caldata('4')}></input>
            </div>
            <div className='cal_3'>
                <input type='button'className='btn' value='7' onClick={() => data('7')}></input>
                <input type='button'className='btn' value='8' onClick={() => data('8')}></input>
                <input type='button'className='btn' value='9' onClick={() => data('9')}></input>
                <input type='button'className='btn' value='*' onClick={() => caldata('3')}></input>
            </div>
            <div className='cal_3'>
                <input type='button'className='btn' value='4' onClick={() =>data('4')}></input>
                <input type='button'className='btn' value='5' onClick={() =>data('5')}></input>
                <input type='button'className='btn' value='6' onClick={() =>data('6')}></input>
                <input type='button'className='btn' value='-' onClick={() => caldata('2')}></input>
            </div>
            <div className='cal_3'>
                <input type='button'className='btn' value='1' onClick={() =>data('1')}></input>
                <input type='button'className='btn' value='2' onClick={() =>data('2')}></input>
                <input type='button'className='btn' value='3' onClick={() =>data('3')}></input>
                <input type='button'className='btn' value='+' onClick={() => caldata('1')}></input>
            </div>
            <div className='cal_3'>
                <input type='button'className='btn' value='+/'></input>
                <input type='button'className='btn' value='0' onClick={() =>data('0')}></input>
                <input type='button'className='btn' value='.' onClick={() =>data('.')}></input>
                <input type='button'className='btn' value='=' onClick={lastvalue}></input>
            </div>
            
            <input type='button'className='btn' value='c' onClick={clr}></input>
            <input type='button'className='btn' value='cd' onClick={del}></input>
            <input type='button'className='btn' value='.' onClick={lastvalue}></input>
            <input type='button'className='btn' value='=' onClick={lastvalue}></input>


          </div>
      </center>
    </div>
  );
}

export default App;