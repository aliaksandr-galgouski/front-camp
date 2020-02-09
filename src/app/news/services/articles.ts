import { Article } from '../models/article';
import { ArticleSource } from '../models/article-source';

export const articles: Article[] = [
  {
    source: {
      id: 'la-nacion',
      name: 'La Nacion'
    },
    author: 'Redacción LA NACION',
    title:
      'Pánico en Tailandia: un soldado mató a más de diez personas en un tiroteo',
    description: '',
    url:
      'http://www.lanacion.com.ar/el-mundo/panico-tailandia-soldado-mato-mas-diez-personas-nid2331916',
    urlToImage: '//bucket3.glanacion.com/anexos/fotos/97/3191797.jpg',
    publishedAt: '2020-08-02T10:11:00Z',
    content: null
  },
  {
    source: {
      id: 'la-nacion',
      name: 'La Nacion'
    },
    author: 'Redacción LA NACION',
    title: 'Desplazan de la IGJ al equipo que investigaba a los Kirchner',
    description:
      'La abogada de Stolbizer denunció un  "operativo venganza " contra tres directores que fiscalizaron las empresas de la vicepresidenta y el Instituto Patria',
    url:
      'http://www.lanacion.com.ar/politica/desplazan-de-la-igj-al-equipo-que-investigaba-a-los-kirchner-nid2331807',
    urlToImage: '//bucket1.glanacion.com/anexos/fotos/30/3180230.jpg',
    publishedAt: '2020-08-02T00:00:00Z',
    content:
      'Ricardo Nissen, director de la IGJ\r\n Fuente: LA NACION\r\nLa abogada de Stolbizer denunció un "operativo venganza" contra tres directores que fiscalizaron las empresas de la vicepresidenta y el Instituto Patria\r\nLa \r\nabogada de Margarita Stolbizer, \r\nSilvina Ma… [+5443 chars]'
  },
  {
    source: {
      id: 'goteborgs-posten',
      name: 'Göteborgs-Posten'
    },
    author: 'Jan Andersson',
    title: 'Dags för Melodifestivalen i Göteborg',
    description:
      'Anna Bergendahl och Paul Rey. Där har ni Melodifestivalens troliga segrare i kväll.',
    url:
      'http://www.gp.se/kultur/kultur/dags-f%C3%B6r-melodifestivalen-i-g%C3%B6teborg-1.23724286',
    urlToImage:
      'http://www.gp.se/polopoly_fs/3.200.1580892367!/sites/se.gp/images/fallback-og-image.png',
    publishedAt: '2020-02-08T19:19:27Z',
    content:
      'Med betoning på "troliga". För det är som bekant helt omöjligt att förutse hur det går i den här tävlingen, även om GP:s Melloreportrar sin vana trogen gjort ett ärligt försök att gissa utgången.\r\nLÄS MER:Så går det i kväll vi tippar Melodifestivalen\r\nEnligt … [+700 chars]'
  },
  {
    source: {
      id: 'goteborgs-posten',
      name: 'Göteborgs-Posten'
    },
    author: 'Ulrika Karlsson',
    title: 'Därför ökar vårt intresse för sexleksaker',
    description:
      'Sexleksakerna har kommit för att stanna, och intresset bara växer. Nu används inte stendildos eller sjömansdockor för att bli tillfredsställd, utan lufttrycksvibratorer och leksaker som styrs via appar av en partner, eller av en dildo som mäter din orgasm.',
    url:
      'http://www.gp.se/nyheter/g%C3%B6teborg/d%C3%A4rf%C3%B6r-%C3%B6kar-v%C3%A5rt-intresse-f%C3%B6r-sexleksaker-1.23588909',
    urlToImage:
      'http://www.gp.se/image/policy:1.23588573:1581185634/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a',
    publishedAt: '2020-02-08T19:13:39Z',
    content:
      'Sexleksakerna har allt mer blivit en viktig del av svenskarnas sexliv. En del köper dem för för att ge sexlivet en extra krydda, medan det är en nödvändighet för andra för att ens få orgasm.\r\nSuzann Larsdotter är auktoriserad sexolog och jobbar på RFSU, säger… [+2520 chars]'
  },
  {
    source: {
      id: 'goteborgs-posten',
      name: 'Göteborgs-Posten'
    },
    author: 'Ulrika Karlsson',
    title: 'Här är göteborgarnas favoritsexleksaker',
    description:
      'Ligger det en vibrator, analplugg eller en penisring undangömd i en byrå hemma – då är du inte ensam om att ha det. Intresset för sexleksaker är stort, och göteborgarna har en storfavorit. – Det är en hysteriskt stor trend, säger Evelina Odle på Mshop.',
    url:
      'http://www.gp.se/nyheter/g%C3%B6teborg/h%C3%A4r-%C3%A4r-g%C3%B6teborgarnas-favoritsexleksaker-1.23588613',
    urlToImage:
      'http://www.gp.se/polopoly_fs/3.200.1580892367!/sites/se.gp/images/fallback-og-image.png',
    publishedAt: '2020-02-08T19:12:52Z',
    content: null
  },
  {
    source: {
      id: 'buzzfeed',
      name: 'Buzzfeed'
    },
    author: 'Lauren Garafano',
    title: 'This "Office" Cold Open Was Actually A Complete Mistake',
    description: '“Ladies and gentleman, it was not meant to pop."',
    url: 'https://www.buzzfeed.com/laurengarafano/dwight-fitness-orb-cold-open',
    urlToImage:
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/8/17/enhanced/06a58d67a6f9/original-430-1581181592-3.jpg?crop=1243:651;7,149',
    publishedAt: '2020-02-08T19:08:43.0925736Z',
    content: null
  },
  {
    source: {
      id: 'la-gaceta',
      name: 'La Gaceta'
    },
    author: 'La Gaceta',
    title: 'Las tormentas provocaron daños en el interior tucumano',
    description:
      'Los parajes de Pampa Pozo y Puerta Alegre, en el departamento Cruz Alta, fueron los más afectados.',
    url:
      'https://www.lagaceta.com.ar/nota/834230/actualidad/tormentas-provocaron-danos-interior-tucumano.html',
    urlToImage:
      'https://img.lagaceta.com.ar/fotos/notas/2020/02/08/varias-zonas-se-vieron-afectadas-tras-tormenta-ayer-provincia-834230-152346.jpeg',
    publishedAt: '2020-02-08T19:08:35.5993862Z',
    content:
      'Las últimas lluvias generaron daños en diferentes localidades del interior, en especial en el norte tucumano. Los vecinos de compartieron a través del Whatsapp de LA GACETA, las imágenes del desastre y cómo quedaron las zonas afectadas.\r\nEn la localidad de Ta… [+1380 chars]'
  },
  {
    source: {
      id: 'fox-news',
      name: 'Fox News'
    },
    author: 'Fox News',
    title:
      "Shannen Doherty under 'enormous emotional distress' after State Farm peddled 'lies' about her smoking habits",
    description:
      'Shannen Doherty is opening up about the intense emotional distress she is under due to her ongoing litigation against State Farm Insurance -- a company she says is peddling lies about her smoking habits to the public.',
    url:
      'https://www.foxnews.com/entertainment/shannen-doherty-cancer-state-farm-emotional-distress',
    urlToImage:
      'https://static.foxnews.com/foxnews.com/content/uploads/2019/07/ContentBroker_contentid-c22ca37b635a4ce991e01376cdb1fd42.png',
    publishedAt: '2020-02-08T19:08:35.2280305Z',
    content:
      'Shannen Doherty is opening up about the intense emotional distress she is under due to her ongoing litigation against State Farm Insurance -- a company she says is peddling lies about her smoking habits to the public.\r\nFox News obtained a declaration the 48-y… [+3394 chars]'
  },
  {
    source: {
      id: 'buzzfeed',
      name: 'Buzzfeed'
    },
    author: 'Hanifah Rahman',
    title: 'Here Are All The Oscar Nominees In Their First Movie Roles',
    description: "They've come a long long way.",
    url: 'https://www.buzzfeed.com/hanifahrahman/oscar-noms-first-roles',
    urlToImage:
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/7/16/campaign_images/ad76ed5c1cb3/here-are-all-the-oscar-nominees-in-their-first-mo-2-268-1581092706-4_dblbig.jpg',
    publishedAt: '2020-02-08T19:08:27.1062411Z',
    content: null
  },
  {
    source: {
      id: 'fox-news',
      name: 'Fox News'
    },
    author: 'Fox News',
    title:
      'AOC, boyfriend discuss ‘combating racism as a white person’ on Instagram',
    description:
      'Rep. Alexandria Ocasio-Cortez made a rare appearance with boyfriend Riley Roberts while taking questions from fans in an Instagram story Friday night.',
    url:
      'https://www.foxnews.com/politics/aoc-boyfriend-discuss-combating-racism-as-a-white-person-on-instagram',
    urlToImage:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/f7d885eb-db94-41ea-b075-bcdce0d0f89b/b8ac38e5-f9d5-49b5-8054-420817b76b29/1280x720/match/image.jpg',
    publishedAt: '2020-02-08T19:08:24.0713299Z',
    content:
      'Rep. Alexandria Ocasio-Cortezmade a rare appearance with boyfriend Riley Roberts while taking questions from fans in an Instagram story Friday night.\r\nThe freshman Queens socialist enlisted her man to talk about the issue of “combating racism as a white perso… [+1100 chars]'
  },
  {
    source: {
      id: 'buzzfeed',
      name: 'Buzzfeed'
    },
    author: 'Natalie Brown',
    title:
      "26 Useful Products Under $10 That'll Actually Help Improve Your Entire Home",
    description: 'Smart finds for your closet, bathroom, kitchen, and more.',
    url:
      'https://www.buzzfeed.com/nataliebrown/products-under-10-improve-your-home-2020',
    urlToImage:
      'https://img.buzzfeed.com/buzzfeed-static/static/2018-11/15/13/enhanced/buzzfeed-prod-web-02/original-25588-1542305429-6.jpg?crop=1244:651;0,89',
    publishedAt: '2020-02-08T19:08:07.0009576Z',
    content: null
  },
  {
    source: {
      id: 'espn-cric-info',
      name: 'ESPN Cric Info'
    },
    author: null,
    title:
      'Recent Match Report - Sydney Sixers vs Melbourne Stars, Big Bash League, Final | ESPNcricinfo.com',
    description:
      'Read the detailed Reports & Articles of Sydney Sixers vs Melbourne Stars, Big Bash League, Final only on ESPNcricinfo.com',
    url:
      'https://www.espncricinfo.com/series/8044/report/1195633/sydney-sixers-vs-melbourne-stars-final-big-bash-league',
    urlToImage: 'https://a.espncdn.com/i/cricket/cricinfo/1215856_900x506.jpg',
    publishedAt: '2020-02-08T19:08:01.3905768Z',
    content:
      'Sydney Sixers 5 for 116 (Philippe 52, Silk 27*, Maxwell 2-17) beat Melbourne Stars 6 for 97 (Larkin 38*, Lyon 2-19) by 19 runs\r\nThe rain clouds parted in the nick of time and the Sydney Sixers took the Big Bash title without it being handed to them in a washo… [+3996 chars]'
  },
  {
    source: {
      id: 'lenta',
      name: 'Lenta'
    },
    author: 'Lenta',
    title: 'Участниками погромов в Казахстане стали почти тысяча человек',
    description:
      'Участниками погромов в Кордайском районе Жамбылской области Казахстана стали в общей сложности почти тысяча человек. Об этом заявил аким региона Аскар Мырзахметов. На данный момент задержаны 47 человек, передает издание BaigeNews. Еще 44 были освобождены, так…',
    url: 'https://lenta.ru/news/2020/02/08/1000/',
    urlToImage:
      'https://icdn.lenta.ru/images/2020/02/08/21/20200208215810717/detail_a6c2f70d587b6b30d6a2c865c9b75148.jpg',
    publishedAt: '2020-02-08T19:06:34Z',
    content:
      '. , .\r\n47 , BaigeNews. 44 , . .\r\n 8 , , . . - , .\r\n , , . - « , ». , , . , .'
  },
  {
    source: {
      id: 'business-insider-uk',
      name: 'Business Insider (UK)'
    },
    author: 'Kat Tenbarge',
    title:
      'Biden launches attack ad making fun of Buttigieg as a small-town mayor - Business Insider',
    description:
      "Biden's digital director said the ad had more views than the population of South Bend, while Buttigieg's team hit back at Biden's stance in the race.",
    url:
      'http://uk.businessinsider.com/biden-launches-attack-ad-making-fun-of-mayor-pete-buttigieg-2020-2',
    urlToImage:
      'https://i.insider.com/5e3efd75e35bab3dd321e623?width=1200&format=jpeg',
    publishedAt: '2020-02-08T19:03:59Z',
    content:
      "Joe Bidens' campaign released a snarky attack ad about Pete Buttigieg and his accomplishments as mayor of South Bend, Indiana, as compared to the former Vice President's record on national policy. \r\n\"Both Vice President Biden and former Mayor Pete Buttigieg h… [+1624 chars]"
  },
  {
    source: {
      id: 'aftenposten',
      name: 'Aftenposten'
    },
    author: 'Karoline Risnes, Stella Marie Brevik',
    title: 'Melder full storm natt til søndag: – Det blir ufyselig',
    description: 'Farevarsel om nedbør, skred, vind og høy vannstand.',
    url:
      'https://www.aftenposten.no/norge/i/1n3Qwq/Melder-full-storm-natt-til-sondag--Det-blir-ufyselig',
    urlToImage:
      'https://ap.mnocdn.no/images/0d162eaa-3205-4127-be69-1a643367e69a?fit=crop&q=80&w=1440',
    publishedAt: '2020-02-08T19:03:00Z',
    content:
      'smp-stories-top-widget\r\n– En vindfull helg med dårlig vær.\r\nSlik beskriver statsmeteorolog Geir Ottar Fagerlid helgen vi nå er inne i. Natt til søndag er det meldt full storm langs kysten av Vestland fylke.\r\n– Det vil blåse kraftigst i rundt tre timer i natt.… [+2763 chars]'
  },
  {
    source: {
      id: 'news24',
      name: 'News24'
    },
    author: null,
    title: "Saturday's Lotto and Lotto Plus results",
    description:
      'Here are the winning Lotto and Lotto Plus numbers from the Saturday, February ?8? draw.',
    url:
      'https://www.news24.com/Lottery/saturdays-lotto-and-lotto-plus-results-20200208-6',
    urlToImage:
      'http://cdn.24.co.za/files/Cms/General/d/8146/80402d1b11bd47b68cb85c8243249586.jpg',
    publishedAt: '2020-02-08T19:01:40+00:00',
    content:
      'Lotto: 03, 28, 37, 41, 42, 51 Bonus: 14Lotto Plus 1: 20, 26, 35, 43, 44, 46 Bonus: 34\r\nLotto Plus 2: 09, 10, 12, 13, 22, 42 Bonus: 05\r\nAre you feeling lucky? See the payouts for the Lotto here, click here for Lotto Plus 1 and Lotto Plus 2, click here.   \r\nDow… [+809 chars]'
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title: 'Kerr acknowledges Muirhead dismissal proved costly for Ayr',
    description: null,
    url:
      'http://www.fourfourtwo.com/news/kerr-acknowledges-muirhead-dismissal-proved-costly-ayr',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.24511043.jpg',
    publishedAt: '2020-02-08T19:01:01Z',
    content:
      'Ayr United player-manager Mark Kerr insists Aaron Muirheads stupid challenge cost them the chance of another William Hill Scottish Cup upset.\r\nThe Ladbrokes Championship outfit, who knocked out Ross County in the previous round, had hoped to take another Prem… [+1982 chars]'
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title: 'Frank hails Brentford character after late win over Middlesbrough',
    description: null,
    url:
      'http://www.fourfourtwo.com/news/frank-hails-brentford-character-after-late-win-over-middlesbrough',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.50168686.jpg',
    publishedAt: '2020-02-08T19:01:01Z',
    content:
      'Brentford boss Thomas Frank believes his sides coolness under pressure will be crucial in their bid to secure promotion.\r\nOllie Watkins struck three minutes from time to snatch a 3-2 victory in a pulsating clash against Middlesbrough at Griffin Park their fir… [+2542 chars]'
  },
  {
    source: {
      id: 'techcrunch',
      name: 'TechCrunch'
    },
    author: 'Eric Eldon',
    title: 'Startups Weekly: Asana numbers likely to be what the market wants',
    description:
      '[Editor’s note: Want to get this weekly review of news that startups can use? Just subscribe here.]  Asana may get more attention than the average SaaS company due to the Facebook pedigrees and outspoken views of its founders, but in practice it’s a low-profi…',
    url:
      'https://techcrunch.com/2020/02/08/startups-weekly-asana-numbers-likely-to-be-what-the-market-wants/',
    urlToImage:
      'https://techcrunch.com/wp-content/uploads/2014/05/justin-rosenstein-asana4.jpg?w=600',
    publishedAt: '2020-02-08T19:00:19Z',
    content:
      '[Editor’s note: Want to get this weekly review of news that startups can use? Just subscribe here.] \r\nAsana may get more attention than the average SaaS company due to the Facebook pedigrees and outspoken views of its founders, but in practice it’s a low-prof… [+4837 chars]'
  },
  {
    source: {
      id: 'ansa',
      name: 'ANSA.it'
    },
    author: 'ANSA.it',
    title: 'Amadeus, "Ho fatto il Sanremo che sognavo" - Ultima Ora',
    description:
      '"Sono stato in giro fino alle quattro e mezza a cercare Bugo...". Occhi rossi, volto tirato, Amadeus\r\nè sfinito dopo il fuori programma di ieri notte, con l\'artista che ha abbandonato il palco dopo la\r\nlite con Morgan. (ANSA)',
    url:
      'http://www.ansa.it/sito/notizie/topnews/2020/02/08/amadeus-ho-fatto-il-sanremo-che-sognavo_a8badeb5-6dc1-443a-9472-ad165b10b041.html',
    urlToImage:
      'http://www.ansa.it/webimages/img_700/2020/2/8/2bf72a37c709f8883afe056a187427ba.jpg',
    publishedAt: '2020-02-08T19:00:00Z',
    content:
      '(ANSA) - SANREMO, 08 FEB - "Sono stato in giro fino alle\r\nquattro e mezza a cercare Bugo...". Occhi rossi, volto tirato,\r\nAmadeus è sfinito dopo il fuori programma di ieri notte, con\r\nl\'artista che ha abbandonato il palco dopo la lite con Morgan.Ma sorride so… [+1714 chars]'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title: 'Ligue A (H) : Rennes imperturbable à Paris - Volley - Ligue A (H)',
    description:
      "Au lendemain de la sanction reçue pour des irrégularités financières, le club breton s'est nettement imposé à Paris, samedi (3-0), et reprend provisoirement la tête du Championnat.",
    url:
      'https://www.lequipe.fr/Volley-ball/Actualites/Ligue-a-h-rennes-imperturbable-a-paris/1107772',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/les-rennais-ont-enchaine-une-deuxieme-victoire-de-rang-samedi-a-paris-v-michel-l-equipe/1500000001300515/0:0,1995:1330-640-427-75/2d920.jpg',
    publishedAt: '2020-02-08T18:59:00+00:00',
    content:
      "Derrière ses petites lunettes, l'entraîneur rennais Nikola Matijasevic a savouré le retour au jeu. Vendredi, le technicien franco-serbe reconnaissait que ses joueurs étaient « quand même un peu affectés » par les remous sur des irrégularités financières qui o… [+1216 chars]"
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      'FC Nantes : Wesley Moustache remplace Charles Traoré à Dijon - Foot - L1 - Nantes',
    description:
      "Wesley Moustache remplace Charles Traoré dans l'équipe nantaise qui démarre ce samedi soir (20 heures) à Dijon.",
    url:
      'https://www.lequipe.fr/Football/Actualites/Fc-nantes-wesley-moustache-remplace-charles-traore-a-dijon/1107771',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/charles-traore-ne-jouera-finalement-pas-contre-le-dfco-n-luttiau-l-equipe/1500000001300512/0:0,1331:1331-640-640-75/db08d.jpg',
    publishedAt: '2020-02-08T18:57:00+00:00',
    content:
      'Incertain avant la rencontre, le latéral gauche Charles Traoré ne pourra finalement pas tenir sa place ce samedi soir (20 heures) sur le terrain de Dijon. Initialement sur la feuille de match, Traoré, qui a reçu un coup à une cheville contre Paris (1-2), a ét… [+110 chars]'
  },
  {
    source: {
      id: 'nrk',
      name: 'NRK'
    },
    author: 'Anne Mone Nordahl',
    title: 'Strid om diagnosen filleristing, også kalt shaken baby syndrome',
    description:
      'Halvannen uke etter at dette bildet ble tatt, fikk den lille jenta fra Ringerike alvorlig hjerneskade. Foreldrene ble siktet for å ha ristet henne. Nå står de midt i en strid mellom medisinske fagmiljøer som er splittet i synet på en omstridt diagnose.',
    url:
      'https://www.nrk.no/osloogviken/xl/strid-om-diagnosen-filleristing_-ogsa-kalt-shaken-baby-syndrome-1.14849820',
    urlToImage:
      'https://gfx.nrk.no/OAYYuzzmp2OaFW0b6yIJ_QBRSfegeJGpi9M7T8-oCfXQ.jpg',
    publishedAt: '2020-02-08T18:54:10Z',
    content:
      'Opp en grusvei et sted på Ringerike passerer du flere jorder og noen spredte gårdsbruk. På et av tunene, tilbaketrukket for seg selv, bor et kjærestepar med en stue fylt av bilder. Bildene er av ei smilende jente.\r\nForeldrene hennes har flere ganger i avhør f… [+25302 chars]'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      "TQO (F) : l'Australie se relance en dominant largement Porto Rico - Basket - TQO (F)",
    description:
      "Pas de deuxième miracle pour Porto Rico, sèchement battu par l'Australie samedi soir à Bourges (100-74), pour le compte de la deuxième journée du tournoi de qualification pour les Jeux de Tokyo.",
    url:
      'https://www.lequipe.fr/Basket/Actualites/Tqo-f-l-australie-se-relance-en-dominant-largement-porto-rico/1107770',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/liz-cambage-et-l-australie-n-ont-pas-tremble-face-a-porto-rico-samedi-soir-a-reau-l-equipe/1500000001300511/0:0,1995:1330-640-427-75/2c8c0.jpg',
    publishedAt: '2020-02-08T18:54:00+00:00',
    content:
      "Pas de deuxième exploit en trois jours pour Porto Rico. La sélection caribéenne, qui avait surpris le Brésil jeudi à Bourges en ouverture du tournoi de qualification pour les Jeux Olympiques, a été largement dominée par l'Australie (100-74), qui se devait de … [+783 chars]"
  },
  {
    source: {
      id: 'globo',
      name: 'Globo'
    },
    author: 'Globo',
    title:
      'Botafogo-PB  x  Náutico - Copa do Nordeste 2020 rodada 3 - Tempo Real - Globo Esporte',
    description:
      'Copa do Nordeste 2020, rodada 3 - acompanhe em tempo real tudo sobre o jogo Botafogo-PB  x  Náutico: escalação, fotos, vídeos e lances da partida.',
    url:
      'https://globoesporte.globo.com/pb/futebol/copa-do-nordeste/jogo/08-02-2020/botafogo-pb-nautico.ghtml',
    urlToImage:
      'https://s2.glbimg.com/n09_BnQ3Hz8DbWKZZ_UbwkJQ7MQ=/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/B/i/Uh2Lg3QjaOJOLPJhsASQ/facebook.png',
    publishedAt: '2020-02-08T18:53:50.226119Z',
    content: null
  },
  {
    source: {
      id: 'globo',
      name: 'Globo'
    },
    author: 'Globo',
    title:
      'Bangu  x  Macaé - Campeonato Carioca 2020 rodada 6 - Tempo Real - Globo Esporte',
    description:
      'Campeonato Carioca 2020, rodada 6 - acompanhe em tempo real tudo sobre o jogo Bangu  x  Macaé: escalação, fotos, vídeos e lances da partida.',
    url:
      'https://globoesporte.globo.com/rj/serra-lagos-norte/futebol/campeonato-carioca/jogo/08-02-2020/bangu-macae.ghtml',
    urlToImage:
      'https://s2.glbimg.com/n09_BnQ3Hz8DbWKZZ_UbwkJQ7MQ=/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/B/i/Uh2Lg3QjaOJOLPJhsASQ/facebook.png',
    publishedAt: '2020-02-08T18:53:41.7509911Z',
    content: null
  },
  {
    source: {
      id: 'globo',
      name: 'Globo'
    },
    author: 'Globo',
    title:
      'Fortaleza  x  Santa Cruz - Copa do Nordeste 2020 rodada 3 - Tempo Real - Globo Esporte',
    description:
      'Copa do Nordeste 2020, rodada 3 - acompanhe em tempo real tudo sobre o jogo Fortaleza  x  Santa Cruz: escalação, fotos, vídeos e lances da partida.',
    url:
      'https://globoesporte.globo.com/ce/futebol/copa-do-nordeste/jogo/08-02-2020/fortaleza-santa-cruz.ghtml',
    urlToImage:
      'https://s2.glbimg.com/n09_BnQ3Hz8DbWKZZ_UbwkJQ7MQ=/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/B/i/Uh2Lg3QjaOJOLPJhsASQ/facebook.png',
    publishedAt: '2020-02-08T18:53:38.6820478Z',
    content: null
  },
  {
    source: {
      id: 'cbc-news',
      name: 'CBC News'
    },
    author: 'CBC News',
    title:
      'As WW II vet Fred Arsenault turns 100, his son plans birthday gift dear to his heart | CBC News',
    description:
      'Second World War veteran Fred Arsenault is turning 100 on March 6, and his son Ron has launched an appeal for 100 birthday cards in time for the big day.',
    url:
      'http://www.cbc.ca/news/canada/toronto/wwii-vet-fred-arsenault-turning-100-birthday-1.5451523',
    urlToImage:
      'https://i.cbc.ca/1.5451575.1580842435!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/fred-arsenault.JPG',
    publishedAt: '2020-02-08T18:53:31.5151742Z',
    content:
      'Fred Arsenault loves getting letters the old-fashioned way through the postal service.\r\nIt was while serving in the Second World War that Arsenault learned to fully appreciate the significance of receiving that envelope.\r\n"He was in a slit trench and he would… [+4141 chars]'
  },
  {
    source: {
      id: 'la-repubblica',
      name: 'La Repubblica'
    },
    author: 'La Repubblica',
    title:
      "Sanremo 2020, colpo di scena: Bugo se ne va e Morgan interrompe l'esibizione",
    description:
      "Colpo di scena all'Ariston. A esibizione iniziata del brano 'Sincero', Bugo si allontana dal palco e Morgan interrompe l'esibizione. Amadeus cerca...",
    url:
      'https://video.repubblica.it/dossier/sanremo-2020/sanremo-2020-colpo-di-scena-bugo-se-ne-va-e-morgan-interrompe-l-esibizione/353632/354200?video',
    urlToImage:
      'https://www.repstatic.it/video/photo/2020/02/08/688638/688638-thumb-full-720-bt_oxi3u1r2gshmq.jpg',
    publishedAt: '2020-02-08T18:53:30.1949079Z',
    content:
      'Lo speciale\r\nSanremo 2020 \r\n(115 video)\r\nhttps://video.repubblica.it/dossier/sanremo-2020/sanremo-2020-colpo-di-scena-bugo-se-ne-va-e-morgan-interrompe-l-esibizione/353632/354200\r\nAltri video da Sanremo 2020\r\nTutti\r\nin caricamento...\r\n8 febbraio 2020Sanremo 2… [+934 chars]'
  },
  {
    source: {
      id: 'cbc-news',
      name: 'CBC News'
    },
    author: 'CBC News',
    title:
      "Spread of coronavirus to Africa would be 'disastrous,' union leader says | CBC News",
    description:
      'The new strain of coronavirus that has spread across China has yet to be confirmed in Africa, but some health workers on the ground warn they are not ready to handle an outbreak.',
    url: 'http://www.cbc.ca/news/world/coronavirus-fears-in-africa-1.5457133',
    urlToImage:
      'https://i.cbc.ca/1.5457137.1581175428!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1198063146.jpg',
    publishedAt: '2020-02-08T18:53:25.6015017Z',
    content:
      'At a Chinese-run hospital in Zambia, some employees watched as people who recently returned from China showed up with coughs, but were not placed in isolation. A doctor tending to those patients has stopped coming to work, and health workers have been ordered… [+8492 chars]'
  },
  {
    source: {
      id: 'buzzfeed',
      name: 'Buzzfeed'
    },
    author: 'Audrey Engvalson',
    title:
      'The More Random Knowledge You Have, The Easier This Quiz Will Be For You',
    description: 'Is your intellect superior enough?',
    url:
      'https://www.buzzfeed.com/audreyworboys/genius-nerd-random-knowledge-quiz',
    urlToImage:
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/4/18/enhanced/1f469ff06ece/original-564-1580840874-2.jpg?crop=1246:652;1,23',
    publishedAt: '2020-02-08T18:53:14.6950424Z',
    content:
      "George Washington and Abraham Lincoln both had birthdays in this month, the same month President's Day is in the U.S. every year."
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters'
    },
    author: 'David Brunnstrom',
    title: "'OUT': Trump says he was right to remove 'insubordinate' NSC aide",
    description:
      'U.S. President Donald Trump on Saturday defended the ouster of impeachment witness Lieutenant Colonel Alexander Vindman from the White House National Security Council, calling him "insubordinate" and saying he had incorrectly reported the contents of his "per…',
    url:
      'http://feeds.reuters.com/~r/reuters/topNews/~3/HCfSCQEr5YY/out-trump-says-he-was-right-to-remove-insubordinate-nsc-aide-idUSKBN2020KL',
    urlToImage:
      'https://s1.reutersmedia.net/resources/r/?m=02&d=20200208&t=2&i=1487628617&w=1200&r=LYNXMPEG170I0',
    publishedAt: '2020-02-08T18:53:14Z',
    content:
      'WASHINGTON (Reuters) - U.S. President Donald Trump on Saturday defended the ouster of impeachment witness Lieutenant Colonel Alexander Vindman from the White House National Security Council, calling him “insubordinate” and saying he had incorrectly reported t… [+2417 chars]'
  },
  {
    source: {
      id: 'la-repubblica',
      name: 'La Repubblica'
    },
    author: 'La Repubblica',
    title:
      "Sanremo 2020, Morgan su Bugo: 'Mi si sento vilipeso, Bugo è un dilettante e il suo management è fatto di farabutti'",
    description:
      "'Nella canzone non ho fatto nulla di conseguenza ho chiesto a Bugo il permesso, ed è paradossale che io chieda il permesso a qualcuno di fare una...",
    url:
      'https://video.repubblica.it/dossier/sanremo-2020/sanremo-2020-morgan-su-bugo-mi-si-sento-vilipeso-bugo-e-un-dilettante-e-il-suo-management-e-fatto-di-farabutti/353675/354243',
    urlToImage:
      'https://www.repstatic.it/video/photo/2020/02/08/688767/688767-thumb-full-720-morgan.jpg',
    publishedAt: '2020-02-08T18:53:10.6011164Z',
    content:
      'Lo speciale\r\nSanremo 2020 \r\n(115 video)\r\nhttps://video.repubblica.it/dossier/sanremo-2020/sanremo-2020-morgan-su-bugo-mi-si-sento-vilipeso-bugo-e-un-dilettante-e-il-suo-management-e-fatto-di-farabutti/353675/354243\r\nAltri video da Sanremo 2020\r\nTutti\r\nin cari… [+1285 chars]'
  },
  {
    source: {
      id: 'ign',
      name: 'IGN'
    },
    author: null,
    title: 'Fate/Grand Order Gameplay : The Game 32 Million People Play - IGN',
    description:
      'Fate/Grand Order is a phenomenon with billions in revenue and hundreds of millions in downloads.   We take a look at this action packed turned based tactical RPG game.',
    url:
      'https://www.ign.com/videos/fategrand-order-gameplay-the-game-32-million-people-play',
    urlToImage:
      'https://assets1.ignimgs.com/thumbs/userUploaded/2020/2/7/36190303fategrandorder-1581121084158.jpg?width=1280',
    publishedAt: '2020-02-08T18:53:09.6572115Z',
    content: 'How was your video watching experience?'
  },
  {
    source: {
      id: 'cbc-news',
      name: 'CBC News'
    },
    author: 'CBC News',
    title:
      'Via Rail cancels train service between Montreal, Ottawa and Toronto as protests continue | CBC News',
    description:
      'Train service will again be delayed as protestors near Belleville, Ont., block the tracks.',
    url: 'http://www.cbc.ca/news/canada/ottawa/protests-continue-1.5457149',
    urlToImage:
      'https://i.cbc.ca/1.5455437.1581049041!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/courtesy-oyohserase-maracle.jpg',
    publishedAt: '2020-02-08T18:53:09.3018694Z',
    content:
      "Via Rail has cancelled all trains running between Toronto and Ottawa Saturday, as well as trains between Toronto and Montreal, following the third day of protests near Belleville, Ont.\r\nMembers of the Tyendinaga Mohawk territory say they'll stop train traffic… [+1685 chars]"
  },
  {
    source: {
      id: 'cbc-news',
      name: 'CBC News'
    },
    author: 'CBC News',
    title:
      'Soldier kills at least 20, holes up in mall in Thailand shooting spree | CBC News',
    description:
      'A soldier who holed up in a popular shopping mall in northeastern Thailand shot multiple people on Saturday, killing at least 20 and injuring 31 others, officials said.',
    url: 'http://www.cbc.ca/news/world/thailand-mall-shooting-1.5457086',
    urlToImage:
      'https://i.cbc.ca/1.5457199.1581186042!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/thailand-shooting.JPG',
    publishedAt: '2020-02-08T18:53:06.8275006Z',
    content:
      'A soldier who holed up in a popular shopping mall in northeastern Thailand shot multiple people on Saturday, killing at least 20 and injuring 31 others, officials said.\r\nPolice said they have secured the mall, and Public Health Minister Anutin Charnvirakul sa… [+4789 chars]'
  },
  {
    source: {
      id: 'la-repubblica',
      name: 'La Repubblica'
    },
    author: 'La Repubblica',
    title:
      "Sanremo 2020, Bugo su Morgan: 'Canzone e testo sono miei. Insulti irripetibili prima di salire sul palco'",
    description:
      "Dure le polemiche che seguono l'esclusione dal festival di Sanremo di Bugo e Morgan (avvenuta per lâ��abbandono di Bugo del palco venerdì sera...",
    url:
      'https://video.repubblica.it/dossier/sanremo-2020/sanremo-2020-bugo-su-morgan-canzone-e-testo-sono-miei-insulti-irripetibili-prima-di-salire-sul-palco/353674/354242',
    urlToImage:
      'https://www.repstatic.it/video/photo/2020/02/08/688766/688766-thumb-full-720-sanremo2020_8febbraio_conf_stamp.jpg',
    publishedAt: '2020-02-08T18:53:04.5553176Z',
    content:
      'Lo speciale\r\nSanremo 2020 \r\n(115 video)\r\nhttps://video.repubblica.it/dossier/sanremo-2020/sanremo-2020-bugo-su-morgan-canzone-e-testo-sono-miei-insulti-irripetibili-prima-di-salire-sul-palco/353674/354242\r\nAltri video da Sanremo 2020\r\nTutti\r\nin caricamento...… [+1251 chars]'
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'CBS News',
    title: 'Whom does Joaquin Phoenix credit for his performance in "Joker?"',
    description:
      'In an unseen portion of his 60 Minutes interview Joaquin Phoenix tells Anderson Cooper who deserves the credit for his award-winning performance in "Joker."',
    url:
      'https://www.cbsnews.com/video/oscars-2020-whom-does-joaquin-phoenix-credit-for-his-performance-in-joker-60-minutes-2020-02-07/',
    urlToImage:
      'https://cbsnews2.cbsistatic.com/hub/i/r/2020/02/08/36a5543d-b223-4105-918e-0319d33af5e0/thumbnail/1200x630/9595eff257cb4eed4b3519e345821b8c/ot-joaquinphoenixoscars-2023859-640x360.jpg',
    publishedAt: '2020-02-08T18:53:02+00:00',
    content:
      'In an unseen portion of his 60 Minutes interview Joaquin Phoenix tells Anderson Cooper who deserves the credit for his award-winning performance in "Joker."'
  },
  {
    source: {
      id: 'ansa',
      name: 'ANSA.it'
    },
    author: 'ANSA.it',
    title: 'Foa a Sanremo, "Bene Amadeus, lo volle De Santis" - Ultima Ora',
    description:
      'Promozione a pieni voti per Amadeus, plauso a tutti i dipendenti Rai coinvolti nel progetto,\r\nsoddisfazione per gli ascolti eccellenti, ma anche una sottolineatura: "A volere il conduttore e\r\ndirettore artistico è stata Teresa De Santis", ex direttore di Rai1…',
    url:
      'http://www.ansa.it/sito/notizie/topnews/2020/02/08/foa-a-sanremo-bene-amadeus-lo-volle-de-santis_f1d334dc-ba91-4ea8-be2a-64610597c1f7.html',
    urlToImage:
      'http://www.ansa.it/webimages/img_700/2020/2/8/c0df5b973a00eedf16709b81105873f1.jpg',
    publishedAt: '2020-02-08T18:53:00Z',
    content:
      '(ANSA) - SANREMO, 08 FEB - Promozione a pieni voti per\r\nAmadeus, plauso a tutti i dipendenti Rai coinvolti nel progetto,\r\nsoddisfazione per gli ascolti eccellenti, ma anche una\r\nsottolineatura: "A volere il conduttore e direttore artistico è\r\nstata Teresa De … [+1523 chars]'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      'Coupe du monde : Alexandra Louis-Marie, deuxième à Turin - Escrime - CM (F)',
    description:
      "L'épéiste levalloisienne Alexandra Louis-Marie a terminé à la deuxième place de la manche italienne de la Coupe du monde de la spécialité, samedi à Turin.",
    url:
      'https://www.lequipe.fr/Escrime/Actualites/Coupe-du-monde-alexandra-louis-marie-deuxieme-a-turin/1107769',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/minobe-kazuyasu-jap-grumier-gauthier-fra-p-lahalle-l-equipe/1500000001300508/0:0,1332:1332-640-640-75/35a90.jpg',
    publishedAt: '2020-02-08T18:53:00+00:00',
    content:
      "En finale de la manche turinoise de la Coupe du monde, la Française Alexandra Louis-Marie, 48e épéiste mondiale, a cédé ce samedi face à l'Estonienne Katrina Lehis (19e mondiale), sur le score de 8 à 15."
  },
  {
    source: {
      id: 'la-gaceta',
      name: 'La Gaceta'
    },
    author: 'La Gaceta',
    title: 'Zielinski: “estamos preparados y motivados para jugar contra Boca”',
    description:
      'El DT de Atlético Tucumán habló en la previa del partido en la Bombonera.',
    url:
      'https://www.lagaceta.com.ar/nota/834239/deportes/zielinski-estamos-preparados-motivados-para-jugar-contra-boca.html',
    urlToImage:
      'https://img.lagaceta.com.ar/fotos/notas/2020/02/08/ricardo-zielinski-dt-atletico-tucuman-834239-155026.jpg',
    publishedAt: '2020-02-08T18:52:43.0887285Z',
    content:
      '“Jugar en La Paz nos ha generado muchos inconvenientes por la altura, no es un partido normal. Pero siempre es una motivación jugar contra Boca. Me encanta jugar contra Boca y contra cualquier equipo grande. A los jugadores también, así que estamos preparados… [+784 chars]'
  },
  {
    source: {
      id: 'les-echos',
      name: 'Les Echos'
    },
    author: 'Ninon Renaud',
    title: 'Angela Merkel sauve son gouvernement, pas son parti',
    description:
      "La chancelière a satisfait samedi les exigences des sociaux-démocrates qui menaçaient de quitter la coalition après l'élection en Thuringe mercredi d'un ministre président avec le soutien des voix de la CDU et de l'extrême droite. L'épisode fragilise néanmoin…",
    url:
      'https://www.lesechos.fr/monde/europe/angela-merkel-sauve-son-gouvernement-pas-son-parti-1170327',
    urlToImage:
      'https://media.lesechos.com/api/v1/images/view/5e3f03d5d286c244820a31d3/1280x720/0602734109035-web-tete.jpg',
    publishedAt: '2020-02-08T18:52:38Z',
    content:
      "De nouveau menacé de tomber, le gouvernement d'Angela Merkel a finalement survécu au \r\n scandale provoqué par l'élection d'un nouveau premier ministre en Thuringe\r\navec les voix des démocrates-chrétiens (CDU) et de l'extrême droite réunies (AfD).\r\nFace à la f… [+3443 chars]"
  },
  {
    source: {
      id: 'der-tagesspiegel',
      name: 'Der Tagesspiegel'
    },
    author: 'Sebastian Leber',
    title: 'Ausgerechnet Bietigheim-Bissingen?',
    description:
      'Die Rapper RIN, Shindy und Bausa stammen alle aus einem Nest in der schwäbischen Provinz. Das muss doch einen Grund haben.',
    url:
      'https://www.tagesspiegel.de/kultur/deutschlands-neue-rap-hochburg-ausgerechnet-bietigheim-bissingen/25507270.html',
    urlToImage:
      'https://www.tagesspiegel.de/images/karte/25508146/5-format530.jpg',
    publishedAt: '2020-02-08T18:51:09+00:00',
    content:
      'Da vorn links an der Biegung, das könnte sie sein. Die Kreissparkasse, über die Shindy in Bietigheim Sunshine gerappt hat: Glotzt nicht so parke zweite Reihe vor der Kreissparkasse. Gerade parkt niemand zweite Reihe, es sind genug Plätze frei. Aber ja: Es kön… [+9485 chars]'
  },
  {
    source: {
      id: 'der-tagesspiegel',
      name: 'Der Tagesspiegel'
    },
    author: null,
    title: 'Schluss mit dem kollektiven Exhibitionismus!',
    description:
      'Alle wollen in Berlin roh, sexy und extravagant sein. Instagram-Egos beherrschen die Hauptstadt. Wie wär es denn zur Abwechslung mit ein bisschen Diskretion?',
    url:
      'https://www.tagesspiegel.de/kultur/berliner-kulturszene-schluss-mit-dem-kollektiven-exhibitionismus/25525700.html',
    urlToImage:
      'https://www.tagesspiegel.de/images/heprodimagesfotos86120200209eidinger_3956_1_20200208111754639-jpg/25525696/2-format530.jpg',
    publishedAt: '2020-02-08T18:49:55+00:00',
    content:
      'Der Hype um Lars Eidinger scheint grenzenlos zu sein. Weil er sich an seinem Ego nicht nur im Theater und auf der Social-Media-Bühne sowie hinterm DJ-Pult, sondern jüngst auch vor Obdachlosen mit Tasche eigener Marke im Aldi-Design ergötzt. Weil er gern Detai… [+8027 chars]'
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit'
    },
    author: 'Eva Weber-Guskar',
    title: 'Digitalisierung: Auch Nerds brauchen Ethik!',
    description:
      'Digitalisierung ist mehr als Programmieren. Deshalb müssen Philosophie und Informatik gemeinsam gelehrt werden.',
    url:
      'https://www.zeit.de/2020/07/digitalisierung-informatik-philosophie-ethik',
    urlToImage:
      'https://img.zeit.de/campus/2020-02/digitalisierung-informatik-philosophie-ethik-bild/wide__1300x731',
    publishedAt: '2020-02-08T18:49:29+00:00',
    content:
      'Digitalisierung ist mehr als Programmieren. Deshalb müssen Philosophie und Informatik gemeinsam gelehrt werden.\r\n8. Februar 2020, 19:49 UhrEditiert am 8. Februar 2020, 19:49 UhrDIE ZEIT Nr. 7/2020\r\nIn Deutschland kann man an zahlreichen Universitäten Informat… [+4119 chars]'
  },
  {
    source: {
      id: 'cnn-es',
      name: 'CNN Spanish'
    },
    author: 'CNN',
    title: 'China acaba de construir un hospital en 10 días. Así lo logró',
    description:
      'Las autoridades esperan que los hospitales puedan ayudar a aliviar la presión sobre el sistema de salud sobrecargado de Wuhan, mientras controlan la propagación de un virus que ha matado a más de 7…',
    url:
      'https://cnnespanol.cnn.com/2020/02/08/china-acaba-de-construir-un-hospital-en-10-dias-asi-lo-logro/',
    urlToImage:
      'https://cnnespanol2.files.wordpress.com/2020/02/200205201347-huoshenshan-hospital-0202-super-tease.jpg?quality=100&strip=info',
    publishedAt: '2020-02-08T18:49:20Z',
    content:
      'China construyó en 10 días un hospital en Wuhan 2:13\r\n(CNN) — Mientras China se apresura a contener el coronavirus de Wuhan, se ha desarrollado una hazaña de diseño e ingeniería en el epicentro del brote: un hospital construido en solo 10 días.\r\nEl hospital H… [+5220 chars]'
  },
  {
    source: {
      id: 'der-tagesspiegel',
      name: 'Der Tagesspiegel'
    },
    author: 'David Joram',
    title: 'Der 1. FC Union feiert einen wichtigen Auswärtssieg',
    description:
      'Lange tut sich wenig im Bremer Weserstadion. Doch nach der Pause dreht Union auf und holt dank Marius Bülter drei wertvolle Auswärtspunkte.',
    url:
      'https://www.tagesspiegel.de/sport/2-0-bei-werder-bremen-der-1-fc-union-feiert-einen-wichtigen-auswaertssieg/25526046.html',
    urlToImage:
      'https://www.tagesspiegel.de/images/526837791/25526056/2-format530.jpg',
    publishedAt: '2020-02-08T18:49:07+00:00',
    content:
      'Auch im Bremer Weserstadion fanden die politischen Ereignisse der vergangenen Tage ein Echo. FDP, CDU + AfD? Wohl doch nicht in Geschichte aufgepasst, plakatierten Werder-Fans beim Heimspiel gegen den 1. FC Union.\r\nFür politische Botschaften war beim 2:0 (0:0… [+3723 chars]'
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'David Morgan',
    title:
      "Check out clips from movies nominated for this year's Academy Award and interviews with the filmmakers",
    description:
      "Check out clips from movies nominated for this year's Academy Award and interviews with the filmmakers",
    url:
      'https://www.cbsnews.com/news/oscars-2020-watch-the-best-picture-nominees/',
    urlToImage:
      'https://cbsnews2.cbsistatic.com/hub/i/r/2020/02/08/e502fa15-2048-4c8c-9f4d-4196acdcc908/thumbnail/1200x630/749425b471c72ab204dfe8264cddd01c/montage-best-picture-nominees-posters-promo.jpg',
    publishedAt: '2020-02-08T18:45:06+00:00',
    content:
      "Check out clips and filmmaker interviews below for the nine nominees for this year's Academy Award for Best Picture. \r\nWinners of this year's Oscars will be announced on Sunday, February 9, at the Dolby Theatre at Hollywood &amp; Highland Center in Hollywood.… [+16841 chars]"
  },
  {
    source: {
      id: 'talksport',
      name: 'TalkSport'
    },
    author: 'Joe Moore',
    title:
      'England beat Scotland in rain and wind-swept Six Nations battle at Murrayfield to win back Calcutta Cup',
    description: '',
    url:
      'https://talksport.com/sport/rugby-union/666901/england-scotland-rain-wind-six-nations-calcutta-cup/',
    urlToImage:
      'https://talksport.com/wp-content/uploads/sites/5/2020/02/NINTCHDBPICT000561257438.jpg?strip=all&quality=100&w=1200&h=800&crop=1',
    publishedAt: '2020-02-08T18:40:53Z',
    content:
      'England scored a precious second-half try to claim a tense 13-6 win over Scotland at Murrayfield to win back the Calcutta Cup for the first time in three years.\r\nBoth teams struggled with the absolutely dreadful conditions in Edinburgh as Storm Ciara set in.\r… [+1109 chars]'
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit'
    },
    author: 'Katharina Heflik, dpa, Reuters, AFP',
    title: 'Coronavirus: Rund 20 Deutsche kehren aus Wuhan zurück',
    description:
      'Weitere 20 Personen werden aus dem stark vom Coronavirus betroffenen Wuhan nach Deutschland gebracht. In Berlin sollen sie zunächst untersucht und isoliert werden.',
    url:
      'https://www.zeit.de/wissen/gesundheit/2020-02/coronavirus-ausbreitung-deutsche-rueckkehrer-wuhan-china',
    urlToImage:
      'https://img.zeit.de/wissen/gesundheit/2020-02/coronavirus-ausbreitung-deutsche-rueckkehrer-wuhan-china-bild/wide__1300x731',
    publishedAt: '2020-02-08T18:40:39+00:00',
    content:
      'Rund 20 weitere Deutsche sollen am Sonntag in einer Sondermaschine aus dem chinesischen Wuhan, das schwer vom Coronavirus betroffen ist, nach Deutschland zurückkehren. Nach Angaben der Berliner Gesundheitssenatorin Dilek Kalayci sollen sie auf dem militärisch… [+5164 chars]'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      'Paris Grand Slam : Sixième victoire pour Clarisse Agbegnenou - Judo - Paris Grand Slam',
    description:
      "Face à la Japonaise Nami Nabekura, la dernière à l'avoir battue, Clarisse Agbegnenou a remporté pour la sixième fois de sa carrière le Paris Grand Slam (-63 kg).",
    url:
      'https://www.lequipe.fr/Judo/Actualites/Paris-grand-slam-sixieme-victoire-pour-clarisse-agbegnenou/1107768',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/clarisse-agbegnenou-s-est-imposee-pour-la-sixieme-fois-lors-du-paris-grand-slam-s-mantey-l-equipe/1500000001300502/0:0,1995:1330-640-427-75/62152.jpg',
    publishedAt: '2020-02-08T18:40:00+00:00',
    content:
      "Grâce à un ippon à 13'' de la fin du combat, Clarisse Agbegnenou a remporté ce samedi pour la sixième fois le Paris Grand Slam (- 63 kg). Face à la Japonaise Nami Nabekura, la dernière à l'avoir battue - en finale du Masters de Qingdao en décembre dernier - a… [+192 chars]"
  },
  {
    source: {
      id: 'msnbc',
      name: 'MSNBC'
    },
    author: 'MSNBC',
    title:
      "Jennifer Lopez and Shakira are sexy moms. And there's nothing shameful about it.",
    description:
      "Jennifer Lopez and Shakira are sexy moms. And there's nothing shameful about it.",
    url:
      'https://www.nbcnews.com/think/opinion/jennifer-lopez-shakira-are-sexy-moms-there-s-nothing-shameful-ncna1132776',
    urlToImage:
      'https://media4.s-nbcnews.com/j/newscms/2020_06/3218081/200205-jennifer-lopez-ew-604p_5f2d666b014e3d7722299919f2b15447.nbcnews-fp-1200-630.jpg',
    publishedAt: '2020-02-08T18:40:00Z',
    content:
      'In 2020, moms are doing it all (or as much as possible). More of us are working outside the home, there are more moms in Congress than at any point in our nations history, moms are increasingly becoming the breadwinners of their families, and were still handl… [+5634 chars]'
  },
  {
    source: {
      id: 'handelsblatt',
      name: 'Handelsblatt'
    },
    author: 'Christian Schnell',
    title: 'Flut von Zahlen könnte dem Dax neue Impulse verleihen',
    description:
      'Zu Beginn der neuen Börsenwoche kommen wichtige Konjunktur- und Unternehmenszahlen. Vom Coronavirus erwarten Experten vorerst keine großen Auswirkungen.',
    url:
      'https://www.handelsblatt.com/finanzen/maerkte/marktberichte/dax-ausblick-flut-von-zahlen-koennte-dem-dax-neue-impulse-verleihen/25523248.html',
    urlToImage:
      'https://www.handelsblatt.com/images/handelssaal-der-frankfurter-boerse/25524498/2-format2003.jpg',
    publishedAt: '2020-02-08T18:39:17+00:00',
    content:
      'Frankfurt Verschnaufpause auf dem Weg nach oben oder doch eher der Respekt vor den vielen nach wie vor ungelösten Problemen? Die Verluste vom Freitag nach zuvor vier Tagen in der Gewinnzone ließen zum Wochenausklang unterschiedliche Möglichkeiten der Interpre… [+3763 chars]'
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'CBS News',
    title: 'Thai soldier kills at least 20 in mass shooting',
    description:
      'A soldier shot multiple people in northeastern Thailand on Saturday, killing at least 20 people while live-streaming part of the rampage, and was holed up in a popular shopping mall, authorities said. It was unclear how many people were wounded.',
    url:
      'https://www.cbsnews.com/video/thai-soldier-kills-at-least-17-in-mass-shooting/',
    urlToImage:
      'https://cbsnews1.cbsistatic.com/hub/i/r/2020/02/08/5628a0e9-2d93-4bbf-bcb9-dfd85cf90c83/thumbnail/1200x630/109c7b59d6b5b9cfeed0b487b19124f4/cbsn-fusion-thai-soldier-kills-at-least-17-in-mass-shooting-thumbnail-443835-640x360.jpg',
    publishedAt: '2020-02-08T18:39:02+00:00',
    content:
      'Watch CBSN Live\r\nCopyright © 2020 CBS Interactive Inc. All rights reserved.'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      "Compositions de Nice - Nîmes : Myziane Maolida aligné d'entrée - Foot - L1 - Nice",
    description:
      "L'ancien Lyonnais débutera sur le côté gauche de l'attaque azuréenne au côté de Dolberg et Boudaoui ce samedi soir (20 heures).",
    url:
      'https://www.lequipe.fr/Football/Actualites/Compositions-de-nice-nimes-myziane-maolida-aligne-d-entree/1107765',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/maolida-debutera-la-rencontre-a-mounic-l-equipe/1500000001300496/0:0,1998:1332-640-427-75/64b31.jpg',
    publishedAt: '2020-02-08T18:39:00+00:00',
    content:
      "Patrick Vieira a choisi d'aligner Maolida dans sa ligne d'attaque puisque l'ancien Lyonnais débutera sur l'aile gauche, tandis que Boudaoui restera à droite et Dolberg en pointe. Au milieu, en l'absence de Cyprien, c'est de nouveau Khephren Thuram qui débuter… [+554 chars]"
  },
  {
    source: {
      id: 'hacker-news',
      name: 'Hacker News'
    },
    author: null,
    title: 'Dangerous Domain Corp.com Goes Up for Sale',
    description: null,
    url:
      'https://krebsonsecurity.com/2020/02/dangerous-domain-corp-com-goes-up-for-sale/',
    urlToImage: null,
    publishedAt: '2020-02-08T18:38:17.1540273Z',
    content:
      'As an early domain name investor, Mike O’Connor had by 1994 snatched up several choice online destinations, including bar.com, cafes.com, grill.com, place.com, pub.com and television.com. Some he sold over the years, but for the past 26 years O’Connor refused… [+11208 chars]'
  },
  {
    source: {
      id: 'espn-cric-info',
      name: 'ESPN Cric Info'
    },
    author: null,
    title:
      'Match Preview - Bangladesh Under-19s vs India Under-19s, Under-19s World Cup 2020, Final | ESPNcricinfo.com',
    description:
      'Read and watch the preview for Under-19s World Cup 2020 Final, Bangladesh Under-19s vs India Under-19s only on ESPNcricinfo.com',
    url:
      'https://www.espncricinfo.com/series/8368/preview/1204722/bangladesh-19s-vs-india-19s-final-19s-world-cup',
    urlToImage: 'https://a.espncdn.com/i/cricket/cricinfo/1215854_900x506.jpg',
    publishedAt: '2020-02-08T18:38:12.2713444Z',
    content:
      "Big picture\r\nThis is about as big as it gets for the Under-19 cricketers from Bangladesh and India. For India, it's an opportunity to defend their title and claim a record fifth World Cup crown [Australia are next with three]. For Bangladesh, it's a chance to… [+4085 chars]"
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit'
    },
    author: null,
    title: 'SPD: "Die Koalition hat zur Stabilität der Demokratie beigetragen"',
    description:
      'Nachdem Union und SPD es gefordert hatten, trat Thomas Kemmerich vom Amt der Thüringer Ministerpräsidenten zurück. Das war "richtig" und "notwendig", so SPD-Chefin Esken.',
    url:
      'https://www.zeit.de/video/2020-02/6130781662001/spd-die-koalition-hat-zur-stabilitaet-der-demokratie-beigetragen',
    urlToImage:
      'https://img.zeit.de/video/2020-02/6130781662001/imagegroup/wide__1300x731',
    publishedAt: '2020-02-08T18:37:55+00:00',
    content:
      'Nachdem Union und SPD es gefordert hatten, trat Thomas Kemmerich vom Amt der Thüringer Ministerpräsidenten zurück. Das war "richtig" und "notwendig", so SPD-Chefin Esken.'
  },
  {
    source: {
      id: 'usa-today',
      name: 'USA Today'
    },
    author: null,
    title:
      "Jehovah's Witnesses reportedly under investigation by Pennsylvania attorney general",
    description:
      "The Pennsylvania attorney general's office is reportedly investigating if the Jehovah's Witnesses failed to report child sexual abuse to authorities.",
    url:
      'https://www.usatoday.com/story/news/investigations/2020/02/08/jehovahs-witnesses-under-investigation-pennsylvania-attorney-generals-office/2425260001/?utm_source=google&utm_medium=amp&utm_campaign=speakable',
    urlToImage:
      'https://www.gannett-cdn.com/presto/2020/02/08/USAT/340584ee-fd1d-4536-b2f6-c1c37b17c3ce-Unknown-4.jpg?crop=1375,773,x0,y0&width=1600&height=800&fit=bounds',
    publishedAt: '2020-02-08T18:37:25+00:00',
    content:
      "The Pennsylvania attorney general's office reportedly is investigating whether the Jehovah's Witnesses repeatedly failed to report child sexual abuse allegations to authorities in what is believed to be the first wide-scale examination by a U.S. law enforceme… [+7242 chars]"
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title: 'Charlton fell far from their standards at Stoke, says Lee Bowyer',
    description: null,
    url:
      'http://www.fourfourtwo.com/news/charlton-fell-far-their-standards-stoke-says-lee-bowyer',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.49321050.jpg',
    publishedAt: '2020-02-08T18:36:01Z',
    content:
      'Disappointed Charlton boss Lee Bowyer criticised the lacklustre display of his players during his sides 3-1 defeat at Stoke.\r\nThe Addicks went in level at the break but were undone by two second-half goals as Stoke made it six home games unbeaten.\r\nGoals from… [+2225 chars]'
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'CBS News',
    title:
      'Samuel Reynolds, Arlington High School student, shot and killed for defending classmate from bully, police say',
    description:
      'Samuel Reynolds was shot and killed at the apartment complex where he lived for standing up to a bully at school days earlier',
    url:
      'https://www.cbsnews.com/news/samuel-reynolds-arlington-high-school-student-shot-killed-for-defending-classmate-from-bully-police/',
    urlToImage:
      'https://cbsnews2.cbsistatic.com/hub/i/r/2020/02/08/e85e9e9a-cac4-44a5-89f9-8b20a47551f4/thumbnail/1200x630g2/2d6364ecd48495a6c5c9e49909782743/screen-shot-2020-02-07-at-3-20-13-pm.png',
    publishedAt: '2020-02-08T18:35:40+00:00',
    content:
      'ARLINGTON, Texas — Police said Friday that a 16-year-old Arlington High School student  was shot and killed Thursday at the apartment complex where he lived for standing up to a bully at school days earlier. CBS DFW reports one of those teenage suspects is in… [+2818 chars]'
  },
  {
    source: {
      id: 'liberation',
      name: 'Libération'
    },
    author: 'Cécile Bourgneuf',
    title: "«J'ai peur que le Coronavirus m'attrape»",
    description:
      'Ils s’appellent Fatoumata, Janna, Pierre ou Ethan. Ils sont en CM2. Avec l’équipe du «P’tit Libé», qui explique l’actu aux 8-13 ans, ils vont réaliser un «Libé» des enfants à l’occasion de la semaine de la presse et des médias dans l’école, en mars. Une colla…',
    url:
      'http://www.liberation.fr/france/2020/02/08/j-ai-peur-que-le-coronavirus-m-attrape_1777502',
    urlToImage:
      'https://medias.liberation.fr/photo/1292591-prodlibe-2020-0085.jpg?modified_at=1581085841&amp;picto=fb&amp;ratio_x=191&amp;ratio_y=100&amp;width=600',
    publishedAt: '2020-02-08T18:33:42Z',
    content:
      '«De quoi avez-vous entendu parler dans lactualité ?» Cest notre petit rituel. A chaque intervention dans la classe, une fois par semaine depuis janvier, on démarre par cette question pour savoir quelles infos retiennent lattention des enfants. Ce vendredi-là,… [+3827 chars]'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      'Compositions de Dijon-Nantes : Benzia titulaire, Abdoulaye Touré remplaçant - Foot - L1 - Dijon',
    description:
      'Yassine Benzia va connaître sa première titularisation avec Dijon pour la réception de Nantes, ce samedi (20 heures). Côté canari, Abdoulaye Touré, touché contre le PSG mardi, est remplaçant.',
    url:
      'https://www.lequipe.fr/Football/Actualites/Compositions-de-dijon-nantes-benzia-titulaire-abdoulaye-toure-remplacant/1107761',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/yassine-benzia-est-titulaire-avec-dijon-p-lahalle-l-equipe/1500000001300492/63:190,1424:1097-640-427-75/81219.jpg',
    publishedAt: '2020-02-08T18:33:00+00:00',
    content:
      "Stéphane Jobard, l'entraîneur de Dijon, propose un onze inédit pour la réception de Nantes, dans le cadre de la 24e journée de Ligue 1. Recruté le 30 janvier et entré en jeu mercredi à Nîmes (0-2), Yassine Benzia est aligné d'entrée pour la première fois avec… [+594 chars]"
  },
  {
    source: {
      id: 'the-hill',
      name: 'The Hill'
    },
    author: 'Tal Axelrod',
    title: 'Biden rips into Buttigieg over experience in new ad | TheHill',
    description:
      'Former Vice President Joe Biden on Saturday tore into Democratic presidential rival Pete But...',
    url:
      'http://thehill.com/homenews/campaign/482175-biden-rips-into-buttigieg-over-experience-in-new-ad',
    urlToImage:
      'https://thehill.com/sites/default/files/buttigiegpete_bidenjoe2_020820getty.jpg',
    publishedAt: '2020-02-08T18:32:28Z',
    content:
      'Former Vice President Joe BidenJoe BidenFive takeaways: Fear of Trump hangs over Democratic debateButtigieg, Sanders aim to build momentum from New Hampshire debatePoll: New Hampshire Democrats would prefer an extinction-causing meteor over Trump reelectionMO… [+3896 chars]'
  },
  {
    source: {
      id: 'bbc-sport',
      name: 'BBC Sport'
    },
    author: 'BBC Sport',
    title: 'Six Nations: Scotland 6-13 England: Visitors reclaim Calcutta Cup',
    description:
      'England win back the Calcutta Cup and keeep their Six Nations title hopes alive with a turgid victory over Scotland in awful weather conditions.',
    url: 'http://www.bbc.co.uk/sport/rugby-union/51407067',
    urlToImage:
      'https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/AF7A/production/_110822944_gettyimages-1204871927-1.jpg',
    publishedAt: '2020-02-08T18:32:24Z',
    content:
      'Ellis Genge scored the decisive try for England at Murrayfield\r\n<table><tr><th>Six Nations</th></tr>\r\n<tr><td>Scotland (0) 6</td></tr><tr><td>Pens: Hastings 2</td></tr><tr><td>England (3) 13</td></tr><tr><td>Try: Genge Con: Farrell Pens: Farrell 2</td></tr>\r\n… [+5611 chars]'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      "Tournoi des Six Nations : l'Angleterre s'impose difficilement en Écosse - Rugby - Tournoi",
    description:
      "Samedi soir à Édimbourg face à l'Écosse, qui obtient néanmoins un bonus défensif, le quinze de la Rose a décroché au forceps son premier succès (6-13) dans ce Tournoi des Six Nations. À suivre dimanche, France-Italie (16 heures) pour clore la deuxième journée.",
    url:
      'https://www.lequipe.fr/Rugby/Actualites/Tournoi-des-six-nations-l-angleterre-s-impose-difficilement-en-ecosse/1107760',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/les-ecossais-comme-ici-le-centre-huw-jones-ont-cherche-a-prendre-de-la-hauteur-face-a-l-angleterre/1500000001300491/0:0,1997:1331-640-427-75/699b0.jpg',
    publishedAt: '2020-02-08T18:32:00+00:00',
    content:
      "Il faut croire que le rugby contemporain, millimétré, sur un terrain quadrillé et calibré par des chaînes de jeu tactiques, ne s'accommode pas des conditions atmosphériques écossaises, à savoir du vent, du froid et de la pluie en février... Ce qui faisait la … [+2502 chars]"
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider'
    },
    author: 'Ellen Cranley',
    title:
      "The Trump administration went back on its promise to protect whistleblowers' safety - Business Insider",
    description:
      'President Donald Trump fired Lt. Col. Alexander Vindman in an apparent act of personal vengeance after his impeachment testimony.',
    url:
      'http://www.businessinsider.com/vindman-firing-us-government-protecting-whistleblowers-2020-2',
    urlToImage:
      'https://i.insider.com/5e3edf220ce3d1348b083b24?width=1200&format=jpeg',
    publishedAt: '2020-02-08T18:31:24Z',
    content:
      "President Donald Trump's abrupt firing of Lt. Col. Alexander Vindman appears to cross guarantees that Defense Secretary Mark Esper previously voiced, that vowed protections for whistleblowers.\r\nIn a Friday night segment, MSNBC host Rachel Maddow pointed to a … [+2920 chars]"
  },
  {
    source: {
      id: 'business-insider-uk',
      name: 'Business Insider (UK)'
    },
    author: 'Ellen Cranley',
    title:
      "The Trump administration went back on its promise to protect whistleblowers' safety - Business Insider",
    description:
      'President Donald Trump fired Lt. Col. Alexander Vindman in an apparent act of personal vengeance after his impeachment testimony.',
    url:
      'http://uk.businessinsider.com/vindman-firing-us-government-protecting-whistleblowers-2020-2',
    urlToImage:
      'https://i.insider.com/5e3edf220ce3d1348b083b24?width=1200&format=jpeg',
    publishedAt: '2020-02-08T18:31:24Z',
    content:
      "President Donald Trump's abrupt firing of Lt. Col. Alexander Vindman appears to cross guarantees that Defense Secretary Mark Esper previously voiced, that vowed protections for whistleblowers.\r\nIn a Friday night segment, MSNBC host Rachel Maddow pointed to a … [+2920 chars]"
  },
  {
    source: {
      id: 'der-tagesspiegel',
      name: 'Der Tagesspiegel'
    },
    author: 'Sven Lemkemeyer',
    title: 'Gauland empfiehlt AFD, Ramelow zu wählen',
    description:
      'Thomas Kemmerich tritt als Ministerpräsident zurück. Die AfD denkt über Strategien nach, um eine rot-rot-grüne Landesregierung zu verhindern. Der Newsblog.',
    url:
      'https://www.tagesspiegel.de/politik/polit-chaos-in-thueringen-gauland-empfiehlt-afd-ramelow-zu-waehlen/25516934.html',
    urlToImage:
      'https://www.tagesspiegel.de/images/immunitaet-von-alexander-gauland-aufgehoben/25526186/2-format530.jpg',
    publishedAt: '2020-02-08T18:31:10+00:00',
    content:
      'Die AfD denkt nach dem Rückzug des FDP-Politikers Thomas Kemmerich vom Posten des thüringischen Ministerpräsidenten über weitere Strategien zur Verhinderung einer rot-rot-grünen Landesregierung nach. Die kopflose Reaktion von CDU und FDP bringt mich zu der Em… [+13596 chars]'
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title: 'Bowen acknowledges midweek exploits took their toll on Royals',
    description: null,
    url:
      'http://www.fourfourtwo.com/news/bowen-acknowledges-midweek-exploits-took-their-toll-royals',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.49769307.jpg',
    publishedAt: '2020-02-08T18:31:01Z',
    content:
      'Manager Mark Bowen blamed Readings midweek FA Cup exploits for a tired display in the scrappy 1-1 Sky Bet Championship draw at home to mid-table rivals Hull.\r\nThe Tigers almost went ahead early on when home goalkeeper Rafael tipped a powerful Marcus Maddison … [+2632 chars]'
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title:
      'Jim Goodwin felt his St Mirren side were denied two penalties in cup draw',
    description: null,
    url:
      'http://www.fourfourtwo.com/news/jim-goodwin-felt-his-st-mirren-side-were-denied-two-penalties-cup-draw',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.49236517.jpg',
    publishedAt: '2020-02-08T18:31:01Z',
    content:
      'St Mirren manager Jim Goodwin felt his team were denied two major penalty claims in their 1-1 William Hill Scottish Cup draw with Motherwell.\r\nSaints claimed for handballs against Liam Donnelly and Peter Hartley in quick succession after Ilkay Durmus had a sh… [+2516 chars]'
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title: 'Cocu hails Rooney contribution at Derby',
    description: null,
    url: 'http://www.fourfourtwo.com/news/cocu-hails-rooney-contribution-derby',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.50127981.jpg',
    publishedAt: '2020-02-08T18:31:01Z',
    content:
      'Manager Phillip Cocu hailed the impact of Wayne Rooney on and off the field after Derby snatched their first away win since the opening day of the season by beating Swansea 3-2.\r\nMartyn Waghorn put the Rams on course for a rare road victory after eight minute… [+2479 chars]'
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title: 'Harris felt Cardiff rode their luck against Luton',
    description: null,
    url:
      'http://www.fourfourtwo.com/news/harris-felt-cardiff-rode-their-luck-against-luton',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.49941586.jpg',
    publishedAt: '2020-02-08T18:31:01Z',
    content:
      'Cardiff boss Neil Harris felt his side rode their luck to finish 1-0 winners at Luton.\r\nThe Hatters had three good chances in the opening period but could not take them, with Lee Tomlin making them pay in the 73rd minute, netting the only goal of the game wit… [+2442 chars]'
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title: 'Parker marvels at match-winner Mitrovic',
    description: null,
    url: 'http://www.fourfourtwo.com/news/parker-marvels-match-winner-mitrovic',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.49643714.jpg',
    publishedAt: '2020-02-08T18:31:01Z',
    content:
      'Manager Scott Parker highlighted the leadership qualities of Aleksandar Mitrovic after his goal gave Fulham a 1-0 win at Blackburn to heap the pressure on the top two.\r\nMitrovic became the first player this season to score 20 league goals with a smart turn an… [+2594 chars]'
  },
  {
    source: {
      id: 'four-four-two',
      name: 'FourFourTwo'
    },
    author: 'FourFourTwo',
    title: 'McInnes fumes after Aberdeen extend scoreless run to five matches',
    description: null,
    url:
      'http://www.fourfourtwo.com/news/mcinnes-fumes-after-aberdeen-extend-scoreless-run-five-matches',
    urlToImage:
      'https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/2.50012907.jpg',
    publishedAt: '2020-02-08T18:31:01Z',
    content:
      'Aberdeen boss Derek McInnes expressed his anger and frustration after his sides goalless run extended to a fifth straight game in all competitions and admits the fans are right to boo the goal-shy side.\r\nThe Dons have scored just once since the winter break, … [+1676 chars]'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      'Montpellier : Vasek Pospisil élimine David Goffin et rejoint Gaël Monfils en finale - Tennis - ATP - Montpellier',
    description:
      "Très solide face à David Goffin (6-3, 1-6, 7-5), Vasek Pospisil a éliminé samedi David Goffin et s'est qualifié pour la finale de l'Open Sud de France où il sera opposé à Gaël Monfils.",
    url:
      'https://www.lequipe.fr/Tennis/Actualites/Montpellier-vasek-pospisil-elimine-david-goffin-et-rejoint-gael-monfils-en-finale/1107758',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/vasek-pospisil-disputera-la-finale-face-a-gael-monfils-ce-dimanche-o-j-barroso-presse-sports/1500000001300490/0:0,1998:1332-640-427-75/1756c.jpg',
    publishedAt: '2020-02-08T18:30:00+00:00',
    content:
      "132e au début de cet Open Sud de France, Vasek Pospisil vaut mieux que ce classement. Il a d'ailleurs pointé au 25e rang mondial en 2014. C'est bien aux alentours de ce niveau qu'il a évolué face à David Goffin pour s'offrir sa première finale sur le circuit … [+2108 chars]"
  },
  {
    source: {
      id: 'google-news-ar',
      name: 'Google News (Argentina)'
    },
    author: 'Clarín.com',
    title: 'Tras un show en Catamarca, volcó una camioneta de "Damas Gratis"',
    description:
      'El accidente se produjo sobre la ruta 38, en la provincia de Tucumán, adonde la banda tenía previsto actuar este fin de semana.',
    url:
      'https://www.clarin.com/sociedad/show-catamarca-volco-camioneta-damas-gratis-_0_kur_lDTv.html',
    urlToImage:
      'https://images.clarin.com/2020/02/08/volco-la-camioneta-de-damas___BSzBzwjv_1200x630__1.jpg',
    publishedAt: '2020-02-08T18:29:21+00:00',
    content:
      'Una camioneta en la que viajaban cinco integrantes y colaboradores del grupo de cumbia Damas Gratis volcó este sábado cerca de las nueve de la mañana sobre la ruta 38. Tres de los ocupantes debieron ser trasladados a un hospital cercano. \r\nEl accidente ocurri… [+1524 chars]'
  },
  {
    source: {
      id: 'lequipe',
      name: "L'equipe"
    },
    author: "L'EQUIPE",
    title:
      "Compositions de Rennes - Brest : Eduardo Camavinga n'est pas sur la feuille de match - Foot - L1 - Rennes",
    description:
      'Ménagé, Eduardo Camavinga ne jouera pas avec Rennes contre Brest, ce samedi (20 heures) lors de la 24e journée de Ligue 1.',
    url:
      'https://www.lequipe.fr/Football/Actualites/Compositions-de-rennes-brest-eduardo-camavinga-n-est-pas-sur-la-feuille-de-match/1107754',
    urlToImage:
      'https://medias.lequipe.fr/img-photo-jpg/camavinga-ne-jouera-pas-ce-samedi-soir-contre-brest-p-lahalle-l-equipe/1500000001300489/0:0,1998:1332-640-427-75/314e3.jpg',
    publishedAt: '2020-02-08T18:29:00+00:00',
    content:
      "Si Rennes débutera bien sans Steven Nzonzi, comme annonce plus tôt, ce samedi (20 heures) face à Brest, Eduardo Camavinga sera aussi absent au coup d'envoi. Fatigué par l'enchaînement des matches, le jeune milieu est ménagé. Il sera remplacé dans le onze renn… [+393 chars]"
  },
  {
    source: {
      id: 'ansa',
      name: 'ANSA.it'
    },
    author: 'ANSA.it',
    title: 'Morgan: Bugo ha violentato Endrigo - Ultima Ora',
    description:
      '"Bugo ha violentato Sergio Endrigo nella serata delle cover, ero incazzato. (ANSA)',
    url:
      'http://www.ansa.it/sito/notizie/topnews/2020/02/08/morgan-bugo-ha-violentato-endrigo_69ca5c18-5dd2-4b78-a7b4-c4a22b6b8c2d.html',
    urlToImage:
      'http://www.ansa.it/webimages/img_700/2020/2/8/152e3a02da2ca358d34fac064bc7160e.jpg',
    publishedAt: '2020-02-08T18:27:00Z',
    content:
      "(ANSA) - ROMA, 08 FEB - \"Bugo ha violentato Sergio Endrigo\r\nnella serata delle cover, ero incazzato. Non ha saputo reggere\r\nquel palco\": così Morgan motiva l'exploit sul palco dell'Ariston\r\ncontro l'artista con il quale, prima di essere squalificato, era\r\nin … [+1252 chars]"
  },
  {
    source: {
      id: 'focus',
      name: 'Focus'
    },
    author: 'Von FOCUS-Online-Redakteurin Henriette Jedicke',
    title:
      'An Ramelow kommt CDU nicht vorbei: Wie es im Thüringen-Drama jetzt weitergeht',
    description:
      'Der Eklat in Thüringen hat auch in der Großen Koalition für Spannungen gesorgt. In Berlin kamen die Partner am Samstag zu einer Krisensitzung zusammen. Sie fordern geschlossen eine baldige Neuwahl in Thüringen. Wie geht es nun weiter? Die Lage ist kompliziert…',
    url:
      'https://www.focus.de/politik/deutschland/kemmerich-tritt-zurueck-groko-fordert-neuwahlen-an-ramelow-kommt-cdu-nicht-vorbei-wie-es-im-thueringen-drama-jetzt-weitergeht_id_11644116.html',
    urlToImage:
      'https://p5.focus.de/img/fotos/crop11644210/8012711000-w1200-h627-o-q75-p5/5fa08a00def1f046.jpg',
    publishedAt: '2020-02-08T18:26:39Z',
    content:
      'Der Eklat in Thüringen hat auch in der Großen Koalition für Spannungen gesorgt. In Berlin kamen die Partner am Samstag zu einer Krisensitzung zusammen. Sie fordern geschlossen eine baldige Neuwahl in Thüringen. Wie geht es nun weiter? Die Lage ist kompliziert… [+7135 chars]'
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit'
    },
    author: 'Sven Crefeld, dpa, AFP',
    title: 'Thüringen: Bodo Ramelow steht für Ministerpräsidentenwahl bereit',
    description:
      'Noch im Februar will die Linke in Thüringen erneut Bodo Ramelow ins Amt des Ministerpräsidenten wählen lassen. Sie forderte CDU und FDP auf, seine Wahl zu unterstützen.',
    url:
      'https://www.zeit.de/politik/deutschland/2020-02/thueringen-bodo-ramelow-linke-neuwahl-ministerpraesident',
    urlToImage:
      'https://img.zeit.de/politik/deutschland/2020-02/bodo-ramelow-thueringen-ministerpraesidentenwahl/wide__1300x731',
    publishedAt: '2020-02-08T18:26:37+00:00',
    content:
      'Die Linke sieht nach der Rücktrittserklärung des Ministerpräsidenten Thomas Kemmerich (FDP) den Weg für die erneute Wahl von Bodo Ramelow in das Amt frei. "Ramelow steht bereit, er hat ein Kabinett, das er nach seiner Wahl berufen kann", sagte der Vizevorsitz… [+4154 chars]'
  },
  {
    source: {
      id: 'der-tagesspiegel',
      name: 'Der Tagesspiegel'
    },
    author: 'Michael Rosentritt',
    title: 'Schwache Hertha gegen Mainz chancenlos',
    description:
      'Anstatt sich mit einem Sieg weiter Luft im Abstiegskampf zu verschaffen, verlieren die Berliner im Olympiastadion 1:3.',
    url:
      'https://www.tagesspiegel.de/sport/quaison-trifft-dreimal-fuer-den-fsv-schwache-hertha-gegen-mainz-chancenlos/25526072.html',
    urlToImage:
      'https://www.tagesspiegel.de/images/hertha-bsc-fsv-mainz-05/25526114/1-format530.jpg',
    publishedAt: '2020-02-08T18:26:09+00:00',
    content:
      'Jene Berliner und Brandenburger, die es für gewöhnlich gut mit Hertha BSC meinen, am Samstagnachmittag aber nicht ins Olympiastadion gekommen waren, hatten nicht so arg viel falsch gemacht. Die, die trotzdem kamen, es waren ohnehin nur 35&lt;ET&gt;049 Zuschau… [+3709 chars]'
  },
  {
    source: {
      id: 'nrk',
      name: 'NRK'
    },
    author: 'Sverre Holm-Nilsen',
    title: 'Stor politiaksjon etter masseskyting i Thailand',
    description:
      'Minst 20 personer er skutt og drept i byen Nakhon Ratchasima. Politiet sier de har kontroll over kjøpesenteret hvor gjerningsmannen forskanset seg etter masseskytingen.',
    url:
      'https://www.nrk.no/norge/stor-politiaksjon-etter-masseskyting-i-thailand-1.14895236',
    urlToImage:
      'https://gfx.nrk.no/xY4sHHD1cr_sQEtLZcnDvgVyadcs5d9BP51Zhg7--qYA.jpg',
    publishedAt: '2020-02-08T18:25:48Z',
    content:
      'Spesialstyrker fra det thailandske militæret og politiet har sikret kjøpesenteret Terminal 21 i byen Nakhon Ratchasima.\r\nDe bevæpnede styrkene er på jakt etter en 32 år gammel mann som de mener står bak masseskytingen i byen, lørdag. \r\nMISTENKT: Den mistenkte… [+2205 chars]'
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'Grace Segers',
    title:
      'Alexander Vindman, NSC official who testified in impeachment trial, removed from White House',
    description:
      'Vindman testified before the House Intelligence Committee under a subpoena as part of the impeachment inquiry of President Trump.',
    url:
      'https://www.cbsnews.com/news/alexander-vindman-removed-from-white-house-today/',
    urlToImage:
      'https://cbsnews1.cbsistatic.com/hub/i/r/2020/02/07/b65b6a6d-812b-453c-913b-60d90b728ab7/thumbnail/1200x630/5031481590d6dc3b5cdb5bf9938064c9/cbsn-fusion-trump-considers-ousting-key-impeachment-witness-lt-col-alexander-vindman-thumbnail-443248-640x360.jpg',
    publishedAt: '2020-02-08T18:24:00+00:00',
    content:
      'Lieutenant Colonel Alexander Vindman, a National Security Council official who testified in the House impeachment inquiry of President Trump, has been removed from the White House, according to a statement from his lawyer.\r\n"Today, Lieutenant Colonel Alexande… [+6300 chars]'
  },
  {
    source: {
      id: 'il-sole-24-ore',
      name: 'Il Sole 24 Ore'
    },
    author: null,
    title:
      'Coronavirus, Giannelli: «Precauzioni a scuola, ecco come comportarsi»',
    description:
      'Parla il presidente dell’Associazione nazionale presidi dopo le nuove indicazioni della Salute. Appello alle famiglie: collaborate con noi',
    url:
      'https://www.ilsole24ore.com/channel/soleonline5/type/articolo/uuid/ACSs5AIB',
    urlToImage:
      'https://i2.res.24o.it/images2010/2020/02/ACSs5AIB/images/6879e978-4a9e-11ea-bf7c-be3b23c26872-fotohome0.jpg',
    publishedAt: '2020-02-08T18:23:52.3730691Z',
    content:
      "(ANSA)\r\n2' di lettura\r\nLe nuove indicazioni fornite dal ministero della Salute «sono condivisibili». Si chiariscono tre cose, spiega al Sole24Ore il presidente dellAnp, lAssociazione nazionale presidi, Antonello Giannelli. «La prima è che dovrà essere il pers… [+2009 chars]"
  },
  {
    source: {
      id: 'la-repubblica',
      name: 'La Repubblica'
    },
    author: 'La Repubblica',
    title: 'Sport - Repubblica.it',
    description:
      "Calcio, ciclismo, volley, basket, nuoto. Serie A, Coppa Italia, Champions League. I grandi tornei, le olimpiadi, i mondiali, Giro d'Italia e Tour de France. Le dirette, le pagelle, i commenti, le analisi, gli articoli di Gianni Mura",
    url: 'https://www.repubblica.it/sport/',
    urlToImage:
      'https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png',
    publishedAt: '2020-02-08T18:23:48.1660346Z',
    content:
      "Multimedia\r\nTennis, in 52 mila per lo...\r\nLaureus Sports Awards, Sh...\r\nFormula Uno, il Papa auto...\r\nMotoGp, presentata la nuo...\r\nKobe Bryant, il post dell...\r\nCorini, lettera ai giocat...\r\nMotoGp, presentata la nuo...\r\n'Black Blue', la donna in...\r\nMilan, … [+190 chars]"
  },
  {
    source: {
      id: 'il-sole-24-ore',
      name: 'Il Sole 24 Ore'
    },
    author: null,
    title: 'Coronavirus, il ministero: alunni da Cina possono stare a casa',
    description:
      'I presidi chiedono nuove istruzioni per le scuole alla luce delle modifiche alla circolare',
    url:
      'https://www.ilsole24ore.com/art/coronavirus-prima-vittima-straniera-e-americano-ACXNZ7HB',
    urlToImage:
      'https://i2.res.24o.it/images2010/2020/02/ACXNZ7HB/images/53c2756e-4a43-11ea-bf7c-be3b23c26872-fotohome0.jpg',
    publishedAt: '2020-02-08T18:23:47.2011087Z',
    content:
      'Sono stati trovati e reclutati «in meno di una settimana i giovani medici, per la maggior parte Corsisti e Medici di Medicina Generale, che presteranno la loro opera negli aeroporti di Torino, Bologna, Firenze, Napoli, Bari e Brindisi. I controlli sui passegg… [+377 chars]'
  },
  {
    source: {
      id: 'fox-news',
      name: 'Fox News'
    },
    author: 'Fox News',
    title:
      'Suspected Thai soldier kills at least 20 people in Thailand shooting spree',
    description:
      'At least 20 people are dead and several more injured after a Thai soldier opened fire in a popular city just north of Bangkok; Fox News correspondent Ryan Chilcote reports.',
    url: 'https://video.foxnews.com/v/6130836412001/',
    urlToImage:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/7b3a4b2c-6157-414c-a9dc-a429029a92b0/8f1ced19-4817-4c7f-855a-a343fcfef551/1280x720/match/image.jpg',
    publishedAt: '2020-02-08T18:23:05.9515471Z',
    content: null
  },
  {
    source: {
      id: 'focus',
      name: 'Focus'
    },
    author: 'FOCUS Online',
    title:
      'Wetter in Deutschland: Orkan Sabine! Bahn verstärkt ihre Bereitschaften',
    description:
      'Das Wetter in Deutschland: Die Pegelstände an Rhein und Mosel sinken. Trotz möglicher Regenfälle wird dort kein neues Hochwasser erwartet. Jedoch wird Deutschland ab Sonntag von einem zerstörerischen Sturmtief heimgesucht. Alle Informationen zur aktuellen Wet…',
    url:
      'https://www.focus.de/wissen/natur/meteorologie/wetter-in-deutschland-adac-raet-autos-bei-windstaerke-10-stehen-zu-lassen_id_11619118.html',
    urlToImage:
      'https://p5.focus.de/img/fotos/crop10431780/2222714585-w1200-h627-o-q75-p5/twc-de-sturm-dpa.jpg',
    publishedAt: '2020-02-08T18:22:00Z',
    content:
      'Das Wetter in Deutschland: Am Sonntag und Montag soll Orkantief "Sabine" mit Windgeschwindigkeiten von bis zu 120 km/h über Deutschland hinwegfegen. Alle Informationen zur aktuellen Wetterlage im Newsticker von FOCUS Online.\r\nThe Weather Channel sagt Ihnen, w… [+42803 chars]'
  },
  {
    source: {
      id: 'nrk',
      name: 'NRK'
    },
    author: 'Ola Mjaaland',
    title: 'Varsler 50 vitner mot Bertheussen',
    description:
      'Det er satt av hele ti uker til rettssaken mot Laila Bertheussen, som er samboer med tidligere justisminister Tor Mikkel Wara. Statsadvokaten varsler rundt 50 vitner.',
    url:
      'https://www.nrk.no/norge/varsler-50-vitner-mot-bertheussen-1.14894260',
    urlToImage:
      'https://gfx.nrk.no/DRcUpdwng36YH2ukR0wfjQbRaK6jtWcQIzx4ajWFri2w.jpg',
    publishedAt: '2020-02-08T18:21:45Z',
    content:
      'Bertheussen er tiltalt for å ha skrevet flere trusselbrev, tagget ned sitt eget hus og forsøkt å tenne på daværende justisminister Tor Mikkel Waras bil.\r\n Det blir i underkant av 50 vitner. Vitnene er flere politifolk, etterforskere fra PST, Kripos og Oslo po… [+7241 chars]'
  },
  {
    source: {
      id: 'die-zeit',
      name: 'Die Zeit'
    },
    author: 'Tina Groll, dpa',
    title: 'Unwetter: Sturmtief "Sabine" nimmt Kurs auf Deutschland',
    description:
      'Das Sturmtief soll am Sonntag die norddeutsche Küste erreichen. Erwartet werden Böen mit Geschwindigkeiten von mehr als 140 Stundenkilometern.',
    url:
      'https://www.zeit.de/mobilitaet/2020-02/unwetter-orkan-sturm-sabine-deutschland',
    urlToImage: null,
    publishedAt: '2020-02-08T18:20:04+00:00',
    content:
      'Erste Ausläufer des Orkantiefs "Sabine" sollen laut Deutschen Wetterdienst (DWD) werden die Menschen an der Nordsee nach Angaben des Deutschen Wetterdienstes (DWD) voraussichtlich am Sonntagvormittag zu spüren \r\nbekommen. Im Laufe des Tages soll sich der Orka… [+3837 chars]'
  },
  {
    source: {
      id: 'rtl-nieuws',
      name: 'RTL Nieuws'
    },
    author: 'RTL Nieuws',
    title: "Topdiplomaat EU zegt sorry na opmerking 'Greta-syndroom'",
    description:
      "Jonge klimaatactivisten lijden aan 'het Greta-syndroom', had EU-buitenlandchef Josep Borrell gezegd. Voor die opmerking heeft hij nu zijn excuses aangeboden.",
    url:
      'https://www.rtlnieuws.nl/nieuws/buitenland/artikel/5015036/topdiplomaat-eu-sorry-opmerking-greta-syndroom',
    urlToImage:
      'https://www.rtlnieuws.nl/sites/default/files/styles/liggend_hoge_resolutie/public/content/images/2020/02/08/naast_20200208191751.jpg?h=a9edb586&itok=btib2DMK',
    publishedAt: '2020-02-08T18:18:59+00:00',
    content:
      "De topdiplomaat van de Europese Unie (EU) deed die uitspraak eerder deze week. Daarna hebben verschillende Europarlementariërs verontwaardigd gereageerd. Onder anderen de Groenen noemden die uitspraak 'onacceptabel voor een vertegenwoordiger van de EU'.\r\nBorr… [+199 chars]"
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'David Morgan',
    title:
      "Check out performance clips and interviews with stars nominated for this year's Academy Award for Best Actress",
    description:
      "Check out clips from performances nominated for this year's Academy Award and interviews with the stars",
    url:
      'https://www.cbsnews.com/news/oscars-2020-watch-the-best-actress-nominees-cynthia-erivo-scarlett-johansson-saoirse-ronan-charlize-theron-renee/',
    urlToImage:
      'https://cbsnews2.cbsistatic.com/hub/i/r/2020/02/07/809eaaa6-ee58-4cf8-983a-1e5a560e8d57/thumbnail/1200x630g2/a41b7a225d38f3ca7461cf01fd49d275/oscars-2020-best-actress-erivo-johansson-ronan-theron-zellweger-660.jpg',
    publishedAt: '2020-02-08T18:18:10+00:00',
    content:
      "Check out clips and interviews below with the five nominees for this year's Academy Award for Best Actress. \r\nWinners of this year's Oscars will be announced on Sunday, February 9, at the Dolby Theatre at Hollywood &amp; Highland Center in Hollywood. \r\nCynthi… [+8377 chars]"
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'David Morgan',
    title:
      "Check out performance clips and interviews with stars nominated for this year's Academy Award for Best Supporting Actress",
    description:
      "Check out clips from performances nominated for this year's Academy Award and interviews with the stars",
    url:
      'https://www.cbsnews.com/news/oscars-2020-best-supporting-actress-nominees-kathy-bates-laura-dern-scarlett-johansson-florence-pugh-margot-robbie/',
    urlToImage:
      'https://cbsnews2.cbsistatic.com/hub/i/r/2020/02/03/ba354dab-5ef8-4f2b-b19d-2923df03cd87/thumbnail/1200x630g2/ee2549cfad31f51b244b45d798e08041/oscars-2020-best-supporting-actress-bates-dern-johansson-pugh-robbie-660.jpg',
    publishedAt: '2020-02-08T18:18:03+00:00',
    content:
      "Check out clips and interviews below with the five nominees for this year's Academy Award for Best Supporting Actress. \r\nWinners of this year's Oscars will be announced on Sunday, February 9, at the Dolby Theatre at Hollywood &amp; Highland Center in Hollywoo… [+8620 chars]"
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'David Morgan',
    title:
      "Check out performance clips and interviews with stars nominated for this year's Academy Award for Best Actor",
    description:
      "Check out clips from performances nominated for this year's Academy Award and interviews with the stars",
    url:
      'https://www.cbsnews.com/news/oscars-2020-best-actor-nominees-anionio-banderas-leonardo-dicaprio-adam-driver-joaquin-phoenix-jonathan-pryce/',
    urlToImage:
      'https://cbsnews1.cbsistatic.com/hub/i/r/2020/02/02/0cbd2858-45b4-47a1-9838-7500bb3a4f3c/thumbnail/1200x630g2/6916ed1602f6d97bf1d6555d143669d4/oscars-2020-best-actor-banderas-dicaprio-driver-phoenix-pryce-660.jpg',
    publishedAt: '2020-02-08T18:17:52+00:00',
    content:
      "Check out clips and interviews below with the five nominees for this year's Academy Award for Best Actor. \r\nWinners of this year's Oscars will be announced on Sunday, February 9, at the Dolby Theatre at Hollywood &amp; Highland Center in Hollywood. \r\nAntonio … [+9732 chars]"
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'David Morgan',
    title:
      "Check out performance clips and interviews with stars nominated for this year's Academy Award for Best Supporting Actor",
    description:
      "Check out clips from performances nominated for this year's Academy Award and interviews with the stars",
    url:
      'https://www.cbsnews.com/news/oscars-2020-best-supporting-actor-nominees-tom-hanks-anthony-hopkins-al-pacino-joe-pesci-brad-pitt/',
    urlToImage:
      'https://cbsnews1.cbsistatic.com/hub/i/r/2020/02/01/0e3aa2d4-cf07-4165-9e68-89d3e3de8b52/thumbnail/1200x630g2/8d6edba95ebb2fdb392140a51e61c6c6/oscars-2020-best-supporting-actor-hanks-hopkins-pacino-pesci-pitt-660.jpg',
    publishedAt: '2020-02-08T18:17:47+00:00',
    content:
      "Check out clips and interviews below with the five nominees for this year's Academy Award for Best Supporting Actor. \r\nWinners of this year's Oscars will be announced on Sunday, February 9, at the Dolby Theatre at Hollywood &amp; Highland Center in Hollywood.… [+6738 chars]"
  },
  {
    source: {
      id: 'nrk',
      name: 'NRK'
    },
    author: 'Anders Skjerdingstad',
    title: 'Norge misforsto uttaksreglene til egen tour',
    description:
      'FALUN (NRK): Pål Golberg og Erik Valnes imponerte i sprinten er Falun, men er langt fra imponert over at trenerduoen Eirik Myhr Nossum og Arild Monsen måtte ha svensk hjelp for å forstå uttaksreglene til Ski Tour 2020.',
    url:
      'https://www.nrk.no/sport/norge-misforsto-uttaksreglene-til-egen-tour-1.14894837',
    urlToImage:
      'https://gfx.nrk.no/Zix8qO1Hn_pPLJUWsi4B-AUVnWpveUqPqkhEGNTyMdsw.jpg',
    publishedAt: '2020-02-08T18:16:30Z',
    content:
      'De må få et spark i ræva, for det der bør de ha kontroll på, sier Erik Valnes etter å ha blitt nummer to i verdenscupsprinten i Falun.\r\nSparket retter han mot allroundlandslagstrener Eirik Myhr Nossum og sprintlandslagstrener Arild Monsen. Før lørdagens renn … [+3018 chars]'
  },
  {
    source: {
      id: 'cbs-news',
      name: 'CBS News'
    },
    author: 'CBS News',
    title: 'This week on "Sunday Morning" (February 9)',
    description:
      "A look at the features for this week's broadcast of the #1 Sunday morning news program",
    url:
      'https://www.cbsnews.com/news/this-week-on-sunday-morning-february-9-2002/',
    urlToImage:
      'https://cbsnews1.cbsistatic.com/hub/i/r/2020/02/06/dd7547f1-9663-476d-869d-f73659fedd11/thumbnail/1200x630/97d15c2d5be492f0a1bdba5bd06b3324/firehouse-theatre-in-kingston-wa-promo.jpg',
    publishedAt: '2020-02-08T18:15:46+00:00',
    content:
      "COVER STORY: Intimacy on screenMovies have long had stunt coordinators to oversee action scenes. But In the era of #MeToo, there's a new focus on how romantic scenes are filmed for movies and TV. It's led to the rise of a new figure on set: the intimacy coord… [+5576 chars]"
  },
  {
    source: {
      id: 'lenta',
      name: 'Lenta'
    },
    author: 'Lenta',
    title:
      'Лучший боец UFC назвал фаворита во втором поединке Макгрегора и Нурмагомедова',
    description:
      'Американский боец смешанного стиля (MMA) Джон Джонс поделился мыслями относительно возможного матча-реванша между ирландцем Конором Макгрегором и россиянином Хабибом Нурмагомедовым.«Если бы я ставил деньги, но поставил бы их на Хабиба. То есть, на бумаге у не…',
    url: 'https://lenta.ru/news/2020/02/08/jones_bones/',
    urlToImage:
      'https://icdn.lenta.ru/images/2020/02/08/21/20200208211152369/detail_f76b5a4c24501e29e5e5940d39e4b35a.jpg',
    publishedAt: '2020-02-08T18:14:10Z',
    content:
      '(MMA) - . TMZ Sports.\r\n« , . , . », . , , , .\r\n (UFC) , 9 . .\r\n UFC 246 , , . . , - .\r\n 2018- UFC . . 2018- 2016 .\r\n 28 . UFC . , .'
  },
  {
    source: {
      id: 'ansa',
      name: 'ANSA.it'
    },
    author: 'ANSA.it',
    title: 'Bugo, io insultato da Morgan - Ultima Ora',
    description:
      '"Sulla scala per arrivare sul palco, Morgan ha iniziato a insultarmi. Ha attaccato mia moglie, mi ha\r\ndato del perdente, del figlio di... e quando ha iniziato la canzone con il testo cambiato, l\'unica\r\nreazione che ho avuto è stata quello di andarmene". (ANSA)',
    url:
      'http://www.ansa.it/sito/notizie/topnews/2020/02/08/bugo-io-insultato-da-morgan_8f1a5ca4-85ce-440f-84ca-9d6d4daf58d1.html',
    urlToImage:
      'http://www.ansa.it/webimages/img_700/2020/2/8/7d8fd19b22df6793b55560d74abfc5e7.jpg',
    publishedAt: '2020-02-08T18:12:00Z',
    content:
      '(ANSA) - ROMA, 08 FEB - "Sulla scala per arrivare sul palco,\r\nMorgan ha iniziato a insultarmi. Ha attaccato mia moglie, mi ha\r\ndato del perdente, del figlio di... e quando ha iniziato la\r\ncanzone con il testo cambiato, l\'unica reazione che ho avuto è\r\nstata q… [+880 chars]'
  }
];

export const sources: ArticleSource[] = [
  ...new Set(articles.map(article => article.source))
];
