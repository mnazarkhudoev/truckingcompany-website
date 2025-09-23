import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Email from "@/assets/img/icon/ca-envelop3.3.svg";
import location from "@/assets/img/icon/ca-map3.1.svg";
import phone from "@/assets/img/icon/ca-ph3.2.svg";
import breadcrumnShape from "@/assets/img/shape/breadcrumn-shape.png";
import { FaAngleRight } from "react-icons/fa6";
import PageMeta from "@/components/PageMeta";

const ContactPage = () => {
  const contactInfo = [
    {
      image: location,
      title: "Our Address",
      content: "25 N CROW POINT RD LINCOLN, RI 02865"
    },
    {
      image: phone,
      title: "Contact Us",
      content: (
        <a href="tel:+14015958647" style={{ color: '#ffffff', textDecoration: 'none' }}>
          +1 401-595-8647
        </a>
      )
    },
    {
      image: Email,
      title: "Email Us",
      content: (
        <a href="mailto:ib.trucking@yahoo.com" style={{ color: '#ffffff', textDecoration: 'none' }}>
          ib.trucking@yahoo.com
        </a>
      )
    }
  ];

  return (
    <>
      <PageMeta title="Contact" />
      <main style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
        <section className="ca-breadcrumb-area p-relative z-index-1 fix" style={{ backgroundColor: '#000000', paddingTop: '80px', paddingBottom: '40px' }}>
          <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
            <img src={breadcrumnShape} alt="Breadcrumb Shape" />
          </div>
          <div className="container">
            <div className="ca-breadcrumb-content text-center">
              <h2 className="ca-breadcrumb-title fnw-600" style={{ color: '#ffffff' }}>Contact Us</h2>
            </div>
          </div>
        </section>

        <section className="ca-contact-inner pt-100 pb-70" style={{ backgroundColor: '#000000' }}>
          <div className="container">
            <div className="row">
              {contactInfo.map((item, index) => (
                <div key={index} className="col-xl-4 col-md-6 mb-30">
                  <div className="ca-location-3">
                    <div className="ca-location-icbox" style={{
                      backgroundColor: '#141414',
                      borderRadius: '10px',
                      padding: '30px',
                      minHeight: '180px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div className="ca-location-icbox-img">
                          <span style={{
                            display: 'inline-flex',
                            width: '60px',
                            height: '60px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#1f2937',
                            borderRadius: '10px'
                          }}>
                            <img src={item.image} alt={item.title} style={{ width: '30px', height: '30px', filter: 'brightness(0) invert(1)' }} />
                          </span>
                        </div>
                        <div className="ca-location-icbox-text" style={{ flex: 1 }}>
                          <h4 className="ca-title fnw-600 pb-16" style={{ color: '#ffffff', fontSize: '18px', marginBottom: '10px' }}>
                            {item.title}
                          </h4>
                          <p style={{ color: '#ffffff', fontSize: '14px', margin: 0, wordBreak: 'break-word' }}>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ca-maps" style={{ backgroundColor: '#000000', padding: '0 0 50px 0' }}>
          <div className="container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289506974609!2d-71.43637068455596!3d41.922934379218084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e44c5e8b7d5b45%3A0x8f8a8f8a8f8a8f8a!2s25%20Crow%20Point%20Rd%2C%20Lincoln%2C%20RI%2002865%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              className="contact-page__google-map"
              style={{
                border: '0',
                width: '100%',
                height: '450px',
                borderRadius: '10px',
                filter: 'invert(1) hue-rotate(180deg) contrast(0.85)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IB Trucking Location"
            ></iframe>
          </div>
        </div>

        <section className="ca-conatct-form1 pb-100" style={{ backgroundColor: '#000000' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="ca-con-rep-form text-center" style={{
                  backgroundColor: '#141414',
                  borderRadius: '15px',
                  padding: '50px 40px'
                }}>
                  <h4 className="ca-title fnw-600 theme-black-3 pb-16" style={{ color: '#ffffff', marginBottom: '16px' }}>
                    Send Us a Message
                  </h4>
                  <p className="pb-32" style={{ color: '#999999', marginBottom: '32px' }}>
                    Your email address will not be published. Required fields are
                    marked *
                  </p>

                  <div className="ca-cmt-from">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          /* Override form styles for dark theme */
          .ca-cmt-from input,
          .ca-cmt-from textarea,
          .ca-cmt-from select {
            background-color: #1f2937 !important;
            color: #ffffff !important;
            border: 1px solid #374151 !important;
            border-radius: 8px !important;
            padding: 12px 20px !important;
            transition: all 0.3s ease !important;
          }

          .ca-cmt-from input::placeholder,
          .ca-cmt-from textarea::placeholder {
            color: #9ca3af !important;
          }

          .ca-cmt-from input:focus,
          .ca-cmt-from textarea:focus,
          .ca-cmt-from select:focus {
            background-color: #1f2937 !important;
            border-color: #4b5563 !important;
            outline: none !important;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
          }

          .ca-cmt-from button[type="submit"],
          .ca-cmt-from .submit-button,
          .ca-cmt-from .btn,
          .ca-cmt-from button.submit,
          .ca-cmt-from .ca-btn-primary-3 {
            display: inline-block !important;
            font-weight: 700 !important;
            padding: 10px 16px !important;
            font-size: 16px !important;
            line-height: 16px !important;
            transition: 0.3s !important;
            position: relative !important;
            z-index: 1 !important;
            border-radius: 50px !important;
            background-color: #d11207 !important;
            color: #ffffff !important;
            border: none !important;
            cursor: pointer !important;
            min-width: 120px !important;
            text-align: center !important;
            outline: none !important;
          }

          .ca-cmt-from button[type="submit"]:hover,
          .ca-cmt-from .submit-button:hover,
          .ca-cmt-from .btn:hover,
          .ca-cmt-from button.submit:hover,
          .ca-cmt-from .ca-btn-primary-3:hover {
            background-color: #dc2626 !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 5px 15px rgba(239, 68, 68, 0.3) !important;
          }

          .ca-cmt-from label {
            color: #ffffff !important;
            text-align: left !important;
            display: block !important;
            margin-bottom: 8px !important;
            font-weight: 500 !important;
          }

          .ca-cmt-from .form-group,
          .ca-cmt-from .form-row {
            margin-bottom: 20px !important;
          }

          /* Ensure all text in form is visible */
          .ca-con-rep-form * {
            color: #ffffff;
          }

          .ca-con-rep-form p {
            color: #999999;
          }

          /* Contact card hover effects */
          .ca-location-icbox a:hover {
            color: #ef4444 !important;
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .ca-location-icbox {
              min-height: 150px !important;
            }

            .contact-page__google-map {
              height: 300px !important;
            }

            .ca-con-rep-form {
              padding: 30px 20px !important;
            }
          }

          /* Ensure consistent card heights */
          .ca-location-3 {
            height: 100%;
          }

          .row > [class*='col-'] {
            display: flex;
            flex-direction: column;
          }

          .row > [class*='col-'] .ca-location-3 {
            flex: 1;
          }
        `}</style>
      </main>
    </>
  );
};

export default ContactPage;