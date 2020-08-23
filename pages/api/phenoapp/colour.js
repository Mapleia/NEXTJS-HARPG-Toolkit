const colours = [
    {
        base: ['BLANK'],
        gene: [],
        img: '/base/blank.png',
        hair: '/base/blank.png',
        hoof: '/base/blank.png',
        skin: '/base/blank.png',
        eye: '/base/blank.png',
    },
    {
        base: ['chestnut'],
        gene: [],
        img: '/colours/CHESTNUT.png',
        hair: '/hair/CHESTNUTHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {

        base: ['black'],
        gene: [],
        img: '/colours/BLACK.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
        
    },
    {
        base: ['bay'],
        gene: [],
        img: '/colours/BAY.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['sealbrown'],
        gene: [],
        img: '/colours/SEALBROWN.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['chestnut'],
        gene: ['nCr'],
        img: '/colours/PALOMINO.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['black'],
        gene: ['nCr'],
        img: '/colours/SMOKEYBLACK.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['bay', 'sealbrown'],
        gene: ['nCr'],
        img: '/colours/BUCKSKIN.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['chestnut'],
        gene: ['CrCr'],
        img: '/colours/CREMELLO.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',
    },
    {
        base: ['black'],
        gene: ['CrCr'],
        img: '/colours/SMOKEYCREAM.png',
        hair: '/hair/CREAMHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',

    },
    {
        base: ['bay', 'sealbrown'],
        gene: ['CrCr'],
        img: '/colours/PERLINO.png',
        hair: '/hair/PERLINOHAIR.png',
        hoof: '/extra/LIGHT_HOOVES.png',
        skin: '/extra/PINK_SKIN.png',
        eye: '/extra/BLUE_EYE.png',
    },
    {
        base: ['chestnut'],
        gene: ['nCh'],
        img: '/colours/GOLDENCHMP.png',
        hair: '/hair/GOLDENCHMPHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/CHMP_SKIN.png',
        eye: '/extra/CHMP_EYE.png',
    },
    {
        base: ['black'],
        gene: ['nCh'],
        img: '/colours/CLASSICCHMP.png',
        hair: '/hair/CLASSICCHMPHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/CHMP_SKIN.png',
        eye: '/extra/CHMP_EYE.png',

    },
    {
        base: ['bay', 'sealbrown'],
        gene: ['nCh'],
        img: '/colours/AMBERCHMP.png',
        hair: '/hair/AMBERCHMPHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/CHMP_SKIN.png',
        eye: '/extra/CHMP_EYE.png',
    },
    {
        base: ['chestnut'],
        gene: ['nD'],
        img: '/colours/REDDUN.png',
        hair: '/hair/REDDUNHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['black'],
        gene: ['nD'],
        img: '/colours/GRULLO.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
    {
        base: ['bay', 'sealbrown'],
        gene: ['nD'],
        img: '/colours/BAYDUN.png',
        hair: '/hair/BLACKHAIR.png',
        hoof: '/extra/REG_HOOVES.png',
        skin: '/extra/REG_SKIN.png',
        eye: '/extra/REG_EYE.png',
    },
];

function GiveItem(query) {
    console.log('start of the search:')
    
    var found = {};

    if (query.gene == '') {
        query.gene = [];
    } else {
        query.gene = query.gene.split(',')
    }

    var hasSilver = query.gene.includes('nZ');
    if (hasSilver) {
        query.gene.remove('nZ');
    }

	colours.find((c) => {  
        if ( query.gene.equals(c.gene, false) && c.base.includes(query.base)) {
            console.log(c)
            found = c;
        }
  })
  
	if (hasSilver) {found.hair = '/hair/SILVERHAIR.png'}
  return found;
}

export default (req, res) => {
    var lookingkey = req.query;
    try {
        var data = GiveItem(lookingkey);
        res.status(200).send(data);
        
    }
    catch(err) {
        console.log(err);
        res.status(500).send(err);
    }

    
}