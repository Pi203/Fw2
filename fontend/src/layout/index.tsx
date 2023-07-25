import React from "react";
import { Layout, Typography, Row, Col, Card, Space, Button } from "antd";
import { Link } from "react-router-dom";
import { clearLocalStorage, getProfileFromLS } from "../utils";
import { User } from "../interfaces/auth.type";




export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profile, setProfile] = React.useState<{
    accessToken: string;
    user: User;
  } | null>(getProfileFromLS());

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ backgroundColor: "#fff", color: "#000" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img src="logo.png" alt="Logo" style={{ height: "40px" }} />
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {profile?.user.role === "admin" && (
            <Link to="/admin">
              <button style={{ background: "none", border: "none" }}>
                Admin
              </button>
            </Link>
          )}
          {!profile?.accessToken ? (
            <div style={{ display: "flex" }}>
              <Link to="/signin">
                <button style={{ background: "none", border: "none" }}>
                  Đăng nhập
                </button>
              </Link>
              <Link to="/signup">
                <button style={{ background: "none", border: "none" }}>
                  Đăng kí
                </button>
              </Link>
            </div>
          ) : (
            <button
              onClick={() => {
                clearLocalStorage();
                setProfile(null);
              }}
              style={{ background: "none", border: "none" }}
            >
              Đăng xuất
            </button>
          )}
        </div>
      </header>
    
      <main style={{ paddingTop: "40px", paddingBottom: "40px", backgroundColor: "#fff" }}>{children}</main>
      <footer>
        <h5>footer</h5>
      </footer>
    </div>
  );
}