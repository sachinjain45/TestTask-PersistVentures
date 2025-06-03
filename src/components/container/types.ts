export type ContainerProps = {
  currentStep?: number;
  totalSteps?: number;
  goBack?: () => void;
  goNext?: () => void;
  nextDisabled?: boolean;
  backDisabled?: boolean;
  children?: React.ReactNode;
  btnTitle?: string;
};
