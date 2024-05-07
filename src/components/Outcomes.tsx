import * as React from "react";
import { IOutcomeTypes } from "../configs/constant"
import { getRandomCommentary } from "../utils/getRandomCommentary";

type IProps = {
    outcomes: IOutcomeTypes[],
}
export const OutcomesMemo = ({ outcomes }: IProps) => {
    return (
        <>
            <ul className="outcome-lists" data-testid="outcome-lists-item">
                {outcomes && outcomes.map((outcome, index) => (
                    <li className="outcome-result" key={`${index}"-"${outcome.output.replace(' ', '')}`}>{getRandomCommentary(outcome.commentary)} - {outcome.output}</li>
                ))}
            </ul>
        </>

    )
}
export const Outcomes = React.memo(OutcomesMemo)
