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
      }
  ],
  '7': [
      {
          question: "How were Kalbeliya history and traditions passed down through generations?",
          options: ["Through written scriptures", "Through formal schooling", "Through evening storytelling, songs, and riddles", "Through stone carvings"],
          correctOptionIndex: 2,
          explanation: "As a community with a primarily oral tradition, storytelling in the evenings was the essential way of passing down their history and cultural knowledge.",
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
      }
  ],
  '9': [
      {
          question: "What is the most globally recognized role of women in Kalbeliya culture?",
          options: ["Healers", "Musicians", "Dancers", "Storytellers"],
          correctOptionIndex: 2,
          explanation: "Kalbeliya women are world-renowned as the dancers of the famous 'snake dance', making it their most recognized cultural contribution.",
          difficulty: "Easy"
      }
  ],
  '10': [
      {
          question: "Besides playing music, what was another traditional role for Kalbeliya men?",
          options: ["Weaving textiles", "Cooking for the community", "Herbalists and snake handlers", "Making pottery"],
          correctOptionIndex: 2,
          explanation: "Men were the traditional snake handlers and also possessed knowledge of herbal remedies, which they used for treating snakebites and other ailments.",
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
      }
  ],
  '12': [
      {
          question: "Who is the primary deity worshipped by the Kalbeliyas for protection?",
          options: ["Ganesh", "Shiva", "Nag Devta (Serpent God)", "Lakshmi"],
          correctOptionIndex: 2,
          explanation: "Given their close relationship with snakes, the Kalbeliyas worship Nag Devta, the serpent deity, seeking protection from dangers.",
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
      }
  ],
  '14': [
      {
          question: "How are major decisions made within the Kalbeliya community?",
          options: ["By a single, elected chief", "Through a formal voting process", "By community discussion led by elders", "By consulting an oracle"],
          correctOptionIndex: 2,
          explanation: "The social system is informal, with respected elders leading community discussions to make decisions on important matters.",
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
      }
  ],
  '16': [
      {
          question: "What did the Kalbeliyas believe about their relationship with snakes?",
          options: ["They were pests to be exterminated", "They were sacred beings to be respected", "They were a source of food", "They were unintelligent creatures"],
          correctOptionIndex: 1,
          explanation: "The Kalbeliyas held a deep, respectful bond with snakes, viewing them as sacred beings. Harming a snake was thought to bring misfortune.",
          difficulty: "Easy"
      }
  ],
  '17': [
      {
          question: "What major event caused severe economic hardship for the Kalbeliya community?",
          options: ["A severe drought", "The Wildlife Protection Act of 1972", "The decline of royal patronage", "A conflict with other tribes"],
          correctOptionIndex: 1,
          explanation: "The Wildlife Protection Act of 1972 banned snake-charming, their traditional livelihood, which led to significant economic challenges for the community.",
          difficulty: "Medium"
      }
  ],
  '18': [
      {
          question: "How have Kalbeliya women adapted to the modern world?",
          options: ["By abandoning their culture", "By becoming farmers", "By gaining global fame as performers and dance teachers", "By refusing to leave their traditional camps"],
          correctOptionIndex: 2,
          explanation: "Many Kalbeliya women have adapted by leveraging their unique cultural skills, becoming internationally recognized performers and teachers of their dance form.",
          difficulty: "Easy"
      }
  ],
  '19': [
      {
          question: "What is a potential risk of the Kalbeliya culture's representation in tourism?",
          options: ["It makes no money for the community", "It is not popular with tourists", "It risks oversimplifying their culture into just entertainment", "It is too difficult for tourists to find"],
          correctOptionIndex: 2,
          explanation: "While tourism provides income, there is a risk that it reduces the rich, complex Kalbeliya culture to a simple performance, ignoring their history and traditions.",
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
      }
  ]
};
