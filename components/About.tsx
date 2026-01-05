"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">About</h2>
            <div className="h-px w-20 bg-foreground"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Full-Stack Developer with a strong foundation in AI & ML,
              currently pursuing my Bachelor's degree at Newton School of
              Technology, ADYPU. My journey in software development has been
              driven by a passion for building scalable applications that solve
              real-world problems.
            </p>
            <p>
              With experience at TopSqill as a Full-Stack Developer, I've
              worked on production-ready applications using React, Node.js, and
              Express. I focus on creating reusable components, efficient state
              management, and seamless collaboration with cross-functional teams.
            </p>
            <p>
              My approach combines technical expertise with thoughtful UI/UX
              design, ensuring that every application I build is not only
              functional but also intuitive and user-friendly. I'm committed to
              continuous learning and contributing to the open-source community,
              with several successful contributions to projects like Mongoose.
            </p>
            <p>
              Whether it's leading a team in hackathons, building offline-first
              mobile applications, or developing real-time collaborative
              platforms, I thrive on challenges that push me to grow and
              innovate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
