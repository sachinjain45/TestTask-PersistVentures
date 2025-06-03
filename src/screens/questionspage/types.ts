export interface QuestionCategory {
  key: string;
  label: string;
  questions: string[];
}

export interface QuestionsPageProps {
  onNext: () => void;
  onBack: () => void;
}