import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Summarizes the kind of internship Abhishek Singh is looking for and how to contact him. Use this when the user asks about internships, opportunities, or hiring.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here’s a quick overview of my background and what I'm looking for:

- 🎓 **Education**: B.E. in Computer Science and Engineering at SRIT Jabalpur (2022 – 2026)
- 💼 **Experience**: Software Development Intern (Full Stack) at Universal CodeTech (UCT) (June – Aug 2025)
- 📱 **Key Products**: Built **Magic Calculator Pro** (live Android app at magiccalcs.in), **QuickChat** (real-time chat), and **SwiftShop** (Q-commerce platform)
- 🛠️ **Tech Stack**: Java (DSA), Kotlin, Android (Jetpack Compose), React, Next.js, Node.js, Express, MongoDB, Firebase, Firestore, Razorpay, Git, Docker
- 🏆 **Certifications**: 200+ problems solved on GeeksforGeeks, Full Stack Web Development (Apna College), Data Structures & Algorithms (Apna College)
- 📅 **Availability**: Open for software engineering, full-stack, or Android developer roles and internships
- 🌍 **Location**: Jabalpur, India (available for remote work or relocation)

📬 **Contact me directly**:
- **Email**: jagatrajjagatraj55102@gmail.com  
- **LinkedIn**: https://www.linkedin.com/in/abhishek-s-053525281/  
- **GitHub**: https://github.com/AbhishekTha-551024  
- **Portfolio**: https://abhi-portfolio-theta-nine.vercel.app/
    `;
  },
});
