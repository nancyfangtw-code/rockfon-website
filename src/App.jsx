import { useState } from 'react'
import './App.css'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 'mono',
      name: 'Mono Acoustic',
      desc: '無縫吸音天花系統',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
        'https://images.unsplash.com/photo-1497366412874-3415097a27e7',
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      ],
      detail:
        'Rockfon Mono Acoustic 是高階無縫吸音天花系統，適合需要整體美觀、優異聲學表現與高質感室內設計的空間。',
      features: ['無縫整體外觀', '高吸音表現', '適合高端設計空間', '可改善混響時間'],
      applications: ['企業總部', '飯店大廳', '展示空間', '高級住宅'],
    },
    {
      id: 'sonar',
      name: 'Sonar',
      desc: '高性能模組化吸音天花',
      images: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
        'https://images.unsplash.com/photo-1497366216548-37526070297c',
        'https://images.unsplash.com/photo-1604328698692-f76ea9498e76',
      ],
      detail:
        'Sonar 系列適合辦公室、會議室、教育空間與商業建築，兼具高吸音性能與施工效率。',
      features: ['高 NRC 吸音', '模組化施工', '外觀簡潔', '維修方便'],
      applications: ['辦公室', '會議室', '學校', '商場'],
    },
    {
      id: 'blanka',
      name: 'Blanka',
      desc: '高白度、高反射率天花板',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
        'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa',
        'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3',
      ],
      detail:
        'Blanka 系列具有高白度與高光反射率，可提升空間明亮感，並有助於降低照明能耗。',
      features: ['高白度', '高反射率', '提升空間亮度', '適合大面積空間'],
      applications: ['辦公室', '公共空間', '教育空間'],
    },
    {
      id: 'cleanspace',
      name: 'CleanSpace',
      desc: '醫療與潔淨空間專用系列',
      images: [
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
        'https://images.unsplash.com/photo-1504439468489-c8920d796a29',
        'https://images.unsplash.com/photo-1586773860418-d37222d8fce3',
      ],
      detail:
        'CleanSpace 適合醫院、實驗室與潔淨室，具備優異清潔性、防潮穩定性與高衛生標準。',
      features: ['易清潔', '防潮', '適合高衛生要求', '穩定耐用'],
      applications: ['醫院', '實驗室', '潔淨室'],
    },
    {
      id: 'eclipse',
      name: 'Eclipse',
      desc: '懸吊式吸音雲朵',
      images: [
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2',
      ],
      detail:
        'Eclipse 為高設計感懸吊式吸音雲朵，適合挑高空間、開放式辦公室、餐廳與公共空間聲學改善。',
      features: ['設計感造型', '局部吸音', '施工彈性高', '適合挑高空間'],
      applications: ['餐廳', '開放辦公室', '商場', '公共空間'],
    },
  ]

  if (selectedProduct) {
    return (
      <div className="website">
        <nav className="navbar">
          <div className="logo" onClick={() => setSelectedProduct(null)}>
            ROCKFON
          </div>

          <div className="nav-links">
            <button className="nav-button" onClick={() => setSelectedProduct(null)}>
              回首頁
            </button>
          </div>
        </nav>

        <section className="product-detail-page">
          <button className="back-button" onClick={() => setSelectedProduct(null)}>
            ← 回產品總覽
          </button>

          <h1>{selectedProduct.name}</h1>

          <p className="product-detail-subtitle">
            {selectedProduct.desc}
          </p>

          <p className="product-detail-text">
            {selectedProduct.detail}
          </p>

          <div className="gallery">
            {selectedProduct.images.map((img) => (
              <img key={img} src={img} alt={selectedProduct.name} />
            ))}
          </div>

          <h2>產品特色</h2>
          <ul>
            {selectedProduct.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>適用空間</h2>
          <div className="tag-grid">
            {selectedProduct.applications.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="website">
      <nav className="navbar">
        <div className="logo">ROCKFON</div>

        <div className="nav-links">
          <a href="#products">產品系列</a>
          <a href="#applications">應用場域</a>
          <a href="#downloads">送審下載</a>
          <a href="#contact">聯絡我們</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-overlay">
          <p className="eyebrow">European Acoustic Ceiling Solutions</p>

          <h1>Rockfon 高階岩棉吸音天花系統</h1>

          <p className="hero-text">
            為建築師、設計師、工程顧問與業主打造兼具聲學、防火、防潮與美學的專業天花解決方案。
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn primary">
              查看產品系列
            </a>

            <a href="#downloads" className="btn secondary">
              下載送審資料
            </a>
          </div>
        </div>
      </header>

      <section className="section intro">
        <p className="section-label">Brand Advantage</p>

        <h2>為高規格建築空間而生</h2>

        <p className="section-desc">
          Rockfon 以岩棉為核心材料，提供優異吸音、防火、防潮與室內空氣品質表現。
        </p>
      </section>

      <section className="section dark-section" id="products">
        <p className="section-label gold">Product Portfolio</p>

        <h2>主要產品系列</h2>

        <div className="product-grid">
          {products.map((item) => (
            <div
              className="product-card clickable"
              key={item.id}
              onClick={() => setSelectedProduct(item)}
            >
              <h3>{item.name}</h3>

              <p className="product-desc">{item.desc}</p>

              <p>{item.detail}</p>

              <p className="read-more">查看詳細說明 →</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="applications">
        <p className="section-label">Applications</p>

        <h2>應用場域</h2>

        <div className="application-grid">
          <div className="application-card">辦公室</div>
          <div className="application-card">醫療空間</div>
          <div className="application-card">學校</div>
          <div className="application-card">飯店</div>
          <div className="application-card">商場</div>
          <div className="application-card">潔淨室</div>
        </div>
      </section>

      <section className="section downloads" id="downloads">
        <p className="section-label">Submittal Package</p>

        <h2>送審資料下載</h2>

        <div className="download-grid">
          <div className="download-card">
            <h3>產品型錄</h3>
            <p>產品系列介紹與應用建議。</p>
            <button>下載 PDF</button>
          </div>

          <div className="download-card">
            <h3>測試報告</h3>
            <p>吸音、防火與防潮相關文件。</p>
            <button>下載 PDF</button>
          </div>

          <div className="download-card">
            <h3>安裝手冊</h3>
            <p>施工方式與系統節點說明。</p>
            <button>下載 PDF</button>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-label gold">Contact</p>

          <h2>需要產品建議或送審協助？</h2>

          <p>我們可協助產品選型、規格比對與送審資料準備。</p>
        </div>

        <form>
          <input type="text" placeholder="姓名 / 公司" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="專案名稱" />
          <textarea placeholder="請簡述需求"></textarea>
          <button type="button">送出諮詢</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Rockfon Product Website Demo</p>
      </footer>
    </div>
  )
}

export default App