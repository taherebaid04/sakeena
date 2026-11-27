class SakinaRobotGuide {
  constructor() {
    this.bubbleText = document.getElementById("robotSpeechText");
    this.avatarBtn = document.getElementById("robotAvatarBtn");
    this.speakCurrentBtn = document.getElementById("robotSpeakCurrentBtn");
    this.lastText = "";

    this.stageGuides = {
      home: "إحنا في الرئيسية! هنا هتلاقي لمحة عن العقارات، وتقدر تحسب ميزانيتك، وتتفرج على الوحدات، أو تحجز معاينة. كمان هتلاقي مواعيدك المحجوزة هنا.",
      properties: "من هنا تقدر تدور على العقار بالاسم أو المنطقة، وتفلتر حسب النوع والسعر والمساحة. افتح أي وحدة علشان تتفرج على غرفها، أو ضيفها للمفضلة والمقارنة.",
      favorites: "هنا هتلاقي كل الوحدات اللي دوست على علامة القلب فيها، علشان ترجع لها وقت ما تحب وتقارن بينها.",
      map: "دي خريطة العقارات. تقدر تصفيها حسب نوع الوحدة، وتكبرها لحد ما تبقى على الشاشة كلها. دوس على أي دبوس علشان تشوف تفاصيل العقار.",
      calculators: "هنا عندك أربع حاسبات: الأقساط، وعائد الإيجار، وتكلفة التشطيب والفرش، وحاسبة تقارن بيها بين الإيجار والتمليك.",
      guide: "هنا هتلاقي شرح أدوات سكينة. دوس على زرار الاستماع علشان أشرحلك الموقع بالصوت.",
      database: "هنا تقدر تضيف إعلانات، وتعدل بياناتها أو تمسحها، وكمان تصدّرها أو تستوردها من ملف JSON. بيانات القسم ده بتظهر لما تفتحه.",
      "calc-installment": "اكتب سعر الوحدة والمقدم ومدة التقسيط وطريقة السداد، وهتلاقي قدامك ملخص الخطة وجدول الأقساط. وتقدر كمان تبعتهم على واتساب.",
      "calc-roi": "اكتب سعر الشراء والإيجار الشهري والمصاريف، وهتعرف صافي العائد اللي ممكن يطلعلك كل سنة.",
      "calc-finishing": "اختار مساحة الوحدة ومستوى التشطيب، وحدد الإضافات زي التكييف والمطبخ والسمارت هوم، وهتحسبلك التكلفة كلها.",
      "calc-rentVsBuy": "هنا تقدر تقارن هتدفع إيجار قد إيه، بتكلفة التمليك من مقدم وأقساط على مدار السنين اللي تختارها.",
      "modal-affordability": "اختار هتحسب بميزانيتك كلها ولا بالقسط الشهري اللي يناسبك، وأنا هوريك الوحدات اللي على قد ميزانيتك.",
      "modal-booking": "اختار العقار، واكتب اسمك ورقمك، وحدد نوع المعاينة والميعاد المناسب ليك، وبعدها أكد الحجز.",
      "modal-compare": "هنا هتلاقي الوحدات اللي اخترتها جنب بعض، علشان تقارن السعر والمكان والمساحة وعدد الغرف وميعاد التسليم.",
      "modal-property": "هنا تقدر تتفرج على تفاصيل الوحدة، وتتنقل بين الغرف وتشغل الجولة، وكمان تعرف معلومات الصيانة والعدادات والجراج."
    };

    this.bindEvents();
  }

  playChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.21);
    } catch (_) {}
  }

  speak(text) {
    this.lastText = text;
    if (this.bubbleText) {
      this.bubbleText.textContent = text;
    }
    this.playChime();

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "ar-EG";
      utter.rate = 1.02;
      const egyptianVoice = window.speechSynthesis.getVoices()
        .find((voice) => voice.lang.toLowerCase() === "ar-eg");
      if (egyptianVoice) utter.voice = egyptianVoice;
      utter.onstart = () => this.avatarBtn?.classList.add("speaking");
      utter.onend = () => this.avatarBtn?.classList.remove("speaking");
      utter.onerror = () => this.avatarBtn?.classList.remove("speaking");
      window.speechSynthesis.speak(utter);
    }
  }

  announceStage(stageKey, customText = "") {
    const message = customText || this.stageGuides[stageKey];
    if (!message) return;
    this.speak(message);
  }

  welcomeVoice() {
    this.speak("أهلاً بيك في سكينة! أنا مساعدك، وهشرحلك كل قسم وإنت بتتصفح الموقع.");
  }

  bindEvents() {
    this.speakCurrentBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.lastText) {
        this.speak(this.lastText);
      } else {
        this.welcomeVoice();
      }
    });
  }
}

window.SakinaRobot = new SakinaRobotGuide();
