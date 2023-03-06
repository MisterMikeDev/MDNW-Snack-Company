/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
    content: ["./src/**/*.{astro,html,tsx}"],
    theme: {
        fontFamily: {
            main: [
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Open Sans",
                "Helvetica Neue",
                "sans-serif"
            ],
            cursive: [
                "Lobster",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Open Sans",
                "Helvetica Neue",
                "sans-serif"
            ]
        },
        colors: {
            gray: "rgb(229 231 235)",
            pastel: {
                purple: "rgb(179 158 181)",
                pink: "rgb(222 165 164)"
            },
            white: "#ffffff",
            dark: "#3b3b3b"
        }
    },
    plugins: []
};
