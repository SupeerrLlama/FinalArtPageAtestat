const LLAMA_PRODUCTS = [
    {
        id: "spanish-statue-picture",
        title: "Spanish Statue Picture",
        category: "photos",
        price: 10,
        image: "IMG_3510.JPG",
        tag: "Travel",
        size: "tall"
    },
    {
        id: "spanish-stairs-picture",
        title: "Spanish Stairs Picture",
        category: "photos",
        price: 10,
        image: "IMG_3829.JPG",
        tag: "Travel",
        size: "medium"
    },
    {
        id: "street-memory-photo",
        title: "Street Memory Photo",
        category: "photos",
        price: 14,
        image: "IMG_3510.JPG",
        tag: "Street",
        size: "medium"
    },
    {
        id: "green-day-photo-set",
        title: "Green Day Photo Set",
        category: "photos",
        price: 20,
        image: "IMG_3829.JPG",
        tag: "Set",
        size: "wide"
    },
    {
        id: "monkey-surveillance-climb-photo",
        title: "Monkey Surveillance Climb Photo",
        category: "photos",
        price: 18,
        image: "photo-monkey-surveillance-climb.jpeg",
        tag: "Wildlife",
        size: "tall"
    },
    {
        id: "ornate-ceiling-architecture-photo",
        title: "Ornate Ceiling Architecture Photo",
        category: "photos",
        price: 22,
        image: "photo-ornate-ceiling-architecture.jpeg",
        tag: "Architecture",
        size: "wide"
    },
    {
        id: "harbor-monkey-portrait-photo",
        title: "Harbor Monkey Portrait Photo",
        category: "photos",
        price: 16,
        image: "photo-harbor-monkey-portrait.jpeg",
        tag: "Portrait",
        size: "tall"
    },
    {
        id: "golden-cathedral-interior-photo",
        title: "Golden Cathedral Interior Photo",
        category: "photos",
        price: 24,
        image: "photo-golden-cathedral-interior.jpeg",
        tag: "Interior",
        size: "wide"
    },
    {
        id: "curious-monkey-portrait-photo",
        title: "Curious Monkey Portrait Photo",
        category: "photos",
        price: 17,
        image: "photo-curious-monkey-portrait.jpeg",
        tag: "Portrait",
        size: "tall"
    },
    {
        id: "balcony-monkey-pair-photo",
        title: "Balcony Monkey Pair Photo",
        category: "photos",
        price: 19,
        image: "photo-balcony-monkey-pair.jpeg",
        tag: "Wildlife",
        size: "wide"
    },
    {
        id: "sunset-village-alley-photo",
        title: "Sunset Village Alley Photo",
        category: "photos",
        price: 15,
        image: "photo-sunset-village-alley.jpeg",
        tag: "Travel",
        size: "tall"
    },
    {
        id: "hanging-monkey-adventure-photo",
        title: "Hanging Monkey Adventure Photo",
        category: "photos",
        price: 18,
        image: "photo-hanging-monkey-adventure.jpeg",
        tag: "Wildlife",
        size: "tall"
    },
    {
        id: "flamenco-seated-dance-photo",
        title: "Flamenco Seated Dance Photo",
        category: "photos",
        price: 18,
        image: "photo-flamenco-seated-dance.jpeg",
        tag: "Performance",
        size: "tall"
    },
    {
        id: "flamenco-duo-smile-photo",
        title: "Flamenco Duo Smile Photo",
        category: "photos",
        price: 18,
        image: "photo-flamenco-duo-smile.jpeg",
        tag: "Performance",
        size: "tall"
    },
    {
        id: "flamenco-solo-gesture-photo",
        title: "Flamenco Solo Gesture Photo",
        category: "photos",
        price: 16,
        image: "photo-flamenco-solo-gesture.jpeg",
        tag: "Dance",
        size: "tall"
    },
    {
        id: "flamenco-raised-arms-photo",
        title: "Flamenco Raised Arms Photo",
        category: "photos",
        price: 16,
        image: "photo-flamenco-raised-arms.jpeg",
        tag: "Dance",
        size: "tall"
    },
    {
        id: "flamenco-hand-clap-photo",
        title: "Flamenco Hand Clap Photo",
        category: "photos",
        price: 16,
        image: "photo-flamenco-hand-clap.jpeg",
        tag: "Dance",
        size: "tall"
    },
    {
        id: "flamenco-stage-wide-photo",
        title: "Flamenco Stage Wide Photo",
        category: "photos",
        price: 22,
        image: "photo-flamenco-stage-wide.jpeg",
        tag: "Performance",
        size: "wide"
    },
    {
        id: "flamenco-arched-pose-photo",
        title: "Flamenco Arched Pose Photo",
        category: "photos",
        price: 16,
        image: "photo-flamenco-arched-pose.jpeg",
        tag: "Dance",
        size: "tall"
    },
    {
        id: "flamenco-clap-pose-photo",
        title: "Flamenco Clap Pose Photo",
        category: "photos",
        price: 16,
        image: "photo-flamenco-clap-pose.jpeg",
        tag: "Dance",
        size: "tall"
    },
    {
        id: "flamenco-close-hands-photo",
        title: "Flamenco Close Hands Photo",
        category: "photos",
        price: 14,
        image: "photo-flamenco-close-hands.jpeg",
        tag: "Detail",
        size: "tall"
    },
    {
        id: "flamenco-red-duet-photo",
        title: "Flamenco Red Duet Photo",
        category: "photos",
        price: 18,
        image: "photo-flamenco-red-duet.jpeg",
        tag: "Performance",
        size: "tall"
    },
    {
        id: "heatblast-digital-drawing",
        title: "Heatblast Digital Drawing",
        category: "digital-2d",
        price: 50,
        image: "HEATBLAST.jpg",
        tag: "Fan Art",
        page: "heatblastbuy.html",
        size: "tall"
    },
    {
        id: "avatar-poster-digital-drawing",
        title: "Avatar Poster Digital Drawing",
        category: "digital-2d",
        price: 100,
        image: "AVATAR.jpg",
        tag: "Poster",
        page: "atlabuypage.html",
        size: "medium"
    },
    {
        id: "chuck-character-study",
        title: "Chuck Character Study",
        category: "digital-2d",
        price: 45,
        image: "CHUCK.jpg",
        tag: "Character",
        size: "short"
    },
    {
        id: "mini-logo-sticker",
        title: "Mini Logo Sticker",
        category: "digital-2d",
        price: 18,
        image: "logogllama.png",
        tag: "Sticker",
        size: "short"
    },
    {
        id: "avatar-color-study",
        title: "Avatar Color Study",
        category: "digital-2d",
        price: 60,
        image: "AVATAR.jpg",
        tag: "Study",
        size: "wide"
    },
    {
        id: "school-backpack-donation-poster",
        title: "School Backpack Donation Poster",
        category: "digital-2d",
        price: 45,
        image: "AFIS_INTERACT2.jpg",
        tag: "Poster",
        size: "tall"
    },
    {
        id: "ridiculous-prices-theater-poster",
        title: "Ridiculous Prices Theater Poster",
        category: "digital-2d",
        price: 55,
        image: "AFISINTERACT1.jpg",
        tag: "Event",
        size: "tall"
    },
    {
        id: "interlove-charity-event-poster",
        title: "Interlove Charity Event Poster",
        category: "digital-2d",
        price: 50,
        image: "AFISINTERACT3.jpg",
        tag: "Event",
        size: "tall"
    },
    {
        id: "attack-titan-digital-artwork",
        title: "Attack Titan Digital Artwork",
        category: "digital-2d",
        price: 70,
        image: "AOT.jpg",
        tag: "Fan Art",
        size: "tall"
    },
    {
        id: "doctor-y-turnaround-sheet",
        title: "Doctor Y Turnaround Sheet",
        category: "digital-2d",
        price: 65,
        image: "CHUCK.jpg",
        tag: "Character",
        size: "wide"
    },
    {
        id: "daredevil-born-again-poster",
        title: "Daredevil Born Again Poster",
        category: "digital-2d",
        price: 80,
        image: "DD.jpg",
        tag: "Fan Art",
        size: "tall"
    },
    {
        id: "deadpool-wolverine-poster",
        title: "Deadpool & Wolverine Poster",
        category: "digital-2d",
        price: 85,
        image: "DPSIWOLVERINE.jpg",
        tag: "Fan Art",
        size: "tall"
    },
    {
        id: "birthday-invitation-poster",
        title: "Birthday Invitation Poster",
        category: "digital-2d",
        price: 35,
        image: "INVITATIEANIVERSARE.jpg",
        tag: "Invitation",
        size: "medium"
    },
    {
        id: "blue-callatis-logo",
        title: "Blue Callatis Logo",
        category: "digital-2d",
        price: 30,
        image: "LOGOTRUPAFILM.jpg",
        tag: "Logo",
        size: "square"
    },
    {
        id: "rapunzel-fantasy-portrait",
        title: "Rapunzel Fantasy Portrait",
        category: "digital-2d",
        price: 90,
        image: "RAPUNZEL.jpg",
        tag: "Illustration",
        size: "tall"
    },
    {
        id: "abstract-3d-render",
        title: "Abstract 3D Render",
        category: "digital-3d",
        price: 75,
        image: "0113.png",
        tag: "Render",
        size: "wide"
    },
    {
        id: "anime-vinyl-painting",
        title: "Anime Vinyl Painting",
        category: "irl",
        price: 75,
        image: "irl-anime-vinyl-painting.jpeg",
        tag: "Vinyl",
        size: "wide"
    },
    {
        id: "seated-figure-portrait-study",
        title: "Seated Figure Portrait Study",
        category: "irl",
        price: 55,
        image: "irl-seated-portrait-study.jpeg",
        tag: "Portrait",
        size: "tall"
    },
    {
        id: "hamlet-skull-pencil-study",
        title: "Hamlet Skull Pencil Study",
        category: "irl",
        price: 35,
        image: "irl-hamlet-skull-study.jpeg",
        tag: "Sketch",
        size: "medium"
    },
    {
        id: "cliff-rescue-clay-sculpture",
        title: "Cliff Rescue Clay Sculpture",
        category: "irl",
        price: 85,
        image: "irl-cliff-rescue-sculpture.jpeg",
        tag: "Sculpture",
        size: "wide"
    },
    {
        id: "young-man-pencil-portrait",
        title: "Young Man Pencil Portrait",
        category: "irl",
        price: 45,
        image: "irl-young-man-sketch.jpeg",
        tag: "Portrait",
        size: "tall"
    },
    {
        id: "metallica-vinyl-painting",
        title: "Metallica Vinyl Painting",
        category: "irl",
        price: 75,
        image: "irl-metallica-vinyl-painting.jpeg",
        tag: "Vinyl",
        size: "wide"
    },
    {
        id: "bill-cipher-ink-sketch",
        title: "Bill Cipher Ink Sketch",
        category: "irl",
        price: 35,
        image: "irl-bill-cipher-sketch.jpeg",
        tag: "Ink",
        size: "medium"
    },
    {
        id: "muco-character-sketch",
        title: "Mico Brawl Stars Sketch",
        category: "irl",
        price: 30,
        image: "irl-muco-character-sketch.jpeg",
        tag: "Character",
        size: "tall"
    },
    {
        id: "hollow-knight-mini-sculpture",
        title: "Hollow Knight Mini Sculpture",
        category: "irl",
        price: 55,
        image: "irl-hollow-knight-sculpture.jpeg",
        tag: "Sculpture",
        size: "medium"
    },
    {
        id: "daredevil-charcoal-fanart",
        title: "Daredevil Charcoal Fanart",
        category: "irl",
        price: 35,
        image: "irl-table-conversation-sketch.jpeg",
        tag: "Sketch",
        size: "wide"
    },
    {
        id: "charcoal-seated-portrait",
        title: "Self-Portrait",
        category: "irl",
        price: 60,
        image: "irl-charcoal-portrait.jpeg",
        tag: "Charcoal",
        size: "tall"
    },
    {
        id: "color-run-framed-portrait",
        title: "Color Run Framed Portrait",
        category: "irl",
        price: 80,
        image: "irl-color-run-portrait.jpeg",
        tag: "Portrait",
        size: "tall"
    },
    {
        id: "coco-guitar-pencil-sketch",
        title: "Poco Brawl Stars Sketch",
        category: "irl",
        price: 30,
        image: "irl-coco-guitar-sketch.jpeg",
        tag: "Sketch",
        size: "tall"
    },
    {
        id: "pochita-clay-sculpture",
        title: "Pochita Clay Sculpture",
        category: "irl",
        price: 50,
        image: "irl-pochita-sculpture.jpeg",
        tag: "Sculpture",
        size: "medium"
    },
    {
        id: "dance-art-piece",
        title: "Dance Art Piece",
        category: "irl",
        price: 70,
        image: "DANS.jpg",
        tag: "Traditional",
        size: "tall"
    },
    {
        id: "magneto-sketchbook-study",
        title: "Magneto Sketchbook Study",
        category: "irl",
        price: 35,
        image: "irl-magneto-sketch.jpeg",
        tag: "Sketch",
        size: "tall"
    },
    {
        id: "cosmic-figure-painting",
        title: "Cosmic Figure Painting",
        category: "irl",
        price: 70,
        image: "irl-cosmic-figure-painting.jpeg",
        tag: "Painting",
        size: "wide"
    },
    {
        id: "anatomy-head-pencil-study",
        title: "Anatomy Head Pencil Study",
        category: "irl",
        price: 40,
        image: "irl-anatomy-head-study.jpeg",
        tag: "Study",
        size: "tall"
    },
    {
        id: "side-profile-pencil-portrait",
        title: "Side Profile Pencil Portrait",
        category: "irl",
        price: 45,
        image: "irl-side-profile-portrait.jpeg",
        tag: "Portrait",
        size: "tall"
    },
    {
        id: "clay-creature-bust",
        title: "Clay Creature Bust",
        category: "irl",
        price: 65,
        image: "irl-clay-creature-bust.jpeg",
        tag: "Sculpture",
        size: "wide"
    },
    {
        id: "bee-swarm-simulator-mini-sculpture",
        title: "Bee Swarm Simulator Mini Sculpture",
        category: "irl",
        price: 50,
        image: "irl-bee-swarm-simulator-sculpture.jpeg",
        tag: "Sculpture",
        size: "square"
    },
    {
        id: "front-pose-pencil-portrait",
        title: "Front Pose Pencil Portrait",
        category: "irl",
        price: 45,
        image: "irl-front-pose-portrait.jpeg",
        tag: "Portrait",
        size: "tall"
    },
    {
        id: "decebalus-mountain-ink-drawing",
        title: "Decebalus Mountain Ink Drawing",
        category: "irl",
        price: 45,
        image: "irl-decebalus-mountain-ink.jpeg",
        tag: "Ink",
        size: "tall"
    },
    {
        id: "spiderman-sketchbook-page",
        title: "Spider-Man Sketchbook Page",
        category: "irl",
        price: 40,
        image: "irl-spiderman-sketch-page.jpeg",
        tag: "Sketch",
        size: "tall"
    },
    {
        id: "expressive-hand-study",
        title: "Expressive Hand Study",
        category: "irl",
        price: 35,
        image: "irl-hand-study.jpeg",
        tag: "Study",
        size: "tall"
    },
    {
        id: "pink-glazed-donut-scene",
        title: "Pink Glazed Donut Cafe Scene",
        category: "digital-3d",
        price: 65,
        image: "3d-donut-cafe-scene.png",
        tag: "Render",
        size: "tall"
    },
    {
        id: "red-robot-attack-pose",
        title: "Red Combat Android Attack Pose",
        category: "digital-3d",
        price: 85,
        image: "3d-robot-attack-pose.png",
        tag: "Character",
        size: "tall"
    },
    {
        id: "red-robot-battle-stance",
        title: "Red Combat Android Battle Stance",
        category: "digital-3d",
        price: 85,
        image: "3d-robot-battle-stance.png",
        tag: "Character",
        size: "tall"
    },
    {
        id: "mystical-cauldron-3d",
        title: "Mystical Cauldron 3D Model",
        category: "digital-3d",
        price: 70,
        image: "3d-cauldron-magical.png",
        tag: "Object",
        size: "square"
    },
    {
        id: "pixel-spider-3d-render",
        title: "Pixel Spider 3D Render",
        category: "digital-3d",
        price: 75,
        image: "3d-pixel-spider.png",
        tag: "Retro",
        size: "wide"
    },
    {
        id: "ghoul-3d-render",
        title: "Ghoul",
        category: "digital-3d",
        price: 95,
        image: "3d-noir-smoke-cover.png",
        tag: "Cover Art",
        size: "wide"
    },
    {
        id: "mushroom-guardian-3d-model",
        title: "Mushroom Guardian 3D Model",
        category: "digital-3d",
        price: 80,
        image: "3d-mushroom-guardian.png",
        tag: "Character",
        size: "tall"
    },
    {
        id: "red-robot-ready-pose",
        title: "Red Combat Android Ready Pose",
        category: "digital-3d",
        price: 85,
        image: "3d-robot-ready-pose.png",
        tag: "Character",
        size: "tall"
    },
    {
        id: "red-robot-ready-pose-variant",
        title: "Red Combat Android Ready Pose - Variant",
        category: "digital-3d",
        price: 85,
        image: "3d-robot-ready-pose.png",
        tag: "Character",
        size: "tall"
    },
    {
        id: "mushroom-guardian-3d-study",
        title: "Mushroom Guardian 3D Study",
        category: "digital-3d",
        price: 80,
        image: "3d-mushroom-guardian.png",
        tag: "Character",
        size: "tall"
    },
    {
        id: "mystical-cauldron-closeup",
        title: "Mystical Cauldron 3D Closeup",
        category: "digital-3d",
        price: 70,
        image: "3d-cauldron-magical.png",
        tag: "Object",
        size: "square"
    },
    {
        id: "pink-glazed-donut-cafe-remix",
        title: "Pink Glazed Donut Remix",
        category: "digital-3d",
        price: 65,
        image: "3d-donut-cafe-scene.png",
        tag: "Render",
        size: "tall"
    },
    {
        id: "pixel-spider-neo-render",
        title: "Pixel Spider Neo Render",
        category: "digital-3d",
        price: 75,
        image: "3d-pixel-spider.png",
        tag: "Retro",
        size: "wide"
    },
    {
        id: "ghoul-night-edition",
        title: "Ghoul Night Edition",
        category: "digital-3d",
        price: 95,
        image: "3d-noir-smoke-cover.png",
        tag: "Cover Art",
        size: "wide"
    },
    {
        id: "mushroom-guardian-armor-variant",
        title: "Mushroom Guardian Armor Variant",
        category: "digital-3d",
        price: 80,
        image: "3d-mushroom-guardian.png",
        tag: "Character",
        size: "tall"
    },
    {
        id: "red-robot-attack-pose-alt",
        title: "Red Combat Android Attack Pose - Alt",
        category: "digital-3d",
        price: 85,
        image: "3d-robot-attack-pose.png",
        tag: "Character",
        size: "tall"
    },
    {
        id: "mystical-cauldron-mystery",
        title: "Mystical Cauldron Mystery",
        category: "digital-3d",
        price: 70,
        image: "3d-cauldron-magical.png",
        tag: "Object",
        size: "square"
    }
];
