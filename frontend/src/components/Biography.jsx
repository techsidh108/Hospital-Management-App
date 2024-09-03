import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Founded in 2004, Zee Healthcare has been a beacon of hope and healing in the heart of our community. Established by a group of visionary doctors and philanthropists, the hospital was born out of a deep commitment to providing world-class medical care with a personal touch. Over the years, Zee Healthcare has grown from a modest clinic into a sprawling, state-of-the-art medical facility, known for its cutting-edge technology and a highly skilled team of professionals.
          </p>


          <p>
            Zee Healthcare’s mission has always been centered on patient care. With over 500 beds and a diverse range of specialties, including cardiology, oncology, neurology, pediatrics, and orthopedics, the hospital serves thousands of patients each year.
          </p>


        </div>
      </div>
    </>
  );
};

export default Biography;