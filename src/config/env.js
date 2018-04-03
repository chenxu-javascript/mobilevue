/**
 * 配置编译环境和线上环境之间的切换
 * isDev: 本地环境 or 测试环境
 * API_HOST: 域名
 * imgBaseUrl: 图片所在域名地址
 */
let isDev = location.origin.indexOf('http://localhost') === 0 ||
  location.origin.indexOf('http://172.') === 0 ||
  location.origin.indexOf('http://169.') === 0,
  ZBJConfig = {
    // API_HOST: isDev? 'http://app.qy.dev.zbjdev.com' : location.origin,
    // API_HOST: isDev? 'http://bossweixin.t2.zbjdev.com' : location.origin,
    API_HOST: isDev ? 'http://sell.qy.zbjdev.com' : location.origin,
    isDev,
    routerMode: 'hash'
  };
export { ZBJConfig };
