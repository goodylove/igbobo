import React from "react";
const MobileCategorie = ({ onClick }) => {
  return (
    <>
      <div className="categorie">
        <span className="catego">Categorie</span>
        <div className="wrap-list">
          <ul>
            <li>
              <input type="radio" id="lant" name="group1" onChange={onClick} />
              <span>Gardening</span>
            </li>
            <li>
              <input
                type="radio"
                value="plant"
                name="group1"
                id="plant"
                onChange={onClick}
              />

              <span>plants</span>
            </li>
            <li>
              <input
                type="radio"
                value="room"
                name="group1"
                id="room"
                onChange={onClick}
              />

              <span>rooms</span>
            </li>
            <li>
              <input name="group1" type="radio" onChange={onClick} />

              <span>bulb</span>
            </li>
            <li>
              <input name="group1" type="radio" onChange={onClick} />

              <span>planters</span>
            </li>
            <li>
              <input name="group1" type="radio" onChange={onClick} />

              <span>Others</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileCategorie;
