import{a as e,y as w,D as v,E as N,v as y,r as C,G as z,H as F,R as L,J as E,K as k,N as o,Q as c,V as d,W as m,I as x,X as u,Y as M,Z as I,_ as l,$ as S,a0 as P}from"./index-5bbba7cd.js";function V(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-4 cursor-pointer",viewBox:"0 0 128 128",children:e.jsx("path",{d:"M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z","data-original":"#000000"})})}function A(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-4 cursor-pointer",viewBox:"0 0 128 128",children:[e.jsx("path",{d:"M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM64 96c-31.955 0-50.553-24.775-55.293-31.994C13.447 56.775 32.045 32 64 32c31.955 0 50.553 24.775 55.293 31.994C114.535 71.205 95.854 96 64 96zm0-40c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16z","data-original":"#000000"}),e.jsx("path",{d:"M93.207 34.793a4 4 0 00-5.657 0L82.666 43.334A39.969 39.969 0 0064 40c-13.234 0-24 10.766-24 24s10.766 24 24 24c5.39 0 10.615-1.062 15.343-2.944l5.884 5.884a4 4 0 005.657-5.657l-2.829-2.828a4 4 0 00-5.657 0L72 82.334A23.923 23.923 0 0164 88c-13.234 0-24-10.766-24-24s10.766-24 24-24a23.923 23.923 0 016.334 1.366l-7.534 7.534a4 4 0 000 5.657l2.829 2.828a4 4 0 005.657 0l5.657-5.657 4.243 4.243a39.968 39.968 0 003.543-12.708c-.102-.103-.162-.215-.265-.314z"})]})}function B(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-4",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"10",cy:"7",r:"6","data-original":"#000000"}),e.jsx("path",{d:"M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z","data-original":"#000000"})]})}const D=l.object({email:l.string().email({message:"Invalid email address"}),password:l.string().min(6,{message:"Password must be at least 6 characters"})});function H(){const h=w(),t=v(),[p,{isLoading:b}]=N(),i=y(),[n,g]=C.useState(!1),a=z({resolver:F(D),defaultValues:{email:"",password:""}});L.useEffect(()=>{i.user&&t("/")},[i,t]);const j=async s=>{try{const r=await p(s).unwrap();h(S({user:r.data,isLoading:!1})),P(r.access_token)}catch{alert("Login Failed")}},f=()=>{g(s=>!s)};return e.jsxs(e.Fragment,{children:[b&&e.jsx(E,{}),e.jsx("div",{className:"font-[sans-serif] ",children:e.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center py-6 px-4",children:e.jsxs("div",{className:"grid md:flex items-center justify-between max-w-7xl w-full",children:[e.jsx("div",{className:"border lg:order-last rounded-md p-6 max-w-md  max-md:mx-auto",children:e.jsx(k,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(j),className:"space-y-6",children:[e.jsxs("div",{className:"mb-10",children:[e.jsx("h3",{className:"text-3xl font-extrabold",children:"Sign in"}),e.jsx("p",{className:"text-sm mt-4",children:"Sign in to your account and explore a world of possibilities. Your journey begins here."})]}),e.jsx(o,{control:a.control,name:"email",render:({field:s})=>e.jsxs(c,{children:[e.jsx(d,{children:"Email"}),e.jsx(m,{children:e.jsxs("div",{className:"relative flex items-center",children:[e.jsx(x,{...s,type:"email",placeholder:"Enter user email",className:"w-full text-sm border border-gray-300 px-4 py-3 rounded-md ",required:!0}),e.jsx(B,{})]})}),e.jsx(u,{})]})}),e.jsx(o,{control:a.control,name:"password",render:({field:s})=>e.jsxs(c,{children:[e.jsx(d,{children:"Password"}),e.jsx(m,{children:e.jsxs("div",{className:"relative flex items-center",children:[e.jsx(x,{...s,type:n?"text":"password",placeholder:"Enter password",className:"w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]",required:!0}),e.jsxs("div",{onClick:f,className:"absolute right-1 mb-4 cursor-pointer",children:[n?e.jsx(A,{}):e.jsx(V,{})," "]})]})}),e.jsx(u,{})]})}),e.jsx("div",{className:"flex items-center justify-between gap-2",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),e.jsx("label",{htmlFor:"remember-me",className:"ml-3 block text-sm",children:"Remember me"})]})}),e.jsx("div",{className:"!mt-10",children:e.jsx(M,{type:"submit",className:"w-full py-2.5 px-4 text-sm font-semibold rounded focus:outline-none",children:"Log in"})})]})})}),e.jsx(I,{className:"overflow-hidden p-9 ",children:e.jsx("div",{className:"lg:h-[400px] md:h-[300px] max-md:mt-10",children:e.jsx("img",{src:"https://readymadeui.com/login-image.webp",className:"w-full h-full object-cover bg-transparent",alt:"Dining Experience"})})})]})})})]})}export{H as default};
