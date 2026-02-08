import { tool } from 'ai';
import { z } from 'zod';

export const getCrazy = tool({
  description:
    "Tells the craziest or most interesting thing Abhishek Singh has done. Use when the user asks about fun, crazy, or unique experiences.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "Probably building an AI-powered portfolio that can talk about my work, skills, and projects on my behalf. " +
      "It started as an experiment while learning new AI tools and turned into something people actually enjoy interacting with."
    );
  },
});
