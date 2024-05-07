import * as React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { BowlSelection } from './../components/BowlSelection';
import { BowlTypes } from "../configs/constant";

describe('BowlSelection Component', () => {
    const mockHandleDeliveryChange = jest.fn();
    const deliveries = BowlTypes

    beforeEach(() => {
        render(
            <BowlSelection
                index={0}
                deliveries={deliveries}
                selectedDelivery="Bouncer"
                handleDeliveryChange={mockHandleDeliveryChange}
            />
        );
    });

    it('renders correctly with initial props', () => {
        const selectElement = screen.getByTestId('bowl-select-0');
        expect(selectElement).toHaveValue('Bouncer');
    });

    it('renders all delivery options provided', () => {
        deliveries.forEach(delivery => {
            expect(screen.getByTestId(`bowl-select-option-${delivery}`)).toBeInTheDocument();
        });
    });

    it('Validate the Bowling Change reflect as value in UI', () => {
        const selectElement = screen.getByTestId('bowl-select-0');
        fireEvent.change(selectElement, { target: { value: 'Outswinger' } });
        expect(mockHandleDeliveryChange).toHaveBeenCalledWith('Outswinger');
    });
});
