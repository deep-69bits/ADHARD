// cursor-effects.d.ts
declare module "cursor-effects" {
  export class ghostCursor {
    constructor(options?: object);
    destroy(): void;
  }

  export class fairyDustCursor {
    constructor(options?: object);
    destroy(): void;
  }

  export class emojiCursor {
    constructor(options?: { emoji: string[] });
    destroy(): void;
  }

  export class rainbowCursor {
    constructor(options?: {
      length?: number;
      colors?: string[];
      size?: number;
    });
    destroy(): void;
  }

  // Add more cursor effects as needed
}
