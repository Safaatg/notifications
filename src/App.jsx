import markWebberAvatar from "./assets/image/avatar-mark-webber.webp";
import angelaGrayAvatar from "./assets/image/avatar-angela-gray.webp";
import jacobThompsonAvatar from "./assets/image/avatar-jacob-thompson.webp";
import rizkyHassanAvatar from "./assets/image/avatar-rizky-hasanuddin.webp";
import kimberlySmitheAvatar from "./assets/image/avatar-kimberly-smith.webp";
import nathanPetersonAvatar from "./assets/image/avatar-nathan-peterson.webp";
import annaKimAvatar from "./assets/image/avatar-anna-kim.webp";
import chessAvatar from "./assets/image/image-chess.webp";
import { useState } from "react";
import "./App.css";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      author: {
        fullName: "Mark Webber",
        src: markWebberAvatar,
        profileLink: "#",
      },
      notification: "reacted to your recent post",
      postLink: {
        text: "My first tournament today!",
        url: "#",
      },
      timestamp: "1m ago",
      isUnread: true,
    },
    {
      id: 2,
      author: {
        fullName: "Angela Gray",
        src: angelaGrayAvatar,
        profileLink: "#",
      },
      notification: "followed you",
      timestamp: "5m ago",
      isUnread: true,
    },
    {
      id: 3,
      author: {
        fullName: "Jacob Thompson",
        src: jacobThompsonAvatar,
        profileLink: "#",
      },
      notification: "has joined your group",
      groupLink: {
        text: "Chess Club",
        url: "#",
      },
      timestamp: "1 day ago",
      isUnread: true,
    },
    {
      id: 4,
      author: {
        fullName: "Rizky Hasanuddin",
        src: rizkyHassanAvatar,
        profileLink: "#",
      },
      notification: "sent you a private message",
      timestamp: "5 days ago",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      isUnread: false,
    },
    {
      id: 5,
      author: {
        fullName: "Kimberly Smith",
        src: kimberlySmitheAvatar,
        profileLink: "#",
      },
      notification: "commented on your picture",
      image: {
        img: chessAvatar,
        url: "#",
      },
      timestamp: "1 week ago",
      isUnread: false,
    },
    {
      id: 6,
      author: {
        fullName: "Nathan Peterson",
        src: nathanPetersonAvatar,
        profileLink: "#",
      },
      notification: "reacted to your recent post",
      groupLink: {
        text: "5 end-game strategies to increase your win rate",
        url: "#",
      },
      timestamp: "2 week ago",
      isUnread: false,
    },
    {
      id: 7,
      author: {
        fullName: "Anna Kim",
        src: annaKimAvatar,
        profileLink: "#",
      },
      notification: "left the group",
      groupLink: {
        text: "Chess Club",
        url: "#",
      },
      timestamp: "2 week ago",
      isUnread: false,
    },
  ]);
  function markAllUnread() {
    setNotifications((prev) => prev.map((n) => ({ ...n, isUnread: false })));
  }

  function handleNotificationClick(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isUnread: false } : n))
    );
  }

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="title">
            <h1>notification</h1>
            <span className="badge">
              {notifications.filter((n) => n.isUnread).length}
            </span>
          </div>
          <button id="mark" onClick={markAllUnread}>
            Mark all as read
          </button>
        </header>
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`notification ${n.isUnread ? "read" : "unread"}`}
          >
            <div className="notification-avatar">
              <a href={n.author.profileLink}>
                <img src={n.author.src} alt={n.author.fullName} />
              </a>
            </div>
            <div className="notification-content">
              <p>
                <a href={n.author.profileLink}>{n.author.fullName}</a>{" "}
                <span>{n.notification}</span>
                {n.postLink && (
                  <>
                    {" "}
                    <a href={n.postLink.url}>{n.postLink.text}</a>
                  </>
                )}
                {n.groupLink && (
                  <>
                    {" "}
                    <a href={n.groupLink.url}>{n.groupLink.text}</a>
                  </>
                )}
              </p>
              <p className="timestamp">{n.timestamp}</p>
              {n.privateMessage && (
                <div className="private-message">
                  <p>{n.privateMessage}</p>
                </div>
              )}
              {n.image && (
                <div className="notification-image">
                  <a href={n.image.url}>
                    <img src={n.image.img} alt="Notification" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
