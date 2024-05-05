import { useEffect, useState } from "react"
import { APP_MESSAGE, TARGET_SCORE_FOR_WINNING, WICKET_IN_HAND } from "../configs/constant"
import { IOutcomeFields } from "../types/types"

export const useEvaluateWinOrLoss = (wicketCount: number,
    runTotal: number,
    rows: IOutcomeFields[]) => {
    const [winOrLossMatch, setWinOrLossMatch] = useState<string>('')
    const rowsLength = rows.length
    useEffect(() => {
        if (wicketCount >= WICKET_IN_HAND) {
            setWinOrLossMatch(APP_MESSAGE.ALL_OUT)
        } else if (runTotal > TARGET_SCORE_FOR_WINNING) {
            setWinOrLossMatch(APP_MESSAGE.WIN_MATCH)
        } else if (rowsLength === 6 && runTotal < TARGET_SCORE_FOR_WINNING) {
            setWinOrLossMatch(APP_MESSAGE.LOSS)
        }
    }, [runTotal, wicketCount, rowsLength])
    return {
        winOrLossMatch
    }
}