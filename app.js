// Application State
const state = {
    activeTab: 'dashboard',
    apiKey: localStorage.getItem('gemini_api_key') || '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',
    aiLevel: localStorage.getItem('ai_level') || 'beginner',
    aiVoice: localStorage.getItem('ai_voice') || 'google-us',
    autoSpeak: localStorage.getItem('auto_speak') !== 'false', // default true
    
    // Progress tracking
    progress: JSON.parse(localStorage.getItem('user_progress')) || {
        completedLetters: [],
        completedIpa: [],
        completedGrammar: [],
        completedExercises: []
    },
    
    // Modules state
    selectedLetter: null,
    selectedIpa: null,
    selectedScenario: null,
    activeGrammarTab: 'tenses', // 'tenses' or 'word_classes'
    currentExerciseIndex: 0,
    chatHistory: JSON.parse(localStorage.getItem('chat_history')) || [],
    
    // Web Speech API
    recognition: null,
    isRecording: false,
    synth: window.speechSynthesis
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initSpeechRecognition();
    setupEventListeners();
    loadProgress();
    renderAlphabet();
    renderIpa('vowels');
    renderGrammar();
    renderExercise();
    renderCommunication();
    renderChatHistory();
    checkApiKeyOnStart();
    updateAvatarStatus(state.apiKey ? 'ready' : 'offline');
});

// -------------------------------------------
// SPEECH API INTEGRATION
// -------------------------------------------
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        state.recognition = new SpeechRecognition();
        state.recognition.continuous = false;
        state.recognition.lang = 'en-US';
        state.recognition.interimResults = false;
        state.recognition.maxAlternatives = 1;
    } else {
        console.warn('Trình duyệt không hỗ trợ Web Speech API. Tính năng thu âm sẽ không hoạt động.');
        updateVoiceStatus('Trình duyệt không hỗ trợ nhận diện giọng nói. Hãy dùng Chrome hoặc Edge.');
    }
}

function speakText(text, lang = 'en-US') {
    if (!state.synth) return;
    
    // Cancel current speaking
    state.synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find matching voice
    const voices = state.synth.getVoices();
    let selectedVoice = null;
    
    if (state.aiVoice === 'google-us') {
        selectedVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Google'));
    } else if (state.aiVoice === 'google-gb') {
        selectedVoice = voices.find(v => v.lang.includes('en-GB') && v.name.includes('Google'));
    }
    
    // Fallback to any English voice
    if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang.startsWith(lang));
    }
    
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    
    // Hook events for avatar animation
    utterance.onstart = () => {
        updateAvatarStatus('speaking');
    };
    utterance.onend = () => {
        updateAvatarStatus('ready');
    };
    utterance.onerror = () => {
        updateAvatarStatus('ready');
    };
    
    // Set speech rate based on level
    utterance.rate = state.aiLevel === 'beginner' ? 0.8 : 1.0;
    state.synth.speak(utterance);
}

// -------------------------------------------
// PROGRESS & LOCAL STORAGE
// -------------------------------------------
function saveProgress() {
    localStorage.setItem('user_progress', JSON.stringify(state.progress));
    updateProgressBar();
}

function loadProgress() {
    updateProgressBar();
}

function updateProgressBar() {
    const totalItems = ALPHABET_DATA.length + IPA_DATA.vowels.length + IPA_DATA.consonants.length + GRAMMAR_DATA.length + EXERCISE_DATA.length;
    const completedItems = 
        state.progress.completedLetters.length + 
        state.progress.completedIpa.length + 
        state.progress.completedGrammar.length + 
        state.progress.completedExercises.length;
        
    const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    const fillElement = document.getElementById('overall-progress');
    const textElement = document.getElementById('progress-percentage');
    
    if (fillElement) fillElement.style.width = `${percentage}%`;
    if (textElement) textElement.innerText = `${percentage}%`;
}

function markLetterCompleted(letter) {
    if (!state.progress.completedLetters.includes(letter)) {
        state.progress.completedLetters.push(letter);
        saveProgress();
    }
}

function markIpaCompleted(sound) {
    if (!state.progress.completedIpa.includes(sound)) {
        state.progress.completedIpa.push(sound);
        saveProgress();
    }
}

function markGrammarCompleted(id) {
    if (!state.progress.completedGrammar.includes(id)) {
        state.progress.completedGrammar.push(id);
        saveProgress();
    }
}

function markExerciseCompleted(index) {
    if (!state.progress.completedExercises.includes(index)) {
        state.progress.completedExercises.push(index);
        saveProgress();
    }
}

// -------------------------------------------
// EVENT LISTENERS & ROUTING
// -------------------------------------------
function setupEventListeners() {
    // Navigation Tabs
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = item.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Roadmap Steps Click
    document.querySelectorAll('.roadmap-step').forEach(step => {
        step.addEventListener('click', () => {
            const targetTab = step.getAttribute('data-target');
            switchTab(targetTab);
        });
    });

    // Settings Modal
    const modal = document.getElementById('settings-modal');
    document.getElementById('open-settings-btn').addEventListener('click', () => {
        document.getElementById('gemini-api-key').value = state.apiKey;
        document.getElementById('ai-level').value = state.aiLevel;
        document.getElementById('ai-voice').value = state.aiVoice;
        document.getElementById('auto-speak-toggle').checked = state.autoSpeak;
        modal.classList.add('active');
    });

    document.getElementById('close-settings-btn').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    document.getElementById('save-settings-btn').addEventListener('click', () => {
        const key = document.getElementById('gemini-api-key').value.trim();
        const level = document.getElementById('ai-level').value;
        const voice = document.getElementById('ai-voice').value;
        const autoSpeak = document.getElementById('auto-speak-toggle').checked;

        state.apiKey = key;
        state.aiLevel = level;
        state.aiVoice = voice;
        state.autoSpeak = autoSpeak;

        localStorage.setItem('gemini_api_key', key);
        localStorage.setItem('ai_level', level);
        localStorage.setItem('ai_voice', voice);
        localStorage.setItem('auto_speak', autoSpeak);

        modal.classList.remove('active');
        alert('Đã lưu cấu hình thành công!');
    });

    // IPA Subtabs
    document.querySelectorAll('.ipa-tab-btn').forEach(btn => {
        if (!btn.classList.contains('grammar-tab-btn')) {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.ipa-tab-btn').forEach(b => {
                    if (!b.classList.contains('grammar-tab-btn')) b.classList.remove('active');
                });
                btn.classList.add('active');
                const group = btn.getAttribute('data-ipa-group');
                renderIpa(group);
            });
        }
    });

    // Grammar Subtabs
    document.querySelectorAll('.grammar-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.grammar-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.activeGrammarTab = btn.getAttribute('data-grammar-group');
            renderGrammar();
        });
    });

    // Clear Chat History Button
    const clearChatBtn = document.getElementById('clear-chat-btn');
    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', () => {
            if (confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử trò chuyện với AI?')) {
                state.chatHistory = [];
                localStorage.removeItem('chat_history');
                renderChatHistory();
                
                // Reset tutor notes panel
                const tutorContent = document.getElementById('tutor-notes-content');
                if (tutorContent) {
                    tutorContent.innerHTML = `
                        <div class="empty-tutor-state">
                            <p>Hãy gửi một tin nhắn bằng tiếng Anh hoặc nói qua micro. AI sẽ phân tích và hiển thị sửa lỗi ngữ pháp, gợi ý từ vựng và cách nói tự nhiên hơn tại bảng này.</p>
                        </div>
                    `;
                }
            }
        });
    }

    // Chat Controls
    document.getElementById('chat-send-btn').addEventListener('click', handleSendChatMessage);
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSendChatMessage();
    });

    // Chat Microphone
    const chatMicBtn = document.getElementById('chat-mic-btn');
    if (chatMicBtn) {
        chatMicBtn.addEventListener('click', toggleChatVoiceInput);
    }

    // Sự kiện mở/đóng Menu trên di động
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    if (menuToggleBtn && sidebar && sidebarOverlay) {
        menuToggleBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }
}

function switchTab(tabName) {
    state.activeTab = tabName;
    
    // Tự động đóng Menu trên di động sau khi chọn xong tab học
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    if (sidebar && sidebarOverlay) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }
    
    // Update Sidebar Active Class
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-tab') === tabName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Update Content Visibility
    document.querySelectorAll('.tab-content').forEach(content => {
        if (content.id === tabName) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    // Update Header Title
    const titles = {
        dashboard: 'Lộ trình học tiếng Anh',
        alphabet: '1. Bảng chữ cái & Phonics',
        ipa: '2. Bảng phát âm quốc tế IPA',
        grammar: '3. Ngữ pháp & Các thì',
        exercises: '4. Luyện tập bài tập câu',
        communication: '5. Tình huống giao tiếp thực tế',
        chat: '6. AI 1:1 Speaking Partner'
    };
    document.getElementById('current-section-title').innerText = titles[tabName] || 'Học Tiếng Anh';
    
    // If switching to chat, scroll to bottom
    if (tabName === 'chat') {
        renderChatHistory();
        const chatMsgs = document.getElementById('chat-messages-container');
        chatMsgs.scrollTop = chatMsgs.scrollHeight;
    }
    
    // If switching to communication, render list
    if (tabName === 'communication') {
        renderCommunication();
    }
}

function checkApiKeyOnStart() {
    if (!state.apiKey) {
        setTimeout(() => {
            if (confirm('Bạn cần cấu hình Gemini API Key để sử dụng chức năng chat 1:1 với AI. Bạn có muốn cấu hình ngay không?')) {
                document.getElementById('open-settings-btn').click();
            }
        }, 1000);
    }
}

// -------------------------------------------
// MODULE: ALPHABET
// -------------------------------------------
function renderAlphabet() {
    const grid = document.getElementById('alphabet-grid-container');
    if (!grid) return;
    grid.innerHTML = '';

    ALPHABET_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = `alphabet-card ${state.selectedLetter === item.letter ? 'active' : ''}`;
        card.innerHTML = `
            <span class="card-letter">${item.letter}</span>
            <span class="card-phonetic">${item.phonetic}</span>
        `;
        card.addEventListener('click', () => selectLetter(item));
        grid.appendChild(card);
    });
}

function selectLetter(item) {
    state.selectedLetter = item.letter;
    renderAlphabet(); // re-render to update active class

    const detailPanel = document.getElementById('alphabet-detail');
    if (!detailPanel) return;

    detailPanel.innerHTML = `
        <div class="detail-header">
            <div class="detail-letter">${item.letter}</div>
            <div class="detail-phonetic">${item.phonetic}</div>
            <button class="audio-btn" id="play-letter-btn" style="margin-top: 10px;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
            </button>
        </div>

        <div class="detail-body">
            <div class="detail-group">
                <div class="detail-group-title">Từ vựng ví dụ</div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div class="word-display">${item.emoji} ${item.word}</div>
                        <div class="word-translation">${item.translation}</div>
                    </div>
                    <button class="audio-btn" id="play-word-btn">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                    </button>
                </div>
            </div>

            <div class="detail-group">
                <div class="detail-group-title">Câu ví dụ</div>
                <p style="font-size: 14px; font-weight: 500; line-height: 1.5; margin-bottom: 4px;">"${item.example}"</p>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-style: italic;">"${item.exampleTranslation}"</p>
                <button class="btn btn-secondary btn-sm" id="play-example-btn" style="padding: 6px 12px;">
                    Nghe câu ví dụ
                </button>
            </div>

            <div class="practice-row">
                <button class="btn practice-btn" id="alphabet-practice-btn">Luyện phát âm từ</button>
                <div class="practice-feedback" id="alphabet-feedback" style="display: none;"></div>
            </div>
        </div>
    `;

    // Audio handlers
    document.getElementById('play-letter-btn').addEventListener('click', () => speakText(item.letter));
    document.getElementById('play-word-btn').addEventListener('click', () => speakText(item.word));
    document.getElementById('play-example-btn').addEventListener('click', () => speakText(item.example));

    // Practice pronunciation
    document.getElementById('alphabet-practice-btn').addEventListener('click', () => {
        updateAvatarStatus('listening');
        practiceWordPronunciation(item.word, 'alphabet-practice-btn', 'alphabet-feedback', () => {
            markLetterCompleted(item.letter);
        });
    });
    
    // Auto speak the letter and word on select
    speakText(item.letter);
}

// -------------------------------------------
// MODULE: IPA
// -------------------------------------------
function renderIpa(group) {
    const grid = document.getElementById('ipa-grid-container');
    if (!grid) return;
    grid.innerHTML = '';

    const list = group === 'vowels' ? [...IPA_DATA.vowels, ...IPA_DATA.diphthongs] : IPA_DATA.consonants;

    list.forEach(item => {
        const card = document.createElement('div');
        card.className = `ipa-card ${state.selectedIpa === item.sound ? 'active' : ''}`;
        card.innerHTML = `
            <span class="ipa-sound">/${item.sound}/</span>
            <span class="ipa-type">${item.type}</span>
        `;
        card.addEventListener('click', () => selectIpa(item));
        grid.appendChild(card);
    });
}

function selectIpa(item) {
    state.selectedIpa = item.sound;
    // Re-render to highlight active
    const activeGroupBtn = document.querySelector('.ipa-tab-btn.active');
    const group = activeGroupBtn ? activeGroupBtn.getAttribute('data-ipa-group') : 'vowels';
    renderIpa(group);

    const detailPanel = document.getElementById('ipa-detail');
    if (!detailPanel) return;

    let examplesHtml = '';
    item.examples.forEach((ex, idx) => {
        examplesHtml += `
            <div class="ipa-example-item">
                <div class="ipa-example-words">
                    <span class="ipa-word">${ex.word}</span>
                    <span class="ipa-trans">${ex.trans}</span>
                </div>
                <button class="audio-btn" id="play-ipa-ex-${idx}">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                </button>
            </div>
        `;
    });

    detailPanel.innerHTML = `
        <div class="detail-header">
            <div class="detail-letter" style="color: var(--secondary); text-shadow: 0 0 20px var(--secondary-glow);">/${item.sound}/</div>
            <div class="detail-phonetic">${item.type}</div>
        </div>

        <div class="detail-body">
            <div class="detail-group">
                <div class="detail-group-title">Hướng dẫn cách phát âm</div>
                <p style="font-size: 13.5px; line-height: 1.6; color: var(--text-main);">${item.guide}</p>
            </div>

            <div class="detail-group">
                <div class="detail-group-title">Từ ví dụ chứa âm này</div>
                <div class="ipa-examples-list">
                    ${examplesHtml}
                </div>
            </div>

            <div class="practice-row">
                <button class="btn practice-btn" id="ipa-practice-btn" style="background: linear-gradient(135deg, var(--secondary), var(--secondary)); box-shadow: 0 4px 14px var(--secondary-glow);">Luyện phát âm âm này</button>
                <div class="practice-feedback" id="ipa-feedback" style="display: none;"></div>
            </div>
        </div>
    `;

    // Hook up play buttons
    item.examples.forEach((ex, idx) => {
        document.getElementById(`play-ipa-ex-${idx}`).addEventListener('click', () => speakText(ex.word));
    });

    // Pronunciation practice
    document.getElementById('ipa-practice-btn').addEventListener('click', () => {
        // We'll practice the first example word as it's easier for speech recognition to match words than raw phonics
        const practiceTarget = item.examples[0].word;
        updateAvatarStatus('listening');
        practiceWordPronunciation(practiceTarget, 'ipa-practice-btn', 'ipa-feedback', () => {
            markIpaCompleted(item.sound);
        });
    });
    
    // Play sound on click (phát âm chính ký tự IPA này trước)
    speakIpaSound(item.sound);
}

// Hàm hỗ trợ phát âm riêng lẻ từng ký tự IPA
function speakIpaSound(sound) {
    // Bản đồ chuyển đổi ký tự IPA sang dạng chữ phiên âm mà bộ đọc TTS có thể phát âm chuẩn âm đơn lẻ
    const ipaToPhoneticMap = {
        // Nguyên âm đơn (Monophthongs)
        'iː': 'ee',
        'ɪ': 'ih',
        'ʊ': 'u',
        'uː': 'oo',
        'e': 'eh',
        'ə': 'uh',
        'ɜː': 'er',
        'ɔː': 'or',
        'æ': 'ae',
        'ʌ': 'uh',
        'ɑː': 'ah',
        'ɒ': 'o',
        
        // Nguyên âm đôi (Diphthongs)
        'eɪ': 'ay',
        'aɪ': 'eye',
        'ɔɪ': 'oy',
        'aʊ': 'ow',
        'əʊ': 'oh',
        'ɪə': 'ear',
        'eə': 'air',
        'ʊə': 'ure',
        
        // Phụ âm (Consonants)
        'p': 'p',
        'b': 'b',
        't': 't',
        'd': 'd',
        'k': 'k',
        'g': 'g',
        'f': 'f',
        'v': 'v',
        'θ': 'th',
        'ð': 'the',
        's': 's',
        'z': 'z',
        'ʃ': 'sh',
        'ʒ': 'zh',
        'h': 'h',
        'm': 'm',
        'n': 'n',
        'ŋ': 'ng',
        'l': 'l',
        'r': 'r',
        'w': 'w',
        'j': 'y'
    };

    const textToSpeak = ipaToPhoneticMap[sound] || sound;
    speakText(textToSpeak);
}

// Pronunciation checking helper
function practiceWordPronunciation(targetWord, btnId, feedbackId, onSuccess) {
    if (!state.recognition) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng nhận diện giọng nói. Vui lòng sử dụng Google Chrome hoặc Microsoft Edge.');
        return;
    }

    if (state.isRecording) return;

    const btn = document.getElementById(btnId);
    const feedback = document.getElementById(feedbackId);
    
    state.isRecording = true;
    btn.classList.add('recording');
    btn.innerText = 'Đang lắng nghe... Nói đi!';
    
    feedback.style.display = 'flex';
    feedback.className = 'practice-feedback feedback-listening';
    feedback.innerText = `Hãy nói từ: "${targetWord}"`;

    state.recognition.start();

    state.recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
        const target = targetWord.toLowerCase().trim();
        
        console.log(`User said: ${speechToText} | Target: ${target}`);
        
        if (speechToText === target || speechToText.includes(target) || target.includes(speechToText)) {
            feedback.className = 'practice-feedback feedback-success';
            feedback.innerText = `Chính xác! Cực tốt! 🎉 (Bạn nói: "${speechToText}")`;
            if (onSuccess) onSuccess();
        } else {
            feedback.className = 'practice-feedback feedback-fail';
            feedback.innerText = `Chưa đúng lắm. Hãy thử lại! (Bạn nói: "${speechToText || 'Không rõ'}")`;
        }
        updateAvatarStatus('ready');
    };

    state.recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        feedback.className = 'practice-feedback feedback-fail';
        feedback.innerText = 'Có lỗi xảy ra hoặc bạn nói quá nhỏ. Hãy thử lại!';
        stopRecordingState(btn, btnId);
        updateAvatarStatus('ready');
    };

    state.recognition.onend = () => {
        stopRecordingState(btn, btnId);
        updateAvatarStatus('ready');
    };
}

function stopRecordingState(btn, btnId) {
    state.isRecording = false;
    btn.classList.remove('recording');
    if (btnId === 'alphabet-practice-btn' || btnId === 'ipa-practice-btn') {
        btn.innerText = 'Luyện phát âm từ';
    }
}

// -------------------------------------------
// MODULE: GRAMMAR
// -------------------------------------------
function renderGrammar() {
    const container = document.getElementById('grammar-container');
    if (!container) return;
    container.innerHTML = '';

    let data = [];
    if (state.activeGrammarTab === 'tenses') {
        data = GRAMMAR_DATA;
    } else if (state.activeGrammarTab === 'word_classes') {
        data = WORD_CLASSES_DATA;
    } else if (state.activeGrammarTab === 'asking_questions') {
        data = ASKING_QUESTIONS_DATA;
    } else if (state.activeGrammarTab === 'sentence_structures') {
        data = SENTENCE_STRUCTURES_DATA;
    } else if (state.activeGrammarTab === 'idioms_phrasal') {
        data = IDIOMS_PHRASAL_DATA;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'grammar-card';
        
        let examplesHtml = '';
        item.examples.forEach((ex, idx) => {
            examplesHtml += `
                <div class="grammar-example-item">
                    <div class="example-texts">
                        <span class="example-eng">"${ex.eng}"</span>
                        <span class="example-vi">${ex.vi}</span>
                    </div>
                    <button class="audio-btn" id="play-grammar-ex-${item.id}-${idx}">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                    </button>
                </div>
            `;
        });

        let middleSectionHtml = '';
        if (state.activeGrammarTab === 'tenses') {
            middleSectionHtml = `
                <div class="grammar-formula-box">
                    <div class="detail-group-title" style="margin-bottom: 8px; font-size: 11px;">Công thức</div>
                    <div class="formula-row">
                        <span class="formula-label">Khẳng định:</span>
                        <span class="formula-value">${item.formula.positive}</span>
                    </div>
                    <div class="formula-row">
                        <span class="formula-label">Phủ định:</span>
                        <span class="formula-value">${item.formula.negative}</span>
                    </div>
                    <div class="formula-row">
                        <span class="formula-label">Nghi vấn:</span>
                        <span class="formula-value">${item.formula.question}</span>
                    </div>
                </div>
                <div class="grammar-signals">
                    <strong>Dấu hiệu nhận biết:</strong> ${item.signals}
                </div>
            `;
        } else if (state.activeGrammarTab === 'word_classes' || state.activeGrammarTab === 'idioms_phrasal') {
            const rulesHtml = item.rules.split('\n').map(line => `<div style="margin-bottom: 4px;">${line}</div>`).join('');
            middleSectionHtml = `
                <div class="grammar-formula-box">
                    <div class="detail-group-title" style="margin-bottom: 8px; font-size: 11px;">Phân loại chính</div>
                    <p style="font-size: 13px; line-height: 1.4; color: var(--text-main); margin-bottom: 8px;">${item.types}</p>
                    <div class="detail-group-title" style="margin-bottom: 8px; font-size: 11px; margin-top: 12px;">Vị trí & Quy tắc dùng</div>
                    <div style="font-size: 13px; line-height: 1.5; color: var(--text-muted);">${rulesHtml}</div>
                </div>
            `;
        } else if (state.activeGrammarTab === 'asking_questions' || state.activeGrammarTab === 'sentence_structures') {
            const rulesHtml = item.rules.split('\n').map(line => `<div style="margin-bottom: 4px;">${line}</div>`).join('');
            middleSectionHtml = `
                <div class="grammar-formula-box">
                    <div class="detail-group-title" style="margin-bottom: 8px; font-size: 11px;">Cấu trúc công thức</div>
                    <p style="font-size: 13.5px; font-weight: 700; color: var(--primary); margin-bottom: 10px; font-family: monospace; background: rgba(0,0,0,0.2); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">${item.formula}</p>
                    <div class="detail-group-title" style="margin-bottom: 8px; font-size: 11px; margin-top: 12px;">Quy tắc cách dùng</div>
                    <div style="font-size: 13px; line-height: 1.5; color: var(--text-muted);">${rulesHtml}</div>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="grammar-header">
                <h3>${item.title}</h3>
                <p class="grammar-desc">${item.desc}</p>
            </div>

            ${middleSectionHtml}

            <div class="grammar-examples">
                <div class="detail-group-title" style="margin-bottom: 4px; font-size: 11px;">Ví dụ mẫu</div>
                ${examplesHtml}
            </div>
            
            <button class="btn btn-secondary" id="mark-grammar-done-${item.id}" style="margin-top: auto; width: 100%;">
                Đã học xong phần này ✓
            </button>
        `;

        container.appendChild(card);

        // Bind audio
        item.examples.forEach((ex, idx) => {
            document.getElementById(`play-grammar-ex-${item.id}-${idx}`).addEventListener('click', () => speakText(ex.eng));
        });

        // Mark as done button
        const markDoneBtn = document.getElementById(`mark-grammar-done-${item.id}`);
        if (state.progress.completedGrammar.includes(item.id)) {
            markDoneBtn.innerText = 'Đã hoàn thành ✓';
            markDoneBtn.className = 'btn btn-primary';
            markDoneBtn.style.background = 'rgba(16, 185, 129, 0.2)';
            markDoneBtn.style.color = 'var(--accent)';
            markDoneBtn.style.borderColor = 'var(--accent)';
        }

        markDoneBtn.addEventListener('click', () => {
            markGrammarCompleted(item.id);
            markDoneBtn.innerText = 'Đã hoàn thành ✓';
            markDoneBtn.className = 'btn btn-primary';
            markDoneBtn.style.background = 'rgba(16, 185, 129, 0.2)';
            markDoneBtn.style.color = 'var(--accent)';
            markDoneBtn.style.borderColor = 'var(--accent)';
        });
    });
}

// -------------------------------------------
// MODULE: EXERCISES
// -------------------------------------------
let selectedReorderWords = [];

function renderExercise() {
    const container = document.getElementById('exercise-card-container');
    if (!container) return;
    container.innerHTML = '';

    if (state.currentExerciseIndex >= EXERCISE_DATA.length) {
        container.innerHTML = `
            <div class="exercise-card" style="text-align: center;">
                <h2>Chúc mừng bạn! 🎉</h2>
                <p style="color: var(--text-muted); margin-bottom: 20px;">Bạn đã hoàn thành xuất sắc tất cả các bài tập câu hiện có!</p>
                <button class="btn btn-primary" id="restart-exercises-btn">Làm lại bài tập</button>
            </div>
        `;
        document.getElementById('restart-exercises-btn').addEventListener('click', () => {
            state.currentExerciseIndex = 0;
            renderExercise();
        });
        return;
    }

    const ex = EXERCISE_DATA[state.currentExerciseIndex];
    const card = document.createElement('div');
    card.className = 'exercise-card';

    let contentHtml = '';
    let footerHtml = '';

    if (ex.type === 'choice') {
        let optionsHtml = '';
        ex.options.forEach((opt, idx) => {
            optionsHtml += `
                <button class="option-btn" data-opt-idx="${idx}">${opt}</button>
            `;
        });
        contentHtml = `
            <div class="exercise-question">${ex.question}</div>
            <div class="options-grid" id="options-grid">
                ${optionsHtml}
            </div>
        `;
    } else if (ex.type === 'reorder') {
        selectedReorderWords = [];
        let poolHtml = '';
        ex.words.forEach((word, idx) => {
            poolHtml += `<span class="word-block" data-word-idx="${idx}">${word}</span>`;
        });
        contentHtml = `
            <div class="exercise-question">${ex.question}</div>
            <div class="reorder-display" id="reorder-display-slots">
                <span class="text-muted" style="font-size: 13px; font-style: italic;">Nhấn chọn các từ bên dưới để ghép câu...</span>
            </div>
            <div class="reorder-pool" id="reorder-pool-container">
                ${poolHtml}
            </div>
            <div style="display: flex; gap: 12px; margin-top: 12px;">
                <button class="btn btn-secondary" id="reorder-reset-btn" style="flex: 1;">Xóa làm lại</button>
                <button class="btn btn-primary" id="reorder-check-btn" style="flex: 1;">Kiểm tra đáp án</button>
            </div>
        `;
    } else if (ex.type === 'translate') {
        contentHtml = `
            <div class="exercise-question">${ex.question}</div>
            <textarea class="translate-input" id="translate-text-input" placeholder="Viết câu dịch tiếng Anh của bạn tại đây..."></textarea>
            <button class="btn btn-primary" id="translate-check-btn" style="width: 100%; margin-top: 12px;">Kiểm tra câu dịch</button>
        `;
    }

    footerHtml = `
        <div class="exercise-footer">
            <div class="hint-box">💡 <strong>Gợi ý:</strong> ${ex.hint}</div>
            <button class="btn btn-secondary" id="next-exercise-btn" style="display: none;">Câu tiếp theo ➔</button>
        </div>
    `;

    card.innerHTML = `
        <div class="exercise-header">
            <span class="exercise-type-tag">${ex.type === 'choice' ? 'Trắc nghiệm' : ex.type === 'reorder' ? 'Ghép từ thành câu' : 'Dịch câu'}</span>
            <span class="exercise-number">Câu ${state.currentExerciseIndex + 1} / ${EXERCISE_DATA.length}</span>
        </div>
        ${contentHtml}
        <div id="exercise-feedback-area"></div>
        ${footerHtml}
    `;

    container.appendChild(card);

    // Bind event handlers based on type
    if (ex.type === 'choice') {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => handleChoiceAnswer(btn, ex));
        });
    } else if (ex.type === 'reorder') {
        const pool = document.getElementById('reorder-pool-container');
        pool.querySelectorAll('.word-block').forEach(block => {
            block.addEventListener('click', () => handleReorderWordClick(block));
        });
        document.getElementById('reorder-reset-btn').addEventListener('click', resetReorderExercise);
        document.getElementById('reorder-check-btn').addEventListener('click', () => handleReorderCheck(ex));
    } else if (ex.type === 'translate') {
        document.getElementById('translate-check-btn').addEventListener('click', () => handleTranslateCheck(ex));
    }

    document.getElementById('next-exercise-btn').addEventListener('click', () => {
        state.currentExerciseIndex++;
        renderExercise();
    });
}

function handleChoiceAnswer(selectedBtn, ex) {
    const selectedIdx = parseInt(selectedBtn.getAttribute('data-opt-idx'));
    const optionsGrid = document.getElementById('options-grid');
    
    // Disable all options
    optionsGrid.querySelectorAll('.option-btn').forEach(btn => btn.style.pointerEvents = 'none');
    
    const feedbackArea = document.getElementById('exercise-feedback-area');
    
    if (selectedIdx === ex.answer) {
        selectedBtn.classList.add('correct');
        feedbackArea.innerHTML = `
            <div class="exercise-feedback-panel" style="border-color: var(--accent);">
                <span class="exercise-feedback-title" style="color: var(--accent);">Chính xác! 🎉</span>
                <span class="exercise-feedback-desc">Chúc mừng bạn đã trả lời đúng câu này.</span>
            </div>
        `;
        markExerciseCompleted(state.currentExerciseIndex);
    } else {
        selectedBtn.classList.add('wrong');
        // highlight correct one
        optionsGrid.querySelector(`[data-opt-idx="${ex.answer}"]`).classList.add('correct');
        feedbackArea.innerHTML = `
            <div class="exercise-feedback-panel" style="border-color: var(--danger);">
                <span class="exercise-feedback-title" style="color: var(--danger);">Chưa đúng rồi ❌</span>
                <span class="exercise-feedback-desc">Hãy xem gợi ý và thử lại câu này sau nhé!</span>
            </div>
        `;
    }
    
    document.getElementById('next-exercise-btn').style.display = 'inline-flex';
}

function handleReorderWordClick(block) {
    const word = block.innerText;
    const wordIdx = block.getAttribute('data-word-idx');

    if (block.classList.contains('used')) return;

    block.classList.add('used');
    selectedReorderWords.push({ word, idx: wordIdx });

    updateReorderDisplay();
}

function updateReorderDisplay() {
    const display = document.getElementById('reorder-display-slots');
    if (selectedReorderWords.length === 0) {
        display.innerHTML = `<span class="text-muted" style="font-size: 13px; font-style: italic;">Nhấn chọn các từ bên dưới để ghép câu...</span>`;
        return;
    }

    display.innerHTML = '';
    selectedReorderWords.forEach((item, index) => {
        const slot = document.createElement('span');
        slot.className = 'word-block';
        slot.innerText = item.word;
        slot.addEventListener('click', () => {
            // Remove from selected
            selectedReorderWords.splice(index, 1);
            // Return to pool (unmark as used)
            const poolBlock = document.querySelector(`#reorder-pool-container [data-word-idx="${item.idx}"]`);
            if (poolBlock) poolBlock.classList.remove('used');
            updateReorderDisplay();
        });
        display.appendChild(slot);
    });
}

function resetReorderExercise() {
    selectedReorderWords = [];
    updateReorderDisplay();
    document.querySelectorAll('#reorder-pool-container .word-block').forEach(b => b.classList.remove('used'));
    document.getElementById('exercise-feedback-area').innerHTML = '';
}

function handleReorderCheck(ex) {
    const userSentence = selectedReorderWords.map(w => w.word).join(' ').trim();
    const correctSentence = ex.answer.trim();
    const feedbackArea = document.getElementById('exercise-feedback-area');

    if (userSentence.toLowerCase() === correctSentence.toLowerCase()) {
        feedbackArea.innerHTML = `
            <div class="exercise-feedback-panel" style="border-color: var(--accent);">
                <span class="exercise-feedback-title" style="color: var(--accent);">Chính xác! 🎉</span>
                <span class="exercise-feedback-desc">"${ex.answer}"</span>
            </div>
        `;
        markExerciseCompleted(state.currentExerciseIndex);
    } else {
        feedbackArea.innerHTML = `
            <div class="exercise-feedback-panel" style="border-color: var(--danger);">
                <span class="exercise-feedback-title" style="color: var(--danger);">Chưa đúng rồi ❌</span>
                <span class="exercise-feedback-desc">Bạn ghép được: "${userSentence || 'Trống'}"<br>Đáp án đúng là: "${ex.answer}"</span>
            </div>
        `;
    }
    document.getElementById('next-exercise-btn').style.display = 'inline-flex';
}

function handleTranslateCheck(ex) {
    const inputVal = document.getElementById('translate-text-input').value.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const feedbackArea = document.getElementById('exercise-feedback-area');
    
    // Check if input matches any allowed answer
    const isCorrect = ex.answers.some(ans => {
        const formattedAns = ans.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        return inputVal === formattedAns;
    });

    if (isCorrect) {
        feedbackArea.innerHTML = `
            <div class="exercise-feedback-panel" style="border-color: var(--accent);">
                <span class="exercise-feedback-title" style="color: var(--accent);">Tuyệt vời! Chính xác! 🎉</span>
                <span class="exercise-feedback-desc">Đáp án mẫu: "${ex.answers[0]}"</span>
            </div>
        `;
        markExerciseCompleted(state.currentExerciseIndex);
    } else {
        feedbackArea.innerHTML = `
            <div class="exercise-feedback-panel" style="border-color: var(--danger);">
                <span class="exercise-feedback-title" style="color: var(--danger);">Gần đúng rồi! ❌</span>
                <span class="exercise-feedback-desc">Đáp án mẫu: "${ex.answers[0]}"</span>
            </div>
        `;
    }
    document.getElementById('next-exercise-btn').style.display = 'inline-flex';
}

// -------------------------------------------
// MODULE: AI 1:1 CHAT (GEMINI API)
// -------------------------------------------
let chatSpeechRecognition = null;
let isChatVoiceRecording = false;

function renderChatHistory() {
    const container = document.getElementById('chat-messages-container');
    if (!container) return;
    container.innerHTML = '';

    if (state.chatHistory.length === 0) {
        // If empty, show the default welcome message
        appendChatMessage('assistant', 'Hello! I am your AI English speaking partner. How can I help you practice today?', 'Chào bạn! Tôi là đối tác luyện nói tiếng Anh bằng AI của bạn. Tôi có thể giúp bạn luyện tập thế nào hôm nay?');
        
        // Reset tutor notes panel
        const tutorContent = document.getElementById('tutor-notes-content');
        if (tutorContent) {
            tutorContent.innerHTML = `
                <div class="empty-tutor-state">
                    <p>Hãy gửi một tin nhắn bằng tiếng Anh hoặc nói qua micro. AI sẽ phân tích và hiển thị sửa lỗi ngữ pháp, gợi ý từ vựng và cách nói tự nhiên hơn tại bảng này.</p>
                </div>
            `;
        }

        // Hiển thị 3 nút gợi ý mặc định ban đầu để người học không bị bí (Kèm dịch nghĩa)
        renderChatSuggestions("I want to talk about my day. | Tôi muốn nói về một ngày của tôi.\nHow do I say this in English? | Nói câu này thế nào trong tiếng Anh?\nCan you help me with grammar? | Bạn có thể giúp tôi ngữ pháp được không?");
        return;
    }

    state.chatHistory.forEach(msg => {
        appendChatMessage(msg.role === 'user' ? 'user' : 'assistant', msg.text, msg.translation);
    });

    // Tự động khôi phục nhận xét (Tutor's Notes) và các nút gợi ý của tin nhắn AI gần nhất
    const lastModelMsg = [...state.chatHistory].reverse().find(msg => msg.role === 'model');
    if (lastModelMsg && lastModelMsg.corrections) {
        renderTutorNotes(lastModelMsg);
        renderChatSuggestions(lastModelMsg.suggestions);
    } else {
        const tutorContent = document.getElementById('tutor-notes-content');
        if (tutorContent) {
            tutorContent.innerHTML = `
                <div class="empty-tutor-state">
                    <p>Hãy gửi một tin nhắn bằng tiếng Anh hoặc nói qua micro. AI sẽ phân tích và hiển thị sửa lỗi ngữ pháp, gợi ý từ vựng và cách nói tự nhiên hơn tại bảng này.</p>
                </div>
            `;
        }
        const suggContainer = document.getElementById('chat-suggestions');
        if (suggContainer) suggContainer.innerHTML = '';
    }
}

function appendChatMessage(sender, text, translation = '') {
    const container = document.getElementById('chat-messages-container');
    if (!container) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;

    let translationHtml = '';
    if (sender === 'assistant' && translation) {
        translationHtml = `<div class="msg-translation">${translation}</div>`;
    }

    messageDiv.innerHTML = `
        <div class="msg-bubble">
            ${text}
            ${translationHtml}
        </div>
    `;

    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function toggleChatVoiceInput() {
    const micBtn = document.getElementById('chat-mic-btn');
    const voiceStatus = document.getElementById('voice-status-text');

    if (!state.recognition) {
        alert('Nhận diện giọng nói không khả dụng trên trình duyệt của bạn.');
        return;
    }

    if (isChatVoiceRecording) {
        state.recognition.stop();
        return;
    }

    isChatVoiceRecording = true;
    micBtn.classList.add('recording');
    voiceStatus.innerText = 'Đang nghe giọng nói của bạn...';
    updateAvatarStatus('listening');

    state.recognition.start();

    state.recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        document.getElementById('chat-input').value = text;
        voiceStatus.innerText = 'Đang tự động gửi...';
        updateAvatarStatus('ready');
        
        // Tự động gửi sau 500ms để người dùng kịp nhìn thấy chữ
        setTimeout(() => {
            handleSendChatMessage();
        }, 500);
    };

    state.recognition.onerror = (event) => {
        console.error(event);
        voiceStatus.innerText = 'Lỗi nhận diện. Vui lòng nói lại.';
        resetChatMicState();
        updateAvatarStatus('ready');
    };

    state.recognition.onend = () => {
        resetChatMicState();
        updateAvatarStatus('ready');
    };
}

function resetChatMicState() {
    isChatVoiceRecording = false;
    const micBtn = document.getElementById('chat-mic-btn');
    const voiceStatus = document.getElementById('voice-status-text');
    if (micBtn) micBtn.classList.remove('recording');
    if (voiceStatus) voiceStatus.innerText = 'Microphone đã sẵn sàng';
}

async function handleSendChatMessage() {
    const inputEl = document.getElementById('chat-input');
    const text = inputEl.value.trim();
    if (!text) return;

    // Clear input và các nút gợi ý cũ
    inputEl.value = '';
    const suggContainer = document.getElementById('chat-suggestions');
    if (suggContainer) suggContainer.innerHTML = '';

    if (!state.apiKey) {
        alert('Bạn chưa cấu hình Gemini API Key. Vui lòng vào Cài đặt để thêm key.');
        document.getElementById('open-settings-btn').click();
        return;
    }

    // Append user message
    appendChatMessage('user', text);

    // Save user message to history
    state.chatHistory.push({ role: 'user', text });
    localStorage.setItem('chat_history', JSON.stringify(state.chatHistory));

    // Show AI typing status
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant typing-indicator-msg';
    typingDiv.innerHTML = `<div class="msg-bubble" style="font-style: italic; opacity: 0.7;">Đang suy nghĩ...</div>`;
    document.getElementById('chat-messages-container').appendChild(typingDiv);
    updateAvatarStatus('thinking');
    
    try {
        const response = await callGeminiAPI(text);
        
        // Remove typing indicator
        const typingIndicator = document.querySelector('.typing-indicator-msg');
        if (typingIndicator) typingIndicator.remove();

        // Render response
        appendChatMessage('assistant', response.reply, response.translation);
        
        // Render Tutor Notes và Gợi ý phản hồi
        renderTutorNotes(response);
        renderChatSuggestions(response.suggestions);

        // Save assistant message to history (Lưu đầy đủ phân tích để khôi phục khi F5)
        state.chatHistory.push({ 
            role: 'model', 
            text: response.reply, 
            translation: response.translation,
            corrections: response.corrections,
            better_phrasing: response.better_phrasing,
            vocabulary: response.vocabulary,
            suggestions: response.suggestions
        });
        localStorage.setItem('chat_history', JSON.stringify(state.chatHistory));

        // Speak aloud if enabled
        if (state.autoSpeak) {
            speakText(response.reply);
        } else {
            updateAvatarStatus('ready');
        }

    } catch (err) {
        console.error(err);
        const typingIndicator = document.querySelector('.typing-indicator-msg');
        if (typingIndicator) typingIndicator.remove();
        
        appendChatMessage('assistant', `Sorry, I encountered an error: ${err.message}`, `Lỗi chi tiết: ${err.message}. Vui lòng kiểm tra lại cấu hình API Key hoặc kết nối mạng.`);
        updateAvatarStatus('ready');
    }
}

// Parse the text-based AI response into structured sections (Nâng cấp Regex hỗ trợ Gợi ý phản hồi)
function parseAIResponse(text) {
    const sections = {
        reply: '',
        translation: '',
        corrections: '',
        better_phrasing: '',
        vocabulary: '',
        suggestions: ''
    };

    // Sử dụng Regex linh hoạt, chấp nhận khoảng trắng và không phân biệt chữ hoa thường
    const replyMatch = text.match(/===\s*REPLY\s*===([\s\S]*?)(===\s*TRANSLATION\s*===|===\s*CORRECTIONS\s*===|===\s*PHRASING\s*===|===\s*VOCABULARY\s*===|===\s*SUGGESTIONS\s*===|$)/i);
    const transMatch = text.match(/===\s*TRANSLATION\s*===([\s\S]*?)(===\s*REPLY\s*===|===\s*CORRECTIONS\s*===|===\s*PHRASING\s*===|===\s*VOCABULARY\s*===|===\s*SUGGESTIONS\s*===|$)/i);
    const corrMatch = text.match(/===\s*CORRECTIONS\s*===([\s\S]*?)(===\s*REPLY\s*===|===\s*TRANSLATION\s*===|===\s*PHRASING\s*===|===\s*VOCABULARY\s*===|===\s*SUGGESTIONS\s*===|$)/i);
    const phraseMatch = text.match(/===\s*PHRASING\s*===([\s\S]*?)(===\s*REPLY\s*===|===\s*TRANSLATION\s*===|===\s*CORRECTIONS\s*===|===\s*VOCABULARY\s*===|===\s*SUGGESTIONS\s*===|$)/i);
    const vocabMatch = text.match(/===\s*VOCABULARY\s*===([\s\S]*?)(===\s*REPLY\s*===|===\s*TRANSLATION\s*===|===\s*CORRECTIONS\s*===|===\s*PHRASING\s*===|===\s*SUGGESTIONS\s*===|$)/i);
    const suggMatch = text.match(/===\s*SUGGESTIONS\s*===([\s\S]*?)(===\s*REPLY\s*===|===\s*TRANSLATION\s*===|===\s*CORRECTIONS\s*===|===\s*PHRASING\s*===|===\s*VOCABULARY\s*===|$)/i);

    if (replyMatch) sections.reply = replyMatch[1].trim();
    if (transMatch) sections.translation = transMatch[1].trim();
    if (corrMatch) sections.corrections = corrMatch[1].trim();
    if (phraseMatch) sections.better_phrasing = phraseMatch[1].trim();
    if (vocabMatch) sections.vocabulary = vocabMatch[1].trim();
    if (suggMatch) sections.suggestions = suggMatch[1].trim();

    // Fallback nếu AI không tuân thủ cấu trúc nhãn
    if (!sections.reply) {
        sections.reply = text.replace(/===\s*[A-Z]+\s*===/gi, '').trim();
        sections.translation = 'Không có bản dịch cho câu này.';
        sections.corrections = 'Không có nhận xét lỗi ngữ pháp.';
        sections.better_phrasing = 'Không có gợi ý diễn đạt thêm.';
        sections.vocabulary = 'Không có từ vựng bổ sung.';
        sections.suggestions = '';
    }

    return sections;
}

async function callGeminiAPI(userMessage) {
    if (!state.apiKey) {
        throw new Error("Chưa cấu hình API Key. Vui lòng nhập API Key ở phía trên.");
    }

    // Tự động chuyển sang OpenRouter nếu dùng key bắt đầu bằng 'sk-or-'
    if (state.apiKey.startsWith('sk-or-')) {
        return callOpenRouterAPI(userMessage);
    }

    const modelsToTry = [
        { version: 'v1beta', name: 'gemini-1.5-flash-8b' },
        { version: 'v1beta', name: 'gemini-2.0-flash-exp' },
        { version: 'v1beta', name: 'gemini-2.0-flash-thinking-exp' },
        { version: 'v1beta', name: 'gemini-1.5-flash' },
        { version: 'v1beta', name: 'gemini-1.5-flash-latest' },
        { version: 'v1', name: 'gemini-1.5-flash' },
        { version: 'v1beta', name: 'gemini-1.5-pro' },
        { version: 'v1beta', name: 'gemini-2.0-flash' },
        { version: 'v1', name: 'gemini-2.0-flash' }
    ];

    // Instructions injected directly into the conversation context
    const systemInstructionText = `
You are "Elsa", a friendly, supportive 1:1 English teacher speaking to a Vietnamese student who is learning English from scratch.
Your goal is to help them practice English.
Current Student Level: ${state.aiLevel.toUpperCase()}

CRITICAL RULES FOR STUDENT LEVEL:
- If level is BEGINNER: Write your English replies using extremely simple English (A1-A2 level). Every sentence MUST be short (maximum 5 to 8 words per sentence). Use basic, everyday vocabulary. Avoid complex idioms, metaphors, or advanced phrasal verbs.
- If level is INTERMEDIATE: Write more natural, intermediate-level English sentences, but still easy to understand.

CRITICAL FORMATTING: You must format your response exactly as follows, using the exact section headers. Do not use markdown formatting outside the sections.

===REPLY===
[Your friendly conversation reply in English, responding directly to the student]

===TRANSLATION===
[Vietnamese translation of your reply - this section is MANDATORY and must be a complete translation]

===CORRECTIONS===
[Analyze the student's previous English message. If they made grammar or spelling mistakes, correct them gently in Vietnamese. If no mistakes, write "Không có lỗi! Làm tốt lắm! 🌟"]

===PHRASING===
[Suggest a more natural or native way for the student to say their previous message in English, with a brief explanation in Vietnamese]

===VOCABULARY===
[List 2-4 key words or idioms from your reply with their pronunciation (IPA) and Vietnamese translation]

===SUGGESTIONS===
[Provide 3 short, helpful English phrases the student could say next. 
CRITICAL: These suggestions MUST be direct, natural, and logical responses to your last question or statement in ===REPLY=== (e.g., if you ask "How are you?", the suggestions must be direct answers like "I am good, thank you" or "I am tired today"). 
Provide variety (e.g., one positive answer, one neutral/negative answer, or one that answers and asks a question back).
Keep them extremely simple (3 to 6 words). 
Format each suggestion as: English phrase | Vietnamese translation. Do not include numbering.]
`;

    const errorsList = [];

    for (const model of modelsToTry) {
        try {
            console.log(`Attempting to call Gemini API with model: ${model.name} (${model.version})...`);
            const endpoint = `https://generativelanguage.googleapis.com/${model.version}/models/${model.name}:generateContent?key=${state.apiKey}`;
            
            // Format history for API
            const apiContents = [];
            
            // First message contains system instructions to guide the model
            apiContents.push({
                role: 'user',
                parts: [{ text: `System Instructions: ${systemInstructionText}\n\nLet's start the conversation.` }]
            });
            
            apiContents.push({
                role: 'model',
                parts: [{ text: "===REPLY===\nHello! I am your AI English speaking partner. How can I help you practice today?\n\n===TRANSLATION===\nChào bạn! Tôi là đối tác luyện nói tiếng Anh bằng AI của bạn. Tôi có thể giúp bạn luyện tập thế nào hôm nay?\n\n===CORRECTIONS===\nKhông có lỗi! Làm tốt lắm! 🌟\n\n===PHRASING===\nKhông có gợi ý.\n\n===VOCABULARY===\n1. Practice /ˈpræktɪs/: Luyện tập\n\n===SUGGESTIONS===\nI want to talk about my day.\nHow do I say this in English?\nCan you help me with grammar?" }]
            });

            // Append recent history (Dựng lại cấu trúc nhãn đầy đủ cho lịch sử để tránh AI bắt chước sai)
            const recentHistory = state.chatHistory.slice(-10);
            recentHistory.forEach(msg => {
                let textContent = msg.text;
                if (msg.role === 'model' && msg.corrections) {
                    textContent = `===REPLY===\n${msg.text}\n\n===TRANSLATION===\n${msg.translation}\n\n===CORRECTIONS===\n${msg.corrections}\n\n===PHRASING===\n${msg.better_phrasing}\n\n===VOCABULARY===\n${msg.vocabulary}\n\n===SUGGESTIONS===\n${msg.suggestions}`;
                }
                apiContents.push({
                    role: msg.role === 'user' ? 'user' : 'model',
                    parts: [{ text: textContent }]
                });
            });

            const payload = {
                contents: apiContents
            };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(`Gemini API Response (${model.name}):`, data);
                
                if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                    const rawText = data.candidates[0].content.parts[0].text;
                    console.log(`Successfully connected using model: ${model.name}`);
                    return parseAIResponse(rawText);
                } else {
                    const blockReason = data.promptFeedback?.blockReason || "Bị chặn do bộ lọc an toàn hoặc phản hồi trống.";
                    throw new Error(`Không có phản hồi từ AI: ${blockReason}`);
                }
            } else {
                const errData = await response.json();
                const errMsg = errData.error?.message || `API error ${response.status}`;
                console.warn(`Failed with model ${model.name} (${model.version}): ${errMsg}`);
                errorsList.push(`${model.name} (${model.version}): ${errMsg}`);
            }
        } catch (e) {
            console.warn(`Failed to fetch with model ${model.name} (${model.version}): ${e.message}`);
            errorsList.push(`${model.name} (${model.version}): ${e.message}`);
        }
    }

    throw new Error("Không thể kết nối đến bất kỳ mô hình AI nào. Chi tiết lỗi:\n" + errorsList.map(x => `• ${x}`).join("\n"));
}

function renderTutorNotes(data) {
    const container = document.getElementById('tutor-notes-content');
    if (!container) return;

    // Check if they made mistakes
    const isGoodJob = data.corrections.toLowerCase().includes('làm tốt lắm') || data.corrections.toLowerCase().includes('không có lỗi');

    // Phân tách từ vựng thành các thẻ đẹp kèm loa phát âm
    let vocabHtml = '';
    if (data.vocabulary) {
        const lines = data.vocabulary.split('\n').filter(line => line.trim());
        lines.forEach(line => {
            const cleanLine = line.replace(/^\d+[\s\.]*/, '').replace(/^[-*•]\s*/, '').trim();
            
            // So khớp định dạng "Word /Phát âm/ - Dịch nghĩa" hoặc "Word /Phát âm/: Dịch nghĩa"
            const ipaMatch = cleanLine.match(/^(.*?)\s*\/(.*?)\/\s*[:\-]\s*(.*)$/);
            if (ipaMatch) {
                const word = ipaMatch[1].trim();
                const ipa = ipaMatch[2].trim();
                const trans = ipaMatch[3].trim();
                
                vocabHtml += `
                    <div class="vocab-item-card">
                        <div class="vocab-item-texts">
                            <span class="vocab-word">${word}</span>
                            <span class="vocab-ipa">/${ipa}/</span>
                            <span class="vocab-trans">${trans}</span>
                        </div>
                        <button class="audio-btn" onclick="speakText('${word.replace(/'/g, "\\'")}')" title="Nghe phát âm từ này">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                        </button>
                    </div>
                `;
            } else {
                // Khử định dạng cơ bản khác "Word: Dịch nghĩa"
                const colonMatch = cleanLine.match(/^(.*?)\s*[:\-]\s*(.*)$/);
                if (colonMatch) {
                    const word = colonMatch[1].trim();
                    const trans = colonMatch[2].trim();
                    
                    vocabHtml += `
                        <div class="vocab-item-card">
                            <div class="vocab-item-texts">
                                <span class="vocab-word">${word}</span>
                                <span class="vocab-trans">${trans}</span>
                            </div>
                            <button class="audio-btn" onclick="speakText('${word.replace(/'/g, "\\'")}')" title="Nghe phát âm từ này">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                            </button>
                        </div>
                    `;
                } else {
                    vocabHtml += `<div style="margin-bottom: 8px; font-size: 13px; color: var(--text-muted);">${line}</div>`;
                }
            }
        });
    } else {
        vocabHtml = 'Không có từ vựng bổ sung.';
    }

    container.innerHTML = `
        <div class="tutor-note-section ${isGoodJob ? 'good-job' : 'correction'}">
            <div class="tutor-note-title">Phân tích lỗi sai</div>
            <div class="tutor-note-body">${data.corrections}</div>
        </div>

        <div class="tutor-note-section">
            <div class="tutor-note-title">Gợi ý cách diễn đạt tự nhiên</div>
            <div class="tutor-note-body">${data.better_phrasing}</div>
        </div>

        <div class="tutor-note-section" style="border-left-color: var(--primary);">
            <div class="tutor-note-title">Từ vựng học thêm</div>
            <div class="tutor-note-body" style="margin-top: 8px;">${vocabHtml}</div>
        </div>
    `;
}

// Hàm render các nút gợi ý câu trả lời nhanh (Có dịch nghĩa tiếng Việt)
function renderChatSuggestions(suggestionsText) {
    const container = document.getElementById('chat-suggestions');
    if (!container) return;
    container.innerHTML = '';

    if (!suggestionsText) return;

    // Tách các câu gợi ý theo dòng và làm sạch ký tự đầu dòng
    const lines = suggestionsText.split('\n')
        .map(line => line.replace(/^\d+[\s\.]*/, '').replace(/^[-*•]\s*/, '').trim())
        .filter(line => line);
    
    lines.forEach(line => {
        // So khớp định dạng "English phrase | Bản dịch" hoặc "English phrase : Bản dịch"
        const parts = line.split(/[|:]/);
        const eng = parts[0].trim();
        const trans = parts[1] ? parts[1].trim() : '';

        if (!eng) return;

        const chip = document.createElement('button');
        chip.className = 'suggestion-chip';
        
        let chipHtml = `<span class="sugg-eng">${eng}</span>`;
        if (trans) {
            chipHtml += `<span class="sugg-trans">${trans}</span>`;
        }
        chip.innerHTML = chipHtml;

        chip.addEventListener('click', () => {
            const input = document.getElementById('chat-input');
            if (input) {
                input.value = eng;
                input.focus();
            }
        });
        container.appendChild(chip);
    });
}

function updateVoiceStatus(text) {
    const el = document.getElementById('voice-status-text');
    if (el) el.innerText = text;
}

function updateAvatarStatus(status) {
    const dot = document.getElementById('avatar-dot');
    const text = document.getElementById('avatar-status-text');
    const avatarSvg = document.getElementById('ai-avatar');
    if (!dot || !text || !avatarSvg) return;

    // Reset classes
    dot.className = 'status-indicator-dot';
    avatarSvg.classList.remove('speaking', 'thinking');

    if (status === 'offline') {
        text.innerText = 'Ngoại tuyến (Chưa cài đặt AI)';
    } else if (status === 'ready') {
        dot.classList.add('ready');
        text.innerText = 'Trực tuyến (Sẵn sàng)';
    } else if (status === 'thinking') {
        dot.classList.add('thinking');
        text.innerText = 'Đang suy nghĩ...';
        avatarSvg.classList.add('thinking');
    } else if (status === 'listening') {
        dot.classList.add('listening');
        text.innerText = 'Đang lắng nghe bạn...';
    } else if (status === 'speaking') {
        dot.classList.add('ready');
        text.innerText = 'Đang nói chuyện...';
        avatarSvg.classList.add('speaking');
    }
}

// -------------------------------------------
// MODULE: COMMUNICATION (GIAO TIẾP THỰC TẾ)
// -------------------------------------------
function renderCommunication() {
    const sidebar = document.getElementById('scenarios-sidebar-container');
    if (!sidebar) return;
    sidebar.innerHTML = '';

    SCENARIO_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = `scenario-card ${state.selectedScenario === item.id ? 'active' : ''}`;
        card.innerHTML = `
            <h3>${item.title}</h3>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        `;
        card.addEventListener('click', () => selectScenario(item));
        sidebar.appendChild(card);
    });
}

function selectScenario(item) {
    state.selectedScenario = item.id;
    renderCommunication(); // refresh active state

    const details = document.getElementById('scenario-details-container');
    if (!details) return;

    // Render Dialogue Bubbles
    let dialogueHtml = '';
    item.dialogue.forEach((line, idx) => {
        // Map speakers to A or B styling
        const speakerClass = ['A', 'Waiter', 'Tourist', 'Shop Assistant', 'Agent', 'Receptionist', 'Interviewer'].includes(line.speaker) ? 'speaker-A' : 'speaker-B';
        const initial = line.speaker.charAt(0);
        
        dialogueHtml += `
            <div class="dialogue-bubble ${speakerClass}">
                <div class="speaker-avatar-badge">${initial}</div>
                <div class="dialogue-content">
                    <div class="dialogue-speaker-name">${line.speaker}</div>
                    <div class="dialogue-text">${line.text}</div>
                    <div class="dialogue-ipa">${line.ipa}</div>
                    <div class="dialogue-trans">${line.trans}</div>
                </div>
                <div class="dialogue-actions">
                    <button class="audio-btn" id="play-dialogue-line-${idx}" title="Nghe câu này">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                    </button>
                    <button class="audio-btn" id="practice-dialogue-line-${idx}" style="background: rgba(168, 85, 247, 0.1); color: var(--secondary);" title="Luyện đọc câu này">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                    </button>
                </div>
            </div>
            <div class="practice-feedback" id="dialogue-feedback-${idx}" style="display: none; margin-bottom: 12px; margin-top: -10px;"></div>
        `;
    });

    // Render Phrases (Sổ tay mẫu câu)
    let phrasesHtml = '';
    item.phrases.forEach((phrase, idx) => {
        phrasesHtml += `
            <div class="phrase-item">
                <div class="phrase-texts">
                    <span class="phrase-eng">"${phrase.eng}"</span>
                    <span class="phrase-trans">${phrase.trans}</span>
                </div>
                <button class="audio-btn" id="play-phrase-${idx}">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                </button>
            </div>
        `;
    });

    details.innerHTML = `
        <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 20px; color: var(--primary);">${item.title}</h2>
        
        <div class="detail-group-title" style="margin-bottom: 12px;">Đoạn hội thoại mẫu</div>
        <div class="dialogue-container">
            ${dialogueHtml}
        </div>

        <div class="phrases-box">
            <div class="detail-group-title">Mẫu câu thông dụng bỏ túi (Useful Phrases)</div>
            <div class="phrases-grid">
                ${phrasesHtml}
            </div>
        </div>
    `;

    // Hook up audio and practice events
    item.dialogue.forEach((line, idx) => {
        document.getElementById(`play-dialogue-line-${idx}`).addEventListener('click', () => speakText(line.text));
        document.getElementById(`practice-dialogue-line-${idx}`).addEventListener('click', () => {
            updateAvatarStatus('listening');
            practiceWordPronunciation(line.text, `practice-dialogue-line-${idx}`, `dialogue-feedback-${idx}`);
        });
    });

    item.phrases.forEach((phrase, idx) => {
        document.getElementById(`play-phrase-${idx}`).addEventListener('click', () => speakText(phrase.eng));
    });
}

// -------------------------------------------
// MODULE: OPENROUTER API FALLBACK (DỰ PHÒNG MIỄN PHÍ)
// -------------------------------------------
async function callOpenRouterAPI(userMessage) {
    const modelsToTry = [
        'openrouter/free',
        'qwen/qwen-2.5-7b-instruct:free',
        'google/gemma-2-9b-it:free'
    ];

    const systemInstructionText = `
You are "Elsa", a friendly, supportive 1:1 English teacher speaking to a Vietnamese student who is learning English from scratch.
Your goal is to help them practice English.
Current Student Level: ${state.aiLevel.toUpperCase()}

CRITICAL RULES FOR STUDENT LEVEL:
- If level is BEGINNER: Write your English replies using extremely simple English (A1-A2 level). Every sentence MUST be short (maximum 5 to 8 words per sentence). Use basic, everyday vocabulary. Avoid complex idioms, metaphors, or advanced phrasal verbs.
- If level is INTERMEDIATE: Write more natural, intermediate-level English sentences, but still easy to understand.

CRITICAL FORMATTING: You must format your response exactly as follows, using the exact section headers. Do not use markdown formatting outside the sections.

===REPLY===
[Your friendly conversation reply in English, responding directly to the student]

===TRANSLATION===
[Vietnamese translation of your reply - this section is MANDATORY and must be a complete translation]

===CORRECTIONS===
[Analyze the student's previous English message. If they made grammar or spelling mistakes, correct them gently in Vietnamese. If no mistakes, write "Không có lỗi! Làm tốt lắm! 🌟"]

===PHRASING===
[Suggest a more natural or native way for the student to say their previous message in English, with a brief explanation in Vietnamese]

===VOCABULARY===
[List 2-4 key words or idioms from your reply with their pronunciation (IPA) and Vietnamese translation]

===SUGGESTIONS===
[Provide 3 short, helpful English phrases the student could say next. 
CRITICAL: These suggestions MUST be direct, natural, and logical responses to your last question or statement in ===REPLY=== (e.g., if you ask "How are you?", the suggestions must be direct answers like "I am good, thank you" or "I am tired today"). 
Provide variety (e.g., one positive answer, one neutral/negative answer, or one that answers and asks a question back).
Keep them extremely simple (3 to 6 words). 
Format each suggestion as: English phrase | Vietnamese translation. Do not include numbering.]
`;

    const errorsList = [];

    for (const modelName of modelsToTry) {
        try {
            console.log(`Attempting to call OpenRouter with model: ${modelName}...`);
            
            const messages = [];

            // Gửi câu lệnh hướng dẫn bằng vai trò user đầu tiên để tránh lỗi phớt lờ system role của AI
            messages.push({
                role: 'user',
                content: `System Instructions: ${systemInstructionText}\n\nLet's start the conversation.`
            });

            messages.push({
                role: 'assistant',
                content: `===REPLY===\nHello! I am your AI English speaking partner. How can I help you practice today?\n\n===TRANSLATION===\nChào bạn! Tôi là đối tác luyện nói tiếng Anh bằng AI của bạn. Tôi có thể giúp bạn luyện tập thế nào hôm nay?\n\n===CORRECTIONS===\nKhông có lỗi! Làm tốt lắm! 🌟\n\n===PHRASING===\nKhông có gợi ý.\n\n===VOCABULARY===\n1. Practice /ˈpræktɪs/: Luyện tập\n\n===SUGGESTIONS===\nI want to talk about my day. | Tôi muốn nói về một ngày của tôi.\nHow do I say this in English? | Nói câu này thế nào trong tiếng Anh?\nCan you help me with grammar? | Bạn có thể giúp tôi ngữ pháp được không?`
            });

            // Append history (Dựng lại cấu trúc nhãn đầy đủ cho lịch sử để tránh AI bắt chước sai)
            const recentHistory = state.chatHistory.slice(-10);
            recentHistory.forEach(msg => {
                let textContent = msg.text;
                if ((msg.role === 'model' || msg.role === 'assistant') && msg.corrections) {
                    textContent = `===REPLY===\n${msg.text}\n\n===TRANSLATION===\n${msg.translation}\n\n===CORRECTIONS===\n${msg.corrections}\n\n===PHRASING===\n${msg.better_phrasing}\n\n===VOCABULARY===\n${msg.vocabulary}`;
                }
                messages.push({
                    role: msg.role === 'user' ? 'user' : 'assistant',
                    content: textContent
                });
            });

            // Append current message
            messages.push({ role: 'user', content: userMessage });

            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${state.apiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': window.location.href,
                    'X-Title': 'English Learning AI'
                },
                body: JSON.stringify({
                    model: modelName,
                    messages: messages
                })
            });

            if (response.ok) {
                const data = await response.json();
                const rawText = data.choices?.[0]?.message?.content;
                if (rawText) {
                    console.log(`Successfully connected using OpenRouter model: ${modelName}`);
                    return parseAIResponse(rawText);
                } else {
                    throw new Error("Không nhận được phản hồi từ OpenRouter.");
                }
            } else {
                const errData = await response.json();
                const errMsg = errData.error?.message || `API error ${response.status}`;
                throw new Error(errMsg);
            }
        } catch (e) {
            console.warn(`Failed with OpenRouter model ${modelName}:`, e);
            errorsList.push(`${modelName}: ${e.message}`);
        }
    }
    throw new Error("Không thể kết nối đến các mô hình OpenRouter. Chi tiết:\n" + errorsList.map(x => `• ${x}`).join("\n"));
}

