import { PageMeta } from "@/components/common/PageMeta";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/i18n";

type BiText = { zh: string; en: string };

const researchDirections: { title: BiText; description: BiText }[] = [
  {
    title: {
      zh: "量子化学量子算法",
      en: "Quantum Algorithms for Quantum Chemistry",
    },
    description: {
      zh: "开发实用的量子计算仿真与多尺度量子算法，用于分子模拟",
      en: "Developing practical quantum computing emulations and multiscale quantum algorithms for molecular simulations",
    },
  },
  {
    title: {
      zh: "人工智能驱动的量子化学方法",
      en: "AI-Driven Quantum Chemistry Methods",
    },
    description: {
      zh: "基于 Transformer 架构构建神经网络量子态方法（如乾坤网络 QiankunNet）",
      en: "Building neural network quantum state methods based on Transformer architectures (e.g., QiankunNet)",
    },
  },
  {
    title: {
      zh: "E级第一性原理模拟",
      en: "Exascale First-Principles Simulations",
    },
    description: {
      zh: "在国产E级超算上实现千万核可扩展的全电子全势密度泛函理论计算",
      en: "Achieving ten-million-core scalable all-electron full-potential DFT calculations on domestic exascale supercomputers",
    },
  },
  {
    title: {
      zh: "大规模拉曼光谱模拟",
      en: "Large-Scale Raman Spectroscopy Simulations",
    },
    description: {
      zh: "将量子力学拉曼光谱模拟推进到十亿原子级别的生物体系",
      en: "Advancing quantum-mechanical Raman spectrum simulations to biological systems with a billion atoms",
    },
  },
  {
    title: {
      zh: "高性能计算框架",
      en: "High-Performance Computing Frameworks",
    },
    description: {
      zh: "开发面向量子化学应用的跨平台异构并行计算框架（CPU/GPU/SW）",
      en: "Developing cross-platform heterogeneous parallel computing frameworks for quantum chemistry (CPU/GPU/SW)",
    },
  },
];

const latestNews: { title: BiText; date: string; summary: BiText; link: string }[] = [
  {
    title: {
      zh: "【中安在线】中国科大创建乾坤网络精确求解多电子薛定谔方程",
      en: "[Anhui Online] USTC creates QiankunNet to accurately solve the many-electron Schrödinger equation",
    },
    date: "2025-10-12",
    summary: {
      zh: "安徽省科学技术厅报道，中国科大商红慧特任教授与杨金龙院士团队创建乾坤网络...",
      en: "Reported by the Department of Science and Technology of Anhui Province: the team of Prof. Honghui Shang and Academician Jinlong Yang at USTC created QiankunNet...",
    },
    link: "https://www.cas.cn/cm/202501/t20250102_5044005.shtml",
  },
  {
    title: {
      zh: "Nature Communications | 商红慧团队创建乾坤网络精确求解多电子薛定谔方程",
      en: "Nature Communications | Shang Honghui team creates QiankunNet to accurately solve the many-electron Schrödinger equation",
    },
    date: "2025-10-10",
    summary: {
      zh: "商红慧特任教授与杨金龙院士团队在Nature Communications发表论文...",
      en: "Prof. Honghui Shang and Academician Jinlong Yang's team published a paper in Nature Communications...",
    },
    link: "https://93.ustc.edu.cn/2025/1010/c9299a704020/pagem.htm",
  },
  {
    title: {
      zh: "【中国科学报】新研究实现亿原子级拉曼光谱量子力学模拟",
      en: "[China Science Daily] New research achieves billion-atom quantum-mechanical Raman spectrum simulations",
    },
    date: "2025-01-02",
    summary: {
      zh: "中科院院网报道，课题组新研究实现亿原子级拉曼光谱量子力学模拟...",
      en: "Reported on the CAS website: the group's new research achieves billion-atom quantum-mechanical Raman spectrum simulations...",
    },
    link: "https://www.cas.cn/cm/202501/t20250102_5044005.shtml",
  },
];

const selectedPapers = [
  {
    title:
      "Solving the many-electron Schrödinger equation with a transformer-based framework",
    journal: "Nature Communications, 16(1):8464",
    year: "2025",
    link: "https://www.nature.com/articles/s41467-025-63219-2",
  },
  {
    title:
      "NNQS-SCI: Tackling Trillion-Dimensional Hilbert Space with Adaptive Neural Network Quantum States",
    journal: "In Proceedings of SC '25. ACM",
    year: "2025",
    link: "https://dl.acm.org/doi/10.1145/3712285.3759800",
  },
  {
    title:
      "Pushing the Limit of Quantum Mechanical Simulation to the Raman Spectra of a Biological System with 100 Million Atoms",
    journal: "In Proceedings of SC '24. IEEE Press",
    year: "2024",
    link: "https://doi.org/10.1109/SC41406.2024.00011",
  },
];

export default function Home() {
  const { lang } = useLanguage();
  const s = (obj: BiText): string => obj[lang];

  return (
    <>
      <PageMeta
        title={
          lang === "zh"
            ? "中国科学技术大学 商红慧课题组 - 量子算法与高性能计算研究"
            : "USTC · Shang Honghui Group - Quantum Algorithms & High-Performance Computing"
        }
        description={
          lang === "zh"
            ? "中国科学技术大学商红慧课题组专注于量子算法、人工智能与高性能计算的前沿研究，发展第一性原理高精度算法和程序"
            : "The Shang Honghui Group at USTC focuses on frontier research in quantum algorithms, AI, and high-performance computing, developing high-accuracy first-principles algorithms and programs."
        }
        keywords={
          lang === "zh"
            ? ["量子算法", "人工智能", "高性能计算", "第一性原理", "电子结构"]
            : ["quantum algorithms", "AI", "high-performance computing", "first-principles", "electronic structure"]
        }
      />

      {/* Hero Banner */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <img
            src={`${import.meta.env.BASE_URL}hero-quantum-background.jpg`}
            alt="Quantum background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {lang === "zh" ? "商红慧课题组" : "Shang Honghui Group"}
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            {lang === "zh"
              ? "量子算法 、人工智能与高性能计算"
              : "Quantum Algorithms, AI & High-Performance Computing"}
          </p>
          <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto opacity-80">
            Quantum Algorithms 、 Artificial Intelligence & High-Performance
            Computing
          </p>
          <Link
            to="/research"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded hover:bg-secondary/90 transition-colors"
          >
            {lang === "zh" ? "了解研究方向" : "Explore Research"}
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Research Directions */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">
            {lang === "zh" ? "研究课题" : "Research Directions"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchDirections.map((direction, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded p-6 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {s(direction.title)}
                </h3>
                <p className="text-gray-600 text-sm">{s(direction.description)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/research"
              className="inline-flex items-center text-secondary font-medium hover:underline"
            >
              {lang === "zh" ? "查看全部研究方向" : "View All Research Directions"}
              <FaArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Papers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">
            {lang === "zh" ? "精选论文" : "Selected Publications"}
          </h2>
          <div className="space-y-4">
            {selectedPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded p-5 hover:bg-gray-100 transition-colors"
              >
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title block"
                >
                  <h3 className="text-base font-semibold text-ink mb-2 group-hover/title:text-secondary group-hover/title:underline transition-colors">
                    {paper.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-secondary font-medium">
                      {paper.journal}
                    </span>
                    <span className="text-gray-500">{paper.year}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/papers"
              className="inline-flex items-center text-secondary font-medium hover:underline"
            >
              {lang === "zh" ? "查看更多论文" : "View More Publications"}
              <FaArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink mb-8 text-center">
            {lang === "zh" ? "新闻动态" : "Latest News"}
          </h2>
          <div className="space-y-4">
            {latestNews.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded p-5 hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-1">
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink hover:text-secondary transition-colors"
                      >
                        {s(news.title)}
                      </a>
                    </h3>
                    <p className="text-gray-600 text-sm">{s(news.summary)}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:ml-6">
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/news"
              className="inline-flex items-center text-secondary font-medium hover:underline"
            >
              {lang === "zh" ? "查看全部动态" : "View All News"}
              <FaArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 md:w-3/5">
              <img
                src={`${import.meta.env.BASE_URL}images/group-seats.jpg`}
                alt="Group"
                className="rounded w-full max-w-2xl mx-auto shadow-md"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-ink mb-4">
                {lang === "zh" ? "团队简介" : "About the Group"}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {lang === "zh"
                  ? "商红慧教授带领的课题组致力于量子算法、人工智能与高性能计算的交叉研究。团队拥有多名研究员、博士后和研究生，在国内外顶级期刊发表多篇高水平论文。"
                  : "Led by Prof. Honghui Shang, the group conducts interdisciplinary research in quantum algorithms, artificial intelligence, and high-performance computing. The team includes researchers, postdocs, and graduate students, and has published numerous high-quality papers in top journals."}
              </p>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-gray-600">
                    {lang === "zh" ? "团队成员" : "Team Members"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40+</div>
                  <div className="text-xs text-gray-600">
                    {lang === "zh" ? "发表论文" : "Publications"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-gray-600">
                    {lang === "zh" ? "科研项目" : "Research Projects"}
                  </div>
                </div>
              </div>
              <Link
                to="/team"
                className="inline-flex items-center px-5 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-colors"
              >
                {lang === "zh" ? "查看完整团队" : "View Full Team"}
                <FaArrowRight className="ml-2" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {lang === "zh" ? "加入我们" : "Join Us"}
          </h2>
          <p className="text-base mb-6 max-w-2xl mx-auto opacity-90">
            {lang === "zh"
              ? "欢迎对量子计算、人工智能和高性能计算感兴趣的同学加入我们的课题组"
              : "Students interested in quantum computing, artificial intelligence, and high-performance computing are welcome to join our group"}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded hover:bg-secondary/90 transition-colors"
          >
            {lang === "zh" ? "查看详情" : "Learn More"}
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
