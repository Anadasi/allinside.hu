import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="profile-authentication-area pt-140">
      <div className="container">
        <div className="profile-authentication-inner" style={{ textAlign: "center" }}>
          <h2>Köszönjük szépen!</h2>
          <p>Üzenetét sikeresen megkaptuk!</p>
          <div style={{ marginTop: 24 }}>
            <Link className="link-btn" href="/">Vissza a főoldalra</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

