import { nextTick } from "vue";

export async function scrollToSpecificTag(id) {
  await nextTick();

  const el = document.querySelector(id);

  el.style = "scroll-margin-top: 108px";

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  el.style = null;

  el.focus();
}

export async function downloadApplicationForm() {
  await fetch("/FCP_Application_Form_2024.pdf")
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const blob = new Blob([data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");

      // const link = document.createElement("a");
      // link.href = URL.createObjectURL(blob);
      // link.download = "報名申請表.pdf";
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    });
}

export async function downloadRecommendationLetter() {
  await fetch("/FCP_Recommendation_Letter_2024.pdf")
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const blob = new Blob([data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    });
}
