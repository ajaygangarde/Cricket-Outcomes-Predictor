import * as React from "react";
import { IOutcomeTypes } from "../configs/constant"
const memoValue = {} as any
function getRandomCommentary(commentary: string[]) {

    if (commentary.length === 0) {
        throw new Error('The array cannot be empty.');
    }

    const randomIndex = Math.floor(Math.random() * commentary.length);
    const randomValue = commentary[randomIndex];
    memoValue[randomIndex] = randomValue
    return randomValue;
}

type IProps = {
    outcomes: IOutcomeTypes[],
}
export const OutcomesMemo = ({ outcomes }: IProps) => {

    return (
        <>
            <ul className="outcome-lists" >
                {outcomes && outcomes.map((outcome,) => (
                    <li className="outcome-result">{getRandomCommentary(outcome.commentary)} - {outcome.output}</li>
                ))}
            </ul>
        </>

    )
}
export const Outcomes = React.memo(OutcomesMemo)
