import{j as C,$ as H}from"./index-c85d92ba.js";import{c as z}from"./clsx-1229b3e0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";function n({size:e="md",children:y,asChild:_}){const b=_?H:"h2";return C.jsx(b,{className:z("text-gray-100 font-bold font-sans",{"text-lg":e==="sm","text-xl":e==="md","text-2xl":e==="lg"}),children:y})}try{n.displayName="Heading",n.__docgenInfo={description:"",displayName:"Heading",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Components/Heading",component:n,args:{children:"Lorem ipsum",size:"md"},argTypes:{size:{options:["sm","md","lg"],control:{type:"inline-radio"}}}},a={},r={args:{size:"sm"}},s={args:{size:"lg"}},t={args:{asChild:!0,children:C.jsx("h1",{children:"Heading with H1"})},argTypes:{children:{table:{disable:!0}},asChild:{table:{disable:!0}}}};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <h1>Heading with H1</h1>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const T=["Default","Small","Large","CustomComponent"];export{t as CustomComponent,a as Default,s as Large,r as Small,T as __namedExportsOrder,N as default};
//# sourceMappingURL=Heading.stories-d7bce2d4.js.map
