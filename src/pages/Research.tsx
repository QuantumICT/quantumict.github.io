import { useState } from "react";
import { PageMeta } from "@/components/common/PageMeta";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "@/i18n";

type BiText = { zh: string; en: string };

interface Reference {
  citation: string;
  url: string;
}

interface ResearchTopic {
  title: BiText;
  description: BiText;
  references: Reference[];
}

const googleScholarUrl =
  "https://scholar.google.com/citations?user=HBY4LJ8AAAAJ&hl=zh-CN";

const researchTopics: ResearchTopic[] = [
  {
    title: {
      zh: "全电子密度泛函微扰理论",
      en: "All-Electron Density Functional Perturbation Theory",
    },
    description: {
      zh: "提出全电子、全势精度的密度泛函微扰理论计算框架，率先发展和实现了同时适用于分子与固体、以及原子位移和外加电场等外部微扰的计算方法，并在国产E级异构众核超算上实现了十亿核可扩展的全电子全势第一性原理计算。",
      en: "We propose a computational framework for density functional perturbation theory with all-electron, full-potential accuracy. We pioneered the development and implementation of computational methods simultaneously adaptable to molecules and solids, as well as to external perturbations such as atomic displacements and electric fields, achieving billion-core scalable all-electron full-potential first-principles calculations on China's exascale heterogeneous many-core supercomputers.",
    },
    references: [
      {
        citation:
          "Shang, H.*, Carbogno, C., Rinke, P. & Scheffler, M. Lattice dynamics calculations based on density-functional perturbation theory in real space. Comput. Phys. Commun. 215, 26–46 (2017).",
        url: "https://doi.org/10.1016/j.cpc.2017.01.017",
      },
      {
        citation:
          "Shang, H., Raimbault, N., Rinke, P., Scheffler, M., Rossi, M. & Carbogno, C. All-electron, real-space perturbation theory for homogeneous electric fields: theory, implementation, and application within DFT. New J. Phys. 20, 073040 (2018).",
        url: "https://doi.org/10.1088/1367-2630/aace6d",
      },
      {
        citation:
          "Shang, H., Argondizzo, A., Tan, S., Zhao, J., Rinke, P., Carbogno, C., Scheffler, M. & Petek, H. Electron-phonon coupling in d-electron solids: A temperature-dependent study of rutile TiO2 by first-principles theory and two-photon photoemission. Phys. Rev. Research 1, 033153 (2019).",
        url: "https://doi.org/10.1103/PhysRevResearch.1.033153",
      },
      {
        citation:
          "Shang, H., Duan, X., Li, F., Zhang, L., Xu, Z., Liu, K., Luo, H., Ji, Y., Zhao, W., Xue, W., Chen, L. & Zhang, Y. Many-core acceleration of the first-principles all-electron quantum perturbation calculations. Comput. Phys. Commun. 267, 108045 (2021).",
        url: "https://doi.org/10.1016/j.cpc.2021.108045",
      },
      {
        citation:
          "Shang, H., Li, F., Zhang, Y., Zhang, L., Fu, Y., Gao, Y., Wu, Y., Duan, X., Lin, R., Liu, X., Liu, Y. & Chen, D. Extreme-scale ab initio quantum raman spectra simulations on the leadership HPC system in China. In Proceedings of SC '21, 1–13 (ACM, New York, 2021). (Gordon Bell Prize Finalist)",
        url: "https://doi.org/10.1145/3458817.3476145",
      },
      {
        citation:
          "Wu, Z., Wu, Y., Liu, Y.*, Shang, H.*, Gao, Y., Zhang, Z., Zhang, Y., Long, Y., Feng, X. & Cui, H. Portable and scalable all-electron quantum perturbation simulations on exascale supercomputers. In Proceedings of SC '23 (ACM, New York, 2023).",
        url: "https://doi.org/10.1145/3581784.3607054",
      },
      {
        citation:
          "Shang, H.*, Liu, Y.*, Wu, Z., Chen, Z., Liu, J., Shao, M., Li, Y., Kan, B., Cui, H., Feng, X., Zhang, Y., Truhlar, D. G., An, H., He, X.* & Yang, J.* Pushing the limit of quantum mechanical simulation to the raman spectra of a biological system with 100 million atoms. In Proceedings of SC '24 (IEEE Press, 2024). (Gordon Bell Prize Finalist)",
        url: "https://doi.org/10.1109/SC54273.2024.00097",
      },
    ],
  },
  {
    title: {
      zh: "面向量子化学的高性能量子计算仿真",
      en: "High-Performance Quantum Computing Emulation for Quantum Chemistry",
    },
    description: {
      zh: "基于矩阵乘积态并结合嵌入理论，在HPC平台上构建高性能、大规模并行的变分量子本征求解器（VQE）仿真，用于大规模量子化学计算仿真；最大模拟达到1000个量子比特，在新一代神威超算上实现216.9 PFLOP/s的峰值性能，是目前量子化学量子计算仿真的最先进水平。",
      en: "We build a high-performance and massively parallel variational quantum eigensolver (VQE) emulator based on matrix product states combined with embedding theory for large-scale quantum chemistry emulation on HPC platforms. Our largest simulation reaches 1,000 qubits and a performance of 216.9 PFLOP/s on a new Sunway supercomputer, setting the state of the art for quantum computing emulation for quantum chemistry.",
    },
    references: [
      {
        citation:
          "Shang, H.*, Fan, Y., Guo, C.*, Zhou, W., Shen, L., Xu, Z., Liu, J.*, Ma, H., Lin, R., Li, F., Zhang, Y., Yang, Y., Wang, Z., & Li, Z. Large-Scale Simulation of Quantum Computational Chemistry on a New Sunway Supercomputer. In Proceedings of SC '22 (IEEE, Dallas, 2022).",
        url: "https://doi.org/10.1109/SC41404.2022.00008",
      },
      {
        citation:
          "Shang, H.*, Fan, Y., Shen, L., Guo, C.*, Liu, J.*, Duan, X., Li, F., & Li, Z. Towards practical and massively parallel quantum computing emulation for quantum chemistry. npj Quantum Information 9, 33 (2023).",
        url: "https://doi.org/10.1038/s41534-023-00696-7",
      },
      {
        citation:
          "Ma, H., Liu, J.*, Shang, H.*, Fan, Y., Li, Z., & Yang, J.* Multiscale quantum algorithms for quantum chemistry. Chem. Sci. 14, 3190–3205 (2023).",
        url: "https://doi.org/10.1039/d2sc06875c",
      },
      {
        citation:
          "Guo, C., Fan, Y., Xu, Z., & Shang, H.* Differentiable matrix product states for simulating variational quantum computational chemistry. Quantum 7, 1205 (2023).",
        url: "https://doi.org/10.22331/q-2023-11-28-1205",
      },
      {
        citation:
          "Shang, H., Wang, F., Fan, Y., Ma, H., Liu, Q., Guo, C., Zhou, P., Chen, Q., Xiao, Q., Zheng, T., Li, B., Zuo, F., Liu, J.*, Li, Z., & Yang, J. Large-scale quantum emulating simulations of biomolecules: A pilot exploration of parallel quantum computing. Science Bulletin 69, 876–880 (2024).",
        url: "https://doi.org/10.1016/j.scib.2024.01.022",
      },
      {
        citation:
          "Shang, H., Fan, Y., Liu, J., & Yang, J.* 生物大分子的量子计算模拟:并行量子计算的初步探索. 科学通报 69, 1967–1969 (2024).",
        url: "https://doi.org/10.1360/TB-2024-0376",
      },
      {
        citation:
          "Xu, Z., Zeng, X., Shang, H.*, Zhang, Y., Fan, Y., & Guo, C.* Scalable and Differentiable Simulator for Quantum Computational Chemistry. In Proceedings of IPDPS '24 (IEEE, San Francisco, 2024).",
        url: "https://doi.org/10.1109/IPDPS59261.2024.00109",
      },
    ],
  },
  {
    title: {
      zh: "乾坤网络：用于量子化学的神经网络量子态方法",
      en: "QiankunNet: Neural Network Quantum State (NNQS) Method for Quantum Chemistry",
    },
    description: {
      zh: "基于生成式Transformer架构构建神经网络量子态（NNQS）框架（乾坤网络QiankunNet），结合批处理自回归采样方法，以全组态相互作用（FCI）级别的精度求解多电子薛定谔方程，显著提升第一性原理计算的精度与效率，展示了Transformer语言模型在量子化学计算中前所未有的效率，为化学发现开辟了新途径。",
      en: "The many-electron Schrödinger equation is solved straightforwardly with QiankunNet, an NNQS framework based on a generative Transformer architecture with a batched autoregressive sampling method. This approach significantly improves the accuracy and efficiency of first-principles calculations compared to previous fermionic ansatz methods, showcasing the power of Transformer-based language models in quantum chemistry and opening up new avenues for chemical discovery.",
    },
    references: [
      {
        citation:
          "Shang, H.*, Guo, C., Wu, Y., Li, Z., Yang, J.* Solving Schrödinger Equation with a Transformer-based framework. Nat. Commun. 16, 8464 (2025).",
        url: "https://www.nature.com/articles/s41467-025-63219-2",
      },
      {
        citation:
          "Wu, Y., Guo, C.*, Fan, Y., Zhou, P. & Shang, H.* NNQS-Transformer: An efficient and scalable neural network quantum states approach for ab initio quantum chemistry. In Proceedings of SC '23 (ACM, New York, 2023).",
        url: "https://dl.acm.org/doi/10.1145/3581784.3607053",
      },
      {
        citation:
          "Fu, L., Wu, Y., Shang, H.* & Yang, J.* Transformer-Based Neural-Network Quantum State Method for Electronic Band Structures of Real Solids. J. Chem. Theory Comput. 20, 6218 (2024).",
        url: "https://doi.org/10.1021/acs.jctc.4c00257",
      },
      {
        citation:
          "Ma, H., Shang, H.* & Yang, J.* Quantum embedding method with transformer neural network quantum states for strongly correlated materials. npj Comput. Mater. 10, 220 (2024).",
        url: "https://doi.org/10.1038/s41524-024-01231-8",
      },
      {
        citation:
          "Lai, J., Kan, B., Wu, Y., Fu, Q.*, Shang, H.*, Li, Z., Yang, J.* Accurate Calculation of Interatomic Forces with Neural Networks Based on a Generative Transformer Architecture. J. Chem. Theory Comput. 20, 9478 (2024).",
        url: "https://doi.org/10.1021/acs.jctc.4c00756",
      },
      {
        citation:
          "Kan, B., Tian, Y., Wu, Y., Zhang, Y. & Shang, H.* Bridging the Gap between Transformer-Based Neural Networks and Tensor Networks for Quantum Chemistry. J. Chem. Theory Comput. 21, 3426 (2025).",
        url: "https://doi.org/10.1021/acs.jctc.4c01703",
      },
      {
        citation:
          "Wu, Y., Cao, W., Zhao, J., Shang, H.* Fast and Scalable Neural Network Quantum States Method for Molecular Potential Energy Surfaces. IEEE Trans. Parallel Distrib. Syst. 36(7), 1431 (2025).",
        url: "https://doi.org/10.1109/TPDS.2025.3568360",
      },
      {
        citation:
          "Kan, B., Zhou, Y., Xie, D., Zhou, P., Zhang, Y., Shang, H.* NNQS-SCI: Tackling Trillion-Dimensional Hilbert Space with Adaptive Neural Network Quantum States. In Proceedings of SC '25 (ACM, New York, 2025).",
        url: "https://doi.org/10.1145/3712285.3759800",
      },
      {
        citation:
          "Ma, H., Fu, L., Shang, H.*, Yang, J.* QiankunNet-Solid/DMET: a generative neural network quantum state method for solid material simulations (in Chinese). Chin. Sci. Bull. 70, 4015 (2025).",
        url: "https://doi.org/10.1360/CSB-2025-0315",
      },
    ],
  },
];

export default function Research() {
  const { lang } = useLanguage();
  const s = (obj: BiText): string => obj[lang];
  const [expandedTopics, setExpandedTopics] = useState<number[]>([0]);

  const toggleTopic = (index: number) => {
    setExpandedTopics((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <PageMeta
        title={
          lang === "zh"
            ? "研究方向 - 中国科学技术大学 商红慧课题组"
            : "Research - USTC · Shang Honghui Group"
        }
        description={
          lang === "zh"
            ? "中国科学技术大学商红慧课题组主要研究方向包括全电子密度泛函微扰理论、面向量子化学的高性能量子计算仿真、乾坤网络神经网络量子态方法等"
            : "Research directions of the Shang Honghui Group at USTC include all-electron density functional perturbation theory, high-performance quantum computing emulation for quantum chemistry, and the QiankunNet neural network quantum state method."
        }
        keywords={
          lang === "zh"
            ? ["密度泛函微扰理论", "量子计算仿真", "神经网络量子态", "高性能计算", "量子化学"]
            : ["density functional perturbation theory", "quantum computing emulation", "neural network quantum states", "high-performance computing", "quantum chemistry"]
        }
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-3">
            {lang === "zh" ? "研究方向" : "Research"}
          </h1>
          <p className="opacity-90 text-lg leading-relaxed max-w-4xl">
            {lang === "zh" ? (
              <>
                本课题组致力于发展科学计算的物理算法与数值方法，并在高性能计算机上加速这些应用。如果您对此感兴趣，可以在我们的
                <a
                  href={googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline decoration-2 underline-offset-4 hover:opacity-80"
                >
                  Google Scholar 个人主页
                  <FaExternalLinkAlt size={12} />
                </a>
                上查找我们的文章。我们目前的研究课题包括：全电子密度泛函微扰理论、面向量子化学的高性能量子计算仿真、
                乾坤网络：用于量子化学的神经网络量子态（NNQS）方法等。
              </>
            ) : (
              <>
                In our group, we develop physical algorithms and numerical methods
                for scientific calculations and accelerate these applications on
                high-performance computers. If you find this interesting, you can
                find our articles on our{" "}
                <a
                  href={googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline decoration-2 underline-offset-4 hover:opacity-80"
                >
                  Google Scholar profile
                  <FaExternalLinkAlt size={12} />
                </a>
                . Topics we are currently working on include: all-electron density
                functional perturbation theory, high-performance quantum computing
                emulation for quantum chemistry, and the QiankunNet neural network
                quantum state (NNQS) method.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Research Topics List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {researchTopics.map((topic, index) => {
            const isExpanded = expandedTopics.includes(index);
            return (
              <div key={index} className="mb-4 last:mb-0 border rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleTopic(index)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <span className="text-lg font-bold text-primary">
                    {s(topic.title)}
                  </span>
                  <FaChevronDown
                    className={`text-primary transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    size={14}
                  />
                </button>
                {isExpanded && (
                  <div className="px-5 py-4">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {s(topic.description)}
                    </p>
                    {topic.references.length > 0 && (
                      <ul className="mt-3 space-y-1 ml-4">
                        {topic.references.map((ref, refIndex) => (
                          <li key={refIndex} className="flex items-start gap-1.5">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                            <div className="text-gray-500 text-sm leading-relaxed">
                              <span className="text-gray-400 mr-1">[{refIndex + 1}]</span>
                              <span>{ref.citation}</span>{" "}
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-secondary text-xs hover:underline"
                              >
                                {lang === "zh" ? "链接" : "Link"}
                                <FaExternalLinkAlt className="ml-1" size={10} />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-ink mb-3">
            {lang === "zh" ? "对我们的研究感兴趣？" : "Interested in our research?"}
          </h2>
          <p className="text-gray-600 mb-6">
            {lang === "zh"
              ? "欢迎联系我们，了解更多研究细节和合作机会"
              : "Feel free to contact us to learn more about our research and collaboration opportunities"}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            {lang === "zh" ? "联系我们" : "Contact Us"}
            <FaArrowRight className="ml-2" size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
