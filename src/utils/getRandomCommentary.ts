export const getRandomCommentary = (commentary: string[]) => {
    if (commentary.length === 0) {
        throw new Error('The array cannot be empty.');
    }
    const randomIndex = Math.floor(Math.random() * commentary.length);
    return commentary[randomIndex];
}