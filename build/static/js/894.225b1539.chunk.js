"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[894],{1894:function(e,a,s){s.r(a),s.d(a,{default:function(){return T}});var r=s(29439),l=s(72791),i=s(6153),n=s(1413),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},o=s(54291),d=function(e,a){return l.createElement(o.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:a,icon:t}))};d.displayName="MailOutlined";var c=l.forwardRef(d),m=s(38999),u=s(70996),h=s(77483),p=s(13085),g=s(66106),f=s(30914),x=s(54080),j=s(86005),Z=s(87309),w=s(30394),v=s(46485),_={login:function(e){return v.Z.post("auth/login",e)}},y=s(79337),b=s(82492),N=s(10404),E=s(33168),S=s(85830),k=s(80184),O=u.Z.Title,P=[{login:"admin@gmail.com",password:"admin123"},{login:"manager@gmail.com",password:"manager123"},{login:"seller@gmail.com",password:"seller123"},{login:"moderator@gmail.com",password:"moderator123"},{login:"deliveryman@gmail.com",password:"deliveryman123"}],T=function(){var e=(0,E.$)().t,a=(0,y.I0)(),s=h.Z.useForm(),n=(0,r.Z)(s,1)[0],t=(0,l.useState)(!1),o=(0,r.Z)(t,2),d=o[0],u=o[1],v=(0,y.v9)((function(e){return e.globalSettings})).settings;return(0,k.jsx)("div",{className:"login-container",children:(0,k.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:(0,k.jsx)(g.Z,{justify:"center",className:"w-100",children:(0,k.jsx)(f.Z,{children:(0,k.jsx)(x.Z,{className:"card",children:(0,k.jsxs)("div",{className:"my-4 pl-4 pr-4 w-100",children:[(0,k.jsx)("div",{className:"app-brand text-center",children:(0,k.jsx)(O,{className:"brand-logo",children:v.title||S.O})}),(0,k.jsx)(g.Z,{justify:"center",children:(0,k.jsx)(f.Z,{children:(0,k.jsxs)(h.Z,{name:"login-form",layout:"vertical",form:n,onFinish:function(s){var r={email:s.email,password:s.password};u(!0),_.login(r).then((function(s){var r={fullName:s.data.user.firstname+" "+s.data.user.lastname,role:s.data.user.role,urls:i.a[s.data.user.role],img:s.data.user.img,token:s.data.access_token,email:s.data.user.email,id:s.data.user.id};"user"!==r.role?(localStorage.setItem("token",s.data.access_token),a((0,b.M)(r)),a("admin"===r.role?(0,N.wv)():(0,N._h)())):p.Z.error({message:e("ERROR_101")})})).finally((function(){return u(!1)}))},style:{width:"420px"},children:[(0,k.jsx)(h.Z.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your Email!"}],children:(0,k.jsx)(j.Z,{prefix:(0,k.jsx)(c,{className:"site-form-item-icon"}),placeholder:"Email"})}),(0,k.jsx)(h.Z.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],children:(0,k.jsx)(j.Z.Password,{prefix:(0,k.jsx)(m.Z,{className:"site-form-item-icon"}),placeholder:"Password"})}),(0,k.jsx)(h.Z.Item,{className:"login-input",children:(0,k.jsx)(Z.Z,{type:"primary",htmlType:"submit",className:"login-form-button",loading:d,children:"Login"})}),"true"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_IS_DEMO?(0,k.jsx)(w.Z,{bordered:!0,size:"small",children:P.map((function(e,a){return(0,k.jsxs)(l.Fragment,{children:[(0,k.jsx)(w.Z.Item,{span:2,label:e.login,children:e.password}),(0,k.jsx)(w.Z.Item,{span:1,children:(0,k.jsx)("a",{href:"/",className:"copy-link",onClick:function(a){return function(e,a){e.preventDefault(),n.setFieldsValue({email:a.login,password:a.password})}(a,e)},children:"Copy"})})]},a)}))}):""]})})})]})})})})})})}}}]);
//# sourceMappingURL=894.225b1539.chunk.js.map