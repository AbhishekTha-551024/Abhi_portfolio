import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    "Shows a list of projects built by Abhishek Singh. Use this when the user asks about projects, work, or what I'm building.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "You can see my projects above. " +
      "They focus on frontend development, real-world applications, and experiments with AI-powered features. " +
      "Feel free to ask about any specific project or the tech behind it."
    );
  },
});
