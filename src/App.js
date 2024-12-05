import { useState } from 'react';
import emailjs from "emailjs-com";
import './App.css';
import image_1 from "./images/s1.jpg"
import image_2 from "./images/s2.jpg"
import image_3 from "./images/s4.jpg"
import logo from "./images/logo.png"
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons


function App() {
  // Form 
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   contactNumber: "",
  //   purpose: "",
  //   district: "",
  // });


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Validation for required fields
  //   if (!formData.name || !formData.email || !formData.contactNumber || !formData.purpose || !formData.district) {
  //     alert("All fields are required!");
  //     return;
  //   }

  //   const emailParamsToOwner = {
  //     from_name: formData.name,
  //     from_email: formData.email,
  //     from_phone: formData.contactNumber,
  //     message: `Purpose: ${formData.purpose}, District: ${formData.district}`,
  //     to_name: "Owner", // You can change this if needed
  //   };

  //   // Logging the parameters for debugging
  //   console.log("Sending email with parameters: ", emailParamsToOwner);

  //   emailjs
  //     .send(
  //       "service_c5hhdmj",  // Your service ID
  //       "template_fey2i9h",  // Your template ID
  //       emailParamsToOwner,  // Parameters you pass to the template
  //       "139bcTk_zdGngQxy-"  // Your user ID
  //     )
  //     .then(() => {
  //       alert("Thank you! We'll contact you soon.");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         contactNumber: "",
  //         purpose: "",
  //         district: "",
  //       });
  //     })
  //     .catch(() => alert("Failed to send message to the owner."));
  // };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    purpose: "",
    district: "",
  });
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");

  const tamilNaduDistricts = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Tiruchirappalli",
    "Tirunelveli",
    "Erode",
    "Vellore",
    "Thanjavur",
    "Thoothukudi",
    "Dindigul",
    "Karur",
    "Cuddalore",
    "Tiruppur",
    "Nagapattinam",
    "Ramanathapuram",
    "Kanchipuram",
    "Krishnagiri",
    "Virudhunagar",
  ];

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for required fields
    if (!formData.name || !formData.email || !formData.contactNumber || !formData.purpose || !formData.district) {
      alert("All fields are required!");
      return;
    }

    // Captcha validation
    if (userCaptcha !== captcha) {
      alert("Invalid captcha! Please try again.");
      setCaptcha(generateCaptcha()); // Refresh captcha on failure
      setUserCaptcha("");
      return;
    }

    const emailParamsToOwner = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.contactNumber,
      message: `Purpose: ${formData.purpose}, District: ${formData.district}`,
      to_name: "Owner",
    };

    emailjs
      .send(
        "service_c5hhdmj", // Your service ID
        "template_fey2i9h", // Your template ID
        emailParamsToOwner,
        "139bcTk_zdGngQxy-" // Your user ID
      )
      .then(() => {
        alert("Thank you! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          purpose: "",
          district: "",
        });
        setCaptcha(generateCaptcha()); // Refresh captcha on success
        setUserCaptcha("");
      })
      .catch(() => alert("Failed to send message to the owner."));
  };

  // const tamilNaduDistricts = [
  //   "Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli",
  //   "Tirunelveli", "Erode", "Vellore", "Thanjavur", "Thoothukudi",
  //   "Dindigul", "Karur", "Cuddalore", "Tiruppur", "Nagapattinam",
  //   "Ramanathapuram", "Kanchipuram", "Krishnagiri", "Virudhunagar",
  // ];

  // Whatsapp
  const phoneNumber = '7708330249'; // Example: '+11234567890'
  const message = ''; // Optional message to send when opening WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Year Dynamic Update
  const currentYear = new Date().getFullYear();


  return (

    <>

      <header>
        <div className='container header'>
          <nav class="navbar navbar-expand-lg pt-1 pb-1">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img className='img-fluid' src={logo} class="d-block w-100" alt="..." /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  <a class="nav-link" href="#about-us">About Us</a>
                  {/* <a class="nav-link" href="#what-we-do">What we do</a> */}

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     our services
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">DGPS Survey</a></li>
                      <li><a class="dropdown-item" href="#">Topographic Survey</a></li>
                      <li><a class="dropdown-item" href="#">Boundary Survey</a></li>
                      <li><a class="dropdown-item" href="#">Subdivision Survey</a></li>
                      <li><a class="dropdown-item" href="#">Mining</a></li>
                      <li><a class="dropdown-item" href="#">GIS Survey</a></li>
                      <li><a class="dropdown-item" href="#">Pipeline Survey</a></li>
                      <li><a class="dropdown-item" href="#">Road Survey</a></li>
                      <li><a class="dropdown-item" href="#">As-Built Survey</a></li>
                      <li><a class="dropdown-item" href="#">Contour Survey</a></li>
                      <li><a class="dropdown-item" href="#">Layout Mapping Survey</a></li>
                      <li><a class="dropdown-item" href="#">Setting Out Survey</a></li>
                      <li><a class="dropdown-item" href="#">Cadastral Survey</a></li>
                      <li><a class="dropdown-item" href="#">Geotechnical Investigation</a></li>
                      <li><a class="dropdown-item" href="#">Solar Plant Survey</a></li>
                    </ul>
                  </li>


                  <a class="nav-link" href="#testimonial">Our Clients</a>
                  <a class="nav-link" href="#contact-us">Contact Us</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>


      <section className='slider'>
        <div className='container-fluid'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={image_2} class="d-block w-100" alt="..." />

                <div className='slider-content'>
                  <p className='sub-title'>Welcome to Manchester Digital Surveyors</p>
                  <h2 className='text-light'>Mapping the Future Digitally</h2>
                  <p className='text-light'>Transform your projects with cutting-edge digital surveying solutions. From GIS mapping to UAV drone services, we deliver accuracy and innovation for smarter land development.</p>
                  <button className='cus-btn'><a href='#contact-us'><span>Contact Us</span></a></button>
                </div>

              </div>
              <div class="carousel-item">
                <img src={image_3} class="d-block w-100" alt="..." />

                <div className='slider-content'>
                  <p className='sub-title'>Surveying Smarter</p>
                  <h2 className='text-light'>Smart Solutions for Precise Surveying</h2>
                  <p className='text-light'>Redefine accuracy with our advanced surveying technologies. From topographic mapping to drone-based solutions, we deliver efficient and precise results for every project.</p>
                  <button className='cus-btn'><a href='#contact-us'><span>Contact Us</span></a></button>
                </div>

              </div>
              <div class="carousel-item">
                <img src={image_1} class="d-block w-100" alt="..." />

                <div className='slider-content'>
                  <p className='sub-title'>Digital Pathfinders</p>
                  <h2 className='text-light'>Pioneering Precision, Digitally</h2>
                  <p className='text-light'>Empowering your projects with advanced surveying and mapping solutions. From start to finish, we guide your path with accuracy and expertise.</p>
                  <button className='cus-btn'><a href='#contact-us'><span>Contact Us</span></a></button>
                </div>

              </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>
      </section>

      <section className='about-us section-padding' id='about-us'>
        <div className='container'>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img about-us-img'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-col'>
              <h4 className='mb-3'>About Us</h4>
              <p className='mb-4'>"Established in 2017, our company has successfully delivered 50+ corporate projects with a focus on cost efficiency, timely delivery, and exceptional customer satisfaction. As a trusted partner in the industry, we specialize in providing innovative, reliable, and scalable solutions tailored to meet your business needs. Choose us for quality-driven results and a commitment to excellence in every project."</p>

              <h4 className='mb-3'>Our Mission</h4>
              <p>Our mission is to deliver high-quality projects within the shortest possible time, leveraging our team of skilled professionals. We ensure seamless collaboration with clients at their convenience, providing tailored solutions across Tamil Nadu and throughout India. With a commitment to excellence, efficiency, and customer satisfaction, we aim to be your trusted partner for reliable and timely project execution.</p>

            </div>
          </div>
        </div>
      </section>

      <section className='what-we-do' id='what-we-do'>
        <div className='container-fluid'>
          <div className='heading-style d-flex justify-content-center mb-5'>
            <div className='heading-wrapper text-center'>
              <p>Our Services</p>
              <h2>What We Do</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-1'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>DGPS Survey</h4>
                <p className='mb-4'>We provide high-precision DGPS survey services to capture accurate geospatial data for infrastructure, land development, and project planning. Trusted for reliability and efficiency, our surveys ensure flawless execution in all environments.</p>

                <p className='list-icon'>High-precision geospatial data collection.</p>
                <p className='list-icon'>Ideal for infrastructure and large-scale mapping projects.</p>
                <p className='list-icon'>Ensures accuracy in property and land measurements.</p>
                <p className='list-icon'>Used for navigation, boundary marking, and project planning.</p>
                <p className='list-icon'>Supports efficient decision-making for land developers.</p>
              </div>
            </div>
          </div>

          <div className='row even-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Topographic Survey Using Total Station</h4>
                <p className='mb-4'>Our topographic survey services use advanced total station technology to deliver detailed terrain mapping for construction, land development, and infrastructure projects. Accurate elevation data ensures flawless project planning.</p>

                <p className='list-icon'>Detailed terrain mapping for construction and planning.</p>
                <p className='list-icon'>Accurate elevation and contour data collection.</p>
                <p className='list-icon'>Uses advanced total station equipment.</p>
                <p className='list-icon'>Essential for land development and infrastructure projects.</p>
                <p className='list-icon'>Helps in identifying natural and man-made features.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-2'><span></span></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-3'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Boundary Survey</h4>
                <p className='mb-4'>Get precise boundary surveys to establish property lines, prevent disputes, and support real estate transactions. Our services provide legal clarity and accurate land division documentation.</p>

                <p className='list-icon'>Determines exact property lines and ownership.</p>
                <p className='list-icon'>Prevents legal disputes and encroachments.</p>
                <p className='list-icon'>Crucial for real estate transactions.</p>
                <p className='list-icon'>Provides clear documentation for land division.</p>
                <p className='list-icon'>Assists in zoning and land registration.</p>
              </div>
            </div>
          </div>

          <div className='row even-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Subdivision Survey</h4>
                <p className='mb-4'>Our subdivision survey services help divide large plots into smaller parcels, ensuring compliance with zoning regulations. Ideal for property developers and residential projects.</p>

                <p className='list-icon'>Divides large plots into smaller parcels.</p>
                <p className='list-icon'>Ensures compliance with zoning regulations.</p>
                <p className='list-icon'>Suitable for residential and commercial land projects.</p>
                <p className='list-icon'>Supports property development and resale planning.</p>
                <p className='list-icon'>Accurate boundary marking for each subdivided plot.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-4'><span></span></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-5'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Aerial/Mining/UAV Mapping Using Drones</h4>
                <p className='mb-4'>We offer drone-based mapping services for aerial, mining, and terrain analysis, providing high-resolution imagery and 3D mapping for efficient data-driven decisions.</p>

                <p className='list-icon'>Drone-based mapping for hard-to-reach areas.</p>
                <p className='list-icon'>Ideal for mining, agriculture, and construction sites.</p>
                <p className='list-icon'>Delivers high-resolution imagery and 3D mapping.</p>
                <p className='list-icon'>Reduces survey time with efficient data collection.</p>
                <p className='list-icon'>Supports environmental and terrain analysis.</p>
              </div>
            </div>
          </div>

          <div className='row even-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>GIS Survey (LiDAR GIS Mapping)</h4>
                <p className='mb-4'>Our GIS and LiDAR mapping services provide precise geospatial data for urban planning, infrastructure development, and environmental studies with cutting-edge technology.</p>

                <p className='list-icon'>Advanced geospatial analysis using LiDAR technology.</p>
                <p className='list-icon'>Provides accurate 3D models and terrain mapping.</p>
                <p className='list-icon'>Useful for urban planning and infrastructure projects.</p>
                <p className='list-icon'>Aids in environmental and disaster management studies.</p>
                <p className='list-icon'>Enhances decision-making with detailed GIS data.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-6'><span></span></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-7'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Pipeline Survey</h4>
                <p className='mb-4'>Ensure alignment accuracy with our pipeline survey services. We deliver precise solutions for water, oil, and gas pipeline projects, optimizing routes and minimizing risks.</p>

                <p className='list-icon'>Assists in planning and monitoring pipeline routes.</p>
                <p className='list-icon'>Ensures alignment accuracy and safety compliance.</p>
                <p className='list-icon'>Prevents environmental and structural risks.</p>
                <p className='list-icon'>Suitable for water, gas, and oil pipelines.</p>
                <p className='list-icon'>Helps optimize project costs and timelines.</p>
              </div>
            </div>
          </div>

          <div className='row even-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Road Survey</h4>
                <p className='mb-4'>Our road survey services provide detailed data for planning, construction, and maintenance. We ensure accurate alignment and safety compliance for your road infrastructure projects.</p>

                <p className='list-icon'>Supports road design, construction, and maintenance.</p>
                <p className='list-icon'>Provides detailed alignment and elevation data.</p>
                <p className='list-icon'>Essential for traffic planning and road safety.</p>
                <p className='list-icon'>Identifies existing road conditions for upgrades.</p>
                <p className='list-icon'>Ensures compliance with engineering standards.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-8'><span></span></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-9'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>As-Built Survey</h4>
                <p className='mb-4'>Document your existing infrastructure with our as-built survey services. We ensure precise records of buildings, roads, and utilities to validate and upgrade projects.</p>

                <p className='list-icon'>Documents existing structures and utilities accurately.</p>
                <p className='list-icon'>Provides a reference for future modifications.</p>
                <p className='list-icon'>Validates project compliance with original plans.</p>
                <p className='list-icon'>Ensures precise updates for infrastructure records.</p>
                <p className='list-icon'>Suitable for buildings, roads, and utility networks.</p>
              </div>
            </div>
          </div>

          <div className='row even-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Contour Survey</h4>
                <p className='mb-4'>Our contour survey services offer accurate elevation mapping for land development, irrigation, and drainage planning. Perfect for terrain analysis and environmental conservation.</p>

                <p className='list-icon'>Provides elevation data for land development.</p>
                <p className='list-icon'>Useful for irrigation, drainage, and slope analysis.</p>
                <p className='list-icon'>Helps in designing roads, railways, and dams.</p>
                <p className='list-icon'>Identifies natural features and terrain variations.</p>
                <p className='list-icon'>Facilitates environmental planning and conservation.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-10'><span></span></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-11'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Layout Mapping Survey</h4>
                <p className='mb-4'>Our layout mapping services provide precise site layouts for urban planning and construction projects. Designed to ensure flawless project execution and alignment.</p>

                <p className='list-icon'>Ensures accurate layout for construction projects.</p>
                <p className='list-icon'>Supports urban planning and infrastructure design.</p>
                <p className='list-icon'>Verifies project alignment with site conditions.</p>
                <p className='list-icon'>Provides clear guidance for site engineers.</p>
                <p className='list-icon'>Essential for large-scale land development.</p>
              </div>
            </div>
          </div>

          <div className='row even-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Setting Out Survey</h4>
                <p className='mb-4'>With our setting out survey services, we mark exact construction locations to align with design plans, ensuring efficient and error-free project execution.</p>

                <p className='list-icon'>Marks precise locations for construction work.</p>
                <p className='list-icon'>Ensures project alignment with design plans.</p>
                <p className='list-icon'>Suitable for roads, bridges, and buildings.</p>
                <p className='list-icon'>Enhances construction accuracy and efficiency.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-12'><span></span></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-13'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Cadastral Survey</h4>
                <p className='mb-4'>Our cadastral survey services deliver accurate property boundary mapping for legal documentation, land registration, and dispute resolution with precision.</p>

                <p className='list-icon'>Maps property boundaries for legal documentation.</p>
                <p className='list-icon'>Assists in land registration and ownership disputes.</p>
                <p className='list-icon'>Supports government zoning and taxation systems.</p>
                <p className='list-icon'>Provides accurate data for real estate transactions.</p>
                <p className='list-icon'>Essential for land division and subdivision projects.</p>
              </div>
            </div>
          </div>

          <div className='row even-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Geotechnical Investigation</h4>
                <p className='mb-4'>Ensure safe construction with our geotechnical investigation services. We analyze soil and rock properties for stable structural designs and sustainable development.</p>

                <p className='list-icon'>Analyzes soil and rock properties for construction.</p>
                <p className='list-icon'>Ensures safe and stable structural designs.</p>
                <p className='list-icon'>Identifies potential geohazards in project areas.</p>
                <p className='list-icon'>Helps in foundation and slope stability assessment.</p>
                <p className='list-icon'>Supports sustainable land and resource use.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-14'><span></span></div>
            </div>
          </div>

          <div className='row last-row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img bg-img-15'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-wrapper'>
              <div className='content-col'>
                <h4 className='mb-3'>Solar Plant Survey</h4>
                <p className='mb-4'>Optimize your solar installations with our solar plant survey services. We provide accurate site assessments and layout planning to maximize energy efficiency.</p>

                <p className='list-icon'>Evaluates site conditions for solar installations.</p>
                <p className='list-icon'>Determines optimal panel placement for efficiency.</p>
                <p className='list-icon'>Assists in planning and designing solar farms.</p>
                <p className='list-icon'>Ensures accurate alignment with energy goals.</p>
                <p className='list-icon'>Reduces costs and maximizes energy output</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='testimonial section-padding' id='testimonial'>
        <div className='overlay'></div>
        <div className='container'>
          <div className='heading-style d-flex justify-content-center mb-5'>
            <div className='heading-wrapper text-center'>
              <p>Testimonial</p>
              <h2 className='text-white'>Our Clients</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='logos-wrapper'>
                <div> <img className='img-fluid' src={"https://ramrajcotton.in/cdn/shop/files/ramraj_logo_155x@2x.jpg?v=1631932971"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://www.eastmanexports.com/wp-content/themes/brandon/images/logo.png"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://www.casagrand.co.in/wp-content/uploads/2021/07/Casagrand-Logo1.png?ver=1.201"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://www.mrftyres.com/images/mrf-logo.png"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://www.craftsmanautomation.com/images/craftsman-logo.webp"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/1200px-JSW_Group_logo.svg.png"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://www.kmknitwear.com/assets/images/logo.png"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXL60LM1FJmcdhKyHVhp1tl6Bi8Hy8iWjUeOLMY_hjjYW4vDbhmETTwFZgCngARQotj7I&usqp=CAU"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://iocl.com/assets/images/logo.gif"} class="d-block w-100" alt="..." /></div>
                <div> <img className='img-fluid' src={"https://www.dbs.com/iwov-resources/flp/images/dbs_logo.svg"} class="d-block w-100" alt="..." /></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='contact-us about-us section-padding' id='contact-us'>
        <div className='container'>

          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 bg-img-wrapper'>
              <div className='bg-img contact-us-img'><span></span></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 content-col'>
              <p className='mb-3'>Contact Us</p>
              <h2 className='mb-5'>Get in Touch With us</h2>
              
              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your contact number"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="purpose" className="form-label">
                Purpose of Work
              </label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Our Valuable Services</option>
                <option value="DGPS">DGPS Survey</option>
                <option value="Boundary">Boundary Survey</option>
                <option value="Subdivision">Subdivision Survey</option>
                <option value="Contour">Contour Survey</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="district" className="form-label">
                District
              </label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select your district</option>
                {tamilNaduDistricts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3 captcha-wrapper">
              {/* <label htmlFor="captcha" className="form-label">
                Captcha
              </label> */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light text-center fw-bold"
                  value={captcha}
                  readOnly
                  style={{ maxWidth: "150px" }}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setCaptcha(generateCaptcha())}
                >
                  Refresh
                </button>
              </div>
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                className="form-control mt-2"
                placeholder="Enter the captcha"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn cus-btn w-100">
                Submit
              </button>
            </div>
          </form>

            </div>
          </div>
        </div>
      </section>

      <div className='app' style={{ position: 'fixed' }}>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} color="#25D366" />
        </a>
      </div>

      <div className='back-to-top'>
        <span>
          <a href="#"><i class="bi bi-arrow-up"></i></a>
        </span>
      </div>



      <footer>
        <div className='container-fluid'>
          <div className='row footer-row'>
            <div className='col-lg-7 col-md-12 col-sm-12'>
              <div className='footer-col-wrapper p-5'>
                <div className='footer-logo'>
                  <a class="logo" href="#"><img className='img-fluid' src={logo} class="d-block w-100" alt="..." /></a>
                  <p className='w-75 mt-4 footer-decs'>Delivering innovative, accurate, and reliable surveying solutions across Tamil Nadu and India. From land mapping to advanced GIS and drone services, we ensure precision in every project. Your trusted partner for smarter, faster, and efficient results.</p>

                  {/* <div className='social-icons'>
                    <a href='#'><i class="bi bi-whatsapp"></i></a>
                    <a href='#'><i class="bi bi-facebook"></i></a>
                    <a href='#'><i class="bi bi-instagram"></i></a>
                    <a href='#'><i class="bi bi-threads"></i></a>
                    <a href='#'><i class="bi bi-youtube"></i></a>
                  </div> */}

                </div>
                <div className='contact-box-wrapper mt-5'>
                  <div className='contact-box'>
                    <h6 className='mb-3'>Address</h6>
                    <a href='https://maps.app.goo.gl/dd8Bh2rzfEmx1ZN7A'>
                      <p>28,thachan thottam,
                        7th North Street,
                        Neelikonampalayam,
                        coimbatore -641033</p></a>
                  </div>

                  <div className='contact-box'>
                    <h6 className='mb-3'>Contact</h6>
                    <a href='tel:9488847993'><p>+91 9488847993</p></a>
                    <a href='tel:7548838688'><p>+91 7548838688</p></a>
                  </div>

                  <div className='contact-box'>
                    <h6 className='mb-3'>Mail</h6>
                    <a href='mailto:manchesterdigitalsurveyor.com'><p>manchesterdigitalsurveyor.com</p></a>
                    {/* <a href='mailto:example2@gmail.com'><p>example2@gmail.com</p></a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-12 col-sm-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.321797938839!2d77.034519!3d11.014464999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAwJzUyLjEiTiA3N8KwMDInMDQuMyJF!5e0!3m2!1sen!2sin!4v1733055512501!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className='row bg-white p-3 border'>
            <div className='col-md-12 text-center'>
              <p className='fs-6'>
                Copyright © {currentYear} <span className='footer-text'>Manchester Digital Surveyors</span> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

    </>

  );
}

export default App;
