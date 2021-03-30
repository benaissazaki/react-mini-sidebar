import { MiniSidebar } from '../MiniSidebar'
import { screen, fireEvent, getByText, render } from '@testing-library/react';
import React from 'react';

describe('MiniSidebar with collapseOnMd', () => {
    it('renders correctly', () => {
        render(<MiniSidebar></MiniSidebar>)
    })

    it("activates overlay when expanded and desactivates when collapsed", () => {
        const overlay = render(<MiniSidebar collapseOnMd={true}></MiniSidebar>).container.firstChild
        expect(overlay.classList.contains('overlay')).toBe(true)                // Make sure it has the 'overlay' class

        fireEvent.click(screen.getByText('→'))
        expect(overlay.classList.contains('active_md')).toBe(true)              // Check if the overlay is active after clicking the button

        fireEvent.click(screen.getByText('→'))
        expect(overlay.classList.contains('active_md')).toBe(false)             // Check if the overlay is inactive after clicking the button again
    })

    it("expands and collapses when button clicked", () => {
        const sidebar = render(<MiniSidebar collapseOnMd={true}></MiniSidebar>).container.lastChild
        expect(sidebar.classList.contains('sidebar_collapsable_md')).toBe(true)                     // Make sure it has the 'sidebar_collapsable_md' class

        fireEvent.click(screen.getByText('→'))
        expect(sidebar.classList.contains('expanded_md')).toBe(true)                                // Check if the sidebar is expanded after clicking the button

        fireEvent.click(screen.getByText('→'))
        expect(sidebar.classList.contains('expanded_md')).toBe(false)                               // Check if the sidebar is collapsed after clicking the button again
    })
})