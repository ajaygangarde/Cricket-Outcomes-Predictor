import { TimingType } from "../configs/constant"

type IProps = {
    timings: string[],
    selectedTiming: string,
    handleTimingChange: (value: TimingType) => void;
}
export const Timings = ({ timings, selectedTiming, handleTimingChange }: IProps) => {
    return (
        <>
            <select className="select-style full-width-select" value={selectedTiming} onChange={(event) => handleTimingChange(event.target.value as TimingType)}>
                <option value="">Select Timing</option>
                {timings.map(Timing => (
                    <option key={Timing} value={Timing}>{Timing}</option>
                ))}
            </select>
        </>

    )
}
