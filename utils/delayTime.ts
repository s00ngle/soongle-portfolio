export const delayTime = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));
