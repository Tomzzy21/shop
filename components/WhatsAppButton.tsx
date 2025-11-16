import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '2348023781678'; // WhatsApp number
  const message = 'Hello! I would like to inquire about your bookkeeping services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-10 h-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.136-.135.298-.354.446-.471.149-.148.198-.248.298-.413.098-.165.05-.31-.025-.436-.075-.121-.672-1.612-.922-2.207-.24-.579-.487-.5-.672-.51-.172-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.074c.149.196 2.104 3.195 5.1 4.485.714.3 1.27.489 1.703.625.714.227 1.365.195 1.879.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.567-.354m-6.82 7.563h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.72 11.72 0 01-1.8-6.25c0-6.5 5.3-11.8 11.8-11.8 3.16 0 6.11 1.24 8.335 3.48 2.23 2.24 3.465 5.22 3.465 8.4-.005 6.5-5.305 11.8-11.805 11.8"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
