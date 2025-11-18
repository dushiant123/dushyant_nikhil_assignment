export type Level = {
  id: string;
  title: string;
  short_description: string;
  full_content: string;
  images: string[];
  estimated_time: string;
};

export const allLevels: Level[] = [
  {
    id: '1',
    title: 'Who Are the Cobra Gypsies?',
    short_description: 'Introduction to the Kalbeliya community, their identity, and lifestyle.',
    full_content: `The Cobra Gypsies, more accurately known as the Kalbeliya community, are a nomadic tribal group from Rajasthan. They earned this name because for generations, their lives revolved around the handling, rescuing, and performing with snakes, especially cobras. Traditionally, they wandered from village to village, carrying their homes on camel carts, performing music, dance, and snake-charming.
    
Unlike settled communities, Kalbeliyas lived on the outer fringes of towns, setting up temporary camps wherever work was available. Their identity is deeply connected to nature: the desert, snakes, herbal medicines, and storytelling. Though modern laws have restricted snake-charming, their cultural heritage—music, dance, craftsmanship—continues to thrive. This level helps the learner understand the core idea: the Kalbeliya people are not just performers—they are a community with a history, a belief system, and a deep sense of pride in their traditions.`,
    images: ['level1_portrait'],
    estimated_time: '5 min',
  },
  {
    id: '2',
    title: 'Origins & Nomadic History',
    short_description: 'How the tribe began, their migration patterns, and why they lived as nomads.',
    full_content: `Kalbeliya origin stories mix legend and history. They trace their ancestry to the Nath yogis, a group associated with alchemy, meditation, and healing. Over centuries, they became desert wanderers who specialized in snake-catching, herbal remedies, and entertainment.

Their nomadic lifestyle developed for two reasons:
1. No fixed land ownership in earlier centuries.
2. Mobility was essential to finding work—performing, trading herbs, catching snakes, and selling natural remedies.

They traveled in groups, following seasonal patterns: monsoons for hunting reptiles, winters for festival performances, summers for long-distance migration. Their map of Rajasthan was oral—passed from elder to youth—remembering wells, safe stopping points, temples, and friendly villages. Today, some families are semi-settled but the spirit of movement remains central to their cultural identity.`,
    images: ['level2_history'],
    estimated_time: '6 min',
  },
    {
    id: '3',
    title: 'Kalbeliya Dance: The Snake Dance',
    short_description: 'Their world-famous dance form and its connection to the cobra.',
    full_content: `Kalbeliya Dance is one of Rajasthan’s most iconic performing arts. The dancers mimic the movements of a serpent—gliding steps, spirals, bends, sudden turns—all performed with incredible grace and stamina. The dance is fast, energetic, and mesmerizing, often performed at weddings, fairs, and festivals.

Women are the dancers, wearing stunning black, red, and silver costumes. The swirling skirts, mirror work, and flowing veils mirror the snake’s elegance. Men provide music using traditional instruments like the 'been', an ancient wind instrument once used to charm snakes. In 2010, UNESCO recognized Kalbeliya dance as part of the Intangible Cultural Heritage of Humanity.`,
    images: ['level3_dance'],
    estimated_time: '5 min',
  },
  {
    id: '4',
    title: 'Snake Charming Tradition',
    short_description: 'Why they worked with snakes and how the craft was learned.',
    full_content: `Snake-handling was once the core identity of the Kalbeliya people. Children learned from childhood how to identify snakes, rescue them from villages, treat bites, and safely charm them. The act of “snake-charming” was less magic and more deep knowledge of snake behavior. Kalbeliyas treated snakebites using natural herbs. They released captured snakes back into the wild after several days—harming snakes was against their beliefs. After wildlife protection laws banned the use of snakes, the community adapted. The performance element shifted from actual snakes to dance, music, and storytelling, preserving their heritage while respecting modern conservation.`,
    images: ['level4_snake'],
    estimated_time: '6 min',
  },
  {
    id: '5',
    title: 'Clothing & Costume Symbolism',
    short_description: 'Why Kalbeliya women wear black and what their dresses signify.',
    full_content: `Kalbeliya costumes are visually striking—black lehenga-cholis decorated with bright borders, mirror work, and intricate threads. Black is symbolic of the cobra’s skin, while the flowing skirt reflects its swaying body. The small mirrors represent the desert sun and provide protection from evil energies. Men wear turbans and loose dhotis, often in bright colors that symbolize the joy of desert festivities. These costumes play a crucial role in their identity and performance culture. Even today, young girls learn embroidery and costume-making from their mothers.`,
    images: ['level5_costume'],
    estimated_time: '4 min',
  },
  {
    id: '6',
    title: 'Instruments of the Kalbeliya',
    short_description: 'Traditional musical instruments used in performances.',
    full_content: `Music is inseparable from Kalbeliya life. Their traditional instruments include:
- **Been (Pungi):** a wind instrument made of gourd and bamboo; symbolic of snake-charming.
- **Khanjari (Dafli):** a small frame drum used to maintain rhythm.
- **Dholak:** two-headed drum adding depth and energy.
- **Morchang:** a jaw harp creating a trance-like sound.
Music builds rhythm for dancers and reflects the tribe’s connection to nature through buzzing, swaying, and serpentine melodic patterns.`,
    images: ['level6_instruments'],
    estimated_time: '4 min',
  },
  {
    id: '7',
    title: 'Daily Life in a Kalbeliya Camp',
    short_description: 'How they lived, cooked, traveled, and socialized.',
    full_content: `Traditional Kalbeliya camps were simple: tents made from recycled cloth, wooden poles, and camel hide. Families cooked over open fires, storing essentials in clay pots and metal trunks. Days were spent practicing music, weaving, preparing herbal medicines, or doing casual labor. Children played with handmade toys created from cloth scraps, wood, or mud. The community valued storytelling in the evenings—passing down history through songs, riddles, and ancestral tales.`,
    images: ['level7_camp'],
    estimated_time: '5 min',
  },
  {
    id: '8',
    title: 'Oral Traditions & Storytelling',
    short_description: 'Kalbeliya folklore and its importance.',
    full_content: `Kalbeliya culture is primarily oral, not written. Their stories revolve around serpent deities, brave ancestors, desert spirits, and lessons about survival. Folk songs describe love, loss, journeys, and the harsh beauty of the Thar Desert. Storytelling preserves identity, especially because the tribe historically lacked formal schooling. Their oral tradition is one reason their culture remains vibrant even without written records.`,
    images: ['level8_storytelling'],
    estimated_time: '5 min',
  },
  {
    id: '9',
    title: 'Role of Women',
    short_description: 'Women as cultural carriers and economic contributors.',
    full_content: `Women are central to Kalbeliya culture. They are the dancers, singers, costume makers, and caretakers of traditional knowledge. Their dance is the tribe’s most recognized art form. They also maintain social bonds, conduct rituals, and contribute to income through performances. In the modern era, many Kalbeliya women have emerged as global performers, teaching their dance in countries around the world.`,
    images: ['level9_women'],
    estimated_time: '4 min',
  },
  {
    id: '10',
    title: 'Role of Men',
    short_description: 'Musicians, craftsmen, and traditional healers.',
    full_content: `Men traditionally played the been, dholak, and morchang. They were also snake handlers, herbalists, and scout leaders who planned travel routes. Men handled negotiations with village heads, arranged performances, and taught young boys skills necessary for desert life.`,
    images: ['level10_men'],
    estimated_time: '4 min',
  },
  {
    id: '11',
    title: 'Kalbeliya Architecture',
    short_description: 'How they built their temporary homes.',
    full_content: `Kalbeliya shelters are light, portable, and adapted to desert extremes. They use bamboo sticks, cloth sheets, jute ropes, and plastic tarps. These structures can be assembled in under an hour—perfect for nomadic movement. Inside, they maintain a central cooking area and bedding placed on rugs.`,
    images: ['level11_architecture'],
    estimated_time: '3 min',
  },
  {
    id: '12',
    title: 'Festivals & Rituals',
    short_description: 'Major celebrations and spiritual beliefs.',
    full_content: `Kalbeliyas celebrate major Rajasthani festivals like Teej, Gangaur, and Holi, as well as various desert fairs. Music and dance form the core of every festival—performances run late into the night under lantern light. They also worship serpent deities, especially Nag Devta, and conduct rituals seeking protection from dangers during travel.`,
    images: ['level12_festival'],
    estimated_time: '4 min',
  },
  {
    id: '13',
    title: 'Migration Patterns',
    short_description: 'Seasonal movement through Rajasthan.',
    full_content: `Their migration followed practical needs: water availability, nearby villages needing performances, and seasonal weather. Routes passed through major centers like Pushkar, Jodhpur, Ajmer, and Jaisalmer, as well as countless small rural hamlets. These journeys could last months, shaping their worldview and social networks across the vast desert landscape.`,
    images: ['level13_migration'],
    estimated_time: '4 min',
  },
  {
    id: '14',
    title: 'Social Structure',
    short_description: 'How decisions are made inside the tribe.',
    full_content: `Kalbeliyas have an informal yet respected social system led by elders. Decisions about marriage, travel, disputes, and performances are discussed within the community. Respect for age and experience is essential. They value individual freedom yet maintain strong communal bonds that help them survive the harsh realities of desert life.`,
    images: ['level14_social'],
    estimated_time: '4 min',
  },
  {
    id: '15',
    title: 'Crafts & Handwork',
    short_description: 'Artistic skills: embroidery, jewelry, instruments.',
    full_content: `Women create the stunningly embroidered skirts and mirror-work blouses that are hallmarks of their culture. They also craft anklets and bangles. Men are skilled in crafting musical instruments out of gourds, metal, and wood. Many families also produce small wooden toys, handmade jewelry, and decorative items sold at local markets and fairs.`,
    images: ['level15_crafts'],
    estimated_time: '4 min',
  },
  {
    id: '16',
    title: 'Relationship With Snakes',
    short_description: 'Respectful coexistence, myths, and beliefs.',
    full_content: `Kalbeliyas believe harming snakes brings misfortune. They consider snakes sacred beings capable of both harm and blessing. Their songs tell stories of snake goddesses, shape-shifting serpents, and desert protectors. This ancient, respectful bond shaped their entire livelihood before modern restrictions were put in place.`,
    images: ['level16_respect'],
    estimated_time: '4 min',
  },
  {
    id: '17',
    title: 'Survival Challenges',
    short_description: 'Life in the desert and struggles after snake-handling bans.',
    full_content: `After snake-charming became illegal with the Wildlife Protection Act of 1972, the tribe faced severe economic hardship. Many lacked formal education, land rights, and stable jobs, making the transition difficult. They adapted by focusing more on their music and dance, becoming performers, artisans, and laborers. Despite these hardships, their resilience helped them preserve their cultural identity.`,
    images: ['level17_challenges'],
    estimated_time: '5 min',
  },
  {
    id: '18',
    title: 'Modern Adaptations',
    short_description: 'How the tribe changed in the 21st century.',
    full_content: `Some Kalbeliyas now live in semi-permanent settlements near cities. Children are increasingly attending local schools, and women have found global fame as performers and dance teachers. NGOs and government initiatives now work to support their education and provide recognition for their craft. Social media has also boosted their popularity, helping them earn a more sustainable income from dance workshops and international performances.`,
    images: ['level18_modern'],
    estimated_time: '5 min',
  },
  {
    id: '19',
    title: 'Representation in Media & Tourism',
    short_description: 'How Kalbeliya culture is shown to the world.',
    full_content: `Tourists visiting Rajasthan often see Kalbeliya dancers performing at forts, hotels, and festivals. Documentaries and travel shows frequently feature their mesmerizing performances and nomadic lifestyle. While tourism brings vital income, it also risks oversimplifying their rich cultural identity into a simple entertainment act. This platform aims to provide a deeper, more respectful narrative.`,
    images: ['level19_tourism'],
    estimated_time: '4 min',
  },
  {
    id: '20',
    title: 'Future of Kalbeliya Culture',
    short_description: 'Preservation, innovation, and challenges ahead.',
    full_content: `The future of the Cobra Gypsies depends on balancing their unique heritage with modern opportunities. The younger generation seeks education, stable careers, and social dignity, while also striving to protect their artistic legacy. Their dance is now a global phenomenon, but their community traditions—the stories, music, and social fabric—must be preserved through documentation, education, and continued cultural respect. Culture is alive, evolving, and deserves our protection.`,
    images: ['level20_future'],
    estimated_time: '5 min',
  },
];
