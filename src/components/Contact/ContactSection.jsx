"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCommentDots,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCarSide,
  FaClock,
  FaMapMarkerAlt,
  FaDirections,
  FaWhatsapp, // Added WhatsApp icon
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    phone: "",
    email: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setFormErrors({ ...formErrors, phone: "Invalid phone number" });
      return;
    }

    // Construct WhatsApp Message
    const whatsappNumber = "447850179151"; // International format without '+'
    const text = `*New Enquiry from Naz Motors Website*%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Email:* ${formData.email || "Not provided"}%0A
*Vehicle:* ${formData.vehicle || "Not provided"}%0A
*Service:* ${formData.service || "General Enquiry"}%0A
*Message:* ${formData.message}`;

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    
    toast.success("Opening WhatsApp...");
  };

  return (
    <section className="py-16 bg-white dark:bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div
            data-aos="fade-right"
            className="flex flex-col gap-6 rounded-xl border border-[#E6EAE7] dark:border-white/10 
                       bg-white dark:bg-[#0F1115] py-6 shadow-sm box-border w-full"
          >
            <div className="px-6">
              <div className="text-2xl font-bold flex items-center text-[#111827] dark:text-gray-100">
                <FaWhatsapp className="mr-2 h-6 w-6 text-[#25D366]" />
                Contact via WhatsApp
              </div>
              <p className="text-sm mt-1 text-[#555] dark:text-gray-400">
                Send us a message and we'll reply as soon as possible.
              </p>
            </div>

            <div className="px-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormInput
                  id="name"
                  label="Full Name *"
                  placeholder="Your full name"
                  icon={<FaUser className="h-4 w-4" />}
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormInput
                  id="phone"
                  label="Phone Number *"
                  placeholder="Your phone number"
                  icon={<FaPhone className="h-4 w-4" />}
                  value={formData.phone}
                  onChange={handleChange}
                  error={formErrors.phone}
                />
              </div>

              <FormInput
                id="email"
                type="email"
                label="Email Address"
                placeholder="your.email@example.com"
                icon={<FaEnvelope className="h-4 w-4" />}
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
              />

              <FormInput
                id="vehicle"
                label="Vehicle Details"
                placeholder="Make, model, year"
                icon={<FaCarSide className="h-4 w-4" />}
                value={formData.vehicle}
                onChange={handleChange}
              />

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium dark:text-gray-200">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 py-2 rounded-md border bg-white dark:bg-[#1B1E24] text-[#111827] dark:text-white border-[#E6EAE7] dark:border-white/10 hover:border-[#B62025] focus:border-[#B62025] focus:ring-[#B62025]"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="scrapping">Car Scrapping (ATF)</option>
                  <option value="mot">MOT Test</option>
                  <option value="service">Car Service</option>
                  <option value="repairs">Mechanical Repairs</option>
                  <option value="tyres">Tyres & Wheel Alignment</option>
                  <option value="aircon">Air Conditioning</option>
                  <option value="parts">Second-Hand Car Parts</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium dark:text-gray-200">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Please describe your requirements..."
                  className="w-full rounded-md border px-3 py-2 bg-white dark:bg-[#1B1E24] text-[#111827] dark:text-white dark:border-white/10 focus:ring-[#B62025] focus:border-[#B62025]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="inline-flex items-center justify-center gap-2 h-10 w-full rounded-md font-semibold transition-colors bg-[#B62025] dark:bg-[#FF4B4B] text-white hover:shadow-lg active:scale-[0.98]"
              >
                <FaWhatsapp className="h-5 w-5" />
                Send via WhatsApp
              </button>

              <p className="text-xs text-[#777] dark:text-gray-400">
                By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            <SideCard
              data-aos="fade-left"
              title="Opening Hours"
              icon={<FaClock className="h-5 w-5" />}
            >
              <HoursRow day="Monday – Saturday" time="09:00 – 18:00" />
              <HoursRow day="Sunday" time="Appointment Only" muted />
            </SideCard>

            <SideCard data-aos="fade-left" title="Find Us" icon={<FaMapMarkerAlt className="h-5 w-5" />}>
              <div className="space-y-1 mb-4">
                <p className="font-semibold text-[#111827] dark:text-white">Naz Motors Ltd</p>
                <p className="text-sm text-[#555] dark:text-gray-400">
                  80 Ravensbridge Drive, Leicester, LE4 0BX
                </p>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=LE4+0BX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="h-9 w-full rounded-md border px-4 py-2 text-sm font-medium flex items-center justify-center bg-white dark:bg-[#1B1E24] text-[#111827] dark:text-white border-[#E6EAE7] dark:border-white/10 hover:shadow">
                  <FaDirections className="mr-2 h-4 w-4 text-[#B62025] dark:text-[#FF4B4B]" />
                  View on Google Maps
                </button>
              </a>
            </SideCard>

            <SideCard data-aos="fade-left" title="About Naz Motors">
              <p className="text-sm text-[#555] dark:text-gray-400 leading-relaxed">
                Naz Motors is a trusted, family-run business based in Leicester, 
                offering professional car scrapping (ATF), reliable MOT testing, 
                expert repairs, and quality second-hand parts — all under one roof.
              </p>
            </SideCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- Subcomponents ----- */

function FormInput({ id, label, placeholder, icon, value, onChange, type = "text", error }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium dark:text-gray-200">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className={`h-10 w-full rounded-md border bg-white dark:bg-[#1B1E24] px-3 pl-10 text-[#111827] dark:text-white outline-none focus:ring-1 focus:ring-[#B62025] ${
            error ? "border-red-500" : "border-[#E6EAE7] dark:border-white/10"
          }`}
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-xs text-red-500 mt-1 font-medium">{error}</p>}
      </div>
    </div>
  );
}

function SideCard({ title, icon, children, ...props }) {
  return (
    <div
      {...props}
      className="rounded-xl border border-[#E6EAE7] dark:border-white/10 bg-white dark:bg-[#0F1115] py-6 shadow-sm box-border w-full"
    >
      <div className="px-6 mb-2">
        <div className="text-xl font-bold flex items-center text-[#111827] dark:text-white">
          {icon && <span className="mr-2 text-[#B62025] dark:text-[#FF4B4B]">{icon}</span>}
          {title}
        </div>
      </div>
      <div className="px-6">{children}</div>
    </div>
  );
}

function HoursRow({ day, time, muted }) {
  return (
    <div className="flex items-center justify-between py-1 border-b border-gray-100 dark:border-white/5 last:border-0">
      <span className="font-medium text-[#111827] dark:text-white">{day}</span>
      <span className={`text-sm ${muted ? "text-gray-400 italic" : "text-[#111827] dark:text-white"}`}>
        {time}
      </span>
    </div>
  );
}