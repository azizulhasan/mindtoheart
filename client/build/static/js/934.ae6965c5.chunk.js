"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[934],{9934:function(e,s,r){r.r(s),r.d(s,{default:function(){return v}});var l=r(9434),n=r(3615),i=r(184);function c(e){var s=e.children,r=e.classes,l=(e.key,e.draggable),c=void 0!==l&&l,d=e.onDragEnd,a=void 0===d?null:d,t=e.onDragOver,h=void 0===t?null:t,x=e.onDragStart,o=void 0===x?null:x;return(0,i.jsx)("tr",{draggable:c,onDragOver:h&&h,onDragStart:o&&o,onDragEnd:a&&a,className:(0,n.AK)("hover:bg-gray-50",r),children:s})}function d(e){var s=e.children,r=e.classes,l=e.key;return(0,i.jsx)("th",{scope:"col",className:(0,n.AK)("py-3",r),children:s},l)}function a(e){e.children;var s=e.classes,r=e.headers,l=e.thClasses;return(0,i.jsx)("thead",{className:(0,n.AK)("bg-gray-200 hover:bg-gray-200 uppercase ",s),children:(0,i.jsx)(c,{classes:" hover:!bg-gray-200 text-left",children:r.length&&r.map((function(e,s){return l&&l[1]===s?(0,i.jsxs)(d,{classes:l[0],children:[e," "]},s):(0,i.jsx)(d,{classes:l,children:e},s)}))})})}function t(e){var s=e.children,r=e.classes,l=e.key,c=void 0===l?"":l,d=e.onClick;return(0,i.jsx)("td",{onClick:d,className:(0,n.AK)("py-3 text-sm text-gray-700",r),children:s},c)}function h(e){var s=e.children,r=e.id,l=e.classes,c=void 0===l?"":l;return(0,i.jsx)("tbody",{id:r,className:(0,n.AK)("bg-white",c),children:s})}function x(e){var s=e.children,r=e.id,l=e.headers,c=void 0===l?[]:l,d=e.classes,t=void 0===d?"":d,h=e.thClasses,x=void 0===h?"":h;return(0,i.jsxs)("table",{id:r,className:(0,n.AK)("w-full text-sm text-left text-gray-500 dark:text-gray-400",t),children:[c.length?(0,i.jsx)(a,{headers:c,thClasses:x,classes:"pl-2"}):null,s]})}function o(e){e.children;var s=e.label,r=void 0===s?"Default Checkbox":s;return(0,i.jsxs)("div",{className:"flex items-center mb-4 justify-center pt-4",children:[(0,i.jsx)("input",{id:"tems_and_conditions",type:"checkbox",value:"",className:"w-4 h-4 text-themeColor bg-gray-100 border-gray-300 rounded dark:focus:ring-themeColor dark:ring-offset-themeColor focus:ring-2 dark:bg-themeColor dark:border-themeColor"}),(0,i.jsx)("label",{htmlFor:"tems_and_conditions",className:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:r})]})}var j=r(1087),v=function(){var e=(0,l.v9)((function(e){return e.userSchedules})),s=e.isNewSchedule,r=(e.newSessionNotice,e.registerUserSchedule),d=(0,l.v9)((function(e){return e.users})).singleUser,a=(0,l.v9)((function(e){return e.branches})).branches,v=function(e){var s="";return a.map((function(r){r._id===e&&(s=r.name)})),s};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"w-full col-span-12 pt-10",children:!s&&Object.keys(r).length&&r[2].hasOwnProperty("email")&&function(){var e=(0,n.AW)(r[1].session_date),s=r[1].session_time,l=r[1].session_name,a=r[2].name,u=d.name;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{headers:["Session Details","Patient Details"],classes:"w-full sm:w-[50%] sm:translate-x-1/2 border",id:"welocmemessage",children:(0,i.jsxs)(h,{children:[(0,i.jsxs)(c,{children:[(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("div",{children:"Session Name"}),(0,i.jsx)("div",{children:":"}),(0,i.jsx)("div",{children:l})]})}),(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex ",children:[(0,i.jsx)("div",{children:"Name"}),(0,i.jsx)("div",{children:":"}),(0,i.jsx)("div",{children:a})]})})]}),(0,i.jsxs)(c,{classes:"bg-gray-50",children:[(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex   ",children:[(0,i.jsx)("div",{children:"Doctor Name"}),(0,i.jsx)("div",{children:":"}),(0,i.jsx)("div",{children:u})]})}),(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex ",children:[(0,i.jsx)("div",{children:"Email"}),(0,i.jsx)("div",{children:":"}),(0,i.jsx)("div",{children:r[2].email})]})})]}),(0,i.jsxs)(c,{children:[(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex   ",children:[(0,i.jsx)("div",{children:"Session Date"}),(0,i.jsx)("div",{children:":"}),(0,i.jsx)("div",{children:e})]})}),(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex ",children:[(0,i.jsx)("div",{children:"Phone"}),(0,i.jsx)("div",{children:":"}),(0,i.jsx)("div",{children:r[2].phone})]})})]}),(0,i.jsxs)(c,{classes:"bg-gray-50",children:[(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex   ",children:[(0,i.jsx)("div",{children:"Session Time"}),(0,i.jsx)("div",{children:":"}),(0,i.jsx)("div",{children:s})]})}),(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex ",children:[(0,i.jsx)("div",{children:"online"===r[1].branch_id?"Session Type ":"Branch Name "}),(0,i.jsx)("div",{children:" :"}),(0,i.jsx)("div",{children:"online"===r[1].branch_id?"Online":v(r[1].branch_id)})]})})]}),(0,i.jsxs)(c,{classes:"bg-gray-50",children:[(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsxs)("div",{className:"flex   ",children:[(0,i.jsx)("div",{children:"Session Fee"}),(0,i.jsx)("div",{children:":"}),(0,i.jsxs)("div",{children:["\u09f3",r[1].session_fee]})]})}),(0,i.jsx)(t,{classes:"!py-2",children:(0,i.jsx)("div",{className:"flex "})})]})]})}),(0,i.jsx)(o,{label:(0,i.jsxs)("p",{children:["I accept the ",(0,i.jsx)(j.rU,{className:"text-blue-700",to:"/terms-of-services",children:" Terms of Services"})," and ",(0,i.jsx)(j.rU,{className:"text-blue-700",to:"/refund-policy",children:" Refund Policy"})]})})]})}()})})}}}]);
//# sourceMappingURL=934.ae6965c5.chunk.js.map