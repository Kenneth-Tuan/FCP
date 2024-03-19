import { defineConfig, presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) return { color: theme.colors[c] };
      },
    ],
  ],
  theme: {
    colors: {
      fcp: {
        black: "#3e3e40",
        blue: { DEFAULT: "#6c8994", 1: "#658997" },
        green: {
          DEFAULT: "#aec9c2",
          1: "#D6DADB",
        },
        yellow: "#efbf81",
        gray: { DEFAULT: "#f2f2f2", 1: "#d6dadb" },
      },
    },
    fontFamily: {
      bold: "GSG-Bold",
      heavy: "GSG-Heavy",
      light: "GSG-Light",
      Medium: "GSG-Medium",
      regular: "GSG-Regular",
      unbounded: "unbounded",
    },
    breakpoints: {
      sm: "320px",
      md: "640px",
    },
    verticalBreakpoints: {},
    boxShadow: {
      "gls-base": "0px 10px 10px 0px rgba(0, 0, 0, 0.05)",
    },
  },
  shortcuts: [
    // you could still have object style
    {
      btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    },
  ],
  variants: [
    // hover:
    (matcher) => {
      if (!matcher.startsWith("hover:")) return matcher;
      return {
        // slice `hover:` prefix and passed to the next variants and rules
        matcher: matcher.slice(6),
        selector: (s) => `${s}:hover`,
      };
    },
  ],
  preflights: [],
  layers: {
    components: -1,
    default: 1,
    utilities: 2,
    "my-layer": 3,
  },
  presets: [presetUno({ prefix: "u-" })],
  transformers: [transformerDirectives()],
});
