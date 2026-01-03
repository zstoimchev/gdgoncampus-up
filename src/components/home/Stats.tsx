'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, Code, Trophy } from 'lucide-react'

const stats = [
    {
        icon: Users,
        value: '282+',
        label: 'Community Members',
        color: 'text-google-blue',
    },
    {
        icon: Calendar,
        value: '20+',
        label: 'Events Hosted',
        color: 'text-google-red',
    },
    {
        icon: Code,
        value: '15+',
        label: 'Projects Built',
        color: 'text-google-yellow',
    },
    {
        icon: Trophy,
        value: '50+',
        label: 'Skills Learned',
        color: 'text-google-green',
    },
]

export default function Stats() {
    return (
        <section className="py-20 bg-dark-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-700 mb-4">
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            </div>
                            <div className="text-4xl font-bold mb-2">{stat.value}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}