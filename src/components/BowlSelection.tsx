import { BowlType } from "../configs/constant"
import * as React from "react";

type IProps = {
    index: number,
    deliveries: string[],
    selectedDelivery: string,
    handleDeliveryChange: (value: BowlType) => void;
}
export const BowlSelection = ({ index, deliveries, selectedDelivery, handleDeliveryChange }: IProps) => {
    return (
        <>
            <select data-testid={`bowl-select-${index}`} className="select-style full-width-select" value={selectedDelivery} onChange={(event) => handleDeliveryChange(event.target.value as BowlType)}>
                <option value="">Select Delivery</option>
                {deliveries.map(delivery => (
                    <option data-testid={`bowl-select-option-${delivery}`} key={delivery} value={delivery}>{delivery}</option>
                ))}
            </select>
        </>

    )
}
