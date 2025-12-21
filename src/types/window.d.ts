declare global {
  interface Window {
    ym?: (id: number, method: string, goalName: string) => void;
  }
}

export {};
