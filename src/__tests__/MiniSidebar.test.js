import { MiniSidebar } from '../MiniSidebar'
import { screen, fireEvent, getByText, render } from '@testing-library/react';
import React from 'react';

describe('MiniSidebar', () => {
    it('Renders correctly', () => {
        render(<MiniSidebar></MiniSidebar>)
    })

    it("expands when button clicked", () => {
        const sidebar = render(<MiniSidebar collapseOnMd={true}></MiniSidebar>).container.lastChild
        expect(sidebar.classList.contains("sidebar_collapsable_md")).toBe(true)
        fireEvent.click(screen.getByText('→'))

        expect(sidebar.classList.contains("expanded_md")).toBe(true)
    })
})