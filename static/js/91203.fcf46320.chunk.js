"use strict";(self.webpackChunksofia_frontend=self.webpackChunksofia_frontend||[]).push([[91203],{91203:(e,r,a)=>{a.d(r,{Z:()=>H});var s=a(72791),t=a(60364),i=a(61134),o=a(90204),l=a(75407),n=a(83138),d=a(79684),c=a(91356),u=a(631),m=a(98775),p=a(96052),v=a(81694),f=a.n(v),g=a(61619),h=a(45954),x=a(76973),b=a(18534),_=a(45855),j=a(62701),S=a(69085);var y=a(29504),E=a(42195),A=a.n(E),T=a(57910),Z=a(80184);const C=e=>{var r,a,s,t,i,o,l,n,d,c,u,m,p,v;let{hookForm:f,dropeZoneSize:g,handleSelectChange:h}=e;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(T.Z,{customStylesText:"dropezone-text",label:"Constancia de Situaci\xf3n Fiscal",defaultFile:f.getValues("files.fiscal_situtation_file"),errors:null===(r=f.formState.errors)||void 0===r||null===(a=r.files)||void 0===a?void 0:a.fiscal_situtation_file,setValue:e=>h("files.fiscal_situtation_file",e),...g}),(0,Z.jsx)(T.Z,{label:"CURP",customStylesText:"dropezone-text",defaultFile:f.getValues("files.curp_file"),errors:null===(s=f.formState.errors)||void 0===s||null===(t=s.files)||void 0===t?void 0:t.curp_file,setValue:e=>h("files.curp_file",e),...g}),(0,Z.jsx)(T.Z,{label:"C\xe9dula Profesional",customStylesText:"dropezone-text",defaultFile:f.getValues("files.profetional_id_file"),errors:null===(i=f.formState.errors)||void 0===i||null===(o=i.files)||void 0===o?void 0:o.profetional_id_file,setValue:e=>h("files.profetional_id_file",e),...g}),(0,Z.jsx)(T.Z,{label:"C\xe9dula de Especializaci\xf3n",customStylesText:"dropezone-text",defaultFile:f.getValues("files.specialization_id_file"),errors:null===(l=f.formState.errors)||void 0===l||null===(n=l.files)||void 0===n?void 0:n.specialization_id_file,setValue:e=>h("files.specialization_id_file",e),...g}),(0,Z.jsx)(T.Z,{label:"Comprobante de Domicilio",customStylesText:"dropezone-text",defaultFile:f.getValues("files.address_file"),errors:null===(d=f.formState.errors)||void 0===d||null===(c=d.files)||void 0===c?void 0:c.address_file,setValue:e=>h("files.address_file",e),...g}),(0,Z.jsx)(T.Z,{label:"INE",customStylesText:"dropezone-text",defaultFile:f.getValues("files.ine_file"),errors:null===(u=f.formState.errors)||void 0===u||null===(m=u.files)||void 0===m?void 0:m.ine_file,setValue:e=>h("files.ine_file",e),...g}),(0,Z.jsx)(T.Z,{label:"CV",customStylesText:"dropezone-text",defaultFile:f.getValues("files.cv_file"),errors:null===(p=f.formState.errors)||void 0===p||null===(v=p.files)||void 0===v?void 0:v.cv_file,setValue:e=>h("files.cv_file",e),...g}),(0,Z.jsx)(T.Z,{maxFiles:15,className:"mb-4",customStylesText:"dropezone-text",defaultFile:f.getValues("files.other_files"),label:"Otros Archivos (M\xe1ximo 15 archivos)",acceptFiles:{image:!0,xlsx:!0,docs:!0,pdf:!0},setValue:e=>h("files.other_files",e)})]})};var F=a(31052),k=a(3556),w=a(12383);const N=e=>{let{name:r,text:a,hookForm:s,customStyles:t,...i}=e;return(0,Z.jsxs)("div",{className:"group ".concat(t),children:[(0,Z.jsx)("p",{className:"checkbox-text",children:a}),(0,Z.jsx)("div",{className:"form-check",children:(0,Z.jsx)(p.II,{...i,addon:!0,type:"checkbox",className:"check-inpt",value:s.getValues(r),checked:s.getValues(r),onChange:e=>{let{target:a}=e;s.setValue(r,a.checked),s.trigger(r)}})})]})},O=e=>{let{ac:r,hookForm:a,shfOptions:s,handleSelectChange:t}=e;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("p",{className:"title",children:"SHF"}),(0,Z.jsx)(k.Z,{type:"number",name:"record.shf",disabled:r.shf,label:"Registro ante SHF",register:a.register,errors:a.formState.errors,options:{required:{value:!r.shf,message:"Este campo no puede estar vac\xedo."},maxLength:{value:r.shf?void 0:7,message:"Este campo debe de tener m\xe1ximo 7 car\xe1cteres."},minLength:{value:r.shf?void 0:7,message:"Este campo debe de tener m\xednimo 7 car\xe1cteres."}}}),(0,Z.jsx)(w.Z,{placeholder:"",className:"w-100",name:"record.type_shf",isDisabled:r.type_shf,label:"Tipo de Registro ante SHF",options:s,value:a.getValues("record.type_shf"),onChange:e=>t("record.type_shf",e),errors:a.formState.errors}),(0,Z.jsx)(F.Z,{name:"record.date_expiration",disabled:r.date_expiration,label:"Vigencia de Registro",errors:a.formState.errors,value:a.getValues("record.date_expiration"),onChange:e=>{let[r]=e;return t("record.date_expiration",r)}}),(0,Z.jsx)("hr",{}),(0,Z.jsx)("p",{className:"title",children:"TDF"}),(0,Z.jsx)(k.Z,{name:"record.key_tdf",disabled:r.key_tdf,label:"Clave TDF",register:a.register,errors:a.formState.errors,options:{required:{value:!r.key_tdf,message:"Este campo no puede estar vac\xedo."},maxLength:{value:r.key_tdf?void 0:8,message:"Este campo debe de tener m\xe1ximo 8 car\xe1cteres."},minLength:{value:r.key_tdf?void 0:7,message:"Este campo debe de tener m\xednimo 7 car\xe1cteres."}}}),(0,Z.jsx)(k.Z,{name:"record.key_perit_independent",disabled:r.key_perit_independent,label:"Clave Perito Independiente",register:a.register,errors:a.formState.errors,options:{required:{value:!r.key_perit_independent,message:"Este campo no puede estar vac\xedo."},maxLength:{value:r.key_perit_independent?void 0:8,message:"Este campo debe de tener 10 car\xe1cteres."},minLength:{value:r.key_perit_independent?void 0:8,message:"Este campo debe de tener 10 car\xe1cteres."}}}),(0,Z.jsx)(N,{name:"record.enable_controller_evaluator",disabled:r.enable_controller_evaluator,text:"Habilitado para ser Controlador y a su vez Valuador de un mismo aval\xfao (Formato TDF):",hookForm:a}),(0,Z.jsx)(N,{name:"record.enable_print_iavsa",disabled:r.enable_print_iavsa,text:"Habilitado para impresi\xf3n de formato IAVSA:",hookForm:a}),(0,Z.jsx)(N,{name:"record.enable_controller_evaluator_iavsa",disabled:r.enable_controller_evaluator_iavsa,text:"Habilitado para ser Controlador y a su vez Valuador de un mismo aval\xfao (Formato IAVSA):",hookForm:a,customStyles:"mb-4"})]})},V=e=>{var r,a,s,t;let{hookForm:i,isRequire:o,dropeZoneSize:l,handleSelectChange:n}=e;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(T.Z,{label:".key",customStylesText:"dropezone-text",defaultFile:i.getValues("signature.signature_file"),errors:null===(r=i.formState.errors)||void 0===r||null===(a=r.signature)||void 0===a?void 0:a.signature_file,setValue:e=>n("signature.signature_file",e),...l}),(0,Z.jsx)(T.Z,{label:".cer",customStylesText:"dropezone-text",defaultFile:i.getValues("signature.cerf_file"),errors:null===(s=i.formState.errors)||void 0===s||null===(t=s.signature)||void 0===t?void 0:t.cerf_file,setValue:e=>n("signature.cerf_file",e),...l}),(0,Z.jsx)(k.Z,{type:"password",name:"signature.signing_password",label:"Contrase\xf1a",icon:(0,Z.jsx)(j.ro,{size:15}),register:i.register,errors:i.formState.errors,options:{required:{value:o(),message:"Este campo no puede estar vac\xedo."}}})]})},z={width:300,height:100},B=e=>{let{title:r,errors:a,toggleTab:s,activeTab:t}=e;return(0,Z.jsx)(p.LY,{children:(0,Z.jsx)(p.OL,{active:t,onClick:s,className:f()("",{invalid:a}),children:r})})},I=e=>{var r,a,s;let{hookForm:t,delegations:{ac:i,isRequire:o,toggleTab:l,activeTab:n,handleOpen:d,shfOptions:c,handleSelectChange:u}}=e;return(0,Z.jsxs)("div",{id:"SideBarModal",className:f()("",{"wrapper-sidebar":d()}),children:[(0,Z.jsxs)(p.JL,{tabs:!0,fill:!0,className:"nav-header",children:[(0,Z.jsx)(B,{title:"Registro",activeTab:"1"===n,toggleTab:()=>l("1"),errors:!(null===(r=t.formState.errors)||void 0===r||!r.record)}),(0,Z.jsx)(B,{title:"Documentos",activeTab:"2"===n,toggleTab:()=>l("2"),errors:null===(a=t.formState.errors)||void 0===a?void 0:a.files}),(0,Z.jsx)(B,{title:"Firmas",activeTab:"3"===n,toggleTab:()=>l("3"),errors:null===(s=t.formState.errors)||void 0===s?void 0:s.signature})]}),(0,Z.jsx)("div",{className:"body-sidebar",children:(0,Z.jsx)(A(),{children:(0,Z.jsx)("div",{className:"wrapper",children:(0,Z.jsxs)(p.I5,{className:"py-50 pr-2",activeTab:n,children:[(0,Z.jsx)(p.Jm,{className:"pr-2",tabId:"1",children:(0,Z.jsx)(O,{ac:i,hookForm:t,shfOptions:c,handleSelectChange:u})}),(0,Z.jsx)(p.Jm,{tabId:"2",children:(0,Z.jsx)(C,{hookForm:t,dropeZoneSize:z,handleSelectChange:u})}),(0,Z.jsx)(p.Jm,{tabId:"3",children:(0,Z.jsx)(V,{hookForm:t,isRequire:o,dropeZoneSize:z,handleSelectChange:u})})]})})})})]})},L=(0,t.$j)((e=>{var r,a;let{_authSlice:s}=e;return{role:null!==(r=null===s||void 0===s||null===(a=s.user)||void 0===a?void 0:a.role)&&void 0!==r?r:""}}))((e=>{let{role:r,hookForm:a,...t}=e;const[i,o]=(0,s.useState)("1");return(0,Z.jsx)(I,{hookForm:a,delegations:{toggleTab:e=>{i!==e&&o(e)},activeTab:i,isRequire:()=>"administrator"!==r,...t}})}));var U=a(75358);const R=(0,d.Ev)({UsersSliceActions:S.Z.actions}),q=(0,t.$j)(null,R)((e=>{var r;let{usersSliceActions:a,delegations:{ac:s,image:t,isOpen:o,loading:l,setImage:n,isEditing:d,hookForm:c,shfOptions:u,rolesOptions:m,statesOptions:v,handleSubmitForm:S,handleSelectChange:E,handleOpenExtraForm:A}}=e;return(0,Z.jsxs)(p.u_,{size:"lg",id:"ModalUsers",isOpen:o,className:f()("modal-dialog-centered",{"sidebar-active":A()}),children:[(0,Z.jsx)(p.xB,{toggle:()=>a.closeCreateUserModal(),children:(0,Z.jsx)("span",{children:"Agregar Usuario"})}),(0,Z.jsx)(L,{ac:s,hookForm:c,shfOptions:u,handleOpen:A,handleSelectChange:E}),(0,Z.jsxs)("form",{onSubmit:S,children:[(0,Z.jsxs)(p.fe,{children:[(0,Z.jsxs)("div",{className:"img-form-wrapper",children:[(0,Z.jsx)(y.Z,{image:t,setImage:n,defaultImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATFSURBVHgB7ZpfbtNKFMbPjB0JIR66gxtWgO/j1aWleYA28NB2BaQroF1BmxUkXUFhBS0vpE2FElIQj2QHNTvIE4ogM8OZ2G5t16Ee+0wpwj+pajKJx/4y/875ZgAqKioq/iAY3AL9/iePMbmhFKwqpep42/r85gwm+G8shPwAIF83mw0fLGNVcL8/8ADcjhaa85JjKWe7NoVzsES/f/5KKfeLgVjNJufuxdnZ+R5YwkoL9/ujQ6VYK/tT5eNn/vzm7Kp7p+GcdZ8+fbwLxJALPj2dt85+4iZMTYRgB9PprLu11ZjEP+v1BnUAZ5Vz2EuLtyGaVHCvN2rhQx6mio+/fZttp4Vev3ZQx+7cwZeb8XIh1Nbz5yvHQASZ4KOjwdL9+7Uv2GXrURmO34P19eUdMODk5LyLs/erWNEEf7CHN/1geSGbtO7dczbjYvVYNRWrCa8Zx4rwh+TG9SyCTDDnPDGzSikaUBApITFuGXM2gAgSwcHEc9W62CWHZdbSZnN5iMNhGL3HYMV7//7TP0AAiWDOHS/+Xkr1FkqTrOP79+I9Jg6JYBSYEIwt7ENJ0nXg+yUgwEqkJSUrPaOm68BufXcEM5Z8OM7LPxxFHZn1AgE4waRaA+pQknQdGNCMgQCiLi2GiUo5I1hGknXgMkcimCzSwhgaoyy4nLxwLW3o5QUKEIaZF1clyl9bW3kIBJBNWlLKxDKCyUAHCsJ5bZCsG9pABGFoKbuhgxHhnZ19NBZ9ejrqpEPU6VTcveRBgw+L8TQ7ShXncjF08vHggXuIrZnIlnCN3242V14DEeT5cEa2o2/jY5dv68ktLTwUiu4I7OBfeilqr60t7wMhVhyPbNERysd125+/UosdD/z0DU5ULSDGmonX653vBy6GOWgB7a6vP+6CBay6lnp5YcztYGtv5vm+zpA4n+0+e9YgWXOzuBVfOkgfeYsx/gRDRg9bMByrgaGHQj9IyY9fvPjfmtCKioqKPxLjWTqKjDDkay0OGmzDfG0UCvGjbWoWGgkOdwMHGSHgb4L5sxnbMlnOcgsOclSdtsUzmTuB0c6ECzlxnNpeEPsG6A2yMGgg2QIxAbvzauxttDOxn+fa3ILT+7xCiH9vY8c+C93bHGe+9xwOLecl5BRsYADQ7SyURd8bxfpXJfmHmbUTALYpOpSKCr4js7Q5Jl3av3xF4DuXBXPtS4cUh1juZclAcMIIX8IEfxV+E/qkQTwWwCDoa95rcwtGc+0gcSFnhzrqglsmiAeSe9EoPreraRRpoSt5kQonx7joN6iOI9xEeKxCBz+x3Uozk95o0sIdve1UkafPdQSOhl30Pa6LzXymX2IkWG+dXN8FUPOQ8+RkRHYOI45uVX1QTQcaabFI23Q7p5CntdiRXOw/m3KDX60p5FkXNvHevRvtuC7bW5Q5BembPjTKh9PpbHzzOa3PdaV+eLUaexQcQs0+sqhjeDT82kVt3FKupYkNq/edMPmYRCZ8hE5IsGwpT8qpbVylZttleg+JTavXRXzol6kshoxAqPl4zYL46OEAu6W74zhqo7wbonA+YG/wxZBCaITFrRYdIDieEEwfHH0UnMLR5zZYPfnNKGRlYyHgK45RjOhqKPI/HyoqKir+dn4Cc7Ipv353irwAAAAASUVORK5CYII="}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("div",{className:"name-row",children:[(0,Z.jsx)(k.Z,{name:"prefix",disabled:s.prefix,register:c.register,errors:c.formState.errors,placeholder:"T\xedtulo",options:{required:{value:!s.prefix,message:"Este campo no puede estar vac\xedo."}}}),(0,Z.jsx)(k.Z,{name:"name",disabled:s.name,register:c.register,errors:c.formState.errors,placeholder:"Nombre(s)",options:{required:{value:!s.name,message:"Este campo no puede estar vac\xedo."}}}),(0,Z.jsx)(k.Z,{name:"lastname",disabled:s.lastname,register:c.register,errors:c.formState.errors,placeholder:"Apellido Paterno",options:{required:{value:!s.lastname,message:"Este campo no puede estar vac\xedo."}}}),(0,Z.jsx)(k.Z,{name:"maiden_name",disabled:s.maiden_name,register:c.register,errors:c.formState.errors,placeholder:"Apellido Materno",options:{required:{value:!s.maiden_name,message:"Este campo no puede estar vac\xedo."}}})]}),(0,Z.jsxs)("div",{className:"contact-data-row",children:[(0,Z.jsx)("div",{style:{width:"100%"},children:(0,Z.jsx)(k.Z,{inputGroupSize:"sm",name:"email",disabled:s.email,icon:(0,Z.jsx)(g.Z,{size:10}),register:c.register,errors:c.formState.errors,placeholder:"Correo",options:{required:{value:!0,message:"Este campo no puede estar vac\xedo."},pattern:{value:/\S+@\S+\.\S+/,message:"Formato invalido."}}})}),(0,Z.jsx)("div",{style:{width:"100%"},children:(0,Z.jsxs)(p.cw,{className:"form-group-style",children:[(0,Z.jsxs)("div",{className:"input-group-merge input-group input-group-sm",children:[(0,Z.jsx)("span",{className:f()("input-group-text",{invalid:null===(r=c.formState.errors)||void 0===r?void 0:r.phone}),children:(0,Z.jsx)(h.Z,{size:10})}),(0,Z.jsx)(i.Qr,{name:"phone",disabled:s.phone,control:c.control,rules:{required:!0,validate:e=>(0,b.yf)(e)},render:e=>{var r;let{field:{onChange:a,value:s}}=e;return(0,Z.jsx)(_.ZP,{international:!0,id:"phone",country:"MX",value:s,onChange:a,placeholder:"N\xfamero",className:f()("form-control",{invalid:null===(r=c.formState.errors)||void 0===r?void 0:r.phone})})}})]}),c.formState.errors.phone&&(0,Z.jsx)("span",{className:"text-error mb-1",children:"N\xfamero Invalido"})]})}),(0,Z.jsx)("div",{style:{width:"100%"},children:(0,Z.jsx)(k.Z,{inputGroupSize:"sm",name:"rfc",disabled:s.rfc,register:c.register,errors:c.formState.errors,placeholder:"RFC",options:{required:{value:!s.rfc,message:"Este campo no puede estar vac\xedo."}}})})]})]})]}),(0,Z.jsxs)("div",{className:"user-row",children:[(0,Z.jsx)(k.Z,{name:"username",disabled:s.username,icon:(0,Z.jsx)(x.Z,{size:15}),label:"Nombre de Usuario",register:c.register,errors:c.formState.errors,options:{required:{value:!s.username,message:"Este campo no puede estar vac\xedo."}}}),(0,Z.jsx)("div",{style:{width:"210px"},children:(0,Z.jsx)(w.Z,{name:"role",isDisabled:s.role,label:"Rol",placeholder:"",value:c.getValues("role"),options:m,onChange:e=>E("role",e),errors:c.formState.errors})}),(0,Z.jsx)(k.Z,{type:"password",name:"password",disabled:s.password,label:"Contrase\xf1a",icon:(0,Z.jsx)(j.ro,{size:15}),register:c.register,errors:c.formState.errors,options:{required:{value:!d,message:"Este campo no puede estar vac\xedo."},minLength:{value:8,message:"La contrase\xf1a debe de tener m\xednimo 8 car\xe1cteres."}}})]}),(0,Z.jsx)("h1",{className:"title-education",children:"Educaci\xf3n"}),(0,Z.jsxs)("div",{className:"education-section",children:[(0,Z.jsx)(k.Z,{name:"education.career",disabled:s.career,label:"Carrera",register:c.register,errors:c.formState.errors,options:{required:{value:!s.career,message:"Este campo no puede estar vac\xedo."}}}),(0,Z.jsx)(k.Z,{name:"education.specialty",disabled:s.specialty,label:"Especialidad",register:c.register,errors:c.formState.errors,options:{required:{value:!s.specialty,message:"Este campo no puede estar vac\xedo."}}}),(0,Z.jsx)(k.Z,{type:"number",label:"C\xe9dula",name:"education.identification_card",disabled:s.identification_card,register:c.register,errors:c.formState.errors,options:{required:{value:!s.identification_card,message:"Este campo no puede estar vac\xedo."},minLength:{value:s.identification_card?void 0:7,message:"Este campo debe de tener m\xednimo 7 car\xe1cteres."},maxLength:{value:s.identification_card?void 0:8,message:"Este campo debe de tener m\xe1ximo 8 car\xe1cteres."}}}),(0,Z.jsx)(k.Z,{type:"number",label:"C\xe9dula de Especialidad",name:"education.specialty_certificate",disabled:s.specialty_certificate,register:c.register,errors:c.formState.errors,options:{required:{value:!s.specialty_certificate,message:"Este campo no puede estar vac\xedo."},minLength:{value:s.specialty_certificate?void 0:7,message:"Este campo debe de tener m\xednimo 7 car\xe1cteres."},maxLength:{value:s.specialty_certificate?void 0:8,message:"Este campo debe de tener m\xe1ximo 8 car\xe1cteres."}}})]}),(0,Z.jsx)(w.Z,{isMulti:!0,name:"places",isDisabled:s.places,label:"Estados",placeholder:"",value:c.getValues("places"),options:v,onChange:e=>E("places",e),errors:c.formState.errors})]}),(0,Z.jsx)(p.mz,{children:(0,Z.jsx)(U.Z,{className:"btn",loading:l,label:"Guardar usuario",onClick:S})})]})]})})),G=[{label:"Controlador",value:"controller"},{label:"Valuador",value:"valuer"}],P=[{label:"Administrador",value:"administrator"},{label:"Consulta",value:"consult"},{label:"Invitado",value:"guest"},{label:"Perito",value:"perit"},{label:"Administrador  T\xe9cnico",value:"administrator_technician"}],D=(0,d.Ev)({UsersActions:c.UsersSlice.actions,FileActions:c.FilesSlice.actions,GenericSerivices:m.Z}),H=(0,t.$j)((e=>{var r,a,s,t,i,o,l,n,d,c;let{_usersSlice:u,_filesSlice:m,_authSlice:p}=e;return{userToEdit:null!==(r=null===u||void 0===u||null===(a=u.modal)||void 0===a?void 0:a.info)&&void 0!==r?r:{},isUserDetails:null!==(s=null===u||void 0===u?void 0:u.data)&&void 0!==s?s:{},isEditing:null!==(t=null===u||void 0===u||null===(i=u.modal)||void 0===i?void 0:i.userToEdit)&&void 0!==t?t:"",role:null!==(o=null===p||void 0===p||null===(l=p.user)||void 0===l?void 0:l.role)&&void 0!==o?o:"",isOpen:null!==(n=null===u||void 0===u||null===(d=u.modal)||void 0===d?void 0:d.open)&&void 0!==n&&n,filesToRemoved:null!==(c=null===m||void 0===m?void 0:m.filesToRemoved)&&void 0!==c?c:[]}}),D)((e=>{var r,a,t,c,m,p;let{role:v,isOpen:f,isEditing:g,userToEdit:h,fileActions:x,usersActions:b,statesOptions:_,isUserDetails:j,filesToRemoved:S,genericSerivices:y,...E}=e;const A={"record.type_shf":"administrator"===v||!g,"record.date_expiration":"administrator"===v||!g,"files.fiscal_situtation_file":"administrator"!==v,"files.curp_file":"administrator"!==v,"files.profetional_id_file":"administrator"!==v,"files.specialization_id_file":"administrator"!==v,"files.address_file":"administrator"!==v,"files.ine_file":"administrator"!==v,"signature.signature_file":"administrator"!==v,"signature.cerf_file":"administrator"!==v},T=(0,s.useMemo)((()=>({prefix:(0,d.BT)(v,g?"update":"create","users","!prefix"),name:(0,d.BT)(v,g?"update":"create","users","!name"),lastname:(0,d.BT)(v,g?"update":"create","users","!lastname"),maiden_name:(0,d.BT)(v,g?"update":"create","users","!maiden_name"),rfc:(0,d.BT)(v,g?"update":"create","users","!rfc"),username:(0,d.BT)(v,g?"update":"create","users","!username"),role:(0,d.BT)(v,g?"update":"create","users","!role"),password:(0,d.BT)(v,g?"update":"create","users","!password"),career:(0,d.BT)(v,g?"update":"create","users","!career"),specialty:(0,d.BT)(v,g?"update":"create","users","!specialty"),identification_card:(0,d.BT)(v,g?"update":"create","users","!identification_card"),specialty_certificate:(0,d.BT)(v,g?"update":"create","users","!specialty_certificate"),places:(0,d.BT)(v,g?"update":"create","users","!places"),shf:(0,d.BT)(v,g?"update":"create","users","!shf"),type_shf:(0,d.BT)(v,g?"update":"create","users","!type_shf"),date_expiration:(0,d.BT)(v,g?"update":"create","users","!date_expiration"),key_tdf:(0,d.BT)(v,g?"update":"create","users","!key_tdf"),key_perit_independent:(0,d.BT)(v,g?"update":"create","users","!key_perit_independent"),enable_controller_evaluator:(0,d.BT)(v,g?"update":"create","users","!enable_controller_evaluator"),enable_print_iavsa:(0,d.BT)(v,g?"update":"create","users","!enable_print_iavsa"),enable_controller_evaluator_iavsa:(0,d.BT)(v,g?"update":"create","users","!enable_controller_evaluator_iavsa")})),[g]),C={...null!==h&&void 0!==h?h:{},role:null!==(r=null===(a=P.filter((e=>e.value===(null===h||void 0===h?void 0:h.role))))||void 0===a?void 0:a[0])&&void 0!==r?r:void 0,places:(0,d.qt)(null===h||void 0===h?void 0:h.places)?null===h||void 0===h?void 0:h.places.map((e=>({label:e.name,value:e._id}))):void 0,record:{...null!==(t=null===h||void 0===h?void 0:h.record)&&void 0!==t?t:{},type_shf:null!==(c=null===(m=G.filter((e=>{var r;return e.value===(null===h||void 0===h||null===(r=h.record)||void 0===r?void 0:r.type_shf)})))||void 0===m?void 0:m[0])&&void 0!==c?c:void 0},files:(0,d.qt)(null===h||void 0===h?void 0:h.files)?null===h||void 0===h?void 0:h.files.reduce(((e,r)=>({...e,[r.description]:"other_files"===r.description?[...(0,d.qt)(e[r.description])?e[r.description]:[],{...r,path:r.name}]:{...r,path:r.name}})),{}):{}},{reset:F,unregister:k,...w}=(0,i.cI)({defaultValues:C}),[N,O]=(0,s.useState)(null!==(p=null===h||void 0===h?void 0:h.image)&&void 0!==p?p:null),[V,z]=(0,s.useState)(!1),B=()=>{var e;return Boolean("administrator"!==(null===(e=w.getValues("role"))||void 0===e?void 0:e.value)&&w.getValues("role"))},I=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Este campo no puede estar vac\xedo.";w.getValues(e)||w.setError(e,{type:"manual",message:r})},L=(e,r)=>{let{description:a,value:s,id_item:t}=r;if(!(s instanceof File))return;const i={value:s,id_item:t,description:a,module:"user"},o=y.add({module:"files",dataToSubmit:i}).unwrap();e.push(o)},U=async(e,r)=>{let{data:a}=r;try{if(g){await(async()=>{try{const e=S.map((e=>y.remove({module:"files/".concat(e._id)}).unwrap())),r=(await Promise.allSettled(e)).map((e=>e.value.status)).filter((e=>200!==e));return x.filesRemoved(),r}catch(e){return console.error("[Error on handleRemovedFiles]: ",e),e}})()>0&&u.Z.error({title:"Error al intentar eliminar un archivo.",body:"Ocurri\xf3 un problema al intentar eliminar un archivo."})}const r=await(async(e,r)=>{try{const a=[];for(const[s,t]of Object.entries(e))"other_files"===s&&(0,d.qt)(t)&&t.forEach((e=>L(a,{description:"other_files",value:e,id_item:r}))),L(a,{description:s,value:t,id_item:r});return(await Promise.allSettled(a)).map((e=>e.value.status)).filter((e=>200!==e))}catch(a){return console.error("[Error on handleSubmitFiles]: ",a),a}})(e,a._id);if(z(!1),r>0)return void u.Z.error({icon:o.Z,title:"Error al intentar subir un archivo.",body:"Ocurri\xf3 un error al subir un archivo, favor de verificar el tipo de archivo."});u.Z.success({icon:l.Z,title:"Usuario "+(g?"Editado":"Creado"),body:(0,Z.jsxs)("p",{children:["El usuario ",(0,Z.jsx)("b",{children:a.email})," se ha ",g?"editado":"creado"," exitosamente!",!g&&(0,Z.jsxs)(Z.Fragment,{children:["Le enviamos un correo con sus accesos a ",(0,Z.jsx)("b",{children:a.email})]})]})}),null!==j&&void 0!==j&&j._id?y.get({module:"users/".concat(g),actionType:"getUser"}):y.getAll({module:"users",actionType:"getAllUsers"}),b.closeCreateUserModal()}catch(s){console.error("Error on handleSuccessStatus: ",s),z(!1)}};return(0,s.useEffect)((()=>{null!==j&&void 0!==j&&j._id&&f?b.setModalData({data:{...j}}):y.get({module:"users/".concat(g),actionType:"setModalData"}),F({...C})}),[f,g]),(0,s.useEffect)((()=>{h&&F({...C})}),[h]),(0,Z.jsx)(q,{delegations:{ac:T,image:N,isOpen:f,loading:V,hookForm:w,setImage:O,isEditing:g,shfOptions:G,rolesOptions:P,statesOptions:_,handleSubmitForm:function(){B()||(k(["record.shf","record.key_tdf","record.key_perit_independent"]),w.clearErrors([...Object.keys(A)])),(()=>{if(I("role"),I("places"),B())for(const[e,r]of Object.entries(A))r&&I(e)})(),w.handleSubmit((async e=>{try{z(!0);const s={...e},t={...e.files},i=s.role.value,l=s.places.map((e=>e.value));delete s.role,delete s.image,delete s.files,delete s.places;let d={};var r,a;if(B())d={record:{...null===s||void 0===s?void 0:s.record,type_shf:null===s||void 0===s||null===(r=s.record)||void 0===r||null===(a=r.type_shf)||void 0===a?void 0:a.value}};delete s.record;const c={role:i,image:N,places:l,is_delete_image:!N,...s,...d};let m;m=g?await y.update({module:"users/".concat(h._id),dataToSubmit:c}).unwrap():await y.add({module:"users",dataToSubmit:c}).unwrap();const{status:p,data:v}=await m;if(200===p)return void U(t,v);if(z(!1),409===p){const{err:e}=v;return void((e,r)=>{for(const[a,s]of Object.entries(r))s&&(u.Z.warning({icon:n.Z,title:"Campo duplicado",body:(0,Z.jsxs)("p",{children:["El campo ",(0,Z.jsx)("b",{children:e[a]})," ya est\xe1 siendo utilizado por otro usuario, favor de ingresar un valor diferente"]})}),w.setError(a,{type:"manual",message:"Campo duplicado."}))})(s,e)}u.Z.error({icon:o.Z,title:"Error",body:"Ocurri\xf3 un error, favor de revisar su conexi\xf3n a internet."})}catch(s){console.error("Error on handleSubmitForm: ",s),z(!1)}}))(...arguments)},handleSelectChange:(e,r)=>{w.setValue(e,r),w.clearErrors(e)},handleOpenExtraForm:B,...E}})}))}}]);
//# sourceMappingURL=91203.fcf46320.chunk.js.map