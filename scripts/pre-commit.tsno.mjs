#!/usr/bin/env zx
import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js
import { createRequire as __$$createRequire } from "module";
var require2;
var init_client = __esm({
  "node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js"() {
    require2 = __$$createRequire("file:///Users/lyu/Desktop/github_projects/byelide/node_modules/.pnpm/tsno@2.0.0/node_modules/tsno/dist/client.js");
  }
});

// scripts/utils.ts
function printObject(object, method = "log") {
  for (const [key, value] of Object.entries(object)) {
    console[method](`${key}:
${value}
`);
  }
}
var init_utils = __esm({
  "scripts/utils.ts"() {
    init_client();
  }
});

// scripts/check.ts
var check_exports = {};
import { $ } from "zx";
var init_check = __esm({
  async "scripts/check.ts"() {
    init_client();
    init_utils();
    await Promise.all([$`pnpm type-check`, $`pnpm lint`]).catch(
      (out) => {
        printObject(out);
        throw new Error(out.stdout);
      }
    );
  }
});

// scripts/pre-commit.ts
init_client();
import { $ as $2 } from "zx";
console.log("\u5F00\u59CB\u6267\u884C\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30...\n");
await init_check().then(() => check_exports).catch(() => {
  throw new Error("\u4EE3\u7801\u8D28\u91CF\u8BC4\u4F30\u5931\u8D25, \u8BF7\u68C0\u67E5\u4EE3\u7801");
});
console.log('printf "\u68C0\u6D4B\u901A\u8FC7, \u521B\u5EFA commit \u4E2D...\n');
await $2`git add .`;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Rzbm9AMi4wLjAvbm9kZV9tb2R1bGVzL3Rzbm8vZGlzdC9jbGllbnQuanMiLCAic2NyaXB0cy91dGlscy50cyIsICJzY3JpcHRzL2NoZWNrLnRzIiwgInNjcmlwdHMvcHJlLWNvbW1pdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovLy9Vc2Vycy9seXUvRGVza3RvcC9naXRodWJfcHJvamVjdHMvYnllbGlkZS9ub2RlX21vZHVsZXMvLnBucG0vdHNub0AyLjAuMC9ub2RlX21vZHVsZXMvdHNuby9kaXN0L2NsaWVudC5qc1wiKTtcbmltcG9ydCB7XG4gIGNvbG9yc1xufSBmcm9tIFwiLi9jaHVuay1GSERYWE9LWS5qc1wiO1xuXG5cbi8vIHNyYy9jbGllbnQudHNcbnZhciBmZXRjaCA9ICh1cmwsIGluaXQpID0+IGltcG9ydChcIi4vc3JjLTRRN1E2N0MzLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQodXJsLCBpbml0KSk7XG52YXIgYXhpb3MgPSAoY29uZmlnKSA9PiBpbXBvcnQoXCIuL2F4aW9zLVBJWjRDNVVaLmpzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmRlZmF1bHQoY29uZmlnKSk7XG5leHBvcnQge1xuICBheGlvcyxcbiAgY29sb3JzLFxuICBmZXRjaFxufTtcbiIsICJpbXBvcnQgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengvY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50T2JqZWN0KFxuICBvYmplY3Q6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgUHJvY2Vzc091dHB1dCxcbiAgbWV0aG9kOiAnbG9nJyB8ICd3YXJuJyB8ICdlcnJvcicgPSAnbG9nJyxcbikge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG4gICAgY29uc29sZVttZXRob2RdKGAke2tleX06XFxuJHt2YWx1ZX1cXG5gKVxuICB9XG59XG4iLCAiIyEvdXNyL2Jpbi9lbnYgenhcblxuaW1wb3J0IHR5cGUgeyBQcm9jZXNzT3V0cHV0IH0gZnJvbSAnengnXG5pbXBvcnQgeyAkIH0gZnJvbSAnengnXG5cbmltcG9ydCB7IHByaW50T2JqZWN0IH0gZnJvbSAnLi91dGlscydcblxuLy8gYXdhaXQgJGBwbnBtIHNwZWxsY2hlY2tgLmNhdGNoKChvdXQ6IFByb2Nlc3NPdXRwdXQpID0+IHtcbi8vICAgY29uc29sZS5sb2cob3V0KVxuXG4vLyAgIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxuLy8gfSlcblxuLy8gYXdhaXQgUHJvbWlzZS5hbGwoWyRgcG5wbSB0eXBlLWNoZWNrYCwgJGBwbnBtIGxpbnRgXSkuY2F0Y2goKG91dDogUHJvY2Vzc091dHB1dCkgPT4ge1xuLy8gICBwcmludE9iamVjdChvdXQpXG4vLyAgIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxuLy8gfSlcblxuLy8gY2hlY2sgdHlwZSBhbmQgc3RhZ2VcbmF3YWl0IFByb21pc2UuYWxsKFskYHBucG0gdHlwZS1jaGVja2AsICRgcG5wbSBsaW50YF0pLmNhdGNoKFxuICAob3V0OiBQcm9jZXNzT3V0cHV0KSA9PiB7XG4gICAgcHJpbnRPYmplY3Qob3V0KVxuICAgIHRocm93IG5ldyBFcnJvcihvdXQuc3Rkb3V0KVxuICB9LFxuKVxuIiwgIiMhL3Vzci9iaW4vZW52IHp4XG5cbmltcG9ydCB7ICQgfSBmcm9tICd6eCdcblxuY29uc29sZS5sb2coJ1x1NUYwMFx1NTlDQlx1NjI2N1x1ODg0Q1x1NEVFM1x1NzgwMVx1OEQyOFx1OTFDRlx1OEJDNFx1NEYzMC4uLlxcbicpXG5cbmF3YWl0IGltcG9ydCgnLi9jaGVjaycpLmNhdGNoKCgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKCdcdTRFRTNcdTc4MDFcdThEMjhcdTkxQ0ZcdThCQzRcdTRGMzBcdTU5MzFcdThEMjUsIFx1OEJGN1x1NjhDMFx1NjdFNVx1NEVFM1x1NzgwMScpXG59KVxuXG5jb25zb2xlLmxvZygncHJpbnRmIFwiXHU2OEMwXHU2RDRCXHU5MDFBXHU4RkM3LCBcdTUyMUJcdTVFRkEgY29tbWl0IFx1NEUyRC4uLlxcbicpXG5cbmF3YWl0ICRgZ2l0IGFkZCAuYFxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQSxTQUFRLGlCQUFpQix5QkFBd0I7QUFBakQsSUFBOERBO0FBQTlEO0FBQUE7QUFBMEQsSUFBSUEsV0FBUSxrQkFBa0Isa0hBQWtIO0FBQUE7QUFBQTs7O0FDRW5NLFNBQVMsWUFDZCxRQUNBLFNBQW1DLE9BQ25DO0FBQ0EsYUFBVyxDQUFDLEtBQUssS0FBSyxLQUFLLE9BQU8sUUFBUSxNQUFNLEdBQUc7QUFDakQsWUFBUSxRQUFRLEdBQUc7QUFBQSxFQUFTO0FBQUEsQ0FBUztBQUFBLEVBQ3ZDO0FBQ0Y7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUdBLFNBQVMsU0FBUztBQUhsQjtBQUFBO0FBQUE7QUFLQTtBQWNBLFVBQU0sUUFBUSxJQUFJLENBQUMsb0JBQW9CLFlBQVksQ0FBQyxFQUFFO0FBQUEsTUFDcEQsQ0FBQyxRQUF1QjtBQUN0QixvQkFBWSxHQUFHO0FBQ2YsY0FBTSxJQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDeEJBO0FBRUEsU0FBUyxLQUFBQyxVQUFTO0FBRWxCLFFBQVEsSUFBSSxtRUFBaUI7QUFFN0IsTUFBTSx1Q0FBa0IsTUFBTSxNQUFNO0FBQ2xDLFFBQU0sSUFBSSxNQUFNLGtGQUFpQjtBQUNuQyxDQUFDO0FBRUQsUUFBUSxJQUFJLG1FQUFnQztBQUU1QyxNQUFNQTsiLAogICJuYW1lcyI6IFsicmVxdWlyZSIsICIkIl0KfQo=
