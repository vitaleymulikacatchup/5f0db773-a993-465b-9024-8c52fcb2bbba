"use client"

import { Award, MessageCircle, Target, TrendingUp, Trophy, Users, Zap } from "lucide-react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Achievements", id: "feature" },
            { name: "Statistics", id: "metric" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Kristo Timuska"
          button={{
            text: "Get in Touch",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Kristo Timuska"
          description="Professional track and field athlete dedicated to pushing the boundaries of athletic performance and inspiring the next generation of runners"
          tag="Track & Field Athlete"
          tagIcon={Zap}
          imageSrc="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Focused athlete in starting position on a sunny track field, ready to sprint."
          buttons={[
            {
              text: "View Achievements",
              href: "feature"
            },
            {
              text: "Get in Touch",
              href: "contact"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Kristo"
          description={[
            "Born with natural speed and determination, Kristo Timuska has dedicated his life to the pursuit of athletic excellence in track and field.",
            "With years of rigorous training and competition experience, he continues to set new personal records while inspiring others to achieve their athletic goals."
          ]}
          showBorder={true}
          buttons={[
            {
              text: "View Statistics",
              href: "metric"
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Athletic Achievements"
          description="Highlighting key milestones and accomplishments in Kristo's track and field career"
          tag="Achievements"
          tagIcon={Trophy}
          features={[
            {
              title: "Sprint Specialist",
              description: "Competitive sprinter specializing in 100m and 200m events with consistent podium finishes",
              icon: Zap
            },
            {
              title: "Regional Champion",
              description: "Multiple regional championship titles and record-breaking performances in sprint events",
              icon: Award
            },
            {
              title: "Training Excellence",
              description: "Dedicated training regimen focused on speed, technique, and mental preparation",
              icon: Target
            },
            {
              title: "Team Leadership",
              description: "Mentoring young athletes and contributing to team success at various competitions",
              icon: Users
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Performance Statistics"
          description="Key performance indicators showcasing Kristo's athletic achievements and progress"
          tag="Stats"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "10.85s",
              description: "Personal Best 100m Sprint Time"
            },
            {
              id: "2",
              value: "21.92s",
              description: "Personal Best 200m Sprint Time"
            },
            {
              id: "3",
              value: "15+",
              description: "Competition Medals Won"
            },
            {
              id: "4",
              value: "8",
              description: "Years of Competitive Experience"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Others Say"
          description="Feedback from coaches, teammates, and fellow athletes about Kristo's dedication and performance"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Coach Sarah Johnson",
              role: "Head Track & Field Coach",
              testimonial: "Kristo's dedication to training and natural talent make him one of the most promising sprinters I've ever coached. His work ethic is truly exceptional.",
              imageSrc: "https://images.pexels.com/photos/16557381/pexels-photo-16557381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elderly man with a vintage camera at an outdoor stadium, ready for photography."
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Training Partner",
              testimonial: "Training alongside Kristo has pushed me to new levels. His competitive spirit and technical precision are inspiring to watch and learn from.",
              imageSrc: "https://images.pexels.com/photos/1349481/pexels-photo-1349481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Young American football player smiling and gesturing peace sign inside a team locker room."
            },
            {
              id: "3",
              name: "Dr. Lisa Martinez",
              role: "Sports Performance Analyst",
              testimonial: "Kristo's biomechanics and running efficiency are remarkable. His consistent improvement shows his commitment to perfecting every aspect of his technique.",
              imageSrc: "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A male trainer stands confidently in a modern boxing gym with vibrant lighting."
            },
            {
              id: "4",
              name: "Jake Thompson",
              role: "Fellow Athlete",
              testimonial: "Competing against Kristo always brings out the best in everyone. He's a fierce competitor but also a great sport and teammate.",
              imageSrc: "https://images.pexels.com/photos/3900848/pexels-photo-3900848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ballet teacher assisting a student with stretching exercises in a studio setting."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Whether you're interested in training opportunities, sponsorship, or just want to connect about track and field, I'd love to hear from you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "subject",
              type: "text",
              placeholder: "Subject",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Your message...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/3764538/pexels-photo-3764538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Two athletes, a man and a woman, ready to sprint on an indoor track, embodying fitness and determination."
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Kristo Timuska"
          columns={[
            {
              items: [
                { label: "About", href: "about" },
                { label: "Achievements", href: "feature" },
                { label: "Statistics", href: "metric" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Training", href: "#training" },
                { label: "Sponsorship", href: "#sponsorship" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}