import { useState, useEffect, useMemo } from "react";
import {
  ChevronDown,
  Filter,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Calendar,
  Search,
  Trophy,
  Zap,
  Award,
  Clock,
  Flame,
  Star,
  ArrowUp,
  ArrowDown,
  Activity,
  Globe,
  Shield,
  Download,
  Share2,
  Settings,
  Bell,
  Menu,
  X,
  Eye,
  Percent,
  Goal,
} from "lucide-react";

export default function WinMixProDashboard() {
  const [selectedTeam, setSelectedTeam] = useState("Összes csapat");
  const [selectedPeriod, setSelectedPeriod] = useState("Utolsó 30 nap");
  const [selectedCompetition, setSelectedCompetition] = useState("NB I");
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);
  const [competitionDropdownOpen, setCompetitionDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // --- NEW: State for Pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Extended team list
  const teams = [
    "Összes csapat",
    "Ferencváros TC",
    "MOL Fehérvár FC",
    "Puskás Akadémia FC",
    "Újpest FC",
    "MTK Budapest FC",
    "Kisvárda Master Good",
    "Zalaegerszegi TE FC",
    "Paksi FC",
    "Debreceni VSC",
    "Mezőkövesd Zsóry FC",
    "Honvéd FC",
    "Diósgyőri VTK",
    "Budafoki MTE",
  ];

  const periods = [
    "Utolsó 7 nap",
    "Utolsó 30 nap",
    "Utolsó 3 hónap",
    "Idei szezon",
    "Előző szezon",
    "Minden idők",
  ];

  const competitions = [
    "NB I",
    "NB II",
    "Magyar Kupa",
    "Európa Liga",
    "Konferencia Liga",
  ];

  // Advanced feature list
  const features = [
    {
      icon: Target,
      color: "from-emerald-400 to-emerald-600",
      name: "Élő eredmények",
      desc: "Valós idejű meccs követés",
    },
    {
      icon: Trophy,
      color: "from-amber-400 to-orange-500",
      name: "Bajnokság",
      desc: "Tabellák és rangsorok",
    },
    {
      icon: BarChart3,
      color: "from-blue-400 to-blue-600",
      name: "Statisztikák",
      desc: "Részletes elemzések",
    },
    {
      icon: Users,
      color: "from-purple-400 to-purple-600",
      name: "Csapatok",
      desc: "Csapat profilok",
    },
    {
      icon: Flame,
      color: "from-red-400 to-red-600",
      name: "Hot Picks",
      desc: "Népszerű tippek",
    },
    {
      icon: Clock,
      color: "from-indigo-400 to-indigo-600",
      name: "Élő",
      desc: "Live meccsek",
    },
    {
      icon: Award,
      color: "from-pink-400 to-pink-600",
      name: "Díjak",
      desc: "Játékos elismerések",
    },
    {
      icon: Star,
      color: "from-yellow-400 to-yellow-600",
      name: "Kedvencek",
      desc: "Személyre szabás",
    },
  ];

  // Professional statistics data
  const statistics = [
    {
      title: "Összes meccs",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: Target,
      progress: 85,
      gradient: "from-emerald-500 to-teal-600",
      description: "Az elmúlt hónapban",
      subValue: "847 befejezett",
    },
    {
      title: "Átlagos gólszám",
      value: "2.73",
      change: "+8.2%",
      trend: "up",
      icon: Goal,
      progress: 73,
      gradient: "from-blue-500 to-cyan-600",
      description: "Meccs per átlag",
      subValue: "2.1 xG átlag",
    },
    {
      title: "BTTS arány",
      value: "67.4%",
      change: "-3.1%",
      trend: "down",
      icon: Percent,
      progress: 67,
      gradient: "from-amber-500 to-orange-600",
      description: "Mindkét csapat gólja",
      subValue: "156 meccsből",
    },
    {
      title: "Hazai győzelem",
      value: "38.2%",
      change: "+15.7%",
      trend: "up",
      icon: TrendingUp,
      progress: 38,
      gradient: "from-purple-500 to-violet-600",
      description: "Hazai pálya előny",
      subValue: "476 meccs",
    },
  ];

  // Realistic results with more data
  const matchResults = [
    {
      id: 1,
      date: "2024-09-15",
      time: "18:00",
      homeTeam: "Ferencváros TC",
      awayTeam: "MOL Fehérvár FC",
      homeScore: 2,
      awayScore: 1,
      result: "hazai",
      btts: "igen",
      totalGoals: 3,
      status: "FT",
      competition: "NB I",
      round: "8. forduló",
      attendance: 18847,
      xG: { home: 1.8, away: 0.9 },
    },
    {
      id: 2,
      date: "2024-09-14",
      time: "20:30",
      homeTeam: "Puskás Akadémia FC",
      awayTeam: "Újpest FC",
      homeScore: 1,
      awayScore: 2,
      result: "vendég",
      btts: "igen",
      totalGoals: 3,
      status: "FT",
      competition: "NB I",
      round: "8. forduló",
      attendance: 4231,
      xG: { home: 1.2, away: 1.7 },
    },
    {
      id: 3,
      date: "2024-09-13",
      time: "19:15",
      homeTeam: "MTK Budapest FC",
      awayTeam: "Kisvárda Master Good",
      homeScore: 0,
      awayScore: 1,
      result: "vendég",
      btts: "nem",
      totalGoals: 1,
      status: "FT",
      competition: "NB I",
      round: "8. forduló",
      attendance: 2156,
      xG: { home: 0.6, away: 1.1 },
    },
    {
      id: 4,
      date: "2024-09-12",
      time: "17:45",
      homeTeam: "Zalaegerszegi TE FC",
      awayTeam: "Paksi FC",
      homeScore: 2,
      awayScore: 3,
      result: "vendég",
      btts: "igen",
      totalGoals: 5,
      status: "FT",
      competition: "NB I",
      round: "8. forduló",
      attendance: 3421,
      xG: { home: 2.1, away: 2.8 },
    },
    {
      id: 5,
      date: "2024-09-11",
      time: "20:00",
      homeTeam: "Debreceni VSC",
      awayTeam: "Honvéd FC",
      homeScore: 1,
      awayScore: 1,
      result: "döntetlen",
      btts: "igen",
      totalGoals: 2,
      status: "FT",
      competition: "NB I",
      round: "8. forduló",
      attendance: 5632,
      xG: { home: 1.3, away: 1.4 },
    },
    // Adding more data to test filtering and pagination
    {
      id: 6,
      date: "2024-09-10",
      time: "18:00",
      homeTeam: "Ferencváros TC",
      awayTeam: "Paksi FC",
      homeScore: 3,
      awayScore: 0,
      result: "hazai",
      btts: "nem",
      totalGoals: 3,
      status: "FT",
      competition: "NB I",
      round: "7. forduló",
      attendance: 15200,
      xG: { home: 2.5, away: 0.4 },
    },
    {
      id: 7,
      date: "2024-09-09",
      time: "20:00",
      homeTeam: "Újpest FC",
      awayTeam: "MTK Budapest FC",
      homeScore: 2,
      awayScore: 2,
      result: "döntetlen",
      btts: "igen",
      totalGoals: 4,
      status: "FT",
      competition: "NB I",
      round: "7. forduló",
      attendance: 6100,
      xG: { home: 1.9, away: 1.8 },
    },
    {
      id: 8,
      date: "2024-09-08",
      time: "18:00",
      homeTeam: "Gyirmót FC",
      awayTeam: "Soroksár SC",
      homeScore: 1,
      awayScore: 0,
      result: "hazai",
      btts: "nem",
      totalGoals: 1,
      status: "FT",
      competition: "NB II",
      round: "9. forduló",
      attendance: 1200,
      xG: { home: 1.1, away: 0.7 },
    },
  ];

  // --- NEW: Memoized filtering logic ---
  // This will re-calculate only when the source data or filters change
  const filteredMatches = useMemo(() => {
    return matchResults.filter((match) => {
      const teamMatch =
        selectedTeam === "Összes csapat" ||
        match.homeTeam === selectedTeam ||
        match.awayTeam === selectedTeam;
      const competitionMatch = match.competition === selectedCompetition;
      // Note: Period filtering is complex and would require a date-fns or similar library
      // to properly compare dates. For this example, we only filter by team and competition.
      return teamMatch && competitionMatch;
    });
  }, [selectedTeam, selectedCompetition, matchResults]);

  // --- NEW: Pagination Calculations ---
  const totalPages = Math.ceil(filteredMatches.length / itemsPerPage);
  const currentMatches = filteredMatches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --- NEW: Pagination Handlers ---
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  // Improved circular progress component
  const CircularProgress = ({
    percentage,
    size = 96,
    strokeWidth = 8,
    gradient = "from-violet-500 to-purple-600",
    showAnimation = true,
  }) => {
    // --- IMPROVED: Create a safe, unique ID for the gradient ---
    const gradientId = `grad_${gradient.replace(/[^a-zA-Z0-9]/g, "")}`;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${
      (percentage / 100) * circumference
    } ${circumference}`;
    const [gradientFrom, gradientTo] = gradient.split(" ");

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                className={gradientFrom.replace("from-", "text-")}
              />
              <stop
                offset="100%"
                className={gradientTo.replace("to-", "text-")}
              />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1F2937"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className={
              showAnimation ? "transition-all duration-1000 ease-out" : ""
            }
            style={{
              filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{percentage}%</span>
        </div>
      </div>
    );
  };

  const getResultColor = (result) => {
    switch (result) {
      case "hazai":
        return "text-emerald-400";
      case "vendég":
        return "text-sky-400";
      case "döntetlen":
        return "text-amber-400";
      default:
        return "text-zinc-400";
    }
  };

  const getResultBg = (result) => {
    switch (result) {
      case "hazai":
        return "bg-emerald-400/10 border-emerald-400/20";
      case "vendég":
        return "bg-sky-400/10 border-sky-400/20";
      case "döntetlen":
        return "bg-amber-400/10 border-amber-400/20";
      default:
        return "bg-zinc-400/10 border-zinc-400/20";
    }
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString("hu-HU", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #0F0F23 0%, #050505 50%, #000000 100%)",
      }}
    >
      <nav className="relative z-50 h-20 backdrop-blur-xl border-b border-white/5 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="text-white font-bold text-xl bg-gradient-to-br from-white to-violet-100 bg-clip-text text-transparent">
                  W
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-300" />
              <div className="hidden md:block absolute left-16 top-1/2 transform -translate-y-1/2">
                <div className="text-xl font-bold">WinMix Pro</div>
                <div className="text-xs text-zinc-400">
                  Magyar Futball Elemző
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#"
                className="relative text-violet-400 font-medium group"
              >
                Dashboard
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
              </a>
              <a
                href="#"
                className="text-zinc-300 hover:text-white transition-all duration-200 relative group"
              >
                Statisztikák
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#"
                className="text-zinc-300 hover:text-white transition-all duration-200 relative group"
              >
                Élő meccsek
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#"
                className="text-zinc-300 hover:text-white transition-all duration-200 relative group"
              >
                Csapatok
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#"
                className="text-zinc-300 hover:text-white transition-all duration-200 relative group"
              >
                Elemzések
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-2">
              <Clock size={16} className="text-violet-400" />
              <span className="text-sm font-mono">
                {formatTime(currentTime)}
              </span>
            </div>
            <div className="relative hidden md:block">
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
              />
              <input
                type="text"
                placeholder="Csapat, játékos, meccs keresése..."
                className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-violet-500/50 focus:bg-black/30 outline-none transition-all duration-200 w-80"
              />
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button className="p-2 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-black/30 transition-all duration-200">
                <Bell
                  size={18}
                  className="text-zinc-400 hover:text-violet-400"
                />
              </button>
              <button className="p-2 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-black/30 transition-all duration-200">
                <Settings
                  size={18}
                  className="text-zinc-400 hover:text-violet-400"
                />
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/40 backdrop-blur-2xl border-b border-white/10 p-6">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-violet-400 font-medium">
                Dashboard
              </a>
              <a href="#" className="text-zinc-300">
                Statisztikák
              </a>
              <a href="#" className="text-zinc-300">
                Élő meccsek
              </a>
              <a href="#" className="text-zinc-300">
                Csapatok
              </a>
              <a href="#" className="text-zinc-300">
                Elemzések
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex items-center justify-between mb-8 p-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">
                Élő kapcsolat
              </span>
            </div>
            <div className="text-sm text-zinc-400">
              Utolsó frissítés: {currentTime.toLocaleTimeString("hu-HU")}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} className="text-zinc-400" />
            <span className="text-sm text-zinc-400">
              1,247 aktív felhasználó
            </span>
          </div>
        </div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-6 py-3 mb-8">
            <Zap size={18} className="text-violet-400" />
            <span className="text-violet-300 font-medium">
              Élő statisztikák és professzionális elemzések
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-white via-violet-100 to-violet-300 bg-clip-text text-transparent leading-tight">
            Magyar Futball
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              Adatelemzés
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            Professzionális elemzések és részletes statisztikák a magyar
            labdarúgás világából. Valós idejű adatok, prediktív modellek és
            szakértői insights egy helyen.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`relative w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl overflow-hidden`}
                >
                  <Icon size={28} className="text-white relative z-10" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-semibold group-hover:text-white transition-colors duration-200">
                    {feature.name}
                  </p>
                  <p className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl blur-3xl" />
          <div className="relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-violet-500/20">
                  <Filter size={24} className="text-violet-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Szűrők és Beállítások</h2>
                  <p className="text-zinc-400 text-sm">
                    Testreszabhatja a megjeleníti adatokat
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-black/20 border border-white/10 rounded-xl hover:bg-black/30 transition-all duration-200">
                  <Download
                    size={18}
                    className="text-zinc-400 hover:text-violet-400"
                  />
                </button>
                <button className="p-2 bg-black/20 border border-white/10 rounded-xl hover:bg-black/30 transition-all duration-200">
                  <Share2
                    size={18}
                    className="text-zinc-400 hover:text-violet-400"
                  />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                  <Globe size={16} className="text-violet-400" />
                  Verseny
                </label>
                <button
                  onClick={() =>
                    setCompetitionDropdownOpen(!competitionDropdownOpen)
                  }
                  aria-expanded={competitionDropdownOpen}
                  className="w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 text-left flex items-center justify-between hover:bg-black/40 hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <span className="font-medium">{selectedCompetition}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 text-zinc-400 group-hover:text-violet-400 ${
                      competitionDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {competitionDropdownOpen && (
                  <div className="absolute top-full mt-2 w-full bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl z-20 shadow-2xl">
                    {competitions.map((competition) => (
                      <button
                        key={competition}
                        onClick={() => {
                          setSelectedCompetition(competition);
                          setCompetitionDropdownOpen(false);
                          setCurrentPage(1); // Reset page on filter change
                        }}
                        className="w-full px-6 py-3 text-left hover:bg-white/10 transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl font-medium"
                      >
                        {competition}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                  <Shield size={16} className="text-emerald-400" />
                  Csapat
                </label>
                <button
                  onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                  aria-expanded={teamDropdownOpen}
                  className="w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 text-left flex items-center justify-between hover:bg-black/40 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <span className="font-medium">{selectedTeam}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 text-zinc-400 group-hover:text-emerald-400 ${
                      teamDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {teamDropdownOpen && (
                  <div className="absolute top-full mt-2 w-full bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl z-20 max-h-64 overflow-y-auto shadow-2xl">
                    {teams.map((team) => (
                      <button
                        key={team}
                        onClick={() => {
                          setSelectedTeam(team);
                          setTeamDropdownOpen(false);
                          setCurrentPage(1); // Reset page on filter change
                        }}
                        className="w-full px-6 py-3 text-left hover:bg-white/10 transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl font-medium"
                      >
                        {team}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                  <Calendar size={16} className="text-blue-400" />
                  Időszak
                </label>
                <button
                  onClick={() => setPeriodDropdownOpen(!periodDropdownOpen)}
                  aria-expanded={periodDropdownOpen}
                  className="w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 text-left flex items-center justify-between hover:bg-black/40 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <span className="font-medium">{selectedPeriod}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 text-zinc-400 group-hover:text-blue-400 ${
                      periodDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {periodDropdownOpen && (
                  <div className="absolute top-full mt-2 w-full bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl z-20 shadow-2xl">
                    {periods.map((period) => (
                      <button
                        key={period}
                        onClick={() => {
                          setSelectedPeriod(period);
                          setPeriodDropdownOpen(false);
                          setCurrentPage(1); // Reset page on filter change
                        }}
                        className="w-full px-6 py-3 text-left hover:bg-white/10 transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl font-medium"
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <label className="block text-sm font-semibold text-zinc-300 mb-3 opacity-0">
                  Akciók
                </label>
                <button
                  onClick={() => {
                    setSelectedTeam("Összes csapat");
                    setSelectedPeriod("Utolsó 30 nap");
                    setSelectedCompetition("NB I");
                    setCurrentPage(1);
                  }}
                  className="w-full bg-gradient-to-r from-zinc-800/60 to-zinc-700/60 hover:from-zinc-700/60 hover:to-zinc-600/60 border border-white/10 rounded-2xl px-6 py-4 transition-all duration-300 font-medium hover:shadow-lg"
                >
                  Szűrők törlése
                </button>
                <button className="w-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 hover:from-violet-600/30 hover:to-purple-600/30 border border-violet-500/20 rounded-2xl px-6 py-4 transition-all duration-300 font-medium hover:shadow-lg text-violet-300">
                  Mentés
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            const isPositive = stat.trend === "up";
            return (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-black/30 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <CircularProgress
                        percentage={stat.progress}
                        size={64}
                        strokeWidth={6}
                        gradient={stat.gradient}
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
                      {stat.title}
                    </h3>
                    <div className="flex items-end justify-between mb-3">
                      <span className="text-4xl font-bold bg-gradient-to-br from-white to-zinc-200 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                      <div
                        className={`flex items-center gap-1 ${
                          isPositive ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {isPositive ? (
                          <ArrowUp size={16} />
                        ) : (
                          <ArrowDown size={16} />
                        )}
                        <span className="text-sm font-bold">{stat.change}</span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 mb-3">
                      {stat.description}
                    </p>
                    <p className="text-xs text-zinc-500 font-medium">
                      {stat.subValue}
                    </p>
                    <div className="relative mt-4">
                      <div className="w-full bg-zinc-800/50 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${stat.gradient} relative`}
                          style={{ width: `${stat.progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                        </div>
                      </div>
                      <div
                        className={`absolute top-0 h-2.5 rounded-full bg-gradient-to-r ${stat.gradient} opacity-30 blur-sm transition-all duration-1000 ease-out`}
                        style={{ width: `${stat.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl blur-3xl" />
          <div className="relative bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-black/30 px-8 py-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-violet-500/20">
                    <Activity size={24} className="text-violet-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      Legfrissebb eredmények
                    </h2>
                    <p className="text-zinc-400 text-sm">
                      Részletes meccs információk és xG adatok
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span>Élő</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black/20">
                  <tr>
                    <th className="text-left px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      Meccs info
                    </th>
                    <th className="text-left px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      Hazai
                    </th>
                    <th className="text-center px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      Eredmény
                    </th>
                    <th className="text-right px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      Vendég
                    </th>
                    <th className="text-center px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      xG
                    </th>
                    <th className="text-center px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      BTTS
                    </th>
                    <th className="text-center px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      Gólok
                    </th>
                    <th className="text-center px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      Kimenetel
                    </th>
                    <th className="text-center px-8 py-6 text-sm font-bold text-zinc-300 uppercase tracking-wide">
                      Nézők
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentMatches.length > 0 ? (
                    currentMatches.map((match) => (
                      <tr
                        key={match.id}
                        className="border-b border-white/5 hover:bg-white/5 transition-all duration-300 group"
                      >
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <div className="text-sm font-bold text-white mb-1">
                              {new Date(match.date).toLocaleDateString(
                                "hu-HU",
                                { month: "short", day: "numeric" }
                              )}
                            </div>
                            <div className="text-xs text-zinc-400">
                              {match.time}
                            </div>
                            <div className="text-xs text-violet-400 font-medium">
                              {match.round}
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded-md font-semibold mt-1 inline-block ${
                                match.status === "FT"
                                  ? "bg-green-500/10 text-green-400"
                                  : "bg-red-500/10 text-red-400"
                              }`}
                            >
                              {match.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
                            {match.homeTeam}
                          </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <div className="flex items-center justify-center gap-4">
                            <span className="text-3xl font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
                              {match.homeScore}
                            </span>
                            <div className="flex flex-col items-center">
                              <span className="text-zinc-500 font-bold text-lg">
                                -
                              </span>
                              <div className="text-xs text-zinc-400 bg-black/20 px-2 py-1 rounded">
                                FT
                              </div>
                            </div>
                            <span className="text-3xl font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
                              {match.awayScore}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="font-bold text-white group-hover:text-violet-300 transition-colors duration-200">
                            {match.awayTeam}
                          </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <div className="flex items-center justify-center gap-2 text-sm">
                            <span className="text-zinc-300 font-bold">
                              {match.xG.home}
                            </span>
                            <span className="text-zinc-500">-</span>
                            <span className="text-zinc-300 font-bold">
                              {match.xG.away}
                            </span>
                          </div>
                          <div className="text-xs text-zinc-400 mt-1">
                            Expected Goals
                          </div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span
                            className={`px-3 py-2 rounded-xl text-sm font-bold border ${
                              match.btts === "igen"
                                ? "bg-emerald-400/10 text-emerald-400 border-emerald-400/20"
                                : "bg-red-400/10 text-red-400 border-red-400/20"
                            }`}
                          >
                            {match.btts}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <div className="text-2xl font-bold text-white">
                            {match.totalGoals}
                          </div>
                          <div className="text-xs text-zinc-400">összesen</div>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span
                            className={`px-4 py-2 rounded-xl text-sm font-bold border ${getResultBg(
                              match.result
                            )} ${getResultColor(match.result)}`}
                          >
                            {match.result}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <div className="text-sm font-bold text-white">
                            {match.attendance.toLocaleString()}
                          </div>
                          <div className="text-xs text-zinc-400">néző</div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
                        className="text-center py-12 text-zinc-400"
                      >
                        Nincs a szűrőfeltételeknek megfelelő eredmény.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="bg-black/20 px-8 py-6 flex items-center justify-between border-t border-white/10">
              <div className="flex items-center gap-4">
                <span className="text-sm text-zinc-400 font-medium">
                  {currentMatches.length} / {filteredMatches.length} eredmény
                </span>
              </div>
              <div className="flex items-center gap-3">
                <select
                  onChange={handleItemsPerPageChange}
                  value={itemsPerPage}
                  className="bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-sm"
                >
                  <option value="5">5 / oldal</option>
                  <option value="10">10 / oldal</option>
                  <option value="25">25 / oldal</option>
                </select>
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm bg-black/30 hover:bg-black/50 border border-white/10 rounded-xl transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Előző
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`px-3 py-2 text-sm rounded-xl transition-all duration-200 ${
                          currentPage === page
                            ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold shadow-lg"
                            : "bg-black/20 hover:bg-black/40 border border-white/10 cursor-pointer"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm bg-black/30 hover:bg-black/50 border border-white/10 rounded-xl transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Következő
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                <TrendingUp size={20} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Top Scorer</h3>
                <p className="text-sm text-zinc-400">Góllövőlista éllovas</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Martin Ádám</div>
              <div className="text-zinc-400 mb-4">Újpest FC</div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">14</div>
              <div className="text-sm text-zinc-400">gól ebben a szezonban</div>
            </div>
          </div>
          <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-violet-500/20">
                <Trophy size={20} className="text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Liga Éllovas</h3>
                <p className="text-sm text-zinc-400">NB I tabella</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Ferencváros TC</div>
              <div className="text-zinc-400 mb-4">26 meccset követően</div>
              <div className="text-4xl font-bold text-violet-400 mb-2">61</div>
              <div className="text-sm text-zinc-400">pont (18-7-1)</div>
            </div>
          </div>
          <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center border border-amber-500/20">
                <Flame size={20} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Hot Streak</h3>
                <p className="text-sm text-zinc-400">Legjobb forma</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Puskás Akadémia</div>
              <div className="text-zinc-400 mb-4">Győzelmi sorozat</div>
              <div className="text-4xl font-bold text-amber-400 mb-2">7</div>
              <div className="text-sm text-zinc-400">
                egymást követő győzelem
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-violet-500/3 via-purple-500/3 to-indigo-500/3 rounded-full blur-3xl" />
        <div className="absolute top-20 left-20 w-3 h-3 bg-violet-400/20 rounded-full blur-sm animate-ping" />
        <div
          className="absolute top-40 right-32 w-2 h-2 bg-purple-400/25 rounded-full blur-sm animate-ping"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/3 w-2 h-2 bg-indigo-400/20 rounded-full blur-sm animate-ping"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-60 right-1/4 w-3 h-3 bg-emerald-400/15 rounded-full blur-sm animate-ping"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-60 right-20 w-2 h-2 bg-amber-400/20 rounded-full blur-sm animate-ping"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/10 to-transparent animate-pulse" />
        <div
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-xl mt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <div>
                  <div className="text-lg font-bold">WinMix Pro</div>
                  <div className="text-xs text-zinc-400">
                    Magyar Futball Elemző
                  </div>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Professzionális futball statisztikák és elemzések a magyar
                labdarúgás világából.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-300 mb-4 uppercase tracking-wide">
                Szolgáltatások
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Élő statisztikák
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Csapat elemzések
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Predikciók
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API hozzáférés
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-300 mb-4 uppercase tracking-wide">
                Versenyek
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    NB I
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    NB II
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Magyar Kupa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Európai kupák
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-300 mb-4 uppercase tracking-wide">
                Kapcsolat
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Támogatás
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API dokumentáció
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partnerség
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Jogi információk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 mt-12 pt-8 flex items-center justify-between">
            <div className="text-sm text-zinc-400">
              © 2024 WinMix Pro. Minden jog fenntartva.
            </div>
            <div className="text-xs text-zinc-500">
              Utoljára frissítve: {formatTime(currentTime)}
            </div>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.2); border-radius: 4px; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #8b5cf6, #a855f7); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #7c3aed, #9333ea); }
      `}</style>
    </div>
  );
}
