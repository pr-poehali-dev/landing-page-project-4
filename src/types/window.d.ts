declare global {
  interface Window {
    ym?: (id: number, method: string, goalName: string) => void;
    VK?: {
      Retargeting?: {
        Init: (pixelId: string) => void;
        Hit: () => void;
        Event: (eventName: string) => void;
      };
    };
  }
}

export {};