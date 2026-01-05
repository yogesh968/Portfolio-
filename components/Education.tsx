"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Education</h2>
          <div className="h-px w-20 bg-foreground"></div>
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 border-l border-border"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-foreground"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">
                  {edu.institution} · {edu.location}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  <span>·</span>
                  <span>Grade: {edu.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
