import { useState } from "react";
import { PageMeta } from "@/components/common/PageMeta";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "@/i18n";

interface Paper {
  num: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  http?: string;
}

const papers: Paper[] = [
  { num: 72, title: "Accelerating Many-Body Quantum Chemistry via Generative Transformer-Enhanced Configuration Interaction", authors: "Bowen Kan and Honghui Shang*", journal: "Journal of Chemical Theory and Computation, nov 2025", year: 2025, doi: "https://doi.org/10.1021/acs.jctc.5c01429", http: "https://pubs.acs.org/doi/10.1021/acs.jctc.5c01429" },
  { num: 71, title: "Unveiling the Physical Meaning of Transformer Attention in Neural Network Quantum States: A Conditional Mutual Information Perspective", authors: "Tianyu Ruan#, Bowen Kan#, Yixuan Sun#, Honghui Shang*, Shihua Zhang*, and Jinlong Yang*", journal: "Chinese Physics B, 2025", year: 2025, doi: "https://doi.org/10.1088/1674-1056/ae1118", http: "http://iopscience.iop.org/article/10.1088/1674-1056/ae1118" },
  { num: 70, title: "Large-Scale Neural Network Quantum States Calculation for Quantum Chemistry on a New Sunway Supercomputer", authors: "Yangjun Wu#, Wenhao Zhou#, Li Shen, Hong Qian, and Honghui Shang*", journal: "IEEE Transactions on Parallel and Distributed Systems, 36(12):2724–2732, dec 2025", year: 2025, doi: "https://doi.org/10.1109/TPDS.2025.3620251", http: "https://ieeexplore.ieee.org/document/11204692/" },
  { num: 69, title: "NNQS-SCI: Tackling Trillion-Dimensional Hilbert Space with Adaptive Neural Network Quantum States", authors: "Bowen Kan, Yumeng Zhou, Daiyou Xie, Pengyu Zhou, Yunquan Zhang, and Honghui Shang*", journal: "In Proceedings of SC '25. ACM, 2025", year: 2025, doi: "https://doi.org/10.1145/3712285.3759800", http: "https://dl.acm.org/doi/10.1145/3712285.3759800" },
  { num: 68, title: "Clifford augmented density matrix renormalization group for ab initio quantum chemistry", authors: "Lizhong Fu, Honghui Shang*, Jinlong Yang*, and Chu Guo*", journal: "Physical Review B, 112(19):195111, nov 2025", year: 2025, doi: "https://doi.org/10.1103/4ng4-vzz6", http: "https://link.aps.org/doi/10.1103/4ng4-vzz6" },
  { num: 67, title: "Analytical Gradients of Random-Phase Approximation Plus Corrections from Renormalized Single Excitations", authors: "Muhammad N. Tahir*, Honghui Shang*, and Xinguo Ren*", journal: "Journal of Chemical Theory and Computation, 21(21):10822–10841, nov 2025", year: 2025, doi: "https://doi.org/10.1021/acs.jctc.5c01053", http: "https://pubs.acs.org/doi/10.1021/acs.jctc.5c01053" },
  { num: 66, title: "NNQS-AFQMC: Neural Network Quantum States Enhanced Fermionic Quantum Monte Carlo", authors: "Zhi-Yu Xiao*#, Bowen Kan#, Huan Ma#, Bowen Zhao#, and Honghui Shang*", journal: "Journal of Chemical Theory and Computation, 21(19):9587–9600, oct 2025", year: 2025, doi: "https://doi.org/10.1021/acs.jctc.5c01138", http: "https://pubs.acs.org/doi/10.1021/acs.jctc.5c01138" },
  { num: 65, title: "Solving the many-electron Schrödinger equation with a transformer-based framework", authors: "Honghui Shang*#, Chu Guo#, Yangjun Wu, Zhenyu Li, and Jinlong Yang*", journal: "Nature Communications, 16(1):8464, sep 2025", year: 2025, doi: "https://doi.org/10.1038/s41467-025-63219-2", http: "https://www.nature.com/articles/s41467-025-63219-2" },
  { num: 64, title: "QiankunNet-Solid/DMET: a generative neural network quantum state method for solid material simulations", authors: "Huan Ma, Lizhong Fu, Honghui Shang*, and Jinlong Yang*", journal: "Science Bulletin, 70(24):4015–4026, aug 2025", year: 2025, doi: "https://doi.org/10.1360/CSB-2025-0315", http: "https://www.sciengine.com/doi/10.1360/CSB-2025-0315" },
  { num: 63, title: "Fast and Scalable Neural Network Quantum States Method for Molecular Potential Energy Surfaces", authors: "Yangjun Wu, Wanlu Cao, Jiacheng Zhao, and Honghui Shang*", journal: "IEEE Transactions on Parallel and Distributed Systems, 36(7):1431–1443, jul 2025", year: 2025, doi: "https://doi.org/10.1109/TPDS.2025.3568360", http: "https://ieeexplore.ieee.org/document/11000098/" },
  { num: 62, title: "Evaluation of Phase Networks in Transformer-Based Neural Network Quantum States", authors: "Lizhong Fu, Honghui Shang*, and Jinlong Yang*", journal: "Communications in Computational Chemistry, 7(2):120–126, jun 2025", year: 2025, doi: "https://doi.org/10.4208/cicc.2025.92.01", http: "http://global-sci.org/index.php/cicc/article/view/22990" },
  { num: 61, title: "Bridging the Gap between Transformer-Based Neural Networks and Tensor Networks for Quantum Chemistry", authors: "Bowen Kan#, Yingqi Tian#, Yangjun Wu, Yunquan Zhang, and Honghui Shang*", journal: "Journal of Chemical Theory and Computation, 21(7):3426–3439, apr 2025", year: 2025, doi: "https://doi.org/10.1021/acs.jctc.4c01703", http: "https://pubs.acs.org/doi/10.1021/acs.jctc.4c01703" },
  { num: 60, title: "High-Throughput Computation of ab initio Raman Spectra for Two-Dimensional Materials", authors: "Geng Li#, Yingxiang Gao#, Daiyou Xie#, Leilei Zhu, Dongjie Shi, Shuming Zeng, Wei Zhan, Jun Chen, and Honghui Shang*", journal: "Scientific Data, 12(1):373, mar 2025", year: 2025, doi: "https://doi.org/10.1038/s41597-025-04593-w", http: "https://www.nature.com/articles/s41597-025-04593-w" },
  { num: 59, title: "Pushing the Limit of Quantum Mechanical Simulation to the Raman Spectra of a Biological System with 100 Million Atoms", authors: "Honghui Shang*, Ying Liu*, Zhikun Wu, Zhenchuan Chen, Jinfeng Liu, Meiyue Shao, Yingzhou Li, Bowen Kan, Huimin Cui, Xiaobing Feng, Yunquan Zhang, Donald G. Truhlar, Hong An, Xiao He*, and Jinlong Yang*", journal: "In Proceedings of SC '24. IEEE Press, 2024", year: 2024, doi: "https://doi.org/10.1109/SC41406.2024.00011", http: "https://doi.org/10.1109/SC41406.2024.00011" },
  { num: 58, title: "Exploring electron-phonon coupling using quantum computing methods", authors: "Pengyu Zhou and Honghui Shang*", journal: "Physica Scripta, 99(12):125105, dec 2024", year: 2024, doi: "https://doi.org/10.1088/1402-4896/ad8a01", http: "https://iopscience.iop.org/article/10.1088/1402-4896/ad8a01" },
  { num: 57, title: "Accurate Calculation of Interatomic Forces with Neural Networks Based on a Generative Transformer Architecture", authors: "Juntao Lai, Bowen Kan, Yangjun Wu, Qiang Fu*, Honghui Shang*, Zhenyu Li, and Jinlong Yang*", journal: "Journal of Chemical Theory and Computation, 20(21):9478–9487, nov 2024", year: 2024, doi: "https://doi.org/10.1021/acs.jctc.4c01205", http: "https://pubs.acs.org/doi/10.1021/acs.jctc.4c01205" },
  { num: 56, title: "Quantum embedding method with transformer neural network quantum states for strongly correlated materials", authors: "Huan Ma, Honghui Shang*, and Jinlong Yang*", journal: "npj Computational Materials, 10(1):220, sep 2024", year: 2024, doi: "https://doi.org/10.1038/s41524-024-01406-3", http: "https://www.nature.com/articles/s41524-024-01406-3" },
  { num: 55, title: "Efficient Structural Relaxation Based on the Random Phase Approximation: Applications to Water Clusters", authors: "Muhammad N. Tahir, Honghui Shang*, Jia Li*, and Xinguo Ren*", journal: "The Journal of Physical Chemistry A, 128, 37, 7939–7949, 2024", year: 2024, doi: "https://doi.org/10.1021/acs.jpca.4c02411", http: "#" },
  { num: 54, title: "Transformer-Based Neural-Network Quantum State Method for Electronic Band Structures of Real Solids", authors: "Lizhong Fu, Yangjun Wu, Honghui Shang*, and Jinlong Yang*", journal: "Journal of Chemical Theory and Computation, 20(14):6218–6226, jul 2024", year: 2024, doi: "https://doi.org/10.1021/acs.jctc.4c00567", http: "https://pubs.acs.org/doi/10.1021/acs.jctc.4c00567" },
  { num: 53, title: "Scalable and Differentiable Simulator for Quantum Computational Chemistry", authors: "Zhiqian Xu, Honghui Shang*, Yi Fan, Xiongzhi Zeng, Yunquan Zhang, and Chu Guo*", journal: "In 2024 IEEE IPDPS '24, 2024", year: 2024, doi: "https://doi.org/10.1109/IPDPS57955.2024.00028", http: "https://doi.org/10.1109/IPDPS57955.2024.00028" },
  { num: 52, title: "Transient Photoinduced Pb²⁺ Disproportionation for Exciton Self-Trapping and Broadband Emission in Low-Dimensional Lead Halide Perovskites", authors: "Yao Zhang, Leilei Zhu, Zhaoxia Yang, Weijian Tao, Zeng Chen, Tianjing Li, Haixin Lei, Congzhou Li, Lin Wang, Wenming Tian, Zhenyu Li*, Honghui Shang*, and Haiming Zhu*", journal: "Journal of the American Chemical Society, 146(11):7831–7838, mar 2024", year: 2024, doi: "https://doi.org/10.1021/jacs.4c01115", http: "https://pubs.acs.org/doi/10.1021/jacs.4c01115" },
  { num: 51, title: "Quantum-centric high performance computing for quantum chemistry", authors: "Jie Liu*, Huan Ma, Honghui Shang*, Zhenyu Li, and Jinlong Yang*", journal: "Physical Chemistry Chemical Physics, 26(22):15831–15843, 2024", year: 2024, doi: "https://doi.org/10.1039/D4CP00436A", http: "http://dx.doi.org/10.1039/D4CP00436A" },
  { num: 50, title: "Solving the Electronic Schrödinger Equation by Pairing Tensor-Network State with Neural Network Quantum State", authors: "Bowen Kan#, Yingqi Tian#, Daiyou Xie, Yangjun Wu, Yi Fan, and Honghui Shang*", journal: "Mathematics, 12(3):433, jan 2024", year: 2024, doi: "https://doi.org/10.3390/math12030433", http: "https://www.mdpi.com/2227-7390/12/3/433" },
  { num: 49, title: "Large-scale quantum emulating simulations of biomolecules: A pilot exploration of parallel quantum computing", authors: "Honghui Shang#, Fei Wang#, Yi Fan#, Huan Ma, Qi Liu, Chu Guo, Pengyu Zhou, Qi Chen, Qian Xiao, Tianyu Zheng, Bin Li, Fen Zuo, Jie Liu*, Zhenyu Li, and Jinlong Yang*", journal: "Science Bulletin, 69(7):876–880, apr 2024", year: 2024, doi: "https://doi.org/10.1016/j.scib.2024.01.022", http: "https://www.sciencedirect.com/science/article/pii/S2095927324000409" },
  { num: 48, title: "Large-scale quantum emulating simulations of biomolecules: A pilot exploration of parallel quantum computing", authors: "Honghui Shang, Yi Fan, Jie Liu, and Jinlong Yang*", journal: "Kexue Tongbao/Chinese Science Bulletin, 69(15):1967–1969, 2024", year: 2024, doi: "https://doi.org/10.1360/TB-2024-0376", http: "#" },
  { num: 47, title: "First-Principles Analysis of the Raman Spectra of 2D Material YbOCl", authors: "Leilei Zhu, Xiongzhi Zeng, Honghui Shang*, and Zhenyu Li*", journal: "The Journal of Physical Chemistry C, 127(48):23359–23369, dec 2023", year: 2023, doi: "https://doi.org/10.1021/acs.jpcc.3c05140", http: "https://pubs.acs.org/doi/10.1021/acs.jpcc.3c05140" },
  { num: 46, title: "Differentiable matrix product states for simulating variational quantum computational chemistry", authors: "Chu Guo#, Yi Fan#, Zhiqian Xu, and Honghui Shang*", journal: "Quantum, 7:1192, dec 2023", year: 2023, doi: "https://doi.org/10.22331/q-2023-12-04-1192", http: "https://doi.org/10.22331/q-2023-12-04-1192" },
  { num: 45, title: "Portable and scalable all-electron quantum perturbation simulations on exascale supercomputers", authors: "Zhikun Wu, Yangjun Wu, Ying Liu*, Honghui Shang*, Yingxiang Gao, Zhongcheng Zhang, Yuyang Zhang, Yingchi Long, Xiaobing Feng, and Huimin Cui", journal: "In Proceedings of SC '23, New York, NY, USA, 2023. ACM", year: 2023, doi: "https://doi.org/10.1145/3581784.3607085", http: "https://doi.org/10.1145/3581784.3607085" },
  { num: 44, title: "NNQS-Transformer: an Efficient and Scalable Neural Network Quantum States Approach for Ab initio Quantum Chemistry", authors: "Yangjun Wu, Chu Guo*, Yi Fan, Pengyu Zhou and Honghui Shang*", journal: "In Proceedings of SC '23, New York, NY, USA, 2023. ACM", year: 2023, doi: "#", http: "https://doi.org/10.1145/3581784.3607061" },
  { num: 43, title: "MPS-VQE: A variational quantum computational chemistry simulator with matrix product states", authors: "Zhiqian Xu, Yi Fan, Chu Guo* and Honghui Shang*", journal: "Computer Physics Communications, 294:108897, 2024", year: 2023, doi: "https://doi.org/10.1016/j.cpc.2023.108897", http: "https://www.sciencedirect.com/science/article/pii/S0010465523002424" },
  { num: 42, title: "Efficient implementation of analytical gradients for periodic hybrid functional calculations within fitted numerical atomic orbitals from NAO2GTO", authors: "Xinming Qin, Honghui Shang* and Jinlong Yang*", journal: "Frontiers in Chemistry, 11, 2023", year: 2023, doi: "https://doi.org/10.3389/fchem.2023.1232425", http: "https://www.frontiersin.org/articles/10.3389/fchem.2023.1232425/full" },
  { num: 41, title: "Redesigning OpenKMC for Multi-Component Trillion-Atom Simulations on the New Sunway Supercomputer", authors: "Lei Xu, Honghui Shang*, Chen Xin*, Zhang Yunquan, Wang Lifang, Gao Xingyu and Song Haifeng", journal: "IEEE Transactions on Parallel and Distributed Systems, 34:1997–2010, 2023", year: 2023, doi: "https://doi.org/10.1109/TPDS.2023.3269625", http: "https://ieeexplore.ieee.org/document/10113812" },
  { num: 40, title: "OpenCL-accelerated first-principles calculations of all-electron quantum perturbations on HPC resources", authors: "Zhikun Wu, Honghui Shang*, Yangjun Wu, Zhongcheng Zhang, Ying Liu*, Yuyang Zhang, Yucheng Ouyang, Huimin Cui and Xiaobing Feng", journal: "Frontiers in Chemistry, 11:1–15, 2023", year: 2023, doi: "https://doi.org/10.3389/fchem.2023.1156891", http: "https://www.frontiersin.org/articles/10.3389/fchem.2023.1156891/full" },
  { num: 39, title: "A real neural network state for quantum chemistry", authors: "Yangjun Wu, Xiansong Xu, Dario Poletti, Yi Fan, Chu Guo* and Honghui Shang*", journal: "Mathematics, 11(6):1417, 2023", year: 2023, doi: "https://doi.org/10.48550/arXiv.2301.03755", http: "https://arxiv.org/abs/2301.03755" },
  { num: 38, title: "Multiscale quantum algorithms for quantum chemistry", authors: "Huan Ma, Jie Liu*, Honghui Shang*, Yi Fan, Zhenyu Li and Jinlong Yang*", journal: "Chemical Science, 14(12):3190–3205, 2023", year: 2023, doi: "https://doi.org/10.1039/D2SC06875C", http: "https://pubs.rsc.org/en/content/articlelanding/2023/sc/d2sc06875c" },
  { num: 37, title: "The electron-phonon renormalization in the electronic structure calculation: Fundamentals, current status, and challenges", authors: "Honghui Shang and Jinlong Yang*", journal: "The Journal of Chemical Physics, 130901, 2023", year: 2023, doi: "https://doi.org/10.1063/5.0140724", http: "https://doi.org/10.1063/5.0140724" },
  { num: 36, title: "Towards practical and massively parallel quantum computing emulation for quantum chemistry", authors: "Honghui Shang#*, Yi Fan#, Li Shen, Chu Guo*, Jie Liu*, Xiaohui Duan, Fang Li and Zhenyu Li", journal: "npj Quantum Information, 9(1):33, apr 2023", year: 2023, doi: "https://doi.org/10.1038/s41534-023-00696-7", http: "https://www.nature.com/articles/s41534-023-00696-7" },
  { num: 35, title: "Ultrafast Spontaneous Localization of a Jahn-Teller Exciton Polaron in Two-Dimensional Semiconducting CrI₃ by Symmetry Breaking", authors: "Xufeng Li, Aolei Wang, Hailong Chen, Weijian Tao, Zeng Chen, Chi Zhang, Yujie Li, Yiran Zhang, Honghui Shang, Yu-xiang Weng, Jin Zhao*, and Haiming Zhu*", journal: "Nano Letters, 22(21):8755–8762, nov 2022", year: 2022, doi: "https://doi.org/10.1021/acs.nanolett.2c03689", http: "https://pubs.acs.org/doi/10.1021/acs.nanolett.2c03689" },
  { num: 34, title: "Localized Resolution of Identity Approach to the Analytical Gradients of Random-Phase Approximation Ground-State Energy: Algorithm and Benchmarks", authors: "Muhammad Tahir, Tong Zhu, Honghui Shang, Jia Li*, Volker Blum*, Xinguo Ren*", journal: "Journal of Chemical Theory and Computation 18(9):5297–5311, sep 2022", year: 2022, doi: "https://doi.org/10.1021/acs.jctc.2c00512", http: "https://pubs.acs.org/doi/10.1021/acs.jctc.2c00512" },
  { num: 33, title: "Growth, Raman Scattering Investigation and Photodetector Properties of 2D SnP", authors: "Chuyun Ding#, Yuyu Yao#, Leilei Zhu#, Honghui Shang, Peng Xu, Xiaolin Liu, Jia Lin, Feng Wang, Xueying Zhan, Jun He, and Zhenxing Wang*", journal: "Small 18(16):2108017, apr 2022", year: 2022, doi: "https://doi.org/10.1002/smll.202108017", http: "https://onlinelibrary.wiley.com/doi/10.1002/smll.202108017" },
  { num: 32, title: "Coupled Electronic and Anharmonic Structural Dynamics for Carrier Self‐Trapping in Photovoltaic Antimony Chalcogenides", authors: "Weijian Tao#, Leilei Zhu#, Kanghua Li, Chao Chen, Yuzhong Chen, Yujie Li, Xufeng Li, Jiang Tang, Honghui Shang*, and Haiming Zhu*", journal: "Advanced Science, 2202154, jun 2022", year: 2022, doi: "https://doi.org/10.1002/advs.202202154", http: "https://onlinelibrary.wiley.com/doi/10.1002/advs.202202154" },
  { num: 31, title: "Increasing the Efficiency of Massively Parallel Sparse Matrix-Matrix Multiplication in First-Principles Calculation on the New-Generation Sunway Supercomputer", authors: "Xin Chen#, Yingxiang Gao#, Honghui Shang*, Fang Li*, Zhiqian Xu, Xin Liu, and Dexun Chen", journal: "IEEE Transactions on Parallel and Distributed Systems, 33(12):4752–4766, dec 2022", year: 2022, doi: "https://doi.org/10.1109/TPDS.2022.3202518", http: "#" },
  { num: 30, title: "Large-Scale Simulation of Quantum Computational Chemistry on a New Sunway Supercomputer", authors: "Honghui Shang#*, Li Shen#, Yi Fan, Zhiqian Xu, Chu Guo*, Jie Liu*, Wenhao Zhou, Huan Ma, Rongfen Lin, Yuling Yang, Fang Li, Zhuoya Wang, Yunquan Zhang, and Zhenyu Li", journal: "Proceedings of SC '22", year: 2022, doi: "#", http: "http://arxiv.org/abs/2207.03711" },
  { num: 29, title: "Scaling Poisson Solvers on Many Cores via MMEwald", authors: "Mingchuan Wu, Yangjun Wu, Honghui Shang*, Ying Liu*, Huimin Cui, Fang Li, Xiaohui Duan, Yunquan Zhang, and Xiaobing Feng", journal: "IEEE Transactions on Parallel and Distributed Systems, 33(8):1888–1901, 2021", year: 2021, doi: "https://doi.org/10.1109/TPDS.2021.3127138", http: "https://ieeexplore.ieee.org/document/9611019/" },
  { num: 28, title: "TensorKMC: Kinetic Monte Carlo Simulation of 50 Trillion Atoms Driven by Deep Learning on a New Generation of Sunway Supercomputer", authors: "Honghui Shang#, Xin Chen#, Xingyu Gao, Rongfen Lin*, Lifang Wang, Fang Li, Qian Xiao, Lei Xu, Qiang Sun, Leilei Zhu, Fei Wang, Yunquan Zhang*, and Haifeng Song*", journal: "Proceedings of SC '21, pages 1–14, New York, NY, nov 2021. ACM", year: 2021, doi: "https://doi.org/10.1145/3458817.3476174", http: "https://dl.acm.org/doi/10.1145/3458817.3476174" },
  { num: 27, title: "Accelerating all-electron ab initio simulation of raman spectra for biological systems", authors: "Honghui Shang*, Fang Li*, Yunquan Zhang, Ying Liu, Libo Zhang, Mingchuan Wu, Yangjun Wu, Di Wei, Huimin Cui, Xin Liu, Fei Wang, Yuxi Ye, Yingxiang Gao, Shuang Ni, Xin Chen, and Dexun Chen", journal: "Proceedings of SC '21, pages 1–15, New York, NY, USA, nov 2021. ACM", year: 2021, doi: "https://doi.org/10.1145/3458817.3476160", http: "https://dl.acm.org/doi/10.1145/3458817.3476160" },
  { num: 26, title: "SW_Qsim: A Minimize-Memory Quantum Simulator with High-Performance on a New Sunway Supercomputer", authors: "Fang Li, Xin Liu, Yong Liu, Pengpeng Zhao, Yuling Yang, Honghui Shang, Weizhe Sun, Zhen Wang, Enming Dong, and Dexun Chen*", journal: "Proceedings of SC '21, volume 1, pages 1–13, New York, NY, USA, nov 2021. ACM", year: 2021, doi: "https://doi.org/10.1145/3458817.3476161", http: "https://dl.acm.org/doi/10.1145/3458817.3476161" },
  { num: 25, title: "Extreme-scale ab initio quantum raman spectra simulations on the leadership HPC system in China", authors: "Honghui Shang*, Fang Li*, Yunquan Zhang*, Libo Zhang, You Fu, Yingxiang Gao, Yangjun Wu, Xiaohui Duan, Rongfen Lin, Xin Liu, Ying Liu, and Dexun Chen", journal: "Proceedings of SC '21, pages 1–13, New York, NY, USA, nov 2021. ACM", year: 2021, doi: "https://doi.org/10.1145/3458817.3487402", http: "https://dl.acm.org/doi/10.1145/3458817.3487402" },
  { num: 24, title: "Long-term behavior of vacancy defects in Pu-Ga alloy: effects of temperature and Ga concentration", authors: "Lei Xu#, Li-Fang Wang#, Xin Chen, Xingyu Gao, Hong-Hui Shang, Hai-Feng Liu, and Hai-Feng Song*", journal: "Computational and Theoretical Chemistry, page 113338, 2021", year: 2021, doi: "https://doi.org/10.1016/j.comptc.2021.113338", http: "https://www.sciencedirect.com/science/article/pii/S2210271X21001961" },
  { num: 23, title: "Many-core acceleration of the first-principles all-electron quantum perturbation calculations", authors: "Honghui Shang*, Xiaohui Duan*, Fang Li*, Libo Zhang, Zhiqian Xu, Kan Liu, Haiwen Luo, Yingrui Ji, Wenxuan Zhao, Wei Xue, Li Chen, and Yunquan Zhang", journal: "Computer Physics Communications, 267:108045, oct 2021", year: 2021, doi: "https://doi.org/10.1016/j.cpc.2021.108045", http: "https://doi.org/10.1016/j.cpc.2021.108045" },
  { num: 22, title: "Controlled synthesis and Raman study of a 2D antiferromagnetic P-type semiconductor: α-MnSe", authors: "Ningning Li#, Leilei Zhu#, Honghui Shang#, Feng Wang, Yu Zhang, Yuyu Yao, Junjun Wang, Xueying Zhan, Fengmei Wang, Jun He, and Zhenxing Wang*", journal: "Nanoscale, 13(14):6953–6964, 2021", year: 2021, doi: "https://doi.org/10.1039/D1NR00822F", http: "#" },
  { num: 21, title: "Capturing the Electron–Phonon Renormalization in Molecules from First-Principles", authors: "Honghui Shang* and Jinlong Yang", journal: "The Journal of Physical Chemistry A, 125(12):2682–2689, apr 2021", year: 2021, doi: "https://doi.org/10.1021/acs.jpca.0c10897", http: "https://pubs.acs.org/doi/10.1021/acs.jpca.0c10897" },
  { num: 20, title: "Assessment of the Mass Factor for the Electron–Phonon Coupling in Solids", authors: "Honghui Shang, Jin Zhao, and Jinlong Yang*", journal: "The Journal of Physical Chemistry C, 125(11):6479–6485, mar 2021", year: 2021, doi: "https://doi.org/10.1021/acs.jpcc.1c00861", http: "https://pubs.acs.org/doi/10.1021/acs.jpcc.1c00861" },
  { num: 19, title: "The Sternheimer approach to all-electron real-space density-functional perturbation theory with atomic basis set", authors: "Honghui Shang*", journal: "AIP Advances, 11(1):015224, jan 2021", year: 2021, doi: "https://doi.org/10.1063/5.0029361", http: "https://doi.org/10.1063/5.0029361" },
  { num: 18, title: "Anharmonic Raman spectra simulation of crystals from deep neural networks", authors: "Honghui Shang* and Haidi Wang", journal: "AIP Advances, 11(3):35105, mar 2021", year: 2021, doi: "https://doi.org/10.1063/5.0040190", http: "https://doi.org/10.1063/5.0040190" },
  { num: 17, title: "Efficient parallel linear scaling method to get the response density matrix in all-electron real-space density-functional perturbation theory", authors: "Honghui Shang*, WanZhen Liang, Yunquan Zhang, and Jinlong Yang", journal: "Computer Physics Communications, 258:107613, sep 2020", year: 2020, doi: "https://doi.org/10.1016/j.cpc.2020.107613", http: "#" },
  { num: 16, title: "Implementation of Laplace Transformed MP2 for Periodic Systems With Numerical Atomic Orbitals", authors: "Honghui Shang* and Jinlong Yang*", journal: "Frontiers in Chemistry, 8:956, nov 2020", year: 2020, doi: "https://doi.org/10.3389/fchem.2020.589992", http: "https://www.frontiersin.org/articles/10.3389/fchem.2020.589992/full" },
  { num: 15, title: "Influence of high-energy local orbitals and electron-phonon interactions on the band gaps and optical absorption spectra of hexagonal boron nitride", authors: "Tong Shen, Xiao-Wei Zhang*, Honghui Shang, Min-Ye Zhang, Xinqiang Wang, En-Ge Wang, Hong Jiang*, and Xin-Zheng Li*", journal: "Phys. Rev. B, 102(4):45117 2020", year: 2020, doi: "https://doi.org/10.1103/PhysRevB.102.045117", http: "https://link.aps.org/doi/10.1103/PhysRevB.102.045117" },
  { num: 14, title: "The dynamic parallel distribution algorithm for hybrid density-functional calculations in HONPAS package", authors: "Honghui Shang#*, Lei Xu#, Baodong Wu, Xinming Qin, Yunquan Zhang, and Jinlong Yang", journal: "Computer Physics Communications, 254:107204, feb 2020", year: 2020, doi: "https://doi.org/10.1016/j.cpc.2020.107204", http: "https://doi.org/10.1016/j.cpc.2020.107204" },
  { num: 13, title: "The static parallel distribution algorithms for hybrid density-functional calculations in HONPAS package", authors: "Xinming Qin#, Honghui Shang#*, Lei Xu, Wei Hu, Jinlong Yang, Shigang Li, and Yunquan Zhang", journal: "International Journal of High Performance Computing Applications, 34(2):159–168, mar 2020", year: 2020, doi: "https://doi.org/10.1177/1094342019845046", http: "http://journals.sagepub.com/doi/10.1177/1094342019845046" },
  { num: 12, title: "The Moving-Grid Effect in the Harmonic Vibrational Frequency Calculations with Numeric Atom-Centered Orbitals", authors: "Honghui Shang#* and Jinlong Yang", journal: "The Journal of Physical Chemistry A, 124(14):2897–2906, apr 2020", year: 2020, doi: "https://doi.org/10.1021/acs.jpca.0c01453", http: "https://pubs.acs.org/doi/abs/10.1021/acs.jpca.0c01453" },
  { num: 11, title: "OpenKMC: a KMC design for hundred-billion-atom simulation using millions of cores on Sunway Taihulight", authors: "Kun Li#, Honghui Shang#*, Yunquan Zhang, Shigang Li, Baodong Wu, Dong Wang, Libo Zhang, Fang Li, Dexun Chen, and Zhiqiang Wei", journal: "Proceedings of SC '19, page 68. 2019 ACM", year: 2019, doi: "#", http: "#" },
  { num: 10, title: "Electron-phonon coupling in d-electron solids: A temperature-dependent study of rutile TiO₂ by first-principles theory and two-photon photoemission", authors: "Honghui Shang, Adam Argondizzo, Shijing Tan, Jin Zhao, Patrick Rinke, Christian Carbogno, Matthias Scheffler, and Hrvoje Petek*", journal: "Phys. Rev. Research, 1(3):33153, 2019", year: 2019, doi: "https://doi.org/10.1103/PhysRevResearch.1.033153", http: "https://link.aps.org/doi/10.1103/PhysRevResearch.1.033153" },
  { num: 9, title: "All-electron, real-space perturbation theory for homogeneous electric fields: theory, implementation, and application within DFT", authors: "Honghui Shang, Nathaniel Raimbault, Patrick Rinke, Matthias Scheffler, Mariana Rossi*, and Christian Carbogno*", journal: "New Journal of Physics, 20(7):073040, jul 2018", year: 2018, doi: "https://doi.org/10.1088/1367-2630/aace6d", http: "https://doi.org/10.1088/1367-2630/aace6d" },
  { num: 8, title: "Lattice dynamics calculations based on density-functional perturbation theory in real space", authors: "Honghui Shang*, Christian Carbogno, Patrick Rinke and Matthias Scheffler", journal: "Computer Physics Communications, 215:26–46, jun 2017", year: 2017, doi: "https://doi.org/10.1016/j.cpc.2017.02.001", http: "http://www.sciencedirect.com/science/article/pii/S0010465517300437" },
  { num: 7, title: "Li/MgO Catalysts Doped with Aliovalent Ions. Part II: Local Topology Unraveled by EPR/NMR and DFT Modeling", authors: "Ulla Simon#, Sebastián Alarcón Villaseca, Honghui Shang, Sergey V Levchenko, Sebastian Arndt, Jan D Epping, Oliver Görke, Matthias Scheffler, Reinhard Schomäcker, Johan van Tol, Andrew Ozarowski, and Klaus-Peter Dinse*", journal: "ChemCatChem, 9(18):3597–3610, sep 2017", year: 2017, doi: "https://doi.org/10.1002/cctc.201700610", http: "https://onlinelibrary.wiley.com/doi/abs/10.1002/cctc.201700610" },
  { num: 6, title: "Evidence for photogenerated intermediate hole polarons in ZnO", authors: "Hikmet Sezen, Honghui Shang, Fabian Bebensee, Chengwu Yang, Maria Buchholz, Alexei Nefedov, Stefan Heissler, Christian Carbogno, Matthias Scheffler, Patrick Rinke, and Christof Wöll*", journal: "Nature Communications, 6(1):6901, dec 2015", year: 2015, doi: "https://doi.org/10.1038/ncomms7901", http: "http://www.nature.com/articles/ncomms7901" },
  { num: 5, title: "Ultrafast multiphoton pump-probe photoemission excitation pathways in rutile TiO₂(110)", authors: "Argondizzo Adam, Xuefeng Cui, Cong Wang, Huijuan Sun, Honghui Shang, Jin Zhao, and Petek Hrvoje*", journal: "Physical Review B, 91(15):155429 apr 2015", year: 2015, doi: "https://doi.org/10.1103/PhysRevB.91.155429", http: "http://link.aps.org/doi/10.1103/PhysRevB.91.155429" },
  { num: 4, title: "HONPAS: A linear scaling open-source solution for large system simulations", authors: "Xinming Qin, Honghui Shang, Hongjun Xiang, Zhenyu Li, and Jinlong Yang*", journal: "International Journal of Quantum Chemistry, 115(10):647–655, may 2015", year: 2015, doi: "https://doi.org/10.1002/qua.24837", http: "http://doi.wiley.com/10.1002/qua.24837" },
  { num: 3, title: "Implementation of screened hybrid density functional for periodic systems with numerical atomic orbitals: Basis function fitting and integral screening", authors: "Honghui Shang, Zhenyu Li, and Jinlong Yang*", journal: "The Journal of Chemical Physics, 135(3):034110, jul 2011", year: 2011, doi: "https://doi.org/10.1063/1.3610379", http: "http://aip.scitation.org/doi/10.1063/1.3610379" },
  { num: 2, title: "Linear scaling electronic structure calculations with numerical atomic basis set", authors: "Honghui Shang, Hongjun Xiang, Zhenyu Li, and Jinlong Yang*", journal: "International Reviews in Physical Chemistry, 29(4):665–691, oct 2010", year: 2010, doi: "https://doi.org/10.1080/0144235X.2010.520454", http: "http://www.tandfonline.com/doi/abs/10.1080/0144235X.2010.520454" },
  { num: 1, title: "Implementation of Exact Exchange with Numerical Atomic Orbitals", authors: "Honghui Shang, Zhenyu Li, and Jinlong Yang*", journal: "The Journal of Physical Chemistry A, 114(2):1039–1043, jan 2010", year: 2010, doi: "https://doi.org/10.1021/jp908836z", http: "https://pubs.acs.org/doi/10.1021/jp908836z" },
];

const years = Array.from(new Set(papers.map((p) => p.year))).sort(
  (a, b) => b - a
);

export default function Papers() {
  const { lang } = useLanguage();
  const [expandedYears, setExpandedYears] = useState<number[]>([years[0]]);

  const toggleYear = (year: number) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  return (
    <>
      <PageMeta
        title={
          lang === "zh"
            ? "学术论文 - 中国科学技术大学 商红慧课题组"
            : "Publications - USTC · Shang Honghui Group"
        }
        description={
          lang === "zh"
            ? "中国科学技术大学商红慧课题组发表的学术论文列表"
            : "Publications of the Shang Honghui Group at USTC"
        }
        keywords={
          lang === "zh"
            ? ["学术论文", "量子算法", "科研论文"]
            : ["publications", "quantum algorithms", "research papers"]
        }
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-3">
            {lang === "zh" ? "学术论文" : "Publications"}
          </h1>
          <p className="text-base opacity-90">
            {lang === "zh"
              ? "课题组在国内外顶级期刊发表的学术成果"
              : "Academic achievements published by the group in top national and international journals"}
          </p>
        </div>
      </section>

      {/* Papers by Year */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {years.map((year) => {
            const yearPapers = papers.filter((p) => p.year === year);
            const isExpanded = expandedYears.includes(year);
            return (
              <div key={year} className="mb-4 last:mb-0 border rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleYear(year)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{year}</span>
                    <span className="text-sm font-normal text-gray-500">
                      ({yearPapers.length})
                    </span>
                  </span>
                  <FaChevronDown
                    className={`text-primary transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    size={14}
                  />
                </button>
                {isExpanded && (
                  <ul className="space-y-4 px-5 py-4 ml-4">
                    {yearPapers.map((paper) => (
                      <li key={paper.num} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm leading-relaxed">
                            <span className="font-semibold text-ink">
                              {paper.num}.
                            </span>{" "}
                            {paper.title}
                          </p>
                          <p className="text-gray-500 text-xs mt-0.5">
                            {paper.authors}
                          </p>
                          <p className="text-gray-500 text-xs italic">
                            {paper.journal}
                          </p>
                        {(paper.doi !== "#" || paper.http !== "#") && (
                          <div className="flex items-center gap-3 mt-1">
                            {paper.doi !== "#" && (
                              <a
                                href={paper.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-secondary text-xs hover:underline"
                              >
                                DOI <FaExternalLinkAlt className="ml-1" size={10} />
                              </a>
                            )}
                            {paper.http !== "#" && (
                              <a
                                href={paper.http}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-secondary text-xs hover:underline"
                              >
                                http <FaExternalLinkAlt className="ml-1" size={10} />
                              </a>
                            )}
                          </div>
                        )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
