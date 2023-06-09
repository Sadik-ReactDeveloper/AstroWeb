import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
// import "../../../public/assets/img/usedemo.jpg"
import Buyimg from "../../../src/assets/img/boy-img.png";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";

import Axios from "axios";
import axiosConfig from "../../axiosConfig";

const IconGroup = ({
  currency,

  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  iconWhiteClass,
}) => {
  // const [balance, setbalance] = useState("");
  const [carts, setCarts] = useState([]);

  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  const handleLogout = e => {
    window.localStorage.clear();
    // window.location.reload()
    window.location.replace("/");
    //  window.location.replace("http://soxypay.com/");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  //const { id } = useParams();
  const fetchcarts = async token => {
    const { data } = await Axios.get(
      // `http://13.235.180.192/api/admin/cartbycustomer`,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const carts = data.data;
    setCarts(carts);
    console.log(carts);
  };
  const [userBalance, setuserBalance] = useState("");

  const timer = () => {
    setInterval(() => {
      const Balance = sessionStorage.getItem("userBalance");
      setuserBalance(Balance);
    }, 1000);
  };

  // setuserBalance(Balance);
  const Balance = sessionStorage.getItem("userBalance");

  useEffect(() => {
    timer();
    Fetchuserdetail();
  }, [Balance]);

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      fetchcarts();
    }
    // fetchCustomer();
  }, []);

  const history = useHistory();

  const [wish, setWish] = useState([]);
  const fetchWish = async () => {
    const { data } = await Axios.get({
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });
    const wish = data.data;
    setWish(wish);
    console.log(wish);
  };
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      fetchWish();
    }
  }, []);

  // account
  const [customer, setCustomer] = useState({});
  const [token, setToken] = useState("");

  const fetchCustomer = async () => {
    let user_id = JSON.parse(localStorage.getItem("user_id"));

    axiosConfig
      .get(`/user/viewoneuser/${user_id}`)
      .then(response => {
        setCustomer(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    let data = localStorage.getItem("token");
    setToken(data);
    fetchCustomer();
  }, []);

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      {/* <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div> */}
      <div className="same-style account-setting  d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          {customer?.userimg ? (
            <>
              <span className="username">
                {customer?.fullname.charAt(0).toUpperCase() +
                  customer?.fullname.slice(1)}
              </span>

              <span data-tour="user">
                {customer.userimg[0] ? (
                  <img
                    src={customer?.userimg[0]}
                    className="round ftt"
                    height="40"
                    width="40"
                    alt="Login"
                  />
                ) : (
                  <img
                    src={Buyimg}
                    className="round ftt"
                    height="40"
                    width="40"
                    alt="Login"
                  />
                )}
              </span>
            </>
          ) : (
            <span className="username">Login</span>
          )}
        </button>
        <div className="account-dropdown">
          <ul>
            {!localStorage.getItem("token") ? (
              <>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    Register
                  </Link>
                </li>
                <li>
                  <a href="http://3.6.219.3/#/pages/login">Astrologer login</a>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/astrologersignup"}>
                    Astrologer Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-order"}>
                    My Order
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-order"}>Refund</Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/notificationlist"}>
                    Notification
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-account"}>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/wallettransaclist"}>
                    Wallet Transaction
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/walletmoney"}>
                    Wallet Recharge{" "}
                    <span className="ml-2">
                      ₹
                      {userBalance ? (
                        <>{userBalance}</>
                      ) : (
                        <>{customer?.amount}</>
                      )}
                    </span>
                    {/* <span className="ml-2">
                      ₹ <FetchUserBalance />
                    </span> */}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/askQuestionList"}>
                    Ask Question
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/userChatHistoryList"}>
                    User Chat History List
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/userCallHistrory"}>
                    Call History
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/userChatHistory"}>
                    Chat History
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/userCallHistrory"}>
                    Video Call History
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/customersupport"}>
                    Customer Support Chat
                  </Link>
                </li>

                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/"}
                    // onClick={(e) =>{(
                    //   window.localStorage.clear()

                    //   //localStorage.removeItem("auth-token","userInfo")
                    // )}
                    onClick={e => handleLogout()}
                    //}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
        </Link>
      </div> */}
      {/* <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + '/wishlist'}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wish && wish.length ? wish.length : 0}
          </span>
        </Link>
      </div> */}

      {/* <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {carts && carts.length ? carts.length : 0}
          </span>
        </button>
       
        <MenuCart
          carts={carts}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + '/cart'}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {carts && carts.length ? carts.length : 0}
          </span>
        </Link>
      </div> */}

      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array,
};

export const Fetchuserdetail = async () => {
  let user_id = JSON.parse(localStorage.getItem("user_id"));
  await axiosConfig
    .get(`/user/viewoneuser/${user_id}`)
    .then(response => {
      sessionStorage.setItem("userBalance", response.data.data.amount);

      return response.data.data;
    })
    .catch(error => {
      console.log(error);
    });
};
const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  Fetchuserdetail
)(IconGroup);
