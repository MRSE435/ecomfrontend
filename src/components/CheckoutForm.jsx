import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({ onSubmit }) => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    street: "",
    city: "",
    pincode: "",
  });

  // Updates the correct field when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage so Checkout page can read it
    localStorage.setItem("userDetails", JSON.stringify(formData));
    console.log("Form submitted:", formData);
    if (onSubmit) onSubmit(formData);
    
    navigate("/Checkout")
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <h2 style={styles.heading}>Delivery Details</h2>
        <p style={styles.subtext}>Enter where you'd like your order delivered</p>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email and Phone side by side */}
          <div style={styles.row}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Email</label>
              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Phone Number</label>
              <input
                style={styles.input}
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Address Line 1 */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Address Line 1</label>
            <input
              style={styles.input}
              type="text"
              name="addressLine1"
              placeholder="Flat / House No, Building Name"
              value={formData.addressLine1}
              onChange={handleChange}
              required
            />
          </div>

          {/* Street */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Street</label>
            <input
              style={styles.input}
              type="text"
              name="street"
              placeholder="Street / Area / Locality"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>

          {/* City and Pincode side by side */}
          <div style={styles.row}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>City</label>
              <input
                style={styles.input}
                type="text"
                name="city"
                placeholder="Bengaluru"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Pincode</label>
              <input
                style={styles.input}
                type="text"
                name="pincode"
                placeholder="560001"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>
            Save & Proceed to Payment
          </button>

        </form>
      </div>
    </div>
  );
};

// Styles matching ShopEase theme (white card, blue button)
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 16px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "32px",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "4px",
    color: "#111",
  },
  subtext: {
    color: "#888",
    fontSize: "14px",
    marginBottom: "24px",
  },
  row: {
    display: "flex",
    gap: "16px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "16px",
    flex: 1,
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "6px",
    color: "#333",
  },
  input: {
    padding: "10px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    color: "#111",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1a73e8",  // matches your blue button
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px",
  },
};

export default CheckoutForm;