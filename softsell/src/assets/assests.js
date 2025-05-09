import { IoDocumentTextOutline } from "react-icons/io5";
import { GrDocumentVerified } from "react-icons/gr";
import { FaMoneyBillWave } from "react-icons/fa"

import { 
    ShieldCheckIcon,
    
    TrophyIcon,
    SparklesIcon 
  } from '@heroicons/react/24/outline';
  import { FaRegHeart } from "react-icons/fa";

export const  steps = [
    {
      number: "1",
      title: "Upload License",
      icon: IoDocumentTextOutline,
      description: "Simply upload your software license documentation through our secure portal",
    },
    {
      number: "2",
      title: "Get Valuation",
      icon: GrDocumentVerified,
      description: "Our experts analyze your license and provide you with a market-based valuation",
    },
    {
      number: "3",
      title: "Get Paid",
      icon: FaMoneyBillWave,
      description: "Receive payment directly to your account within 48 hours of accepting our offer",
    },
  ];

export  const features = [
    {
      title: "Trusted Security",
      description: "Advanced encryption and security protocols to protect your sensitive information at all times.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Dedicated Support",
      description: "24/7 customer service from our passionate team of experts who truly care about your success.",
      icon: FaRegHeart,
    },
    {
      title: "Proven Excellence",
      description: "Award-winning service with over 98% customer satisfaction rate and industry recognition.",
      icon: TrophyIcon,
    },
    {
      title: "Continuous Innovation",
      description: "Cutting-edge solutions that evolve with technology to keep you ahead of the competition.",
      icon: SparklesIcon,
    },
  ];

export  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechNova Solutions",
      quote: "Working with this team has completely transformed our marketing strategy. The results have exceeded our expectations and our conversion rates have increased by 40% in just three months.",
      image: "/yuzi.jpeg", // Replace with actual image URL
      rating: 5, // Number of stars
    },
    {
      name: "Michael Chen",
      role: "CTO, Quantum Innovations",
      quote: "The product integration was seamless and the support team was incredibly responsive. Our development time was cut in half, allowing us to launch ahead of schedule.",
      image: "/todo.jpeg", // Replace with actual image URL
      rating: 4, // Number of stars
    },
  ];

export  const licenseTypes = [
    "Personal License",
    "Business License",
    "Enterprise License",
    "Educational License"
  ];