import emailjs from "@emailjs/browser";

// EmailJS keys are public by design and end up in the browser bundle.
// Protect the account in the EmailJS dashboard: restrict allowed domains
// to i-b-trucking.com and keep the per-IP rate limit on.
const env = import.meta.env;
const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = env.VITE_EMAILJS_SERVICE_ID;

export const templates = {
  apply: env.VITE_EMAILJS_TEMPLATE_ID,
  contact: env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
};

export const canSend = templateId => Boolean(publicKey && serviceId && templateId);

export const sendEmail = (templateId, params) => {
  if (!canSend(templateId)) {
    return Promise.reject(new Error("Email sending is not configured."));
  }
  return emailjs.send(serviceId, templateId, params, {
    publicKey,
    blockHeadless: true,
    // One message per template every 30 seconds from the same browser.
    limitRate: { id: templateId, throttle: 30000 },
  });
};

export const isRateLimited = error => error?.status === 429;

// Trim and cap every field so oversized payloads never reach the template.
export const clean = (value, max) => String(value ?? "").trim().slice(0, max);
