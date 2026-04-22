/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Printer, Download, Phone, CheckCircle2, Award, TrendingUp, Users, Wallet, Handshake, Heart, Store, Zap, BookOpen, Globe } from 'lucide-react';

/**
 * 청년38국수 가맹영업 제안서 — 인쇄/PDF 전용 뷰
 * 접근: /?view=proposal
 * A4 세로 기준 @media print 최적화
 */
const Proposal = () => {
  const handlePrint = () => {
    window.print();
  };

  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '.');

  return (
    <div className="proposal-root bg-white text-dark min-h-screen">
      {/* 인쇄 제외 — 화면에서만 보이는 툴바 */}
      <div className="proposal-toolbar print:hidden sticky top-0 z-50 bg-dark text-white py-3 px-6 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/images/common/38%EA%B5%AD%EC%88%98%20%EC%97%A0%EB%B8%94%EB%9F%BC.png" className="h-8 w-8 rounded-full bg-white p-0.5" alt="로고" />
          <span className="font-serif font-bold">청년38국수 가맹영업 제안서</span>
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
            <h1>가맹영업 제안서</h1>
            <div className="cover-tag">FRANCHISE PROPOSAL</div>
          </div>
          <div className="cover-footer">
            <div>발행일 {today}</div>
            <div>주식회사 HBS · Happy Bridge Sudogwon Co., Ltd.</div>
          </div>
        </div>
      </section>

      {/* ==================== 2페이지: 브랜드 스토리 & 핵심 가치 ==================== */}
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
            <div className="diff-item"><strong>① 본사 노마진 정책</strong> — 식재료 공급에서 별도 마진을 취하지 않습니다.</div>
            <div className="diff-item"><strong>② 본사 보증금 없음</strong> — 창업 초기 부담을 본사가 함께 덜어냅니다.</div>
            <div className="diff-item"><strong>③ 100원 기부 선순환</strong> — 매장이 팔수록 청년 사회가 함께 성장합니다.</div>
            <div className="diff-item"><strong>④ 지역 연계 확장 모델</strong> — 공공·지역 기관과 협업하는 성장 경로 제공.</div>
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
              대표 메뉴 <strong>38국수</strong>를 드실 때마다 각 매장에서 먹은 그릇 수만큼
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
          지역 경제 활성화와 로컬 커뮤니티에도 기여합니다. 가맹점주의 추가 부담 없이, 본사 차원에서 집계·전달됩니다.
        </div>
      </section>

      {/* ==================== 4페이지: 시그니처 메뉴 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">03</div>
          <div className="page-title">
            <h2>시그니처 메뉴</h2>
            <div className="page-sub">SIGNATURE MENU · 3,800 ~ 8,800원</div>
          </div>
        </header>

        <p className="section-intro">매일 숙성한 생면 — 냉동·건조 없는 신선한 맛. 한국식 국수의 진수를 합리적인 가격에.</p>

        <div className="menu-grid">
          {[
            { n: '38국수 (대표)', p: '3,800원', i: '/images/menu/[%EB%94%B0%EB%9C%BB%ED%95%9C%EA%B5%AD%EC%88%98]38%EA%B5%AD%EC%88%98.webp', d: '멸치 육수 기반, 맑고 구수한 국물' },
            { n: '김치국수', p: '5,800원', i: '/images/menu/[%EB%94%B0%EB%9C%BB%ED%95%9C%EA%B5%AD%EC%88%98]%EA%B9%80%EC%B9%98%EA%B5%AD%EC%88%98.webp', d: '새콤한 김치가 어우러진 시원한 맛' },
            { n: '어묵국수', p: '5,800원', i: '/images/menu/[%EB%94%B0%EB%9C%BB%ED%95%9C%EA%B5%AD%EC%88%98]%EC%96%B4%EB%AC%B5%EA%B5%AD%EC%88%98.webp', d: '푸짐한 어묵이 든 든든한 국수' },
            { n: '비빔국수', p: '6,800원', i: '/images/menu/[%EB%94%B0%EB%9C%BB%ED%95%9C%EA%B5%AD%EC%88%98]%EB%B9%84%EB%B9%94%EA%B5%AD%EC%88%98.webp', d: '과일소스의 새콤달콤한 비빔면' },
            { n: '소고기국수', p: '7,800원', i: '/images/menu/%EC%86%8C%EA%B3%A0%EA%B8%B0%EA%B5%AD%EC%88%98_N.webp', d: '소고기 고명이 듬뿍 올라간 진한 맛' },
            { n: '콩국수', p: '7,800원', i: '/images/menu/[%EC%8B%9C%EC%9B%90%ED%95%9C%EA%B5%AD%EC%88%98]%EC%BD%A9%EA%B5%AD%EC%88%98.webp', d: '직접 갈아 만든 진한 콩물의 콩국수' },
          ].map((m, i) => (
            <div key={i} className="menu-card">
              <img src={m.i} alt={m.n} />
              <div className="menu-info">
                <div className="menu-top"><span className="menu-name">{m.n}</span><span className="menu-price">{m.p}</span></div>
                <div className="menu-desc">{m.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="menu-note">※ 계절 메뉴 및 덮밥·곁들임 메뉴가 추가로 제공됩니다.</div>
      </section>

      {/* ==================== 5페이지: 매장 모델 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">04</div>
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
          </div>
        </div>

        <div className="subsection-title">상권별 매장 타입</div>
        <div className="type-grid type-commercial">
          <div className="type-card">
            <h5>셀프형 매장</h5>
            <div className="type-spec">15 ~ 20평</div>
            <p>1인 가구와 젊은 유동인구가 활발한 상권</p>
          </div>
          <div className="type-card">
            <h5>가든형 매장</h5>
            <div className="type-spec">30 ~ 50평</div>
            <p>가족·주거형 상권에 적합한 대형 매장</p>
          </div>
          <div className="type-card">
            <h5>특수형 매장</h5>
            <div className="type-spec">역사 · 백화점 · 쇼핑몰</div>
            <p>고정 유동인구가 확보된 특수 입지</p>
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

      {/* ==================== 6페이지: 가맹 프로세스 + 투자·수익 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">05</div>
          <div className="page-title">
            <h2>가맹 프로세스 & 투자</h2>
            <div className="page-sub">FRANCHISE PROCESS & INVESTMENT</div>
          </div>
        </header>

        <div className="subsection-title">가맹 프로세스</div>
        <div className="process-grid">
          {[
            ['01', '상담 신청', '온라인 · 카카오톡 채널'],
            ['02', '상권 분석', '본사 무료 상권 분석 1회'],
            ['03', '가맹 계약', '5년 계약 · 본사 보증금 없음'],
            ['04', '인테리어 공사', '본사 디자인 가이드'],
            ['05', '교육 이수', '점주 + 직원 기초 교육 (2주)'],
            ['06', '개점 지원', '본사 개점 지원 동행'],
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
              <li><CheckCircle2 size={16} /> 초도 물품비</li>
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
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== 7페이지: 본사 지원 + 상담 ==================== */}
      <section className="proposal-page">
        <header className="page-header">
          <div className="page-number">06</div>
          <div className="page-title">
            <h2>본사 지원 & 상담 안내</h2>
            <div className="page-sub">SUPPORT & CONTACT</div>
          </div>
        </header>

        <div className="subsection-title">본사 지원 사항</div>
        <div className="support-grid">
          {[
            { icon: <Store size={22} />, t: '개점 전 지원', d: '상권분석 · 인테리어 가이드 · 주방 배치 컨설팅' },
            { icon: <Users size={22} />, t: '전담 슈퍼바이저', d: '권역별 1명 배정 · 월 2회 정기 방문' },
            { icon: <Globe size={22} />, t: '통합 운영 시스템', d: 'POS · 발주 · 정산 통합' },
            { icon: <Zap size={22} />, t: '마케팅 지원', d: 'SNS 광고 · 시즌 메뉴 · 배달 플랫폼' },
            { icon: <BookOpen size={22} />, t: '교육 프로그램', d: '2주 기초 교육 · 온라인 지속 학습' },
            { icon: <Handshake size={22} />, t: '상생 지원 제도', d: '청년 창업자 · 재계약 가맹비 감면' },
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

        <div className="contact-box">
          <div className="contact-left">
            <h3>지금 바로 시작하세요</h3>
            <p>청년38국수와 함께하는 따뜻한 창업, 무료 상담부터 시작합니다.</p>
            <div className="contact-items">
              <div className="contact-item"><Phone size={22} /><div><div className="contact-label">가맹문의</div><strong>1588-6020</strong></div></div>
              <div className="contact-item"><CheckCircle2 size={22} /><div><div className="contact-label">카카오톡 채널</div><strong>@청년38국수</strong></div></div>
            </div>
          </div>
          <div className="contact-right">
            <div className="company-info">
              <div className="ci-logo"><img src="/images/common/38%EA%B5%AD%EC%88%98%20%EC%97%A0%EB%B8%94%EB%9F%BC.png" alt="로고" /></div>
              <div className="ci-name">주식회사 HBS</div>
              <div className="ci-en">HBS Co., Ltd.<br />(Happy Bridge Sudogwon)</div>
              <div className="ci-detail">
                <div>대표 이구승</div>
                <div>서울특별시 광진구 천호대로 615 2층</div>
                <div>사업자등록번호 445-88-02233</div>
              </div>
            </div>
          </div>
        </div>

        <div className="proposal-footer">
          본 제안서는 가맹 상담을 위한 소개 자료이며, 구체적인 계약 조건·수치는 가맹 상담 시 별도 안내드립니다.<br />
          © 2026 청년38국수 · 주식회사 HBS. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default Proposal;
