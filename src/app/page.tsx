import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import TechStack from "@/components/home/TechStack";

export default function HomePage() {
    return (
        <>
            <Hero/>
            <Stats/>
            <UpcomingEvents/>
            <TechStack/>
        </>
    )
}