import { useEffect, useState } from "react"
import { cricketData, IOutcomeTypes } from "../configs/constant"
import { IOutcomeFields } from "../types/types"
import { extractNumberFromString } from "../utils/extractNumberFromString"
import { isWicket } from "../utils/isWicket"
import isEqual from "react-fast-compare"

interface IEvaluateOutcome {
    outcomes: IOutcomeTypes[];
    wicketCount: number;
    runTotal: number;
}
export const useEvaluateOutcome = (rows: IOutcomeFields[]) => {

    const [data, setData] = useState<IEvaluateOutcome>({
        outcomes: [],
        wicketCount: 0,
        runTotal: 0
    });

    useEffect(() => {
        const collectedOutcomes: IOutcomeTypes[] = [];
        let totalRuns = 0;
        let totalWickets = 0;

        rows.forEach(element => {
            const { delivery, shot, timing } = element;
            if (delivery && shot && timing) {
                const outcome = cricketData[delivery][shot]['outcomes'][timing];
                collectedOutcomes.push(outcome);

                if (!isWicket(outcome.output)) {
                    totalRuns += extractNumberFromString(outcome.output);
                } else {
                    totalWickets++;
                }
            }
        });

        // Check if the newly calculated values are different from the current state
        if (!isEqual(data.outcomes, collectedOutcomes) ||
            data.wicketCount !== totalWickets ||
            data.runTotal !== totalRuns) {
            setData({
                outcomes: collectedOutcomes,
                wicketCount: totalWickets,
                runTotal: totalRuns
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rows]); // Depend only on rows

    return data;
};


