import { useEffect, useState } from "react"
import { TARGET_SCORE_FOR_WINNING, WICKET_IN_HAND } from "../configs/constant"
import { IOutcomeFields } from "../types/types"

export const useEvaluateWinOrLoss = (wicketCount: number,
    runTotal: number,
    rows: IOutcomeFields[]) => {
    const [winOrLossMatch, setWinOrLossMatch] = useState<string>('')
    const rowsLength = rows.length
    useEffect(() => {
        if (wicketCount >= WICKET_IN_HAND) {
            setWinOrLossMatch("All Out, India Lost the Match. ")
        } else if (runTotal > TARGET_SCORE_FOR_WINNING) {
            setWinOrLossMatch("congratulation India Won the Match")
        } else if (rowsLength === 6 && runTotal < TARGET_SCORE_FOR_WINNING) {
            setWinOrLossMatch("India Lost the Match")
        }
    }, [runTotal, wicketCount, rowsLength])
    return {
        winOrLossMatch
    }
}