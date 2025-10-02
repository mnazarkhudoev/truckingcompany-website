import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Apply = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    cdlIssueDate: "",
    cdlExpiryDate: "",
    additionalInfo: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS (do this once when component mounts)
  React.useEffect(() => {
    // Replace with your actual public key
    emailjs.init("CqAnAzNcPkTokkPNq");
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const SERVICE_ID = '1000000621'; // Replace with your EmailJS service ID
      const TEMPLATE_ID = 'template_8kcbq3o'; // Replace with your EmailJS template ID
      
      // Format the current date
      const currentDate = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short'
      });
      
      // Prepare template parameters - these match the {{variables}} in your template
      const templateParams = {
        // These will be used in the email template
        first_name: form.firstName,
        last_name: form.lastName,
        mobile: form.mobile,
        cdl_issue_date: form.cdlIssueDate,
        cdl_expiry_date: form.cdlExpiryDate,
        additional_info: form.additionalInfo || "No additional information provided",
        current_date: currentDate
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );
      
      console.log('SUCCESS!', response.status, response.text);
      
      // Show success message
      alert("Application submitted successfully! We'll contact you soon.");
      
      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        mobile: "",
        cdlIssueDate: "",
        cdlExpiryDate: "",
        additionalInfo: ""
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to submit application. Please try again or contact us directly at 501848416muzaffar@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Dark page background + header offset */}
      <style>{`
        /* Full-page black background */
        .apply-page { background:#000; min-height:100vh; }
        /* Offset so content doesn't hide under sticky header */
        .apply-dark.ca-section { padding-top: 160px !important; }
        @media (max-width: 991.98px) {
          .apply-dark.ca-section { padding-top: 130px !important; }
        }

        /* Form styling (gray on dark) */
        .apply-dark { color:#fff; }
        .apply-dark .section-title h2 { color:#fff; }
        .apply-dark .section-title p { color:#cbd5e1; }
        .apply-dark .card-dark { background:#141414; border:1px solid #2a2a2a; border-radius:20px; }
        .apply-dark .form-label { color:#e5e7eb; }
        .apply-dark .form-control { background:#1f2937; border:1px solid #374151; color:#f9fafb; }
        .apply-dark .form-control:focus { border-color:#60a5fa; box-shadow:none; outline:0; }
        .apply-dark ::placeholder { color:#9ca3af; opacity:1; }
        .apply-dark textarea.form-control { min-height:140px; }
        .apply-dark .btn-disabled { opacity: 0.6; cursor: not-allowed; }
        .apply-dark .form-label .required { color: #ef4444; }
        
        /* Make CTA shape static on Apply page */
        .ca-cta-shape3 { animation: none !important; transform: translateY(0) !important; }
      `}</style>

      <div className="apply-page">
        <section className="apply-dark ca-section pb-100">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-lg-8 text-center section-title">
                <h2 className="mb-3">Apply Now</h2>
                <p>Submit your details and our team will reach out.</p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card-dark p-4 p-md-5">
                  <form onSubmit={onSubmit} className="row g-4">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-control"
                        placeholder="John"
                        value={form.firstName}
                        onChange={onChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={onChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="mobile" className="form-label">
                        Mobile Number <span className="required">*</span>
                      </label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        className="form-control"
                        placeholder="+1 555 123 4567"
                        value={form.mobile}
                        onChange={onChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cdlIssueDate" className="form-label">
                        CDL Issue Date <span className="required">*</span>
                      </label>
                      <input
                        id="cdlIssueDate"
                        name="cdlIssueDate"
                        type="date"
                        className="form-control"
                        value={form.cdlIssueDate}
                        onChange={onChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cdlExpiryDate" className="form-label">
                        CDL Expiration Date <span className="required">*</span>
                      </label>
                      <input
                        id="cdlExpiryDate"
                        name="cdlExpiryDate"
                        type="date"
                        className="form-control"
                        value={form.cdlExpiryDate}
                        onChange={onChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="additionalInfo" className="form-label">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        className="form-control"
                        rows="5"
                        placeholder="Tell us more about your driving experience, endorsements, preferred routes, etc..."
                        value={form.additionalInfo}
                        onChange={onChange}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="col-12 text-end">
                      <button
                        type="submit"
                        className={`ca-btn-primary-3 theme-bg-3 text-white br-50 px-4 py-2 ${isSubmitting ? 'btn-disabled' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Apply;