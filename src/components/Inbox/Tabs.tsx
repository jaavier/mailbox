import tabs from "../../config/tabs";
import Tab from "./Tab";

export default function Tabs() {
  return (
    <div className="grid grid-cols-4">
      {tabs.map((tab: Tab, index: number) => (
        <Tab {...tab} key={index} />
      ))}
    </div>
  );
}