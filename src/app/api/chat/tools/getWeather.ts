import { tool } from 'ai';
import { z } from 'zod';

export const getWeather = tool({
  description: 'Shows the current weather in a given city (demo data).',
  parameters: z.object({
    city: z.string().describe('The city to get weather for'),
  }),
  execute: async ({ city }) => {
    const weatherOptions = ['sunny ☀️', 'cloudy ☁️', 'rainy 🌧️', 'windy 🌬️'];

    // fake delay for demo realism
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const weather =
      weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

    return `The weather in ${city} is currently ${weather}.`;
  },
});
