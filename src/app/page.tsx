// src/app/page.tsx
import words from '@/data/words.json';

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">📘 영어 단어 학습</h1>
      <div className="max-w-xl mx-auto space-y-4">
        {words.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-xl shadow">
            <p className="text-xl font-semibold text-blue-700">{item.word}</p>
            <p className="text-gray-600">{item.meaning}</p>
          </div>
        ))}
      </div>
    </main>
  );
}