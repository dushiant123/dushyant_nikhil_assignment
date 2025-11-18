'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { getRandomQuestions, type Question } from '@/lib/quiz-data';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Award, Target, BookOpen } from 'lucide-react';
import { useProgress } from '@/context/progress-context';
import type { Level } from '@/lib/data';

type QuizProps = {
  level: Level;
  onQuizComplete: () => void;
};

const QUIZ_LENGTH = 5;
const PASS_PERCENTAGE = 70;

export function Quiz({ level, onQuizComplete }: QuizProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const { completeLevel } = useProgress();

  useEffect(() => {
    setQuestions(getRandomQuestions(level.id, QUIZ_LENGTH));
  }, [level.id]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctOptionIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
      const finalScore = selectedOption === currentQuestion.correctOptionIndex ? score + 1 : score;
      const percentage = (finalScore / questions.length) * 100;
      if (percentage >= PASS_PERCENTAGE) {
        completeLevel(level.id, percentage);
      }
    }
  };
  
  if (questions.length === 0) {
    return (
        <div className="flex items-center justify-center h-full p-6">
            <Card className="text-center">
                <CardHeader>
                    <CardTitle>Quiz Not Available</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>We're still preparing the questions for this level. Please check back later!</p>
                </CardContent>
                <CardFooter>
                    <Button onClick={onQuizComplete} className="w-full">Back to Content</Button>
                </CardFooter>
            </Card>
        </div>
    );
  }


  if (isFinished) {
    const finalScorePercentage = (score / questions.length) * 100;
    const passed = finalScorePercentage >= PASS_PERCENTAGE;

    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <Card className="w-full max-w-md">
            <CardHeader>
                {passed ? <Award className="mx-auto h-16 w-16 text-green-500" /> : <Target className="mx-auto h-16 w-16 text-destructive" />}
                <CardTitle className="text-2xl font-headline">{passed ? "Level Complete!" : "Try Again!"}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-4xl font-bold">{Math.round(finalScorePercentage)}%</p>
                <p className="text-muted-foreground">You answered {score} out of {questions.length} questions correctly.</p>
                <p className="mt-4">{passed ? "Great job! You've unlocked new knowledge." : `You need ${PASS_PERCENTAGE}% to pass. Don't give up!`}</p>
            </CardContent>
            <CardFooter>
                <Button onClick={onQuizComplete} className="w-full">
                    <BookOpen className="mr-2"/>
                    Return to Map
                </Button>
            </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-6">
      <Progress value={progress} className="mb-4" />
      <p className="text-sm text-muted-foreground mb-4 text-center">Question {currentQuestionIndex + 1} of {questions.length}</p>
      
      <Card className="flex-1 flex flex-col">
        <CardHeader>
            <CardTitle className="text-xl md:text-2xl leading-relaxed">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <RadioGroup
            value={selectedOption?.toString()}
            onValueChange={(value) => !isAnswered && setSelectedOption(parseInt(value))}
            className="space-y-4"
          >
            {currentQuestion.options.map((option, index) => {
              const isCorrect = index === currentQuestion.correctOptionIndex;
              const isSelected = index === selectedOption;
              return (
                <Label
                  key={index}
                  htmlFor={`option-${index}`}
                  className={cn(
                    "flex items-center space-x-4 rounded-md border p-4 transition-all",
                    isAnswered && isCorrect ? 'border-green-500 bg-green-500/10' : '',
                    isAnswered && isSelected && !isCorrect ? 'border-destructive bg-destructive/10' : '',
                    !isAnswered ? 'cursor-pointer hover:bg-accent/50' : 'cursor-default'
                  )}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={isAnswered} />
                  <span className="flex-1 text-base">{option}</span>
                  {isAnswered && isCorrect && <CheckCircle className="text-green-500" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-destructive" />}
                </Label>
              );
            })}
          </RadioGroup>
        </CardContent>

        {isAnswered && (
          <CardFooter className="flex-col items-start">
             <Alert className="w-full">
                <AlertTitle className={cn(selectedOption === currentQuestion.correctOptionIndex ? 'text-green-600' : 'text-destructive')}>
                  {selectedOption === currentQuestion.correctOptionIndex ? 'Correct!' : 'Not Quite!'}
                </AlertTitle>
                <AlertDescription>{currentQuestion.explanation}</AlertDescription>
            </Alert>
          </CardFooter>
        )}
      </Card>
      
      <div className="mt-6 flex justify-end">
        {!isAnswered ? (
          <Button onClick={handleAnswerSubmit} disabled={selectedOption === null}>Check Answer</Button>
        ) : (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </Button>
        )}
      </div>
    </div>
  );
}
