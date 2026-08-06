import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n";

export function Footer() {
  const { lang } = useLanguage();

  const groupName =
    lang === "zh" ? "中国科学技术大学 商红慧课题组" : "USTC · Shang Honghui Group";
  const quickLinks = lang === "zh" ? "快速链接" : "Quick Links";
  const contact = lang === "zh" ? "联系方式" : "Contact";
  const email = lang === "zh" ? "邮箱" : "Email";
  const phone = lang === "zh" ? "电话" : "Phone";
  const address = lang === "zh" ? "地址" : "Address";

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{groupName}</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {lang === "zh"
                ? "专注于量子算法、人工智能与高性能计算的前沿研究"
                : "Frontier research in quantum algorithms, artificial intelligence, and high-performance computing"}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/research" className="text-white/80 hover:text-white">
                  {lang === "zh" ? "研究方向" : "Research"}
                </Link>
              </li>
              <li>
                <Link to="/papers" className="text-white/80 hover:text-white">
                  {lang === "zh" ? "学术论文" : "Publications"}
                </Link>
              </li>
              <li>
                <Link to="/qiankunnet" className="text-white/80 hover:text-white">
                  {lang === "zh" ? "乾坤网络" : "QiankunNet"}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/80 hover:text-white">
                  {lang === "zh" ? "团队成员" : "Team"}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/80 hover:text-white">
                  {lang === "zh" ? "新闻动态" : "News"}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white">
                  {lang === "zh" ? "联系我们" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{contact}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                {email}：shh@ustc.edu.cn
              </li>
              <li>
                {phone}：+86-0551-63607374
              </li>
              <li>
                {address}：
                {lang === "zh"
                  ? "中国科学技术大学合肥微尺度物质科学国家研究中心"
                  : "Hefei National Research Center for Physical Sciences at the Microscale, USTC"}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/60">
          <p>
            &copy; 2026 {groupName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
