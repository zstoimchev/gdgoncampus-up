'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock } from 'lucide-react'

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-4 terminal-prompt">
                        Blog
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Technical articles, event recaps, and tutorials from our community.
                    </p>
                </motion.div>

                <div className="text-center py-20">
                    <p className="text-gray-400 mb-4">Our blog is coming soon! Stay tuned for technical content.</p>
                    <a
                        href="https://instagram.com/gdsc.primorska"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-google-blue hover:text-google-blue/80"
                    >
                        Follow us on Instagram for updates
                    </a>
                </div>
            </div>
        </div>
    )
}