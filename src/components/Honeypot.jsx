// Hidden from people, but spam bots fill in every field they find.
// A submission with this field filled is dropped without sending.
const Honeypot = ({ value, onChange }) => (
  <div className="honeypot" aria-hidden="true">
    <label htmlFor="website">Leave this field empty</label>
    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
  </div>
);

export default Honeypot;
