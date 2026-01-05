"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const skillCategories = [
  {
    title: "Frontend",
    skills: resumeData.skills.frontend,
  },
  {
    title: "Backend",
    skills: resumeData.skills.backend,
  },
  {
    title: "Databases",
    skills: resumeData.skills.databases,
  },
  {
    title: "Tools & Platforms",
    skills: resumeData.skills.tools,
  },
  {
    title: "Languages",
    skills: resumeData.skills.languages,
  },
  {
    title: "Soft Skills",
    skills: resumeData.skills.soft,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Tools</h2>
          <div className="h-px w-20 bg-foreground"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-border bg-background/50 hover:bg-background/80 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
