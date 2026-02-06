# 🎬 Movie Discovery App

A responsive, single-page movie discovery application that allows users to search for movies, view detailed information, manage a watchlist, and toggle between light and dark themes.

## ✨ Features

### 🔍 **Movie Search**
- Search movies using the OMDb API
- Live search functionality (toggle on/off)
- Character counter for search term
- Clear search results button
- Responsive grid layout for movie cards

### 🃏 **Interactive Movie Cards**
- Hover effects with scale-up animation and shadow
- Click to reveal additional movie details (plot, ratings, actors)
- "Add to Watchlist" button on each card
- Smooth CSS transitions and animations

### 📋 **Watchlist Management**
- In-memory watchlist for the current session
- Add and remove movies from watchlist
- Separate "My Watchlist" section
- Visual feedback when adding/removing movies

### 🌙 **Theme Switcher**
- Toggle between light and dark modes
- Smooth transitions for all UI elements
- Theme preference saved to localStorage
- Sun/moon icons indicating current theme

### 🎨 **UX Polish**
- Loading states with skeleton loaders
- Error handling with user-friendly messages
- "No results" state with suggestions
- Responsive design for all screen sizes
- Smooth fade-in animations for content

## 🚀 Getting Started

### Prerequisites
1. An OMDb API key (free from [omdbapi.com](http://www.omdbapi.com/apikey.aspx))
2. A modern web browser

### Installation
1. Clone or download the repository
2. Open `index.html` in a web browser
3. Enter your OMDb API key when prompted
4. Start searching for movies!

## 📖 How to Use

### Searching for Movies
1. Enter a movie title in the search box
2. Click "Search" or press Enter
3. Toggle "Live Search" for real-time results as you type

### Interacting with Movie Cards
1. **Hover** over cards for visual effects
2. **Click** on cards to view detailed information
3. **Click "Add to Watchlist"** to save movies

### Managing Your Watchlist
- View all saved movies in the "My Watchlist" section
- Remove movies using the "Remove" button
- Watchlist persists until page refresh

### Toggling Themes
- Click the "Toggle Dark Mode" button
- Theme preference is saved for future visits

## 🔧 API Integration

This app uses the [OMDb API](http://www.omdbapi.com/) to fetch movie data.

**To get your free API key:**
1. Visit [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. Sign up for a free API key
3. Enter your key in the app when prompted
4. The key is saved in your browser's localStorage for future use

## 🏗️ Technical Details

### File Structure
movie-discovery-app/
├── index.html # Main HTML file
├── (Embedded CSS) # All styles included in HTML
├── (Embedded JS) # All JavaScript included in HTML
└── README.md # This file

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Custom properties, Flexbox, Grid, transitions, animations
- **JavaScript (ES6+)**: DOM manipulation, async/await, localStorage API
- **OMDb API**: Free movie database API
- **Font Awesome**: Icons for UI elements

### Key Implementation Details

1. **API Integration**:
   - Dynamic API key management with localStorage
   - Error handling for network issues and API errors
   - Debounced search for live search functionality

2. **State Management**:
   - In-memory watchlist array
   - Theme state in localStorage
   - Search history tracking

3. **Responsive Design**:
   - Mobile-first approach
   - Flexible grid layouts
   - Adaptive font sizes and spacing

## 🌐 Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚠️ Limitations

- Watchlist is session-only (clears on page refresh)
- Limited to 10 results per search (OMDb API limitation)
- Free OMDb API has a 1000 requests per day limit
- No user authentication or persistent accounts

## 🔮 Future Enhancements

Potential improvements:
- User accounts with persistent watchlists
- Movie ratings and reviews
- Advanced filtering and sorting
- Movie trailers integration
- Export watchlist functionality
- Social sharing features
- PWA capabilities for offline use

## 📊 OMDb API Limitations

| Feature | Free Tier Limit |
|---------|-----------------|
| Requests per day | 1,000 |
| Results per search | 10 |
| API Key | Required (free) |
| Rate limiting | Yes |

## 🛠️ Troubleshooting

**Common issues and solutions:**

1. **"Invalid API Key" error**
   - Get a new key from OMDb
   - Clear localStorage and re-enter key

2. **No search results**
   - Check internet connection
   - Try different search terms
   - Verify API key is valid

3. **Watchlist not saving**
   - Watchlist is session-only
   - Will clear on page refresh (by design)

4. **Slow search response**
   - OMDb API may be experiencing high load
   - Try using exact movie titles

## 📝 License

This project is created for educational purposes. The OMDb API is used in accordance with their terms of service.

## 🤝 Contributing

While this is a standalone project, suggestions for improvements are welcome!

## 📧 Support

For issues or questions:
1. Ensure you have a valid OMDb API key
2. Check your internet connection
3. Clear browser cache if experiencing issues
4. Try disabling browser extensions that might interfere

---

**Enjoy discovering movies! 🎥🍿**

*Built with HTML, CSS, and JavaScript*
