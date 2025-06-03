export  interface CustomInputProps {
  label?: string;
  value?: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  placeholder: string;
  touched?: boolean;
  error?: boolean;
  inputStyle?: any;
  wrapperStyle?: any;
  [key: string]: any;
}
