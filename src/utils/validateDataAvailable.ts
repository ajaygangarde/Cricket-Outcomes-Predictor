export const validateDataAvailable = (entries: any[]) => {
    for (const entry of entries) {
        for (const key in entry) {
            // Check if the property's value is null, an empty string, or undefined
            if (entry[key] === null || entry[key] === '' || entry[key] === undefined) {
                return false;
            }
        }
    }
    return true;

}