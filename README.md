# Teofin Bank App 🏦

![Teofin App Showcase](assets/img.avif)

Teofin is a sleek, modern mobile banking application designed for easy and secure management of your finances. This project is built with React Native and Expo, showcasing a clean user interface and a robust, scalable architecture using Expo Router for navigation.

---

## ✨ Key Features

-   **Smooth Onboarding**: A beautiful, interactive onboarding experience for new users.
-   **Secure Authentication**: A complete sign-in, sign-up, and password recovery flow.
-   **Dynamic Tab Navigation**: A native tab bar for accessing core features.
-   **Dashboard**: A central hub for viewing account summaries and quick actions.
-   **Deposits & Loans**: Sections for managing deposits and loan accounts.
-   **Fund Transfers**: Easy-to-use interfaces for various payment types (IBAN, Mobile, etc.).
-   **Transaction History**: A detailed log of all transactions.
-   **Profile Management**: Users can view and edit their personal information.

---

## 🛠️ Tech Stack

-   **Framework**: React Native with Expo
-   **Navigation**: Expo Router (File-Based Routing)
-   **State Management**: React Hooks (`useState`, `useRef`)
-   **Styling**: React Native Stylesheets
-   **Linting/Formatting**: Pre-configured for clean code

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and the Expo Go app on your mobile device.

-   [Node.js](https://nodejs.org/)
-   [Expo Go on App Store / Google Play](https://expo.dev/go)

### Installation

1.  **Clone the repository**
    ```sh
    git clone (https://github.com/Casey-Jeremy/teofin-bank-app.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd teofin-bank-app
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the application**
    ```sh
    npx expo start
    ```
    Scan the QR code with the Expo Go app on your phone.

---

## 📁 Folder Structure

The project follows a clean and scalable structure:
teofin-bank-app/
├── app/                  # All routes and layouts managed by Expo Router
│   ├── (tabs)/           # Route group for the tab navigator
│   │   ├── _layout.js    # Tab navigator configuration
│   │   └── dashboard.js  # Screen file for the dashboard tab
│   ├── _layout.js        # Root stack navigator layout
│   └── index.js          # App entry point (redirects to onboarding)
├── assets/               # Static assets like images and fonts
├── components/           # Reusable UI components (Button, InputField, etc.)
├── constants/            # Theme settings (colors, fonts) and static data
└── ...                   # Other configuration files


---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Casey-Jeremy/teofin-bank-app/issues).

---

## 📜 License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
