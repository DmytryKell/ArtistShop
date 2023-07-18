import "../Styles/Picture.css";

import { MdViewHeadline } from "react-icons/md";

export function Image({ currentPicture }) {
  return (
    <div className="image-item" currentPicture={currentPicture}>
      <img src={currentPicture.url} alt="image" />
      <div className="header-item">
        <h3>{currentPicture.title}</h3>
      </div>
      <div className="nav-item">
        <div className="description-item">
          <p>{currentPicture.description}</p>
        </div>
        <div className="button-item">
          <button>
            <MdViewHeadline />
            {/* <select name="" id="">
                  <option value="1">Buy</option>
                  <option value="2">Share</option>
                  <option value="3">Add to collection</option>
                  <option value="4">Report</option>
                </select> */}
          </button>
        </div>
      </div>
    </div>
  );
}
