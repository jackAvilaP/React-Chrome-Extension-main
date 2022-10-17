import React from "react";

import "../styles/Login.css";

const Login = () => {
  
  const test = () => {
    /* eslint-disable no-undef */
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTabId },
          function: () => {
            document.querySelector("#email-or-phone").value = "jackson@gmail.com"
          }
        }
      )
    })
  }
  return (
    <div className="login">
      <form className="row g-3 ">
        <div className="col-auto p-0 div-input">
          <input
            type="email"
            className="form-control form-control-lg"
            aria-label=".form-control-lg"
            placeholder="Email"
            id="staticEmail2"
          />
        </div>
        <div className="col-auto p-0">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Password"
            id="inputPassword2"
            
          />
        </div>

        <button type="button" className="btn mt-4 btn-primary btn-lg" onClick={test}>
          Confirm identity
        </button>
      </form>
    </div>
  );
};

export default Login;
