export interface TeamMember {
    id: string;
    name: string;
    role: string;
    company?: string;
    image: string;
    bio?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    type: 'Workshop' | 'Talk' | 'Study Group' | 'Hackathon' | 'Social';
    image: string;
    registrationLink?: string;
    attendees?: number;
    tags: string[];
    isPast: boolean;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    github?: string;
    demo?: string;
    tags: string[];
    contributors: string[];
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    image: string;
    tags: string[];
    readTime: string;
}