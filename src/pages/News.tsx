import { PageMeta } from "@/components/common/PageMeta";
import { useLanguage } from "@/i18n";

type BiText = { zh: string; en: string };

const defaultLink = "https://baike.baidu.com/item/%E5%95%86%E7%BA%A2%E6%85%A7";

const newsList: {
  id: number;
  title: BiText;
  date: string;
  category: BiText;
  summary: BiText;
  link: string;
}[] = [
  {
    id: 1,
    title: {
      zh: "【中安在线】中国科大创建乾坤网络精确求解多电子薛定谔方程",
      en: "[Anhui Online] USTC creates QiankunNet to accurately solve the many-electron Schrödinger equation",
    },
    date: "2025-10-12",
    category: { zh: "媒体报道", en: "Media Coverage" },
    summary: {
      zh: "安徽省科学技术厅报道，中国科学技术大学商红慧特任教授与杨金龙院士团队创建乾坤网络（QiankunNet），实现多电子薛定方程的精确求解。",
      en: "Reported by the Department of Science and Technology of Anhui Province: the team of Prof. Honghui Shang and Academician Jinlong Yang at USTC created QiankunNet, achieving accurate solutions of the many-electron Schrödinger equation.",
    },
    link: "https://kjt.ah.gov.cn/kjzx/ztzl/cxahjxs/mtkcx/123098261.html",
  },
  {
    id: 3,
    title: {
      zh: "Nature Communications | 商红慧特任教授、杨金龙院士团队创建乾坤网络精确求解多电子薛定谔方程",
      en: "Nature Communications | Prof. Honghui Shang and Academician Jinlong Yang's team create QiankunNet to accurately solve the many-electron Schrödinger equation",
    },
    date: "2025-10-10",
    category: { zh: "论文发表", en: "Publications" },
    summary: {
      zh: "商红慧特任教授与杨金龙院士团队在Nature Communications发表论文，提出基于Transformer架构的乾坤网络方法，实现多电子薛定谔方程的高精度求解。",
      en: "Prof. Honghui Shang and Academician Jinlong Yang's team published a paper in Nature Communications proposing the Transformer-based QiankunNet method for high-accuracy solutions of the many-electron Schrödinger equation.",
    },
    link: "https://93.ustc.edu.cn/2025/1010/c9299a704020/pagem.htm",
  },
  {
    id: 4,
    title: {
      zh: "【中国科学报】新研究实现亿原子级拉曼光谱量子力学模拟",
      en: "[China Science Daily] New research achieves billion-atom quantum-mechanical Raman spectrum simulations",
    },
    date: "2025-01-02",
    category: { zh: "媒体报道", en: "Media Coverage" },
    summary: {
      zh: "中科院院网报道，课题组新研究实现亿原子级拉曼光谱量子力学模拟，将量子力学模拟推进到前所未有的规模。",
      en: "Reported on the CAS website: the group's new research achieves billion-atom quantum-mechanical Raman spectrum simulations, advancing quantum mechanical simulations to an unprecedented scale.",
    },
    link: "https://www.cas.cn/cm/202501/t20250102_5044005.shtml",
  },
  {
    id: 5,
    title: {
      zh: "商红慧：乾坤网络(QiankunNet):生成式神经网络量子态方法及其在量子化学中的应用",
      en: "Honghui Shang: QiankunNet - generative neural network quantum state methods and their applications in quantum chemistry",
    },
    date: "2025-05-27",
    category: { zh: "学术报告", en: "Seminar" },
    summary: {
      zh: "商红慧教授介绍乾坤网络（QiankunNet）生成式神经网络量子态方法及其在量子化学中的应用，展示该方法在分子模拟中的优势。",
      en: "Prof. Honghui Shang introduced the QiankunNet generative neural network quantum state method and its applications in quantum chemistry, demonstrating its advantages in molecular simulations.",
    },
    link: "https://baike.baidu.com/reference/66254530/533aYdO6cr3_z3kATPeNyPvzZH2SZ9il6reFAOBzzqIPmGapB431ToZ8-NoqsPJjAUXIvtdrbtAa2bn7DUla6vcQdPNtBug",
  },
  {
    id: 6,
    title: {
      zh: "商红慧团队成果入围2024年戈登·贝尔奖",
      en: "The Shang Honghui team's work is a finalist for the 2024 Gordon Bell Prize",
    },
    date: "2024-12-26",
    category: { zh: "荣誉奖项", en: "Awards" },
    summary: {
      zh: "商红慧教授带领团队在国产E级超算上实现千万核可扩展的全电子全势第一性原理计算模拟，成功入围2024年度戈登·贝尔奖。",
      en: "Prof. Honghui Shang led the team to achieve ten-million-core scalable all-electron full-potential first-principles calculations on domestic exascale supercomputers, becoming a finalist for the 2024 Gordon Bell Prize.",
    },
    link: "https://93.ustc.edu.cn/2024/1226/c9299a670013/pagem.htm",
  },
  {
    id: 7,
    title: {
      zh: "关于第十四届中国化学会唐敖庆理论化学青年奖的授奖决定",
      en: "Award decision for the 14th Tang Aoqing Theoretical Chemistry Young Scientist Award of the Chinese Chemical Society",
    },
    date: "2024-08-26",
    category: { zh: "荣誉奖项", en: "Awards" },
    summary: {
      zh: "中国化学会公布第十四届唐敖庆理论化学青年奖授奖决定，商红慧教授获此殊荣。",
      en: "The Chinese Chemical Society announced the award decision for the 14th Tang Aoqing Theoretical Chemistry Young Scientist Award; Prof. Honghui Shang received this honor.",
    },
    link: "https://baike.baidu.com/reference/66254530/533aYdO6cr3_z3kATPaLz6r0YSyQMd3-t7XUVuBzzqIPmGapB5nyTcYx6NIy7fhkWgTZt9Zhbpk0gem4XghalqhNJPJkRLUlmminF26e",
  },
];

export default function News() {
  const { lang } = useLanguage();
  const s = (obj: BiText): string => obj[lang];

  return (
    <>
      <PageMeta
        title={
          lang === "zh"
            ? "新闻动态 - 中国科学技术大学 商红慧课题组"
            : "News - USTC · Shang Honghui Group"
        }
        description={
          lang === "zh"
            ? "中国科学技术大学商红慧课题组最新科研进展、学术交流和团队动态"
            : "Latest research progress, academic exchanges, and group news of the Shang Honghui Group at USTC"
        }
        keywords={
          lang === "zh"
            ? ["新闻动态", "科研进展", "学术交流"]
            : ["news", "research progress", "academic exchange"]
        }
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-3">
            {lang === "zh" ? "新闻动态" : "News"}
          </h1>
          <p className="text-base opacity-90">
            {lang === "zh"
              ? "了解课题组最新科研进展和学术活动"
              : "Stay up to date with the group's latest research progress and academic activities"}
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {newsList.map((news) => (
              <div key={news.id} className="border-b pb-6 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-primary text-white text-xs rounded">
                        {s(news.category)}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <a
                      href={news.link || defaultLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-ink mb-2 hover:text-secondary transition-colors"
                    >
                      {s(news.title)}
                    </a>
                    <p className="text-gray-700 text-sm">{s(news.summary)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
