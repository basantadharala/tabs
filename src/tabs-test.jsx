import Tabs from "./tabs";
import "./styles.css";

function RandomComponent() {
  return <h1>Some random Content</h1>;
}

export default function TabsTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
