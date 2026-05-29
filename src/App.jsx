import { useEffect, useState } from 'react'
import './App.css'

import artic1 from './assets/products/artic01.jpg'
import artic2 from './assets/products/artic02.jpg'
import artic3 from './assets/products/artic03.jpg'
import artic4 from './assets/products/artic10.jpg'
import pacific1 from './assets/products/pacific01.jpg'
import tropic1 from './assets/products/tropic01.jpg'
import tropic2 from './assets/products/tropic02.jpg'
import tropic3 from './assets/products/tropic03.jpg'
import tropic4 from './assets/products/tropic04.jpg'
import sonar1 from './assets/products/sonar01.jpg'
import sonar2 from './assets/products/sonar02.jpg'
import sonar3 from './assets/products/sonar03.jpg'
import sonar4 from './assets/products/sonar04.jpg'
import blanka1 from './assets/products/blanka01.jpg'
import colorall1 from './assets/products/colorall-1.jpg'
import colorall2 from './assets/products/colorall-2.jpg'
import colorall3 from './assets/products/colorall-3.jpg'
import colorallDetail1 from './assets/products/colorall01.jpg'
import colorallDetail2 from './assets/products/colorall02.jpg'
import colorallDetail3 from './assets/products/colorall03.jpg'
import colorallDetail4 from './assets/products/colorall04.jpg'
import colorall34color from './assets/products/colorall-34color.jpg'
import medicare1 from './assets/products/medicare01.jpg'
import medicare2 from './assets/products/medicare02.jpg'
import medicare3 from './assets/products/medicare0.jpg'
import medicare4 from './assets/products/medicare04.jpg'
import cleanspace1 from './assets/products/cleanspace.jpg'
import boxer1 from './assets/products/boxer-1.png'
import baffle1 from './assets/products/baffle01.jpg'
import baffle2 from './assets/products/baffle02.jpg'
import baffle3 from './assets/products/baffle03.jpg'
import baffle4 from './assets/products/baffle04.jpg'
import mono1 from './assets/products/mono01.jpg'
import mono2 from './assets/products/mono02.jpg'
import eclipse1 from './assets/products/Eclipse01.jpg'
import eclipse11color from './assets/products/eclipse-11color.jpg'
import eclipse2 from './assets/products/Eclipse2.jpg'
import eclipse3 from './assets/products/Eclipse3.jpg'
import eclipse4 from './assets/products/Eclipse4.jpg'
import canva1 from './assets/products/canva01.jpg'
import canva2 from './assets/products/canva02.jpg'
import canva3 from './assets/products/canva03.jpg'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isColorAllPaletteOpen, setIsColorAllPaletteOpen] = useState(false)
  const [isEclipsePaletteOpen, setIsEclipsePaletteOpen] = useState(false)
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false)
  const [isInstallationModalOpen, setIsInstallationModalOpen] = useState(false)
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [selectedCaseProduct, setSelectedCaseProduct] = useState(null)
  const catalogDownloads = [
    {
      id: 'artic',
      name: 'Artic',
      path: '/documents/Catalogue/Artic/apac-en-tile-datasheet-rockfon-artic_d_09_2024.pdf',
    },
    {
      id: 'baffles',
      name: 'Baffle',
      path: '/documents/Catalogue/Baffle/apac-en-tile-datasheet-rockfon-universal-baffle_d_09_2024.pdf',
    },
    {
      id: 'blanka',
      name: 'Blanka',
      path: '/documents/Catalogue/Blanka/apac-en-tile-datasheet-rockfon-blanka_d_09_2024.pdf',
    },
    {
      id: 'boxer',
      name: 'Boxer',
      path: '/documents/Catalogue/Boxer/apac-en-tile-datasheet-rockfon-boxer_d_09_2024.pdf',
    },
    {
      id: 'canva',
      name: 'Canva',
      path: '/documents/Catalogue/Canva/apac-en-tile-datasheet-rockfon-canva-wall-panel_d_09_2024.pdf',
    },
    {
      id: 'cleanspace',
      name: 'CleanSpace',
      path: '/documents/Catalogue/CleanSpace/apac-en-tile-datasheet-rockfon-cleanspace-pure_d_09_2024.pdf',
    },
    {
      id: 'color-all',
      name: 'Color-All',
      path: '/documents/Catalogue/Color-All/apac-en-tile-datasheet-rockfon-color-all_d_09_2024.pdf',
    },
    {
      id: 'eclipse',
      name: 'Eclipse',
      path: '/documents/Catalogue/Eclipse/apac-en-tile-datasheet-rockfon-eclipse_d_09_2024.pdf',
    },
    {
      id: 'medicare',
      name: 'MediCare',
      path: '/documents/Catalogue/MediCare/apac-en-tile-datasheet-rockfon-medicare-standard_d_09_2024.pdf',
    },
    {
      id: 'mono-acoustic',
      name: 'Mono Acoustic',
      path: '/documents/Catalogue/Mono Acoustic/APAC-EN Non-catalogue-Tile-Datasheet-Rockfon-Mono-Acoustic_12_2024.pdf',
    },
    {
      id: 'pacific',
      name: 'Pacific',
      path: '/documents/Catalogue/Pacific/apac-en-tile-datasheet-rockfon-pacific_d_09_2024.pdf',
    },
    {
      id: 'sonar',
      name: 'Sonar',
      path: '/documents/Catalogue/Sonar/apac-en-tile-datasheet-rockfon-sonar-activity_d_09_2024.pdf',
    },
    {
      id: 'tropic',
      name: 'Tropic',
      path: '/documents/Catalogue/Tropic/apac-en-tile-datasheet-rockfon-tropic_d_09_2024.pdf',
    },
  ]
  const installationDownloads = [
    {
      id: 'canva',
      name: 'Canva',
      path: '/documents/installation/Canva/rockfon-canva-floor-screen-installation-guide.pdf',
    },
    {
      id: 'cleanspace',
      name: 'CleanSpace',
      path: '/documents/installation/CleanSpace/apac-en-installation-guide-rockfon-system-cleanspace-t24-a-e-67_d_05_2024.pdf',
    },
    {
      id: 'eclipse',
      name: 'Eclipse',
      path: '/documents/installation/Eclipse/rockfon-system-eclipse-island-installation-guide.pdf',
    },
    {
      id: 'mono-acoustic',
      name: 'Mono Acoustic',
      path: '/documents/installation/Mono/Mono-Acoustic-TE-32_D_04_2024.pdf',
    },
    {
      id: 'baffles',
      name: 'Baffle',
      path: '/documents/installation/Baffle/Baffle安裝法2023.pdf',
    },
    {
      id: 'x-edge',
      name: 'X邊緣型式',
      path: '/documents/installation/X 邊緣型式/X邊緣型式安裝法(UK).pdf',
    },
  ]

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [selectedProduct])

  const handlePdfOpen = async (path) => {
    const targetPath = encodeURI(path)

    try {
      const response = await fetch(targetPath, { method: 'HEAD' })

      if (!response.ok) {
        console.warn(`PDF file not found: ${path}`)
        return
      }

      window.open(targetPath, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.warn(`Unable to access PDF file: ${path}`, error)
    }
  }

  const products = [
    {
      id: 'artic',
      category: '基礎產品系列',
      name: 'Rockfon Artic',
      desc: '經濟實惠的基本款白色吸音天花板',
      images: [artic1, artic2, artic3, artic4],
      detail:
        'Rockfon Artic 是基礎型白色吸音天花板，適合需要控制預算、同時仍重視吸音、防潮與穩定性的室內空間。',
      features: [
        'αw 0.90，吸音等級 Class A',
        '抗下陷、抗黴菌性能',
        '相對濕度 100% 環境下保持穩定',
        '依據 EN 13964 / EN 717-1 歸類為 E1 級',
        'VOCs 釋放量極低',
      ],
      applications: ['辦公室', '學校', '商業空間', '公共空間'],
    },
    {
      id: 'pacific',
      category: '基礎產品系列',
      name: 'Rockfon Pacific',
      desc: '輕量化、易搬運安裝的經濟型吸音天花板',
      images: [pacific1],
      detail:
        'Rockfon Pacific 厚度僅約 12mm，重量輕，方便搬運與安裝，適合一般商業與公共空間使用。',
      features: [
        '厚度約 12mm，重量輕',
        'αw 0.80，吸音等級 Class B',
        '抗下陷、抗黴菌性能',
        '相對濕度 100% 環境下保持穩定',
        '依據 EN 13964 / EN 717-1 歸類為 E1 級',
      ],
      applications: ['辦公室', '商業空間', '公共空間', '教育空間'],
    },
    {
      id: 'tropic',
      category: '進階產品系列',
      name: 'Rockfon Tropic',
      desc: '高光反射平滑白色表面，兼具聲學與性價比',
      images: [tropic1, tropic2, tropic3, tropic4],
      detail:
        'Rockfon Tropic 具備良好聲學表現與高光反射平滑白色表面，可提升室內明亮度，是性價比極高的進階產品。',
      features: [
        'NRC 0.90，Class A 級吸音',
        '高光反射的平滑白色表面',
        '提升室內明亮度',
        '優異防火性能',
        '抗下陷、抗霉變能力',
        '可依需求生產 X 邊型及 25mm 厚度',
      ],
      applications: ['辦公室', '學校', '商業空間', '公共工程'],
    },
    {
      id: 'sonar',
      category: '高階產品系列',
      name: 'Rockfon Sonar',
      desc: '高性能模組化吸音天花，具柔和細紋質感',
      images: [sonar1, sonar2, sonar3, sonar4],
      detail:
        'Rockfon Sonar 提供卓越聲學控制能力，表面具輕微細紋質感，觀感柔和且耐污，適合高規格辦公、教育與公共空間。',
      features: [
        'NRC 最高可達 0.95',
        '表面輕微細紋質感處理',
        '觀感柔和且耐污',
        '多樣邊型與尺寸選擇',
        '配合各種設計需求',
      ],
      applications: ['辦公室', '會議室', '學校', '公共空間'],
    },
    {
      id: 'blanka',
      category: '高階產品系列',
      name: 'Rockfon Blanka',
      desc: '超白、深霧面、高光反射率吸音天花板',
      images: [blanka1],
      detail:
        'Rockfon Blanka 具超白深霧面的平滑表面，能提升空間明亮度與質感，並具一流吸音性能。',
      features: [
        '反射率高達 87%',
        '光線擴散 > 99%',
        'NRC 可達 1.00，吸音等級 Class A',
        '板面經防靜電及耐污強化處理',
        '使用壽命長',
      ],
      applications: ['高階辦公室', '學校', '公共空間', '展示空間'],
    },
    {
      id: 'color-all',
      category: '高階產品系列',
      name: 'Rockfon Color-all',
      desc: '多色彩吸音天花，滿足設計與聲學需求',
      images: [colorallDetail1, colorallDetail2, colorallDetail3, colorallDetail4],
      detail:
        'Rockfon Color-all 提供豐富色彩選擇，可讓室內設計同時保有高聲學性能與防火表現。',
      features: [
        '共有 34 種專屬顏色',
        'NRC 達 0.85~0.95',
        '防火 A1 等級性能',
        '表面經抗 UV 處理',
        '色澤長久穩定',
      ],
      applications: ['設計型辦公室', '學校', '餐飲空間', '商場'],
    },
    {
      id: 'medicare',
      category: '特殊性能產品系列',
      name: 'Rockfon MediCare 醫療潔淨系列',
      desc: '專為醫療衛生環境設計的吸音天花系統',
      images: [medicare1, medicare2, medicare3, medicare4],
      detail:
        'Rockfon MediCare 系列專為醫療衛生環境設計，適合手術室、無菌病房、實驗室與製藥廠等高潔淨室內空間。',
      features: [
        '醫療衛生環境專用',
        '適合高潔淨需求',
        '兼具吸音與室內環境品質',
        '適用醫療與實驗空間',
      ],
      applications: ['手術室', '無菌病房', '實驗室', '製藥廠'],
    },
    {
      id: 'cleanspace',
      category: '特殊性能產品系列',
      name: 'Rockfon CleanSpace 潔淨型',
      desc: '潔淨室與食品工業需求專用系列',
      images: [cleanspace1],
      detail:
        'Rockfon CleanSpace 針對潔淨室和食品工業需求設計，具耐化學品腐蝕能力，適合高衛生與高穩定性空間。',
      features: [
        '針對潔淨室與食品工業需求',
        '耐化學品腐蝕',
        '適合高衛生標準空間',
        '防潮穩定',
      ],
      applications: ['實驗室', '無塵車間', '電子廠', '食品加工廠', '廚房'],
    },
    {
      id: 'boxer',
      category: '特殊性能產品系列',
      name: 'Rockfon Boxer 高抗衝擊',
      desc: '高度耐衝擊吸音板',
      images: [boxer1],
      detail:
        'Rockfon Boxer 是高度耐衝擊吸音板，能承受球體撞擊等衝擊而不破損脫落，適合運動與多功能空間。',
      features: [
        '高度耐衝擊',
        '承受球體撞擊',
        '不易破損脫落',
        '兼具吸音與安全性',
      ],
      applications: ['學校體育館', '室內球場', '健身房', '多功能廳'],
    },
    {
      id: 'baffles',
      category: '特殊性能產品系列',
      name: 'Rockfon 障板系列',
      desc: '針對技術空間與噪音空間的吸音解決方案',
      images: [baffle1, baffle2, baffle3, baffle4],
      detail:
        'Rockfon 障板系列可應用於噪聲較大的技術空間，提供高效吸音解決方案。',
      features: [
        'NRC 高達 1.00+',
        '適合大空間吸音改善',
        '針對技術空間設計',
        '可降低噪聲與混響',
      ],
      applications: ['工廠車間', '倉庫', '地下停車場', '技術空間'],
    },
    {
      id: 'mono-acoustic',
      category: '創新設計產品系列',
      name: 'Rockfon Mono Acoustic 無縫聲學天花',
      desc: '無縫一體化吸音天花與牆面系統',
      images: [mono1, mono2],
      detail:
        'Rockfon Mono Acoustic 將出色吸音性能與極致連續表面外觀結合，完成後呈現如石膏抹灰天花般平滑無縫的整體，不見任何板材接縫，卻保有高聲學效能。',
      features: [
        '無縫一體化外觀',
        '可用於天花與牆面',
        '顯著改善室內音質',
        '保有建築空間一體感',
        '被譽為「聽得見的安靜、看不見的吸音」',
      ],
      applications: ['高階辦公室', '展演空間', '飯店大廳', '接待空間'],
    },
    {
      id: 'eclipse',
      category: '創新設計產品系列',
      name: 'Rockfon Eclipse 懸吊式浮板',
      desc: '無框造型、雙面吸音的懸吊式吸音雲朵',
      images: [eclipse1, eclipse2, eclipse3, eclipse4],
      detail:
        'Rockfon Eclipse 板邊無金屬框，四周光滑平直，懸吊後宛如漂浮於空間中的雲朵。正反兩面均覆蓋透聲貼面，可最大化雙面吸音量並提升等效吸聲面積。',
      features: [
        '無框造型，四周光滑平直',
        '雙面吸音，提升等效吸聲面積',
        '標準形狀包含正方形、長方形、圓形等',
        '可依需求定製任意形狀與顏色',
        'Eclipse Colour 子系列提供標準 11 種預選顏色',
      ],
      applications: ['開放式辦公室', '餐廳', '教室', '幼兒園', '挑高空間'],
    },
    {
      id: 'canva',
      category: '創新設計產品系列',
      name: 'Rockfon Canva 藝術牆板',
      desc: '可客製圖案與尺寸的室內吸音牆板',
      images: [canva1, canva2, canva3],
      detail:
        'Rockfon Canva Wall Panel 是多功能且美觀的室內吸音牆板，透過卓越吸音和幾乎無限的設計可能，提升空間聲學與美感。',
      features: [
        '可自訂面板尺寸',
        '可自訂顏色與圖案',
        '可打造牆上的吸音藝術品',
        '改善室內安靜度與設計質感',
      ],
      applications: ['辦公室', '接待空間', '會議室', '教育空間', '商業空間'],
    },
  ]

  const categories = ['基礎產品系列', '進階產品系列', '高階產品系列', '特殊性能產品系列', '創新設計產品系列']
  const catalogDownloadMap = Object.fromEntries(
    catalogDownloads.map((catalog) => [catalog.id, catalog])
  )
  const productMap = Object.fromEntries(products.map((product) => [product.id, product]))
  const caseStudyProducts = catalogDownloads
    .map((catalog) => {
      const product = productMap[catalog.id]

      if (!product) {
        return null
      }

      return {
        id: product.id,
        name: catalog.name,
        fullName: product.name,
      }
    })
    .filter(Boolean)
  const applicationAreas = [
    {
      id: 'office',
      name: '辦公室',
      productIds: ['artic', 'pacific', 'tropic', 'blanka', 'sonar', 'color-all', 'mono-acoustic', 'baffles', 'eclipse', 'canva'],
    },
    {
      id: 'healthcare',
      name: '醫療空間',
      productIds: ['medicare', 'cleanspace', 'color-all', 'canva', 'blanka'],
    },
    {
      id: 'education',
      name: '學校',
      productIds: ['artic', 'tropic', 'blanka', 'sonar', 'color-all', 'mono-acoustic', 'baffles', 'canva', 'eclipse'],
    },
    {
      id: 'sports-leisure',
      name: '休閒運動',
      productIds: ['baffles', 'color-all', 'boxer', 'mono-acoustic', 'sonar', 'canva', 'eclipse'],
    },
    {
      id: 'commercial',
      name: '商業空間',
      productIds: ['pacific', 'artic', 'tropic', 'blanka', 'sonar', 'color-all', 'mono-acoustic', 'baffles', 'canva', 'eclipse'],
    },
    {
      id: 'industrial',
      name: '工業空間',
      productIds: ['baffles', 'color-all', 'cleanspace'],
    },
  ].map((area) => ({
    ...area,
    products: area.productIds
      .map((productId) => {
        const product = productMap[productId]
        const catalog = catalogDownloadMap[productId]

        if (!product || !catalog) {
          return null
        }

        return {
          id: product.id,
          name: catalog.name,
          fullName: product.name,
          path: catalog.path,
        }
      })
      .filter(Boolean),
  }))

  if (selectedProduct) {
    return (
      <div className="website">
        <nav className="navbar">
          <a className="logo" href="https://www.rockunion.com.tw">ROCKUNION</a>
          <div className="nav-links">
            <button className="nav-button" onClick={() => setSelectedProduct(null)}>回首頁</button>
          </div>
        </nav>

        <section className="product-detail-page">
          <button className="back-button" onClick={() => setSelectedProduct(null)}>← 回產品總覽</button>
          <p className="section-label">{selectedProduct.category}</p>
          <h1>{selectedProduct.name}</h1>
          <p className="product-detail-subtitle">{selectedProduct.desc}</p>
          <p className="product-detail-text">{selectedProduct.detail}</p>

          {selectedProduct.id === 'color-all' && (
            <button
              type="button"
              className="colorall-palette-trigger"
              onClick={() => setIsColorAllPaletteOpen(true)}
            >
              <span className="colorall-palette-icon" aria-hidden="true">+</span>
              <span>34種顏色選擇</span>
            </button>
          )}

          {selectedProduct.id === 'eclipse' && (
            <button
              type="button"
              className="colorall-palette-trigger"
              onClick={() => setIsEclipsePaletteOpen(true)}
            >
              <span className="colorall-palette-icon" aria-hidden="true">+</span>
              <span>11種顏色選擇</span>
            </button>
          )}

          <div className="gallery">
            {selectedProduct.images.map((img, index) => (
              <img key={`${selectedProduct.id}-${index}`} src={img} alt={`${selectedProduct.name} ${index + 1}`} />
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

        {isColorAllPaletteOpen && (
          <div
            className="modal-backdrop"
            role="presentation"
            onClick={() => setIsColorAllPaletteOpen(false)}
          >
            <div
              className="image-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="colorall-palette-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                type="button"
                aria-label="關閉"
                onClick={() => setIsColorAllPaletteOpen(false)}
              >
                ×
              </button>
              <h2 id="colorall-palette-title">34種顏色選擇</h2>
              <img src={colorall34color} alt="Rockfon Color-all 34種顏色選擇" />
            </div>
          </div>
        )}

        {isEclipsePaletteOpen && (
          <div
            className="modal-backdrop"
            role="presentation"
            onClick={() => setIsEclipsePaletteOpen(false)}
          >
            <div
              className="image-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="eclipse-palette-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                type="button"
                aria-label="關閉"
                onClick={() => setIsEclipsePaletteOpen(false)}
              >
                ×
              </button>
              <h2 id="eclipse-palette-title">11種顏色選擇</h2>
              <img src={eclipse11color} alt="Rockfon Eclipse 11種顏色選擇" />
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="website">
      <nav className="navbar">
        <a className="logo" href="https://www.rockunion.com.tw">ROCKUNION</a>
        <div className="nav-links">
          <a href="#products">產品系列</a>
          <a href="#applications">應用場域</a>
          <a href="#downloads">送審下載</a>
          <a href="#case-studies">案例分享</a>
          <a href="#contact">聯絡我們</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-overlay">
          <p className="eyebrow">European Acoustic Ceiling Solutions</p>
          <h1>Rockfon 高階岩棉吸音天花板</h1>
          <p className="hero-text">
            從基礎型、進階型、高階設計型到醫療潔淨與特殊性能系列，為建築師、設計師、工程顧問與業主提供完整聲學天花板解決方案。
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn primary">查看產品系列</a>
            <a href="#downloads" className="btn secondary">下載送審資料</a>
          </div>
          <div className="hero-signature">
            <span>純岩棉吸音材料</span>
            <span>健康/高性能雙綠建材標章</span>
            <span>符合防火與低排放標準</span>
          </div>
        </div>
      </header>

      <section className="section dark-section" id="products">
        <p className="section-label gold">Product Portfolio</p>
        <h2>Rockfon 產品系列</h2>

        {categories.map((category) => (
          <div className="product-family" key={category}>
            <h3>{category}</h3>
            <div className="product-grid">
              {products
                .filter((item) => item.category === category)
                .map((item) => (
                  <div
                    className="product-card clickable"
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                  >
                    <div className="product-media">
                      <img src={item.images[0]} alt={item.name} />
                    </div>
                    <div className="product-card-body">
                      <p className="product-category">{item.category}</p>
                      <h3>{item.name}</h3>
                      <p className="product-desc">{item.desc}</p>
                      <p>{item.detail}</p>
                      <p className="read-more">查看詳細說明 →</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section" id="applications">
        <p className="section-label">Applications</p>
        <h2>應用場域</h2>
        <div className="application-grid">
          {applicationAreas.map((area) => (
            <button
              key={area.id}
              type="button"
              className="application-card"
              onClick={() => setSelectedApplication(area)}
            >
              {area.name}
            </button>
          ))}
        </div>
      </section>

      <section className="section downloads" id="downloads">
        <p className="section-label">Submittal Package</p>
        <h2>送審資料下載</h2>
        <div className="download-grid">
          <div className="download-card">
            <h3>產品型錄</h3>
            <p>產品系列介紹與應用建議。</p>
            <button type="button" onClick={() => setIsCatalogModalOpen(true)}>
              下載 PDF
            </button>
          </div>
          <div className="download-card">
            <h3>測試報告</h3>
            <p>吸音、防火、防潮與室內空氣品質相關文件。</p>
            <button>下載 PDF</button>
          </div>
          <div className="download-card">
            <h3>安裝手冊</h3>
            <p>施工方式與系統節點說明。</p>
            <button type="button" onClick={() => setIsInstallationModalOpen(true)}>
              下載 PDF
            </button>
          </div>
        </div>
      </section>

      <section className="section case-studies" id="case-studies">
        <p className="section-label">Case Studies</p>
        <h2>案例分享</h2>
        <p className="section-desc">
          先依產品分類建立案例入口。各產品詳細案例內容之後可直接補進來。
        </p>
        <div className="case-study-grid">
          {caseStudyProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              className="case-study-card"
              onClick={() => setSelectedCaseProduct(product)}
            >
              <span>{product.name}</span>
              <small>{product.fullName}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="section-label gold">Contact</p>
          <h2>需要產品建議或送審協助？</h2>
          <p>我們可協助產品選型、規格比對與工程送審資料準備。</p>
        </div>
        <form action="https://formspree.io/f/maqkvzad" method="POST">
          <input type="text" name="name" placeholder="姓名 / 公司" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="phone" placeholder="專案名稱" />
          <textarea name="message" placeholder="請簡述需求"></textarea>
          <button type="submit">送出諮詢</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Rockfon Product Website Demo</p>
      </footer>

      {isCatalogModalOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setIsCatalogModalOpen(false)}
        >
          <div
            className="catalog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalog-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="關閉"
              onClick={() => setIsCatalogModalOpen(false)}
            >
              ×
            </button>
            <p className="section-label gold">Product Catalogues</p>
            <h2 id="catalog-modal-title">選擇產品型錄</h2>
            <div className="catalog-modal-list">
              {catalogDownloads.map((catalog) => (
                <div className="catalog-modal-item" key={catalog.path}>
                  <span>{catalog.name}</span>
                  <button type="button" onClick={() => handlePdfOpen(catalog.path)}>
                    下載
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isInstallationModalOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setIsInstallationModalOpen(false)}
        >
          <div
            className="catalog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="installation-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="關閉"
              onClick={() => setIsInstallationModalOpen(false)}
            >
              ×
            </button>
            <p className="section-label gold">Installation Guides</p>
            <h2 id="installation-modal-title">選擇安裝手冊</h2>
            <div className="catalog-modal-list">
              {installationDownloads.map((installation) => (
                <div className="catalog-modal-item" key={installation.path}>
                  <span>{installation.name}</span>
                  <button type="button" onClick={() => handlePdfOpen(installation.path)}>
                    下載
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedApplication && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setSelectedApplication(null)}
        >
          <div
            className="catalog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="關閉"
              onClick={() => setSelectedApplication(null)}
            >
              ×
            </button>
            <p className="section-label gold">Applications</p>
            <h2 id="application-modal-title">{selectedApplication.name} 對應產品</h2>
            <div className="catalog-modal-list">
              {selectedApplication.products.map((product) => (
                <button
                  key={`${selectedApplication.id}-${product.id}`}
                  type="button"
                  className="application-product-button"
                  onClick={() => handlePdfOpen(product.path)}
                >
                  <span>{product.name}</span>
                  <small>{product.fullName}</small>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedCaseProduct && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setSelectedCaseProduct(null)}
        >
          <div
            className="catalog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="關閉"
              onClick={() => setSelectedCaseProduct(null)}
            >
              ×
            </button>
            <p className="section-label gold">Case Studies</p>
            <h2 id="case-study-modal-title">{selectedCaseProduct.name} 案例分享</h2>
            <div className="case-study-placeholder">
              <strong>{selectedCaseProduct.fullName}</strong>
              <p>此產品的案例資料之後再補上。目前先保留入口與版位。</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
