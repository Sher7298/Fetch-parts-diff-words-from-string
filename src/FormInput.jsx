// import React, {useState, useEffect} from 'react'
// import './formInput.css'

// const FormInput = () => {
//     const [data, setData] = useState(null)
//     const [print, setPrint] = useState(false)

//     let domain = data.substring(data.indexOf('@') + 50);
//     console.log(domain)
    
// const getData = (values) =>{
//     setData(values.target.value)
//     setPrint(false)
// }
//     return (
//         <div className="container-fluid login-container">
//             {
//                 print?
//                 <h1>{data}</h1>:
//                 null
//             }
//         <div className="row">
//             <div className="col-md-4 login-form-1">
//             <form>
//                 <div className="form-group">
//                 <label htmlFor="" className="lbel1">Enter String:</label>
//                 <input type="text" className="form-control"  onChange={getData} />
//                 </div>
//                <button onClick={()=>setPrint(true)}  style={{background:"red"}}> Check</button>
//             </form>
//             </div>
//         </div>  
//      </div>
//     )
// }

// export default FormInput



import React, {useState} from 'react'

import './App.css';

import './formInput.css'

function FormInput() {

  const [data, setData] = useState('');
  const [dateData, setDateData] = useState('');
  const [day, setDay] = useState('');
  const [body, setBody] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const mentionReg = /(@)[a-z]+/gi
    const dateReg = /[0-9]{4,4}[-,/]{1}[0-9]{2,2}[/,-]{1}[0-9]{2,2}/gi
    // const dayReg = /[munday|tuesday|wednessday|thursday|friday|sunday]+/gi
     const dayReg =  /(friday|saturday|sunday|monday|tuesday|wednessday|thursday)+/gi;

        const mentionres = data.match(mentionReg)
        const dateres = data.match(dateReg)
        const dayres = data.match(dayReg)
        setData(mentionres)
        setDateData(dateres)
        setDay(dayres)

  }

  return (
    <>
    <div className="todo-app">
       <form onSubmit={handleSubmit}>
        <label>
          Data:
           {/* e.g  input = 'value of body, date, time, mention'; */}
          <input type="text" name="data"  onChange={(e)=>{ setData(e.target.value)}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div className="data">
      <p>Mentions:  {data}</p>
      <p>Date and TIme : {dateData}</p>
      <p>Day : {day}</p>
      <p>Body : {body}</p>
    </div>
    
    
    </>
  );
}

export default FormInput;