import { tool } from 'ai';
import { z } from 'zod';

export const getSports = tool({
  description:
    "Shows photos related to Abhishek Singh’s interests and activities.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "Here are some moments from my life outside coding — things I enjoy to recharge and stay sharp."
    );
  },
});
