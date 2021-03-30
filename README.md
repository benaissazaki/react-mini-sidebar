# mini-sidebar

> Responsive React Sidebar component that shows only navigation icons when collapsed.

[![NPM](https://img.shields.io/npm/v/mini-sidebar.svg)](https://www.npmjs.com/package/mini-sidebar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
    <MiniSidebar>
      <MiniSidebarHeader>
        Header example
      </MiniSidebarHeader>

      <MiniSidebarNavigation>
        <MiniSidebarNavigationItem>
          <MiniSidebarNavigationIcon>
            {/* Image or SVG icon */}
          </MiniSidebarNavigationIcon>
          <MiniSidebarNavigationLabel>
            Menu label
          </MiniSidebarNavigationLabel>
        </MiniSidebarNavigationItem>
      </MiniSidebarNavigation>
    </MiniSidebar>
  )
}
```

## `<MiniSidebar>` Props

`collapseOnMd`: The sidebar can collapse on screens wider than 768px (default: false)  
`withOverlay`: A black overlay appears on the rest of the screen when the sidebar extends (default: true)
`expandOnHover`: By default the sidebar expands when clicking on the arrow button at its bottom. This prop makes it expand when hovering on it.

## License

MIT © [lilxak](https://github.com/lilxak)
