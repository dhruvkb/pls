import{_ as s,r as n,o as t,c as l,b as c,d as r,w as p,a as e,e as o}from"./app.b5c5948b.js";const i={},d=e('<h1 id="collapse" tabindex="-1"><a class="header-anchor" href="#collapse" aria-hidden="true">#</a> Collapse</h1><p>Not all files are created equally. Some are written by people with great care and effort while others are generated automatically.</p><p><code>pls</code> can nest generated files under the handwritten ones when collapsing is enabled.</p><h2 id="preferences" tabindex="-1"><a class="header-anchor" href="#preferences" aria-hidden="true">#</a> Preferences</h2><p><strong>CLI flags:</strong> <code>--collapse</code>/<code>-c</code><br><strong>Config YAML:</strong> <code>collapse</code></p>',5),y=o("This is a "),f=o("counter field"),u=o(". It can take any integer value."),h=e(`<ul><li><p>Default: sets the collapse level to zero, turning off the collapsing functionality.</p><div class="language-shellsession ext-shellsession"><pre class="language-shellsession"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> <span class="token comment"># default</span></span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> -c <span class="token number">0</span></span></span>
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">prefs</span><span class="token punctuation">:</span>
  <span class="token key atrule">collapse</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre></div></li></ul><div style="background-color:#002b36;color:#839496;" class="language-"><pre style="color:inherit;"><code style="color:inherit;"><span style="color:#156667;text-decoration-color:#156667;">\uF14D</span>   <span style="color:#156667;text-decoration-color:#156667;">dist/</span>                  
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF07B</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">readme_assets</span><span style="color:#156667;text-decoration-color:#156667;">/</span>         
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF668</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;font-weight:bold;">src</span><span style="color:#156667;text-decoration-color:#156667;font-weight:bold;">/</span>                   
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uFB67</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">tests</span><span style="color:#156667;text-decoration-color:#156667;">/</span>                 
\uF48A   CODE_OF_CONDUCT.md     
\uF48A   CONTRIBUTING.md        
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>flake8                 
\uF7A1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>gitignore              
\uFC0C   justfile               
\uF495   LICENSE                
\uF444  <span style="color:#415f66;text-decoration-color:#415f66;">.</span><span style="font-style:italic;">pls.yml</span>                
<span style="color:#415f66;text-decoration-color:#415f66;">\uF456</span>   <span style="color:#415f66;text-decoration-color:#415f66;">poetry.lock</span>            
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>pre-commit-config.yaml 
\uF487   pyproject.toml         
\uF48A   <span style="text-decoration:underline;">README.md</span>              
</code></pre></div><ul><li><p>Custom: setting the collapse level to 1, nests the collapsed file beneath their parent.</p><div class="language-shellsession ext-shellsession"><pre class="language-shellsession"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> -c</span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> -c <span class="token number">1</span></span></span>
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">prefs</span><span class="token punctuation">:</span>
  <span class="token key atrule">collapse</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre></div></li></ul><div style="background-color:#002b36;color:#839496;" class="language-"><pre style="color:inherit;"><code style="color:inherit;"><span style="color:#156667;text-decoration-color:#156667;">\uF14D</span>   <span style="color:#156667;text-decoration-color:#156667;">dist/</span>                  
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF07B</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">readme_assets</span><span style="color:#156667;text-decoration-color:#156667;">/</span>         
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF668</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;font-weight:bold;">src</span><span style="color:#156667;text-decoration-color:#156667;font-weight:bold;">/</span>                   
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uFB67</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">tests</span><span style="color:#156667;text-decoration-color:#156667;">/</span>                 
\uF48A   CODE_OF_CONDUCT.md     
\uF48A   CONTRIBUTING.md        
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>flake8                 
\uF7A1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>gitignore              
\uFC0C   justfile               
\uF495   LICENSE                
\uF444  <span style="color:#415f66;text-decoration-color:#415f66;">.</span><span style="font-style:italic;">pls.yml</span>                
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>pre-commit-config.yaml 
\uF487   pyproject.toml         
<span style="color:#415f66;text-decoration-color:#415f66;">\uF456</span>  <span style="color:#415f66;text-decoration-color:#415f66;"> \u2514\u2500</span> <span style="color:#415f66;text-decoration-color:#415f66;">poetry.lock</span>         
\uF48A   <span style="text-decoration:underline;">README.md</span>              
</code></pre></div><p>Similarly, setting the collapse level to 2 (or above) hides collapsed files from the output altogether.</p><div class="language-shellsession ext-shellsession"><pre class="language-shellsession"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> -c -c</span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> -c <span class="token number">2</span></span></span>
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">prefs</span><span class="token punctuation">:</span>
  <span class="token key atrule">collapse</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre></div><div style="background-color:#002b36;color:#839496;" class="language-"><pre style="color:inherit;"><code style="color:inherit;"><span style="color:#156667;text-decoration-color:#156667;">\uF14D</span>   <span style="color:#156667;text-decoration-color:#156667;">dist/</span>                  
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF07B</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">readme_assets</span><span style="color:#156667;text-decoration-color:#156667;">/</span>         
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF668</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;font-weight:bold;">src</span><span style="color:#156667;text-decoration-color:#156667;font-weight:bold;">/</span>                   
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uFB67</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">tests</span><span style="color:#156667;text-decoration-color:#156667;">/</span>                 
\uF48A   CODE_OF_CONDUCT.md     
\uF48A   CONTRIBUTING.md        
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>flake8                 
\uF7A1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>gitignore              
\uFC0C   justfile               
\uF495   LICENSE                
\uF444  <span style="color:#415f66;text-decoration-color:#415f66;">.</span><span style="font-style:italic;">pls.yml</span>                
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>pre-commit-config.yaml 
\uF487   pyproject.toml         
\uF48A   <span style="text-decoration:underline;">README.md</span>              
</code></pre></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Out of the box, <code>pls</code> can collapse the following files:</p><ul><li><code>pyproject.toml</code><ul><li><code>poetry.lock</code></li></ul></li><li><code>Pipfile</code><ul><li><code>Pipfile.lock</code></li></ul></li><li><code>Gemfile</code><ul><li><code>Gemfile.lock</code></li></ul></li><li><code>package.json</code><ul><li><code>package-lock.json</code></li><li><code>yarn.lock</code></li><li><code>pnpm-lock.yaml</code></li></ul></li><li>file with extension <code>ts</code><ul><li>file with same name and extension <code>js</code></li></ul></li><li>file with extension <code>tsx</code><ul><li>file with same name and extension <code>jsx</code></li></ul></li><li>file with extension <code>scss</code>, <code>sass</code> or <code>less</code><ul><li>file with same name and extension <code>css</code></li></ul></li></ul><div style="background-color:#002b36;color:#839496;" class="language-"><pre style="color:inherit;"><code style="color:inherit;"><span style="color:#156667;text-decoration-color:#156667;">\uF14D</span>  <span style="color:#156667;text-decoration-color:#156667;"> dist/</span>                  
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF07B</span>  <span style="color:#2aa198;text-decoration-color:#2aa198;"> readme_assets</span><span style="color:#156667;text-decoration-color:#156667;">/</span>         
<span style="color:#2aa198;text-decoration-color:#2aa198;font-weight:bold;">\uF668</span>  <span style="color:#2aa198;text-decoration-color:#2aa198;font-weight:bold;"> src</span><span style="color:#156667;text-decoration-color:#156667;font-weight:bold;">/</span>                   
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uFB67</span>  <span style="color:#2aa198;text-decoration-color:#2aa198;"> tests</span><span style="color:#156667;text-decoration-color:#156667;">/</span>                 
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>flake8                 
\uF7A1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>gitignore              
\uFC0C   justfile               
\uF495   LICENSE                
<span style="font-style:italic;">\uF444</span>  <span style="color:#415f66;text-decoration-color:#415f66;font-style:italic;">.</span><span style="font-style:italic;">pls.yml</span>                
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>pre-commit-config.yaml 
\uF487   pyproject.toml         
<span style="color:#415f66;text-decoration-color:#415f66;">\uF456</span>  <span style="color:#415f66;text-decoration-color:#415f66;"> \u2514\u2500 poetry.lock</span>         
\uF48A   README.md              
</code></pre></div><p>Notice how collapsing puts the <code>poetry.lock</code> file below <code>pyproject.toml</code>.</p><div style="background-color:#002b36;color:#839496;" class="language-"><pre style="color:inherit;"><code style="color:inherit;"><span style="color:#e34f26;text-decoration-color:#e34f26;">\uE736</span>  <span style="color:#e34f26;text-decoration-color:#e34f26;"> index.html</span>           
\uF487   package.json         
<span style="color:#415f66;text-decoration-color:#415f66;">\uF456</span>  <span style="color:#415f66;text-decoration-color:#415f66;"> \u2514\u2500 package-lock.json</span> 
<span style="color:#3178c6;text-decoration-color:#3178c6;">\uE628</span>  <span style="color:#3178c6;text-decoration-color:#3178c6;"> scripts.ts</span>           
<span style="color:#f7df1e;text-decoration-color:#f7df1e;">\uE60C</span>  <span style="color:#7b852a;text-decoration-color:#7b852a;"> \u2514\u2500</span><span style="color:#f7df1e;text-decoration-color:#f7df1e;"> scripts.js</span>        
<span style="color:#cc6699;text-decoration-color:#cc6699;">\uE603</span>  <span style="color:#cc6699;text-decoration-color:#cc6699;"> styles.scss</span>          
<span style="color:#1572b6;text-decoration-color:#1572b6;">\uE749</span>  <span style="color:#0a4e76;text-decoration-color:#0a4e76;"> \u2514\u2500</span><span style="color:#1572b6;text-decoration-color:#1572b6;"> styles.css</span>        
</code></pre></div><p>Notice how awesome collapse looks when there&#39;s a lot of content to work with.</p><h2 id="customisation" tabindex="-1"><a class="header-anchor" href="#customisation" aria-hidden="true">#</a> Customisation</h2><p>To define more collapse rules, you can do either of the following.</p><ul><li><p>Extend the configuration locally using a local <code>.pls.yml</code> file.<br> For the majority of use cases, this is the preferred option. Using <code>pls</code>&#39;s powerful extensibility, you can define collapse rules for your projects (among other things).</p></li><li><p>Make a pull-request to <code>pls</code>.<br> This only applies if the language is fairly popular and the inclusion of the config adds value for a lot of developers. The <code>pls</code> OOBE is intentionally minimal.</p></li></ul><p>Collapse rules are set via node specs. Refer to the <a href="../reference/node_specs">docs for defining node specs</a>.</p>`,19);function m(x,g){const a=n("RouterLink");return t(),l("div",null,[d,c("p",null,[y,r(a,{to:"/reference/prefs.html#counters"},{default:p(()=>[f]),_:1}),u]),h])}var b=s(i,[["render",m],["__file","collapse.html.vue"]]);export{b as default};
