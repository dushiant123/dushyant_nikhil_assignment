export type Question = {
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
};

export const quizData: Record<string, Question[]> = {
  '1': [
    {
      question: "What is the more accurate name for the 'Cobra Gypsies'?",
      options: ["Rajasthani Dancers", "Nath Yogis", "Kalbeliya", "Thar Nomads"],
      correctOptionIndex: 2,
      explanation: "The community is officially known as the Kalbeliya. 'Cobra Gypsies' is a name they earned due to their traditional occupation of snake-charming.",
      difficulty: 'Easy'
    },
    {
      question: "Which of these is NOT a core part of traditional Kalbeliya identity?",
      options: ["Snake-charming", "Farming", "Music and Dance", "Herbal medicines"],
      correctOptionIndex: 1,
      explanation: "Kalbeliyas were traditionally nomadic and did not own land for farming. Their lifestyle was based on performance, trading, and knowledge of nature.",
      difficulty: 'Easy'
    },
    {
      question: "What modern development has impacted the Kalbeliya's tradition of snake-charming?",
      options: ["A lack of interest from younger generations", "The introduction of modern laws for wildlife protection", "A decline in the snake population", "Competition from other performers"],
      correctOptionIndex: 1,
      explanation: "Modern wildlife protection laws have restricted the traditional practice of snake-charming, forcing the community to adapt.",
      difficulty: 'Medium'
    }
  ],
  '2': [
    {
        question: "To which group do the Kalbeliya trace their ancestry?",
        options: ["Rajput warriors", "Mughal courtiers", "Nath yogis", "British traders"],
        correctOptionIndex: 2,
        explanation: "They trace their lineage to the Nath yogis, who were known for their spiritual practices, alchemy, and healing arts.",
        difficulty: "Medium"
    },
    {
        question: "What was the primary reason for the Kalbeliya's nomadic lifestyle?",
        options: ["To avoid taxes", "Religious pilgrimage", "Mobility for work and trade", "To explore new lands"],
        correctOptionIndex: 2,
        explanation: "Their nomadic life was a practical necessity, allowing them to find work performing, trading herbs, and offering their services as snake-catchers across different regions.",
        difficulty: "Easy"
    },
    {
        question: "How was the Kalbeliya's 'map' of Rajasthan passed down?",
        options: ["Through written scrolls", "It was given to them by kings", "It was an oral tradition passed from elder to youth", "They used the stars to navigate"],
        correctOptionIndex: 2,
        explanation: "Their map of wells, safe stopping points, and friendly villages was oral, not written, and passed down through generations.",
        difficulty: "Medium"
    }
  ],
  '3': [
    {
        question: "The Kalbeliya dance movements are inspired by what?",
        options: ["A peacock", "A camel", "A serpent", "The desert wind"],
        correctOptionIndex: 2,
        explanation: "The dance mimics the fluid and graceful movements of a serpent, with dancers performing gliding steps, spirals, and bends.",
        difficulty: "Easy"
    },
    {
        question: "In what year did UNESCO recognize the Kalbeliya dance as an Intangible Cultural Heritage of Humanity?",
        options: ["1999", "2005", "2010", "2015"],
        correctOptionIndex: 2,
        explanation: "The Kalbeliya folk songs and dance were inscribed on UNESCO's list in 2010, acknowledging their cultural significance.",
        difficulty: "Hard"
    },
    {
      question: "Who traditionally performs the Kalbeliya dance?",
      options: ["Men", "Women", "Children", "Elders only"],
      correctOptionIndex: 1,
      explanation: "Women are the dancers in the Kalbeliya tradition, wearing stunning black, red, and silver costumes, while men typically provide the music.",
      difficulty: "Easy"
    }
  ],
  '4': [
      {
          question: "What was the Kalbeliya belief regarding harming snakes?",
          options: ["It brought good luck", "It was a necessary ritual", "It was against their beliefs and brought misfortune", "It had no significance"],
          correctOptionIndex: 2,
          explanation: "Kalbeliyas believed harming snakes was against their beliefs and would bring misfortune. They treated snakes with respect.",
          difficulty: "Easy"
      },
      {
          question: "How did the Kalbeliya community adapt after wildlife protection laws banned the use of snakes?",
          options: ["They stopped performing altogether", "They shifted focus to dance, music, and storytelling", "They moved to cities to find factory work", "They began farming"],
          correctOptionIndex: 1,
          explanation: "After the ban, the community adapted by shifting the performance element from actual snakes to their rich traditions of dance and music.",
          difficulty: "Medium"
      },
      {
        question: "The act of 'snake-charming' was mostly based on what?",
        options: ["Magic spells", "A deep knowledge of snake behavior", "Loud noises to scare the snake", "Using bait to attract the snake"],
        correctOptionIndex: 1,
        explanation: "Snake-charming was less about magic and more about a deep, learned understanding of a snake's behavior, allowing them to handle the animals safely.",
        difficulty: "Medium"
      }
  ],
  '5': [
      {
          question: "What does the black color of the Kalbeliya women's costumes symbolize?",
          options: ["The night sky", "Mourning", "The cobra's skin", "The desert sand"],
          correctOptionIndex: 2,
          explanation: "The black color is symbolic of a cobra's skin, reflecting the tribe's deep connection to snakes.",
          difficulty: "Easy"
      },
      {
          question: "What is the purpose of the small mirrors on Kalbeliya dresses?",
          options: ["To reflect sunlight and keep cool", "Purely for decoration", "To provide protection from evil energies", "To signal other dancers"],
          correctOptionIndex: 2,
          explanation: "The mirrors are believed to provide protection from evil energies, in addition to representing the desert sun.",
          difficulty: "Medium"
      },
      {
        question: "Who traditionally teaches young girls how to create the intricate costumes?",
        options: ["A village master", "Their fathers", "Their mothers", "They learn from books"],
        correctOptionIndex: 2,
        explanation: "The skill of embroidery and costume-making is passed down from mothers to their daughters.",
        difficulty: "Easy"
      }
  ],
  '6': [
      {
          question: "Which instrument is most symbolic of the snake-charming tradition?",
          options: ["Dholak", "Morchang", "Khanjari", "Been (Pungi)"],
          correctOptionIndex: 3,
          explanation: "The Been, or Pungi, is the iconic wind instrument made from a gourd that was famously used to 'charm' snakes.",
          difficulty: "Easy"
      },
      {
          question: "What is a Morchang?",
          options: ["A large drum", "A type of flute", "A jaw harp", "A stringed instrument"],
          correctOptionIndex: 2,
          explanation: "The Morchang is a jaw harp that creates a distinctive, trance-like sound in Kalbeliya music.",
          difficulty: "Hard"
      },
      {
        question: "Which instrument is a two-headed drum that adds depth and energy to the music?",
        options: ["Been", "Khanjari", "Dholak", "Morchang"],
        correctOptionIndex: 2,
        explanation: "The Dholak is a two-headed drum that provides a powerful, energetic rhythm for the performances.",
        difficulty: "Medium"
      }
  ],
  '7': [
      {
          question: "How were Kalbeliya history and traditions passed down through generations?",
          options: ["Through written scriptures", "Through formal schooling", "Through evening storytelling, songs, and riddles", "Through stone carvings"],
          correctOptionIndex: 2,
          explanation: "As a community with a primarily oral tradition, storytelling in the evenings was the essential way of passing down their history and cultural knowledge.",
          difficulty: "Easy"
      },
      {
        question: "What were the tents in a traditional Kalbeliya camp typically made from?",
        options: ["Bricks and mortar", "Animal skins only", "Recycled cloth, wooden poles, and camel hide", "Carved stone"],
        correctOptionIndex: 2,
        explanation: "Their shelters were simple and portable, made from materials like recycled cloth, wooden poles, and camel hide to suit their nomadic lifestyle.",
        difficulty: "Medium"
      },
      {
        question: "What activity was central to evenings in a Kalbeliya camp?",
        options: ["Trading goods", "Formal worship", "Storytelling", "Practicing dance"],
        correctOptionIndex: 2,
        explanation: "Evenings were a time for community bonding through storytelling, which was the primary method of passing down their history, songs, and ancestral tales.",
        difficulty: "Easy"
      }
  ],
  '8': [
      {
          question: "Why is the oral tradition so important to Kalbeliya culture?",
          options: ["They preferred speaking to writing", "It preserved their identity without formal schooling", "It was required by their religion", "It made their performances more dramatic"],
          correctOptionIndex: 1,
          explanation: "Because the tribe historically lacked formal schooling and written records, their oral traditions were vital for preserving their identity, history, and culture.",
          difficulty: "Medium"
      },
      {
        question: "Which of the following is a common theme in Kalbeliya folk songs?",
        options: ["Stories of kings and queens", "The harsh beauty of the Thar Desert", "Tales of sea voyages", "Urban city life"],
        correctOptionIndex: 1,
        explanation: "Their folk songs often describe themes relevant to their lives, including love, loss, journeys, and the beautiful but harsh desert environment.",
        difficulty: "Easy"
      },
      {
        question: "Kalbeliya folklore often revolves around which figures?",
        options: ["Gods of war", "Famous politicians", "Serpent deities and desert spirits", "Merchants and traders"],
        correctOptionIndex: 2,
        explanation: "Their stories are deeply connected to their environment and beliefs, often featuring serpent deities, desert spirits, and tales of their ancestors.",
        difficulty: "Medium"
      }
  ],
  '9': [
      {
          question: "What is the most globally recognized role of women in Kalbeliya culture?",
          options: ["Healers", "Musicians", "Dancers", "Storytellers"],
          correctOptionIndex: 2,
          explanation: "Kalbeliya women are world-renowned as the dancers of the famous 'snake dance', making it their most recognized cultural contribution.",
          difficulty: "Easy"
      },
      {
        question: "Besides performance, what is another significant role of women in the community?",
        options: ["Hunting", "Leading migrations", "Caretakers of traditional knowledge", "Blacksmithing"],
        correctOptionIndex: 2,
        explanation: "Women are crucial as the caretakers of traditional knowledge, passing down skills like costume-making and rituals to the next generation.",
        difficulty: "Medium"
      },
      {
        question: "How have many Kalbeliya women adapted their roles in the modern era?",
        options: ["They have stopped dancing", "They have become global performers and teachers", "They have taken up farming", "They have isolated themselves from outsiders"],
        correctOptionIndex: 1,
        explanation: "In the modern era, many women have expanded their roles by becoming teachers and performers on a global stage, sharing their culture worldwide.",
        difficulty: "Medium"
      }
  ],
  '10': [
      {
          question: "Besides playing music, what was another traditional role for Kalbeliya men?",
          options: ["Weaving textiles", "Cooking for the community", "Herbalists and snake handlers", "Making pottery"],
          correctOptionIndex: 2,
          explanation: "Men were the traditional snake handlers and also possessed knowledge of herbal remedies, which they used for treating snakebites and other ailments.",
          difficulty: "Medium"
      },
      {
        question: "Which instrument was NOT traditionally played by men?",
        options: ["Been (Pungi)", "The swirling skirts", "Dholak", "Morchang"],
        correctOptionIndex: 1,
        explanation: "The swirling skirts are part of the women's dance costume, not a musical instrument played by men.",
        difficulty: "Easy"
      },
      {
        question: "What responsibility did men have regarding travel?",
        options: ["Choosing the dance costumes", "Cooking the meals for the journey", "Planning travel routes as scout leaders", "Predicting the weather"],
        correctOptionIndex: 2,
        explanation: "Men often acted as scout leaders, using their knowledge to plan the safest and most practical migration routes for the community.",
        difficulty: "Medium"
      }
  ],
  '11': [
      {
          question: "What feature was most important for Kalbeliya architecture?",
          options: ["Durability and permanence", "Elaborate decoration", "Portability and ease of assembly", "Resistance to fire"],
          correctOptionIndex: 2,
          explanation: "As nomads, their shelters had to be light, portable, and quick to assemble or disassemble, making portability the key feature.",
          difficulty: "Easy"
      },
      {
        question: "How quickly could a traditional Kalbeliya shelter be assembled?",
        options: ["In one week", "In one day", "In under an hour", "It took several days"],
        correctOptionIndex: 2,
        explanation: "Their shelters were designed for rapid setup, often being assembled in under an hour to suit their mobile lifestyle.",
        difficulty: "Medium"
      },
      {
        question: "Which material is NOT typically used in a traditional Kalbeliya shelter?",
        options: ["Bamboo sticks", "Jute ropes", "Fired bricks", "Cloth sheets"],
        correctOptionIndex: 2,
        explanation: "Fired bricks are heavy and permanent, which is contrary to the needs of a nomadic shelter. They used light, portable materials.",
        difficulty: "Easy"
      }
  ],
  '12': [
      {
          question: "Who is the primary deity worshipped by the Kalbeliyas for protection?",
          options: ["Ganesh", "Shiva", "Nag Devta (Serpent God)", "Lakshmi"],
          correctOptionIndex: 2,
          explanation: "Given their close relationship with snakes, the Kalbeliyas worship Nag Devta, the serpent deity, seeking protection from dangers.",
          difficulty: "Easy"
      },
      {
        question: "Which of these is a major Rajasthani festival celebrated by the Kalbeliya?",
        options: ["Diwali", "Holi", "Christmas", "Eid"],
        correctOptionIndex: 1,
        explanation: "Kalbeliyas celebrate major local festivals of Rajasthan, such as Holi, Teej, and Gangaur, with their own unique musical and dance-filled traditions.",
        difficulty: "Easy"
      },
      {
        question: "What forms the core of every Kalbeliya festival?",
        options: ["Silent meditation", "Formal speeches", "Music and dance", "Archery competitions"],
        correctOptionIndex: 2,
        explanation: "Music and dance are inseparable from Kalbeliya life and form the heart of all their celebrations and rituals.",
        difficulty: "Easy"
      }
  ],
  '13': [
      {
          question: "What primarily dictated the migration patterns of the Kalbeliya?",
          options: ["Astrological signs", "The direction of the wind", "Practical needs like water and work", "Following herds of animals"],
          correctOptionIndex: 2,
          explanation: "Their movements were not random but followed practical considerations like the availability of water, seasonal weather, and opportunities for performances.",
          difficulty: "Medium"
      },
      {
        question: "Which of these was a major center on their migration routes?",
        options: ["Delhi", "Mumbai", "Pushkar", "Kolkata"],
        correctOptionIndex: 2,
        explanation: "Their routes passed through major cultural and trade centers in Rajasthan, including Pushkar, Jodhpur, and Ajmer.",
        difficulty: "Medium"
      },
      {
        question: "How long could a single migration journey last for a Kalbeliya group?",
        options: ["A few hours", "One week", "Several months", "They never traveled for more than a day"],
        correctOptionIndex: 2,
        explanation: "These journeys were extensive and could last for months, shaping their social networks and worldview across the vast desert.",
        difficulty: "Hard"
      }
  ],
  '14': [
      {
          question: "How are major decisions made within the Kalbeliya community?",
          options: ["By a single, elected chief", "Through a formal voting process", "By community discussion led by elders", "By consulting an oracle"],
          correctOptionIndex: 2,
          explanation: "The social system is informal, with respected elders leading community discussions to make decisions on important matters.",
          difficulty: "Easy"
      },
      {
        question: "What two values are balanced in the Kalbeliya social structure?",
        options: ["Wealth and poverty", "Individual freedom and communal bonds", "Aggression and passivity", "Strict rules and total chaos"],
        correctOptionIndex: 1,
        explanation: "They value a high degree of individual freedom while also maintaining the strong communal bonds necessary for survival.",
        difficulty: "Medium"
      },
      {
        question: "What is essential for an individual to have influence in the community?",
        options: ["Great wealth", "The most beautiful costume", "Respect for age and experience", "The loudest singing voice"],
        correctOptionIndex: 2,
        explanation: "The social structure is based on a gerontocracy of sorts, where respect for one's elders and their experience is paramount.",
        difficulty: "Easy"
      }
  ],
  '15': [
      {
          question: "Who is primarily responsible for creating the iconic embroidered costumes?",
          options: ["Men", "A specialized group of artisans", "Women", "They are bought from markets"],
          correctOptionIndex: 2,
          explanation: "Kalbeliya women are responsible for crafting the stunningly embroidered and mirror-worked costumes that are a hallmark of their culture.",
          difficulty: "Easy"
      },
      {
        question: "What is a craft that Kalbeliya men are skilled in?",
        options: ["Pottery", "Weaving rugs", "Crafting musical instruments", "Glass blowing"],
        correctOptionIndex: 2,
        explanation: "Men are skilled in crafting their traditional musical instruments, such as the been and morchang, from natural materials like gourds, metal, and wood.",
        difficulty: "Medium"
      },
      {
        question: "Where might Kalbeliya families sell their handmade crafts?",
        options: ["In large shopping malls", "Exclusively online", "At local markets and fairs", "Only to other tribe members"],
        correctOptionIndex: 2,
        explanation: "They traditionally sell their crafts, such as toys and jewelry, at local markets and fairs to earn income.",
        difficulty: "Easy"
      }
  ],
  '16': [
      {
          question: "What did the Kalbeliyas believe about their relationship with snakes?",
          options: ["They were pests to be exterminated", "They were sacred beings to be respected", "They were a source of food", "They were unintelligent creatures"],
          correctOptionIndex: 1,
          explanation: "The Kalbeliyas held a deep, respectful bond with snakes, viewing them as sacred beings. Harming a snake was thought to bring misfortune.",
          difficulty: "Easy"
      },
      {
        question: "What kind of stories do Kalbeliya songs tell about snakes?",
        options: ["How to cook them", "How to avoid them", "Stories of snake goddesses and shape-shifting serpents", "That they are evil spirits"],
        correctOptionIndex: 2,
        explanation: "Their oral tradition is filled with myths and legends that personify snakes as sacred beings, including tales of snake goddesses and magical serpents.",
        difficulty: "Medium"
      },
      {
        question: "The Kalbeliya's bond with snakes shaped their entire ______ before modern laws.",
        options: ["Religion", "Diet", "Livelihood", "Architecture"],
        correctOptionIndex: 2,
        explanation: "Their entire livelihood—based on snake-charming, rescue, and knowledge—was built around their ancient, respectful relationship with snakes.",
        difficulty: "Medium"
      }
  ],
  '17': [
      {
          question: "What major event caused severe economic hardship for the Kalbeliya community?",
          options: ["A severe drought", "The Wildlife Protection Act of 1972", "The decline of royal patronage", "A conflict with other tribes"],
          correctOptionIndex: 1,
          explanation: "The Wildlife Protection Act of 1972 banned snake-charming, their traditional livelihood, which led to significant economic challenges for the community.",
          difficulty: "Medium"
      },
      {
        question: "What did the community primarily focus on after the ban on snake-handling?",
        options: ["Farming and agriculture", "Their music and dance", "Moving to big cities for office jobs", "They did not adapt"],
        correctOptionIndex: 1,
        explanation: "Faced with hardship, they adapted by focusing more intensely on their rich traditions of music and dance, turning them into their primary source of income.",
        difficulty: "Easy"
      },
      {
        question: "What personal disadvantages made the transition difficult for many Kalbeliyas?",
        options: ["They were not skilled artisans", "They lacked formal education and land rights", "They did not know how to travel", "They were unwilling to change"],
        correctOptionIndex: 1,
        explanation: "The transition away from snake-charming was made harder because many in the community lacked formal education, stable jobs, or land ownership.",
        difficulty: "Hard"
      }
  ],
  '18': [
      {
          question: "How have Kalbeliya women adapted to the modern world?",
          options: ["By abandoning their culture", "By becoming farmers", "By gaining global fame as performers and dance teachers", "By refusing to leave their traditional camps"],
          correctOptionIndex: 2,
          explanation: "Many Kalbeliya women have adapted by leveraging their unique cultural skills, becoming internationally recognized performers and teachers of their dance form.",
          difficulty: "Easy"
      },
      {
        question: "What is one sign of modern adaptation in the Kalbeliya community?",
        options: ["They no longer perform music", "Children are increasingly attending local schools", "They have forgotten their oral traditions", "They only live in the deep desert"],
        correctOptionIndex: 1,
        explanation: "A key modern adaptation is that children are increasingly attending school, which provides new opportunities but also challenges the preservation of traditional lifestyles.",
        difficulty: "Medium"
      },
      {
        question: "What has helped boost the popularity and income of Kalbeliya performers recently?",
        options: ["Government-mandated performances", "Social media and international workshops", "The discovery of ancient texts", "A renewed interest in snake-charming"],
        correctOptionIndex: 1,
        explanation: "Social media has played a significant role in boosting their global popularity, leading to more sustainable income from dance workshops and performances.",
        difficulty: "Medium"
      }
  ],
  '19': [
      {
          question: "What is a potential risk of the Kalbeliya culture's representation in tourism?",
          options: ["It makes no money for the community", "It is not popular with tourists", "It risks oversimplifying their culture into just entertainment", "It is too difficult for tourists to find"],
          correctOptionIndex: 2,
          explanation: "While tourism provides income, there is a risk that it reduces the rich, complex Kalbeliya culture to a simple performance, ignoring their history and traditions.",
          difficulty: "Medium"
      },
      {
        question: "Where are tourists most likely to see Kalbeliya dancers perform?",
        options: ["In museums", "Only in remote villages", "At forts, hotels, and festivals", "In official government buildings"],
        correctOptionIndex: 2,
        explanation: "Performances for tourists are common in accessible locations like historic forts, hotels, and major cultural festivals in Rajasthan.",
        difficulty: "Easy"
      },
      {
        question: "The content on this platform aims to provide a 'deeper, more respectful' narrative. What does this imply about typical tourist representations?",
        options: ["They are always perfectly accurate", "They are often shallow and commercialized", "They are too academic and boring", "They are completely false"],
        correctOptionIndex: 1,
        explanation: "The statement implies that typical representations in tourism can be superficial. This platform aims to provide more depth and respect for the culture's complexity.",
        difficulty: "Medium"
      }
  ],
  '20': [
      {
          question: "What is the key challenge for the future of the Kalbeliya culture?",
          options: ["Finding new songs to sing", "Designing new costumes", "Balancing heritage with modern opportunities", "Preventing young people from learning the dance"],
          correctOptionIndex: 2,
          explanation: "The main challenge lies in balancing the preservation of their unique heritage with the younger generation's need for education and modern careers.",
          difficulty: "Medium"
      },
      {
        question: "Besides dance, what aspects of their culture must be preserved?",
        options: ["Their old hunting routes", "Only their costumes", "Their stories, music, and social fabric", "Their temporary shelter designs"],
        correctOptionIndex: 2,
        explanation: "For the culture to truly survive, it's important to preserve not just the famous dance but also the stories, music, and social traditions that give it meaning.",
        difficulty: "Medium"
      },
      {
        question: "According to the text, culture is ____.",
        options: ["fixed and unchangeable", "only found in museums", "alive, evolving, and deserves protection", "a thing of the past"],
        correctOptionIndex: 2,
        explanation: "The final level concludes that culture is not a static relic but something that is alive and evolving, and therefore requires active effort to protect and preserve.",
        difficulty: "Easy"
      }
  ]
};
