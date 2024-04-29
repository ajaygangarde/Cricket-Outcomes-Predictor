import { BowlType } from "../configs/constant"

type IProps = {
    deliveries: string[],
    selectedDelivery: string,
    handleDeliveryChange: (value: BowlType) => void;
    // handleDeliveryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;  // Assuming it's a select element
}
export const BowlSelection = ({ deliveries, selectedDelivery, handleDeliveryChange }: IProps) => {
    return (
        <>
            <select className="select-style full-width-select" value={selectedDelivery} onChange={(event) => handleDeliveryChange(event.target.value as BowlType)}>
                <option value="">Select Delivery</option>
                {deliveries.map(delivery => (
                    <option key={delivery} value={delivery}>{delivery}</option>
                ))}
            </select>
        </>

    )
}
