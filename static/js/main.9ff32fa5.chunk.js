(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(62)},36:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(26),o=n.n(r),i=(n(36),n(10)),s=n(65),l=n(66),u=n(64),m=n(3),p=n(4),b=n(6),d=n(5),f=n(7),E=(n(43),function(e){var t=e.children,n=e.sidebar;return c.a.createElement("div",{className:"MainTemplate"},n,t)}),k=n(63),h=n(12),O=(n(45),function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.url;return c.a.createElement("aside",{className:"MainSidebar"},c.a.createElement("div",{className:"logo"},"Blog"),c.a.createElement("ul",{className:"menu"},c.a.createElement("li",{className:"/recent"===e?"active":""},c.a.createElement(k.a,{to:"/recent"},c.a.createElement(h.b,null),c.a.createElement("div",{className:"title"},"Home"))),c.a.createElement("li",{className:"/popular"===e?"active":""},c.a.createElement(k.a,{to:"/popular"},c.a.createElement(h.c,null),c.a.createElement("div",{className:"title"},"Popular"))),c.a.createElement("li",{className:"/bookmark"===e?"active":""},c.a.createElement(k.a,{to:"/bookmark"},c.a.createElement(h.a,null),c.a.createElement("div",{className:"title"},"Bookmark")))))}}]),t}(a.Component)),j=n(67),g=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){console.log("MainSidebarContainer",this.props);var e=this.props.match;return c.a.createElement(O,{url:e.url})}}]),t}(a.Component),v=Object(j.a)(g),L=(n(48),function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.url;return c.a.createElement("aside",{className:"MainHeader"},c.a.createElement("div",{className:"logo"},"Blog"),c.a.createElement("ul",{className:"menu"},c.a.createElement("li",{className:"/recent"===e?"active":""},c.a.createElement(k.a,{to:"/recent"},c.a.createElement(h.b,null))),c.a.createElement("li",{className:"/popular"===e?"active":""},c.a.createElement(k.a,{to:"/popular"},c.a.createElement(h.c,null))),c.a.createElement("li",{className:"/bookmark"===e?"active":""},c.a.createElement(k.a,{to:"/bookmark"},c.a.createElement(h.a,null)))))}}]),t}(a.Component)),y=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.match;return c.a.createElement(L,{url:e.url})}}]),t}(a.Component),S=Object(j.a)(y),I=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Popular")}}]),t}(a.Component),N=(n(50),function(e){var t=e.children;return c.a.createElement("div",{className:"BookmarkTemplate"},t)}),T=(n(52),n(54),function(e){return c.a.createElement("div",{className:"PostCard"},c.a.createElement("a",{className:"card-image",href:"bookmark"},c.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(e.imgSrc,")")}})),c.a.createElement("div",{className:"title"},e.title),c.a.createElement("div",{className:"buttons"},e.buttons))}),P=(n(56),n(21)),B="GET_POST_LIST",w="RECEIVE_POST_LIST",C="SET_POST_LIST",_="ADD_POST",D="TOGGLE_LIKE",M="TOGGLE_BOOKMARK",A="SET_FILTER",J="GET_FILTERED_LIST",R="SHOW_ALL";function W(e){return{type:_,postItem:e}}function F(e){return{type:D,postId:e}}function G(e){return{type:M,postId:e}}function K(e,t){return"SHOW_ALL"===t?e:"SHOW_POPULAR"===t?e:"SHOW_BOOKMARKED"===t?e.filter(function(e){return e.isBookmark}):e}var x=function(e){return console.log(e),e.isLiked?c.a.createElement("span",{className:"clicked",onClick:function(){e.dispatch(F(e.postId))}},c.a.createElement(P.a,null)):c.a.createElement("span",{className:"unclicked",onClick:function(){e.dispatch(F(e.postId))}},c.a.createElement(P.b,null))},H=x=Object(i.b)()(x),U=(n(58),n(22)),Y=function(e){return e.isBookmark?c.a.createElement("span",{className:"clicked",onClick:function(){e.dispatch(G(e.postId))}},c.a.createElement(U.a,null)):c.a.createElement("span",{className:"unclicked",onClick:function(){e.dispatch(G(e.postId))}},c.a.createElement(U.b,null))},q=Y=Object(i.b)()(Y),V=function(e){var t=e.postInfo;return c.a.createElement(T,{key:(new Date).getTime(),imgSrc:t.imgSrc,title:t.title,buttons:[c.a.createElement(H,{key:"".concat((new Date).getTime(),"-like"),isLiked:t.isLiked,postId:t.postId}),c.a.createElement(q,{key:"".concat((new Date).getTime(),"-bookmark"),isBookmark:t.isBookmark,postId:t.postId})]})},$=function(e){return console.log("PostCardList",e),c.a.createElement("div",{id:"PostCardList"},c.a.createElement("div",{className:"post-card-list"},e.postList.map(function(e,t){return c.a.createElement(V,{key:"".concat(e.title,"-").concat(t),postInfo:e})})))},z=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.setFilter("SHOW_BOOKMARKED"),this.props.getFilteredList(this.props.postList,this.props.filter)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Bookmark Post"),c.a.createElement($,{postList:this.props.postList}))}}]),t}(a.Component),Q=z=Object(i.b)(function(e){return console.log("mapStateToProps",e),{postList:e.postList,filter:e.filter}},function(e){return{addPost:function(t){e(W(t))}}})(z),X=(a.Component,Object(i.b)(function(e){return console.log("bookmark mapStateToProps",e),{postList:e.postList,filter:e.filter}},function(e){return{setFilter:function(t){e(function(e){return{type:A,filter:e}}(t))},getFilteredList:function(t,n){e(function(e,t){return{type:J,postList:K(e,t)}}(t,n))}}})(Q)),Z=(n(60),function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getPostList()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Recent Post"),c.a.createElement($,{postList:this.props.postList}))}}]),t}(a.Component)),ee=Z=Object(i.b)(function(e){return console.log("mapStateToProps",e),{postList:e.postList}},function(e){return{addPost:function(t){e(W(t))}}})(Z),te=Object(i.b)(function(e){return console.log("mapStateToProps",e),{postList:e.postList}},function(e){return{addPost:function(t){e(W(t))},setPostList:function(t){e(function(e){return{type:C,postList:e}}(t))},getPostList:function(){e({type:B,isFetching:!0})}}})(ee),ne=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(E,{sidebar:c.a.createElement(v,null)},c.a.createElement(S,null),c.a.createElement(l.a,null,c.a.createElement(u.a,{path:"/recent",component:te}),c.a.createElement(u.a,{path:"/popular",component:I}),c.a.createElement(u.a,{path:"/bookmark",component:X})))}}]),t}(a.Component),ae=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(ne,null)}}]),t}(a.Component),ce=function(){return c.a.createElement(l.a,null,c.a.createElement(u.a,{exact:!0,path:"/",component:ae}),c.a.createElement(u.a,{path:"/:mode(recent|popular|bookmark)",component:ae}))},re=n(14),oe=n(23),ie=n(18),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log(e,t),t.type){case C:return Object(ie.a)(t.postList);case B:return[{postId:1,title:"Jessica Jones with remarkable abilities in New York City.",imgSrc:"https://mblogthumb-phinf.pstatic.net/20160414_22/shgusgnl66_14606201040627JSqU_JPEG/Marvels.Jessica.Jones.S01E05.AKA.The.Sandwich.Saved.Me.720p.NF.WEBRip.DD5.1.x264.JPG?type=w2",isLiked:!0,isBookmark:!1},{postId:2,title:"Stranger Things season 3 is comming this summer.",imgSrc:"https://i.pinimg.com/originals/f9/60/a0/f960a0b17088c116e2b154de877b94c7.gif",isLiked:!0,isBookmark:!0},{postId:3,title:"You can find out Silver Lining.",imgSrc:"https://i-h1.pinimg.com/564x/ef/cc/ab/efccab1f0c3192f98be0b6000b1e94e7.jpg",isLiked:!0,isBookmark:!0},{postId:4,title:"Call me by your name",imgSrc:"https://i-h1.pinimg.com/564x/a5/ae/12/a5ae12f19bd35ef6d16bbfb3c26b5bea.jpg",isLiked:!1,isBookmark:!0},{postId:5,title:"Love or Death",imgSrc:"https://i-h1.pinimg.com/564x/2b/e3/a4/2be3a481ee89631eb17b136ed2e122d0.jpg",isLiked:!0,isBookmark:!1},{postId:6,title:"Who is Blue??!",imgSrc:"https://i-h1.pinimg.com/564x/1e/59/ab/1e59ab634dab7cea100b8b1e36ba79d7.jpg",isLiked:!0,isBookmark:!0}];case J:return Object(ie.a)(t.postList);case w:return t;case _:return[].concat(Object(ie.a)(e),[t.postItem]);case D:return e.map(function(e){return e.postId===t.postId?Object(oe.a)({},e,{isLiked:!e.isLiked}):e});case M:return e.map(function(e){return e.postId===t.postId?Object(oe.a)({},e,{isBookmark:!e.isBookmark}):e});default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return t.filter;default:return e}},ue=Object(re.b)({postList:se,filter:le}),me=Object(re.c)(ue),pe=function(){return c.a.createElement(i.a,{store:me},c.a.createElement(s.a,null,c.a.createElement(ce,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.9ff32fa5.chunk.js.map