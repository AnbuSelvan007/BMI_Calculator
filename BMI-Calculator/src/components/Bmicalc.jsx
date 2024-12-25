import React, { useEffect, useState } from 'react'
import './Bmicalc.css'
function Bmicalc() {
    const [height,setHeight]=useState('');
    const [weight,setWeight]=useState('');
    const [valueErr,setValueErr]=useState(false);
    const[blank,setBlank]=useState(false);
    const [output,setOutput]=useState('');
    const[bmival,setBmival]=useState('');
    const[color,setColor]=useState(false);
    const [rst,SetRst]=useState(false);
    const[advice,setAdvice]=useState('')
    function resetHandler(){
        setHeight('');
        setWeight('');
        setBlank(false)
        setValueErr(false)
        SetRst(false);
        setColor(false)
        setAdvice('')
    }
    function submitHandler(){
      setBlank(false);
      setValueErr(false);
      setColor(false)
      SetRst(true);
        if(height=='' || weight=='')
          setBlank(true);
        else{
          let val=height/100;
          val=weight/(val*val);
          setBmival(val.toFixed(2));
          if(val<18.5)
          {
            setOutput('Under Weight')
            setAdvice('Eat More fruits and Vegitables')
          }
          else if(val>=18.5  && val<24.9)
          {
            setOutput('Normal Weight')
            setColor(true);
            setAdvice('')
          }
          else if(val>=24.9)
          {
            setOutput('Over Weight')
            setAdvice('Maintain a healthy diet')
          }
          else
            setValueErr(true);
        }
    }
      
  return (
    <div className='container'>

              <h1>BMI CALCULATOR</h1>
              { blank && <p>fill all boxes</p>}
              {valueErr && <p>Invalid value</p>}
              <div className='weight'>
              <label htmlFor="">Weight</label>
              <input type="text"  placeholder='Enter your weight in Kg' onChange={(e)=>setWeight(e.target.value)} value={weight}/>
              </div>
              
              <div className='height'>
              <label htmlFor="">Height</label>
              <input type="text"  placeholder='Enter your Height in Cm' onChange={(e)=>setHeight(e.target.value)} value={height}/>
              </div>

              <div className='buttons'>
              <button className='reset' onClick={resetHandler}>Reset</button>
              <button className='submit' onClick={submitHandler}>Submit</button>
              </div>

             { rst && !valueErr && !blank && <div className={color?'result green':'result red'}>
                  <h3>Your BMI Value is {bmival}</h3>
                  <h3>Your BMI Status is {output}</h3>
                  {advice!='' &&<h2>Suggestion</h2>}
                  {advice!='' && <h3>{advice}</h3>}
              </div>}
        
    </div>
  )
}

export default Bmicalc
