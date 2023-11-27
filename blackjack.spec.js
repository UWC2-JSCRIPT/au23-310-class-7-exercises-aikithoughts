describe('Test for the Blackjack game', () => {
    it('should calculate the score of a hand with no aces', () => {
        const hand = [
            {suit: 'club', val: 6, displayVal: 6},
            {suit: 'club', val: 7, displayVal: 7}
        ]
        const result = calcPoints(hand);

        expect(result.total).toEqual(13);
        expect(result.isSoft).toEqual(false);
    })
    it('should calculate the score of a soft hand with one ace', () => {
        const hand = [
            {suit: 'club', val: 11, displayVal: 'Ace'},
            {suit: 'club', val: 7, displayVal: 7}
        ]
        const result = calcPoints(hand);
        console.log(result.total);

        expect(result.total).toEqual(18);
        expect(result.isSoft).toEqual(true);
    })
    it('should calculate the score of hard hand with one ace', () => {
        const hand = [
            {suit: 'club', val: 11, displayVal: 'Ace'},
            {suit: 'club', val: 7, displayVal: 7},
            {suit: 'club', val: 10, displayVal: 10}
        ]
        const result = calcPoints(hand);
        console.log(result.total);

        expect(result.total).toEqual(18);
        expect(result.isSoft).toEqual(false);
    })
    it('should calculate the score of soft hand with multiple aces', () => {
        const hand = [
            {suit: 'club', val: 11, displayVal: 'Ace'},
            {suit: 'club', val: 3, displayVal: 3},
            {suit: 'club', val: 2, displayVal: 2},
            {suit: 'heart', val: 11, displayVal: 'Ace'}
        ]
        const result = calcPoints(hand);
        console.log(result.total);

        expect(result.total).toEqual(17);
        expect(result.isSoft).toEqual(true);
    })
    it('should calculate the score of hard hand with multiple aces', () => {
        const hand = [
            {suit: 'club', val: 11, displayVal: 'Ace'},
            {suit: 'club', val: 7, displayVal: 7},
            {suit: 'club', val: 10, displayVal: 10},
            {suit: 'heart', val: 11, displayVal: 'Ace'}
        ]
        const result = calcPoints(hand);
        console.log(result.total);

        expect(result.total).toEqual(19);
        expect(result.isSoft).toEqual(false);
    })
})