import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Star, Users, Eye, MessageCircle, Edit3, Camera } from "lucide-react";

interface UserSkill {
  id: string;
  title: string;
  category: string;
  description: string;
  likes: number;
  matches: number;
  verified: boolean;
  createdAt: string;
}

interface UserProfile {
  name: string;
  avatar: string;
  age: string;
  location: string;
  memberSince: string;
  totalLikes: number;
  totalMatches: number;
  skillsShared: number;
  rating: number;
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState<"my-skills" | "matches" | "settings">("my-skills");
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data - in real app would come from authentication/database
  const userProfile: UserProfile = {
    name: "Maria Rodriguez",
    avatar: "👩‍🦳",
    age: "68",
    location: "San Francisco, CA",
    memberSince: "January 2024",
    totalLikes: 342,
    totalMatches: 28,
    skillsShared: 4,
    rating: 4.9
  };

  const userSkills: UserSkill[] = [
    {
      id: "1",
      title: "Guitar Lessons for Beginners",
      category: "Music",
      description: "Teaching basic chords, strumming patterns, and first songs",
      likes: 127,
      matches: 12,
      verified: true,
      createdAt: "2024-01-15"
    },
    {
      id: "2", 
      title: "Spanish Conversation Practice",
      category: "Languages",
      description: "Native Spanish speaker offering conversation practice",
      likes: 189,
      matches: 8,
      verified: true,
      createdAt: "2024-02-03"
    },
    {
      id: "3",
      title: "Traditional Mexican Cooking",
      category: "Cooking", 
      description: "Family recipes passed down through generations",
      likes: 156,
      matches: 15,
      verified: true,
      createdAt: "2024-02-20"
    },
    {
      id: "4",
      title: "Gardening for Small Spaces",
      category: "Gardening",
      description: "Growing herbs and vegetables in apartments and small yards",
      likes: 73,
      matches: 6,
      verified: false,
      createdAt: "2024-03-10"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-xl">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-title mb-4">
            My Profile
          </h1>
        </div>
      </header>

      <main className="relative z-10 px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 mb-8">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-village-pink/20 rounded-full flex items-center justify-center text-6xl border-4 border-village-pink">
                  {userProfile.avatar}
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-village-violet text-white rounded-full flex items-center justify-center shadow-lg hover:bg-village-violet/90 transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                  <h2 className="text-3xl font-bold text-gray-800">{userProfile.name}</h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-village-violet hover:text-village-violet/80 transition-colors"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xl text-gray-600 mb-2">Age {userProfile.age}</p>
                <p className="text-lg text-gray-500 mb-4">{userProfile.location}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-6 h-6 ${star <= userProfile.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{userProfile.rating}</span>
                </div>

                <p className="text-gray-500">Member since {userProfile.memberSince}</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-village-pink/10 rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-village-pink mb-1">{userProfile.skillsShared}</div>
                <div className="text-sm text-gray-600 font-semibold">Skills Shared</div>
              </div>
              <div className="bg-village-red/10 rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-village-red mb-1">{userProfile.totalLikes}</div>
                <div className="text-sm text-gray-600 font-semibold">Total Likes</div>
              </div>
              <div className="bg-village-violet/10 rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-village-violet mb-1">{userProfile.totalMatches}</div>
                <div className="text-sm text-gray-600 font-semibold">Matches</div>
              </div>
              <div className="bg-village-warm/10 rounded-2xl p-4 text-center">
                <div className="text-3xl font-bold text-village-warm mb-1">{userProfile.rating}</div>
                <div className="text-sm text-gray-600 font-semibold">Rating</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTab("my-skills")}
                className={`px-6 py-3 rounded-xl font-bold text-lg transition-colors ${
                  activeTab === "my-skills"
                    ? "bg-village-pink text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                My Skills ({userSkills.length})
              </button>
              <button
                onClick={() => setActiveTab("matches")}
                className={`px-6 py-3 rounded-xl font-bold text-lg transition-colors ${
                  activeTab === "matches"
                    ? "bg-village-pink text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Matches ({userProfile.totalMatches})
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-6 py-3 rounded-xl font-bold text-lg transition-colors ${
                  activeTab === "settings"
                    ? "bg-village-pink text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Settings
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "my-skills" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">My Skills</h3>
                  <Link
                    to="/create-skill"
                    className="bg-village-violet text-white px-6 py-3 rounded-xl font-bold hover:bg-village-violet/90 transition-colors"
                  >
                    Add New Skill
                  </Link>
                </div>

                <div className="space-y-4">
                  {userSkills.map((skill) => (
                    <div key={skill.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-xl font-bold text-gray-800">{skill.title}</h4>
                            {skill.verified && (
                              <div className="bg-village-warm text-white rounded-full p-1">
                                <Star className="w-4 h-4 fill-current" />
                              </div>
                            )}
                          </div>
                          <span className="inline-block bg-village-violet/20 text-village-violet px-3 py-1 rounded-full text-sm font-semibold mb-2">
                            {skill.category}
                          </span>
                          <p className="text-gray-600 text-lg mb-3">{skill.description}</p>
                          <p className="text-gray-500 text-sm">Created: {new Date(skill.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>

                      {/* Skill Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-village-red fill-current" />
                            <span className="text-lg font-bold text-gray-700">{skill.likes} likes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-village-violet" />
                            <span className="text-lg font-bold text-gray-700">{skill.matches} matches</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <button className="flex items-center gap-2 bg-village-pink text-white px-4 py-2 rounded-xl font-semibold hover:bg-village-pink/90 transition-colors">
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                          <button className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-600 transition-colors">
                            <Edit3 className="w-4 h-4" />
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "matches" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Matches</h3>
                <div className="space-y-4">
                  {[
                    { name: "John Smith", skill: "wants to learn Guitar", time: "2 hours ago", avatar: "👨" },
                    { name: "Lisa Chen", skill: "wants to learn Spanish", time: "1 day ago", avatar: "👩" },
                    { name: "Robert Johnson", skill: "wants to learn Cooking", time: "3 days ago", avatar: "👨‍🦲" },
                    { name: "Emily Davis", skill: "wants to learn Gardening", time: "1 week ago", avatar: "👩‍🦰" }
                  ].map((match, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-village-pink/20 rounded-full flex items-center justify-center text-2xl">
                            {match.avatar}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-800">{match.name}</h4>
                            <p className="text-gray-600 text-lg">{match.skill}</p>
                            <p className="text-gray-500 text-sm">{match.time}</p>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 bg-village-violet text-white px-6 py-3 rounded-xl font-bold hover:bg-village-violet/90 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          Message
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Profile Settings</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-3 text-xl">Display Name</label>
                    <input
                      type="text"
                      value={userProfile.name}
                      className="w-full p-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-3 text-xl">Location</label>
                    <input
                      type="text"
                      value={userProfile.location}
                      className="w-full p-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-3 text-xl">Bio</label>
                    <textarea
                      rows={4}
                      placeholder="Tell others about yourself and your teaching experience..."
                      className="w-full p-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                    />
                  </div>
                  <button className="bg-village-pink hover:bg-village-pink/90 text-white px-8 py-4 rounded-2xl font-bold text-xl">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
