// ======================
// ZEN AI APP.JS
// ======================

const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");
const userDisplay = document.getElementById("userDisplay");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");

// ======================
// REGISTER
// ======================

function register() {

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if (!username || !password) {
        alert("Isi semua kolom!");
        return;
    }

    localStorage.setItem("zenUser", username);
    localStorage.setItem("zenPass", password);

    alert("Akun berhasil dibuat!");
}

// ======================
// LOGIN
// ======================

function login() {

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    let savedUser =
    localStorage.getItem("zenUser");

    let savedPass =
    localStorage.getItem("zenPass");

    if (
        username === savedUser &&
        password === savedPass
    ) {

        localStorage.setItem(
            "zenLoggedIn",
            "true"
        );

        localStorage.setItem(
            "zenCurrentUser",
            username
        );

        showDashboard();

    } else {

        alert("Username atau password salah!");

    }

}

// ======================
// AUTO LOGIN
// ======================

window.onload = () => {

    if (
        localStorage.getItem("zenLoggedIn")
        === "true"
    ) {

        showDashboard();

    }

    loadChatHistory();

};

// ======================
// DASHBOARD
// ======================

function showDashboard() {

    loginPage.style.display = "none";
    dashboard.style.display = "block";

    userDisplay.innerText =
    localStorage.getItem("zenCurrentUser");

}

// ======================
// LOGOUT
// ======================

function logout() {

    localStorage.removeItem("zenLoggedIn");

    location.reload();

}

// ======================
// CHAT AI
// ======================

function sendMessage() {

    let text = chatInput.value.trim();

    if (!text) return;

    addMessage(text, "user");

    saveHistory(text, "user");

    chatInput.value = "";

    setTimeout(() => {

        let aiReply =
        generateResponse(text);

        addMessage(aiReply, "ai");

        saveHistory(aiReply, "ai");

    }, 800);

}

// ======================
// AI RESPONSE
// ======================

function generateResponse(text) {

    text = text.toLowerCase();

    if (text.includes("halo")) {
        return "Halo! Saya ZEN AI 🤖";
    }

    if (text.includes("script")) {
        return "Saya dapat membantu membuat script Roblox, HTML, CSS, JavaScript dan lainnya.";
    }

    if (text.includes("gui")) {
        return "Saya dapat membuat konsep GUI Inventory, Shop, Gacha, Admin Panel dan lainnya.";
    }

    if (text.includes("logo")) {
        return "Saya dapat membantu membuat konsep logo modern, anime, kartun, esports dan lainnya.";
    }

    return "ZEN AI menerima pesan: " + text;

}

// ======================
// ADD MESSAGE
// ======================

function addMessage(text, type) {

    let div =
    document.createElement("div");

    div.className =
    "message " + type;

    div.innerText = text;

    chatBox.appendChild(div);

    chatBox.scrollTop =
    chatBox.scrollHeight;

}

// ======================
// SAVE CHAT
// ======================

function saveHistory(text, type) {

    let history =
    JSON.parse(
        localStorage.getItem("zenChat")
    ) || [];

    history.push({

        text: text,
        type: type

    });

    localStorage.setItem(
        "zenChat",
        JSON.stringify(history)
    );

}

// ======================
// LOAD CHAT
// ======================

function loadChatHistory() {

    let history =
    JSON.parse(
        localStorage.getItem("zenChat")
    ) || [];

    history.forEach(msg => {

        addMessage(
            msg.text,
            msg.type
        );

    });

}

// ======================
// CLEAR CHAT
// ======================

function clearChat() {

    localStorage.removeItem(
        "zenChat"
    );

    chatBox.innerHTML = "";

}

// ======================
// DARK MODE
// ======================

function toggleDarkMode() {

    document.body.classList.toggle(
        "light-mode"
    );

}

// ======================
// GUI GENERATOR
// ======================

function generateGUI() {

    alert(
        "GUI Generator Coming Soon!"
    );

}

// ======================
// SCRIPT GENERATOR
// ======================

function generateScript() {

    alert(
        "Script Generator Coming Soon!"
    );

}

// ======================
// IMAGE GENERATOR
// ======================

function generateImage() {

    alert(
        "Image Generator Coming Soon!"
    );

}

// ======================
// LOGO GENERATOR
// ======================

function generateLogo() {

    alert(
        "Logo Generator Coming Soon!"
    );

      }
