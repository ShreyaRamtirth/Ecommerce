import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopSection = (props) => {
  const { keyword, pagenumber, category } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber, category));
  }, [dispatch, keyword, pagenumber, category]);
  

  return (
    <>
      <div >
      <div className="banner">

      <div className="container">

        <div className="slider-container has-scrollbar">

          <div className="slider-item">

            <img src="./images/banner-1.jpg" alt="women's latest fashion sale" className="banner-img"/>

            {/* <div className="banner-content">

              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Women's latest fashion sale</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <Link to="/#" className="banner-btn">Shop now</Link>

            </div> */}

          </div>

          <div className="slider-item">

            <img src="./images/banner-2.jpg" alt="modern sunglasses" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Trending Shirts</p>

              <h2 className="banner-title">Modern Tops</h2>

              <p className="banner-text">
                starting at Rs. <b>250</b>
              </p>

              <Link to="/#" className="banner-btn">Shop now</Link>

            </div>

          </div>

          <div className="slider-item">

            <img src="./images/banner-3.jpg" alt="new fashion summer sale" className="banner-img"/>

            <div className="banner-content">

              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at Rs. <b>250</b>
              </p>

              <Link to="/#" className="banner-btn">Shop now</Link>

            </div>

          </div>

        </div>

      </div>

      </div>
      <div className="category">

      <div className="container">

        <div className="category-item-container has-scrollbar">

          <div className="category-item">

            <div className="category-img-box">
              <img src="./images/icons/dress.svg" alt="dress and frock" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Dress & frock</h3>

                <p className="category-item-amount">(53)</p>
              </div>

              <Link to="/#" className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./images/icons/coat.svg" alt="winter wear" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>

                <p className="category-item-amount">(58)</p>
              </div>

              <Link to="/#" className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./images/icons/glasses.svg" alt="glasses & lens" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses & lens</h3>

                <p className="category-item-amount">(68)</p>
              </div>

              <Link to="/#" className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./images/icons/shorts.svg" alt="shorts & jeans" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Shorts & jeans</h3>

                <p className="category-item-amount">(84)</p>
              </div>

              <Link to="/#" className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./images/icons/tee.svg" alt="t-shirts" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">T-shirts</h3>

                <p className="category-item-amount">(35)</p>
              </div>

              <Link to="/#" className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./images/icons/jacket.svg" alt="jacket" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>

                <p className="category-item-amount">(16)</p>
              </div>

              <Link to="/#" className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./images/icons/watch.svg" alt="watch" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Watch</h3>

                <p className="category-item-amount">(27)</p>
              </div>

              <Link to="/#" className="category-btn">Show all</Link>

            </div>

          </div>

          <div className="category-item">

            <div className="category-img-box">
              <img src="./images/icons/hat.svg" alt="hat & caps" width="30"/>
            </div>

            <div className="category-content-box">

              <div className="category-content-flex">
                <h3 className="category-item-title">Hat & caps</h3>

                <p className="category-item-amount">(39)</p>
              </div>

              <Link to="/#" className="category-btn">Show all</Link>

            </div>

          </div>

        </div>

      </div>

      </div>
      
        {/* <img className="centre" src="./public/images/_8.png" alt="" srcset="" />
        <img
          className="badge rotate"
          src="./public/images/badge.svg"
          alt=""
          srcset=""

        /> */}
      </div>
      
      <div class="product-container">
      <div class="container">
        <div class="sidebar  has-scrollbar" data-mobile-menu>

          <div class="sidebar-category">

            <div class="sidebar-top">
              <h2 class="sidebar-title">Category</h2>

              <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                <ion-icon  name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="sidebar-menu-category-list">

              <li className="sidebar-menu-category">

                <button className="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src="./images/icons/dress.svg" alt="clothes" width="20" height="20"
                      class="menu-title-img"/>

                    <p className="menu-title">Clothes</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>

                  <li className="sidebar-submenu-category">
                    <Link to="/#" className="sidebar-submenu-title">
                      <p className="product">Shirt</p>
                      <data value="300" class="stock" title="Available Stock">300</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">shorts & jeans</p>
                      <data value="60" class="stock" title="Available Stock">60</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">jacket</p>
                      <data value="50" class="stock" title="Available Stock">50</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">dress & frock</p>
                      <data value="87" class="stock" title="Available Stock">87</data>
                    </Link>
                  </li>

                </ul>

              </li>

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src="./images/icons/shoes.svg" alt="footwear" class="menu-title-img" width="20"
                      height="20"/>

                    <p class="menu-title">Footwear</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Sports</p>
                      <data value="45" class="stock" title="Available Stock">45</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Formal</p>
                      <data value="75" class="stock" title="Available Stock">75</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Casual</p>
                      <data value="35" class="stock" title="Available Stock">35</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Safety Shoes</p>
                      <data value="26" class="stock" title="Available Stock">26</data>
                    </Link>
                  </li>

                </ul>

              </li>

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src="./images/icons/jewelry.svg" alt="clothes" class="menu-title-img" width="20"
                      height="20"/>

                    <p class="menu-title">Jewelry</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                {/* <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Earrings</p>
                      <data value="46" class="stock" title="Available Stock">46</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Couple Rings</p>
                      <data value="73" class="stock" title="Available Stock">73</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Necklace</p>
                      <data value="61" class="stock" title="Available Stock">61</data>
                    </Link>
                  </li>

                </ul> */}

              </li>

              <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src="./images/icons/perfume.svg" alt="perfume" class="menu-title-img" width="20"
                      height="20"/>

                    <p class="menu-title">Perfume</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Clothes Perfume</p>
                      <data value="12" class="stock" title="Available Stock">12 pcs</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Deodorant</p>
                      <data value="60" class="stock" title="Available Stock">60 pcs</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">jacket</p>
                      <data value="50" class="stock" title="Available Stock">50 pcs</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">dress & frock</p>
                      <data value="87" class="stock" title="Available Stock">87 pcs</data>
                    </Link>
                  </li>

                </ul>

              </li>

              {/* <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src="./images/icons/cosmetics.svg" alt="cosmetics" class="menu-title-img" width="20"
                      height="20"/>

                    <p class="menu-title">Cosmetics</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Shampoo</p>
                      <data value="68" class="stock" title="Available Stock">68</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Sunscreen</p>
                      <data value="46" class="stock" title="Available Stock">46</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Body Wash</p>
                      <data value="79" class="stock" title="Available Stock">79</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Makeup Kit</p>
                      <data value="23" class="stock" title="Available Stock">23</data>
                    </Link>
                  </li>

                </ul>

              </li> */}

              {/* <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src="./images/icons/glasses.svg" alt="glasses" class="menu-title-img" width="20"
                      height="20"/>

                    <p class="menu-title">Glasses</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Sunglasses</p>
                      <data value="50" class="stock" title="Available Stock">50</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Lenses</p>
                      <data value="48" class="stock" title="Available Stock">48</data>
                    </Link>
                  </li>

                </ul>

              </li> */}

              {/* <li class="sidebar-menu-category">

                <button class="sidebar-accordion-menu" data-accordion-btn>

                  <div class="menu-title-flex">
                    <img src="./images/icons/bag.svg" alt="bags" class="menu-title-img" width="20" height="20"/>

                    <p class="menu-title">Bags</p>
                  </div>

                  <div>
                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                  </div>

                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Shopping Bag</p>
                      <data value="62" class="stock" title="Available Stock">62</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Gym Backpack</p>
                      <data value="35" class="stock" title="Available Stock">35</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Purse</p>
                      <data value="80" class="stock" title="Available Stock">80</data>
                    </Link>
                  </li>

                  <li class="sidebar-submenu-category">
                    <Link to="/#" class="sidebar-submenu-title">
                      <p class="product">Wallet</p>
                      <data value="75" class="stock" title="Available Stock">75</data>
                    </Link>
                  </li>

                </ul>

              </li> */}

            </ul>

          </div>

          <div class="product-showcase">

            <h3 class="showcase-heading">best sellers</h3>

            <div class="showcase-wrapper">

              <div class="showcase-container">

                <div class="showcase">

                  <Link to="/#" class="showcase-img-box">
                    <img src="./images/products/1.jpg" alt="baby fabric shoes" width="75" height="75"
                      class="showcase-img"/>
                  </Link>

                  <div class="showcase-content">

                    <Link to="/#">
                      <h4 class="showcase-title">baby fabric shoes</h4>
                    </Link>

                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <div class="price-box">
                      <del>$5.00</del>
                      <p class="price">$4.00</p>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <Link to="/#" class="showcase-img-box">
                    <img src="./images/products/2.jpg" alt="men's hoodies t-shirt" class="showcase-img"
                      width="75" height="75"/>
                  </Link>

                  <div class="showcase-content">

                    <Link to="/#">
                      <h4 class="showcase-title">men's hoodies t-shirt</h4>
                    </Link>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>

                    <div class="price-box">
                      <del>$17.00</del>
                      <p class="price">$7.00</p>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <Link to="/#" class="showcase-img-box">
                    <img src="./images/products/3.jpg" alt="girls t-shirt" class="showcase-img" width="75"
                      height="75"/>
                  </Link>

                  <div class="showcase-content">

                    <Link to="/#">
                      <h4 class="showcase-title">girls t-shirt</h4>
                    </Link>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-half-outline"></ion-icon>
                    </div>

                    <div class="price-box">
                      <del>$5.00</del>
                      <p class="price">$3.00</p>
                    </div>

                  </div>

                </div>

                <div class="showcase">

                  <Link to="/#" class="showcase-img-box">
                    <img src="./images/products/4.jpg" alt="woolen hat for men" class="showcase-img" width="75"
                      height="75"/>
                  </Link>

                  <div class="showcase-content">

                    <Link to="/#">
                      <h4 class="showcase-title">woolen hat for men</h4>
                    </Link>
                    <div class="showcase-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                    <div class="price-box">
                      <del>$15.00</del>
                      <p class="price">$12.00</p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
        


        <div class="product-box">
        <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-md-6 col-md-12 article">
              <div className="shopcontainer row">
              
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3>₹{product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
      
    <body>
    <div className="overlay" data-overlay></div>
     

      
      
      
    </body>
    
    </div>
    
    </>
  );
};

export default ShopSection;
