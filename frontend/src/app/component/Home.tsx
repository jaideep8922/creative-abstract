// "use client"
// import Image from 'next/image';
// import Gif from '../../../public/glowwww.gif';
// import { useRouter } from 'next/navigation';

// const MainPage = () => {
//     const route = useRouter();

//     const redirect = ()=>{
//         route.push('/contact')
//     }
//     return (
//         <div className="w-screen h-screen relative">
//             {/* Background GIF */}
//             <Image
//                 src={Gif}
//                 alt="Example GIF"
//                 layout="fill"
//                 objectFit="cover"
//                 quality={100}
//                 priority
//             />

//             {/* Animated Button */}
//             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//                 <button className="bg-[#7745EC] text-white px-6 py-3 rounded-full shadow-md 
//                            hover:bg-blue-700 hover:scale-105 hover:shadow-lg 
//                            active:scale-95 
//                            transition-transform duration-300 ease-out 
//                            animate-pulse" onClick={redirect}>
//                     Get in Touch
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default MainPage;



"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  ChevronDown,
  ExternalLink,
  Github,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web",
      description: "Modern e-commerce solution with React & Node.js",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "Mobile",
      description: "Cross-platform fitness app with React Native",
      image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "DeFi Trading Platform",
      category: "Blockchain",
      description: "Decentralized trading platform with smart contracts",
      image: "/placeholder.svg?height=400&width=600&text=DeFi+Platform",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Real-time Chat App",
      category: "Chat",
      description: "Scalable chat application with video calling",
      image: "/placeholder.svg?height=400&width=600&text=Chat+Application",
      technologies: ["Socket.io", "WebRTC", "Node.js", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web",
      description: "Analytics dashboard for SaaS businesses",
      image: "/placeholder.svg?height=400&width=600&text=SaaS+Dashboard",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile",
      description: "On-demand food delivery mobile application",
      image: "/placeholder.svg?height=400&width=600&text=Food+Delivery",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const categories = ["All", "Web", "Mobile", "Blockchain", "Chat"]

  const filteredPortfolio =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Enhanced Creative Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/70 backdrop-blur-xl shadow-2xl border-b border-white/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                InnovateLab
              </span>
            </div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {["Home", "Features", "Services", "Portfolio", "About", "Team", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </button>
                ))}
                <Button className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {["Home", "Features", "Services", "Portfolio", "About", "Team", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Creative Hero Section */}
      <section id="home" className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center mb-8">
              <Badge
                variant="secondary"
                className="bg-white/80 backdrop-blur-sm text-purple-700 hover:bg-white/90 shadow-lg border border-white/20 px-6 py-2 text-sm font-medium animate-bounce"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>🚀 Now in Beta - Join
                Early Access
              </Badge>
            </div>

            {/* Enhanced Hero Title */}
            <div className="relative">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
                Build the{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
                    Future
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 blur-2xl opacity-30 animate-pulse"></div>
                </span>
                <br />
                <span className="text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Today
                </span>
              </h1>
            </div>

            {/* Enhanced Description */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your <span className="font-semibold text-purple-600">ideas</span> into reality with our
              cutting-edge platform. We help startups and enterprises build{" "}
              <span className="font-semibold text-pink-600">scalable solutions</span> that drive growth and innovation.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-10 py-4 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="relative group text-lg px-10 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-purple-300 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center text-gray-700 group-hover:text-purple-600">
                  <Eye className="mr-2 h-5 w-5" />
                  Watch Demo
                </span>
              </Button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-16">
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "99.9%", label: "Client Satisfaction" },
                { number: "50+", label: "Countries Served" },
                { number: "24/7", label: "Expert Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Hero Image/Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-6xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-white/20">
                <Image
                width={100}
                height={100}
                  src="/placeholder.svg?height=600&width=1000&text=Platform+Dashboard"
                  alt="Platform Dashboard"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
                {/* Floating UI Elements */}
                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce animation-delay-1000">
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce animation-delay-2000">
                  <Zap className="h-6 w-6 text-purple-500" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce animation-delay-3000">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and features you need to build, scale, and grow your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-yellow-500" />,
                title: "Lightning Fast",
                description: "Built for speed with modern architecture and optimized performance.",
              },
              {
                icon: <Shield className="h-8 w-8 text-green-500" />,
                title: "Enterprise Security",
                description: "Bank-level security with end-to-end encryption and compliance.",
              },
              {
                icon: <Globe className="h-8 w-8 text-purple-500" />,
                title: "Global Scale",
                description: "Deploy worldwide with our global infrastructure and CDN.",
              },
              {
                icon: <Users className="h-8 w-8 text-pink-500" />,
                title: "Team Collaboration",
                description: "Work together seamlessly with real-time collaboration tools.",
              },
              {
                icon: <Star className="h-8 w-8 text-orange-500" />,
                title: "Premium Support",
                description: "24/7 expert support to help you succeed at every step.",
              },
              {
                icon: <ChevronDown className="h-8 w-8 text-teal-500" />,
                title: "Easy Integration",
                description: "Connect with your favorite tools and services effortlessly.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white"
              >
                <CardContent className="p-8">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              We Build{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we transform your ideas into powerful digital experiences using cutting-edge
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Web Development */}
            <Card className="group hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mr-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Web Development</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Custom websites and web applications built with modern frameworks for optimal performance and user
                  experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30">
                    React.js
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 hover:bg-green-500/30">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30">
                    TypeScript
                  </Badge>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-cyan-400" />
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-cyan-400" />
                    SEO Optimization
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-cyan-400" />
                    Performance Optimization
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-cyan-400" />
                    Progressive Web Apps
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Mobile Development */}
            <Card className="group hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg mr-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Mobile Development</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Native and cross-platform mobile applications that deliver exceptional user experiences across all
                  devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 hover:bg-pink-500/30">
                    React Native
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30">
                    iOS
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300 hover:bg-green-500/30">
                    Android
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                    Flutter
                  </Badge>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-pink-400" />
                    Cross-Platform Development
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-pink-400" />
                    Native Performance
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-pink-400" />
                    App Store Deployment
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-pink-400" />
                    Push Notifications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blockchain */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mr-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Blockchain</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Decentralized applications, smart contracts, and blockchain integration solutions.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-yellow-400" />
                    Smart Contracts
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-yellow-400" />
                    DeFi Applications
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-yellow-400" />
                    NFT Platforms
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat Applications */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mr-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Chat Solutions</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Real-time messaging, video calls, and communication platforms with advanced features.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-green-400" />
                    Real-time Messaging
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-green-400" />
                    Video/Voice Calls
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-green-400" />
                    AI Chatbots
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Solutions */}
            <Card className="group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Custom Solutions</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">
                  Tailored software solutions designed specifically for your unique business requirements.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-purple-400" />
                    API Development
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-purple-400" />
                    Database Design
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-purple-400" />
                    Cloud Integration
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Our Development Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Requirements", desc: "We analyze your needs and define project scope" },
                { step: "02", title: "Design", desc: "Create wireframes and design mockups" },
                { step: "03", title: "Development", desc: "Build your solution with cutting-edge tech" },
                { step: "04", title: "Deployment", desc: "Launch and provide ongoing support" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-3"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
              Our Work
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our latest work and see how we have helped businesses transform their digital presence.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project) => (
              <Card
                key={project.id}
                className={`group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                    width={100}
                    height={100}
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <Button
                          size="sm"
                          className="bg-white/90 text-gray-900 hover:bg-white shadow-lg"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 text-gray-900 border-white hover:bg-white shadow-lg"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className={`
                          ${project.category === "Web" ? "bg-cyan-500/90 text-white" : ""}
                          ${project.category === "Mobile" ? "bg-pink-500/90 text-white" : ""}
                          ${project.category === "Blockchain" ? "bg-yellow-500/90 text-white" : ""}
                          ${project.category === "Chat" ? "bg-green-500/90 text-white" : ""}
                          backdrop-blur-sm
                        `}
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 px-8 py-3 text-lg"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
                About Us
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
                Empowering{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Innovation
                </span>{" "}
                Since 2020
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a team of passionate innovators, designers, and engineers who believe in the power of technology
                to transform businesses and lives. Our mission is to make cutting-edge technology accessible to
                everyone.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20"></div>
              <Image
              width={100}
              height={100}
                src="/placeholder.svg?height=500&width=600"
                alt="Our Team"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-700">
              Our Team
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Meet the{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, design, and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Design",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                    height={100}
                    width={100}
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-teal-100 text-teal-700">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              What our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                clients say
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "InnovateLab transformed our business completely. The platform is intuitive and the support is exceptional.",
                author: "David Kim",
                company: "TechStart Inc.",
              },
              {
                quote: "The best investment we've made. Our productivity increased by 300% within the first month.",
                author: "Lisa Wang",
                company: "Growth Dynamics",
              },
              {
                quote:
                  "Outstanding platform with incredible features. The team truly understands what businesses need.",
                author: "James Miller",
                company: "Future Solutions",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-purple-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30">
            Get Started
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              transform
            </span>{" "}
            your business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our platform to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-3">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  InnovateLab
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering businesses with cutting-edge technology solutions. Transform your ideas into reality with our
                innovative platform.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Creative Abstract. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
