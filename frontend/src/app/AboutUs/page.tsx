// pages/about.tsx
"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Calgary Chauffeur Services</h1>
        <p>Your Trusted Partner in Luxury Chauffeur Transportation</p>
      </header>

      <section className="about-content">
        <div className="content-text">
          <h2>Who We Are</h2>
          <p>
            At Calgary Chauffeur Services, we provide top-notch chauffeur-driven
            car services tailored to meet the needs of both corporate and
            leisure travelers. With a fleet of premium vehicles and a team of
            professional, courteous chauffeurs, we ensure a smooth, luxurious,
            and comfortable experience for all of our clients.
          </p>

          <p>
            Established with a commitment to offering high-quality, reliable,
            and efficient chauffeur services, our business has quickly become a
            trusted name in Calgary and the surrounding areas. Whether you're
            headed to an important meeting, a special event, or simply need
            transportation to and from the airport, we are here to serve you.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional chauffeur services that
            prioritize safety, comfort, and punctuality. We aim to deliver an
            experience that goes beyond transportation – one that ensures our
            clients arrive at their destinations in style, comfort, and on time.
          </p>

          <h2>Why Choose Us</h2>
          <ul>
            <li>
              <strong>Professional Chauffeurs:</strong> Our drivers are
              experienced, friendly, and well-trained to deliver a premium
              experience.
            </li>
            <li>
              <strong>Luxury Fleet:</strong> We offer a wide range of luxury
              vehicles, including sedans, SUVs, and limousines, all maintained
              to the highest standards.
            </li>
            <li>
              <strong>Reliable & Punctual:</strong> We understand the importance
              of timeliness. Our chauffeurs are committed to ensuring you never
              miss an appointment or flight.
            </li>
            <li>
              <strong>24/7 Availability:</strong> Whether it’s an early morning
              flight or a late-night event, we’re available whenever you need
              us.
            </li>
          </ul>
        </div>

        <div className="content-image">
          <Image
            src="/images/our-fleet.jpg"
            alt="Luxury Chauffeur Fleet"
            width={500}
            height={300}
          />
        </div>
      </section>

      <footer className="about-footer">
        <p>
          Contact us today to book your next luxury ride with Calgary Chauffeur
          Services.
        </p>
      </footer>

      <style jsx>{`
        .about-page {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .about-header {
          background-color: #222;
          color: white;
          text-align: center;
          padding: 50px;
        }
        .about-header h1 {
          font-size: 36px;
          margin: 0;
        }
        .about-header p {
          font-size: 20px;
          margin-top: 10px;
        }
        .about-content {
          display: flex;
          justify-content: space-between;
          padding: 30px;
        }
        .content-text {
          width: 60%;
        }
        .content-text h2 {
          font-size: 28px;
          color: #333;
          margin-top: 20px;
        }
        .content-text p {
          font-size: 18px;
          line-height: 1.6;
          color: #555;
        }
        .content-text ul {
          list-style-type: none;
          padding: 0;
        }
        .content-text ul li {
          font-size: 18px;
          color: #333;
          margin-bottom: 10px;
        }
        .content-image {
          width: 35%;
        }
        .about-footer {
          background-color: #f8f8f8;
          text-align: center;
          padding: 20px;
          margin-top: 30px;
        }
        .about-footer p {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default About;
