import{r as c,j as e,o as n,s}from"./index-ea10abfc.js";import{A as u,R as d,a as l}from"./resultadoAlert-d48c5646.js";const m=n({resistencia:s,ruido:s});function f(){const[r,i]=c.useState(0),o=t=>{let a=Math.sqrt(t.resistencia*t.ruido);i(a)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-center font-bold text-4xl mb-6",children:"Voltaje de ruido térmico"}),e.jsxs(u,{formSchema:m,onSubmit:t=>o(t),fieldConfig:{resistencia:{unidades:"Ω"},ruido:{unidades:"W"}},children:[e.jsx(d,{unidades:"V",children:r}),e.jsx("div",{className:"text-center",children:e.jsx(l,{children:"Calcular"})})]})]})}export{f as default};