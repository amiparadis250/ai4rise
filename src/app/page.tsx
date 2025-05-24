'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button, Card, Typography, Row, Col, Space } from 'antd'
import { 
  MapPin, 
  Users, 
  BookOpen, 
  Globe, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Facebook 
} from 'lucide-react'

const { Title, Paragraph, Text } = Typography

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/10 rounded-full"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default function AI4RISELanding() {
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
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-700 text-white overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
              "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))",
              "linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="absolute inset-0 bg-black/20" />
        <FloatingParticles />
        
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 flex items-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Main Title */}
              <motion.div variants={fadeInUp}>
                <Title 
                  level={1} 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
                >
                  <motion.span
                    className="inline-block bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                  >
                    AI4RISE
                  </motion.span>
                </Title>
              </motion.div>

              {/* Subtitle */}
              <motion.div variants={fadeInLeft}>
                <Title 
                  level={2} 
                  className="text-xl md:text-2xl mb-4 text-emerald-100 font-medium"
                >
                  <motion.span
                    animate={{ 
                      y: [0, -10, 0] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block"
                  >
                    AI for Rural Innovation, Skills, and Empowerment
                  </motion.span>
                </Title>
              </motion.div>

              {/* Description */}
              <motion.div variants={fadeInRight}>
                <Paragraph className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
                  <motion.span
                    animate={{ 
                      scale: [1, 1.02, 1] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-block"
                  >
                    Bringing AI literacy and digital empowerment to under-resourced secondary schools in rural Rwanda. 
                    Making AI a bridge, not a barrier, for the next generation.
                  </motion.span>
                </Paragraph>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={scaleIn}>
                <Space size="large" className="flex-wrap justify-center">
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
                      className="bg-white text-emerald-700 border-none font-semibold h-12 px-8 text-base hover:bg-emerald-50 hover:text-emerald-800"
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
                      className="border-white text-white bg-transparent font-semibold h-12 px-8 text-base hover:bg-white hover:text-emerald-700 hover:border-white"
                    >
                      Support Our Mission
                    </Button>
                  </motion.div>
                </Space>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
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
                const IconComponent = pillar.icon
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
                        className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        bodyStyle={{ padding: '2rem', textAlign: 'center' }}
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
                )
              })}
            </Row>
          </motion.div>
        </div>
      </section>

      {/* Mission & Location Section */}
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
                  Our Mission & Location
                </Title>
                
                <Space direction="vertical" size="large" className="w-full">
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Title level={4} className="text-xl font-semibold text-emerald-600 mb-2">
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
                      Where We Work
                    </Title>
                    <Paragraph className="text-gray-600 leading-relaxed">
                      Currently targeting 3-5 rural secondary schools across different regions of Rwanda, 
                      with plans to expand nationally and across East Africa.
                    </Paragraph>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Title level={4} className="text-xl font-semibold text-purple-600 mb-2">
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
                <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-0 shadow-lg">
                  <div className="text-center mb-8">
                    <Title level={3} className="text-2xl font-bold text-gray-900 mb-4">
                      Pilot Phase
                    </Title>
                    <Text className="text-gray-600">6-month program launching soon</Text>
                  </div>

                  <Space direction="vertical" size="middle" className="w-full">
                    {[
                      { color: 'bg-emerald-500', text: 'Curriculum development in English & Kinyarwanda' },
                      { color: 'bg-blue-500', text: 'Training 15-20 AI Ambassadors per school' },
                      { color: 'bg-purple-500', text: 'Providing AI-enabled devices and access' },
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <motion.div variants={fadeInUp}>
                  <Title level={3} className="text-2xl font-bold mb-4 text-white">
                    AI4RISE
                  </Title>
                  <Paragraph className="text-gray-300 mb-4">
                    Empowering rural Rwanda through AI literacy and digital skills education.
                  </Paragraph>
                  <Text className="text-sm text-gray-400">
                    Founded by a university student passionate about bridging the digital divide.
                  </Text>
                </motion.div>
              </Col>

              <Col xs={24} md={8}>
                <motion.div variants={fadeInUp}>
                  <Title level={4} className="text-lg font-semibold mb-4 text-white">
                    Contact
                  </Title>
                  <Space direction="vertical" size="middle">
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="w-5 h-5 text-emerald-400" />
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
                      <Phone className="w-5 h-5 text-emerald-400" />
                      <Text className="text-gray-300">+39 351 366 1846</Text>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <Text className="text-gray-300">Rwanda</Text>
                    </motion.div>
                  </Space>
                </motion.div>
              </Col>

              <Col xs={24} md={8}>
                <motion.div variants={fadeInUp}>
                  <Title level={4} className="text-lg font-semibold mb-4 text-white">
                    Follow Us
                  </Title>
                  <Space size="middle" className="mb-6">
                    {[
                      { Icon: Linkedin, color: 'hover:bg-blue-600' },
                      { Icon: Twitter, color: 'hover:bg-blue-400' },
                      { Icon: Facebook, color: 'hover:bg-blue-700' }
                    ].map(({ Icon, color }, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${color} transition-colors`}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </Space>
                  <div>
                    <Text className="text-sm text-gray-400 mb-2 block">Founder</Text>
                    <Text className="text-gray-300 font-medium">Cesar DUSHIMIMANA</Text>
                  </div>
                </motion.div>
              </Col>
            </Row>

            <motion.div 
              className="border-t border-gray-800 mt-8 pt-8 text-center"
              variants={fadeInUp}
            >
              <Text className="text-gray-400">
                © 2024 AI4RISE. All rights reserved. Making AI accessible for everyone.
              </Text>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}