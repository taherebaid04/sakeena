const DEFAULT_PROPERTIES = [
  {
    id: "SK-101",
    title: "شقة بانوراما بحديقة في العاشر من رمضان",
    city: "العاشر من رمضان — الحي 14",
    type: "شقة",
    area: 155,
    rooms: 3,
    price: 4200000,
    delivery: "استلام فوري",
    directOwner: true,
    maintenance: "شاملة",
    meters: "شاملة",
    garage: "شاملة",
    pin: { top: "34%", left: "66%" },
    createdAt: 1731000001,
    roomsTour: [
      { name: "الريسبشن الرئيسي", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", note: "ريسبشن واسع بإطلالة على اللاندسكيب والإضاءة الطبيعية." },
      { name: "غرفة المعيشة", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80", note: "مساحة عائلية مريحة متصلة بالبلكونة." },
      { name: "غرفة النوم الرئيسية", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80", note: "غرفة ماستر هادئة بتشطيب عصري." }
    ]
  },
  {
    id: "SK-102",
    title: "فيلا مستقلة مودرن في الشيخ زايد",
    city: "الشيخ زايد — طريق البستان",
    type: "فيلا",
    area: 340,
    rooms: 5,
    price: 18500000,
    delivery: "استلام فوري",
    directOwner: false,
    maintenance: "غير شاملة",
    meters: "شاملة",
    garage: "شاملة",
    pin: { top: "48%", left: "32%" },
    createdAt: 1731000002,
    roomsTour: [
      { name: "الواجهة والحديقة", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80", note: "حديقة خاصة وممر سيارات مظلل." },
      { name: "صالة الاستقبال", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80", note: "أسقف مرتفعة وتشطيب فاخر." },
      { name: "غرفة النوم الرئيسية", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80", note: "جناح نوم متكامل مع دريسنج." }
    ]
  },
  {
    id: "SK-103",
    title: "بنتهاوس بتراس مفتوح في القاهرة الجديدة",
    city: "القاهرة الجديدة — التجمع الخامس",
    type: "بنتهاوس",
    area: 210,
    rooms: 3,
    price: 9800000,
    delivery: "تحت الإنشاء",
    directOwner: true,
    maintenance: "غير محدد",
    meters: "غير محدد",
    garage: "شاملة",
    pin: { top: "62%", left: "58%" },
    createdAt: 1731000003,
    roomsTour: [
      { name: "التراس والروف", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80", note: "جلسة خارجية مفتوحة بإطلالة بانورامية." },
      { name: "الريسبشن", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", note: "توزيع عملي للضوء والتهوية." }
    ]
  },
  {
    id: "SK-104",
    title: "مقر إداري وتجاري متكامل في العاصمة الإدارية",
    city: "العاصمة الإدارية — محور بن زايد",
    type: "تجاري / إداري",
    area: 120,
    rooms: 4,
    price: 7400000,
    delivery: "استلام فوري",
    directOwner: false,
    maintenance: "شاملة",
    meters: "شاملة",
    garage: "غير شاملة",
    pin: { top: "26%", left: "44%" },
    createdAt: 1731000004,
    roomsTour: [
      { name: "منطقة العمل الرئيسية", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80", note: "مساحة مرنة للشركات والمكاتب." },
      { name: "غرفة الاجتماعات", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80", note: "عزل صوتي وإضاءة مناسبة للاجتماعات." }
    ]
  }
];

const SECTION_LABELS = {
  home: "الرئيسية",
  properties: "العقارات والغرف",
  favorites: "المفضلة",
  map: "الخريطة التفاعلية",
  calculators: "الحاسبات",
  guide: "دليل الموقع",
  database: "الداتا بيز المعزولة"
};

const CURRENCY_RATES = {
  EGP: { symbol: "ج.م", rate: 1 },
  USD: { symbol: "$", rate: 0.02 },
  SAR: { symbol: "ر.س", rate: 0.075 }
};

const AREA_UNITS = {
  m2: { label: "م²", factor: 1 },
  sqft: { label: "قدم²", factor: 10.7639 },
  feddan: { label: "فدان", factor: 1 / 4200 },
  qirat: { label: "قيراط", factor: 1 / 175 }
};

class SakinaApp {
  constructor() {
    this.properties = this.loadProperties();
    this.favorites = JSON.parse(localStorage.getItem("sakina_favs") || "[]");
    this.compareList = JSON.parse(localStorage.getItem("sakina_compare") || "[]");
    this.seenIds = JSON.parse(localStorage.getItem("sakina_seen") || "[]");
    this.bookings = JSON.parse(localStorage.getItem("sakina_bookings") || "[]");
    this.hideSeen = false;
    this.filterMode = "all";
    this.activeSection = "home";
    this.homeFeaturedIndex = 0;
    this.homeFeaturedTransitioning = false;

    this.init();
  }

  loadProperties() {
    try {
      const saved = localStorage.getItem("sakina_db_v1");
      if (saved) return JSON.parse(saved);
    } catch (_) {}
    localStorage.setItem("sakina_db_v1", JSON.stringify(DEFAULT_PROPERTIES));
    return [...DEFAULT_PROPERTIES];
  }

  saveProperties() {
    localStorage.setItem("sakina_db_v1", JSON.stringify(this.properties));
  }

  formatPrice(egpAmount) {
    const code = document.getElementById("currencySelect")?.value || "EGP";
    const cfg = CURRENCY_RATES[code] || CURRENCY_RATES.EGP;
    const val = Math.round(egpAmount * cfg.rate);
    return `${val.toLocaleString("en-US")} ${cfg.symbol}`;
  }

  formatArea(m2) {
    const unitKey = document.getElementById("areaUnitSelect")?.value || "m2";
    const cfg = AREA_UNITS[unitKey] || AREA_UNITS.m2;
    const val = cfg.factor === 1 ? m2 : (m2 * cfg.factor).toFixed(2);
    return `${val} ${cfg.label}`;
  }

  init() {
    this.bindDrawer();
    this.bindNavigation();
    this.bindFeaturedHomeControls();
    this.bindTopbarControls();
    this.bindFilters();
    this.bindMap();
    this.bindCalculators();
    this.bindDatabase();
    this.bindModals();
    this.bindChat();

    this.renderSectionData("home");
    this.updateCompareBadge();
    this.updateViewportLabel();
    window.addEventListener("resize", () => this.updateViewportLabel());

    document.getElementById("voiceWelcomeBtn")?.addEventListener("click", () => {
      window.SakinaRobot.welcomeVoice();
    });
  }

  bindDrawer() {
    const drawer = document.getElementById("sideDrawer");
    const backdrop = document.getElementById("drawerBackdrop");
    const openBtn = document.getElementById("menuToggleBtn");
    const closeBtn = document.getElementById("closeDrawerBtn");

    const toggle = (open) => {
      drawer.classList.toggle("open", open);
      backdrop.classList.toggle("open", open);
      openBtn?.setAttribute("aria-expanded", String(open));
      drawer.setAttribute("aria-hidden", String(!open));
      if (open) {
        window.SakinaRobot.announceStage(
          this.activeSection,
          `فتحت قايمة الأقسام! إحنا دلوقتي في قسم ${SECTION_LABELS[this.activeSection]}، واختار أي قسم أو مرحلة علشان نروح لها وأشرحهالك.`
        );
      }
    };

    openBtn?.addEventListener("click", () => toggle(true));
    closeBtn?.addEventListener("click", () => toggle(false));
    backdrop?.addEventListener("click", () => toggle(false));
  }

  bindNavigation() {
    document.querySelectorAll("[data-section]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const sec = el.getAttribute("data-section");
        const calcTab = el.getAttribute("data-calc-tab");
        this.switchSection(sec);
        if (calcTab) this.switchCalcTab(calcTab);
        document.getElementById("sideDrawer")?.classList.remove("open");
        document.getElementById("drawerBackdrop")?.classList.remove("open");
      });
    });
  }

  switchSection(sectionKey) {
    if (!SECTION_LABELS[sectionKey]) return;
    this.activeSection = sectionKey;

    document.querySelectorAll(".page-section").forEach((sec) => {
      sec.classList.toggle("active", sec.id === `section-${sectionKey}`);
    });

    document.querySelectorAll(".drawer-link").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("data-section") === sectionKey);
    });

    const labelEl = document.getElementById("activeSectionLabel");
    if (labelEl) labelEl.textContent = SECTION_LABELS[sectionKey];

    this.renderSectionData(sectionKey);
    window.SakinaRobot.announceStage(sectionKey);
  }

  renderSectionData(sectionKey) {
    if (sectionKey === "home") {
      this.renderFeaturedHome();
      this.renderBookings();
    } else if (sectionKey === "properties") {
      this.renderPropertiesGrid();
    } else if (sectionKey === "favorites") {
      this.renderFavoritesGrid();
    } else if (sectionKey === "map") {
      this.renderMapPins("all");
      this.updateViewportLabel();
    } else if (sectionKey === "calculators") {
      this.populateCalcUnitSelect();
      this.runInstallmentCalc();
      this.runRoiCalc();
      this.runFinishingCalc();
      this.runRentVsBuyCalc();
    } else if (sectionKey === "database") {
      this.renderDbTable();
    }
  }

  bindTopbarControls() {
    const langBtn = document.getElementById("langToggleBtn");
    langBtn?.addEventListener("click", () => {
      const html = document.documentElement;
      const isAr = html.lang === "ar";
      html.lang = isAr ? "en" : "ar";
      html.dir = isAr ? "ltr" : "rtl";
      langBtn.textContent = isAr ? "العربية" : "English";
      window.SakinaRobot.speak(
        isAr
          ? "تمام، فتحنا الموقع بالإنجليزي. ولو حبيت ترجعه عربي دوس على الزر تاني."
          : "رجعنا الموقع عربي، وأنا مساعدك بالعامية المصرية."
      );
    });

    document.getElementById("themeToggleBtn")?.addEventListener("click", () => {
      const html = document.documentElement;
      const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      window.SakinaRobot.speak(
        next === "light" ? "شغلنا الوضع النهاري الفاتح." : "رجعنا للوضع الليلي المريح للعين."
      );
    });

    document.getElementById("heroListenGuideBtn")?.addEventListener("click", () => {
      this.switchSection("guide");
      window.SakinaRobot.speak(
        "ده دليل استخدام سكينة! تقدر تتصفح العقارات، وتقارن بين الوحدات، وتحسب الأقساط والعائد والتشطيب، وتحجز معاينة أو تكلمنا على واتساب."
      );
    });

    document.getElementById("guideListenBtn")?.addEventListener("click", () => {
      window.SakinaRobot.speak(
        "أهلاً بيك في دليل سكينة! كل قسم معمول علشان يسهّل عليك تختار وحدتك، سواء بالبحث والفرز، أو جولة الغرف، أو الحاسبات، أو الخريطة."
      );
    });
  }

  getFilteredProperties() {
    const q = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
    const type = document.getElementById("typeFilter")?.value || "all";
    const delivery = document.getElementById("deliveryFilter")?.value || "all";
    const maxPrice = Number(document.getElementById("maxPriceRange")?.value || 35000000);
    const sort = document.getElementById("sortSelect")?.value || "default";

    let list = this.properties.filter((p) => {
      const matchText = !q || p.title.toLowerCase().includes(q) || p.city.toLowerCase().includes(q);
      const matchType = type === "all" || p.type === type;
      const matchDel = delivery === "all" || p.delivery === delivery;
      const matchPrice = p.price <= maxPrice;
      const matchFav = this.filterMode !== "favorites" || this.favorites.includes(p.id);
      const matchSeen = !this.hideSeen || !this.seenIds.includes(p.id);
      return matchText && matchType && matchDel && matchPrice && matchFav && matchSeen;
    });

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "newest") list.sort((a, b) => b.createdAt - a.createdAt);
    else if (sort === "area-desc") list.sort((a, b) => b.area - a.area);

    return list;
  }

  cardHtml(item, extraClass = "") {
    const isFav = this.favorites.includes(item.id);
    const inCompare = this.compareList.includes(item.id);
    const coverImg = item.roomsTour?.[0]?.img || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80";

    return `
      <article class="prop-card tilt-card ${extraClass}">
        <div class="prop-thumb" style="background-image:url('${coverImg}')">
          <span class="prop-badge">${item.type} • ${item.delivery}</span>
        </div>
        <div class="prop-body">
          <h3>${item.title}</h3>
          <div class="prop-meta">📍 ${item.city}</div>
          <div class="prop-meta">📐 ${this.formatArea(item.area)} • 🛏️ ${item.rooms} غرف</div>
          <div class="prop-price">${this.formatPrice(item.price)}</div>
          <div class="prop-actions">
            <button class="pill-btn glow-btn" onclick="window.SakinaApp.openPropertyDetail('${item.id}')">التفاصيل والجولة</button>
            <button class="icon-btn" onclick="window.SakinaApp.toggleFavorite('${item.id}')" title="المفضلة">${isFav ? "❤️" : "🤍"}</button>
            <button class="icon-btn" onclick="window.SakinaApp.toggleCompare('${item.id}')" title="مقارنة">${inCompare ? "✅" : "⚖️"}</button>
          </div>
        </div>
      </article>
    `;
  }

  renderFeaturedHome() {
    const box = document.getElementById("homeFeaturedGrid");
    if (!box) return;
    if (!this.properties.length) {
      this.homeFeaturedIndex = 0;
      box.innerHTML = `<p class="muted">مفيش عقارات معروضة دلوقتي.</p>`;
      this.updateFeaturedHomeControls();
      return;
    }

    this.homeFeaturedIndex %= this.properties.length;
    const item = this.properties[this.homeFeaturedIndex];
    box.innerHTML = this.cardHtml(item, "featured-property-card");
    this.updateFeaturedHomeControls();
    window.SakinaEffects?.bindTiltCards();
  }

  bindFeaturedHomeControls() {
    document.getElementById("homeFeaturedPrev")?.addEventListener("click", () => {
      this.stepFeaturedHome(-1);
    });
    document.getElementById("homeFeaturedNext")?.addEventListener("click", () => {
      this.stepFeaturedHome(1);
    });
    document.getElementById("homeFeaturedDots")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-featured-index]");
      if (!button) return;
      this.switchFeaturedHome(Number(button.getAttribute("data-featured-index")));
    });
  }

  stepFeaturedHome(direction) {
    if (!this.properties.length) return;
    const nextIndex = (this.homeFeaturedIndex + direction + this.properties.length) % this.properties.length;
    this.switchFeaturedHome(nextIndex);
  }

  switchFeaturedHome(index) {
    if (this.homeFeaturedTransitioning || index === this.homeFeaturedIndex) return;
    if (!Number.isInteger(index) || index < 0 || index >= this.properties.length) return;

    const box = document.getElementById("homeFeaturedGrid");
    const card = box?.querySelector(".featured-property-card");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!card || reduceMotion) {
      this.homeFeaturedIndex = index;
      this.renderFeaturedHome();
      return;
    }

    this.homeFeaturedTransitioning = true;
    this.updateFeaturedHomeControls();
    card.classList.add("featured-breaking");
    window.setTimeout(() => {
      this.homeFeaturedIndex = index;
      this.renderFeaturedHome();
      const nextCard = box?.querySelector(".featured-property-card");
      nextCard?.classList.add("featured-assembling");
      this.homeFeaturedTransitioning = false;
      this.updateFeaturedHomeControls();
    }, 460);
  }

  updateFeaturedHomeControls() {
    const dots = document.getElementById("homeFeaturedDots");
    const count = document.getElementById("homeFeaturedCount");
    if (!dots || !count) return;

    dots.innerHTML = this.properties.map((property, index) => `
      <button
        class="featured-property-dot${index === this.homeFeaturedIndex ? " active" : ""}"
        type="button"
        data-featured-index="${index}"
        aria-label="عرض ${property.title}"
        aria-current="${index === this.homeFeaturedIndex}"
        ${this.homeFeaturedTransitioning ? "disabled" : ""}
      ></button>
    `).join("");
    count.textContent = this.properties.length
      ? `${this.homeFeaturedIndex + 1} / ${this.properties.length}`
      : "0 / 0";

    const disabled = this.homeFeaturedTransitioning || this.properties.length < 2;
    ["homeFeaturedPrev", "homeFeaturedNext"].forEach((id) => {
      const button = document.getElementById(id);
      if (button) button.disabled = disabled;
    });
  }

  renderPropertiesGrid() {
    const box = document.getElementById("propertiesGrid");
    if (!box) return;
    const list = this.getFilteredProperties();
    box.innerHTML = list.length
      ? list.map((p) => this.cardHtml(p)).join("")
      : `<p class="muted">لا توجد وحدات مطابقة للبحث الحالي.</p>`;
    window.SakinaEffects?.bindTiltCards();
  }

  renderFavoritesGrid() {
    const box = document.getElementById("favoritesGrid");
    if (!box) return;
    const favItems = this.properties.filter((p) => this.favorites.includes(p.id));
    box.innerHTML = favItems.length
      ? favItems.map((p) => this.cardHtml(p)).join("")
      : `<p class="muted">لم تقم بحفظ أي عقار في المفضلة بعد.</p>`;
  }

  toggleFavorite(id) {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter((x) => x !== id);
      window.SakinaRobot.speak("شيلنا الوحدة من المفضلة.");
    } else {
      this.favorites.push(id);
      window.SakinaRobot.speak("ضفنا الوحدة للمفضلة علشان ترجع لها بسهولة.");
    }
    localStorage.setItem("sakina_favs", JSON.stringify(this.favorites));
    this.renderSectionData(this.activeSection);
  }

  toggleCompare(id) {
    if (this.compareList.includes(id)) {
      this.compareList = this.compareList.filter((x) => x !== id);
      window.SakinaRobot.speak("شيلنا الوحدة من قائمة المقارنة.");
    } else {
      if (this.compareList.length >= 3) {
        window.SakinaRobot.speak("تقدر تقارن بين 3 وحدات بس في المرة الواحدة.");
        return;
      }
      this.compareList.push(id);
      window.SakinaRobot.speak(`ضفنا الوحدة للمقارنة، بقى معاك ${this.compareList.length} من 3.`);
    }
    localStorage.setItem("sakina_compare", JSON.stringify(this.compareList));
    this.updateCompareBadge();
  }

  updateCompareBadge() {
    const el = document.getElementById("compareCount");
    if (el) el.textContent = String(this.compareList.length);
  }

  bindFilters() {
    ["searchInput", "typeFilter", "deliveryFilter", "sortSelect"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", () => this.renderPropertiesGrid());
      document.getElementById(id)?.addEventListener("change", () => this.renderPropertiesGrid());
    });

    ["currencySelect", "areaUnitSelect"].forEach((id) => {
      document.getElementById(id)?.addEventListener("change", () => {
        this.updateMaxPriceLabel();
        this.renderSectionData(this.activeSection);
      });
    });

    const range = document.getElementById("maxPriceRange");
    range?.addEventListener("input", () => {
      this.updateMaxPriceLabel();
      this.renderPropertiesGrid();
    });

    document.querySelectorAll(".filter-chip[data-filter-mode]").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".filter-chip[data-filter-mode]").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        this.filterMode = chip.getAttribute("data-filter-mode");
        this.renderPropertiesGrid();
      });
    });

    document.getElementById("toggleHideSeenBtn")?.addEventListener("click", (btn) => {
      this.hideSeen = !this.hideSeen;
      btn.currentTarget.classList.toggle("active", this.hideSeen);
      this.renderPropertiesGrid();
    });

    document.getElementById("saveSearchAlertBtn")?.addEventListener("click", () => {
      window.SakinaRobot.speak("حفظنا فلاتر البحث الحالية! أول ما يتضاف عقار مطابق هنعرفك.");
    });
  }

  updateMaxPriceLabel() {
    const val = Number(document.getElementById("maxPriceRange")?.value || 25000000);
    const lbl = document.getElementById("maxPriceLabel");
    if (lbl) lbl.textContent = this.formatPrice(val);
  }

  updateViewportLabel() {
    const lbl = document.getElementById("viewportSizeLabel");
    if (lbl) lbl.textContent = `${window.innerWidth} × ${window.innerHeight}`;
  }

  bindMap() {
    document.querySelectorAll(".map-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".map-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        this.renderMapPins(chip.getAttribute("data-map-type"));
      });
    });

    document.getElementById("resetMapPinsBtn")?.addEventListener("click", () => {
      document.querySelectorAll(".map-chip").forEach((c) => {
        c.classList.toggle("active", c.getAttribute("data-map-type") === "all");
      });
      this.renderMapPins("all");
    });

    document.getElementById("toggleFullscreenMapBtn")?.addEventListener("click", () => {
      const panel = document.getElementById("mapPanel");
      if (!document.fullscreenElement && panel?.requestFullscreen) {
        panel.requestFullscreen().catch(() => {});
      } else if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  renderMapPins(type) {
    const canvas = document.getElementById("interactiveMapCanvas");
    if (!canvas) return;
    const filtered = type === "all" ? this.properties : this.properties.filter((p) => p.type === type);
    canvas.innerHTML = filtered.map((item) => `
      <button
        type="button"
        class="map-pin"
        style="top:${item.pin?.top || "45%"};left:${item.pin?.left || "50%"}"
        onclick="window.SakinaApp.openPropertyDetail('${item.id}')"
      >
        📍 ${item.title.split(" ").slice(0, 2).join(" ")} — ${this.formatPrice(item.price)}
      </button>
    `).join("");
  }

  switchCalcTab(tabKey) {
    document.querySelectorAll(".calc-tab").forEach((t) => {
      t.classList.toggle("active", t.getAttribute("data-calc-tab") === tabKey);
    });
    document.querySelectorAll(".calc-pane").forEach((p) => {
      p.classList.toggle("active", p.id === `calc-${tabKey}`);
    });
    window.SakinaRobot.announceStage(`calc-${tabKey}`);
  }

  bindCalculators() {
    document.querySelectorAll(".calc-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        this.switchCalcTab(tab.getAttribute("data-calc-tab"));
      });
    });

    document.getElementById("calcUnitSelect")?.addEventListener("change", (e) => {
      const found = this.properties.find((p) => p.id === e.target.value);
      if (found) {
        document.getElementById("instPrice").value = found.price;
        document.getElementById("finArea").value = found.area;
        this.runInstallmentCalc();
        this.runFinishingCalc();
      }
    });

    ["instPrice", "instDownPct", "instYears", "instFreq", "instRate"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", () => this.runInstallmentCalc());
      document.getElementById(id)?.addEventListener("change", () => this.runInstallmentCalc());
    });

    ["roiPrice", "roiMonthlyRent", "roiExpensesPct"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", () => this.runRoiCalc());
    });

    ["finArea", "finLevel", "finAc", "finKitchen", "finSmart"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", () => this.runFinishingCalc());
      document.getElementById(id)?.addEventListener("change", () => this.runFinishingCalc());
    });

    ["rvbRent", "rvbDown", "rvbInstallment", "rvbYears"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", () => this.runRentVsBuyCalc());
    });

    document.getElementById("copyInstBtn")?.addEventListener("click", () => {
      navigator.clipboard?.writeText(document.getElementById("instSummary")?.innerText || "");
      window.SakinaRobot.speak("تمام، نسختلك ملخص خطة السداد.");
    });

    document.getElementById("waInstBtn")?.addEventListener("click", () => {
      const txt = encodeURIComponent(document.getElementById("instSummary")?.innerText || "خطة سداد سكينة");
      window.open(`https://wa.me/201000000000?text=${txt}`, "_blank");
    });
  }

  populateCalcUnitSelect() {
    const sel = document.getElementById("calcUnitSelect");
    if (!sel) return;
    sel.innerHTML = `<option value="">-- اختر وحدة جاهزة --</option>` +
      this.properties.map((p) => `<option value="${p.id}">${p.title} (${this.formatPrice(p.price)})</option>`).join("");
  }

  runInstallmentCalc() {
    const price = Number(document.getElementById("instPrice")?.value || 0);
    const downPct = Number(document.getElementById("instDownPct")?.value || 0);
    const years = Math.max(1, Number(document.getElementById("instYears")?.value || 1));
    const freq = document.getElementById("instFreq")?.value || "monthly";
    const rate = Number(document.getElementById("instRate")?.value || 0) / 100;

    const downPayment = price * (downPct / 100);
    const principal = Math.max(0, price - downPayment);
    const totalWithInterest = principal * (1 + rate * years);
    const perYear = freq === "monthly" ? 12 : freq === "quarterly" ? 4 : 1;
    const count = years * perYear;
    const installmentAmt = count ? totalWithInterest / count : 0;

    document.getElementById("instSummary").innerHTML = `
      <div class="stat-item"><span>المقدم المطلوب</span><strong>${this.formatPrice(downPayment)}</strong></div>
      <div class="stat-item"><span>إجمالي المبلغ المقسط</span><strong>${this.formatPrice(totalWithInterest)}</strong></div>
      <div class="stat-item"><span>قيمة القسط التقديري</span><strong>${this.formatPrice(installmentAmt)}</strong></div>
    `;

    const rows = [];
    for (let i = 1; i <= Math.min(count, 8); i++) {
      const rem = Math.max(0, totalWithInterest - installmentAmt * i);
      rows.push(`<tr><td>${i}</td><td>${this.formatPrice(installmentAmt)}</td><td>${this.formatPrice(rem)}</td></tr>`);
    }
    document.getElementById("instScheduleBody").innerHTML = rows.join("");
  }

  runRoiCalc() {
    const price = Math.max(1, Number(document.getElementById("roiPrice")?.value || 0));
    const rent = Number(document.getElementById("roiMonthlyRent")?.value || 0);
    const expPct = Number(document.getElementById("roiExpensesPct")?.value || 0) / 100;

    const grossAnnual = rent * 12;
    const netAnnual = grossAnnual * (1 - expPct);
    const roiPct = ((netAnnual / price) * 100).toFixed(2);

    document.getElementById("roiSummary").innerHTML = `
      <div class="stat-item"><span>الإيجار السنوي الإجمالي</span><strong>${this.formatPrice(grossAnnual)}</strong></div>
      <div class="stat-item"><span>صافي العائد السنوي بعد المصاريف</span><strong>${this.formatPrice(netAnnual)}</strong></div>
      <div class="stat-item"><span>نسبة العائد الاستثماري السنوي</span><strong>${roiPct}%</strong></div>
    `;
  }

  runFinishingCalc() {
    const area = Number(document.getElementById("finArea")?.value || 0);
    const perMeter = Number(document.getElementById("finLevel")?.value || 0);
    let extras = 0;
    if (document.getElementById("finAc")?.checked) extras += 140000;
    if (document.getElementById("finKitchen")?.checked) extras += 180000;
    if (document.getElementById("finSmart")?.checked) extras += 95000;

    const baseCost = area * perMeter;
    const total = baseCost + extras;

    document.getElementById("finSummary").innerHTML = `
      <div class="stat-item"><span>تكلفة التشطيب للمساحة</span><strong>${this.formatPrice(baseCost)}</strong></div>
      <div class="stat-item"><span>الإضافات المختارة</span><strong>${this.formatPrice(extras)}</strong></div>
      <div class="stat-item"><span>الإجمالي التقديري</span><strong>${this.formatPrice(total)}</strong></div>
    `;
  }

  runRentVsBuyCalc() {
    const rent = Number(document.getElementById("rvbRent")?.value || 0);
    const down = Number(document.getElementById("rvbDown")?.value || 0);
    const inst = Number(document.getElementById("rvbInstallment")?.value || 0);
    const years = Math.max(1, Number(document.getElementById("rvbYears")?.value || 1));

    const totalRent = rent * 12 * years;
    const totalBuy = down + inst * 12 * years;

    document.getElementById("rvbSummary").innerHTML = `
      <div class="stat-item"><span>إجمالي الإيجار خلال ${years} سنوات</span><strong>${this.formatPrice(totalRent)}</strong></div>
      <div class="stat-item"><span>إجمالي التمليك (مقدم + أقساط)</span><strong>${this.formatPrice(totalBuy)}</strong></div>
      <div class="stat-item"><span>الفرق التقديري</span><strong>${this.formatPrice(Math.abs(totalBuy - totalRent))}</strong></div>
    `;
  }

  bindDatabase() {
    document.getElementById("dbForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const newItem = {
        id: `SK-${Math.floor(200 + Math.random() * 799)}`,
        title: document.getElementById("dbTitle").value.trim(),
        city: document.getElementById("dbCity").value.trim(),
        type: document.getElementById("dbType").value,
        area: Number(document.getElementById("dbArea").value),
        rooms: Number(document.getElementById("dbRooms").value || 3),
        price: Number(document.getElementById("dbPrice").value),
        delivery: document.getElementById("dbDelivery").value,
        maintenance: document.getElementById("dbMaintenance").value,
        meters: document.getElementById("dbMeters").value,
        garage: document.getElementById("dbGarage").value,
        directOwner: document.getElementById("dbDirectOwner").checked,
        pin: { top: `${25 + Math.floor(Math.random() * 45)}%`, left: `${25 + Math.floor(Math.random() * 50)}%` },
        createdAt: Date.now(),
        roomsTour: [
          { name: "الغرفة الرئيسية", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", note: "وحدة مضافة حديثاً في قاعدة بيانات سكينة." }
        ]
      };
      this.properties.unshift(newItem);
      this.saveProperties();
      this.renderDbTable();
      e.target.reset();
      window.SakinaRobot.speak("تمام، ضفنا الإعلان الجديد لقاعدة بيانات سكينة.");
    });

    document.getElementById("exportJsonBtn")?.addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(this.properties, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sakina-db.json";
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("importJsonInput")?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          if (Array.isArray(parsed)) {
            this.properties = parsed;
            this.saveProperties();
            this.renderDbTable();
            window.SakinaRobot.speak("تمام، استوردنا بيانات العقارات.");
          }
        } catch (_) {}
      };
      reader.readAsText(file);
    });

    document.getElementById("resetDbBtn")?.addEventListener("click", () => {
      this.properties = [...DEFAULT_PROPERTIES];
      this.saveProperties();
      this.renderDbTable();
      window.SakinaRobot.speak("رجعنا البيانات الافتراضية لقاعدة بيانات سكينة.");
    });
  }

  renderDbTable() {
    const tbody = document.getElementById("dbTableBody");
    if (!tbody) return;
    tbody.innerHTML = this.properties.map((p) => `
      <tr>
        <td>${p.id}</td>
        <td>${p.title}</td>
        <td>${p.city}</td>
        <td>${p.type}</td>
        <td>${p.area} م² / ${p.rooms} غرف</td>
        <td>${this.formatPrice(p.price)}</td>
        <td><button class="pill-btn danger-btn" onclick="window.SakinaApp.deleteDbItem('${p.id}')">حذف</button></td>
      </tr>
    `).join("");
  }

  deleteDbItem(id) {
    this.properties = this.properties.filter((p) => p.id !== id);
    this.saveProperties();
    this.renderDbTable();
    window.SakinaRobot.speak("حذفنا الوحدة من قاعدة البيانات.");
  }

  openPropertyDetail(id) {
    const item = this.properties.find((p) => p.id === id);
    if (!item) return;

    if (!this.seenIds.includes(id)) {
      this.seenIds.push(id);
      localStorage.setItem("sakina_seen", JSON.stringify(this.seenIds));
    }

    const rooms = item.roomsTour || [];
    const firstRoom = rooms[0] || { name: "الواجهة", img: "", note: "" };

    document.getElementById("propModalTitle").textContent = item.title;
    document.getElementById("propModalBody").innerHTML = `
      <p class="muted">📍 ${item.city} • ${item.type} • ${item.delivery}</p>
      <div class="prop-price" style="margin:8px 0">${this.formatPrice(item.price)} — ${this.formatArea(item.area)}</div>

      <div class="tour-box">
        <div class="room-tabs">
          ${rooms.map((r, idx) => `<button type="button" class="filter-chip ${idx === 0 ? "active" : ""}" data-room-idx="${idx}">${r.name}</button>`).join("")}
          <button type="button" class="pill-btn glow-btn" id="toggleTourAnimBtn">▶ جولة متحركة</button>
        </div>
        <div id="tourStage" class="tour-stage" style="background-image:url('${firstRoom.img}')">
          <div id="tourCaption" class="tour-caption">${firstRoom.name}: ${firstRoom.note}</div>
        </div>
      </div>

      <div class="summary-stats">
        <div class="stat-item"><span>وديعة الصيانة</span><strong>${item.maintenance}</strong></div>
        <div class="stat-item"><span>عدادات المرافق</span><strong>${item.meters}</strong></div>
        <div class="stat-item"><span>الجراج</span><strong>${item.garage}</strong></div>
        <div class="stat-item"><span>حالة الملكية</span><strong>${item.directOwner ? "مالك مباشرة - بدون عمولة (بعد التحقق)" : "تسويق عقاري"}</strong></div>
      </div>

      <div class="btn-row" style="margin-top:14px">
        <button type="button" class="pill-btn glow-btn" data-open-modal="booking">حجز معاينة لهذه الوحدة</button>
        <button type="button" class="pill-btn" onclick="window.SakinaRobot.speak('${item.title}. سعرها ${item.price} جنيه، ومساحتها ${item.area} متر مربع، ومكانها ${item.city}.')">🔊 قراءة صوتية</button>
      </div>
    `;

    const stage = document.getElementById("tourStage");
    const caption = document.getElementById("tourCaption");
    document.querySelectorAll("#propModalBody [data-room-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#propModalBody [data-room-idx]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const rm = rooms[Number(btn.getAttribute("data-room-idx"))];
        if (rm && stage && caption) {
          stage.style.backgroundImage = `url('${rm.img}')`;
          caption.textContent = `${rm.name}: ${rm.note}`;
        }
      });
    });

    document.getElementById("toggleTourAnimBtn")?.addEventListener("click", () => {
      stage?.classList.toggle("animating");
    });

    this.openModal("propertyModal");
    window.SakinaRobot.announceStage("modal-property");
  }

  openModal(modalId) {
    document.getElementById(modalId)?.classList.add("open");
    if (modalId === "bookingModal") {
      const sel = document.getElementById("bookingPropertySelect");
      if (sel) {
        sel.innerHTML = this.properties.map((p) => `<option value="${p.title}">${p.title}</option>`).join("");
      }
      window.SakinaRobot.announceStage("modal-booking");
    } else if (modalId === "affordabilityModal") {
      this.calcAffordability();
      window.SakinaRobot.announceStage("modal-affordability");
    } else if (modalId === "compareModal") {
      this.renderCompareTable();
      window.SakinaRobot.announceStage("modal-compare");
    }
  }

  renderCompareTable() {
    const items = this.properties.filter((p) => this.compareList.includes(p.id));
    const body = document.getElementById("compareModalBody");
    if (!items.length) {
      body.innerHTML = `<p class="muted">اختر وحدات من زر الميزان (⚖️) لمقارنتها هنا.</p>`;
      return;
    }
    body.innerHTML = `
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>البند</th>
              ${items.map((i) => `<th>${i.title}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            <tr><td>السعر</td>${items.map((i) => `<td>${this.formatPrice(i.price)}</td>`).join("")}</tr>
            <tr><td>الموقع</td>${items.map((i) => `<td>${i.city}</td>`).join("")}</tr>
            <tr><td>المساحة</td>${items.map((i) => `<td>${this.formatArea(i.area)}</td>`).join("")}</tr>
            <tr><td>الغرف</td>${items.map((i) => `<td>${i.rooms}</td>`).join("")}</tr>
            <tr><td>التسليم</td>${items.map((i) => `<td>${i.delivery}</td>`).join("")}</tr>
          </tbody>
        </table>
      </div>
    `;
  }

  calcAffordability() {
    const mode = document.getElementById("affMode")?.value || "budget";
    const val = Number(document.getElementById("affInputVal")?.value || 0);
    const downPct = Number(document.getElementById("affDownPct")?.value || 20) / 100;
    const years = Math.max(1, Number(document.getElementById("affYears")?.value || 7));

    let estBudget = val;
    if (mode === "installment") {
      const totalInstallments = val * 12 * years;
      estBudget = downPct < 1 ? totalInstallments / (1 - downPct) : totalInstallments;
    }

    document.getElementById("affResultBox").textContent =
      `الميزانية العقارية التقديرية المناسبة: ${this.formatPrice(estBudget)}`;
    return estBudget;
  }

  bindModals() {
    document.querySelectorAll("[data-open-modal]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-open-modal");
        if (key === "affordability") this.openModal("affordabilityModal");
        if (key === "booking") this.openModal("bookingModal");
      });
    });

    document.getElementById("openCompareModalBtn")?.addEventListener("click", () => {
      this.openModal("compareModal");
    });

    document.querySelectorAll(".close-modal-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".modal-backdrop")?.classList.remove("open");
      });
    });

    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) backdrop.classList.remove("open");
      });
    });

    ["affMode", "affInputVal", "affDownPct", "affYears"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", () => this.calcAffordability());
      document.getElementById(id)?.addEventListener("change", () => this.calcAffordability());
    });

    document.getElementById("affShowMatchesBtn")?.addEventListener("click", () => {
      const budget = this.calcAffordability();
      const range = document.getElementById("maxPriceRange");
      if (range) {
        range.value = Math.min(Number(range.max), Math.max(Number(range.min), Math.round(budget)));
        this.updateMaxPriceLabel();
      }
      document.getElementById("affordabilityModal")?.classList.remove("open");
      this.switchSection("properties");
    });

    document.getElementById("bookingForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const booking = {
        property: document.getElementById("bookingPropertySelect").value,
        name: document.getElementById("bookingName").value.trim(),
        phone: document.getElementById("bookingPhone").value.trim(),
        type: document.getElementById("bookingType").value,
        date: document.getElementById("bookingDate").value,
        pref: document.getElementById("bookingContactPref").value
      };
      this.bookings.unshift(booking);
      localStorage.setItem("sakina_bookings", JSON.stringify(this.bookings));
      this.renderBookings();
      document.getElementById("bookingModal")?.classList.remove("open");
      e.target.reset();
      window.SakinaRobot.speak(`تمام يا ${booking.name}، حجزنا لك ${booking.type} بنجاح!`);
    });
  }

  renderBookings() {
    const box = document.getElementById("bookingsList");
    if (!box) return;
    if (!this.bookings.length) {
      box.innerHTML = `<p class="muted">لا توجد مواعيد محجوزة حالياً.</p>`;
      return;
    }
    box.innerHTML = this.bookings.map((b) => `
      <div class="booking-item">
        <div>
          <strong>${b.property}</strong> — <span>${b.type}</span>
          <div class="muted">${b.name} • ${b.phone} • ${b.pref}</div>
        </div>
        <span>${b.date}</span>
      </div>
    `).join("");
  }

  bindChat() {
    const widget = document.getElementById("chatWidget");
    const avatar = document.getElementById("robotAvatarBtn");
    const closeChat = document.getElementById("closeChatBtn");
    const form = document.getElementById("chatForm");
    const input = document.getElementById("chatInput");

    avatar?.addEventListener("click", () => {
      const isOpen = widget?.classList.toggle("open");
      widget?.setAttribute("aria-hidden", String(!isOpen));
      if (isOpen) {
        this.pushChatMsg("bot", "أهلاً بيك يا فندم! اسألني عن العقارات المتاحة، أو القسط، أو حجز معاينة.");
      }
    });

    closeChat?.addEventListener("click", () => {
      widget?.classList.remove("open");
      widget?.setAttribute("aria-hidden", "true");
    });

    document.querySelectorAll(".chat-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const q = chip.getAttribute("data-quick");
        this.handleChatQuestion(q);
      });
    });

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      input.value = "";
      this.handleChatQuestion(q);
    });
  }

  pushChatMsg(sender, text) {
    const box = document.getElementById("chatMessages");
    if (!box) return;
    const div = document.createElement("div");
    div.className = `chat-msg ${sender}`;
    div.textContent = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
  }

  handleChatQuestion(q) {
    this.pushChatMsg("user", q);
    let reply = "تقدر تفتح قسم العقارات والغرف وتتفرج على الوحدات، أو تروح للحاسبات، أو تحجز معاينة.";

    if (q.includes("عقار") || q.includes("متاح")) {
      const names = this.properties.slice(0, 3).map((p) => `${p.title} (${this.formatPrice(p.price)})`).join("، ");
      reply = `دي شوية وحدات متاحة دلوقتي: ${names}.`;
    } else if (q.includes("قسط") || q.includes("حساب")) {
      reply = "افتح قسم الحاسبات، واختار حاسبة الأقساط. هتقدر تحسب المقدم والقسط الشهري أو الربع سنوي بسهولة.";
    } else if (q.includes("معاينة") || q.includes("حجز")) {
      reply = "دوس على زرار حجز معاينة مجانية، واختار معاينة ميدانية أو استشارة تليفونية.";
    }

    this.pushChatMsg("bot", reply);
    window.SakinaRobot.speak(reply);
  }
}

window.SakinaApp = new SakinaApp();