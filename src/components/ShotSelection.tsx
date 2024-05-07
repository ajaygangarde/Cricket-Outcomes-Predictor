import { ShotType } from "../configs/constant"
import * as React from "react";

type IProps = {
    index: number,
    shots: string[],
    selectedShot: string,
    handleShotChange: (value: ShotType) => void;
}
export const ShotSelection = ({ index, shots, selectedShot, handleShotChange }: IProps) => {
    return (
        <>
            <select data-testid={`shot-select-${index}`} className="select-style full-width-select" value={selectedShot} onChange={(event) => handleShotChange(event.target.value as ShotType)}>
                <option value="">Select Shot</option>
                {shots.map(Shot => (
                    <option data-testid={`shot-select-option-${Shot}`} key={Shot} value={Shot}>{Shot}</option>
                ))}
            </select>
        </>

    )
}
