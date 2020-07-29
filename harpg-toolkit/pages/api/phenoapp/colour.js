const colours = [
    {
        id: 'BLANK',
        img: '/base/blank.png',
        hair: '/base/blank.png',
        hoof: '/base/blank.png',
        skin: '/base/blank.png',
        eye: '/base/blank.png',
    },
    {
        id: 'chestnut',
        img: '/colours/CHESTNUT.png',
        hair: '/hair/CHESTNUTHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        id: 'black',
        img: '/colours/BLACK.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
        
    },
    {
        id: 'bay',
        img: '/colours/BAY.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        id: 'sealbrown',
        img: '/colours/SEALBROWN.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        id: 'palomino',
        img: '/colours/PALOMINO.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        id: 'smokeyblack',
        img: '/colours/SMOKEYBLACK.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        id: 'buckskin',
        img: '/colours/BUCKSKIN.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        id: 'cremello',
        img: '/colours/CREMELLO.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',
    },
    {
        id: 'smokeycream',
        img: '/colours/SMOKEYCREAM.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',

    },
    {
        id: 'perlino',
        img: '/colours/PERLINO.png',
        hair: '/hair/PERLINOHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',

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