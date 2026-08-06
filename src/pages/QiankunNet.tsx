import { PageMeta } from "@/components/common/PageMeta";
import { useLanguage } from "@/i18n";

type BiText = { zh: string; en: string };

interface TimelineItem {
  date: BiText;
  title: string;
  description: BiText;
  highlights: BiText[];
}

const timeline: TimelineItem[] = [
  {
    date: { zh: "2023年", en: "2023" },
    title: "QiankunNet",
    description: {
      zh: "首次将Transformer架构引入到量子化学计算中，开创了神经网络量子态表征的新方法。",
      en: "For the first time, introduced the Transformer architecture into quantum chemistry calculations, pioneering a new approach to neural network quantum state representation.",
    },
    highlights: [
      {
        zh: "设计专门的注意力机制捕捉电子间长程关联效应",
        en: "Designed specialized attention mechanisms to capture long-range correlation effects among electrons",
      },
      {
        zh: "引入物理守恒定律作为硬约束",
        en: "Introduced physical conservation laws as hard constraints",
      },
      {
        zh: "在小分子体系基态能量计算中达到前所未有的精度",
        en: "Achieved unprecedented accuracy in ground-state energy calculations of small molecular systems",
      },
      {
        zh: "在处理强关联体系时优于传统量子化学方法",
        en: "Outperforms traditional quantum chemistry methods on strongly correlated systems",
      },
    ],
  },
  {
    date: { zh: "2023年11月", en: "Nov 2023" },
    title: "QiankunNet-High Performance",
    description: {
      zh: "面向大规模并行计算的神经网络量子态方法实现框架，专为高性能计算环境设计。",
      en: "A neural network quantum state method implementation framework for large-scale parallel computing, designed for high-performance computing environments.",
    },
    highlights: [
      {
        zh: "创新的分布式计算框架",
        en: "Innovative distributed computing framework",
      },
      {
        zh: "高效的多GPU训练策略",
        en: "Efficient multi-GPU training strategies",
      },
      {
        zh: "并行局部能量评估方案",
        en: "Parallel local energy evaluation schemes",
      },
      {
        zh: "成功扩展到120个自旋轨道的活性空间",
        en: "Successfully scaled to active spaces with 120 spin orbitals",
      },
    ],
  },
  {
    date: { zh: "2024年7月", en: "Jul 2024" },
    title: "QiankunNet-Solid",
    description: {
      zh: "首次成功将神经网络量子态框架扩展到周期性体系，实现对固态材料的高精度从头算计算。",
      en: "For the first time, successfully extended the neural network quantum state framework to periodic systems, enabling high-accuracy ab initio calculations of solid-state materials.",
    },
    highlights: [
      {
        zh: "创新性结合布洛赫定理与生成式Transformer架构",
        en: "Innovatively combined Bloch's theorem with a generative Transformer architecture",
      },
      {
        zh: "适用于一维链状结构、二维材料和三维周期性体系",
        en: "Applicable to 1D chain structures, 2D materials, and 3D periodic systems",
      },
      {
        zh: "计算精度达到化学精度水平",
        en: "Achieved chemical accuracy",
      },
      {
        zh: "成功处理各种固态材料体系",
        en: "Successfully handled various solid-state material systems",
      },
    ],
  },
  {
    date: { zh: "2024年9月", en: "Sep 2024" },
    title: "QiankunNet-DMET",
    description: {
      zh: "首次将神经网络量子态与密度矩阵嵌入理论相结合，创新性地解决复杂固态材料模拟问题。",
      en: "For the first time, combined neural network quantum states with density matrix embedding theory to innovatively solve complex solid-state material simulation problems.",
    },
    highlights: [
      {
        zh: "独特的量子嵌入框架和迁移学习策略",
        en: "Unique quantum embedding framework and transfer learning strategies",
      },
      {
        zh: "智能系统分割与高效量子态表示",
        en: "Intelligent system partitioning and efficient quantum state representation",
      },
      {
        zh: "精确考虑子系统与环境之间的相互作用",
        en: "Accurately considers interactions between subsystems and the environment",
      },
      {
        zh: "成功描述过渡金属氧化物的磁性基态和1T-TiSe₂的电荷密度波态",
        en: "Successfully describes magnetic ground states of transition metal oxides and the charge density wave state of 1T-TiSe₂",
      },
    ],
  },
  {
    date: { zh: "2024年10月", en: "Oct 2024" },
    title: "QiankunNet-Force",
    description: {
      zh: "首次将变分量子蒙特卡罗与Transformer深度神经网络相结合，实现对分子体系原子间力的精确计算。",
      en: "For the first time, combined variational quantum Monte Carlo with Transformer deep neural networks to achieve accurate calculation of interatomic forces in molecular systems.",
    },
    highlights: [
      {
        zh: "直接应用Hellmann-Feynman定理进行力的计算",
        en: "Directly applies the Hellmann-Feynman theorem for force calculations",
      },
      {
        zh: "无需引入Pulay修正项，简化计算过程",
        en: "No Pulay correction term needed, simplifying the calculation",
      },
      {
        zh: "在多个代表性分子体系中展现优异性能",
        en: "Demonstrates excellent performance on multiple representative molecular systems",
      },
      {
        zh: "准确描述乙烯分子扭转过程中的波函数本质特征",
        en: "Accurately describes the essential characteristics of the wave function during ethylene molecular torsion",
      },
    ],
  },
  {
    date: { zh: "2025年2月", en: "Feb 2025" },
    title: "QiankunNet-DMRG",
    description: {
      zh: "实现了神经网络量子态与密度矩阵重正化群算法的创新性结合，为处理强关联体系提供高效精确的计算工具。",
      en: "Achieved an innovative combination of neural network quantum states with the density matrix renormalization group algorithm, providing an efficient and accurate computational tool for strongly correlated systems.",
    },
    highlights: [
      {
        zh: "深度学习辅助的张量网络优化策略",
        en: "Deep learning-assisted tensor network optimization strategies",
      },
      {
        zh: "混合表示方案自动识别和保留关键量子态信息",
        en: "Hybrid representation schemes automatically identify and preserve key quantum state information",
      },
      {
        zh: "结合了DMRG处理强关联体系的高效性",
        en: "Combines the efficiency of DMRG for strongly correlated systems",
      },
      {
        zh: "充分发挥QiankunNet在捕捉电子关联方面的优势",
        en: "Fully leverages QiankunNet's advantages in capturing electron correlation",
      },
    ],
  },
];

export default function QiankunNet() {
  const { lang } = useLanguage();
  const s = (obj: BiText): string => obj[lang];

  return (
    <>
      <PageMeta
        title={
          lang === "zh"
            ? "乾坤网络 - 中国科学技术大学 商红慧课题组"
            : "QiankunNet - USTC · Shang Honghui Group"
        }
        description={
          lang === "zh"
            ? "乾坤网络（QiankunNet）系列方法发展时间线：基于生成式Transformer架构的神经网络量子态方法"
            : "Roadmap of the QiankunNet series of methods: neural network quantum state methods based on a generative Transformer architecture"
        }
        keywords={
          lang === "zh"
            ? ["乾坤网络", "QiankunNet", "神经网络量子态", "量子化学"]
            : ["QiankunNet", "neural network quantum states", "quantum chemistry"]
        }
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-3">
            {lang === "zh" ? "乾坤网络（QiankunNet）发展时间线" : "QiankunNet Development Timeline"}
          </h1>
          <p className="text-base opacity-90">
            {lang === "zh"
              ? "从2023年至2025年基于人工智能的量子化学计算方法创新历程"
              : "Innovation journey of AI-based quantum chemistry methods from 2023 to 2025"}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink mb-10 text-center">
            {lang === "zh"
              ? "乾坤网络（QiankunNet）系列方法发展路线图"
              : "Roadmap of the QiankunNet Series of Methods"}
          </h2>
          <ol className="relative border-l-2 border-primary/20 ml-3 space-y-10">
            {timeline.map((item, index) => (
              <li key={index} className="relative pl-8">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary" />
                <div className="mb-1 flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-semibold rounded">
                    {s(item.date)}
                  </span>
                  <span className="text-lg font-bold text-ink">{item.title}</span>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-3">
                  {s(item.description)}
                </p>
                <ul className="space-y-1.5">
                  {item.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-gray-600 text-sm">
                        {s(highlight)}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
