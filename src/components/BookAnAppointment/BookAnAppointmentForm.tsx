import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function handleAppointment(formData: FormData) {
  "use server";
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = String(formData.get("service") || "");
  const date = String(formData.get("date") || "").trim();
  const time = String(formData.get("time") || "").trim();
  const doctor = String(formData.get("doctor") || "").trim();
  const notes = String(formData.get("notes") || "").trim();
  const agree = formData.get("agree") === "on";

  // TODO: Persist appointment request
  console.log("[Appointment]", { name, email, phone, service, date, time, doctor, notesLen: notes.length, agree });
  redirect("/thank-you");
}

const BookAnAppointmentForm = () => {
  return (
    <>
      <div className="appointment-area ptb-140">
        <div className="container">
          <div
            className="appointment-form-inner"
            data-cues="slideInUp"
            data-duration="1000"
          >
            <div className="content">
              <h2>Book an Appointment</h2>
              <p>
                Schedule your virtual consultation in just a few clicks—select
                your service, pick a time, and connect with a licensed doctor
                from anywhere.
              </p>
            </div>
            
            <form action={handleAppointment}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="e.g. Emily Carter"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="e.g. emily@support.com"
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  placeholder="e.g. 1-202-555-0147"
                />
              </div>
              <div className="form-group">
                <label>Select Service Type</label>
                <select className="form-control form-select" name="service">
                  <option value="0">e.g. General Consultation</option>
                  <option value="1">Health Insurance</option>
                  <option value="2">Life Insurance</option>
                </select>
              </div>
              <div className="form-group">
                <label>Choose Preferred Date</label>
                <input
                  type="text"
                  name="date"
                  className="form-control"
                  placeholder="e.g. Choose a Date"
                />
              </div>
              <div className="form-group">
                <label>Choose Preferred Time Slot</label>
                <input
                  type="text"
                  name="time"
                  className="form-control"
                  placeholder="e.g. Choose a Time"
                />
              </div>
              <div className="form-group">
                <label>Doctor</label>
                <input
                  type="text"
                  name="doctor"
                  className="form-control"
                  placeholder="e.g. Dr. Emily Carter"
                />
              </div>
              <div className="form-group">
                <label>Additional Notes</label>
                <textarea
                  name="notes"
                  className="form-control"
                  placeholder="e.g. Briefly describe your symptoms"
                ></textarea>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="agree"
                    value="on"
                    id="checkDefault"
                  />
                  <label className="form-check-label" htmlFor="checkDefault">
                    I confirm that I have read and agree to the{" "}
                    <Link href="/privacy-policy">Privacy Policy.</Link>
                  </label>
                </div>
              </div>

              <button type="submit" className="default-btn">
                <span className="left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M17.8077 0.98584H1.19231C0.810154 0.98584 0.5 1.29599 0.5 1.67815C0.5 2.0603 0.810154 2.37046 1.19231 2.37046H16.1361L0.702846 17.8041C0.4325 18.0744 0.4325 18.5126 0.702846 18.783C0.838192 18.9183 1.01508 18.9858 1.19231 18.9858C1.36954 18.9858 1.54677 18.9183 1.68177 18.783L17.1154 3.34938V18.2935C17.1154 18.6757 17.4255 18.9858 17.8077 18.9858C18.1898 18.9858 18.5 18.6757 18.5 18.2935V1.67815C18.5 1.29599 18.1898 0.98584 17.8077 0.98584Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Book Appointment
                <span className="right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M17.8077 0.98584H1.19231C0.810154 0.98584 0.5 1.29599 0.5 1.67815C0.5 2.0603 0.810154 2.37046 1.19231 2.37046H16.1361L0.702846 17.8041C0.4325 18.0744 0.4325 18.5126 0.702846 18.783C0.838192 18.9183 1.01508 18.9858 1.19231 18.9858C1.36954 18.9858 1.54677 18.9183 1.68177 18.783L17.1154 3.34938V18.2935C17.1154 18.6757 17.4255 18.9858 17.8077 18.9858C18.1898 18.9858 18.5 18.6757 18.5 18.2935V1.67815C18.5 1.29599 18.1898 0.98584 17.8077 0.98584Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAnAppointmentForm;
