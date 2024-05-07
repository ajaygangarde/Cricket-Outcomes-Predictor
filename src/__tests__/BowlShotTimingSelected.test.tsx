import * as React from "react";
import { render, screen } from '@testing-library/react';
import { BowlSelection } from './../components/BowlSelection';
import { BowlTypes, ShotTypes, TimingTypes } from "../configs/constant";
import { ShotSelection } from "../components/ShotSelection";
import { Timings } from "../components/Timings";
import { Outcomes } from "../components/Outcomes";

describe('BowlSelection Component', () => {

    const mockHandleDeliveryChange = jest.fn();
    const mockHandleShotChange = jest.fn();
    const mockHandleTimingChange = jest.fn();
    const deliveries = BowlTypes
    const shots = ShotTypes
    const timings = TimingTypes

    beforeEach(() => {
        render(
            <>
                <BowlSelection
                    index={0}
                    deliveries={deliveries}
                    selectedDelivery="Bouncer"
                    handleDeliveryChange={mockHandleDeliveryChange}
                />
                <ShotSelection
                    index={0}
                    shots={shots}
                    selectedShot="Pull"
                    handleShotChange={mockHandleShotChange}
                />
                <Timings
                    index={0}
                    timings={timings}
                    selectedTiming="Perfect"
                    handleTimingChange={mockHandleTimingChange}
                />
            </>

        );
    });

    it('should contain six 6 runs in below area as outcome', () => {
        render(
            <Outcomes
                outcomes={[{
                    output: "6 Runs",
                    commentary: ["Just over the fielder."]
                }]}
            />
        );
        const output = screen.getByText(/6 Runs/i);
        expect(output).toBeVisible();
    });


});
