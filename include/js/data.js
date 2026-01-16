// Types des pokémons
let types = [
	{
		"nom": "Eau",
		"desc": "L’eau, ça mouille. Donc mieux vaut apporter un parapluie pour tout voyage de dresseur Pokémon, quand le type Eau est un des types de Pokémons les plus communs. Les Pokémons aquatiques sont de toutes formes et de toutes tailles, mais ça ne les empêchera pas de te tremper en un instant avec un Pistolet à O bien placé.",
		"img": "eau.png",
		"icone": "eau_icone.png"
	},
	{
		"nom": "Combat",
		"desc": "Ces Pokémons sont experts à la baston, mais leur force peut être utilisée pour d’autres projets. Mackogneur notamment est particulièrement apprécié comme déménageur, mais ne laissez pas Colossinge faire un travail à responsabilité : il prend la mouche si facilement qu’il ne peut pas se concentrer.",
		"img": "combat.png",
		"icone": "combat_icone.png"
	},
	{
		"nom": "Sol",
		"desc": "Le type Sol contient des Pokémons lourds et redoutables, capables de provoquer des tremblements de terre. Attention de ne pas marcher sur un Taupiqueur ! Ces Pokémons, apprivoisés, peuvent être de grandes aides pour les travaux de la terre, comme dans une ferme ou un chantier.",
		"img": "sol.png",
		"icone": "sol_icone.png"
	},
	{
		"nom": "Glace",
		"desc": "Fragiles mais seuls dangers du type Dragon jusqu’à l’arrivée du type Fée, les Pokémons de type Glace possèdent une certaine élégance. On les croise dans les montagnes et les eaux glacées, et ils sont capables de geler complètement ceux qui les cherchent.",
		"img": "glace.png",
		"icone": "glace_icone.png"
	},
	{
		"nom": "Psy",
		"desc": "Type mystérieux qu’on a jamais fini d’étudier, les Pokémons de type Psy sont les seuls à pouvoir parler avec leur dresseur... par télépathie, qui plus est ! Ils infligent la confusion à leurs ennemis et ont tous leur petite particularité qui les rend unique, et honnêtement, un peu bizarres.",
		"img": "psy.png",
		"icone": "psy_icone.png"
	},
	{
		"nom": "Poison",
		"desc": "Un type très prolifique, n’oublie jamais de te balader avec un Antidote ! Ils sont vicieux, ils te veulent du mal, à part Bulbizarre qui est tout mignon tout plein.",
		"img": "poison.png",
		"icone": "poison_icone.png"
	},
	{
		"nom": "Feu",
		"desc": "Si tu vas pas bien, achète un chien. Et si tu n’as pas peur de te brûler, un Pokémon de type Feu fera ta fierté ! Attention cependant, ces Pokémons ont tendance à atteindre des tailles considérables en évoluant, et si vous voulez les caresser, soyez prêts à brûler vif. Mais ça vaut peut-être le coup, ils sont si mignons…",
		"img": "feu.png",
		"icone": "feu_icone.png"
	},
	{
		"nom": "Dragon",
		"desc": "Le type Dragon a longtemps été considéré comme le plus puissant de tous les types Pokémon. Puis on a découvert le type Fée... Et maintenant Dracolosse ne sert à rien.",
		"img": "dragon.png",
		"icone": "dragon_icone.png"
	},
	{
		"nom": "Roche",
		"desc": "Cailloux.",
		"img": "roche.png",
		"icone": "roche_icone.png"
	},
	{
		"nom": "Normal",
		"desc": "Ces Pokémons sont juste... normaux. Que dire. C’est quasiment des animaux de la vraie vie. C’est un oiseau. C’est un rat. C’est... qu’est-ce que c’est que ça ? Ça se transforme en différents Pokémons ? Bizarre le type Normal…",
		"img": "normal.png",
		"icone": "normal_icone.png"
	},
	{
		"nom": "Fée",
		"desc": "Un des deux types ajoutés après l’apparition des Pokémons, il a été rétroactivement appliqué à ces premiers Pokémons, classifiés d’abord comme ne possédant qu’un seul type. Le type Fée, contrairement à ce qu’indique son nom, ne s’applique pas qu’aux Pokémons roses ou vaguement féériques (je te vois Mélofée !), mais à tous les Pokémons pouvant référer à un certain type de folklore. Donc des Pokémons trolls, lutins ou korrigans sont éligibles !",
		"img": "fee.png",
		"icone": "fee_icone.png"
	},
	{
		"nom": "Insecte",
		"desc": "Ces Pokémons n’ont, pour la plupart, pas six pattes. Pourquoi c’est important ? Je ne sais pas, pourquoi je m’attendais à ce que des Pokémons insectes aient six pattes ? C’est pas un critère pourtant... Quoi qu’il en soit, ce sont des Pokémons qui évoluent généralement assez vite, parfait pour un début de voyage de dresseur !",
		"img": "insecte.png",
		"icone": "insecte_icone.png"
	},
	{
		"nom": "Plante",
		"desc": "Qu’est-ce qui est venu en premier, la plante ou le Pokémon ? Tout suggérerait la plante, parce que bon, oxygène, mais ils sont curieux, ces Pokémons, non ? Est-ce que toutes les plantes pourraient devenir des Pokémons, à long terme ? Tant de questions, si peu de réponses...",
		"img": "plante.png",
		"icone": "plante_icone.png"
	},
	{
		"nom": "Spectre",
		"desc": "Des Pokémons mystérieux, et dangereux. La plupart du temps, il y a des légendes que ce sont des humains réincarnés, et en spectres vengeurs plutôt que pacifiques. Si vous croisez un Pokémon Spectre sans dresseur, passez votre chemin...",
		"img": "spectre.png",
		"icone": "spectre_icone.png"
	},
	{
		"nom": "Vol",
		"desc": "Un type qui s’explique lui-même. Les Pokémons Vol volent dans le ciel, et... non, ils ne sont pas des voleurs, ils sont volants. Peut-être un type qui ne s’explique pas lui-même, finalement.",
		"img": "vol.png",
		"icone": "vol_icone.png"
	},
	{
		"nom": "Électrik",
		"desc": "Attention au coup de jus ! Ces Pokémons électrocutent jusqu’à leur propre dresseur pour appuyer leurs arguments, comme par exemple que cette Baie que tu viens de leur offrir n’est pas assez sucrée. À tes risques et périls !",
		"img": "electrik.png",
		"icone": "electrik_icone.png"
	},
	{
		"nom": "Acier",
		"desc": "Il y a peu de Pokémons de type Acier dans la région, mais ils sont faciles à trouver : il suffit de trouver un aimant, et en voilà vite au moins un.",
		"img": "acier.png",
		"icone": "acier_icone.png"
	}
]

// Tous les pokémon avec leurs caractéristiques
let data = [
	{
		"nom": "Bulbizarre",
		"taille": "0,7 m",
		"poids": "6,9 kg",
		"numéro": "001",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "001.png",
		"nom_en": "Bulbasaur",
		"nom_ja": [
			"Fushigidane",
			"フシギダネ"
		],
		"description": "La graine sur le dos de Bulbizarre est une réserve de nutriments. Il la fait doucement pousser en absorbant les rayons du soleil, et emmagasine de l'énergie dedans en vue de son évolution. S'il dépense trop souvent son énergie, il n'évoluera pas car l'ouverture de son bulbe dépend de ses réserves de nutriments.",
		"gif": "001.gif",
		"evolutions": [
			"Bulbizarre",
			"Herbizarre",
			"Florizarre"
		],
		"artwork": [
			"C001.png",
			"Bulbizarre-RB.png"
		],
		"cri" : [
			"Cri_001.ogg"
		]
	},
	{
		"nom": "Herbizarre",
		"taille": "1,0 m",
		"poids": "13,0 kg",
		"numéro": "002",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "002.png",
		"nom_en": "Ivysaur",
		"nom_ja": [
			"Fushigisou",
			"フシギソウ"
		],
		"description": "Le bulbe sur le dos de Herbizarre a éclos, dévoilant ainsi une fleur fermée. Plus il passe de temps au soleil, plus sa fleur se prépare à s'ouvrir, et quelques temps avant son évolution, il dégage une douce odeur fruitée. Attention à ses Tranch'herbes et à ses Fouets lianes.",
		"gif": "002.gif",
		"evolutions": [
			"Bulbizarre",
			"Herbizarre",
			"Florizarre"
		],
		"artwork": [
			"C002.png",
			"Herbizarre-RB.png"
		],
		"cri" : [
			"Cri_002.ogg"
		]
	},
	{
		"nom": "Florizarre",
		"taille": "2,0 m",
		"poids": "100,0 kg",
		"numéro": "003",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "003.png",
		"nom_en": "Venusaur",
		"nom_ja": [
			"Fushigibana",
			"フシギバナ"
		],
		"description": "Comme un panneau solaire, les pétales de la fleur de Florizarre transforment les rayons du soleil en énergie. Il est maître d'un troupeau de Herbizarre et de Bulbizarre, qu'il garde férocement. L'odeur se dégageant de sa fleur est exquise, mais mieux vaut ne pas s'approcher d'un Florizarre sauvage et de sa horde.",
		"gif": "003.gif",
		"evolutions": [
			"Bulbizarre",
			"Herbizarre",
			"Florizarre"
		],
		"artwork": [
			"C003.png",
			"Florizarre-RB.png"
		],
		"cri" : [
			"Cri_003.ogg"
		]
	},
	{
		"nom": "Salamèche",
		"taille": "0,6 m",
		"poids": "8,5 kg",
		"numéro": "004",
		"type": [
			"Feu"
		],
		"png": "004.png",
		"nom_en": "Charmander",
		"nom_ja": [
			"Hitokage",
			"ヒトカゲ"
		],
		"description": "De récentes études prouvent que la flamme qui brûle sur la queue de Salamèche indique son état de santé, mais aussi son caractère. S'il se sent faible, la flamme sera toute petite. Et si par malheur sa flamme s'éteint, il meurt, car c'est le seul moyen pour lui de se refroidir.",
		"gif": "004.gif",
		"evolutions": [
			"Salamèche",
			"Reptincel",
			"Dracaufeu"
		],
		"artwork": [
			"C004.png",
			"Salamèche-RB.png"
		],
		"cri" : [
			"Cri_004.ogg"
		]
	},
	{
		"nom": "Reptincel",
		"taille": "1,1 m",
		"poids": "19,0 kg",
		"numéro": "005",
		"type": [
			"Feu"
		],
		"png": "005.png",
		"nom_en": "Charmeleon",
		"nom_ja": [
			"Rizard",
			"リザード"
		],
		"description": "Reptincel est un Pokémon sauvage, difficile à maîtriser. Beaucoup de dresseurs trouvent leur Pokémon changé à leur évolution, et parfois il échappe à leur contrôle. Ses griffes acérées sont des armes redoutables, et quand il se bat, sa flamme prends une couleur bleue-argentée.",
		"gif": "005.gif",
		"evolutions": [
			"Salamèche",
			"Reptincel",
			"Dracaufeu"
		],
		"artwork": [
			"C005.png",
			"Reptincel-RB.png"
		],
		"cri" : [
			"Cri_005.ogg"
		]
	},
	{
		"nom": "Dracaufeu",
		"taille": "1,7 m",
		"poids": "90,5 kg",
		"numéro": "006",
		"type": [
			"Feu",
			"Vol"
		],
		"png": "006.png",
		"nom_en": "Charizard",
		"nom_ja": [
			"Rizardon",
			"リザードン"
		],
		"description": "Pokémon noble, Dracaufeu est aussi réputé pour avoir sale caractère. Il crache d'impressionnants jets de flammes, et ses ailes lui permettent de voler à 1400 mètres d'altitude. Cependant, si son dresseur possède assez de détermination pour lui prouver que c'est lui le maître, il peut devenir extrêmement puissant.",
		"gif": "006.gif",
		"evolutions": [
			"Salamèche",
			"Reptincel",
			"Dracaufeu"
		],
		"artwork": [
			"C006.png",
			"Dracaufeu-RB.png"
		],
		"cri" : [
			"Cri_006.ogg"
		]
	},
	{
		"nom": "Carapuce",
		"taille": "0,5 m",
		"poids": "9,0 kg",
		"numéro": "007",
		"type": [
			"Eau"
		],
		"png": "007.png",
		"nom_en": "Squirtle",
		"nom_ja": [
			"Zenigame",
			"ゼニガメ"
		],
		"description": "Les bébés Carapuce sont extrêmement vulnérables à la naissance, car leur carapace est toute molle. C'est pourquoi ils boivent régulièrement une eau riche en minéraux. Elle devient ensuite dure comme de la pierre. S'il est menacé, il se réfugie à l'intérieur et envoie un jet d'eau à son agresseur.",
		"gif": "007.gif",
		"evolutions": [
			"Carapuce",
			"Carabaffe",
			"Tortank"
		],
		"artwork": [
			"C007.png",
			"Carapuce-RB.png"
		],
		"cri" : [
			"Cri_007.ogg"
		]
	},
	{
		"nom": "Carabaffe",
		"taille": "1,0 m",
		"poids": "22,5 kg",
		"numéro": "008",
		"type": [
			"Eau"
		],
		"png": "008.png",
		"nom_en": "Wartortle",
		"nom_ja": [
			"Kamer",
			"カメール"
		],
		"description": "Carabaffe est un nageur émérite. Il contrôle efficacement ses oreilles et sa queue pour s'en servir de gouvernail. C'est un pokémon très apprécié des pompiers, car il crache de puissants jets d'eau tout en pouvant se faufiler un peu partout. Il est pacifique, mais il reste puissant.",
		"gif": "008.gif",
		"evolutions": [
			"Carapuce",
			"Carabaffe",
			"Tortank"
		],
		"artwork": [
			"C008.png",
			"Carabaffe-RB.png"
		],
		"cri" : [
			"Cri_008.ogg"
		]
	},
	{
		"nom": "Tortank",
		"taille": "1,6 m",
		"poids": "85,5 kg",
		"numéro": "009",
		"type": [
			"Eau"
		],
		"png": "009.png",
		"nom_en": "Blastoise",
		"nom_ja": [
			"Kamex",
			"カメックス"
		],
		"description": "Malgré sa puissance et son apparence imposante, Tortank est très apprécié car il a très bon caractère. C'est un pokémon à la nature douce et même un enfant de 7 ans pourrait le contrôler. Mais il est redoutable au combat. Si ses griffes s'ancrent dans le sol, c'est qu'il va tirer un puissant jet d'eau de ses canons.",
		"gif": "009.gif",
		"evolutions": [
			"Carapuce",
			"Carabaffe",
			"Tortank"
		],
		"artwork": [
			"C009.png",
			"Tortank-RB.png"
		],
		"cri" : [
			"Cri_009.ogg"
		]
	},
	{
		"nom": "Chenipan",
		"taille": "0,3 m",
		"poids": "2,9 kg",
		"numéro": "010",
		"type": [
			"Insecte"
		],
		"png": "010.png",
		"nom_en": "Caterpie",
		"nom_ja": [
			"Catapie",
			"キャタピー"
		],
		"description": "S'il paraît mignon, les antennes rouges de Chenipan dégagent en revanche une odeur proche de la moisissure. Les ventouses sur ses pattes lui permettent de grimper partout. Les agriculteurs le considèrent comme nuisible, car il a un appétit d'ogre : un seul Chenipan peut manger toutes les feuilles d'un arbre en quelques jours.",
		"gif": "010.gif",
		"evolutions": [
			"Chenipan",
			"Chrysacier",
			"Papilusion"
		],
		"artwork": [
			"C010.png",
			"Chenipan-RB.png"
		],
		"cri" : [
			"Cri_010.ogg"
		]
	},
	{
		"nom": "Chrysacier",
		"taille": "0,7 m",
		"poids": "9,9 kg",
		"numéro": "011",
		"type": [
			"Insecte"
		],
		"png": "011.png",
		"nom_en": "Metapod",
		"nom_ja": [
			"Trancel",
			"トランセル"
		],
		"description": "Chrysacier est un Pokémon passif. Il attends patiemment que son corps se transforme à l'intérieur de sa carapace. Ce Pokémon a été obligé de développer une puissante armure pour se protéger, car son corps à l'intérieur est mou, et son physique l'empêche de se mouvoir correctement.",
		"gif": "011.gif",
		"evolutions": [
			"Chenipan",
			"Chrysacier",
			"Papilusion"
		],
		"artwork": [
			"C011.png",
			"Chrysacier-RB.png"
		],
		"cri" : [
			"Cri_011.ogg"
		]
	},
	{
		"nom": "Papilusion",
		"taille": "1,1 m",
		"poids": "32,0 kg",
		"numéro": "012",
		"type": [
			"Insecte",
			"Vol"
		],
		"png": "012.png",
		"nom_en": "Butterfree",
		"nom_ja": [
			"Batterfree",
			"バタフリー"
		],
		"description": "Grand amateur de nectar et de miel, Papilusion n'est pas aussi inoffensif qu'il n'en a l'air. Beaucoup de personnes s'approchent de ce Pokémon sans savoir que ses ailes sont recouvertes d'une puissante poudre toxique imperméable. Il maîtrise parfaitement toutes les poudres nocives, comme la Para-spore ou la Poudre toxik.",
		"gif": "012.gif",
		"evolutions": [
			"Chenipan",
			"Chrysacier",
			"Papilusion"
		],
		"artwork": [
			"C012.png",
			"Papilusion-RB.png"
		],
		"cri" : [
			"Cri_012.ogg"
		]
	},
	{
		"nom": "Aspicot",
		"taille": "0,3 m",
		"poids": "3,2 kg",
		"numéro": "013",
		"type": [
			"Insecte",
			"Poison"
		],
		"png": "013.png",
		"nom_en": "Weedle",
		"nom_ja": [
			"Beedle",
			"ビードル"
		],
		"description": "Si vous grimpez dans un arbre, soulevez les feuilles avant d'y poser la main car il se pourrait bien qu'un Aspicot s'y cache. S'il se sent agressé, il utilise la corne sur son front pour se défendre, et une simple piqûre injecte un poison pouvant être mortel. Quand il se prépare a évoluer, Aspicot se réfugie dans un arbre pour se mettre à l'abri.",
		"gif": "013.gif",
		"evolutions": [
			"Aspicot",
			"Coconfort",
			"Dardargnan"
		],
		"artwork": [
			"C013.png",
			"Aspicot-RB.png"
		],
		"cri" : [
			"Cri_013.ogg"
		]
	},
	{
		"nom": "Coconfort",
		"taille": "0,6 m",
		"poids": "10,0 kg",
		"numéro": "014",
		"type": [
			"Insecte",
			"Poison"
		],
		"png": "014.png",
		"nom_en": "Kakuna",
		"nom_ja": [
			"Kokoon",
			"コクーン"
		],
		"description": "On a longtemps cru que les Coconfort ne pouvaient pas se déplacer, mais en réalité ils se déplacent à une vitesse si lente qu'ils mettent plusieurs jours pour faire quelques centimètres. Ne restez jamais près d'un arbre ou des Coconfort sont nichés, car ils abritent en général un nid de Dardargnan.",
		"gif": "014.gif",
		"evolutions": [
			"Aspicot",
			"Coconfort",
			"Dardargnan"
		],
		"artwork": [
			"C014.png",
			"Coconfort-RB.png"
		],
		"cri" : [
			"Cri_014.ogg"
		]
	},
	{
		"nom": "Dardargnan",
		"taille": "1,0 m",
		"poids": "29,5 kg",
		"numéro": "015",
		"type": [
			"Insecte",
			"Poison"
		],
		"png": "015.png",
		"nom_en": "Beedrill",
		"nom_ja": [
			"Spear",
			"スピアー"
		],
		"description": "Dardargnan est extrêmement territorial. Si quelqu'un s'approche de son arbre, il attaque en bande, poursuivant sans relâche l'intrus. Ce Pokémon est un véritable fléau : ses trois dards injectent un poison mortel. Le pire est celui de sa queue, plus foudroyant que les deux autres.",
		"gif": "015.gif",
		"evolutions": [
			"Aspicot",
			"Coconfort",
			"Dardargnan"
		],
		"artwork": [
			"C015.png",
			"Dardagnan-RB.png"
		],
		"cri" : [
			"Cri_015.ogg"
		]
	},
	{
		"nom": "Roucool",
		"taille": "0,3 m",
		"poids": "1,8 kg",
		"numéro": "016",
		"type": [
			"Normal",
			"Vol"
		],
		"png": "016.png",
		"nom_en": "Pidgey",
		"nom_ja": [
			"Poppo",
			"ポッポ"
		],
		"description": "Les Roucool vivent principalement en forêt. Si l'un d'eux est obligé de se battre, il envoie du sable en battant des ailes. Il possède un sens de l'orientation extraordinaire car il parvient toujours à retrouver son nid, où qu'il soit. Avant l'existence du téléphone, on les utilisait comme messagers.",
		"gif": "016.gif",
		"evolutions": [
			"Roucool",
			"Roucoups",
			"Roucarnage"
		],
		"artwork": [
			"C016.png",
			"Roucool-RB.png"
		],
		"cri" : [
			"Cri_016.ogg"
		]
	},
	{
		"nom": "Roucoups",
		"taille": "1,1 m",
		"poids": "30,0 kg",
		"numéro": "017",
		"type": [
			"Normal",
			"Vol"
		],
		"png": "017.png",
		"nom_en": "Pidgeotto",
		"nom_ja": [
			"Pidgeon",
			"ピジョン"
		],
		"description": "Roucoups est un pokémon territorial, qui protège sans pitié son territoire. Si une présence y pénètre, il fond sur elle, toutes serres dehors, et le martèle de coups de becs. Apprivoisé, c'est un excellent éclaireur, et il perd toute agressivité. Par contre, sans pitié contre les Pokémons insectes…",
		"gif": "017.gif",
		"evolutions": [
			"Roucool",
			"Roucoups",
			"Roucarnage"
		],
		"artwork": [
			"C017.png",
			"Roucoups-RB.png"
		],
		"cri" : [
			"Cri_017.ogg"
		]
	},
	{
		"nom": "Roucarnage",
		"taille": "1,5 m",
		"poids": "39,5 kg",
		"numéro": "018",
		"type": [
			"Normal",
			"Vol"
		],
		"png": "018.png",
		"nom_en": "Pidgeot",
		"nom_ja": [
			"Pidgeott",
			"ピジョット"
		],
		"description": "Roucarnage est un pokémon fier et majestueux qui était très prisé au moyen âge pour son courage. Il a une vue incroyable, encore plus précise que celle d'un aigle. En combat, ses puissantes ailes produisent facilement des attaques Cyclones ou Tornades, mais il reste maître dans l'attaque Cru-aile.",
		"gif": "018.gif",
		"evolutions": [
			"Roucool",
			"Roucoups",
			"Roucarnage"
		],
		"artwork": [
			"C018.png",
			"Roucarnage-RB.png"
		],
		"cri" : [
			"Cri_018.ogg"
		]
	},
	{
		"nom": "Rattata",
		"taille": "0,3 m",
		"poids": "3,5 kg",
		"numéro": "019",
		"type": [
			"Normal"
		],
		"png": "019.png",
		"nom_en": "Rattata",
		"nom_ja": [
			"Koratta",
			"コラッタ"
		],
		"description": "Très mignon, Rattata est souvent l'ami des enfants. Sauvage, il vit dans les marais ou les champs, mais il a une préférence pour les grandes villes car il y trouve facilement de la nourriture. Bien que petit, sa morsure est extrêmement puissante. Il prolifère très rapidement.",
		"gif": "019.gif",
		"evolutions": [
			"Rattata",
			"Rattatac"
		],
		"artwork": [
			"C019.png",
			"Rattata-RB.png"
		],
		"cri" : [
			"Cri_019.ogg"
		]
	},
	{
		"nom": "Rattatac",
		"taille": "0,7 m",
		"poids": "18,5 kg",
		"numéro": "020",
		"type": [
			"Normal"
		],
		"png": "020.png",
		"nom_en": "Raticate",
		"nom_ja": [
			"Ratta",
			"ラッタ"
		],
		"description": "Rattatac est constamment obligé de ronger du bois, des cailloux et même parfois des murs pour éviter que ses dents, qui poussent en permanence, ne soient trop grandes. En combat, il est passé maître dans la terrible attaque Croc-fatal, mieux vaut utiliser contre lui un pokémon roche ou acier.",
		"gif": "020.gif",
		"evolutions": [
			"Rattata",
			"Rattatac"
		],
		"artwork": [
			"C020.png",
			"Rattatac-RB.png"
		],
		"cri" : [
			"Cri_020.ogg"
		]
	},
	{
		"nom": "Piafabec",
		"taille": "0,3 m",
		"poids": "2,0 kg",
		"numéro": "021",
		"type": [
			"Normal",
			"Vol"
		],
		"png": "021.png",
		"nom_en": "Spearow",
		"nom_ja": [
			"Onisuzume",
			"オニスズメ"
		],
		"description": "Petit et rapides, les Piafabecs sont pourtant très teigneux. Comme il ne sont pas très puissants, il vivent en clan d'une trentaine de membres. S'ils sont dérangés, ils poussent des piaillements assourdissant et fondent dans une attaque Aéropique. Leur petites ailes leur confèrent une rapidité surprenante.",
		"gif": "021.gif",
		"evolutions": [
			"Piafabec",
			"Rapasdepic"
		],
		"artwork": [
			"C021.png",
			"Piafabec-RB.png"
		],
		"cri" : [
			"Cri_021.ogg"
		]
	},
	{
		"nom": "Rapasdepic",
		"taille": "1,2 m",
		"poids": "38,0 kg",
		"numéro": "022",
		"type": [
			"Normal",
			"Vol"
		],
		"png": "022.png",
		"nom_en": "Fearow",
		"nom_ja": [
			"Onidrill",
			"オニドリル"
		],
		"description": "Rapasdepic est craint de tous les pokémons oiseaux plus petits que lui, car il attaque sans motif apparent. Il aime particulièrement planer au dessus des nuages, là où la plupart des oiseaux ne volent pas. Son bec pointu est excellent dans les attaques Bec-vrille, mais il aime tout particulièrement l'attaque Mimique.",
		"gif": "022.gif",
		"evolutions": [
			"Piafabec",
			"Rapasdepic"
		],
		"artwork": [
			"C022.png",
			"Rapasdepic-RB.png"
		],
		"cri" : [
			"Cri_022.ogg"
		]
	},
	{
		"nom": "Abo",
		"taille": "2,0 m",
		"poids": "6,9 kg",
		"numéro": "023",
		"type": [
			"Poison"
		],
		"png": "023.png",
		"nom_en": "Ekans",
		"nom_ja": [
			"Arbo",
			"アーボ"
		],
		"description": "Abo peut ravager toute une colonie de Piafabec ou de Roucool rien qu'en dévorant ses œufs ou ses petits. Quand il s'endort, il s'enroule de façon à laisser sa tête au dessus, pour pouvoir mordre à tout moment. Son poison n'est pas mortel, mais il provoque une terrible sensation de brûlure, comme le venin d'une méduse.",
		"gif": "023.gif",
		"evolutions": [
			"Abo",
			"Arbok"
		],
		"artwork": [
			"C023.png",
			"Abo-RB.png"
		],
		"cri" : [
			"Cri_023.ogg"
		]
	},
	{
		"nom": "Arbok",
		"taille": "3,5 m",
		"poids": "65,0 kg",
		"numéro": "024",
		"type": [
			"Poison"
		],
		"png": "024.png",
		"nom_en": "Arbok",
		"nom_ja": [
			"Arbok",
			"アーボック"
		],
		"description": "Non content de posséder un poison pouvant tuer 2 Wailords, Arbok tue ses proies en les enserrant dans ses anneaux. Sa force colossale lui permet de broyer les os de ses pauvres victimes. Si vous voyez un Arbok enroulé sur lui-même, ne le croyez pas endormi : il vous mordrait instantanément si vous l'approchiez.",
		"gif": "024.gif",
		"evolutions": [
			"Abo",
			"Arbok"
		],
		"artwork": [
			"C024.png",
			"Arbok-RB.png"
		],
		"cri" : [
			"Cri_024.ogg"
		]
	},
	{
		"nom": "Pikachu",
		"taille": "0,4 m",
		"poids": "6,0 kg",
		"numéro": "025",
		"type": [
			"Électrik"
		],
		"png": "025.png",
		"nom_en": "Pikachu",
		"nom_ja": [
			"Pikachuu",
			"ピカチュウ"
		],
		"description": "Les jours d'orages, on peut apercevoir des Pikachu regroupés en haut des arbres ou des poteaux. Ces Pokémons attendent patiemment que la foudre leur tombe dessus, pour pouvoir recharger au maximum leur réserve d'électricité. Quand il attaque, des milliers de volts sortent par ses joues rouges.",
		"gif": "025.gif",
		"evolutions": [
			"Pikachu",
			"Raichu"
		],
		"artwork": [
			"C025.png",
			"Pikachu-RB.png"
		],
		"cri" : [
			"Cri_025.ogg"
		]
	},
	{
		"nom": "Raichu",
		"taille": "0,8 m",
		"poids": "30,0 kg",
		"numéro": "026",
		"type": [
			"Électrik"
		],
		"png": "026.png",
		"nom_en": "Raichu",
		"nom_ja": [
			"Raichu",
			"ライチュウ"
		],
		"description": "Un Raichu est un Pikachu qui a été exposé à une Pierrefoudre. Sa longue queue en balancier lui est vitale, car quand il est trop chargé en électricité, il la plante dans le sol et diffuse son surplus d'électricité. Raichu préfère largement le combat à distance : il n'attaque qu'avec des attaques électriques. Mais un Plaquage peut survenir n'importe quand.",
		"gif": "026.gif",
		"evolutions": [
			"Pikachu",
			"Raichu"
		],
		"artwork": [
			"C026.png",
			"Raichu-RB.png"
		],
		"cri" : [
			"Cri_026.ogg"
		]
	},
	{
		"nom": "Sabelette",
		"taille": "0,6 m",
		"poids": "12,0 kg",
		"numéro": "027",
		"type": [
			"Sol"
		],
		"png": "027.png",
		"nom_en": "Sandshrew",
		"nom_ja": [
			"Sand",
			"サンド"
		],
		"description": "Sabelette vit uniquement dans le désert, car il ne supporte pas du tout l'humidité. Il boit en récoltant la rosée du matin. Pokémon plutôt farouche à l'état sauvage, il est très affectueux avec son dresseur si celui-ci s'occupe bien de lui. Le seul inconvénient : il ne peut pas s'empêcher de creuser.",
		"gif": "027.gif",
		"evolutions": [
			"Sabelette",
			"Sablaireau"
		],
		"artwork": [
			"C0027.png",
			"Sablette-RB.png"
		],
		"cri" : [
			"Cri_027.ogg"
		]
	},
	{
		"nom": "Sablaireau",
		"taille": "1,0 m",
		"poids": "29,5 kg",
		"numéro": "028",
		"type": [
			"Sol"
		],
		"png": "028.png",
		"nom_en": "Sandslash",
		"nom_ja": [
			"Sandpan",
			"サンドパン"
		],
		"description": "Sablaireau est un Pokémon qui adore creuser. Parfois, il est si excité en creusant qu'il se casse les griffes ou ses épines sur des rochers mais heureusement, elles tombent et repoussent rapidement. S'il est agressé, il se roule en boule, et forme une balle hérissée de piques tranchantes.",
		"gif": "028.gif",
		"evolutions": [
			"Sabelette",
			"Sablaireau"
		],
		"artwork": [
			"C028.png",
			"Sablaireau-RB.png"
		],
		"cri" : [
			"Cri_028.ogg"
		]
	},
	{
		"nom": "Nidoran♀",
		"taille": "0,4 m",
		"poids": "7,0 kg",
		"numéro": "029",
		"type": [
			"Poison"
		],
		"png": "029.png",
		"nom_en": "Nidoran F",
		"nom_ja": [
			"Nidoran F",
			"ニドラン♀"
		],
		"description": "Nidoran femelle n'aime pas combattre, et préfère se défendre grâce à ses épines empoisonnées. Ses dards sont plus petits que ceux du mâle, mais ils injectent le même poison. Apprivoisé, ce pauvre Pokémon souffre d'un manque d'affection car personne n'ose la caresser.",
		"gif": "029.gif",
		"evolutions": [
			"Nidoran♀",
			"Nidorina",
			"Nidoqueen"
		],
		"artwork": [
			"C029.png",
			"Nidoran_f-RB.png"
		],
		"cri" : [
			"Cri_029.ogg"
		]
	},
	{
		"nom": "Nidorina",
		"taille": "0,8 m",
		"poids": "20,0 kg",
		"numéro": "030",
		"type": [
			"Poison"
		],
		"png": "030.png",
		"nom_en": "Nidorina",
		"nom_ja": [
			"Nidorina",
			"ニドリーナ"
		],
		"description": "Nidorina a la capacité de replier ses pointes pour ne pas blesser sa famille ou ses proches. Mais dès qu'elle combat, elle les ressort et s'en sert pour empoisonner son ennemi. Le manque d'affection qu'elle a reçu durant le temps où elle était Nidoran l'a rendue très fidèle.",
		"gif": "030.gif",
		"evolutions": [
			"Nidoran♀",
			"Nidorina",
			"Nidoqueen"
		],
		"artwork": [
			"C030.png",
			"Nidorina-RB.png"
		],
		"cri" : [
			"Cri_030.ogg"
		]
	},
	{
		"nom": "Nidoqueen",
		"taille": "1,3 m",
		"poids": "60,0 kg",
		"numéro": "031",
		"type": [
			"Poison",
			"Sol"
		],
		"png": "031.png",
		"nom_en": "Nidoqueen",
		"nom_ja": [
			"Nidoqueen",
			"ニドクイン"
		],
		"description": "La carapace qui protège Nidoqueen est très dure. D'une nature douce, elle peut devenir extrêmement agressive si elle protège ses petits. La corne sur son front secrète un poison, mais elle ne l'utilise que très rarement. Ses Ultimapoings peuvent facilement briser un mur en deux.",
		"gif": "031.gif",
		"evolutions": [
			"Nidoran♀",
			"Nidorina",
			"Nidoqueen"
		],
		"artwork": [
			"C031.png",
			"Nidoqueen-RB.png"
		],
		"cri" : [
			"Cri_031.ogg"
		]
	},
	{
		"nom": "Nidoran♂",
		"taille": "0,5 m",
		"poids": "9,0 kg",
		"numéro": "032",
		"type": [
			"Poison"
		],
		"png": "032.png",
		"nom_en": "Nidoran M",
		"nom_ja": [
			"Nidoran M",
			"ニドラン♂"
		],
		"description": "Les grandes oreilles de Nidoran mâle sont très sensibles. Il peut les orienter à sa guise pour entendre ses ennemis arriver. S'il sent une présence hostile, il se tapit dans les hautes herbes et attends qu'on lui marche dessus pour l'empoisonner grâce aux aiguillons de son dos.",
		"gif": "032.gif",
		"evolutions": [
			"Nidoran♂",
			"Nidorino",
			"Nidoking"
		],
		"artwork": [
			"C032.png",
			"Nidoran_m-RB.png"
		],
		"cri" : [
			"Cri_032.ogg"
		]
	},
	{
		"nom": "Nidorino",
		"taille": "0,9 m",
		"poids": "19,5 kg",
		"numéro": "033",
		"type": [
			"Poison"
		],
		"png": "033.png",
		"nom_en": "Nidorino",
		"nom_ja": [
			"Nidorino",
			"ニドリーノ"
		],
		"description": "Quand il combat, Nidorino hérisse toutes ses pointes empoisonnées pour faire peur à son ennemi. C'est un Pokémon féroce qui adore combattre, et sa corne injecte un poison la plupart du temps mortel. Nidorino est solitaire, car s'il rencontre un de ses congénère, il le défie dans un combat sans pitié, dont l'issue est souvent mortelle.",
		"gif": "033.gif",
		"evolutions": [
			"Nidoran♂",
			"Nidorino",
			"Nidoking"
		],
		"artwork": [
			"C033.png",
			"Nidorino-RB.png"
		],
		"cri" : [
			"Cri_033.ogg"
		]
	},
	{
		"nom": "Nidoking",
		"taille": "1,4 m",
		"poids": "62,0 kg",
		"numéro": "034",
		"type": [
			"Poison",
			"Sol"
		],
		"png": "034.png",
		"nom_en": "Nidoking",
		"nom_ja": [
			"Nidoking",
			"ニドキング"
		],
		"description": "Nidoking est un des Pokémon les plus violent qui existent. Il enserre son ennemi avec sa queue dure comme de l'acier et lui broie la colonne vertébrale comme un biscuit sec. Sa force colossale lui permet de soulever un bus, et de le plier en deux. Ce terrible Pokémon est craint de tous et peu de gens osent défier un Nidoking sauvage.",
		"gif": "034.gif",
		"evolutions": [
			"Nidoran♂",
			"Nidorino",
			"Nidoking"
		],
		"artwork": [
			"C034.png",
			"Nidoking-RB.png"
		],
		"cri" : [
			"Cri_034.ogg"
		]
	},
	{
		"nom": "Mélofée",
		"taille": "0,6 m",
		"poids": "7,5 kg",
		"numéro": "035",
		"type": [
			"Fée"
		],
		"png": "035.png",
		"nom_en": "Clefairy",
		"nom_ja": [
			"Pippi",
			"ピッピ"
		],
		"description": "Mélofée est un Pokémon rare, qui vit uniquement sur le Mont Sélénite, à Kanto. Il est bizarrement apparut juste après qu'une météorite se soit écrasée dessus, c'est pourquoi les scientifiques pensent qu'il est d'origine extra-terrestre. Mignon, c'est un ennemi redoutable, car son attaque Métronome est totalement imprévisible.",
		"gif": "035.gif",
		"evolutions": [
			"Mélofée",
			"Mélodelfe"
		],
		"artwork": [
			"C035.png",
			"Mélofée-RB.png"
		],
		"cri" : [
			"Cri_035.ogg"
		]
	},
	{
		"nom": "Mélodelfe",
		"taille": "1,3 m",
		"poids": "40,0 kg",
		"numéro": "036",
		"type": [
			"Fée"
		],
		"png": "036.png",
		"nom_en": "Clefable",
		"nom_ja": [
			"Pixy",
			"ピクシー"
		],
		"description": "Les Mélodelfes aiment vivre dans les clans de Mélofée, sur le mont Sélénite. Grâce à leurs grandes oreilles, ils peuvent entendre les montagnards escalader le Mont Sélénite, et se cacher. Si jamais vous débusquez un Mélodelfe, ne lui faites pas peur sinon il utilisera son Métronome.",
		"gif": "036.gif",
		"evolutions": [
			"Mélofée",
			"Mélodelfe"
		],
		"artwork": [
			"C036.png",
			"Mélodelfe-RB.png"
		],
		"cri" : [
			"Cri_036.ogg"
		]
	},
	{
		"nom": "Goupix",
		"taille": "0,6 m",
		"poids": "9,9 kg",
		"numéro": "037",
		"type": [
			"Feu"
		],
		"png": "037.png",
		"nom_en": "Vulpix",
		"nom_ja": [
			"Rokon",
			"ロコン"
		],
		"description": "Quand il naît, le bébé Goupix n'a qu'une seule queue, qui se divisera plus tard en six s'il est bien soigné. Même tout petit, il est parfaitement capable de se défendre car il sait cracher du feu, et si l'ennemi ne recule pas, il envoie une attaque Onde folie. Son pelage tout doux lui donne l'apparence d'une peluche.",
		"gif": "037.gif",
		"evolutions": [
			"Goupix",
			"Feunard"
		],
		"artwork": [
			"C037.png",
			"Goupix-RB.png"
		],
		"cri" : [
			"Cri_037.ogg"
		]
	},
	{
		"nom": "Feunard",
		"taille": "1,1 m",
		"poids": "19,9 kg",
		"numéro": "038",
		"type": [
			"Feu"
		],
		"png": "038.png",
		"nom_en": "Ninetales",
		"nom_ja": [
			"Kyukon",
			"キュウコン"
		],
		"description": "Feunard a longtemps été vénéré, car les gens pensaient qu'il était légendaire. C'est un Pokémon gracieux, dont les nombreuses queues se balancent au rythme de ses pas légers. Beaucoup de dresseurs convoitent Feunard, pour sa beauté et pour sa puissance au combat.",
		"gif": "038.gif",
		"evolutions": [
			"Goupix",
			"Feunard"
		],
		"artwork": [
			"C038.png",
			"Feunard-RB.png"
		],
		"cri" : [
			"Cri_038.ogg"
		]
	},
	{
		"nom": "Rondoudou",
		"taille": "0,5 m",
		"poids": "5,5 kg",
		"numéro": "039",
		"type": [
			"Normal",
			"Fée"
		],
		"png": "039.png",
		"nom_en": "Jigglypuff",
		"nom_ja": [
			"Purin",
			"プリン"
		],
		"description": "Rondoudou ne peut pas s'empêcher de chanter. S'il se fait agresser, il entame une berceuse qui endort immédiatement son ennemi, et en profite pour prendre la fuite en roulant. Quand il chante, ses oreilles son automatiquement bouchées car sinon, il s'endormirait lui-même.",
		"gif": "039.gif",
		"evolutions": [
			"Rondoudou",
			"Grodoudou"
		],
		"artwork": [
			"C039.png",
			"Rondoudou-RB.png"
		],
		"cri" : [
			"Cri_039.ogg"
		]
	},
	{
		"nom": "Grodoudou",
		"taille": "1,0 m",
		"poids": "12,0 kg",
		"numéro": "040",
		"type": [
			"Normal",
			"Fée"
		],
		"png": "040.png",
		"nom_en": "Wigglytuff",
		"nom_ja": [
			"Pukurin",
			"プクリン"
		],
		"description": "Avec ses yeux immenses, Grodoudou rappelle une grosse peluche. C'est un Pokémon très doux, très apprécié des enfants et des parents. Personne ne peut résister à sa berceuse. Si vous voyez un Grodoudou pleurer, ce n'est pas parce qu'il est triste mais c'est parce qu'il nettoie ses grands yeux.",
		"gif": "040.gif",
		"evolutions": [
			"Rondoudou",
			"Grodoudou"
		],
		"artwork": [
			"C040.png",
			"Grodoudou-RB.png"
		],
		"cri" : [
			"Cri_040.ogg"
		]
	},
	{
		"nom": "Nosferapti",
		"taille": "0,8 m",
		"poids": "7,5 kg",
		"numéro": "041",
		"type": [
			"Poison",
			"Vol"
		],
		"png": "041.png",
		"nom_en": "Zubat",
		"nom_ja": [
			"Zubat",
			"ズバット"
		],
		"description": "Dans toutes les cavernes, il y a des groupes de Nosférapti. Il n'en sortent jamais, sauf durant la nuit car une exposition prolongée au soleil leur brûlent la peau. Complètement aveugle, Nosférapti envoie des Ultrasons qui se répercutent sur les parois. Il les décrypte ensuite avec ses grandes oreilles, et peut ainsi éviter les obstacles.",
		"gif": "041.gif",
		"evolutions": [
			"Nosferapti",
			"Nosferalto"
		],
		"artwork": [
			"C041.png",
			"Nosferapti-RB.png"
		],
		"cri" : [
			"Cri_041.ogg"
		]
	},
	{
		"nom": "Nosferalto",
		"taille": "1,6 m",
		"poids": "55,0 kg",
		"numéro": "042",
		"type": [
			"Poison",
			"Vol"
		],
		"png": "042.png",
		"nom_en": "Golbat",
		"nom_ja": [
			"Golbat",
			"ゴルバット"
		],
		"description": "Il y a quelques centaines d'années, on chassait les Nosféralto, car il aiment boire du sang frais. Ils ont depuis été protégés. Ils sortent des cavernes les nuits sans lunes, et utilisent leurs deux petits crocs pointus pour percer la peau de leur victime, et ensuite se délecter à loisir de leur sang. Il n'en prélèvent jamais une quantité vitale.",
		"gif": "042.gif",
		"evolutions": [
			"Nosferapti",
			"Nosferalto"
		],
		"artwork": [
			"C042.png",
			"Nosferalto-RB.png"
		],
		"cri" : [
			"Cri_042.ogg"
		]
	},
	{
		"nom": "Mystherbe",
		"taille": "0,5 m",
		"poids": "5,4 kg",
		"numéro": "043",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "043.png",
		"nom_en": "Oddish",
		"nom_ja": [
			"Nazonokusa",
			"ナゾノクサ"
		],
		"description": "Mystherbe reste sous terre toute la journée pour absorber des nutriments, vitaux pour sa croissance. Il ne sort qu'à la tombée de la nuit, s'il est sûr qu'il est seul. Il en profite alors pour disséminer un peu partout ses graines. S'il commence à secouer ses feuilles, c'est qu'il se prépare à lancer une poudre toxique comme Para-spore.",
		"gif": "043.gif",
		"evolutions": [
			"Mystherbe",
			"Ortide",
			"Rafflesia"
		],
		"artwork": [
			"C043.png",
			"Mystherbe-RB.png"
		],
		"cri" : [
			"Cri_043.ogg"
		]
	},
	{
		"nom": "Ortide",
		"taille": "0,8 m",
		"poids": "8,6 kg",
		"numéro": "044",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "044.png",
		"nom_en": "Gloom",
		"nom_ja": [
			"Kusaihana",
			"クサイハナ"
		],
		"description": "Ortide dégage une odeur pestilentielle s'il n'aime pas son dresseur ou s'il ne se sent pas en sécurité. Quand il combat, il envoie sur son ennemi des poudres nocives, et l'achève avec un liquide violet nocif : de l'Acide. Il paraît que le liquide qui coule de sa bouche est sucré, mais personne n'ose y goûter !",
		"gif": "044.gif",
		"evolutions": [
			"Mystherbe",
			"Ortide",
			"Rafflesia"
		],
		"artwork": [
			"C044.png",
			"Ortide-RB.png"
		],
		"cri" : [
			"Cri_044.ogg"
		]
	},
	{
		"nom": "Rafflesia",
		"taille": "1,2 m",
		"poids": "18,6 kg",
		"numéro": "045",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "045.png",
		"nom_en": "Vileplume",
		"nom_ja": [
			"Rafureissa",
			"ラフレシア"
		],
		"description": "A l'état sauvage, Rafflesia vit uniquement dans la jungle. Quand il dort, il immerge sous terre la partie inférieure de son corps, tandis que sa fleur reste à l'extérieur. Si une présence s'approche, il libère inconsciemment une terrible poudre allergène, mortelle si on n'agit pas à temps.",
		"gif": "045.gif",
		"evolutions": [
			"Mystherbe",
			"Ortide",
			"Rafflesia"
		],
		"artwork": [
			"C045.png",
			"Rafflesia-RB.png"
		],
		"cri" : [
			"Cri_045.ogg"
		]
	},
	{
		"nom": "Paras",
		"taille": "0,3 m",
		"poids": "5,4 kg",
		"numéro": "046",
		"type": [
			"Insecte",
			"Plante"
		],
		"png": "046.png",
		"nom_en": "Paras",
		"nom_ja": [
			"Paras",
			"パラス"
		],
		"description": "Paras a sur son dos deux champignons parasites, mais il ne semble pas en souffrir. Il arrive parfois d'en croiser un avec trois champignons. Les scientifiques pensent que le champignon se transmet de génération en génération. Un Paras sans champignons sur son dos est destiné à mourir peu de temps après.",
		"gif": "046.gif",
		"evolutions": [
			"Paras",
			"Parasect"
		],
		"artwork": [
			"C046.png",
			"Paras-RB.png"
		],
		"cri" : [
			"Cri_046.ogg"
		]
	},
	{
		"nom": "Parasect",
		"taille": "1,0 m",
		"poids": "29,5 kg",
		"numéro": "047",
		"type": [
			"Insecte",
			"Plante"
		],
		"png": "047.png",
		"nom_en": "Parasect",
		"nom_ja": [
			"Parasect",
			"パラセクト"
		],
		"description": "A cause de son apparence, Parasect semble être mi-champignon, mi-Pokémon. Les scientifiques ont longtemps pensé que les deux organismes luttaient sans arrêt l'un contre l'autre, mais en réalité c'est une sorte d'alliance : Parasect fournit des nutriments au champignon, en échange, le végétal lui fournit toute une palette de poudres agressives.",
		"gif": "047.gif",
		"evolutions": [
			"Paras",
			"Parasect"
		],
		"artwork": [
			"C047.png",
			"Parasect-RB.png"
		],
		"cri" : [
			"Cri_047.ogg"
		]
	},
	{
		"nom": "Mimitoss",
		"taille": "1,0 m",
		"poids": "30,0 kg",
		"numéro": "048",
		"type": [
			"Insecte",
			"Poison"
		],
		"png": "048.png",
		"nom_en": "Venonat",
		"nom_ja": [
			"Kongpang",
			""
		],
		"description": "Les yeux de Mimitoss sont extrêmement perçants. S'il est puissant, il peut même réussir à voir à travers de fins matériaux, comme de l'herbe ou des feuilles. Il vit en général dans les grandes clairières tropicales, là ou les herbes sont hautes. Ce Pokémon passe son temps à courir dedans pour échapper à ses prédateurs.",
		"gif": "048.gif",
		"evolutions": [
			"Mimitoss",
			"Aéromite"
		],
		"artwork": [
			"C048.png",
			"Mimitoss-RB.png"
		],
		"cri" : [
			"Cri_048.ogg"
		]
	},
	{
		"nom": "Aéromite",
		"taille": "1,5 m",
		"poids": "12,5 kg",
		"numéro": "049",
		"type": [
			"Insecte",
			"Poison"
		],
		"png": "049.png",
		"nom_en": "Venomoth",
		"nom_ja": [
			"Morphon",
			"モルフォン"
		],
		"description": "Aéromite affectionne particulièrement les forêts, qu'elles soient tempérées, tropicales ou marécageuses. Lorsqu'il vole, une poudre toxique invisible tombe de ses ailes. Ce Pokémon est hautement toxique, car il combine de la Poudre toxik avec une attaque Tornade, ce qui a pour effet de la propager partout.",
		"gif": "049.gif",
		"evolutions": [
			"Mimitoss",
			"Aéromite"
		],
		"artwork": [
			"C049.png",
			"Aéromite-RB.png"
		],
		"cri" : [
			"Cri_049.ogg"
		]
	},
	{
		"nom": "Taupiqueur",
		"taille": "0,2 m",
		"poids": "0,8 kg",
		"numéro": "050",
		"type": [
			"Sol"
		],
		"png": "050.png",
		"nom_en": "Diglett",
		"nom_ja": [
			"Digda",
			"ディグダ"
		],
		"description": "Il est déconseillé de construire des habitations au dessus de galeries de Taupiqueur, car le poids pourrait faire tout effondrer. Ils sont en revanche très appréciés des agriculteurs, car apprivoisés, il rendent la terre bien meuble et creusent de parfaits sillons. Personne n'a jamais vu un Taupiqueur en entier.",
		"gif": "050.gif",
		"evolutions": [
			"Taupiqueur",
			"Triopikeur"
		],
		"artwork": [
			"C050.png",
			"Taupiqueur-RB.png"
		],
		"cri" : [
			"Cri_050.ogg"
		]
	},
	{
		"nom": "Triopikeur",
		"taille": "0,7 m",
		"poids": "33,3 kg",
		"numéro": "051",
		"type": [
			"Sol"
		],
		"png": "051.png",
		"nom_en": "Dugtrio",
		"nom_ja": [
			"Dugtrio",
			"ダグトリオ"
		],
		"description": "Comme les Magnétons, les Triopikeur sont une association de trois Taupiqueur. Ils creusent beaucoup plus rapidement, et peuvent parfois, s'ils sont courroucés, lancer un puissant Séisme. Si une arène est en béton, un dresseur ne pourras pas utiliser son Triopikeur car, ne pouvant pas creuser, il refusera de sortir de sa Pokéball.",
		"gif": "051.gif",
		"evolutions": [
			"Taupiqueur",
			"Triopikeur"
		],
		"artwork": [
			"C051.png",
			"Triopikeur-RB.png"
		],
		"cri" : [
			"Cri_051.ogg"
		]
	},
	{
		"nom": "Miaouss",
		"taille": "0,4 m",
		"poids": "4,2 kg",
		"numéro": "052",
		"type": [
			"Normal"
		],
		"png": "052.png",
		"nom_en": "Meowth",
		"nom_ja": [
			"Nyasu",
			"ニャース"
		],
		"description": "Miaouss est un Pokémon qui préfère largement vivre dans les villes plutôt que dans la nature. Il fouille les poubelles et se nourrit des déchets qu'il y trouve. Apprivoisé, il passe son temps sur les genoux de son maître à se faire caresser. Beaucoup essayent de le forcer à utiliser son attaque Jackpot, mais Miaouss est trop rusé pour accepter.",
		"gif": "052.gif",
		"evolutions": [
			"Miaouss",
			"Persian"
		],
		"artwork": [
			"C052.png",
			"Miaouss-RB.png"
		],
		"cri" : [
			"Cri_052.ogg"
		]
	},
	{
		"nom": "Persian",
		"taille": "1,0 m",
		"poids": "32,0 kg",
		"numéro": "053",
		"type": [
			"Normal"
		],
		"png": "053.png",
		"nom_en": "Persian",
		"nom_ja": [
			"Persian",
			"ペルシアン"
		],
		"description": "Un Persian apprivoisé a le même caractère que son maître. Si celui-ci est mauvais, le Pokémon devient vite arrogant et agressif, sauf avec lui. Sauvage, il se tapit dans les hautes herbes et bondit brusquement, toutes griffes sorties, sur la malheureuse proie. Ses griffes acérées ne laissent aucune chance à la victime.",
		"gif": "053.gif",
		"evolutions": [
			"Miaouss",
			"Persian"
		],
		"artwork": [
			"C053.png",
			"Persian-RB.png"
		],
		"cri" : [
			"Cri_053.ogg"
		]
	},
	{
		"nom": "Psykokwak",
		"taille": "0,8 m",
		"poids": "19,6 kg",
		"numéro": "054",
		"type": [
			"Eau"
		],
		"png": "054.png",
		"nom_en": "Psyduck",
		"nom_ja": [
			"Koduck",
			"コダック"
		],
		"description": "Psykokwak est un étrange Pokémon mi-aquatique, mi-psy. Ce pauvre Pokémon a la migraine en permanence, et quand celle-ci atteint son paroxysme, il utilise de puissants pouvoirs psy sans s'en rendre compte. Il maîtrise alors l'attaque Choc mental avec perfection.",
		"gif": "054.gif",
		"evolutions": [
			"Psykokwak",
			"Akwakwak"
		],
		"artwork": [
			"C054.png",
			"Psykokwak-RB.png"
		],
		"cri" : [
			"Cri_054.ogg"
		]
	},
	{
		"nom": "Akwakwak",
		"taille": "1,7 m",
		"poids": "76,6 kg",
		"numéro": "055",
		"type": [
			"Eau"
		],
		"png": "055.png",
		"nom_en": "Golduck",
		"nom_ja": [
			"Golduck",
			"ゴルダック"
		],
		"description": "Akwakwak est un excellent nageur, qui aime s'entraîner à nager contre les courants marins pour se muscler. La perle sur son front lui prodigue de puissants pouvoirs psy, et les griffes au bout de ses pattes sont acérées. Beaucoup de dresseurs de Pokémons aquatiques aimeraient en posséder un.",
		"gif": "055.gif",
		"evolutions": [
			"Psykokwak",
			"Akwakwak"
		],
		"artwork": [
			"C055.png",
			"Akwakwak-RB.png"
		],
		"cri" : [
			"Cri_055.ogg"
		]
	},
	{
		"nom": "Férosinge",
		"taille": "0,5 m",
		"poids": "28,0 kg",
		"numéro": "056",
		"type": [
			"Combat"
		],
		"png": "056.png",
		"nom_en": "Mankey",
		"nom_ja": [
			"Mankey",
			"マンキー"
		],
		"description": "Ferosinge est un Pokémon hyperactif qui ne dort pratiquement pas. Il se balance rapidement d'arbre en arbre, et la moindre chose peut le mettre en colère. Quand il se bat, en général il ne compte pas sur sa puissance mais sur son agilité, et décoche rapidement des coups de griffe dans le dos de son ennemi.",
		"gif": "056.gif",
		"evolutions": [
			"Férosinge",
			"Colossinge"
		],
		"artwork": [
			"C056.png",
			"Férosinge-RB.png"
		],
		"cri" : [
			"Cri_056.ogg"
		]
	},
	{
		"nom": "Colossinge",
		"taille": "1,0 m",
		"poids": "32,0 kg",
		"numéro": "057",
		"type": [
			"Combat"
		],
		"png": "057.png",
		"nom_en": "Primeape",
		"nom_ja": [
			"Okorizaru",
			"オコリザル"
		],
		"description": "Colosinge a un épouvantable caractère. Il n'existe pas un seul Colossinge pacifique. Quand ce Pokémon se met en rogne contre quelqu'un, cela devient son obsession, il en oublie même de manger ou de boire et ne pense qu'à le frapper. Quand il est « relativement » calme, il s'entraîne en frappant dans des arbres ou des rochers.",
		"gif": "057.gif",
		"evolutions": [
			"Férosinge",
			"Colossinge"
		],
		"artwork": [
			"C057.png",
			"Colossinge-RB.png"
		],
		"cri" : [
			"Cri_057.ogg"
		]
	},
	{
		"nom": "Caninos",
		"taille": "0,7 m",
		"poids": "19,0 kg",
		"numéro": "058",
		"type": [
			"Feu"
		],
		"png": "058.png",
		"nom_en": "Growlithe",
		"nom_ja": [
			"Gardie",
			"ガーディ"
		],
		"description": "Caninos est très fidèle. Loyal, il préfère se sauver plutôt que d'attaquer son maître si celui-ci est injuste envers lui. Ce Pokémon est très apprécié car il est difficile de trouver plus affectueux et plus protecteur que lui. Il aime beaucoup jouer, c'est pour cela que c'est un grand ami des enfants.",
		"gif": "058.gif",
		"evolutions": [
			"Caninos",
			"Arcanin"
		],
		"artwork": [
			"C058.png",
			"Caninos-RB.png"
		],
		"cri" : [
			"Cri_058.ogg"
		]
	},
	{
		"nom": "Arcanin",
		"taille": "1,9 m",
		"poids": "155,0 kg",
		"numéro": "059",
		"type": [
			"Feu"
		],
		"png": "059.png",
		"nom_en": "Arcanine",
		"nom_ja": [
			"Windie",
			"ウインディ"
		],
		"description": "Arcanin fait partie des légendes Chinoises. Il a longtemps été considéré comme légendaire, car on pensait qu'il courait avec le vent. Sous ses aspects terrifiants, il est doux et fidèle, et les dresseurs s'en servent comme monture. Quand il combat, il crache des flammes impressionnantes.",
		"gif": "059.gif",
		"evolutions": [
			"Caninos",
			"Arcanin"
		],
		"artwork": [
			"C059.png",
			"Arcanin-RB.png"
		],
		"cri" : [
			"Cri_059.ogg"
		]
	},
	{
		"nom": "Ptitard",
		"taille": "0,6 m",
		"poids": "12,4 kg",
		"numéro": "060",
		"type": [
			"Eau"
		],
		"png": "060.png",
		"nom_en": "Poliwag",
		"nom_ja": [
			"Nyoromo",
			"ニョロモ"
		],
		"description": "Ptitard vit dans les lacs ou les étangs. Il peut nager à bonne vitesse car sa queue est une nageoire efficace mais par contre, il est beaucoup moins adroit sur terre car ses petites pattes n'offrent pas un très bon équilibre. Une fine muqueuse lui entoure le corps, ce qui le rends très glissant.",
		"gif": "060.gif",
		"evolutions": [
			"Ptitard",
			"Têtarte",
			"Tartard"
		],
		"artwork": [
			"C060.png",
			"Ptitard-RB.png"
		],
		"cri" : [
			"Cri_060.ogg"
		]
	},
	{
		"nom": "Têtarte",
		"taille": "1,0 m",
		"poids": "20,0 kg",
		"numéro": "061",
		"type": [
			"Eau"
		],
		"png": "061.png",
		"nom_en": "Poliwhirl",
		"nom_ja": [
			"Nyorozo",
			"ニョロゾ"
		],
		"description": "Quand la spirale sur le ventre de Tetarte commence à tourner, il ne faut surtout pas la regarder car sinon, on s'endort immédiatement. Personne ne sait dans quelle sens elle tourne car tout le monde s'endort avant d'avoir vu. Il est relativement à l'aise sur terre, mais son élément reste l'eau.",
		"gif": "061.gif",
		"evolutions": [
			"Ptitard",
			"Têtarte",
			"Tartard"
		],
		"artwork": [
			"C061.png",
			"Têtarte-RB.png"
		],
		"cri" : [
			"Cri_061.ogg"
		]
	},
	{
		"nom": "Tartard",
		"taille": "1,3 m",
		"poids": "54,0 kg",
		"numéro": "062",
		"type": [
			"Eau",
			"Combat"
		],
		"png": "062.png",
		"nom_en": "Poliwrath",
		"nom_ja": [
			"Nyorobon",
			"ニョロボン"
		],
		"description": "Tartard défend férocement son territoire, ne laissant dépasser que ses deux yeux de la surface de l'eau pour surveiller les alentours. Il utilise des attaques d'eau, mais il fait aussi tâter de ses poings à ses ennemis. Plutôt trapu, il n'est pas très rapide sur terre, mais une fois dans l'eau, il se déplace très rapidement.",
		"gif": "062.gif",
		"evolutions": [
			"Ptitard",
			"Têtarte",
			"Tartard"
		],
		"artwork": [
			"C062.png",
			"Tartard-RB.png"
		],
		"cri" : [
			"Cri_062.ogg"
		]
	},
	{
		"nom": "Abra",
		"taille": "0,9 m",
		"poids": "19,5 kg",
		"numéro": "063",
		"type": [
			"Psy"
		],
		"png": "063.png",
		"nom_en": "Abra",
		"nom_ja": [
			"Casey",
			"ケーシィ"
		],
		"description": "Abra dort dix-huit heures par jour, mais pourtant, même éveillé, ses yeux restent fermés. Des dresseurs d'Abra affirment que les rares fois où ils ouvrent leurs yeux, ceux-ci sont entièrement rouges. Il peut sentir à n'importe quel moment quand il est en danger, et se téléporte pour se mettre en lieu sûr.",
		"gif": "063.gif",
		"evolutions": [
			"Abra",
			"Kadabra",
			"Alakazam"
		],
		"artwork": [
			"C063.png",
			"Abra-RB.png"
		],
		"cri" : [
			"Cri_063.ogg"
		]
	},
	{
		"nom": "Kadabra",
		"taille": "1,3 m",
		"poids": "56,5 kg",
		"numéro": "064",
		"type": [
			"Psy"
		],
		"png": "064.png",
		"nom_en": "Kadabra",
		"nom_ja": [
			"Yunghelor",
			"ユンゲラー"
		],
		"description": "Kadabra émet en permanence une puissante onde psychique, et rester trop longtemps auprès de lui donne la migraine. Sa cuillère traduit ses ondes psychiques en puissantes attaques psy. Juste par la pensée, il peut soulever trois Ronflex en même temps.",
		"gif": "064.gif",
		"evolutions": [
			"Abra",
			"Kadabra",
			"Alakazam"
		],
		"artwork": [
			"C064.png",
			"Kadabra-RB.png"
		],
		"cri" : [
			"Cri_064.ogg"
		]
	},
	{
		"nom": "Alakazam",
		"taille": "1,5 m",
		"poids": "48,0 kg",
		"numéro": "065",
		"type": [
			"Psy"
		],
		"png": "065.png",
		"nom_en": "Alakazam",
		"nom_ja": [
			"Fudin",
			"フーディン"
		],
		"description": "Alakazam est un Pokémon qui n'aime pas l'effort physique. Il utilise sa Télékinésie pour toutes ses actions : manger, amener un objet à lui… Les scientifiques on démontré que si Alakazam utilisait des cuillères à café plutôt que des cuillères à soupes, leur pouvoir était moins puissant.",
		"gif": "065.gif",
		"evolutions": [
			"Abra",
			"Kadabra",
			"Alakazam"
		],
		"artwork": [
			"C065.png",
			"Alakazam-RB.png"
		],
		"cri" : [
			"Cri_065.ogg"
		]
	},
	{
		"nom": "Machoc",
		"taille": "0,8 m",
		"poids": "19,5 kg",
		"numéro": "066",
		"type": [
			"Combat"
		],
		"png": "066.png",
		"nom_en": "Machop",
		"nom_ja": [
			"Wanrikie",
			"ワンリキー"
		],
		"description": "En général utilisé pour les tâches physiques, on trouve souvent des Machoc sur les chantiers. Ils adorent tout ce qui est musculation, et travailler pour les hommes est comme un jeu pour eux. Il ont des muscles spéciaux qui empêchent les courbatures et les claquages musculaires.",
		"gif": "066.gif",
		"evolutions": [
			"Machoc",
			"Machopeur",
			"Mackogneur"
		],
		"artwork": [
			"C066.png",
			"Machoc-RB.png"
		],
		"cri" : [
			"Cri_066.ogg"
		]
	},
	{
		"nom": "Machopeur",
		"taille": "1,5 m",
		"poids": "70,5 kg",
		"numéro": "067",
		"type": [
			"Combat"
		],
		"png": "067.png",
		"nom_en": "Machoke",
		"nom_ja": [
			"Gorikie",
			"ゴーリキー"
		],
		"description": "Machopeur est si fort que, parfois il a du mal à contrôler ses muscles. C'est pour ça que chaque Machopeur a une ceinture spéciale qui l'aide à se contrôler. Ses muscles sont durs comme de la pierre : il ne le sentirait même pas si vous tapiez dessus avec un marteau. D'un coup de poings, il peut briser un bloc d'acier en deux.",
		"gif": "067.gif",
		"evolutions": [
			"Machoc",
			"Machopeur",
			"Mackogneur"
		],
		"artwork": [
			"C067.png",
			"Machopeur-RB.png"
		],
		"cri" : [
			"Cri_067.ogg"
		]
	},
	{
		"nom": "Mackogneur",
		"taille": "1,6 m",
		"poids": "130,0 kg",
		"numéro": "068",
		"type": [
			"Combat"
		],
		"png": "068.png",
		"nom_en": "Machamp",
		"nom_ja": [
			"Kairikie",
			"カイリキー"
		],
		"description": "Mackogneur a tellement besoin de détendre ses muscles qu'il a tendance à taper d'abord, et réfléchir ensuite. C'est le Pokémon le plus fort qui existe à ce jour, soulever une maison ne lui fait pas peur. Mais il est incapable de passer une aiguille dans un fil car ses bras s'emmêlent dès qu'il doit faire un travail délicat.",
		"gif": "068.gif",
		"evolutions": [
			"Machoc",
			"Machopeur",
			"Mackogneur"
		],
		"artwork": [
			"C068.png",
			"Mackogneur-RB.png"
		],
		"cri" : [
			"Cri_068.ogg"
		]
	},
	{
		"nom": "Chétiflor",
		"taille": "0,7 m",
		"poids": "4,0 kg",
		"numéro": "069",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "069.png",
		"nom_en": "Bellsprout",
		"nom_ja": [
			"Madatsubomi",
			"マダツボミ"
		],
		"description": "Les Chetiflor vivent en groupes dans la jungle, car il sont plutôt faible. Mais dès qu'ils prennent confiance en eux et qu'ils deviennent capables d'utiliser l'attaque Acide ou l'attaque Fouet-liane, ils quittent leur clan. Ces Pokémons se nourrissent principalement d'insectes volants qu'ils piègent dans leur bouche.",
		"gif": "069.gif",
		"evolutions": [
			"Chétiflor",
			"Boustiflor",
			"Empiflor"
		],
		"artwork": [
			"C069.png",
			"Chétiflor-RB.png"
		],
		"cri" : [
			"Cri_069.ogg"
		]
	},
	{
		"nom": "Boustiflor",
		"taille": "1,0 m",
		"poids": "6,4 kg",
		"numéro": "070",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "070.png",
		"nom_en": "Weepinbell",
		"nom_ja": [
			"Utsodon",
			"ウツドン"
		],
		"description": "Boustiflor se pends à une branche, et attend tranquillement qu'une proie passe pour lui cracher un jet d'acide. Pour se déplacer, il utilise son Fouet-liane et s'agrippe de branches en branches. Mais s'il est en terrain découvert, il est contraint de bondir sur son ventre.",
		"gif": "070.gif",
		"evolutions": [
			"Chétiflor",
			"Boustiflor",
			"Empiflor"
		],
		"artwork": [
			"C070.png",
			"Boustiflor-RB.png"
		],
		"cri" : [
			"Cri_070.ogg"
		]
	},
	{
		"nom": "Empiflor",
		"taille": "1,7 m",
		"poids": "15,5 kg",
		"numéro": "071",
		"type": [
			"Plante",
			"Poison"
		],
		"png": "071.png",
		"nom_en": "Victreebel",
		"nom_ja": [
			"Utsoboto",
			"ウツボット"
		],
		"description": "Empiflor vit en petit groupe familial, au plus profond de la jungle. Il se pend aux branches basses, à quelques centimètres du sol et attend que la malheureuse proie passe devant lui sans s'en rendre compte pour la happer d'un coup. Elle est ensuite lentement digérée dans sa poche ventrale.",
		"gif": "071.gif",
		"evolutions": [
			"Chétiflor",
			"Boustiflor",
			"Empiflor"
		],
		"artwork": [
			"C071.png",
			"Empiflor-RB.png"
		],
		"cri" : [
			"Cri_071.ogg"
		]
	},
	{
		"nom": "Tentacool",
		"taille": "0,9 m",
		"poids": "45,5 kg",
		"numéro": "072",
		"type": [
			"Eau",
			"Poison"
		],
		"png": "072.png",
		"nom_en": "Tentacool",
		"nom_ja": [
			"Menokurage",
			"メノクラゲ"
		],
		"description": "Les Tentacool flottent en grands bancs à la surface de l'eau. Ils vivent principalement au large, mais les vents forts peuvent les ramener près des côtes. Les deux grands globes rouges sur leur tête permettent d'envoyer de puissants ultrasons, et leurs tentacules sont venimeux.",
		"gif": "072.gif",
		"evolutions": [
			"Tentacool",
			"Tentacruel"
		],
		"artwork": [
			"C072.png",
			"Tentacool-RB.png"
		],
		"cri" : [
			"Cri_072.ogg"
		]
	},
	{
		"nom": "Tentacruel",
		"taille": "1,6 m",
		"poids": "55,0 kg",
		"numéro": "073",
		"type": [
			"Eau",
			"Poison"
		],
		"png": "073.png",
		"nom_en": "Tentacruel",
		"nom_ja": [
			"Dokukurage",
			"ドククラゲ"
		],
		"description": "Un Tentacruel possède en moyenne quatre-vingt tentacules, tous très toxiques. Quand il se bat, il envoie de très puissants ultrasons, capables de rendre fou pour toute la vie. Il se sert habilement de ses tentacules pour attraper, pour trancher ou pour frapper.",
		"gif": "073.gif",
		"evolutions": [
			"Tentacool",
			"Tentacruel"
		],
		"artwork": [
			"C073.png",
			"Tentacruel-RB.png"
		],
		"cri" : [
			"Cri_073.ogg"
		]
	},
	{
		"nom": "Racaillou",
		"taille": "0,4 m",
		"poids": "20,0 kg",
		"numéro": "074",
		"type": [
			"Roche",
			"Sol"
		],
		"png": "074.png",
		"nom_en": "Geodude",
		"nom_ja": [
			"Ishitsubute",
			"イシツブテ"
		],
		"description": "Racaillou sait parfaitement se confondre parmi les rochers, et si par malheur quelqu'un lui shoote dedans, il est capable de lui briser les deux chevilles. Mais en général, il préfère prendre la fuite. Ses bras musclés lui permet d'effectuer de puissantes attaques Jet-de-pierre.",
		"gif": "074.gif",
		"evolutions": [
			"Racaillou",
			"Gravalanch",
			"Grolem"
		],
		"artwork": [
			"C074.png",
			"Racaillou-RB.png"
		],
		"cri" : [
			"Cri_074.ogg"
		]
	},
	{
		"nom": "Gravalanch",
		"taille": "1,0 m",
		"poids": "105,0 kg",
		"numéro": "075",
		"type": [
			"Roche",
			"Sol"
		],
		"png": "075.png",
		"nom_en": "Graveler",
		"nom_ja": [
			"Goroun",
			"ゴローン"
		],
		"description": "Très imposant, un Gravalanch utilise alternativement ses quatre bras pour lancer des rochers à ses ennemis. S'il donne des coups dans les parois de la grotte, c'est qu'il est en train d'effectuer une attaque Eboulement. Il se nourrit exclusivement de cailloux, on a remarqué qu'il affectionnait particulièrement ceux recouverts de mousse.",
		"gif": "075.gif",
		"evolutions": [
			"Racaillou",
			"Gravalanch",
			"Grolem"
		],
		"artwork": [
			"C075.png",
			"Gravalanch-RB.png"
		],
		"cri" : [
			"Cri_075.ogg"
		]
	},
	{
		"nom": "Grolem",
		"taille": "1,4 m",
		"poids": "300,0 kg",
		"numéro": "076",
		"type": [
			"Roche",
			"Sol"
		],
		"png": "076.png",
		"nom_en": "Golem",
		"nom_ja": [
			"Gorounya",
			"ゴローニャ"
		],
		"description": "Grolem, trapu et lourd, a beaucoup de mal à se déplacer grâce à ses deux jambes. Il préfère bouger en roulant, c'est pour ça que les cailloux qui constituent son corps sont plats. Il est beaucoup moins agile que ces précédentes évolutions, alors il se bat en provoquant des Séismes ou des Abysses.",
		"gif": "076.gif",
		"evolutions": [
			"Racaillou",
			"Gravalanch",
			"Grolem"
		],
		"artwork": [
			"C076.png",
			"Grolem-RB.png"
		],
		"cri" : [
			"Cri_076.ogg"
		]
	},
	{
		"nom": "Ponyta",
		"taille": "1,0 m",
		"poids": "30,0 kg",
		"numéro": "077",
		"type": [
			"Feu"
		],
		"png": "077.png",
		"nom_en": "Ponyta",
		"nom_ja": [
			"Ponyta",
			"ポニータ"
		],
		"description": "Peu de temps après la naissance, Ponyta est capable de courir aussi vite que sa mère. Courir le rend heureux, sa crinière s'embrase joyeusement quand il galope. Si son maître ne le fait pas suffisamment défouler, il dépérit rapidement. S'il se fait agresser, les sabots de Ponyta peuvent fracasser le crâne de son adversaire.",
		"gif": "077.gif",
		"evolutions": [
			"Ponyta",
			"Galopa"
		],
		"artwork": [
			"C077.png",
			"Ponyta-RB.png"
		],
		"cri" : [
			"Cri_077.ogg"
		]
	},
	{
		"nom": "Galopa",
		"taille": "1,7 m",
		"poids": "95,0 kg",
		"numéro": "078",
		"type": [
			"Feu"
		],
		"png": "078.png",
		"nom_en": "Rapidash",
		"nom_ja": [
			"Gyaroppu",
			"ギャロップ"
		],
		"description": "Au galop, la vitesse maximale d'un Galopa est de 240 km/h. S'il est en confiance, sa crinière n'est pas brûlante et il aime être monté. Il a sans cesse besoin de se prouver qu'il est le plus rapide, c'est pour cela qu'il défie tout ce qui bouge dans une course, où il sort vainqueur à chaque fois.",
		"gif": "078.gif",
		"evolutions": [
			"Ponyta",
			"Galopa"
		],
		"artwork": [
			"C078.png",
			"Galopa-RB.png"
		],
		"cri" : [
			"Cri_078.ogg"
		]
	},
	{
		"nom": "Ramoloss",
		"taille": "1,2 m",
		"poids": "36,0 kg",
		"numéro": "079",
		"type": [
			"Eau",
			"Psy"
		],
		"png": "079.png",
		"nom_en": "Slowpoke",
		"nom_ja": [
			"Yadon",
			"ヤドン"
		],
		"description": "Ramoloss peut passer une journée entière à se prélasser au soleil sans rien faire. Il n'est pas très vif d'esprit, et il a à chaque fois un temps de réaction pour comprendre ce qu'on vient de lui dire, ou pour comprendre ce qu'il vient de se passer. Il ressent la douleur seulement au bout de cinq secondes.",
		"gif": "079.gif",
		"evolutions": [
			"Ramoloss",
			"Flagadoss"
		],
		"artwork": [
			"C079.png",
			"Ramoloss-RB.png"
		],
		"cri" : [
			"Cri_079.ogg"
		]
	},
	{
		"nom": "Flagadoss",
		"taille": "1,6 m",
		"poids": "78,5 kg",
		"numéro": "080",
		"type": [
			"Eau",
			"Psy"
		],
		"png": "080.png",
		"nom_en": "Slowbro",
		"nom_ja": [
			"Yadoran",
			"ヤドラン"
		],
		"description": "Un Flagadoss ne peut apparaître que si un Kokyas mord la queue d'un Ramoloss. Il développe alors plus largement ses pouvoirs psychiques, mais n'en devient pas plus dégourdi pour autant. Son attaque Amnésie peut paraître inutile, mais elle le rend en réalité plus puissant en augmentant presque toutes ses capacités.",
		"gif": "080.gif",
		"evolutions": [
			"Ramoloss",
			"Flagadoss"
		],
		"artwork": [
			"C080.png",
			"Flagadoss-RB.png"
		],
		"cri" : [
			"Cri_080.ogg"
		]
	},
	{
		"nom": "Magnéti",
		"taille": "0,3 m",
		"poids": "6,0 kg",
		"numéro": "081",
		"type": [
			"Électrik",
			"Acier"
		],
		"png": "081.png",
		"nom_en": "Magnemite",
		"nom_ja": [
			"Coil",
			"コイル"
		],
		"description": "Magnéti est irrésistiblement attiré par toutes les sources de courant électrique. Quand il trouve un objet qui fonctionne à l'électricité, il se colle dessus pour en absorber l'énergie. Il lévite en envoyant un léger champs électrique. Ses attaques Tonnerre peuvent déclencher des crises d'épilepsie.",
		"gif": "081.gif",
		"evolutions": [
			"Magnéti",
			"Magnéton"
		],
		"artwork": [
			"C081.png",
			"Magnéti-RB.png"
		],
		"cri" : [
			"Cri_081.ogg"
		]
	},
	{
		"nom": "Magnéton",
		"taille": "1,0 m",
		"poids": "60,0 kg",
		"numéro": "082",
		"type": [
			"Électrik",
			"Acier"
		],
		"png": "082.png",
		"nom_en": "Magneton",
		"nom_ja": [
			"Rarecoil",
			"レアコイル"
		],
		"description": "Un Magnéton est une association de trois Magnéti, soudés par un puissant courant électrique. Leurs aimants attirent toute l'électricité contenue dans l'air. Magnéton est très excité les jours d'orages, et il essaye à tout prix d'attirer la foudre sur lui. Son attaque Cage-éclair paralyse à tous les coups son ennemi.",
		"gif": "082.gif",
		"evolutions": [
			"Magnéti",
			"Magnéton"
		],
		"artwork": [
			"C082.png",
			"Magnéton-RB.png"
		],
		"cri" : [
			"Cri_082.ogg"
		]
	},
	{
		"nom": "Canarticho",
		"taille": "0,8 m",
		"poids": "15,0 kg",
		"numéro": "083",
		"type": [
			"Normal",
			"Vol"
		],
		"png": "083.png",
		"nom_en": "Farfetch'd",
		"nom_ja": [
			"Kamonegi",
			"カモネギ"
		],
		"description": "Canarticho ne se sépare jamais de son poireau car il lui sert à se défendre. Il le brandit habilement pour frapper, ou trancher. Les gens pensaient que ce poireau possédait des vertus particulières, mais c'est juste un banal légume. C'est un Pokémon solitaire.",
		"gif": "083.gif",
		"evolutions": [
			"Canarticho"
		],
		"artwork": [
			"C083.png",
			"Canarticho-RB.png"
		],
		"cri" : [
			"Cri_083.ogg"
		]
	},
	{
		"nom": "Doduo",
		"taille": "1,4 m",
		"poids": "39,2 kg",
		"numéro": "084",
		"type": [
			"Normal",
			"Vol"
		],
		"png": "084.png",
		"nom_en": "Doduo",
		"nom_ja": [
			"Dodo",
			"ドードー"
		],
		"description": "Doduo est un Pokémon qui vit, à l'état sauvage, dans les grandes plaines, où il peut courir à loisir. Ne pouvant pas voler, il a développé ses pattes pour échapper à ses ennemis. Ce Pokémon possède bien deux cerveaux, mais une seule tête est capable de contrôler le corps ; c'est pour cela que la deuxième tête est toujours agressive.",
		"gif": "084.gif",
		"evolutions": [
			"Doduo",
			"Dodrio"
		],
		"artwork": [
			"C084.png",
			"Doduo-RB.png"
		],
		"cri" : [
			"Cri_084.ogg"
		]
	},
	{
		"nom": "Dodrio",
		"taille": "1,8 m",
		"poids": "85,2 kg",
		"numéro": "085",
		"type": [
			"Normal",
			"Vol"
		],
		"png": "085.png",
		"nom_en": "Dodrio",
		"nom_ja": [
			"Dodorio",
			"ドードリオ"
		],
		"description": "Les trois têtes de Dodrio possèdent leur propre caractère. Les trois têtes ne dorment jamais en même temps, car elles se relaient pour monter la garde.",
		"gif": "085.gif",
		"evolutions": [
			"Doduo",
			"Dodrio"
		],
		"artwork": [
			"C085.png",
			"Dodrio-RB.png"
		],
		"cri" : [
			"Cri_085.ogg"
		]
	},
	{
		"nom": "Otaria",
		"taille": "1,1 m",
		"poids": "90,0 kg",
		"numéro": "086",
		"type": [
			"Eau"
		],
		"png": "086.png",
		"nom_en": "Seel",
		"nom_ja": [
			"Pauwau",
			"パウワウ"
		],
		"description": "Otaria possède un épaisse couche de graisse qui le protège des eaux glacées. Son pelage blanc le confond parfaitement sur la neige, car il vit uniquement dans les climats glacés. Nager dans une eau dont la température descend en dessous de zéro ne lui fait pas peur.",
		"gif": "086.gif",
		"evolutions": [
			"Otaria",
			"Lamantine"
		],
		"artwork": [
			"C086.png",
			"Otaria-RB.png"
		],
		"cri" : [
			"Cri_086.ogg"
		]
	},
	{
		"nom": "Lamantine",
		"taille": "1,7 m",
		"poids": "120,0 kg",
		"numéro": "087",
		"type": [
			"Eau",
			"Glace"
		],
		"png": "087.png",
		"nom_en": "Dewgong",
		"nom_ja": [
			"Jugong",
			"ジュゴン"
		],
		"description": "Lamantine est si gracieux que, jadis, les marins le prenait pour une sirène. Pour se reposer, il se hisse sur les Icebergs, sa peau dure est fournie d'une couche de graisse qui l'isole parfaitement du froid. Il sait se déplacer sur terre, mais il est beaucoup plus à l'aise dans l'eau pour lancer ses Onde Boréales.",
		"gif": "087.gif",
		"evolutions": [
			"Otaria",
			"Lamantine"
		],
		"artwork": [
			"C087.png",
			"Lamantine-RB.png"
		],
		"cri" : [
			"Cri_087.ogg"
		]
	},
	{
		"nom": "Tadmorv",
		"taille": "0,9 m",
		"poids": "30,0 kg",
		"numéro": "088",
		"type": [
			"Poison"
		],
		"png": "088.png",
		"nom_en": "Grimer",
		"nom_ja": [
			"Betbeter",
			"ベトベター"
		],
		"description": "Le liquide visqueux qui compose le corps de Tadmorv est si toxique, qu'une fois qu'il passe sur la terre, celle-ci devient infertile. Quelques gouttes tarissent un étang. Mais heureusement, il n'aime pas tellement la vie sauvage et préfère vivre dans les grandes villes, où il s'installe dans les égouts et les canalisations.",
		"gif": "088.gif",
		"evolutions": [
			"Tadmorv",
			"Grotadmorv"
		],
		"artwork": [
			"C088.png",
			"Tadmorv-RB.png"
		],
		"cri" : [
			"Cri_088.ogg"
		]
	},
	{
		"nom": "Grotadmorv",
		"taille": "1,2 m",
		"poids": "30,0 kg",
		"numéro": "089",
		"type": [
			"Poison"
		],
		"png": "089.png",
		"nom_en": "Muk",
		"nom_ja": [
			"Betbeton",
			"ベトベトン"
		],
		"description": "Grotadmorv dégage une odeur particulièrement atroce. Il n'est pas rare de voir parmi un groupe de Tadmorv un imposant Grotadmorv. Dans les égouts, il ne dérange personne mais s'il vient s'infiltrer dans les canalisations, il provoque un bouchon. Il se nourrit de fruits pourris et de cadavres en décomposition.",
		"gif": "089.gif",
		"evolutions": [
			"Tadmorv",
			"Grotadmorv"
		],
		"artwork": [
			"C089.png",
			"Grotadmorv-RB.png"
		],
		"cri" : [
			"Cri_089.ogg"
		]
	},
	{
		"nom": "Kokiyas",
		"taille": "0,3 m",
		"poids": "4,0 kg",
		"numéro": "090",
		"type": [
			"Eau"
		],
		"png": "090.png",
		"nom_en": "Shellder",
		"nom_ja": [
			"Shellder",
			"シェルダー"
		],
		"description": "Kokyas est irrésistiblement attiré par la queue des Ramoloss. Dès qu'il en voit une, il ne peut s'empêcher de la mordre. S'il est attaqué, il se réfugie dans sa coquille, ne l'ouvrant que pour lancer des Pistolets à O. Sa langue analyse l'environnement extérieur, il peut sentir la chaleur des autres Pokémons grâce à elle.",
		"gif": "090.gif",
		"evolutions": [
			"Kokiyas",
			"Crustabri"
		],
		"artwork": [
			"C090.png",
			"Kokiyas-RB.png"
		],
		"cri" : [
			"Cri_090.ogg"
		]
	},
	{
		"nom": "Crustabri",
		"taille": "1,5 m",
		"poids": "132,5 kg",
		"numéro": "091",
		"type": [
			"Eau",
			"Glace"
		],
		"png": "091.png",
		"nom_en": "Cloyster",
		"nom_ja": [
			"Parshen",
			"パルシェン"
		],
		"description": "Même si trois Nidoking piétinaient la coquille de Crustabri, elle ne céderait pas. Au combat, il la referme puissamment sur son ennemi, lui broyant les os. De nombreux plongeurs, dans l'obscurité, se sont approchés de ce qu'ils prenaient pour deux joyaux et sont morts brisés en deux en réalisant trop tard qu'il s'agissait des yeux d'un Crustabri.",
		"gif": "091.gif",
		"evolutions": [
			"Kokiyas",
			"Crustabri"
		],
		"artwork": [
			"C091.png",
			"Crustabri-RB.png"
		],
		"cri" : [
			"Cri_091.ogg"
		]
	},
	{
		"nom": "Fantominus",
		"taille": "1,3 m",
		"poids": "0,1 kg",
		"numéro": "092",
		"type": [
			"Spectre",
			"Poison"
		],
		"png": "092.png",
		"nom_en": "Gastly",
		"nom_ja": [
			"Ghos",
			"ゴース"
		],
		"description": "Le corps de Fantominus n'est pas solide, il est uniquement gazeux. Il adore se réfugier dans les maisons abandonnées, et effrayer les visiteurs occasionnels avec des hallucinations. Quand il fait une attaque Léchouille, sa langue se matérialise par un phénomène inconnu. Il est impossible à atteindre par des attaques physiques.",
		"gif": "092.gif",
		"evolutions": [
			"Fantominus",
			"Spectrum",
			"Ectoplasma"
		],
		"artwork": [
			"C092.png",
			"Fantominus-RB.png"
		],
		"cri" : [
			"Cri_092.ogg"
		]
	},
	{
		"nom": "Spectrum",
		"taille": "1,6 m",
		"poids": "0,1 kg",
		"numéro": "093",
		"type": [
			"Spectre",
			"Poison"
		],
		"png": "093.png",
		"nom_en": "Haunter",
		"nom_ja": [
			"Ghost",
			"ゴースト"
		],
		"description": "Les Spectrum sauvages adorent effrayer les passants en faisant d'horribles grimaces. Il est passé maître dans les attaques de type spectre, le rendant encore plus terrifiant. Apprivoisé, ce Pokémon est très fidèle et il ne perd pas une occasion de faire rire son dresseur.",
		"gif": "093.gif",
		"evolutions": [
			"Fantominus",
			"Spectrum",
			"Ectoplasma"
		],
		"artwork": [
			"C093.png",
			"Spectrum-RB.png"
		],
		"cri" : [
			"Cri_093.ogg"
		]
	},
	{
		"nom": "Ectoplasma",
		"taille": "1,5 m",
		"poids": "40,5 kg",
		"numéro": "094",
		"type": [
			"Spectre",
			"Poison"
		],
		"png": "094.png",
		"nom_en": "Gengar",
		"nom_ja": [
			"Gangar",
			"ゲンガー"
		],
		"description": "Beaucoup de gens ont peur d'Ectoplasma. Même avec un dresseur, il a tendance à garder un côté sombre et terrifiant. Dans le noir, ce Pokémon se téléporte sans cesse pour faire peur à son ennemi, ses deux yeux rouges brillants comme des lumières. Il l'endort ensuite et dévore ses rêves les plus terrifiants.",
		"gif": "094.gif",
		"evolutions": [
			"Fantominus",
			"Spectrum",
			"Ectoplasma"
		],
		"artwork": [
			"C094.png",
			"Ectoplasma-RB.png"
		],
		"cri" : [
			"Cri_094.ogg"
		]
	},
	{
		"nom": "Onix",
		"taille": "8,8 m",
		"poids": "210,0 kg",
		"numéro": "095",
		"type": [
			"Roche",
			"Sol"
		],
		"png": "095.png",
		"nom_en": "Onix",
		"nom_ja": [
			"Iwark",
			"イワーク"
		],
		"description": "Onix vit sous terre, en creusant à parfois 90 km/h. Son terrain de prédilection est la montagne, lui permettant d'exposer sa large gamme d'attaques de type sol et roche. Il vit en général loin des villages, mais un de ces Pokémon déclenche à chaque fois un cri d'admiration lorsqu'il est aperçu à l'état sauvage.",
		"gif": "095.gif",
		"evolutions": [
			"Onix"
		],
		"artwork": [
			"C095.png",
			"Onix-RB.png"
		],
		"cri" : [
			"Cri_095.ogg"
		]
	},
	{
		"nom": "Soporifik",
		"taille": "1,0 m",
		"poids": "32,4 kg",
		"numéro": "096",
		"type": [
			"Psy"
		],
		"png": "096.png",
		"nom_en": "Drowzee",
		"nom_ja": [
			"Sleepe",
			"スリープ"
		],
		"description": "Soporifik a une mauvaise manie, qu'il ne perd jamais même apprivoisé : il mange les rêves des hommes, il ne peut pas s'en empêcher. S'il mange un cauchemar, il tombe malade. Quand il a faim, il n'attend pas de trouver une victime endormie : il s'en charge lui même en l'hypnotisant.",
		"gif": "096.gif",
		"evolutions": [
			"Soporifik",
			"Hypnomade"
		],
		"artwork": [
			"C096.png",
			"Soporifik-RB.png"
		],
		"cri" : [
			"Cri_096.ogg"
		]
	},
	{
		"nom": "Hypnomade",
		"taille": "1,6 m",
		"poids": "75,6 kg",
		"numéro": "097",
		"type": [
			"Psy"
		],
		"png": "097.png",
		"nom_en": "Hypno",
		"nom_ja": [
			"Sleeper",
			"スリーパー"
		],
		"description": "Hypnomade utilise son pendule pour hypnotiser ses adversaires. Une fois endormis, ceux-ci ne réalisent pas qu'Hypnomade les soulèvent par la force de la pensée. Ils ne se réveillent que quand ils s'écrasent contre un rocher. Quand ce Pokémon se concentre, il déclenche des maux de tête chez leur dresseur.",
		"gif": "097.gif",
		"evolutions": [
			"Soporifik",
			"Hypnomade"
		],
		"artwork": [
			"C097.png",
			"Hypnomade-RB.png"
		],
		"cri" : [
			"Cri_097.ogg"
		]
	},
	{
		"nom": "Krabby",
		"taille": "0,4 m",
		"poids": "6,5 kg",
		"numéro": "098",
		"type": [
			"Eau"
		],
		"png": "098.png",
		"nom_en": "Krabby",
		"nom_ja": [
			"Crab",
			"クラブ"
		],
		"description": "Les Krabby vivent sur les berges des lacs, et sur les plages. Ils ne peuvent pas s'empêcher de faire des bulles. Krabby paraît faible, mais ses pinces peuvent briser un rocher en mille morceaux. Ce Pokémon est incapable de se déplacer vers l'avant : il ne sait marcher que latéralement.",
		"gif": "098.gif",
		"evolutions": [
			"Krabby",
			"Krabboss"
		],
		"artwork": [
			"C098.png",
			"Krabby-RB.png"
		],
		"cri" : [
			"Cri_098.ogg"
		]
	},
	{
		"nom": "Krabboss",
		"taille": "1,3 m",
		"poids": "60,0 kg",
		"numéro": "099",
		"type": [
			"Eau"
		],
		"png": "099.png",
		"nom_en": "Kingler",
		"nom_ja": [
			"Kingler",
			"キングラー"
		],
		"description": "Si une pince de Kraboss est coupée ou arrachée, celle-ci repousse plus grosse que la précédente. De mauvais dresseurs leur ont déjà coupé la pince pour que celle-ci devienne plus puissante. S'il attrape sa proie, celle-ci est perdue : il la brise en deux en un instant.",
		"gif": "099.gif",
		"evolutions": [
			"Krabby",
			"Krabboss"
		],
		"artwork": [
			"C099.png",
			"Krabboss-RB.png"
		],
		"cri" : [
			"Cri_099.ogg"
		]
	},
	{
		"nom": "Voltorbe",
		"taille": "0,5 m",
		"poids": "10,4 kg",
		"numéro": "100",
		"type": [
			"Électrik"
		],
		"png": "100.png",
		"nom_en": "Voltorb",
		"nom_ja": [
			"Biriridama",
			"ビリリダマ"
		],
		"description": "La première fois qu'on a aperçu Voltorbe, c'était dans une usine de Pokéballs. Personne ne sait comment il est apparu sur terre. Il se déplace en roulant, en envoyant sans faire exprès quelques étincelles. Cette simili pokéball se défend grâce à des attaques Tonnerre et Grincement.",
		"gif": "100.gif",
		"evolutions": [
			"Voltorbe",
			"Électrode"
		],
		"artwork": [
			"C100.png",
			"Voltorbe-RB.png"
		],
		"cri" : [
			"Cri_100.ogg"
		]
	},
	{
		"nom": "Électrode",
		"taille": "1,2 m",
		"poids": "66,6 kg",
		"numéro": "101",
		"type": [
			"Électrik"
		],
		"png": "101.png",
		"nom_en": "Electrode",
		"nom_ja": [
			"Marumain",
			"マルマイン"
		],
		"description": "Electrode se nourrit exclusivement de l'électricité qui se trouve dans notre athmosphère. Il la stocke ensuite dans son corps sous une pression incroyable : il suffit qu'il augmente encore plus la pression de son corps pour qu'il explose. Les jours d'orage, il explose sans arrêt car il mange trop d'électricité.",
		"gif": "101.gif",
		"evolutions": [
			"Voltorbe",
			"Électrode"
		],
		"artwork": [
			"C101.png",
			"Électrode-RB.png"
		],
		"cri" : [
			"Cri_101.ogg"
		]
	},
	{
		"nom": "Noeunoeuf",
		"taille": "0,4 m",
		"poids": "2,5 kg",
		"numéro": "102",
		"type": [
			"Plante",
			"Psy"
		],
		"png": "102.png",
		"nom_en": "Exeggcute",
		"nom_ja": [
			"Tamatama",
			"タマタマ"
		],
		"description": "Un groupe de Noeunoeuf est toujours constitué de six membres solidaires, attirés entre eux comme des aimants. Si l'un d'entre eux se perd, ils utilisent leur énergie télépathique pour se retrouver. Comme ils n'ont pas de jambes, il se déplacent en petits bonds organisés. La coquille fendue indique la prochaine évolution.",
		"gif": "102.gif",
		"evolutions": [
			"Noeunoeuf",
			"Noadkoko"
		],
		"artwork": [
			"C102.png",
			"Noeunoeuf-RB.png"
		],
		"cri" : [
			"Cri_102.ogg"
		]
	},

	{
		"nom": "Noadkoko",
		"taille": "2,0 m",
		"poids": "120,0 kg",
		"numéro": "103",
		"type": [
			"Plante",
			"Psy"
		],
		"png": "103.png",
		"nom_en": "Exeggutor",
		"nom_ja": [
			"Nassy",
			"ナッシー"
		],
		"description": "Les Noadkokos vivent dans la jungle en bande. Leurs têtes sont chacune particulière, toutes ont leur propre sentiment. Quand l'une d'elle tombe, elle se transforme en Noeunoeuf et part immédiatement à la recherche d'un groupe. Ce Pokémon utilise sa télépathie pour communiquer.",
		"gif": "103.gif",
		"evolutions": [
			"Noeunoeuf",
			"Noadkoko"
		],
		"artwork": [
			"C103.png",
			"Noadkoko-RB.png"
		],
		"cri" : [
			"Cri_103.ogg"
		]
	},

	{
		"nom": "Osselait",
		"taille": "0,4 m",
		"poids": "6,5 kg",
		"numéro": "104",
		"type": [
			"Sol"
		],
		"png": "104.png",
		"nom_en": "Cubone",
		"nom_ja": [
			"Karakara",
			"カラカラ"
		],
		"description": "Osselait porte toujours son casque en os sur la tête. Personne n'a jamais vu ce Pokémon sans. Il fouille parmi les carcasses pour trouver un os, qu'il utilisera comme massue. Il est très sensible, et se met à pleurer s'il a faim, froid, soif ou peur mais quand il se bat, il peut être redoutable.",
		"gif": "104.gif",
		"evolutions": [
			"Osselait",
			"Ossatueur"
		],
		"artwork": [
			"C104.png",
			"Osselait-RB.png"
		],
		"cri" : [
			"Cri_104.ogg"
		]
	},

	{
		"nom": "Ossatueur",
		"taille": "1,0 m",
		"poids": "45,0 kg",
		"numéro": "105",
		"type": [
			"Sol"
		],
		"png": "105.png",
		"nom_en": "Marowak",
		"nom_ja": [
			"GaraGara",
			"ガラガラ"
		],
		"description": "Ossatueur sait se servir de sa massue en os d'une manière remarquable. Jadis, ces Pokémons étaient faibles mais depuis qu'ils ont appris à manier les os, ils sont devenus craints par les autres Pokémon. Ossatueur peut l'utiliser pour assommer ses ennemis, mais il peut aussi lancer son os comme un boomerang.",
		"gif": "105.gif",
		"evolutions": [
			"Osselait",
			"Ossatueur"
		],
		"artwork": [
			"C105.png",
			"Ossatueur-RB.png"
		],
		"cri" : [
			"Cri_105.ogg"
		]
	},

	{
		"nom": "Kicklee",
		"taille": "1,5 m",
		"poids": "49,8 kg",
		"numéro": "106",
		"type": [
			"Combat"
		],
		"png": "106.png",
		"nom_en": "Hitmonlee",
		"nom_ja": [
			"Sawamular",
			"サワムラー"
		],
		"description": "Les jambes de Kicklee peuvent s'allonger et se rétracter à volonté, comme des élastiques. C'est un pro des arts martiaux, mais il se bat uniquement avec ses jambes. Seul, il s'entraîne constamment à diverses attaques de type combat : Mawashi-guéri, Pied sauté ou Pied voltige.",
		"gif": "106.gif",
		"evolutions": [
			"Kicklee"
		],
		"artwork": [
			"C106.png",
			"Kicklee-RB.png"
		],
		"cri" : [
			"Cri_106.ogg"
		]
	},
	{
		"nom": "Tygnon",
		"taille": "1,4 m",
		"poids": "50,2 kg",
		"numéro": "107",
		"type": [
			"Combat"
		],
		"png": "107.png",
		"nom_en": "Hitmonchan",
		"nom_ja": [
			"Ebiwalar",
			"エビワラー"
		],
		"description": "Tygnon aime taper avec ses poings. Il est très rapide, décochant à ses ennemis des coups fulgurants. S'il s'entraîne suffisamment, il peut maîtriser trois éléments, le rendant alors difficile à battre : Poing feu, Poing foudre et Poing glace. Son jeu de jambe lui permet d'esquiver les coups.",
		"gif": "107.gif",
		"evolutions": [
			"Kicklee"
		],
		"artwork": [
			"C107.png",
			"Tygnon-RB.png"
		],
		"cri" : [
			"Cri_107.ogg"
		]
	},
	{
		"nom": "Excelangue",
		"taille": "1,2 m",
		"poids": "65,5 kg",
		"numéro": "108",
		"type": [
			"Normal"
		],
		"png": "108.png",
		"nom_en": "Lickitung",
		"nom_ja": [
			"Beroringa",
			"ベロリンガ"
		],
		"description": "La langue d'Excelangue fait deux fois la taille de son corps. Ce Pokémon est un véritable glouton, il mange tout ce qu'il voit, l'attrapant en déroulant son immense langue. Il enregistre le goût dans sa mémoire, qu'il n'oublie jamais. Il produit une salive spéciale, qui paralyse tout ceux qui entrent en contact avec elle.",
		"gif": "108.gif",
		"evolutions": [
			"Excelangue"
		],
		"artwork": [
			"C108.png",
			"Excelangue-RB.png"
		],
		"cri" : [
			"Cri_108.ogg"
		]
	},
	{
		"nom": "Smogo",
		"taille": "0,6 m",
		"poids": "1,0 kg",
		"numéro": "109",
		"type": [
			"Poison"
		],
		"png": "109.png",
		"nom_en": "Koffing",
		"nom_ja": [
			"Dogars",
			"ドガース"
		],
		"description": "Le corps de Smogo est principalement constitué de gaz toxiques. En respirer en petite quantité provoque des irritations et des reniflements mais une trop grosse dose peut s'avérer mortelle. Il ne faut surtout pas l'emmener dans un endroit chaud car sinon, il explose.",
		"gif": "109.gif",
		"evolutions": [
			"Smogo",
			"Smogogo"
		],
		"artwork": [
			"C109.png",
			"Smogo-RB.png"
		],
		"cri" : [
			"Cri_109.ogg"
		]
	},
	{
		"nom": "Smogogo",
		"taille": "1,2 m",
		"poids": "9,5 kg",
		"numéro": "110",
		"type": [
			"Poison"
		],
		"png": "110.png",
		"nom_en": "Weezing",
		"nom_ja": [
			"Matadogas",
			"マタドガス"
		],
		"description": "Smogogo rôde près des poubelles pour aspirer les gaz d'aliments pourris qui s'en dégage, et sentir encore plus mauvais. Ce Pokémon est une association de deux Smogo ; si l'une des têtes se gonfle, l'autre se dégonfle. Ils mélangent en permanence leurs gaz mortels.",
		"gif": "110.gif",
		"evolutions": [
			"Smogo",
			"Smogogo"
		],
		"artwork": [
			"C110.png",
			"Smogogo-RB.png"
		],
		"cri" : [
			"Cri_110.ogg"
		]
	},
	{
		"nom": "Rhinocorne",
		"taille": "1,0 m",
		"poids": "115,0 kg",
		"numéro": "111",
		"type": [
			"Sol",
			"Roche"
		],
		"png": "111.png",
		"nom_en": "Rhyhorn",
		"nom_ja": [
			"Sihorn",
			"サイホーン"
		],
		"description": "Rhinocorne est un Pokémon très fort, mais pas très intelligent. Son petit cerveau ne peut penser qu'à une seule chose à la fois. S'il se met à charger, et qu'il est distrait par quelque chose, il ne sait même plus pourquoi il attaque. Sa peau en pierre lui confère une immunité à toutes les attaques physiques.",
		"gif": "111.gif",
		"evolutions": [
			"Rhinocorne",
			"Rhinoféros"
		],
		"artwork": [
			"C111.png",
			"Rhinocorne-RB.png"
		],
		"cri" : [
			"Cri_111.ogg"
		]
	},
	{
		"nom": "Rhinoféros",
		"taille": "1,9 m",
		"poids": "120,0 kg",
		"numéro": "112",
		"type": [
			"Sol",
			"Roche"
		],
		"png": "112.png",
		"nom_en": "Rhydon",
		"nom_ja": [
			"Sidon",
			"サイドン"
		],
		"description": "Rhinoféros acquiert plus d'intelligence à l'évolution. Sa peau est encore plus dure que de la pierre, un boulet de canon ne lui ferait même pas une égratignure, et il peut même prendre un bain de lave si ça lui chante. La corne sur le nez de Rhinoféros peut tourner très rapidement, il s'en sert pour forer les montagnes.",
		"gif": "112.gif",
		"evolutions": [
			"Rhinocorne",
			"Rhinoféros"
		],
		"artwork": [
			"C112.png",
			"Rhinoféros-RB.png"
		],
		"cri" : [
			"Cri_112.ogg"
		]
	},
	{
		"nom": "Leveinard",
		"taille": "1,1 m",
		"poids": "34,6 kg",
		"numéro": "113",
		"type": [
			"Normal"
		],
		"png": "113.png",
		"nom_en": "Chansey",
		"nom_ja": [
			"Lucky",
			"ラッキー"
		],
		"description": "A l'état sauvage, les Leveinard sont très rares et très farouches. Mais certaines personnes, il y a longtemps, ont réussi à les apprivoiser et depuis, on en trouve dans tous les centres Pokémon. Leurs œufs sont très nourrissants, c'est un remède très connu pour soigner les maladies ou reprendre rapidement des forces.",
		"gif": "113.gif",
		"evolutions": [
			"Leveinard"
		],
		"artwork": [
			"C113.png",
			"Leveinard-RB.png"
		],
		"cri" : [
			"Cri_113.ogg"
		]
	},
	{
		"nom": "Saquedeneu",
		"taille": "1,0 m",
		"poids": "35,0 kg",
		"numéro": "114",
		"type": [
			"Plante"
		],
		"png": "114.png",
		"nom_en": "Tangela",
		"nom_ja": [
			"Monjara",
			"モンジャラ"
		],
		"description": "Le corps de Saquedeneu est recouvert par une épaisse masse de lianes bleues qui poussent en permanence. Elles sont très fragiles : si on tire trop fort dessus, elles cassent. Mais cela ne dérange pas Saquedeneu vu que ses lianes repoussent instantanément. En combat, il peut libérer des poudres toxiques.",
		"gif": "114.gif",
		"evolutions": [
			"Saquedeneu"
		],
		"artwork": [
			"C114.png",
			"Saquedeneu-RB.png"
		],
		"cri" : [
			"Cri_114.ogg"
		]
	},
	{
		"nom": "Kangourex",
		"taille": "2,2 m",
		"poids": "80,0 kg",
		"numéro": "115",
		"type": [
			"Normal"
		],
		"png": "115.png",
		"nom_en": "Kangaskhan",
		"nom_ja": [
			"Garura",
			"ガルーラ"
		],
		"description": "Kangourex est un des Pokémon les plus maternel. Il élève son petit dans sa poche ventrale, sous constante surveillance. Lorsqu'on rencontre un bébé Kangourex qui joue tout seul, il est vivement conseillé de faire demi-tour car la mère est souvent tapie dans l'ombre pour surveiller son petit.",
		"gif": "115.gif",
		"evolutions": [
			"Kangourex"
		],
		"artwork": [
			"C115.png",
			"Kangoureux-RB.png"
		],
		"cri" : [
			"Cri_115.ogg"
		]
	},
	{
		"nom": "Hypotrempe",
		"taille": "0,4 m",
		"poids": "8,0 kg",
		"numéro": "116",
		"type": [
			"Eau"
		],
		"png": "116.png",
		"nom_en": "Horsea",
		"nom_ja": [
			"Tattsu",
			"タッツー"
		],
		"description": "Hipotrempe résiste aux forts courants marins en s'accrochant aux coraux ou aux pierres grâce à sa queue. Il se nourrit de mousse, mais son repas préféré reste les insectes volant. Il sort sa tête de l'eau, et attends qu'il passe un insecte pour lui cracher un jet d'encre.",
		"gif": "116.gif",
		"evolutions": [
			"Hypotrempe",
			"Hypocéan"
		],
		"artwork": [
			"C116.png",
			"Hypotrempe-RB.png"
		],
		"cri" : [
			"Cri_116.ogg"
		]
	},
	{
		"nom": "Hypocéan",
		"taille": "1,2 m",
		"poids": "25,0 kg",
		"numéro": "117",
		"type": [
			"Eau"
		],
		"png": "117.png",
		"nom_en": "Seadra",
		"nom_ja": [
			"Seadra",
			"シードラ"
		],
		"description": "Les aiguillons sur le dos d'Hypocéan sont empoisonnés. S'il est dérangé, il crache un jet d'encre pour s'enfuir mais si l'agresseur persiste, il lui envoie une rafale de piquants venimeux. Pour dormir, il s'ancre solidement aux rochers avec sa queue en spirale.",
		"gif": "117.gif",
		"evolutions": [
			"Hypotrempe",
			"Hypocéan"
		],
		"artwork": [
			"C117.png",
			"Hypocéan-RB.png"
		],
		"cri" : [
			"Cri_117.ogg"
		]
	},
	{
		"nom": "Poissirène",
		"taille": "0,6 m",
		"poids": "15,0 kg",
		"numéro": "118",
		"type": [
			"Eau"
		],
		"png": "118.png",
		"nom_en": "Goldeen",
		"nom_ja": [
			"Tosakinto",
			"トサキント"
		],
		"description": "Poissirène est un magnifique Pokémon doté de nageoires qui ondulent avec grâce dans le courant. Il à longtemps été considéré comme le symbole de la grâce et de la beauté. Cependant il peut être un adversaire redoutable car quand il charge, sa corne est dirigée vers l'avant pour faire front.",
		"gif": "118.gif",
		"evolutions": [
			"Poissirène",
			"Poissoroy"
		],
		"artwork": [
			"C118.png",
			"Poissirène-RB.png"
		],
		"cri" : [
			"Cri_118.ogg"
		]
	},
	{
		"nom": "Poissoroy",
		"taille": "1,3 m",
		"poids": "39,0 kg",
		"numéro": "119",
		"type": [
			"Eau"
		],
		"png": "119.png",
		"nom_en": "Seaking",
		"nom_ja": [
			"Azumao",
			"アズマオウ"
		],
		"description": "L'automne est la saison nuptiale des Poissoroy. On peut les voir en grand groupes dans les rivières pour essayer de plaire aux femelles. C'est pendant cette saison que ses nageoires prennent les plus belles couleurs. Il défend sa femelle avec fougue, en lançant des attaques Empal'corne ou Coud'korne.",
		"gif": "119.gif",
		"evolutions": [
			"Poissirène",
			"Poissoroy"
		],
		"artwork": [
			"C119.png",
			"Poissoroy-RB.png"
		],
		"cri" : [
			"Cri_119.ogg"
		]
	},
	{
		"nom": "Stari",
		"taille": "0,8 m",
		"poids": "34,5 kg",
		"numéro": "120",
		"type": [
			"Eau"
		],
		"png": "120.png",
		"nom_en": "Staryu",
		"nom_ja": [
			"Hitodeman",
			"ヒトデマン"
		],
		"description": "Stari est un étrange Pokémon, constitué d'un seul organe principal : un magnifique joyau qui brille de mille feux, le cœur. Ces mystérieuses créatures ont le pouvoir de se régénérer entièrement, tant que le cœur est intact : si une de ses pattes tombe, elle est immédiatement reformée.",
		"gif": "120.gif",
		"evolutions": [
			"Stari",
			"Staross"
		],
		"artwork": [
			"C120.png",
			"Stari-RB.png"
		],
		"cri" : [
			"Cri_120.ogg"
		]
	},
	{
		"nom": "Staross",
		"taille": "1,1 m",
		"poids": "80,0 kg",
		"numéro": "121",
		"type": [
			"Eau",
			"Psy"
		],
		"png": "121.png",
		"nom_en": "Starmie",
		"nom_ja": [
			"Starmie",
			"スターミー"
		],
		"description": "Le cœur de Stari a évolué pour donner un joyaux encore plus resplendissant et un nouveau pokémon : Staross. Son joyaux brille de différentes couleurs en fonction de la lumière, de l'angle de vue et de l'humeur du Pokémon. Si celui-ci est brisé durant un combat, il meurt.",
		"gif": "121.gif",
		"evolutions": [
			"Stari",
			"Staross"
		],
		"artwork": [
			"C121.png",
			"Staross-RB.png"
		],
		"cri" : [
			"Cri_121.ogg"
		]
	},
	{
		"nom": "M Mime",
		"taille": "1,3 m",
		"poids": "54,5 kg",
		"numéro": "122",
		"type": [
			"Psy",
			"Fée"
		],
		"png": "122.png",
		"nom_en": "Mr.Mime",
		"nom_ja": [
			"Barrierd",
			"(us),"
		],
		"description": "Mr mime est passionné par le fait d'imiter des choses invisibles. Ses doigts produisent une onde chimique qui rend l'air palpable, et avec le temps et l'expérience, il peut devenir capable de créer de véritables objets. Ne le dérangez jamais en train de mimer, car sinon il vous punira avec une volée de claques.",
		"gif": "122.gif",
		"evolutions": [
			"M Mime"
		],
		"artwork": [
			"C122.png",
			"M._Mime-RB.png"
		],
		"cri" : [
			"Cri_122.ogg"
		]
	},
	{
		"nom": "Insécateur",
		"taille": "1,5 m",
		"poids": "56,0 kg",
		"numéro": "123",
		"type": [
			"Insecte",
			"Vol"
		],
		"png": "123.png",
		"nom_en": "Scyther",
		"nom_ja": [
			"Strike",
			"ストライク"
		],
		"description": "Insecateur possède deux armes meurtrières : sa vitesse combinée avec l'utilisation de ses lames. Les petites ailes sur son dos sont incapables de le faire voler sur une longue distance, mais elles lui donnent une vitesse si impressionnante que lorsqu'il il se déplace, il donne l'illusion d'être en groupe. Ses lames couperaient un tronc d'arbre d'un seul coup.",
		"gif": "123.gif",
		"evolutions": [
			"Insécateur"
		],
		"artwork": [
			"C123.png",
			"Insécateur-RB.png"
		],
		"cri" : [
			"Cri_123.ogg"
		]
	},
	{
		"nom": "Lippoutou",
		"taille": "1,4 m",
		"poids": "40,6 kg",
		"numéro": "124",
		"type": [
			"Glace",
			"Psy"
		],
		"png": "124.png",
		"nom_en": "Jynx",
		"nom_ja": [
			"Rougela",
			"ルージュラ"
		],
		"description": "Lippoutou est un étrange Pokémon humanoïde, qui se déhanche de droite à gauche d'une drôle de façon en marchant. Les gens qui le croisent sont soudains pris d'une envie de se déhancher comme lui, c'est un phénomène inexpliqué. Il aime par dessus tout embrasser les gens, mais s'il le souhaite, il peut les paralyser ainsi.",
		"gif": "124.gif",
		"evolutions": [
			"Lippoutou"
		],
		"artwork": [
			"C124.png",
			"Lippoutou-RB.png"
		],
		"cri" : [
			"Cri_124.ogg"
		]
	},
	{
		"nom": "Élektek",
		"taille": "1,1 m",
		"poids": "30,0 kg",
		"numéro": "125",
		"type": [
			"Électrik"
		],
		"png": "125.png",
		"nom_en": "Electabuzz",
		"nom_ja": [
			"Eleboo",
			"エレブー"
		],
		"description": "Comme beaucoup de Pokémons Electriks, Elektek se regroupe sur les hauteurs en cas d'orages. C'est un combattant qui fait sortir l'électricité par ses deux antennes placées sur son front. En faisant parcourir ainsi le courant sur son corps, il devient impossible à toucher physiquement, sous peine d'électrocution.",
		"gif": "125.gif",
		"evolutions": [
			"Élektek"
		],
		"artwork": [
			"C125.png",
			"Élektek-RB.png"
		],
		"cri" : [
			"Cri_125.ogg"
		]
	},
	{
		"nom": "Magmar",
		"taille": "1,3 m",
		"poids": "44,5 kg",
		"numéro": "126",
		"type": [
			"Feu"
		],
		"png": "126.png",
		"nom_en": "Magmar",
		"nom_ja": [
			"Boober",
			"ブーバー"
		],
		"description": "Dans les volcans en activités, vous pourriez trouver des Magmar en train de prendre un bain de lave. Ces Pokémons sont totalement insensibles à la chaleur, puisque leur corps est en constante fusion. Il suffit qu'un combat démarre pour que son corps s'embrase violemment.",
		"gif": "126.gif",
		"evolutions": [
			"Magmar"
		],
		"artwork": [
			"C126.png",
			"Magmar-RB.png"
		],
		"cri" : [
			"Cri_126.ogg"
		]
	},
	{
		"nom": "Scarabrute",
		"taille": "1,5 m",
		"poids": "55,0 kg",
		"numéro": "127",
		"type": [
			"Insecte"
		],
		"png": "127.png",
		"nom_en": "Pinsir",
		"nom_ja": [
			"Kailios",
			"カイロス"
		],
		"description": "La pince située sur la tête de Scarabrute est incroyablement puissante. Il peut exercer une pression de plusieurs tonnes avec, mais il est beaucoup plus faible pour l'ouvrir. Au cas où il ne parviendrais pas à écraser sa proie, il la secoue méchamment et la jette dans les airs.",
		"gif": "127.gif",
		"evolutions": [
			"Scarabrute"
		],
		"artwork": [
			"C127.png",
			"Scarabrute-RB.png"
		],
		"cri" : [
			"Cri_127.ogg"
		]
	},
	{
		"nom": "Tauros",
		"taille": "1,4 m",
		"poids": "88,4 kg",
		"numéro": "128",
		"type": [
			"Normal"
		],
		"png": "128.png",
		"nom_en": "Tauros",
		"nom_ja": [
			"Kentauros",
			"ケンタロス"
		],
		"description": "Souvent utilisé pour les travaux manuels, comme tirer des charrues, Tauros est pourtant un Pokémon très excité. Il a parfois besoin de tout saccager sur son passage pour se calmer. Les Tauros se battent violemment entre eux pour désigner le mâle dominant du troupeau.",
		"gif": "128.gif",
		"evolutions": [
			"Tauros"
		],
		"artwork": [
			"C128.png",
			"Tauros-RB.png"
		],
		"cri" : [
			"Cri_128.ogg"
		]
	},
	{
		"nom": "Magicarpe",
		"taille": "0,9 m",
		"poids": "10,0 kg",
		"numéro": "129",
		"type": [
			"Eau"
		],
		"png": "129.png",
		"nom_en": "Magikarp",
		"nom_ja": [
			"Koiking",
			"コイキング"
		],
		"description": "On raconte qu'autrefois, Magicarpe était beaucoup plus puissant qu'aujourd'hui. Il ne sait faire que des ronds et des bonds dans l'eau. Il est malheureusement devenu célèbre pour son inutilité…cet étrange Pokémon a poussé de nombreux chercheurs a étudier son cas, mais aucune théorie plausible n'a été avancée.",
		"gif": "129.gif",
		"evolutions": [
			"Magicarpe",
			"Léviator"
		],
		"artwork": [
			"C129.png",
			"Magicarpe-RB.png"
		],
		"cri" : [
			"Cri_129.ogg"
		]
	},
	{
		"nom": "Léviator",
		"taille": "6,5 m",
		"poids": "235,0 kg",
		"numéro": "130",
		"type": [
			"Eau",
			"Vol"
		],
		"png": "130.png",
		"nom_en": "Gyarados",
		"nom_ja": [
			"Gyarados",
			"ギャラドス"
		],
		"description": "Terrifiant et puissant, Leviator peut rentrer dans des aspects de rage terrifiant : raser une ville entière ne lui fait pas peur, et de nombreux récit historiques racontent que pendant les guerres, il apparaissait et rasait des régions entières.. Personne ne sait expliquer comment un ridicule Magicarpe peut se transformer en un monstre si terrible.",
		"gif": "130.gif",
		"evolutions": [
			"Magicarpe",
			"Léviator"
		],
		"artwork": [
			"C130.png",
			"Léviator-RB.png"
		],
		"cri" : [
			"Cri_130.ogg"
		]
	},
	{
		"nom": "Lokhlass",
		"taille": "2,5 m",
		"poids": "220,0 kg",
		"numéro": "131",
		"type": [
			"Eau",
			"Glace"
		],
		"png": "131.png",
		"nom_en": "Lapras",
		"nom_ja": [
			"Laplace",
			"ラプラス"
		],
		"description": "Magnifique pokémon, Lokhlass est pourtant en voie d'extinction. D'une nature gentille et généreuse, il transporte les gens par delà les océans. S'il est de bonne humeur, Lokhlass chantonne gaiement une agréable mélodie aiguë. Le soir par contre, sa mélodie est beaucoup plus triste : il appelle ses rares congénères.",
		"gif": "131.gif",
		"evolutions": [
			"Lokhlass"
		],
		"artwork": [
			"C131.png",
			"Lokhlass-RB.png"
		],
		"cri" : [
			"Cri_131.ogg"
		]
	},
	{
		"nom": "Métamorph",
		"taille": "0,3 m",
		"poids": "4,0 kg",
		"numéro": "132",
		"type": [
			"Normal"
		],
		"png": "132.png",
		"nom_en": "Ditto",
		"nom_ja": [
			"Metamon",
			"メタモン"
		],
		"description": "Métamorph a une structure moléculaire surprenante : ce Pokémon sait la modifier pour se transformer en n'importe quoi. Comparez un véritable Pokémon à sa copie, et vous verrez qu'il est exactement pareil. Il se trompe parfois s'il se transforme de mémoire. Si vous faites rire un Métamorph, il ne pourra pas rester déguisé.",
		"gif": "132.gif",
		"evolutions": [
			"Métamorph"
		],
		"artwork": [
			"C132.png",
			"Métamorph-RB.png"
		],
		"cri" : [
			"Cri_132.ogg"
		]
	},
	{
		"nom": "Évoli",
		"taille": "0,3 m",
		"poids": "6,5 kg",
		"numéro": "133",
		"type": [
			"Normal"
		],
		"png": "133.png",
		"nom_en": "Eevee",
		"nom_ja": [
			"Eievui",
			"イーブイ"
		],
		"description": "Evoli est un Pokémon étrange, car il évolue en 7 formes différentes selon les conditions. Sa structure moléculaire instable le fait évoluer dès qu'il rencontre un objet attribué à un environnement particulier. Très attachant, beaucoup de foyers l'apprécient comme animal de compagnie mais il devient de plus en plus rare à l'état sauvage.",
		"gif": "133.gif",
		"evolutions": [
			"Évoli",
			"Aquali",
			"Voltali",
			"Pyroli"
		],
		"artwork": [
			"C133.png",
			"Évoli-RB.png"
		],
		"cri" : [
			"Cri_133.ogg"
		]
	},
	{
		"nom": "Aquali",
		"taille": "1,0 m",
		"poids": "29,0 kg",
		"numéro": "134",
		"type": [
			"Eau"
		],
		"png": "134.png",
		"nom_en": "Vaporeon",
		"nom_ja": [
			"Showers",
			"シャワーズ"
		],
		"description": "Des nageoires et des branchies sont apparues sur le corps d'Aquali, lui permettant de vivre dans les fonds marins. Il est étroitement lié avec l'eau, car sa structure moléculaire en est proche. S'il va se mettre à pleuvoir, ses nageoires frémissent doucement. En se concentrant, il peut manipuler l'eau à volonté.",
		"gif": "134.gif",
		"evolutions": [
			"Évoli",
			"Aquali"
		],
		"artwork": [
			"C134.png",
			"Aquali-RB.png"
		],
		"cri" : [
			"Cri_134.ogg"
		]
	},
	{
		"nom": "Voltali",
		"taille": "0,8 m",
		"poids": "24,5 kg",
		"numéro": "135",
		"type": [
			"Électrik"
		],
		"png": "135.png",
		"nom_en": "Jolteon",
		"nom_ja": [
			"Thunders",
			"サンダース"
		],
		"description": "Si vous vous approchez de près d'un Voltali, vous pourrez entendre le bruit du courant électrique passant dans sa fourrure électrisée. Capable de créer un formidable courant grâce à ses poils, on peut voir qu'il est prêt à attaquer quand ceux-ci sont tous hérissés. Sa fourrure fait aussi office d'aiguillons prêts à être projetés.",
		"gif": "135.gif",
		"evolutions": [
			"Évoli",
			"Voltali"
		],
		"artwork": [
			"C135.png",
			"Voltali-RB.png"
		],
		"cri" : [
			"Cri_135.ogg"
		]
	},
	{
		"nom": "Pyroli",
		"taille": "0,9 m",
		"poids": "25,0 kg",
		"numéro": "136",
		"type": [
			"Feu"
		],
		"png": "136.png",
		"nom_en": "Flareon",
		"nom_ja": [
			"Booster",
			"ブースター"
		],
		"description": "Pyroli utilise sa fourrure pour faire baisser sa chaleur interne, qui peut atteindre les 900 degrés. Mais s'il est excité ou énervé, il avoisine facilement les 1600 degrés. Cracher trop de flammes peut lui être dangereux, car si sa température baisse trop, il meurt. Ses poils ne s'emmêlent jamais car la chaleur les rend lisse.",
		"gif": "136.gif",
		"evolutions": [
			"Évoli",
			"Pyroli"
		],
		"artwork": [
			"C136.png",
			"Pyroli-RB.png"
		],
		"cri" : [
			"Cri_136.ogg"
		]
	},
	{
		"nom": "Porygon",
		"taille": "0,8 m",
		"poids": "36,5 kg",
		"numéro": "137",
		"type": [
			"Normal"
		],
		"png": "137.png",
		"nom_en": "Porygon",
		"nom_ja": [
			"Porygon",
			"ポリゴン"
		],
		"description": "Pokémon artificiel, Porygon est un des Pokémons les plus rares. Comme il ne respire pas, ne mange pas, ne boit pas, il peut survivre n'importe où, y compris dans l'espace. Il se décompile pour rentrer à l'état de programme dans le cyber-espace. Des internautes affirment avoir vu ce Pokémon un instant dans leurs fichiers, puis disparaître.",
		"gif": "137.gif",
		"evolutions": [
			"Porygon"
		],
		"artwork": [
			"C137.png",
			"Porygon-RB.png"
		],
		"cri" : [
			"Cri_137.ogg"
		]
	},
	{
		"nom": "Amonita",
		"taille": "0,4 m",
		"poids": "7,5 kg",
		"numéro": "138",
		"type": [
			"Roche",
			"Eau"
		],
		"png": "138.png",
		"nom_en": "Omanyte",
		"nom_ja": [
			"Omnite",
			"オムナイト"
		],
		"description": "Le dernier Amonita est mort il y a des millions d'années. D'après l'étude de ses fossiles, il avait exactement dix tentacules, qu'il utilisait tantôt pour nager, tantôt pour attraper le plancton dont il se nourrissait. Amonita gérait l'air de sa coquille pour couler ou faire surface.",
		"gif": "138.gif",
		"evolutions": [
			"Amonita",
			"Amonistar"
		],
		"artwork": [
			"C138.png",
			"Amonita-RB.png"
		],
		"cri" : [
			"Cri_138.ogg"
		]
	},
	{
		"nom": "Amonistar",
		"taille": "1,0 m",
		"poids": "35,0 kg",
		"numéro": "139",
		"type": [
			"Roche",
			"Eau"
		],
		"png": "139.png",
		"nom_en": "Omastar",
		"nom_ja": [
			"Omstar",
			"オムスター"
		],
		"description": "Les multiples tentacules d'Amonistar cachaient un effroyable bec acéré, et on pense qu'il l'utilisait pour broyer les coquilles de Kokiyas et en absorber ainsi le contenu. Les scientifiques pensent qu'il s'est éteint car sa coquille devenait trop lourde à déplacer, l'empêchant donc de manger à sa faim.",
		"gif": "139.gif",
		"evolutions": [
			"Amonita",
			"Amonistar"
		],
		"artwork": [
			"C139.png",
			"Amonistar-RB.png"
		],
		"cri" : [
			"Cri_139.ogg"
		]
	},
	{
		"nom": "Kabuto",
		"taille": "0,5 m",
		"poids": "11,5 kg",
		"numéro": "140",
		"type": [
			"Roche",
			"Eau"
		],
		"png": "140.png",
		"nom_en": "Kabuto",
		"nom_ja": [
			"Kabuto",
			"カブト"
		],
		"description": "Vivant à la même époque qu'Amonita, on a longtemps cru que Kabuto avait disparu jusqu'à ce que l'on retrouve un spécimen vivant. Quand il est caché au fond de l'eau, il utilise les yeux sur son dos pour voir ce qu'il l'entoure. Ses petites pattes sont très pratiques pour arpenter le fond marin.",
		"gif": "140.gif",
		"evolutions": [
			"Kabuto",
			"Kabutops"
		],
		"artwork": [
			"C140.png",
			"Kabuto-RB.png"
		],
		"cri" : [
			"Cri_140.ogg"
		]
	},
	{
		"nom": "Kabutops",
		"taille": "1,3 m",
		"poids": "40,5 kg",
		"numéro": "141",
		"type": [
			"Roche",
			"Eau"
		],
		"png": "141.png",
		"nom_en": "Kabutops",
		"nom_ja": [
			"Kabutops",
			"カブトプス"
		],
		"description": "Kabutops était un excellent nageur. Dans l'eau, il se recroquevillait sur ses jambes et il agitait sa coquille pour nager à très grande vitesse. Ses longues griffes acérées se sont mutées en lames tranchantes, qu'il utilise pour découper ses proies. Certains scientifiques pensent qu'il est l'ancêtre d'Insecateur.",
		"gif": "141.gif",
		"evolutions": [
			"Kabuto",
			"Kabutops"
		],
		"artwork": [
			"C141.png",
			"Kabutops-RB.png"
		],
		"cri" : [
			"Cri_141.ogg"
		]
	},
	{
		"nom": "Ptéra",
		"taille": "1,8 m",
		"poids": "59,0 kg",
		"numéro": "142",
		"type": [
			"Roche",
			"Vol"
		],
		"png": "142.png",
		"nom_en": "Aerodactyl",
		"nom_ja": [
			"Ptera",
			"プテラ"
		],
		"description": "Ptéra était le roi des cieux à l'époque préhistorique, mais il a aujourd'hui disparu. On sait qu'il employait sa gueule garnie de crocs pour égorger ses victimes. Il arpentait les cieux préhistoriques en étirant ses longues ailes, en se laissant porter par les courant chauds. On pense qu'il était d'une nature très agressive.",
		"gif": "142.gif",
		"evolutions": [
			"Ptéra"
		],
		"artwork": [
			"C142.png",
			"Ptéra-RB.png"
		],
		"cri" : [
			"Cri_142.ogg"
		]
	},
	{
		"nom": "Ronflex",
		"taille": "2,1 m",
		"poids": "460,0 kg",
		"numéro": "143",
		"type": [
			"Normal"
		],
		"png": "143.png",
		"nom_en": "Snorlax",
		"nom_ja": [
			"Kabigon",
			"カビゴン"
		],
		"description": "Ronflex est un Pokémon très pacifique, mais très paresseux aussi. Ses principales préoccupations de la journée sont dormir et manger. Son incroyable estomac est capable de digérer n'importe quoi, même le plus mortel des poisons. Ce Pokémon préfère faire la sieste plutôt que de se battre.",
		"gif": "143.gif",
		"evolutions": [
			"Ronflex"
		],
		"artwork": [
			"C143.png",
			"Ronflex-RB.png"
		],
		"cri" : [
			"Cri_143.ogg"
		]
	},
	{
		"nom": "Artikodin",
		"taille": "1,7 m",
		"poids": "55,4 kg",
		"numéro": "144",
		"type": [
			"Glace",
			"Vol"
		],
		"png": "144.png",
		"nom_en": "Articuno",
		"nom_ja": [
			"Freezer",
			"フリーザー"
		],
		"description": "Artikodin est l'oiseau légendaire qui contrôle la glace éternelle. Quand il vole, il givre l'air et l'eau tout autour de lui, ce qui crée une légère neige poudreuse dans son sillage. Ce Pokémon vole gracieusement, en ondulant délicatement sa longue et magnifique queue derrière lui.",
		"gif": "144.gif",
		"evolutions": [
			"Artikodin"
		],
		"artwork": [
			"C144.png",
			"Artikodin-RB.png"
		],
		"cri" : [
			"Cri_144.ogg"
		]
	},
	{
		"nom": "Électhor",
		"taille": "1,6 m",
		"poids": "52,6 kg",
		"numéro": "145",
		"type": [
			"Électrik",
			"Vol"
		],
		"png": "145.png",
		"nom_en": "Zapdos",
		"nom_ja": [
			"Thunder",
			"サンダー"
		],
		"description": "Electhor est l'oiseau légendaire de la foudre. Il est très impressionnant de le voir voler car il est suivi par d'immenses nuages noirs. La plupart du temps, il se cache dedans et déclenche de violents orages. S'il vole à découvert, vous pourrez voir des étincelles jaillir de ses ailes électrisées.",
		"gif": "145.gif",
		"evolutions": [
			"Électhor"
		],
		"artwork": [
			"C145.png",
			"Électhor-RB.png"
		],
		"cri" : [
			"Cri_145.ogg"
		]
	},
	{
		"nom": "Sulfura",
		"taille": "2,0 m",
		"poids": "60,0 kg",
		"numéro": "146",
		"type": [
			"Feu",
			"Vol"
		],
		"png": "146.png",
		"nom_en": "Moltres",
		"nom_ja": [
			"Fire",
			"ファイヤー"
		],
		"description": "Etroitement lié aux volcans, Sulfura est l'oiseau légendaire du feu. On raconte qu'il aide les voyageurs égarés dans la montagne. Ses ailes en feu s'embrasent quand il bat des ailes. Si dans la nuit vous apercevez une boule de feu voler à toute allure, il s'agit de l'oiseau légendaire du feu.",
		"gif": "146.gif",
		"evolutions": [
			"Sulfura"
		],
		"artwork": [
			"C146.png",
			"Sulfura-RB.png"
		],
		"cri" : [
			"Cri_146.ogg"
		]
	},
	{
		"nom": "Minidraco",
		"taille": "1,8 m",
		"poids": "3,3 kg",
		"numéro": "147",
		"type": [
			"Dragon"
		],
		"png": "147.png",
		"nom_en": "Dratini",
		"nom_ja": [
			"Miniryu",
			"ミニリュウ"
		],
		"description": "Pendant ses nombreuses périodes de mue, Minidraco est fragile. Il se cache derrière les cascades pour se protéger. Longtemps considéré comme légendaire, une colonie a pourtant été découverte dans les océans par un pêcheur. Rare malgré tout, il est férocement protégé par les autorités.",
		"gif": "147.gif",
		"evolutions": [
			"Minidraco",
			"Draco",
			"Dracolosse"
		],
		"artwork": [
			"C147.png",
			"Minidraco-RB.png"
		],
		"cri" : [
			"Cri_147.ogg"
		]
	},
	{
		"nom": "Draco",
		"taille": "4,0 m",
		"poids": "16,5 kg",
		"numéro": "148",
		"type": [
			"Dragon"
		],
		"png": "148.png",
		"nom_en": "Dragonair",
		"nom_ja": [
			"Hakuryu",
			"ハクリュー"
		],
		"description": "Draco est un Pokémon mythique, qui emmagasine le plus d'énergie possible. En déchargeant celle-ci dans ses cristaux, il est capable de faire varier le climat. Il est entouré d'une aura blanche quand la météo change. Solitaire, c'est un Pokémon farouche : peu de gens l'ont déjà vu sauvage.",
		"gif": "148.gif",
		"evolutions": [
			"Minidraco",
			"Draco",
			"Dracolosse"
		],
		"artwork": [
			"C148.png",
			"Draco-RB.png"
		],
		"cri" : [
			"Cri_148.ogg"
		]
	},
	{
		"nom": "Dracolosse",
		"taille": "2,2 m",
		"poids": "210,0 kg",
		"numéro": "149",
		"type": [
			"Dragon",
			"Vol"
		],
		"png": "149.png",
		"nom_en": "Dragonite",
		"nom_ja": [
			"Kairyu",
			"カイリュー"
		],
		"description": "Certains pêcheurs affirment s'être fait sauver de la noyade par un Dracolosse sauvage. C'est un Pokémon marin extrêmement rare au grand cœur. Sa carrure impressionnante le met à l'abri de toute attaque. Déchaîner sa colère serait la pire chose à faire, car malgré son tempérament pacifique, il maîtrise des attaques dévastatrices comme Colère.",
		"gif": "149.gif",
		"evolutions": [
			"Minidraco",
			"Draco",
			"Dracolosse"
		],
		"artwork": [
			"C149.png",
			"Dracolosse-RB.png"
		],
		"cri" : [
			"Cri_149.ogg"
		]
	},
	{
		"nom": "Mewtwo",
		"taille": "2,0 m",
		"poids": "122,0 kg",
		"numéro": "150",
		"type": [
			"Psy"
		],
		"png": "150.png",
		"nom_en": "Mewtwo",
		"nom_ja": [
			"Myuutsu",
			"ミュウツー"
		],
		"description": "Mewtwo est un terrible Pokémon qui vient d'expériences génétiques horribles et malsaines. Créé pour le combat, il ne connaît ni la pitié, ni la défaite. Ses puissants pouvoirs psychiques peuvent aller jusqu'à déclencher des variations météorologiques partout dans le monde. Il est unique.",
		"gif": "150.gif",
		"evolutions": [
			"Mewtwo"
		],
		"artwork": [
			"C150.png",
			"Mewtwo-RB.png"
		],
		"cri" : [
			"Cri_150.ogg"
		]
	},
	{
		"nom": "Mew",
		"taille": "0,4 m",
		"poids": "4,0 kg",
		"numéro": "151",
		"type": [
			"Psy"
		],
		"png": "151.png",
		"nom_en": "Mew",
		"nom_ja": [
			"Myuu",
			""
		],
		"description": "On sait très peu de choses sur Mew. Il est dit qu'autrefois, ils étaient nombreux, mais ils auraient tous disparus sauf 1. Ce Pokémon mythique peut apprendre toutes les capacités, c'est pour cela que certains pensent qu'il est l'ancêtre de tous les Pokémon. Pacifique, il passe son temps à jouer et à s'amuser.",
		"gif": "151.gif",
		"evolutions": [
			"Mew"
		],
		"artwork": [
			"C151.png",
			"Mew-RB.png"
		],
		"cri" : [
			"Cri_151.ogg"
		]
	}
]