import { useRef, useState } from "react";

export default function Login() {

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // Serve para prevenir a ação default do forms que é dar submit, substitui o type='Button'
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    if(!enteredEmail.includes('@')){
      setEmailIsInvalid(true);
      return; //Esse return serve para caso sea um dado inválido, toda a operação seguinte do handle não seja comprometida com dado invalido
    }

    setEmailIsInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}> {/* Serve para realizar alguma ação quando o forms for submitado */}
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button> {/* O type padrão do button é submitt num forms, temos que mudar para usar de outra forma */}
      </p>
    </form>
  );
}
