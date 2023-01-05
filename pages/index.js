import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Suraj kumar</title>
        <meta name="description" content="Suraj's resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className='wrapper'>
        <div className='sidebar'>
                <div className="sidebar-header">
                    <img src="/profile.jpg" alt="Image"/>
                </div>
                <div className="sidebar-content">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">Navigation</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#header">Home<i className="fa fa-home"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About<i className="fa fa-address-card"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#experience">Experience<i className="fa fa-star"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#service">Service<i className="fa fa-tasks"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio<i className="fa fa-file-archive"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact<i className="fa fa-envelope"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="sidebar-footer">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="content">
                {/* <!-- Header Start --> */}
                <div class="header" id="header">
                    <div class="content-inner">
                        <p>I am</p>
                        <h1>Michael Miller</h1>
                        <h2></h2>
                        <div class="typed-text">Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer</div>
                    </div>
                </div>
                {/* <!-- Header End -->
                
                <!-- Large Button Start --> */}
                <div class="large-btn">
                    <div class="content-inner">
                        <a class="btn" href="#"><i class="fa fa-download"></i>Resume</a>
                        <a class="btn" href="#"><i class="fa fa-hands-helping"></i>Hire Me</a>
                    </div>
                </div>
                {/* <!-- Large Button End -->
                
                <!-- About Start --> */}
                <div class="about" id="about">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>About Me</h2>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6 col-lg-5">
                                <img src="/profile.jpg" alt="Image"/>
                            </div>
                            <div class="col-md-6 col-lg-7">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat. Proin libero ligula, gravida at porttitor eget.
                                </p>
                                <a class="btn" href="#">Hire Me</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="skills">
                                    <div class="skill-name">
                                        <p>Design</p><p>85%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="skill-name">
                                        <p>SEO</p><p>95%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="skills">
                                    <div class="skill-name">
                                        <p>Development</p><p>90%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="skill-name">
                                        <p>Marketing</p><p>85%</p>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- About End -->
                
                <!-- Education Start --> */}
                <div class="education" id="education">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Education</h2>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Master Degree</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Bachelor Degree</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Associate Degree</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="edu-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>High School</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Education Start -->
                
                <!-- Experience Start --> */}
                <div class="experience" id="experience">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Experience</h2>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Codex Solution</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Project Manager</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Soft Solution Ltd</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Web Developer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>ABC Soft Ltd</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Web Designer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="exp-col">
                                    <span>01-Jan-2020 <i>to</i> 31-Dec-2050</span>
                                    <h3>Soft Agency</h3>
                                    <h4>San Francisco, CA</h4>
                                    <h5>Graphic Designer</h5>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Experience Start -->
                
                <!-- Service Start --> */}
                <div class="service" id="service">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Service</h2>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="srv-col">
                                    <i class="fa fa-desktop"></i>
                                    <h3>Web Design</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="srv-col">
                                    <i class="fa fa-laptop"></i>
                                    <h3>Web Development</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="srv-col">
                                    <i class="fa fa-search"></i>
                                    <h3>SEO</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="srv-col">
                                    <i class="fa fa-envelope-open-text"></i>
                                    <h3>Digital Marketing</h3>
                                    <p>Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Service Start -->
                
                <!-- Portfolio Start --> */}
                <div class="portfolio" id="portfolio">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Portfolio</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" class="filter-active">All</li>
                                    <li data-filter=".web-des">Design</li>
                                    <li data-filter=".web-dev">Development</li>
                                    <li data-filter=".dig-mar">Marketing</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row portfolio-container">
                            <div class="col-lg-4 col-md-6 portfolio-item web-des">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="/profile.jpg" class="img-fluid" alt=""/>
                                        <a href="/profile.jpg" data-lightbox="portfolio" data-title="Project Name" class="link-preview" title="Preview"><i class="fa fa-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="fa fa-link"></i></a>
                                        <a class="portfolio-title" href="#">Project Name <span>Web Design</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item web-des">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="/profile.jpg" class="img-fluid" alt=""/>
                                        <a href="/profile.jpg" class="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i class="fa fa-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="fa fa-link"></i></a>
                                        <a class="portfolio-title" href="#">Project Name <span>Web Design</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item web-dev">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="/profile.jpg" class="img-fluid" alt=""/>
                                        <a href="/profile.jpg" class="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i class="fa fa-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="fa fa-link"></i></a>
                                        <a class="portfolio-title" href="#">Project Name <span>Web Development</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item web-dev">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="/profile.jpg" class="img-fluid" alt=""/>
                                        <a href="/profile.jpg" class="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i class="fa fa-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="fa fa-link"></i></a>
                                        <a class="portfolio-title" href="#">Project Name <span>Web Development</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item dig-mar">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="/profile.jpg" class="img-fluid" alt=""/>
                                        <a href="/profile.jpg" class="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i class="fa fa-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="fa fa-link"></i></a>
                                        <a class="portfolio-title" href="#">Project Name <span>Digital Marketing</span></a>
                                    </figure>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 portfolio-item dig-mar">
                                <div class="portfolio-wrap">
                                    <figure>
                                        <img src="/profile.jpg" class="img-fluid" alt=""/>
                                        <a href="/profile.jpg" class="link-preview" data-lightbox="portfolio" data-title="Project Name" title="Preview"><i class="fa fa-eye"></i></a>
                                        <a href="#" class="link-details" title="More Details"><i class="fa fa-link"></i></a>
                                        <a class="portfolio-title" href="#">Project Name <span>Digital Marketing</span></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio Start -->
                
                <!-- Review Start --> */}
                <div class="review" id="review">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Review</h2>
                        </div>
                        <div class="row align-items-center review-slider">
                            <div class="col-md-12">
                                <div class="review-slider-item">
                                    <div class="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div class="review-img">
                                        <img src="/profile.jpg" alt="Image"/>
                                        <div class="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="review-slider-item">
                                    <div class="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div class="review-img">
                                        <img src="/profile.jpg" alt="Image"/>
                                        <div class="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="review-slider-item">
                                    <div class="review-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci. Donec molestie velit id libero blandit, quis suscipit urna suscipit. Donec aliquet erat eu lacinia iaculis. Ut tempor tellus eu sem pharetra feugiat.
                                        </p>
                                    </div>
                                    <div class="review-img">
                                        <img src="/profile.jpg" alt="Image"/>
                                        <div class="review-name">
                                            <h3>Client Name</h3>
                                            <p>Profession</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Review End -->
                
                <!-- Contact Start --> */}
                <div class="contact" id="contact">
                    <div class="content-inner">
                        <div class="content-header">
                            <h2>Contact</h2>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="contact-info">
                                    <p><i class="fa fa-user"></i>Michael Miller</p>
                                    <p><i class="fa fa-tag"></i>Web Designer & Developer</p>
                                    <p><i class="fa fa-envelope"></i><a href="mailto:info@example.com">info@example.com</a></p>
                                    <p><i class="fa fa-phone"></i><a href="tel:+1234567890">+123-456-7890</a></p>
                                    <p><i class="fa fa-map-marker"></i>123 Street, Los Angeles, CA, USA</p>
                                    <div class="social">
                                        <a class="btn" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn" href=""><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href=""><i class="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" placeholder="Your Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="email" class="form-control" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Subject" />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" rows="5" placeholder="Message"></textarea>
                                        </div>
                                        <div><button class="btn" type="submit">Send Message</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Contact End -->
                
                <!-- Footer Start --> */}
                <div class="footer">
                    <div class="content-inner">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <p>&copy; Copyright <a href="https://htmlcodex.com">HTML Codex</a>. All Rights Reserved</p>
                            </div>
                            <div class="col-md-6">
                                <p>Powered by <a href="https://htmlcodex.com">HTML Codex</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}
