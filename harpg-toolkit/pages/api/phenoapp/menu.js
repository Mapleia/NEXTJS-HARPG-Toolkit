const menus = [
    {
        id: 'start',
        title: 'Toolkit: Horse Phenotypes',
        button: 'START',
        beforebtn: undefined,
        menuitem: [],
        next: 'base',
        before: undefined
    },
    {
        id: 'base',
        title: 'Choose Your Base Colour',
        button: 'NEXT',
        beforebtn: 'back',
        menuitem: [
            { value:'chestnut', text: 'Chestnut' }, 
            { value: 'bay', text: 'Bay' },
            { value: 'sealbrown', text: 'Seal Brown'},
            { value: 'black', text: 'Black' }
        ],
        next: 'marking',
        before: 'start'
    },
    {
        id: 'marking',
        title: 'Choose Your Markings',
        button: undefined,
        beforebtn: 'back',
        menuitem: [
            { value: 'CORONET_1', text: 'Coronet - Foot #1' }, 
            { value: 'CORONET_2', text: 'Coronet - Foot #2' },
            { value: 'CORONET_3', text: 'Coronet - Foot #3' },
            { value: 'CORONET_4', text: 'Coronet - Foot #4' },
            { value: 'PASTERN_1', text: 'Pastern - Foot #1' }, 
            { value: 'PASTERN_2', text: 'Pastern - Foot #2' },
            { value: 'PASTERN_3', text: 'Pastern - Foot #3' },
            { value: 'PASTERN_4', text: 'Pastern - Foot #4' },
            { value: 'FETLOCK_1', text: 'Fetlock - Foot #1' }, 
            { value: 'FETLOCK_2', text: 'Fetlock - Foot #2' },
            { value: 'FETLOCK_3', text: 'Fetlock - Foot #3' },
            { value: 'FETLOCK_4', text: 'Fetlock - Foot #4' },
            { value: 'FULLSOCK_1', text: 'Fullsock - Foot #1' }, 
            { value: 'FULLSOCK_2', text: 'Fullsock - Foot #2' },
            { value: 'FULLSOCK_3', text: 'Fullsock - Foot #3' },
            { value: 'FULLSOCK_4', text: 'Fullsock - Foot #4' },            
        ],
        next: 'dilutesMods',
        before: 'base'
    }
    
]

export default (req, res) => {
    if (req.query != {}) {
        const data = menus.find(x => x.id === req.query.id);
        console.log(data)
        res.status(200).send(data);
    } else {
        res.status(200).send(menus)
    }
}