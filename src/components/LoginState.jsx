import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"
import { useInput } from "../hooks/useInput.js";

export default function LoginState() {

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailIsInvalid
    } = useInput('',(value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordIsInvalid
    } = useInput('',(value) => hasMinLength(value, 6));

    function handleSubmit(event) {
        event.preventDefault(); // Serve para prevenir a ação default do forms que é dar submit, substitui o type='Button'

        if( emailIsInvalid || passwordIsInvalid ) {
            return; //Esse return serve para caso sea um dado inválido, toda a operação seguinte do handle não seja comprometida com dado invalido
        }

        console.table(enteredValues);
    }

    return (
        <form onSubmit={handleSubmit}> {/* Serve para realizar alguma ação quando o forms for submitado */}
            <h2>Login</h2>

            <div className="control-row">

                <Input
                    label="Email"
                    id="email"
                    error={emailIsInvalid && "Please enter a valid email address!"}
                    type="email" name="email" onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue} />

                <Input
                    label="Password"
                    id="password"
                    error={passwordIsInvalid && "Please enter a valid password!"}
                    type="password" name="password" onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordValue} />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" onClick={handleSubmit}>Login</button> {/* O type padrão do button é submitt num forms, temos que mudar para usar de outra forma */}
            </p>
        </form>
    );
}
