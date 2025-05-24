"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, Typography, Row, Col, Space } from 'antd';
import {
  MapPin,
  Users,
  BookOpen,
  Globe,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Home,
  Info,
  Book,
  Contact,
  Menu,
  X,
  CheckCircle
} from 'lucide-react';

const { Title, Paragraph, Text } = Typography;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Navigation Component - FIXED
interface NavigationProps {
  current: string;
  onClick: (e: { key: string }) => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, onClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { key: "home", icon: Home, label: "Home" },
    { key: "about", icon: Info, label: "About" },
    { key: "programs", icon: Book, label: "Programs" },
    { key: "contact", icon: Contact, label: "Contact" }
  ];

  const handleMenuClick = (key: string) => {
    onClick({ key });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                current === item.key
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Mobile Hamburger Button */}
      <motion.button
        className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Mobile Menu Overlay - FIXED: Added fixed positioning and matching background */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-64 bg-gradient-to-br from-purple-900 to-indigo-900 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background elements matching hero */}
              <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(147,113,255,.5)_15%,rgb(79,70,229,.5)_78%,transparent)]" />
              
              {/* Close button */}
              <div className="absolute top-6 right-6">
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>

              <div className="relative p-6 pt-20">
                <nav className="space-y-4">
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.button
                        key={item.key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleMenuClick(item.key)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm ${
                          current === item.key
                            ? 'bg-white/20 text-white shadow-lg'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Hero Section Component
interface HeroProps {
  current: string;
  onClick: (e: { key: string }) => void;
}

const Hero: React.FC<HeroProps> = ({ current, onClick }) => {
  return (
    <motion.section className="relative flex h-[492px] items-center overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 [mask-image:linear-gradient(to_bottom,transparent,black_0%,black_100%,transparent)] dark:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]">
      {/* Navigation Header - FIXED: Added fixed positioning */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title level={3} className="text-2xl font-bold text-white m-0">
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  AI4RISE
                </span>
              </Title>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Navigation current={current} onClick={onClick} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(147,113,255,.5)_15%,rgb(79,70,229,.5)_78%,transparent)]" />

      {/* Central Circle */}
      <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-gradient-to-br from-pink-500 to-purple-600 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(243,237,255)_37.7%,rgb(168,85,247))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(147,113,255)] md:size-96" />

      {/* Animated Circles */}
      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 size-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:size-[580px]"
      >
        <div className="absolute left-0 top-1/2 inline-flex size-2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white" />
        <div className="absolute left-1/2 top-0 inline-flex size-2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white" />
        <div className="absolute left-full top-1/2 inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white" />
        <div className="size-2 rounded-full bg-white" />
      </motion.div>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 size-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 md:size-[780px]"
      />

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 size-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:size-[980px]"
      >
        <div className="absolute left-0 top-1/2 inline-flex size-2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white" />
        <div className="absolute left-full top-1/2 inline-flex size-2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white" />
      </motion.div>

      {/* Content */}
      <div className="container relative mx-auto px-4 mt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Main Title */}
          <motion.div variants={fadeInUp}>
            <Title
              level={1}
              className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(168,85,247,.5))] bg-clip-text text-center text-7xl font-semibold tracking-tighter text-transparent md:text-[164px] md:leading-none"
            >
              AI4RISE
            </Title>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeInUp}>
            <Title
              level={2}
              className="text-xl md:text-2xl mb-4 text-pink-200 font-medium text-center"
            >
              AI for Rural Innovation, Skills, and Empowerment
            </Title>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUp}>
            <Paragraph className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90 text-center">
              Bringing AI literacy and digital empowerment to under-resourced secondary schools in rural Rwanda.
              Making AI a bridge, not a barrier, for the next generation.
            </Paragraph>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="primary"
                  size="large"
                  className="bg-white text-purple-700 border-none font-semibold h-12 px-8 text-base hover:bg-purple-50 hover:text-purple-800 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="large"
                  className="border-white text-white bg-transparent font-semibold h-12 px-8 text-base hover:bg-white/10 hover:border-white/80 w-full sm:w-auto"
                >
                  Support Our Mission
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// What We Do Section
const WhatWeDo = () => {
  const pillarsData = [
    {
      icon: Globe,
      title: "Language Empowerment",
      description: "Using AI tools to help students practice English, improve communication skills, and build confidence.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: BookOpen,
      title: "Personal Tutoring",
      description: "Training students to use AI for subject-specific learning, research, and enhanced comprehension.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Critical Thinking",
      description: "Teaching students to understand AI limitations, identify misinformation, and engage ethically with technology.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: MapPin,
      title: "Global Opportunities",
      description: "Connecting students with global knowledge, career paths, and educational opportunities through AI.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <Title level={2} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </Title>
          <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our program is built on four key pillars designed to empower rural students with AI literacy and digital skills.
          </Paragraph>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <Row gutter={[32, 32]}>
            {pillarsData.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
                      bodyStyle={{ padding: '2rem', textAlign: 'center' }}
                      hoverable
                    >
                      <motion.div
                        className={`w-16 h-16 ${pillar.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className={`w-8 h-8 ${pillar.color}`} />
                      </motion.div>
                      <Title level={4} className="text-xl font-semibold mb-3 text-gray-900">
                        {pillar.title}
                      </Title>
                      <Paragraph className="text-gray-600">
                        {pillar.description}
                      </Paragraph>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

// Circular Progress Component for Pilot Phase - NEW
const CircularProgress = ({ steps }: { steps: Array<{ title: string; description: string; color: string }> }) => {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Central circle */}
      <div className="absolute inset-0 rounded-full border-4 border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Title level={4} className="text-lg font-bold text-gray-900 mb-1">
            6 Months
          </Title>
          <Text className="text-gray-600 text-sm">Pilot Program</Text>
        </div>
      </div>

      {/* Progress steps arranged in circle */}
      {steps.map((step, index) => {
        const angle = (index * 360) / steps.length - 90; // Start from top
        const radian = (angle * Math.PI) / 180;
        const radius = 140;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return (
          <motion.div
            key={index}
            className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className={`w-full h-full rounded-full ${step.color} flex items-center justify-center shadow-lg border-4 border-white cursor-pointer group relative`}>
              <CheckCircle className="w-6 h-6 text-white" />
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white p-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="font-semibold">{step.title}</div>
                <div className="text-gray-300 text-xs max-w-32">{step.description}</div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Mission Section - UPDATED with circular pilot phase
const Mission = () => {
  const pilotSteps = [
    {
      title: "Curriculum Development",
      description: "Creating materials in English & Kinyarwanda",
      color: "bg-purple-500"
    },
    {
      title: "AI Ambassador Training",
      description: "Training 15-20 students per school",
      color: "bg-blue-500"
    },
    {
      title: "Device & Access Setup",
      description: "Providing AI-enabled devices and connectivity",
      color: "bg-emerald-500"
    },
    {
      title: "Impact Assessment",
      description: "Regular monitoring and evaluation",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              transition={{ duration: 0.8 }}
            >
              <Title level={2} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </Title>

              <Space direction="vertical" size="large" className="w-full">
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Title level={4} className="text-xl font-semibold text-purple-600 mb-2">
                    Our Vision
                  </Title>
                  <Paragraph className="text-gray-600 leading-relaxed">
                    To make AI a bridge, not a barrier, for rural students in Rwanda by equipping them with the mindset,
                    skills, and tools to participate in the digital economy.
                  </Paragraph>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Title level={4} className="text-xl font-semibold text-blue-600 mb-2">
                    Our Impact Goal
                  </Title>
                  <Paragraph className="text-gray-600 leading-relaxed">
                    Equipping 1,500+ students in 6 months with foundational AI awareness and tools,
                    building a replicable model for scale across the region.
                  </Paragraph>
                </motion.div>
              </Space>
            </motion.div>
          </Col>

          <Col xs={24} lg={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Title level={3} className="text-2xl font-bold text-gray-900 mb-8">
                Pilot Phase Process
              </Title>
              
              <CircularProgress steps={pilotSteps} />
              
              <Text className="text-gray-600 mt-6 block">
                A comprehensive 6-month program designed for maximum impact and scalability
              </Text>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com" },
    { icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com" }
  ];

  const footerLinks = [
    { title: "About", links: ["Our Story", "Team", "Partners", "Impact"] },
    { title: "Programs", links: ["AI Literacy", "Teacher Training", "Student Ambassadors"] },
    { title: "Get Involved", links: ["Donate", "Volunteer", "Partner With Us"] }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <Row gutter={[48, 48]}>
            <Col xs={24} md={8}>
              <motion.div variants={fadeInUp}>
                <Title level={3} className="text-2xl font-bold mb-6 text-white flex items-center">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    AI4RISE
                  </span>
                </Title>
                <Paragraph className="text-gray-300 mb-6 leading-relaxed">
                  Empowering rural Rwanda through AI literacy and digital skills education.
                </Paragraph>
                <div className="flex space-x-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <Text className="text-sm text-gray-400">
                  © {new Date().getFullYear()} AI4RISE. All rights reserved.
                </Text>
              </motion.div>
            </Col>

            {footerLinks.map((section, index) => (
              <Col xs={24} md={5} key={index}>
                <motion.div variants={fadeInUp} transition={{ delay: index * 0.1 }}>
                  <Title level={4} className="text-lg font-semibold mb-6 text-white">
                    {section.title}
                  </Title>
                  <Space direction="vertical" size="middle" className="w-full">
                    {section.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href="#"
                        className="text-gray-300 hover:text-purple-400 transition-colors block"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    ))}
                  </Space>
                </motion.div>
              </Col>
            ))}

            <Col xs={24} md={6}>
              <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
                <Title level={4} className="text-lg font-semibold mb-6 text-white">
                  Contact Us
                </Title>
                <Space direction="vertical" size="middle" className="w-full">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5 text-purple-400" />
                    <a
                      href="mailto:dushimezar2003@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      dushimezar2003@gmail.com
                    </a>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-5 h-5 text-purple-400" />
                    <Text className="text-gray-300">+39 351 366 1846</Text>
                  </motion.div>
                  <motion.div
                    className="mt-4 pt-4 border-t border-gray-800"
                    whileHover={{ x: 5 }}
                  >
                    <Text className="text-sm text-gray-400 mb-2 block">Founder</Text>
                    <Text className="text-gray-300 font-medium">Cesar DUSHIMIMANA</Text>
                  </motion.div>
                </Space>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            className="border-t border-gray-800 mt-12 pt-8 text-center"
            variants={fadeInUp}
          >
            <Text className="text-gray-400 text-sm">
              Making AI accessible for everyone. Based in Rwanda with global impact.
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

// Main Component
export default function AI4RISELanding() {
  const [current, setCurrent] = useState('home');

  const onClick = (e: { key: string }) => {
    setCurrent(e.key);
    // Scroll to section with offset for fixed header
    const element = document.getElementById(e.key);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div id="home">
        <Hero current={current} onClick={onClick} />
      </div>
      <div id="about">
        <WhatWeDo />
      </div>
      <div id="programs">
        <Mission />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}