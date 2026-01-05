"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h2>
          <div className="h-px w-20 bg-foreground"></div>
        </motion.div>

        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
