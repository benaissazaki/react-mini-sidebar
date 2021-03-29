import React from 'react'

import { MiniSidebar, MiniSidebarHeader, MiniSidebarNavigation, MiniSidebarNavigationIcon, MiniSidebarNavigationitem, MiniSidebarNavigationLabel } from 'mini-sidebar'
import 'mini-sidebar/dist/index.css'

const App = () => {
  return (
    <MiniSidebar>
      <MiniSidebarHeader>
        Test
      </MiniSidebarHeader>
      <MiniSidebarNavigation>
        <MiniSidebarNavigationitem>
          <MiniSidebarNavigationIcon>
            <img src="/favicon.ico" alt="altt"/>
          </MiniSidebarNavigationIcon>
          <MiniSidebarNavigationLabel>
            Test
          </MiniSidebarNavigationLabel>
        </MiniSidebarNavigationitem>
      </MiniSidebarNavigation>
    </MiniSidebar>
  )
}

export default App
