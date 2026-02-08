import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description: 'Provides access to Abhishek Singh’s resume.',
  parameters: z.object({}),
  execute: async () => {
    return (
      "You can download my resume using the button above. " +
      "It includes details about my skills, projects, and experience."
    );
  },
});
