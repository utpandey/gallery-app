import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap, TimelineLite, Power3 } from "gsap";
import { useDispatch } from "react-redux";

import { EMAILERROR, PASSERROR } from "../redux/reducers/errorReducer";
import signup1 from "../assets/signin1.png";
import signup2 from "../assets/signin2.png";
import Snackbar from "../components/Snackbar";
import axios from "../utils/axios";
import { signUp } from "../utils/authApi";

const Signup = (props) => {
  const tlite = new TimelineLite({ delay: 0.3 });
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [type, setType] = useState("Farmer");
  const [pictureBase64, setPictureBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const handleSignupSubmit = () => {
    let valid_data = true;
    dispatch(EMAILERROR({ isErrors: false, errorMessage: "" }));
    dispatch(PASSERROR({ isErrors: false, errorMessage: "" }));
    if (email === "") {
      dispatch(EMAILERROR({ isErrors: true, errorMessage: "Required!" }));
      valid_data = false;
    }
    if (password === "") {
      dispatch(PASSERROR({ isErrors: true, errorMessage: "Required!" }));

      //  setErrors({...{username_error},...{email_error},password_error: 'Required!' });
      valid_data = false;
    }
        if (password !== repeatPassword) {
      setError({
        isError: true,
        errorMessage: "Passwords do not match.",
      });
    }
    if (email.length < 3) {
      setError({
        isError: true,
        errorMessage: "Please enter a valid email.",
      });
    }
    if ((firstName + lastName).length < 3) {
      setError({
        isError: true,
        errorMessage: "Please enter a valid name.",
      });
    }
    // setUpdate(true);

    // if (valid_data) {
    // 	setProgress(true);
    // }

    if (valid_data) {
      const signUpdata = {
        email,
        password,
        firstName,
        lastName
      };
      signUp(signUpdata, props);
      // setProgress(false);
    }
    // const postData = {
    //   email,
    //   password,
    //   type,
    //   profile: {
    //     name: firstName + lastName,
    //     picture: pictureBase64,
    //   },
    // };
    // if (password !== repeatPassword) {
    //   setError({
    //     isError: true,
    //     errorMessage: "Passwords do not match.",
    //   });
    // }
    // if (email.length < 3) {
    //   setError({
    //     isError: true,
    //     errorMessage: "Please enter a valid email.",
    //   });
    // }
    // if ((firstName + lastName).length < 3) {
    //   setError({
    //     isError: true,
    //     errorMessage: "Please enter a valid name.",
    //   });
    // }
    // setLoading(true);
    // axios.post('/authentication/register', postData)
    // 	.then(res => {
    // 		console.log(res);
    // 		if(res && res.data.user && res.data.user.profile.picture) {
    // 			dispatch(LOGIN({
    // 				type: res.data.user.type,
    // 				profile: {
    // 					name: res.data.user.profile.name,
    // 					picture: res.data.user.profile.picture
    // 				}
    // 			}));
    // 		} else if (res && res.data) {
    // 			dispatch(LOGIN({
    // 				type: res.data.user.type,
    // 				profile: {
    // 					name: res.data.user.profile.name,
    // 					picture: ''
    // 				}
    // 			}))
    // 		}
    // 	})
    // 	.catch(err => {
    // 		console.log(err);
    // 		setError({
    // 			isError: true,
    // 			errorMessage: err.name,
    // 		})
    // 	})
    // 	.finally(() => {
    // 		setLoading(false);
    // 	})
  };

  // const handleImageChange =(event>)=> {
  // 	try {
  // 		if(event.target.files && event.target.files[0]) {
  // 			const file = event.target.files[0]
  // 			if (file) {
  // 				getBase64(file).then(data => {
  // 					setPictureBase64((data as string));
  // 				})
  // 			}
  // 		}
  // 	} catch (err) {
  // 		console.log(err);
  // 	}
  // }

  const clearError = () => {
    setError({
      isError: false,
      errorMessage: "",
    });
  };

  // const [ error, setError ] = useState('');

  // const register = async (event: React.FormEvent) => {
  // 	event.preventDefault();
  // 	if (password === repeatPassword) {
  // 		const response = await onRegister({
  // 			username,
  // 			password
  // 		});

  // 		if (response && response.error) {
  // 			setError(response.error);
  // 		}
  // 	} else {
  // 		setError('password and repeat password must match');
  // 	}
  // };

  {
    /* <div className="log-in authform" onSubmit={register}> */
  }

  {
    /* <button type="button" className="signup__cont__session__right__btn">
Register
</button>
{error.length > 0 && <p>{error}</p>}
<p className="signup__cont__session__right__info--2">
Already have an account? <Link to="/signin">Login</Link>
</p> */
  }

  return (
    <div className="signup__cont">
      <img id="imgTest" alt="" />
      {error.isError && (
        <Snackbar
          status="error"
          message={error.errorMessage}
          clearError={clearError}
        />
      )}
      <div className="signup__cont__left">
        <h1 className="signup__cont__left__title">Sign Up</h1>
        <div className="signup__cont__left__inputCont">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            className="signup__cont__left__inputCont__input"
            required={true}
            placeholder="Email"
          />
        </div>
        <div className="signup__cont__left__inputCont">
          <input
            type="text"
            onChange={(e) => setfirstName(e.target.value)}
            name="firstName"
            id="firstName"
            className="signup__cont__left__inputCont__input"
            required={true}
            placeholder="First Name"
          />
        </div>
        <div className="signup__cont__left__inputCont">
          <input
            type="text"
            onChange={(e) => setlastName(e.target.value)}
            name="lastName"
            id="lastName"
            className="signup__cont__left__inputCont__input"
            required={true}
            placeholder="Last Name"
          />
        </div>
        <div className="signup__cont__left__inputCont">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            className="signup__cont__left__inputCont__input"
            required={true}
            placeholder="Password"
          />
        </div>
        <div className="signup__cont__left__inputCont">
          <input
            type="password"
            onChange={(e) => setRepeatPassword(e.target.value)}
            name="confirmPass"
            id="confirmPass"
            className="signup__cont__left__inputCont__input"
            required={true}
            placeholder="Confirm Password"
          />
        </div>
        {/* <div className="signup__cont__left__otherCont">
          <h1 className="signup__cont__left__otherCont__title">Role</h1>
          <select
            onChange={(e) => setType(e.target.value)}
            className="signup__cont__left__otherCont__dropDown"
          >
            <option value="Farmer">Farmer</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Distributer">Distributer</option>
            <option value="Retailer">Retailer</option>
          </select>
        </div> */}
        {/* <div className="signup__cont__left__otherCont">
          <h1 className="signup__cont__left__otherCont__title">
            Upload your Profile picture here
          </h1>
           </div> */}
        <button
          onClick={handleSignupSubmit}
          className="signup__cont__left__submitBtn"
        >
          Continue <span>&#10148;</span>
        </button>
        <p className="signup__cont__left__msg">
          Already have an account?{" "}
          <Link to="/signin" className="signup__cont__left__msg__link">
            Login
          </Link>
        </p>
      </div>
      <div className="signup__cont__right">
        <img
          src={signup1}
          alt=""
          className="signup__cont__right__img signupImg--1"
        />
        <img
          src={signup2}
          alt=""
          className="signup__cont__right__img signupImg--2"
        />
        {/* <img src={ signup3} alt="" className="signup__cont__right__img signupImg--3"/> */}
      </div>
    </div>
  );
};

export default Signup;
