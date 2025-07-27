import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Filter, Heart, Star, MessageCircle, Phone, Video } from "lucide-react";

interface Skill {
  id: string;
  title: string;
  description: string;
  teacher: {
    name: string;
    age: string;
    avatar: string;
    rating: number;
    verified: boolean;
  };
  category: string;
  likes: number;
  learningMethods: string[];
  location: string;
}

interface FilterState {
  category: string;
  learningMethod: string;
  ageGroup: string;
  location: string;
}

export default function FindSkills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: "",
    learningMethod: "",
    ageGroup: "",
    location: ""
  });

  const skills: Skill[] = [
    {
      id: "1",
      title: "Guitar Lessons for Beginners",
      description: "Learn basic chords, strumming patterns, and your first songs. Perfect for complete beginners.",
      teacher: {
        name: "Maria Rodriguez",
        age: "68",
        avatar: "👩‍🦳",
        rating: 4.9,
        verified: true
      },
      category: "Music",
      likes: 127,
      learningMethods: ["Video calls", "In-person"],
      location: "Local"
    },
    {
      id: "2",
      title: "Traditional Italian Cooking",
      description: "Family recipes passed down through generations. Learn to make authentic pasta, sauces, and desserts.",
      teacher: {
        name: "Giuseppe Romano",
        age: "72",
        avatar: "👨‍🦳",
        rating: 5.0,
        verified: true
      },
      category: "Cooking",
      likes: 89,
      learningMethods: ["In-person", "Video calls"],
      location: "Local"
    },
    {
      id: "3",
      title: "Smartphone Basics",
      description: "Learn to use your smartphone confidently. Apps, messaging, photos, and staying connected.",
      teacher: {
        name: "Alex Chen",
        age: "24",
        avatar: "👨",
        rating: 4.8,
        verified: true
      },
      category: "Technology",
      likes: 156,
      learningMethods: ["Video calls", "Voice messages", "In-person"],
      location: "Online"
    },
    {
      id: "4",
      title: "Gardening & Plant Care",
      description: "Grow your own vegetables and maintain a beautiful garden. Seasonal tips and organic methods.",
      teacher: {
        name: "Eleanor Williams",
        age: "65",
        avatar: "👩‍🦳",
        rating: 4.7,
        verified: true
      },
      category: "Gardening",
      likes: 78,
      learningMethods: ["In-person", "Text messages"],
      location: "Local"
    }
  ];

  const categories = ["Music", "Cooking", "Technology", "Gardening", "Arts & Crafts", "Languages", "Life Skills"];
  const learningMethods = ["Video calls", "In-person", "Text messages", "Voice messages"];
  const ageGroups = ["Young Adult (18-34)", "Adult (35-54)", "Wise Elder (55+)"];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !filters.category || skill.category === filters.category;
    const matchesMethod = !filters.learningMethod || skill.learningMethods.includes(filters.learningMethod);
    
    return matchesSearch && matchesCategory && matchesMethod;
  });

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors text-xl">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{color: 'rgb(74, 144, 226)'}}>
            Find Skills
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-semibold">
            Connect with teachers who want to share their knowledge
          </p>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="relative z-10 px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/30">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for skills, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 text-xl rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-village-violet text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-village-violet/90"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>

            {/* Filters */}
            {showFilters && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-lg">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="w-full p-3 text-lg rounded-xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-lg">Learning Method</label>
                  <select
                    value={filters.learningMethod}
                    onChange={(e) => setFilters({...filters, learningMethod: e.target.value})}
                    className="w-full p-3 text-lg rounded-xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                  >
                    <option value="">All Methods</option>
                    {learningMethods.map(method => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-lg">Teacher Age Group</label>
                  <select
                    value={filters.ageGroup}
                    onChange={(e) => setFilters({...filters, ageGroup: e.target.value})}
                    className="w-full p-3 text-lg rounded-xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                  >
                    <option value="">All Ages</option>
                    {ageGroups.map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <main className="relative z-10 px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <p className="text-gray-600 text-xl font-semibold">
              {filteredSkills.length} skills found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/30">
                {/* Skill Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{skill.title}</h3>
                    <span className="inline-block bg-village-violet text-white px-3 py-1 rounded-full text-sm font-bold">
                      {skill.category}
                    </span>
                  </div>
                  {skill.teacher.verified && (
                    <div className="bg-village-warm text-white rounded-full p-2">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg mb-4">{skill.description}</p>

                {/* Teacher Info */}
                <div className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="text-4xl">{skill.teacher.avatar}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-800">{skill.teacher.name}</h4>
                    <p className="text-gray-600">Age {skill.teacher.age}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="font-semibold">{skill.teacher.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Learning Methods */}
                <div className="mb-4">
                  <p className="text-gray-700 font-semibold mb-2">Available via:</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.learningMethods.map((method) => (
                      <span key={method} className="bg-village-pink/20 text-village-pink px-3 py-1 rounded-full text-sm font-semibold">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-village-red">
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="font-bold text-lg">{skill.likes}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={`/skill/${skill.id}`}
                      className="bg-village-pink hover:bg-village-pink/90 text-white px-6 py-3 rounded-xl font-bold text-lg"
                    >
                      Learn More
                    </Link>
                    <Link
                      to={`/connect/${skill.id}`}
                      className="bg-village-violet hover:bg-village-violet/90 text-white px-6 py-3 rounded-xl font-bold text-lg"
                    >
                      Connect
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/30">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">No skills found</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Try adjusting your search terms or filters
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setFilters({category: "", learningMethod: "", ageGroup: "", location: ""});
                  }}
                  className="bg-village-pink hover:bg-village-pink/90 text-white px-8 py-4 rounded-2xl font-bold text-xl"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
