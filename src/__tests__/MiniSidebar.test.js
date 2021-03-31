import { MiniSidebar } from '../MiniSidebar'
import { screen, fireEvent, render } from '@testing-library/react'
import React from 'react'

describe('MiniSidebar', () => {
  it('renders correctly', () => {
    expect(render(<MiniSidebar />)).toBeTruthy()
  })

  it('activates overlay when expanded and desactivates when collapsed (collapseOnMd=true, withOverlay=true, expandOnHover=false)', () => {
    const overlay = render(<MiniSidebar collapseOnMd />).container.firstChild
    expect(overlay.classList.contains('overlay')).toBe(true) // Make sure it has the 'overlay' class

    fireEvent.click(screen.getByText('→'))
    expect(overlay.classList.contains('active_md')).toBe(true) // Check if the overlay is active after clicking the button

    fireEvent.click(screen.getByText('→'))
    expect(overlay.classList.contains('active_md')).toBe(false) // Check if the overlay is inactive after clicking the button again
  })

  it('doesn\'t activate overlay when expanded (collapseOnMd=true, withOverlay=false, expandOnHover=false)', () => {
    const overlay = render(<MiniSidebar collapseOnMd withOverlay={false} />).container.firstChild
    expect(overlay.classList.contains('overlay')).toBe(true) // Make sure it has the 'overlay' class

    fireEvent.click(screen.getByText('→'))
    expect(overlay.classList.contains('active_md')).toBe(false) // Check if the overlay is active after clicking the button

    fireEvent.click(screen.getByText('→'))
    expect(overlay.classList.contains('active_md')).toBe(false) // Check if the overlay is inactive after clicking the button again
  })

  it('expands and collapses when button clicked (collapseOnMd=true, expandOnHover=false)', () => {
    const sidebar = render(<MiniSidebar collapseOnMd />).container.lastChild
    expect(sidebar.classList.contains('sidebar_collapsable_md')).toBe(true) // Make sure it has the 'sidebar_collapsable_md' class

    fireEvent.click(screen.getByText('→'))
    expect(sidebar.classList.contains('expanded_md')).toBe(true) // Check if the sidebar is expanded after clicking the button

    fireEvent.click(screen.getByText('→'))
    expect(sidebar.classList.contains('expanded_md')).toBe(false) // Check if the sidebar is collapsed after clicking the button again
  })

  it('expands and collapses when hovered (collapseOnMd=true, expandOnHover=true)', () => {
    const sidebar = render(<MiniSidebar collapseOnMd expandOnHover />).container.lastChild
    expect(sidebar.classList.contains('sidebar_collapsable_md')).toBe(true) // Make sure it has the 'sidebar_collapsable_md' class

    fireEvent.mouseEnter(sidebar)
    expect(sidebar.classList.contains('expanded_md')).toBe(true) // Check if the sidebar is expanded after clicking the button

    fireEvent.mouseLeave(sidebar)
    expect(sidebar.classList.contains('expanded_md')).toBe(false) // Check if the sidebar is collapsed after clicking the button again
  })
})
