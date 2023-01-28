// 当前环境设置
// 环境：dev(开发)、xxx(测试)、xxx(预发布)、release(生产正式)

let baseUrl, imgUrl, mapUrl, base = "dev";

if (base == "dev") {
  baseUrl = ""; // 请求地址
  imgUrl = ""; // 图片地址
  mapUrl = ""; // 地图地址
}
if (base == "release") {
  baseUrl = "";
  imgUrl = "";
  mapUrl = "";
}

export default {
  base,
  baseUrl,
  imgUrl,
  mapUrl,
};
