export const validateDataAvailable = (entries = []) => {
    for (let entry of entries) {
        for (let key in entry) {
            // Check if the property's value is null, an empty string, or undefined
            if (entry[key] === null || entry[key] === '' || entry[key] === undefined) {
                return false;
            }
        }
    }
    return true;

}