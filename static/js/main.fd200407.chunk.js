(this.webpackJsonpdrag=this.webpackJsonpdrag||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),i=(a(21),a(1)),o=a(5),s=a(4),d=a(14),u=a.n(d);function m(e){var t=e.active,a=e.onClick,n={color:t?"red":null};return r.a.createElement("button",{className:"add-button",onClick:a},r.a.createElement("i",{className:"material-icons",style:n},t?"remove":"add"))}function p(e){var t=e.title;return r.a.createElement("header",{className:"list-header"},r.a.createElement("h4",null,t),r.a.createElement("i",{className:"material-icons"},"more_horiz"))}function E(){var e=["drag-n-drop/head.png","drag-n-drop/head.png","drag-n-drop/head.png","drag-n-drop/head.png","drag-n-drop/head.png"],t=e.length%4;return r.a.createElement("div",{className:"photo-stack"},r.a.createElement(s.FlatList,{list:e,listView:function(e,t){return r.a.createElement("img",{key:t,src:e,alt:"task executors"})},append:t&&r.a.createElement("span",{key:"append",className:"remainder"},"+",t)}))}function f(e){var t=e.finish,a=e.list,c=e.dispatch,l=Object(n.useRef)();Object(n.useEffect)((function(){l.current.focus()}),[]);return r.a.createElement("div",{className:"list-card"},r.a.createElement("textarea",{ref:l,placeholder:"New task",onKeyDown:function(e){if(13===e.keyCode&&!e.shiftKey){e.preventDefault();var n={desc:e.target.value,dueDate:"Aug ".concat(Math.floor(31*Math.random())),id:"".concat(Math.random())};c({list:a,task:n,type:"CREATE_TASK"}),t()}}}))}function b(e){var t=e.desc,a=e.dueDate,n=e.index,c=e.id;return r.a.createElement(o.b,{draggableId:c,index:n},(function(e,n){return r.a.createElement("div",Object.assign({className:"list-card",ref:e.innerRef},e.draggableProps,e.dragHandleProps,{style:e.draggableProps.style}),r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement("i",{className:"material-icons"},"more_horiz")),r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons"},"schedule"),r.a.createElement("span",null,"Due ",a),r.a.createElement(E,null)))}))}function g(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],d=e.title,E=e.store,g=Object(i.a)(E,2),h=g[0],v=g[1],O=function(){return l(!c)},j={background:"rgba(229, 229, 229, .8)"};return r.a.createElement("div",{className:"wrapper"},r.a.createElement(p,{title:d}),r.a.createElement(m,{active:c,onClick:O}),r.a.createElement(u.a,{if:c},r.a.createElement(f,{finish:O,list:d,dispatch:v})),r.a.createElement(o.c,{droppableId:d},(function(e,t){return r.a.createElement("div",{className:"drop-region",ref:e.innerRef,style:t.isDraggingOver?j:null},r.a.createElement(s.FlatList,{list:h[d],listView:function(e,t){return r.a.createElement(b,{id:e.id,key:e.id,index:t,desc:e.desc,dueDate:e.dueDate})}}),e.placeholder)})))}var h=a(9),v=a(2),O=a(8),j={Backlog:[],Todo:[],"In Progress":[],"In Review":[],Done:[]};function k(e,t){switch(t.type){case"CREATE_TASK":var a=t.list,n=t.task,r=e[a].concat(n);return Object(O.a)({},e,Object(v.a)({},a,r));case"SHUFFLE_LIST":var c=t.context,l=c.source,o=c.destination;if(o){if(l.droppableId===o.droppableId){var s=Object(h.a)(e[l.droppableId]),d=s.splice(l.index,1),u=Object(i.a)(d,1)[0];return s.splice(o.index,0,u),Object(O.a)({},e,Object(v.a)({},l.droppableId,s))}var m,p=Object(h.a)(e[l.droppableId]),E=Object(h.a)(e[o.droppableId]),f=p.splice(l.index,1),b=Object(i.a)(f,1)[0];return E.splice(o.index,0,b),Object(O.a)({},e,(m={},Object(v.a)(m,l.droppableId,p),Object(v.a)(m,o.droppableId,E),m))}return e;default:return e}}a(28);var y=function(){var e=Object(n.useReducer)(k,j),t=Object.keys(e[0]);return r.a.createElement(o.a,{onDragEnd:function(t){(0,Object(i.a)(e,2)[1])({context:t,type:"SHUFFLE_LIST"})}},r.a.createElement("div",{className:"App"},r.a.createElement(s.FlatList,{list:t,listView:function(t,a){return r.a.createElement(g,{key:a,title:t,store:e})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.fd200407.chunk.js.map