import { useRef, useState } from "react";

export default function LoginRef() {
    const email = useRef();
    const password = useRef();
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    function handleSubmitted(e) {
        e.preventDefault();

        console.log(email.current.value + " " + password.current.value)
        const emailIsvalid = email.current.value.includes('@');
        if (!emailIsvalid) {
            setIsEmailInvalid(true);
            return;
        }
        setIsEmailInvalid(false);
    }


    return (
        <form onSubmit={handleSubmitted}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input ref={email} id="email" type="text" name="email" />
                    <div className="control-error">{isEmailInvalid && <p>Please enter a valid email address</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input ref={password} id="password" type="password" name="password" />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>

        </form>
    );
}
