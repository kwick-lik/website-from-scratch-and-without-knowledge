// Функции для управления титульной страницей
function startProject() {
    console.log('Кнопка "Начать изучение" нажата');
    
    const titlePage = document.getElementById('title-page');
    const mainContent = document.getElementById('main-content');
    
    if (titlePage && mainContent) {
        titlePage.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
        console.log('Переход выполнен успешно');
    } else {
        console.error('Элементы не найдены:', {
            titlePage: !!titlePage,
            mainContent: !!mainContent
        });
    }
}

function showTitlePage() {
    console.log('Показать титульную страницу');
    
    const titlePage = document.getElementById('title-page');
    const mainContent = document.getElementById('main-content');
    
    if (titlePage && mainContent) {
        titlePage.classList.remove('hidden');
        mainContent.classList.add('hidden');
        window.scrollTo(0, 0);
    }
}

// Улучшения для мобильных устройств
document.addEventListener('DOMContentLoaded', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile-device');
    }
    
    document.querySelectorAll('.demo-box, .start-btn, nav a').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        
        element.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });

    initInteractiveElements();
});

// ==================== ИНТЕРАКТИВНЫЕ ЭЛЕМЕНТЫ ====================

let factShown = false;

function initInteractiveElements() {
    initDemoBoxes();
    initCodeEditor();
    initProgressSystem();
    initInteractiveNavigation();
    initCodeEffects();
    initLearningTimer();
    initRandomFacts();
    initSmartTips(); // Добавляем умные подсказки
    initScrollToTopButton(); // Добавляем кнопку "Наверх"
}

// 1. Демо-боксы с разными эффектами
function initDemoBoxes() {
    document.querySelectorAll('.demo-box').forEach((box) => {
        box.isAnimating = false;
        
        box.addEventListener('click', function() {
            if (this.isAnimating) return;
            this.isAnimating = true;
            
            const buttonText = this.innerHTML.toLowerCase();
            
            if (buttonText.includes('совет') || buttonText.includes('настройк')) {
                showSetupTip(this);
            } else if (buttonText.includes('знания') || buttonText.includes('проверим')) {
                testKnowledge(this);
            } else if (buttonText.includes('поздравляю') || buttonText.includes('молодец')) {
                showCongratulations(this);
            } else if (buttonText.includes('javascript')) {
                showJSDemo(this);
            } else {
                const effects = [
                    () => colorChangeEffect(this),
                    () => shakeEffect(this),
                    () => typewriterEffect(this),
                    () => rainbowEffect(this),
                    () => bounceEffect(this),
                    () => pulseEffect(this),
                    () => flipEffect(this)
                ];
                
                const randomEffect = effects[Math.floor(Math.random() * effects.length)];
                randomEffect();
            }
        });
    });
}

function colorChangeEffect(element) {
    const originalHTML = element.innerHTML;
    const originalBackground = element.style.background;
    const originalColor = element.style.color;
    
    element.innerHTML = '🎨 Меняю цвета!';
    element.style.background = 'linear-gradient(135deg, #ff6b6b, #4ecdc4)';
    element.style.color = 'white';
    element.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        element.innerHTML = originalHTML;
        element.style.background = originalBackground;
        element.style.color = originalColor;
        element.style.transform = '';
        element.isAnimating = false;
    }, 2000);
}

function shakeEffect(element) {
    const originalHTML = element.innerHTML;
    element.innerHTML = '📱 Трясем!';
    element.style.animation = 'shake 0.5s ease-in-out';
    
    setTimeout(() => {
        element.style.animation = '';
        setTimeout(() => {
            element.innerHTML = originalHTML;
            element.isAnimating = false;
        }, 100);
    }, 500);
}

function typewriterEffect(element) {
    const originalHTML = element.innerHTML;
    const originalBackground = element.style.background;
    const originalColor = element.style.color;
    
    element.innerHTML = '';
    element.style.background = '#2d2d2d';
    element.style.color = '#4ecdc4';
    element.style.minHeight = element.offsetHeight + 'px';
    
    const text = "Я печатаюсь как на машинке...";
    let i = 0;
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            setTimeout(() => {
                element.innerHTML = originalHTML;
                element.style.background = originalBackground;
                element.style.color = originalColor;
                element.style.minHeight = '';
                element.isAnimating = false;
            }, 1000);
        }
    }, 50);
}

function rainbowEffect(element) {
    const originalHTML = element.innerHTML;
    const originalBackground = element.style.background;
    element.innerHTML = '🌈 Радуга!';
    
    let colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    let currentColor = 0;
    
    const rainbowInterval = setInterval(() => {
        element.style.background = colors[currentColor];
        element.style.color = 'white';
        currentColor = (currentColor + 1) % colors.length;
    }, 200);
    
    setTimeout(() => {
        clearInterval(rainbowInterval);
        element.innerHTML = originalHTML;
        element.style.background = originalBackground;
        element.style.color = '';
        element.isAnimating = false;
    }, 2000);
}

function bounceEffect(element) {
    const originalHTML = element.innerHTML;
    element.innerHTML = '🏀 Прыгаю!';
    element.style.animation = 'bounce 0.8s ease-in-out';
    
    setTimeout(() => {
        element.style.animation = '';
        setTimeout(() => {
            element.innerHTML = originalHTML;
            element.isAnimating = false;
        }, 100);
    }, 800);
}

function pulseEffect(element) {
    const originalHTML = element.innerHTML;
    const originalBackground = element.style.background;
    
    element.innerHTML = '💓 Пульсирую!';
    element.style.background = 'linear-gradient(135deg, #ff6b6b, #ff9ff3)';
    element.style.color = 'white';
    element.style.animation = 'pulse 1s ease-in-out';
    
    setTimeout(() => {
        element.style.animation = '';
        element.innerHTML = originalHTML;
        element.style.background = originalBackground;
        element.style.color = '';
        element.isAnimating = false;
    }, 2000);
}

function flipEffect(element) {
    const originalHTML = element.innerHTML;
    const originalBackground = element.style.background;
    
    element.innerHTML = '🔄 Переворачиваюсь!';
    element.style.background = 'linear-gradient(135deg, #5f27cd, #341f97)';
    element.style.color = 'white';
    element.style.transform = 'rotateY(180deg)';
    element.style.transition = 'transform 0.6s ease';
    
    setTimeout(() => {
        element.style.transform = 'rotateY(0deg)';
        setTimeout(() => {
            element.innerHTML = originalHTML;
            element.style.background = originalBackground;
            element.style.color = '';
            element.style.transition = '';
            element.isAnimating = false;
        }, 600);
    }, 1000);
}

// ==================== ФУНКЦИИ ДЛЯ НОВЫХ ДЕМО-БОКСОВ ====================

function showSetupTip(element) {
    const originalHTML = element.innerHTML;
    const tips = [
        "💡 Совет: Настрой тёмную тему в VS Code для комфортной работы",
        "💡 Совет: Используй Ctrl+S для быстрого сохранения файлов",
        "💡 Совет: Горячие клавиши ускорят твою работу",
        "💡 Совет: Создай папку для каждого нового проекта"
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    element.innerHTML = randomTip;
    element.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
    element.style.color = 'white';
    
    setTimeout(() => {
        element.innerHTML = originalHTML;
        element.style.background = '';
        element.style.color = '';
        element.isAnimating = false;
    }, 3000);
}

function showJSDemo(element) {
    const originalHTML = element.innerHTML;
    
    element.innerHTML = '⚡ JavaScript работает!';
    element.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
    element.style.color = 'white';
    
    const messages = [
        '📝 Меняю текст динамически',
        '🎨 Изменяю цвета',
        '✨ Добавляю анимации',
        '🔄 Работаю с событиями'
    ];
    
    let currentMessage = 0;
    const messageInterval = setInterval(() => {
        element.innerHTML = messages[currentMessage];
        currentMessage = (currentMessage + 1) % messages.length;
    }, 800);
    
    setTimeout(() => {
        clearInterval(messageInterval);
        element.innerHTML = originalHTML;
        element.style.background = '';
        element.style.color = '';
        element.isAnimating = false;
    }, 4000);
}

function testKnowledge(element) {
    const originalHTML = element.innerHTML;
    const questions = [
        "❓ Какой тег создаёт заголовок?",
        "❓ Как подключить CSS к HTML?",
        "❓ Что делает медиа-запрос?",
        "❓ Как запустить сайт через Live Server?"
    ];
    
    const answers = [
        "✅ Ответ: Теги h1-h6",
        "✅ Ответ: Тегом <link rel='stylesheet'>",
        "✅ Ответ: Адаптирует стили под размер экрана",
        "✅ Ответ: Правой кнопкой → Open with Live Server"
    ];
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    element.innerHTML = questions[randomIndex];
    element.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
    element.style.color = 'white';
    
    setTimeout(() => {
        element.innerHTML = answers[randomIndex];
        element.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
        
        setTimeout(() => {
            element.innerHTML = originalHTML;
            element.style.background = '';
            element.style.color = '';
            element.isAnimating = false;
        }, 3000);
    }, 3000);
}

function showCongratulations(element) {
    const originalHTML = element.innerHTML;
    
    element.innerHTML = '🎉 Ты молодец! 🎉';
    element.style.background = 'linear-gradient(135deg, #9b59b6, #8e44ad)';
    element.style.color = 'white';
    element.style.fontSize = '1.2em';
    element.style.fontWeight = 'bold';
    
    createConfettiEffect(element);
    
    setTimeout(() => {
        element.innerHTML = '🚀 Продолжай учиться!';
        element.style.background = 'linear-gradient(135deg, #e67e22, #d35400)';
        
        setTimeout(() => {
            element.innerHTML = originalHTML;
            element.style.background = '';
            element.style.color = '';
            element.style.fontSize = '';
            element.style.fontWeight = '';
            element.isAnimating = false;
        }, 2000);
    }, 2000);
}

function createConfettiEffect(element) {
    const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
    const container = element.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 2px;
            z-index: 1000;
            pointer-events: none;
            left: ${container.left + Math.random() * container.width}px;
            top: ${container.top}px;
            animation: confettiFall 1s ease-in forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}

// 2. Интерактивный редактор кода
function initCodeEditor() {
    const codeExamples = document.querySelectorAll('pre code');
    
    codeExamples.forEach(codeBlock => {
        // Удаляем старые обработчики
        const newCodeBlock = codeBlock.cloneNode(true);
        codeBlock.parentNode.replaceChild(newCodeBlock, codeBlock);
        
        newCodeBlock.addEventListener('click', function() {
            this.style.backgroundColor = '#3d3d3d';
            this.style.transition = 'background-color 0.3s ease';
            
            showTooltip(this, '✨ Можно скопировать код!');
            
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
        
        const copyIcon = document.createElement('div');
        copyIcon.innerHTML = '📋';
        copyIcon.style.cssText = `
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.3s;
            font-size: 0.8rem;
            z-index: 10;
        `;
        copyIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            copyToClipboard(newCodeBlock.textContent);
            showTooltip(newCodeBlock, '✅ Код скопирован!');
        });
        
        newCodeBlock.parentElement.style.position = 'relative';
        if (!newCodeBlock.parentElement.querySelector('div')) {
            newCodeBlock.parentElement.appendChild(copyIcon);
        }
    });
}

// 3. Система прогресса обучения
function initProgressSystem() {
    if (document.getElementById('learning-progress')) return;
    
    const progressBar = document.createElement('div');
    progressBar.id = 'learning-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #4361ee, #4cc9f0);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', updateProgress);
}

function updateProgress() {
    const progressBar = document.getElementById('learning-progress');
    if (!progressBar) return;
    
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + '%';
}

// 4. Интерактивная навигация
function initInteractiveNavigation() {
    const nav = document.querySelector('nav');
    if (!nav || document.getElementById('nav-indicator')) return;
    
    const activeIndicator = document.createElement('div');
    activeIndicator.id = 'nav-indicator';
    activeIndicator.style.cssText = `
        position: absolute;
        bottom: -2px;
        height: 3px;
        background: #4cc9f0;
        transition: all 0.3s ease;
        border-radius: 2px;
    `;
    nav.style.position = 'relative';
    nav.appendChild(activeIndicator);
    
    window.addEventListener('scroll', updateNavIndicator);
}

function updateNavIndicator() {
    const sections = document.querySelectorAll('.code-example');
    const navLinks = document.querySelectorAll('nav a');
    const indicator = document.getElementById('nav-indicator');
    
    if (!indicator) return;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
            
            const linkRect = link.getBoundingClientRect();
            const navRect = link.parentElement.getBoundingClientRect();
            
            indicator.style.left = (linkRect.left - navRect.left) + 'px';
            indicator.style.width = linkRect.width + 'px';
        }
    });
}

// 5. Эффекты для кода
function initCodeEffects() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        });
    });
}

// 6. Таймер обучения (слева внизу)
function initLearningTimer() {
    if (document.getElementById('learning-timer')) return;
    
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'learning-timer';
    timerDisplay.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 20px;
        font-size: 0.8rem;
        z-index: 1000;
        backdrop-filter: blur(10px);
    `;
    document.body.appendChild(timerDisplay);
    
    let startTime = Date.now();
    
    setInterval(() => {
        const elapsed = Date.now() - startTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        timerDisplay.textContent = `⏱️ Учимся: ${minutes}м ${seconds}с`;
    }, 1000);
}

// 7. Случайные факты о веб-разработке
function initRandomFacts() {
    if (factShown) return;
    
    const facts = [
        "Первый сайт создан в 1991 году Тимом Бернерсом-Ли",
        "HTML означает HyperText Markup Language",
        "CSS появился в 1996 году для разделения контента и стилей",
        "JavaScript был создан за 10 дней Бренданом Айком",
        "Более 60% трафика идет с мобильных устройств",
        "Средний размер веб-страницы - около 2MB",
        "Веб-шрифты используются на 85% сайтов",
        "Google обрабатывает более 8.5 миллиардов запросов в день"
    ];
    
    setTimeout(() => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        showNotification(`💡 Знаете ли вы: ${randomFact}`);
        factShown = true;
    }, 5000);
}

// ==================== УМНАЯ СИСТЕМА ПОДСКАЗОК ====================

let tipsShown = [];

function initSmartTips() {
    // Показываем подсказки только для новых пользователей
    if (localStorage.getItem('tipsEnabled') === 'false') return;
    
    // Контекстные подсказки в зависимости от раздела
    const tips = {
        '#step1': '💡 Совет: Скачай VS Code с официального сайта - это бесплатно!',
        '#step2': '💡 Совет: Всегда начинай HTML с <!DOCTYPE html>',
        '#step3': '💡 Совет: Используй CSS переменные для удобства (--primary-color: #4361ee)',
        '#playground': '🎮 Экспериментируй с кодом в реальном времени!',
        'code': '📋 Нажми на иконку копирования рядом с кодом'
    };
    
    // Показываем подсказку при входе в раздел
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !tipsShown.includes(entry.target.id)) {
                const sectionId = '#' + entry.target.id;
                if (tips[sectionId]) {
                    setTimeout(() => {
                        showNotification(tips[sectionId]);
                        tipsShown.push(entry.target.id);
                    }, 1000);
                }
            }
        });
    }, { threshold: 0.5 });
    
    // Наблюдаем за всеми секциями
    document.querySelectorAll('.code-example').forEach(section => {
        observer.observe(section);
    });
    
    // Подсказка для копирования кода при первом заходе
    if (!localStorage.getItem('codeTipShown')) {
        setTimeout(() => {
            showNotification(tips['code']);
            localStorage.setItem('codeTipShown', 'true');
        }, 8000);
    }
}

// ==================== КНОПКА "НАВЕРХ" ====================

function initScrollToTopButton() {
    if (document.getElementById('scroll-to-top')) return;
    
    const scrollButton = document.createElement('button');
    scrollButton.id = 'scroll-to-top';
    scrollButton.innerHTML = '⬆️';
    scrollButton.title = 'Наверх';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: rgba(67, 97, 238, 0.9);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(0) scale(1.1)';
        this.style.background = 'rgba(67, 97, 238, 1)';
    });
    
    scrollButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.background = 'rgba(67, 97, 238, 0.9)';
    });
    
    document.body.appendChild(scrollButton);
    
    // Показываем кнопку при прокрутке
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'translateY(0)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'translateY(20px)';
        }
    });
}

// ==================== РЕДАКТОР КОДА ====================

function initCodeEditor() {
    const tabs = document.querySelectorAll('.editor-tabs button');
    const panels = document.querySelectorAll('.code-panel');
    const runButton = document.getElementById('run-code');
    const resetButton = document.getElementById('reset-code');
    const saveButton = document.getElementById('save-project');
    
    if (!tabs.length) return;
    
    // Переключение вкладок
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('tab-active'));
            panels.forEach(p => p.classList.remove('active'));
            
            this.classList.add('tab-active');
            const targetPanel = document.querySelector(`.${tabName}-panel`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
    
    // Запуск кода
    if (runButton) {
        runButton.addEventListener('click', executeCode);
    }
    
    // Сброс кода
    if (resetButton) {
        resetButton.addEventListener('click', resetCode);
    }
    
    // Сохранение проекта
    if (saveButton) {
        saveButton.addEventListener('click', saveProject);
    }
    
    // Автозапуск при изменении кода
    document.querySelectorAll('.code-input').forEach(input => {
        input.addEventListener('input', debounce(executeCode, 1000));
    });
    
    executeCode();
}

function executeCode() {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const previewFrame = document.getElementById('preview-frame');
    
    if (!htmlCode || !previewFrame) return;
    
    try {
        const fullHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>${cssCode ? cssCode.value : ''}</style>
            </head>
            <body>
                ${htmlCode.value}
                <script>${jsCode ? jsCode.value : ''}<\/script>
            </body>
            </html>
        `;
        
        const blob = new Blob([fullHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        previewFrame.src = url;
    } catch (error) {
        console.error('Ошибка выполнения кода:', error);
    }
}

function resetCode() {
    if (confirm('Точно сбросить весь код к начальному состоянию?')) {
        const htmlCode = document.getElementById('html-code');
        const cssCode = document.getElementById('css-code');
        const jsCode = document.getElementById('js-code');
        
        if (htmlCode) {
            htmlCode.value = `<!DOCTYPE html>
<html>
<head>
    <title>Мой эксперимент</title>
</head>
<body>
    <h1>Привет, мир!</h1>
    <p>Это моя первая веб-страница.</p>
    <button onclick="showMessage()">Нажми меня</button>
</body>
</html>`;
        }
        
        if (cssCode) {
            cssCode.value = `body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-align: center;
    padding: 50px;
}

h1 {
    color: #ffd43b;
    font-size: 2.5em;
}

p {
    font-size: 1.2em;
    margin: 20px 0;
}

button {
    background: #4cc9f0;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.1em;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s;
}

button:hover {
    transform: scale(1.05);
}`;
        }
        
        if (jsCode) {
            jsCode.value = `function showMessage() {
    alert('Ура! JavaScript работает! 🎉');
    
    const h1 = document.querySelector('h1');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    h1.style.color = randomColor;
}

document.addEventListener('DOMContentLoaded', function() {
    const p = document.querySelector('p');
    if (p) {
        p.addEventListener('click', function() {
            this.style.fontSize = this.style.fontSize === '1.5em' ? '1.2em' : '1.5em';
        });
    }
});`;
        }
        
        executeCode();
        showNotification('✅ Код сброшен к начальному состоянию!');
    }
}

function saveProject() {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    
    if (!htmlCode) return;
    
    try {
        const project = {
            html: htmlCode.value,
            css: cssCode ? cssCode.value : '',
            js: jsCode ? jsCode.value : '',
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('webPlaygroundProject', JSON.stringify(project));
        showNotification('💾 Проект сохранен в браузере!');
    } catch (error) {
        console.error('Ошибка сохранения проекта:', error);
        showNotification('❌ Ошибка сохранения проекта');
    }
}

function loadProject() {
    try {
        const saved = localStorage.getItem('webPlaygroundProject');
        if (saved) {
            const project = JSON.parse(saved);
            const htmlCode = document.getElementById('html-code');
            const cssCode = document.getElementById('css-code');
            const jsCode = document.getElementById('js-code');
            
            if (htmlCode) htmlCode.value = project.html;
            if (cssCode) cssCode.value = project.css;
            if (jsCode) jsCode.value = project.js;
            
            executeCode();
            showNotification('📁 Загружен сохраненный проект!');
        }
    } catch (error) {
        console.error('Ошибка загрузки проекта:', error);
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Код скопирован!');
    }).catch(err => {
        console.error('Ошибка копирования:', err);
        // Fallback для старых браузеров
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

function showTooltip(element, message) {
    const existingTooltip = document.querySelector('.custom-tooltip');
    if (existingTooltip) existingTooltip.remove();
    
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.8rem;
        z-index: 1000;
        white-space: nowrap;
    `;
    
    const rect = element.getBoundingClientRect();
    tooltip.style.top = (rect.top - 35) + 'px';
    tooltip.style.left = rect.left + 'px';
    
    document.body.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.remove();
    }, 2000);
}

function showNotification(message) {
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4361ee, #4cc9f0);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ==================== FAVICON ====================

function initFavicon() {
    if (document.querySelector('link[rel="icon"]')) return;
    
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌐</text></svg>';
    document.head.appendChild(favicon);
}

// ==================== ИНИЦИАЛИЗАЦИЯ КНОПКИ ====================

function checkButton() {
    console.log('=== ПРОВЕРКА КНОПКИ ===');
    console.log('Кнопка найдена:', !!document.querySelector('.start-btn'));
    console.log('Функция startProject существует:', typeof startProject);
    
    const button = document.querySelector('.start-btn');
    if (button) {
        button.addEventListener('click', function(e) {
            console.log('Кнопка нажата через eventListener');
            e.preventDefault();
            startProject();
        });
        console.log('Обработчик кнопки добавлен');
    } else {
        console.error('Кнопка "Начать изучение" не найдена');
    }
}

// ==================== ОСНОВНАЯ ИНИЦИАЛИЗАЦИЯ ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализируем кнопку...');
    checkButton();
    
    // Навигация на титульную страницу
    const titlePageLinks = document.querySelectorAll('a[href="#title-page"]');
    titlePageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Навигация: Показать титульную страницу');
            showTitlePage();
        });
    });
    
    // Загружаем сохраненный проект
    setTimeout(loadProject, 1000);
    
    // Создаем favicon
    initFavicon();
});

// Анимации для CSS
if (!document.querySelector('#custom-animations')) {
    const style = document.createElement('style');
    style.id = 'custom-animations';
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

console.log('🚀 Интерактивный сайт-инструкция загружен!');
console.log('✨ Исправлены все баги!');