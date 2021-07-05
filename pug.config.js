const pugjs = require("pug");
const articles = require("./articles");

module.exports = {
  locals: {
    articles,
    pugjs,
    nextArticleId: (id) => {
      const num = parseInt(id.replace("article-", ""));
      return `article-${num + 1}`;
    },
    questions: [
      {
        question: "目前核電佔全國發電比例大約是？",
        answer: 0,
        options: ["10%", "50%", "80%"],
        detail:
          "核電目前佔全台發電比例僅約10%。 核電廠狀況：核一：除役中。核二、核三：運轉中，2025年前除役。核四：封存中。",
      },
      {
        question: "核四封存時的狀況是？",
        answer: 0,
        options: [
          "沒蓋完，重啟最少要10年以上",
          "已蓋完，啟封馬上可以用",
          "剩一些簡單的測試，啟封1-2年內可使用",
        ],
        detail:
          "核四一二號機的安全驗證都未完成，二號機因1700多個零件拆給一號機使用，興建未完成。整體而言，含施工、安全驗證、重做環評等程序，保守估計最快需要10年，核四才有可能上線運轉。",
      },
      {
        question: "台灣位於地震帶，核四跟斷層的關係是？",
        answer: 2,
        options: ["附近沒有斷層", "20公里外才有斷層", "核四廠區下方與外海皆有斷層"],
        detail: "中央地調所確認，核四廠區下方有長2公里的S斷層，外海有5條共長90公里的活動斷層",
      },
      {
        question: "以下哪些事故，在核四興建過程中曾經發生過？",
        answer: 3,
        options: ["停電", "泡水", "失火", "以上皆是"],
        detail:
          "核四興建過程中共發生17次泡水事件、16次火災事件，大大小小的違規事件共512件。此外曾發生28小時的大停電事故，以及遭發現違規變更設計，共遭監察院糾正19次。",
      },
      {
        question: "核四開始興建的年份為？",
        answer: 0,
        options: ["1999年", "2005年", "2012年"],
        detail:
          "核四1999年開始興建，規劃時間更需回推到1980年，是40年前的老舊設計。",
      },
      {
        question: "台灣現在的高階核廢料（燃料棒）處理進度是？",
        answer: 2,
        options: [
          "已選定擺放的最終處置場",
          "已封存在最終處置場內",
          "放在核電廠內，仍無法處理",
        ],
        detail:
          "高階核廢料目前存放在核電廠的冷卻池內，低階核廢料則是暫存於蘭嶼貯存場及核電廠內，未來都需移至最終處置場做永久存放，但台灣仍無可設置最終處置場的地點。",
      },
    ],
    reasons: [
      {
        header: "核四不能用！",
        detail:
          "核四的安全測試未完成、2號機施工未完成，還需面對零件停產、施工團隊解散、重作環評等問題，最少<em>需7+N年後才有可能啟用</em>。 ",
      },
      {
        header: "老舊拼裝車！",
        detail:
          "核四施工問題不斷，曾發生28小時的大停電事故，及偷工減料、違法變更設計、官員收賄、泡水淹水等<em>共計512件違規事件</em>，遭監察院糾正19次、罰鍰2290萬。",
      },
      {
        header: "核安有風險！",
        detail:
          "經研究單位確認，核四下方有<em>五條共長９０公里的s斷層</em>。福島核災後，老舊核四的耐震設計已不符國際安全標準。",
      },
      {
        header: "核廢難處理！",
        detail:
          "需存放100萬年以上的核廢料，現暫存於核電廠中，由於台灣社會對核廢料存放地點沒有共識，<em>目前核廢料無處可去</em>。",
      },
      {
        header: "核四賠錢貨！",
        detail:
          "核四曾五度追加預算，從1697億追加到2838億，現在續建還要<em>最少再花800億</em>。與其繼續賠本投資，不如拿來發展更便宜的綠能、儲能。",
      },
    ],
    knowledges: [
      {
        modalId: "knowledges-pollution",
        heading: "核四不能解決缺電與空污",
        picture: "../images/knowledges_pollution.jpg",
        summary: [
          { summary: "核四10年內都不可能發電", articleId: "article-1" },
          { summary: "核四對減污減碳的貢獻低", articleId: "article-2" },
          { summary: "核四反而會增加停電風險", articleId: "article-3" },
        ],
      },
      {
        modalId: "knowledges-japan",
        heading: "福島核災進行式",
        picture: "../images/knowledges_japan.jpg",
        summary: [
          { summary: "核電廠善後遙遙無期", articleId: "article-4" },
          { summary: "土地輻射汙染成棘手難題", articleId: "article-5" },
          { summary: "百萬噸輻射廢水將排入大海", articleId: "article-6" },
          { summary: "上萬居民仍在外避難", articleId: "article-7" },
          { summary: "福島災後甲狀腺癌比例激增", articleId: "article-8" },
        ],
      },
      {
        modalId: "knowledges-trend",
        heading: "發展核電不是國際趨勢",
        picture: "../images/knowledges_trend.jpeg",
        summary: [
          { summary: "核電佔比不斷下降", articleId: "article-9" },
          { summary: "核電廠興建工期延宕", articleId: "article-10" },
          { summary: "再生能源是更好的選擇", articleId: "article-11" },
          { summary: "再生能源發電量超越核電", articleId: "article-12" },
        ],
      },
      {
        modalId: "knowledges-direction",
        heading: "台灣能源轉型怎麼走？",
        picture: "../images/knowledges_direction.jpeg",
        summary: [
          { summary: "2025年非核家園", articleId: "article-13" },
          { summary: "100%綠能是國際大廠趨勢", articleId: "article-14" },
          { summary: "再生能源才能降燃煤 ", articleId: "article-15" },
          { summary: "天然氣是適合的過渡能源", articleId: "article-16" },
        ],
      },
      {
        modalId: "knowledges-climate",
        heading: "台灣如何因應氣候危機？",
        picture: "../images/knowledges_climate.jpg",
        summary: [
          {
            summary: "除了吵著蓋核電廠，還可以做什麼？",
            articleId: "article-17",
          },
          { summary: "製造業部門低碳轉型", articleId: "article-18" },
          { summary: "綠色人本交通運輸", articleId: "article-19" },
          { summary: "住商節能", articleId: "article-20" },
        ],
      },
    ],
  },
};
