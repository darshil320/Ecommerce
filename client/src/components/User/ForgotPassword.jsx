import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors,forgotPassword} from "../../actions/userAction";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./forgotPassword.css";

const ForgotPassword = () => {
      const dispatch = useDispatch();
      const alert = useAlert();

      const { error, message, loading } = useSelector(
        (state) => state.forgotPassword
      );
      const [email, setEmail] = useState("");

      const forgotPasswordSubmit = (e) => {
          e.preventDefault();
          const myForm = new FormData();
          myForm.set("email", email);
          dispatch(forgotPassword(myForm));
      }
      
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      alert.success("Email send Successfully");
    }
  }, [dispatch, error, alert,message]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="Forgotpasswordbg">
          <MetaData title="Forgot Password" />
          <div className="glassmorphismBackground">
            <div className="glassmorphismContainer">
              <div className="forgotPasswordContainer">
                <div className="forgotPasswordBox">
                  <h2 className="forgotPasswordHeading">
                    Forgot your password?
                  </h2>
                  <p className="forgotPasswordparam">
                    If you forgot your password, please enter your email below<br/>
                    and we will send you a recovery link.
                  </p>
                  <form
                    className="forgotPasswordForm"
                    onSubmit={forgotPasswordSubmit}
                  >
                    <div className="forgotPasswordEmail">
                      <MailOutlineIcon />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Send recovery link"
                      className="forgotPasswordBtn"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ForgotPassword;
