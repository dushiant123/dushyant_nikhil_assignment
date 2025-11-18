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
      question: "Where did Kalbeliya communities traditionally live?",
      options: ["In city centers", "In fortified palaces", "On the outer fringes of towns", "In permanent villages"],
      correctOptionIndex: 2,
      explanation: "As nomads, they set up temporary camps on the outskirts of towns and villages, allowing them to move freely for work.",
      difficulty: 'Medium'
    },
    {
        question: "What modern development has significantly impacted the Kalbeliya's traditional lifestyle?",
        options: ["The rise of tourism", "Laws restricting snake-charming", "The introduction of electricity", "The decline of camel transport"],
        correctOptionIndex: 1,
        explanation: "Wildlife protection laws have banned snake-charming, forcing the community to adapt and focus more on music and dance as their primary source of income and identity.",
        difficulty: 'Medium'
    },
    {
        question: "What is the central theme of Level 1?",
        options: ["Kalbeliya dance is their only important tradition.", "The Kalbeliya are a multifaceted community, not just performers.", "The Kalbeliya have completely abandoned their traditions.", "Snake-charming is still their main profession."],
        correctOptionIndex: 1,
        explanation: "The level emphasizes that the Kalbeliya are a community with a rich history, belief system, and pride in their many traditions, beyond just performance.",
        difficulty: 'Hard'
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
  ]
};

// Function to get a random subset of questions for a level
export function getRandomQuestions(levelId: string, count: number): Question[] {
  const levelQuestions = quizData[levelId] || [];
  if (levelQuestions.length <= count) {
    return levelQuestions;
  }
  
  const shuffled = [...levelQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
