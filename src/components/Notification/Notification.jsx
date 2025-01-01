import { notification1 } from "../../assets";
import { notificationImages } from "../../constants";
import "./Notification.css";
const Notification = () => {
  return (
    <>
      <div className="hero-notification">
        <div className="notification-container">
          <img
            src={notification1}
            width={62}
            height={62}
            alt="image"
            className="notification-image"
          />

          <div className="notification-content">
            <h6 className="notification-title">Code generation</h6>

            <div className="notification-footer">
              <ul className="notification-images">
                {notificationImages.map((item, index) => (
                  <li key={index} className="notification-item">
                    <img
                      src={item}
                      className="notification-item-image"
                      width={20}
                      height={20}
                      alt={item}
                    />
                  </li>
                ))}
              </ul>
              <div className="notification-time">1m ago</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
