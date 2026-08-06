import { PageMeta } from "@/components/common/PageMeta";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useLanguage } from "@/i18n";

export default function Contact() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `[课题组留言] ${formData.name}`;
    const body =
      `姓名：${formData.name}\n` +
      `邮箱：${formData.email}\n` +
      `留言内容：\n${formData.message}`;
    window.location.href = `mailto:qyuxin@mail.ustc.edu.cn?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <>
      <PageMeta
        title={
          lang === "zh"
            ? "联系我们 - 中国科学技术大学 商红慧课题组"
            : "Contact - USTC · Shang Honghui Group"
        }
        description={
          lang === "zh"
            ? "联系中国科学技术大学商红慧课题组，获取招生信息和学术合作机会"
            : "Contact the Shang Honghui Group at USTC for recruitment information and academic collaboration opportunities"
        }
        keywords={
          lang === "zh"
            ? ["联系我们", "招生信息", "学术合作"]
            : ["contact", "recruitment", "academic collaboration"]
        }
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-3">
            {lang === "zh" ? "联系我们" : "Contact Us"}
          </h1>
          <p className="text-base opacity-90">
            {lang === "zh"
              ? "欢迎咨询招生、合作等相关事宜"
              : "Welcome to inquire about recruitment, collaboration, and related matters"}
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-bold text-ink mb-5">
                {lang === "zh" ? "联系方式" : "Contact Information"}
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-primary mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">
                      {lang === "zh" ? "邮箱" : "Email"}
                    </h3>
                    <p className="text-gray-600 text-sm">shh@ustc.edu.cn</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-primary mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">
                      {lang === "zh" ? "电话" : "Phone"}
                    </h3>
                    <p className="text-gray-600 text-sm">+86-0551-63607374</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1" size={18} />
                  <div>
                    <h3 className="font-semibold text-ink mb-1">
                      {lang === "zh" ? "地址" : "Address"}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {lang === "zh"
                        ? "中国科学技术大学合肥微尺度物质科学国家研究中心"
                        : "Hefei National Research Center for Physical Sciences at the Microscale, USTC"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Recruitment Info */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-ink mb-5">
                  {lang === "zh" ? "招生招聘" : "Recruitment"}
                </h2>
                <div className="bg-gray-50 rounded p-5">
                  <h3 className="font-semibold text-ink mb-3">
                    {lang === "zh" ? "研究生招生" : "Graduate Students"}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-5">
                    <li>{lang === "zh" ? "• 招收博士研究生" : "• Recruiting Ph.D. students"}</li>
                    <li>{lang === "zh" ? "• 招收硕士研究生" : "• Recruiting master's students"}</li>
                    <li>
                      {lang === "zh"
                        ? "• 要求：扎实的数学和物理基础，编程能力良好"
                        : "• Requirements: solid background in mathematics and physics, good programming skills"}
                    </li>
                    <li>
                      {lang === "zh"
                        ? "• 申请方式：发送简历和研究计划至邮箱"
                        : "• How to apply: send your CV and research plan to our email"}
                    </li>
                  </ul>

                  <h3 className="font-semibold text-ink mb-3">
                    {lang === "zh" ? "博士后招聘" : "Postdoctoral Researchers"}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      {lang === "zh"
                        ? "• 研究方向：量子计算、AI for Science"
                        : "• Research areas: quantum computing, AI for Science"}
                    </li>
                    <li>
                      {lang === "zh"
                        ? "• 要求：博士学历，有相关研究经验"
                        : "• Requirements: Ph.D. degree and relevant research experience"}
                    </li>
                    <li>
                      {lang === "zh"
                        ? "• 待遇：具有竞争力的薪酬和科研条件"
                        : "• Benefits: competitive salary and research conditions"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-bold text-ink mb-5">
                {lang === "zh" ? "留言咨询" : "Leave a Message"}
              </h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded p-5 text-center">
                  <FaCheckCircle className="text-success mx-auto mb-3" size={40} />
                  <h3 className="text-base font-semibold text-ink mb-2">
                    {lang === "zh" ? "提交成功" : "Submitted Successfully"}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {lang === "zh" ? "我们会尽快与您联系" : "We will contact you as soon as possible"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      {lang === "zh" ? "姓名" : "Name"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={lang === "zh" ? "请输入您的姓名" : "Please enter your name"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      {lang === "zh" ? "邮箱" : "Email"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={lang === "zh" ? "请输入您的邮箱" : "Please enter your email"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      {lang === "zh" ? "留言内容" : "Message"}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder={
                        lang === "zh"
                          ? "请描述您的咨询内容..."
                          : "Please describe your inquiry..."
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-5 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-colors"
                  >
                    {lang === "zh" ? "提交留言" : "Submit Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
