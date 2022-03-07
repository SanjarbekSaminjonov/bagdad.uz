const mainForm = document.querySelector("#main-form");
const userName = document.querySelector("#user-name");
const businessField = document.querySelector("#business-field");
const phoneNumber = document.querySelector("#phone-number");
const message = document.querySelector("#message");
const BOT_TOKEN = "5134466872:AAHMrw8Vz9n76ha7Ntz4wFclMXzxq_yMfFA";
const CHAT_ID = "-1001623085168";

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  TEXT =
    `Client: ${userName.value} ****** Biznes faoliyati: ${businessField.value} ****** ` +
    `Telefon: ${phoneNumber.value} ****** Xabar: ${message.value}`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${TEXT}`;
  fetch(url)
    .then((response) => response.json())
    .then(() => {
      alert("Xabaringiz yuborildi");
      userName.value = "";
      businessField.value = "";
      phoneNumber.value = "";
      message.value = "";
    })
    .catch((error) => alert("Xabarizingiz yuborilmadi"));
});
