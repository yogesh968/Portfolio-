"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, Github, Linkedin, Code } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Store form data before clearing
    const { name, email, subject, body } = formData;
    // Clear form data
    setFormData({
      name: "",
      email: "",
      subject: "",
      body: "",
    });
    // Show success message
    setIsSubmitted(true);
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
    // Open email client with pre-filled data
    const mailtoLink = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${body}`)}`;
    window.location.href = mailtoLink;
  };
  const socialLinks = [
    {
      name: "Email",
      url: `mailto:${resumeData.personal.email}`,
      icon: Mail,
    },
    {
      name: "GitHub",
      url: resumeData.personal.github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: resumeData.personal.linkedin,
      icon: Linkedin,
    },
    {
      name: "LeetCode",
      url: resumeData.personal.leetcode,
      icon: Code,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
          <div className="h-px w-20 bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group p-6 rounded-lg border border-border bg-background/50 hover:bg-background/80 transition-all hover:scale-105 flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-foreground/5 border border-border group-hover:bg-foreground/10 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">{link.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {link.name === "Email"
                        ? resumeData.personal.email
                        : "Visit profile"}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-border"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-black focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-black focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-black focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="body"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="body"
                  name="body"
                  rows={6}
                  value={formData.body}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-black focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                  required
                ></textarea>
              </div>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-center"
                >
                  Sent successfully!
                </motion.div>
              )}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-foreground text-background rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
