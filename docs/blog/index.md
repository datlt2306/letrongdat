---
title: Polytuts Learning | Học lập trình web hiệu quả
description: Nền tảng học lập trình web trực tuyến với JavaScript, React, Node.js và các công nghệ web hiện đại
---

# Polytuts Learning

<div class="hero-section">
  <div class="hero-content">
    <h2 class="animated-title">Khám phá thế giới <span class="accent">lập trình web</span></h2>
    <p class="hero-description">Học lập trình web từ cơ bản đến nâng cao với lộ trình rõ ràng, bài giảng chất lượng và cộng đồng hỗ trợ.</p>
    <div class="cta-buttons">
      <a href="/courses" class="primary-button">Khám phá khóa học</a>
      <a href="/demo" class="secondary-button">Dùng thử miễn phí</a>
    </div>
  </div>
  <div class="hero-3d-element">
    <div class="cube">
      <div class="face front">HTML</div>
      <div class="face back">CSS</div>
      <div class="face right">JS</div>
      <div class="face left">React</div>
      <div class="face top">Node</div>
      <div class="face bottom">API</div>
    </div>
  </div>
</div>

<div class="features-section">
  <h2 class="section-title">Tại sao chọn <span class="accent">Polytuts</span></h2>
  <div class="features-grid">
    <div class="feature-card" data-tilt>
      <div class="feature-icon">🚀</div>
      <h3>Lộ trình rõ ràng</h3>
      <p>Học theo lộ trình được thiết kế bởi chuyên gia giúp bạn phát triển kỹ năng nhanh chóng</p>
    </div>
    <div class="feature-card" data-tilt>
      <div class="feature-icon">💻</div>
      <h3>Thực hành thực tế</h3>
      <p>Xây dựng các dự án thực tế, áp dụng kiến thức vào công việc ngay lập tức</p>
    </div>
    <div class="feature-card" data-tilt>
      <div class="feature-icon">👥</div>
      <h3>Cộng đồng hỗ trợ</h3>
      <p>Tham gia cộng đồng học tập sôi động, nhận sự hỗ trợ từ mentors và bạn học</p>
    </div>
  </div>
</div>

<div class="courses-preview">
  <h2 class="section-title">Khóa học <span class="accent">nổi bật</span></h2>
  <div class="course-cards">
    <div class="course-card floating">
      <div class="course-image">
        <img src="https://via.placeholder.com/800x450.png?text=Web+Development+Course" alt="Web Development Course" />
      </div>
      <div class="course-info">
        <h3>Lập trình web từ Zero đến Hero</h3>
        <p class="course-description">Học đầy đủ HTML, CSS, JavaScript và xây dựng website đầu tiên của bạn.</p>
        <a href="/courses/web-dev" class="course-link">Xem chi tiết →</a>
      </div>
    </div>
    
    <div class="course-card floating">
      <div class="course-image">
        <img src="https://via.placeholder.com/800x450.png?text=React+Course" alt="React Course" />
      </div>
      <div class="course-info">
        <h3>React.js cho người mới bắt đầu</h3>
        <p class="course-description">Làm chủ thư viện React và xây dựng ứng dụng web hiện đại.</p>
        <a href="/courses/react" class="course-link">Xem chi tiết →</a>
      </div>
    </div>
    
    <div class="course-card floating">
      <div class="course-image">
        <img src="https://via.placeholder.com/800x450.png?text=Full+Stack+Course" alt="Full Stack Course" />
      </div>
      <div class="course-info">
        <h3>Full Stack JavaScript Developer</h3>
        <p class="course-description">Làm chủ cả Front-end và Back-end với Node.js, Express và MongoDB.</p>
        <a href="/courses/fullstack" class="course-link">Xem chi tiết →</a>
      </div>
    </div>
  </div>
</div>

<div class="testimonials">
  <h2 class="section-title">Học viên nói gì về <span class="accent">Polytuts</span></h2>
  <div class="testimonial-carousel">
    <div class="testimonial active">
      <div class="testimonial-content">
        <p>"Polytuts đã giúp tôi chuyển đổi từ ngành kinh tế sang lập trình chỉ trong vòng 6 tháng. Các bài giảng rất dễ hiểu và thực tế."</p>
        <div class="testimonial-author">
          <img src="https://via.placeholder.com/60x60" alt="Nguyễn Văn A" class="author-avatar" />
          <div class="author-info">
            <h4>Nguyễn Văn A</h4>
            <p>Frontend Developer tại Tech Company</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-nav">
    <span class="nav-dot active"></span>
    <span class="nav-dot"></span>
    <span class="nav-dot"></span>
  </div>
</div>

<div class="cta-section">
  <h2>Sẵn sàng bắt đầu hành trình lập trình của bạn?</h2>
  <p>Đăng ký ngay hôm nay và nhận ưu đãi 20% cho khóa học đầu tiên</p>
  <a href="/register" class="primary-button">Đăng ký ngay</a>
</div>

<style>
/* Base Styles */
:root {
  --primary-color: #4f46e5;
  --primary-light: #818cf8;
  --primary-dark: #4338ca;
  --secondary-color: #06b6d4;
  --text-color: var(--vp-c-text-1);
  --background: var(--vp-c-bg);
  --card-bg: var(--vp-c-bg-soft);
  --card-border: var(--vp-c-divider);
  --card-hover-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

body {
  perspective: 1000px;
  overflow-x: hidden;
}

.accent {
  color: var(--primary-color);
  position: relative;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
}

/* Hero Section */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
}

.hero-content {
  flex: 1;
  z-index: 2;
  animation: fadeIn 1s ease-in-out;
}

.animated-title {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  position: relative;
  animation: slideInUp 0.8s ease-out;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  animation: slideInUp 1s ease-out;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  animation: slideInUp 1.2s ease-out;
}

.primary-button {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
}

.primary-button:hover {
  background: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.secondary-button {
  display: inline-block;
  background: transparent;
  color: var(--primary-color);
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  border: 2px solid var(--primary-color);
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
}

.secondary-button:hover {
  background: rgba(79, 70, 229, 0.1);
  transform: translateY(-3px);
}

/* 3D Cube Animation */
.hero-3d-element {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  perspective: 1000px;
}

.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 20s infinite linear;
  transition: transform 0.3s ease;
}

.cube:hover {
  animation-play-state: paused;
}

.face {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(79, 70, 229, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  backface-visibility: visible;
  transition: all 0.3s ease;
}

.face:hover {
  background: rgba(79, 70, 229, 1);
  box-shadow: 0 0 30px rgba(79, 70, 229, 0.6);
}

.front {
  transform: translateZ(100px);
  background: var(--primary-color);
}

.back {
  transform: rotateY(180deg) translateZ(100px);
  background: var(--secondary-color);
}

.right {
  transform: rotateY(90deg) translateZ(100px);
  background: var(--primary-color);
}

.left {
  transform: rotateY(-90deg) translateZ(100px);
  background: var(--secondary-color);
}

.top {
  transform: rotateX(90deg) translateZ(100px);
  background: var(--primary-color);
}

.bottom {
  transform: rotateX(-90deg) translateZ(100px);
  background: var(--secondary-color);
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: var(--background);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: var(--card-bg);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid var(--card-border);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.feature-card:hover {
  transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
  box-shadow: var(--card-hover-shadow);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Courses Preview */
.courses-preview {
  padding: 5rem 0;
}

.course-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.course-card {
  background: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--card-border);
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.floating {
  animation: float 5s ease-in-out infinite;
}

.course-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: var(--card-hover-shadow);
}

.course-image {
  height: 200px;
  overflow: hidden;
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.course-card:hover .course-image img {
  transform: scale(1.1);
}

.course-info {
  padding: 1.5rem;
}

.course-info h3 {
  margin-top: 0;
  color: var(--text-color);
  font-size: 1.25rem;
}

.course-description {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.course-link {
  color: var(--primary-color);
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.course-link:hover {
  transform: translateX(5px);
}

/* Testimonials */
.testimonials {
  padding: 5rem 0;
  background: var(--card-bg);
  position: relative;
  overflow: hidden;
}

.testimonial-carousel {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  height: 250px;
}

.testimonial {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translateX(50px);
}

.testimonial.active {
  opacity: 1;
  transform: translateX(0);
}

.testimonial-content {
  background: var(--background);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
}

.author-info p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.carousel-nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot.active {
  background: var(--primary-color);
  transform: scale(1.2);
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 10px;
  margin: 3rem 0;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-section .primary-button {
  background: white;
  color: var(--primary-color);
  padding: 1rem 3rem;
  font-size: 1.1rem;
}

.cta-section .primary-button:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from { 
    transform: translateY(30px);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes rotateCube {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    margin-bottom: 3rem;
  }
  
  .animated-title {
    font-size: 2.5rem;
  }
  
  .cta-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .features-grid,
  .course-cards {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-3d-element {
    height: 300px;
  }
  
  .cube {
    width: 150px;
    height: 150px;
  }
  
  .face {
    width: 150px;
    height: 150px;
    font-size: 24px;
  }
  
  .front { transform: translateZ(75px); }
  .back { transform: rotateY(180deg) translateZ(75px); }
  .right { transform: rotateY(90deg) translateZ(75px); }
  .left { transform: rotateY(-90deg) translateZ(75px); }
  .top { transform: rotateX(90deg) translateZ(75px); }
  .bottom { transform: rotateX(-90deg) translateZ(75px); }
}

/* Add JavaScript for 3D tilt effect */
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('[data-tilt]');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = x / rect.width - 0.5;
      const yPercent = y / rect.height - 0.5;
      
      this.style.transform = `perspective(1000px) rotateX(${yPercent * -10}deg) rotateY(${xPercent * 10}deg) translateZ(20px)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
  
  // Testimonial carousel
  const dots = document.querySelectorAll('.nav-dot');
  const testimonials = document.querySelectorAll('.testimonial');
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Remove active class from all dots and testimonials
      dots.forEach(d => d.classList.remove('active'));
      testimonials.forEach(t => t.classList.remove('active'));
      
      // Add active class to current dot and testimonial
      dot.classList.add('active');
      testimonials[index].classList.add('active');
    });
  });
});
</style>
