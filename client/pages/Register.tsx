import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Book, Video, Users, MessageCircle, ArrowLeft } from "lucide-react";

interface QuestionCard {
  id: string;
  question: string;
  type: "single" | "multiple" | "age";
  options?: string[];
  icons?: string[];
}

export default function Register() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const questions: QuestionCard[] = [
    {
      id: "age",
      question: "What's your age group?",
      type: "age",
      options: ["13-17 (Youth)", "18-34 (Young Adult)", "35-54 (Adult)", "55+ (Wise Elder)"],
      icons: ["🧒", "🧑", "👨", "👴"]
    },
    {
      id: "interests",
      question: "What interests you most?",
      type: "multiple",
      options: ["Technology", "Cooking", "Arts & Crafts", "Music", "Sports", "Gardening", "Languages", "Life Skills"],
      icons: ["💻", "👨‍🍳", "🎨", "🎵", "⚽", "🌱", "🗣️", "📚"]
    },
    {
      id: "learning_style",
      question: "How do you prefer to learn?",
      type: "single",
      options: ["Video calls", "Text messages", "In-person meetups", "Voice messages"],
      icons: ["📹", "💬", "🤝", "🎤"]
    },
    {
      id: "goal",
      question: "What brings you here?",
      type: "single",
      options: ["I want to teach skills", "I want to learn new things", "Both teaching and learning", "Just exploring"],
      icons: ["🎯", "📖", "🔄", "👀"]
    }
  ];

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;

  const handleOptionSelect = (option: string) => {
    if (currentQuestion.type === "multiple") {
      const newSelection = selectedOptions.includes(option)
        ? selectedOptions.filter(opt => opt !== option)
        : [...selectedOptions, option];
      setSelectedOptions(newSelection);
      setAnswers({ ...answers, [currentQuestion.id]: newSelection });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: option });
      setSelectedOptions([option]);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOptions(answers[questions[currentStep + 1]?.id] || []);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOptions(answers[questions[currentStep - 1]?.id] || []);
    }
  };

  const canProceed = () => {
    const currentAnswer = answers[currentQuestion.id];
    return currentAnswer && (Array.isArray(currentAnswer) ? currentAnswer.length > 0 : true);
  };

  const handleComplete = () => {
    // Store user preferences (in a real app, this would go to a database)
    localStorage.setItem('userPreferences', JSON.stringify(answers));

    // Redirect based on user's goal
    const goal = answers.goal;
    if (goal === "I want to teach skills") {
      navigate("/create-skill");
    } else if (goal === "I want to learn new things") {
      navigate("/skill-match");
    } else {
      navigate("/"); // For "Both" or "Just exploring"
    }
  };

  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">


      {/* Header */}
      <header className="relative z-10 p-6 text-center">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{color: 'rgb(74, 144, 226)'}}>
          Welcome to Skill Match
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 font-semibold">
          Let's get to know you better
        </p>
      </header>

      {/* Progress Bar */}
      <div className="relative z-10 px-6 mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 font-semibold">Step {currentStep + 1} of {questions.length}</span>
            <span className="text-gray-500">{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Guide */}
      <div className="relative z-10 text-center mb-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg inline-block">
          <p className="text-gray-800 font-bold text-xl">
            {currentStep === 0 && "Please tell us about yourself to get started"}
            {currentStep === 1 && "What are your main interests?"}
            {currentStep === 2 && "How do you prefer to learn?"}
            {currentStep === 3 && "What would you like to do?"}
          </p>
        </div>
      </div>

      {/* Question Card */}
      <main className="relative z-10 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
              {currentQuestion.question}
            </h2>

            {/* Options Grid */}
            <div className={`grid gap-4 mb-8 ${
              currentQuestion.type === "age" ? "grid-cols-1 md:grid-cols-2" :
              currentQuestion.options && currentQuestion.options.length > 4 ? "grid-cols-2 md:grid-cols-4" :
              "grid-cols-1 md:grid-cols-2"
            }`}>
              {currentQuestion.options?.map((option, index) => {
                const isSelected = currentQuestion.type === "multiple" 
                  ? selectedOptions.includes(option)
                  : answers[currentQuestion.id] === option;
                const icon = currentQuestion.icons?.[index] || "✨";

                return (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className={`
                      p-8 rounded-2xl border-2 text-left
                      ${isSelected
                        ? "bg-village-pink border-village-pink text-white shadow-lg"
                        : "bg-white border-gray-200 hover:border-village-pink"
                      }
                    `}
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex-1">
                        <span className="font-bold text-xl">{option}</span>
                      </div>
                      {isSelected && (
                        <div className="text-white">
                          <ChevronRight className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Multiple Selection Note */}
            {currentQuestion.type === "multiple" && (
              <p className="text-center text-gray-600 mb-6 font-semibold text-lg">
                Select all that apply
              </p>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                  ${currentStep === 0 
                    ? "text-gray-400 cursor-not-allowed" 
                    : "text-gray-600 hover:text-village-violet hover:bg-village-violet/10"
                  }
                `}
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>

              {isLastStep ? (
                <button
                  onClick={handleComplete}
                  disabled={!canProceed()}
                  className={`
                    flex items-center gap-2 px-10 py-6 rounded-xl font-bold text-xl
                    ${canProceed()
                      ? "bg-village-pink hover:bg-village-pink/90 text-white shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  Complete Registration
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`
                    flex items-center gap-2 px-10 py-6 rounded-xl font-bold text-xl
                    ${canProceed()
                      ? "bg-village-violet hover:bg-village-violet/90 text-white shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}
