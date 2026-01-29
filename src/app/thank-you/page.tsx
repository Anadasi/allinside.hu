import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="profile-authentication-area pt-140">
      <div className="container">
        <div className="profile-authentication-inner" style={{ textAlign: "center" }}>
          <h2>Thank You</h2>
          <p>Your submission has been received. We’ll be in touch soon.</p>
          <div style={{ marginTop: 24 }}>
            <Link className="link-btn" href="/">Return Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

