import React from "react";
import Input from './Input'
function login(prop) {
  return <form className="form">
    <Input type="text" placeholder="Enter Username" />
    <Input type="password" placeholder="Enter Password" />
    {prop.isReg === false && (<Input type="password" placeholder="Confirm Password" />)}

    <button type="submit"> {prop.isReg ? "LOGIN" : "REGISTER"}</button>
  </form>
}

export default login;