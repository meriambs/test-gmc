import React from 'react'

import "./Navbar.css"
import "@fontsource/inter"
const Navbar = () => {
  return (
    <div className='navbox te'>



     {/* the display for the > 800px  */}

     {/* block-question */}
     <div className='block-question-te'>
      <p>$PracticeBox_Name</p>
   <div className='block-question te'>
       
       <img className='block-question-svg' style={{marginTop:"3px"}} src="./SVG/background.svg" alt="ts"/>

<p>Question 4/10</p>
   </div>
     </div>






       {/*blok-Timer*/}
<div  className='blok-Timer te'>
<img src='./SVG/clock.svg' alt="clock" width="20px" />
<p>00:59s</p>
</div>


{/*block-myScore*/}
    <div className='block-myScore te' >
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0H6C2.65625 0 0 2.6875 0 6C0 9.34375 2.65625 12 6 12H14C17.3125 12 20 9.34375 20 6C20 2.6875 17.3125 0 14 0ZM7.71875 6.75H6.71875V7.75C6.71875 8.1875 6.375 8.5 5.96875 8.5C5.53125 8.5 5.21875 8.1875 5.21875 7.75V6.75H4.25C3.8125 6.75 3.46875 6.4375 3.46875 6C3.46875 5.59375 3.78125 5.25 4.21875 5.25H5.21875V4.25C5.21875 3.84375 5.53125 3.5 5.96875 3.5C6.375 3.5 6.71875 3.84375 6.71875 4.25V5.25H7.71875C8.125 5.25 8.46875 5.59375 8.46875 6C8.46875 6.4375 8.15625 6.75 7.71875 6.75ZM13.4688 8.75C12.75 8.75 12.25 8.21875 12.25 7.53125C12.25 6.875 12.7812 6.28125 13.4688 6.28125C14.125 6.28125 14.6875 6.84375 14.6875 7.53125C14.6875 8.25 14.1875 8.75 13.4688 8.75ZM15.4688 5.75C14.75 5.75 14.25 5.21875 14.25 4.53125C14.25 3.875 14.7812 3.28125 15.4688 3.28125C16.1562 3.28125 16.6875 3.84375 16.6875 4.53125C16.6875 5.25 16.1875 5.75 15.4688 5.75Z" fill="#176FFF"/>
</svg>

<p>My Score : 0 Pts</p>
    </div>













    {/*//////////////////////////////// display for the max width 800px  */}

  <section className='sectiona-Mobile'>
 
  <p className='pp'>$PracticeBox_Name</p>

<div className='firstPart'>
   {/* block-question-scdpart*/}

<div className='block-question-scdpart'>



<div className='block-question-txtimg'>

<img className='block-question-svg' style={{marginTop:"3px"}} src="./SVG/background.svg" alt="ts"/>

<div>1/10</div>

</div>
</div>



{/*block-myScore-scdpart*/}
<div className='block-myScore-scdpart' >

<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 0.5H5.75C2.82422 0.5 0.5 2.85156 0.5 5.75C0.5 8.67578 2.82422 11 5.75 11H12.75C15.6484 11 18 8.67578 18 5.75C18 2.85156 15.6484 0.5 12.75 0.5ZM7.25391 6.40625H6.37891V7.28125C6.37891 7.66406 6.07812 7.9375 5.72266 7.9375C5.33984 7.9375 5.06641 7.66406 5.06641 7.28125V6.40625H4.21875C3.83594 6.40625 3.53516 6.13281 3.53516 5.75C3.53516 5.39453 3.80859 5.09375 4.19141 5.09375H5.06641V4.21875C5.06641 3.86328 5.33984 3.5625 5.72266 3.5625C6.07812 3.5625 6.37891 3.86328 6.37891 4.21875V5.09375H7.25391C7.60938 5.09375 7.91016 5.39453 7.91016 5.75C7.91016 6.13281 7.63672 6.40625 7.25391 6.40625ZM12.2852 8.15625C11.6562 8.15625 11.2188 7.69141 11.2188 7.08984C11.2188 6.51562 11.6836 5.99609 12.2852 5.99609C12.8594 5.99609 13.3516 6.48828 13.3516 7.08984C13.3516 7.71875 12.9141 8.15625 12.2852 8.15625ZM14.0352 5.53125C13.4062 5.53125 12.9688 5.06641 12.9688 4.46484C12.9688 3.89062 13.4336 3.37109 14.0352 3.37109C14.6367 3.37109 15.1016 3.86328 15.1016 4.46484C15.1016 5.09375 14.6641 5.53125 14.0352 5.53125Z" fill="white"/>
</svg>
<div>0 Pts</div>



</div>


    </div>



    {/* SCD PART  */}
  {/*blok-Timer-scdpart*/}
  <div  className='blok-Timer-scdpart'>
<img src='./SVG/clock.svg' alt="clock" style={{width:"25px" , margin:"12px"}} />
<p>00:59s</p>
</div>


</section>

    </div>
  )
}

export default Navbar