import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import HubIcon from "@mui/icons-material/Hub";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";

export default function Menu() {
  const navigate = useNavigate();
  const [selectedSection] = useState(location.pathname);

  const onClick = (section) => {
    if (section === "connect") {
      navigate(`/${section}`);
    }
  };

  return (
    <div className="menu">
      <header>
        <div className="banner" />
        <div className="game-points">
          <EmojiEventsIcon />
          <div className="points-container">
            <div className="points-counter">60/100</div>
            <div className="points-bar">
              <div className="points" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </header>
      <nav>
        <button
          type="button"
          onClick={() => onClick("home")}
          className={`nav-btn ${
            selectedSection === "/home" ? "selected-section" : "not-selected"
          }`}
        >
          <HomeIcon />
          Home
        </button>
        <button
          type="button"
          onClick={() => onClick("members")}
          className={`nav-btn ${
            selectedSection === "members" ? "selected-section" : "not-selected"
          }`}
        >
          <PersonIcon />
          Membros
        </button>
        <button
          type="button"
          onClick={() => onClick("game")}
          className={`nav-btn ${
            selectedSection === "game" ? "selected-section" : "not-selected"
          }`}
        >
          <SportsEsportsIcon />
          Gamificação
        </button>
        <button
          type="button"
          onClick={() => onClick("connect")}
          className={`nav-btn ${
            selectedSection === "/connect" ? "selected-section" : "not-selected"
          }`}
        >
          <HubIcon />
          Conexões
        </button>
        <button
          type="button"
          onClick={() => onClick("adm")}
          className={`nav-btn ${
            selectedSection === "adm" ? "selected-section" : "not-selected"
          }`}
        >
          <SettingsIcon />
          Administração
        </button>
        <button
          type="button"
          onClick={() => onClick("invite")}
          className={`nav-btn ${
            selectedSection === "invite" ? "selected-section" : "not-selected"
          }`}
        >
          <ShortcutIcon />
          Convide Membros
        </button>
      </nav>
    </div>
  );
}
