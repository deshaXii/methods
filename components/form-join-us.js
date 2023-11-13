import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "../common/axios";

const FormJoinUs = () => {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [country, setCountry] = useState("");
  let [cv, setCv] = useState("");
  const SendJobRequest = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://methods-backend.puiux.org/api/forms/join-us",
        {
          email,
          name,
          phone,
          address,
          country,
        },
        {
          headers: {
            "Accept-Language": "ar",
          },
        }
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // تعيين مدة الانتقال (بالمللي ثانية)
      easing: "ease-in-out", // تعيين التموج (التنوع) للانتقال
    });
  }, []);

  return (
    <div>
      <form action="" id="join-us-form" onSubmit={(e) => SendJobRequest(e)}>
        <div className="login_card">
          <div className="wave-group">
            <input
              required=""
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <i className="fa-solid fa-user label-char"></i>
              <span className="label-char" style={{ "--index": 0 }}>
                N
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                a
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                m
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                e
              </span>
            </label>
          </div>
          <div className="wave-group">
            <input
              required=""
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <i className="fa-solid fa-envelope label-char"></i>
              <span className="label-char" style={{ "--index": 0 }}>
                E
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                m
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                a
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                i
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                l
              </span>
            </label>
          </div>
          <div className="wave-group">
            <input
              required=""
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <i className="fa-solid fa-phone label-char"></i>
              <span className="label-char" style={{ "--index": 0 }}>
                P
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                h
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                o
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                n
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                e
              </span>
              <span className="label-char m_n" style={{ "--index": 5 }}>
                n
              </span>
              <span className="label-char" style={{ "--index": 6 }}>
                u
              </span>
              <span className="label-char" style={{ "--index": 7 }}>
                m
              </span>
              <span className="label-char" style={{ "--index": 8 }}>
                p
              </span>
              <span className="label-char" style={{ "--index": 9 }}>
                e
              </span>
              <span className="label-char" style={{ "--index": 10 }}>
                r
              </span>
            </label>
          </div>
          <div className="wave-group">
            <input
              required=""
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <i className="fa-solid fa-earth-americas label-char"></i>
              <span className="label-char" style={{ "--index": 0 }}>
                C
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                o
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                n
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                t
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                r
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                y
              </span>
            </label>
          </div>
          <div className="wave-group">
            <input
              required=""
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input"
            />
            <span className="bar"></span>
            <label className="label">
              <i className="fa-solid fa-location-dot label-char"></i>
              <span className="label-char" style={{ "--index": 0 }}>
                A
              </span>
              <span className="label-char" style={{ "--index": 1 }}>
                d
              </span>
              <span className="label-char" style={{ "--index": 2 }}>
                d
              </span>
              <span className="label-char" style={{ "--index": 3 }}>
                r
              </span>
              <span className="label-char" style={{ "--index": 4 }}>
                e
              </span>
              <span className="label-char" style={{ "--index": 5 }}>
                s
              </span>
            </label>
          </div>
          <div className="drop-zone pt-4 pb-2">
            <img src="./img/cv.png" alt="" />
            <div className="d-flex pt-4 justify-content-around align-items-center w-100">
              <span className="drop-zone__prompt">UPLOAD YOUR CV HERE</span>
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
            <input
              type="file"
              name="myFile"
              id="upload-files"
              onChange={async (e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  setCv(reader.result);
                };
                reader.readAsArrayBuffer(file);
              }}
              className="drop-zone__input"
            />
          </div>
          <button type="submit" name="" id="join-us-btn" className="btm_send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormJoinUs;
