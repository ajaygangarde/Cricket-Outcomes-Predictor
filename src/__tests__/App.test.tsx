import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "../App"
import * as React from "react";


describe("Renders App Component", () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText(/Cricket Outcomes Predictor/i)).toBeInTheDocument();
    });

    it('Validate App component has three child component Delivery, Shot and outcome', () => {
        render(<App />);
        const delivery = screen.getByText(/Select Delivery/i);
        const shotShot = screen.getByText(/Select Shot/i);
        const shotTiming = screen.getByText(/Select Timing/i);
        expect(delivery).toBeVisible();
        expect(shotShot).toBeVisible();
        expect(shotTiming).toBeVisible();
    });

})






