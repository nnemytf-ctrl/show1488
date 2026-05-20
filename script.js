document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Сайт загружен...');

  const startBtn = document.getElementById('startShow');
  const heroScreen = document.getElementById('hero');
  const dashboard = document.getElementById('dashboard');
  const sfxTrans = document.getElementById('sfx-trans');

  if (startBtn) {
    console.log('✅ Кнопка найдена');
    const newBtn = startBtn.cloneNode(true);
    startBtn.parentNode.replaceChild(newBtn, startBtn);
    
    newBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (heroScreen) {
        heroScreen.classList.add('hidden');
        setTimeout(() => { heroScreen.style.display = 'none'; }, 500);
      }
      if (dashboard) {
        dashboard.classList.remove('hidden');
      }
      if (sfxTrans) { 
        sfxTrans.currentTime = 0; 
        sfxTrans.play().catch(e => console.log('Звук:', e)); 
      }
    });
  }

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const episodesData = [
    {
      title: "Эпизод I: Звукорежиссёр 🎧",
      note: "разминка, наказания не усиливаються",
      tasks: [
        { 
          name: "Звукорежиссёр 💀", type: "audio", completed: false, audioFile: "assets/audio/task1.mp3", correctSlot: 0, audioGain: 2.5,
          slots: [
            { name: "Wild West Gold Blazing Bounty", image: "assets/img/ep1/wild-west-blazing.jpg" }, 
            { name: "Wild West Gold Megaways", image: "assets/img/ep1/wild-west-megaways.jpg" }, 
            { name: "Iron Bank 2", image: "assets/img/ep1/iron-bank-2.jpg" }, 
            { name: "Wild Bounty Showdown", image: "assets/img/ep1/wild-bounty.jpg" }
          ], 
          punishment: "Бонуска за 2/10 баланса (Топовая) в слоте Wild West Gold Blazing Bounty" 
        },
        { 
          name: "Поиск тайника 💀💀", type: "audio", completed: false, audioFile: "assets/audio/task2.mp3", correctSlot: 0, audioGain: 2.5,
          slots: [
            { name: "Super Sticky Piggy", image: "assets/img/ep1/sticky-piggy.jpg" }, 
            { name: "The Hand of Midas", image: "assets/img/ep1/hand-midas.jpg" }, 
            { name: "Royal Xmass", image: "assets/img/ep1/royal-xmass.jpg" }, 
            { name: "Iron Bank", image: "assets/img/ep1/iron-bank.jpg" }
          ], 
          punishment: "Бонуска за 2/10 баланса (Топовую) в слоте Super Sticky Piggy" 
        },
        { 
          name: "Первый контакт 💀💀", type: "audio", completed: false, audioFile: "assets/audio/task3.mp3", correctSlot: 0, audioGain: 2.5,
          slots: [
            { name: "The Dog House Dice Show", image: "assets/img/ep1/dog-house-dice.jpg" }, 
            { name: "The Dog House - Royal Hunt", image: "assets/img/ep1/dog-house-royal.jpg" }, 
            { name: "Princess Suki", image: "assets/img/ep1/princess-suki.jpg" }, 
            { name: "Xmas Drop", image: "assets/img/ep1/xmas-drop.jpg" }
          ], 
          punishment: "50 спинов, по 1500 руб в слоте The Dog House Dice Show" 
        }
      ]
    },
    {
      title: "Эпизод II: Ставка против рандома 🎲",
      tasks: [
        { name: "Зе дог фалос 💀💀", displayName: "ЗЕ ДОГ ФАЛОС", image: "assets/img/ep2/dog-house.jpg", type: "button", completed: false, description: "Зайди в The Dog House, поставь 100 спинов в блокноте по 1.000.", predictText: "Модеры, сделайте предикт на выпадение 2+ бонусок.", punishment: "Бонусное наказание за эпизод 2" },
        { name: "Ле томбой 💀", displayName: "ЛЕ ТОМБОЙ", image: "assets/img/ep2/le-cowboy.jpg", type: "button", completed: false, description: "Зайди в Le Cowboy и попробуй 3 раза пробить хот мод, по приятной для баланса ставке.", predictText: "Модеры, сделайте предикт на получится ли пробить хот мод", punishment: "Бонусное наказание за эпизод 2" },
        { name: "негр джек 💀💀", displayName: "НЕГР ДЖЕК", image: "assets/img/ep2/blackjack.jpg", type: "button", completed: false, description: "Зайди в Блекджек без лайв дилера. Поставь 2 руки. На каждой руке боковые ставки по 5 000 (слева 5 000, справа 5 000), ставка руки 40 000.", predictText: "Модеры, ставьте предикт на окуп", punishment: "Бонусное наказание за эпизод 2" }
      ]
    },
    {
      title: "Эпизод III: Математик на час 🧮",
      tasks: [
        { 
          name: "Макса в Pragmatic 💀", image: "assets/img/ep3/zeus-hades.jpg", type: "quiz", completed: false, 
          question: "Zeus vs Hades – Gods of War (Pragmatic)", 
          options: [{ text: "25 000 x", isCorrect: true }, { text: "20 000 x", isCorrect: false }, { text: "27 500 x", isCorrect: false }], 
          punishment: "Zeus vs Typhon, 2 супер спина, по ставке 320 = 64 000, в случае ошибки + 1 функция" 
        },
        { 
          name: "Макса в Nolimit 💀", image: "assets/img/ep3/jingle-balls.jpg", type: "quiz", completed: false, 
          question: "Jingle Balls (Nolimit)", 
          options: [{ text: "17 500 x", isCorrect: false }, { text: "15 000 x", isCorrect: false }, { text: "12 250 x", isCorrect: true }], 
          punishment: "Твое время зачилиться, отдохни, поиграй в Jingle Balls как хочешь (максимум до -200 000 баланса)." 
        },
        { 
          name: "Макса в Belatra 💀", image: "assets/img/ep3/princess-suki.jpg", type: "quiz", completed: false, 
          question: "Princess Suki (Belatra)", 
          options: [{ text: "5 000 x", isCorrect: true }, { text: "7 500 x", isCorrect: false }, { text: "10 000 x", isCorrect: false }], 
          punishment: "Купи 3 бонуса по 30 000+, в случае ошибки уже не 3, а 5 бонусок. В слоте Princess Suki" 
        }
      ]
    },
    {
      title: "Эпизод IV: Флешбеки 📼",
      tasks: [
        { 
          name: "Что же я тут сказал? 💀💀", type: "quiz", completed: false, 
          question: "Что тут сказал леха???",
          videoFile: "assets/video/ep4/task1.mp4", revealVideo: "assets/video/ep4/task1_full.mp4", 
          options: [{ text: "Неси додеп, срочна неси додеп!!!", isCorrect: false }, { text: "Де водка!!!", isCorrect: true }, { text: "Я не виноват.", isCorrect: false }], 
          punishment: "Поймать 2 победы подряд в Coinflip (режим в лутране) + в случае ошибки x2 к ставке после каждого проигрыша. (ставка 20 000)" 
        },
        { 
          name: "Как факт 💀💀", type: "quiz", completed: false, 
          question: "Напомни, какой итоговый вин был с максвина в бамбуке?",
          revealVideo: "assets/video/ep4/task2.mp4", 
          options: [{ text: "500 000", isCorrect: false }, { text: "600 000", isCorrect: false }, { text: "700 000", isCorrect: true }, { text: "800 000", isCorrect: false }], 
          punishment: "Зайди в Zombie Carnival, сделай 120 спинов по ставке 1 200." 
        },
        { 
          name: "Что же теперь я сказал тут? 🤡", type: "quiz", completed: false, 
          question: "Что же теперь я сказал тут?",
          videoFile: "assets/video/ep4/task3.mp4", revealVideo: "assets/video/ep4/task3_full.mp4", 
          options: [{ text: "Я в дубай, приеду ебало тебе набью пидорас, по хуже шафхала!", isCorrect: false }, { text: "Пождите кто то мне задонатил? Ээйй зачем так делать?", isCorrect: true }, { text: "Дура у меня и так, ой да пошел ты нахуй", isCorrect: false }], 
          punishment: "Зайди ка в Ice Fishing до первого бонуса, ставка 1/20=5% от баланса, то есть 300 000=> 15 000" 
        }
      ]
    },
    {
      title: "Эпизод V: Блюр слоты 🌫️",
      tasks: [
        { 
          name: "3 buzzing wilds 💀💀", type: "quiz", completed: false, 
          blurImage: "assets/img/blur/buzzing-wilds.jpg", 
          options: [{ text: "Sugar Rush 1000", isCorrect: false }, { text: "Starlight Princess Super Scatter", isCorrect: false }, { text: "Release the Kraken Megaways", isCorrect: false }, { text: "Buzzing Wilds", isCorrect: true }], 
          punishment: "Средний бонус за 100 000 (ошибка: за 160 000) В слоте 3 Buzzing Wilds." 
        },
        { 
          name: "Dork Unit 💀💀", type: "quiz", completed: false, 
          blurImage: "assets/img/blur/dork-unit.jpg", 
          options: [{ text: "Beam Boys", isCorrect: false }, { text: "Book of Time", isCorrect: false }, { text: "Twisted Lab", isCorrect: false }, { text: "Dork Unit", isCorrect: true }], 
          punishment: "Бонус за 100 000 обычные подарочки (ошибка: за 150 000) В слоте Dork Unit" 
        },
        { 
          name: "xWays Hoarder xSplit 💀💀", type: "quiz", completed: false, 
          blurImage: "assets/img/blur/xways-hoarder.jpg", 
          options: [{ text: "Catfish Hunters", isCorrect: false }, { text: "Dead Canary", isCorrect: false }, { text: "Outsourced", isCorrect: false }, { text: "xWays Hoarder xSplit", isCorrect: true }], 
          punishment: "Две бонуски за 77.700 бонус (ошибка: три бонуски) xWays Hoarder xSplit" 
        }
      ]
    },
    {
      title: "Эпизод VI: Ultra-hard 🔥",
      tasks: [
        { 
          name: "(gl)", displayName: "MERRY HOG", image: "assets/img/ep6/merry-hog.jpg", type: "button", completed: false, 
          description: "Зайди в слот Merry Hog и купи 3 бонуски по 100 000", predictText: "", showWarning: true, 
          punishment: "Ультра-наказание за эпизод 6" 
        }
      ]
    }
  ];

  let currentTask = { episodeIndex: null, taskIndex: null, data: null, screenType: null };
  let isAudioPlaying = false;
  let taskCompleted = false;
  let quizAnswered = false;
  let timerInterval = null;

  const completionScreen = document.getElementById('completionScreen');
  const audioTaskScreen = document.getElementById('audioTaskScreen');
  const buttonTaskScreen = document.getElementById('buttonTaskScreen');
  const quizTaskScreen = document.getElementById('quizTaskScreen');
  const modalOverlay = document.getElementById('modalOverlay');
  const episodesContainer = document.getElementById('episodesList');
  const slotsGrid = document.getElementById('slotsGrid');
  const quizOptions = document.getElementById('quizOptions');
  
  const buttonTaskImageContainer = document.getElementById('buttonTaskImageContainer');
  const buttonTaskImage = document.getElementById('buttonTaskImage');
  const quizPreviewImageContainer = document.getElementById('quizPreviewImageContainer');
  const quizPreviewImage = document.getElementById('quizPreviewImage');
  const quizVideoContainer = document.getElementById('quizVideoContainer');
  const quizVideoMuted = document.getElementById('quizVideoMuted');
  const quizRevealVideoContainer = document.getElementById('quizRevealVideoContainer');
  const quizVideoUnmuted = document.getElementById('quizVideoUnmuted');
  const quizBlurContainer = document.getElementById('quizBlurContainer');
  const quizBlurImage = document.getElementById('quizBlurImage');
  const modalVideoContainer = document.getElementById('modalVideoContainer');
  const modalVideo = document.getElementById('modalVideo');
  const finalPunishmentBox = document.getElementById('finalPunishmentBox');

  const restartBtn = document.getElementById('restartBtn');
  const backToHero = document.getElementById('backToHero');
  const backToEpisodes1 = document.getElementById('backToEpisodes1');
  const backToEpisodes2 = document.getElementById('backToEpisodes2');
  const backToEpisodes3 = document.getElementById('backToEpisodes3');
  const continueBtn = document.getElementById('continueBtn');
  const completeTaskBtn = document.getElementById('completeTaskBtn');
  const playAudioBtn = document.getElementById('playAudio');
  const audioVisualizer = document.getElementById('audioVisualizer');
  const slotAudio = document.getElementById('slotAudio');
  const volumeSlider = document.getElementById('volumeSlider');

  const sfxClick = document.getElementById('sfx-click');
  const sfxSuccess = document.getElementById('sfx-success');

  if (slotAudio && volumeSlider) {
    slotAudio.volume = volumeSlider.value;
    volumeSlider.addEventListener('input', (e) => { slotAudio.volume = e.target.value; });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', function() {
      episodesData.forEach(ep => ep.tasks.forEach(t => t.completed = false));
      if (completionScreen) completionScreen.classList.add('hidden');
      if (heroScreen) { heroScreen.style.display = 'flex'; setTimeout(() => heroScreen.classList.remove('hidden'), 50); }
      if (dashboard) dashboard.classList.add('hidden');
      renderEpisodes();
    });
  }

  if (backToHero && dashboard && heroScreen) {
    backToHero.addEventListener('click', () => {
      dashboard.classList.add('hidden'); 
      heroScreen.style.display = 'flex';
      setTimeout(() => { heroScreen.classList.remove('hidden'); }, 50);
      if (sfxTrans) { sfxTrans.currentTime = 0; sfxTrans.play().catch(()=>{}); }
    });
  }

  function backToEpisodesCommon() {
    clearTimer();
    stopAllVideos();
    if (audioTaskScreen) audioTaskScreen.classList.add('hidden');
    if (buttonTaskScreen) buttonTaskScreen.classList.add('hidden');
    if (quizTaskScreen) quizTaskScreen.classList.add('hidden');
    if (dashboard) dashboard.classList.remove('hidden');
    stopAudio();
    currentTask = { episodeIndex: null, taskIndex: null, data: null, screenType: null };
    taskCompleted = false; quizAnswered = false;
    renderEpisodes();
    if (sfxTrans) { sfxTrans.currentTime = 0; sfxTrans.play().catch(()=>{}); }
  }

  if (backToEpisodes1) backToEpisodes1.addEventListener('click', backToEpisodesCommon);
  if (backToEpisodes2) backToEpisodes2.addEventListener('click', backToEpisodesCommon);
  if (backToEpisodes3) backToEpisodes3.addEventListener('click', backToEpisodesCommon);

  if (continueBtn && modalOverlay) {
    continueBtn.addEventListener('click', () => { 
      stopAllVideos();
      modalOverlay.classList.add('hidden'); 
      backToEpisodesCommon(); 
    });
  }

  function stopAllVideos() {
    if (quizVideoMuted) { quizVideoMuted.pause(); quizVideoMuted.currentTime = 0; }
    if (quizVideoUnmuted) { quizVideoUnmuted.pause(); quizVideoUnmuted.currentTime = 0; }
    if (modalVideo) { modalVideo.pause(); modalVideo.currentTime = 0; }
  }

  function checkAllCompleted() {
    const allDone = episodesData.every(ep => ep.tasks.every(t => t.completed));
    if (allDone) {
      setTimeout(() => showCompletionScreen(), 1500);
    }
  }

  function showCompletionScreen() {
    if (dashboard) dashboard.classList.add('hidden');
    if (audioTaskScreen) audioTaskScreen.classList.add('hidden');
    if (buttonTaskScreen) buttonTaskScreen.classList.add('hidden');
    if (quizTaskScreen) quizTaskScreen.classList.add('hidden');
    if (modalOverlay) modalOverlay.classList.add('hidden');
    if (completionScreen) {
      completionScreen.classList.remove('hidden');
    }
  }

  function startTimer(seconds) {
    clearInterval(timerInterval);
    let timeLeft = seconds;
    const timerEl = document.getElementById('quizTimer');
    if (timerEl) { timerEl.textContent = `⏱ ${timeLeft}`; timerEl.classList.remove('warning'); }
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timerEl) timerEl.textContent = `⏱ ${timeLeft}`;
      if (timeLeft <= 10 && timerEl) timerEl.classList.add('warning');
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        if (!quizAnswered) {
          quizAnswered = true;
          document.querySelectorAll('.quiz-option-case').forEach(opt => opt.style.pointerEvents = 'none');
          if (sfxClick) { sfxClick.currentTime = 0; sfxClick.play().catch(()=>{}); }
          setTimeout(() => showModal(`Эпизод ${currentTask.episodeIndex + 1}`), 1000);
        }
      }
    }, 1000);
  }
  
  function clearTimer() { clearInterval(timerInterval); timerInterval = null; }

  function renderEpisodes() {
    if (!episodesContainer) return;
    episodesContainer.innerHTML = '';
    episodesData.forEach((ep, epIndex) => {
      const card = document.createElement('div');
      card.className = 'episode-case';
      const header = document.createElement('div');
      header.className = 'episode-case-header';
      let titleHTML = ep.title;
      if (ep.note) titleHTML += ` <span class="ep-note">${ep.note}</span>`;
      header.innerHTML = `<span class="episode-case-title">${titleHTML}</span><span class="ep-case-icon">▼</span>`;
      header.addEventListener('click', () => {
        document.querySelectorAll('.episode-case').forEach(c => c.classList.remove('expanded'));
        card.classList.toggle('expanded');
        if (sfxClick) { sfxClick.currentTime = 0; sfxClick.play().catch(()=>{}); }
      });
      const tasksList = document.createElement('div');
      tasksList.className = 'tasks-list-case';
      ep.tasks.forEach((task, taskIndex) => {
        const taskEl = document.createElement('div');
        taskEl.className = 'task-item-case';
        if (task.completed) taskEl.classList.add('completed');
        let displayText = epIndex >= 4 ? (task.name.length <= 4 ? task.name : `Задание ${taskIndex + 1}`) : task.name;
        taskEl.innerHTML = `<span class="task-number">${taskIndex + 1}</span><span class="task-text">${displayText}</span><span class="task-check">✓</span>`;
        if (!task.completed) {
          taskEl.addEventListener('click', () => openTaskScreen(epIndex, taskIndex));
        } else {
          taskEl.style.cursor = 'default'; taskEl.style.opacity = '0.7';
        }
        tasksList.appendChild(taskEl);
      });
      card.appendChild(header); card.appendChild(tasksList);
      episodesContainer.appendChild(card);
    });
  }

  function openTaskScreen(epIndex, taskIndex) {
    const taskData = episodesData[epIndex].tasks[taskIndex];
    if (taskData.completed) return;
    currentTask = { episodeIndex: epIndex, taskIndex: taskIndex, data: taskData, screenType: taskData.type };
    if (dashboard) dashboard.classList.add('hidden');
    if (audioTaskScreen) audioTaskScreen.classList.add('hidden');
    if (buttonTaskScreen) buttonTaskScreen.classList.add('hidden');
    if (quizTaskScreen) quizTaskScreen.classList.add('hidden');
    clearTimer();
    if (taskData.type === 'audio') { if (audioTaskScreen) audioTaskScreen.classList.remove('hidden'); setupAudioScreen(epIndex, taskIndex, taskData); } 
    else if (taskData.type === 'button') { if (buttonTaskScreen) buttonTaskScreen.classList.remove('hidden'); setupButtonScreen(epIndex, taskIndex, taskData); } 
    else if (taskData.type === 'quiz') { if (quizTaskScreen) quizTaskScreen.classList.remove('hidden'); setupQuizScreen(epIndex, taskIndex, taskData); }
    taskCompleted = false; quizAnswered = false;
  }

  function setupAudioScreen(epIndex, taskIndex, data) {
    const badge = document.querySelector('#audioTaskScreen .task-badge');
    if (badge) badge.innerHTML = `Эпизод ${epIndex + 1} • Задание ${taskIndex + 1}`;
    if (!slotsGrid) return;
    slotsGrid.innerHTML = '';
    data.slots.forEach((slot, index) => {
      const slotCard = document.createElement('div'); slotCard.className = 'slot-card-case';
      const slotImage = document.createElement('div'); slotImage.className = 'slot-image';
      if (slot.image) { 
        const img = document.createElement('img'); 
        img.src = slot.image; 
        img.alt = slot.name; 
        img.onerror = () => { slotImage.innerHTML = '🎰'; }; 
        slotImage.appendChild(img); 
      } else { slotImage.innerHTML = '🎰'; }
      const slotInfo = document.createElement('div'); slotInfo.className = 'slot-info';
      slotInfo.innerHTML = `<div class="slot-name">${slot.name}</div><div class="slot-result correct-text">✓ ПРАВИЛЬНО!</div><div class="slot-result wrong-text">✗ НЕВЕРНО</div>`;
      slotCard.appendChild(slotImage); slotCard.appendChild(slotInfo);
      slotCard.addEventListener('click', () => checkAudioAnswer(index, slotCard, data));
      slotsGrid.appendChild(slotCard);
    });
  }

  function checkAudioAnswer(selectedIndex, slotCard, taskData) {
    if (taskCompleted) return;
    const allCards = document.querySelectorAll('.slot-card-case');
    if (selectedIndex === taskData.correctSlot) {
      slotCard.classList.add('correct'); taskCompleted = true;
      if (sfxSuccess) { sfxSuccess.currentTime = 0; sfxSuccess.play().catch(()=>{}); }
      allCards.forEach(card => { card.style.pointerEvents = 'none'; if (card !== slotCard) card.style.opacity = '0.4'; });
      stopAudio();
      episodesData[currentTask.episodeIndex].tasks[currentTask.taskIndex].completed = true;
      checkAllCompleted();
      setTimeout(() => showModal(`Эпизод ${currentTask.episodeIndex + 1}`), 1500);
    } else {
      slotCard.classList.add('wrong');
      if (sfxClick) { sfxClick.currentTime = 0; sfxClick.play().catch(()=>{}); }
      setTimeout(() => slotCard.classList.remove('wrong'), 1000);
    }
  }

  function setupButtonScreen(epIndex, taskIndex, data) {
    const badge = document.querySelector('#buttonTaskScreen .task-badge');
    if (badge) badge.innerHTML = `Эпизод ${epIndex + 1} • Задание ${taskIndex + 1}`;
    const title = document.getElementById('buttonTaskTitle');
    if (title) title.textContent = data.displayName || data.name.split(' ')[0].toUpperCase();
    const desc = document.getElementById('buttonTaskDescription'); if (desc) desc.textContent = data.description;
    const predict = document.getElementById('buttonPredictText'); if (predict) predict.textContent = data.predictText;
    const predictBox = document.getElementById('predictBox');
    const warningBox = document.getElementById('warningBox');
    
    if (predictBox) {
      if (data.predictText && data.predictText.trim() !== "") {
        predictBox.classList.remove('hidden');
      } else {
        predictBox.classList.add('hidden');
      }
    }
    
    if (warningBox) {
      if (data.showWarning) {
        warningBox.style.display = 'block';
      } else {
        warningBox.style.display = 'none';
      }
    }
    
    if (data.image && buttonTaskImage && buttonTaskImageContainer) { 
      buttonTaskImage.src = data.image; 
      buttonTaskImageContainer.style.display = 'block'; 
    } 
    else if (buttonTaskImageContainer) { buttonTaskImageContainer.style.display = 'none'; }
    
    if (completeTaskBtn) { 
      completeTaskBtn.style.pointerEvents = 'auto'; 
      completeTaskBtn.style.opacity = '1'; 
      const btnText = completeTaskBtn.querySelector('.btn-text'); 
      if (btnText) btnText.textContent = "ВЫПОЛНЕНО"; 
    }
  }

  if (completeTaskBtn) {
    completeTaskBtn.addEventListener('click', () => {
      if (taskCompleted) return;
      taskCompleted = true;
      if (sfxSuccess) { sfxSuccess.currentTime = 0; sfxSuccess.play().catch(()=>{}); }
      episodesData[currentTask.episodeIndex].tasks[currentTask.taskIndex].completed = true;
      checkAllCompleted();
      if (completeTaskBtn) { 
        completeTaskBtn.style.pointerEvents = 'none'; 
        completeTaskBtn.style.opacity = '0.6'; 
        const btnText = completeTaskBtn.querySelector('.btn-text'); 
        if (btnText) btnText.textContent = "ЗАВЕРШЕНО"; 
      }
      setTimeout(() => showModal(`Эпизод ${currentTask.episodeIndex + 1}`), 1000);
    });
  }

  function setupQuizScreen(epIndex, taskIndex, data) {
    const epNames = ['I', 'II', 'III', 'IV', 'V', 'VI'];
    const badge = document.querySelector('#quizTaskScreen .task-badge');
    if (badge) badge.innerHTML = `Эпизод ${epNames[epIndex]} • Задание ${taskIndex + 1}`;
    const title = document.getElementById('quizTaskTitle');
    if (title) {
      if (epIndex === 2) title.textContent = '🧮 МАТЕМАТИК';
      else if (epIndex === 3) title.textContent = '📼 ФЛЕШБЕКИ';
      else if (epIndex === 4) title.textContent = '🌫️ БЛЮР СЛОТЫ';
      else if (epIndex === 5) title.textContent = '🔥 ULTRA-HARD';
    }
    
    if (quizVideoContainer) quizVideoContainer.style.display = 'none';
    if (quizPreviewImageContainer) quizPreviewImageContainer.style.display = 'none';
    if (quizRevealVideoContainer) quizRevealVideoContainer.style.display = 'none';
    if (quizBlurContainer) quizBlurContainer.style.display = 'none';
    if (modalVideoContainer) modalVideoContainer.style.display = 'none';
    if (finalPunishmentBox) finalPunishmentBox.style.display = 'block';

    const descContainer = document.getElementById('quizTaskDescription').parentElement;
    if (descContainer) {
      descContainer.classList.add('hidden-empty');
    }

    if (epIndex === 3 && data.videoFile) {
      if (quizVideoContainer && quizVideoMuted) {
        quizVideoContainer.style.display = 'block';
        quizVideoMuted.src = data.videoFile;
        quizVideoMuted.load();
        quizVideoMuted.play().catch(() => {});
      }
    }

    if (data.image && epIndex === 2 && quizPreviewImage && quizPreviewImageContainer) { 
      quizPreviewImage.src = data.image; 
      quizPreviewImageContainer.style.display = 'block'; 
    }

    if (data.blurImage && epIndex === 4 && quizBlurImage && quizBlurContainer) {
      quizBlurContainer.style.display = 'block'; 
      quizBlurImage.style.display = 'block';
      quizBlurImage.src = data.blurImage;
      startTimer(60);
    } else { 
      clearTimer(); 
    }
    
    const desc = document.getElementById('quizTaskDescription'); 
    if (desc && data.question) {
      desc.textContent = data.question;
      if (descContainer) descContainer.classList.remove('hidden-empty');
    }
    const question = document.getElementById('quizQuestion'); 
    if (question) question.textContent = 'ВЫБЕРИ ПРАВИЛЬНЫЙ ОТВЕТ:';
    
    if (!quizOptions) return;
    quizOptions.innerHTML = '';
    const shuffledOptions = shuffleArray(data.options);
    shuffledOptions.forEach((opt) => {
      const optionEl = document.createElement('div');
      optionEl.className = 'quiz-option-case';
      optionEl.innerHTML = `<span class="quiz-option-text">${opt.text}</span><span class="quiz-result-icon">${opt.isCorrect ? '✓' : '✗'}</span>`;
      optionEl.addEventListener('click', () => checkQuizAnswer(optionEl, opt.isCorrect, data));
      quizOptions.appendChild(optionEl);
    });
  }

  function checkQuizAnswer(optionEl, isCorrect, taskData) {
    if (quizAnswered) return;
    quizAnswered = true;
    clearTimer();
    episodesData[currentTask.episodeIndex].tasks[currentTask.taskIndex].completed = true;
    checkAllCompleted();
    document.querySelectorAll('.quiz-option-case').forEach(opt => opt.style.pointerEvents = 'none');
    
    if (quizVideoMuted) { quizVideoMuted.pause(); }
    
    if (isCorrect) {
      optionEl.classList.add('correct');
      if (sfxSuccess) { sfxSuccess.currentTime = 0; sfxSuccess.play().catch(()=>{}); }
      setTimeout(() => showModal(`Эпизод ${currentTask.episodeIndex + 1}`), 2000);
    } else {
      optionEl.classList.add('wrong');
      if (sfxClick) { sfxClick.currentTime = 0; sfxClick.play().catch(()=>{}); }
      const allOpts = document.querySelectorAll('.quiz-option-case');
      allOpts.forEach(domOpt => {
        const text = domOpt.querySelector('.quiz-option-text').textContent;
        const correctOpt = taskData.options.find(o => o.isCorrect && o.text === text);
        if (correctOpt) setTimeout(() => domOpt.classList.add('correct'), 500);
      });
      setTimeout(() => showModal(`Эпизод ${currentTask.episodeIndex + 1}`), 2500);
    }
  }

  if (playAudioBtn) {
    playAudioBtn.addEventListener('click', () => { if (isAudioPlaying) stopAudio(); else playAudio(); });
  }

  function playAudio() {
    if (currentTask.data && currentTask.data.audioFile) {
      if (!slotAudio) { alert('Ошибка: аудио элемент не найден'); return; }
      slotAudio.src = currentTask.data.audioFile;
      slotAudio.load();
      
      if (currentTask.data.audioGain) {
        slotAudio.volume = Math.min(currentTask.data.audioGain, 1);
      } else {
        slotAudio.volume = volumeSlider ? parseFloat(volumeSlider.value) : 0.5;
      }
      
      const playPromise = slotAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          isAudioPlaying = true;
          if (playAudioBtn) { playAudioBtn.textContent = '⏸'; playAudioBtn.classList.add('playing'); }
          if (audioVisualizer) audioVisualizer.classList.remove('paused');
        }).catch(error => { 
          console.error('Ошибка:', error);
          alert('Не удалось воспроизвести аудио.');
        });
      }
    }
  }

  function stopAudio() {
    if (slotAudio) { slotAudio.pause(); slotAudio.currentTime = 0; }
    isAudioPlaying = false;
    if (playAudioBtn) { playAudioBtn.textContent = '▶'; playAudioBtn.classList.remove('playing'); }
    if (audioVisualizer) audioVisualizer.classList.add('paused');
  }

  // ИСПРАВЛЕНО: Наказания показываются для ВСЕХ эпизодов, включая первый
  function showModal(episodeText) {
    const mText = document.getElementById('modalEpisodeText');
    if (mText) mText.textContent = `${episodeText} • Задание выполнено`;
    
    // Всегда показываем блок наказания
    if (finalPunishmentBox) finalPunishmentBox.style.display = 'block';
    const pVal = document.getElementById('finalPunishmentValue');
    if (pVal) pVal.textContent = currentTask.data.punishment || "[Наказание]";
    
    // Видео показываем только для 4 эпизода (индекс 3)
    if (currentTask.episodeIndex === 3 && currentTask.data.revealVideo) {
      if (modalVideo && modalVideoContainer) {
        modalVideo.src = currentTask.data.revealVideo;
        modalVideo.load();
        modalVideoContainer.style.display = 'block';
        modalVideo.play().catch(e => console.log('Autoplay blocked:', e));
      }
    } else if (modalVideoContainer) {
      modalVideoContainer.style.display = 'none';
    }
    
    if (modalOverlay) modalOverlay.classList.remove('hidden');
  }

  let currentZoneWidth = localStorage.getItem('zoneRightWidth') || 40;
  document.documentElement.style.setProperty('--zone-right-width', currentZoneWidth + '%');

  const resizers = document.querySelectorAll('.resizer');
  let isResizing = false;
  
  resizers.forEach(resizer => {
    resizer.addEventListener('mousedown', initDrag);
    resizer.addEventListener('touchstart', initDrag, { passive: false });
  });

  function initDrag(e) {
    e.preventDefault();
    isResizing = true;
    const startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const containerWidth = document.documentElement.offsetWidth;
    const initialRightWidth = containerWidth * (currentZoneWidth / 100);
    document.body.classList.add('resizing');
    document.querySelectorAll('.resizer').forEach(r => r.classList.add('resizing'));
    
    function doDrag(e) {
      if (!isResizing) return;
      const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const dx = startX - currentX;
      const newRightWidth = initialRightWidth + dx;
      const newPercent = (newRightWidth / containerWidth) * 100;
      if (newPercent >= 15 && newPercent <= 60) {
        currentZoneWidth = newPercent;
        document.documentElement.style.setProperty('--zone-right-width', currentZoneWidth + '%');
      }
    }
    
    function stopDrag() {
      if (!isResizing) return;
      isResizing = false;
      document.body.classList.remove('resizing');
      document.querySelectorAll('.resizer').forEach(r => r.classList.remove('resizing'));
      document.removeEventListener('mousemove', doDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', doDrag);
      document.removeEventListener('touchend', stopDrag);
      localStorage.setItem('zoneRightWidth', currentZoneWidth);
    }
    
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', doDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);
  }

  console.log('✅ Система готова.');
  renderEpisodes();
});