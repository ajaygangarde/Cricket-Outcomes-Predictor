
export const extractNumberFromString = (text: string): number => {
    const match = text.match(/\d+/); // This regex finds one or more digits in the string
    if (match) {
        const number = parseInt(match[0], 10); // Convert the first group of digits found to a base-10 integer
        if (number > 6 || number < 0) {
            return 0
        }
        return number
    }
    return 0; // Return null if no digits are found
}

