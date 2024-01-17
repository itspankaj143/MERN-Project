import React, { useState } from "react";

const Contact1 = () => {
  // Initialize state for form data
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Additional logic (e.g., sending form data to server) can be added here

    // Clear form data after submission
    setFormData({
      Name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <div className="mainContact">
        <div className="row m-auto">
          <div className="col-12">
            <h3 className="heading ">Contact Us</h3>
          </div>
          <div className="col-12">
            <div className="row">
              <h3 className="contact-title padd-15">Have You Any Question ?</h3>
              <h4 className="contact-sub-title padd-15">
                I'M AT YOUR SERVICES
              </h4>
              <div className="row">
                {/* <!--=== Contact info item Start ===--> */}
                <div className="contact-info-item padd-15">
                  <div className="icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h4>Call Us On</h4>
                  <p>+91 86687 89160</p>
                </div>
                {/* <!--=== Contact info item End ===--> */}
                {/* <!--=== Contact info item Start ===--> */}
                <div className="contact-info-item padd-15">
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <h4>Email</h4>
                  <p>charudattawarke271@gmail.com</p>
                </div>
                {/* <!--=== Contact info item End ===--> */}
                {/* <!--=== Contact info item Start ===--> */}
                <div className="contact-info-item padd-15">
                  <div className="icon">
                    <i className="fa fa-globe-europe"></i>
                  </div>
                  <h4>website</h4>
                  <p>
                    <a href="https://charudattawarke.in/">charudattawarke.in</a>
                  </p>
                </div>
                {/* <!--=== Contact info item End ===--> */}
              </div>
              <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
              <h4 className="contact-sub-title padd-15">
                I'M VERY RESPOSIVE TO MESSAGE
              </h4>
              {/* <!--======Contact Form======--> */}
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xjvnvoye"
                method="POST"
              >
                <div className="row">
                  <div className="contact-form padd-15">
                    <div className="row">
                      <div className="form-item col-6 padd-15">
                        <div className="form-group">
                          <input
                            type="text"
                            name="Name"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="form-item col-6 padd-15">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="MESSAGE"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12 padd-15">
                        <div className="form-group">
                          <button type="submit" className="btn">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* Display form data from local storage */}
              <div className="row">
                <div className="col-12 padd-15">
                  <h3>Form Data from Local Storage</h3>
                  <pre>
                    {JSON.stringify(
                      JSON.parse(localStorage.getItem("formData")),
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact1;
