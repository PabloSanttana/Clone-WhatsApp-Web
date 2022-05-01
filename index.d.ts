export {};

declare global {
  interface Window {
    example: string;
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
