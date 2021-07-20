import { useState } from "react";
import { MenuPage } from "./pages/MenuPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [menuItems1, setMenuItems1] = useState([]);
  const [menuItems2, setMenuItems2] = useState([]);
  const [menuItems3, setMenuItems3] = useState([]);
  const [menuItems4, setMenuItems4] = useState([]);

  return (
    <div>
      <Router>
        <Route path="/table1">
          <MenuPage
            table={1}
            menuItems={menuItems1}
            setMenuItems={setMenuItems1}
          />
        </Route>
        <Route path="/table2">
          <MenuPage
            table={2}
            menuItems={menuItems2}
            setMenuItems={setMenuItems2}
          />
        </Route>
        <Route path="/table3">
          <MenuPage
            table={3}
            menuItems={menuItems3}
            setMenuItems={setMenuItems3}
          />
        </Route>
        <Route path="/table4">
          <MenuPage
            table={4}
            menuItems={menuItems4}
            setMenuItems={setMenuItems4}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
