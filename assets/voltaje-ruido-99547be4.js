import{r as c,j as e,o as n,s}from"./index-627d4995.js";import{A as d,R as u,a as l}from"./resultadoAlert-06e605d0.js";const m=n({resistencia:s,ruido:s.describe("Potencia de ruido")});function f(){const[r,i]=c.useState(0),o=t=>{let a=Math.sqrt(t.resistencia*t.ruido);i(a)};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-center font-bold text-4xl mb-6",children:"Voltaje de ruido térmico"}),e.jsxs(d,{formSchema:m,onSubmit:t=>o(t),fieldConfig:{resistencia:{unidades:"Ω"},ruido:{unidades:"W"}},children:[e.jsx(u,{unidades:"V",children:r}),e.jsx("div",{className:"text-center",children:e.jsx(l,{children:"Calcular"})})]})]})}export{f as default};