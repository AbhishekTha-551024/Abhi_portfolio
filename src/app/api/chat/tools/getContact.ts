import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'Shows Abhishek Singh’s contact information.',
  parameters: z.object({}),
  execute: async () => {
    return (
      "You’ll find my contact details above. " +
      "Feel free to reach out — I’m always open to discussions, learning opportunities, and collaborations in tech."
    );
  },
});
