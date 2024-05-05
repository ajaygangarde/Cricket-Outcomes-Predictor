import * as React from "react";
import { useEvaluateOutcome } from '../hooks/useEvaluateOutcome';
import { useEvaluateWinOrLoss } from '../hooks/useEvaluateWinOrLoss';
import { useSetOutcomeFields } from '../hooks/useSetOutcomeFields';
import { BowlSelection } from './BowlSelection';
import { Outcomes } from './Outcomes';
import { ShotSelection } from './ShotSelection';
import { Timings } from './Timings';

interface Iprops {
    deliveries: string[],
    shots: string[],
    timings: string[]
}


export const SuperOverOutcomes = ({ deliveries, shots, timings }: Iprops) => {

    const { handleDeliveryChange,
        handleShotChange,
        handleTimingChange,
        addMore,
        bowlCount, rows } = useSetOutcomeFields();
    const { outcomes,
        wicketCount,
        runTotal } = useEvaluateOutcome(rows)
    const { winOrLossMatch } = useEvaluateWinOrLoss(wicketCount, runTotal, rows)


    return (
        <div className="multi-select-component">
            {rows.map((row, index) => (
                <div key={index} className="card">
                    <BowlSelection
                        deliveries={deliveries}
                        selectedDelivery={row.delivery}
                        handleDeliveryChange={(value) => handleDeliveryChange(index, value)}
                    />
                    <ShotSelection
                        shots={shots}
                        selectedShot={row.shot}
                        handleShotChange={(value) => handleShotChange(index, value)}
                    />
                    <Timings
                        timings={timings}
                        selectedTiming={row.timing}
                        handleTimingChange={(value) => handleTimingChange(index, value)}
                    />
                </div>
            ))}
            <button onClick={addMore}>Deliver Bowl -  {bowlCount}</button>
            <div className="container row">
                <Outcomes outcomes={outcomes} />
            </div>
            {winOrLossMatch && <span className="outcome-result">Match Result : {winOrLossMatch}</span>}
        </div>
    );
}
