import { memo } from "react";
import "./Au.css";
const AboutUs = () => {
  return (
    <div>
       <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/Homepage" className="breadcrumb-link">
            Home
          </a>
        </li>
        <li className="breadcrumb-separator">»</li>
        <li className="breadcrumb-item">
        <a href="/About-us" className="breadcrumb-link">
            About Us
          </a>
        </li>
      </ol>
    </nav>
    <div className="Ab">
      <div className="column left"></div> {/* Left column (empty) */}

      <div className="column center">
        <div class="header1">
          <div >
            <h1 class="chu1">Chic Light & Design – Illuminating Style, Elevating Spaces</h1>
            <hr align="center" width="30%" color="#c9a22e" />
            <img src="./Au/01chic.jpg" class="image1" alt="Chic Light Design" />
            <p class="chu1p">
              Chic Light & Design is a leading brand specializing in providing unique lighting solutions and interior design.
              We believe that light is not just illumination but a key element in creating sophisticated, inspiring living and working spaces.
            </p>
          </div>

        </div>
        <div class="header2">
          <div class="chu2">
            <h2>Our Mission</h2>
            <hr align="center" width="30%" color="#c9a22e" />
            <p>
              We aim to turn lighting into a bridge between art and comfort. From compact spaces in modern apartments to large
              architectural projects such as luxurious hotels or restaurants, Chic Light & Design is your trusted partner in making a difference.
            </p>
          </div>
          <img src="./Au/02our.jpg" class="image2" alt="Our Mission" />
        </div>


        <div class="header3">
          <h1>Highlights of Chic Light & Design</h1>
          <hr align="center" width="30%" color="#c9a22e" />
        </div>

        <div class="headerr3">
          <div class="img3">
            <img src="./Au/03hinh.jpg" class="image3" alt="Product" />
          </div>
          <div class="chu3">
            <h2>Diverse Product Range:</h2>
            <hr align="center" width="30%" color="#c9a22e" />
            <p>Crystal chandeliers and elegant pendant lights for living rooms.</p>
            <p>Modern desk lamps and wall sconces to suit every interior style.</p>
            <p>Smart lighting solutions to optimize energy usage.</p>
            <p>Outdoor decorative lights designed to withstand harsh weather conditions.</p>
          </div>
        </div>




        <div class="header4">
          <div class="chu4">
            <h2>Sophisticated Designs:</h2>
            <hr align="center" width="30%" color="#c9a22e" />
            <p>
              Each product we create is a perfect combination of aesthetics and functionality.
              Inspired by classic, modern, or minimalist styles, Chic Light & Design ensures harmony in every space.
            </p>
          </div>
          <div class="img4">
            <img src="./Au/04cated.jpg" class="image4" alt="Product" />
          </div>
        </div>


        <div class="header5">
          <div class="img5">
            <img src="./Au/05logy.jpg" class="image5" alt="Product" />
          </div>
          <div class="chu5">
            <h2>Advanced Technology:</h2>
            <hr align="center" width="30%" color="#c9a22e" />
            <p>Utilizing eco-friendly and energy-efficient LED lighting.</p>
            <p>Integrated smart features such as color and brightness adjustments via mobile apps.</p>
          </div>
        </div>


        <div class="header6">
          <div class="chu6">
            <h2>Superior Quality:</h2>
            <hr align="center" width="30%" color="#c9a22e" />
            <p>Our products are crafted from premium materials such as crystal, stainless steel, and natural wood, ensuring durability and complete safety.</p>
          </div>
          <div class="img6">
            <img src="./Au/06qua.jpg" class="image6" alt="Product" />
          </div>
        </div>


        <div class="header7">
          <h1>Why Choose Chic Light & Design?</h1>
          <hr align="center" width="30%" color="#c9a22e" />
          <div class="img7">
            <img src="./Au/07why.jpg" class="image7" alt="Product" />
          </div>
        </div>


        <div class="header8">
          <div class="img8">
            <img src="./Au/08team.jpg" class="image8" alt="Product" />
          </div>
          <div class="chu8">
            <h2>Dedicated Team:</h2>
            <hr align="center" width="30%" color="#c9a22e" />
            <p>
              Our experienced experts are always ready to provide advice and support, from design to installation.
            </p>
          </div>
        </div>


        <div class="header9">
          <div class="chu9">
            <h2>Service Commitment:</h2>
            <hr align="center" width="30%" color="#c9a22e" />
            <p>We guarantee warranty, maintenance, and customer support throughout the product's lifecycle.</p>
          </div>
          <div class="img9">
            <img src="./Au/09ser.jpg" class="image9" alt="Product" />
          </div>
        </div>



        <div class="header10">
        <div class="img10">
            <img src="./Au/10sus.jpg" class="image9" alt="Product" />
          </div>
          <div class="chu10">
            <h2>Sustainable Value:</h2>
            <hr align="center" width="30%" color="#c9a22e" />
            <p>We prioritize energy-saving and environmentally friendly solutions.</p>
          </div>
          
        </div>


        <h1>Let Chic Light & Design Be Your Partner!</h1>
        <hr align="center" width="30%" color="#c9a22e" />
        <p>Whether you're seeking coziness for your living space or impressive aesthetics for large-scale projects, we are always ready to deliver the best solutions.</p>

      </div>

      <div className="column right"></div> {/* Right column (empty) */}
    </div>
    </div>
  );
};
export default memo(AboutUs);