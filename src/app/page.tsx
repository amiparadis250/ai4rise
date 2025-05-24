"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Typography, Row, Col, Space, Menu } from 'antd';
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
  Contact
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
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

// Hero Section Component
const Hero = () => {
  return (
    <motion.section className="relative flex h-[492px] items-center overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 [mask-image:linear-gradient(to_bottom,transparent,black_0%,black_100%,transparent)] dark:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]">
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
      <div className="container relative mt-16">
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
            <div className="flex justify-center space-x-4">
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
                  className="bg-white text-purple-700 border-none font-semibold h-12 px-8 text-base hover:bg-purple-50 hover:text-purple-800"
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
                  className="border-white text-white bg-transparent font-semibold h-12 px-8 text-base hover:bg-white/10 hover:border-white/80"
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
    <section className="py-20 bg-gray-50">
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

// Mission Section
const Mission = () => {
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
              whileHover={{
                scale: 1.02,
                y: -5
              }}
            >
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-lg rounded-xl overflow-hidden">
                <div className="text-center mb-8">
                  <Title level={3} className="text-2xl font-bold text-gray-900 mb-4">
                    Pilot Phase
                  </Title>
                  <Text className="text-gray-600">6-month program launching soon</Text>
                </div>

                <Space direction="vertical" size="middle" className="w-full">
                  {[
                    { color: 'bg-purple-500', text: 'Curriculum development in English & Kinyarwanda' },
                    { color: 'bg-blue-500', text: 'Training 15-20 AI Ambassadors per school' },
                    { color: 'bg-emerald-500', text: 'Providing AI-enabled devices and access' },
                    { color: 'bg-orange-500', text: 'Regular monitoring and impact assessment' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`w-3 h-3 ${item.color} rounded-full`}
                        animate={{
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />
                      <Text className="text-gray-700">{item.text}</Text>
                    </motion.div>
                  ))}
                </Space>
              </Card>
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
  const [current, setCurrent] = React.useState('home');

  const onClick = (e) => {
    setCurrent(e.key);
    // Scroll to section
    const element = document.getElementById(e.key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto px-4">
          <Menu 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            className="bg-transparent border-b-0"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home" icon={<Home className="w-5 h-5" />} className="text-white hover:text-purple-300">
              Home
            </Menu.Item>
            <Menu.Item key="about" icon={<Info className="w-5 h-5" />} className="text-white hover:text-purple-300">
              About
            </Menu.Item>
            <Menu.Item key="programs" icon={<Book className="w-5 h-5" />} className="text-white hover:text-purple-300">
              Programs
            </Menu.Item>
            <Menu.Item key="contact" icon={<Contact className="w-5 h-5" />} className="text-white hover:text-purple-300">
              Contact
            </Menu.Item>
          </Menu>
        </div>
      </motion.div>

      <div id="home">
        <Hero />
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