/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Github, 
  Linkedin, 
  ArrowRight,
  Code2,
  Layers,
  Cpu,
  Globe,
  Smartphone,
  Database,
  Palette,
  Instagram,
  Twitter
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  coverImage: string;
  detailImages: string[];
  icon: React.ReactNode;
  sections?: ProjectSection[];
}

interface ProjectSection {
  title: string;
  content: string;
}

// --- Mock Data ---
const SKILLS = [
  "UIUX设计", "figma", "Codex", "Claude Code", "Stitch", "PS", "AI"
];

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "智慧国土平台",
    category: "WEB设计",
    description: "通过重构业务框架、添加重大任务模块以及优化交互体验，帮助客户实现办公管理数字化。",
    tags: [],
    coverImage: "/input_file_0.png",
    detailImages: [
      "/input_file_0.png",
      "/input_file_1.png",
      "/input_file_2.png",
      "/input_file_3.png",
      "/input_file_4.png"
    ],
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 2,
    title: "智能核验体验设计",
    category: "WEB设计",
    description: "为了帮助政务人员提升项目审查效率和减少重复性人工劳动，构建AI辅助审查模块。",
    tags: [],
    coverImage: "/input_file_1.png",
    detailImages: ["/input_file_1.png"],
    icon: <Cpu className="w-5 h-5" />
  },
  {
    id: 3,
    title: "防洪排涝指挥调度系统",
    category: "WEB设计",
    description: "帮助政府部门科学、迅速指挥调度，为安全度汛提供支撑。",
    tags: [],
    coverImage: "/input_file_2.png",
    detailImages: ["/input_file_2.png"],
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    id: 4,
    title: "唯品会直播间购物优化",
    category: "APP设计",
    description: "通过优化直播间商品触达效率及优惠感知，整合交易下单链路，提高整体订单转化率。",
    tags: [],
    coverImage: "https://picsum.photos/seed/vip-cover/800/800",
    detailImages: Array.from({ length: 14 }, (_, i) => `https://picsum.photos/seed/vip-page-${i + 1}/1200/900`),
    icon: <Palette className="w-5 h-5" />
  },
  {
    id: 5,
    title: "Bloomind",
    category: "APP设计",
    description: "专为女性设计的心理疗愈应用，提供个性化的心情调节、情感陪伴和正念冥想练习，帮助用户找到内心的平静与自信。",
    tags: [],
    coverImage: "/input_file_3.png",
    detailImages: ["/input_file_3.png"],
    icon: <Layers className="w-5 h-5" />
  }
];

// --- Components ---

const Landing: React.FC<{ onEnter: () => void }> = ({ onEnter }) => (
  <motion.div 
    initial={{ y: 0 }}
    exit={{ y: '-100%' }}
    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
  >
    <div className="relative w-full max-w-2xl aspect-video flex items-center justify-center">
      {/* Images aggregating from four corners */}
      <motion.div 
        initial={{ x: -400, y: -400, rotate: -45, opacity: 0 }}
        animate={{ x: -120, y: -60, rotate: -12, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute w-64 h-80 bg-surface border border-border rounded-2xl shadow-xl overflow-hidden"
      >
        <img 
          src="/input_file_0.png" 
          alt="" 
          className="w-full h-full object-cover grayscale" 
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        initial={{ x: 400, y: -400, rotate: 45, opacity: 0 }}
        animate={{ x: 140, y: -40, rotate: 8, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute w-64 h-80 bg-surface border border-border rounded-2xl shadow-xl overflow-hidden"
      >
        <img 
          src="/input_file_1.png" 
          alt="" 
          className="w-full h-full object-cover grayscale" 
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        initial={{ x: -400, y: 400, rotate: -45, opacity: 0 }}
        animate={{ x: -100, y: 80, rotate: -5, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="absolute w-64 h-80 bg-surface border border-border rounded-2xl shadow-xl overflow-hidden"
      >
        <img 
          src="/input_file_2.png" 
          alt="" 
          className="w-full h-full object-cover grayscale" 
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        initial={{ x: 400, y: 400, rotate: 45, opacity: 0 }}
        animate={{ x: 110, y: 50, rotate: 15, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="absolute w-64 h-80 bg-surface border border-border rounded-2xl shadow-xl overflow-hidden"
      >
        <img 
          src="/input_file_3.png" 
          alt="" 
          className="w-full h-full object-cover grayscale" 
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="absolute w-80 h-[480px] bg-white border border-border rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden z-10"
      >
        <img 
          src="/input_file_4.png" 
          alt="Main Preview" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Button with weak small movement effect */}
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onEnter}
        className="relative z-20 px-10 py-4 bg-white/10 backdrop-blur-xl text-white border border-white/30 rounded-full font-display font-medium text-sm tracking-[0.2em] uppercase transition-all shadow-2xl hover:bg-white/20"
      >
        view Portfolio
      </motion.button>
    </div>
  </motion.div>
);

const ProjectCard: React.FC<{ project: Project; index: number; onClick: () => void }> = ({ project, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    onClick={onClick}
    className="break-inside-avoid mb-8 group relative bg-white border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-xl cursor-pointer"
  >
    <div className="overflow-hidden relative bg-bg">
      <img 
        src={project.coverImage} 
        alt={project.title}
        referrerPolicy="no-referrer"
        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
          {project.category}
        </span>
        <div className="text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-display font-bold tracking-tight text-text-primary">
          {project.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-sm font-light line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const ProjectDetailView: React.FC<{ onClose: () => void; initialProjectId: number }> = ({ onClose, initialProjectId }) => {
  const [activeId, setActiveId] = useState(initialProjectId);

  const scrollToProject = (id: number) => {
    const element = document.getElementById(`project-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] bg-[#F5F5F7] flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Side Nav */}
      <aside className="lg:w-72 border-r border-border p-8 flex flex-col justify-between bg-white shrink-0">
        <div className="space-y-10">
          <button 
            onClick={onClose}
            className="group flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-[10px] uppercase tracking-widest">BACK TO OVERVIEW</span>
          </button>

          <nav className="space-y-3">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/40 mb-6">PROJECTS</h2>
            {PROJECTS.map(p => (
              <button
                key={p.id}
                onClick={() => scrollToProject(p.id)}
                className={`block text-left w-full transition-all duration-300 ${
                  activeId === p.id 
                    ? 'text-accent translate-x-2 font-bold' 
                    : 'text-text-secondary/60 hover:text-text-primary hover:translate-x-1'
                }`}
              >
                <span className="text-xs tracking-tight">{p.title}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-[0.4em]">
          SCROLL TO EXPLORE
        </div>
      </aside>

      {/* Waterfall Content */}
      <div className="flex-1 overflow-y-auto scroll-smooth no-scrollbar bg-white">
        <div className="max-w-6xl mx-auto py-24 px-6 lg:px-16 space-y-40">
          {PROJECTS.map((p) => (
            <section 
              key={p.id} 
              id={`project-${p.id}`}
              className="space-y-16"
            >
              <header className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-4">
                  <span className="text-accent font-mono text-xs tracking-[0.3em]">0{p.id}</span>
                  <div className="h-px w-12 bg-accent/20" />
                  <span className="text-text-secondary font-mono text-[10px] tracking-[0.3em] uppercase">{p.category}</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-text-primary leading-[0.9]">
                  {p.title}
                </h2>
                <p className="text-lg text-text-secondary font-light leading-relaxed">
                  {p.description}
                </p>
              </header>

              {/* Masonry Layout for Project Images */}
              <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {p.detailImages.map((img, imgIdx) => (
                  <motion.div 
                    key={imgIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: imgIdx * 0.05 }}
                    className="break-inside-avoid mb-8 rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl transition-all duration-700"
                  >
                    <img 
                      src={img} 
                      alt={`${p.title} detail ${imgIdx + 1}`} 
                      className="w-full h-auto block hover:scale-[1.01] transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
          
          <footer className="py-32 text-center border-t border-border/30">
            <button 
              onClick={onClose}
              className="group flex flex-col items-center gap-6 mx-auto"
            >
              <div className="w-px h-20 bg-gradient-to-b from-accent to-transparent" />
              <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-text-secondary/40 group-hover:text-accent transition-colors">
                END OF PORTFOLIO • BACK TO TOP
              </span>
            </button>
          </footer>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isLanding, setIsLanding] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-white">
      <AnimatePresence mode="wait">
        {isLanding && (
          <Landing key="landing" onEnter={() => setIsLanding(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProjectId !== null && (
          <ProjectDetailView 
            initialProjectId={selectedProjectId} 
            onClose={() => setSelectedProjectId(null)} 
          />
        )}
      </AnimatePresence>

      <motion.main
        initial={false}
        animate={{ opacity: isLanding ? 0 : 1 }}
        className="flex flex-col lg:flex-row min-h-screen"
      >
        {/* Sidebar */}
        <aside className="lg:w-[480px] lg:fixed lg:inset-y-0 lg:left-0 p-10 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border bg-white z-10">
          <div className="space-y-16">
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={!isLanding ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-display font-bold tracking-tighter leading-none uppercase text-text-primary">
                王一珣<span className="text-accent">.</span>
              </h1>
              <p className="text-text-secondary text-xl font-light leading-relaxed max-w-xs">
                以匠心打磨数字体验，专注于卓越的性能与设计。
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={!isLanding ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-text-secondary/50">专业技能</h2>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-surface border border-border rounded-xl text-sm font-medium text-text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={!isLanding ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-text-secondary/50">联系方式</h2>
              <div className="space-y-5">
                <a href="mailto:1229290080@qq.com" className="flex items-center gap-5 group text-text-secondary hover:text-accent transition-all">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-base font-light tracking-wide">1229290080@qq.com</span>
                </a>
                <div className="flex items-center gap-5 group text-text-secondary">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-base font-light tracking-wide">微信: 18119586816</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={!isLanding ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="pt-20 lg:pt-0 flex items-center gap-8"
          >
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] font-mono text-text-secondary/20 uppercase tracking-[0.3em]">© 2026</span>
          </motion.div>
        </aside>

        {/* Main Content */}
        <div className="lg:ml-[480px] flex-1 p-8 lg:p-16 bg-bg">
          <div className="max-w-6xl mx-auto">
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {PROJECTS.map((project, idx) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={idx} 
                  onClick={() => setSelectedProjectId(project.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
