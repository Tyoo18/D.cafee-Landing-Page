"use client";

// [INIT]: Import React core hooks for managing user interaction states
import React, { useState } from "react";

// [INIT]: Curated signature coffee dataset with precise display themes
const MENU_DATA = [
  {
    id: "01",
    name: "Origami Pour Over",
    category: "Filter Coffee",
    price: "$6.50",
    desc: "Single-origin Colombia beans with vibrant notes of strawberry milkshake and cream.",
    bgTheme: "bg-[#EAEFF4]",
  },
  {
    id: "02",
    name: "Midnight Velvet",
    category: "Milk Based",
    price: "$7.00",
    desc: "Rich double-shot decaf espresso with a velvety local wild-honey infusion.",
    bgTheme: "bg-[#F4EAEF]",
  },
  {
    id: "03",
    name: "Cold-Brew Tonic",
    category: "Signature Cold",
    price: "$7.50",
    desc: "12-hour slow cold extraction topped with crisp, sparkling citrus tonic water.",
    bgTheme: "bg-[#EFF4EA]",
  },
  {
    id: "04",
    name: "Espresso Affogato",
    category: "Dessert Coffee",
    price: "$8.00",
    desc: "Concentrated decaf shot drowned over a scoop of artisanal vanilla bean ice cream.",
    bgTheme: "bg-[#F4F0EA]",
  },
];

export default function Home() {
  // [STATE]: Track active menu item ID to drive the live content display switch on mobile
  const [activeId, setActiveId] = useState("01");

  // [CALC]: Compute and pull complete object parameters for the mobile active view
  const activeItem =
    MENU_DATA.find((item) => item.id === activeId) || MENU_DATA[0];

  return (
    /* [STYLE]: Outer frame wrapper using absolute brand cream tint as viewport margins */
    <main className="min-h-screen w-full bg-[#F4EFEA] p-4 md:p-6 lg:p-8 flex flex-col selection:bg-[#2b56ff] selection:text-white">
      {/* [STYLE]: THE MASTER UNIFIED SHELL CONTAINER */}
      <div className="w-full max-w-512 mx-auto bg-white rounded-4xl border border-black/5 overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.015)] flex flex-col">
        {/* BRAND NAVIGATION BAR */}
        <nav className="w-full px-6 md:px-12 py-6 flex justify-between items-center border-b border-[#F4EFEA]">
          <div className="font-heading text-2xl tracking-tight text-black font-extrabold">
            D`cafee<span className="text-[#2b56ff]">.</span>
          </div>
          <div className="font-utility text-xs font-bold tracking-tight text-black underline decoration-2 decoration-[#2b56ff] underline-offset-4 hover:text-[#2b56ff] transition-colors cursor-pointer">
            FIND US
          </div>
        </nav>

        {/* INTEGRATED ZONE 1: HERO CHAMBER CONTENT */}
        <div className="flex flex-col">
          <div className="px-6 md:px-12 py-12 md:py-20 max-w-4xl">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-black tracking-tight leading-[0.95] mb-8">
              Great coffee.
              <br />
              <span className="text-[#2b56ff]">Safe heart.</span>
              <br />
              Sweet dreams.
            </h1>
            <p className="font-body text-base md:text-lg text-black/70 max-w-xl leading-relaxed">
              Meticulously sourced from local micro-lots, small-batch roasted,
              and Swiss Water processed. We kept all the complex taste notes,
              but stripped out the midday jitters and midnight insomnia.
            </p>
          </div>

          {/* Core spotlight product banner */}
          <div className="bg-[#2b56ff] text-white p-8 md:p-12 mx-6 md:mx-12 mb-12 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2 max-w-sm">
              <h3 className="font-heading text-xl md:text-2xl tracking-tight">
                Colombia Finca El Paraiso
              </h3>
              <p className="font-body text-xs opacity-80 leading-relaxed">
                Notes of strawberry milkshake, thermal shock processed, 99.9%
                caffeine-free. Poured with absolute intention.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <button className="bg-white text-black font-utility text-xs font-bold px-6 py-4 rounded-xl hover:bg-[#F4EFEA] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group cursor-pointer">
                EXPLORE THE CRAFT
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ELEGANT STRUCTURAL DIVIDER SEPARATOR */}
        <hr className="border-t border-[#F4EFEA] mx-6 md:mx-12" />

        {/* INTEGRATED ZONE 2: THE CURATED MENU */}
        <div className="w-full px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-4xl md:max-w-none mx-auto w-full flex flex-col gap-8">
            <div className="max-w-md">
              <h2 className="font-heading text-2xl md:text-3xl text-black tracking-tight mb-1">
                The Curated Menu
              </h2>
              <p className="font-body text-xs text-black/60">
                Select a signature blend on the left to review its flavor matrix
                window.
              </p>
            </div>

            {/* MOBILE LAYOUT - Stacked view (Card on TOP, Pills on BOTTOM) */}
            <div className="flex flex-col gap-6 md:hidden">
              <div
                key={activeItem.id}
                className="w-full max-w-100 mx-auto bg-[#F4EFEA]/30 p-4 border-2 border-blue-600/5 shadow-xs rounded-3xl flex flex-col justify-between min-h-120 animate-[fadeIn_0.35s_ease-in-out]"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#2b56ff] flex items-center justify-center font-utility text-xs font-bold text-white">
                    {activeItem.id}
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-black leading-none mb-0.5">
                      {activeItem.name}
                    </h4>
                    <span className="font-utility text-[10px] text-black/50 uppercase tracking-wider">
                      {activeItem.category}
                    </span>
                  </div>
                </div>
                <div
                  className={`flex-1 my-4 rounded-2xl ${activeItem.bgTheme} border border-black/5 flex items-center justify-center relative overflow-hidden min-h-48`}
                >
                  <span className="font-heading text-5xl font-extrabold opacity-5 tracking-tighter uppercase select-none">
                    D`CAF
                  </span>
                  <p className="absolute bottom-2.5 left-2.5 right-2.5 font-body text-xs text-black/70 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/40 leading-relaxed">
                    {activeItem.desc}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-heading text-xl text-black font-bold tracking-tight">
                    {activeItem.price}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                    <svg
                      className="w-4 h-4 transform -rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 w-full max-w-100 mx-auto">
                {MENU_DATA.map((item) => {
                  const isPillActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={`w-full flex items-center gap-4 p-2.5 rounded-full transition-all duration-300 border text-left cursor-pointer ${
                        isPillActive
                          ? "bg-[#2b56ff] border-[#2b56ff] text-white shadow-md shadow-blue-600/10 scale-[1.01]"
                          : "bg-[#F4EFEA]/40 border-black/5 text-black hover:bg-[#F4EFEA]/70"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-utility text-xs font-bold shrink-0 ${isPillActive ? "bg-white text-[#2b56ff]" : "bg-black/5 text-black/60"}`}
                      >
                        {item.id}
                      </div>
                      <span
                        className={`font-heading text-sm tracking-tight truncate ${isPillActive ? "font-extrabold" : "font-semibold opacity-80"}`}
                      >
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DESKTOP LAYOUT - 4 Cards Grid Array Display */}
            <div className="hidden md:flex md:flex-row md:flex-wrap lg:flex-nowrap gap-6 justify-center w-full">
              {MENU_DATA.map((item) => (
                <div
                  key={item.id}
                  className="w-100 h-120 bg-[#F4EFEA]/30 p-6 border-2 border-blue-600/5 shadow-xs rounded-3xl flex flex-col justify-between transition-transform hover:scale-[1.01]"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-9 h-9 rounded-full bg-[#2b56ff] flex items-center justify-center font-utility text-xs font-bold text-white">
                      {item.id}
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-black leading-none mb-0.5">
                        {item.name}
                      </h4>
                      <span className="font-utility text-[10px] text-black/50 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`flex-1 my-4 rounded-2xl ${item.bgTheme} border border-black/5 flex items-center justify-center relative overflow-hidden min-h-40`}
                  >
                    <span className="font-heading text-5xl font-extrabold opacity-5 tracking-tighter uppercase select-none">
                      D`CAF
                    </span>
                    <p className="absolute bottom-2.5 left-2.5 right-2.5 font-body text-xs text-black/70 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/40 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-heading text-xl text-black font-bold tracking-tight">
                      {item.price}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#2b56ff] hover:scale-105 transition-all cursor-pointer">
                      <svg
                        className="w-4 h-4 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ELEGANT STRUCTURAL DIVIDER SEPARATOR */}
        <hr className="border-t border-[#F4EFEA] mx-6 md:mx-12" />

        {/* [RENDER]: INTEGRATED ZONE 3: THE PROCESS EDITORIAL STORY (REFACTORED TO TEXT ONLY) */}
        <div className="w-full px-6 md:px-12 py-16 md:py-24 bg-white flex flex-col items-center">
          {/* [STYLE]: Centered Minimal Master Box Layout */}
          <div className="w-full max-w-3xl text-center space-y-6 md:space-y-8">
            {/* Small Subtle Title Header Overlays */}
            <div className="space-y-1.5">
              <span className="font-utility text-[10px] md:text-xs font-bold text-[#2b56ff] tracking-[0.2em] uppercase">
                Our Craft Philosophy
              </span>
              <h2 className="font-heading text-2xl md:text-4xl text-black tracking-tight font-extrabold">
                Behind the Beans
              </h2>
            </div>

            {/* [FORMAT]: Formal Narrative Editorial Text Paragraph Block */}
            <p className="font-body text-sm md:text-lg text-black/80 leading-relaxed md:leading-[1.85] text-justify md:text-center tracking-normal">
              Every cup of D’cafee is born out of a profound dedication to
              science and flavor. We meticulously source selected coffee
              cherries directly from family-owned micro-lots in Colombia at an
              altitude of 1,800m ASL, then process them through a radical
              86-hour Thermal Shock Fermentation method to naturally lock in a
              vibrant strawberry milkshake aromatic profile. The final stage is
              perfected using pure Swiss Water Decaffeination technology,
              extracting 99.9% of caffeine without degrading the essential
              flavor oils inherent to the original green beans. A complex
              narrative of taste, crafted exclusively for coffee connoisseurs
              who demand premium quality with zero compromise on heart jitters
              or sleep disruption.
            </p>

            {/* Small decorative minimalist anchor line */}
            <div className="w-12 h-0.5 bg-[#2b56ff]/20 mx-auto pt-0.5 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
