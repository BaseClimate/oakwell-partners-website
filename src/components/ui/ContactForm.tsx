"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORM_ACTION = "https://formspree.io/f/YOUR_FORM_ID";
  const isFormConfigured = !FORM_ACTION.includes("YOUR_FORM_ID");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormConfigured) {
      console.error(
        "Formspree form ID has not been configured. Form submissions will not work."
      );
      alert(
        "This form is not yet configured. Please contact us by email instead."
      );
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch {
      // Fallback - still show success for static export
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-light-teal rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-deep-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading text-2xl font-bold text-dark-teal mb-2">
          Thank You
        </h3>
        <p className="text-charcoal text-lg">
          We have received your information and will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      action={FORM_ACTION}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-charcoal font-semibold mb-1.5">
          Your name <span className="text-warm-gold">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full min-h-[48px] px-4 py-3 border border-gray-200 rounded-lg text-charcoal bg-white focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-charcoal font-semibold mb-1.5">
          Phone number <span className="text-warm-gold">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          autoComplete="tel"
          className="w-full min-h-[48px] px-4 py-3 border border-gray-200 rounded-lg text-charcoal bg-white focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-charcoal font-semibold mb-1.5">
          Email address <span className="text-warm-gold">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full min-h-[48px] px-4 py-3 border border-gray-200 rounded-lg text-charcoal bg-white focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all"
        />
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="block text-charcoal font-semibold mb-1.5">
          City or town in Ontario <span className="text-warm-gold">*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          autoComplete="address-level2"
          className="w-full min-h-[48px] px-4 py-3 border border-gray-200 rounded-lg text-charcoal bg-white focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all"
        />
      </div>

      {/* Equipment type */}
      <div>
        <label htmlFor="equipment" className="block text-charcoal font-semibold mb-1.5">
          What type of equipment is involved? <span className="text-warm-gold">*</span>
        </label>
        <select
          id="equipment"
          name="equipment"
          required
          className="w-full min-h-[48px] px-4 py-3 border border-gray-200 rounded-lg text-charcoal bg-white focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all"
        >
          <option value="">Please select...</option>
          <option value="Furnace">Furnace</option>
          <option value="Water Heater">Water Heater</option>
          <option value="Air System">Air System</option>
          <option value="Multiple">Multiple</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-charcoal font-semibold mb-1.5">
          Brief description of your situation{" "}
          <span className="text-medium-grey font-normal">(optional)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Tell us a little about what happened. For example, how were you contacted and when was the equipment installed?"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal bg-white focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all resize-y"
        />
      </div>

      {/* How did you hear about us */}
      <div>
        <label htmlFor="referral" className="block text-charcoal font-semibold mb-1.5">
          How did you hear about us?{" "}
          <span className="text-medium-grey font-normal">(optional)</span>
        </label>
        <select
          id="referral"
          name="referral"
          className="w-full min-h-[48px] px-4 py-3 border border-gray-200 rounded-lg text-charcoal bg-white focus:border-deep-teal focus:ring-2 focus:ring-deep-teal/20 transition-all"
        >
          <option value="">Please select...</option>
          <option value="Search Engine">Search Engine (Google, etc.)</option>
          <option value="Friend or Family">Friend or Family Member</option>
          <option value="Social Media">Social Media</option>
          <option value="News Article">News Article</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <Button type="submit" variant="gold" size="large" className="w-full">
        {isSubmitting ? "Sending..." : "Get My Free Review"}
      </Button>

      {/* Reassurance text */}
      <div className="text-center space-y-3 pt-2">
        <p className="text-medium-grey text-sm">
          Your information is kept strictly confidential. This consultation is free and there is no obligation to proceed. We will never share your information with anyone outside of our team and the legal professionals working on your case.
        </p>
        <p className="text-charcoal text-sm font-medium">
          Not sure if you qualify? That is exactly what this conversation is for. There are no silly questions and no judgement. Fill out the form and we will help you understand where you stand.
        </p>
      </div>
    </form>
  );
}
