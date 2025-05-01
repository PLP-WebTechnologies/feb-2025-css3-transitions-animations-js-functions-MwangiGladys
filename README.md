
# 🌟 Modern Animation with Local Storage 🌟

This web application features an **interactive button** that triggers an animation. The user's action is **saved in local storage**, allowing the preference to persist across page reloads. The animation and state management create an engaging and persistent user experience.

## 🛠️ Features:
- **Interactive Button**: A button that triggers an animated effect when clicked.
- **Persistent Preference**: The user's preference (whether the button was clicked or clicked again) is stored in **local storage**, ensuring the preference persists even after page reloads.
- **Smooth Animation**: The button performs a smooth **bouncing animation** when clicked.

## 📁 Files Included:
- **HTML (`index.html`)**: Defines the structure, including the button and preference display.
- **CSS (`style.css`)**: Adds modern styles with background gradients, shadowed buttons, hover effects, and animation.
- **JavaScript (`script.js`)**: Handles the animation, user interaction, and storing/retrieving the preference in local storage.

## 🔧 How It Works:
1. **HTML**: Contains the button and a display element for showing the user's preference.
2. **CSS**: Defines styling, including animations (e.g., a "bounce" animation when the button is clicked).
3. **JavaScript**: 
   - Retrieves the stored preference from local storage.
   - Updates the preference text based on the button's click state.
   - Saves the updated preference in local storage for future page loads.

### 📝 JavaScript Overview:
- The script retrieves the **stored preference** from local storage and updates the displayed preference when the page loads.
- On button click, it triggers a **bounce animation** and updates the text to either "Clicked" or "Clicked Again" based on the current state.
- The preference is then **saved** to local storage, making it accessible even after refreshing the page.

### 🎨 CSS Animation:
The animation is defined in the `style.css` file using the `@keyframes` rule. The **button bounces** smoothly when clicked, giving a fun and interactive feel.

## 📥 Installation Instructions:
1. Clone the repository to your local machine.
2. Open the `index.html` file in any modern browser (Chrome, Firefox, etc.) to experience the animation.

## 🔄 Customization Options:
- **Change the Animation**: Modify the `@keyframes` rule in `style.css` to create your custom animation.
- **Modify the Content**: Customize the text displayed in the `h1` and `p` tags in `index.html` to fit your project.

## 🌍 Demo:
A live demo can be viewed at: _(add demo link if hosted)_

---
We hope you enjoy the smooth animation and persistent user preferences! Happy coding! 🎉
