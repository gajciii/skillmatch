import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Video, VideoOff, Mic, MicOff, PhoneOff, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function VideoCall() {
  const { skillId } = useParams();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  // Mock data - in real app would fetch based on skillId
  const callData = {
    skill: {
      title: "Guitar Lessons for Beginners",
      category: "Music"
    },
    teacher: {
      name: "Maria Rodriguez",
      avatar: "👩‍🦳",
      status: isConnected ? "Connected" : "Connecting..."
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm p-4 flex items-center justify-between relative z-10">
        <Link
          to={`/connect/${skillId}`}
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
        <h1 className="text-lg font-semibold text-white">Video Call</h1>
        <div className="w-16"></div> {/* Spacer */}
      </div>

      {/* Video Area */}
      <div className="flex-1 relative">
        {/* Main video (Teacher) */}
        <div className="w-full h-full bg-gray-800 relative flex items-center justify-center">
          {isConnected ? (
            <div className="text-center">
              <div className="w-48 h-48 bg-village-violet/30 rounded-full flex items-center justify-center text-8xl border-4 border-village-violet mb-4 mx-auto">
                {callData.teacher.avatar}
              </div>
              <p className="text-white text-xl font-semibold">{callData.teacher.name}</p>
              <p className="text-gray-300">{callData.skill.title}</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="animate-pulse w-48 h-48 bg-gray-700 rounded-full mb-4 mx-auto"></div>
              <p className="text-white text-xl">Connecting...</p>
            </div>
          )}

          {/* Call duration */}
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full">
            {isConnected ? "05:23" : "Connecting..."}
          </div>
        </div>

        {/* Self video (Picture-in-picture) */}
        <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-700 rounded-lg border-2 border-white overflow-hidden">
          {isVideoOn ? (
            <div className="w-full h-full bg-village-pink/30 flex items-center justify-center text-2xl">
              👨‍💼
            </div>
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <VideoOff className="w-6 h-6 text-gray-400" />
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-black/50 backdrop-blur-sm p-6">
        <div className="flex items-center justify-center gap-4">
          {/* Mute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              isMuted 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>

          {/* Video Toggle */}
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              !isVideoOn 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
          </button>

          {/* End Call Button */}
          <Link
            to={`/connect/${skillId}`}
            className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors mx-2"
          >
            <PhoneOff className="w-8 h-8" />
          </Link>

          {/* Chat Button */}
          <Link
            to={`/messages/${skillId}`}
            className="w-14 h-14 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </Link>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-4">
          <p className="text-gray-300 text-sm">
            {isConnected ? "Call in progress" : "Establishing connection..."}
          </p>
        </div>
      </div>
    </div>
  );
}
