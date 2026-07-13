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
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fHwy",
  },
  {
    id: "02",
    name: "Midnight Velvet",
    category: "Milk Based",
    price: "$7.00",
    desc: "Rich double-shot decaf espresso with a velvety local wild-honey infusion.",
    bgTheme: "bg-[#F4EAEF]",
    image:
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: "03",
    name: "Cold-Brew Tonic",
    category: "Signature Cold",
    price: "$7.50",
    desc: "12-hour slow cold extraction topped with crisp, sparkling citrus tonic water.",
    bgTheme: "bg-[#EFF4EA]",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: "04",
    name: "Espresso Affogato",
    category: "Dessert Coffee",
    price: "$8.00",
    desc: "Concentrated decaf shot drowned over a scoop of artisanal vanilla bean ice cream.",
    bgTheme: "bg-[#F4F0EA]",
    image:
      "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
];

// [INIT]: Mock dataset representing Instagram-curated aesthetic cafe ambience for desktop display
// Sekarang dengan gambar latar untuk setiap card
const AMBIENCE_DATA = [
  {
    id: "img-01",
    label: "08:45 AM — Sunlight reflection on the espresso bar",
    gridClass: "md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1",
    bgClass: "bg-[#E6DFD7]",
    tag: "BAR DETAIL",
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fHwy",
  },
  {
    id: "img-02",
    label: "The brutalist concrete pillars meeting warm cedar wood",
    gridClass: "md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2",
    bgClass: "bg-[#DFD5C6]",
    tag: "SPATIAL ARCHITECTURE",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: "img-03",
    label: "Slow extraction rituals capturing complex fruit aromatics",
    gridClass: "md:col-start-1 md:row-start-2 md:col-span-2 md:row-span-1",
    bgClass: "bg-[#D5CBB9]",
    tag: "SLOW POUR RITUAL",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlfGVufDB8fDB8fHwy",
  },
  {
    id: "img-04",
    label: "Artisanal custom ceramic vessels crafted for D`cafee",
    gridClass: "md:col-start-4 md:row-start-2 md:col-span-1 md:row-span-1",
    bgClass: "bg-[#EAE5DC]",
    tag: "CERAMIC CRAFT",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fHwy",
  },
  {
    id: "img-05",
    label: "Shared quiet moments over slow-extracted decaf shots",
    gridClass: "md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-1",
    bgClass: "bg-[#DCD4C7]",
    tag: "COMMUNAL SPACE",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmV8ZW58MHx8MHx8fDI%3D",
  },
];

export default function Home() {
  // [STATE]: Track active menu item ID to drive the live content display switch on mobile
  const [activeId, setActiveId] = useState("01");

  // [CALC]: Compute and pull complete object parameters for the mobile active view
  const activeItem =
    MENU_DATA.find((item) => item.id === activeId) || MENU_DATA[0];

  return (
    <>
      {/* [STYLE]: Outer frame wrapper using absolute brand cream tint as viewport margins */}
      <main className="min-h-screen w-full bg-brand-cream p-4 md:p-6 lg:p-8 flex flex-col selection:bg-brand-blue selection:text-white">
        {/* [STYLE]: THE MASTER UNIFIED SHELL CONTAINER */}
        <div className="w-full max-w-512 mx-auto bg-white rounded-4xl border border-brand-black/5 overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.015)] flex flex-col">
          {/* BRAND NAVIGATION BAR */}
          <nav className="w-full px-6 md:px-12 py-6 flex justify-between items-center border-b border-brand-cream">
            <div className="font-heading text-2xl tracking-tight text-brand-black font-extrabold">
              D`cafee<span className="text-brand-blue">.</span>
            </div>
            <div className="font-utility text-xs font-bold tracking-tight text-brand-black underline decoration-2 decoration-brand-blue underline-offset-4 hover:text-brand-blue transition-colors cursor-pointer">
              FIND US
            </div>
          </nav>

          {/* INTEGRATED ZONE 1: HERO CHAMBER CONTENT */}
          <div className="flex flex-col">
            <div className="px-6 md:px-12 py-12 md:py-20 max-w-4xl">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-brand-black tracking-tight leading-[0.95] mb-8">
                Great coffee.
                <br />
                <span className="text-brand-blue">Safe heart.</span>
                <br />
                Sweet dreams.
              </h1>
              <p className="font-body text-base md:text-lg text-brand-black/70 max-w-xl leading-relaxed">
                Meticulously sourced from local micro-lots, small-batch roasted,
                and Swiss Water processed. We kept all the complex taste notes,
                but stripped out the midday jitters and midnight insomnia.
              </p>
            </div>

            {/* Core spotlight product banner */}
            <div className="bg-brand-blue text-white p-8 md:p-12 mx-6 md:mx-12 mb-12 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
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
                <button className="bg-white text-brand-black font-utility text-xs font-bold px-6 py-4 rounded-xl hover:bg-brand-cream hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group cursor-pointer">
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
          <hr className="border-t border-brand-cream mx-6 md:mx-12" />

          {/* INTEGRATED ZONE 2: THE CURATED MENU */}
          <div className="w-full px-6 md:px-12 py-12 md:py-16">
            <div className="max-w-4xl md:max-w-none mx-auto w-full flex flex-col gap-8">
              <div className="max-w-md">
                <h2 className="font-heading text-2xl md:text-3xl text-brand-black tracking-tight mb-1">
                  The Curated Menu
                </h2>
                <p className="font-body text-xs text-brand-black/60">
                  Select a signature blend on the left to review its flavor
                  matrix window.
                </p>
              </div>

              {/* MOBILE LAYOUT - Stacked view (Card on TOP, Pills on BOTTOM) */}
              <div className="flex flex-col gap-6 md:hidden">
                <div
                  key={activeItem.id}
                  className="w-full max-w-100 mx-auto bg-brand-cream/30 p-4 border-2 border-brand-blue/5 shadow-xs rounded-3xl flex flex-col justify-between min-h-120 animate-[fadeIn_0.35s_ease-in-out]"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center font-utility text-xs font-bold text-white">
                      {activeItem.id}
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-brand-black leading-none mb-0.5">
                        {activeItem.name}
                      </h4>
                      <span className="font-utility text-[10px] text-brand-black/50 uppercase tracking-wider">
                        {activeItem.category}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`flex-1 my-4 rounded-2xl ${activeItem.bgTheme} border border-brand-black/5 flex items-center justify-center relative overflow-hidden min-h-48`}
                  >
                    <img
                      src={activeItem.image}
                      alt={activeItem.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    <p className="absolute bottom-2.5 left-2.5 right-2.5 font-body text-xs text-white/95 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/20 leading-relaxed">
                      {activeItem.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-heading text-xl text-brand-black font-bold tracking-tight">
                      {activeItem.price}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center">
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
                            ? "bg-brand-blue border-brand-blue text-white shadow-md shadow-brand-blue/10 scale-[1.01]"
                            : "bg-brand-cream/40 border-brand-black/5 text-brand-black hover:bg-brand-cream/70"
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-utility text-xs font-bold shrink-0 ${
                            isPillActive
                              ? "bg-white text-brand-blue"
                              : "bg-brand-black/5 text-brand-black/60"
                          }`}
                        >
                          {item.id}
                        </div>
                        <span
                          className={`font-heading text-sm tracking-tight truncate ${
                            isPillActive
                              ? "font-extrabold"
                              : "font-semibold opacity-80"
                          }`}
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
                    className="w-100 h-120 bg-brand-cream/30 p-6 border-2 border-brand-blue/5 shadow-xs rounded-3xl flex flex-col justify-between transition-transform hover:scale-[1.01]"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center font-utility text-xs font-bold text-white">
                        {item.id}
                      </div>
                      <div>
                        <h4 className="font-heading text-lg text-brand-black leading-none mb-0.5">
                          {item.name}
                        </h4>
                        <span className="font-utility text-[10px] text-brand-black/50 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`flex-1 my-4 rounded-2xl ${item.bgTheme} border border-brand-black/5 flex items-center justify-center relative overflow-hidden min-h-40`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                      <p className="absolute bottom-2.5 left-2.5 right-2.5 font-body text-xs text-white/95 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/20 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-heading text-xl text-brand-black font-bold tracking-tight">
                        {item.price}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-brand-blue hover:scale-105 transition-all cursor-pointer">
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
          <hr className="border-t border-brand-cream mx-6 md:mx-12" />

          {/* INTEGRATED ZONE 3: THE PROCESS EDITORIAL STORY */}
          <div className="w-full px-6 md:px-12 py-16 md:py-24 bg-white flex flex-col items-center">
            <div className="w-full max-w-3xl text-center space-y-6 md:space-y-8">
              <div className="space-y-1.5">
                <span className="font-utility text-[10px] md:text-xs font-bold text-brand-blue tracking-[0.2em] uppercase">
                  Our Craft Philosophy
                </span>
                <h2 className="font-heading text-2xl md:text-4xl text-brand-black tracking-tight font-extrabold">
                  Behind the Beans
                </h2>
              </div>
              <p className="font-body text-sm md:text-lg text-brand-black/80 leading-relaxed md:leading-[1.85] text-justify md:text-center tracking-normal">
                Every cup of D’cafee is born out of a profound dedication to
                science and flavor. We meticulously source selected coffee
                cherries directly from family-owned micro-lots in Colombia at an
                altitude of 1,800m ASL, then process them through a radical
                86-hour Thermal Shock Fermentation method to naturally lock in a
                vibrant strawberry milkshake aromatic profile. The final stage
                is perfected using pure Swiss Water Decaffeination technology,
                extracting 99.9% of caffeine without degrading the essential
                flavor oils inherent to the original green beans. A complex
                narrative of taste, crafted exclusively for coffee connoisseurs
                who demand premium quality with zero compromise on heart jitters
                or sleep disruption.
              </p>
              <div className="w-12 h-0.5 bg-brand-blue/20 mx-auto pt-0.5 rounded-full" />
            </div>
          </div>

          {/* [RENDER]: INTEGRATED ZONE 4: THE AMBIENCE GALLERY (DESKTOP EXCLUSIVE SYSTEM) */}
          <div className="w-full px-6 md:px-12 py-16 md:py-24 bg-brand-cream/20 hidden md:flex flex-col items-center border-t border-brand-cream">
            {/* Header Rows */}
            <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
              <div className="space-y-1">
                <span className="font-utility text-[10px] font-bold text-brand-black/40 tracking-[0.15em] uppercase">
                  Visual Journal
                </span>
                <h2 className="font-heading text-2xl md:text-3xl text-brand-black tracking-tight font-extrabold">
                  The Ambience Gallery
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-utility text-xs text-brand-black/60 font-medium">
                  Curated from{" "}
                  <span className="font-bold text-brand-black underline underline-offset-4 cursor-pointer hover:text-brand-blue transition-colors">
                    @dcafee.space
                  </span>
                </span>
              </div>
            </div>

            {/* Grid Galeri dengan Gambar */}
            <div className="w-full max-w-4xl grid md:grid-cols-4 md:grid-rows-3 gap-5 md:h-145 relative items-center">
              {AMBIENCE_DATA.map((img) => (
                <div
                  key={img.id}
                  className={`group relative w-full h-full rounded-3xl border border-brand-black/5 overflow-hidden flex flex-col justify-between p-6 transition-all duration-700 ease-out hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] hover:border-brand-black/10 hover:scale-[1.015] ${img.gridClass}`}
                >
                  {/* Gambar Latar */}
                  <img
                    src={img.image}
                    alt={img.tag}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay gelap untuk keterbacaan teks */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* Konten di atas gambar */}
                  <div className="relative z-10 w-full flex justify-between items-start opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-utility text-[9px] font-bold tracking-wider px-2 py-0.5 bg-black/40 rounded text-white/90 backdrop-blur-sm">
                      {img.tag}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="relative z-10 space-y-1.5">
                    <p className="font-body text-xs text-white/90 leading-relaxed transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 drop-shadow-md">
                      {img.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* [RENDER]: INTEGRATED ZONE 5: OPENING HOURS & LOCATION */}
          <div className="w-full px-6 md:px-12 py-12 border-t border-brand-cream bg-white">
            <div className="w-full bg-brand-blue rounded-4xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
              {/* LEFT SIDE */}
              <div className="md:col-span-2 flex flex-col justify-between p-2 text-white">
                <div className="space-y-8">
                  <div>
                    <span className="font-utility text-[10px] font-bold text-white/70 tracking-[0.15em] uppercase block mb-1">
                      Visit Our Space
                    </span>
                    <h2 className="font-heading text-3xl text-white tracking-tight font-extrabold">
                      Hours & Spot
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-3">
                      <p className="font-heading text-sm text-white font-bold tracking-tight">
                        Weekdays
                      </p>
                      <div className="flex justify-between items-baseline mt-0.5">
                        <p className="font-body text-xs text-white/60">
                          Monday — Friday
                        </p>
                        <p className="font-body text-sm text-white font-semibold">
                          08:00 AM — 09:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="border-b border-white/10 pb-3">
                      <p className="font-heading text-sm text-white font-bold tracking-tight">
                        Weekends
                      </p>
                      <div className="flex justify-between items-baseline mt-0.5">
                        <p className="font-body text-xs text-white/60">
                          Saturday — Sunday
                        </p>
                        <p className="font-body text-sm text-white font-semibold">
                          09:00 AM — 10:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-heading text-xs text-white font-bold uppercase tracking-wider">
                      The Coffee Pavilion
                    </p>
                    <p className="font-body text-xs text-white/70 leading-relaxed">
                      Jl. Bumi Blok M No. 42, Kebayoran Baru,
                      <br />
                      Jakarta Selatan, 12130
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-dashed border-white/10">
                  <p className="font-body text-[11px] text-white/65 leading-relaxed">
                    <span className="font-bold text-brand-blue uppercase tracking-wider text-[9px] mr-1.5 px-1.5 py-0.5 bg-white rounded">
                      Notice
                    </span>
                    Open on most public holidays. Please stay tuned to our
                    social journal for temporary festive holiday adjustments.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE: MAPS */}
              <div className="md:col-span-3 w-full min-h-75 md:min-h-100 bg-[#EAEFF4] rounded-3xl overflow-hidden relative group">
                <iframe
                  src="https://maps.google.com/maps?q=Blok%20M%20Square&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 grayscale contrast-110 opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-brand-blue text-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs font-medium">
          &copy; 2026 D`cafee Space. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <p className="font-body text-xs font-medium">
            Crafted with absolute intention
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="X"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
