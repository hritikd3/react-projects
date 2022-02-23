import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[color,setColor]=useState('');
  const[error,setError]=useState(false);
  const [list, setList] = useState(new Values("#0b0ba3").all(10));

  const handleSubmit=(e)=>{
    e.preventDefault();
    try {
      let colors= new Values(color).all(10)
     setList(colors);
     setError(false)
      
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>🎨 color generator : 👉 </h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={`${error ? "error " : null}`}
             
            value={color}
            placeholder="#0b0ba3"
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App
