import { useState } from "react";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import FormStatus from "@/components/FormStatus";
import Honeypot from "@/components/Honeypot";
import { company } from "@/data/company";
import { canSend, clean, isRateLimited, sendEmail, templates } from "@/lib/email";

const emptyForm = { name: "", email: "", phone: "", topic: "", message: "", website: "" };

const topics = ["I'm a driver", "I'm a shipper or broker", "Something else"];

const details = [
  { icon: FaPhone, label: "Call or text", value: company.phone, href: company.phoneHref },
  { icon: FaEnvelope, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: FaLocationDot, label: "Office", value: `${company.street}, ${company.city}` },
  { icon: FaClock, label: "Office hours", value: company.hours },
];

// Without an EmailJS contact template, hand the message to the visitor's email app.
const openMailDraft = params => {
  const subject = `Website message: ${params.topic}`;
  const body = `${params.message}\n\n${params.from_name}\n${params.reply_to}\n${params.phone}`;
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    setStatus(null);
    if (form.website) {
      setForm(emptyForm);
      setStatus({ type: "success", message: "Message sent. We'll get back to you within 24 hours." });
      return;
    }

    const params = {
      from_name: clean(form.name, 100),
      reply_to: clean(form.email, 200),
      phone: clean(form.phone, 40) || "Not provided",
      topic: topics.includes(form.topic) ? form.topic : topics[2],
      message: clean(form.message, 3000),
    };

    if (!canSend(templates.contact)) {
      openMailDraft(params);
      setStatus({ type: "success", message: "Your email app should open with the message filled in. Press send there to finish." });
      return;
    }

    setSending(true);
    try {
      await sendEmail(templates.contact, params);
      setForm(emptyForm);
      setStatus({ type: "success", message: "Message sent. We'll get back to you within 24 hours." });
    } catch (error) {
      setStatus({
        type: "error",
        message: isRateLimited(error)
          ? "You just sent a message. Wait 30 seconds before sending another."
          : `Your message didn't go through. Call ${company.phone} or email ${company.email} instead.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact__info">
          <h2 id="contact-title" className="section-title">
            Get in touch
          </h2>
          <p className="lead">
            Shipper, broker, or driver with a question: call, email, or send a message and we'll get back to
            you within 24 hours.
          </p>
          <dl className="contact-list">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label}>
                <dt>
                  <Icon aria-hidden="true" />
                  {label}
                </dt>
                <dd>{href ? <a href={href}>{value}</a> : value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form className="panel form" onSubmit={onSubmit}>
          <h3 className="form__title">Send a message</h3>
          <div className="form__grid">
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required value={form.name} onChange={onChange} />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={200} required value={form.email} onChange={onChange} />
            </div>
            <div className="field">
              <label htmlFor="contact-phone">
                Phone <span className="field__optional">(optional)</span>
              </label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={onChange} />
            </div>
            <div className="field">
              <label htmlFor="contact-topic">You are</label>
              <select id="contact-topic" name="topic" required value={form.topic} onChange={onChange}>
                <option value="" disabled>
                  Choose one
                </option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
            <div className="field field--full">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={5} maxLength={3000} required value={form.message} onChange={onChange} />
            </div>
          </div>
          <Honeypot value={form.website} onChange={onChange} />
          <FormStatus status={status} />
          <button type="submit" className="btn btn--primary" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
