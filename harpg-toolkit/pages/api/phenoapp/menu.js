const menus = [
    {
        id: 'start',
        title: 'Toolkit: Horse Phenotypes',
        button: 'START',
        menuitem: [],
        next: 'base'
    },
    {
        id: 'base',
        title: 'Choose Your Base Colour',
        button: 'NEXT',
        menuitem: [
            { value:'chestnut', text: 'Chestnut' }, 
            { value: 'bay', text: 'Bay' },
            { value: 'sealbrown', text: 'Seal Brown'},
            { value: 'black', text: 'Black' }
        ],
        next: 'dilutesMods',
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