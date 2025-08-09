import React, { useState, useEffect } from 'react';

// This is the LoadingScreen component, modified with retro styling.
const LoadingScreen = ({ onComplete }) => {
  // The text to be typed out on the screen
  const [text, setText] = useState("");
  const fullText = "SYS 64738\nREADY.\n\nLOAD *,\"*\",8,1\nLOADING...";
  const [showCursor, setShowCursor] = useState(true);

  // A custom useEffect hook to handle the text typing animation.
  useEffect(() => {
    let index = 0;
    let typingInterval;
    let cursorInterval;

    // The function to start the typing process
    const startTyping = () => {
        typingInterval = setInterval(() => {
            if (index < fullText.length) {
                // Add one character at a time.
                setText((prev) => prev + fullText[index]);
                index++;
            } else {
                // When done typing, clear the interval and start the final countdown.
                clearInterval(typingInterval);
                // Hide the cursor when typing is done.
                setShowCursor(false);
                setTimeout(() => {
                    onComplete(); // Call the parent's onComplete function.
                }, 2000);
            }
        }, 100); // Adjust this value to change typing speed.
    }

    // Start the blinking cursor animation.
    cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
    }, 500);

    // Start the typing after a short delay.
    setTimeout(startTyping, 1000);

    // Cleanup function to clear all intervals when the component unmounts.
    return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
    };
  }, [onComplete]);

  return (
    // The main container for the loading screen, with a dark background and full viewport size.
    // The "VT323" font is imported via Google Fonts to get a retro, monospace style.
    <div className="fixed inset-0 z-50 bg-blue-950 flex flex-col items-start p-8 md:p-12 lg:p-24 justify-start font-mono text-lime-400">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        body {
          background-color: #0d1a49; /* Matching body background */
        }
      `}</style>
      
      {/* The main text area with the typing effect. The whitespace-pre-wrap class preserves newlines. */}
      <pre className="text-xl md:text-2xl lg:text-3xl whitespace-pre-wrap font-vt323">
        {text}
        <span className={`animate-blink-c64 ml-2 transition-opacity duration-200 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
          _
        </span>
      </pre>

      {/* Adding a simple, old-school blinking cursor effect using a keyframe animation. */}
      <style>{`
        @keyframes blink-c64 {
          0%, 100% { background-color: transparent; }
          50% { background-color: #beff4d; }
        }
        .animate-blink-c64 {
          animation: blink-c64 1s step-end infinite;
          display: inline-block;
          width: 0.75em;
          height: 1.25em;
          vertical-align: text-top;
          margin-left: 0.2em;
        }
        .font-vt323 {
          font-family: 'VT323', monospace;
        }
      `}</style>
    </div>
  );
};

// The main App component to demonstrate the loading screen.
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // This function is called when the loading screen animation is complete.
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Conditionally render the LoadingScreen component. */}
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        // Once loading is complete, display the main content.
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-100 p-8 text-center bg-gray-800">
          <h1 className="text-4xl font-bold font-vt323">Welcome to your portfolio!</h1>
          <p className="mt-4 text-xl font-vt323">Loading complete.</p>
        </div>
      )}
    </div>
  );
};

export default App;
