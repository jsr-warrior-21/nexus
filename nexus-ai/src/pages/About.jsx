import React from 'react'
import { Target, Heart, Lightbulb, Users, Award, Globe } from 'lucide-react'

const About = () => {
  const values = [
    { icon: Target, title: 'Mission', desc: 'Democratize AI technology for businesses of all sizes' },
    { icon: Heart, title: 'Values', desc: 'Innovation, Integrity, Customer Success, Excellence' },
    { icon: Lightbulb, title: 'Vision', desc: 'A world where AI empowers every business decision' },
  ]

  const team = [
    { name: 'Dr. Sarah Chen', role: 'CEO & Founder', image: 'https://ui-avatars.com/api/?background=6366f1&color=fff&name=SC' },
    { name: 'James Wilson', role: 'CTO', image: 'https://ui-avatars.com/api/?background=8b5cf6&color=fff&name=JW' },
    { name: 'Dr. Maria Garcia', role: 'Head of AI Research', image: 'https://ui-avatars.com/api/?background=06b6d4&color=fff&name=MG' },
    { name: 'David Kim', role: 'Product Director', image: 'https://ui-avatars.com/api/?background=10b981&color=fff&name=DK' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NexGen AI</span></h1>
            <p className="text-xl text-gray-600">We're on a mission to revolutionize how businesses leverage artificial intelligence</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2020, NexGen AI emerged from a vision to make cutting-edge artificial intelligence accessible to every business. What started as a research project at Stanford University has grown into a global AI solutions provider.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, we serve over 500 clients across 30 countries, helping them harness the power of AI to drive innovation, efficiency, and growth.
              </p>
              <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Award-Winning AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold">Global Reach</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div>Clients</div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div>Countries</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div>Satisfaction</div>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div>Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform" />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About