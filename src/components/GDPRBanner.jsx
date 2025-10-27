import { useEffect, useState } from "react";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto max-w-full md:max-w-xs 
                     p-4 rounded-lg shadow-lg z-50 text-center transition-colors
                     bg-white text-black dark:bg-black dark:text-white"
        >
          <p className="text-sm mb-2">
            We use cookies to improve your experience.
          </p>
          <p className="mb-3">
            <a
              href="/privacy-policy"
              className="underline text-[#27AE60] hover:text-[#1f8e50] dark:text-[#00FF40] dark:hover:text-[#27AE60]"
            >
              See our Privacy Policy
            </a>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 rounded text-sm font-medium transition
                         bg-[#27AE60] text-white hover:opacity-90"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded text-sm font-medium transition
                         bg-black text-white hover:opacity-90 
                         dark:bg-white dark:text-black"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg border flex items-center justify-center hover:scale-105 transition cursor-pointer
                       bg-[#27AE60] border-black dark:bg-[#00FF40] dark:border-white"
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg"
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain invert-0 dark:invert"
            />
          </button>
        </div>
      )}
    </>
  );
}
