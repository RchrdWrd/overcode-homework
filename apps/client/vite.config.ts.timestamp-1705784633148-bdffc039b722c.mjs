// vite.config.ts
import { defineConfig, loadEnv } from "file:///Users/richard/Projects/new/overcode-homework/node_modules/.pnpm/vite@5.0.12_@types+node@18.19.8/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/richard/Projects/new/overcode-homework/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///Users/richard/Projects/new/overcode-homework/apps/client/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    define: {
      "process.env": process.env
    },
    plugins: [vue()],
    server: {
      port: parseInt(process.env.VITE_PORT)
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmljaGFyZC9Qcm9qZWN0cy9uZXcvb3ZlcmNvZGUtaG9tZXdvcmsvYXBwcy9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yaWNoYXJkL1Byb2plY3RzL25ldy9vdmVyY29kZS1ob21ld29yay9hcHBzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmljaGFyZC9Qcm9qZWN0cy9uZXcvb3ZlcmNvZGUtaG9tZXdvcmsvYXBwcy9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxuXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcInVybFwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgcHJvY2Vzcy5lbnYgPSB7IC4uLnByb2Nlc3MuZW52LCAuLi5sb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpIH1cbiAgcmV0dXJuIHtcbiAgICBkZWZpbmU6IHtcbiAgICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52XG4gICAgfSxcbiAgICBwbHVnaW5zOiBbdnVlKCldLFxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuVklURV9QT1JUKSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2VixTQUFTLGNBQWMsZUFBZTtBQUNuWSxPQUFPLFNBQVM7QUFFaEIsU0FBUyxxQkFBcUI7QUFINEwsSUFBTSwyQ0FBMkM7QUFLM1EsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsVUFBUSxNQUFNLEVBQUUsR0FBRyxRQUFRLEtBQUssR0FBRyxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUMsRUFBRTtBQUNoRSxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixlQUFlLFFBQVE7QUFBQSxJQUN6QjtBQUFBLElBQ0EsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLElBQ2YsUUFBUTtBQUFBLE1BQ04sTUFBTSxTQUFTLFFBQVEsSUFBSSxTQUFTO0FBQUEsSUFDdEM7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
