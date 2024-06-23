import MainContent from "@/components/mainContent";
import NavigationBar from "@/components/navigationBar";
import Sidebar from "@/components/sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-white border-b">
          <NavigationBar />
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
