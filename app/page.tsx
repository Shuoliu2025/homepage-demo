import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* 简化的导航栏 */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-xl z-50 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="font-semibold text-lg text-white">刘硕</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors text-sm">技能</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors text-sm">经历</a>
              <a href="#achievements" className="text-gray-300 hover:text-white transition-colors text-sm">成就</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">联系</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 - 参考图片风格 */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  刘硕
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-300 mb-6">
                  汽车售后仓库管理专家 & AI学习者
                </h2>
                <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                  <p>10年+汽车售后仓库管理经验，专注于仓库管理及规划。</p>
                  <p>担任大型车企售后仓库管理人员，目前正专注于AI学习，致力于推动AI与物流技术融合发展。</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  联系我
                </a>
                <a href="https://github.com/Shuoliu2025" target="_blank" rel="noopener noreferrer"
                   className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  GitHub
                </a>
              </div>
            </div>

            {/* 右侧头像区域 */}
            <div className="hidden lg:flex justify-center relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                <div className="w-full h-full rounded-full bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 flex items-center justify-center overflow-hidden">
                  {/* 实际头像 */}
                  <Image
                    src="/avatar.jpg"
                    alt="刘硕头像"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能专长 */}
      <section id="skills" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            技能专长
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 仓库管理 */}
            <div className="group bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">仓库管理</h3>
              <p className="text-gray-300 leading-relaxed">
                精通仓库运作的全流程，有大型仓库管理经验。精通仓库库存管理，熟悉PDC分拨RDC流程，有过国内配件分拨海外仓库的经验。
              </p>
            </div>

            {/* AI技术 */}
            <div className="group bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI技术</h3>
              <p className="text-gray-300 leading-relaxed">
                深入研究AI与技术融合，专注Claude等前沿AI技术的应用与教学。
              </p>
            </div>

            {/* 团队管理 */}
            <div className="group bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">团队管理</h3>
              <p className="text-gray-300 leading-relaxed">
                丰富的团队管理经验，善于规划技术方向和推动团队创新。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 工作经历 */}
      <section id="experience" className="py-20 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            工作经历
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">上汽乘用车售后仓库项目</h3>
              <p className="text-gray-300 leading-relaxed">参与上汽乘用车售后仓库管理工作，负责仓库运营规划和管理，优化物流流程。</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">宝马上海RDC项目</h3>
              <p className="text-gray-300 leading-relaxed">参与宝马上海区域配送中心项目，负责配送中心的运营管理和系统优化。</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">上汽通用售后PDC项目</h3>
              <p className="text-gray-300 leading-relaxed">参与上汽通用售后配件分拨中心项目，负责分拨中心的规划和管理。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 项目成就 */}
      <section id="achievements" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            项目成就
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">上汽乘用车售后成都RDC开库</h3>
              <p className="text-gray-300 leading-relaxed">成功完成上汽乘用车售后成都区域配送中心的开库项目，确保运营顺利启动。</p>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">上汽通用售后PDC搬库</h3>
              <p className="text-gray-300 leading-relaxed">成功完成上汽通用售后配件分拨中心的搬库项目，实现零中断迁移。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            联系我
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">微信</h3>
              <p className="text-gray-300 font-mono">TooLiushuo</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gray-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🐙</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
              <a href="https://github.com/Shuoliu2025" target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-300 font-mono transition-colors">
                Shuoliu2025
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 刘硕. 专注仓库管理与AI技术融合
          </p>
        </div>
      </footer>
    </div>
  );
}
