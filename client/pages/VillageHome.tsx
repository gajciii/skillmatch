import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Users, Book, Lightbulb, Wrench, Star, Bell } from "lucide-react";

interface SkillCard {
  id: string;
  title: string;
  category: "help" | "offer";
  icon: string;
  likes: number;
  verified: boolean;
}

interface MapSkill {
  id: string;
  title: string;
  category: string;
  teacher: string;
  icon: string;
  position: { x: number; y: number };
  distance: string;
  verified: boolean;
}

export default function VillageHome() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const mapSkills: MapSkill[] = [
    {
      id: "guitar-1",
      title: "Guitar Lessons",
      category: "Music",
      teacher: "Maria Rodriguez",
      icon: "🎸",
      position: { x: 25, y: 35 },
      distance: "0.5 mi",
      verified: true
    },
    {
      id: "cooking-1",
      title: "Italian Cooking",
      category: "Cooking",
      teacher: "Giuseppe Romano",
      icon: "🍝",
      position: { x: 70, y: 20 },
      distance: "1.2 mi",
      verified: true
    },
    {
      id: "tech-1",
      title: "Smartphone Help",
      category: "Technology",
      teacher: "Alex Chen",
      icon: "📱",
      position: { x: 45, y: 65 },
      distance: "0.8 mi",
      verified: true
    },
    {
      id: "garden-1",
      title: "Gardening Tips",
      category: "Gardening",
      teacher: "Eleanor Williams",
      icon: "🌱",
      position: { x: 15, y: 75 },
      distance: "2.1 mi",
      verified: false
    },
    {
      id: "art-1",
      title: "Watercolor Painting",
      category: "Arts",
      teacher: "Sophie Martin",
      icon: "🎨",
      position: { x: 80, y: 55 },
      distance: "1.5 mi",
      verified: true
    },
    {
      id: "lang-1",
      title: "Spanish Conversation",
      category: "Languages",
      teacher: "Carlos Mendez",
      icon: "🗣️",
      position: { x: 35, y: 25 },
      distance: "0.3 mi",
      verified: true
    },
    {
      id: "fitness-1",
      title: "Yoga for Seniors",
      category: "Fitness",
      teacher: "Linda Johnson",
      icon: "🧘‍♀️",
      position: { x: 60, y: 80 },
      distance: "1.8 mi",
      verified: false
    },
    {
      id: "craft-1",
      title: "Knitting Basics",
      category: "Crafts",
      teacher: "Betty Cooper",
      icon: "🧶",
      position: { x: 85, y: 30 },
      distance: "2.3 mi",
      verified: true
    }
  ];

  const floatingSkills: SkillCard[] = [
    { id: "1", title: "Guitar Lessons", category: "offer", icon: "🎸", likes: 127, verified: true },
    { id: "2", title: "Smartphone Support", category: "help", icon: "📱", likes: 23, verified: false },
    { id: "3", title: "Traditional Cooking", category: "offer", icon: "🍳", likes: 89, verified: true },
    { id: "4", title: "Social Media Help", category: "help", icon: "💻", likes: 45, verified: false }
  ];

  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">


      {/* Header */}
      <header className="relative z-10 p-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{color: 'rgba(74, 144, 226, 1)'}}>
          Skill Match
        </h1>
        <p className="text-2xl md:text-3xl font-semibold" style={{color: 'rgba(155, 155, 155, 1)'}}>
          Connect • Learn • Share across generations
        </p>
      </header>

      {/* Village Map */}
      <main className="relative z-10 flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Interactive Map */}
          <div className="relative h-80 md:h-96 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl mb-8 overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0">
              {/* Streets/Roads */}
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-400/30"></div>
              <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-400/30"></div>
              <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-400/30"></div>
              <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-gray-400/30"></div>

              {/* Parks/Green Areas */}
              <div className="absolute top-10 left-10 w-16 h-12 bg-green-300/20 rounded-xl"></div>
              <div className="absolute bottom-10 right-10 w-20 h-16 bg-green-300/20 rounded-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-green-300/20 rounded-full"></div>

              {/* Buildings */}
              <div className="absolute top-6 right-20 w-8 h-8 bg-gray-300/30 rounded"></div>
              <div className="absolute bottom-20 left-20 w-6 h-10 bg-gray-300/30 rounded"></div>
              <div className="absolute top-20 left-1/3 w-10 h-6 bg-gray-300/30 rounded"></div>
            </div>

            {/* Skills on Map */}
            {mapSkills.map((skill) => (
              <Link
                key={skill.id}
                to="/skill-match"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${skill.position.x}%`, top: `${skill.position.y}%` }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Marker */}
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-village-pink flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>

                  {/* Verified Badge */}
                  {skill.verified && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-village-warm rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-gray-700 fill-current" />
                    </div>
                  )}

                  {/* Hover Card */}
                  {hoveredSkill === skill.id && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/30 whitespace-nowrap z-10">
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-1" style={{color: 'rgba(74, 144, 226, 1)'}}>{skill.title}</h3>
                        <p className="text-gray-600 text-sm mb-1">by {skill.teacher}</p>
                        <p className="text-village-pink font-semibold text-sm">{skill.distance} away</p>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
                    </div>
                  )}
                </div>
              </Link>
            ))}

            {/* Map Legend */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
              <h3 className="font-bold text-lg mb-2" style={{color: 'rgba(74, 144, 226, 1)'}}>Skills Near You</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-3 h-3 bg-village-pink rounded-full"></div>
                <span>Available Skills</span>
              </div>
            </div>

            {/* Distance Scale */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-10 h-1 bg-gray-400"></div>
                <span>1 mile</span>
              </div>
            </div>
          </div>

          {/* Floating Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {floatingSkills.map((skill, index) => (
              <Link
                key={skill.id}
                to="/skill-match"
                className="group cursor-pointer"
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                  
                  {/* Verified Badge */}
                  {skill.verified && (
                    <div className="absolute -top-2 -right-2 bg-village-warm text-gray-700 rounded-full p-1">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  )}
                  
                  {/* Skill Icon */}
                  <div className="text-4xl mb-3 text-center">{skill.icon}</div>

                  {/* Skill Title */}
                  <h3 className="font-bold text-center mb-3 text-lg" style={{color: 'rgba(74, 144, 226, 1)'}}>
                    {skill.title}
                  </h3>
                  
                  {/* Category Badge */}
                  <div className={`
                    inline-block px-3 py-2 rounded-full text-sm font-bold mb-3
                    ${skill.category === 'offer'
                      ? 'bg-village-violet text-gray-700'
                      : 'bg-village-pink text-gray-700'
                    }
                  `}>
                    {skill.category === 'offer' ? 'Teaching' : 'Learning'}
                  </div>
                  
                  {/* Likes Counter */}
                  <div className="flex items-center justify-center gap-2 text-village-red">
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="text-lg font-bold">{skill.likes}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="bg-brand-button hover:bg-brand-button/90 text-brand-button-text px-10 py-6 rounded-2xl font-bold text-2xl shadow-lg"
            >
              Get Started
            </Link>

            <Link
              to="/skill-match"
              className="bg-brand-button hover:bg-brand-button/90 text-brand-button-text px-10 py-6 rounded-2xl font-bold text-2xl shadow-lg"
            >
              Find Skills
            </Link>

            <Link
              to="/create-skill"
              className="bg-brand-button hover:bg-brand-button/90 text-brand-button-text px-10 py-6 rounded-2xl font-bold text-2xl shadow-lg"
            >
              Share Skills
            </Link>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <Link
          to="/profile"
          className="block w-16 h-16 bg-brand-button hover:bg-brand-button/90 rounded-full shadow-lg"
        >
          <div className="w-full h-full flex items-center justify-center text-brand-button-text">
            <Users className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </div>
  );
}
