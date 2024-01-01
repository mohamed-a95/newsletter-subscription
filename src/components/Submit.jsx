import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { FormContext } from '../Context/Context'

function Submit() {

    const {mail,setMail,submit,setSubmit,handlebtn}=useContext(FormContext)
  
    return (
        <>
          
            <div className="App">
              <div className="container-2">
              
                <div className="header">
                  <>Thanks for subscribing!</>
                </div>
                <br></br>
                <div className="subheader2">
                  <>
                    A confirmation email has been sent to <span style={{ fontWeight: 'bold' }}>{mail}</span>:
                  </>
                </div>

                <div className='knapp'>
                <button onClick={handlebtn} className="btn" >
                        Return to form!
                      </button>
                </div>
               
                <div className="forms">
                  
                </div>
              </div>
            </div>
         
        </>
      );
}

export default Submit