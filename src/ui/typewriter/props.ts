export interface IProps {
  speed: number;
  eraseSpeed: number;
  typingDelay: number;
  eraseDelay: number;
  text: Array<string> | string;
  fontSize?: number;
}
