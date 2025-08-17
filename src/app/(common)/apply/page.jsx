import React, { useState } from "react";

const Apply = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    cdlIssueDate: "",
    cdlExpiryDate: "",
    additionalInfo: ""
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Driver application:", form);
    alert("Application submitted. Thank you!");
    setForm({
      firstName: "",
      lastName: "",
      mobile: "",
      cdlIssueDate: "",
      cdlExpiryDate: "",
      additionalInfo: ""
    });
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
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-control"
                        placeholder="John"
                        value={form.firstName}
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="mobile" className="form-label">Mobile Number</label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        className="form-control"
                        placeholder="+1 555 123 4567"
                        value={form.mobile}
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cdlIssueDate" className="form-label">CDL Issue Date</label>
                      <input
                        id="cdlIssueDate"
                        name="cdlIssueDate"
                        type="date"
                        className="form-control"
                        value={form.cdlIssueDate}
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cdlExpiryDate" className="form-label">CDL Expiration Date</label>
                      <input
                        id="cdlExpiryDate"
                        name="cdlExpiryDate"
                        type="date"
                        className="form-control"
                        value={form.cdlExpiryDate}
                        onChange={onChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="additionalInfo" className="form-label">Additional Info</label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        className="form-control"
                        rows="5"
                        placeholder="Tell us more about your experience..."
                        value={form.additionalInfo}
                        onChange={onChange}
                      />
                    </div>

                    <div className="col-12 text-end">
                      <button
                        type="submit"
                        className="ca-btn-primary-3 theme-bg-3 text-white br-50 px-4 py-2"
                      >
                        Apply Now
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