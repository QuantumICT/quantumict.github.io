import { useState } from "react";
import { PageMeta } from "@/components/common/PageMeta";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/i18n";

type BiText = { zh: string; en: string };

const professor = {
  name: { zh: "商红慧", en: "Honghui Shang" },
  title: { zh: "中国科学技术大学  特任教授", en: "Professor, University of Science and Technology of China" },
  photo:
    "https://material-image.wanwang.xin/1863084887190987/public/6be8440e-260f-480d-98e5-2f9825512f8f.jpg",
  bio: {
    zh: "商红慧，中国科学技术大学特任教授。主要研究兴趣包括结合量子算法、人工智能与高性能计算，发展第一性原理高精度算法和程序，并应用程序进行电子结构的理论模拟，在原子尺度上揭示物质的物理性质和演化行为，发表论文40余篇。同时也包含高性能并行算法设计与优化；智能超算（HPC+AI）；科学计算方法等等。带领团队在国产E级超算上成功实现了千万核可扩展的全电子全势第一性原理计算模拟，入围2021年度戈登•贝尔奖。主持国家自然科学基金委员会优秀青年基金项目。",
    en: "Honghui Shang is a professor at the University of Science and Technology of China (USTC). Her research interests include combining quantum algorithms, artificial intelligence, and high-performance computing to develop high-accuracy first-principles algorithms and programs, and applying them to theoretical simulations of electronic structure, revealing the physical properties and evolution of matter at the atomic scale. She has published more than 40 papers. Her work also covers high-performance parallel algorithm design and optimization, intelligent supercomputing (HPC+AI), and scientific computing methods. She led the team to successfully achieve ten-million-core scalable all-electron full-potential first-principles calculations on domestic exascale supercomputers and was a finalist for the 2021 Gordon Bell Prize. She leads a National Natural Science Foundation of China (NSFC) Excellent Young Scientists Fund project.",
  },
  researchInterests: {
    zh: [
      "量子算法与量子计算",
      "人工智能与高性能计算",
      "第一性原理方法",
      "电子结构理论",
      "高性能并行算法",
      "智能超算（HPC+AI）",
    ],
    en: [
      "Quantum algorithms and quantum computing",
      "AI and high-performance computing",
      "First-principles methods",
      "Electronic structure theory",
      "High-performance parallel algorithms",
      "Intelligent supercomputing (HPC+AI)",
    ],
  },
  achievements: {
    zh: [
      "2002 - 2006  中国科学技术大学，近代物理系，学士",
      "2006 - 2011  中国科学技术大学，物理化学，博士",
      "2011 - 2018  德国马普学会弗里茨-哈伯研究所，理论系，博士后",
      "2018 - 2023  中国科学院计算技术研究所，副研究员",
      "2023 - 至今  中国科学技术大学，合肥微尺度物质科学国家研究中心，特任教授",
    ],
    en: [
      "2002 - 2006  B.S., Department of Modern Physics, USTC",
      "2006 - 2011  Ph.D., Physical Chemistry, USTC",
      "2011 - 2018  Postdoc, Theory Department, Fritz Haber Institute of the Max Planck Society, Germany",
      "2018 - 2023  Associate Professor, Institute of Computing Technology, Chinese Academy of Sciences",
      "2023 - present  Professor, Hefei National Research Center for Physical Sciences at the Microscale, USTC",
    ],
  },
  email: "shh@ustc.edu.cn",
  homepage: "https://shanghui.github.io/",
};

type Publication = { year: string; title: string; venue: string; link?: string; contribution?: string };

type Member = {
  name: BiText;
  role: BiText;
  photo: string;
  joinYear: number;
  researchDirection?: BiText;
  email?: string;
  bio?: BiText;
  publications?: Publication[];
};

const teamMembers: Member[] = [
  {
    name: { zh: "Muhammad Naeem Tahir（邰希尔）", en: "Muhammad Naeem Tahir" },
    role: { zh: "特任副研究员", en: "Research Associate" },
    photo: `${import.meta.env.BASE_URL}images/team/tahir.jpg`,
    joinYear: 2025,
    email: "tahir@ustc.edu.cn",
    researchDirection: {
      zh: "密度泛函理论（DFT）；随机相位近似（RPA）及超越DFT方法；能量与力",
      en: "Density Functional Theory; Random Phase Approximation and related approaches; energies and forces",
    },
    bio: {
      zh: "中国科学技术大学特任副研究员。研究高精度、高效的第一性原理电子结构方法及其在FHI-aims中的实现，专长DFT、随机相位近似（RPA）等超越DFT方法，用于分子与凝聚态体系的能量与力计算，持续发展解析梯度等高效算法。",
      en: "Research Associate at USTC developing accurate and efficient first-principles electronic structure methods in the FHI-aims code, specializing in DFT, Random Phase Approximation (RPA) and beyond-DFT approaches, including analytical gradients for large-scale simulations.",
    },
    publications: [
      { year: "2026", title: "Roadmap on Advancements of the FHI-aims Software Package", venue: "Electronic Structure", link: "http://iopscience.iop.org/article/10.1088/2516-1075/ae8067" },
      { year: "2025", title: "Analytical Gradients of Random-Phase Approximation Plus Corrections from Renormalized Single Excitations", venue: "J. Chem. Theory Comput.", link: "https://doi.org/10.1021/acs.jctc.5c01053" },
      { year: "2024", title: "Understanding the Unique Selectivity of Cobalt Phthalocyanine in Multielectron Reduction of Carbon Dioxide", venue: "ACS Catalysis", link: "https://doi.org/10.1021/acscatal.4c05744" },
    ],
  },
  {
    name: { zh: "万诗天（Webber Wan）", en: "Webber Wan" },
    role: { zh: "硕士生", en: "Master's Student" },
    photo: `${import.meta.env.BASE_URL}images/team/wanshitian.png`,
    joinYear: 2024,
    email: "wst18824108590@mail.ustc.edu.cn",
    researchDirection: {
      zh: "密度泛函理论；密度泛函微扰理论；第一性原理计算；机器学习材料性质计算",
      en: "Density Functional Theory; Density Functional Perturbation Theory; first-principles calculations; machine-learning property prediction",
    },
    bio: {
      zh: "物理方向硕士研究生，研究第一性原理方法及其在凝聚态体系中的应用，主要使用DFT与DFPT进行电子结构、晶格动力学和介电性质计算，并结合机器学习进行性质预测与高通量筛选。",
      en: "Master's student in physics working on first-principles methods for condensed matter, using DFT and DFPT for electronic structure, lattice dynamics and dielectric properties, combined with machine learning for property prediction.",
    },
  },
  {
    name: { zh: "吴昊（Hao Wu）", en: "Hao Wu" },
    role: { zh: "直博生", en: "Direct Ph.D. Student" },
    photo: `${import.meta.env.BASE_URL}images/team/wuhao.jpg`,
    joinYear: 2025,
    email: "wh2004@mail.ustc.edu.cn",
    researchDirection: {
      zh: "强关联电子结构；辅助场量子蒙特卡洛；神经网络量子态",
      en: "Strongly correlated electronic structure; neural-network quantum states; auxiliary-field quantum Monte Carlo",
    },
    bio: {
      zh: "从事强关联电子体系的从头算方法研究，聚焦神经网络量子态（NNQS）与辅助场量子蒙特卡洛（AFQMC）相结合的电子结构方法，关注多体试探波函数对投影精度的调控机制及其在过渡金属与f区体系中的应用。",
      en: "Ph.D. student researching ab initio methods for strongly correlated electron systems, combining neural-network quantum states (NNQS) with auxiliary-field quantum Monte Carlo (AFQMC), and studying many-body trial wavefunctions.",
    },
  },
  {
    name: { zh: "周雨濛（Yumeng Zhou）", en: "Yumeng Zhou" },
    role: { zh: "博士生", en: "Ph.D. Student" },
    photo: `${import.meta.env.BASE_URL}images/team/zhouyumeng.jpg`,
    joinYear: 2024,
    email: "zymm@mail.ustc.edu.cn",
    researchDirection: {
      zh: "神经网络量子态；高性能计算",
      en: "Neural-network quantum states; high-performance computing",
    },
    bio: {
      zh: "主要从事神经网络量子态与高性能计算研究，关注深度学习与大规模并行计算在量子多体问题中的应用，聚焦量子线路经典模拟、量子态采样及并行加速，结合神经网络量子态开展重要组态的识别与重构。",
      en: "Working on neural-network quantum states and high-performance computing, focusing on classical simulation of quantum circuits, quantum state sampling and parallel acceleration for large-scale quantum many-body simulation.",
    },
  },
  {
    name: { zh: "夏卓昭（Zhuozhao Xia）", en: "Zhuozhao Xia" },
    role: { zh: "硕士生", en: "Master's Student" },
    photo: `${import.meta.env.BASE_URL}images/team/xiazhuozhao.jpg`,
    joinYear: 2023,
    email: "zhuozhao@ustc.edu",
    researchDirection: {
      zh: "高性能计算；体系结构优化",
      en: "High-performance computing; architecture optimization",
    },
    bio: {
      zh: "聚焦多个算例在各类先进体系结构下的部署与优化，通过计算优化与科学方法提高运算算例的运行效率，更好地发挥先进体系结构的性能潜力。",
      en: "Focused on deploying and optimizing scientific applications on advanced computer architectures, improving operational efficiency and making the best use of modern hardware.",
    },
  },
  {
    name: { zh: "谢岱佑（Daiyou Xie）", en: "Daiyou Xie" },
    role: { zh: "博士生", en: "Ph.D. Student" },
    photo: `${import.meta.env.BASE_URL}images/team/xiedaiyou.jpg`,
    joinYear: 2021,
    email: "Xdy662266@mail.ustc.edu.cn",
    researchDirection: {
      zh: "量子计算；神经网络量子态；第一性原理计算",
      en: "Quantum computing; neural-network quantum states; first-principles calculations",
    },
    bio: {
      zh: "本科就读于中国科学技术大学计算数学专业，现攻读化学系博士学位。研究方向为第一性原理计算、神经网络量子态方法与量子计算，擅长数据的整理与分析和大规模计算。",
      en: "Currently a Ph.D. student in Chemistry at USTC (B.S. in computational mathematics). Research interests include first-principles calculations, neural-network quantum states and quantum computing, with expertise in data analysis and large-scale computing.",
    },
    publications: [
      { year: "2024", title: "Solving the electronic Schrödinger equation by pairing tensor-network state with neural network quantum state", venue: "Mathematics", link: "https://www.mdpi.com/2227-7390/12/3/433" },
      { year: "2025", title: "High-throughput computation of ab initio Raman spectra for two-dimensional materials", venue: "Scientific Data", link: "https://www.nature.com/articles/s41597-025-05141-0" },
      { year: "2025", title: "NNQS-SCI: Tackling Trillion-Dimensional Hilbert Space with Adaptive Neural Network Quantum States", venue: "SC'25" },
    ],
  },
  {
    name: { zh: "阚博文（Bowen Kan）", en: "Bowen Kan" },
    role: { zh: "博士生", en: "Ph.D. Student" },
    photo: `${import.meta.env.BASE_URL}images/team/kanbowen.png`,
    joinYear: 2023,
    researchDirection: {
      zh: "高性能计算；AI4Science；计算机体系结构",
      en: "High-performance computing; AI for Science; computer architecture",
    },
    bio: {
      zh: "博士生，聚焦高性能计算、AI4Science与计算机体系结构，开展基于大模型的大规模并行二次量子化等研究。",
      en: "Ph.D. student focusing on high-performance computing, AI for Science and computer architecture, working on large-scale parallel second quantization.",
    },
    publications: [
      { year: "2025", title: "Bridging the Gap between Transformer-Based Neural Networks and Tensor Networks for Quantum Chemistry", venue: "JCTC", link: "https://doi.org/10.1021/acs.jctc.4c01703" },
      { year: "2025", title: "NNQS-SCI: Tackling Trillion-Dimensional Hilbert Space with Adaptive Neural Network Quantum States", venue: "SC'25", link: "https://doi.org/10.1145/3712285.3759800" },
      { year: "2025", title: "Accelerating Many-Body Quantum Chemistry via Generative Transformer-Enhanced Configuration Interaction", venue: "JCTC", link: "https://doi.org/10.1021/acs.jctc.5c01429" },
      { year: "2026", title: "A Fully GPU-Accelerated Framework for High-Performance Configuration Interaction Selection with Neural Network Quantum States", venue: "HPDC'26", link: "https://doi.org/10.1145/3806645.3807583" },
    ],
  },
  {
    name: { zh: "赵博文（Bowen Zhao）", en: "Bowen Zhao" },
    role: { zh: "博士生", en: "Ph.D. Student" },
    photo: `${import.meta.env.BASE_URL}images/team/zhaobowen.png`,
    joinYear: 2023,
    email: "bowenzhao@mail.ustc.edu.cn",
    researchDirection: {
      zh: "第一性原理计算；HFX应力张量；拉曼光谱计算",
      en: "First-principles calculations; HFX stress tensor; Raman spectrum calculations",
    },
    bio: {
      zh: "中国科学技术大学物理学专业博士研究生。参与过QiankunNet与AFQMC结合、谐性与非谐性拉曼光谱、Fröhlich极化子、RPA力场拟合、HFX应力张量等课题，探索AI辅助下的第一性原理计算。",
      en: "Ph.D. student in physics at USTC. Involved in combining QiankunNet with AFQMC, harmonic and anharmonic Raman spectra, Fröhlich polarons, RPA force-field fitting and HFX stress tensors.",
    },
    publications: [
      { year: "2025", title: "NNQS-AFQMC: Neural Network Quantum States Enhanced Fermionic Quantum Monte Carlo", venue: "J. Chem. Theory Comput.", link: "https://doi.org/10.1021/acs.jctc.5c01138" },
      { year: "2025", title: "Polaron superlattices in n-doped conjugated polymers", venue: "Nature Nanotechnology", link: "https://doi.org/10.1038/s41565-025-02019-7" },
    ],
  },
  {
    name: { zh: "路爱同（Aitong Lu）", en: "Aitong Lu" },
    role: { zh: "博士生", en: "Ph.D. Student" },
    photo: `${import.meta.env.BASE_URL}images/team/luaitong.jpg`,
    joinYear: 2026,
    email: "luaitong@mail.ustc.edu.cn",
    researchDirection: {
      zh: "量子机器学习",
      en: "Quantum machine learning",
    },
    bio: {
      zh: "博士研究生，研究方向为量子机器学习与人工智能辅助量子计算，探索基于神经网络量子态、Transformer及量子采样的多体波函数表示与优化方法，求解复杂电子结构问题。",
      en: "Ph.D. student researching quantum machine learning and AI-assisted quantum computing, exploring neural-network representations and optimization of many-body wavefunctions for complex electronic structure problems.",
    },
  },
  {
    name: { zh: "黄子恒（Ziheng Huang）", en: "Ziheng Huang" },
    role: { zh: "硕士生", en: "Master's Student" },
    photo: `${import.meta.env.BASE_URL}images/team/huangziheng.jpg`,
    joinYear: 2025,
  },
];

export default function Team() {
  const { lang } = useLanguage();
  const s = (obj: BiText): string => obj[lang];
  const [active, setActive] = useState<Member | null>(null);
  const close = () => setActive(null);

  return (
    <>
      <PageMeta
        title={
          lang === "zh"
            ? "团队成员 - 中国科学技术大学 商红慧课题组"
            : "Team - USTC · Shang Honghui Group"
        }
        description={
          lang === "zh"
            ? "中国科学技术大学商红慧课题组成员介绍，包括导师和研究人员"
            : "Members of the Shang Honghui Group at USTC, including the advisor and researchers"
        }
        keywords={
          lang === "zh"
            ? ["商红慧", "课题组成员", "研究团队"]
            : ["Honghui Shang", "group members", "research team"]
        }
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-3">
            {lang === "zh" ? "团队成员" : "Team Members"}
          </h1>
          <p className="text-base opacity-90">
            {lang === "zh" ? "汇聚优秀人才，共同探索科学前沿" : "Bringing together outstanding talents to explore scientific frontiers"}
          </p>
        </div>
      </section>

      {/* Professor Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink mb-6">
            {lang === "zh" ? "导师介绍" : "Advisor"}
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img src={professor.photo} alt={s(professor.name)} className="rounded w-full" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-ink mb-1">
                {s(professor.name)}
              </h3>
              <p className="text-primary font-semibold mb-4">
                {s(professor.title)}
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {s(professor.bio)}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-ink mb-2">
                  {lang === "zh" ? "研究方向" : "Research Interests"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {professor.researchInterests[lang].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-ink mb-2">
                  {lang === "zh" ? "教育与科研经历" : "Education & Career"}
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {professor.achievements[lang].map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-ink mb-2">
                  {lang === "zh" ? "联系方式" : "Contact"}
                </h4>
                <p className="text-gray-600 text-sm">
                  {lang === "zh" ? "邮箱" : "Email"}：{professor.email}
                </p>
                <p className="text-gray-600 text-sm">
                  {lang === "zh" ? "个人主页" : "Homepage"}：
                  <a
                    href={professor.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    {professor.homepage}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink mb-6">
            {lang === "zh" ? "团队成员" : "Group Members"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {[...teamMembers]
              .sort((a, b) => a.joinYear - b.joinYear)
              .map((member, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(member)}
                className="group bg-white rounded overflow-hidden text-left shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={member.photo}
                    alt={s(member.name)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-ink mb-0.5 truncate">
                    {s(member.name)}
                  </h3>
                  <p className="text-primary text-xs mb-1">
                    {s(member.role)}
                    {member.joinYear
                      ? ` · ${lang === "zh" ? `${member.joinYear} 年入组` : `Joined ${member.joinYear}`}`
                      : ""}
                  </p>
                  {member.researchDirection && (
                    <p className="text-gray-500 text-xs leading-snug line-clamp-2">
                      {s(member.researchDirection)}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-400">
            {lang === "zh"
              ? "点击成员卡片查看详细介绍"
              : "Click a member card for details"}
          </p>
        </div>
      </section>

      {/* Member Detail Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div
            className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label={lang === "zh" ? "关闭" : "Close"}
              className="absolute top-3 right-3 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FaTimes size={18} />
            </button>
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-64 shrink-0">
                <img
                  src={active.photo}
                  alt={s(active.name)}
                  className="w-full h-72 sm:h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold text-ink mb-1">{s(active.name)}</h3>
                <p className="text-primary font-medium mb-1">
                  {s(active.role)}
                  {active.joinYear
                    ? ` · ${lang === "zh" ? `${active.joinYear} 年入组` : `Joined ${active.joinYear}`}`
                    : ""}
                </p>
                {active.researchDirection && (
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    <span className="font-semibold text-ink">
                      {lang === "zh" ? "研究方向：" : "Research: "}
                    </span>
                    {s(active.researchDirection)}
                  </p>
                )}
                {active.bio && (
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {s(active.bio)}
                  </p>
                )}
                {active.email && (
                  <p className="text-gray-600 text-sm mb-3">
                    <span className="font-semibold text-ink">
                      {lang === "zh" ? "邮箱：" : "Email: "}
                    </span>
                    <a
                      href={`mailto:${active.email}`}
                      className="text-secondary hover:underline break-all"
                    >
                      {active.email}
                    </a>
                  </p>
                )}
                {active.publications && active.publications.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-ink mb-1">
                      {lang === "zh" ? "代表成果" : "Selected Publications"}
                    </p>
                    <ul className="space-y-1.5">
                      {active.publications.map((pub, pi) => (
                        <li key={pi} className="text-sm text-gray-600 leading-relaxed">
                          {pub.link ? (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-secondary hover:underline"
                            >
                              {pub.title}
                            </a>
                          ) : (
                            pub.title
                          )}
                          <span className="text-gray-400">
                            {" "}· {pub.venue} ({pub.year})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recruitment CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-ink mb-3">
            {lang === "zh" ? "加入我们" : "Join Us"}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {lang === "zh"
              ? "欢迎对量子计算、人工智能和高性能计算感兴趣的优秀学子加入我们的课题组"
              : "Excellent students interested in quantum computing, artificial intelligence, and high-performance computing are welcome to join our group"}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            {lang === "zh" ? "查看招生信息" : "View Recruitment"}
            <FaArrowRight className="ml-2" size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
