import{_ as s,c as a,o as n,a as t}from"./app.af34db75.js";const h='{"title":"State","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B7E\u540D","slug":"\u7B7E\u540D"},{"level":2,"title":"\u6700\u4F73\u5B9E\u8DF5","slug":"\u6700\u4F73\u5B9E\u8DF5"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u9AD8\u7EA7\u7528\u6CD5","slug":"\u9AD8\u7EA7\u7528\u6CD5"},{"level":3,"title":"\u5171\u4EAB\u72B6\u6001","slug":"\u5171\u4EAB\u72B6\u6001"}],"relativePath":"usage/state.md","lastUpdated":1638538802358}',p={},e=t(`__VP_STATIC_START__<h1 id="state" tabindex="-1">State <a class="header-anchor" href="#state" aria-hidden="true">#</a></h1><p><strong>Nuxt \u63D0\u4F9B\u53EF\u7EC4\u5408\u7684 <code>useState</code> \u6765\u521B\u5EFA\u8DE8\u7EC4\u4EF6\u7684\u5E76\u4E14\u5BF9 SSR \u53CB\u597D\u7684\u54CD\u5E94\u5F0F\u72B6\u6001\u3002</strong></p><p><code>useState</code> \u662F\u4E00\u4E2A SSR \u53CB\u597D\u7684 <code>ref</code> \u66FF\u4EE3\u54C1\u3002\u5B83\u7684\u503C\u5C06\u4F1A\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08\u5BA2\u6237\u7AEF\u6E32\u67D3\u671F\u95F4\uFF09\u540E\u4FDD\u7559\uFF0C\u5E76\u4E14\u4F7F\u7528\u552F\u4E00\u7684\u952E\u5728\u6240\u6709\u7EC4\u4EF6\u4E4B\u95F4\u5171\u4EAB\u3002</p><h2 id="\u7B7E\u540D" tabindex="-1">\u7B7E\u540D <a class="header-anchor" href="#\u7B7E\u540D" aria-hidden="true">#</a></h2><div class="language-TypeScript"><pre><code><span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> init<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
</code></pre></div><ul><li><p><strong>key</strong> \uFF1A\u552F\u4E00\u7684\u952E\u786E\u4FDD\u6570\u636E\u8BF7\u6C42\u80FD\u591F\u6B63\u786E\u5E76\u4E14\u4E0D\u88AB\u91CD\u590D</p></li><li><p><strong>init</strong> \uFF1A\u5728 state \u8FD8\u672A\u521D\u59CB\u5316\u65F6\u63D0\u4F9B\u521D\u59CB\u503C\u7684\u51FD\u6570</p></li><li><p><strong>T</strong> \uFF1A\uFF08\u4EC5\u7528\u4F5C\u4E8E typescript \uFF09\u63CF\u8FF0 state \u7684\u7C7B\u578B</p></li></ul><div class="info custom-block"><p class="custom-block-title">\u{1F449}</p><p><code>useState</code> \u4EC5\u5728 <code>setup</code> \u548C <code>\u751F\u547D\u5468\u671F\u94A9\u5B50</code> \u4E2D\u751F\u6548\u3002</p><br></div><h2 id="\u6700\u4F73\u5B9E\u8DF5" tabindex="-1">\u6700\u4F73\u5B9E\u8DF5 <a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">\u{1F6A8}</p><p>\u8BF7\u4E0D\u8981\u5728<code>&lt;script setup&gt;</code> \u6216 <code>setup()</code> \u51FD\u6570\u4EE5\u5916\u5B9A\u4E49 <code>const state = ref()</code> \u3002<br>\u8FD9\u79CD state \u5C06\u88AB\u6240\u6709\u8BBF\u95EE\u60A8\u7F51\u7AD9\u7684\u7528\u6237\u5171\u4EAB\uFF0C\u5E76\u53EF\u80FD\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F\uFF01</p></div><div class="tip custom-block"><p class="custom-block-title">\u2705</p><p>\u800C\u662F\u4F7F\u7528 <code>const useX = () \u21D2 useState(&#39;x&#39;)</code><br></p></div><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u7EC4\u4EF6\u5185\u90E8\u7684 <code>counter</code> \u72B6\u6001\uFF0C\u4EFB\u4F55\u5176\u4ED6\u4F7F\u7528 <code>useState(&#39;counter&#39;)</code> \u7684\u7EC4\u4EF6\u90FD\u5C06\u5171\u4EAB\u540C\u4E00\u4E2A\u54CD\u5E94\u5F0F\u72B6\u6001\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> conuter <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    Counter: {{ counter }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      +
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter--<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      -
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><a href="https://stackblitz.com/github/nuxt/framework/tree/main/examples/use-state?file=app.vue&amp;terminal=dev" target="_blank" rel="noopener noreferrer">\u5728 StackBlitz \u4E2D\u6253\u5F00</a></p><h3 id="\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1">\u9AD8\u7EA7\u7528\u6CD5 <a class="header-anchor" href="#\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A composables \u4ECE HTTP \u8BF7\u6C42\u5934\u4E2D\u83B7\u53D6\u7528\u6237\u9ED8\u8BA4\u7684\u73AF\u5883\u4FDD\u5B58\u7136\u540E\u5728\u4E00\u4E2A\u540D\u4E3A <code>local</code> \u7684\u72B6\u6001\u4E2D\u3002</p><p><a href="https://stackblitz.com/github/nuxt/framework/tree/main/examples/locale?file=app.vue&amp;terminal=dev" target="_blank" rel="noopener noreferrer">\u5728 StackBlitz \u4E2D\u6253\u5F00</a></p><h3 id="\u5171\u4EAB\u72B6\u6001" tabindex="-1">\u5171\u4EAB\u72B6\u6001 <a class="header-anchor" href="#\u5171\u4EAB\u72B6\u6001" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u4F7F\u7528<a href="/directory-structure/composables.html">\u81EA\u52A8\u5BFC\u5165 composables</a>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u5168\u5C40\u7684\u5B89\u5168\u7C7B\u578B\u72B6\u6001\u5E76\u4E14\u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u5BFC\u5165\u3002</p><div class="language-typescript"><pre><code><span class="token comment">// composables/states.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useCounter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useColor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;pink&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">useColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Same as useState(&#39;color&#39;)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Current color: {{ color }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,22),o=[e];function c(l,u,r,i,k,d){return n(),a("div",null,o)}var m=s(p,[["render",c]]);export{h as __pageData,m as default};
