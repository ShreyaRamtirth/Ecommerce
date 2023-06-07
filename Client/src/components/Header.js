import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import $ from "jquery";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  

  return (
    <div>
      
      <header>

    <div className="header-top">

      <div className="container">

        <ul className="header-social-container">

          <li>
            <Link to="/#" className="social-link">
              
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>

          <li>
            <Link to="/#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>

          <li>
            <Link to="/#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>

          <li>
            <Link to="/#" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </li>

        </ul>

        <div className="header-alert-news">
          <p>
            <b>Free Shipping</b>
            This Week Order Over - ₹500
          </p>
        </div>

      </div>

    </div>

    <div className="header-main">

      <div className="container">

        <Link to="/" className="header-logo">
          <img src="/images/logo1.png" alt="Scarlet" width="120" height="36"/>
        </Link>
        
        <div className="header-search-container">
        <form onSubmit={submitHandler}>
          <input type="search" name="search" className="search-field" placeholder="Enter your product name..." onChange={(e)=>setKeyword(e.target.value)}/>

          <button className="search-btn" >
            <ion-icon name="search-outline"></ion-icon>
          </button>
          </form>
        </div>
        
        <div className="header-user-actions">
          {userInfo ?(
            <div className="btn-gronp">
              <button type="button" className="name-button dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Hi , {userInfo.name}
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/profile">Profile
                </Link>
                <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                </Link>
              </div>
            </div>
          ):(
            <>
              <Link to="/login">
                <button className="action-btn">
                  <ion-icon name="person-outline"></ion-icon>
                </button>
              </Link>
            </>
          )}
          

          <button className="action-btn">
            <ion-icon name="heart-outline"></ion-icon>
            <span className="count">0</span>
          </button>
          <Link to="/cart">
          <button className="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="count">{cartItems.length}</span>
          </button>
          </Link>
        </div>

      </div>

    </div>

    <nav className="desktop-navigation-menu">

      <div className="container">

        <ul className="desktop-menu-category-list">

          <li className="menu-category">
            <Link to="/#" className="menu-title">Home</Link>
          </li>

          <li className="menu-category">
            <Link to="/#" className="menu-title">Categories</Link>

            <div className="dropdown-panel">

              <ul className="dropdown-panel-list">

                <li className="menu-title">
                  <Link to="western">Western Wear</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="dress">Dresses</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/jeans">Jeans</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/skirts">Skirts</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Jackets</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="/#">Shorts</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="/#">Shrugs</Link>
                </li>

              </ul>

              <ul className="dropdown-panel-list">

                <li className="menu-title">
                  <Link to="/#">Ethnic Wear</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Lehenga</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Anarkali</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Saree</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Suits</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Traditional</Link>
                </li>

              </ul>

              <ul className="dropdown-panel-list">

                <li className="menu-title">
                  <Link to="/#">Fusion Wear</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Formal</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Casual</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="/#">Semi Casual</Link>
                </li>

              </ul>

              <ul className="dropdown-panel-list">

                <li className="menu-title">
                  <Link to="/#">Traditional</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Saree</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Kurti</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="/#">Salwar</Link>
                </li>

              </ul>

            </div>
          </li>

          <li className="menu-category">
            <Link to="/#" className="menu-title">Men's</Link>

            <ul className="dropdown-list">

              <li className="dropdown-item">
                <Link to="/#">Shirt</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Shorts & Jeans</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Safety Shoes</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Wallet</Link>
              </li>

            </ul>
          </li>

          <li className="menu-category">
            <Link to="/#" className="menu-title">Women's</Link>

            <ul className="dropdown-list">

              <li className="dropdown-item">
                <Link to="/#">Dress & Frock</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Earrings</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Necklace</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Makeup Kit</Link>
              </li>

            </ul>
          </li>

          <li className="menu-category">
            <Link to="/#" className="menu-title">Jewelry</Link>

            <ul className="dropdown-list">

              <li className="dropdown-item">
                <Link to="/#">Earrings</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Couple Rings</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Necklace</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Bracelets</Link>
              </li>

            </ul>
          </li>

          <li className="menu-category">
            <Link to="/#" className="menu-title">Perfume</Link>

            <ul className="dropdown-list">

              <li className="dropdown-item">
                <Link to="/#">Clothes Perfume</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Deodorant</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Flower Fragrance</Link>
              </li>

              <li className="dropdown-item">
                <Link to="/#">Air Freshener</Link>
              </li>

            </ul>
          </li>

          <li className="menu-category">
            <Link to="/#" className="menu-title">Blog</Link>
          </li>

          <li className="menu-category">
            <Link to="/#" className="menu-title">Hot Offers</Link>
          </li>

        </ul>

      </div>

    </nav>

    <div className="mobile-bottom-navigation">

      <button className="action-btn" data-mobile-menu-open-btn>
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <Link to="/cart">
          <button className="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>
            <span className="count">{cartItems.length}</span>
          </button>
      </Link>
      <Link to="/">
        <button className="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>
      </Link>

      <button className="action-btn">
        <ion-icon name="heart-outline"></ion-icon>

        <span className="count">0</span>
      </button>

      <button className="action-btn "  data-mobile-menu-open-btn >
        <ion-icon name="grid-outline" ></ion-icon>
      </button>

    </div>

    <nav className="mobile-navigation-menu  has-scrollbar"  data-mobile-menu>

      <div className="menu-top">
        <h2 className="menu-title">Menu</h2>

        <button class="menu-close-btn" data-mobile-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <ul className="mobile-menu-category-list">

        <li className="menu-category">
          <Link to="/#" className="menu-title">Home</Link>
        </li>

        <li className="menu-category">

          <button className="accordion-menu" data-accordion-btn>
            <p className="menu-title">Men's</p>

            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>

          <ul className="submenu-category-list" data-accordion>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Shirt</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Shorts & Jeans</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Safety Shoes</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Wallet</Link>
            </li>

          </ul>

        </li>

        <li className="menu-category">

          <button className="accordion-menu" data-accordion-btn>
            <p className="menu-title">Women's</p>

            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>

          <ul className="submenu-category-list" data-accordion>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Dress & Frock</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Earrings</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Necklace</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Makeup Kit</Link>
            </li>

          </ul>

        </li>

        <li className="menu-category">

          <button className="accordion-menu" data-accordion-btn>
            <p className="menu-title">Jewelry</p>

            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>

          <ul className="submenu-category-list" data-accordion>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Earrings</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Couple Rings</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Necklace</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Bracelets</Link>
            </li>

          </ul>

        </li>

        <li className="menu-category">

          <button className="accordion-menu" data-accordion-btn>
            <p className="menu-title">Perfume</p>

            <div>
              <ion-icon name="add-outline" class="add-icon"></ion-icon>
              <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
            </div>
          </button>

          <ul className="submenu-category-list" data-accordion>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Clothes Perfume</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Deodorant</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Flower Fragrance</Link>
            </li>

            <li className="submenu-category">
              <Link to="/#" className="submenu-title">Air Freshener</Link>
            </li>

          </ul>

        </li>

        <li className="menu-category">
          <Link to="/#" className="menu-title">Blog</Link>
        </li>

        <li className="menu-category">
          <Link to="/#" className="menu-title">Hot Offers</Link>
        </li>

      </ul>

      <div className="menu-bottom">

        <ul className="menu-category-list">

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Language</p>

              <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link to="/#" className="submenu-title">English</Link>
              </li>

              <li className="submenu-category">
                <Link to="/#" className="submenu-title">Espa&ntilde;ol</Link>
              </li>

              <li className="submenu-category">
                <Link to="/#" className="submenu-title">Fren&ccedil;h</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Currency</p>
              <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link to="/#" className="submenu-title">USD &dollar;</Link>
              </li>

              <li className="submenu-category">
                <Link to="/#" className="submenu-title">EUR &euro;</Link>
              </li>
            </ul>
          </li>

        </ul>

        <ul className="menu-social-container">

          <li>
            <Link to="/#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>

          <li>
            <Link to="/#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>

          <li>
            <Link to="/#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>

          <li>
            <Link to="/#" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </li>

        </ul>

      </div>
      

    </nav>

      </header>

      
    </div>
    
  );
};





export default Header;




