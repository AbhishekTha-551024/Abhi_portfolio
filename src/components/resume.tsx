'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, ExternalLink, FileText, CheckCircle2, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Resume details
  const resumeDetails = {
    title: "Abhishek Singh — Official Resume",
    subtitle: "Software Development Intern & Full Stack / Android Developer",
    education: "B.E. Computer Science, SRIT Jabalpur (2022 - 2026)",
    internship: "Universal CodeTech (UCT) — Software Development Intern",
    fileType: 'PDF Document',
    lastUpdated: 'Updated 2026',
    fileSize: '66 KB',
    previewImageSrc: '/Resume_Abhishek_Singh_AI.png',
    downloadUrl: '/Resume_Abhishek_Singh_AI.pdf',
  };

  const handleDownload = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = 'Abhishek_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPdf = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    window.open(resumeDetails.downloadUrl, '_blank');
  };

  return (
    <div className="mx-auto w-full max-w-4xl py-6 font-sans">
      <div className="rounded-3xl border border-neutral-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/60 md:p-8">
        {/* Header Information */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                <CheckCircle2 size={12} />
                Verified Resume
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {resumeDetails.lastUpdated}
              </span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-3xl">
              {resumeDetails.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
              {resumeDetails.subtitle}
            </p>
            <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
              🎓 {resumeDetails.education} • 💼 {resumeDetails.internship}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleOpenPdf}
              variant="outline"
              size="sm"
              className="flex items-center gap-1.5 rounded-full border-neutral-300 bg-white/60 dark:border-neutral-700 dark:bg-neutral-800/60"
            >
              <ExternalLink size={14} />
              Open PDF
            </Button>
            <Button
              onClick={handleDownload}
              size="sm"
              className="flex items-center gap-1.5 rounded-full bg-blue-600 font-semibold text-white shadow-md hover:bg-blue-700"
            >
              <Download size={14} />
              Download
            </Button>
          </div>
        </div>

        {/* Visual Resume Document Card / Preview */}
        <div className="mt-6">
          <div
            onClick={() => setIsPreviewOpen(true)}
            className="group relative max-h-[480px] w-full cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-inner transition-all hover:border-blue-500/50 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
          >
            {/* Scrollable Container with preview image */}
            <div className="relative aspect-[1/1.414] w-full overflow-hidden">
              <Image
                src={resumeDetails.previewImageSrc}
                alt="Abhishek Singh Resume Preview"
                fill
                priority
                className="object-contain object-top transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            {/* Hover overlay inviting to click */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg hover:bg-white/90">
                  <Eye size={16} />
                  Click to View Fullscreen
                </span>
                <span
                  onClick={handleDownload}
                  className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
                >
                  <Download size={16} />
                  Download
                </span>
              </div>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-neutral-500 dark:text-neutral-400">
            Click on the resume preview above to view full size or use the download button to save the PDF.
          </p>
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-2 backdrop-blur-md md:p-6"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl dark:bg-neutral-900"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-blue-500" />
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    Abhishek_Singh_Resume.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={handleDownload}
                    size="sm"
                    className="flex items-center gap-1 rounded-full bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700"
                  >
                    <Download size={14} />
                    Download PDF
                  </Button>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="rounded-full p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Resume Document */}
              <div className="overflow-y-auto p-4 md:p-6">
                <div className="relative mx-auto aspect-[1/1.414] w-full max-w-3xl shadow-2xl">
                  <Image
                    src={resumeDetails.previewImageSrc}
                    alt="Abhishek Singh Resume Document"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Resume;