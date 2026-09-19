import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    "Shows a list of projects built by Abhishek Singh. Use this when the user asks about projects, work, or what I'm building.",
  parameters: z.object({}),
  execute: async () => {
    return (
      "You can see my featured projects above: Magic Calculator Pro (production Android app at magiccalcs.in), QuickChat (real-time WebSocket messaging), and SwiftShop (hyper-local Q-commerce platform). " +
      "Feel free to ask about any specific project or the tech behind it!"
    );
  },
});
