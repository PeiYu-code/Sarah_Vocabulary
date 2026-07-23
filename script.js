// 1. 單字資料庫 (包含所有單字)
const wordBank = [
  { eng: "boy", ch: "男孩(n.)" },
  { eng: "girl", ch: "女孩(n.)" },
  { eng: "I", ch: "我" },
  { eng: "you", ch: "你、你們" },
  { eng: "he", ch: "他" },
  { eng: "she", ch: "她" },
  { eng: "it", ch: "它" },
  { eng: "we", ch: "我們" },
  { eng: "they", ch: "他們" },
  { eng: "run", ch: "跑(v.)" },
  { eng: "eat", ch: "吃(v.)" },
  { eng: "like", ch: "喜歡(v.)" },
  { eng: "teacher", ch: "老師(n.)" },
  { eng: "student", ch: "學生(n.)" },
  { eng: "doctor", ch: "醫生(n.)" },
  { eng: "nurse", ch: "護士(n.)" },
  { eng: "patient", ch: "病人(n.)" },
  { eng: "house", ch: "房子(n.)" },
  { eng: "park", ch: "公園(n.)" },
  { eng: "here", ch: "這裡" },
  { eng: "there", ch: "那裡" },
  { eng: "go", ch: "去(v.)" },
  { eng: "come", ch: "來(v.)" },
  { eng: "table", ch: "桌子(n.)" },
  { eng: "chair", ch: "椅子(n.)" },
  { eng: "walk", ch: "走路、散步(v.)" },
  { eng: "have", ch: "有(v.)" },
  { eng: "in", ch: "在...裡面" },
  { eng: "out of", ch: "在...外面" },
  { eng: "on", ch: "在...上面" },
  { eng: "under", ch: "在...下面" },
  { eng: "meal", ch: "一餐(n.)" },
  { eng: "breakfast", ch: "早餐(n.)" },
  { eng: "lunch", ch: "午餐(n.)" },
  { eng: "dinner", ch: "晚餐(n.)" },
  { eng: "write", ch: "寫(v.)" },
  { eng: "read", ch: "閱讀(v.)" },
  { eng: "drink", ch: "喝(v.)" },
  { eng: "sleep", ch: "睡覺(v.)" },
  { eng: "beautiful", ch: "美麗的(adj.)" },
  { eng: "ugly", ch: "醜陋的(adj.)" },
  { eng: "man", ch: "男子、人類(n.)" },
  { eng: "woman", ch: "女人(n.)" },
  { eng: "bag", ch: "袋子(n.)" },
  { eng: "cake", ch: "蛋糕(n.)" },
  { eng: "long", ch: "長的、久的(adj.)" },
  { eng: "short", ch: "短的、矮的(adj.)" },
  { eng: "city", ch: "城市(n.)" },
  { eng: "head", ch: "頭(n.)" },
  { eng: "book", ch: "書(n.)" },
  { eng: "library", ch: "圖書館(n.)" },
  { eng: "open", ch: "打開(v.); 開的(adj.)" },
  { eng: "close", ch: "關閉(v.); 接近的、親近的(adj.)" },
  { eng: "also", ch: "也" },
  { eng: "arm", ch: "手臂(n.)" },
  { eng: "leg", ch: "腿(n.)" },
  { eng: "knee", ch: "膝蓋(n.)" },
  { eng: "nose", ch: "鼻子(n.)" },
  { eng: "eye", ch: "眼睛(n.)" },
  { eng: "ear", ch: "耳朵(n.)" },
  { eng: "buy", ch: "買(v.)" },
  { eng: "sell", ch: "賣(v.)" },
  { eng: "bad", ch: "壞的、不好的(adj.)" },
  { eng: "duck", ch: "鴨子(n.)" },
  { eng: "chicken", ch: "雞(n.)" },
  { eng: "game", ch: "遊戲(n.)" },
  { eng: "enough", ch: "足夠的(adj.)" },
  { eng: "smile", ch: "微笑(v.)" },
  { eng: "laugh", ch: "大笑(v.)" },
  { eng: "cry", ch: "哭(v.)" },
  { eng: "kid", ch: "小孩(n.)" },
  { eng: "baby", ch: "嬰兒(n.)" },
  { eng: "pig", ch: "豬(n.)" },
  { eng: "body", ch: "身體(n.)" },
  { eng: "dance", ch: "跳舞(v.)" },
  { eng: "hand", ch: "手(n.)" },
  { eng: "finger", ch: "手指(n.)" },
  { eng: "foot", ch: "腳(n.)" },
  { eng: "toe", ch: "腳趾(n.)" },
  { eng: "tea", ch: "茶(n.)" },
  { eng: "cow", ch: "乳牛(n.)" },
  { eng: "rabbit", ch: "兔子(n.)" },
  { eng: "elephant", ch: "大象(n.)" },
  { eng: "shoe", ch: "鞋子(n.)" },
  { eng: "bed", ch: "床(n.)" },
  { eng: "want", ch: "想要(v.)" },
  { eng: "hot", ch: "熱的、辣的(adj.)" },
  { eng: "cold", ch: "冷的(adj.)" },
  { eng: "high", ch: "高的(adj.)" },
  { eng: "low", ch: "低的(adj.)" },
  { eng: "stop", ch: "停止(v.), 站牌(n.)" },
  { eng: "movie", ch: "電影(n.)" },
  { eng: "milk", ch: "牛奶(n.)" },
  { eng: "cheese", ch: "起司(n.)" },
  { eng: "butter", ch: "奶油(n.)" },
  { eng: "important", ch: "重要的(adj.)" },
  { eng: "reason", ch: "原因(n.)" },
  { eng: "story", ch: "故事(n.)" },
  { eng: "hard", ch: "困難的、硬的(adj.)" },
  { eng: "boss", ch: "老闆(n.)" },
  { eng: "make", ch: "製作(v.)" },
  { eng: "sea", ch: "海(n.)" },
  { eng: "ship", ch: "船艦(n.)" },
  { eng: "boat", ch: "(小)船(n.)" },
  { eng: "sky", ch: "天空" },
  { eng: "sun", ch: "太陽(n.)" },
  { eng: "moon", ch: "月亮(n.)" },
  { eng: "crazy", ch: "瘋狂的(adj.)" },
  { eng: "bean", ch: "豆子(n.)" },
  { eng: "doll", ch: "玩偶、洋娃娃(n.)" },
  { eng: "letter", ch: "信、字母(n.)" },
  { eng: "belt", ch: "皮帶(n.)" }
];

// 2. 遊戲狀態與記錄變數
let wordPool = [];
let activeEng = [];
let activeCh = [];
let selectedEngSlot = null;
let selectedChSlot = null;
let remainingCount = 0;
let successScore = 0;
let errorScore = 0;
let wrongWordsSet = new Set();
let startTime = null; // 用於計算單輪花費秒數

// ⚠️ 36行：請把這份 Sarah_Vocabulary 專用的新 Google Sheets GAS 網址貼在下方雙引號內：
const GOOGLE_APP_URL = "https://script.google.com/macros/s/AKfycbx1Fqe9_w5Zo1GpqzICclNZi3kQ11MD2cMkIs-VZY6hFufUfeJVSsTq2m--rSpZI9UmOg/exec";

// 3. 亂數洗牌函數 (Fisher-Yates Shuffle)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 4. 初始化遊戲
function initGame() {
  let allWords = [...wordBank];
  shuffle(allWords);

  // 配合目前單字庫總數，動態調整測驗總題數（最多 45 題，若不夠則以現有單字為主）
  const gameSize = Math.min(45, allWords.length);
  wordPool = allWords.slice(0, gameSize);
  remainingCount = wordPool.length;
  successScore = 0;
  errorScore = 0;
  wrongWordsSet.clear();
  updateScoreboard();

  // ⏱️ 記錄此輪遊戲的起點時間
  startTime = new Date();

  activeEng = [];
  activeCh = [];
  const initialDraw = Math.min(5, wordPool.length);
  for (let i = 0; i < initialDraw; i++) {
    const word = wordPool.pop();
    activeEng.push(word);
    activeCh.push(word);
  }

  shuffle(activeCh);
  renderColumns();

  document.getElementById('result-modal').classList.add('hidden');
  selectedEngSlot = null;
  selectedChSlot = null;
}

// 5. 更新計分板
function updateScoreboard() {
  document.getElementById('remaining-count').textContent = remainingCount;
  document.getElementById('success-score').textContent = successScore;
  document.getElementById('error-score').textContent = errorScore;
}

// 6. 渲染欄位
function renderColumns() {
  const engColumn = document.getElementById('english-column');
  const chColumn = document.getElementById('chinese-column');
  engColumn.innerHTML = '';
  chColumn.innerHTML = '';

  activeEng.forEach(word => {
    const slot = document.createElement('div');
    slot.className = 'slot fade-in';
    slot.textContent = word.eng;
    slot.dataset.type = 'eng';
    slot.dataset.word = word.eng;
    slot.addEventListener('click', handleEngClick);
    engColumn.appendChild(slot);
  });

  activeCh.forEach(word => {
    const slot = document.createElement('div');
    slot.className = 'slot fade-in';
    slot.textContent = word.ch;
    slot.dataset.type = 'ch';
    slot.dataset.word = word.eng;
    slot.addEventListener('click', handleChClick);
    chColumn.appendChild(slot);
  });
}

// 7. 點擊英文欄處理
function handleEngClick(e) {
  if (selectedEngSlot) {
    selectedEngSlot.classList.remove('selected');
  }
  selectedEngSlot = e.target;
  selectedEngSlot.classList.add('selected');

  if (selectedChSlot) {
    checkMatch();
  }
}

// 8. 點擊中文欄處理
function handleChClick(e) {
  if (selectedChSlot) {
    selectedChSlot.classList.remove('selected');
  }
  selectedChSlot = e.target;
  selectedChSlot.classList.add('selected');

  if (selectedEngSlot) {
    checkMatch();
  }
}

// 9. 檢查是否配對成功
function checkMatch() {
  const engWord = selectedEngSlot.dataset.word;
  const chWord = selectedChSlot.dataset.word;

  if (engWord === chWord) {
    // 配對成功
    selectedEngSlot.classList.add('fade-out');
    selectedChSlot.classList.add('fade-out');
    remainingCount--;
    successScore++;
    updateScoreboard();

    selectedEngSlot = null;
    selectedChSlot = null;

    setTimeout(() => {
      // 🎯 關鍵修正：精準找出這顆單字在 activeEng 與 activeCh 陣列中的位置
      const engIndex = activeEng.findIndex(w => w.eng === engWord);
      const chIndex = activeCh.findIndex(w => w.eng === engWord);

      if (wordPool.length > 0) {
        // 字庫還有字，抽新字精準遞補
        const nextWord = wordPool.pop();
        if (engIndex !== -1) activeEng[engIndex] = nextWord;
        if (chIndex !== -1) activeCh[chIndex] = nextWord;
      } else {
        // 字庫空了，將此題從記憶體陣列中精準移除（最後 5 題畫面開始遞減）
        if (engIndex !== -1) activeEng.splice(engIndex, 1);
        if (chIndex !== -1) activeCh.splice(chIndex, 1);
      }

      // 🎲 每次答對後，將剩下的中文陣列重新亂數洗牌
      shuffle(activeCh);

      // 🔄 關鍵修正：直接呼叫 renderColumns()，徹底杜絕錯位卡關 Bug
      renderColumns();

      // 🏁 檢查遊戲是否結束
      if (activeEng.length === 0) {
        showResult();
      }
    }, 500);

  } else {
    // 配對失敗
    errorScore++;
    updateScoreboard();

    const wrongEngText = selectedEngSlot.textContent;
    const correctWordObj = wordBank.find(w => w.eng === wrongEngText);
    if (correctWordObj) {
      wrongWordsSet.add(`${correctWordObj.eng}(${correctWordObj.ch})`);
    }

    selectedEngSlot.classList.add('wrong');
    selectedChSlot.classList.add('wrong');

    const currentEng = selectedEngSlot;
    const currentCh = selectedChSlot;
    selectedEngSlot = null;
    selectedChSlot = null;

    setTimeout(() => {
      currentEng.classList.remove('selected', 'wrong');
      currentCh.classList.remove('selected', 'wrong');
    }, 500);
  }
}

// 10. 顯示結算畫面彈出視窗 + 暗中上傳結果與時間記錄至新 Google 試算表
function showResult() {
  document.getElementById('final-success').textContent = successScore;
  document.getElementById('final-error').textContent = errorScore;

  const wrongWordsList = document.getElementById('wrong-words-list');
  wrongWordsList.innerHTML = '';
  let wrongWordsString = "";

  if (wrongWordsSet.size > 0) {
    document.getElementById('wrong-words-box').style.display = 'block';
    let items = [];
    wrongWordsSet.forEach(wordStr => {
      items.push(wordStr);
      const li = document.createElement('li');
      li.textContent = wordStr;
      wrongWordsList.appendChild(li);
    });
    wrongWordsString = items.join(", ");
  } else {
    document.getElementById('wrong-words-box').style.display = 'none';
    wrongWordsString = "無答錯單字";
  }

  // ⏱️ 計算時間花費（秒數）
  const endTime = new Date();
  const timeSpentSeconds = startTime ? Math.round((endTime - startTime) / 1000) : 0;

  // 🤫 透過 text/plain 繞過 CORS 攔截，異步發送到獨立的後台
  if (GOOGLE_APP_URL && GOOGLE_APP_URL !== "YOUR_NEW_WEB_APP_URL_HERE") {
    fetch(GOOGLE_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify({
        successScore: successScore,
        errorScore: errorScore,
        wrongWords: wrongWordsString,
        timeSpent: timeSpentSeconds
      })
    }).catch(err => console.log("Silent logging status:", err));
  }

  document.getElementById('result-modal').classList.remove('hidden');
}

// 11. 監聽重新開始按鈕與網頁載入
document.getElementById('restart-btn').addEventListener('click', initGame);
window.addEventListener('DOMContentLoaded', initGame);
