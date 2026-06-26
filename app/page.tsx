'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  ScanLine,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Star,
  Stethoscope,
  Sun,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    title: 'Experienced Dentists',
    description: 'Led by board-certified specialists with decades of trusted care.',
    icon: Stethoscope,
  },
  {
    title: 'Advanced Dental Technology',
    description: 'Digital diagnostics and precision tools for faster, safer treatment.',
    icon: ScanLine,
  },
  {
    title: 'Pain-Free Treatments',
    description: 'Gentle care, sedation options, and comfort-focused treatment plans.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent treatment plans and flexible payment options.',
    icon: BadgeCheck,
  },
  {
    title: 'Emergency Care',
    description: 'Same-day relief for urgent dental issues and unexpected pain.',
    icon: HeartPulse,
  },
  {
    title: 'Personalized Plans',
    description: 'Tailored treatment paths to match your lifestyle and smile goals.',
    icon: SmilePlus,
  },
];

const services = [
  {
    category: 'General Dentistry',
    description: 'Routine exams and preventive care designed to keep your smile healthy.',
    items: ['Dental Checkups', 'Teeth Cleaning', 'Fillings'],
    icon: Sparkles,
  },
  {
    category: 'Cosmetic Dentistry',
    description: 'Elevate your confidence with smile-enhancing treatments.',
    items: ['Teeth Whitening', 'Veneers', 'Smile Makeovers'],
    icon: SmilePlus,
  },
  {
    category: 'Restorative Dentistry',
    description: 'Restore function and strength with durable, natural-looking solutions.',
    items: ['Dental Crowns', 'Bridges', 'Dentures'],
    icon: ShieldCheck,
  },
  {
    category: 'Advanced Treatments',
    description: 'Modern surgical and orthodontic care for complete smile transformation.',
    items: ['Dental Implants', 'Root Canal Treatment', 'Invisalign'],
    icon: Activity,
  },
];

const steps = [
  { title: 'Book Consultation', description: 'Choose a time that works for you and share your needs online.' },
  { title: 'Meet the Dentist', description: 'We assess your oral health and map out your best treatment options.' },
  { title: 'Receive Treatment', description: 'Enjoy precise care delivered with comfort-first technology.' },
  { title: 'Follow-up Care', description: 'Every plan includes support, recovery guidance, and future prevention.' },
];

const dentists = [
  {
    name: 'Dr. Maya Chen',
    qualification: 'DDS, MSc Restorative Dentistry',
    specialty: 'Cosmetic Dentistry',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Daniel Brooks',
    qualification: 'DDS, PhD Oral Surgery',
    specialty: 'Dental Implants',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dr. Priya Shah',
    qualification: 'DDS, Invisalign Provider',
    specialty: 'Orthodontics',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
  },
];

const gallery = [
  {
    label: 'Smile Transformation',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
  },
  {
    label: 'Confidence Boost',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=80',
  },
  {
    label: 'Family Care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80',
  },
];

const testimonials = [
  {
    name: 'Megan T.',
    role: 'Patient',
    quote: 'The team made my implant journey feel effortless and reassuring. My new smile looks natural and healthy.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'James R.',
    role: 'Patient',
    quote: 'Every visit feels premium and personal. The technology and attention to detail are outstanding.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Nadia S.',
    role: 'Patient',
    quote: 'I brought my kids in for checkups and we all felt welcome. The care is gentle and truly family-friendly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80',
  },
];

const technologies = [
  { title: 'Digital X-rays', description: 'Low-radiation imaging for fast diagnosis and treatment planning.' },
  { title: 'Intraoral Scanners', description: 'Precise 3D scans create custom-fit restorations without messy impressions.' },
  { title: '3D Imaging', description: 'Advanced planning for implants, surgery, and guided dentistry.' },
  { title: 'Laser Dentistry', description: 'Comfort-focused treatments with improved healing and reduced discomfort.' },
];

const locations = [
  {
    name: 'Downtown Seattle',
    address: '128 Harbor Avenue, Seattle, WA 98101',
    hours: 'Mon–Fri 9am–6pm • Sat 10am–2pm',
    phone: '(206) 555-0148',
    map: 'https://www.google.com/maps?q=Seattle&output=embed',
  },
  {
    name: 'Bellevue Wellness Center',
    address: '43 Lake Street, Bellevue, WA 98004',
    hours: 'Mon–Thu 8am–5pm • Fri 8am–3pm',
    phone: '(425) 555-0182',
    map: 'https://www.google.com/maps?q=Bellevue&output=embed',
  },
];

const faqs = [
  { question: 'How often should I visit a dentist?', answer: 'Most patients benefit from a checkup and cleaning every six months, though some may need more frequent care.' },
  { question: 'Is teeth whitening safe?', answer: 'Yes. Professionally supervised whitening is safe and can be tailored to your sensitivity needs.' },
  { question: 'What is the cost of dental implants?', answer: 'Costs vary based on case complexity, but we provide a detailed treatment plan before any procedure begins.' },
  { question: 'Do you offer emergency dental treatment?', answer: 'Absolutely. We prioritize urgent cases and can often offer same-day appointments for pain relief.' },
  { question: 'Do you accept insurance?', answer: 'We work with many insurance providers and can help you understand your benefits and coverage options.' },
];

const blogPosts = [
  { title: 'Dental Hygiene Tips for a Brighter Smile', category: 'Oral Wellness', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80' },
  { title: 'Benefits of Dental Implants for Everyday Confidence', category: 'Restorative Care', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80' },
  { title: 'Preventing Tooth Decay in Children', category: 'Pediatric Dental', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80' },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedTheme ? savedTheme === 'dark' : preferredDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
              <SmilePlus className="h-6 w-6" />
            </div>
            <div>
              <div className="text-base font-semibold">Luma Dental</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Modern Dental Care</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-600">About</a>
            <a href="#services" className="transition hover:text-cyan-600">Services</a>
            <a href="#dentists" className="transition hover:text-cyan-600">Dentists</a>
            <a href="#locations" className="transition hover:text-cyan-600">Locations</a>
            <a href="#contact" className="transition hover:text-cyan-600">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setDarkMode((prev) => !prev)}
              className="hidden rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 md:block"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href="#appointment" className="hidden rounded-full bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700 md:inline-flex">
              Book Appointment
            </a>
            <button aria-label="Open menu" onClick={() => setMobileNavOpen(true)} className="rounded-full border border-slate-200 p-2.5 text-slate-600 dark:border-slate-700 dark:text-slate-300 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div className="border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
            <div className="flex items-center justify-between">
              <button aria-label="Close menu" onClick={() => setMobileNavOpen(false)} className="rounded-full border border-slate-200 p-2.5 text-slate-600 dark:border-slate-700 dark:text-slate-300">
                <X className="h-5 w-5" />
              </button>
              <button aria-label="Toggle theme" onClick={() => setDarkMode((prev) => !prev)} className="rounded-full border border-slate-200 p-2.5 text-slate-600 dark:border-slate-700 dark:text-slate-300">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="#about" onClick={() => setMobileNavOpen(false)}>About</a>
              <a href="#services" onClick={() => setMobileNavOpen(false)}>Services</a>
              <a href="#dentists" onClick={() => setMobileNavOpen(false)}>Dentists</a>
              <a href="#locations" onClick={() => setMobileNavOpen(false)}>Locations</a>
              <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
              <a href="#appointment" onClick={() => setMobileNavOpen(false)} className="inline-flex w-fit rounded-full bg-cyan-600 px-4 py-2.5 text-white">Book Appointment</a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.2),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-700 dark:border-cyan-900/50 dark:bg-cyan-950/40 dark:text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Trusted by families across the region
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Healthy Smiles Start Here
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Comprehensive dental care for individuals and families with advanced technology, gentle treatment, and experienced dentists.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#appointment" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+18005550148" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-600" /> Same-day emergency care</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-cyan-600" /> 4.9/5 Google rating</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute inset-0 -translate-y-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl" />
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" alt="Dentist treating a patient in a modern clinic" className="relative h-[480px] w-full rounded-[2rem] object-cover shadow-2xl" />
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-600"><ShieldCheck className="h-5 w-5" /></div>
                <div>
                  <div className="font-semibold">Advanced care, premium comfort</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">From family checkups to cosmetic transformations</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A modern clinic built around trust, comfort, and results.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">From routine care to advanced restorative dentistry, our team combines precision, compassion, and the latest technology to deliver beautiful, lasting oral health.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Services</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Complete dental care for every stage of your smile.</h2>
          </div>
          <a href="#appointment" className="text-sm font-semibold text-cyan-600 hover:text-cyan-700">Explore our treatments</a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.07 }} className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">{service.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold">{service.category}</h3>
                  </div>
                  <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-600">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /> {item}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-100">
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="appointment" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[2.2rem] border border-cyan-100 bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 p-8 text-white shadow-2xl shadow-cyan-600/20 lg:p-10">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">Appointment Journey</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Easy steps to a healthier, brighter smile.</h2>
            </div>
            <a href="https://wa.me/18005550148" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/25">
              <Phone className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">0{index + 1}</div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-cyan-50">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dentists" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Meet Our Dentists</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Specialists who combine expertise with genuine care.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dentists.map((dentist) => (
            <motion.div key={dentist.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <img src={dentist.image} alt={dentist.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{dentist.name}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-600">{dentist.qualification}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-cyan-600" /> Specialty: {dentist.specialty}</div>
                  <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-600" /> Experience: {dentist.experience}</div>
                </div>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600 dark:bg-slate-800">
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Smile Gallery</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Real transformations with a confident finish.</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">See how modern treatment planning can create life-changing smiles.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.label} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <img src={item.image} alt={item.label} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.label}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Beautifully restored function and symmetry through tailored dentistry.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Patient Reviews</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">What patients say about their experience.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Trusted by families and professionals alike for exceptional care and a calm, reassuring environment.</p>
            <div className="mt-6 flex items-center gap-2 text-amber-500">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}
              <span className="ml-2 text-sm font-semibold text-slate-700 dark:text-slate-200">4.9/5 on Google Reviews</span>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button key={item.name} aria-label={`View testimonial ${index + 1}`} onClick={() => setActiveTestimonial(index)} className={`h-2.5 w-2.5 rounded-full ${activeTestimonial === index ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-700'}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button aria-label="Previous testimonial" onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300"><ChevronLeft className="h-4 w-4" /></button>
                <button aria-label="Next testimonial" onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300"><ChevronRight className="h-4 w-4" /></button>
              </div>
            </div>
            <motion.div key={testimonials[activeTestimonial].name} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">“{testimonials[activeTestimonial].quote}”</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Dental Technology</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Precision care powered by modern dentistry.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technologies.map((technology) => (
            <div key={technology.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-600"><ScanLine className="h-6 w-6" /></div>
              <h3 className="text-lg font-semibold">{technology.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{technology.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-[2.2rem] border border-cyan-100 bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-800 p-8 text-white shadow-2xl shadow-slate-800/20 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Emergency Dental Care</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Need urgent dental care?</h2>
              <p className="mt-4 max-w-2xl text-slate-300">We offer same-day appointments for tooth pain, broken teeth, swelling, and other urgent dental concerns.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:+18005550148" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400">
                <Phone className="h-4 w-4" /> (800) 555-0148
              </a>
              <a href="#appointment" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                Same-day appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Locations</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Visit one of our premium dental clinics.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {locations.map((location) => (
            <div key={location.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <iframe src={location.map} title={location.name} className="h-56 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{location.name}</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-cyan-600" /> {location.address}</div>
                  <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-600" /> {location.hours}</div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-600" /> {location.phone}</div>
                </div>
                <a href={location.map.replace('output=embed', 'output=classic')} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700">Open in Google Maps <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Everything you need to know before your visit.</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Our friendly team is happy to help with questions about treatment, costs, insurance, and preventive care.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <summary className="cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-100">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">From Our Blog</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Helpful stories and tips to keep your smile healthy.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">{post.category}</p>
                <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
                <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700">Read More <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-cyan-600 to-blue-700 p-8 text-white shadow-xl shadow-cyan-600/20">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">Contact</p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Let us help you book your next visit.</h2>
            <div className="mt-8 space-y-4 text-sm text-cyan-50">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5" /> (800) 555-0148</div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5" /> hello@lumadental.com</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /> 128 Harbor Avenue, Seattle, WA 98101</div>
            </div>
            <div className="mt-8 rounded-[1.25rem] border border-white/20 p-4 text-sm text-cyan-50">
              <p className="font-semibold">Need immediate care?</p>
              <p className="mt-1">Call our emergency line and we will do our best to assist you the same day.</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                  <input id="name" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">Phone</label>
                  <input id="phone" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                <input id="email" type="email" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium">Service Needed</label>
                <select id="service" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950">
                  <option>General Checkup</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Implants</option>
                  <option>Emergency Care</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" placeholder="Tell us about your smile goals or concerns." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700">
                Request Appointment <ArrowRight className="h-4 w-4" />
              </button>
              {submitted && <p className="text-sm font-medium text-cyan-600">Thank you! We will contact you shortly to confirm your visit.</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/90 py-10 dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3 text-lg font-semibold">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                <SmilePlus className="h-5 w-5" />
              </div>
              Luma Dental
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Modern, trustworthy dental care for healthier smiles and happier lives.</p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#about" className="hover:text-cyan-600">About</a></li>
              <li><a href="#services" className="hover:text-cyan-600">Services</a></li>
              <li><a href="#dentists" className="hover:text-cyan-600">Dentists</a></li>
              <li><a href="#contact" className="hover:text-cyan-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>Cosmetic Dentistry</li>
              <li>Restorative Care</li>
              <li>Implants</li>
              <li>Emergency Dental Care</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>(800) 555-0148</li>
              <li>hello@lumadental.com</li>
              <li>128 Harbor Avenue, Seattle</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-slate-200 px-4 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Luma Dental Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-cyan-600">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-cyan-600">Facebook</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-600">LinkedIn</a>
          </div>
        </div>
      </footer>

      <a href="#appointment" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 font-semibold text-white shadow-xl shadow-cyan-600/30 transition hover:bg-cyan-700">
        <Phone className="h-4 w-4" /> Book Now
      </a>
    </main>
  );
}
