(this.webpackJsonpbookface_v2=this.webpackJsonpbookface_v2||[]).push([[0],{110:function(e,t,n){"use strict";t.a=n.p+"static/media/user.c9034bb5.png"},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(3),a=n(136),o=n.n(a).a.create({withCredentials:!0,headers:{"API-KEY":"ca78cc0b-4b4d-4a86-9c5b-ca3e19ff60be"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(e,t){return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return o.post("follow/".concat(e),{}).then((function(e){return e.data}))},unfollow:function(e){return o.delete("follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return o.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return o.get("/profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return o.put("/profile/status",{status:e})},uploadPhoto:function(e){var t=new FormData;return t.append("image",e),o.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},updateProfile:function(e){return o.put("/profile",e).then((function(e){return e.data}))}},i={getMe:function(){return o.get("auth/me").then((function(e){return e.data}))},login:function(e){return o.post("auth/login",Object(r.a)({},e)).then((function(e){return e.data}))},logout:function(){return o.delete("auth/login").then((function(e){return e.data}))},getCaptchaUrl:function(){return o.get("/security/get-captcha-url").then((function(e){return e.data}))}}},131:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(73),a=n(3),o="dialog/SEND-MESSAGE",c="dialog/UPDATE-NEW-MESSAGE-TEXT",s={dialogs:[{id:1,name:"Pashok",avatar:"https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg"},{id:2,name:"Polina",avatar:"https://i.ibb.co/bQdMS9z/Amy-rev.jpg"},{id:3,name:"Vovan",avatar:"https://i.ibb.co/0BRBtWB/unnamed.gif"}],messages:[{id:1,message:"i am kachok"},{id:2,message:"ti gde?"},{id:3,message:"Poidem buhat`?"}],newMessageText:""},i=function(){return{type:o}},u=function(e){return{type:c,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=e.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}]),newMessageText:""});case c:return Object(a.a)(Object(a.a)({},e),{},{newMessageText:t.newMessageText});default:return e}}},134:function(e,t,n){e.exports={footer:"Footer_footer__3kRR3"}},168:function(e,t,n){},169:function(e,t,n){},18:function(e,t,n){e.exports={selected:"Users_selected__HhKjL",setUsersButton:"Users_setUsersButton__rIiPI",paginator:"Users_paginator__3LXyl"}},25:function(e,t,n){e.exports={navbar:"Navbar_navbar__1kHCk",menu:"Navbar_menu__2F1R7",activeLink:"Navbar_activeLink__3WQN3"}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(3),a=n(74),o=(n(1),n(93)),c=n(49),s=n.n(c),i=n(0),u=function(e){var t=e.input,n=e.meta,o=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)(Object(r.a)({},t),o),{},{className:c?s.a.error:""}))}),Object(i.jsx)("div",{children:c&&Object(i.jsx)("span",{className:s.a.redText,children:n.error})})]})},l=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,Object(r.a)({placeholder:e,name:t,component:n,validate:a},c)),s]})}},291:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(69),c=n.n(o),s=(n(168),n(41)),i=n(42),u=n(48),l=n(47),d=(n(169),n(134)),j=n.n(d),b=n(0),f=function(e){return Object(b.jsx)("div",{className:j.a.footer,children:Object(b.jsx)("div",{children:"This site create by lex94 with love :)"})})},p=function(e){return Object(b.jsx)("div",{})},h=n(12),O=n(15),x=n(34),v=n(32),g=n(13),m=function(e){return e.usersPage.users},P=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.pageSize},_=function(e){return e.usersPage.isLoad},w=function(e){return e.usersPage.currentPage},N=function(e){return e.usersPage.portionSize},C=function(e){return e.usersPage.currentPortion},T=n(18),y=n.n(T),S=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.currentPortion,c=e.portionSize,s=e.setCurrentPortion,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/c),j=(o-1)*c,f=o*c+1;return Object(b.jsxs)("div",{className:y.a.paginator,children:[Object(b.jsx)("div",{className:y.a.prevButton,children:Object(b.jsx)("button",{disabled:o<=1,onClick:function(){s(o-1)},children:"PREV"})}),Object(b.jsx)("div",{className:y.a.pages,children:u.map((function(e){if(e>j&&e<f)return Object(b.jsxs)("span",{className:r===e?y.a.selected:"",onClick:function(){a(e)},children:[e," "]},e)}))}),Object(b.jsx)("div",{className:y.a.nextButton,children:Object(b.jsx)("button",{disabled:o===d,onClick:function(){s(o+1)},children:"NEXT"})})]})},U=n(110),E=n(14),L=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:y.a.userItem,children:[Object(b.jsxs)("div",{className:y.a.avatarBlock,children:[Object(b.jsx)("div",{className:y.a.userAvatar,children:Object(b.jsx)(E.b,{to:"profile/"+e.user.id,children:Object(b.jsx)("img",{src:null!=e.user.photos.small?e.user.photos.small:U.a,alt:"avatar"})})}),Object(b.jsx)("div",{className:y.a.followButton,children:e.user.followed?Object(b.jsx)("button",{onClick:function(){e.unfollow(e.user.id)},children:"Remove"}):Object(b.jsx)("button",{onClick:function(){e.follow(e.user.id)},children:"Add"})})]}),Object(b.jsxs)("div",{className:y.a.infoBlock,children:[Object(b.jsx)("div",{className:y.a.name,children:e.user.name}),Object(b.jsx)("div",{className:y.a.status,children:e.user.status}),Object(b.jsxs)("div",{className:y.a.location,children:["u.location.city",", ","u.location.country"]})]})]})})},A=Object(O.b)((function(e){return{users:m(e),pageSize:k(e),totalUsersCount:P(e),currentPage:w(e),isLoad:_(e),portionSize:N(e),currentPortion:C(e),usersAPI:g.c}}),{follow:x.b,unfollow:x.g,setCurrentPage:x.d,getUsers:x.c,setCurrentPortion:x.e})((function(e){Object(r.useEffect)((function(){e.getUsers(e.currentPage,e.pageSize)}),[e.totalUsersCount]);return Object(b.jsxs)(b.Fragment,{children:[e.isLoad&&Object(b.jsx)(v.a,{}),Object(b.jsx)(S,{onPageChanged:function(t){e.getUsers(t,e.pageSize),e.setCurrentPage(t)},totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,currentPortion:e.currentPortion,portionSize:e.portionSize,setCurrentPortion:e.setCurrentPortion}),e.users.filter((function(e){return null!=e.photos.small&&null!=e.photos.large})).map((function(t){return Object(b.jsx)(L,{user:t,follow:e.follow,unfollow:e.unfollow},t.id)}))]})})),I=n(3),B=n(7),F=n.n(B),M=function(e){return Object(b.jsx)("div",{className:F.a.avatar,children:Object(b.jsx)("img",{src:e.avatar,alt:"avatar"})})},D=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:F.a.avatar,children:Object(b.jsx)(M,{avatar:e.avatar})}),e.isOwner&&Object(b.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.uploadUserPhoto(t.target.files[0])}}),Object(b.jsx)("div",{className:F.a.name,children:e.name})]})},z=function(e){return Object(b.jsx)("div",{children:"photo"})},R=n(97),H=n.n(R),J=function(e){return Object(b.jsxs)("div",{className:H.a.post,children:[Object(b.jsx)("div",{children:Object(b.jsx)(M,{avatar:e.avatar})}),Object(b.jsx)("div",{className:H.a.text,children:e.postText}),Object(b.jsxs)("div",{children:["Like: ",e.likeCount]})]})},X=function(e){var t=a.a.createRef(),n=e.posts.map((function(t){return Object(b.jsx)(J,{id:t.id,postText:t.postText,likeCount:t.likeCount,avatar:e.avatar},t.id)}));return Object(b.jsxs)("div",{className:F.a.postBlock,children:[Object(b.jsxs)("div",{className:F.a.textarea,children:[Object(b.jsx)("textarea",{name:"addPost",placeholder:"How are you?",ref:t,value:e.newPostText,onChange:function(){var n=t.current.value;e.updateNewPostText(n)},className:F.a.postTextarea}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(b.jsx)("div",{children:n})]})},G=n(60),W=function(e){var t=e.profile,n=e.status,a=e.updateUserStatus,o=e.setEditProfileMode,c=Object(r.useState)(!1),s=Object(G.a)(c,2),i=s[0],u=s[1],l=Object(r.useState)(n),d=Object(G.a)(l,2),j=d[0],f=d[1];Object(r.useEffect)((function(){f(n)}),[n]);var p=function(){return Object.entries(t.contacts).map((function(e){if(e[1])return Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:e[0]}),": ",e[1]]},e[0])}))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){o(!0)},children:"Status edit mode"}),Object(b.jsx)("div",{className:F.a.status,children:i?Object(b.jsx)("input",{onChange:function(e){f(e.currentTarget.value)},type:"text",value:j,autoFocus:!0,onBlur:function(){u(!1),a(j)}}):Object(b.jsx)("div",{children:n?Object(b.jsxs)("span",{onClick:function(){u(!0)},children:[Object(b.jsx)("b",{children:"Status"}),": ",n]}):Object(b.jsx)("span",{children:" "})})}),Object(b.jsxs)("div",{className:F.a.profile,children:[t.aboutMe&&Object(b.jsx)("div",{className:F.a.aboutMe}),Object(b.jsxs)("div",{className:F.a.lookingForAJob,children:[Object(b.jsx)("b",{children:"Looking for a job"}),": ",t.lookingForAJob?"Yes":"No"]}),t.lookingForAJob&&Object(b.jsxs)("div",{className:F.a.lookingForAJobDescription,children:[Object(b.jsx)("b",{children:"description"}),": ",t.lookingForAJobDescription]}),!!p().some((function(e){return e}))&&Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Contacts"}),":",Object(b.jsx)("div",{className:F.a.contacts,children:p()})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"id"}),": ",t.userId]})]})]})},V=n(93),K=n(132),Z=n(28),q=Object(K.a)({form:"updateProfile"})((function(e){var t;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:["About me",Object(Z.b)("AboutMe","AboutMe",Z.a,[]),"Full name",Object(Z.b)("FullName","FullName",Z.a,[])," ",Object(b.jsx)("br",{}),Object(Z.b)(null,"lookingForAJob","input",[],{type:"checkbox"},"looking for a job?")," ",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"Looking for a job description",Object(Z.b)("lookingForAJobDescription","lookingForAJobDescription",Z.a,[]),Object(b.jsx)("h3",{children:"Contacts"}),Object(b.jsx)("div",{children:(t=e.contactsKey,t.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[e,": "]}),Object(Z.b)("address on ".concat(e),e,Z.a,[])]},e)})))}),Object(b.jsx)(V.a,{name:"updateProfile",component:"button",children:"Update Profile"}),Object(b.jsx)("button",{onClick:function(){e.setEditProfileMode(!1)},children:"Cancel"})]})})})),Q=function(e){var t=Object(r.useState)(!1),n=Object(G.a)(t,2),a=n[0],o=n[1],c=Object.keys(e.profile.contacts);return Object(b.jsx)(b.Fragment,{children:a?Object(b.jsx)(q,{contactsKey:c,onSubmit:function(t){e.updateProfile(t),console.log(t)},setEditProfileMode:o,profile:e.profile}):Object(b.jsx)(W,Object(I.a)(Object(I.a)({},e),{},{setEditProfileMode:o}))})},Y=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://i.ibb.co/st5tL86/profile-Img.png",alt:"profile img"})})},$=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:"projects"})})},ee=function(e){return e.profile?Object(b.jsxs)("div",{className:F.a.profilePage,children:[Object(b.jsx)("div",{className:F.a.profileImgBlock,children:Object(b.jsx)(Y,{})}),Object(b.jsx)("div",{className:F.a.avatarBlock+" "+F.a.block,children:Object(b.jsx)(D,{avatar:e.profile.photos.large,name:e.profile.fullName,isOwner:e.isOwner,uploadUserPhoto:e.uploadUserPhoto})}),Object(b.jsx)("div",{className:F.a.profileBlock+" "+F.a.block,children:Object(b.jsx)(Q,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,updateProfile:e.updateProfile})}),Object(b.jsx)("div",{className:F.a.projectsBlock+" "+F.a.block,children:Object(b.jsx)($,{})}),Object(b.jsx)("div",{className:F.a.photoBlock+" "+F.a.block,children:Object(b.jsx)(z,{})}),Object(b.jsx)("div",{className:F.a.postsBlock+" "+F.a.block,children:Object(b.jsx)(X,{addPost:e.addPost,updateNewPostText:e.updateNewPostText,posts:e.posts,newPostText:e.newPostText,avatar:e.profile.photos.large})})]}):Object(b.jsx)(v.a,{})},te=n(10),ne=n.n(te),re=n(17),ae=n(73),oe="profile/ADD_POST",ce="profile/DELETE_POST",se="profile/UPDATE_NEW_POST_TEXT",ie="profile/SET_PROFILE",ue="profile/SET_STATUS",le="SET_PHOTO",de={posts:[{id:2,postText:"This is new social network! I made my social network, with blackjack and whores!",likeCount:5},{id:1,postText:"Hello world!",likeCount:3}],usersProfile:[{id:1,position:"Boss",responsibility:"front-end",telephoneNumber:"+7-910-934-32-07",dateOfEmployment:"22.02.2020"}],newPostText:"",profile:null,status:null},je=function(e){return{type:ue,status:e}},be=function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n){var r;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.b.getProfile(e);case 2:r=t.sent,n({type:ie,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(I.a)(Object(I.a)({},e),{},{posts:[{id:3,postText:e.newPostText,likeCount:0}].concat(Object(ae.a)(e.posts)),newPostText:""});case ce:return Object(I.a)(Object(I.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case se:return Object(I.a)(Object(I.a)({},e),{},{newPostText:t.newPostText});case ie:return Object(I.a)(Object(I.a)({},e),{},{profile:t.profile});case ue:return Object(I.a)(Object(I.a)({},e),{},{status:t.status});case le:return Object(I.a)(Object(I.a)({},e),{},{profile:Object(I.a)(Object(I.a)({},e.profile),{},{photos:t.photos})});default:return e}},pe=n(46),he=n(11),Oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"refreshData",value:function(){var e=this.props.match.params.userId;if(!e&&!(e=this.props.defaultId))return Object(b.jsx)(h.a,{to:"/login"});this.props.getProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshData()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshData()}},{key:"render",value:function(){return Object(b.jsx)(ee,Object(I.a)(Object(I.a)({},this.props),{},{isOwner:!this.props.match.params.userId,uploadUserPhoto:this.props.uploadUserPhoto}))}}]),n}(a.a.Component),xe=Object(he.d)(Object(O.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile,status:e.profilePage.status,profileAPI:g.b,defaultId:e.auth.id}}),{getProfile:be,addPost:function(){return{type:oe}},updateNewPostText:function(e){return{type:se,newPostText:e}},getUserStatus:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n){var r;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.b.getStatus(e);case 2:r=t.sent,n(je(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(je(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},uploadUserPhoto:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n){var r;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.b.uploadPhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:le,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfile:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(n){var r;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={aboutMe:e.AboutMe,lookingForAJob:e.lookingForAJob,fullName:e.FullName,lookingForAJobDescription:e.lookingForAJobDescription,contacts:{github:e.github,facebook:e.facebook,instagram:e.instagram,vk:e.vk,twitter:e.twitter,website:e.website,youtube:e.youtube,mainLink:e.mainLink}},t.next=3,g.b.updateProfile(r);case 3:0===t.sent.resultCode&&n(be(6095));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),h.f,pe.b)(Oe),ve=n(76),ge=n.n(ve),me=function(e){return Object(b.jsxs)("header",{className:ge.a.header,children:[Object(b.jsxs)("div",{className:ge.a.logo,children:[Object(b.jsx)("img",{src:"https://i.ibb.co/Hx4qhXZ/VR-Group-logo-svg.png",alt:"logo"}),Object(b.jsx)("span",{children:"VReacte"})]}),Object(b.jsx)("div",{className:ge.a.auth,children:e.isLogin?Object(b.jsx)("div",{onClick:e.deleteAuthUserData,children:e.login}):Object(b.jsx)(E.b,{to:"/login",children:"please login"})})]})},Pe=n(40),ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)(me,Object(I.a)({},this.props))}}]),n}(a.a.Component),_e=Object(O.b)((function(e){return{login:e.auth.login,isLogin:e.auth.isLogin}}),{deleteAuthUserData:Pe.b})(ke),we=n(25),Ne=n.n(we),Ce=function(e){return Object(b.jsxs)("nav",{className:Ne.a.navbar,children:[Object(b.jsx)("div",{className:Ne.a.background}),Object(b.jsxs)("div",{className:Ne.a.menu,children:[Object(b.jsx)("div",{children:Object(b.jsx)(E.b,{to:"/profile/",activeClassName:Ne.a.activeLink,children:"Profile"})}),Object(b.jsx)("div",{children:Object(b.jsx)(E.b,{to:"/dialogs",activeClassName:Ne.a.activeLink,children:"Messages"})}),Object(b.jsx)("div",{children:Object(b.jsx)(E.b,{to:"/news",activeClassName:Ne.a.activeLink,children:"News"})}),Object(b.jsx)("div",{children:Object(b.jsx)(E.b,{to:"/music",activeClassName:Ne.a.activeLink,children:"Music"})}),Object(b.jsx)("div",{children:Object(b.jsx)(E.b,{to:"/settings",activeClassName:Ne.a.activeLink,children:"Settings"})}),Object(b.jsx)("div",{children:Object(b.jsx)(E.b,{to:"/users",activeClassName:Ne.a.activeLink,children:"Users"})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:Object(b.jsx)(E.b,{to:"/friends",activeClassName:Ne.a.activeLink,children:"Friends"})})]})]})},Te="app/INITIALIZED_SUCCESS",ye={isInitialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(I.a)(Object(I.a)({},e),{},{isInitialized:!0});default:return e}},Ue=a.a.lazy((function(){return n.e(3).then(n.bind(null,294))})),Ee=a.a.lazy((function(){return n.e(4).then(n.bind(null,295))})),Le=a.a.lazy((function(){return n.e(5).then(n.bind(null,296))})),Ae=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initialApp()}},{key:"render",value:function(){return this.props.isInitialized?Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(_e,{}),Object(b.jsx)(Ce,{}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(h.a,{to:"/profile"})}}),Object(b.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(xe,{})}}),Object(b.jsx)(h.b,{path:"/dialogs",render:Object(pe.a)(Ue)}),Object(b.jsx)(h.b,{path:"/users",render:function(){return Object(b.jsx)(A,{})}}),Object(b.jsx)(h.b,{path:"/friends",render:Object(pe.a)(Ee)}),Object(b.jsx)(h.b,{path:"/login",render:Object(pe.a)(Le)})]}),Object(b.jsx)("div",{className:"background",children:Object(b.jsx)(p,{})}),Object(b.jsx)(f,{})]}):Object(b.jsx)(v.a,{})}}]),n}(a.a.Component),Ie=Object(O.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initialApp:function(){return function(e){e(Object(Pe.c)()).then((function(){e({type:Te})}))}}})(Ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(131),Fe={navBar:[{id:1,name:"Pashok",avatar:"https://i.ibb.co/HxhbGXP/Zoidberg-rev.jpg"},{id:2,name:"Polina",avatar:"https://i.ibb.co/bQdMS9z/Amy-rev.jpg"},{id:3,name:"Vovan",avatar:"https://i.ibb.co/0BRBtWB/unnamed.gif"}]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},De=n(138),ze=n(133),Re=Object(he.c)({profilePage:fe,dialogsPage:Be.a,navBar:Me,usersPage:x.a,auth:Pe.a,form:ze.a,app:Se}),He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,Je=Object(he.e)(Re,He(Object(he.a)(De.a)));window.store=Je.getState();var Xe=Je;c.a.render(Object(b.jsx)(E.a,{children:Object(b.jsx)(O.a,{store:Xe,children:Object(b.jsx)(Ie,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n(1);var r=n.p+"static/media/preloader.5342aab4.svg",a=n(0);t.a=function(){return Object(a.jsx)("div",{id:"preloaderImg",children:Object(a.jsx)("img",{src:r,alt:"load"})})}},34:function(e,t,n){"use strict";n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return P})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return w})),n.d(t,"g",(function(){return N}));var r=n(10),a=n.n(r),o=n(17),c=n(3),s=n(13),i=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(c.a)(Object(c.a)({},e),r):e}))},u="users/FOLLOW",l="users/UNFOLLOW",d="users/SET_USERS",j="users/SET_CURRENT_PAGE",b="users/SET_USERS_TOTAL_COUNT",f="users/TOGGLE_ISLOAD",p="SET_CURRENT_PORTION",h={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isLoad:!1,portionSize:20,currentPortion:1},O=function(e){return{type:u,userId:e}},x=function(e){return{type:l,userId:e}},v=function(e){return{type:d,users:e}},g=function(e){return{type:j,currentPage:e}},m=function(e){return{type:f,isLoad:e}},P=function(e){return{type:p,newCurrentPortion:e}},k=function(e,t){return function(){var n=Object(o.a)(a.a.mark((function n(r){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(!0)),n.next=3,s.c.getUsers(e,t);case 3:o=n.sent,r(m(!1)),r(v(o.items)),r((a=o.totalCount,{type:b,totalUsersCount:a}));case 7:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(o.a)(a.a.mark((function e(t,n,r,o){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(o);case 2:0===e.sent.resultCode&&r(n);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),w=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(s.c.follow.bind(s.c),O(e),n,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(s.c.unfollow.bind(s.c),x(e),n,e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)({},e),{},{users:i(e.users,"id",t.userId,{followed:!0})});case l:return Object(c.a)(Object(c.a)({},e),{},{users:i(e.users,"id",t.userId,{followed:!1})});case d:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case j:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage,users:[]});case b:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalUsersCount});case f:return Object(c.a)(Object(c.a)({},e),{},{isLoad:t.isLoad});case p:return Object(c.a)(Object(c.a)({},e),{},{currentPortion:t.newCurrentPortion});default:return e}}},40:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(10),a=n.n(r),o=n(17),c=n(3),s=n(13),i=n(52),u="auth/SET_AUTH_USER_DATA",l="auth/SET_CAPTCHA_URL",d={id:null,login:null,email:null,isLogin:!1,captchaUrl:null},j=function(e,t){return{type:u,data:e,isLogin:t}},b=function(e){return{type:l,captchaUrl:e}},f=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.getMe();case 2:0===(n=e.sent).resultCode?t(j(n.data,!0)):t(j({id:null,login:null,email:null},!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.login(e);case 2:if(r=t.sent,o=r.messages.length>0?r.messages[0]:"Some Error",0!==r.resultCode){t.next=8;break}n(f()),t.next=17;break;case 8:if(1!==r.resultCode){t.next=12;break}n(Object(i.a)("login",{_error:o})),t.next=17;break;case 12:if(10!==r.resultCode){t.next=17;break}return t.next=15,s.a.getCaptchaUrl();case 15:c=t.sent,n(b(c.url));case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.resultCode&&t(f());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)(Object(c.a)({},e),t.data),{},{isLogin:t.isLogin});case l:return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));n(74);var r=n(3),a=n(1),o=n(15),c=n(12),s=(n(49),n(32)),i=n(0),u=function(e){return{isLogin:e.auth.isLogin}},l=function(e){return Object(o.b)(u)((function(t){return t.isLogin?Object(i.jsx)(e,Object(r.a)({},t)):Object(i.jsx)(c.a,{to:"/login"})}))},d=function(e){return function(){return Object(i.jsx)(a.Suspense,{fallback:Object(i.jsx)(s.a,{}),children:Object(i.jsx)(e,{})})}}},49:function(e,t,n){e.exports={formControl:"FormsControl_formControl__11g5d",error:"FormsControl_error__1uqcA",redText:"FormsControl_redText__2dzox"}},7:function(e,t,n){e.exports={profilePage:"Profile_profilePage__F-bi9",profileImgBlock:"Profile_profileImgBlock__28v2T",avatarBlock:"Profile_avatarBlock__17wuG",avatar:"Profile_avatar__35jdq",profileBlock:"Profile_profileBlock__2MyBW",projectsBlock:"Profile_projectsBlock__31E9L",photoBlock:"Profile_photoBlock__3LVV_",postsBlock:"Profile_postsBlock__31xi2",textarea:"Profile_textarea__2YHwN",block:"Profile_block__1631X",name:"Profile_name__1oLAi",postTextarea:"Profile_postTextarea__3Ct1I",profileInfo:"Profile_profileInfo__2ZnTm"}},76:function(e,t,n){e.exports={header:"Header_header__1CGKd",logo:"Header_logo__ffv_d",auth:"Header_auth__2BNLo"}},97:function(e,t,n){e.exports={post:"Post_post__1x1up",text:"Post_text__1RXiU"}}},[[291,1,2]]]);
//# sourceMappingURL=main.b100275d.chunk.js.map