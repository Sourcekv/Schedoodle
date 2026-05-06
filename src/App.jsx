import React, { useMemo, useState } from "react";
import "./App.css";

const LOGO_MASCOT_URL = "https://i.imgur.com/Avb0KcR.png";
const LOGO_WORDMARK_URL = "https://i.imgur.com/bnR1olQ.png";

const categories = [
  { id: "all", name: "All", icon: "✨" },
  { id: "dentist", name: "Dentist", icon: "🦷" },
  { id: "auto", name: "Car Service", icon: "🚗" },
  { id: "hair", name: "Hair Stylist", icon: "✂️" },
  { id: "consulting", name: "Consulting", icon: "💼" },
  { id: "restaurant", name: "Restaurants", icon: "🍽️" },
  { id: "concert", name: "Concerts", icon: "🎵" },
  { id: "doctor", name: "Doctors", icon: "🩺" },
  { id: "cinema", name: "Cinema", icon: "🎬" },
  { id: "theater", name: "Theater", icon: "🎭" },
  { id: "veterinarian", name: "Veterinarian", icon: "🐾" },
  { id: "eyeclinic", name: "Eye Clinic", icon: "👁️" },
  { id: "fitness", name: "Fitness", icon: "🏋️" },
  { id: "spa", name: "Spa & Wellness", icon: "💆" },
  { id: "travel", name: "Travel Agency", icon: "✈️" },
  { id: "photography", name: "Photography", icon: "📸" },
];

const providers = [
  { id: 1, name: "BrightSmile Dental Studio", category: "dentist", location: "Belgrade", rating: 4.8, image: "🦷", services: ["Dental Check-up", "Cleaning", "Whitening"] },
  { id: 2, name: "AutoCare Pro Garage", category: "auto", location: "New Belgrade", rating: 4.6, image: "🚗", services: ["Diagnostics", "Oil Change", "Tires"] },
  { id: 3, name: "Luna Hair Atelier", category: "hair", location: "Stara Pazova", rating: 4.9, image: "✂️", services: ["Haircut", "Styling", "Coloring"] },
  { id: 4, name: "Vision Plus Eye Clinic", category: "eyeclinic", location: "Novi Sad", rating: 4.9, image: "👁️", services: ["Eye Exams", "Glasses Consultation", "Laser Surgery"] },
  { id: 5, name: "Bella Napoli Restaurant", category: "restaurant", location: "Belgrade Waterfront", rating: 4.7, image: "🍽️", services: ["Dinner Reservation", "VIP Table", "Birthday Events"] },
  { id: 6, name: "Arena Concert Hall", category: "concert", location: "Belgrade Arena", rating: 4.8, image: "🎵", services: ["Concert Tickets", "VIP Lounge", "Backstage Access"] },
  { id: 7, name: "HealthPoint Medical Center", category: "doctor", location: "Zemun", rating: 4.6, image: "🩺", services: ["General Practice", "Cardiology", "Pediatrics"] },
  { id: 8, name: "Galaxy Cinema", category: "cinema", location: "Delta City", rating: 4.5, image: "🎬", services: ["Movie Tickets", "VIP Seats", "3D Projection"] },
  { id: 9, name: "Royal Theater", category: "theater", location: "Novi Sad", rating: 4.9, image: "🎭", services: ["Theater Tickets", "Opera", "Private Balcony"] },
  { id: 10, name: "Happy Paws Veterinary Clinic", category: "veterinarian", location: "Stara Pazova", rating: 4.8, image: "🐾", services: ["Pet Check-up", "Vaccination", "Emergency Care"] },
  { id: 11, name: "Iron Forge Gym", category: "fitness", location: "Belgrade", rating: 4.7, image: "🏋️", services: ["Gym Membership", "Personal Trainer", "Fitness Classes"] },
  { id: 12, name: "Zen Aura Spa", category: "spa", location: "Novi Sad", rating: 4.9, image: "💆", services: ["Massage", "Sauna", "Wellness Packages"] },
  { id: 13, name: "SkyLine Travel Agency", category: "travel", location: "Belgrade", rating: 4.5, image: "✈️", services: ["Vacation Booking", "Flight Tickets", "Cruises"] },
  { id: 14, name: "Golden Frame Photography", category: "photography", location: "Novi Sad", rating: 4.8, image: "📸", services: ["Wedding Photos", "Studio Sessions", "Events"] },
  { id: 15, name: "Future Minds Consulting", category: "consulting", location: "Online", rating: 4.6, image: "💼", services: ["Career Coaching", "Business Strategy", "Startup Advice"] },
];

const initialNotifications = [
  { id: 1, title: "Booking confirmed", text: "Your appointment request has been saved successfully.", type: "success" },
  { id: 2, title: "Appointment reminder", text: "Do not forget your next scheduled visit.", type: "info" },
  { id: 3, title: "Special offer", text: "Some providers have limited-time discounts this week.", type: "promo" },
];

function LogoMascot({ className = "" }) {
  return <img src={LOGO_MASCOT_URL} alt="Schedoodle mascot" className={className} />;
}

function LogoWordmark({ className = "" }) {
  return <img src={LOGO_WORDMARK_URL} alt="Schedoodle wordmark" className={className} />;
}

function Header({ activePage, setActivePage }) {
  const pages = ["Home", "Providers", "Booking", "Dashboard", "Notifications", "Reviews", "Admin"];

  return (
    <header className="app-header">
      <div className="header-inner">
        <button className="brand" onClick={() => setActivePage("Home")} aria-label="Go to home page">
          <span className="logo-box"><LogoMascot /></span>
          <LogoWordmark className="wordmark" />
        </button>

        <nav className="nav-tabs" aria-label="Main navigation">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              className={`pill ${activePage === page ? "active" : ""}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function CategoryGrid({ selectedCategory, setSelectedCategory, setActivePage }) {
  return (
    <section className="section-block">
      <div className="section-title-row">
        <div>
          <p className="eyebrow">Explore</p>
          <h2>Browse Categories</h2>
        </div>
        <button className="text-button" onClick={() => setActivePage("Providers")}>View all providers →</button>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-card ${selectedCategory === category.id ? "selected" : ""}`}
            onClick={() => {
              setSelectedCategory(category.id);
              setActivePage("Providers");
            }}
          >
            <span className="category-icon">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function Home({ setActivePage, selectedCategory, setSelectedCategory }) {
  return (
    <div className="page-stack">
      <section className="hero-grid">
        <div className="hero-card">
          <LogoWordmark className="hero-wordmark" />
          <p className="eyebrow light">Smart booking platform</p>
          <h1>Book anything. Anytime. Anywhere.</h1>
          <p>
            Schedoodle helps users discover trusted providers, book appointments, receive notifications,
            and manage their schedule from one modern dashboard.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => setActivePage("Providers")}>Find Providers</button>
            <button className="yellow-button" onClick={() => setActivePage("Dashboard")}>Open Dashboard</button>
          </div>
        </div>

        <div className="feature-column">
          <FeatureCard icon="📅" title="Smart Scheduling" text="Choose providers, dates, times and services in one simple flow." />
          <FeatureCard icon="🔔" title="Notifications" text="Receive booking confirmations, reminders and updates." />
          <FeatureCard icon="⭐" title="Reviews & Ratings" text="Compare providers using visible ratings and customer feedback." />
        </div>
      </section>

      <CategoryGrid selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setActivePage={setActivePage} />
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <article className="card feature-card">
      <span className="feature-icon">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function Providers({ selectedCategory, setSelectedCategory, searchTerm, setSearchTerm, onBook }) {
  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      const matchesCategory = selectedCategory === "all" || provider.category === selectedCategory;
      const searchable = `${provider.name} ${provider.location} ${provider.services.join(" ")}`.toLowerCase();
      return matchesCategory && searchable.includes(searchTerm.toLowerCase());
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="page-stack">
      <div className="page-heading">
        <p className="eyebrow">Marketplace</p>
        <h2>Providers</h2>
        <p>Browse available businesses and book appointments instantly.</p>
      </div>

      <div className="toolbar">
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by provider, location or service..."
        />
        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="provider-list">
        {filteredProviders.length === 0 ? (
          <div className="empty-state">No providers match your search.</div>
        ) : (
          filteredProviders.map((provider) => <ProviderCard key={provider.id} provider={provider} onBook={onBook} />)
        )}
      </div>
    </div>
  );
}

function ProviderCard({ provider, onBook }) {
  return (
    <article className="card provider-card">
      <div className="provider-main">
        <div className="provider-avatar">{provider.image}</div>
        <div>
          <h3>{provider.name}</h3>
          <p className="muted">📍 {provider.location}</p>
          <p className="muted">⭐ {provider.rating.toFixed(1)}</p>
          <div className="service-tags">
            {provider.services.map((service) => <span key={service}>{service}</span>)}
          </div>
        </div>
      </div>
      <button className="primary-button" onClick={() => onBook(provider)}>Book Appointment</button>
    </article>
  );
}

function Booking({ bookingProvider, addAppointment, setActivePage }) {
  const [formData, setFormData] = useState({
    customerName: "",
    service: bookingProvider?.services?.[0] || "",
    date: "",
    time: "",
    notes: "",
  });
  const [message, setMessage] = useState("");

  const provider = bookingProvider || providers[0];
  const services = provider.services;

  function updateField(field, value) {
    setMessage("");
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.customerName.trim() || !formData.date || !formData.time) {
      setMessage("Please enter your name, date and time before confirming the booking.");
      return;
    }

    addAppointment({
      id: Date.now(),
      provider: provider.name,
      category: provider.category,
      service: formData.service || services[0],
      date: formData.date,
      time: formData.time,
      customerName: formData.customerName,
      location: provider.location,
      notes: formData.notes,
    });

    setMessage("Booking confirmed! Your appointment was added to the dashboard.");
  }

  return (
    <section className="card booking-card">
      <div className="page-heading compact">
        <p className="eyebrow">Booking</p>
        <h2>Confirm Appointment</h2>
        <p>Fill in the details below to create a new booking.</p>
      </div>

      <div className="selected-provider">
        <div className="provider-avatar large">{provider.image}</div>
        <div>
          <h3>{provider.name}</h3>
          <p>📍 {provider.location} · ⭐ {provider.rating.toFixed(1)}</p>
        </div>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input value={formData.customerName} onChange={(event) => updateField("customerName", event.target.value)} placeholder="Enter your full name" />
        </label>
        <label>
          Service
          <select value={formData.service} onChange={(event) => updateField("service", event.target.value)}>
            {services.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </label>
        <label>
          Date
          <input type="date" value={formData.date} onChange={(event) => updateField("date", event.target.value)} />
        </label>
        <label>
          Time
          <input type="time" value={formData.time} onChange={(event) => updateField("time", event.target.value)} />
        </label>
        <label className="full-width">
          Notes
          <textarea value={formData.notes} onChange={(event) => updateField("notes", event.target.value)} placeholder="Optional appointment notes" />
        </label>
        <div className="form-actions full-width">
          <button className="primary-button" type="submit">Confirm Booking</button>
          <button className="secondary-button" type="button" onClick={() => setActivePage("Providers")}>Choose another provider</button>
        </div>
        {message && <p className={`form-message full-width ${message.includes("confirmed") ? "success" : "error"}`}>{message}</p>}
      </form>
    </section>
  );
}

function Dashboard({ appointments, setActivePage }) {
  return (
    <div className="page-stack">
      <div className="page-heading">
        <p className="eyebrow">User area</p>
        <h2>Dashboard</h2>
        <p>Track upcoming appointments, favorite providers and reminders.</p>
      </div>

      <div className="stats-grid">
        <StatCard icon="📅" title="Appointments" value={appointments.length} />
        <StatCard icon="🔔" title="Reminders" value="Enabled" />
        <StatCard icon="⭐" title="Favorites" value="2" />
      </div>

      <section className="card appointment-panel">
        <div className="section-title-row">
          <h3>Upcoming Appointments</h3>
          <button className="text-button" onClick={() => setActivePage("Providers")}>Book more →</button>
        </div>
        {appointments.length === 0 ? (
          <p className="muted">No appointments yet. Choose a provider and create your first booking.</p>
        ) : (
          <div className="appointment-list">
            {appointments.map((appointment) => (
              <div className="appointment-item" key={appointment.id}>
                <strong>{appointment.provider}</strong>
                <span>{appointment.service}</span>
                <span>{appointment.date} at {appointment.time}</span>
                <span>{appointment.location}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <article className="card stat-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{value}</p>
    </article>
  );
}

function NotificationsCenter({ notifications }) {
  return (
    <section className="card notification-panel">
      <div className="page-heading compact">
        <p className="eyebrow">Updates</p>
        <h2>Notifications Center</h2>
        <p>Important booking updates and reminders appear here.</p>
      </div>
      <div className="notification-list">
        {notifications.map((item) => (
          <article className={`notification-item ${item.type}`} key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReviewsPage() {
  const reviews = [
    {
      name: "Ksenija Pavlović",
      role: "Course Instructor",
      photo: "https://i.imgur.com/97bNNFG.jpeg",
      text: "Very fast and easy booking process. I found a provider in less than a minute.",
    },
    {
      name: "Ognjen Matić",
      role: "Practice Mentor",
      photo: "https://media.licdn.com/dms/image/v2/D4D03AQEf8dO3oV12Fg/profile-displayphoto-scale_200_200/B4DZuFiLaNH8Ag-/0/1767471888701?e=2147483647&v=beta&t=DYc9P4uy-aphCBbDoZnJbvcuJuVtwUlFwLr9HeTho6I",
      text: "The interface is colorful, clear, and simple to use on both desktop and mobile.",
    },
    {
      name: "Petar Vukićević",
      role: "QA Instructor",
      photo: "https://i.imgur.com/ysyQe27.jpeg",
      text: "Notifications and dashboard make it easy to remember scheduled appointments.",
    },
  ];

  return (
    <div className="review-grid">
      {reviews.map((review) => (
        <article className="card review-card" key={review.name}>
          <div className="review-user">
            <img src={review.photo} alt={review.name} className="review-photo" />
            <div>
              <h3>{review.name}</h3>
              <p className="review-role">{review.role}</p>
            </div>
          </div>

          <div className="stars">★★★★★</div>
          <p>{review.text}</p>
        </article>
      ))}
    </div>
  );
}

function AdminPanel({ appointments }) {
  const stats = [
    ["👤", "Users", "1,284"],
    ["🏢", "Providers", providers.length],
    ["📅", "Bookings", appointments.length],
    ["📊", "Retention", "63%"],
  ];

  return (
    <div className="page-stack">
      <div className="page-heading">
        <p className="eyebrow">Administration</p>
        <h2>Admin Panel</h2>
        <p>Prototype overview of platform performance and system activity.</p>
      </div>
      <div className="stats-grid four">
        {stats.map(([icon, title, value]) => <StatCard key={title} icon={icon} title={title} value={value} />)}
      </div>
    </div>
  );
}

function ComingSoon() {
  const features = [
    ["💳", "Online Payments", "Secure in-app payments, invoices and provider payouts."],
    ["🤖", "AI Scheduling", "Smart recommendations based on habits and provider availability."],
    ["🌍", "Multi-language Support", "Localization for international users and providers."],
    ["📊", "Advanced Analytics", "Performance metrics, forecasting and provider insights."],
    ["📅", "Calendar Sync", "Google Calendar, Outlook and Apple Calendar integrations."],
    ["📱", "SMS Notifications", "Appointment reminders and confirmations by SMS."],
  ];

  return (
    <section className="coming-soon">
      <div>
        <span className="coming-label">🚀 Coming soon</span>

        <h2>Future updates already planned for Schedoodle.</h2>
        
        <p>
              The MVP delivers the core booking experience while future updates expand
              automation, integrations and global support.
        </p>
  
        <div className="working-area">
          <img
            src="https://yt3.ggpht.com/9AsegagNDr8Gr1cE9ztb39JRX_LS6Spbh_4oSjdM729fcDBUg6X0sSlsl77LGkc6JVEefy4WmgIzTnM"
            alt="Working on it"
            className="working-gif"
          />
        <p className="working-text">working on it</p>
        </div>
      </div>

      <div className="coming-grid">
        {features.map(([icon, title, text]) => (
          <article className="coming-card" key={title}>
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [bookingProvider, setBookingProvider] = useState(providers[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [appointments, setAppointments] = useState([
    { id: 1001, provider: "Luna Hair Atelier", category: "hair", service: "Haircut", date: "2026-05-15", time: "14:30", customerName: "Demo User", location: "Stara Pazova" },
  ]);
  const [notifications, setNotifications] = useState(initialNotifications);

  function handleBook(provider) {
    setBookingProvider(provider);
    setActivePage("Booking");
  }

  function addAppointment(appointment) {
    setAppointments((current) => [appointment, ...current]);
    setNotifications((current) => [
      { id: Date.now(), title: "New booking created", text: `${appointment.service} with ${appointment.provider} on ${appointment.date} at ${appointment.time}.`, type: "success" },
      ...current,
    ]);
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <button className="theme-toggle" onClick={() => setDarkMode((current) => !current)}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <main className="main-container">
        {activePage === "Home" && <Home setActivePage={setActivePage} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}
        {activePage === "Providers" && <Providers selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} searchTerm={searchTerm} setSearchTerm={setSearchTerm} onBook={handleBook} />}
        {activePage === "Booking" && <Booking bookingProvider={bookingProvider} addAppointment={addAppointment} setActivePage={setActivePage} />}
        {activePage === "Dashboard" && <Dashboard appointments={appointments} setActivePage={setActivePage} />}
        {activePage === "Notifications" && <NotificationsCenter notifications={notifications} />}
        {activePage === "Reviews" && <ReviewsPage />}
        {activePage === "Admin" && <AdminPanel appointments={appointments} />}
      </main>

      <div className="main-container no-top-padding"><ComingSoon /></div>

      <footer className="footer main-container no-top-padding">
        <p>Developed by Marko Plavšić and Borislav Kiković</p>
        <p>© 2026 InForce Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
