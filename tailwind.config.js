/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#a54848", // Dark Gray (เหมาะสมอยู่แล้ว)
        primaryContent: "#5A5A5A", // Medium Gray (ให้เข้ากับ dark gray แต่ไม่มืดเกินไป)
        primarySubContent: "#a54848", // Light Gray (ช่วยให้รู้สึกคอนทราสต์ แต่ยังดูสมดุล)
        primaryBase: "#D1D1D1", // Soft Gray (ดูไม่เข้มเกินไปและสร้างการไหลลื่น)
        primaryAccent: "#FF8C8C", // Soft Pink (เพิ่มความสดใสและอบอุ่น แต่ไม่แรงเกินไป)
        primaryBg: "#FFF", // Very Light Gray (ไม่ขาวเกินไป และมีความอบอุ่น)
      },
    },
  },
  plugins: [],
};
