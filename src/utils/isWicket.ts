import { WICKET_VALUE } from "../configs/constant";


export const isWicket = (text: string) => {
    let isWicket = false
    if (text === WICKET_VALUE) isWicket = true
    return isWicket
}