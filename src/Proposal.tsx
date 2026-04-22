/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer, Phone, CheckCircle2, Award, TrendingUp, Users, Wallet, Handshake, Heart, Store, Zap, BookOpen, Globe, MapPin } from 'lucide-react';

/**
 * 청년38국수 브랜드 설명서 — 인쇄/PDF 전용 뷰
 * 접근: /?view=proposal
 * A4 세로 기준 @media print 최적화
 */

// 전체 메뉴 데이터 — 랜딩과 동일한 소스 (파일명은 raw Korean, 브라우저/번들러가 인코딩 처리)
const MENU_DATA: { category: string; categoryEn: string; items: { name: string; price: string; img: string; desc: string }[] }[] = [
  {
    category: '따뜻한 국수',
    categoryEn: 'Warm Noodles',
    items: [
      { name: '38국수 (대표)', price: '3,800원', img: '/images/menu/[따뜻한국수]38국수.webp', desc: '멸치 육수, 맑고 구수한 국물' },
      { name: '김치국수', price: '5,800원', img: '/images/menu/[따뜻한국수]김치국수.webp', desc: '새콤한 김치와 시원한 맛' },
      { name: '어묵국수', price: '5,800원', img: '/images/menu/[따뜻한국수]어묵국수.webp', desc: '푸짐한 어묵의 든든한 국수' },
      { name: '얼큰어묵국수', price: '6,800원', img: '/images/menu/얼큰어묵국수.webp', desc: '매콤한 육수와 어묵의 조화' },
      { name: '비빔국수', price: '6,800원', img: '/images/menu/[따뜻한국수]비빔국수.webp', desc: '과일소스의 새콤달콤' },
      { name: '얼큰국수', price: '5,800원', img: '/images/menu/[따뜻한국수]얼큰국수.webp', desc: '속이 확 풀리는 얼큰한 국물' },
      { name: '소고기국수', price: '7,800원', img: '/images/menu/소고기국수_N.webp', desc: '소고기 고명 듬뿍, 진한 맛' },
      { name: '얼큰고기국수', price: '7,800원', img: '/images/menu/얼큰고기국수_N.webp', desc: '매콤한 육수 + 소고기 보양' },
    ],
  },
  {
    category: '칼국수',
    categoryEn: 'Kalguksu',
    items: [
      { name: '칼국수', price: '5,800원', img: '/images/menu/칼국수.webp', desc: '정통 담백 칼국수' },
      { name: '얼큰칼국수', price: '6,800원', img: '/images/menu/얼큰칼국수.webp', desc: '칼칼한 얼큰 국물' },
      { name: '들깨칼국수', price: '7,800원', img: '/images/menu/들깨칼국수.webp', desc: '고소한 들깨 건강식' },
      { name: '우육칼국수', price: '7,800원', img: '/images/menu/우육칼국수.webp', desc: '진한 소고기 육수' },
      { name: '감자칼국수', price: '8,800원', img: '/images/menu/감자칼국수.webp', desc: '강원도 감자의 구수함' },
      { name: '낙지볶음칼국수', price: '8,800원', img: '/images/menu/낙지볶음칼국수.webp', desc: '매콤한 낙지볶음의 만남' },
    ],
  },
  {
    category: '여름 메뉴',
    categoryEn: 'Summer',
    items: [
      { name: '콩국수', price: '7,800원', img: '/images/menu/[시원한국수]콩국수.webp', desc: '직접 갈아 만든 진한 콩물' },
      { name: '열무국수', price: '7,800원', img: '/images/menu/[시원한국수]열무국수.webp', desc: '아삭한 열무김치 국수' },
      { name: '냉국수', price: '6,800원', img: '/images/menu/[시원한국수]냉국수.webp', desc: '살얼음 동동 시원한 맛' },
      { name: '물냉면', price: '6,800원', img: '/images/menu/[시원한국수]물냉면.webp', desc: '시원하게 가슴까지' },
      { name: '비빔냉면', price: '7,800원', img: '/images/menu/[시원한국수]비빔냉면.webp', desc: '매콤달콤한 양념 비빔' },
    ],
  },
  {
    category: '스페셜 · 덮밥',
    categoryEn: 'Rice · Special',
    items: [
      { name: '김치찌개돈까스', price: '7,800원', img: '/images/menu/김치찌개돈까스.webp', desc: '얼큰 김치찌개 + 바삭 돈까스' },
      { name: '매콤제육덮밥', price: '4,800원', img: '/images/menu/[미니덮밥]매콤제육덮밥.webp', desc: '불맛 가득 제육 덮밥' },
      { name: '파닭마요덮밥', price: '4,800원', img: '/images/menu/[미니덮밥]파닭마요덮밥.webp', desc: '고소한 마요 + 파닭 조합' },
      { name: '아침愛국밥', price: '3,800원', img: '/images/menu/아침愛국밥.webp', desc: '아침을 여는 따뜻한 국밥' },
      { name: '계란후라이밥', price: '2,800원', img: '/images/menu/계란후라이밥.webp', desc: '간단·든든 계란밥' },
    ],
  },
  {
    category: '곁들임',
    categoryEn: 'Sides',
    items: [
      { name: '미니치즈돈까스', price: '4,800원', img: '/images/menu/[곁들임]미니치즈돈까스.webp', desc: '치즈 듬뿍 미니 돈까스' },
      { name: '미니돈까스', price: '3,800원', img: '/images/menu/[곁들임]미니돈까스.webp', desc: '바삭 미니 돈까스' },
      { name: '직화불고기', price: '3,800원', img: '/images/menu/[곁들임]직화불고기.webp', desc: '직화 불향의 불고기' },
      { name: '튀김만두', price: '3,800원', img: '/images/menu/튀김만두.webp', desc: '겉바속촉 고소한 만두' },
      { name: '팝콘군만두', price: '3,800원', img: '/images/menu/팝콘군만두.webp', desc: '한입 쏙 팝콘 만두' },
      { name: '꼬맹이물만두', price: '3,800원', img: '/images/menu/[곁들임]물만두.webp', desc: '부드럽고 촉촉한 물만두' },
    ],
  },
];

// 매장 갤러리 데이터
const STORE_GALLERY: { name: string; model: string; loc: string; status: string; exterior: string; interior: string; note?: string }[] = [
  {
    name: '청년38국수 문정점',
    model: '커뮤니티형 · 1호점',
    loc: '서울 송파구 문정동',
    status: '운영중',
    exterior: '/images/stores/munjeong/exterior.webp',
    interior: '/images/stores/munjeong/interior.webp',
    note: '브랜드 1호점 · 지역 커뮤니티 거점',
  },
  {
    name: '다산38국수 다산점',
    model: '지역연계형 · 2호점',
    loc: '경기 남양주 다산신도시',
    status: 'GH 공간복지홈 협력 · 운영중',
    exterior: '/images/stores/dasan/exterior.webp',
    interior: '/images/stores/dasan/interior.webp',
    note: '경기도시개발공사(GH) 공간복지홈 협력 · 로컬 브랜드로 운영',
  },
  {
    name: '청년38국수 월평점',
    model: '가맹형 · 3호점',
    loc: '대전 월평동',
    status: '운영중',
    exterior: '/images/stores/wolpyeong/exterior.webp?v=2',
    interior: '/images/stores/wolpyeong/interior.webp?v=2',
    note: '대전 지역 첫 가맹점',
  },
];

const Proposal = () => {
  const handlePrint = () => {
    window.print();
  };

  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '.');

  // 페이지 분할: (따뜻한국수+칼국수) / (여름+스페셜+곁들임)
  const menuPage1 = MENU_DATA.slice(0, 2);
  const menuPage2 = MENU_DATA.slice(2);

  return (
    <div className="proposal-root bg-white text-dark min-h-screen">
      {/* 인쇄 제외 — 화면에서만 보이는 툴바 */}
      <div className="proposal-toolbar print:hidden sticky top-0 z-50 bg-dark text-white py-3 px-6 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/images/common/38%EA%B5%AD%EC%88%98%20%EC%97%A0%EB%B8%94%EB%9F%BC.png" className="h-8 w-8 rounded-full bg-white p-0.5" alt="로고" />
          <span className="font-serif font-bold">청년38국수 브랜드 설명서</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handlePrint} className="bg-accent text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition">
            <Printer size={18} /> 인쇄 / PDF 저장
          </button>
          <a href="/" className="text-white/60 hover:text-white text-sm">← 랜딩으로 돌아가기</a>
        </div>
      </div>

      {/* ==================== 1페이지: 표지 ==================== */}
      <section className="proposal-page cover-page">
        <div className="cover-bg" />
        <div className="cover-content">
          <img src="/images/common/38%EA%B5%AD%EC%88%98%20%EC%97%A0%EB%B8%94%EB%9F%BC.png" className="cover-logo" alt="청년38국수" />
          <div className="cover-brand">
            <div className="cover-kor">청년38국수</div>
            <div className="cover-eng">YOUTH 38 NOODLE</div>
          </div>
          <div className="cover-title">
            <div className="cover-sub">부모의 따뜻한 마음을 한 그릇에</div>
            <h1>브랜드 설명서</h1>
            <div className="cover-tag">BRAND GUIDE</div>
          </div>
          <div className="cover-footer">
            <div>발행일 {today}</div>
            <div>주식회사 HBS</div>
          </div>
        </div>
      </section>

      {/* ==================== 2페이지: 브랜드 스토리 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">01</div>
          <div className="page-title">
            <h2>브랜드 스토리</h2>
            <div className="page-sub">BRAND STORY</div>
          </div>
        </header>

        <div className="story-hero">
          <div className="story-copy">
            <h3>부모의 마음을<br />한 그릇에</h3>
            <p>
              편의점 간편식과 배달 음식 사이에서 <strong>든든한 한 끼</strong>를 챙기지 못하는
              청년들에게 <strong>"집에서 차려주던 따뜻한 국수 한 그릇"</strong>을 그대로 건네고 싶었습니다.
            </p>
            <p>
              시그니처 <strong>38국수 3,800원부터</strong>, 전 메뉴 3,800~8,800원. 부담 없는 가격 안에{' '}
              <strong>정직한 재료</strong>와 <strong>제대로 된 한식의 기본</strong>을 담았습니다.
              청년38국수는 한 끼를 파는 일이 아니라, <strong>청년의 하루를 지키는 일</strong>이라 믿습니다.
            </p>
          </div>
          <div className="story-values">
            <div className="value-item"><div className="value-label">부모의 마음</div><div className="value-desc">따뜻한 한 끼로 청년의 하루를</div></div>
            <div className="value-item"><div className="value-label">정직한 가격</div><div className="value-desc">3,800원부터, 부담 없이</div></div>
            <div className="value-item"><div className="value-label">한식의 기본</div><div className="value-desc">냉동·건조 없는 생면과 육수</div></div>
            <div className="value-item"><div className="value-label">상생의 철학</div><div className="value-desc">본사 노마진으로 함께</div></div>
          </div>
        </div>

        <div className="differentiators">
          <div className="diff-title">다른 국수 프랜차이즈와 무엇이 다른가</div>
          <div className="diff-grid">
            <div className="diff-item"><strong>① 본사 노마진 정책</strong> — 식재료 공급에서 별도 마진을 취하지 않습니다. 가맹점 수익이 곧 본사의 성과입니다.</div>
            <div className="diff-item"><strong>② 본사 보증금 없음</strong> — 창업 초기 현금 부담을 덜어냅니다. 임차 보증금만 별도.</div>
            <div className="diff-item"><strong>③ 100원 기부 선순환</strong> — 대표메뉴 38국수 1그릇당 100원이 청년 사회로 환원. 매장의 사회적 가치 = 마케팅 자산.</div>
            <div className="diff-item"><strong>④ 지역 연계 확장 모델</strong> — 공공(GH) 협력 공실재생 사업 등 일반 가맹을 넘어선 성장 경로 제공.</div>
            <div className="diff-item"><strong>⑤ 20년 노하우의 생면</strong> — 냉동·건조 없는 한국식 국수의 진수. 매일 숙성 · 신선 공급.</div>
            <div className="diff-item"><strong>⑥ 매장 타입 유연성</strong> — 15평 셀프형부터 50평 가든형, 특수 입지까지. 상권에 맞는 맞춤 모델.</div>
          </div>
        </div>

        <div className="metrics-row">
          <div className="metric"><Award size={28} /><div className="metric-value">3,800<span>원</span></div><div className="metric-label">시그니처 최저가</div></div>
          <div className="metric"><TrendingUp size={28} /><div className="metric-value">20~30<span>%</span></div><div className="metric-label">예상 영업이익률</div></div>
          <div className="metric"><Users size={28} /><div className="metric-value">2<span>인~</span></div><div className="metric-label">최소 운영 인력</div></div>
          <div className="metric"><Wallet size={28} /><div className="metric-value">4,700<span>만원~</span></div><div className="metric-label">총 초기 투자비</div></div>
        </div>
      </section>

      {/* ==================== 3페이지: 100원 기부 선순환 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">02</div>
          <div className="page-title">
            <h2>100원 기부 선순환</h2>
            <div className="page-sub">100 WON OF KINDNESS</div>
          </div>
        </header>

        <div className="donation-hero">
          <Heart size={40} className="donation-icon" />
          <div className="donation-main">
            <div className="donation-headline">38국수 한 그릇마다 <strong>100원</strong>이 청년의 내일이 됩니다</div>
            <p>
              대표 메뉴 <strong>38국수</strong>를 드실 때마다 각 매장에서 팔린 그릇 수만큼
              <strong> 1그릇당 100원</strong>이 청년 교육과 삶의 커뮤니티에 기부됩니다.
              <br />소비자는 맛있게 먹고, 기분 좋게 기부되는 선순환의 가치를 실현합니다.
            </p>
          </div>
        </div>

        <div className="donation-partners">
          <div className="partner-card">
            <div className="partner-label">PARTNER 01 · 교육 지원</div>
            <h4>레인코리아</h4>
            <div className="partner-quote">"교육이 바뀌면, 사회가 바뀝니다."</div>
            <p>
              탈북·다문화 청년과 배움의 기회가 부족한 청소년을 위해{' '}
              <strong>글로벌 학교</strong>를 운영하는 교육 기관입니다.
              한 그릇의 기부가 한 청년의 <strong>다음 한 학기</strong>가 되어,
              더 넓은 세상으로 나아갈 발판이 됩니다.
            </p>
            <div className="partner-foot">기부가 닿는 곳 · 청년 교육과 배움의 기회</div>
          </div>
          <div className="partner-card">
            <div className="partner-label">PARTNER 02 · 커뮤니티 지원</div>
            <h4>청년문간</h4>
            <div className="partner-quote">"한 끼가 누군가에게는 하루를 지키는 힘이 됩니다."</div>
            <p>
              <strong>3,000원 김치찌개</strong>로 주머니 사정이 어려운 청년과 지역 이웃에게
              따뜻한 식사를 건네는 사회적 식당입니다.
              청년38국수의 기부는 이곳에서 <strong>오늘의 한 끼</strong>가 되어,
              누군가의 내일을 든든하게 받쳐 줍니다.
            </p>
            <div className="partner-foot">기부가 닿는 곳 · 청년 식사 지원과 커뮤니티</div>
          </div>
        </div>

        <div className="donation-note">
          <strong>지역연계형 매장(다산38국수 등)</strong>에서는 기부가 <strong>청년 + 지역</strong>에 환원되어,
          지역 경제 활성화와 로컬 커뮤니티에도 기여합니다. 기부금은 본사 노마진으로 전액 기부처에 전달되며,
          전달식·후원증서는 매장 앞 고객에게 신뢰의 스토리가 됩니다.
        </div>
      </section>

      {/* ==================== 4페이지: 언론 보도 — 청년발전기금 전달식 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">03</div>
          <div className="page-title">
            <h2>언론 보도</h2>
            <div className="page-sub">PRESS · 청년발전기금 전달식</div>
          </div>
        </header>

        <p className="section-intro">
          2025년 6월 27일, 서울 혜화동 청년문간 슬로우점에서 <strong>청년38국수 청년발전기금 전달식</strong>이 개최되었습니다.
          대표메뉴 38국수 한 그릇마다 적립된 100원은 청년 교육·커뮤니티 기관에 공식 전달되었으며,
          이는 청년38국수의 <strong>사회적 선순환 모델이 실제로 작동하고 있음</strong>을 보여주는 기록입니다.
        </p>

        <div className="press-card">
          <div className="press-head">
            <div className="press-meta">
              <span className="press-badge">📰 PRESS</span>
              <span className="press-source">한경매거진&북 · 2025.07.16</span>
            </div>
            <div className="press-url">magazine.hankyung.com/money/article/202507161980c</div>
          </div>
          <div className="press-title">
            "청년38국수, 청년발전기금 전달식 개최 — 청년의 자립과 삶의 질 향상을 위해"
          </div>
          <div className="press-body">
            <div className="press-photo-row">
              <img
                src="/images/press/youth-fund-ceremony.jpg"
                alt="청년38국수 청년발전기금 전달식 기념사진"
              />
              <div className="press-caption">2025.06.27 청년문간 슬로우점 · 청년발전기금 전달식 기념촬영</div>
            </div>
            <div className="press-lede">
              서울 혜화동 <strong>청년문간 슬로우점</strong>에서 개최. 한 그릇당 적립된 100원이
              <strong> 청년문간사회적협동조합 · 레인코리아</strong> 두 기관에 공식 전달되었습니다.
            </div>
            <div className="press-grid">
              <div className="press-attendees">
                <div className="press-col-label">전달식 참석</div>
                <ul>
                  <li>▲ 청년문간 이문수 가브리엘 신부</li>
                  <li>▲ HBS 이구승 CEO</li>
                  <li>▲ 청년38국수 남지훈 CMO</li>
                  <li>▲ 레인코리아 송인창 소장</li>
                </ul>
              </div>
              <div className="press-quote">
                "우리가 먹은 국수 한 그릇,<br />또 다른 청년의 내일을 응원합니다"
              </div>
            </div>
            <div className="press-closing">
              기사는 청년38국수를 <strong>"청년 중심의 사회적 외식 브랜드"</strong>로 소개하며,
              올해 10개 매장 오픈을 시작으로 <strong>100개 매장 확장 계획</strong>이 공식 보도되었습니다.
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5페이지: 전체 메뉴 1/2 — 따뜻한국수 · 칼국수 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">04</div>
          <div className="page-title">
            <h2>전체 메뉴 <span className="page-chip">1 / 2</span></h2>
            <div className="page-sub">FULL MENU · 따뜻한 국수 · 칼국수</div>
          </div>
        </header>

        <div className="menu-intro-box">
          <div className="menu-intro-item">
            <div className="mi-label">PRICE RANGE</div>
            <div className="mi-value">3,800 ~ 8,800원</div>
            <div className="mi-desc">전 메뉴 합리적 가격대</div>
          </div>
          <div className="menu-intro-item">
            <div className="mi-label">NOODLE</div>
            <div className="mi-value">20년 노하우 생면</div>
            <div className="mi-desc">냉동·건조 없는 매일 숙성</div>
          </div>
          <div className="menu-intro-item">
            <div className="mi-label">BROTH</div>
            <div className="mi-value">매일 직접 우림</div>
            <div className="mi-desc">멸치·소고기·콩·들깨 베이스</div>
          </div>
        </div>

        {menuPage1.map((cat) => (
          <div key={cat.category} className="menu-category">
            <div className="menu-category-head">
              <h4>{cat.category}</h4>
              <span className="cat-sub">{cat.categoryEn}</span>
              <span className="cat-count">{cat.items.length}종</span>
            </div>
            <div className="menu-grid-4">
              {cat.items.map((m, i) => (
                <div key={i} className="menu-card">
                  <img src={m.img} alt={m.name} />
                  <div className="menu-info">
                    <div className="menu-top"><span className="menu-name">{m.name}</span><span className="menu-price">{m.price}</span></div>
                    <div className="menu-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ==================== 6페이지: 전체 메뉴 2/2 — 여름 · 스페셜 · 곁들임 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">05</div>
          <div className="page-title">
            <h2>전체 메뉴 <span className="page-chip">2 / 2</span></h2>
            <div className="page-sub">FULL MENU · 여름 · 스페셜 · 곁들임</div>
          </div>
        </header>

        {menuPage2.map((cat) => (
          <div key={cat.category} className="menu-category">
            <div className="menu-category-head">
              <h4>{cat.category}</h4>
              <span className="cat-sub">{cat.categoryEn}</span>
              <span className="cat-count">{cat.items.length}종</span>
            </div>
            <div className="menu-grid-4">
              {cat.items.map((m, i) => (
                <div key={i} className="menu-card">
                  <img src={m.img} alt={m.name} />
                  <div className="menu-info">
                    <div className="menu-top"><span className="menu-name">{m.name}</span><span className="menu-price">{m.price}</span></div>
                    <div className="menu-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="menu-note">
          ※ 계절·프로모션 메뉴는 수시로 업데이트됩니다. 최신 메뉴와 가격은 매장 안내 및 본사 공지를 따릅니다.
        </div>
      </section>

      {/* ==================== 7페이지: 매장 모델 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">06</div>
          <div className="page-title">
            <h2>매장 모델</h2>
            <div className="page-sub">STORE MODELS</div>
          </div>
        </header>

        <div className="subsection-title">브랜드 모델 타입</div>
        <div className="type-grid type-brand">
          <div className="type-card type-community">
            <div className="type-icon"><Users size={32} /></div>
            <h4>커뮤니티형</h4>
            <p>지역 커뮤니티 거점으로 운영</p>
            <div className="type-stores">문정점(1호) · 구디점(예정, 2026.6)</div>
          </div>
          <div className="type-card type-regional">
            <div className="type-icon"><Globe size={32} /></div>
            <h4>지역연계형</h4>
            <p>로컬 브랜드명으로 운영</p>
            <div className="type-stores"><strong>다산38국수</strong> 다산점(2호)</div>
          </div>
          <div className="type-card type-franchise">
            <div className="type-icon"><Handshake size={32} /></div>
            <h4>가맹형</h4>
            <p>일반 가맹 점주 운영</p>
            <div className="type-stores">월평점(3호, 대전 월평동)</div>
          </div>
        </div>

        <div className="dasan-story">
          <div className="dasan-label">📍 지역연계형 특별 스토리</div>
          <div>
            <strong>다산38국수</strong>는 경기도시개발공사(GH)의 <strong>「공간복지홈」</strong> 협력사업으로,
            공공주택의 악성 공실상가를 주민에게 필요한 <strong>음식점·식료품점·커뮤니티 시설</strong>로
            재생시키는 공실재생 사업의 일환입니다.
            지역 연계 사업의 취지를 살려 <strong>'다산38국수'라는 로컬 브랜드명</strong>으로 운영됩니다.
            향후 타 지자체·공공기관과의 <strong>유사 협력 모델 확장</strong> 가능성을 열어 두고 있습니다.
          </div>
        </div>

        <div className="subsection-title">상권별 매장 타입</div>
        <div className="type-grid type-commercial">
          <div className="type-card">
            <h5>셀프형 매장</h5>
            <div className="type-spec">15 ~ 20평 (소형)</div>
            <p>1인 가구·젊은 유동인구가 활발한 상권. 최소 인력으로 효율 운영.</p>
          </div>
          <div className="type-card">
            <h5>가든형 매장</h5>
            <div className="type-spec">30 ~ 50평 (대형)</div>
            <p>가족·주거형 상권에 적합. 단체 손님 수용 · 체류 시간 긴 입지.</p>
          </div>
          <div className="type-card">
            <h5>특수형 매장</h5>
            <div className="type-spec">역사 · 백화점 · 쇼핑몰</div>
            <p>고정 유동인구가 확보된 특수 입지. 임차 구조 별도 협의.</p>
          </div>
        </div>

        <div className="subsection-title">현재 운영 현황</div>
        <table className="store-table">
          <thead>
            <tr><th>매장</th><th>위치</th><th>모델 타입</th><th>오픈 상태</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>청년38국수 문정점</strong> (1호)</td><td>서울 송파구 문정동</td><td>커뮤니티형</td><td>운영중</td></tr>
            <tr><td><strong>다산38국수 다산점</strong> (2호)</td><td>경기 남양주 다산신도시</td><td>지역연계형 · GH 협력</td><td>운영중</td></tr>
            <tr><td><strong>청년38국수 월평점</strong> (3호)</td><td>대전 월평동</td><td>가맹형</td><td>운영중</td></tr>
            <tr><td><strong>청년38국수 구디점</strong></td><td>서울 구로구 구로디지털단지</td><td>커뮤니티형</td><td>2026년 6월 초 오픈 예정</td></tr>
          </tbody>
        </table>
      </section>

      {/* ==================== 8페이지: 매장 갤러리 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">07</div>
          <div className="page-title">
            <h2>매장 갤러리</h2>
            <div className="page-sub">STORE GALLERY · 직영·가맹 운영 매장</div>
          </div>
        </header>

        <p className="section-intro">
          각 매장은 상권과 컨셉에 맞는 인테리어를 공유합니다. 따뜻한 우드톤과 로고 월을 중심으로,
          한국식 국수집의 정갈함과 편안함을 일관되게 유지합니다.
        </p>

        <div className="gallery-list">
          {STORE_GALLERY.map((s) => (
            <div key={s.name} className="gallery-row">
              <div className="gallery-info">
                <div className="gallery-label">{s.model}</div>
                <h4>{s.name}</h4>
                <div className="gallery-loc"><MapPin size={12} /> {s.loc}</div>
                <div className="gallery-status">{s.status}</div>
                {s.note && <div className="gallery-note">{s.note}</div>}
              </div>
              <div className="gallery-photos">
                <div className="gallery-photo">
                  <img src={s.exterior} alt={`${s.name} 외관`} />
                  <div className="gallery-caption">외관</div>
                </div>
                <div className="gallery-photo">
                  <img src={s.interior} alt={`${s.name} 내부`} />
                  <div className="gallery-caption">내부</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footnote">
          ※ 구디점(커뮤니티형, 서울 구로디지털단지)은 2026년 6월 초 오픈 예정으로 사진은 추후 공개됩니다.
        </div>
      </section>

      {/* ==================== 9페이지: 가맹 프로세스 + 투자·수익 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">08</div>
          <div className="page-title">
            <h2>가맹 프로세스 & 투자</h2>
            <div className="page-sub">FRANCHISE PROCESS & INVESTMENT</div>
          </div>
        </header>

        <div className="subsection-title">가맹 프로세스 (6단계)</div>
        <div className="process-grid">
          {[
            ['01', '상담 신청', '온라인 · 카카오톡 · 전화 상담'],
            ['02', '상권 분석', '본사 무료 상권 분석 1회 제공'],
            ['03', '가맹 계약', '5년 계약 · 본사 보증금 없음'],
            ['04', '인테리어 공사', '본사 디자인 가이드 · 감리 지원'],
            ['05', '교육 이수', '점주 + 직원 기초 교육 (1주)'],
            ['06', '개점 지원', '오픈 동행 · 초기 운영 안정화'],
          ].map(([n, t, d]) => (
            <div key={n} className="process-step">
              <div className="step-num">{n}</div>
              <div className="step-title">{t}</div>
              <div className="step-desc">{d}</div>
            </div>
          ))}
        </div>

        <div className="subsection-title">투자 & 수익 구조</div>
        <div className="finance-split">
          <div className="finance-left">
            <h4>초기 투자 구성</h4>
            <ul>
              <li><CheckCircle2 size={16} /> 가맹비 · 교육비</li>
              <li><CheckCircle2 size={16} /> 인테리어 · 사인물</li>
              <li><CheckCircle2 size={16} /> 주방 설비 · 집기</li>
              <li><CheckCircle2 size={16} /> 초도 물품비 · 오픈 판촉</li>
              <li className="highlight"><CheckCircle2 size={16} /> 본사 보증금 <strong>없음</strong></li>
            </ul>
            <div className="total">
              <span>총 투자비 가이드</span>
              <strong>약 4,700만원 ~</strong>
              <small>매장 규모·상권별 상이 / 임차 보증금 별도</small>
            </div>
          </div>
          <div className="finance-right">
            <h4>건강한 수익 구조</h4>
            <div className="profit-big">20 ~ 30<span>%</span></div>
            <div className="profit-label">예상 영업이익률</div>
            <ul className="profit-list">
              <li>합리적인 재료비 구조 <em>(본사 노마진)</em></li>
              <li>효율적인 인력 운영 <em>(매장 타입별 최적화)</em></li>
              <li>투명한 로열티 정책 <em>(업계 최저 수준)</em></li>
              <li>기부 브랜딩으로 재방문 유도 <em>(충성도 ↑)</em></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== 10페이지: 본사 지원 + FAQ ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">09</div>
          <div className="page-title">
            <h2>본사 지원 · 상생 제도</h2>
            <div className="page-sub">SUPPORT & PARTNERSHIP</div>
          </div>
        </header>

        <div className="subsection-title">본사 지원 사항</div>
        <div className="support-grid">
          {[
            { icon: <Store size={22} />, t: '개점 전 지원', d: '상권분석 · 인테리어 가이드 · 주방 배치 컨설팅' },
            { icon: <Users size={22} />, t: '전담 슈퍼바이저', d: '권역별 1명 배정 · 월 2회 정기 방문 · 상시 핫라인' },
            { icon: <Globe size={22} />, t: '통합 운영 시스템', d: 'POS · 발주 · 정산 통합 · 실시간 매출 모니터링' },
            { icon: <Zap size={22} />, t: '마케팅 지원', d: 'SNS 광고 · 시즌 메뉴 · 배달 플랫폼 · 프로모션' },
            { icon: <BookOpen size={22} />, t: '교육 프로그램', d: '1주 기초 교육 · 온라인 플랫폼 지속 학습 · 보수 교육' },
            { icon: <Handshake size={22} />, t: '상생 지원 제도', d: '청년 창업자 · 재계약 가맹비 감면 · 다점포 할인' },
          ].map((s, i) => (
            <div key={i} className="support-card">
              <div className="support-icon">{s.icon}</div>
              <div>
                <div className="support-title">{s.t}</div>
                <div className="support-desc">{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="subsection-title">자주 묻는 질문 (FAQ)</div>
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-q">외식업 경험이 없어도 창업이 가능한가요?</div>
            <div className="faq-a">네, 가능합니다. <strong>1주일 기초 교육</strong>과 오픈 동행, 슈퍼바이저 상시 지원으로 외식업이 처음인 분도 안정적으로 시작하실 수 있습니다.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">한 매장을 운영하려면 몇 명이 필요한가요?</div>
            <div className="faq-a">셀프형 15~20평 기준 <strong>최소 2명</strong>부터 운영 가능합니다. 가든형·특수형은 평수·회전율에 따라 인력 구성을 달리합니다.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">100원 기부는 가맹점주의 부담인가요?</div>
            <div className="faq-a">네, <strong>가맹점주께서 부담</strong>하시는 구조입니다. 대신 본사는 이 기부금에서 <strong>별도 마진을 취하지 않고 전액</strong>을 공식 기관에 전달합니다. 전달식은 기사화되어 매장·브랜드의 <strong>공신력 있는 마케팅 자산</strong>이 됩니다.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">예비 가맹점주가 상권 분석을 의뢰할 수 있나요?</div>
            <div className="faq-a">상담 신청 시 <strong>본사 무료 상권 분석 1회</strong>를 제공합니다. 매장 타입(셀프형·가든형·특수형)별 적정 입지를 함께 검토합니다.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">개점 후에도 본사의 운영 지원을 받을 수 있나요?</div>
            <div className="faq-a">네. 권역별 <strong>전담 슈퍼바이저</strong>가 월 2회 정기 방문하며, 통합 POS·발주·정산 시스템과 온라인 플랫폼으로 지속적인 운영·마케팅 지원이 이어집니다.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">총 투자비용과 회수 기간은 어느 정도인가요?</div>
            <div className="faq-a">총 초기 투자비는 <strong>약 4,700만원부터</strong>이며 매장 규모·상권에 따라 상이합니다. 세부 수치·시뮬레이션은 상담 시 개별 안내드립니다.</div>
          </div>
        </div>
      </section>

      {/* ==================== 11페이지: 상담 & 연락처 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">10</div>
          <div className="page-title">
            <h2>상담 안내</h2>
            <div className="page-sub">CONTACT</div>
          </div>
        </header>

        <div className="contact-box">
          <div className="contact-left">
            <h3>지금 바로 시작하세요</h3>
            <p>청년38국수와 함께하는 따뜻한 창업, 무료 상담부터 시작합니다.<br />
            상담 신청 시 상권 분석 1회를 무료로 제공합니다.</p>
            <div className="contact-items">
              <div className="contact-item"><Phone size={22} /><div><div className="contact-label">가맹문의</div><strong>1588-6020</strong></div></div>
              <div className="contact-item"><CheckCircle2 size={22} /><div><div className="contact-label">카카오톡 채널</div><strong>@청년38국수</strong></div></div>
              <div className="contact-item"><MapPin size={22} /><div><div className="contact-label">본사 주소</div><strong>서울특별시 광진구 천호대로 615 2층</strong></div></div>
            </div>
          </div>
          <div className="contact-right">
            <div className="company-info">
              <div className="ci-logo"><img src="/images/common/38%EA%B5%AD%EC%88%98%20%EC%97%A0%EB%B8%94%EB%9F%BC.png" alt="로고" /></div>
              <div className="ci-name">주식회사 HBS</div>
              <div className="ci-en">HBS Co., Ltd.</div>
              <div className="ci-detail">
                <div>대표 이구승</div>
                <div>서울특별시 광진구 천호대로 615 2층</div>
                <div>사업자등록번호 445-88-02233</div>
                <div>가맹문의 1588-6020</div>
              </div>
            </div>
          </div>
        </div>

        <div className="proposal-footer">
          본 설명서는 브랜드·가맹 안내를 위한 소개 자료이며, 구체적인 계약 조건·수치는 가맹 상담 시 별도 안내드립니다.<br />
          © 2026 청년38국수 · 주식회사 HBS. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default Proposal;
