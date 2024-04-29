import { ShotType } from "../configs/constant"

type IProps = {
    shots: string[],
    selectedShot: string,
    handleShotChange: (value: ShotType) => void;
}
export const ShotSelection = ({ shots, selectedShot, handleShotChange }: IProps) => {
    return (
        <>
            <select className="select-style full-width-select" value={selectedShot} onChange={(event) => handleShotChange(event.target.value as ShotType)}>
                <option value="">Select Shot</option>
                {shots.map(Shot => (
                    <option key={Shot} value={Shot}>{Shot}</option>
                ))}
            </select>
        </>

    )
}
