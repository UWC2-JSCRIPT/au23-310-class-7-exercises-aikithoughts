describe('Test getTotalPoints function of soccer.js', () => {
    it('should calculate the total points from a comma-delimited string of wins, losses, and draws', () => {
        const testStringOfIntegers = 'wwlldd';
        const result = getTotalPoints(testStringOfIntegers);
        expect(result).toEqual(8);
    })
});

describe('Test orderTeams function of soccer.js', () => {
    it('should order the teams based on their current number of points', () => {
        const sounders = { name: 'Sounders', results: 'wwlldd'};
        const lafc = { name: 'LAFC', results: 'wwwldd'}
        const standingString = orderTeams(sounders, lafc);
        expect(standingString).toEqual(`Sounders: 8\nLAFC: 11`);
    })
});