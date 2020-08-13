const colours = [
    {
        base: ['BLANK'],
        gene: '',
        img: '/base/blank.png',
        hair: '/base/blank.png',
        hoof: '/base/blank.png',
        skin: '/base/blank.png',
        eye: '/base/blank.png',
    },
    {
        base: ['chestnut'],
        gene: '',
        img: '/colours/CHESTNUT.png',
        hair: '/hair/CHESTNUTHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {

        base: ['black'],
        gene: '',
        img: '/colours/BLACK.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
        
    },
    {
        base: ['bay'],
        gene: '',
        img: '/colours/BAY.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['sealbrown'],
        gene: '',
        img: '/colours/SEALBROWN.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['chestnut'],
        gene: 'nCr',
        img: '/colours/PALOMINO.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['black'],
        gene: 'nCr',
        img: '/colours/SMOKEYBLACK.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['bay', 'sealbrown'],
        gene: 'nCr',
        img: '/colours/BUCKSKIN.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['chestnut'],
        gene: 'CrCr',
        img: '/colours/CREMELLO.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',
    },
    {
        base: ['black'],
        gene: 'CrCr',
        img: '/colours/SMOKEYCREAM.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',

    },
    {
        base: ['bay'],
        gene: 'CrCr',
        img: '/colours/PERLINO.png',
        hair: '/hair/PERLINOHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',

    },
    {
        base: ['bay', 'black'],
        gene: 'nZ',
        img: undefined,
        hair: '/hair/SILVERHAIR.png',
        hoof: undefined,
        skin: undefined,
        eye: undefined,
    }
];


function GiveItem(query) {
    var found = {};
      colours.find(function (item) {
        var alltrue = [];
        for (var key in query) {
            console.log(key)
            console.log('Item item is: ' + item[key]);
            console.log('Query item is: ' + query[key])
            if (Array.isArray(item[key]) && item[key].includes(query[key])) {
                console.log(item[key].includes(query[key]))
                alltrue.push(true);
            }
            if (item[key] == undefined || item[key] != query[key]) {
                console.log(item[key] == query[key])
                alltrue.push(false);
            }
            else {
                alltrue.push(true);
            }
        }
        
        if (alltrue.every(el => el === true)) {
          console.log(item)
          found = item;
        }
        })
    return found;
    }

export default (req, res) => {
    var lookingkey = req.query;
    console.log('Colour API (the query):');
    console.log(lookingkey);
    

    try {
        var data = GiveItem(lookingkey);
        if (data == {}) {
            console.log('Data could not be found.')
            res.status(404).send(colours[0])
        }
        console.log('List of colour objects.')
        console.log(data);
        res.status(200).send(data);
    }
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }

    
}