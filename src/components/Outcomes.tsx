import * as React from "react";
import { IOutcomeTypes } from "../configs/constant"
import { getRandomCommentary } from "../utils/getRandomCommentary";

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
