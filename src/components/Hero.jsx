import { motion } from "motion/react"

function Hero() {
    return (
        <section className="hero" id="hero">
            <motion.img src={'/assets/images/pika.webp'} />
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Cześć! Jestem Filip!
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                Frontend Developer | Pasjonat React i UI/UX
            </motion.p>
            <a href="#projects" className="btn-primary">Zobacz projekty</a>
        </section>
    );
}

export default Hero;

