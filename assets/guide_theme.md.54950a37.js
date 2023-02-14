import{_ as s,c as n,o as a,e as p}from"./app.48207b4a.js";const u=JSON.parse('{"title":"\u4E3B\u9898","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme.md","lastUpdated":1676275738000}'),l={name:"guide/theme.md"},o=p(`<h1 id="\u4E3B\u9898" tabindex="-1">\u4E3B\u9898</h1><h2 id="\u4F7F\u7528-scss" tabindex="-1">\u4F7F\u7528 SCSS</h2><p>\u521B\u5EFA 3 \u4E2A\u6837\u5F0F\u6587\u4EF6\uFF0C\u6BD4\u5982 <code>styles/xishui.scss</code>, <code>styles/element.scss</code> \u548C <code>styles/index.scss</code>\u3002</p><blockquote><p>\u51FA\u4E8E scss \u8BED\u6CD5\u7279\u6027\uFF0C\u4E0D\u5F97\u4E0D\u62C6\u6210 2 \u4E2A\u6837\u5F0F\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002</p></blockquote><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#8B949E;">/* styles/xishui.scss \u53EA\u9700\u8981\u91CD\u5199\u4F60\u9700\u8981\u7684\u5373\u53EF */</span></span>
<span class="line"><span style="color:#FF7B72;">@forward</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;xishui-ui/theme-chalk/src/common/var.scss&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">with</span><span style="color:#C9D1D9;"> (</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">$colors</span><span style="color:#C9D1D9;">: (</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#A5D6FF;">&#39;primary&#39;</span><span style="color:#C9D1D9;">: (</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;base&#39;</span><span style="color:#C9D1D9;">: </span><span style="color:#D2A8FF;">green</span></span>
<span class="line"><span style="color:#C9D1D9;">    )</span></span>
<span class="line"><span style="color:#C9D1D9;">  )</span></span>
<span class="line"><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#6E7781;">/* styles/xishui.scss \u53EA\u9700\u8981\u91CD\u5199\u4F60\u9700\u8981\u7684\u5373\u53EF */</span></span>
<span class="line"><span style="color:#CF222E;">@forward</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;xishui-ui/theme-chalk/src/common/var.scss&#39;</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">with</span><span style="color:#24292F;"> (</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">$colors</span><span style="color:#24292F;">: (</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0A3069;">&#39;primary&#39;</span><span style="color:#24292F;">: (</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#0A3069;">&#39;base&#39;</span><span style="color:#24292F;">: </span><span style="color:#8250DF;">green</span></span>
<span class="line"><span style="color:#24292F;">    )</span></span>
<span class="line"><span style="color:#24292F;">  )</span></span>
<span class="line"><span style="color:#24292F;">);</span></span>
<span class="line"></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#8B949E;">/* styles/element.scss \u53EA\u9700\u8981\u91CD\u5199\u4F60\u9700\u8981\u7684\u5373\u53EF */</span></span>
<span class="line"><span style="color:#FF7B72;">@forward</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;element-plus/theme-chalk/src/common/var.scss&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">with</span><span style="color:#C9D1D9;"> (</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">$colors</span><span style="color:#C9D1D9;">: (</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#A5D6FF;">&#39;primary&#39;</span><span style="color:#C9D1D9;">: (</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;base&#39;</span><span style="color:#C9D1D9;">: </span><span style="color:#D2A8FF;">green</span></span>
<span class="line"><span style="color:#C9D1D9;">    )</span></span>
<span class="line"><span style="color:#C9D1D9;">  )</span></span>
<span class="line"><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#6E7781;">/* styles/element.scss \u53EA\u9700\u8981\u91CD\u5199\u4F60\u9700\u8981\u7684\u5373\u53EF */</span></span>
<span class="line"><span style="color:#CF222E;">@forward</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;element-plus/theme-chalk/src/common/var.scss&#39;</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">with</span><span style="color:#24292F;"> (</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">$colors</span><span style="color:#24292F;">: (</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0A3069;">&#39;primary&#39;</span><span style="color:#24292F;">: (</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#0A3069;">&#39;base&#39;</span><span style="color:#24292F;">: </span><span style="color:#8250DF;">green</span></span>
<span class="line"><span style="color:#24292F;">    )</span></span>
<span class="line"><span style="color:#24292F;">  )</span></span>
<span class="line"><span style="color:#24292F;">);</span></span>
<span class="line"></span></code></pre></div><p>\u5C3D\u91CF\u4F7F\u7528\u4E24\u4E2A\u6587\u4EF6\u7684\u53D8\u91CF\u5185\u5BB9\u4FDD\u6301\u4E00\u81F4\uFF08\u6216\u8005\u7EDF\u4E00\u5B9A\u4E49\u4E00\u5957\u53D8\u91CF\uFF0C\u5728\u4E24\u4E2A\u6587\u4EF6\u5185\u5206\u522B\u5F15\u5165\u5E76\u4F7F\u7528\u4E5F\u662F\u53EF\u4EE5\u7684\uFF09\u3002</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">@use</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;./xishui.scss&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">as</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">*</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">@use</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;./element.scss&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">as</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">*</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">@use</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;./xishui.scss&#39;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">as</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">*</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">@use</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;./element.scss&#39;</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">as</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">*</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5728 vite.config.js \u4E2D\u6DFB\u52A0\u65B9\u5F0F\u8986\u76D6</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { defineConfig } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vite&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> path </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;path&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { XishuiUiResolver, ElementPlusResolver } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;unplugin-components-vue/resolvers&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> AutoImport </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;unplugin-auto-import/vite&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// \u6216\u8005\u624B\u52A8\u5F15\u5165</span></span>
<span class="line"><span style="color:#8B949E;">// import xishui from &quot;unplugin-xishui-ui/vite&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#D2A8FF;">defineConfig</span><span style="color:#FFA657;">({</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">resolve: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    alias: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#A5D6FF;">&#39;~/&#39;</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">\`\${</span><span style="color:#C9D1D9;">path</span><span style="color:#A5D6FF;">.</span><span style="color:#D2A8FF;">resolve</span><span style="color:#A5D6FF;">(</span><span style="color:#C9D1D9;">__dirname</span><span style="color:#A5D6FF;">, </span><span style="color:#A5D6FF;">&#39;src&#39;</span><span style="color:#A5D6FF;">)</span><span style="color:#A5D6FF;">}/\`</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">plugins: [</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">AutoImport</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">      resolvers: [</span><span style="color:#D2A8FF;">XishuiUiResolver</span><span style="color:#C9D1D9;">({ importStyle: </span><span style="color:#A5D6FF;">&#39;sass&#39;</span><span style="color:#C9D1D9;"> })]</span></span>
<span class="line"><span style="color:#C9D1D9;">    }),</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">Components</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">      resolvers: [</span><span style="color:#D2A8FF;">XishuiUiResolver</span><span style="color:#C9D1D9;">({ importStyle: </span><span style="color:#A5D6FF;">&#39;sass&#39;</span><span style="color:#C9D1D9;"> })]</span></span>
<span class="line"><span style="color:#C9D1D9;">    })</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u5BF9\u5E94\u4E0A\u65B9\u7684 unplugin-xishui-ui/vite \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// xishui({</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">//   useSource: true,</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// })</span></span>
<span class="line"><span style="color:#C9D1D9;">  ]</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">css: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    preprocessorOptions: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      scss: {</span></span>
<span class="line"><span style="color:#C9D1D9;">        additionalData: </span><span style="color:#A5D6FF;">\`@use &quot;~/styles/index.scss&quot; as *;\`</span></span>
<span class="line"><span style="color:#C9D1D9;">      }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#FFA657;">})</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { defineConfig } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vite&#39;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> path </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;path&#39;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { XishuiUiResolver, ElementPlusResolver } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;unplugin-components-vue/resolvers&#39;</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> AutoImport </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;unplugin-auto-import/vite&#39;</span><span style="color:#24292F;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">// \u6216\u8005\u624B\u52A8\u5F15\u5165</span></span>
<span class="line"><span style="color:#6E7781;">// import xishui from &quot;unplugin-xishui-ui/vite&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#8250DF;">defineConfig</span><span style="color:#953800;">({</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">resolve: {</span></span>
<span class="line"><span style="color:#24292F;">    alias: {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#0A3069;">&#39;~/&#39;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">\`\${</span><span style="color:#24292F;">path</span><span style="color:#0A3069;">.</span><span style="color:#8250DF;">resolve</span><span style="color:#0A3069;">(</span><span style="color:#24292F;">__dirname</span><span style="color:#0A3069;">, </span><span style="color:#0A3069;">&#39;src&#39;</span><span style="color:#0A3069;">)</span><span style="color:#0A3069;">}/\`</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">plugins: [</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">AutoImport</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">      resolvers: [</span><span style="color:#8250DF;">XishuiUiResolver</span><span style="color:#24292F;">({ importStyle: </span><span style="color:#0A3069;">&#39;sass&#39;</span><span style="color:#24292F;"> })]</span></span>
<span class="line"><span style="color:#24292F;">    }),</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#8250DF;">Components</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">      resolvers: [</span><span style="color:#8250DF;">XishuiUiResolver</span><span style="color:#24292F;">({ importStyle: </span><span style="color:#0A3069;">&#39;sass&#39;</span><span style="color:#24292F;"> })]</span></span>
<span class="line"><span style="color:#24292F;">    })</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u5BF9\u5E94\u4E0A\u65B9\u7684 unplugin-xishui-ui/vite \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// xishui({</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">//   useSource: true,</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// })</span></span>
<span class="line"><span style="color:#24292F;">  ]</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">  </span><span style="color:#24292F;">css: {</span></span>
<span class="line"><span style="color:#24292F;">    preprocessorOptions: {</span></span>
<span class="line"><span style="color:#24292F;">      scss: {</span></span>
<span class="line"><span style="color:#24292F;">        additionalData: </span><span style="color:#0A3069;">\`@use &quot;~/styles/index.scss&quot; as *;\`</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">  }</span></span>
<span class="line"><span style="color:#953800;">})</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5982\u679C\u4E0D\u4F7F\u7528-scss" tabindex="-1">\u5982\u679C\u4E0D\u4F7F\u7528 SCSS</h2><p>\u5982\u679C\u4F60\u4E0D\u7528 SCSS \u5F00\u53D1, \u8FD8\u53EF\u4EE5\u901A\u8FC7 CSS \u53D8\u91CF\u8BBE\u7F6E\u3002</p><p>\u5C31\u50CF\u8FD9\u6837\uFF1A</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#79C0FF;">:root</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">--xs-color-primary</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">green</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0550AE;">:root</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">--xs-color-primary</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">green</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u4F60\u53EA\u60F3\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7279\u5B9A\u7684\u7EC4\u4EF6\uFF0C\u53EA\u9700\u4E3A\u67D0\u4E9B\u7EC4\u4EF6\u5355\u72EC\u6DFB\u52A0\u5185\u8054\u6837\u5F0F\u3002</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">xs-button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">style</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;--xs-color-primary: red&quot;</span><span style="color:#C9D1D9;">&gt;Tag&lt;/</span><span style="color:#7EE787;">xs-button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">xs-button</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">style</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;--xs-color-primary: red&quot;</span><span style="color:#24292F;">&gt;Tag&lt;/</span><span style="color:#116329;">xs-button</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u51FA\u4E8E\u6027\u80FD\u539F\u56E0\uFF0C\u66F4\u52A0\u63A8\u8350\u4F60\u5728\u7C7B\u540D\u4E0B\u6DFB\u52A0\u81EA\u5B9A\u4E49 css \u53D8\u91CF\uFF0C\u800C\u4E0D\u662F\u5728\u5168\u5C40\u7684 :root \u4E0B\u3002</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#79C0FF;">.custom-class</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">--xs-color-primary</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">red</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0550AE;">.custom-class</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#953800;">--xs-color-primary</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">red</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u4F18\u96C5\u7684 css \u53D8\u91CF\u4F7F\u7528\u65B9\u5F0F <a href="https://vueuse.org/core/useCssVar/" target="_blank" rel="noreferrer">https://vueuse.org/core/useCssVar/</a>\u3002</p>`,19),e=[o];function c(t,r,y,i,F,D){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{u as __pageData,d as default};
