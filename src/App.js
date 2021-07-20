import { useState } from "react";
import { MenuPage } from "./pages/MenuPage";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  return (
    <div>
      <MenuPage menuItems={menuItems} setMenuItems={setMenuItems} />
    </div>
  );
}

export default App;
