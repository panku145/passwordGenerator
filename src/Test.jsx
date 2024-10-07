import React from 'react'

const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test

import React, { useState } from "react";

const HorizontalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-row">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${
            activeTab === tab.id
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-l focus:outline-none`}
          onClick={() => handleClick(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

// Example usage
const MyComponent = () => {
  const tabs = [
    { id: 1, title: "Tab 1" },
    { id: 2, title: "Tab 2" },
    { id: 3, title: "Tab 3" },
  ];

  return (
    <div>
      <h1>Horizontal Tabs Example</h1>
      <HorizontalTabs tabs={tabs} />
    </div>
  );
};

export default MyComponent;
