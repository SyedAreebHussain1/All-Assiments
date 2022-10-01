import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import PIC from '../../assets/loginEntryPointPost.png';

class LoginModal extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.Close()} className="modal">
        <section className="modal-main">
          <header>
            <span onClick={() => this.props.Close()}>X</span>
          </header>
          {/* <button type="button" onClick={() => this.props.Close()}>
            Close
        </button> */}
          <body>
            <div className="slider">
              {/* <img src={PIC} alt="" /> */}
              <p>Help make OLX safer place to buy and sell</p>
            </div>

            <div className="btns">
              <div>
                <button>Continue with phone</button>
              </div>
              <div>
                <button><span className="fab fa-facebook-f" />Continue with facebook</button>
              </div>
              <div>
                <button><span className="fab fa-google" />Continue with google</button>
              </div>
              <div>
                <button>Continue with email</button>
              </div>
            </div>
          </body>
          <footer >
            <div>
              <p>We won't share your personal details with anyone</p>
              <p className="p_link">If you continue, you are accepting <Link to=""> OLX Terms and Conditions and Privacy Policy</Link></p>
            </div>
          </footer>
        </section>
      </div>
    );
  }

}
export default LoginModal;