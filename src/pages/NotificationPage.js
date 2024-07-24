import React from "react";
import NotiCard from "../components/NotificationCard/Notification";
import "./NotificationPage.css";

const notifications = [
  {
    imageUrl:
      "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    message:
      "Ask specific questions during job interviews to showcase your expertise, an expert says.",
    time: "23m",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    message:
      "Boost your productivity by taking regular breaks, according to a new study.",
    time: "10m",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/2336985/pexels-photo-2336985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    message:
      "Improve your coding skills by practicing daily, a renowned developer advises.",
    time: "15m",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3779404/pexels-photo-3779404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    message:
      "Stay updated with the latest technology trends to stay ahead in your career.",
    time: "30m",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    message:
      "Networking with peers can open new career opportunities, a career coach suggests.",
    time: "45m",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    message:
      "Setting clear goals can help you achieve more in less time, says a productivity expert.",
    time: "5m",
  },
];

const NotificationPage = () => {
  return (
    <div className="Notification-page-container">
      {notifications.map((notification, index) => (
        <NotiCard
          key={index}
          imageUrl={notification.imageUrl}
          message={notification.message}
          time={notification.time}
        />
      ))}
    </div>
  );
};

export default NotificationPage;
