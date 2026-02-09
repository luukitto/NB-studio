"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_IMAGE, LINKS } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="NB Beauty Studio"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-xl rounded-3xl bg-white/80 p-6 text-center shadow-lg backdrop-blur-md sm:mx-0 sm:p-8 sm:text-left lg:p-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-dark/60 sm:text-sm">
              {t.hero.subtitle}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-dark/70 sm:text-base">
              {t.hero.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={LINKS.whatsapp}
                className="rounded-full bg-dark px-6 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-black sm:text-base"
              >
                {t.hero.ctaBook}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={LINKS.tel}
                className="rounded-full border border-dark/20 bg-white/70 px-6 py-2.5 text-sm font-medium text-dark transition hover:border-dark/40 sm:text-base"
              >
                {t.hero.ctaCall}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
