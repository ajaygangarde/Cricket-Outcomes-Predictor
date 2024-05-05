export const getRandomCommentary = (commentary: string[]) => {
    if (commentary.length === 0) {
        return ''
    }
    const randomIndex = Math.floor(Math.random() * commentary.length);
    return commentary[randomIndex];
}