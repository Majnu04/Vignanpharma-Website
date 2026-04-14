import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { MessageCircle, X } from 'lucide-react';

export default function Layout() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-accent-600/20 selection:text-accent-700 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {isChatOpen && (
          <div className="w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="flex items-center justify-between bg-primary-700 px-4 py-3 text-white">
              <div className="text-sm font-semibold">VIPT Assistant</div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="rounded-full p-1 transition-colors hover:bg-white/10"
                aria-label="Close chatbot"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-64 space-y-3 p-4 text-sm text-slate-600">
              <div className="w-fit rounded-2xl bg-slate-100 px-3 py-2">
                Hi! How can we help you today?
              </div>
              <div className="w-fit rounded-2xl bg-slate-100 px-3 py-2">
                Ask about admissions, courses, or campus life.
              </div>
            </div>
            <div className="border-t border-slate-200 p-3">
              <input
                type="text"
                placeholder="Type your question..."
                className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm outline-none transition-colors focus:border-primary-400"
              />
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 text-white shadow-lg shadow-primary-700/30 transition-transform hover:scale-110"
          aria-label="Open chatbot"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
