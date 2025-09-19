
  const chatbotBtn = document.getElementById("chatbotBtn");
  const chatbotWindow = document.getElementById("chatbotWindow");
  const chatContent = document.getElementById("chatContent");
  const chatInput = document.getElementById("chatInput");

  chatbotBtn.addEventListener("click", () => {
    chatbotWindow.classList.toggle("hidden");
  });

  document.getElementById("sendBtn").addEventListener("click", async () => {
    const userMsg = chatInput.value;
    if (!userMsg) return;

    chatContent.innerHTML += `<div><b>You:</b> ${userMsg}</div>`;
    chatInput.value = "";

    // Placeholder AI response (replace later with API call)
    let botReply = "Let me think... I recommend Goa for beaches 🌴!";
    chatContent.innerHTML += `<div class="mt-2"><b>Bot:</b> ${botReply}</div>`;
    chatContent.scrollTop = chatContent.scrollHeight;
  });

