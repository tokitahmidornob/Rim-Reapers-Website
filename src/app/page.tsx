"use client";

import HolographicCar from "@/components/HolographicCar";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
    FaFlagCheckered, FaSun, FaMoon, FaBars, FaTimes, FaArrowRight, FaChevronDown,
    FaMicrochip, FaCheck, FaCog, FaWind, FaBolt, FaCodeBranch,
    FaUserAstronaut, FaUserCog, FaMapMarkerAlt, FaEnvelope,
    FaMobileAlt, FaPaperPlane, FaInstagram, FaYoutube, FaLinkedin,
    FaDiscord, FaLinkedinIn, FaTwitter, FaGithub, FaFacebook, FaUsers
} from "react-icons/fa";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const teamMembers = [
        {
            name: "Qazi Sazzad",
            role: "Manager",
            bio: "Assistant Engineer of Product Development, Uniglory Cycle and Components ltd, Meghna group."
        },
        {
            name: "Md. Anwar Hossain Rahim",
            role: "Co-Manager",
            bio: "Assistant Engineer, Ashok Leyland, Ifad Motors."
        },
        {
            name: "Nazmus Saeed Moon",
            role: "Co-Manager",
            bio: "Former Assistant Consultant, Utility Professionals."
        },
        {
            name: "Rashik Ahmmad",
            role: "Captain",
            bio: "Captain, Rim Reapers."
        },
        {
            name: "Ajaz Ahmed",
            role: "Vice Captain",
            bio: "Vice Captain, Rim Reapers."
        },
        {
            name: "Md. Monirul Islam",
            role: "Design Leader",
            bio: "Design Leader, Rim Reapers."
        },
        {
            name: "Shah Salsabil",
            role: "Co-Design Leader",
            bio: "Co-Design Leader, Rim Reapers."
        },
        {
            name: "Sifat Akon",
            role: "R&D Leader",
            bio: "R&D Leader, Rim Reapers."
        },
        {
            name: "Mahmud Shahriar",
            role: "Co-R&D Leader",
            bio: "Co-R&D Leader, Rim Reapers."
        },
        {
            name: "Tazwoar Efti",
            role: "Social Media Manager",
            bio: "Social Media Manager, Rim Reapers."
        }
    ];

    const archiveImages = [
        { src: "/image 1.jpg", alt: "Team Archive 1", caption: "WORKSHOP // 01" },
        { src: "/image 2.jpg", alt: "Team Archive 2", caption: "COLLABORATION // 02" },
        { src: "/image 3.jpg", alt: "Team Archive 3", caption: "ASSEMBLY // 03" },
        { src: "/image 4.jpg", alt: "Team Archive 4", caption: "TESTING // 04" },
        { src: "/image 5.jpg", alt: "Team Archive 5", caption: "CAMPUS LAB // 05" },
        { src: "/image 6.jpg", alt: "Team Archive 6", caption: "FIELD SESSION // 06" },
        { src: "/image 7.jpg", alt: "Team Archive 7", caption: "PROTOTYPING // 07" },
        { src: "/image 8.jpg", alt: "Team Archive 8", caption: "CORE SQUAD // 08" },
    ];

    return (
        <div className="antialiased font-sans selection:bg-[#9d00ff] dark:selection:bg-[#e066ff] selection:text-white">

            {/* Navbar */}
            <nav id="navbar" className={`fixed w-full z-50 transition-all duration-300 border-b border-black/5 dark:border-white/5 ${isScrolled ? 'shadow-lg bg-gray-50 dark:bg-rrDark/95 py-2' : 'bg-gray-50 dark:bg-rrDark/90 py-4 backdrop-blur-md'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                            <FaFlagCheckered className="text-[#9d00ff] dark:text-[#e066ff] text-2xl" />
                            <span className="font-racing font-bold text-2xl tracking-wider uppercase text-gray-900 dark:text-white">Rim<span className="text-[#9d00ff] dark:text-[#e066ff]">-Reapers</span></span>
                        </div>

                        <div className="hidden md:flex space-x-8 items-center">
                            {mounted && (
                                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-gray-600 hover:text-[#9d00ff] dark:text-gray-300 dark:hover:text-[#e066ff] focus:outline-none text-xl transition-colors ml-4" aria-label="Toggle Theme">
                                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                                </button>
                            )}
                            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors font-medium text-sm tracking-wide uppercase">Home</a>
                            <a href="#who-we-are" className="text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors font-medium text-sm tracking-wide uppercase">Who We Are</a>
                            <a href="#project" className="text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors font-medium text-sm tracking-wide uppercase">Project & Safety</a>
                            <a href="#team" className="text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors font-medium text-sm tracking-wide uppercase">Team</a>
                            <a href="#sponsorship" className="text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors font-medium text-sm tracking-wide uppercase">Sponsorship</a>
                            <a href="#contact" className="px-6 py-2 bg-transparent border border-[#9d00ff] dark:border-[#e066ff] text-[#9d00ff] dark:text-[#e066ff] hover:bg-[#9d00ff] dark:hover:bg-[#e066ff] hover:text-gray-900 dark:text-white font-racing tracking-widest uppercase text-sm rounded transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]">Contact Us</a>
                        </div>

                        <div className="md:hidden flex items-center">
                            {mounted && (
                                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-gray-600 hover:text-[#9d00ff] dark:text-gray-300 dark:hover:text-[#e066ff] focus:outline-none text-xl transition-colors ml-4" aria-label="Toggle Theme">
                                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                                </button>
                            )}
                            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] focus:outline-none text-2xl" aria-label="Toggle Navigation Menu">
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-100 dark:bg-rrGray border-t border-black/5 dark:border-white/5 absolute w-full top-full left-0`}>
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
                        <a href="#home" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] hover:bg-white dark:bg-rrLightGray rounded-md">Home</a>
                        <a href="#who-we-are" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] hover:bg-white dark:bg-rrLightGray rounded-md">Who We Are</a>
                        <a href="#project" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] hover:bg-white dark:bg-rrLightGray rounded-md">Project & Safety</a>
                        <a href="#team" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] hover:bg-white dark:bg-rrLightGray rounded-md">Team</a>
                        <a href="#sponsorship" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#9d00ff] dark:hover:text-[#e066ff] hover:bg-white dark:bg-rrLightGray rounded-md">Sponsorship</a>
                        <a href="#contact" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-[#9d00ff] dark:text-[#e066ff] bg-[#9d00ff]/10 dark:bg-[#e066ff]/10 hover:bg-[#9d00ff] dark:hover:bg-[#e066ff] hover:text-gray-900 dark:text-white rounded-md transition-colors text-center mt-4">Contact Us</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center bg-[image:var(--background-image-hero-pattern)] dark:bg-[image:var(--background-image-hero-pattern-dark)] bg-cover bg-center bg-no-repeat pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rrDark/80 to-rrDark"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                >
                    <h2 className="text-[#9d00ff] dark:text-[#e066ff] font-racing font-bold tracking-[0.2em] text-sm md:text-lg mb-4 uppercase">Sponsorship Enquiry: Tesla 2027 Battery</h2>
                    <h1 className="font-racing text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-gray-900 dark:text-white leading-tight drop-shadow-2xl">
                        Rim<span className="text-[#9d00ff] dark:text-[#e066ff]">-Reapers</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 italic tracking-widest uppercase mt-4">
                        Enjoining the brave minds to roll beyond speed
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl font-light mt-6 mb-10 max-w-2xl mx-auto">
                        Rim-Reapers is a first-time Formula Student EV team at IUBAT, Bangladesh. We are reaching out to explore BMS hardware and battery cell support for our 2027 campaign.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#sponsorship" className="px-8 py-4 bg-[#9d00ff] dark:bg-[#e066ff] text-white dark:text-white font-racing font-bold uppercase tracking-widest text-sm rounded hover:bg-[#7a00cc] dark:hover:bg-[#c233ff] transition-all shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                            Review Sponsorship Brief <FaArrowRight className="inline-block ml-2 mb-1" />
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-transparent border border-gray-500 text-gray-900 dark:text-white font-racing font-bold uppercase tracking-widest text-sm rounded hover:border-white transition-all">
                            Contact Us
                        </a>
                    </div>
                </motion.div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                    <a href="#who-we-are" className="text-gray-600 dark:text-gray-400 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors" aria-label="Scroll to Who We Are">
                        <FaChevronDown className="text-2xl" />
                    </a>
                </div>
            </section>

            {/* Who We Are Section */}
            <section id="who-we-are" className="py-24 bg-gray-50 dark:bg-rrDark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#9d00ff] dark:bg-white opacity-5 dark:opacity-10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9d00ff] dark:bg-white opacity-5 dark:opacity-10 blur-[150px] rounded-full"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-3 py-1 bg-white dark:bg-rrLightGray border border-black/10 dark:border-white/10 rounded-full mb-6">
                                <span className="text-[#9d00ff] dark:text-[#e066ff] font-racing text-xs uppercase tracking-widest flex items-center">
                                    <FaMicrochip className="mr-2" /> Who We Are
                                </span>
                            </div>
                            <h2 className="font-racing text-4xl md:text-5xl font-bold mb-6 uppercase">Building <br /> <span className="text-gray-500">The Foundation</span></h2>

                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4 font-normal">
                                Rim-Reapers is a first-time Formula Student EV team at IUBAT (International University of Business Agriculture and Technology), Bangladesh. Our stated target is FSAE-China 2027.
                            </p>

                            <blockquote className="border-l-2 border-purple-500/50 pl-4 py-1 my-6 text-sm font-mono text-gray-400 italic">
                                "Engineering is the closest thing to magic that exists in the world." - Elon Musk
                            </blockquote>

                            {/* Structured Vertical Stack with Sleek Bordered Rows */}
                            <div className="flex flex-col gap-4">
                                <div className="border-l-2 border-purple-500 pl-4 py-1">
                                    <span className="font-bold text-cyan-600 dark:text-cyan-400 tracking-wide uppercase text-sm block mb-1">Mission:</span>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        Cultivating a brighter future in the industry and higher studies through strategic initiatives.
                                    </p>
                                </div>
                                <div className="border-l-2 border-purple-500 pl-4 py-1">
                                    <span className="font-bold text-cyan-600 dark:text-cyan-400 tracking-wide uppercase text-sm block mb-1">Vision:</span>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        To be a leading university automotive team, recognized nationally for technical excellence.
                                    </p>
                                </div>
                                <div className="border-l-2 border-purple-500 pl-4 py-1">
                                    <span className="font-bold text-cyan-600 dark:text-cyan-400 tracking-wide uppercase text-sm block mb-1">Philosophy:</span>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        Safety-first, rules-compliant architecture.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-rrGray aspect-[4/3] neon-box group">
                                <img
                                    src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Engineering Workshop"
                                    className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-rrDark via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div>
                                        <h3 className="font-racing text-xl text-gray-900 dark:text-white">Innovation Lab</h3>
                                        <p className="text-[#9d00ff] dark:text-[#e066ff] text-sm font-medium tracking-wider">STATUS: IUBAT CAMPUS</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-[#9d00ff] dark:border-[#e066ff] flex items-center justify-center animate-[spin_4s_linear_infinite]">
                                        <FaCog className="text-[#9d00ff] dark:text-[#e066ff]" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-[#9d00ff] dark:border-[#e066ff]/30 rounded-xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project & Safety Section */}
            <section id="project" className="py-24 bg-gray-100 dark:bg-rrGray border-y border-black/5 dark:border-white/5 relative">
                <div className="absolute inset-0 grid-bg opacity-30"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-racing text-4xl md:text-5xl font-bold uppercase mb-6">Project & <span className="text-[#9d00ff] dark:text-[#e066ff]">Philosophy</span></h2>

                        {/* Technical Execution 2: Beginner-friendly / COTS powertrain paragraph */}
                        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal bg-white/60 dark:bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
                            We are building a beginner-friendly electric formula car on a back-to-basics philosophy: steel-tube chassis, commercially supported (COTS) powertrain components and a safety-first, rules-compliant architecture. Our cell chemistry, pack configuration, inverter and motor are not yet selected, so we want to align our battery as in the BMS design with supported hardware from the start rather than build custom safety electronics. Our budget is limited, so sponsor support would directly affect whether we can field a properly monitored accumulator.
                        </p>
                    </motion.div>

                    {/* 3D Holographic Centerpiece */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="w-full h-[400px] md:h-[600px] relative z-10 cursor-grab active:cursor-grabbing mb-16 rounded-2xl overflow-hidden neon-box bg-gray-50 dark:bg-rrDark border border-black/10 dark:border-white/10"
                    >
                        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>
                        <HolographicCar />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full rounded-2xl bg-gray-50 dark:bg-rrDark border border-black/10 dark:border-white/10 overflow-hidden mb-16 p-8 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-12">

                            {/* Tech Specs Left */}
                            <div className="w-full lg:w-1/4 space-y-8">
                                <div className="border-l-2 border-[#9d00ff] dark:border-[#e066ff] pl-4">
                                    <h4 className="text-gray-500 text-xs font-racing tracking-widest uppercase mb-1">Chassis Status</h4>
                                    <p className="text-xl font-bold text-gray-900 dark:text-white font-racing">Decided</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Steel-Tube Frame)</p>
                                </div>
                                <div className="border-l-2 border-[#9d00ff] dark:border-[#e066ff] pl-4">
                                    <h4 className="text-gray-500 text-xs font-racing tracking-widest uppercase mb-1">Powertrain</h4>
                                    <p className="text-xl font-bold text-gray-900 dark:text-white font-racing">In Progress</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(COTS Components)</p>
                                </div>
                            </div>

                            {/* Car Graphic / Architecture Box (Center) */}
                            <div className="w-full lg:w-1/2 relative flex justify-center group h-48 md:h-64 items-center">
                                <motion.svg
                                    viewBox="0 0 200 400"
                                    className="w-full h-full max-h-64 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                >
                                    {/* Nose and Front Wing */}
                                    <motion.path
                                        d="M60,50 L140,50 L140,65 L110,65 L110,100 L90,100 L90,65 L60,65 Z"
                                        className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="3" fill="none"
                                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5 }}
                                    />
                                    {/* Front Wheels */}
                                    <motion.rect x="30" y="70" width="20" height="50" rx="5" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.5 }} />
                                    <motion.rect x="150" y="70" width="20" height="50" rx="5" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.5 }} />
                                    {/* Front Suspension */}
                                    <motion.path d="M50,95 L90,120 M150,95 L110,120" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 1 }} />
                                    {/* Main Monocoque */}
                                    <motion.path d="M90,100 L110,100 L120,220 L130,260 L130,320 L70,320 L70,260 L80,220 Z" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, delay: 0.5 }} />
                                    {/* Cockpit */}
                                    <motion.ellipse cx="100" cy="180" rx="15" ry="25" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 1.5 }} />
                                    {/* Sidepods */}
                                    <motion.path d="M70,190 L50,190 L50,280 L70,280 M130,190 L150,190 L150,280 L130,280" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, delay: 1 }} />
                                    {/* Rear Wheels */}
                                    <motion.rect x="20" y="270" width="30" height="60" rx="5" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 1.5 }} />
                                    <motion.rect x="150" y="270" width="30" height="60" rx="5" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 1.5 }} />
                                    {/* Rear Wing */}
                                    <motion.path d="M60,340 L140,340 L140,360 L60,360 Z" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 2 }} />
                                    {/* Center Line for details */}
                                    <motion.path d="M100,100 L100,150 M100,210 L100,320" className="stroke-[#9d00ff] dark:stroke-[#e066ff]" strokeWidth="1" strokeDasharray="5,5" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, delay: 2 }} />
                                </motion.svg>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-[#9d00ff] dark:bg-[#e066ff] opacity-20 blur-[60px] rounded-full pointer-events-none"></div>
                            </div>

                            {/* Tech Specs Right */}
                            <div className="w-full lg:w-1/4 space-y-8 text-left lg:text-right">
                                <div className="border-l-2 lg:border-l-0 lg:border-r-2 border-[#9d00ff] dark:border-[#e066ff] pl-4 lg:pl-0 lg:pr-4">
                                    <h4 className="text-gray-500 text-xs font-racing tracking-widest uppercase mb-1">Accumulator / BMS</h4>
                                    <p className="text-xl font-bold text-gray-900 dark:text-white font-racing">Pending</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Seeking Tesla Support)</p>
                                </div>
                                <div className="border-l-2 lg:border-l-0 lg:border-r-2 border-[#9d00ff] dark:border-[#e066ff] pl-4 lg:pl-0 lg:pr-4">
                                    <h4 className="text-gray-500 text-xs font-racing tracking-widest uppercase mb-1">Inverter & Motor</h4>
                                    <p className="text-xl font-bold text-gray-900 dark:text-white font-racing">Pending</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">(Not Yet Selected)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {/* Card 1 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-gray-50 dark:bg-rrDark p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-[#9d00ff] dark:border-[#e066ff]/50 transition-colors group">
                            <div className="w-12 h-12 bg-white dark:bg-rrLightGray rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9d00ff] dark:hover:bg-[#e066ff] transition-colors">
                                <FaWind className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:text-white" />
                            </div>
                            <h3 className="font-racing text-xl font-bold mb-2">Safety & Compliance</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Official rulebook compliance with version-controlled matrices. Bench testing and documented fault-injection tests occur before vehicle integration.</p>
                        </motion.div>
                        {/* Card 2 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-gray-50 dark:bg-rrDark p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-[#9d00ff] dark:border-[#e066ff]/50 transition-colors group">
                            <div className="w-12 h-12 bg-white dark:bg-rrLightGray rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9d00ff] dark:hover:bg-[#e066ff] transition-colors">
                                <FaBolt className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:text-white" />
                            </div>
                            <h3 className="font-racing text-xl font-bold mb-2">Why BMS Support?</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">A properly monitored accumulator is essential for safety. Our limited budget means sponsor support directly enables our EV transition.</p>
                        </motion.div>
                        {/* Card 3 */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="bg-gray-50 dark:bg-rrDark p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-[#9d00ff] dark:border-[#e066ff]/50 transition-colors group">
                            <div className="w-12 h-12 bg-white dark:bg-rrLightGray rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9d00ff] dark:hover:bg-[#e066ff] transition-colors">
                                <FaCodeBranch className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:text-white" />
                            </div>
                            <h3 className="font-racing text-xl font-bold mb-2">Fast Follow-Up</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">We commit to delivering a full pack specification (cell count, voltage, channels) and compatibility checklist within 20 days of hardware confirmation.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>



            {/* Team Section */}
            <section id="team" className="mt-20 pt-24 md:pt-28 pb-20 bg-gray-50 dark:bg-rrDark relative border-t border-black/5 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-racing text-4xl md:text-5xl font-bold uppercase mb-4">Team & <span className="text-[#9d00ff] dark:text-[#e066ff]">Advisors</span></h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Qualified supervision and a dedicated core team ensuring safety-critical functions are meticulously managed.</p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                                className="relative group p-6 rounded-2xl bg-white dark:bg-rrLightGray border border-black/5 dark:border-white/5 hover:border-[#9d00ff] dark:hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between items-center text-center shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                            >
                                {/* Sleek Professional User Silhouette SVG Avatar */}
                                <div className="w-20 h-20 mx-auto p-4 rounded-full bg-gray-800/50 border border-purple-500/30 text-purple-400 mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                {/* Details Anchored at Bottom */}
                                <div className="w-full flex-1 flex flex-col justify-end">
                                    <h3 className="font-racing text-lg font-bold text-gray-900 dark:text-white mb-1 tracking-wide">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#9d00ff] dark:text-[#e066ff] text-xs font-semibold uppercase tracking-wider mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Chassis Blueprint Section */}
            <section id="blueprint" className="pt-20 pb-12 relative bg-gray-950 dark:bg-rrDark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="font-racing text-3xl md:text-5xl font-bold uppercase mb-8 text-center text-white">
                        Spaceframe <span className="text-[#9d00ff] dark:text-[#e066ff]">Chassis</span>
                    </h3>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto text-sm font-mono mb-12">
                        INITIAL TUBULAR GEOMETRY // COTS POWERTRAIN INTEGRATION READY
                    </p>
                    <div className="max-w-5xl mx-auto p-8 md:p-16 rounded-2xl bg-black/60 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-md">
                        <img 
                            src="/chasis.jpg" 
                            alt="Spaceframe Chassis Blueprint" 
                            className="w-full h-auto object-contain invert dark:invert brightness-125 contrast-125 opacity-90 mx-auto filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
                        />
                    </div>
                </div>
            </section>

            {/* Team Archives Gallery Section */}
            <section id="gallery" className="pt-20 pb-24 mt-12 bg-gray-50 dark:bg-rrDark relative border-t border-black/5 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h3 className="font-racing text-3xl md:text-5xl font-bold uppercase mb-4">
                            Team <span className="text-[#9d00ff] dark:text-[#e066ff]">Archives</span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                            Behind the scenes of our workshop sessions, prototyping phases, and collective engineering journey.
                        </p>
                    </motion.div>

                    {/* Balanced 8-Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {archiveImages.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-rrLightGray aspect-[4/3] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-[#9d00ff] dark:hover:border-purple-500/50"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-all duration-500 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-xs font-mono text-cyan-300 tracking-wider">
                                        {img.caption}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Execution 3: Sponsorship & Commitment Section directly below Team Grid */}
            <section id="sponsorship" className="py-24 bg-gray-100 dark:bg-rrGray border-t border-black/5 dark:border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#9d00ff] dark:bg-purple-600 opacity-5 dark:opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 bg-white dark:bg-rrLightGray border border-black/10 dark:border-white/10 rounded-full mb-4">
                            <span className="text-[#9d00ff] dark:text-[#e066ff] font-racing text-xs uppercase tracking-widest flex items-center">
                                <FaBolt className="mr-2" /> Sponsorship & Governance
                            </span>
                        </div>
                        <h2 className="font-racing text-4xl md:text-5xl font-bold uppercase mb-4">Sponsorship & <span className="text-[#9d00ff] dark:text-[#e066ff]">Commitment</span></h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A disciplined, transparent, and rules-compliant collaboration framework designed for battery and BMS technology partners.
                        </p>
                    </motion.div>

                    {/* 4 Sleek Glassmorphic Cards (Responsive grid-cols-1 md:grid-cols-2 gap-6) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1: Our Request */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative p-8 rounded-xl bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-[#9d00ff]/30 dark:border-purple-500/30 hover:border-[#9d00ff] dark:hover:border-purple-500/60 shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(157,0,255,0.1)] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono text-xs text-[#9d00ff] dark:text-[#e066ff] tracking-widest uppercase font-semibold">01 / Technical Scope</span>
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#9d00ff] dark:text-[#e066ff]">
                                        <FaBolt />
                                    </div>
                                </div>
                                <h3 className="font-racing text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-wide">Our Request</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-normal">
                                    We wish to know whether we are qualified for BMS hardware and battery cells. If so, we are applying for the most suitable package. We are not assuming eligibility or availability. And we shall wait for your reply.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
                                <span>TARGET: BMS & CELLS</span>
                                <span className="text-[#9d00ff] dark:text-[#e066ff]">STATUS: OPEN ENQUIRY</span>
                            </div>
                        </motion.div>

                        {/* Card 2: What We Are Committed To */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative p-8 rounded-xl bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-[#9d00ff]/30 dark:border-purple-500/30 hover:border-[#9d00ff] dark:hover:border-purple-500/60 shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(157,0,255,0.1)] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono text-xs text-[#9d00ff] dark:text-[#e066ff] tracking-widest uppercase font-semibold">02 / Accountability & Standards</span>
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#9d00ff] dark:text-[#e066ff]">
                                        <FaCheck />
                                    </div>
                                </div>
                                <h3 className="font-racing text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-wide">What We Are Committed To</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-normal">
                                    Compliance with the governing official rulebook for our event, with a version-controlled compliance matrix. Hardware used only in our competition vehicle, with qualified supervision, controlled bench testing before vehicle integration and documented fault-injection tests. We are reporting to you at agreed milestones, plus acknowledgement of support within your branding guidelines.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
                                <span>GOVERNANCE: RULEBOOK MATRIX</span>
                                <span className="text-[#9d00ff] dark:text-[#e066ff]">BENCH & FAULT TESTS</span>
                            </div>
                        </motion.div>

                        {/* Card 3: Our Flexibility */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative p-8 rounded-xl bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-[#9d00ff]/30 dark:border-purple-500/30 hover:border-[#9d00ff] dark:hover:border-purple-500/60 shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(157,0,255,0.1)] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono text-xs text-[#9d00ff] dark:text-[#e066ff] tracking-widest uppercase font-semibold">03 / Engineering Agility</span>
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#9d00ff] dark:text-[#e066ff]">
                                        <FaCodeBranch />
                                    </div>
                                </div>
                                <h3 className="font-racing text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-wide">Our Flexibility</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-normal">
                                    Once we know the available hardware, we will provide a pack specification (cell count, voltage, channel count, fault-output needs) and a compatibility checklist within 20 days, or sooner on request. Our design does not depend on sponsored hardware for safety-critical functions, so we can plan responsibly while awaiting your reply.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
                                <span>PACK SPEC: WITHIN 20 DAYS</span>
                                <span className="text-[#9d00ff] dark:text-[#e066ff]">DECOUPLED DESIGN</span>
                            </div>
                        </motion.div>

                        {/* Card 4: Next Steps */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative p-8 rounded-xl bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-[#9d00ff]/30 dark:border-purple-500/30 hover:border-[#9d00ff] dark:hover:border-purple-500/60 shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_0_30px_rgba(157,0,255,0.1)] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-mono text-xs text-[#9d00ff] dark:text-[#e066ff] tracking-widest uppercase font-semibold">04 / Direct Action</span>
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#9d00ff] dark:text-[#e066ff]">
                                        <FaPaperPlane />
                                    </div>
                                </div>
                                <h3 className="font-racing text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-wide">Next Steps</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-normal">
                                    Kindly, send the official sponsorship terms and direct us to the correct contact by October 18th, 2026. We are hoping for confirmation in writing rather than verbal answers.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 font-mono">
                                <span>DEADLINE: OCTOBER 18TH, 2026</span>
                                <span className="text-[#9d00ff] dark:text-[#e066ff]">WRITTEN CONFIRMATION</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-gray-50 dark:bg-rrDark border-t border-black/5 dark:border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-racing text-4xl md:text-5xl font-bold uppercase mb-6">Direct <span className="text-[#9d00ff] dark:text-[#e066ff]">Contact</span></h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                                Reach out directly to the Rim-Reapers core technical leadership at IUBAT. We look forward to initiating official discussions and receiving formal sponsorship documentation.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 font-medium text-sm mb-10 border-l-4 border-[#9d00ff] dark:border-[#e066ff] pl-4 bg-gray-100 dark:bg-rrGray py-3 pr-3 rounded-r-lg">
                                <strong className="text-[#9d00ff] dark:text-[#e066ff]">Accountability:</strong> We commit to milestone reporting and acknowledgement within official branding guidelines. Sponsored hardware is strictly for our competition vehicle.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white dark:bg-rrLightGray border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                        <FaMapMarkerAlt className="text-[#9d00ff] dark:text-[#e066ff] text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-racing text-gray-900 dark:text-white text-lg tracking-wide">University</h4>
                                        <p className="text-gray-600 dark:text-gray-400">IUBAT (International University of Business Agriculture and Technology)<br />Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white dark:bg-rrLightGray border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                        <FaEnvelope className="text-[#9d00ff] dark:text-[#e066ff] text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-racing text-gray-900 dark:text-white text-lg tracking-wide">Comms</h4>
                                        <p className="text-gray-600 dark:text-gray-400">rimreapers2025@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white dark:bg-rrLightGray border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                                        <FaMobileAlt className="text-[#9d00ff] dark:text-[#e066ff] text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-racing text-gray-900 dark:text-white text-lg tracking-wide">Direct Line</h4>
                                        <p className="text-gray-600 dark:text-gray-400">Rashik Ahmmad: +8801783894368</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="bg-white dark:bg-rrLightGray p-8 rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rrPurple to-transparent opacity-50"></div>
                            <form action="https://formsubmit.co/rimreapers2025@gmail.com" method="POST" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-racing text-gray-500 uppercase tracking-widest">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-50 dark:bg-rrDark border-b-2 border-black/10 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-[#9d00ff] dark:focus:border-[#e066ff] transition-colors rounded-t" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-racing text-gray-500 uppercase tracking-widest">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-50 dark:bg-rrDark border-b-2 border-black/10 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-[#9d00ff] dark:focus:border-[#e066ff] transition-colors rounded-t" placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs font-racing text-gray-500 uppercase tracking-widest">Subject</label>
                                    <input type="text" id="subject" name="subject" defaultValue="Sponsorship & Partnership Enquiry - Rim-Reapers" className="w-full bg-gray-50 dark:bg-rrDark border-b-2 border-black/10 dark:border-white/10 px-4 py-3 text-gray-600 dark:text-gray-400 focus:outline-none rounded-t font-mono text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-racing text-gray-500 uppercase tracking-widest">Message</label>
                                    <textarea id="message" name="message" rows={4} className="w-full bg-gray-50 dark:bg-rrDark border-b-2 border-black/10 dark:border-white/10 px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-[#9d00ff] dark:focus:border-[#e066ff] transition-colors rounded-t resize-none" placeholder="Ignite the conversation..." required></textarea>
                                </div>

                                {/* FormSubmit Configuration Inputs */}
                                <input type="hidden" name="_subject" value="New Rim-Reapers Sponsorship Enquiry!" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="box" />

                                <button type="submit" className="w-full py-4 bg-[#9d00ff] dark:bg-[#e066ff] text-white font-racing font-bold uppercase tracking-widest rounded hover:bg-[#7a00cc] dark:hover:bg-[#c233ff] transition-all shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] flex items-center justify-center gap-2">
                                    Send Transmission <FaPaperPlane />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-rrDark border-t border-black/10 dark:border-white/10 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                            <FaFlagCheckered className="text-[#9d00ff] dark:text-[#e066ff]" />
                            <span className="font-racing font-bold text-xl tracking-wider uppercase text-gray-900 dark:text-white">Rim<span className="text-[#9d00ff] dark:text-[#e066ff]">-Reapers</span></span>
                        </div>

                        <div className="flex space-x-6">
                            <a href="https://www.facebook.com/rimreapers.official" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors" aria-label="Facebook"><FaFacebook className="text-xl" /></a>
                            <a href="https://www.facebook.com/share/g/15vxJ49PUN/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors" aria-label="Community"><FaUsers className="text-xl" /></a>
                            <a href="https://www.instagram.com/teamrimreapers/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors" aria-label="Instagram"><FaInstagram className="text-xl" /></a>
                            <a href="https://www.youtube.com/@RimReapers-d7h" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors" aria-label="YouTube"><FaYoutube className="text-xl" /></a>
                            <a href="https://www.linkedin.com/company/rim-reapers/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#9d00ff] dark:hover:text-[#e066ff] transition-colors" aria-label="LinkedIn"><FaLinkedin className="text-xl" /></a>
                        </div>
                    </div>

                    <div className="mt-8 text-center border-t border-black/5 dark:border-white/5 pt-8">
                        <p className="text-gray-600 text-sm">&copy; 2026 Rim-Reapers Formula Student Team, IUBAT. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
