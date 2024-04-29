import { useEffect, useState } from "react";
import { BowlType, BowlTypes, cricketData, IOutcomeTypes, ShotType, ShotTypes, TimingType, TimingTypes } from "../configs/constant";
import { BowlSelection } from "./BowlSelection";
import { Outcomes } from "./Outcomes";
import { ShotSelection } from "./ShotSelection";
import { Timings } from "./Timings";

interface Iprops {
    deliveries: string[],
    shots: string[],
    timings: string[]
}


export const BasicCricketOutcomes = ({ deliveries, shots, timings }: Iprops) => {
    const [selectedDelivery, handleDeliveryChange] = useState<BowlType>('');
    const [selectedShot, handleShotChange] = useState<ShotType | ''>('');
    const [selectedTiming, handleTimingChange] = useState<TimingType | ''>('');
    const [outcomes, setOutcomes] = useState<IOutcomeTypes[]>([])

    useEffect(() => {
        const isExecute = selectedDelivery && selectedShot && selectedTiming

        if (isExecute) {
            const outcomes = cricketData[selectedDelivery][selectedShot]['outcomes'][selectedTiming];
            // console.log("OUTCOME DATA", outcomes);
            setOutcomes([outcomes])
        }

    }, [selectedTiming, selectedDelivery,
        selectedShot])
    return (
        <>
            <div className="card">
                <BowlSelection deliveries={deliveries}
                    selectedDelivery={selectedDelivery}
                    handleDeliveryChange={handleDeliveryChange} />
                {selectedDelivery && <ShotSelection shots={shots}
                    selectedShot={selectedShot}
                    handleShotChange={handleShotChange} />
                }
                {selectedShot &&
                    <Timings timings={timings}
                        selectedTiming={selectedTiming}
                        handleTimingChange={handleTimingChange} />
                }
            </div>
            <div className="container row">
                {outcomes &&
                    <Outcomes outcomes={outcomes} />
                }
            </div>

        </>

    )
}