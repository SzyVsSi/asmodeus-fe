import{r as c,u as l,j as e,R as d}from"./index-BVS5nKVb.js";import{g as m}from"./apiInitializer-BxIn7Q9V.js";const f=()=>{const{useVerifyCode:a}=m,{verifyCode:r,error:t}=a(),[s,n]=c.useState(""),o=l(),i=async()=>{await r(s),!t&&o(d.TheDeed)};return e.jsxs("div",{className:"h-screen flex flex-col justify-center items-center",children:[t&&e.jsx("p",{children:"Invalid code"}),e.jsx("input",{type:"text",value:s,onChange:u=>n(u.target.value),className:"border p-1",placeholder:"Enter token"}),e.jsx("button",{type:"submit",onClick:i,className:"mt-2 p-1 border bg-gray-100",children:"Submit"})]})};export{f as default};
//# sourceMappingURL=index-C-hb3AOB.js.map