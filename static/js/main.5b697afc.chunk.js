(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={header:"Searchbar_header__2rfPG",inputWrapper:"Searchbar_inputWrapper__njQgP",label:"Searchbar_label__7Dzee",icon:"Searchbar_icon__3a5pq",input:"Searchbar_input__2mPvn"}},13:function(e,t,a){e.exports={backdrop:"Modal_backdrop__31rpU",modal:"Modal_modal__3KYZI",button:"Modal_button__1OX1I",close:"Modal_close__cKYyZ"}},16:function(e,t,a){e.exports={item:"ImageGalleryItem_item__OsAvu"}},17:function(e,t,a){e.exports={wrapper:"Loader_wrapper__1RZ9M",loader:"Loader_loader__1Izfm"}},30:function(e,t,a){e.exports={list:"ImageGallery_list__-uIIL"}},32:function(e,t,a){e.exports={button:"ButtonMore_button__1DPFc"}},38:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(5),c=a.n(o),s=(a(38),a(18)),l=a(10),i=a.n(l),u=a(12),d=a(6),p=a(7),h=a(9),m=a(8),b=(a(40),a(86)),g=a(27),f=a(28),j=a(11),v=a.n(j),y=a(2),O=document.querySelector("#header-root"),_=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:null},e.onChange=function(t){var a=t.target.value;e.setState({value:a}),e.props.handleQuery(a)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=Object(b.a)();return Object(o.createPortal)(Object(y.jsx)("header",{className:v.a.header,children:Object(y.jsx)("div",{className:v.a.inputWrapper,children:Object(y.jsxs)("label",{htmlFor:e,className:v.a.label,children:[Object(y.jsx)(f.a,{className:v.a.icon}),Object(y.jsx)(g.DebounceInput,{className:v.a.input,debounceTimeout:750,id:e,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.value,onChange:this.onChange})]})})}),O)}}]),a}(n.Component),x=a(29),k=a.n(x),C="https://pixabay.com/api/",w="21989340-5677ac132e2fa2f040ad0925d",I=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,r,o,c=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},a=t.page,n=void 0===a?1:a,r=t.query,e.prev=1,e.next=4,k()("".concat(C,"?q=").concat(r,"&page=").concat(n,"&key=").concat(w,"&image_type=photo&orientation=horizontal&per_page=").concat(12));case 4:return o=e.sent,e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),S=a(16),M=a.n(S),q=function(e){var t=e.url,a=e.tags,n=e.onClick,r=e.largeImage;return Object(y.jsx)("li",{className:M.a.item,children:Object(y.jsx)("img",{className:M.a.image,src:t,alt:a,onClick:function(){return n(r)}})})},N=a(30),L=a.n(N),E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(e){e.images!==this.props.images&&this.props.images.length>12&&window.matchMedia("(min-width: 1600px)").matches&&window.scrollTo({top:document.documentElement.scrollHeight-1090,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props,t=e.images,a=e.handleClickImage;return Object(y.jsx)("ul",{className:L.a.list,children:t.map((function(e){return Object(y.jsx)(q,{url:e.webformatURL,largeImage:e.largeImageURL,tags:e.tags,onClick:a},"".concat(e.id," ").concat(e.webformatURL))}))})}}]),a}(n.Component),U=a(31),P=a(13),B=a.n(P),D=document.querySelector("#modal-root"),H=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getTags=function(){var t=e.props,a=t.url,n=t.images.find((function(e){return e.largeImageURL===a}));if(n)return n.tags},e.handleEscClose=function(t){"Escape"===t.code&&e.props.handleCloseModal()},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleEscClose),document.body.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleEscClose),document.body.style.overflow="auto"}},{key:"render",value:function(){var e=this.props,t=e.handleBackdropClose,a=e.handleCloseModal,n=e.url;return Object(o.createPortal)(Object(y.jsxs)("div",{className:B.a.backdrop,onClick:function(e){return t(e)},children:[Object(y.jsx)("button",{className:B.a.button,type:"button","aria-label":"Close",onClick:a,children:Object(y.jsx)(U.a,{className:B.a.close})}),Object(y.jsx)("div",{className:B.a.modal,children:Object(y.jsx)("img",{src:n,alt:this.getTags()})})]}),D)}}]),a}(n.Component),Q=a(32),R=a.n(Q),A=function(e){var t=e.handleClickLoadMore;return Object(y.jsx)("button",{className:R.a.button,type:"button",onClick:t,children:"Load more"})},F=a(33),G=a.n(F),T=a(17),W=a.n(T),z=document.querySelector("#loading-root"),Z=function(){return Object(o.createPortal)(Object(y.jsx)("div",{className:W.a.wrapper,children:Object(y.jsx)(G.a,{className:W.a.loader,type:"Oval",color:"#3faae5",height:75,width:75})}),z)},J=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:null,page:1,images:[],quantityImages:0,totalHits:0,selectedImage:null,status:"idle"},e.handleQuery=function(t){var a=t.trim().split(" ").filter((function(e){return""!==e&&" "!==e})).join("+");e.setState({query:a})},e.handleClickImage=function(t){e.setState({selectedImage:t})},e.handleCloseModal=function(){e.setState({selectedImage:null})},e.handleBackdropClose=function(t){"IMG"!==t.target.nodeName&&e.handleCloseModal()},e.handleClickLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r,o,c,l,d,p=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.setState({status:"pending"}),e.next=3,I({page:t,query:a});case 3:return n=e.sent,p.setState({totalHits:n.data.totalHits}),e.abrupt("return",n.data.hits);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r=this.state,o=r.page,c=r.query,l=function(e){a.page!==o&&p.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(e))}})),a.query!==c&&p.setState({images:e})},a.query===c&&a.page===o){e.next=14;break}if(!(""===c.trim()||c.length<2)){e.next=6;break}return e.abrupt("return");case 6:if(!(a.query!==c&&o>1)){e.next=9;break}return this.setState({page:1,images:[]}),e.abrupt("return");case 9:return e.next=11,n(o,c);case 11:d=e.sent,l(d),this.setState({quantityImages:this.state.images.length,status:"resolved"});case 14:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedImage,a=e.images,n=e.status,r=e.quantityImages,o=e.totalHits,c=a.length>0&&r<o,s="pending"===n;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(_,{handleQuery:this.handleQuery}),s&&Object(y.jsx)(Z,{}),Object(y.jsx)(E,{images:a,handleClickImage:this.handleClickImage}),c&&Object(y.jsx)(A,{handleClickLoadMore:this.handleClickLoadMore}),t&&Object(y.jsx)(H,{url:t,images:a,handleCloseModal:this.handleCloseModal,handleBackdropClose:this.handleBackdropClose})]})}}]),a}(n.Component);c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(J,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.5b697afc.chunk.js.map