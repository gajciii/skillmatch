import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Star, Users, MapPin, Clock, Calendar, MessageCircle, Video, Phone, Award } from "lucide-react";

export default function SkillDetail() {
  const { skillId } = useParams();

  // Mock data - in real app would fetch based on skillId
  const skillData = {
    id: skillId,
    title: "Guitar Lessons for Beginners",
    description: "Learn basic chords, strumming patterns, and your first songs. Perfect for complete beginners who want to start their musical journey. I'll teach you everything from holding the guitar properly to playing your first complete song.",
    category: "Music",
    icon: "🎸",
    likes: 127,
    difficulty: "Beginner",
    duration: "1 hour per session",
    location: "In-person or Video Call",
    price: "Free",
    learningMethods: ["Video calls", "In-person", "Voice messages"],
    teacher: {
      name: "Maria Rodriguez",
      age: "68",
      avatar: "👩‍🦳",
      rating: 4.9,
      totalReviews: 45,
      verified: true,
      location: "San Francisco, CA",
      distance: "0.5 mi away",
      memberSince: "January 2024",
      totalStudents: 38,
      responseTime: "Usually responds within 2 hours",
      languages: ["English", "Spanish"],
      bio: "I've been playing guitar for over 40 years and love sharing the joy of music with others. I specialize in teaching beginners and making learning fun and stress-free. Whether you want to play around the campfire or perform on stage, I'll help you get there!",
      achievements: [
        "🏆 Top Rated Teacher 2024",
        "🎵 50+ Students Taught",
        "⭐ 4.9 Average Rating",
        "✅ Background Verified"
      ]
    },
    curriculum: [
      {
        lesson: 1,
        title: "Getting Started",
        description: "Proper posture, holding the guitar, and basic finger positioning",
        duration: "30 minutes"
      },
      {
        lesson: 2,
        title: "First Chords",
        description: "Learn G, C, and D chords - the foundation of hundreds of songs",
        duration: "45 minutes"
      },
      {
        lesson: 3,
        title: "Strumming Patterns",
        description: "Basic down and up strums, rhythm, and timing",
        duration: "30 minutes"
      },
      {
        lesson: 4,
        title: "Your First Song",
        description: "Put it all together and play a complete song!",
        duration: "45 minutes"
      }
    ],
    reviews: [
      {
        student: "John D.",
        avatar: "👨",
        rating: 5,
        date: "2 weeks ago",
        comment: "Maria is incredibly patient and encouraging. I went from never touching a guitar to playing 3 songs in just one month!"
      },
      {
        student: "Sarah M.",
        avatar: "👩",
        rating: 5,
        date: "1 month ago", 
        comment: "Amazing teacher! She explains everything clearly and makes learning fun. Highly recommend!"
      },
      {
        student: "Robert L.",
        avatar: "👨‍🦲",
        rating: 4,
        date: "2 months ago",
        comment: "Great lessons, very organized curriculum. Maria really knows how to teach beginners."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/skill-match" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-xl">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Skills
          </Link>
        </div>
      </header>

      <main className="relative z-10 px-6 pb-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Skill Header */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-6xl">{skillData.icon}</div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{skillData.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-village-violet text-white px-4 py-2 rounded-full font-bold">{skillData.category}</span>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">{skillData.difficulty}</span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">{skillData.price}</span>
                </div>
                <p className="text-xl text-gray-600 mb-4">{skillData.description}</p>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-village-red fill-current" />
                  <span className="text-lg font-bold text-gray-700">{skillData.likes} likes</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <Clock className="w-6 h-6 text-village-violet" />
                <div>
                  <p className="font-semibold text-gray-800">Duration</p>
                  <p className="text-gray-600">{skillData.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-village-red" />
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">{skillData.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <Users className="w-6 h-6 text-village-pink" />
                <div>
                  <p className="font-semibold text-gray-800">Students Taught</p>
                  <p className="text-gray-600">{skillData.teacher.totalStudents} students</p>
                </div>
              </div>
            </div>

            {/* Connect Button */}
            <div className="text-center">
              <Link
                to={`/connect/${skillId}`}
                className="bg-village-pink hover:bg-village-pink/90 text-white px-12 py-6 rounded-2xl font-bold text-2xl shadow-lg inline-block transition-colors"
              >
                Connect with {skillData.teacher.name}
              </Link>
            </div>
          </div>

          {/* Teacher Profile */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">About Your Teacher</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Avatar and basic info */}
              <div className="text-center md:text-left">
                <div className="w-32 h-32 bg-village-pink/20 rounded-full flex items-center justify-center text-6xl border-4 border-village-pink mx-auto md:mx-0 mb-4 relative">
                  {skillData.teacher.avatar}
                  {skillData.teacher.verified && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-village-warm rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white fill-current" />
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{skillData.teacher.name}</h3>
                <p className="text-lg text-gray-600 mb-2">Age {skillData.teacher.age}</p>
                <p className="text-village-pink font-semibold mb-2">{skillData.teacher.distance}</p>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <span className="font-bold text-lg">{skillData.teacher.rating}</span>
                  <span className="text-gray-600">({skillData.teacher.totalReviews} reviews)</span>
                </div>
                <p className="text-gray-500">{skillData.teacher.responseTime}</p>
              </div>

              {/* Bio and details */}
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-4">{skillData.teacher.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Languages</p>
                    <p className="text-gray-600">{skillData.teacher.languages.join(", ")}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Member Since</p>
                    <p className="text-gray-600">{skillData.teacher.memberSince}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-gray-800 mb-2">Achievements</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {skillData.teacher.achievements.map((achievement, index) => (
                      <div key={index} className="bg-village-pink/10 rounded-lg p-2 text-sm font-semibold text-gray-700">
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-village-violet text-white px-6 py-3 rounded-xl font-bold hover:bg-village-violet/90 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Send Message
              </button>
              <button className="flex items-center gap-2 bg-village-red text-white px-6 py-3 rounded-xl font-bold hover:bg-village-red/90 transition-colors">
                <Video className="w-5 h-5" />
                Video Call
              </button>
              <button className="flex items-center gap-2 bg-village-warm text-white px-6 py-3 rounded-xl font-bold hover:bg-village-warm/90 transition-colors">
                <Phone className="w-5 h-5" />
                Phone Call
              </button>
            </div>
          </div>

          {/* Curriculum */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
            
            <div className="space-y-4">
              {skillData.curriculum.map((lesson) => (
                <div key={lesson.lesson} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-village-pink rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {lesson.lesson}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
                      <p className="text-gray-600 text-lg mb-2">{lesson.description}</p>
                      <div className="flex items-center gap-2 text-village-violet">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{lesson.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Reviews</h2>
            
            <div className="space-y-6">
              {skillData.reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-village-pink/20 rounded-full flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-800 text-lg">{review.student}</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-700 text-lg">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
