/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, ChevronLeft, ArrowDown, 
  TrendingUp, Users, Wallet, CheckCircle2, 
  Phone, MessageCircle, HelpCircle, Store, 
  Award, Zap, Globe, BookOpen, Handshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '브랜드 소개', href: '#brand-story' },
    { name: '메뉴 소개', href: '#menu' },
    { name: '가맹 안내', href: '#process' },
    { name: '상담 신청', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className={`flex items-center gap-2 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          <img src="/images/common/38%EA%B5%AD%EC%88%98%20%EC%97%A0%EB%B8%94%EB%9F%BC.png" alt="청년38국수 로고" className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white object-cover shadow-sm p-0.5" />
          <span className="text-2xl font-serif font-black tracking-tighter">청년38국수</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors ${isScrolled ? 'text-dark hover:text-primary' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg"
          >
            상담 신청
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-dark' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-dark text-lg font-medium border-b border-gray-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-accent text-white py-3 rounded-lg text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              상담 신청하기
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/hero/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%881.webp',
      title: '부모의 따뜻한 마음',
      sub: '청년38국수',
      desc: '3,800원의 정직한 가격, 20~30% 영업이익률의 상생 프랜차이즈'
    },
    {
      image: '/images/hero/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%882.webp',
      title: '정직한 맛, 정직한 가격',
      sub: '청년38국수',
      desc: '매일 아침 직접 우려낸 육수와 신선한 생면의 조화'
    },
    {
      image: '/images/hero/%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%883.webp',
      title: '상생하는 파트너십',
      sub: '함께 성장하는 청년38국수',
      desc: '본사 노마진 정책으로 점주님의 수익을 최우선으로 생각합니다'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 
        ===== 영상 배너로 교체하는 방법 =====
        현재: 이미지 슬라이더
        교체 시: 아래 주석 해제하고 슬라이더 코드 삭제

        <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
          <source src="./videos/hero-main.mp4" type="video/mp4">
        </video>
        ===========================================
      */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Hero Slide" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-secondary font-serif text-xl md:text-2xl mb-4"
        >
          {slides[currentSlide].sub}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white text-5xl md:text-8xl font-black mb-6 leading-tight"
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-white/80 text-lg md:text-2xl max-w-2xl mb-10 font-light"
        >
          {slides[currentSlide].desc}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="bg-accent text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 hover:shadow-accent/50 transition-all shadow-xl">
            가맹 상담 신청
          </a>
          <a href="#brand-story" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
            브랜드 소개 보기
          </a>
        </motion.div>
      </div>

      {/* Slide Controls */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors">
        <ChevronLeft size={48} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors">
        <ChevronRight size={48} />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === i ? 'bg-secondary w-8' : 'bg-white/30'}`}
          />
        ))}
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 right-10 text-white/50 hidden md:block"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

const Metrics = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [3800, 30, 2, 4700];
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      const duration = 2000;
      const steps = 50;
      const interval = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounts(targets.map(target => Math.floor((target / steps) * currentStep)));
        if (currentStep >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [hasStarted]);

  const metrics = [
    { label: '시그니처 메뉴 최저가', value: counts[0].toLocaleString() + '원', icon: <Award className="mb-2" /> },
    { label: '예상 영업이익률', value: counts[1] + '%', icon: <TrendingUp className="mb-2" /> },
    { label: '최소 운영 인력', value: counts[2] + '인', icon: <Users className="mb-2" /> },
    { label: '총 초기 투자비용', value: counts[3].toLocaleString() + '만원~', icon: <Wallet className="mb-2" /> },
  ];

  return (
    <section ref={sectionRef} className="bg-primary py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center text-white"
          >
            <div className="flex justify-center text-secondary">{m.icon}</div>
            <div className="text-3xl md:text-5xl font-serif font-black mb-2">{m.value}</div>
            <div className="text-white/70 text-sm md:text-base">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BrandStory = () => {
  return (
    <section id="brand-story" className="py-24 px-4 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 relative w-full"
        >
          {/* 신문 배경 효과 */}
          <div className="absolute -inset-2 bg-[#f4f1ea] border border-dark/20 shadow-xl rotate-[1deg] z-0" />
          <div className="absolute -inset-2 bg-white border border-dark/10 shadow-sm -rotate-[2deg] z-0" />
          
          {/* 신문 콘텐츠 영역 */}
          <div className="relative z-10 bg-[#fbf9f6] p-4 border border-dark/10 shadow-[2px_2px_10px_rgba(0,0,0,0.1)] h-full flex flex-col">
            <div className="border-b-2 border-dark/20 pb-2 mb-4 text-center">
              <span className="font-serif font-black text-dark/70 text-sm md:text-base tracking-widest">YOUTH 38 NOODLE DAILY</span>
            </div>
            
            <img 
              src="/images/common/%EC%9C%A1%EC%88%98%EC%BB%A8%EC%85%892.webp" 
              alt="Brand Story" 
              className="w-full flex-1 object-cover grayscale sepia-[.3] contrast-125 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            
            <div className="mt-4 border-t border-dark/10 pt-2 text-right text-xs md:text-sm text-dark/60 font-serif italic">
              1988년부터 변함없는 정성, 매일 아침 직접 우려내는 육수
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 text-primary/10 font-display text-9xl font-black hidden lg:block pointer-events-none z-0">
            청년38국수
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 flex flex-col justify-center py-8"
        >
          <div className="border-l-4 border-secondary pl-8">
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-tight">
              부모의 마음을<br />한 그릇에
            </h2>
            <div className="space-y-6 text-lg text-dark/80 leading-relaxed">
              <p>
                청년38국수는 단순한 저가 국수가 아닙니다.<br />
                바쁜 현대인의 식탁에서 점점 사라져 가는<br />
                <strong>'어머니의 국수 한 그릇'</strong>을 소환하여,
              </p>
              <p>
                언제 어디서나 건강하고 정직한 한 끼를<br />
                제공하겠다는 철학에서 출발하였습니다.
              </p>
              <p>
                패스트푸드의 편의성과 한식의 정성을<br />
                동시에 담아낸 브랜드, 청년38국수입니다.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
              {['🌿 자연', '🏡 따뜻함', '💚 건강', '⏳ 정성'].map(tag => (
                <span key={tag} className="text-xl font-serif text-primary font-bold">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('국수');

  const menuData: { [key: string]: { name: string; price: string; img: string; desc?: string }[] } = {
    '국수': [
      { name: '[대표] 38국수', price: '3,800원', img: '/images/menu/[따뜻한국수]38국수.webp', desc: '멸치 육수 기반, 맑고 구수한 국물' },
      { name: '김치국수', price: '5,800원', img: '/images/menu/[따뜻한국수]김치국수.webp', desc: '새콤한 김치가 어우러진 시원한 맛' },
      { name: '어묵국수', price: '5,800원', img: '/images/menu/[따뜻한국수]어묵국수.webp', desc: '푸짐한 어묵이 들어간 든든한 국수' },
      { name: '얼큰어묵국수', price: '6,800원', img: 'https://picsum.photos/seed/spicy-noodle/600/400', desc: '매콤한 육수와 어묵의 환상 조합' },
      { name: '비빔국수', price: '6,800원', img: '/images/menu/[따뜻한국수]비빔국수.webp', desc: '과일소스의 새콤달콤한 비빔면' },
      { name: '얼큰국수', price: '5,800원', img: '/images/menu/[따뜻한국수]얼큰국수.webp', desc: '속이 확 풀리는 얼큰한 육수' },
      { name: '소고기국수', price: '7,800원', img: 'https://picsum.photos/seed/beef-noodle/600/400', desc: '소고기 고명이 듬뿍 올라간 진한 맛' },
      { name: '얼큰고기국수', price: '7,800원', img: 'https://picsum.photos/seed/spicy-beef-noodle/600/400', desc: '매콤한 육수에 소고기를 더한 보양식' },
    ],
    '칼국수': [
      { name: '칼국수', price: '5,800원', img: 'https://picsum.photos/seed/kalguksu/600/400', desc: '정통 방식으로 끓여낸 담백한 칼국수' },
      { name: '얼큰칼국수', price: '6,800원', img: 'https://picsum.photos/seed/spicy-kalguksu/600/400', desc: '칼칼한 국물이 일품인 얼큰 칼국수' },
      { name: '들깨칼국수', price: '7,800원', img: 'https://picsum.photos/seed/perilla-noodle/600/400', desc: '고소한 들깨가 듬뿍 들어간 건강식' },
      { name: '낙지볶음칼국수', price: '8,800원', img: 'https://picsum.photos/seed/octopus-noodle/600/400', desc: '매콤한 낙지볶음과 칼국수의 만남' },
      { name: '우육칼국수', price: '7,800원', img: 'https://picsum.photos/seed/beef-kalguksu/600/400', desc: '진한 소고기 육수의 우육 칼국수' },
      { name: '칼국수세트', price: '7,800원', img: 'https://picsum.photos/seed/noodle-set/600/400', desc: '칼국수와 곁들임 메뉴의 알찬 구성' },
      { name: '얼큰칼국수세트', price: '8,800원', img: 'https://picsum.photos/seed/spicy-set/600/400', desc: '얼큰 칼국수와 곁들임 메뉴 세트' },
    ],
    '스페셜': [
      { name: '김치찌개돈까스', price: '7,800원', img: 'https://picsum.photos/seed/pork-cutlet-stew/600/400', desc: '얼큰한 김치찌개와 바삭한 돈까스' },
    ],
    '덮밥/곁들임': [
      { name: '매콤제육덮밥', price: '4,800원', img: '/images/menu/[미니덮밥]매콤제육덮밥.webp', desc: '불맛 나는 매콤한 제육 덮밥' },
      { name: '파닭마요덮밥', price: '4,800원', img: '/images/menu/[미니덮밥]파닭마요덮밥.webp', desc: '고소한 마요네즈와 파닭의 조화' },
      { name: '계란후라이밥', price: '2,800원', img: '/images/menu/[곁들임]간장계란밥.webp', desc: '간단하지만 든든한 계란밥' },
      { name: '아침愛국밥', price: '3,800원', img: 'https://picsum.photos/seed/korean-soup-rice/600/400', desc: '아침을 여는 따뜻한 국밥 한 그릇' },
      { name: '미니치즈돈까스', price: '4,800원', img: '/images/menu/[곁들임]미니치즈돈까스.webp', desc: '치즈가 듬뿍 들어간 미니 돈까스' },
      { name: '미니돈까스', price: '3,800원', img: '/images/menu/[곁들임]미니돈까스.webp', desc: '바삭하게 튀겨낸 미니 돈까스' },
      { name: '직화불고기', price: '3,800원', img: '/images/menu/[곁들임]직화불고기.webp', desc: '직화로 구워 불향 가득한 불고기' },
      { name: '튀김만두', price: '3,800원', img: 'https://picsum.photos/seed/fried-dumpling/600/400', desc: '겉바속촉 고소한 튀김만두' },
      { name: '팝콘군만두', price: '3,800원', img: 'https://picsum.photos/seed/popcorn-dumpling/600/400', desc: '한입에 쏙 들어가는 팝콘 만두' },
      { name: '꼬맹이물만두', price: '3,800원', img: '/images/menu/[곁들임]물만두.webp', desc: '부드럽고 촉촉한 물만두' },
    ],
    '여름메뉴': [
      { name: '콩국수', price: '7,800원', img: '/images/menu/[시원한국수]콩국수.webp', desc: '직접 갈아 만든 진한 콩물의 콩국수' },
      { name: '열무국수', price: '7,800원', img: '/images/menu/[시원한국수]열무국수.webp', desc: '아삭한 열무김치와 시원한 육수' },
      { name: '냉국수', price: '6,800원', img: '/images/menu/[시원한국수]냉국수.webp', desc: '살얼음 동동 띄운 시원한 냉국수' },
      { name: '물냉면', price: '6,800원', img: '/images/menu/[시원한국수]물냉면.webp', desc: '가슴속까지 시원해지는 물냉면' },
      { name: '비빔냉면', price: '7,800원', img: '/images/menu/[시원한국수]비빔냉면.webp', desc: '매콤달콤한 양념의 비빔냉면' },
      { name: '메밀싹냉국수', price: '7,800원', img: 'https://picsum.photos/seed/buckwheat-noodle/600/400', desc: '건강한 메밀싹이 올라간 냉국수' },
    ]
  };

  const categories = Object.keys(menuData);

  return (
    <section id="menu" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">전체 메뉴</h2>
          <div className="woodcut-line max-w-xs mx-auto mb-4" />
          <p className="text-dark/60">매일 숙성한 생면 — 냉동·건조 없는 신선한 맛</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-bg text-dark/60 hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {menuData[activeCategory].map((menu, i) => (
              <motion.div 
                layout
                key={menu.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="bg-bg rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="h-48 overflow-hidden relative">
                  {menu.name.includes('[대표]') && (
                    <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                      BEST
                    </div>
                  )}
                  <img 
                    src={menu.img} 
                    alt={menu.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold">{menu.name}</h3>
                    <span className="text-accent font-bold">{menu.price}</span>
                  </div>
                  <p className="text-sm text-dark/60">{menu.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 bg-bg/50 p-6 rounded-2xl text-center border border-primary/10">
          <p className="text-primary font-bold">※ 모든 메뉴는 신선한 식재료로 정성을 다해 준비합니다.</p>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: '상담 신청', desc: '온라인 또는 카카오톡 채널', icon: '01' },
    { title: '상권 분석', desc: '본사 무료 상권 분석 1회 제공', icon: '02' },
    { title: '가맹 계약', desc: '5년 계약 / 본사 보증금 없음', icon: '03' },
    { title: '인테리어 공사', desc: '본사 디자인 가이드라인 적용', icon: '04' },
    { title: '교육 이수', desc: '점주 + 직원 기초 교육 (2주)', icon: '05' },
    { title: '개점!', desc: '본사 개점 지원 동행', icon: '06' },
  ];

  return (
    <section id="process" className="py-24 px-4 bg-[#EED9C4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">가맹 프로세스</h2>
          <p className="text-dark/60">체계적인 시스템으로 성공적인 창업을 돕습니다</p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0 border-t-2 border-dashed border-primary/30 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 shadow-xl border-4 border-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-dark/60 leading-tight">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Finance = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">투자비용 & 수익 구조</h2>
          <p className="text-dark/60">투명한 공개로 신뢰를 더합니다 (20평 기준)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Investment Table */}
          <div className="bg-bg p-8 md:p-12 rounded-3xl shadow-inner border border-primary/10">
            <h3 className="text-2xl font-serif font-bold mb-8 text-primary">초기 투자비용</h3>
            <div className="space-y-4">
              {[
                ['가맹비 (브랜드 사용권)', '500만원'],
                ['교육비', '200만원'],
                ['인테리어 공사비', '2,500~3,500만원'],
                ['주방 설비 및 집기', '1,000~1,500만원'],
                ['간판 및 사인물', '300~500만원'],
                ['초도 물품비', '200~300만원'],
                ['본사 보증금', '없음 ✓'],
              ].map(([item, price], i) => (
                <div key={i} className="flex justify-between items-center border-b border-primary/10 pb-4">
                  <span className="text-dark/80">{item}</span>
                  <span className="font-bold">{price}</span>
                </div>
              ))}
              <div className="pt-6 flex justify-between items-end">
                <span className="text-xl font-serif font-bold">합계 예상</span>
                <div className="text-right">
                  <div className="text-3xl font-black text-accent">약 4,700~6,500만원</div>
                  <div className="text-xs text-dark/40">(임차 보증금 별도)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profit Visualization */}
          <div className="space-y-10">
            <div className="bg-dark text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-serif font-bold mb-8">월 수익 구조 예시 <span className="text-sm font-sans font-normal text-white/50">(매출 2,000만원 기준)</span></h3>
              
              <div className="space-y-6">
                {[
                  { label: '재료비 (30%)', value: '600만원', color: 'bg-secondary' },
                  { label: '인건비 (23%)', value: '460만원', color: 'bg-primary' },
                  { label: '임차료 (12%)', value: '240만원', color: 'bg-primary/60' },
                  { label: '로열티+광고 (4%)', value: '80만원', color: 'bg-primary/40' },
                  { label: '기타 운영비 (6%)', value: '120만원', color: 'bg-primary/20' },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.label.match(/\((\d+)%\)/)?.[1] + '%' }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
                
                <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
                  <div className="text-2xl font-serif font-bold text-secondary">영업이익 (25%)</div>
                  <div className="text-4xl font-black text-white">500만원</div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border-2 border-accent/20 p-6 rounded-2xl flex items-center gap-4">
              <Zap className="text-accent shrink-0" size={32} />
              <div>
                <div className="font-bold text-accent text-lg">💡 본사 노마진 정책</div>
                <div className="text-dark/70 text-sm">식재료 공급에서 본사는 별도의 마진을 취하지 않습니다.</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                ['로열티', '3%'],
                ['광고분담금', '1%'],
                ['POS 비용', '3만원'],
              ].map(([label, val], i) => (
                <div key={i} className="bg-bg p-4 rounded-xl text-center">
                  <div className="text-xs text-dark/50 mb-1">{label}</div>
                  <div className="font-bold text-primary">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Support = () => {
  const items = [
    { title: '🏪 개점 전 지원', desc: '상권분석 · 인테리어 가이드 · 주방 배치 컨설팅', icon: <Store /> },
    { title: '👨💼 전담 슈퍼바이저', desc: '권역별 1명 배정 · 월 2회 정기 방문', icon: <Users /> },
    { title: '📱 통합 운영 시스템', desc: 'POS + 발주 + 정산 통합 · 월 3만원', icon: <Globe /> },
    { title: '📣 마케팅 지원', desc: 'SNS 광고 · 시즌 메뉴 · 배달 플랫폼 입점 지원', icon: <Zap /> },
    { title: '📚 교육 프로그램', desc: '2주 기초교육 · 온라인 플랫폼 지속 학습', icon: <BookOpen /> },
    { title: '🤝 상생 지원 제도', desc: '청년 창업 가맹비 20% 감면 · 재계약 가맹비 50% 감면', icon: <Handshake /> },
  ];

  return (
    <section className="py-24 px-4 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">본사 지원 사항</h2>
          <p className="text-dark/60">점주님의 성공이 곧 브랜드의 성공입니다</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: '#835A3C', color: '#FFFFFF', y: -5 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
            >
              <div className="text-primary group-hover:text-secondary mb-6 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-dark/60 group-hover:text-white/70 transition-colors leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://picsum.photos/seed/korean-restaurant-exterior/800/600',
    'https://picsum.photos/seed/noodle-shop-interior/600/800',
    'https://picsum.photos/seed/kitchen-cooking/800/800',
    'https://picsum.photos/seed/noodle-close-up/600/600',
    'https://picsum.photos/seed/people-eating-noodle/800/1000',
    'https://picsum.photos/seed/takeout-food/1000/800',
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-2">매장 갤러리</h2>
          <p className="text-primary font-bold">청년38국수 다산점 — 직영 1호점</p>
        </div>

        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Store ${i}`} 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: '외식업 경험이 없어도 창업이 가능한가요?', a: '네, 전혀 문제없습니다. 본사에서 2주간 체계적인 교육을 제공하며, 외식업 경력 없이도 충분히 운영 가능한 시스템으로 설계되어 있습니다.' },
    { q: '초기 투자비용 외에 본사 보증금이 있나요?', a: '청년38국수는 상생 정책의 일환으로 본사 보증금이 없습니다. 초기 부담을 최소화하여 가맹점주의 수익성을 최우선으로 합니다.' },
    { q: '로열티는 얼마인가요?', a: '매출의 3%(로열티) + 1%(광고분담금) = 총 4%입니다. 업계 최저 수준으로 설계되어 있습니다.' },
    { q: '혼자서도 운영이 가능한가요?', a: '소형 가맹점(키오스크형)의 경우 1~2인 운영이 가능합니다. 일반 가맹점은 2~3명(점주 포함) 운영을 권장합니다.' },
    { q: '식재료는 반드시 본사에서 구매해야 하나요?', a: '생면, 육수 베이스 등 핵심 원재료는 본사 지정 공급을 따릅니다. 단, 본사는 식재료 공급에서 별도 마진을 취하지 않는 노마진 정책을 운영합니다.' },
    { q: '가맹 계약 기간과 갱신 조건은 어떻게 되나요?', a: '기본 계약 기간은 5년이며, 5년 성실 운영 후 재계약 시 가맹비 50%를 감면해 드립니다.' },
  ];

  return (
    <section className="py-24 px-4 bg-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">자주 묻는 질문</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronRight className={`transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-dark/70 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', area: '', agree: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    setIsSubmitted(true);
    // TODO: 실제 서버 연동 로직
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/seed/korean-restaurant-blur/1920/1080" className="w-full h-full object-cover opacity-20" alt="Background" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">지금 바로 시작하세요</h2>
          <p className="text-white/80 text-xl">청년38국수와 함께하는 따뜻한 창업 — 무료 상담부터 시작합니다</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kakao Card */}
          <motion.a 
            href="https://pf.kakao.com/청년38국수채널" // TODO: 실제 채널 URL로 교체
            target="_blank"
            whileHover={{ scale: 1.02 }}
            className="bg-[#FEE500] text-dark p-10 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl"
          >
            <div className="w-24 h-24 bg-dark rounded-full flex items-center justify-center mb-6">
              <MessageCircle size={48} className="text-[#FEE500]" fill="currentColor" />
            </div>
            <h3 className="text-3xl font-black mb-4">카카오톡 바로 상담</h3>
            <p className="text-dark/60 mb-8">평일 10:00 ~ 18:00 실시간 답변</p>
            <div className="bg-dark text-white px-10 py-4 rounded-full font-bold text-lg">
              상담 시작하기
            </div>
          </motion.a>

          {/* Form Card */}
          <div className="bg-white text-dark p-10 rounded-3xl shadow-2xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle2 size={80} className="text-secondary mb-6" />
                <h3 className="text-3xl font-serif font-black mb-4">접수되었습니다</h3>
                <p className="text-dark/60">담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-8 text-primary font-bold underline">다시 신청하기</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">이름 *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="성함을 입력해주세요"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">연락처 *</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="숫자만 입력해주세요"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value.replace(/[^0-9]/g, '')})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">관심 지역 *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="예: 서울 강남, 경기 수원 등"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
                    value={formData.area}
                    onChange={e => setFormData({...formData, area: e.target.value})}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="agree" 
                    className="w-5 h-5 accent-primary"
                    checked={formData.agree}
                    onChange={e => setFormData({...formData, agree: e.target.checked})}
                  />
                  <label htmlFor="agree" className="text-sm text-dark/60">개인정보 수집 및 이용에 동의합니다 (필수)</label>
                </div>
                <button type="submit" className="w-full bg-accent text-white py-5 rounded-xl font-black text-xl shadow-lg hover:bg-opacity-90 transition-all">
                  상담 신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/common/38%EA%B5%AD%EC%88%98%20%EC%97%A0%EB%B8%94%EB%9F%BC.png" alt="청년38국수 로고" className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white object-cover shadow-lg p-1" />
              <span className="text-3xl font-serif font-black">청년38국수</span>
            </div>
            <p className="text-white/50 leading-relaxed">
              부모의 따뜻한 마음을 한 그릇에 담았습니다.<br />
              정직한 맛과 상생의 가치를 실현하는<br />
              대한민국 국수 브랜드의 새로운 기준입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-secondary">빠른 링크</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#brand-story" className="hover:text-white">브랜드 소개</a></li>
                <li><a href="#menu" className="hover:text-white">메뉴 안내</a></li>
                <li><a href="#process" className="hover:text-white">가맹 프로세스</a></li>
                <li><a href="#contact" className="hover:text-white">상담 신청</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-secondary">고객 지원</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white">이용약관</a></li>
                <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
                <li><a href="#" className="hover:text-white">가맹문의 FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-secondary">기업 정보</h4>
            <div className="text-white/50 text-sm space-y-2">
              <p>상호: (주)청년38국수 | 대표: [대표자명] {/* TODO: 실제 정보로 교체 */}</p>
              <p>주소: [본사 주소] {/* TODO: 실제 정보로 교체 */}</p>
              <p>사업자번호: [번호] | 가맹문의: [전화번호] {/* TODO: 실제 정보로 교체 */}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          © 2026 청년38국수. 모든 권리 보유.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="hanji-texture">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <BrandStory />
        <MenuSection />
        <Process />
        <Finance />
        <Support />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Mobile Bottom CTA */}
      <div className="mobile-cta-bar">
        <a href="#contact" className="flex items-center justify-center gap-2">
          가맹 상담 신청하기 <ChevronRight size={20} />
        </a>
      </div>
    </div>
  );
}
