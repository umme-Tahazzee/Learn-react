import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import './App.css'
import PostListProvider from "../store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTap] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTap={setSelectedTap} />
        <div className="content">
          <Header />  
          <Outlet></Outlet>       
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
