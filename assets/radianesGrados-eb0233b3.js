import{r as j,o as n,s as o,j as s}from"./index-627d4995.js";import{A as t,R as l,a as c}from"./resultadoAlert-06e605d0.js";import{T as b,a as S,b as u,c as m}from"./tabs-0b13fcba.js";function T(){const[e,i]=j.useState({radianes:0,grados:0}),x=a=>{let r=a.radianes*180;i(d=>({...d,grados:r}))},f=a=>{console.log(a.grados);let r=a.grados/180;console.log(r),i(d=>({...d,radianes:r}))},g=n({grados:o.default(e.grados.toString())}),h=n({radianes:o.describe("Radianes (Escribir en la forma Nπ, sin incluir π)").default(e.radianes.toString())});return s.jsxs(s.Fragment,{children:[s.jsx("h1",{className:"text-center font-bold text-4xl mb-6",children:"Radianes y grados"}),s.jsxs(b,{defaultValue:"factor",className:"w-full",children:[s.jsxs(S,{className:"grid w-full grid-cols-2",children:[s.jsx(u,{value:"factor",children:"Radianes a grados"}),s.jsx(u,{value:"indice",children:"Grados a radianes"})]}),s.jsx(m,{value:"factor",children:s.jsxs(t,{formSchema:h,onSubmit:a=>x(a),fieldConfig:{radianes:{unidades:"π"}},children:[s.jsx(l,{unidades:"°",children:e.grados}),s.jsx("div",{className:"text-center",children:s.jsx(c,{children:"Calcular"})})]})}),s.jsx(m,{value:"indice",children:s.jsxs(t,{formSchema:g,onSubmit:a=>f(a),fieldConfig:{grados:{unidades:"°"}},children:[s.jsx(l,{unidades:"π",children:e.radianes}),s.jsx("div",{className:"text-center",children:s.jsx(c,{children:"Calcular"})})]})})]})]})}export{T as default};