import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //         color: 'black',
    //         backgroundColor: 'white'
    // })
    let myStyle = {
      color:props.mode === 'dark'?'white':'black',
      backgroundColor: props.mode === 'dark'?'#212529':'white',
      //border:'1px solid',
      borderColor:props.mode === 'dark'?'white':'#212529'
    }

    // const [btnText, setBtnText] = useState ("Enable dark mode") 

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //        setMyStyle(
    //         {
    //             color: 'Black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
    //         }
    //        ) 
    //        setBtnText("Enable dark mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable light mode")
    //     }
    // }

  return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils Gives You a way to analyse your Text Quickly and Efficiently. Be it word count,
        character count 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is a free character counter tool, Emphasize that the website is completely free to use, without any subscription fees or hidden charges.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is designed to be browser-compatible, ensuring a smooth user experience across a variety of web browsers. Whether you prefer Chrome, Firefox, Safari, Edge, or any other modern browser, you can count on TextUtils to work seamlessly.
      </div>
    </div>
  </div>
</div> 
    {/* <div className='container my-3'>
    <button onClick={toggleStyle} type='button' className="btn btn-primary" >{btnText}</button>
    </div> */}
    </div>
  )
}
