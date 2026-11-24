"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  Crown,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/i18n/IntlProviderWrapper";

export interface PatientVideoCardProps {
  src: string;
  title: string;
  description: string;
  patientTag: string;
  treatmentType?: string;
  highlights?: string[];
  className?: string;
}

export function PatientVideoCard({
  src,
  title,
  description,
  patientTag,
  treatmentType,
  highlights = [],
  className = "",
}: PatientVideoCardProps) {
  const { isRtl } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  // Close expanded modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExpanded(false);
      }
    };
    if (isExpanded) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  const openExpanded = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setIsExpanded(true);
  };

  const closeExpanded = () => {
    setIsExpanded(false);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Fallback if browser blocks unmuted autoplay
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true));
          }
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      containerRef.current.requestFullscreen().catch(() => {
        // Fallback for iOS / Safari video element fullscreen
        if (videoRef.current && "webkitEnterFullscreen" in videoRef.current) {
          (videoRef.current as HTMLVideoElement & { webkitEnterFullscreen: () => void }).webkitEnterFullscreen();
        }
      });
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(curr);
    setProgress((curr / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = isRtl
      ? rect.right - e.clientX
      : e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = pct * (videoRef.current.duration || 0);
    videoRef.current.currentTime = newTime;
    setProgress(pct * 100);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Auto-hide controls when playing after 2.5s of inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0B2456] via-[#07193D] to-[#020B1D] border-2 border-[#C8A232]/70 shadow-[0_16px_45px_rgba(1,32,82,0.65)] hover:border-[#DFBF57] transition-all duration-300 flex flex-col ${className}`}
    >
      {/* Top Gold Crest Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#9A5F13]" />

      {/* Video Container */}
      <div
        onClick={togglePlay}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black overflow-hidden cursor-pointer select-none"
      >
        <video
          ref={videoRef}
          src={`${src}#t=0.5`}
          preload="metadata"
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover object-center"
        />

        {/* Ambient Gradient Overlays */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none transition-opacity duration-300 ${
            isPlaying && !showControls ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Top Badges (Patient Tag, Treatment & Expand Button) */}
        <div
          className={`absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none transition-opacity duration-300 z-10 ${
            isPlaying && !showControls ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#012052]/90 border border-[#DFBF57] text-[#FAF1DD] text-[11px] sm:text-xs font-bold shadow-md backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3 text-[#DFBF57]" />
              <span>{patientTag}</span>
            </div>

            {treatmentType && (
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/20 text-white/90 text-[10px] sm:text-[11px] font-mono backdrop-blur-md">
                <span>{treatmentType}</span>
              </div>
            )}
          </div>

          {/* Quick Expand Button on Mobile & Desktop */}
          <button
            type="button"
            onClick={openExpanded}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#011438]/95 hover:bg-[#012052] active:scale-95 border border-[#DFBF57] text-[#DFBF57] text-[10px] sm:text-xs font-bold shadow-lg backdrop-blur-md pointer-events-auto cursor-pointer transition-all hover:scale-105"
            title={isRtl ? "تكبير الفيديو" : "Expand Video"}
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#DFBF57]" />
            <span>{isRtl ? "تكبير" : "Expand"}</span>
          </button>
        </div>

        {/* Central Play/Pause Button (Shows when paused or on hover) */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-all duration-300 ${
            !isPlaying ? "opacity-100 scale-100" : showControls ? "opacity-80 scale-95" : "opacity-0 scale-90"
          }`}
        >
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#DFBF57] via-[#C8A232] to-[#9A5F13] text-[#012052] flex items-center justify-center shadow-[0_0_30px_rgba(200,162,50,0.6)] border-2 border-white/80 transform group-hover:scale-110 transition-transform">
            {isPlaying ? (
              <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#012052]" />
            ) : (
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#012052] translate-x-0.5 rtl:-translate-x-0.5" />
            )}
          </div>
        </div>

        {/* Bottom Playback Controls Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 inset-x-0 p-3 pt-6 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 z-20 ${
            isPlaying && !showControls ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Progress Bar (Clickable) */}
          <div
            onClick={handleSeek}
            className="relative w-full h-1.5 hover:h-2.5 bg-white/25 rounded-full cursor-pointer transition-all mb-2.5 overflow-hidden group/bar"
          >
            <div
              className="absolute top-0 bottom-0 bg-gradient-to-r from-[#9A5F13] via-[#DFBF57] to-[#C8A232] rounded-full transition-all duration-75"
              style={{
                [isRtl ? "right" : "left"]: 0,
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="p-1 text-[#DFBF57] hover:text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="p-1 text-white/85 hover:text-[#DFBF57] transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-[11px] font-mono text-white/75 select-none">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openExpanded}
                aria-label={isRtl ? "تكبير الفيديو" : "Expand Video"}
                title={isRtl ? "تكبير الفيديو" : "Expand Video"}
                className="p-1 sm:px-2.5 sm:py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 hover:text-[#DFBF57] transition-all cursor-pointer flex items-center gap-1 text-[11px] font-mono"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#DFBF57]" />
                <span className="hidden sm:inline">{isRtl ? "تكبير" : "Expand"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Content & Story Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#04122C]">
        <div>
          <h3 className="text-sm sm:text-base font-bold font-display text-white leading-snug mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-[13px] text-white/80 font-body leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {highlights.length > 0 && (
          <div className="pt-3 border-t border-[#DFBF57]/20 space-y-1.5">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#FAF1DD]/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBF57] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* EXPANDED FULL-SCREEN LIGHTBOX MODAL (Mobile & Desktop UX)           */}
      {/* =================================================================== */}
      {isExpanded && (
        <div
          onClick={closeExpanded}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden border-2 border-[#C8A232] bg-[#020B1D] shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 bg-[#010E24] border-b border-[#C8A232]/40">
              <div className="flex items-center gap-2 text-white min-w-0">
                <Crown className="w-4 h-4 text-[#DFBF57] shrink-0" />
                <div className="truncate">
                  <span className="text-xs sm:text-sm font-bold font-display text-white">
                    {title}
                  </span>
                  <span className="mx-2 text-white/30 hidden sm:inline">•</span>
                  <span className="text-xs text-[#DFBF57] font-mono hidden sm:inline">
                    {patientTag}
                  </span>
                </div>
              </div>

              {/* Action Buttons (Minimize + Close) */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={closeExpanded}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold border border-[#DFBF57]/40 transition-all cursor-pointer"
                  title={isRtl ? "تصغير الفيديو" : "Minimize Video"}
                >
                  <Minimize2 className="w-3.5 h-3.5 text-[#DFBF57]" />
                  <span>{isRtl ? "تصغير" : "Minimize"}</span>
                </button>

                <button
                  type="button"
                  onClick={closeExpanded}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                autoPlay
                controls
                playsInline
                src={`${src}#t=${videoRef.current ? Math.floor(videoRef.current.currentTime) : 0}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer with Story Highlights & Close Hint */}
            <div className="px-4 py-2.5 bg-[#010E24] border-t border-[#DFBF57]/20 flex flex-wrap items-center justify-between gap-2 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <span className="text-[#DFBF57] font-bold">{patientTag}</span>
                {treatmentType && (
                  <span className="text-white/60 text-[11px]">({treatmentType})</span>
                )}
              </div>
              <span className="text-white/50 text-[11px]">
                {isRtl ? "اضغط على تصغير أو خارج الفيديو للرجوع" : "Tap minimize or outside to return"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
