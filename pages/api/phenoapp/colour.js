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
        img: null,
        hair: '/hair/SILVERHAIR.png',
        hoof: null,
        skin: null,
        eye: null,
    }
];


function GiveItem(query) {
    var found = {};
      colours.find(function (item) {
        var alltrue = [];
        for (var key in query) {            
            // If colour object doesn't even have that property:
            if (item[key] == undefined) {
              throw 'Key not found in colour object.';
              
            } else if (key == 'base') {
            	alltrue.push(item.base.includes(query.base));
              
            } else if (key == 'gene') {
            	alltrue.push(query.gene.includes(item.gene));
              
            } else {
            	alltrue.push(false);
              
            }
        }
        if (alltrue.every(el => el === true)) {
          found = item;
        }
     })
    return found;
}

export default (req, res) => {
    var lookingkey = req.query;
    try {
        var data = GiveItem(lookingkey);
        if (data == {}) {
            console.error('Data could not be found.')
            res.status(404).send(colours[0])
        } else {
            res.status(200).send(data);
        }
        
    }
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }

    
}