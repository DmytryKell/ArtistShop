import "../Styles/Picture.css";

export function Image(){
    return(
        <div className="image-item">
            <div className="header-item">
              <h3>The image</h3>
            </div>
            <div className="nav-item">
              <div className="description-item">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, modi. Ex quibusdam odio rerum perferendis?
                </p>
              </div>
              <div className="button-item">
                <button>
                  ^
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