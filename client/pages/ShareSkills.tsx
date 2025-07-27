import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mic, Type, Camera, Plus, Trash2 } from "lucide-react";

interface SkillStep {
  id: string;
  title: string;
  description: string;
}

interface SkillForm {
  title: string;
  description: string;
  category: string;
  learningMethods: string[];
  difficulty: string;
  duration: string;
  steps: SkillStep[];
}

export default function ShareSkills() {
  const [inputMethod, setInputMethod] = useState<"type" | "voice">("type");
  const [isRecording, setIsRecording] = useState(false);
  const [formData, setFormData] = useState<SkillForm>({
    title: "",
    description: "",
    category: "",
    learningMethods: [],
    difficulty: "",
    duration: "",
    steps: []
  });

  const categories = ["Music", "Cooking", "Technology", "Gardening", "Arts & Crafts", "Languages", "Life Skills", "Sports", "Business"];
  const learningMethods = ["Video calls", "In-person", "Text messages", "Voice messages"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];
  const durations = ["15-30 minutes", "30-60 minutes", "1-2 hours", "Multiple sessions"];

  const handleMethodToggle = (method: string) => {
    const newMethods = formData.learningMethods.includes(method)
      ? formData.learningMethods.filter(m => m !== method)
      : [...formData.learningMethods, method];
    setFormData({...formData, learningMethods: newMethods});
  };

  const addStep = () => {
    const newStep: SkillStep = {
      id: Date.now().toString(),
      title: "",
      description: ""
    };
    setFormData({...formData, steps: [...formData.steps, newStep]});
  };

  const updateStep = (stepId: string, field: "title" | "description", value: string) => {
    const updatedSteps = formData.steps.map(step =>
      step.id === stepId ? {...step, [field]: value} : step
    );
    setFormData({...formData, steps: updatedSteps});
  };

  const removeStep = (stepId: string) => {
    const updatedSteps = formData.steps.filter(step => step.id !== stepId);
    setFormData({...formData, steps: updatedSteps});
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would go here
  };

  const canSubmit = formData.title && formData.description && formData.category && formData.learningMethods.length > 0;

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors text-xl">
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg" style={{color: 'rgb(74, 144, 226)'}}>
            Share Your Skills
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 drop-shadow font-semibold">
            Teach others what you know best
          </p>
        </div>
      </header>

      {/* Input Method Selection */}
      <div className="relative z-10 px-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/30">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How would you like to create your skill?</h2>
            <div className="flex gap-4 justify-center items-center">
              <button
                onClick={() => setInputMethod("type")}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-colors ${
                  inputMethod === "type" 
                    ? "bg-village-pink text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Type className="w-6 h-6" />
                Type It Out
              </button>
              <button
                onClick={() => setInputMethod("voice")}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-colors ${
                  inputMethod === "voice" 
                    ? "bg-village-pink text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Mic className="w-6 h-6" />
                Speak It
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Input Interface */}
      {inputMethod === "voice" && (
        <div className="relative z-10 px-6 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30 text-center">
              <div className="mb-8">
                <button
                  onClick={handleVoiceInput}
                  className={`w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl shadow-lg transition-all ${
                    isRecording 
                      ? "bg-red-500 shadow-red-500/50" 
                      : "bg-village-pink hover:bg-village-pink/90"
                  }`}
                >
                  <Mic className="w-16 h-16" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {isRecording ? "Recording... Speak now!" : "Tap to start recording"}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Describe your skill, what you'll teach, and how students will learn. 
                Our AI will help format it into a structured lesson.
              </p>
              {isRecording && (
                <div className="flex justify-center items-center gap-2 text-village-pink">
                  <div className="w-2 h-8 bg-village-pink rounded animate-pulse"></div>
                  <div className="w-2 h-12 bg-village-pink rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-6 bg-village-pink rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-10 bg-village-pink rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                </div>
              )}
              <button
                className="bg-village-violet hover:bg-village-violet/90 text-white px-8 py-4 rounded-2xl font-bold text-xl mt-6"
              >
                Let AI Format This
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Input Interface */}
      {inputMethod === "type" && (
        <main className="relative z-10 px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <form className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
              {/* Basic Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Information</h2>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-3 text-xl">Skill Title</label>
                  <input
                    type="text"
                    placeholder="e.g., Guitar Lessons for Beginners"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full p-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-3 text-xl">Description</label>
                  <textarea
                    placeholder="Describe what you'll teach and what students will learn..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={4}
                    className="w-full p-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-3 text-xl">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full p-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                    >
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-3 text-xl">Difficulty Level</label>
                    <select
                      value={formData.difficulty}
                      onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                      className="w-full p-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                    >
                      <option value="">Select difficulty</option>
                      {difficulties.map(diff => (
                        <option key={diff} value={diff}>{diff}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Teaching Preferences */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Teaching Preferences</h2>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-3 text-xl">How will you teach? (Select all that apply)</label>
                  <div className="grid grid-cols-2 gap-4">
                    {learningMethods.map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => handleMethodToggle(method)}
                        className={`p-4 rounded-2xl border-2 font-semibold text-lg transition-colors ${
                          formData.learningMethods.includes(method)
                            ? "bg-village-pink border-village-pink text-white"
                            : "bg-white border-gray-200 text-gray-700 hover:border-village-pink"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-xl">Typical Session Duration</label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="w-full p-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                  >
                    <option value="">Select duration</option>
                    {durations.map(duration => (
                      <option key={duration} value={duration}>{duration}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Teaching Steps */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Teaching Steps (Optional)</h2>
                  <button
                    type="button"
                    onClick={addStep}
                    className="flex items-center gap-2 bg-village-violet text-white px-4 py-2 rounded-xl font-bold hover:bg-village-violet/90"
                  >
                    <Plus className="w-5 h-5" />
                    Add Step
                  </button>
                </div>

                {formData.steps.map((step, index) => (
                  <div key={step.id} className="mb-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-gray-800">Step {index + 1}</h3>
                      <button
                        type="button"
                        onClick={() => removeStep(step.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Step title"
                        value={step.title}
                        onChange={(e) => updateStep(step.id, "title", e.target.value)}
                        className="p-3 text-lg rounded-xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Step description"
                        value={step.description}
                        onChange={(e) => updateStep(step.id, "description", e.target.value)}
                        className="p-3 text-lg rounded-xl border-2 border-gray-200 focus:border-village-pink focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`px-12 py-6 rounded-2xl font-bold text-2xl transition-colors ${
                    canSubmit
                      ? "bg-village-pink hover:bg-village-pink/90 text-white shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Share My Skill
                </button>
              </div>
            </form>
          </div>
        </main>
      )}
    </div>
  );
}
