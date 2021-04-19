import React, { useState } from 'react'

import { MiniSidebar, MiniSidebarHeader, MiniSidebarNavigation, MiniSidebarNavigationIcon, MiniSidebarNavigationitem, MiniSidebarNavigationLabel } from 'react-mini-sidebar'

const App = () => {
  const [collapseOnMd, setCollapseOnMd] = useState(false)
  const [withOverlay, setWithOverlay] = useState(false)
  const [expandOnHover, setExtendOnhover] = useState(false)

  return (
    <>
      <MiniSidebar bgColor="#0747a6" btnColor="white" collapseOnMd={collapseOnMd} withOverlay={withOverlay} expandOnHover={expandOnHover} width={200} collapsedWidth={70} collapseSpeed={0.2}>
        <MiniSidebarHeader>
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 18.178l4.62-1.256.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866-2.52.667-2.52-.667-.158-1.844h-2.27l.329 3.544L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z" /></svg>
        </MiniSidebarHeader>
        <MiniSidebarNavigation>
          <a href="/">
            <MiniSidebarNavigationitem color="white">
              <MiniSidebarNavigationIcon fillColor="white">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" enable-background="new 0 0 129 129">
                  <g>
                    <path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z" />
                  </g>
                </svg>
              </MiniSidebarNavigationIcon>
              <MiniSidebarNavigationLabel>
                Search
              </MiniSidebarNavigationLabel>
            </MiniSidebarNavigationitem>
          </a>

          <MiniSidebarNavigationitem color="white" hoverColor="rgba(255, 255, 255, 0.1)">
            <MiniSidebarNavigationIcon fillColor="white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="#fff" /></svg>
            </MiniSidebarNavigationIcon>
            <MiniSidebarNavigationLabel>
              Add
          </MiniSidebarNavigationLabel>
          </MiniSidebarNavigationitem>

          <MiniSidebarNavigationitem color="white" hoverColor="rgba(255, 255, 255, 0.1)">
            <MiniSidebarNavigationIcon fillColor="white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
            </MiniSidebarNavigationIcon>
            <MiniSidebarNavigationLabel>
              Awards
          </MiniSidebarNavigationLabel>
          </MiniSidebarNavigationitem>
        </MiniSidebarNavigation>
      </MiniSidebar>
      <div style={{ marginLeft: "30%", marginTop: "250px" }}>
        <label htmlFor="collapse">Collapse sidebar on big screens:</label>
        <input type="checkbox" onChange={e => setCollapseOnMd(!collapseOnMd)} /> <br />

        <label htmlFor="overlay">Activate overlay:</label>
        <input id="overlay" type="checkbox" onChange={e => setWithOverlay(!withOverlay)} /> <br />

        <label htmlFor="hover">Extend and collapse by hovering (big screen only):</label>
        <input id="hover" type="checkbox" onChange={e => setExtendOnhover(!expandOnHover)} /> <br />
      </div>
    </>
  )
}

export default App
