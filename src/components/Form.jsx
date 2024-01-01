import React, { useState, useEffect, useContext } from "react";
import img1 from "../assets/images/illustration-sign-up-desktop.svg"
import { FormContext } from "../Context/Context";





function Form() {


    const {mail,setMail,error,setError,handleInput,handleSubmit}=useContext(FormContext)

  
  

    return (
        <>
          
            <div className="App">
              <div className="container">
                <div className="image">
                  <img src={img1} alt="pic" />
                </div>
                <div className="header">
                  <>Stay updated!</>
                </div>
                <div className="subheader">
                  <>
                    Join 60,000+ product managers receiving monthly updates <br />
                    on:
                  </>
                </div>
                <div className="points">
                  <ul>
                    <li>
                      <>Product discovery and building what matters</>
                    </li>
                    <li>
                      <>Measuring to ensure uptades are a success</>
                    </li>
                    <li>
                      <>And much more!</>
                    </li>
                  </ul>
                </div>
    
                <div className="forms">
                  <form onSubmit={handleSubmit}>
                    <label className="lbl">
                      <span className="lab-text">Email adress</span>
                      <span className={error ? "laberror" : "hiddentext"}>
                        Enter valid email
                      </span>
                      <br />
                      <input
                        className={!error ? "inp" : "inperror"}
                        type="email"
                        value={mail}
                        placeholder="email@company.com"
                        onChange={handleInput}
                      />
                      <br />
                      <button className="btn" type="submit">
                        Submit to montly newsletter
                      </button>
                    </label>
                  </form>
                </div>
              </div>
            </div>
         
        </>
      );
    }
export default Form;
