import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login_box">
          <div className="title1"> Login Page </div>

          <div className="field">
            <form  >
              <div className="login-content">
                <label className="input_label">Username</label>
                <div>
                  <FontAwesomeIcon className="fontawsome" icon={faUser} />
                  <input className="login-input" type="email" placeholder="Email ID" />
                </div>
                <label className="input_label">Password</label>
                <div>
                  <FontAwesomeIcon className="fontawsome" icon={faLock} />
                  <input className="login-input" type="password" placeholder="Password" />

                </div>
                <button className="login_button" type="submit">Login</button>

              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}
