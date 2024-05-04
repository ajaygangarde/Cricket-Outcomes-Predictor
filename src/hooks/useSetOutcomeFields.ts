import { useState } from "react";
import { IOutcomeFields, IOutcomeFieldsModel } from "../types/types";

export const useSetOutcomeFields = () => {
    const [rows, setRows] = useState<IOutcomeFields[]>([IOutcomeFieldsModel]);
    const [bowlCount, setBowlCount] = useState<number>(2);

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

    return {
        handleDeliveryChange,
        handleShotChange,
        handleTimingChange,
        addMore,
        bowlCount,
        rows
    }
}