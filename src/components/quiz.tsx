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
const PASS_PERCENTAGE = 0; // Allow pass regardless of score

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
    // Reset state when level changes
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsFinished(false);
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
    if (!isFinished) {
        const percentage = (score / questions.length) * 100;
        if(currentQuestionIndex === questions.length - 1) {
            completeLevel(level.id, percentage);
        }
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedOption(null);
      setIsAnswered(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
      // Ensure level is marked complete on the last question if not already
      if (!isFinished) {
        const percentage = (score / questions.length) * 100;
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
                <CardTitle className="text-2xl font-headline">{passed ? "Level Complete!" : "Good Effort!"}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-4xl font-bold">{Math.round(finalScorePercentage)}%</p>
                <p className="text-muted-foreground">You answered {score} out of {questions.length} questions correctly.</p>
                <p className="mt-4">{passed ? "Great job! You've unlocked the next level." : `You can continue exploring the map.`}</p>
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
      
      <div className="flex-1 flex flex-col min-h-0">
        <Card className="flex-1 flex flex-col">
          <CardHeader>
              <CardTitle className="text-xl md:text-2xl leading-relaxed">{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <RadioGroup
              key={currentQuestionIndex} // Add key to force re-render
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
      
        <div className="mt-4 flex justify-end shrink-0">
          {!isAnswered ? (
            <Button onClick={handleAnswerSubmit} disabled={selectedOption === null}>Check Answer</Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
