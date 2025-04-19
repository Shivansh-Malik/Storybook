import React, { useEffect } from "react";
import clsx from "clsx";

type ModalProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ title, content, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2 text-black dark:text-white">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{content}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};
