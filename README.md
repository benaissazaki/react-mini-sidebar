# react-mini-sidebar

> Responsive React Sidebar component that shows only navigation icons when collapsed.

[![NPM](https://img.shields.io/npm/v/react-mini-sidebar.svg)](https://www.npmjs.com/package/react-mini-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mini-sidebar
```
or  
```bash
yarn add react-mini-sidebar
```
## Usage

```jsx
import {  MiniSidebar, 
          MiniSidebarHeader, 
          MiniSidebarNavigation, 
          MiniSidebarNavigationIcon, 
          MiniSidebarNavigationitem, 
          MiniSidebarNavigationLabel } from 'react-mini-sidebar'

const Navigation = (props) => {
  return (
    <MiniSidebar props={value}>
      <MiniSidebarHeader>
        Header example
      </MiniSidebarHeader>

      <MiniSidebarNavigation>
        <a href="optionalLink" className='active'>
          <MiniSidebarNavigationItem>
            <MiniSidebarNavigationIcon>
              {/* Image or SVG icon */}
            </MiniSidebarNavigationIcon>
            <MiniSidebarNavigationLabel>
              Menu label
            </MiniSidebarNavigationLabel>
          </MiniSidebarNavigationItem>
        </a>
        <a href="optionalLink2">
          <MiniSidebarNavigationItem>
            <MiniSidebarNavigationIcon>
              {/* Image or SVG icon */}
            </MiniSidebarNavigationIcon>
            <MiniSidebarNavigationLabel>
              Menu label
            </MiniSidebarNavigationLabel>
          </MiniSidebarNavigationItem>
        </a>

      </MiniSidebarNavigation>
    </MiniSidebar>
  )
}
```

## `<MiniSidebar>` Props

`collapseOnMd (boolean)`: The sidebar can collapse on screens wider than 768px (default: false)  
`withOverlay (boolean)`: A black overlay appears on the rest of the screen when the sidebar extends (default: true)
`expandOnHover (boolean)`: By default the sidebar expands when clicking on the arrow button at its bottom. This prop makes it expand when hovering on it.
`bgColor (string)`: The sidebar's background color (default: 'white').
`btnColor (string)`: The collapse button's color (default: 'black').
`width (integer)`: The expanded sidebar's width in px (default: 250).
`collapsedWidth (integer)`: The collapsed sidebar's width in px (default: 100).
`iconContainerWidth (integer)`: The icon container's width in px (default: 50).

## `<MiniSidebarHeader>` Props

`color (string)`: Header's text color (default: 'black').

## `<MiniSidebarNavigationIcon>` Props

`fillColor (string)`: The icon's color (works only with some SVGs) (default: 'black').

## `<MiniSidebarNavigationItem>` Props

`color (string)`: Navigation item's text color (default: 'black');

## License

MIT © [lilxak](https://github.com/lilxak)
