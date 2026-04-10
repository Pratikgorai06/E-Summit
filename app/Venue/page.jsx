"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Plane, Train } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen text-white pb-32">
      {/* Hero Section - Matches Events/Speakers pattern */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        {/* YouTube Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <iframe
            className="w-full h-full scale-150"
            src="https://www.youtube.com/embed/q7TnGTdZCmA?autoplay=1&mute=1&loop=1&playlist=q7TnGTdZCmA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
            title="Venue Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Overlays for depth and readability */}
          <div className="absolute inset-0 bg-linear-to-b from-[#0c0014]/90 via-[#0c0014]/40 to-[#0c0014]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0014_100%)] opacity-80"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <MapPin className="text-purple-400" size={16} />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">BIT Sindri, Jharkhand</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white uppercase">
            THE <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-fuchsia-500 to-purple-600 animate-pulse">VENUE</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-[0.4em] text-[10px] md:text-xs leading-relaxed font-light">
            E-Summit 2026 • Innovation • Industry • Excellence
          </p>
        </motion.div>
      </section>

      {/* Campus Highlight Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-purple-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Institutional Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
              A Legacy of <br />
              <span className="text-purple-500 italic">Innovation & Industry</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                E-Summit 2026 takes place at the historic <span className="text-white font-medium">Birsa Institute of Technology (BIT), Sindri</span>.
                Established in 1949, it stands as one of premier engineering destinations in India,
                strategically located in the industrial heartland of Jharkhand.
              </p>
              <p>
                With its sprawling green campus and rich academic heritage, BIT Sindri provides
                the ideal environment for high-stakes ideathons, networking, and the
                exchange of groundbreaking entrepreneurial ideas.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-video bg-[#160021] border border-white/5 rounded-2xl overflow-hidden relative group hover:border-purple-500/30 transition-all duration-500 shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/q7TnGTdZCmA?autoplay=0&mute=1&rel=0&modestbranding=1"
                title="Campus Highlight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Map & Logistics Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/5 h-[500px] shadow-2xl bg-[#160021]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5961623718!2d86.473681!3d23.6546293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f696e95958a6d5%3A0x7c14e668e6f2feea!2sBIT%20Sindri!5e0!3m2!1sen!2sin!4v1775792183262!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-110 brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            />
            {/* Overlay Gradient for seamless integration */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-[#0c0014]/50"></div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 h-[500px]"
          >
            <div className="bg-[#160021] border border-white/5 p-8 rounded-2xl flex-1 hover:border-purple-500/20 transition-all flex flex-col justify-center">
              <div>
                <div className="mb-4 inline-flex p-3 bg-purple-500/10 rounded-xl">
                  <MapPin className="text-purple-500" />
                </div>
                <h4 className="text-xl font-bold mb-3">Venue Address</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Birsa Institute of Technology Sindri<br />
                  P.O. Sindri Institute, Dhanbad<br />
                  Jharkhand - 828123, India
                </p>
              </div>
            </div>

            <div className="bg-[#160021] border border-white/5 p-8 rounded-2xl flex-1 hover:border-purple-500/20 transition-all flex flex-col justify-center">
              <div>
                <div className="mb-4 inline-flex p-3 bg-purple-500/10 rounded-xl">
                  <Train className="text-purple-500" />
                </div>
                <h4 className="text-xl font-bold mb-3">How to Reach</h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold shrink-0 text-sm">Rail:</span>
                    <p className="text-sm text-gray-400">Dhanbad Jn (~27km). Use main exit for transport.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold shrink-0 text-sm">Auto:</span>
                    <p className="text-sm text-gray-400">Frequent shared autos available from Dhanbad Station to Sindri.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold shrink-0 text-sm">Air:</span>
                    <p className="text-sm text-gray-400">Ranchi (IXR) ~160km or Kolkata (CCU) ~280km.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
