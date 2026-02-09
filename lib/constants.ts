const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
const withBasePath = (path: string) => (basePath ? `${basePath}${path}` : path);

export const SITE = {
  name: "NB Beauty Studio",
  tagline: "Beauty • Aesthetics • Professionalism",
  description:
    "NB Beauty Studio is a premium beauty salon in Tbilisi offering makeup, lashes, brows, nails and more at ფარნავაზ მეფის 22.",
};

export const CONTACT = {
  address: "ფარნავაზ მეფის 22, Tbilisi 0159, Georgia",
  phoneDisplay: "591 74 47 44",
  phone: "+995591744744",
  email: "info@nbbeautystudio.ge",
};

export const LINKS = {
  tel: `tel:${CONTACT.phone}`,
  whatsapp:
    "https://wa.me/995591744744?text=Hello%20I%20want%20to%20book%20an%20appointment",
  // Replace with real social URLs.
  instagram: "#",
  telegram: "#",
  maps:
    "https://maps.google.com/maps?q=%E1%83%A4%E1%83%90%E1%83%A0%E1%83%9C%E1%83%90%E1%83%95%E1%83%90%E1%83%96%20%E1%83%9B%E1%83%94%E1%83%A4%E1%83%98%E1%83%A1%2022%20Tbilisi&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const OPENING_HOURS_SPEC = [
  { dayOfWeek: "Tuesday", opens: "11:00", closes: "20:00" },
  { dayOfWeek: "Wednesday", opens: "11:00", closes: "20:00" },
  { dayOfWeek: "Thursday", opens: "11:00", closes: "20:00" },
  { dayOfWeek: "Friday", opens: "11:00", closes: "20:00" },
  { dayOfWeek: "Saturday", opens: "11:00", closes: "20:00" },
  { dayOfWeek: "Sunday", opens: "11:00", closes: "20:00" },
];

// Place your logo in public/logo.png.
export const LOGO_IMAGE = withBasePath("/logo.png");

// Hero and gallery images (stored in public/gallery).
export const HERO_IMAGE = withBasePath("/gallery/hero.png");

export const GALLERY_IMAGES = [
  {
    src: withBasePath("/gallery/hero.png"),
    alt: "Studio interior",
  },
  {
    src: withBasePath("/gallery/studio-sign.png"),
    alt: "Studio sign with flowers",
  },
  {
    src: withBasePath("/gallery/bridal-makeup.png"),
    alt: "Bridal makeup portrait",
  },
  {
    src: withBasePath("/gallery/hair-color.png"),
    alt: "Soft balayage hair color",
  },
  {
    src: withBasePath("/gallery/nail-art.png"),
    alt: "Glossy nail art",
  },
  {
    src: withBasePath("/gallery/reception.png"),
    alt: "Reception area with mirrors",
  },
  {
    src: withBasePath("/gallery/storefront.png"),
    alt: "NB Beauty Studio storefront",
  },
];
