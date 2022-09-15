import React from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  AdminPanelSettings,
  EmojiEvents,
  Event,
  EventNote,
  ImportContacts,
} from "@mui/icons-material";

const Sidebar = ({ pageName, setPageName }) => {
  const [role] = React.useState(
    window.sessionStorage.getItem("role")
  );
  console.log(role);
  return (
    <div className="firstCol">
       {role === 'admin'?( 
      <>
        <NavLink
          to="/admin"
          style={{
            textDecoration: "none",
            color: "#6c757d",
          }}
        >
          <ListItemButton
            sx={{ ":hover": { color: "#6610f2" } }}
            onClick={() => setPageName("Admin")}
          >
            <ListItemIcon
              sx={{
                ":hover": { color: "#6610f2" },
                overflow: "hidden",
              }}
            >
              <AdminPanelSettings sx={{ color: "grey" }} />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItemButton>
        </NavLink> 
      </>
      ):null}   
    

      <NavLink
        to="/dashboard"
        style={{
          textDecoration: "none",
          color: "#6c757d",
        }}
      >
        <ListItemButton
          sx={{ ":hover": { color: "#6610f2" } }}
          onClick={() => setPageName("Dashboard")}
        >
          <ListItemIcon sx={{ ":hover": { color: "#6610f2" } }}>
            <EventNote sx={{ color: "grey" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </NavLink>

      <NavLink
        to="/hackathon"
        style={{ textDecoration: "none", color: "#6c757d" }}
      >
        <ListItemButton
          onClick={() => setPageName("Hackathon")}
          sx={{ ":hover": { color: "#6610f2" } }}
        >
          <ListItemIcon sx={{ ":hover": { color: "#6610f2" } }}>
            <EmojiEvents sx={{ color: "grey" }} />
          </ListItemIcon>
          <ListItemText primary="Hackathon" />
        </ListItemButton>
      </NavLink>

      <NavLink
        to="/capstone"
        style={{ textDecoration: "none", color: "#6c757d" }}
      >
        <ListItemButton
          sx={{ ":hover": { color: "#6610f2" } }}
          onClick={() => setPageName("Capstone")}
        >
          <ListItemIcon sx={{ ":hover": { color: "#6610f2" } }}>
            <ImportContacts sx={{ color: "grey" }} />
          </ListItemIcon>
          <ListItemText primary="Capstone" />
        </ListItemButton>
      </NavLink>
    </div>
  );
};

export default Sidebar;
