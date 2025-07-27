import { Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  emoji: string;
}

export default function PlaceholderPage({ title, description, emoji }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-brand-background relative overflow-hidden">


      {/* Header */}
      <header className="relative z-10 p-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Village
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
            <div className="text-6xl mb-6">{emoji}</div>
            <div className="text-6xl mb-6 text-village-violet">
              <Construction className="w-16 h-16 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'rgb(74, 144, 226)'}}>
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-semibold">
              {description}
            </p>
            <div className="bg-village-pink/10 border border-village-pink/30 rounded-2xl p-8 mb-8">
              <p className="text-village-pink font-bold text-xl mb-3">
                This feature is coming soon
              </p>
              <p className="text-gray-600 text-lg font-semibold">
                Continue chatting to help build this page exactly how you want it.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/"
                className="bg-village-violet hover:bg-village-violet/90 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-lg"
              >
                Back to Home
              </Link>
              <Link
                to="/register"
                className="bg-village-pink hover:bg-village-pink/90 text-white px-10 py-6 rounded-2xl font-bold text-xl shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
