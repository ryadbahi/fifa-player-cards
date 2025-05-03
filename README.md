# FIFA Player Cards

This is a React-based project built using **Vite** that displays FIFA player cards using **React-Bootstrap** components. It was developed as part of a checkpoint assignment.

## 📌 Project Description

The goal of the project is to:

- Use JSX and modern React practices.
- Display a list of FIFA players with details such as name, age, nationality, team, jersey number, and photo.
- Practice component structure, props, `defaultProps`, and mapping through data.
- Apply inline styling and use external assets (images).
- Learn and use `react-bootstrap` components (specifically cards).

## 🛠️ Technologies Used

- ⚛️ React (with Vite)
- 💅 JSX
- 🎨 Inline Styling
- 🧩 React-Bootstrap
- 📦 Node.js & npm

## 📁 Project Structure

src/
├── assets/ # Player images
├── components/
│ ├── Player.jsx # Player component
│ └── PlayersList.jsx # Renders list of players
├── data/
│ └── players.js # Array of player data (JSON objects)
├── App.jsx
└── main.jsx

## 🚀 How to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/fifa-player-cards.git
   cd fifa-player-cards

    Install dependencies:
   ```

npm install

Start the development server:

    npm run dev

    Open your browser at http://localhost:5173/

🧾 Notes

    All player data is stored in a separate players.js file.

    Props are de-structured and default props are defined in the Player component.

    A soft background color is used to avoid pure white, improving the visual comfort.

    Images are stored locally inside the /assets folder and imported for display.

🎓 Instructor Notes

    This project was created following the checkpoint instructions.

    Vite was used instead of Create React App to follow modern best practices.

    The code is structured and commented for clarity.

    All required React concepts (props, mapping, styling, etc.) have been implemented as instructed.
