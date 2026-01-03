'use client'

import { motion } from 'framer-motion'

const technologies = [
    { name: 'Android', color: 'text-google-green' },
    { name: 'Flutter', color: 'text-google-blue' },
    { name: 'Firebase', color: 'text-google-yellow' },
    { name: 'Cloud', color: 'text-google-blue' },
    { name: 'Machine Learning', color: 'text-google-red' },
    { name: 'Web Development', color: 'text-google-green' },
    { name: 'Kotlin', color: 'text-google-blue' },
    { name: 'TensorFlow', color: 'text-google-yellow' },
]

export default function TechStack() {
    return (
        <section className="py-20 bg-dark-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 terminal-prompt">
                        Technologies We Love
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From mobile development to machine learning, explore the technologies powering our community.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 rounded-full bg-dark-700 border border-dark-600 hover:border-google-blue transition-all cursor-default"
                        >
                            <span className={`font-medium ${tech.color}`}>{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}