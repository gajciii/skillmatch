import { useParams, Link } from "react-router-dom";
import { Heart, MessageCircle, Phone, Video, ArrowLeft, Star } from "lucide-react";

export default function ItsAMatch() {
  const { skillId } = useParams();

  // Mock data - in real app would fetch based on skillId
  const matchData = {
    skill: {
      title: "Guitar Lessons for Beginners",
      category: "Music",
      icon: "����"
    },
    teacher: {
      name: "Maria Rodriguez",
      age: "68",
      avatar: "👩‍🦳",
      rating: 4.9,
      verified: true,
      location: "0.5 mi away"
    },
    student: {
      name: "You",
      avatar: "👨‍💼"
    }
  };

  return (
    <div className="min-h-screen bg-brand-background flex items-center justify-center relative overflow-hidden">

      {/* Back button */}
      <Link
        to="/skill-match"
        className="absolute top-6 left-6 inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors text-xl z-10"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Back to Skills
      </Link>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Match celebration */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{color: 'rgb(74, 144, 226)'}}>
            It's a Match!
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-semibold">
            You and {matchData.teacher.name} are connected!
          </p>
        </div>

        {/* Match visualization */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 mb-8">
          {/* Avatars with connecting heart */}
          <div className="flex items-center justify-center gap-8 mb-6">
            {/* Student avatar */}
            <div className="text-center">
              <div className="w-24 h-24 bg-village-pink/20 rounded-full flex items-center justify-center text-4xl border-4 border-village-pink mb-2">
                {matchData.student.avatar}
              </div>
              <p className="font-bold text-gray-800 text-lg">{matchData.student.name}</p>
              <p className="text-gray-600">Age 28</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm font-semibold">4.3</span>
              </div>
            </div>

            {/* Connecting icon */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-village-red rounded-full flex items-center justify-center mb-2 shadow-lg">
                <i className="fi fi-sr-refresh text-white text-2xl"></i>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-2xl">{matchData.skill.icon}</div>
                <span className="text-sm font-semibold text-gray-600">{matchData.skill.category}</span>
              </div>
            </div>

            {/* Teacher avatar */}
            <div className="text-center">
              <div className="w-24 h-24 bg-village-violet/20 rounded-full flex items-center justify-center text-4xl border-4 border-village-violet mb-2 relative">
                {matchData.teacher.avatar}
                {matchData.teacher.verified && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-village-warm rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                )}
              </div>
              <p className="font-bold text-gray-800 text-lg">{matchData.teacher.name}</p>
              <p className="text-gray-600">Age {matchData.teacher.age}</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm font-semibold">{matchData.teacher.rating}</span>
              </div>
            </div>
          </div>

          {/* Skill info */}
          <div className="bg-village-pink/10 rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{matchData.skill.title}</h3>
            <p className="text-lg text-gray-600">
              You're now connected with {matchData.teacher.name} for {matchData.skill.category.toLowerCase()} lessons!
            </p>
            <p className="text-village-pink font-semibold mt-2">{matchData.teacher.location}</p>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-800 mb-4">How would you like to connect?</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to={`/messages/${skillId}`}
                className="flex flex-col items-center gap-3 bg-village-pink hover:bg-village-pink/90 text-white p-6 rounded-2xl font-bold text-lg transition-colors shadow-lg"
              >
                <MessageCircle className="w-8 h-8" />
                Send Message
              </Link>

              <Link
                to={`/call/${skillId}`}
                className="flex flex-col items-center gap-3 bg-village-violet hover:bg-village-violet/90 text-white p-6 rounded-2xl font-bold text-lg transition-colors shadow-lg"
              >
                <Phone className="w-8 h-8" />
                Schedule Call
              </Link>

              <Link
                to={`/video/${skillId}`}
                className="flex flex-col items-center gap-3 bg-village-red hover:bg-village-red/90 text-white p-6 rounded-2xl font-bold text-lg transition-colors shadow-lg"
              >
                <Video className="w-8 h-8" />
                Video Chat
              </Link>
            </div>

            {/* Secondary actions */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link
                to={`/skill/${skillId}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition-colors"
              >
                View Full Profile
              </Link>
              <Link
                to="/skill-match"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold transition-colors"
              >
                Find More Skills
              </Link>
            </div>
          </div>
        </div>

        {/* Celebration message */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <p className="text-xl text-gray-800 font-semibold">
            🌟 Great choice! {matchData.teacher.name} has helped {Math.floor(Math.random() * 50) + 20} other students learn {matchData.skill.category.toLowerCase()}.
          </p>
        </div>
      </div>
    </div>
  );
}
