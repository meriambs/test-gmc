import React from 'react'
import Cards from './Cards'
import './Container.css'
const Container = () => {

  
  const infoCard=[
    {letter:"A.",containe:145,},
  {letter:"B.",containe:120,},
   {letter:"C.",containe:240,}, 
   {letter:"D.",containe:280,}
  ]



  return (
    <div className='container'>

<p>QUESTION 1.</p>

<h4>What is the maximum number of characters per Tweet?</h4>

<div className='test'>
{
  infoCard.map((e)=><Cards element={e} />)
}

</div>
<div className='divbutton'><button>Submit</button></div>

{/* partie logo  go my code  */}
<div className='gomycode'>
<img src='./SVG/g.svg' alt="gomycode"/>
<img src="./SVG/o.svg" alt="gomycode" />
<img src="./SVG/m.svg" alt="gomycode"/>
<img src="./SVG/y.svg" alt="gomycode" />
<img src="./SVG/c.svg" alt="gomycode" />
<img src="./SVG/oo.svg" alt="gomycode" />
<img src="./SVG/d.svg" alt="gomycode" />
<img src="./SVG/e.svg" alt="gomycode" />
<img className='dotgomycode'  style={{marginTop:"14px"}}src="./SVG/dot.svg" alt="gomycode"/>
</div>

    </div>
  )
}

export default Container