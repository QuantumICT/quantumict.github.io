import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/i18n";

const navItems = [
  { name: { zh: "首页", en: "Home" }, path: "/" },
  { name: { zh: "研究方向", en: "Research" }, path: "/research" },
  { name: { zh: "学术论文", en: "Publications" }, path: "/papers" },
  { name: { zh: "乾坤网络", en: "QiankunNet" }, path: "/qiankunnet" },
  { name: { zh: "团队成员", en: "Team" }, path: "/team" },
  { name: { zh: "新闻动态", en: "News" }, path: "/news" },
  { name: { zh: "联系我们", en: "Contact" }, path: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "zh" ? "en" : "zh");
  };

  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img
              src={`${import.meta.env.BASE_URL}ustc-logo-white.svg`}
              alt="USTC logo"
              className="h-9 w-9 lg:h-10 lg:w-10 flex-shrink-0"
            />
            <span className="text-base lg:text-lg font-bold text-white leading-tight">
              {lang === "zh"
                ? "中国科学技术大学 商红慧课题组"
                : "USTC · Shang Honghui Group"}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                    location.pathname === item.path
                      ? "bg-secondary text-white"
                      : "text-white hover:bg-secondary/80"
                  }`}
                >
                  {item.name[lang]}
                </Link>
              ))}
            </nav>

            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLang}
              className="hidden md:inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded border border-white/40 text-white hover:bg-white/10 transition-colors"
              aria-label="Switch language"
            >
              {lang === "zh" ? "English" : "中文"}
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-white hover:bg-secondary/80"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              type="button"
              onClick={() => {
                toggleLang();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary/80"
            >
              {lang === "zh" ? "English" : "中文"}
            </button>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? "bg-secondary text-white"
                    : "text-white hover:bg-secondary/80"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name[lang]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
