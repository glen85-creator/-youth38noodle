/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronRight, ChevronLeft, ArrowDown,
  TrendingUp, Users, Wallet, CheckCircle2,
  Phone, MessageCircle, HelpCircle, Store,
  Award, Zap, Globe, BookOpen, Handshake, FileDown,
  Heart, Sparkles, MapPin, Home, Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Proposal from './Proposal';

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
    { name: '선순환 가치', href: '#donation' },
    { name: '메뉴 소개', href: '#menu' },
    { name: '매장 모델', href: '#store-types' },
    { name: '가맹 안내', href: '#process' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className={`flex items-center gap-2 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          <img src="/images/common/38%EA%B5%AD%EC%88%98%20%EC%97%A0%EB%B8%94%EB%9F%BC.png" alt="청년38국수 로고" className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white object-cover shadow-sm p-0.5" />
          <span className="text-2xl font-serif font-black tracking-tighter">청년38국수</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
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
            href="/?view=proposal"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 font-bold px-4 py-2 rounded-full transition-all border ${isScrolled ? 'border-primary/30 text-primary hover:bg-primary/10' : 'border-white/40 text-white hover:bg-white/10'}`}
          >
            <FileDown size={16} /> 제안서
          </a>
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
              href="/?view=proposal"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-primary text-primary py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileDown size={18} /> 제안서 다운로드
            </a>
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
  const targets = [3800, 20, 2, 4700];
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
    { label: '예상 영업이익률', value: counts[1] + '~30%', icon: <TrendingUp className="mb-2" /> },
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
              src="/images/common/%EC%A0%84%EC%B2%B4%EC%83%B7.webp"
              alt="청년38국수 대표 메뉴 여섯 그릇"
              className="w-full flex-1 object-cover sepia-[.15] contrast-110"
              referrerPolicy="no-referrer"
            />

            <div className="mt-4 border-t border-dark/10 pt-2 text-right text-xs md:text-sm text-dark/60 font-serif italic">
              같은 마음으로 차려내는, 오늘의 따뜻한 한 그릇
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
                편의점 간편식과 배달 음식 사이에서,<br />
                <strong>든든한 한 끼</strong>를 챙기지 못하는 청년들에게
                <br />
                <strong>"집에서 차려주던 따뜻한 국수 한 그릇"</strong>을
                <br />
                그대로 건네고 싶었습니다.
              </p>
              <p>
                시그니처 <strong className="text-primary">38국수 3,800원부터</strong>,
                <br />
                전 메뉴 3,800~8,800원.
                <br />
                부담 없는 가격 안에 <strong>정직한 재료</strong>와{' '}
                <strong>제대로 된 한식의 기본</strong>을 담았습니다.
              </p>
              <p>
                청년38국수는 한 끼를 파는 일이 아니라,
                <br />
                <strong>청년의 하루를 지키는 일</strong>이라 믿습니다.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                { label: '부모의 마음', desc: '따뜻한 한 끼로 청년의 하루를' },
                { label: '정직한 가격', desc: '3,800원부터, 부담 없이' },
                { label: '한식의 기본', desc: '냉동·건조 없는 생면과 육수' },
                { label: '상생의 철학', desc: '본사 노마진으로 함께' },
              ].map(({ label, desc }) => (
                <div key={label} className="border-l-2 border-secondary/60 pl-3">
                  <div className="font-serif text-lg font-bold text-primary">{label}</div>
                  <div className="text-sm text-dark/60 leading-snug">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DonationStory = () => {
  return (
    <section id="donation" className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-bg via-[#fdf6ed] to-bg">
      {/* Decorative heart trails */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-accent/5" size={120} fill="currentColor" />
        <Heart className="absolute bottom-24 right-16 text-primary/5" size={160} fill="currentColor" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-bold mb-6 border border-accent/20">
            <Sparkles size={16} /> 선순환 가치
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
            100원의 따뜻함이<br />
            <span className="text-accent">청년의 내일</span>이 됩니다
          </h2>
          <div className="woodcut-line max-w-xs mx-auto mb-6" />
          <p className="text-dark/70 text-lg max-w-2xl mx-auto leading-relaxed">
            대표메뉴 <strong className="text-primary">38국수 한 그릇마다 100원</strong>이
            청년의 교육과 커뮤니티를 위해 기부됩니다.<br />
            소비자는 맛있게 먹고, 기분 좋게 기부되는 선순환의 가치.
          </p>
        </motion.div>

        {/* Main infographic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-stretch mb-16">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center border-t-4 border-primary flex flex-col"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-3xl">🍜</span>
            </div>
            <div className="text-xs font-bold text-primary/60 tracking-widest mb-2">STEP 01</div>
            <h3 className="text-xl font-serif font-bold mb-2">소비자 한 그릇</h3>
            <p className="text-sm text-dark/60 leading-relaxed flex-1">
              고객이 <strong>38국수</strong>를 맛있게 드실 때마다
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-accent text-white rounded-3xl p-8 shadow-xl text-center relative flex flex-col md:scale-105"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-dark text-xs font-black px-4 py-1 rounded-full shadow-md">
              CORE
            </div>
            <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Heart className="text-white" size={32} fill="currentColor" />
            </div>
            <div className="text-xs font-bold text-white/70 tracking-widest mb-2">STEP 02</div>
            <div className="text-5xl font-black font-serif mb-2">+100원</div>
            <p className="text-sm text-white/80 leading-relaxed flex-1">
              매장에서 먹은 그릇 수만큼<br />
              청년 지원 기금으로 적립
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center border-t-4 border-secondary flex flex-col"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Sparkles className="text-secondary" size={28} />
            </div>
            <div className="text-xs font-bold text-secondary/70 tracking-widest mb-2">STEP 03</div>
            <h3 className="text-xl font-serif font-bold mb-2">청년의 내일로</h3>
            <p className="text-sm text-dark/60 leading-relaxed flex-1">
              <strong>교육 · 커뮤니티</strong>에 직접 전달
            </p>
          </motion.div>
        </div>

        {/* Partner cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg group flex flex-col">
            <div className="h-72 overflow-hidden relative bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <img
                src="/images/donation/%EB%A0%88%EC%9D%B8%EC%BD%94%EB%A6%AC%EC%95%84.webp"
                alt="레인코리아 기부증서"
                className="max-h-full max-w-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                교육 지원
              </div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="text-xs font-bold text-primary/60 tracking-widest mb-2">PARTNER 01</div>
              <h3 className="text-2xl font-serif font-black mb-3 text-primary">레인코리아</h3>
              <p className="text-sm text-dark/75 leading-relaxed mb-4 flex-1">
                <em className="not-italic font-bold text-primary">"교육이 바뀌면, 사회가 바뀝니다."</em>
                <br /><br />
                탈북·다문화 청년과 배움의 기회가 부족한 청소년을 위해{' '}
                <strong>글로벌 학교</strong>를 운영하는 교육 기관입니다.
                한 그릇의 기부가 한 청년의 <strong>다음 한 학기</strong>가 되어,
                더 넓은 세상으로 나아갈 발판이 됩니다.
              </p>
              <div className="border-t border-primary/10 pt-3 text-xs text-dark/50">
                기부가 닿는 곳 · 청년 교육과 배움의 기회
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg group flex flex-col">
            <div className="h-72 overflow-hidden relative bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
              <img
                src="/images/donation/%EC%B2%AD%EB%85%84%EB%AC%B8%EA%B0%84%20%ED%9B%84%EC%9B%90%EC%A6%9D%EC%84%9C.webp"
                alt="청년문간 후원증서"
                className="max-h-full max-w-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                커뮤니티 지원
              </div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="text-xs font-bold text-secondary/70 tracking-widest mb-2">PARTNER 02</div>
              <h3 className="text-2xl font-serif font-black mb-3 text-secondary">청년문간</h3>
              <p className="text-sm text-dark/75 leading-relaxed mb-4 flex-1">
                <em className="not-italic font-bold text-secondary">"한 끼가 누군가에게는 하루를 지키는 힘이 됩니다."</em>
                <br /><br />
                <strong>3,000원 김치찌개</strong>로 주머니 사정이 어려운 청년과
                지역 이웃에게 따뜻한 식사를 건네는 사회적 식당입니다.
                청년38국수의 기부는 이곳에서{' '}
                <strong>오늘의 한 끼</strong>가 되어, 누군가의 내일을 든든하게 받쳐 줍니다.
              </p>
              <div className="border-t border-secondary/10 pt-3 text-xs text-dark/50">
                기부가 닿는 곳 · 청년 식사 지원과 커뮤니티
              </div>
            </div>
          </div>
        </motion.div>

        {/* Press article — 청년발전기금 전달식 (한경매거진&북 2025.07.16) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg border border-primary/15 mb-10 overflow-hidden"
        >
          {/* Newspaper header strip */}
          <div className="bg-dark text-white px-6 md:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-lg">📰</div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-secondary">PRESS · 언론 보도</div>
                <div className="text-sm font-bold">한경매거진&북 <span className="text-white/50 font-normal">· 2025.07.16</span></div>
              </div>
            </div>
            <a
              href="https://magazine.hankyung.com/money/article/202507161980c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-secondary hover:text-white transition-colors"
            >
              원문 기사 보기 ↗
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Ceremony photo */}
            <figure className="lg:col-span-2 bg-dark/5 relative">
              <img
                src="/images/press/youth-fund-ceremony.webp"
                alt="청년38국수 청년발전기금 전달식 기념사진 — 청년문간 이문수 신부, HBS 이구승 CEO, 청년38국수 남지훈 CMO, 레인코리아 송인창 소장 등"
                className="w-full h-full object-cover min-h-[280px] lg:min-h-[420px]"
                loading="lazy"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/85 to-transparent text-white text-xs px-4 py-3 leading-snug">
                2025.06.27 청년문간 슬로우점 · 청년발전기금 전달식 기념촬영
              </figcaption>
            </figure>

            {/* Article body */}
            <div className="lg:col-span-3 p-6 md:p-10">
              <h4 className="text-xl md:text-2xl font-serif font-black mb-4 leading-snug text-dark">
                "청년38국수, 청년들의 자립과 삶의 질 향상 위한 <br className="hidden md:block" />
                <span className="text-accent">청년발전기금 전달식</span> 개최"
              </h4>

              <div className="border-l-4 border-secondary pl-5 mb-5 text-dark/75 leading-relaxed text-[15px]">
                2025년 6월 27일, 서울 혜화동 <strong>청년문간 슬로우점</strong>에서 청년발전기금 전달식이 열렸습니다.
                한 그릇당 적립된 100원 기금이 <strong>청년문간사회적협동조합</strong>과 <strong>레인코리아</strong> 두 기관에 공식 전달됐습니다.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                <div className="bg-bg/50 rounded-2xl p-4 border border-primary/10">
                  <div className="text-[10px] font-black tracking-widest text-primary/70 mb-2">전달식 참석</div>
                  <ul className="text-[13px] text-dark/80 space-y-1 leading-relaxed">
                    <li>▲ 청년문간 <strong>이문수 가브리엘 신부</strong></li>
                    <li>▲ HBS <strong>이구승 CEO</strong></li>
                    <li>▲ 청년38국수 <strong>남지훈 CMO</strong></li>
                    <li>▲ 레인코리아 <strong>송인창 소장</strong></li>
                  </ul>
                </div>
                <div className="bg-accent/5 rounded-2xl p-4 border border-accent/15 flex flex-col justify-center">
                  <div className="text-[10px] font-black tracking-widest text-accent/80 mb-2">현장에 걸린 메시지</div>
                  <blockquote className="font-serif text-base md:text-lg font-bold text-accent leading-snug">
                    "우리가 먹은 국수 한 그릇,<br />
                    또 다른 청년의 내일을 응원합니다"
                  </blockquote>
                </div>
              </div>

              <p className="text-sm text-dark/65 leading-relaxed">
                기사는 청년38국수를 <strong className="text-primary">"청년 중심의 사회적 외식 브랜드"</strong>로 소개하며,
                올해 10개 매장을 시작으로 <strong className="text-primary">100개 매장 확장 계획</strong>도 공식 보도되었습니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Regional footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-dark text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,var(--color-secondary),transparent_50%)]" />
          <div className="relative z-10">
            <div className="inline-block text-secondary font-bold text-sm tracking-widest mb-3">📍 REGIONAL CIRCULATION</div>
            <h4 className="text-2xl md:text-3xl font-serif font-bold mb-3">지역연계형 매장은 <span className="text-secondary">지역</span>으로도 환원됩니다</h4>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              청년 지원을 넘어 지역 경제 활성화와 로컬 커뮤니티 기여까지.<br />
              청년38국수가 만드는 따뜻한 선순환은 계속됩니다.
            </p>
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
      { name: '얼큰어묵국수', price: '6,800원', img: '/images/menu/얼큰어묵국수.webp', desc: '매콤한 육수와 어묵의 환상 조합' },
      { name: '비빔국수', price: '6,800원', img: '/images/menu/[따뜻한국수]비빔국수.webp', desc: '과일소스의 새콤달콤한 비빔면' },
      { name: '얼큰국수', price: '5,800원', img: '/images/menu/[따뜻한국수]얼큰국수.webp', desc: '속이 확 풀리는 얼큰한 육수' },
      { name: '소고기국수', price: '7,800원', img: '/images/menu/소고기국수_N.webp', desc: '소고기 고명이 듬뿍 올라간 진한 맛' },
      { name: '얼큰고기국수', price: '7,800원', img: '/images/menu/얼큰고기국수_N.webp', desc: '매콤한 육수에 소고기를 더한 보양식' },
    ],
    '칼국수': [
      { name: '칼국수', price: '5,800원', img: '/images/menu/칼국수.webp', desc: '정통 방식으로 끓여낸 담백한 칼국수' },
      { name: '얼큰칼국수', price: '6,800원', img: '/images/menu/얼큰칼국수.webp', desc: '칼칼한 국물이 일품인 얼큰 칼국수' },
      { name: '들깨칼국수', price: '7,800원', img: '/images/menu/들깨칼국수.webp', desc: '고소한 들깨가 듬뿍 들어간 건강식' },
      { name: '낙지볶음칼국수', price: '8,800원', img: '/images/menu/낙지볶음칼국수.webp', desc: '매콤한 낙지볶음과 칼국수의 만남' },
      { name: '우육칼국수', price: '7,800원', img: '/images/menu/우육칼국수.webp', desc: '진한 소고기 육수의 우육 칼국수' },
      { name: '감자칼국수', price: '8,800원', img: '/images/menu/감자칼국수.webp', desc: '강원도 감자의 구수한 맛과 쫄깃한 생면의 조화' },
    ],
    '스페셜': [
      { name: '김치찌개돈까스', price: '7,800원', img: '/images/menu/김치찌개돈까스.webp', desc: '얼큰한 김치찌개와 바삭한 돈까스' },
    ],
    '덮밥/곁들임': [
      { name: '매콤제육덮밥', price: '4,800원', img: '/images/menu/[미니덮밥]매콤제육덮밥.webp', desc: '불맛 나는 매콤한 제육 덮밥' },
      { name: '파닭마요덮밥', price: '4,800원', img: '/images/menu/[미니덮밥]파닭마요덮밥.webp', desc: '고소한 마요네즈와 파닭의 조화' },
      { name: '계란후라이밥', price: '2,800원', img: '/images/menu/계란후라이밥.webp', desc: '간단하지만 든든한 계란밥' },
      { name: '아침愛국밥', price: '3,800원', img: '/images/menu/아침愛국밥.webp', desc: '아침을 여는 따뜻한 국밥 한 그릇' },
      { name: '미니치즈돈까스', price: '4,800원', img: '/images/menu/[곁들임]미니치즈돈까스.webp', desc: '치즈가 듬뿍 들어간 미니 돈까스' },
      { name: '미니돈까스', price: '3,800원', img: '/images/menu/[곁들임]미니돈까스.webp', desc: '바삭하게 튀겨낸 미니 돈까스' },
      { name: '직화불고기', price: '3,800원', img: '/images/menu/[곁들임]직화불고기.webp', desc: '직화로 구워 불향 가득한 불고기' },
      { name: '튀김만두', price: '3,800원', img: '/images/menu/튀김만두.webp', desc: '겉바속촉 고소한 튀김만두' },
      { name: '팝콘군만두', price: '3,800원', img: '/images/menu/팝콘군만두.webp', desc: '한입에 쏙 들어가는 팝콘 만두' },
      { name: '꼬맹이물만두', price: '3,800원', img: '/images/menu/[곁들임]물만두.webp', desc: '부드럽고 촉촉한 물만두' },
    ],
    '여름메뉴': [
      { name: '콩국수', price: '7,800원', img: '/images/menu/[시원한국수]콩국수.webp', desc: '직접 갈아 만든 진한 콩물의 콩국수' },
      { name: '열무국수', price: '7,800원', img: '/images/menu/[시원한국수]열무국수.webp', desc: '아삭한 열무김치와 시원한 육수' },
      { name: '냉국수', price: '6,800원', img: '/images/menu/[시원한국수]냉국수.webp', desc: '살얼음 동동 띄운 시원한 냉국수' },
      { name: '물냉면', price: '6,800원', img: '/images/menu/[시원한국수]물냉면.webp', desc: '가슴속까지 시원해지는 물냉면' },
      { name: '비빔냉면', price: '7,800원', img: '/images/menu/[시원한국수]비빔냉면.webp', desc: '매콤달콤한 양념의 비빔냉면' },
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
              className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === category
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

const StoreTypes = () => {
  const models = [
    {
      tag: '커뮤니티형',
      tagColor: 'bg-primary text-white',
      accent: 'border-primary',
      headline: '청년과 지역이 만나는\n동네 커뮤니티 허브',
      desc: '동네 주민과 청년이 편하게 오가는 커뮤니티형 매장. 테이블 회전과 지역 친밀도를 동시에 살립니다.',
      stores: [
        { kind: 'store' as const, name: '청년38국수 문정점', loc: '서울 송파구 문정동', status: '운영중', img: '/images/stores/munjeong/exterior.webp', alt: '청년38국수 문정점 외관' },
        { kind: 'store' as const, name: '청년38국수 구디점', loc: '서울 구로구 구로디지털단지', status: '2026년 6월 초 오픈 예정', img: null, alt: '' },
      ],
    },
    {
      tag: '지역연계형',
      tagColor: 'bg-accent text-white',
      accent: 'border-accent',
      headline: '로컬 브랜드로 재탄생하는\n지역 상생 매장',
      desc: '지역 기관·공간과 협력해 해당 지역 이름을 단 로컬 브랜드로 운영. 수익의 일부가 다시 지역으로 환원됩니다.',
      stores: [
        { kind: 'store' as const, name: '다산38국수 다산점', loc: '경기 남양주 다산신도시', status: 'GH 공간복지홈 협력 · 운영중', img: '/images/stores/dasan/exterior.webp', alt: '다산38국수 다산점 외관' },
        { kind: 'photo' as const, caption: '지역 주민이 모이는 홀 — 다산38국수 다산점 내부', img: '/images/stores/dasan/interior.webp', alt: '다산38국수 다산점 내부 전경' },
      ],
    },
    {
      tag: '가맹형',
      tagColor: 'bg-secondary text-dark',
      accent: 'border-secondary',
      headline: '검증된 모델을 그대로,\n가맹 표준형 매장',
      desc: '본사가 검증한 표준 운영 모델을 바탕으로 가맹점주가 운영하는 모델. 지역별 상권에 맞춘 타입으로 개설됩니다.',
      stores: [
        { kind: 'store' as const, name: '청년38국수 월평점', loc: '대전 월평동', status: '운영중', img: '/images/stores/wolpyeong/exterior.webp?v=2', alt: '청년38국수 월평점 외관', imgPos: 'object-top' },
        { kind: 'photo' as const, caption: '따뜻한 동네 밥집 — 청년38국수 월평점 내부', img: '/images/stores/wolpyeong/interior.webp?v=2', alt: '청년38국수 월평점 내부', imgPos: 'object-top' },
      ],
    },
  ];

  const commercialTypes = [
    { icon: Home, label: '셀프형', range: '15~20평', desc: '소형 상권·배후 수요 중심.\n운영 효율을 극대화한 컴팩트 모델.' },
    { icon: Store, label: '가든형', range: '30~50평', desc: '가족 단위·단체 고객까지 아우르는\n여유로운 홀 공간의 표준 모델.' },
    { icon: Building2, label: '특수형', range: '상권별 맞춤', desc: 'GH 공간복지홈, 공공 시설 등\n특수 입지에 맞춘 맞춤 설계.' },
  ];

  return (
    <section id="store-types" className="py-24 px-4 bg-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-6 border border-primary/20">
            <Store size={16} /> 매장 모델
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">
            상권 맞춤형 <span className="text-primary">3가지 매장 모델</span>
          </h2>
          <div className="woodcut-line max-w-xs mx-auto mb-5" />
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            동일한 맛, 동일한 철학. 상권과 목적에 따라 매장 모델만 달라집니다.
          </p>
        </motion.div>

        {/* 3 brand models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {models.map((m, idx) => (
            <motion.div
              key={m.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg border-t-4 ${m.accent} flex flex-col`}
            >
              <div className="p-7 pb-4">
                <span className={`inline-block ${m.tagColor} text-xs font-black px-3 py-1.5 rounded-full tracking-wider`}>
                  {m.tag}
                </span>
                <h3 className="text-2xl font-serif font-black mt-4 mb-3 whitespace-pre-line leading-tight">
                  {m.headline}
                </h3>
                <p className="text-sm text-dark/65 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="px-7 pb-7 mt-auto space-y-4">
                {m.stores.map((s, sIdx) => {
                  if (s.kind === 'photo') {
                    return (
                      <div key={`photo-${sIdx}`} className="bg-bg/60 rounded-2xl overflow-hidden border border-primary/5">
                        <div className="h-56 overflow-hidden bg-primary/5 relative">
                          <img
                            src={s.img}
                            alt={s.alt}
                            className={`w-full h-full object-cover ${('imgPos' in s && s.imgPos) ? s.imgPos : ''} hover:scale-105 transition-transform duration-500`}
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-xs text-dark/70 leading-snug">{s.caption}</div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={s.name} className="bg-bg/60 rounded-2xl overflow-hidden border border-primary/5">
                      {s.img ? (
                        <div className="h-56 overflow-hidden bg-primary/5 relative">
                          <img
                            src={s.img}
                            alt={s.alt}
                            className={`w-full h-full object-cover ${('imgPos' in s && s.imgPos) ? s.imgPos : ''} hover:scale-105 transition-transform duration-500`}
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="h-56 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                          <div className="text-center">
                            <Store className="mx-auto text-primary/40 mb-2" size={32} />
                            <div className="text-xs font-bold text-primary/60 tracking-widest">COMING SOON</div>
                          </div>
                        </div>
                      )}
                      <div className="p-4">
                        <div className="text-sm font-bold text-dark mb-1">{s.name}</div>
                        <div className="flex items-start gap-1 text-xs text-dark/60 mb-1">
                          <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                          <span>{s.loc}</span>
                        </div>
                        <div className="text-xs text-primary font-semibold">{s.status}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dasan spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark text-white rounded-3xl overflow-hidden shadow-xl mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[400px] bg-gradient-to-br from-accent/30 to-primary/10">
              <img
                src="/images/stores/dasan/interior.webp"
                alt="다산38국수 다산점 내부"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-secondary text-dark text-xs font-black px-3 py-1.5 rounded-full tracking-wider mb-3">
                  SPOTLIGHT · 다산38국수
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-black text-white leading-tight">
                  왜 다산에서는<br />
                  <span className="text-secondary">'다산38국수'</span>로 운영할까요?
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="space-y-5 text-white/85 leading-relaxed">
                <p>
                  다산38국수 다산점은 <strong className="text-secondary">GH(경기주택도시공사)</strong>의{' '}
                  <strong className="text-secondary">공간복지홈</strong> 사업과 함께 시작되었습니다.
                </p>
                <p>
                  공공 공간과 상생하는 매장은 해당 지역의 이름을 단{' '}
                  <strong className="text-secondary">로컬 브랜드</strong>로 운영됩니다. 지역 주민에게 더 가깝게 다가가고,
                  수익의 일부는 다시 <strong className="text-secondary">지역 환원</strong>으로 이어집니다.
                </p>
                <p className="text-sm text-white/60 pt-3 border-t border-white/10">
                  "동일한 레시피와 품질. 다만 운영 방식은 지역에 맞춰 자연스럽게 변주합니다."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commercial types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary/10"
        >
          <div className="text-center mb-10">
            <div className="text-sm font-bold text-primary/70 tracking-widest mb-2">COMMERCIAL TYPES</div>
            <h3 className="text-2xl md:text-3xl font-serif font-black">상권별 적용 타입</h3>
            <p className="text-dark/60 mt-2 text-sm">
              매장 모델과 무관하게, 상권 특성에 맞춰 아래 3가지 타입 중 최적안을 제안드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commercialTypes.map((t, i) => (
              <div key={t.label} className="bg-bg/50 rounded-2xl p-6 text-center border border-primary/5 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <t.icon size={26} />
                </div>
                <div className="text-xs font-bold text-primary/60 tracking-widest mb-1">TYPE 0{i + 1}</div>
                <h4 className="text-xl font-serif font-black mb-1">{t.label}</h4>
                <div className="text-primary font-bold text-sm mb-3">{t.range}</div>
                <p className="text-sm text-dark/65 whitespace-pre-line leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
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
    { title: '교육 이수', desc: '점주 + 직원 기초 교육 (1주)', icon: '05' },
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
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">투자 & 수익 구조</h2>
          <p className="text-dark/60">합리적인 투자, 건강한 수익 구조를 지향합니다</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Investment Overview */}
          <div className="bg-bg p-8 md:p-12 rounded-3xl shadow-inner border border-primary/10 flex flex-col">
            <h3 className="text-2xl font-serif font-bold mb-6 text-primary">초기 투자 구성</h3>
            <p className="text-sm text-dark/60 mb-8">매장 타입과 평수에 따라 구성과 규모가 달라집니다.</p>

            <div className="space-y-4 flex-1">
              {[
                ['가맹비 · 교육비', '브랜드 사용권 및 오픈 전 교육'],
                ['인테리어 · 사인물', '본사 디자인 가이드 기반'],
                ['주방 설비 · 집기', '표준 레이아웃 기준 일괄 지원'],
                ['초도 물품비', '식자재·비품 오픈 세트'],
              ].map(([title, desc], i) => (
                <div key={i} className="flex items-start gap-4 border-b border-primary/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-dark">{title}</div>
                    <div className="text-sm text-dark/60">{desc}</div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 pb-4">
                <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary font-bold flex items-center justify-center shrink-0">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-dark">본사 보증금 <span className="text-secondary">없음</span></div>
                  <div className="text-sm text-dark/60">초기 부담을 최소화합니다</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-dashed border-primary/20">
              <div className="flex justify-between items-end">
                <span className="text-lg font-serif font-bold">총 투자비 가이드</span>
                <div className="text-right">
                  <div className="text-3xl font-black text-accent">약 4,700만원 ~</div>
                  <div className="text-xs text-dark/40 mt-1">매장 규모·상권별 상이 / 임차 보증금 별도</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-dark/50 bg-white/60 rounded-lg p-3 border border-primary/10">
                💬 구체적인 투자 내역과 조건은 <strong className="text-primary">무료 상담</strong>을 통해 맞춤 안내드립니다.
              </div>
            </div>
          </div>

          {/* Profit Concept */}
          <div className="space-y-6 flex flex-col">
            <div className="bg-dark text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-serif font-bold mb-2">건강한 수익 구조</h3>
              <p className="text-white/50 text-sm mb-10">본사 노마진 정책 기반의 상생 구조</p>

              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/60 text-sm mb-1">예상 영업이익률</div>
                    <div className="text-5xl font-black text-secondary">20 ~ 30<span className="text-3xl">%</span></div>
                  </div>
                  <TrendingUp size={72} className="text-secondary/30" />
                </div>

                <div className="border-t border-white/10 pt-6 space-y-3">
                  {[
                    { label: '합리적인 재료비 구조', desc: '본사 노마진 · 공동구매 효과' },
                    { label: '효율적인 인력 운영', desc: '매장 타입별 최적 동선 설계' },
                    { label: '투명한 로열티 정책', desc: '업계 최저 수준 · 은닉 수수료 없음' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-secondary shrink-0 mt-1" size={18} />
                      <div>
                        <div className="font-bold text-white">{item.label}</div>
                        <div className="text-white/50 text-xs">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-white/40 pt-4 border-t border-white/10">
                  ※ 매장 타입(셀프형/가든형/특수형) 및 상권에 따라 달라집니다. 상세 수치는 상담 시 안내드립니다.
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
    { title: '📚 교육 프로그램', desc: '1주 기초교육 · 온라인 플랫폼 지속 학습', icon: <BookOpen /> },
    { title: '🤝 상생 지원 제도', desc: '청년 창업자 · 재계약 가맹점 대상 가맹비 감면 혜택', icon: <Handshake /> },
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
    { src: '/images/stores/munjeong/exterior.webp', caption: '청년38국수 문정점 · 외관', tag: '문정점' },
    { src: '/images/common/%EC%A0%84%EC%B2%B4%EC%83%B7.webp', caption: '대표 메뉴 여섯 가지 한 상', tag: '메뉴' },
    { src: '/images/stores/dasan/exterior.webp', caption: '다산38국수 다산점 · GH 공간복지홈', tag: '다산점' },
    { src: '/images/stores/munjeong/interior.webp', caption: '문정점 · 편안한 좌석 구성', tag: '문정점' },
    { src: '/images/common/%EC%9C%A1%EC%88%98%EC%BB%A8%EC%85%892.webp', caption: '매일 우려내는 육수 한 솥', tag: '육수' },
    { src: '/images/stores/wolpyeong/exterior.webp?v=2', caption: '청년38국수 월평점 · 대전 월평동', tag: '월평점' },
    { src: '/images/stores/dasan/interior.webp', caption: '다산점 · 지역 이웃이 함께하는 홀', tag: '다산점' },
    { src: '/images/common/%EC%BB%A8%EC%85%893.webp', caption: '비빔국수 · 한 상 차림 컨셉', tag: '메뉴' },
    { src: '/images/stores/wolpyeong/interior.webp?v=2', caption: '월평점 · 한결같은 로고 월', tag: '월평점' },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-bold mb-5 border border-primary/20">
            GALLERY
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-3">현장 속의 청년38국수</h2>
          <p className="text-dark/60 max-w-xl mx-auto">
            문정 · 다산 · 월평 세 매장과 대표 메뉴를 모았습니다. 각 매장의 공기와 그 안에 담긴 정성을 함께 보실 수 있어요.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-5 space-y-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-md bg-bg/50 group relative"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-[10px] font-bold tracking-widest text-secondary mb-1">{img.tag.toUpperCase()}</div>
                <div className="text-sm font-bold">{img.caption}</div>
              </div>
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
    {
      q: '외식업 경험이 없어도 창업이 가능한가요?',
      a: '네, 전혀 문제없습니다. 본사에서 1주일간의 기초 교육(조리·운영·고객응대·위생)을 집중 진행하고, 개점 당일에도 본사 담당자가 현장에 함께합니다. 생면·육수·소스 등 핵심 재료가 표준화되어 있어 외식업 경력 없이도 일정한 품질로 운영하실 수 있습니다.',
    },
    {
      q: '초기 투자비용은 어느 정도 들까요? 본사 보증금이 있나요?',
      a: '매장 타입(셀프형 15~20평 / 가든형 30~50평 / 특수형)과 입지에 따라 차이가 있어, 총 투자 규모는 상권 분석 후 별도 견적으로 안내드립니다. 다만 본사 보증금은 받지 않으며, 식재료 공급에서도 별도 마진을 취하지 않는 노마진 정책을 운영합니다.',
    },
    {
      q: '로열티와 광고분담금 구조는 어떻게 되나요?',
      a: '은닉 수수료 없이 매월 고정된 방식으로 투명하게 운영합니다. 구체적인 요율과 정산 방식은 가맹정의서를 기준으로 상담 시 상세히 안내드립니다.',
    },
    {
      q: '매장 모델(커뮤니티형·지역연계형·가맹형)과 상권별 타입은 어떻게 정해지나요?',
      a: '먼저 희망 상권에 대한 본사 무료 상권 분석을 진행한 뒤, 유동 특성·배후 수요·공실 면적에 따라 셀프형 / 가든형 / 특수형 중 최적 타입을 제안드립니다. 지역 기관·공공 공간과 연계된 입지의 경우 지역연계형(로컬 브랜드 운영)으로 설계될 수 있습니다.',
    },
    {
      q: '100원 기부는 가맹점주의 추가 부담인가요?',
      a: '네, 대표 메뉴 38국수 한 그릇당 100원은 가맹점주께서 부담하시는 구조입니다. 본사는 이 기부금에서 별도 마진을 취하지 않고 전액을 청년 교육 기관 「레인코리아」와 청년 커뮤니티 「청년문간」에 그대로 전달하며, 전달식은 기사화되어 매장·브랜드의 공신력 있는 마케팅 자산이 됩니다. 즉 "작은 기부 = 브랜드 스토리 = 지역·단골 유입"으로 이어지는 선순환이며, 실제 전달식과 후원증서는 고객에게 강력한 신뢰 메시지가 됩니다.',
    },
    {
      q: '예비 가맹점주가 상권 분석을 직접 의뢰할 수 있나요?',
      a: '네, 가맹 상담 과정에서 본사 무료 상권 분석 1회를 제공해 드립니다. 유동 특성·배후 수요·공실 면적·경쟁 동종업종을 검토한 뒤 셀프형 / 가든형 / 특수형 중 가장 적합한 매장 타입과 예상 투자 규모를 함께 안내드립니다.',
    },
    {
      q: '식재료는 반드시 본사에서 구매해야 하나요?',
      a: '생면·육수 베이스·시그니처 소스 등 맛의 핵심을 좌우하는 재료는 본사 지정 공급을 따릅니다. 다만 본사는 해당 공급에서 별도 마진을 취하지 않으며(노마진 정책), 그 외 부자재와 소모품은 가맹점이 직접 수급하실 수 있습니다.',
    },
    {
      q: '개점 후에도 본사의 운영 지원을 받을 수 있나요?',
      a: '개점일 현장 동행은 기본이며, 이후에도 정기 방문 슈퍼바이징·신메뉴 리뉴얼·원가 및 매출 분석 등 본사 운영팀의 지속적인 지원을 받으실 수 있습니다. 가맹점 단체 카톡방·교육 자료 업데이트를 통해 전국 가맹점과 노하우가 실시간으로 공유됩니다.',
    },
    {
      q: '가맹 계약 기간과 갱신 조건은 어떻게 되나요?',
      a: '기본 계약 기간은 5년이며, 성실 운영 가맹점에 대해서는 재계약 시 가맹비 감면 등의 혜택을 준비하고 있습니다. 세부 계약 조건은 가맹정의서에 따라 상담 시 안내드립니다.',
    },
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
        <img src="/images/common/%EC%A0%84%EC%B2%B4%EC%83%B7.webp" className="w-full h-full object-cover opacity-20" alt="Background" />
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
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={e => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
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
                    onChange={e => setFormData({ ...formData, area: e.target.value })}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    className="w-5 h-5 accent-primary"
                    checked={formData.agree}
                    onChange={e => setFormData({ ...formData, agree: e.target.checked })}
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
              <p>상호: 청년38국수 | 대표: 이구승</p>
              <p>주소: 서울특별시 광진구 천호대로 615 2층</p>
              <p>사업자번호: 445-88-02233</p>
              <p>가맹문의: <a href="tel:1588-6020" className="text-white hover:underline">1588-6020</a></p>
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
  const [view, setView] = useState<'landing' | 'proposal'>('landing');

  useEffect(() => {
    const checkView = () => {
      const params = new URLSearchParams(window.location.search);
      setView(params.get('view') === 'proposal' ? 'proposal' : 'landing');
    };
    checkView();
    window.addEventListener('popstate', checkView);
    return () => window.removeEventListener('popstate', checkView);
  }, []);

  if (view === 'proposal') return <Proposal />;

  return (
    <div className="hanji-texture">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <BrandStory />
        <DonationStory />
        <MenuSection />
        <StoreTypes />
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
