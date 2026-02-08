import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description: 'Shows a list of Abhishek Singh’s technical and soft skills.',
  parameters: z.object({}),
  execute: async () => {
    return (
      "You can see all my technical and soft skills above. " +
      "Feel free to ask if you want details about any specific skill."
    );
  },
});
