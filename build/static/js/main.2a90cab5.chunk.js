(this["webpackJsonpspotify-party-playlist"]=this["webpackJsonpspotify-party-playlist"]||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},221:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),r=a(114),i=a.n(r),o=(a(123),a(124),a(54)),u=a(4);a(125);var l=function(){var e=["user-modify-playback-state","user-read-private"];return Object(n.jsx)("div",{className:"login-page",children:Object(n.jsxs)("div",{className:"login-container",children:[Object(n.jsx)("div",{className:"song-info-contianer"}),Object(n.jsxs)("div",{className:"login-form",children:[Object(n.jsx)("div",{className:"login-title-container",children:Object(n.jsx)("h1",{className:"login-title",children:"Spotify Party Playlist"})}),Object(n.jsx)("div",{className:"sub-text-container",children:Object(n.jsx)("label",{className:"sub-text",children:"Listen with people across the World!"})}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("input",{type:"button",className:"login-button",value:"Sign in with Spotify",onClick:function(){window.location="https://accounts.spotify.com/authorize?client_id=".concat("fed439839ee84e649c42cd5827f4bee2","&redirect_uri=").concat("https://spotify-queue-party.herokuapp.com/queue","&scope=").concat(e.join("%20"),"&response_type=token&show_dialog=true")}})})]})]})})},d=a(30),h=a.n(d),p=a(55),j=a(38),m=a(16),b=a(12),f=a.n(b),O=a(115),g=a.n(O),x=a(15),y=a.n(x);var v=function(e){var t=e.textField,a=e.updateList,c=e.songSelected,r=e.songs,i=e.clearSongs,o=Object(s.useRef)();Object(s.useEffect)((function(){return document.addEventListener("mousedown",u,!1),function(){document.removeEventListener("mousedown",u)}}),[]);var u=function(e){o.current.contains(e.target)||i()};return Object(n.jsxs)("div",{ref:o,className:"text-field-container",children:[Object(n.jsx)("input",{type:"text",value:t,placeholder:"Search for song or enter a uri",className:"song-text-field",onChange:a}),0!=r.length&&Object(n.jsx)("ul",{children:r.map((function(e){return Object(n.jsx)("li",{onClick:function(){return c(e)},children:e.name})}))})]})},k=a(116),w=a.n(k)()();a(221);var _=function(e){var t=e.queueList;return Object(n.jsxs)("div",{className:"list-container",children:[Object(n.jsx)("label",{className:"queue-title",children:"Queue Session History"}),Object(n.jsx)("table",{id:"queue-table",children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.image,width:"40",height:"40"})}),Object(n.jsx)("td",{children:e.track}),Object(n.jsx)("td",{children:e.artist}),Object(n.jsx)("td",{children:e.name})]})}))})]})};var N=function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),i=Object(m.a)(r,2),o=i[0],l=i[1],d=y.a.parse(window.location.hash),b=Object(s.useState)([]),O=Object(m.a)(b,2),x=O[0],k=O[1],N=Object(s.useState)(""),S=Object(m.a)(N,2),q=S[0],A=S[1],B=Object(s.useState)([]),z=Object(m.a)(B,2),L=z[0],E=z[1],Q=Object(s.useState)([]),U=Object(m.a)(Q,2),C=U[0],M=U[1],F=Object(s.useState)(),J=Object(m.a)(F,2),P=J[0],W=J[1],H=Object(u.f)();function I(){return R.apply(this,arguments)}function R(){return(R=Object(p.a)(h.a.mark((function e(){var t,a,n,s,c,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.allorigins.win/raw?url=","https://www.billboard.com/charts/hot-100",e.next=4,f.a.get("https://api.allorigins.win/raw?url=https://www.billboard.com/charts/hot-100");case 4:return t=e.sent,null,n=t.data,s=g.a.load(n),c=[],s("ol[class='chart-list__elements']").find("span[class='chart-element__information__song text--truncate color--primary']").each((function(e,t){c.push(t.children[0].data)})),r=[],s("ol[class='chart-list__elements']").find("span[class='chart-element__information__artist text--truncate color--secondary']").each((function(e,t){r.push(t.children[0].data)})),i=Math.floor(101*Math.random()),a={artist:r[i],song:c[i]},e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){return w.on("userUpdate",(function(e){return W(e)})),w.on("broadcastQueue",(function(e){console.log("Broadcasted!"),E((function(t){return[e].concat(Object(j.a)(t))}));var t=y.a.stringifyUrl({url:"https://api.spotify.com/v1/me/player/queue",query:{uri:e.uri}});f.a.post(t,null,{headers:{Authorization:"Bearer "+d.access_token}}).then((function(e){return"Successfuly added"})).catch((function(e){401==e.response.status&&H.push("/")}))})),f.a.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+d.access_token}}).then((function(e){null==e.data.display_name?M("Anonymous"):M(e.data.display_name)})).catch((function(e){401==e.response.status&&H.push("/")})),function(){return w.disconnect()}}),[]);var D=function(){var e=Object(p.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,c(!1),a=y.a.stringifyUrl({url:"https://api.spotify.com/v1/search",query:{q:t.song,type:"track"}}),f.a.get(a,{headers:{Authorization:"Bearer "+d.access_token}}).then((function(e){var t=e.data.tracks.items[0].uri,a=y.a.stringifyUrl({url:"https://api.spotify.com/v1/me/player/queue",query:{uri:e.data.tracks.items[0].uri}}),n={artist:e.data.tracks.items[0].artists[0].name,track:e.data.tracks.items[0].name,image:e.data.tracks.items[0].album.images[e.data.tracks.items[0].album.images.length-1].url,name:C,uri:t};f.a.post(a,null,{headers:{Authorization:"Bearer "+d.access_token}}).then((function(e){console.log("Sucessfully Added"),w.emit("addQueue",n),E((function(e){return[n].concat(Object(j.a)(e))}))})).catch((function(e){401==e.response.status&&H.push("/"),console.log(e.response.data),l(e.response.data.error.message),c(!0),console.log(e)}))})).catch((function(e){401==e.response.status&&H.push("/"),console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"queue-page",children:Object(n.jsxs)("div",{className:"queue-container",children:[Object(n.jsxs)("div",{className:"title-container",children:[Object(n.jsx)("h1",{children:"Welcome to the Queue!"}),Object(n.jsxs)("label",{className:"listener-text",children:[P," ",1==P?"person":"people"," exploring new music together"]})]}),Object(n.jsx)(_,{queueList:L}),Object(n.jsx)("div",{className:"information-container",children:Object(n.jsxs)("div",{className:"form-container",children:[Object(n.jsx)(v,{textField:q,updateList:function(e){c(!1),A(e.target.value);var t=y.a.stringifyUrl({url:"https://api.spotify.com/v1/search",query:{q:e.target.value,type:"track"}});f.a.get(t,{headers:{Authorization:"Bearer "+d.access_token}}).then((function(e){var t=e.data.tracks.items,a=[];t.forEach((function(e){a.push({name:e.name+" by "+e.artists[0].name,uri:e.uri})})),k(a)})).catch((function(e){401==e.response.status&&H.push("/"),k([])}))},songSelected:function(e){A(e.uri),k([])},songs:x,clearSongs:function(){k([])}}),a&&Object(n.jsx)("label",{className:"error-label",children:o}),Object(n.jsx)("input",{className:"add-button",type:"button",value:"Share with the world",onClick:function(){var e=q,t=y.a.stringifyUrl({url:"https://api.spotify.com/v1/me/player/queue",query:{uri:q}});f.a.post(t,null,{headers:{Authorization:"Bearer "+d.access_token}}).then((function(t){f.a.get("https://api.spotify.com/v1/tracks/"+q.substring(14),{headers:{Authorization:"Bearer "+d.access_token}}).then((function(t){var a={artist:t.data.artists[0].name,track:t.data.name,image:t.data.album.images[t.data.album.images.length-1].url,name:C,uri:e};w.emit("addQueue",a),E((function(e){return[a].concat(Object(j.a)(e))}))})),A("")})).catch((function(e){401==e.response.status&&H.push("/"),l(e.response.data.error.message),c(!0)}))}}),Object(n.jsx)("input",{className:"random-button",type:"button",value:"Queue a random song",onClick:D})]})})]})})};var S=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsx)(l,{})}),Object(n.jsx)(u.a,{path:"/queue",children:Object(n.jsx)(N,{})})]})})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[229,1,2]]]);
//# sourceMappingURL=main.2a90cab5.chunk.js.map