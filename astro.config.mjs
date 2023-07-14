--git a/astro.config.mjs b/astro.config.mjs
index 5d71593..f4475b5 100644
--- a/astro.config.mjs
+++ b/astro.config.mjs
@@ -6,5 +6,4 @@ import tailwind from "@astrojs/tailwind";
 export default defineConfig({
  integrations: [tailwind()],
   site: "https://Almorder.github.io",
-  base: "/repo",
 });

--git a/tailwind.config.js b/tailwind.config.js
index c70b548..20c416e 100644
--- a/tailwind.config.js
+++ b/tailwind.config.js
@@ -15,7 +15,3 @@ module.exports = {
                }
        }
 };
-
-}
-       plugins: [],
-}
