import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Returns a concise personal introduction of Abhishek Singh. Used when the user asks "Who are you?" or "Tell me about yourself".',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I’m Abhishek Singh, a frontend-focused developer who enjoys building clean, modern web applications and experimenting with AI-powered features. I’m passionate about learning new technologies and turning ideas into practical projects.\n\nOutside of coding, I like playing chess, reading books, and staying curious about how technology is shaping the future. This portfolio is an experiment to combine development with AI and make learning and interaction more engaging.",
    };
  },
});
