import { useState } from "react";
import Header from "../components/layout/Header";
import MainContent from "../components/layout/MainContent";
import Sidebar from "../components/layout/Sidebar";
import { bookmarks } from "../data/bookmarks";

export default function DashboardPage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");

  return (
    <div className="flex h-screen">
      <div className="w-64 h-screen overflow-y-auto">
        <Sidebar
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
          bookmarks={bookmarks}
        />
      </div>
      <div className="flex-1 flex flex-col ">
        <Header />
        <div className="flex-1 overflow-y-auto">
          <MainContent selectedCategoryId={selectedCategoryId} />
        </div>
      </div>
    </div>
  );
}
