(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(9),o=a.n(n),m=a(11),i=a(7),c=(a(19),[{id:1,firstName:"Soleman",lastName:"Sayeed",position:"Doctor",email:"Solemansay@gmail.com",phoneNumber:"619-629-9008"},{id:2,firstName:"Sally",lastName:"Beckem",position:"Doctor",email:"Sallysal@gmail.com",phoneNumber:"619-629-9018"},{id:3,firstName:"Fred",lastName:"Korse",position:"Nurse Practitioner",email:"Freddy@gmail.com",phoneNumber:"619-629-9348"},{id:4,firstName:"Brandy",lastName:"Sailor",position:"Bartender",email:"BrandyFineGirl@gmail.com",phoneNumber:"619-629-9123"},{id:5,firstName:"Freddy",lastName:"Mercury",position:"Singer",email:"BurbenFreddy@gmail.com",phoneNumber:"619-629-1234"},{id:6,firstName:"Jack",lastName:"Sparrow",position:"Professional Pirate",email:"Tortuga@gmail.com",phoneNumber:"619-100-9123"},{id:7,firstName:"Peter",lastName:"Parker",position:"Photographer",email:"SpiderMan@gmail.com",phoneNumber:"456-629-9123"},{id:8,firstName:"Pat",lastName:"Post",position:"Postman",email:"BlackandwhiteCat@gmail.com",phoneNumber:"619-669-9243"},{id:9,firstName:"Ashley",lastName:"Theodore",position:"Doctor",email:"ashash@gmail.com",phoneNumber:"619-629-2323"},{id:10,firstName:"Peter",lastName:"Griffin",position:"Safety Inspector",email:"FamilyGuy@gmail.com",phoneNumber:"6123-629-91323"}]),s=a(21),u=a(10),p=function(e){return r.a.createElement(s.a,{fluid:!0},r.a.createElement(u.a,null,r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Use the table bellow to view your entire employee directory at once so that you have quick access to their information.")))},d=a(22),N=a(23),h=a(24),y=function(e){var t=e.employees;return r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.position),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phoneNumber))})))},f=function(e){var t=e.employees;return r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement(N.a,null,r.a.createElement(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",{className:""},r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Position"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Phone-Number"))),r.a.createElement(y,{employees:t})))))},E=a(12);var b=function(){var e,t=Object(l.useState)({employees:Object(m.a)(c)}),a=Object(i.a)(t,2),n=a[0],o=a[1],s=Object(l.useState)(""),u=Object(i.a)(s,2),d=u[0],N=u[1];return Object(l.useEffect)((function(){o({employees:c})}),[]),r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(E.a,{className:"sortBtn",onClick:function(){var e=n.employees.sort((function(e,t){return e.firstName>t.firstName?1:-1}));o({employees:e})},variant:"outline-success"},"Sort employees alphabetically"," "),r.a.createElement("input",{className:"nameSearch",value:d,onChange:function(e){return N(e.target.value)}}),r.a.createElement(f,{employees:(e=d,n.employees.filter((function(t){return console.log(t),-1!==t.firstName.toLowerCase().indexOf(e.toLowerCase())})))}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.825ad6cd.chunk.js.map