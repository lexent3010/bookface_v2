(this.webpackJsonpbookface_v2=this.webpackJsonpbookface_v2||[]).push([[4],{235:function(e,s,a){e.exports={messagesPage:"Dialogs_messagesPage__2-91X",dialogs:"Dialogs_dialogs__1avrv",messages:"Dialogs_messages__vLt5i",dialogItem:"Dialogs_dialogItem__10kiR",messageItem:"Dialogs_messageItem__1ON2j",dialogElement:"Dialogs_dialogElement__3LLW1"}},294:function(e,s,a){"use strict";a.r(s);var t=a(1),i=a.n(t),c=a(82),n=a(235),d=a.n(n),l=a(10),g=a(0),r=function(e){var s="/dialogs/"+e.id;return Object(g.jsxs)("div",{className:d.a.dialogItem,children:[Object(g.jsx)("img",{src:e.avatar,alt:""}),Object(g.jsx)(l.b,{to:s,children:e.name})]})},o=function(e){return Object(g.jsx)("div",{className:d.a.message,children:e.message})},m=function(e){var s=i.a.createRef(),a=e.state.dialogs.map((function(e){return Object(g.jsx)("div",{className:d.a.dialogElement,children:Object(g.jsx)(r,{id:e.id,name:e.name,avatar:e.avatar})},e.id)})),t=e.state.messages.map((function(e){return Object(g.jsx)("div",{className:d.a.messageItem,children:Object(g.jsx)(o,{id:e.id,message:e.message})},e.id)}));return Object(g.jsxs)("div",{className:d.a.messagesPage,children:[Object(g.jsx)("div",{className:d.a.dialogs,children:a}),Object(g.jsxs)("div",{className:d.a.messages,children:[t,Object(g.jsxs)("div",{className:d.a.addMessage,children:[Object(g.jsx)("div",{children:Object(g.jsx)("textarea",{value:e.state.newMessageText,onChange:function(){var a=s.current.value;e.updateNewMessageText(a)},ref:s,placeholder:"Write message here"})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})]})},j=a(11),b=a(33),u=a(22);s.default=Object(u.d)(Object(j.b)((function(e){return{state:e.dialogsPage}}),{updateNewMessageText:c.c,sendMessage:c.b}),b.b)(m)}}]);
//# sourceMappingURL=4.5ad093e1.chunk.js.map