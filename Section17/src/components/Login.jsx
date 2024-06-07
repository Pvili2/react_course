import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation'
import { useInput } from "../hooks/useInput";
export default function Login() {
  const { hasError: emailError, handleInputBlur: handleEmailBlur, handleInputChange: handleEmailChange, value: emailValue } = useInput("", isEmail);
  const { hasError: passwordError, handleInputBlur: handlePasswordBlur, handleInputChange: handlePasswordChange, value: passwordValue } = useInput("", isNotEmpty);

  function handleSubmitted(e) {
    e.preventDefault();

    console.log(enteredValues.email + " " + enteredValues.password)
  }


  return (
    <form onSubmit={handleSubmitted}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          onBlur={() => handleEmailBlur()}
          onChange={(e) => handleEmailChange("email", e)}
          value={emailValue}
          error={emailError && <>Ez egy hiba</>}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          onBlur={() => handlePasswordBlur()}
          onChange={(e) => handlePasswordChange(e)}
          value={passwordValue}
          error={passwordError && <>Ez egy hiba</>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>

    </form>
  );
}
