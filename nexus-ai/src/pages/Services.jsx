import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Bot,
  Cloud,
  Database,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      desc: "Custom ML models for predictive analytics and pattern recognition",
      features: ["Predictive Analytics", "Pattern Recognition", "Auto-ML Pipelines"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      desc: "Intelligent conversational AI agents for customer engagement",
      features: ["24/7 Customer Support", "Natural Language Processing", "Multi-language Support"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      desc: "Data-driven insights and visualization for better decisions",
      features: ["Real-time Dashboards", "Predictive Insights", "Custom Reports"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Cloud,
      title: "Cloud AI",
      desc: "Scalable cloud-based AI solutions for enterprise needs",
      features: ["AWS/Azure/GCP", "Serverless Deployment", "Auto-scaling"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Database,
      title: "Data Processing",
      desc: "Big data and ETL pipelines for efficient data management",
      features: ["Data Cleaning", "Feature Engineering", "Data Integration"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "AI Security",
      desc: "Secure and compliant AI systems for data protection",
      features: ["Encryption", "Access Control", "GDPR Compliant"],
      color: "from-red-500 to-rose-500",
    },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Understand your business needs and goals" },
    { step: "02", title: "Strategy", desc: "Plan the AI solution architecture" },
    { step: "03", title: "Development", desc: "Build and train AI models" },
    { step: "04", title: "Deployment", desc: "Launch and integrate systems" },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      features: [
        "Basic AI Integration",
        "Email Support",
        "Up to 10K requests/month",
        "48hr Response Time",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      features: [
        "Advanced AI Models",
        "Priority Support",
        "Up to 100K requests/month",
        "24hr Response Time",
        "Custom Dashboard",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Full AI Suite",
        "Dedicated Support",
        "Unlimited Requests",
        "1hr Response Time",
        "On-premise Option",
        "SLA Guarantee",
      ],
      highlighted: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-blue-700">
                What We Offer
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined process to deliver exceptional AI solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105"
                    : "bg-white shadow-lg border border-gray-100 hover:shadow-xl"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm rounded-full font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-blue-600"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? "text-blue-100" : "text-gray-500"}>
                    {plan.period}
                  </span>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 ${
                        plan.highlighted ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-green-300" : "text-green-500"}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:shadow-lg"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                  }`}
                >
                  Get Started
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how our AI solutions can transform your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;