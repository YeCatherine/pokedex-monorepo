import React from 'react';
import {render, screen} from '@testing-library/react';
import RightSidebar from "./components/Layout/RightSidebar";

describe('Find element by text', () => {
    it('Check for component "Captured"', () => {
        render(<RightSidebar/>);
        const linkElement = screen.getByText(/Captured/i);
        expect(linkElement).toBeInTheDocument();
    });
});
