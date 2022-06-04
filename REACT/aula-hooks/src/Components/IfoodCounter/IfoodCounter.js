import React, {useState, useEffect} from 'react'
import '../IfoodCounter/Ifoodcounter.css'

export default function Ifoodcounter() {
    const [value, setValue] = useState(1);
    const [btnStyle, setBtnStyle] = useState("counter-button-minus-active");

    useEffect(() => {
      document.getElementById('moeda').innerHTML = 2 * value
    }, [value])

    function down() {

      {(value <= 1) ? setBtnStyle("counter-button-minus-deactive"):setBtnStyle("counter-button-minus-active")}
        

      if(value>0){
      setValue(value - 1)}
    }
    function up() {
      setValue(value + 1)
      setBtnStyle("counter-button-minus-active")
    }

    return (
      <div className='countex-wrapper'>
        <button 
        className={btnStyle} 
        onClick={down}>
            -
        </button>

        <p>{value}</p>

        <button 
        className='counter-button-plus-active' 
        onClick={up}>
            +
        </button>
        <button id='moeda'>
            12,00
        </button>
      </div>
    )
}

