import React, { useState, useEffect } from "react";

const BranchMap = ({ branchLocations }) => {
  const [currentBranchIndex, setCurrentBranchIndex] = useState(0);
  console.log(branchLocations);
  useEffect(() => {
    initializeMap();
  }, [currentBranchIndex]);

  const initializeMap = () => {
    const branch = branchLocations[currentBranchIndex];
    const latitude = branch.lat;
    const longitude = branch.lng;

    const map = new google.maps.Map(document.getElementById("address-map"), {
      center: { lat: +latitude, lng: +longitude },
      zoom: 15,
    });

    const marker = new google.maps.Marker({
      map: map,
      position: { lat: +latitude, lng: +longitude },
      draggable: true,
    });

    // Add any additional map configurations or event listeners as needed
  };

  const changeBranch = (branchIndex) => {
    setCurrentBranchIndex(branchIndex);
  };

  return (
    <div>
      <div className="SearchEnginePopup__popup">
        <div className="row no-gutters SearchEngineCountries">
          <div className="col-md-6">
            <div className="countries_side li_h" id="store-stores">
              <ul>
                {branchLocations.map((branch, index) => (
                  <li key={index} onClick={() => changeBranch(index)}>
                    <div className="store-store-location">
                      <div>
                        <strong>{branch.title}</strong>
                        <p className="store-country">{branch.address}</p>
                      </div>
                    </div>
                    <a
                      className="store-directions pt-0"
                      target="_blank"
                      href="#"
                    >
                      {branch.start_time} - {branch.end_time}
                      <i className="fa-solid fa-clock"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="stationDetails">
              <div id="address-map" style={{ height: "600px" }}></div>
            </div>
          </div>
        </div>
        <div className="three-calendars d-none"></div>
      </div>
      <div></div>
    </div>
  );
};

export default BranchMap;
