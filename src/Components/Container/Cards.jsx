import React from 'react'
import './Cards.css'

const Cards = ({element}) => {
  return (
      <div className='cards'>
<div className='miniCards'>
{element.letter}
</div>
<div className='chiffrebox'>

<h4 className='chiffre'>{element.containe}</h4>
<div className='checkbox'>

</div>
</div>

      </div>
  )
}

export default Cards