function showMessage() {
    alert("تم فتح بوابة إلى عالم جديد!");
}

document.body.classList.add("power-on");

<script>
const toggleBtn = document.getElementById("crtToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("crt-off");

  if (document.body.classList.contains("crt-off")) {
    toggleBtn.textContent = "CRT: OFF";
  } else {
    toggleBtn.textContent = "CRT: ON";
  }
