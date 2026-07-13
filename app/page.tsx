import Image from "next/image";

const signatureDrinks = [
  {
    index: "01",
    name: "Trà Vải Hoa Hồng",
    note: "Thanh nhẹ · thơm hoa hồng · vải mọng",
    price: "35K",
    color: "rose",
  },
  {
    index: "02",
    name: "Trà Xoài Chanh Dây",
    note: "Chua ngọt · nhiệt đới · tươi sáng",
    price: "39K",
    color: "mango",
  },
  {
    index: "03",
    name: "Coco Matcha",
    note: "Matcha dịu · nước dừa · kem béo",
    price: "40K",
    color: "matcha",
  },
  {
    index: "04",
    name: "Sữa Dâu Kem Muối",
    note: "Dâu thật · sữa mịn · kem mằn mặn",
    price: "30K",
    color: "berry",
  },
];

const menuGroups = [
  {
    title: "Trà trái cây",
    subtitle: "Tươi, thanh và dễ uống",
    items: [
      ["Trà Vải Hoa Hồng", "35K"],
      ["Trà Xoài Chanh Dây", "39K"],
      ["Trà Đào", "35K"],
      ["Trà Dâu", "30K"],
      ["Trà Tắc", "15K"],
    ],
  },
  {
    title: "Matcha & sữa chua",
    subtitle: "Mịn, béo vừa và thơm dịu",
    items: [
      ["Matcha Latte", "30K"],
      ["Coco Matcha", "40K"],
      ["Sữa Chua Việt Quất", "30K"],
      ["Sữa Chua Dâu", "30K"],
      ["Sữa Chua Vải", "Tại tiệm"],
    ],
  },
  {
    title: "Soda & giải nhiệt",
    subtitle: "Mát lạnh cho ngày nắng",
    items: [
      ["Soda Vải", "30K"],
      ["Soda Việt Quất", "30K"],
      ["Soda Chanh", "30K"],
      ["Nha Đam Hạt Chia", "30K"],
      ["Dừa Tắc", "Tại tiệm"],
      ["Nước Dừa Hạt Đác", "30K"],
    ],
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 2c.55 5.28 4.72 9.45 10 10-5.28.55-9.45 4.72-10 10-.55-5.28-4.72-9.45-10-10 5.28-.55 9.45-4.72 10-10Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Điều hướng chính">
        <a className="brand" href="#top" aria-label="Tiệm Trà Tony - Trang chủ">
          <span className="brand-mark"><Image src="/tony-logo.jpg" alt="" width={44} height={44} unoptimized /></span>
          <span>Tiệm Trà Tony</span>
        </a>
        <div className="nav-links">
          <a href="#signature">Món nổi bật</a>
          <a href="#full-menu">Menu</a>
          <a href="#story">Câu chuyện</a>
        </div>
        <a className="nav-cta" href="#order">
          Đặt món <ArrowIcon />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><SparkIcon /> Trà pha mới mỗi ngày · Thủ Đức</div>
          <h1>
            Một chút <span>ngọt ngào</span>
            <br />cho ngày của bạn.
          </h1>
          <p className="hero-lead">
            Những ly trà tươi, vị cân bằng và một chút đáng yêu — được làm chậm rãi để bạn thưởng thức thật vui.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#signature">Xem menu <ArrowIcon /></a>
            <a className="text-link" href="#story">Gặp Tony <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Thông tin nổi bật">
            <div><strong>4.9</strong><span>Khách yêu thích</span></div>
            <div><strong>100%</strong><span>Pha mới khi đặt</span></div>
            <div><strong>15′</strong><span>Sẵn sàng nhanh</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Trà Vải Hoa Hồng đặc trưng">
          <div className="image-frame">
            <Image src="/tony-hero.png" alt="Ly Trà Vải Hoa Hồng với vải tươi và cánh hoa" fill priority unoptimized sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div className="floating-card card-top"><span>Signature</span><strong>Trà Vải<br />Hoa Hồng</strong></div>
          <div className="floating-card card-bottom"><span>từ</span><strong>35.000đ</strong></div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>TRÀ TƯƠI</span><i>✦</i><span>VỊ TỰ NHIÊN</span><i>✦</i><span>PHA BẰNG NIỀM VUI</span><i>✦</i>
          <span>TRÀ TƯƠI</span><i>✦</i><span>VỊ TỰ NHIÊN</span><i>✦</i><span>PHA BẰNG NIỀM VUI</span><i>✦</i>
        </div>
      </div>

      <section className="menu-section shell" id="signature">
        <div className="section-heading">
          <div>
            <p className="kicker">Tony tuyển chọn</p>
            <h2>Những vị bạn sẽ nhớ.</h2>
          </div>
          <p>Bốn món được gọi nhiều nhất — mỗi ly có một cá tính riêng, nhưng đều giữ vị nhẹ nhàng và dễ uống.</p>
        </div>

        <div className="menu-list">
          {signatureDrinks.map((drink) => (
            <article className="menu-row" key={drink.name}>
              <span className={`drink-dot ${drink.color}`} />
              <span className="menu-index">{drink.index}</span>
              <div className="menu-name"><h3>{drink.name}</h3><p>{drink.note}</p></div>
              <strong className="menu-price">{drink.price}</strong>
              <span className="menu-arrow"><ArrowIcon /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="full-menu" id="full-menu">
        <div className="shell">
          <div className="full-menu-heading">
            <div>
              <p className="kicker">Menu Tiệm Trà Tony</p>
              <h2>Chọn theo mood hôm nay.</h2>
            </div>
            <p>Giá đang áp dụng tại tiệm. Hai món chưa chốt giá được hiển thị là “Tại tiệm”.</p>
          </div>
          <div className="menu-groups">
            {menuGroups.map((group, groupIndex) => (
              <article className={`menu-group group-${groupIndex + 1}`} key={group.title}>
                <div className="menu-group-head">
                  <span>0{groupIndex + 1}</span>
                  <div><h3>{group.title}</h3><p>{group.subtitle}</p></div>
                </div>
                <ul>
                  {group.items.map(([name, price]) => (
                    <li key={name}><span>{name}</span><strong>{price}</strong></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="menu-note">Bạn có thể điều chỉnh độ ngọt và lượng đá khi đặt món.</p>
        </div>
      </section>

      <section className="story shell" id="story">
        <div className="story-image">
          <Image src="/tony-products.png" alt="Ba món nước đặc trưng của Tiệm Trà Tony" fill unoptimized sizes="(max-width: 900px) 100vw, 55vw" />
          <div className="story-sticker"><span>made with</span><strong>♥</strong><span>in Thủ Đức</span></div>
        </div>
        <div className="story-copy">
          <p className="kicker">Một tiệm trà nhỏ</p>
          <h2>Không cần quá cầu kỳ.<br />Chỉ cần thật ngon.</h2>
          <p>Tony bắt đầu từ một ý nghĩ đơn giản: một ly nước đẹp mắt vẫn phải ngon từ ngụm đầu đến ngụm cuối. Vì vậy trà được pha mới, trái cây vừa đủ và độ ngọt luôn nhẹ tay.</p>
          <div className="story-values">
            <div><span>01</span><strong>Nguyên liệu dễ hiểu</strong></div>
            <div><span>02</span><strong>Vị cân bằng, không gắt</strong></div>
            <div><span>03</span><strong>Làm kỹ như cho người nhà</strong></div>
          </div>
        </div>
      </section>

      <section className="order shell" id="order">
        <div className="order-inner">
          <p className="kicker">Hôm nay uống gì?</p>
          <h2>Chọn một ly.<br />Tony làm ngay.</h2>
          <p>Đặt giao tận nơi tại Thủ Đức hoặc ghé tiệm mang đi.</p>
          <a className="button button-dark" href="https://food.grab.com" target="_blank" rel="noreferrer">Đặt trên GrabFood <ArrowIcon /></a>
          <div className="order-bubble bubble-one">Vải</div>
          <div className="order-bubble bubble-two">Matcha</div>
          <div className="order-bubble bubble-three">Dâu</div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brand-mark"><Image src="/tony-logo.jpg" alt="" width={40} height={40} unoptimized /></span><span>Tiệm Trà Tony</span></a>
        <p>© 2026 Tony. Một chút ngọt ngào cho ngày của bạn.</p>
        <a href="#top" className="back-top">Lên đầu trang ↑</a>
      </footer>

      <a className="mobile-order" href="#order">Đặt món <ArrowIcon /></a>
    </main>
  );
}
