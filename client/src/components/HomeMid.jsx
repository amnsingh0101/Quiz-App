import React from 'react'
import { Link } from 'react-router-dom'

const HomeMid = () => {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <style>
        {`

          body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden; 
          }
         {
          font-family: 'Montserrat', sans-serif;
        }
        .bg-light {
          background-color: transparent !important;
        }
        .carousel-item {
          height:100%;
        }
        .carousel-caption {
          
        }
        .carousel-caption h5 {
          font-size: 45px;
          text-transform: uppercase;
          letter-spacing: 2px;
          
        }
        .carousel-caption p {
          width: 60%;
          margin: auto;
          font-size: 18px;
          line-height: 1.9;
        }
        .carousel-caption a {
          text-transform: uppercase;
          text-decoration: none;
          background: darkorange;
          padding: 10px 30px;
          display: inline-block;
          color: #000;
          margin-top: 15px;
        }
        .w-100 {
          height: 100vh;
        }
        @media only screen and (max-width: 767px) {
          .navbar-nav {
            text-align: center;
            background: rgba(0, 0, 0, 0.5);
          }
          .carousel-caption {
            bottom: 165px;
          }
          .carousel-caption h5 {
            font-size: 17px;
          }
          .carousel-caption a {
            padding: 10px 15px;
            font-size: 15px;
          }
        }

        #home-cap{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        `}
      </style>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        rel="stylesheet"
      />
    </head>
    <body>
      <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators" style={{}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img alt="..." className="d-block w-100" src="https://i.postimg.cc/LsTXqTNZ/1.jpg" style={{height: '90%'}}/>
            <div className="carousel-caption" id='home-cap'>
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>QUEST</h5>
              <p className="animated bounceInLeft d-none d-md-block" style={{ animationDelay: '2s' }}>
                Create your <strong>Own</strong> Quiz and <strong>Random</strong> Quiz
              </p>
              <p className="animated bounceInRight" style={{ animationDelay: '3s' }}>
                <Link to={'/register'}>Get Started</Link>
              </p>
            </div>
          </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      </div>
    </body>
  </html>

  )
}

export default HomeMid