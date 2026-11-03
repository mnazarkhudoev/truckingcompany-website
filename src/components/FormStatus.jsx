import { FaCircleCheck, FaTriangleExclamation } from "react-icons/fa6";

// Announces the result of a form submission to screen readers and sighted users.
const FormStatus = ({ status }) => {
  if (!status) return null;
  const Icon = status.type === "success" ? FaCircleCheck : FaTriangleExclamation;
  return (
    <p className={`form-status form-status--${status.type}`} role={status.type === "error" ? "alert" : "status"}>
      <Icon aria-hidden="true" />
      <span>{status.message}</span>
    </p>
  );
};

export default FormStatus;
