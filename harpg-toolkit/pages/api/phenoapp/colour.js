const colours = [
    {
        id: 'chestnut',
        img: '/colours/CHESTNUT.png'
    },
    {
        id: 'black',
        img: '/colours/BLACK.png'
    },
    {
        id: 'bay',
        img: '/colours/BAY.png'
    },
    {
        id: 'sealbrown',
        img: '/colours/SEALBROWN.png'
    },
    {
        id: 'palomino',
        img: '/colours/PALOMINO.png'
    },
    {
        id: 'smokeyblack',
        img: '/colours/SMOKEYBLACK.png'
    },
    {
        id: 'buckskin',
        img: '/colours/BUCKSKIN.png'
    },
    {
        id: 'cremello',
        img: '/colours/CREMELLO.png'
    },
    {
        id: 'smokeycream',
        img: '/colours/SMOKEYCREAM.png'
    },
    {
        id: 'perlino',
        img: '/colours/PERLINO.png'
    },
    {
        id: 'chestnuthair',
        img: '/hair/CHESTNUTHAIR.png'
    },
    {
        id: 'blackhair',
        img: '/hair/BLACKHAIR.png'
    },
    {
        id: 'creamhair',
        img: '/hair/CREAMHAIR.png'
    },
    {
        id: 'perlinohair',
        img: '/hair/PERLINOHAIR.png'
    },
    {
        id: 'silverhair',
        img: '/hair/SILVERHAIR.png'
    }
];

export default (req, res) => {
    if (req.query != {}) {
        const data = colours.find(x => x.id === req.query.id);
        console.log(data)
        res.status(200).send(data);
    } else {
        res.status(200).send(colours)
    }
}