import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Summarizes the kind of internship Abhishek Singh is looking for and how to contact him. Use this when the user asks about internships, opportunities, or hiring.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here’s what I’m currently looking for:

- 📅 **Availability**: Open to internship opportunities
- 🌍 **Location**: India (remote or on-site)
- 🧑‍💻 **Focus Areas**: Frontend Development, Full-Stack Development, AI-powered applications
- 🛠️ **Tech Stack**: React, Next.js, JavaScript, Node.js, MongoDB, APIs, basic AI integrations
- ✅ **What I bring**: Strong fundamentals, hands-on project experience, clean UI-focused development, and a mindset of continuous learning. I enjoy building real-world products and improving them iteratively.

📬 **You can reach me via**:
- **Email**: jagatrajjagatraj55102@gmail.com  
- **LinkedIn**: https://www.linkedin.com/in/abhishek-s-053525281/  
- **GitHub**: https://github.com/AbhishekTha-551024  

I’m especially interested in learning-focused environments where I can grow fast and contribute meaningfully.
    `;
  },
});
