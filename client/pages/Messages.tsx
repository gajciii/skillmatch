import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Send, Phone, Video, Smile } from "lucide-react";
import { useState } from "react";

export default function Messages() {
  const { skillId } = useParams();
  const [message, setMessage] = useState("");

  // Mock data - in real app would fetch based on skillId
  const chatData = {
    skill: {
      title: "Guitar Lessons for Beginners",
      category: "Music"
    },
    teacher: {
      name: "Maria Rodriguez",
      avatar: "👩‍🦳",
      isOnline: true
    },
    messages: [
      {
        id: 1,
        sender: "teacher",
        text: "Hi! I'm so excited to help you learn guitar! 🎸",
        time: "2:30 PM"
      },
      {
        id: 2,
        sender: "teacher", 
        text: "Do you have a guitar already, or do you need recommendations for getting started?",
        time: "2:31 PM"
      },
      {
        id: 3,
        sender: "student",
        text: "Hello! Yes, I have an acoustic guitar that I got as a gift but never learned to play.",
        time: "2:35 PM"
      },
      {
        id: 4,
        sender: "teacher",
        text: "Perfect! That's a great starting point. When would you like to schedule our first lesson?",
        time: "2:36 PM"
      }
    ]
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In real app, would send message to backend
      console.log("Sending message:", message);
      setMessage("");
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
          Back
        </Link>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-village-violet/20 rounded-full flex items-center justify-center text-xl border-2 border-village-violet">
            {chatData.teacher.avatar}
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">{chatData.teacher.name}</h1>
            <p className="text-sm text-gray-600">{chatData.skill.title}</p>
          </div>
          {chatData.teacher.isOnline && (
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/call/${skillId}`}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
          </Link>
          <Link
            to={`/video/${skillId}`}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Video className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatData.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
              msg.sender === 'student'
                ? 'bg-village-pink text-white'
                : 'bg-white text-gray-800 border'
            }`}>
              <p>{msg.text}</p>
              <p className={`text-xs mt-1 ${
                msg.sender === 'student' ? 'text-white/70' : 'text-gray-500'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t p-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Smile className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-village-pink focus:border-transparent"
          />
          
          <button
            type="submit"
            disabled={!message.trim()}
            className="p-2 bg-village-pink hover:bg-village-pink/90 disabled:bg-gray-300 text-white rounded-full transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
