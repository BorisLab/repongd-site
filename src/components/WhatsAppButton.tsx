const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105 z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 11.06a6.5 6.5 0 00-8.78 0m7.78 1.06L12 16m1.5-8a7.5 7.5 0 01.62 14.95A7.5 7.5 0 0112 4.5m6 7.5h.01" />
      </svg>
    </a>
  );
};

export { WhatsAppButton };
