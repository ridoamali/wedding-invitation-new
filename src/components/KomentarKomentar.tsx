// KomentarKomentar.tsx
import React, { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  message: string;
  option: 'yes' | 'no';
}

const KomentarKomentar: React.FC = () => {
  // State untuk input form
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [option, setOption] = useState<'yes' | 'no'>('yes');

  // State untuk menyimpan komentar
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, name: 'John Doe', message: 'Ini adalah komentar pertama.', option: 'yes' },
    { id: 2, name: 'Jane Smith', message: 'Komentar kedua di sini.', option: 'no' },
    { id: 3, name: 'Alice Johnson', message: 'Contoh komentar ketiga.', option: 'yes' },
  ]);

  // Handler untuk submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !message) {
      alert('Nama dan pesan tidak boleh kosong!');
      return;
    }

    // Tambahkan komentar baru ke daftar
    const newComment: Comment = {
      id: comments.length + 1,
      name,
      message,
      option,
    };

    setComments([newComment, ...comments]);
    setName('');
    setMessage('');
    setOption('yes');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Nama */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          {/* Input Pesan */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Pesan
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tulis pesan Anda"
              required
            ></textarea>
          </div>

          {/* Opsi Yes/No */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Pilihan</label>
            <div className="mt-1 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="option"
                  value="yes"
                  checked={option === 'yes'}
                  onChange={() => setOption('yes')}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="option"
                  value="no"
                  checked={option === 'no'}
                  onChange={() => setOption('no')}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Tombol Kirim */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Kirim
          </button>
        </form>

        {/* Daftar Komentar */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">Komentar Terbaru</h2>
          <ul className="mt-4 space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{comment.name}</p>
                    <p className="text-sm text-gray-500">{comment.message}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      comment.option === 'yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {comment.option.toUpperCase()}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KomentarKomentar;