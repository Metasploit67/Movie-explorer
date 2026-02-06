const movieGrid = document.getElementById('movieGrid');
const watchlistGrid = document.getElementById('watchlistGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const statusMessage = document.getElementById('statusMessage');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const watchlistEmpty = document.getElementById('watchlistEmpty');
const API_KEY = '420bd0a6';

let watchlist = [];

// ============== 1. Theme Toggle
themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    const icon = themeToggle.querySelector('i');

    if (isDark) {
        body.removeAttribute('data-theme');
        icon.className = 'fa-regular fa-moon';
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.className = 'fa-regular fa-sun';
    }
});


// ============ 2. Movie Search 
async function searchMovies() {
    const query = searchInput.value.trim();
    if (!query) return;

    statusMessage.textContent = "Searching...";
    movieGrid.innerHTML = "";

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        const data = await response.json();

        if (data.Response === "True") {
            statusMessage.textContent = `Found {data.Search.length} results.`;
            renderMovies(data.Search);
        } else {
            statusMessage.textContent = `Error: ${data.Error}`;
        }
    } catch (error) {
        statusMessage.textContent = "Network error. Please try again.";
    }
}

// ============= 3. Render Search Results ---
function renderMovies(movies) {
    movieGrid.innerHTML = movies.map(movie => `
        <div class="movie-card fade-in">
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}" alt="${movie.Title}">
            <div class="card-content">
                <h3>${movie.Title}</h3>
                <p>${movie.Year} (${movie.Type})</p>
                <button class="add-btn" onclick="addToWatchlist('${movie.imdbID}', '${movie.Title.replace(/'/g, "\\'")}', '${movie.Poster}')">+ Watchlist</button>
            </div>
        </div>
    `).join('');
}

// ============== 4. Watchlist Logic
window.addToWatchlist = (id, title, poster) => {
    if (watchlist.some(m => m.id === id)) return alert("Already in watchlist!");
    
    watchlist.push({ id, title, poster });
    updateWatchlist();
};

function removeFromWatchlist(id) {
    watchlist = watchlist.filter(m => m.id !== id);
    updateWatchlist();
}

function updateWatchlist() {
    watchlistEmpty.style.display = watchlist.length === 0 ? "block" : "none";
    
    watchlistGrid.innerHTML = watchlist.map(movie => `
        <div class="movie-card fade-in">
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="card-content">
                <h4>${movie.title}</h4>
                <button class="remove-btn" onclick="removeFromWatchlist('${movie.id}')">Remove</button>
            </div>
        </div>
`).join('');
}

// ======== 5. Event Listeners
searchBtn.addEventListener('click', searchMovies);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchMovies();
});


// ===========6. Live character counter
    searchInput.addEventListener('input', () => {
    const count = searchInput.value.length;
    statusMessage.textContent = count > 0 ? `Search term: ${count} chars` : "";
});