import{r as h,a,K as o,aM as b,aN as x,aO as l,aP as p,aQ as u,aR as r,aU as N,B as i,aV as j,aW as y,aX as g,aY as f}from"./index-3f8f5d35.js";const X=()=>{const n=h.useRef(null),t=async()=>{if(!n.current)return;const e=new g("p","mm","a4"),s=await f(n.current,{scale:2}),d=s.toDataURL("image/png"),c=e.internal.pageSize.getWidth(),m=s.height*c/s.width;e.addImage(d,"PNG",0,0,c,m),e.save("bank-salary-boucher.pdf")};return a.jsxs("div",{children:[a.jsx("div",{ref:n,children:a.jsxs("div",{className:"p-7",children:[a.jsxs("div",{className:"mb-6",children:[a.jsxs("div",{className:"flex justify-between mb-3",children:[a.jsx("p",{children:"To"}),a.jsx("p",{children:"Date: 10/06/2024"})]}),a.jsx("p",{children:"The Branch Manager"}),a.jsx("p",{children:"Ductch Bangla Bank Ltd."}),a.jsx("p",{children:"Rabindra Sarani Branch"}),a.jsx("p",{children:"Sub: Request for salary disbursment"}),a.jsx("p",{className:"mt-2",children:"Dear Sir,"}),a.jsx("p",{children:"We would like to request you to kindly transfer Taka to our following employee accounts by debiting our current account no 3211100001988 in the name of employee's month salary of May. So, please pay the salaries of the above employees in these accounts and the total will be debited from our account."})]}),a.jsx("div",{children:a.jsx(o,{children:a.jsxs(b,{className:"border border-black",children:[a.jsx(x,{className:"border border-black",children:a.jsx(l,{className:"border border-black h-0",children:k.map((e,s)=>a.jsx(p,{className:"border border-black py-[5px] h-0",children:e},s))})}),a.jsxs(u,{className:"border border-black",children:[v.map((e,s)=>a.jsxs(l,{className:"border border-black ",children:[a.jsx(r,{className:"border border-black py-[5px]",children:e.slNo}),a.jsx(r,{className:"border border-black py-[5px]",children:e.name}),a.jsx(r,{className:"border border-black py-[5px]",children:e.designation}),a.jsx(r,{className:"border border-black py-[5px]",children:e.accountNumber}),a.jsx(r,{className:"border border-black py-[5px]",children:e.salary})]},s)),a.jsxs(l,{className:"border border-black bg-gray-100",children:[a.jsx(r,{colSpan:4,className:"text-right font-bold border border-black py-[5px]",children:"Total"}),a.jsx(r,{colSpan:2,className:"font-bold border border-black py-[5px]",children:1e3.toLocaleString("en-IN")})]})]})]})})}),a.jsx("p",{className:"mb-8",children:"Sincerely"}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{children:"Sheikh Rifat"}),a.jsx("p",{children:"Managing Director"}),a.jsx("p",{children:"Akaar IT Ltd."})]})]})}),a.jsxs("div",{className:"flex space-x-2 items-center justify-end mt-8 print:hidden",children:[a.jsx(N,{trigger:()=>a.jsxs(i,{size:"input",variant:"outline",className:"h-8 lg:flex",children:["Print ",a.jsx(j,{className:"ml-1",size:16,strokeWidth:1.2})]}),content:()=>n.current}),a.jsxs(i,{variant:"outline",size:"input",className:"h-8 lg:flex",onClick:t,children:["PDF ",a.jsx(y,{className:"ml-1",size:16,strokeWidth:1.2})]})]})]})},k=["SL.No","Name","Designation","A/C Number","Pay Salary"],v=[{slNo:1,name:"Anirban Saha",designation:"Graphic Designer",accountNumber:"321103019580",salary:"XXXX"},{slNo:2,name:"Md. Arfan Ahmed",designation:"Marketing Manager",accountNumber:"321103019512",salary:"XXXX"},{slNo:3,name:"Rifat Hossain",designation:"App Developer",accountNumber:"321103019479",salary:"XXXX"},{slNo:4,name:"Muhammad Touhiduzzaman",designation:"Frontend Engineer",accountNumber:"321103019463",salary:"XXXX"},{slNo:5,name:"Md. Aikash Ahmed",designation:"Office Assistant",accountNumber:"321103019527",salary:"XXXX"},{slNo:6,name:"Fahim Rahman",designation:"Sr. Marketing Executive",accountNumber:"1031030131064",salary:"XXXX"},{slNo:7,name:"Arfat Hossain",designation:"Software Developer",accountNumber:"103158002909",salary:"XXXX"},{slNo:8,name:"Shahjalal Mahmud",designation:"Software Developer",accountNumber:"107103636860",salary:"XXXX"}],D=()=>a.jsx("div",{className:"max-w-5xl mx-auto",children:a.jsx(o,{className:"flex-1 space-y-4 max-w-4xl mx-auto p-3 pb-4",children:a.jsx(X,{})})});export{D as default};
