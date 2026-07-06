// --- SPA Routing Logic ---

// Get all sections and menu links
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.gnavi__list a');

function switchPage(hashId) {
    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));
    
    // Determine target section
    const targetId = hashId || '#home';
    const targetSection = document.querySelector(targetId);
    
    if (targetSection && targetSection.classList.contains('page-section')) {
        targetSection.classList.add('active');
    } else {
        // Fallback to home if hash is invalid
        document.querySelector('#home').classList.add('active');
    }
    
    // Optional: scroll to top of content when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle hash changes (when a user clicks a menu link)
window.addEventListener('hashchange', () => {
    switchPage(window.location.hash);
});

// Initial load check
document.addEventListener('DOMContentLoaded', () => {
    switchPage(window.location.hash);
});

// --- Fortune Telling Logic ---

const fortunes = [
    { rank: '大吉', comment: '「最高じゃん！今日はウチらがついてるから無敵だし！」（フィア）' },
    { rank: '大吉', comment: '「アンタ、今日なんかいい感じじゃん。アタシが保証する！」（夏梨）' },
    { rank: '中吉', comment: '「まあまあ良い日になりそうじゃん！気楽にいこー！」（夏梨）' },
    { rank: '中吉', comment: '「炎の調子もいい感じ！ウチと一緒に遊ぼうよ！」（フィア）' },
    { rank: '小吉', comment: '「焦らなくても大丈夫だし。ウチの背中で休んでていいよ。」（フィア）' },
    { rank: '凶', comment: '「最悪……水の連中に絡まれないように気をつけてよね！」（夏梨）' },
    { rank: '大凶', comment: '「マジ！？……でも大丈夫、かりんちゃんとウチが全部燃やしてあげるし！」（フィア）' }
];

const drawBtn = document.getElementById('draw-fortune-btn');
const fortuneResult = document.getElementById('fortune-result');
const fortuneRank = document.getElementById('fortune-rank');
const fortuneComment = document.getElementById('fortune-comment');

if (drawBtn) {
    drawBtn.addEventListener('click', () => {
        // Random pick
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const result = fortunes[randomIndex];
        
        // Add a little spin effect to button
        drawBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { drawBtn.style.transform = 'scale(1)'; }, 100);
        
        // Display result
        fortuneRank.textContent = result.rank;
        fortuneComment.textContent = result.comment;
        
        // Show the div with animation
        fortuneResult.style.display = 'block';
        fortuneResult.style.animation = 'none';
        fortuneResult.offsetHeight; /* trigger reflow */
        fortuneResult.style.animation = 'fadeIn 0.5s ease-out';
    });
}
