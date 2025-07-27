import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Phone, PhoneOff, Mic, MicOff, Video } from "lucide-react";
import { useState } from "react";

export default function Call() {
  const { skillId } = useParams();
  const [isMuted, setIsMuted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  // Mock data - in real app would fetch based on skillId
  const callData = {
    skill: {
      title: "Guitar Lessons for Beginners",
      category: "Music"
    },
    teacher: {
      name: "Maria Rodriguez",
      avatar: "👩‍🦳",
      status: isConnected ? "Connected" : "Calling..."
    }
  };

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4 flex items-center justify-between">
        <Link
          to={`/connect/${skillId}`}
          className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Match
        </Link>
        <h1 className="text-xl font-bold text-gray-800">Voice Call</h1>
        <div className="w-20"></div> {/* Spacer for centering */}
      </div>

      {/* Call Interface */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Teacher Info */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-village-violet/20 rounded-full flex items-center justify-center text-6xl border-4 border-village-violet mb-4 mx-auto">
            {callData.teacher.avatar}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{callData.teacher.name}</h2>
          <p className="text-lg text-gray-600 mb-1">{callData.skill.title}</p>
          <p className="text-village-violet font-semibold">{callData.teacher.status}</p>
        </div>

        {/* Call Controls */}
        <div className="flex items-center gap-6">
          {/* Mute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors shadow-lg ${
              isMuted 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>

          {/* End Call Button */}
          <Link
            to={`/connect/${skillId}`}
            className="w-20 h-20 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
          >
            <PhoneOff className="w-8 h-8" />
          </Link>

          {/* Video Call Button */}
          <Link
            to={`/video/${skillId}`}
            className="w-16 h-16 bg-village-pink hover:bg-village-pink/90 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
          >
            <Video className="w-6 h-6" />
          </Link>
        </div>

        {/* Call Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            {isConnected ? "Call duration: 00:45" : "Connecting..."}
          </p>
        </div>
      </div>

      {/* Schedule Message */}
      <div className="bg-white border-t p-6">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Having trouble connecting? You can schedule a call for later.
          </p>
          <button className="bg-village-violet hover:bg-village-violet/90 text-white px-6 py-3 rounded-xl font-bold transition-colors">
            Schedule Call
          </button>
        </div>
      </div>
    </div>
  );
}
