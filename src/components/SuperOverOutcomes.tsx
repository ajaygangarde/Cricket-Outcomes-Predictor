import { useEffect, useMemo, useState } from 'react';
import { cricketData, IOutcomeTypes, TARGET_SCORE_FOR_WINNING, WICKET_IN_HAND } from '../configs/constant';
import { extractNumberFromString } from '../utils/extractNumberFromString';
import { isWicket } from '../utils/isWicket';
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
    const [rows, setRows] = useState([{ delivery: '', shot: '', timing: '' }]);
    const [outcomes, setOutcomes] = useState<IOutcomeTypes[]>([])
    const [bowlCount, setBowlCount] = useState<number>(2);
    const [wicketCount, setWicketCount] = useState<number>(0)
    const [runTotal, setRunTotal] = useState<number>(0)
    const [winOrLossMatch, setWinOrLossMatch] = useState<string>('')
    const handleDeliveryChange = (index: number, value: string) => {
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                return { ...row, delivery: value, shot: '', timing: '' }; // Reset shot and timing if delivery changes
            }
            return row;
        });
        setRows(updatedRows);
    };

    const handleShotChange = (index: number, value: string) => {
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                return { ...row, shot: value, timing: '' }; // Reset timing if shot changes
            }
            return row;
        });
        setRows(updatedRows);
    };

    const handleTimingChange = (index: number, value: string) => {
        const updatedRows = rows.map((row, i) => {
            if (i === index) {
                return { ...row, timing: value };
            }
            return row;
        });
        setRows(updatedRows);
    };

    const addMore = () => {
        if (rows.length < 6) {
            setRows([...rows, { delivery: '', shot: '', timing: '' }]);
            setBowlCount((pre) => (pre + 1))
        }
    };


    useEffect(() => {
        const collectedOutcomes: IOutcomeTypes[] = []
        let runTotalValue: number = 0
        let wicketTotal: number = 0
        rows.forEach(element => {
            const isExecute = element.delivery && element.shot && element.timing
            if (isExecute) {
                const outcomes = cricketData[element.delivery][element.shot]['outcomes'][element.timing];
                collectedOutcomes.push(outcomes)
                // if No Wicker then only you will calculate bowl runs
                if (!isWicket(outcomes.output)) {
                    // store the total run count to check with the target that want to achieve in super over
                    const runs = extractNumberFromString(outcomes.output);
                    runTotalValue = runTotalValue + runs
                } else {
                    // increase the count of wicket if it reachecs to target wicket to make other team lose.
                    wicketTotal = wicketTotal + 1
                }
            }
        });
        // console.log("OUTCOME DATA Sup", collectedOutcomes);
        setRunTotal(runTotalValue)
        setWicketCount(wicketTotal)
        setOutcomes(collectedOutcomes)

    }, [rows])

    useEffect(() => {
        if (wicketCount >= WICKET_IN_HAND) {
            setWinOrLossMatch("All Out, India Lost the Match. ")
        } else if (runTotal > TARGET_SCORE_FOR_WINNING) {
            setWinOrLossMatch("congratulation India Won the Match")
        } else if (rows.length === 6 && runTotal < TARGET_SCORE_FOR_WINNING) {
            setWinOrLossMatch("India Lost the Match")
        }
    }, [runTotal, wicketCount])

    // const checkAllPropertiesHaveValues = useMemo(() => {
    //     return rows.every((obj: any) => {
    //         // Get all values of the object properties
    //         const values = Object.values(obj);
    //         // Check if every value is truthy (not empty, not null, not undefined, not false)
    //         return values.every(value => value !== "" && value != null);
    //     });
    // }, [rows])

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
