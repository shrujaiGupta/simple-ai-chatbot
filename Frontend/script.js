async function sendMessage() {
  const input = document.getElementById("prompt");
  const chatbox = document.getElementById("chatbox");
  const prompt = input.value.trim();

  if (!prompt) return;

  // Append user message
  const userDiv = document.createElement("div");
  userDiv.className = "text-right";
  userDiv.textContent = `You: ${prompt}`;
  chatbox.appendChild(userDiv);

  input.value = "";

  // Fetch from backend
  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();

  // Append bot response
  const botDiv = document.createElement("div");
  botDiv.className = "text-left text-blue-700";
  botDiv.textContent = `Bot: ${data.reply}`;
  chatbox.appendChild(botDiv);

  chatbox.scrollTop = chatbox.scrollHeight;
}
