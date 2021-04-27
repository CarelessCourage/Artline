import { createStore } from 'vuex'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ExpoScaleEase } from "gsap/EasePack";
import { TweenMax, Power2 } from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ExpoScaleEase, TweenMax, Power2);

export default createStore({
  state: {
    nav: false,
    itemRefs: [],
    gsap_gates: [],
    mode: false,
    active: null,
    artickles: [
      {
        font: "victorian",
        top: "top: 0px",
        title: "Victorian",
        date: "1837-1901",
        img: {
          main: {
            image: require("../assets/themes/victorian/uknown.jpg"),
            author: require("../assets/themes/victorian/Victoria.jpg"),
            authorName: "unknown",
          },
          sub: {
            image: require("../assets/themes/victorian/unknown.jpg"),
            author: require("../assets/themes/victorian/Victoria.jpg"),
            authorName: "unknown",
          }
        },
        hook: [
          { highlight: false, tekst: 'Ornamentation and variation of shape and size. ' },
          { highlight: true, tekst: 'Fill ' },
          { highlight: false, tekst: 'out the page with lots and lots of forms from images to ' },
          { highlight: true, tekst: 'ornaments ' },
          { highlight: false, tekst: 'to type' }
        ],
        intro: 'The hum of machines pushing and pulling in rhythm, like clockwork. Oliver Twist yelling on the street corner about todays newspaper. A medium you have never experienced before. Not a book written by bald men in monasteries. But a stack of papers printed by machines. And an infinite amount of identical copies of it. We are already in the late industrial revolution which started almost 100 years ago in 1750. And here comes the birth of the printed media. And with it, advertisement. This is where graphic design takes its first breaths. Or, at least, this is the birth we have chosen to start with. Like all media, this one too tends to be born many times.',
        content: [
          { p: true, source: 'Victorian Graphic design. So named after Queen Victoria who happened to be in power at this time during the industrial revolution. Its the first time graphic design has seen the light of the printing world. This revolution came in large part at the hand of new technologies like Linographic printing which allowed for the printing of images. This made magazines and newspapers commercially viable for the first time.' },
          { p: true, source: 'The aesthetic of Victorian style has a rampant use of ornamentation and variation of shape and size. These design choices gave them the ability to fill out the page with lots and lots of forms from images to ornaments to type. Theres a sort of carelessness associated with the composition though. For example, a compositor would not hesitate to use an upside down b in place of a g. This, likely a product of limitations of time and technology, is likely what is to blame for how the era developed. Though, the cost of paper probably had something to do with it also. When the space you have is expensive, leaving areas blank feels wasteful.' },
          { p: true, source: 'Font faces also have a prominent development in this era. By distorting font types like Bodony and Dido, making them larger and blacker. This type, generally called Fat Faces, are now recognized as quintessentially Victorian.' }
        ]
      },
      {
        font: "Kaoly",
        top: "top: 0px",
        title: "Art Nouveau",
        date: "1890-1920",
        img: {
          main: {
            image: require("../assets/themes/nouveau/muchaexample2.jpg"),
            author: require("../assets/themes/nouveau/AlphonseMucha.jpg"),
            authorName: "Alphonse Mucha",
          },
          sub: {
            image: require("../assets/themes/nouveau/muchaexample.jpg"),
            author: require("../assets/themes/nouveau/AlphonseMucha.jpg"),
            authorName: "Alphonse Mucha",
          }
        },
        hook: [
          { highlight: false, tekst: 'Perhaps a ' },
          { highlight: true, tekst: 'natural ' },
          { highlight: false, tekst: 'reaction to the mass produced composition of the Victorian era. A more painterly, ' },
          { highlight: true, tekst: 'handcrafted ' },
          { highlight: false, tekst: 'sense of asymmetrical details' }
        ],
        intro: 'The pen stroke touches the pedal. Gentle, like an archeologist brushing forth an ancient art piece. And each brush stroke takes its time in forming. Delicate, and fragile and intricate. As the canvas disappears a youthful woman reveals herself among the flowers. Her twisting hair circles around the page in whiplike motions. All you can do is sit back and watch the artist and the art touch each other.',
        content: [
          { p: true, source: 'Art Nouveau translates from French to New Art. Its personality takes the ornate details of the Victorian era and expands it. All the while rejecting the careless composition of the past. Unlike the Victorian style which meshes together many varying elements, Art Nouveau paints a single picture that on its own fills the frame. Its almost like they took the ornate, floral details of the Victorian style and made the entire piece about that.' },
          { p: true, source: 'One could speculate that Art Nouveau, as one of the first international movements, came about as a natural reaction to the mass produced composition of the Victorian era. It focuses heavily on a more painterly, handcrafted estetic. And asymmetrical details. Specific shapes and subjects repeatedly take place in the movement as well. Often young women, flowers and twisting whiplike lines and shapes.' },
          { p: true, source: 'What we do know however is that the artists of the time wanted to break down traditional distinctions between fine arts (especially painting and sculpture) and applied arts. A large part of the idea behind the movement was to have a unifying estetic. To such a degree that they wanted to design furniture, and houses, and jewelry, and paintings which were all supposed to live together.' },
          { p: true, source: 'Early prototypes of the style include the Red House with interiors by Morris and architecture by Philip Webb (1859), and the Peacock Room by James Abbott McNeill Whistler. German architects and designers sought a spiritually uplifting Gesamtkunstwerk ("total work of art"). Hoping that through a common style, they could help to uplift and inspire the residents. While in Britain, it was influenced by William Morris and the Arts and Crafts movement.' },
        ]
      },
      {
        font: "Noto Serif",
        top: "top: -240px",
        title: "Bauhaus",
        date: "1900-1930",
        img: {
          main: {
            image: require("../assets/themes/bauhaus/ZoranCardulaExample.png"),
            author: require("../assets/themes/bauhaus/ZoranCardula.jpg"),
            authorName: "Zoran Cardula",
          },
          sub: {
            image: require("../assets/themes/bauhaus/HerbertBayerExample.jpg"),
            author: require("../assets/themes/bauhaus/HerbertBayer.jpg"),
            authorName: "Herbert Bayer",
          }
        },
        hook: [
          { highlight: false, tekst: 'Design should meet the needs of society. There should be no distinction between ' },
          { highlight: true, tekst: 'form ' },
          { highlight: false, tekst: 'and ' },
          { highlight: true, tekst: 'function' }
        ],
        intro: 'Your front yard has the footprints of military boots. The windows are broken and the street is deserted. The sound of your furniture being ripped to shreds and the commands of Nazi soldiers. They want to stop you from building your houses. But all you can do is turn your back, and go build somewhere else. And as long as there are houses that need to be built they will never be able to stop you.',
        content: [
          { p: true, source: 'Bauhaus was a German art school operating from 1919 to 1933. It arguably marks the first major art schools which approached art as a formal design language. A design language motivated towards the goal of unifying the principles of mass production with  individual artistic vision. It wanted to combine aesthetics with everyday function.' },
          { p: true, source: 'The name Bauhaus means to build a house. Images that this statement evokes can help you understand the design aesthetic of the era. A sort of attempt at making something which is simultaneously formulaic and orderly and also open to chaos. The school itself was founded by architect Walter Gropius in Weimar. And from the setup it was grounded in the idea of creating a Gesamtkunstwerk ("comprehensive artwork") in which all the arts would eventually be brought together.' },
          { p: true, source: 'The style itself is perhaps best described by William Morris (1834–1896), who had argued that art should meet the needs of society and that there should be no distinction between form and function. Thus, the Bauhaus style, also known as the International Style, was marked by the absence of ornamentation and by harmony between the function of an object or a building and its design. This stood in stark contrast to both Victorian and Art Nouveau.' },
          { p: true, source: 'The school itself was eventually shut down by the Nazis who accused them of being communists. But the Bauhaus style later became one of the most influential currents in modern design, modernist architecture and art, design, and architectural education. Staff at the Bauhaus included prominent artists such as Paul Klee, Wassily Kandinsky, and László Moholy-Nagy at various points.' },
          { p: true, source: 'The Bauhaus had a major impact on art and architecture trends after its demise, as many artists were exiled by the Nazi regime. In 2004 Tel Aviv in Israel was named to the list of world heritage sites by the UN due to its abundance of Bauhaus architecture. ' },
        ]
      },
      {
        font: "artdeco",
        top: "top: 0px",
        title: "Art Deco",
        date: "1920-1940",
        img: {
          main: {
            image: require("../assets/themes/deco/AMCassandreexample.jpg"),
            author: require("../assets/themes/deco/AMCassandre.jpg"),
            authorName: "A.M. Cassandre",
          },
          sub: {
            image: require("../assets/themes/deco/AMCassandreexample3.jpg"),
            author: require("../assets/themes/deco/AMCassandre.jpg"),
            authorName: "A.M. Cassandre",
          }
        },
        hook: [
          { highlight: false, tekst: 'Clean and clear lines. But unlike most movements which accentuate ' },
          { highlight: true, tekst: 'control ' },
          { highlight: false, tekst: 'it also comes across as handcrafted and ' },
          { highlight: true, tekst: 'ornate' }
        ],
        intro: 'A metal man stands over you. His cubical features and sharp lines accentuate his status as a firm, unmovable source of power and wealth. Rich people and expensive cars slowly drift around you. They all seem locked in a permanent cocktail party while in the distance the fumes of industry blackens out the sky. The cheerful chatter fills the cold metal structure with warmth and color. And the ivory and gold patterns on the floor removes any doubt you had in your mind. Youre in the company of the kings and queens of this city.',
        content: [
          { p: true, source: 'Art Deco, sometimes referred to as Deco first appeared in France. It took its name, short for Arts Décoratifs, from the Exposition internationale des arts décoratifs et industriels modernes (International Exhibition of Modern Decorative and Industrial Arts) held in Paris in 1925.' },
          { p: true, source: 'It combined modern styles with fine craftsmanship and rich materials. During its heyday, Art Deco represented luxury, glamour, exuberance, and faith in social and technological progress. From its outset, Art Deco was influenced by the bold geometric forms of Cubism and the Vienna Secession; the bright colors of Fauvism and of the Ballets Russes; the updated craftsmanship of the furniture of the eras of Louis Philippe I and Louis XVI; and the exotic styles of China and Japan, India, Persia, ancient Egypt and Maya art. It featured rare and expensive materials, such as ebony and ivory, and exquisite craftsmanship.' },
          { p: true, source: 'Visually, the style plays on symmetry and order. Harsh shapes, sharp lines and intricate patterns are all key aspects of the aesthetic. Its unique in the sense that it features a lot of clean and clear lines which can be said to represent control. But unlike most movements which accentuate control it also comes across as handcrafted. Through this handcrafted quality to the design you can see a very clear overlap between Art Deco and Art Nouveau. One could even describe the two as two variations of one thing. Deco being a masculine industrial type of handcrafter graphics design and Art Nouveau being a feminine natural type of handcrafted graphics design.' }
        ]
      },
      {
        font: "Dancing Script",
        top: "top: 0px",
        title: "Surrealism",
        date: "1920-1950",
        img: {
          main: {
            image: require("../assets/themes/surrealism/Pablo-Picassoexample.jpg"),
            author: require("../assets/themes/surrealism/Pablo-Picasso.jpg"),
            authorName: "Pablo Picasso",
          },
          sub: {
            image: require("../assets/themes/surrealism/HansSchlegerexample.jpg"),
            author: require("../assets/themes/surrealism/HansSchleger.jpg"),
            authorName: "Hans Schleger",
          }
        },
        hook: [
          { highlight: false, tekst: 'The aesthetics of the ' },
          { highlight: true, tekst: 'subconscious. ' },
          { highlight: false, tekst: 'The breaking of logic and sense in favor of a raw and unfiltered portrait of your ' },
          { highlight: true, tekst: 'feelings' }
        ],
        intro: 'The streets are filled with corpses and your house has been blown to shit by a mindless construction never seen in any war before, a bomber airplane. Your father has lost both his legs and his face looks more like a mashed pie than a human face, but hes still alive. Though, youre not sure if the sounds his face is making is him crying or trying to breathe through the chemical gas slowly eating away at him. Your mother is in silent shock and all thats left of your brothers are arms and legs.',
        content: [
          { p: true, source: 'The first world war was unlike a lot of other wars. Most obviously in the fact that it was the first modern war that was fought by nation states from across the world. But also because it was a war where the trigger for the aggression was very obscure. It started with the assasination of Franz Duke Ferdinand of Belgia by a Serbian nationalist. Belgia criticised Serbia for this incident and Serbia sent a response but Belgia didnt like the response so they went to war. But then most of the other countries joined in because of obligations and alliances, and suddenly, most of Europe where all roped into a random war over an obscure assasination by some random nationalist.' },
          { p: true, source: 'For this reason the people involved did not feel a very passionate obligation to the war. It was less of a war about territory or to right some perceived wrong as it was a formal war whose motivations seemed to exist mostly on some bureaucratic paper somewhere. This dispassion had a very surreal effect as the casualties started coming in. Especially since the tools of this war where modern industrial tools never before used on a large scale. Bombers, airplanes, chemical gass. All horrors which made it easier to completely destroy human beings more suddenly and more brutal than ever before and sometimes without ever facing them head on in the battlefield. ' },
          { p: true, source: 'One can imagine it might at times have felt more like fighting a mindless soulless eather of death and destruction than an army or a person. Over 60 million Europeans alone mobilised in the war making it one of the largest wars in history. And when the dust had finally settled it had also become one of the deadliest.' },
          { p: true, source: 'Paris in particular saw a lot of soldiers coming home maimed or not coming home at all. And its exactly here that surrealism along with so many philosophical movements blossomed. Couple that with the discussions about this new concept called “the subconscious” brought to the minds of the people by Sigmund Freud and Piere Janet and you have a cocktail of pointless despair and a sudden awareness of how our thoughts and feelings might run beneath the surface of our conscious minds.' },
          { p: true, source: 'At its core surrealism is about the aesthetics of the subconscious. The breaking of logic and sense in favor of a raw and unfiltered portrait of your feelings. And this desire to reject tradition and rules and frames in favor of a more human image of your feelings actually makes a lot of sense put up against the backdrop of a pointless war where millions were killed or coming home permanently disfigured beyond recognition and the revelation of the subconscious as a concept happening at the same time.' },
        ]
      },
      {
        font: "Vampiro One",
        top: "top: 0px",
        title: "Pop Art",
        date: "1940-1970",
        img: {
          main: {
            image: require("../assets/themes/pop/andywarholexample.jpg"),
            author: require("../assets/themes/pop/andywarhol.jpg"),
            authorName: "Andy Warhol",
          },
          sub: {
            image: require("../assets/themes/pop/andywarholdexaple2.jpg"),
            author: require("../assets/themes/pop/andywarhol.jpg"),
            authorName: "Andy Warhol",
          }
        },
        hook: [
          { highlight: false, tekst: 'Emphasizing the banal or ' },
          { highlight: true, tekst: 'kitschy ' },
          { highlight: false, tekst: 'elements of culture, most often through the use of ' },
          { highlight: true, tekst: 'irony' }
        ],
        intro: 'Drink a beer and watch the lights. The city is full of us. And so are all the rural villages. Which is cool becasue we´re fucking awesome. You buy 15 light bulbs and use them to decorate your car. Thats life. An endless series of random events, and objects; and you, looking at them through broken shades while trying to figure out if Sara likes you or just wants your light bulbs.',
        content: [
          { p: true, source: 'Pop art is an art movement that emerged in the United Kingdom and the United States during the mid- to late-1950s. The movement presented a challenge to traditions of fine art by including imagery from popular and mass culture, such as advertising, comic books and mundane mass-produced cultural objects. One of its aims is to use images of popular (as opposed to elitist) culture in art, emphasizing the banal or kitschy elements of any culture, most often through the use of irony.' },
          { p: true, source: 'This stands in stark contrast to the hich class/elitism of Art Deco. The comparison between Art Deco and Pop Art is therefore pretty striking. Since Pop Art sets out to challenge both the classism of the elite/exclusive style and also point out the additional elitism of a handcrafted narrative around art. Both the handcrafted nature and the structural elitism of class are both aspects which is present in Art Deco.' },
          { p: true, source: 'Pop Art is also associated with the artists use of mechanical means of reproduction or rendering techniques. Among the early artists that shaped the pop art movement were Eduardo Paolozzi and Richard Hamilton in Britain, and Larry Rivers, Robert Rauschenberg and Jasper Johns among others in the United States.' },
          { p: true, source: 'Pop art is widely interpreted as a reaction to the then-dominant ideas of abstract expressionism, as well as an expansion of those ideas. Due to its utilization of found objects and images, it is similar to Dada. Pop art and minimalism are considered to be art movements that precede postmodern art, or are some of the earliest examples of postmodern art themselves.' },
          { p: true, source: 'Pop art often takes imagery that is currently in use in advertising. Product labeling and logos figure prominently in the imagery chosen by pop artists, seen in the labels of Campbells Soup Cans, by Andy Warhol. Even the labeling on the outside of a shipping box containing food items for retail has been used as subject matter in pop art, as demonstrated by Warhols Campbells Tomato Juice Box, 1964.' },
        ]
      },
      {
        font: "psy",
        top: "top: 0px",
        title: "Psychedelia",
        date: "1960s",
        img: {
          main: {
            image: require("../assets/themes/psycedelia/WesWilsonexample.jpg"),
            author: require("../assets/themes/psycedelia/WesWilson.jpg"),
            authorName: "Wes Wilson",
          },
          sub: {
            image: require("../assets/themes/psycedelia/VictorMoscosoexample.jpeg"),
            author: require("../assets/themes/psycedelia/VictorMoscoso.jpg"),
            authorName: "Victor Moscoso",
          }
        },
        hook: [
          { highlight: false, tekst: 'Strongly ' },
          { highlight: true, tekst: 'symmetrical ' },
          { highlight: false, tekst: 'composition, collage elements, rubber-like ' },
          { highlight: true, tekst: 'distortions, ' },
          { highlight: false, tekst: 'and bizarre iconography' }
        ],
        intro: 'The headless woman is finally done rambling about art history to you when you realize that your legs have ran off and your parrot ate all the papaya. Without hesitation you attempt to jump through the window. But you fall before you get there on account of your lacking legs. Then you realize, as you look down, youre falling towards the street. You were outside the window all along. Although the wind whips past you on your way down a sense of calm sets in your body. You know, the pavement, once you meet it, will offer you nothing but softness, and papaya. Peace and Love.',
        content: [
          { p: true, source: 'Psychedelia was arguably the most political of all the art movements. Steeped in politics such the anti war movement and the hippie crowd. Just like these groups the Psychedelia movement was also characterised with its relationship to drugs. An opening to freedom, experimentation and human rights all come together under these groups. Some of this might be a product, or at least aided by how drugs can make people more open minded. By presenting difficult questions about how certain you are off your own faculties and ideas.' },
          { p: true, source: 'Drugs offered a very powerful reminder that your prejudices and biases are real. By showing this facet of your brain to you with such clarity it must be very hard to not feel a desire to challenge your assumptions. The visual aspect of the Psychedelia movement is equally a challenge to rules and norms. By rejecting order in favor of variety. Rarely do you get straight lines and clear directions. Colorful pallets and illustrations of people were also very common.' },
          { p: true, source: 'The movement was often inspired by Art Nouveau, Victoriana, Dada, and Pop Art. The "Fillmore Posters" were among the most notable of the time. Richly saturated colors in glaring contrast, elaborately ornate lettering, strongly symmetrical composition, collage elements, rubber-like distortions, and bizarre iconography are all hallmarks of the San Francisco psychedelic poster art style.' },
          { p: true, source: 'Psychedelic art was also applied to the LSD itself. LSD began to be put on blotter paper in the early 1970s and this gave rise to a specialized art form of decorating the blotter paper. Often the blotter paper was decorated with tiny insignia on each perforated square tab, but by the 1990s this had progressed to complete four color designs often involving an entire page of 900 or more tabs. Mark McCloud is a recognized authority on the history of LSD blotter art.' },
        ]
      },
      {
        font: "swiss",
        top: "top: 0px",
        title: "Swiss",
        date: "1940-1980",
        img: {
          main: {
            image: require("../assets/themes/swiss/Armin_Hofmannexample.jpg"),
            author: require("../assets/themes/swiss/Armin_Hofmann.jpg"),
            authorName: "Armin Hofmann",
          },
          sub: {
            image: require("../assets/themes/swiss/Josef_Müller-Brockmannexample.jpg"),
            author: require("../assets/themes/swiss/Josef_Müller-Brockmannpng.png"),
            authorName: "Josef Müller Brockmann",
          }
        },
        hook: [
          { highlight: false, tekst: 'Cleanliness and readability. Represent ' },
          { highlight: true, tekst: 'information ' },
          { highlight: false, tekst: 'objectively, free from the influence of associated ' },
          { highlight: true, tekst: 'meaning' }
        ],
        intro: 'A hundred million sentences fly around you. In a storm, in madness and chaos theres nothing to hold onto. All there is is uncertainty. Until you sit down. And take a breath and get to work. Grids will never fail you. Math is always true. By defining your environment by the power of the holy ruler, chaos will never again disturb your peace.',
        content: [
          { p: true, source: 'The Swiss Style is all about grids. Alight everything to a grid and do it using simple shapes. This form language was so successful that its also known as The International Typographic Style. The reason why its approachable as an international style is because it doesnt hijack the design with any particular voice.' },
          { p: true, source: 'It emphasizes cleanness, readability, and objectivity. The style emerged from a desire to represent information objectively, free from the influence of associated meaning. The International Typographic Style evolved as a modernist graphic movement that sought to convey messages clearly and in a universally straightforward manner.' },
          { p: true, source: 'Despite its association to Switzerland it first emerged in Russia, the Netherlands, and Germany in the 1920s. It was then developed further by designers in Switzerland during the 1950s which is how it came to get its name.' },
          { p: true, source: 'Hallmarks of the style are asymmetric layouts, use of a grid, sans-serif typefaces like Akzidenz Grotesk, and flush left, ragged right text. The style is also associated with a preference for photography in place of illustrations or drawings. Many of the early International Typographic Style works featured typography as a primary design element in addition to its use in text, and it is for this that the style is named.' },
          { p: true, source: 'Two major Swiss design schools are responsible for the early years of International Typographic Style. A graphic design technique based on grid-work that began in the 19th century became inspiration for modifying the foundational course at the Basel School of Design in 1908. Shortly thereafter, in 1918 Ernst Keller became a professor at the Kunstgewerbeschule Zürich and began developing a graphic design and typography course. ' },
          { p: true, source: 'He did not teach a specific style to his students, rather he taught a philosophy of style that dictated "the solution to the design problem should emerge from its content." Which is a strikingly Swiss way of approaching design. You will notice a similarity in this philosophy and the earlier Bauhaus mantra of “form follows function.” This idea of the solution to the design emerging from the problem itself can be seen as a reaction to previous artistic processes focused on "beauty for the sake of beauty" or "the creation of beauty as a purpose in and of itself."' }
        ]
      },
      {
        font: "Special Elite",
        top: "top: 0px",
        title: "Punk New Wave",
        date: "1970-1980",
        img: {
          main: {
            image: require("../assets/themes/punk/david-carsons-ray-gun.jpg"),
            author: require("../assets/themes/punk/DavidCarson.jpg"),
            authorName: "David Carson",
          },
          sub: {
            image: require("../assets/themes/punk/DavidCarsonexample.jpg"),
            author: require("../assets/themes/punk/DavidCarson.jpg"),
            authorName: "David Carson",
          }
        },
        hook: [
          { highlight: false, tekst: 'Dont confuse ' },
          { highlight: false, tekst: 'legibility ' },
          { highlight: false, tekst: 'with ' },
          { highlight: true, tekst: 'communication ' },
          { highlight: false, tekst: '- David Carson' }],
        intro: '“Its cheese! Its everywhere. Its in the store. Its on the news. Fucking cheese. Theres a conspiracy of dickwads fucking with my day. Planting cheese all around me. I found a slice of cheese in my pants. My pants!” Your therapist keeps their eye contact with you as she gives off a faint smile. “What I am hearing from you,” she breaks out after a short pause. “Is that the memory you associate with your ex is causing you pain.” ',
        content: [
          { p: true, source: 'The greatest thing ever said about design was said by David Carson, who is arguably the king of New Wave. “dont confuse legibility with communication” - David Carson. And with this simple quote he has essentially described the entire aesthetic of Punk New Wave. What you are communicating is not always the literal interpretation of your words directly. But a rather underlying feeling of what you are showing me.' },
          { p: true, source: 'Wolfgang Weingart is credited with developing New Wave typography in the early 1970s at the Basel School of Design, Switzerland. New Wave along with other postmodern typography styles, such as Punk and Psychedelia, arose as reactions to International Typographic Style or Swiss Style which was very popular with corporate culture.' },
          { p: true, source: 'International Typographic Style embodied the modernist aesthetic of minimalism, functionality, and logical universal standards.  While New Wave refers to an approach to typography that defies strict grid-based arrangement conventions. Characteristics include inconsistent letter spacing, varying type weights within single words and type set at non-right angles. Sans-serif font still predominates, but the New Wave differs from its predecessor by stretching the limits of legibility. The break from the grid structure meant that type could be set center, ragged left, ragged right, or chaotic.' },
          { p: true, source: 'The text hierarchy also strayed from the top down approach of the International Style. Text became texture as opposed to symbols conveying. Further breakdown of minimalist aesthetic is seen in the increase of the number of type sizes and colours of fonts. New Wave design was influenced by Punk and postmodern language theory. But there is a debate as to whether New Wave is a break or a natural progression of the Swiss Style.' },
          { p: true, source: 'Postmodernist aesthetic rebuked the less is more philosophy, by ascribing that typography can play a more expressive role and can include ornamentation to achieve this. The increase in expression aimed to improve communication.' },
          { p: true, source: 'Therefore, New Wave designers such as Weingart felt intuition was just as valuable as analytical skill in composition.' },
        ]
      },
      {
        font: "Press Start 2P",
        top: "top: 0px",
        title: "Flat",
        date: "2010 - Now",
        img: {
          main: {
            image: require("../assets/themes/flat/susankare_examples.jpg"),
            author: require("../assets/themes/flat/susanekareperson.jpg"),
            authorName: "Susane Kare",
          },
          sub: {
            image: require("../assets/themes/flat/stevejobs.jpeg"),
            author: require("../assets/themes/flat/susanekareperson.jpg"),
            authorName: "Susane Kare",
          }
        },
        hook: [
          { highlight: false, tekst: 'The ' },
          { highlight: true, tekst: 'dominating ' },
          { highlight: false, tekst: 'voice in user interfaces. The simple, readable and ' },
          { highlight: true, tekst: 'unprovoking' }
        ],
        intro: 'The tiny square box. No bigger than a shopping basket. Sits on your desk staring back at you as you lean in closer. The digital text on the screen seems to come out of nowhere. Not quite sure what good it will do you, but you cant help but be in awe. Theres a cultural energy that you have picked up from all your friends. Nobody understands the extent of it. But everyone knows that life will never be the same now that these “computers” can fit in your living room.',
        content: [
          { p: true, source: 'Flat design is a minimalist design language or design style commonly used in graphical user interfaces (GUI) (such as web applications and mobile apps). Today it dominates branding and the web in particular. It emphasizes minimalist use of simple elements, typography and flat colors. Designers may prefer flat design because it allows interface designs to be more streamlined and efficient. It is easier to quickly convey information while still looking visually appealing and approachable.' },
          { p: true, source: 'Additionally, it makes it easier to design an interface that is responsive to changes in browser size across different devices. With minimal design elements, websites are able to load faster and resize easily, and still look sharp on high-definition screens. As a design approach, it is often contrasted to skeuomorphism and rich design, although flat design can use skeuomorphs just as much as a realistically designed UI' },
          { p: true, source: 'Flat design is primarily influenced by Swiss Style and the styles emerging from Bauhaus. The Swiss style is often considered the most substantial influence on flat design, and its emergence and popularization during the 1950s and 1960s is regarded as the starting point of flat design, although it would not make an appearance in the digital world for some time thereafter.' },
          { p: true, source: 'In 2002, Microsoft released Windows Media Center, and in 2006, the Zune MP3 player, both of which contained elements of flat design. But the start of flat design goes much further back than this. As early as 1983 Susane Kare change the world of design when she came up with the quirky minimalist icons for the macintosh. Microsoft continued this style of design with the 2010 release of Windows Phone 7, which built on the flat design elements introduced with the Zune, formalized as the "Metro design language".' },
          { p: true, source: 'The design was dominated by large and bright shapes accompanied by sans-serif typography from the Segoe font family, flat images, and a menu with a grid-like pattern. Metro was subsequently adopted by all Microsoft software lines, including the Windows 8 PC operating system.' },
          { p: true, source: 'To this day flat design dominates logo branding and web.' },
        ]
      },
    ],
  },
  mutations: {
    titleChange(state, payload) {
      state.active = payload
    },

    modeChange(state, payload) {
      state.mode = payload
    },

    modeToggle(state) {
      state.mode = !state.mode
    },

    navToggle(state, payload) {
      state.nav = payload;
    },

    pushRef(state, payload) {
      state.itemRefs.push(payload);
    },
    resetRef(state) {
      state.itemRefs = []
    },

    pushGate(state, payload) {
      state.gsap_gates.push(payload)
    },
  },
  actions: {
    artickleClicked(context, { el, toggle }) {
      let title = el.getAttribute("id");

      if (!toggle) {
        context.dispatch("_gsapScroll", { el: el, time: 2 });
        context.commit("titleChange", title);
      } else {
        context.commit("modeToggle");
        context.dispatch("_interval", el);
      }

    },

    _interval(context, el) {
      let title = el.getAttribute("id");
      var interval = setInterval(function () {
        context.commit("titleChange", title);
        context.dispatch("_gsapScroll", { el: el, time: 0.01 });
      }, 0.0000001);
      setTimeout(() => {
        clearInterval(interval);
        context.dispatch("_resetGSAP", title);
      }, 2000);
    },

    _gsapScroll(context, { el, time }) {
      gsap.to(window, {
        duration: time,
        scrollTo: { y: el, offsetY: 400, autoKill: false },
        ease: true,
      });
    },

    _resetGSAP(context, target) {
      //Kill triggers
      context.dispatch("_killTrigger", "letterHighlight");
      context.dispatch("_killTrigger", "navToggle");
      context.dispatch("_killTrigger", "gate");
      context.dispatch("_killTrigger", "eye");
      context.commit("resetRef");

      //Make sure the right target is on
      if (target) {
        context.commit("titleChange", target);
      }
    },

    _resetGate() {
      //this should be deleted
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bugFix",
          start: "top 20%",
          end: "1200% top",
          toggleActions: "restart none reverse none",
          pin: true,
          scrub: true,
          id: "gate",
        },
      });

      tl.from(".test", {
        scale: "5",
      });
    },

    _resetGates(context) {
      context.dispatch("_killTrigger", "gate");
    },

    _setGate(context, gate) {
      let enter = gate.enter;
      let name = gate.name;
      let trigger = gate.trigger;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "." + trigger,
          start: "top 20%",
          end: "1200% top",
          toggleActions: "restart none reverse none",
          pin: true,
          scrub: true,
          id: "gate",
        },
      });

      if (enter) {
        tl.to("." + name, {
          scale: "30",
          ease: ExpoScaleEase.config(0.5, 3, Power2.easeInOut),
        });
      } else {
        tl.from("." + name, {
          scale: "30",
        });
      }

    },

    _setGSAP_highlight(context) {
      console.log("Nav Init");
      //For the menu letter highlight on scroll
      context.state.itemRefs.forEach((el) => {
        gsap.from(el.querySelector(".box"), {
          scrollTrigger: {
            id: "letterHighlight",
            trigger: el,
            start: "top center",
            end: "bottom center",
            onEnter: (self) =>
              context.commit(
                "titleChange",
                self.trigger.getAttribute("id")
              ),
            onEnterBack: (self) =>
              context.commit(
                "titleChange",
                self.trigger.getAttribute("id")
              ),
          },
          ease: "none",
        });
      });
    },

    _setGSAP_nav(context) {
      //Showing nav when artickles in view
      gsap.from(".artickles", {
        scrollTrigger: {
          id: "navToggle",
          trigger: ".artickles",
          start: "top center",
          end: "bottom center",
          onEnter: () => (context.commit("navToggle", true)),
          onLeaveBack: () => (context.commit("navToggle", false)),
          onLeave: () => (context.commit("navToggle", false)),
          onEnterBack: () => (context.commit("navToggle", true)),
        },
        ease: "none",
      });
    },

    _killTrigger(context, trigger) {
      let getGroup = ScrollTrigger.getAll();

      let scrollMenuGroup = (group) =>
        getGroup.filter((p) => p.vars.id === group);

      scrollMenuGroup(trigger).forEach((t) => {
        t.refresh();
      });
    },

    __printTriggers(context, id) {
      let getGroup = ScrollTrigger.getAll();

      let scrollMenuGroup = (group) =>
        getGroup.filter((p) => p.vars.id === group);

      let array = scrollMenuGroup(id)

      array.forEach((item) => {
        console.log(item.vars);
      });
    }

  }
})
