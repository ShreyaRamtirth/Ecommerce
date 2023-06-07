import React from "react";
import { Link } from "react-router-dom";

const CalltoActionSection = () => {
  return (
    <>
    <div>

      <div class="container">

        <div class="testimonials-box">

          

          <div class="testimonial">

            <h2 class="title">testimonial</h2>

            <div class="testimonial-card">

              <img src="./images/test1.jpg" alt="Mohammad" class="testimonial-banner" width="80" height="80"/>

              <p class="testimonial-name">Mohammad Umar</p>

              <p class="testimonial-title">CEO & Founder Invision</p>

              <img src="./images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26"/>

              <p class="testimonial-desc">
              The CEO story is an informative and high-quality magazine that highlights the current issues and opportunities experienced by executives both locally and globally
              </p>

            </div>

          </div>



          

          <div class="cta-container">

            <img src="./images/cta-banner.jpg" alt="summer collection" class="cta-banner"/>

            <Link href="#" class="cta-content">

              <p class="discount">25% Discount</p>

              <h2 class="cta-title">Summer collection</h2>

              <p class="cta-text">Starting @ ₹10</p>

              <button class="cta-btn">Shop now</button>

            </Link>

          </div>



          

          <div class="service">

            <h2 class="title">Our Services</h2>

            <div class="service-container">

              <Link href="#" class="service-item">

                <div class="service-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div class="service-content">

                  <h3 class="service-title">Worldwide Delivery</h3>
                  <p class="service-desc">For Order Over $100</p>

                </div>

              </Link>

              <Link href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Next Day delivery</h3>
                  <p class="service-desc">UK Orders Only</p>
              
                </div>
              
              </Link>

              <Link href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Best Online Support</h3>
                  <p class="service-desc">Hours: 8AM - 11PM</p>
              
                </div>
              
              </Link>

              <Link href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Return Policy</h3>
                  <p class="service-desc">Easy & Free Return</p>
              
                </div>
              
              </Link>

              <Link href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="ticket-outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">30% money back</h3>
                  <p class="service-desc">For Order Over $100</p>
              
                </div>
              
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
    </>
  );
};

export default CalltoActionSection;
