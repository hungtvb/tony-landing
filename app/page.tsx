import Image from "next/image";
import ScrollMotion from "@/components/motion/ScrollMotion";
import TonyCanvas from "@/components/three/TonyCanvas";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const signatureDrinks = [
  { index: "01", name: "Trà Vải Hoa Hồng", note: "Thanh nhẹ · hoa hồng · vải mọng", price: "35K", color: "rose", tag: "Best seller" },
  { index: "02", name: "Trà Xoài Chanh Dây", note: "Chua ngọt · nhiệt đới · tươi sáng", price: "39K", color: "mango", tag: "Fresh mood" },
  { index: "03", name: "Coco Matcha", note: "Matcha dịu · nước dừa · kem béo", price: "40K", color: "matcha", tag: "Slow day" },
  { index: "04", name: "Sữa Dâu Kem Muối", note: "Dâu thật · sữa mịn · kem mằn mặn", price: "30K", color: "berry", tag: "Sweet pick" },
];

const menuGroups = [
  {
    number: "01", title: "Trà trái cây", subtitle: "Tươi, thanh và dễ uống", className: "fruit",
    items: [["Trà Vải Hoa Hồng", "35K"], ["Trà Xoài Chanh Dây", "39K"], ["Trà Đào", "35K"], ["Trà Dâu", "30K"], ["Trà Tắc", "15K"]],
  },
  {
    number: "02", title: "Matcha & sữa chua", subtitle: "Mịn, béo vừa và thơm dịu", className: "soft",
    items: [["Matcha Latte", "30K"], ["Coco Matcha", "40K"], ["Sữa Chua Việt Quất", "30K"], ["Sữa Chua Dâu", "30K"], ["Sữa Chua Vải", "Tại tiệm"]],
  },
  {
    number: "03", title: "Soda & giải nhiệt", subtitle: "Mát lạnh cho ngày nắng", className: "sunny",
    items: [["Soda Vải", "30K"], ["Soda Việt Quất", "30K"], ["Soda Chanh", "30K"], ["Nha Đam Hạt Chia", "30K"], ["Dừa Tắc", "Tại tiệm"]],
  },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SparkIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M12 2c.55 5.28 4.72 9.45 10 10-5.28.55-9.45 4.72-10 10-.55-5.28-4.72-9.45-10-10 5.28-.55 9.45-4.72 10-10Z" stroke="currentColor" strokeWidth="1.5" /></svg>;
}

export default function Home() {
  return (
    <main>
      <ScrollMotion />
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="pointer-aura" aria-hidden="true" />

      <nav className="nav shell" aria-label="Điều hướng chính">
        <a className="brand magnetic" href="#top" aria-label="Tiệm Trà Tony - Trang chủ">
          <span className="brand-mark"><Image src={`${basePath}/tony-logo.jpg`} alt="" width={46} height={46} unoptimized /></span>
          <span className="brand-copy"><strong>TONY</strong><small>tea & tiny joys</small></span>
        </a>
        <div className="nav-links">
          <a href="#signature">Signature</a><a href="#full-menu">Menu</a><a href="#story">Câu chuyện</a>
        </div>
        <a className="nav-cta magnetic" href="#order"><span>Đặt món</span><ArrowIcon /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-orb orb-a" aria-hidden="true" /><div className="hero-orb orb-b" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow reveal-line"><SparkIcon /> Pha mới mỗi ngày · Thủ Đức</div>
          <h1 aria-label="Một chút ngọt ngào cho ngày của bạn">
            <span className="hero-line"><i>Một chút</i></span>
            <span className="hero-line accent"><i>ngọt ngào</i></span>
            <span className="hero-line small"><i>cho ngày của bạn.</i></span>
          </h1>
          <div className="hero-bottom reveal-line">
            <p>Trà tươi, trái cây vừa đủ và những niềm vui nhỏ được pha chậm rãi trong từng ly.</p>
            <a className="circle-link magnetic" href="#signature" aria-label="Khám phá menu"><ArrowIcon /></a>
          </div>
        </div>

        <div className="hero-stage">
          <div className="stage-ring ring-a" /><div className="stage-ring ring-b" />
          <div className="image-frame"><Image src={`${basePath}/tony-hero.png`} alt="Ly Trà Vải Hoa Hồng với vải tươi và cánh hoa" fill priority unoptimized sizes="(max-width: 900px) 100vw, 46vw" /></div>
          <div className="hero-scene" aria-hidden="true"><TonyCanvas /></div>
          <div className="stage-label label-one"><span>Signature no. 01</span><strong>Vải Hoa Hồng</strong></div>
          <div className="stage-label label-two"><span>pha mới</span><strong>35K</strong></div>
        </div>

        <div className="hero-stats" aria-label="Thông tin nổi bật">
          <div><strong>4.9</strong><span>khách yêu thích</span></div><div><strong>100%</strong><span>pha khi đặt</span></div><div><strong>15′</strong><span>sẵn sàng</span></div>
        </div>
        <a className="scroll-cue" href="#signature"><span>Cuộn để khám phá</span><i /></a>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">
        {[0, 1].map((copy) => <div key={copy}><span>TRÀ TƯƠI</span><i>✦</i><span>VỊ TỰ NHIÊN</span><i>✦</i><span>PHA BẰNG NIỀM VUI</span><i>✦</i></div>)}
      </div></div>

      <section className="signature shell" id="signature">
        <div className="signature-intro">
          <p className="kicker">Tony tuyển chọn · 04 vị</p>
          <h2>Mỗi mood,<br /><em>một ly.</em></h2>
          <p className="section-lead">Bốn món được gọi nhiều nhất. Mỗi ly có một cá tính riêng — kéo, nghiêng và chọn mood hợp với bạn.</p>
          <div className="section-counter"><span>01</span><i /><span>04</span></div>
        </div>
        <div className="drink-stack">
          {signatureDrinks.map((drink) => (
            <article className={`drink-card ${drink.color}`} data-tilt key={drink.name}>
              <div className="card-glow" />
              <div className="card-topline"><span>{drink.index}</span><small>{drink.tag}</small></div>
              <div className="ingredient-orbit" aria-hidden="true"><i /><i /><i /></div>
              <div className="drink-card-copy"><h3>{drink.name}</h3><p>{drink.note}</p></div>
              <div className="drink-card-foot"><strong>{drink.price}</strong><span className="card-arrow"><ArrowIcon /></span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mood-lab" id="full-menu">
        <div className="mood-noise" aria-hidden="true" />
        <div className="shell">
          <header className="mood-heading">
            <p className="kicker">Menu · Mood lab</p>
            <h2>Hôm nay bạn<br />muốn vị gì?</h2>
            <p>Chọn một mood. Tony cân bằng độ ngọt và đá theo cách bạn thích.</p>
          </header>
          <div className="menu-groups">
            {menuGroups.map((group) => (
              <article className={`menu-group ${group.className}`} data-tilt key={group.title}>
                <header><span>{group.number}</span><div><h3>{group.title}</h3><p>{group.subtitle}</p></div></header>
                <ul>{group.items.map(([name, price]) => <li key={name}><span>{name}</span><i /><strong>{price}</strong></li>)}</ul>
                <div className="menu-shape" aria-hidden="true" />
              </article>
            ))}
          </div>
          <p className="menu-note">Độ ngọt và lượng đá đều có thể điều chỉnh khi đặt món.</p>
        </div>
      </section>

      <section className="story shell" id="story">
        <div className="story-visual">
          <div className="story-frame"><Image src={`${basePath}/tony-products.png`} alt="Ba món nước đặc trưng của Tiệm Trà Tony" fill unoptimized sizes="(max-width: 900px) 100vw, 50vw" /></div>
          <div className="story-badge"><span>made with</span><strong>♥</strong><span>in Thủ Đức</span></div>
          <span className="story-caption">Tiny shop · Big heart</span>
        </div>
        <div className="story-content">
          <div className="story-title"><p className="kicker">Một tiệm trà nhỏ</p><h2>Không cầu kỳ.<br /><em>Chỉ thật ngon.</em></h2></div>
          <article className="story-step" data-story-step><span>01</span><div><h3>Nguyên liệu dễ hiểu</h3><p>Trà, trái cây và topping quen thuộc. Không giấu vị ngon sau quá nhiều thứ.</p></div></article>
          <article className="story-step" data-story-step><span>02</span><div><h3>Cân bằng từng ngụm</h3><p>Ngọt nhẹ tay, thơm vừa đủ và vẫn giữ được vị trà từ đầu đến cuối.</p></div></article>
          <article className="story-step" data-story-step><span>03</span><div><h3>Làm như cho người nhà</h3><p>Mỗi ly chỉ bắt đầu khi bạn đặt — chậm hơn một chút, vui hơn rất nhiều.</p></div></article>
        </div>
      </section>

      <section className="order shell" id="order">
        <div className="order-inner spotlight">
          <div className="order-grid" aria-hidden="true" />
          <p className="kicker">Hôm nay uống gì?</p>
          <h2><span>Chọn một ly.</span><em>Tony làm ngay.</em></h2>
          <p>Đặt giao tận nơi tại Thủ Đức hoặc ghé tiệm mang đi.</p>
          <a className="button magnetic" href="https://food.grab.com" target="_blank" rel="noreferrer"><span>Đặt trên GrabFood</span><ArrowIcon /></a>
          <div className="order-bubble bubble-one">Vải</div><div className="order-bubble bubble-two">Matcha</div><div className="order-bubble bubble-three">Dâu</div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brand-mark"><Image src={`${basePath}/tony-logo.jpg`} alt="" width={42} height={42} unoptimized /></span><span className="brand-copy"><strong>TONY</strong><small>tea & tiny joys</small></span></a>
        <p>© 2026 Tiệm Trà Tony · Thủ Đức</p><a href="#top" className="back-top">Lên đầu trang <span>↑</span></a>
      </footer>

      <a className="mobile-order" href="#order"><span>Đặt món</span><ArrowIcon /></a>
    </main>
  );
}
