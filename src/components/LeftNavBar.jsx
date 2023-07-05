import "./Styles/LeftNavMenu.css";

export function LeftNavBar() {
  return (
    <>
      <div className="menu-bar">
        <div className="header-menu">
          <logo>ArtistShop</logo>
          <div className="user-nav">
            <div className="user-icon">
              <div className="user-scroll-nav">
                {/* <select name="user-profile-set" id="user-profile-set">
                  <option value="1">View Profile</option>
                  <option value="2">Settings</option>
                  <option value="3">Exit</option>
                </select> */}
              </div>
            </div>
            <div className="user-basket">
              <div className="score">4</div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <ul>
            <li>Profile</li>
            <li>Music</li>
            <li>Pictures</li>
            <li>Video</li>
            <li>Collection</li>
            <li>Favorite</li>
          </ul>
        </div>
        <div className="footer-menu">
          <div className="contacts">
            <ul>
              <li>Instagram</li>
              <li>GitHub</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
