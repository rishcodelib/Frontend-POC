import React from "react";
import Input from './Input'
function login() {
  return <form className="form">
    <Input type="text" placeholder="Enter Username" />
    <Input type="password" placeholder="Enter Password" />
    <button type="submit"> LOGIN</button>
  </form>
}

export default login;