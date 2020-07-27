const menus = [
    {
        id: 'start',
        title: 'Toolkit: Horse Phenotypes',
        button: 'START',
        menuitem: null,
        next: 'base'
    },
    {
        id: 'base',
        title: 'Choose Your Base Colour',
        button: 'NEXT',
        menuitem: []
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