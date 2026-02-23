// src/components/CompleteButton.jsx
'use client';
import { useProgress } from '@/hooks/useProgress';

export default function CompleteButton({ slug }) {
  const { completedLessons, toggleLesson } = useProgress();
  const isDone = completedLessons.includes(slug);

  return (
    <div className="not-prose mt-10 p-6 bg-[#F4F1ED] dark:bg-[#1E1E1E] rounded-2xl border-2 border-dashed border-[#D2C4B3] dark:border-gray-800 text-center transition-all">
      <h3 className="text-[#795548] dark:text-[#D2C4B3] font-bold mb-4">
        {isDone ? '🎉 Svaka čast! Završio si ovu lekciju.' : 'Da li si savladao ovo gradivo?'}
      </h3>
      <button
        onClick={() => toggleLesson(slug)}
        className={`px-8 py-3 rounded-xl font-bold transition-all shadow-md ${
          isDone 
            ? 'bg-green-500 hover:bg-green-600 text-white' 
            : 'bg-[#795548] hover:bg-[#9F8170] text-white'
        }`}
      >
        {isDone ? '✓ Završeno' : 'Označi kao završeno'}
      </button>
    </div>
  );
}