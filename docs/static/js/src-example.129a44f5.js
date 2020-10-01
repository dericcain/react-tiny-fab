(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/example.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),i=n.n(o),c=n("./node_modules/@mdx-js/react/dist/esm.js"),l=n("./node_modules/docz/dist/index.esm.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=(n("./src/styles.scss"),function(e){var t=e.children,n=Object(a.a)(e,["children"]);return i.a.createElement("button",Object.assign({type:"button"},n,{className:"rtf--ab"}),t)}),p=function(e){var t=e.children,n=Object(a.a)(e,["children"]);return i.a.createElement("button",Object.assign({type:"button",className:"rtf--mb"},n),t)};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MB",filename:"src/index.tsx"}});var d={bottom:24,right:24},m=function(e){var t=e.event,n=void 0===t?"hover":t,a=e.position,c=void 0===a?d:a,l=e.alwaysShowTitle,r=void 0!==l&&l,m=e.children,u=e.icon,j=e.mainButtonStyles,g=e.onClick,O=e.text,h=Object(o.useState)(!1),A=Object(s.a)(h,2),y=A[0],C=A[1],N=r||!y,f=function(){return C(!0)},B=function(){return C(!1)};return i.a.createElement("ul",{onMouseEnter:function(){return"hover"===n&&f()},onMouseLeave:function(){return"hover"===n&&B()},className:"rtf ".concat(y?"open":"closed"),"data-testid":"fab",style:c},i.a.createElement("li",{className:"rtf--mb__c"},i.a.createElement(p,{onClick:function(e){return g?g(e):(e.persist(),"click"===n?y?B():f():null)},style:j,"data-testid":"main-button",role:"button","aria-label":"Floating menu",tabIndex:0},u),O&&i.a.createElement("span",{className:"".concat("right"in c?"right":""," ").concat(r?"always-show":""),"aria-hidden":N},O),i.a.createElement("ul",null,i.a.Children.map(m,(function(e,t){return i.a.isValidElement(e)?i.a.createElement("li",{className:"rtf--ab__c ".concat("top"in c?"top":"")},i.a.cloneElement(e,Object(b.a)(Object(b.a)({"data-testid":"action-button-".concat(t),"aria-label":e.props.text||"Menu button ".concat(t+1),"aria-hidden":N,tabIndex:y?0:-1},e.props),{},{onClick:function(t){e.props.onClick&&function(e,t){e.persist(),C(!1),setTimeout((function(){t(e)}),1)}(t,e.props.onClick)}})),e.props.text&&i.a.createElement("span",{className:"".concat("right"in c?"right":""," ").concat(r?"always-show":""),"aria-hidden":N},e.props.text)):null})))))};r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AB",filename:"src/index.tsx"}}),m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fab",filename:"src/index.tsx"}});var u={};function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"React Tiny FAB",src:"https://raw.githubusercontent.com/dericgw/react-tiny-fab/master/logo.png"})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"A tiny (~700 byte gzip) WAI-ARIA compliant Floating Action Button for React")),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{}),"   npm install react-tiny-fab\n   yarn add react-tiny-fab\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"react-tiny-fab")," v3 now relies on React version 16.8 and up because it is implemented using ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"React Hooks"))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"There are two components available for import - ",Object(c.b)("inlineCode",{parentName:"p"},"Fab")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Action"),". You import them like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{}),"   import { Fab, Action } from 'react-tiny-fab';\n   import 'react-tiny-fab/dist/styles.css';\n")),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("p",null,"Here is an example of how you would use the components:"),Object(c.b)(l.c,{__position:0,__code:"<h4>Check the bottom right of the screen</h4>\n<Fab icon={<span>+</span>} mainButtonStyles={{ backgroundColor: '#e74c3c' }}>\n  <Action\n    text=\"Add Something\"\n    style={{ backgroundColor: '#3498db' }}\n    onClick={() => alert('It works!')}\n  >\n    +\n  </Action>\n  <Action\n    text=\"Assign Something\"\n    style={{ backgroundColor: '#3498db' }}\n    onClick={() => alert('It still works!')}\n  >\n    =\n  </Action>\n</Fab>",__scope:{props:this?this.props:n,Playground:l.c,Fab:m,Action:r},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2AAMVcDwlgAQUlAZzDQo1ZXaD04AEchJFUbAcAIOAsFwiD2EDSV0Lo01FTBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLi92rGYOxYGcNIAFj09gADY9PaAyLDAYDiKIaBEg0_hnEOBEHUwGChH4JYiGoSg4CMhE7PWRyaGcCAsMudgAEYzIM-QRLEqYyLmeT2AjKDyBsKB0DDVCOXksQcujGR2BRWSYG4YBsOk2q4HkLca2AfLoCK4IADIevGRJ5koZpOsK4ruAmuUwGQyjqHadgAH4Ni6sMI1Kq5Ru61BUurKQZCrN8zBhdVjhgMAwigKY1rKirdsy5dqwTPiCBwQjMhSK8CDamtazwMzU02HZ8W6LwbmNfoUkIPZmgmbo4HILo6Arf6VwTYiPFRmtYmoerGFC9wxAAaikfHUDEHafp-qI0GvcIIlQJqsXqqCPAlbZELaDBHCgIUNIAYhgAB2MzyCTch5vkCnKe-ynGAo7t_UeymLFoLACD4EAyM7dhPKPCYCn4TGfpq2BmfYVmdg55D0G53m5T5pMzIATgADiqCWpeVixqHsKBYm2erru4cr4gyAhHybPMhW2OAAEJX096WjZrQnk6keWqJln65dmxWvZrVX1f4Mi4HyFJzF10cbBnQ2leVk26uAFm2atrnKB5st7cd133dQxPlZ9v2dkD0rg5CWBhQjqYUWgKAo4EGP445fuayzym-Drmt09ztepHRmWpGe173s-tr07mA6zC_EBGOY1jcA4rBAN0ECDDAvCTuepYoLyGBpKyVCAkTSaj9LaE69FJANzgDgeGpdQGoDQLQAQ51vJkWvNBAcdhsAgXQHYI-AAJSweoAAyZEbj9A8OEeAjBCEkNpmDVAF4YCn0UusQuC0rgomnIUasg9_YcJyvFI-hEhREDPKwfQo9yqsEoFwdYmFoiuHNLQGe6B2gCK4QbbaaVqDiTQVcYR9g5boMweVBSuVlpjToEsHAtiZglRulGXalCGEDXmBrFx9N-CKVsTgGYaFyBwVLgAOW9HVfgwowDmnNCRcQK4OoFS2lLKQnjqAHRVIrRBGQUHdD1CYygg5sF0FwewHULkCCMAIUQ0h5CIAuOobQ4h9D6ZMNPksdoBASINHDFxcqSlqydI8N0tQAjUChCIIEAQZgdpHSwPhQsqBxJ5IMZqV6Ri8kYIKXAMxOU8qJLDDYuxDix5OITKk8wMl3H8HOd4wJ_g4ChKPBrSJ0SJneOAL4_xMsEkrToMkyQ5z0kiSycgiU3RoIhReFRVhAyCmjPGZM9YENCDwomaCasoMIhEFRYi6ssAwAEBxeimZoldFTEwOdUIl0IX5AVlcGlULmQKRZiILFVwABMyUJwQEhgQDlZlUIZL5HoUF3l0abMHP0iwMAJE0AEe0YYEiBDzQAD5ykCf7P0FhBS0qogIhlCsMkWHiCMeCcBnDDBGJYF4sABFeHbuKVARrOC6AEUfZ6wTATOupqgZp1BGbwDdas-wzhnASrDhAeAzq-E7AERGIRqyRECDEbKggUj2AyK4M69hnDUQFGdZtMMQazQ4A9YCaZOjFlTHRiskthEjHitMdlXK6wZUugUgqygSqIqGUhQrbKFKLoEANVRey49TWJHNZa61BBYDZXOlAOAMAx2FusesbGqAx0-r9QzGSWIx0xu2GOwuKV01SoWeJAA2rYHU8xN3VVHA0OAt66AAF1sq_3_rQCMC6l0fnWOlEI_RXD4K4JgcwCkTVmotaMGdc6VVqtjjeu9BayV7Dvc29NS6CBPpfagCMqIGT_urIBwJIVujmKw4-59d6f3xD_ahqt0IRWYZum2zME0O2KoyPNPq6G6BrUY-JckEjWNj3Y1MTjcpuPKvYHxsjS7BMAbQxEDEc7zEJrraI8RkibrnosBAZoEZD2lX0zWLoBA-jmEPfG4jP1E5_lhPkFESmlYWas9CVN8lJrtA1TseaS0IzIeCEtBTMBrpXAKQJjk612BjISM6-QQqSNobNFRHUqBfb-2bZpyUr1tOpqWL_AQhEZpXHjbWvLSaU26bHpm9AZ6VyOYyM58OdmazYdw7R39MB2sWGw9ao8-wIxBz6ZjYrpXRK2edRYJQiV2tJZEhYQDTExMyyPvYfZdAcBRBmBGVd979t4CWBARrm8DNGaPrYAAavELgrT9DGIldso7MWYX5wsO5gQ5hTkfezn7HoQSHlhPqsUF5MSPAAH1IfkHYAAEmAB0gp800B9j7dCpaSOZjzQ0u0eQxRWrJ3zsAI-ZHnQPZoEd7-ROPsKM6co-AMQ1FXGKGl6g5pznmgRxAfHY6_vK3aK4YD5o4KBCgO0DaeA_GYPYtg9gCH2DFD1HQKE5z4fAAgOwQmiVec0_zoL4XNhOx0Al0BiAIGwNrvO_zwZwzsBXGC-YJa2krjmgSnz_nP1fH5Wl1sj3nvvaZaHtscruWXrVZ0zQM7AevaGZyj7_sWycAmb1_ztnqAMtZZ2PGpYCeZcp-t39pQqf7PLxL-1PPSfC5yf6r9mPCZSbl-VnckJIPgDFAR50HlhAUfmB1Yyp3Jpu8vnYLjtCCOm9eyg5OmDVqbXdEx9PuA5o4CWpx3Kdok_7ME63zWIX5vzRG_A_VffFvjfaMLx9teMeEm-7uLLtWK9PckyMmTSfZfL_Z0kH7a_lM3z5yfwnFHA83iygBm1QhXGIyRWAO-1umzipUxmoD1EGBgDPBFXqn0AyBXiQJQOIXFAkXqhExgBXhb2ByeXb0iXV0d0WjlCi1QHX18x5iXTUXxxXnQEUQZ1UQ1nOgxhAExgbnqn7wVkTl3gB1IMeXCUEAICiXNAmWh3IDiWt0YDyRp0PXqlU0xGIJpwEOAG3Tpn9T3XgEAIsHYPpxUSZw1h9Q530P9D4MvyEFNmuRsNrj-1PxFxInnA1kIh5miAKHYCvFCBcI-1tx6Xqk0kAN_wsA110EAKkDyV_2AGrz4zry9jxlf1T3ELbw70R2RRH1RyEIxyH15QYLx3V3LyX1nzgwXzlCXxXzX1Hw31T1YNTzcKPzoBP2A1A3P2MPYEiPakLh6JfwJmTg_3zkYCpTEGACYjWnkCkAmMxikB_xXDmKgDamI0W0VmOntCgnRnImvBCDsAzmZA2OvlvkgUMOgVgS0AoGAn0AYFDGkPe3Nm8BX1igKCuC8AECnA528G9SFzUg5QAFY9JnUCjqArhIAah0BnURgbBaAV8wp4pUBRhMgZhnUsJzR74rgnYcSXZQTjICgRczo-V2BNJnU_YUQV9DCrhkTnRnUepk8MMzMHiZCJknifpyojB2TKZUR3A4BHJk1zQhQeU0ANpMCjgEQRVwCfpeTFkBSiArghBOlv0kwEpATMAUg-seTMhFkB8rhxQl1MTUAhTwhxgdT-TRFSScB2U4BpSIDN5yoqVuSfoKSLQG4aTqAYA7SLAVIATSTvS-wCTTJ_TMZE5E4WTokSJ5DnS5NEAZMYyLBypSYEyC5zS9ToQKQjSTSDgwoXhkhNJrTbTVDcyZIrgCynYAyV4V4kzX8cBajV9RgUzZTdVwSMzDS0Bsz0MJQ8yrSbSAyCluzSyrSKzQzMYepEAaA8BzRNoIwEpTNk5mz5Srhmy4JaAABNCMc0KyTSPSUqeGUOWcrUmUtMhWS0eceCMsnATSJMIs63BkiIexMzZWRc0RZc801cmADc7c3c6qOIWAQ8ys0czeccyc6cxJCMdlec63F85NN8vkj8jct3dlHcrAPcv88LOcgM5sgfM8uCNyK0zSJ2W8_Oe8gpFMlWc0pcs0-CrIDchKZCn8_c_8zC5OKssciciYMCrqCMJMKC_OGChU6ixZBCzchKF2FCtCg8li6Ck8qiXCi8q0-i4ir2Uix8mnASuC4S2i2c8Sxi9CgC1ioC5WECzimcsyPir2DSoSuAES80TlCS38qSo81MvknCzAPCy8tU5S4y9iMip87Uvkqilc7S-yvSpywCzeFeEyqcmcwEiy58yi186y2ypMTSBypijC5yii1y089yhSgssS7yymVS8i6yoK987S1K9K_S6SgAoy4qjimK8CqyeKgKuUpK4K9czcpMb81Cxy5irK6yty88_Cgs9lBKIqn6Eq_y48wKjqiqrqnq6q8KwyyKlcKWHaElCM2QqHGHJ4oyTsd49gdlYErAP41SUU9gOy0651IwRAIJC0Tabk30jszFSIMsxLdYcc-MszGs9wGM7CulNsmALM_YLs8gHssaya8GvMy8kcpWDa9YP61AOsqACdZfBssYMzQGqifUzMjssGgciGmSXsoqom2G4cz66sZG7k8mocsklcHG1sg0kGgm00um_Mws8AsE9SEIDwOAduKhcAh8q4QEzSAAUmFsStguSu0vNDFvFq1JeuNNyKuBsjOpXGVqJIJSuAsg1qVgtnZiQgwEVJSFZgjE0iWEttJKtpwEFjiu5qDJSA5Usj1vAM-O-MyBYDyBdv1p-ioA7iuFhJeC9JXCijdNinigSl0j9prGqDqI7FGDLNJPYD1onDNtcAtqtuzsUvMqttTsshdkslUnNutrLttvZRdi1IZNyJjNVsSjSslvWvWE2pEm2rZPPU2GH1FvVphK4AmB7pBPWAxKxPYBxJxOdUNtbnQGnPbjtj5iskXqXudRYFCg8s4FQD9mdHNDAFgFjvUDyBiDAESFnr0BoDFKlPWDu3LkxNoCIHuB6HFNBPR1bK6FXLYFDoxSFCnA9LpPWA9oyHNC9ogB9vYAVsnpeNX0TpGGTu0jTpLszvLpttzo5HzrTqLp8AQazuQbLutKroLT6AFs7kFBBWjXCC3qRM9PxMOuDIZurHNBGBgA8G2BeHNGK0tHel_s_ocmAgYZgG7ueMKlQ0DvYD5jAASnEfEedXDteLiiuDEqHupvYC5OxtkuZvxuNLBoEtJqpq2vByjL2vPVXrJAUo8B5h2GfpbN5pIgFqgCFrYQKQ-qRQEYSkUe1SdvkZQpDOrGVvKzdwcroeyt1KBpZtBtNO0ahudRprMw5qcaViZt5tCbZpzMHM5r7JXB5quBscFtoGFscbAYlqlrmpls6s_M3IVqVv-I7Prt7pXCnuNvQFNtLpztwftq1IOpMmduOtdrcbju_sAeAdAfZV6eWzns7mDtybDt4fyDkcShjvdsgb8BOBgZTrgeLozuwaQYKrzpTvQfWeaZwYrvwZXBruHzrpccbvAMRurGiq4sKkPO5KstKcQt6skv_M0i1ISfktGutImvAOmsxieYWrKdef6vCw-auZbq-saruYfEgseelsEuedEoYr6oyots-bUeNLyp-cKv-d8rUs3iBZoq6vouWvea1OuYsFuZnN4oReKaReBcQrEvJfBcxZyrkpxc8sBKKoBaJcRc0psu0pZbCopcherClhpfAvMvpfapKaZc3NCrRf0ohcZqxe-c8vSaVj5YSoZcFZEqVbebZfFdm2hdAtitauJa0q6vNCqtFeNbVY5fZy5YIqIvxYfIBoFdlsWrSvtYxZNftOpZhZnJatlYtPlZJbKdtdBfRdVfifVZdYLOvN5YJc9b1e9bKaWr9bjfsyhYvzMG2pIieK7t5V1owb7vQAHtTvLf_pbgadnpEb5lcGbZbZXtsBMfwrQAoZ3r3udQPpnmPtPtfgvqQWdWvuNJDvvpHYyEsfTLft8IkQga-IyC4aXc9o7BAYfvAf_sWegdgYLswY2a2dtqSlQd2cLv2cQZaaOfa16AECIauBIcvt4XIbQEob_sMg8e8YsD4eYdYfYaKlcC6dpO4cNF4cYYEa8CEeU0bckYkYSnOrUiAYEbdsimmcjvkdqerBHp6U8bSroZ2mvjCm2CA7_E0GoGfluNAhAHPX4FQDCX4CuH4B-GLGqEAZ_DJEZBADHX4CVXyGoEY_YH4CTavICnWH4HKARggBmAVkE-LmqjwjnQ47nUwDJEoESFzDyD8KEkeqLD-FLDE-rH4B9Tk5UB6X_DgEM4sAk5gDvXAwhvgEE7Mwk8klM4AD0EprTRPuOVwIlNR3OEorIcBo7gurOaw_OzRLRIgAuguQuEogjNrTj9PcBdBIAUgLOKPtAX47iwIlIQA76THaBGPmPTR4SdOYk5h-B5AFBJYgA",mdxType:"Playground"},Object(c.b)("h4",null,"Check the bottom right of the screen"),Object(c.b)(m,{icon:Object(c.b)("span",null,"+"),mainButtonStyles:{backgroundColor:"#e74c3c"},mdxType:"Fab"},Object(c.b)(r,{text:"Add Something",style:{backgroundColor:"#3498db"},onClick:function(){return alert("It works!")},mdxType:"Action"},"+"),Object(c.b)(r,{text:"Assign Something",style:{backgroundColor:"#3498db"},onClick:function(){return alert("It still works!")},mdxType:"Action"},"="))),Object(c.b)("p",null,"Here is an example of how you would use the components:"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'// The Fab is the main button. Pass any component to the icon prop and choose \n// either click or hover for the event (default is hover)\n<Fab\n  mainButtonStyles={mainButtonStyles}\n  actionButtonStyles={actionButtonStyles}\n  position={position}\n  icon={<MdAdd />}\n  event={event}\n  alwaysShowTitle={true}\n  onClick={someFunctionForTheMainButton}\n>\n  // The Action components are the "buttons" that appear when the Fab is open. You can use the out-of-the-box Action \n  // component or you can use a custom component of any type and style it any way that you\'d like. The "text" prop\n  // is the popup label that appears when the Action component is hovered.\n  <Action\n    text="Email"\n    onClick={handleEmailOnClick}\n  >\n  <Action\n      text="Help"\n      onClick={handleHelpOnClick}\n    >\n    <i className="fa fa-help" />\n  </Action>\n  // Using a custom component for this one. See another example in "example/src/index.js"\n  <SomeCustomComponent\n    text="Foobar!"\n    onClick={handleTheFooBarOnClick}\n  >\n      <i className="fa fa-foo-bar-fa-foo" />\n    </SomeCustomComponent>\n</Fab>\n')),Object(c.b)("h2",{id:"components"},"Components"),Object(c.b)("h3",{id:"fab-"},Object(c.b)("inlineCode",{parentName:"h3"},"<Fab />")),Object(c.b)("p",null,"This is the main component that controls the Floating Action Button."),Object(c.b)("h4",{id:"props"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"mainButtonStyles")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"React.CSSProperties object"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"{}"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"This object is passed to the main button's ",Object(c.b)("inlineCode",{parentName:"td"},"style")," prop so use React styles to style the button.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"position")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"object"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"{ bottom: 24, right: 24 }")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Where do you want your FAB to be located? Use ",Object(c.b)("inlineCode",{parentName:"td"},"top"),", ",Object(c.b)("inlineCode",{parentName:"td"},"left"),", ",Object(c.b)("inlineCode",{parentName:"td"},"bottom"),", ",Object(c.b)("inlineCode",{parentName:"td"},"right")," properties to declare where you want the FAB to be positioned.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"icon")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"React Element/Component"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"true"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"This element/component will be the used as the icon for the main button. This can be text, or a Font Awesome icon, or any other component.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"event")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"'hover'"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"What type of event do you want to make the FAB menu active? This can be either ",Object(c.b)("inlineCode",{parentName:"td"},"click")," or ",Object(c.b)("inlineCode",{parentName:"td"},"hover"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"children")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"React Element/Component"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"This is the children that will be mapped and rendered. This can be anything. There can be up to 6, but no more than 6. An ",Object(c.b)("inlineCode",{parentName:"td"},"Action")," component is provided out of the box.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"alwaysShowTitle")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"If the title of the ",Object(c.b)("inlineCode",{parentName:"td"},"Action")," component should always be shown (not just on hover), set this to true and the title will always be shown")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"onClick")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"null"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"If you only need to use the main button for something, then you can attach an ",Object(c.b)("inlineCode",{parentName:"td"},"onClick")," handler to the main button. The React Synthetic Event will be passed in just like a normal ",Object(c.b)("inlineCode",{parentName:"td"},"onClick"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"text")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"null"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"If you attach an ",Object(c.b)("inlineCode",{parentName:"td"},"onClick")," handler to the main button, then the original ",Object(c.b)("inlineCode",{parentName:"td"},"Action")," components would not show. Instead you can attach ",Object(c.b)("inlineCode",{parentName:"td"},"text")," to display while user hover the FAB")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Based on the ",Object(c.b)("inlineCode",{parentName:"p"},"position")," prop, the FAB will figure out the direction of the ",Object(c.b)("inlineCode",{parentName:"p"},"<Action />")," ",Object(c.b)("inlineCode",{parentName:"p"},"text")," and also which way to\nexpand when hovered/clicked (up or down).")),Object(c.b)("h3",{id:"action-"},Object(c.b)("inlineCode",{parentName:"h3"},"<Action />")),Object(c.b)("p",null,'This component represents the smaller buttons that appear when the main button is hovered/clicked. Now, you do not have\nto use this component. You can use your own custom component(s) and create something totally different than a Floating\nAction Button. For instance, you could create your own "Support Button" that when clicked, will display a chat box or\nsome type of form that submits a contact request.'),Object(c.b)("h4",{id:"props-1"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Prop"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object.assign({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"text")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),'""'),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"This is the text that will be displayed when one of the actions is hovered.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"children")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"React Element/Component"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"This will be the icon/text for the action.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"...props")),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Anything"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null})),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"false"),Object(c.b)("td",Object.assign({parentName:"tr"},{align:null}),"Anything you can add to a React component, you can add here, e.g. (",Object(c.b)("inlineCode",{parentName:"td"},"onClick"),", ",Object(c.b)("inlineCode",{parentName:"td"},"style"),", etc.)")))),Object(c.b)("h2",{id:"demo"},"Demo"),Object(c.b)("p",null,"Check out the ",Object(c.b)("inlineCode",{parentName:"p"},"index.html")," file in the ",Object(c.b)("inlineCode",{parentName:"p"},"example")," folder for an example of the traditional FAB and also a form pop-up that could be used to send contact information, or something else."),Object(c.b)("h2",{id:"contributing"},"Contributing"),Object(c.b)("p",null,"If you find a bug, submit an issue with enough information to reproduce the bug. If you have a fix, please do not hesitate to submit a PR. If you feel that the API needs to be modified, open an issue so that we can discuss it first."),Object(c.b)("h3",{id:"running-the-dev-environment"},"Running the dev environment"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Clone the repo - ",Object(c.b)("inlineCode",{parentName:"li"},"git clone https://github.com/dericgw/react-tiny-fab.git")," && ",Object(c.b)("inlineCode",{parentName:"li"},"cd react-tiny-fab")),Object(c.b)("li",{parentName:"ol"},"Install the dependencies - ",Object(c.b)("inlineCode",{parentName:"li"},"npm i")),Object(c.b)("li",{parentName:"ol"},"Run the example - ",Object(c.b)("inlineCode",{parentName:"li"},"npm start")," ",Object(c.b)("em",{parentName:"li"},"Visit http://localhost:5000"))),Object(c.b)("p",null,"Once you get that going, you should be able to make changes and the page should refresh automatically when those changes are saved."),Object(c.b)("h3",{id:"testing"},"Testing"),Object(c.b)("p",null,"This package is only one JS file and it is tested pretty good. Make sure that none of the tests are breaking if changes\nare made. Also, if you add new functionality and it ",Object(c.b)("em",{parentName:"p"},"warrants")," testing, please add tests. If you need help with this, I\nwill gladly help."),Object(c.b)("h2",{id:"issues"},"Issues"),Object(c.b)("p",null,"If you find an issue, head over to the Issues section and let me know about it. If you want to be super cool, you can submit a PR that fixes the issue."),Object(c.b)("h2",{id:"license-mit"},"License (MIT)"),Object(c.b)("p",null,Object(c.b)("a",Object.assign({parentName:"p"},{href:"./LICENSE.md"}),"Check it out here.")))}j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/example.mdx"}}),j.isMDXComponent=!0},"./src/styles.scss":function(e,t,n){}}]);
//# sourceMappingURL=src-example.6a6391bdacfae9c0dcbe.js.map