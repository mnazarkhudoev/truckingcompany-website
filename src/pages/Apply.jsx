import { useState } from "react";
import { FaCheck, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FormStatus from "@/components/FormStatus";
import Honeypot from "@/components/Honeypot";
import PageMeta from "@/components/PageMeta";
import { company } from "@/data/company";
import { clean, isRateLimited, sendEmail, templates } from "@/lib/email";

const emptyForm = {
  firstName: "",
  lastName: "",
  mobile: "",
  cdlIssueDate: "",
  cdlExpiryDate: "",
  additionalInfo: "",
  website: "",
};

const essentials = [
  "Class A CDL",
  "At least 2 years of verifiable OTR experience",
  "21 or older for interstate routes",
  "Clean driving record for the past 3 years",
];

const today = () => new Date().toISOString().slice(0, 10);

const validateDates = ({ cdlIssueDate, cdlExpiryDate }) => {
  if (cdlIssueDate > today()) return "The CDL issue date can't be in the future.";
  if (cdlExpiryDate <= cdlIssueDate) return "The CDL expiration date must come after the issue date.";
  if (cdlExpiryDate < today()) return "That CDL expiration date has passed. Apply once your license is renewed.";
  return null;
};

const Apply = () => {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    setStatus(null);
    if (form.website) {
      setSubmitted(true);
      return;
    }

    const dateError = validateDates(form);
    if (dateError) {
      setStatus({ type: "error", message: dateError });
      return;
    }

    setSending(true);
    try {
      // Keys match the {{variables}} in the EmailJS application template.
      await sendEmail(templates.apply, {
        first_name: clean(form.firstName, 60),
        last_name: clean(form.lastName, 60),
        mobile: clean(form.mobile, 30),
        cdl_issue_date: form.cdlIssueDate,
        cdl_expiry_date: form.cdlExpiryDate,
        additional_info: clean(form.additionalInfo, 2000) || "No additional information provided",
        current_date: new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" }),
      });
      setForm(emptyForm);
      setSubmitted(true);
    } catch (error) {
      setStatus({
        type: "error",
        message: isRateLimited(error)
          ? "Your application was just sent. Wait 30 seconds before sending another."
          : `Your application didn't go through. Call ${company.phone} or email ${company.email} and we'll take it from there.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageMeta title="Apply to drive" description="Apply to drive for Iron Bull Trucking. CDL-A drivers, weekly pay, 24/7 dispatch, based in Lincoln, RI." />
      <section className="page-head">
        <div className="container">
          <h1 className="page-head__title">Apply to drive</h1>
          <p className="lead">Six quick fields. We review every application and call qualified drivers back.</p>
        </div>
        <div className="tape" aria-hidden="true" />
      </section>

      <section className="section section--tight">
        <div className="container apply">
          {submitted ? (
            <div className="panel apply__done" role="status">
              <FaCheck className="apply__done-icon" aria-hidden="true" />
              <h2>Application sent</h2>
              <p>Thanks for applying. We'll review your details and call you at the number you gave us.</p>
              <div className="hero__actions">
                <Link to="/" className="btn btn--ghost">
                  Back to the homepage
                </Link>
              </div>
            </div>
          ) : (
            <form className="panel form" onSubmit={onSubmit}>
              <div className="form__grid">
                <div className="field">
                  <label htmlFor="firstName">First name</label>
                  <input id="firstName" name="firstName" type="text" autoComplete="given-name" maxLength={60} required value={form.firstName} onChange={onChange} disabled={sending} />
                </div>
                <div className="field">
                  <label htmlFor="lastName">Last name</label>
                  <input id="lastName" name="lastName" type="text" autoComplete="family-name" maxLength={60} required value={form.lastName} onChange={onChange} disabled={sending} />
                </div>
                <div className="field field--full">
                  <label htmlFor="mobile">Mobile number</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(401) 555-0123"
                    pattern={String.raw`[0-9+\(\)\-. ]{7,30}`}
                    title="Digits, spaces, and + ( ) - . only"
                    maxLength={30}
                    required
                    value={form.mobile}
                    onChange={onChange}
                    disabled={sending}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cdlIssueDate">CDL issue date</label>
                  <input id="cdlIssueDate" name="cdlIssueDate" type="date" max={today()} required value={form.cdlIssueDate} onChange={onChange} disabled={sending} />
                </div>
                <div className="field">
                  <label htmlFor="cdlExpiryDate">CDL expiration date</label>
                  <input id="cdlExpiryDate" name="cdlExpiryDate" type="date" min={today()} required value={form.cdlExpiryDate} onChange={onChange} disabled={sending} />
                </div>
                <div className="field field--full">
                  <label htmlFor="additionalInfo">
                    Anything else? <span className="field__optional">(optional)</span>
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={5}
                    maxLength={2000}
                    placeholder="Driving experience, endorsements, preferred routes"
                    value={form.additionalInfo}
                    onChange={onChange}
                    disabled={sending}
                  />
                </div>
              </div>
              <Honeypot value={form.website} onChange={onChange} />
              <FormStatus status={status} />
              <button type="submit" className="btn btn--primary" disabled={sending}>
                {sending ? "Sending application…" : "Send application"}
              </button>
            </form>
          )}

          <aside className="apply__aside">
            <h2>What you'll need</h2>
            <ul className="checklist">
              {essentials.map(item => (
                <li key={item}>
                  <FaCheck aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              <Link to={{ pathname: "/", hash: "#requirements" }}>See the full list of requirements</Link>
            </p>
            <div className="apply__call">
              <h2>Rather talk first?</h2>
              <p>Call or text us during office hours: {company.hours}.</p>
              <a href={company.phoneHref} className="btn btn--ghost">
                <FaPhone aria-hidden="true" />
                {company.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Apply;
