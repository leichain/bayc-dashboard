(this["webpackJsonpnft-market-demo"]=this["webpackJsonpnft-market-demo"]||[]).push([[0],{209:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},214:function(e,t,a){},239:function(e,t,a){},262:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},390:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(13),o=a.n(r),i=(a(209),a(11)),s=a(7),l=a.n(s),d=a(26),u=a(4),j=(a(211),a(27)),b=a(6),m=(a(212),a(1)),h=function(e){var t=e.options,a=e.onChange,c=e.id;return Object(m.jsx)("select",{className:"select",onChange:a,children:t.map((function(e,t){return Object(m.jsx)("option",{selected:c==e.value?"selected":"",value:e.value,children:e.name},t)}))})},v=a(9),O=(a(214),a(394)),_={TEMPLATE:{collection_address:"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",block_chain_id:"1",title:"My BAYC Dashboard",timeseries_chart:!0,banner_picture:"https://lh3.googleusercontent.com/Czn9y9yAUpvuI6SGoVSnNe29_kZ84Ey_9saCrdpA7a5j2_8IWlUFSBM3_GMkjBPmbG8AS1jWtrzgQG4nCsyAlR_VtEI0fXMeKD8ILA=w600"},FILTER_OPTIONS:[{name:"Ethereum",value:1},{name:"Polygon",value:137},{name:"Avalanche",value:43114},{name:"Fantom",value:250},{name:"Moonbeam",value:1284},{name:"Moonriver",value:1285},{name:"Arbitrum",value:42161},{name:"Shiden",value:336}],GRAPH_OPTIONS:[{name:"7 Days",value:7},{name:"1 Month",value:30},{name:"3 Month",value:90},{name:"1 Year",value:365},{name:"All time",value:0}]},p=function(e){var t=e.data,a=e.onClick,n=e.color,r=(e.load,Object(c.useState)({key:"",direction:""})),o=Object(u.a)(r,2),i=o[0],s=o[1],l=Object(c.useState)(null),d=Object(u.a)(l,2),j=d[0],b=d[1],h=Object(c.useRef)();Object(c.useEffect)((function(){void 0!==h.current&&h.current.scrollIntoView({behavior:"smooth"})})),Object(c.useEffect)((function(){b(p())}),[i]);var p=function(){var e=Object(v.a)(t);return e.sort((function(e,t){return e[i.key]<t[i.key]?"ascending"===i.direction?-1:1:e[i.key]>t[i.key]?"ascending"===i.direction?1:-1:0})),e},x=function(e){var t="ascending";i.key===e&&"ascending"===i.direction&&(t="descending"),s({key:e,direction:t})},f=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(m.jsxs)("table",{className:"table",children:[Object(m.jsxs)("tr",{className:"title-row",children:[Object(m.jsx)("th",{className:"collection-name",children:Object(m.jsxs)("div",{className:"tableHeader-collection",children:["Collection",Object(m.jsx)(O.a,{icon:"collection_name"===i.key&&"descending"===i.direction?"chevron-down":"collection_name"===i.key&&"ascending"===i.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("collection_name")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["Market Cap",Object(m.jsx)(O.a,{icon:"market_cap_quote"===i.key&&"descending"===i.direction?"chevron-down":"market_cap_quote"===i.key&&"ascending"===i.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("market_cap_quote")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["24hr Volume",Object(m.jsx)(O.a,{icon:"volume_quote_24h"===i.key&&"descending"===i.direction?"chevron-down":"volume_quote_24h"===i.key&&"ascending"===i.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("volume_quote_24h")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["24hr Avg Price",Object(m.jsx)(O.a,{icon:"avg_volume_quote_24h"===i.key&&"descending"===i.direction?"chevron-down":"avg_volume_quote_24h"===i.key&&"ascending"===i.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("avg_volume_quote_24h")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["# Transaction",Object(m.jsx)(O.a,{icon:"transaction_count_alltime"===i.key&&"descending"===i.direction?"chevron-down":"transaction_count_alltime"===i.key&&"ascending"===i.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("transaction_count_alltime")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["# Wallets",Object(m.jsx)(O.a,{icon:"unique_wallet_purchase_count_alltime"===i.key&&"descending"===i.direction?"chevron-down":"unique_wallet_purchase_count_alltime"===i.key&&"ascending"===i.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("unique_wallet_purchase_count_alltime")}})]})})]}),j&&j.map((function(e,t){return""==e.collection_name&&console.log(),Object(m.jsx)(m.Fragment,{children:e.collection_address===_.TEMPLATE.collection_address?Object(m.jsxs)("tr",{ref:h,className:"active",style:{backgroundColor:n},onClick:function(){a(e.collection_address)},children:[Object(m.jsx)("td",{className:"collection-name",style:{fontWeight:"600"},children:""!==e.collection_name?e.collection_name:e.collection_address}),Object(m.jsx)("td",{className:"table-data-active",children:e.market_cap_quote?f.format(e.market_cap_quote).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.volume_quote_24h?f.format(e.volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.avg_volume_quote_24h?f.format(e.avg_volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.transaction_count_alltime?e.transaction_count_alltime.toLocaleString():0}),Object(m.jsx)("td",{className:"table-data-active",children:e.unique_wallet_purchase_count_alltime?e.unique_wallet_purchase_count_alltime.toLocaleString():0})]},t):Object(m.jsxs)("tr",{className:"data-row",onClick:function(){a(e.collection_address)},children:[Object(m.jsx)("td",{className:"collection-name",style:{fontWeight:"600"},children:""!==e.collection_name?e.collection_name:e.collection_address}),Object(m.jsx)("td",{className:"table-data",children:e.market_cap_quote?f.format(e.market_cap_quote).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.volume_quote_24h?f.format(e.volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.avg_volume_quote_24h?f.format(e.avg_volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.transaction_count_alltime?e.transaction_count_alltime.toLocaleString():0}),Object(m.jsx)("td",{className:"table-data",children:e.unique_wallet_purchase_count_alltime?e.unique_wallet_purchase_count_alltime.toLocaleString():0})]},t)})}))]})},x=(a(239),a.p+"static/media/Covalent-Background_5.cc7bc02b.jpg"),f=function(e){var t=e.head,a=e.subhead,c=e.img,n=e.color,r=Object(b.f)();return Object(m.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(c||x,")")},children:Object(m.jsxs)("div",{className:"banner-section",onClick:function(){r.push("/")},children:[Object(m.jsx)("div",{className:"banner-logo"}),Object(m.jsxs)("div",{className:"banner-header",children:[Object(m.jsx)("h3",{style:{color:n?"white":"#FF4C8B"},children:a}),Object(m.jsxs)("div",{className:"banner-title",children:[Object(m.jsx)("h1",{children:t}),Object(m.jsx)("div",{className:"tag",style:{backgroundColor:n},children:"Beta"})]})]})]})})};f.defaultProps={head:"Head",subhead:"SubHead",img:x};var g=f,k=(a.p,a.p+"static/media/covalent-logo-loop_dark_v2.d4efb9c1.gif"),y=a(21),N=a.n(y),E=a(39);a(262);function T(e){var t=e.light,a=(e.dark,e.vibrant),n=Object(b.f)(),r=Object(c.useState)(_.TEMPLATE.block_chain_id),o=Object(u.a)(r,2),i=o[0],s=o[1],j=Object(c.useState)([]),v=Object(u.a)(j,2),x=v[0],f=v[1],y=Object(c.useState)(!0),T=Object(u.a)(y,2),C=T[0],S=T[1];Object({NODE_ENV:"production",PUBLIC_URL:"/bayc-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COVALENT_API;Object(E.a)(N.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}}),Object(c.useEffect)((function(){A(i)}),[i]);var A=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,N.a.get("https://api.covalenthq.com/v1/".concat(t,"/nft_market/"),{auth:{username:"ckey_docs"}});case 4:a=e.sent,console.log(a.data.data.items),f(a.data.data.items),S(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==_.TEMPLATE.banner_picture?_.TEMPLATE.banner_picture:null,head:_.TEMPLATE.title,subhead:"Code Template",color:a}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"back",style:{color:t||"#FF4C8B"},onClick:function(){n.goBack()},children:[Object(m.jsx)(O.a,{icon:"chevron-left",size:24,intent:"primary",color:t||"#FF4C8B",className:"icon"}),"Back"]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"select-chain",children:Object(m.jsx)(h,{options:_.FILTER_OPTIONS,onChange:function(e){s(e.target.value)},id:_.TEMPLATE.block_chain_id})}),C?Object(m.jsx)("div",{className:"load",children:Object(m.jsx)("img",{src:k})}):Object(m.jsx)(p,{onClick:function(e){e!==_.TEMPLATE.collection_address?n.push("/collection/".concat(e,"/").concat(i)):n.goBack()},data:x,load:C,color:a})]})]})]})}var C=a(3),S=(a.p,a(263),a(141)),A=(a(264),function(e){var t={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"white",font:{size:14},margin:"20px"}}},scales:{A:{title:"USD",type:"linear",position:"left",ticks:{color:"#FF4C8B",callback:function(e,t,a){return parseInt(e)>=1e3?"$"+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"$"+e}}},B:{type:"linear",position:"right",ticks:{color:"#00D8D5",max:1,min:0}},x:{ticks:{color:"white"}}}},a={datasets:[{label:"Floor Price Quote 7 Days USD ($) ",yAxisID:"A",data:e.quote,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Floor Price ETH 7 Days",yAxisID:"B",data:e.wei,borderColor:"rgb(\t0\t,216,\t213)",backgroundColor:"rgba(\t0,\t216\t,213, 0.5)"}]};return Object(m.jsx)(S.a,{options:t,data:a})}),F=(a(265),a(88)),w=a.n(F);function P(e){var t,a,n,r,o,i,s,j,p=e.light,x=e.vibrant,f=(e.dark,Object(c.useState)([])),y=Object(u.a)(f,2),T=y[0],S=y[1],F=Object(c.useState)([]),P=Object(u.a)(F,2),q=P[0],L=P[1],M=Object(c.useState)([]),B=Object(u.a)(M,2),D=B[0],I=B[1],H=Object(c.useState)(!0),R=Object(u.a)(H,2),z=R[0],U=R[1],V=Object(c.useState)(!0),W=Object(u.a)(V,2),Y=W[0],G=W[1],K=Object(c.useState)([]),J=Object(u.a)(K,2),$=J[0],Q=J[1],X=Object(c.useState)(!1),Z=Object(u.a)(X,2),ee=Z[0],te=Z[1],ae=Object(b.f)(),ce=w()().format("YYYY-MM-DD"),ne=Object(b.g)(),re=ne.address,oe=ne.id,ie=oe||_.TEMPLATE.block_chain_id,se=re||_.TEMPLATE.collection_address;Object(E.a)(N.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}});var le=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});Object({NODE_ENV:"production",PUBLIC_URL:"/bayc-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COVALENT_API;Object(c.useEffect)((function(){ue(),je()}),[]);var de=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),te(!1),L([]),I([]),a=w()().subtract(t,"days").format("YYYY-MM-DD"),c=t>0?"https://api.covalenthq.com/v1/".concat(ie,"/nft_market/collection/").concat(se,"/?from=").concat(a,"&to=").concat(ce,"&key=ckey_docs"):"https://api.covalenthq.com/v1/".concat(ie,"/nft_market/collection/").concat(se,"/?to=").concat(ce,"&key=ckey_docs"),e.prev=6,e.next=9,N.a.get(c);case 9:n=e.sent,L(n.data.data.items.map((function(e){return{x:e.opening_date,y:e.floor_price_quote_7d}})).reverse()),I(n.data.data.items.map((function(e){return{x:e.opening_date,y:e.floor_price_wei_7d/Math.pow(10,18)}})).reverse()),te(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),te(!0);case 18:G(!1);case 19:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://api.covalenthq.com/v1/".concat(ie,"/nft_market/collection/").concat(se,"/?&key=ckey_docs"));case 3:t=e.sent,Q(Object(v.a)(t.data.data.items)),""===_.TEMPLATE.title||re||(_.TEMPLATE.title="".concat(""!==t.data.data.items[0].collection_name?t.data.data.items[0].collection_name:_.TEMPLATE.title," Dashboard")),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:_.TEMPLATE.timeseries_chart&&de(7);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c,n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,N.a.get("https://api.covalenthq.com/v1/".concat(ie,"/tokens/").concat(se,"/nft_token_ids/?quote-currency=USD&format=JSON&page-size=5&key=ckey_docs"));case 4:t=e.sent,c=Object(C.a)(t.data.data.items),e.prev=6,c.s();case 8:if((n=c.n()).done){e.next=21;break}return r=n.value,e.prev=10,e.next=13,N.a.get("https://api.covalenthq.com/v1/".concat(ie,"/tokens/").concat(se,"/nft_metadata/").concat(r.token_id,"/?quote-currency=USD&format=JSON"),{auth:{username:"ckey_docs"}});case 13:o=e.sent,a.push(null!=o.data.data.items[0].nft_data?o.data.data.items[0].nft_data[0]:{external_data:{image:""}}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(10);case 19:e.next=8;break;case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(6),c.e(e.t1);case 26:return e.prev=26,c.f(),e.finish(26);case 29:S([].concat(a)),U(!1),e.next=35;break;case 33:e.prev=33,e.t2=e.catch(1);case 35:case"end":return e.stop()}}),e,null,[[1,33],[6,23,26,29],[10,17]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==_.TEMPLATE.banner_picture?_.TEMPLATE.banner_picture:null,head:_.TEMPLATE.title,subhead:"Code Template",color:x}),Object(m.jsxs)("div",{className:"main",children:[re?Object(m.jsxs)("div",{className:"back",style:{color:p||"#FF4C8B"},onClick:function(){ae.goBack()},children:[Object(m.jsx)(O.a,{icon:"chevron-left",size:24,intent:"primary",color:p||"#FF4C8B",className:"icon"}),"Back"]}):Object(m.jsxs)("div",{className:"global",style:{color:p||"#FF4C8B"},onClick:function(){ae.push("/global")},children:["Global View",Object(m.jsx)(O.a,{icon:"chevron-right",size:24,intent:"primary",color:p||"#FF4C8B",className:"icon"})]}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("div",{className:"image",children:z?Object(m.jsx)("img",{src:k}):Object(m.jsx)("img",{className:"collection-img",onError:function(e){e.target.classList.add("error-image"),e.target.classList.remove("collection-img")},src:null===(t=T[0])||void 0===t||null===(a=t.external_data)||void 0===a?void 0:a.image})}),Object(m.jsx)("div",{className:"details",children:Object(m.jsxs)("div",{className:"title-cont",children:[Object(m.jsx)("h1",{style:{color:p},children:"Collection Address "}),Object(m.jsxs)("h3",{onClick:function(){1==ie?window.open("https://etherscan.io/address/".concat(se),"_blank"):137==ie?window.open("https://polygonscan.com/address/".concat(se),"_blank"):window.open("https://snowtrace.io/address/".concat(se),"_blank")},children:[se," ",Object(m.jsx)(O.a,{icon:"share",size:15,intent:"primary",color:p||"#FF4C8B",className:"share"})]}),Object(m.jsxs)("table",{className:"collection-table",children:[Object(m.jsxs)("tr",{className:"title-row",style:{color:p},children:[Object(m.jsx)("td",{children:"Ticker Symbol"}),Object(m.jsx)("td",{children:"24hr Volume"}),Object(m.jsx)("td",{children:"24hr Sold Count"})]}),Object(m.jsxs)("tr",{className:"data-row",children:[Object(m.jsx)("td",{children:(null===(n=$[0])||void 0===n?void 0:n.collection_ticker_symbol)?null===(r=$[0])||void 0===r?void 0:r.collection_ticker_symbol:0}),Object(m.jsxs)("td",{children:[" ",(null===(o=$[0])||void 0===o?void 0:o.volume_quote_day)?le.format(null===(i=$[0])||void 0===i?void 0:i.volume_quote_day).split(".")[0]:0]}),Object(m.jsx)("td",{children:(null===(s=$[0])||void 0===s?void 0:s.unique_token_ids_sold_count_day)?null===(j=$[0])||void 0===j?void 0:j.unique_token_ids_sold_count_day:0})]})]})]})})]})}),_.TEMPLATE.timeseries_chart&&Object(m.jsxs)("div",{className:"graph-cont",children:[Y&&Object(m.jsx)("div",{className:"graph-loader",children:Object(m.jsx)("img",{src:k})}),ee&&Object(m.jsx)("div",{className:"graph-err",children:"No data available between these dates"}),Object(m.jsxs)("div",{className:"graph-header",children:[Object(m.jsx)("h2",{children:"Floor Price "}),Object(m.jsx)(h,{options:_.GRAPH_OPTIONS,onChange:function(e){de(e.target.value)}})]}),Object(m.jsx)("div",{className:"graph",children:Object(m.jsx)(A,{quote:q,wei:D})})]}),Object(m.jsxs)("div",{className:"bottom-section",children:[Object(m.jsx)("h1",{children:"NFT Preview (First 5)"}),z?Object(m.jsx)("div",{className:"collection-load",children:Object(m.jsx)("img",{src:k})}):Object(m.jsx)("div",{className:"collection-display",children:T&&T.map((function(e,t){var a,c;return Object(m.jsxs)("div",{className:"nft",children:[Object(m.jsx)("img",{onError:function(e){e.target.classList.add("error-image"),e.target.classList.remove("collection-img")},className:"collection-img",src:null===e||void 0===e||null===(a=e.external_data)||void 0===a?void 0:a.image,onClick:function(){ae.push("/nft/".concat(se,"/").concat(e.token_id,"/").concat(ie))}},t),null===e||void 0===e||null===(c=e.external_data)||void 0===c?void 0:c.name]},t)}))})]})]})]})})}a(266);var q=function(e){var t,a,c,n,r=e.data,o=e.color;return Object(m.jsxs)("div",{className:"nft-cont",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{onError:function(e){e.target.classList.add("error-image"),e.target.classList.remove("nft-img")},className:"nft-img",src:null===r||void 0===r||null===(t=r.external_data)||void 0===t?void 0:t.image})}),Object(m.jsxs)("div",{className:"nft-details",style:{backgroundColor:o},children:[Object(m.jsx)("h1",{children:null===r||void 0===r||null===(a=r.external_data)||void 0===a?void 0:a.name}),Object(m.jsxs)("h2",{children:["Token ID : ",null===r||void 0===r?void 0:r.token_id]}),Object(m.jsx)("p",{children:null===r||void 0===r||null===(c=r.external_data)||void 0===c?void 0:c.description}),Object(m.jsx)("table",{className:"nft-table",children:(null===r||void 0===r||null===(n=r.external_data)||void 0===n?void 0:n.attributes)?Object(m.jsx)(m.Fragment,{children:r.external_data.attributes.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[" ",e.trait_type," "]}),Object(m.jsxs)("td",{children:[" ",e.value," "]})]},t)}))}):null})]})]})};a(267);function L(e){var t=e.light,a=e.dark,n=e.vibrant,r=Object(b.g)(),o=r.address,i=r.id,s=r.chainId,j=Object(c.useState)({}),h=Object(u.a)(j,2),v=h[0],p=h[1],x=Object(c.useState)(!0),f=Object(u.a)(x,2),y=f[0],T=f[1],C=Object(b.f)();Object(E.a)(N.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}}),Object(c.useEffect)((function(){S()}),[]);var S=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://api.covalenthq.com/v1/".concat(s,"/tokens/").concat(o,"/nft_metadata/").concat(i,"/?quote-currency=USD&format=JSON"),{auth:{username:"ckey_docs"}});case 2:t=e.sent,p(null!==t.data.data.items[0].nft_data?t.data.data.items[0].nft_data[0]:{external_data:{image:""}}),T(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:y?Object(m.jsx)("div",{className:"load",children:Object(m.jsx)("img",{src:k})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==_.TEMPLATE.banner_picture?_.TEMPLATE.banner_picture:null,head:_.TEMPLATE.title,subhead:"Code Template",color:n}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"back",style:{color:t||"#FF4C8B"},onClick:function(){C.goBack()},children:[Object(m.jsx)(O.a,{icon:"chevron-left",size:24,intent:"primary",color:t||"#FF4C8B",className:"icon"}),"Back"]}),Object(m.jsx)(q,{data:v,color:a})]})]})})}var M=a.p+"static/media/logo.00ecc9d5.svg",B=a(140);a.p;var D=function(){Object(c.useEffect)((function(){""!==_.TEMPLATE.banner_picture&&N()}),[]);var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),s=o[0],h=o[1],v=Object(c.useState)(""),O=Object(u.a)(v,2),p=O[0],x=O[1],f=Object(c.useState)(""),g=Object(u.a)(f,2),k=g[0],y=g[1],N=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.from(_.TEMPLATE.banner_picture).getPalette();case 2:return t=e.sent,console.log(t),n(t.DarkMuted.getHex()),x(t.LightVibrant.getHex()),h(t.Vibrant.getHex()),y(t.DarkVibrant.getHex()),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"App",style:{backgroundColor:"".concat(a)},children:[Object(m.jsx)(j.a,{children:Object(m.jsx)(j.b,{basename:"/",children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/nft/:address/:id/:chainId",render:function(e){return Object(m.jsx)(L,Object(i.a)(Object(i.a)({},e),{},{light:p,vibrant:s,dark:a}))}}),Object(m.jsx)(b.a,{path:"/collection/:address/:id",render:function(e){return Object(m.jsx)(P,Object(i.a)(Object(i.a)({},e),{},{light:p,vibrant:s,dark:k}))}}),Object(m.jsx)(b.a,{path:"/global",render:function(e){return Object(m.jsx)(T,Object(i.a)(Object(i.a)({},e),{},{light:p,vibrant:s,dark:k}))}}),Object(m.jsx)(b.a,{path:"/",render:function(e){return Object(m.jsx)(P,Object(i.a)(Object(i.a)({},e),{},{light:p,vibrant:s,dark:k}))}})]})})}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{src:M})})]})};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[390,1,2]]]);
//# sourceMappingURL=main.d44bcddc.chunk.js.map