import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div>
      <div class="blog">

<div class="container">

  <div class="blog-container has-scrollbar">

    <div class="blog-card">

      <Link href="#">
        <img src="./images/blog-1.jpg" alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300" class="blog-banner"/>
      </Link>

      <div class="blog-content">

        <Link href="#" class="blog-category">Fashion</Link>

        <Link href="#">
          <h3 class="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
        </Link>

        <p class="blog-meta">
          By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
        </p>

      </div>

    </div>

    <div class="blog-card">
    
      <Link href="#">
        <img src="./images/blog-2.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
          class="blog-banner" width="300"/>
      </Link>
    
      <div class="blog-content">
    
        <Link href="#" class="blog-category">Clothes</Link>
    
        <h3>
          <Link href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</Link>
        </h3>
    
        <p class="blog-meta">
          By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
        </p>
    
      </div>
    
    </div>

    <div class="blog-card">
    
      <Link href="#">
        <img src="./images/blog-3.jpg" alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
          class="blog-banner" width="300"/>
      </Link>
    
      <div class="blog-content">
    
        <Link href="#" class="blog-category">Shoes</Link>
    
        <h3>
          <Link href="#" class="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</Link>
        </h3>
    
        <p class="blog-meta">
          By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
        </p>
    
      </div>
    
    </div>

    <div class="blog-card">
    
      <Link href="#">
        <img src="./images/blog-4.jpg" alt="Curbside fashion Trends: How to Win the Pickup Battle."
          class="blog-banner" width="300"/>
      </Link>
    
      <div class="blog-content">
    
        <Link href="#" class="blog-category">Electronics</Link>
    
        <h3>
          <Link href="#" class="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</Link>
        </h3>
    
        <p class="blog-meta">
          By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
        </p>
    
      </div>
    
    </div>

  </div>

</div>

</div>
    </div>
  );
};

export default ContactInfo;
