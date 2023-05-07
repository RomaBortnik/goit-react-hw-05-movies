"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[725],{359:function(n,e,r){r.d(e,{b:function(){return f},Z:function(){return v}});var t,a,c,i=r(2791),o=r(7689),s=r(168),u=r(6444),p=r(1087),l=u.ZP.div(t||(t=(0,s.Z)(["\n  display: flex;\n"]))),x=u.ZP.div(a||(a=(0,s.Z)(["\n  margin-left: 24px;\n  & p,\n  h1,\n  h2,\n  h3 {\n    margin-bottom: 12px;\n  }\n"]))),d=(0,u.ZP)(p.OL)(c||(c=(0,s.Z)(["\n  padding: 4px 8px;\n  width: 60px;\n  margin-bottom: 12px;\n  border-radius: 4px;\n  background-color: #e0e0e0;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #000;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 12px;\n  line-height: 1.2;\n  font-style: normal;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #e9e9e9;\n  }\n"]))),h=r(184),f="https://image.tmdb.org/t/p/w200/",v=function(n){var e,r,t=n.movie,a=t.poster_path,c=t.title,s=t.vote_average,u=t.overview,p=t.genres,v=(0,o.TH)(),m=(0,i.useRef)(null!==(e=null===(r=v.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{to:m.current,children:"Go back"}),(0,h.jsxs)(l,{children:[(0,h.jsx)("img",{src:f+a,alt:c}),(0,h.jsxs)(x,{children:[(0,h.jsx)("h1",{children:c}),(0,h.jsxs)("p",{children:["Vote average: ",s]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:u}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:p.map((function(n){return n.name})).join(" ")})]})]})]})}},7063:function(n,e,r){var t=r(5861),a=r(7757),c=r.n(a),i=r(1243),o=r(5919),s=function(){var n=(0,t.Z)(c().mark((function n(e,r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=6;break}return n.next=3,i.Z.get("".concat(o._n,"/movie/").concat(e,"/").concat(r,"?api_key=").concat(o.S8));case 3:n.t0=n.sent,n.next=9;break;case 6:return n.next=8,i.Z.get("".concat(o._n,"/movie/").concat(e,"?api_key=").concat(o.S8));case 8:n.t0=n.sent;case 9:return t=n.t0,n.abrupt("return",t.data);case 11:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();e.Z=s},5919:function(n,e,r){r.d(e,{S8:function(){return o},_n:function(){return s}});var t=r(5861),a=r(7757),c=r.n(a),i=r(1243),o="a4c56cb8fbee20099fe28460c31a452a",s="https://api.themoviedb.org/3/",u=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"trending/all/day?api_key=").concat(o,"\n"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();e.ZP=u},6725:function(n,e,r){r.r(e),r.d(e,{default:function(){return f}});var t=r(5861),a=r(9439),c=r(7757),i=r.n(c),o=r(2791),s=r(7689),u=r(1087),p=r(7596),l=(r(5462),r(7063)),x=r(359),d=r(9351),h=r(184),f=function(){var n=(0,s.UO)().movieId,e=(0,o.useState)({}),r=(0,a.Z)(e,2),c=r[0],f=r[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Z)(n);case 3:r=e.sent,f(r),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",p.Am.error("Something went wrong. Please try again."));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,h.jsxs)(h.Fragment,{children:[c.genres&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Z,{movie:c}),(0,h.jsx)("hr",{}),(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(d.Z,{}),children:(0,h.jsx)(s.j3,{})})]}),(0,h.jsx)(p.Ix,{autoClose:2e3,theme:"dark"})]})}}}]);
//# sourceMappingURL=725.543b9c89.chunk.js.map