const menus = [
    {
        id: 'start',
        title: 'Toolkit: Horse Phenotypes',
        type: 'checkbox',
        button: 'START',
        beforebtn: undefined,
        menuitem: [],
        next: 'base',
        before: undefined
    },
    {
        id: 'base',
        title: 'Choose Your Base Colour',
        type: 'radio',
        button: 'NEXT',
        beforebtn: 'back',
        menuitem: [
            { base:'chestnut', text: 'Chestnut' }, 
            { base: 'bay', text: 'Bay' },
            { base: 'sealbrown', text: 'Seal Brown'},
            { base: 'black', text: 'Black' }
        ],
        next: 'minormarking',
        before: 'start'
    },
    {
        id: 'minormarking',
        title: 'Choose Your Markings',
        type: 'checkbox',
        button: 'NEXT',
        beforebtn: 'back',
        menuitem: [
            { base: 'CORONET_1', text: 'Coronet - Foot #1' }, 
            { base: 'CORONET_2', text: 'Coronet - Foot #2' },
            { base: 'CORONET_3', text: 'Coronet - Foot #3' },
            { base: 'CORONET_4', text: 'Coronet - Foot #4' },
            { base: 'PASTERN_1', text: 'Pastern - Foot #1' }, 
            { base: 'PASTERN_2', text: 'Pastern - Foot #2' },
            { base: 'PASTERN_3', text: 'Pastern - Foot #3' },
            { base: 'PASTERN_4', text: 'Pastern - Foot #4' },
            { base: 'FETLOCK_1', text: 'Fetlock - Foot #1' }, 
            { base: 'FETLOCK_2', text: 'Fetlock - Foot #2' },
            { base: 'FETLOCK_3', text: 'Fetlock - Foot #3' },
            { base: 'FETLOCK_4', text: 'Fetlock - Foot #4' },
            { base: 'FULLSOCK_1', text: 'Fullsock - Foot #1' }, 
            { base: 'FULLSOCK_2', text: 'Fullsock - Foot #2' },
            { base: 'FULLSOCK_3', text: 'Fullsock - Foot #3' },
            { base: 'FULLSOCK_4', text: 'Fullsock - Foot #4' },            
        ],
        next: 'dilutesMods',
        before: 'base'
    },
    {
        id: 'dilutesMods',
        title: 'Choose your Dilutes and Modifiers and Markings',
        type: 'checkbox',
        button: undefined,
        beforebtn: 'back',
        menuitem: [
            {base: 'nCr', text: 'Single Cream (Palomino / Buckskin / Smokey Black)'},
            {base: 'CrCr', text: 'Double Cream (Cremello / Perlino / Smokey Cream)'},
            {base: 'nD', text: 'Dun (Red Dun / Bay Dun / Grulla)'},
            {base: 'prlprl', text: 'Pearl ()'},
            {base: 'nCh', text: 'Champagne (Gold / Amber / Classic)'},
            {base: 'nG', text: 'Grey'},
            {base: 'nZ', text: 'Silver Dapple'}
        ],
        next: 'Others',
        before: 'minormarking'

    }
    
]

export default (req, res) => {
    if (req.query != {}) {
        const data = menus.find(x => x.id === req.query.id);
        res.status(200).send(data);
    } else {
        res.status(200).send(menus)
    }
}