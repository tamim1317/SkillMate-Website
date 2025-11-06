import { useLocation } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = () => {
    // এখানে চাইলে Firebase এর sendPasswordResetEmail() ব্যবহার করতে পারো
    window.location.href = "https://mail.google.com"; // redirect to Gmail
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
