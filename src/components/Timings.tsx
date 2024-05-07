import { TimingType } from "../configs/constant"
import * as React from "react";

type IProps = {
    index: number,
    timings: string[],
    selectedTiming: string,
    handleTimingChange: (value: TimingType) => void;
}
export const Timings = ({ index, timings, selectedTiming, handleTimingChange }: IProps) => {
    return (
        <>
            <select data-testid={`timing-select-${index}`} className="select-style full-width-select" value={selectedTiming} onChange={(event) => handleTimingChange(event.target.value as TimingType)}>
                <option value="">Select Timing</option>
                {timings.map(Timing => (
                    <option data-testid={`timing-select-option-${Timing}`} key={Timing} value={Timing}>{Timing}</option>
                ))}
            </select>
        </>

    )
}
