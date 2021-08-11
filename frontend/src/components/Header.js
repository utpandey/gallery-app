import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../redux/reducers/authReducer";
import Galleria5 from '../assets/logo/Galleria2.svg';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(LOGOUT());
  };

  return (
    <motion.div className="header__cont">
      {/* initial={{y:-250}}
		animate={{ y: -10, }}
		transition={{ delay: 0.5,type:'spring',stiffness: 120}} */}
      <Link to="/">
        <img
          src={Galleria5}
          className="header__cont__logo"
          style={{marginTop: 'auto'}}
        />
      </Link>
      {isAuthenticated ? (
        <>
          <div className="header__cont__title" >
            <Link to="/" style={{ textDecoration: "none" }}>
              <motion.h1 className="header__cont__title__text">
                {/* whileHover={{color: 'black',scale: '0.9'}} */}
                Upload
              </motion.h1>
            </Link>
            <Link to="/pictures" style={{ textDecoration: "none" }}>
              <motion.h1 className="header__cont__title__text">
                {/* whileHover={{color: 'black',scale: '0.9'}} */}
                Pictures
              </motion.h1>
            </Link>
            <Link to="/albums" style={{ textDecoration: "none" }}>
              <motion.h1 className="header__cont__title__text">
                {/* whileHover={{color: 'black',scale: '0.9'}} */}
                Albums
              </motion.h1>
            </Link>
            <h1 className="header__cont__title__text" onClick={logout}>Logout</h1>
          </div>
        </>
      ) : (
        <motion.div className="header__cont__title">
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <motion.h1 className="header__cont__title__text">
              {/* whileHover={{color: 'black',scale: '0.9'}} */}
              Sign In
            </motion.h1>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <motion.h1 className="header__cont__title__text">
              {/* whileHover={{color: 'black',scale: '0.9'}} */}
              Sign Up
            </motion.h1>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default withRouter(Header);
