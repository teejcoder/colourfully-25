"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{ imageUrl: string; colorScheme: { dominantColorForeground: string; dominantColorBackground: string; accentColor: string }; palette: Record<string, { rgb: number[]; population: number }> } | null>(null);
  const [isDragging, setIsDragging] = useState(false); 
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("analysisResult");
    if (savedData) {
      setAnalysisResult(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (analysisResult) {
      localStorage.setItem("analysisResult", JSON.stringify(analysisResult));
    }
  }, [analysisResult]);

  const handleDropZoneClick = () => {
    if (fileInputRef.current){
      fileInputRef.current.click()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file-to-upload', file);

      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const uploadData = await uploadResponse.json();
      if (!uploadResponse.ok) {
        throw new Error(uploadData.error);
      }

      const analyseResponse = await fetch('/api/analyse', {
        method: 'POST',
        body: JSON.stringify({ 'image-url': uploadData.imageUrl }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const analyseData = await analyseResponse.json();
      if (!analyseResponse.ok) {
        throw new Error(analyseData.error);
      }

      setAnalysisResult(analyseData);
    } catch (error) {
      console.error('Processing failed:', error);
      window.location.href = '/error';
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/webp', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(selectedFile.type)) {
        alert('Invalid file type. Please upload a JPG, PNG, or SVG image.');
        return;
      }

      if (selectedFile.size > maxSize) {
        alert('File size exceeds the 5MB limit.');
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/webp', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB
  
      if (!validTypes.includes(droppedFile.type)) {
        alert('Invalid file type. Please upload a JPEG or PNG.');
        return;
      }
  
      if (droppedFile.size > maxSize) {
        alert('File size exceeds the 5MB limit.');
        return;
      }
  
      setFile(droppedFile);
  
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append('file-to-upload', droppedFile);
  
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
  
        const uploadData = await uploadResponse.json();
        if (!uploadResponse.ok) {
          throw new Error(uploadData.error);
        }
  
        const analyseResponse = await fetch('/api/analyse', {
          method: 'POST',
          body: JSON.stringify({ 'image-url': uploadData.imageUrl }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const analyseData = await analyseResponse.json();
        if (!analyseResponse.ok) {
          throw new Error(analyseData.error);
        }
  
        setAnalysisResult(analyseData);
      } catch (error) {
        console.error('Processing failed:', error);
        window.location.href = '/error';
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div
      className={`text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ${isDragging ? 'bg-pink-200' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-[4.375rem] font-bold rainbow-highlight">Colourfully</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4 space-y-5 text-center">
            <div
              className={`w-full p-4 border-2 border-dashed rounded ${isDragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
              onClick={handleDropZoneClick}
            >
              {file ? (
                <label className="text-center text-gray-500">{file.name}</label>
              ) : (
                <label className="text-center text-white">Drag and drop an image, or click to select a file.</label>
              )}
              <input
                ref={fileInputRef}
                name="image-drop"
                type="file"
                accept=".jpg,.jpeg,.png,.svg"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <button
              type="submit"
              disabled={!file || loading}
              className={`w-full text-white py-2 px-4 rounded ${loading ? `rainbow-background` : 'rainbow-background1'}`}
            >
              {loading ? 'Processing...' : 'Analyze Image'}
            </button>
            <span className='ml-auto text-gray-400 italic'>.jpeg or .png</span>
          </div>
        </form>

        {analysisResult && (
          <div className="mt-8 p-4 w-full rounded-xl max-w-2xl mx-auto">
            <h2 className="text-[1.25rem] font-bold mb-4">Analysis Result</h2>
            <Image
              src={analysisResult.imageUrl}
              alt="Uploaded Image"
              className="w-full h-auto mx-auto mb-4 rounded-xl object-contain"
              width={500}
              height={500}
            />
            <div className="space-y-4 ">
              <h3 className="text-[1.125rem] font-semibold">Dominant Colors</h3>
              <div className="flex items-center gap-4">
                <span className="block w-8 h-8 rounded" style={{ backgroundColor: analysisResult.colorScheme.dominantColorForeground }}></span>
                <p>Foreground: {analysisResult.colorScheme.dominantColorForeground}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block w-8 h-8 rounded" style={{ backgroundColor: analysisResult.colorScheme.dominantColorBackground }}></span>
                <p>Background: {analysisResult.colorScheme.dominantColorBackground}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block w-8 h-8 rounded" style={{ backgroundColor: `#${analysisResult.colorScheme.accentColor}` }}></span>
                <p>Accent: #{analysisResult.colorScheme.accentColor}</p>
              </div>
            </div>

            <div>
              <h3 className="text-[1.125rem] font-semibold my-4">Palette</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.entries(analysisResult.palette).map(([key, value]: [string, { rgb: number[]; population: number }]) => (
                  <div key={key} className="flex items-center gap-4">
                    <span
                      className="block w-8 h-8 rounded"
                      style={{ backgroundColor: `rgb(${value.rgb.join(",")})` }}
                    ></span>
                    <div>
                      <p className="font-medium">{key}</p>
                      <p className="text-[0.875rem] text-gray-600">Population: {value.population}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}