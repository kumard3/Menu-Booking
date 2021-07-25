
import Drawer from "react-bottom-drawer";







import React from 'react'

const DrawerDottom = ( {menuItems, setMenuItems} ) => {
    const [isVisible, setIsVisible] = React.useState(true);
    const openDrawer = React.useCallback(() => setIsVisible(true), []);
    const closeDrawer = React.useCallback(() => setIsVisible(false), []);
    return (
        <div>



        <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
      {menuItems.map((menu) => {
        return (
          <div>
            <h1>{menu.id}</h1>
            <h1>{menu.name}</h1>
          </div>
        );
      })}
      </Drawer>
            
        </div>
    )
}

export default Drawer
