import{_ as t,r as s,o as n,c as l,b as c,d as r,w as i,a,e}from"./app.b5c5948b.js";const p={},d=a('<h1 id="sorting" tabindex="-1"><a class="header-anchor" href="#sorting" aria-hidden="true">#</a> Sorting</h1><p>When listing lots of files and directories, sorting can help find the right file faster. <code>pls</code> can sort files based on the following attributes.</p><table><thead><tr><th>Key</th><th>Meaning</th></tr></thead><tbody><tr><td>cat</td><td>Directory/file</td></tr><tr><td>name</td><td>Name</td></tr><tr><td>ext</td><td>File extension</td></tr><tr><td>inode</td><td>inode</td></tr><tr><td>links</td><td>Link#</td></tr><tr><td>type</td><td>Type character</td></tr><tr><td>size</td><td>Size</td></tr><tr><td>ctime</td><td>Created at</td></tr><tr><td>mtime</td><td>Modified at</td></tr><tr><td>atime</td><td>Accessed at</td></tr></tbody></table><p>By default, nodes are sorted by their name (ignoring case and excluding leading dots <code>.</code>). A different criterion can be specified using the <code>--sort</code>/<code>-s</code> flag.</p><h2 id="preferences" tabindex="-1"><a class="header-anchor" href="#preferences" aria-hidden="true">#</a> Preferences</h2><p><strong>CLI flags:</strong> <code>--sort</code>/<code>-s</code><br><strong>Config YAML:</strong> <code>sort</code></p>',6),f=e("This is a "),y=e("list of enum field"),u=e(". This means you can pass the CLI flag multiple times, with a different value after the flag, and they will all be collected, in sequence. These are the valid values."),h=a(`<ul><li><p><code>cat</code>, <code>name</code>: sort by the canonical name of the node, with directories first (default)</p><div class="language-shellsession ext-shellsession"><pre class="language-shellsession"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> <span class="token comment"># default</span></span></span>
<span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> -s cat -s name</span></span>
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">prefs</span><span class="token punctuation">:</span>
  <span class="token key atrule">sort</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> cat
    <span class="token punctuation">-</span> name
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
</code></pre></div><ul><li><p>individual keys: add series of tie-breakers; Using multiple sorting fields allows you to sort using successive fields if the previous keys are all equal.</p><div class="language-shellsession ext-shellsession"><pre class="language-shellsession"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> -s ext -s name</span></span>
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">prefs</span><span class="token punctuation">:</span>
  <span class="token key atrule">sort</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ext
    <span class="token punctuation">-</span> name
</code></pre></div></li></ul><div style="background-color:#002b36;color:#839496;" class="language-"><pre style="color:inherit;"><code style="color:inherit;"><span style="color:#156667;text-decoration-color:#156667;">\uF14D</span>   <span style="color:#156667;text-decoration-color:#156667;">dist/</span>                  
\uFC0C   justfile               
\uF495   LICENSE                
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF07B</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">readme_assets</span><span style="color:#156667;text-decoration-color:#156667;">/</span>         
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF668</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;font-weight:bold;">src</span><span style="color:#156667;text-decoration-color:#156667;font-weight:bold;">/</span>                   
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uFB67</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">tests</span><span style="color:#156667;text-decoration-color:#156667;">/</span>                 
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>flake8                 
\uF7A1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>gitignore              
<span style="color:#415f66;text-decoration-color:#415f66;">\uF456</span>   <span style="color:#415f66;text-decoration-color:#415f66;">poetry.lock</span>            
\uF48A   CODE_OF_CONDUCT.md     
\uF48A   CONTRIBUTING.md        
\uF48A   <span style="text-decoration:underline;">README.md</span>              
\uF487   pyproject.toml         
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>pre-commit-config.yaml 
\uF444  <span style="color:#415f66;text-decoration-color:#415f66;">.</span><span style="font-style:italic;">pls.yml</span>                
</code></pre></div><ul><li><p>individual keys with <code>-</code> suffix: reverse the sort for that particular key.</p><div class="language-shellsession ext-shellsession"><pre class="language-shellsession"><code><span class="token command"><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">pls</span> -s ext- -s name</span></span>
</code></pre></div><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">prefs</span><span class="token punctuation">:</span>
  <span class="token key atrule">sort</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ext<span class="token punctuation">-</span>
    <span class="token punctuation">-</span> name
</code></pre></div></li></ul><div style="background-color:#002b36;color:#839496;" class="language-"><pre style="color:inherit;"><code style="color:inherit;">\uF444  <span style="color:#415f66;text-decoration-color:#415f66;">.</span><span style="font-style:italic;">pls.yml</span>                
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>pre-commit-config.yaml 
\uF487   pyproject.toml         
\uF48A   CODE_OF_CONDUCT.md     
\uF48A   CONTRIBUTING.md        
\uF48A   <span style="text-decoration:underline;">README.md</span>              
<span style="color:#415f66;text-decoration-color:#415f66;">\uF456</span>   <span style="color:#415f66;text-decoration-color:#415f66;">poetry.lock</span>            
\uF7A1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>gitignore              
\uF5E1  <span style="color:#415f66;text-decoration-color:#415f66;">.</span>flake8                 
<span style="color:#156667;text-decoration-color:#156667;">\uF14D</span>   <span style="color:#156667;text-decoration-color:#156667;">dist/</span>                  
\uFC0C   justfile               
\uF495   LICENSE                
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF07B</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">readme_assets</span><span style="color:#156667;text-decoration-color:#156667;">/</span>         
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uF668</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;font-weight:bold;">src</span><span style="color:#156667;text-decoration-color:#156667;font-weight:bold;">/</span>                   
<span style="color:#2aa198;text-decoration-color:#2aa198;">\uFB67</span>   <span style="color:#2aa198;text-decoration-color:#2aa198;">tests</span><span style="color:#156667;text-decoration-color:#156667;">/</span>                 
</code></pre></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><p>Describing what these details mean is beyond the scope of this guide. How <code>pls</code> is concerned with them is described below.</p><h3 id="name-name" tabindex="-1"><a class="header-anchor" href="#name-name" aria-hidden="true">#</a> Name (<code>name</code>)</h3><p>The name of the file is used for sorting after normalisation. This involves the following steps:</p><ul><li>removing all leading dots from the file name</li><li>converting the name to lowercase</li></ul>`,11);function m(g,x){const o=s("RouterLink");return n(),l("div",null,[d,c("p",null,[f,r(o,{to:"/reference/prefs.html#lists"},{default:i(()=>[y]),_:1}),u]),h])}var b=t(p,[["render",m],["__file","sorting.html.vue"]]);export{b as default};
