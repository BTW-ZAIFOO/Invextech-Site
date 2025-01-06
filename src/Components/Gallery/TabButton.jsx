const TabButton = ({ tab, activeTab, setActiveTab }) => {
    return (
      <button
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 text-lg font-medium ${activeTab === tab ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg transition-all duration-200 hover:bg-sky-300`}
      >
        Tab {tab.replace('tab', '')}
      </button>
    );
  };
  
  export default TabButton;
  