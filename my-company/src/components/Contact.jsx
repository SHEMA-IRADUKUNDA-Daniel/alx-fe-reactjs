import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: 10,
            width: 400,
            borderRadius: 10,
            outline: "none",
            border: "1px solid black",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: 10,
            width: 400,
            borderRadius: 10,
            outline: "none",
            border: "1px solid black",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: 10,
            width: 400,
            borderRadius: 10,
            outline: "none",
            border: "1px solid black",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: 20,
            borderRadius: 10,
            border: "none",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
