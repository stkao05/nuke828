const pugjs = require("pug");

module.exports = {
  locals: {
    pugjs,
    questions: [
      {
        question: "台灣位於地震帶，核四跟斷層的關係是？",
        answer: 2,
        options: ["附近沒有斷層", "20公里外才有斷層", "斷層通過核四廠區下方"],
        detail: "2013年中央地調所確認，核四廠區下方有長達2公里的S斷層通過。",
      },
      {
        question: "核四開始興建的年份為？",
        answer: 0,
        options: ["1999年", "2005年", "2012年"],
        detail:
          "核四1999年開始興建，規劃時間更需回推到1980年，是40年前的老舊設計。",
      },
      {
        question: "核四封存時的狀況是？",
        answer: 0,
        options: [
          "沒蓋完，重啟最少要7年以上",
          "已蓋完，啟封馬上可以用",
          "剩一些簡單的測試，啟封1-2年內可使用",
        ],
        detail:
          "核四一二號機的安全驗證都未完成，二號機因1700多個零件拆給一號機使用，興建未完成。整體而言，含施工、安全驗證、重做環評等程序，保守估計最快需要7+N年，核四才有可能上線運轉。",
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
      {
        question: "以下哪些事故，在核四興建過程中曾經發生過？",
        answer: 3,
        options: ["停電", "泡水", "失火", "以上皆是"],
        detail:
          "核四興建過程中共發生17次泡水事件、16次火災事件，大大小小的違規事件共512件。此外曾發生28小時的大停電事故，以及遭發現違規變更設計，共遭監察院糾正19次。",
      },
      {
        question: "目前核電佔全國發電比例大約是？",
        answer: 0,
        options: ["10%", "50%", "80%"],
        detail:
          "核電目前佔全台發電比例僅約10%。 核電廠狀況：核一：除役中。核二、核三：運轉中，2025年前除役。核四：封存中。",
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
          "核四10年內都不可能發電",
          "核四對減污減碳的貢獻低",
          "核四反而會增加停電風險",
        ],
        article: `
h3 核四10年內都不可能發電
p 核四如果要重啟，必須重新申請建照、重做環差、找零件、找廠商，還必須因應新發現的S斷層，重作耐震安全設計，必須符合福島核災後，更嚴格的國際核安標準。 經濟部預估還要7+N年、追加800億元，原能會則估計至少要等10年。 簡言之，就算今年公投通過重啟核四，未來10年內核四也不可能發電，更不可能減污減碳。要求用核四來解決眼前的空污跟電力問題，就是請鬼拿藥單。 

p 延伸閱讀：
  a(href="https://www.aec.gov.tw/share/file/regulation/Aescx996wXYPrJqNEixEHw__.pdf") 原能會網站

h3 核四對減污減碳的貢獻低
p 中興大學莊秉潔教授與趙家緯博士曾分析當前政府的「非核減煤」政策與馬前總統「以核養綠」模式的減污減煤效益，結果發現：讓核一、核二、核三、核四都繼續運轉的以核養綠模式，其電力系統的空氣污染物排放量達到91,070噸PM2.5當量，而當前政府非核減煤的能源轉型情境下，則僅有68,204噸PM2.5當量，比前者少了25%。

p 參考資料：<a href="https://reurl.cc/4adV5K">核能無法減煤　轉型才是正道</a>

p 台大風險中心也曾分析馬政府「穩健檢核」的減碳效益，也就是讓核四商轉、核一、核二、核三如期除役的情境下，年碳排放量達1.41億噸，反觀蔡政府的「非核家園」年排碳量僅有1.38億噸。

p 參考資料：<a href="https://reurl.cc/NrlKa6">用核電就能減碳？台大風險中心計算 馬政府核四商轉 碳排放仍高過非核家園</a> 

p 不用靠核電，一樣能達到減污、減煤、減碳的效果。把續蓋核四的800億拿來深化節能或發展再生能源，才是明智之舉。

h3 核四反而會增加停電風險
p 2021年5月的兩次停電都是調度管理出問題。513停電的原因是因為人為操作疏失，導致電網斷開，電送不出來。517停電的原因：低估用電需求、電力調度管理失當、電廠歲修排程預估失誤，加上核煤機組失靈，導致電力供不應求。 所以若不解決輸配端的調度管理問題，就算重啟核四，一樣可能會停電！ 而萬一核四供電期間突然故障，或電網事故導致核四急停跳脫，台灣面臨的風險，恐怕就不只是分區限電一天的問題了。一來可能有核安問題，二來核反應爐從啟動到滿載至少要3天才能恢復供電，反而增加停電時間及提高系統負擔的風險，讓供電更不可靠。

p 延伸閱讀：
  a(href="https://www.twreporter.org/a/opinion-2021-may-power-cut") 不要再有下一次停電，我們該做什麼？
p 延伸閱讀：
  a(href="https://pansci.asia/archives/146001") 815全台大停電，你搞清楚發生什麼事了嗎？
`,
      },
      {
        modalId: "knowledges-japan",
        heading: "福島核災進行式",
        picture: "../images/knowledges_japan.jpg",
        summary: [
          "福島核災進行式",
          "土地輻射汙染成棘手難題",
          "百萬噸輻射廢水將排入大海",
          "上萬居民仍在外避難",
          "福島災後甲狀腺癌比例激增",
        ],
        article: `
h3 核電廠善後遙遙無期

p 前奇異能源核能顧問佐藤曉指出，現行的福島第一核電廠的除役計畫在30至40年間根本難以完成，更不可能將現址恢復為綠地。原因在於反應爐內外殘留的數百噸核燃料殘骸難以取出，即便成功取出核燃料棒碎片，也必須應該永久存放在現場。福島第一核電廠正朝向長期核廢料貯存場的方向進行善後處理。

p 延伸閱讀：<a href="https://www.greenpeace.org/taiwan/press/23769/%E7%A6%8F%E5%B3%B6%E5%8D%81%E5%B9%B4%E6%A0%B8%E7%81%BD%E8%99%95%E7%90%86%E7%84%A1%E6%9C%9F%E3%80%80%E7%B6%A0%E8%89%B2%E5%92%8C%E5%B9%B3%E7%9B%BC%E6%9C%9B%E8%87%BA%E7%81%A3%E5%B9%B3%E5%AE%89%E7%B5%82/">福島十年核災處理無期　綠色和平盼望臺灣平安終結核電</a>

h3 土地輻射汙染成棘手難題

p 福島核災後，日本政府為了移除地面上的放射性物質，共挖出約2200萬立方公尺的輻射污土，體積大約是17.6顆東京巨蛋。日本的地球之友（Friend of Earth）指出，這些輻射廢棄物目前被陸續集中到福島第一核電廠附近的中期貯存場，最晚在2045年以前需遷出至福島縣外的最終處置場。但由於體積龐大、成本高昂，日本政府希望將這些輻射污土用於道路等公共建設，受到地方居民、議會等反對。

p 同時，這些除汙工作效果非常有限，因為外洩的放射性物質不只停留在表土，也飛散到森林、原野，並隨著風吹而擴散移動。根據最新的報告顯示，在範圍達840平方公里的特別除污地區內，仍有高達85%的面積未進行清除工作，且持續在這個地區測出放射性的銫元素。

h3 百萬噸輻射廢水將排入大海

p 福島核災十年後，電廠內大量高熱、高放射性的核燃料仍須持續灌水冷卻，使得上百萬噸超高濃度放射性物質的輻射污水無處可去，每天以140公噸的速度持續增加。這些核污水透過過濾裝置去除氚以外的輻射物質後，被暫存在核電廠區。截至2021年3月，核電廠區已有1061座儲存槽，預料2022年就將全滿。 日本政府採取成本較低廉的做法，決定將這些污水排放至大海，引發日本居民、地方漁民以及許多國家與環境組織的反對聲浪。他們質疑核廢水的放射性物質含量低於國際安全值上限，也不代表沒有汙染與風險，無法證實對海洋生態沒有長期影響。

p 延伸閱讀：<a href="https://www.rfi.fr/cn/%E5%B0%88%E6%AC%84%E6%AA%A2%E7%B4%A2/%E7%92%B0%E5%A2%83%E8%88%87%E7%99%BC%E5%B1%95/20210423-%E6%B3%95%E5%9C%8B%E5%B0%88%E5%AE%B6%E8%A9%95%E6%97%A5%E6%9C%AC%E5%90%91%E5%A4%A7%E6%B5%B7%E6%8E%92%E6%94%BE%E6%A0%B8%E5%BB%A2%E6%B0%B4%E6%98%AF%E5%90%A6%E7%AC%A6%E5%90%88%E5%9C%8B%E9%9A%9B%E6%85%A3%E4%BE%8B">法國專家評日本向大海排放核廢水是否符合國際慣例</a>

h3 上萬居民仍在外避難

p 直至2021年2月，福島縣仍有4萬1241人在外避難，返鄉的人口多數為年長者，年輕一代不願意回鄉承受輻射曝曬的風險，其中原因是日本政府為了解除避難指示，把一般人的輻射年受曝限度標準，從每年1毫西弗放寬二十倍到每年20毫西弗，引發居民的不信任。 在政府解除避難指示後，選擇不返回者在制度上就不再是難民，賠償及住宅提供等隨之消失，使他們陷入生存困境。

h3 福島災後甲狀腺癌比例激增

p 日本「國立癌症中心」癌症預防暨檢查研究中心主任津金昌一郎博士在2014年就指出，該年福島未成年甲狀腺癌在核災後的患者數為194人，大約是2010年的60倍。 核災十周年至今，經診斷為惡性腫瘤或疑似甲狀腺惡性腫瘤的人數增加到237人。日本醫學期刊《Medicine》於2019年的研究中也指出：「2011年6月福島縣59個行政區的平均輻射劑量率，與2011年10月至2016年3月間的甲狀腺癌檢出率，具有統計顯著性。 」

p 延伸閱讀：<a href="https://opinion.udn.com/opinion/story/10481/3450804"> 福島・現在（三）：因無知而恐懼？核災後的病變疑慮</a>

p 參考資料：<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6750239/pdf/medi-98-e17165.pdf"> Association between the detection rate of thyroid cancer and the external radiation dose-rate after the nuclear power plant accidents in Fukushima, Japan </a>
        `,
      },
      {
        modalId: "knowledges-trend",
        heading: "發展核電不是國際趨勢",
        picture: "../images/knowledges_trend.jpeg",
        summary: [
          "核電佔比不斷下降",
          "核電廠興建工期延宕",
          "再生能源是更好的選擇",
          "再生能源發電量超越核電",
        ],
        article: `
h3 核電佔比不斷下降

p 核能在全球發電總量的佔比，從1996年17.5%的高峰，呈現逐步下降的趨勢，至2019年佔比僅剩10.35%，只比前一年增加0.2%，主要源於中國核能發電量的增加。

h3 核電廠興建工期延宕

p 全球有13座反應爐原定於2019年啟用，但只有6座如期完工。全球目前52座興建中的反應爐至今平均工期為7.3年，比過去平均6.2年的工期更長，許多機組仍有好幾年才可能完工。 正在興建反應爐的17個國家，至少有10國延宕近一年、有33個興建計畫延後 ，比例達64%。

h3 再生能源是更好的選擇

p 在2009年至2019年間，電廠規模的太陽能成本下降了89%，風能下降了70%，而核能成本卻上升了26%。2019年，全球挹注於再生能源上的總投資超過3000億美元，是核能發電投資（約310億美元）的十倍之多。

h3 再生能源發電量超越核電

p 再生能源（不含水力）在2019年時，貢獻了全球10.39%的發電量，超越核電的10.35%。以新增發電量來看，2019年時再生能源新增的裝置容量達到184GW，創下歷史新高，風力發電量新增59.2GW，年增率為13%，太陽光電新增了98GW發電量，年增率為24%。相較之下，核能發電的淨成長僅為2.4GW，年增率為3.7%，且有一半來自於中國。

p 參考資料：
  a(href="https://www.worldnuclearreport.org/-World-Nuclear-Industry-Status-Report-2020-.html") 《2020世界核能產業現狀報告》(The World Nuclear Industry Status Report 2020)　
          `,
      },
      {
        modalId: "knowledges-direction",
        heading: "台灣能源轉型怎麼走？",
        picture: "../images/knowledges_direction.jpeg",
        summary: [
          "2025年非核家園",
          "100%綠能是國際大廠趨勢",
          "再生能源才能降燃煤 ",
          "天然氣是適合的過渡能源",
        ],
        article: `
h3 台灣能源轉型怎麼走？

p 非核減煤，增加再生能源與天然氣，是民間團體長期推動的能源轉型路徑。2016年蔡政府上台後，也依此提出能源轉型目標，亦即在2025年後，燃煤降到27%以下、核電歸零、再生能源提高到20%、燃氣提升到50%。這條路徑可以讓台灣減少空污和排碳，也符合台灣2025年後沒有核電可用的現實，讓台灣轉型為低碳、低污染的國家。

h3 2025年非核家園

p 台灣目前的核電廠狀況如下：

ul
  li 核一廠已在進行除役作業，不可能再發電。
  li 核二廠因為「用過燃料池」爆滿，反應爐內的燃料棒無法退出、換新，使得一號機在2021年7月就無法再發電，二號機也將遇到相同問題。
  li 核三廠是運轉近40年的老舊電廠，兩部核電機組的運轉執照將在2024、2025年到期，依法已不能再延役，2025年5月二號機執照到期後，也不會再發電了。
  li 核四廠最快要10年後才有可能發電，因此核四2025年不可能發電。

p 現在台灣僅剩核二、核三仍在發電，供電量僅佔全台11%，不是台灣電力主力。隨著核二核三陸續到期除役，2025年5月之後，台灣就沒有核電可以用了，遑論用核電來減煤減碳。

h3 100%綠能是國際大廠趨勢

p 蘋果、Google、台積電等知名企業都已加入RE100聯盟，承諾使用100%再生能源。蘋果承諾在2030年對供應鏈和產品實現100%碳中和，台積電也承諾2050年使用100%再生能源，並同步要求下游廠商改善節能與減碳。核電與燃煤都不是這些國際大廠要的！如果台灣仍擁抱核電或無法減煤，未來恐怕會失去護國神山，恐將重創台灣經濟發展，引發國安危機。


h3 再生能源才能降燃煤 
p 台灣的電力主要來自燃煤，而2025年後就沒有核電可以使用，如果要減煤，就必須增加燃氣或再生能源。由於燃氣發電量受天然氣接收站可卸收量影響而有上限，如果想減更多煤，就必須發展更多再生能源。

p 延伸閱讀：<a href="https://www.cet-taiwan.org/info/story/3825">綠電發展勢在必行　光電爭議如何解決？</a>

h3 天然氣是適合的過渡能源

p 在台灣再生能源成為主要能源前，需要靠增加天然氣來減煤、彌補核電除役的電力缺口。等再生能源漸具規模後，天然氣也將因應碳中和而逐步減少。 天然氣具有兩項天生優勢，適合作為過渡性的能源主力：

p 1.能與再生能源配合：燃氣電力可以在3小時內快速升降載，可以配合再生能源間歇性發電的電力調度需求。反觀核能需要3天、燃煤要8小時，根本無法「養綠」，只會排擠再生能源併網空間。

p 2.空污跟排碳比燃煤更少：燃氣排放的PM2.5、硫氧化物只有傳統燃煤的2~4%，氮氧化物與二氧化碳也不到四成。依據台電的估算，火力電廠在2025年雖會比2017年發更多電，但卻會減少3,000萬噸碳排及3.5萬噸空污，正是因為燃氣增加、燃煤減少了。

p 延伸閱讀：<a href="https://medium.com/%E8%83%BD%E6%BA%90%E8%BD%89%E5%9E%8B%E6%96%87%E6%91%98/%E7%87%83%E6%B0%A3%E8%A8%AD%E6%96%BD%E5%9C%A8%E5%8F%B0%E7%81%A3%E8%83%BD%E6%BA%90%E8%BD%89%E5%9E%8B%E4%B8%AD%E7%9A%84%E4%B8%89%E5%80%8B%E9%9A%8E%E6%AE%B5%E6%80%A7%E4%BB%BB%E5%8B%99-2515b664dafa">燃氣設施在台灣能源轉型中的三個階段性任務</a>

p 參考資料：<a href="https://www.aec.gov.tw/%E6%A0%B8%E8%83%BD%E7%AE%A1%E5%88%B6/%E6%A0%B8%E8%83%BD%E9%9B%BB%E5%BB%A0%E5%9F%BA%E6%9C%AC%E8%B3%87%E6%96%99--3_19.html">原能會核電廠基本資料</a>、<a href="https://www.aec.gov.tw/%E6%A0%B8%E8%83%BD%E7%AE%A1%E5%88%B6/%E5%8E%9F%E9%BE%8D%E9%96%80%E9%9B%BB%E5%BB%A0%E7%AE%A1%E5%88%B6%E5%B0%88%E5%8D%80--3_4622.html">原能會核四廠管制專區</a>

p 參考資料：<a href="https://www.there100.org/">RE100官網</a>、<a href="https://esg.tsmc.com/csr/ch/resources/documents.html">台積電CSR報告</a>
          `,
      },
      {
        modalId: "knowledges-climate",
        heading: "台灣如何因應氣候危機？",
        picture: "../images/knowledges_climate.jpg",
        summary: [
          "除了吵著蓋核電廠，還可以做什麼？",
          "製造業部門低碳轉型",
          "綠色人本交通運輸",
          "住商節能",
        ],
        article: `
h3 除了吵著蓋核電廠，還可以做什麼？

p 面對迫在眉睫的氣候危機，除了爭論是否要蓋核電廠之外，還有許多更為重要的任務。聯合國跨政府氣候變化專門委員會（IPCC）指出，如果要做到在世紀末控制升溫於1.5℃之內，需要全球尺度的達成2050年淨零碳排，再生能源佔比至少要達到77%。國際能源總署（IEA）的淨零碳排路徑報告指出，再生能源裝置量需在2030年成長4倍，電動運具須大幅成長、零碳建築的發展等。

h3 製造業部門低碳轉型

p 2018年時，製造部門佔台灣溫室氣體排放的52.18%，電力消費也佔了56%，因此製造業部門的低碳轉型對台灣的減碳很重要。工業部門要減碳有兩個重要的關鍵，一個是能源轉換，就是從化石燃料改為使用再生能源，另一個關鍵則是節電、提升能源效率。

p 目前，台灣排放前三大之製造業類別為「化學材料及化學製品製造業」、「金屬工業」、「電子業」，共佔67%；排放前10大企業佔製造業排放量69%，包括台塑、中鋼、中龍鋼鐵、台灣化纖、中油、台積電等。

p 企業減碳已經是國際趨勢，截至2021年為止，全球前2000大企業已經有20%以上承諾於2050年達成淨零碳排。

h3 綠色人本交通運輸

p 運輸部門碳排放佔台灣碳排放的12%左右，要減少來自交通運輸行為的碳排放，首先就是要減少旅運需求，尤其是長途旅運如航空，再來就是盡可能地改乘大眾運輸工具，最後則是交通運具的燃料轉換，也就是從燃油改為油電混合或電動汽車。

p 在台灣目前仍以火力發電為主的情況下，電動汽、機車的碳排放有辦法比燃油車低嗎？事實上，根據相關研究指出，在電力碳排係數（即每發出一度電的碳排放）低於每度電750公克二氧化碳的情況下，電動車的碳足跡將低於燃油車。而台灣2019年的電力碳排係數為每度電509公克二氧化碳，已經具有減碳效應了。

p 從燃油車轉為油電混合或電動汽車是世界重要趨勢，許多國家都設定了禁售燃油汽機車的期限，例如英國、德國、荷蘭、比利時都設定2030年開始禁售燃油車。

h3 住商節能

p 包括住宅與服務業在內的「住商部門」，佔台灣碳排放的的19%，其中有超過80%來自於電力消費。因此，要減少住商部門碳排放，除了讓發電的碳排減少，最重要的策略就是節電。

P 每天下午1點至下午3點往往是用電高峰，在這段時間裡，住商的用電貢獻超過五成以上，比工業用戶來得多。因此，住商用戶在用電高峰時節電，可以有效減少發電端的壓力，包括下班關閉電腦、避免在尖峰時間使用耗能家電、關閉不必要的照明設備及待機電力等。

P 平均而言，冷氣佔居家用電的27.86％，夏天時則會飆升至47.11％，尤其是出廠超過十年的老舊冷氣，能耗更是一級能效冷氣的2.5倍，也可透過更換家中老舊冷氣，為節能減碳盡一份力。

p 參考資料：<a href="https://www.reuters.com/article/us-global-climate-carbon-business-trfn-idUSKBN2BF2ZX">Net-zero emissions targets adopted by one-fifth of world's largest companies</a>
          `,
      },
    ],
  },
};
