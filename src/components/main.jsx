export default function Main() {
  return (
    // ml-[300px]
    <main id="main" className="ml-0 xl:ml-[300px]">
      {/* ======= About Section ======= */}
      {/* <section id="about" className="about py-16"> */}
      <section id="about" className="py-16">
        <div className="mx-auto px-3 lg:max-w-6xl">
          {/* <div className="section-title"> */}
          <div className="pb-8">
            <h2 className="text-3xl font-bold text-[#173b6c]">About</h2>
          </div>

          <div className="flex max-lg:flex-wrap">
            {/* pr-6 */}
            <div className="pr-0 lg:w-4/12 lg:px-4">
              <img className="w-full" src="assets/img/profile-img.jpg" alt="" />
            </div>
            <div className="lg:w-8/12 lg:px-4" data-aos="fade-left">
              <h3 className="mb-2 text-2xl font-bold text-[#173b6c]">
                Front End Web Developer.
              </h3>
              <p className="fst-italic">
                Hi, I'm a self-taught Front end Web Developer, born and raised
                in the state of Texas. For as far back as I can remember, I
                always loved makeing art and playing challenging games.
                Eventually I was introduced to web development, a profession
                that essientialy combines my two favorite hobbies. Digital
                devices became my canvas, VScode is my paint-brush, and
                programing became my favorite game.
                <br />I finally found my calling.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* ======= Skills Section ======= */}
      {/* <section id="skills" className="skills section-bg"> */}
      <section id="skills" className="bg-[#f5f8fd] py-16">
        <div className="mx-auto px-3 lg:max-w-6xl">
          {/* <div className="section-title"> */}
          <div className="pb-8">
            <h2 className="mb-5 pb-5 text-3xl font-bold text-[#173b6c]">
              Skills
            </h2>
            <p>Technologies I have utilized</p>
          </div>

          <div className="lg:flex lg:gap-8">
            <div className="lg:w-2/4">
              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  HTML <i className="val">100%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-full bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  CSS <i className="val">95%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[95%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  JavaScript <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  Wordpress <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/4">
              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  React <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  Sass <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  Tailwind <i className="val">85%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[85%] bg-[#149ddd]"></div>
                </div>
              </div>

              <div className="h-16">
                <span className="mb-2 block font-semibold">
                  Git <i className="val">90%</i>
                </span>
                <div className="h-3 w-full bg-[#dce8f8]">
                  <div className="h-3 w-[90%] bg-[#149ddd]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Skills Section */}

      {/* ======= Resume Section ======= */}
      <section id="resume" className="py-16">
        <div className="mx-auto px-3 lg:max-w-6xl">
          <div className="pb-8">
            <h2 className="mb-5 pb-5 text-3xl font-bold text-[#173b6c]">
              Resume
            </h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div className="gap-8 lg:flex">
            <div className="lg:w-2/4" data-aos="fade-up">
              <h3 className="mb-2 text-2xl font-bold text-[#173b6c]">Sumary</h3>
              <div className="relative border-l-2 border-[#1f5297] pb-0 pl-5 before:absolute before:left-[-9px] before:top-[0px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#1f5297] before:bg-white">
                <h4 className="text-lg font-bold">Charlie Alonso</h4>
                <p className="pb-4">
                  <em>
                    Self taught web developer. 5 years of expirence with
                    front-end stack. 1 year of expirence with back end
                    development.
                  </em>
                </p>
                <ul className="mb-4 pl-5">
                  <li className="pb-2">(956) 292-9046</li>
                  <li className="pb-2">charliealonso2001@gmail.com</li>
                </ul>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-[#173b6c]">
                Education
              </h3>
              <div className="relative border-l-2 border-[#1f5297] pb-0 pl-5 before:absolute before:left-[-9px] before:top-[0px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#1f5297] before:bg-white">
                <h4 className="text-lg font-bold">Zero to Mastery Academy</h4>
                {/* <h5>2015 - 2016</h5> */}
                <p className="pb-4">
                  <em>Andrei Neagoie's Udemy Course</em>
                </p>
              </div>
              <div className="relative border-l-2 border-[#1f5297] pb-0 pl-5 before:absolute before:left-[-9px] before:top-[0px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#1f5297] before:bg-white">
                <h4 className="text-lg font-bold">
                  Complete React Developer in 2021
                </h4>
                <p className="pb-4">
                  <em>Andrei Neagoie's Udemy Course</em>
                </p>
              </div>
              <div className="relative border-l-2 border-[#1f5297] pb-0 pl-5 before:absolute before:left-[-9px] before:top-[0px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#1f5297] before:bg-white">
                <h4 className="text-lg font-bold">
                  Associate's degree in interdisciplinary studies
                </h4>
                <p className="mb-4 pb-0">
                  <em>South Texas College</em>
                </p>
              </div>
            </div>
            <div className="lg:w-2/4" data-aos="fade-up" data-aos-delay="100">
              <h3 className="mb-2 text-2xl font-bold text-[#173b6c]">
                Projects
              </h3>
              <div className="relative border-l-2 border-[#1f5297] pb-0 pl-5 before:absolute before:left-[-9px] before:top-[0px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#1f5297] before:bg-white">
                <h4 className="text-lg font-bold">CRWN Clothing</h4>
                <p className="pb-4">
                  <em>E-commerce React app</em>
                </p>
                {/* <ul>
                      <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                      <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                      <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                      <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul> */}
              </div>
              <div className="relative border-l-2 border-[#1f5297] pb-0 pl-5 before:absolute before:left-[-9px] before:top-[0px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#1f5297] before:bg-white">
                <h4 className="text-lg font-bold">Corporate Demo</h4>
                <p className="pb-4">
                  <em>Generic Business Website</em>
                </p>
                {/* <ul>
                      <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                      <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                      <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                      <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul> */}
              </div>
              <div className="relative border-l-2 border-[#1f5297] pb-0 pl-5 before:absolute before:left-[-9px] before:top-[0px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#1f5297] before:bg-white">
                <h4 className="text-lg font-bold">The Flux</h4>
                <p className="mb-4 pb-0">
                  <em>Comic Book Store Business website</em>
                </p>
                {/* <ul>
                      <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                      <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                      <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                      <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                  </ul> */}
              </div>
              {/* <div className="resume-item">
                  <h4>Graphic design specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p><em>Stepping Stone Advertising, New York, NY</em></p>
                  <ul>
                      <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                      <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                      <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                      <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                  </ul>
                  </div> */}
              <h3 className="mb-2 text-2xl font-bold text-[#173b6c]">
                Experience
              </h3>
              <div className="relative border-l-2 border-[#1f5297] pb-0 pl-5 before:absolute before:left-[-9px] before:top-[0px] before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#1f5297] before:bg-white">
                <h4 className="text-lg font-bold">
                  Front-end Web Developer, 2022-2023
                </h4>
                <p className="pb-4">
                  <em>Dealbamathcenter.com</em>
                </p>
                <ul className="pl-5">
                  <li className="pb-2">
                    Design and maintain pages using html and css.
                  </li>
                  <li className="pb-2">
                    Create engaging and interactive math problems to retain our
                    students attention and impove math scores by using CSS3 and
                    Javascript.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section */}

      {/* <PortfolioSection /> */}

      {/* ======= Contact Section ======= */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-[760px] px-3">
          <div className="pb-8">
            <h2 className="mb-5 pb-5 text-3xl font-bold text-[#173b6c]">
              Contact
            </h2>
            <p>Reach me though linkedin, email, or by phone.</p>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="w-5/12 w-full">
              <div className="p-8 shadow-md">
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>charliealonso2001@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>956 292 9046</p>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                      <div className="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" required/>
                      </div>
                      <div className="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required/>
                      </div>
                  </div>
                  <div className="form-group">
                      <label for="name">Subject</label>
                      <input type="text" className="form-control" name="subject" id="subject" required/>
                  </div>
                  <div className="form-group">
                      <label for="name">Message</label>
                      <textarea className="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
              </div> */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </main>
  );
}
