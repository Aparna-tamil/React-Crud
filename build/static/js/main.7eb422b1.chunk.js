(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),c=n.n(s),o=(n(35),n(22)),i=n(23),l=n(25),u=n(24),f=(n(36),n(57)),m=n(56),d=n(4),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).fsubmit=function(e){e.preventDefault(),console.log("crud");var t=a.state.datas,n=a.refs.name.value,r=a.refs.roll.value;if(0===a.state.act){var s={name:n,roll:r};t.push(s)}else{var c=a.state.index;t[c].name=n,t[c].roll=r}a.setState({datas:t,act:0}),a.refs.myform.reset(),a.refs.name.focus()},a.fRemove=function(e){var t=a.state.datas;t.splice(e,1),a.setState({datas:t}),a.refs.myform.reset(),a.refs.name.focus()},a.fEdit=function(e){var t=a.state.datas[e];a.refs.name.value=t.name,a.refs.roll.value=t.roll,a.setState({act:1,index:e}),a.refs.name.focus()},a.state={title:"React Crud Application",act:0,index:"",datas:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.refs.name.focus()}},{key:"render",value:function(){var e=this,t=this.state.datas;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m.a,{textAlign:"center",color:"text.primary",fontWeight:"fontWeightBold",children:this.state.title}),Object(d.jsxs)("form",{ref:"myform",className:"myForm",children:[Object(d.jsx)("input",{type:"text",ref:"name",placeholder:"Name",className:"formfield"}),Object(d.jsx)("input",{type:"text",ref:"roll",placeholder:"Roll No",className:"formfield"}),Object(d.jsx)(f.a,{color:"primary",variant:"contained",onClick:function(t){return e.fsubmit(t)},className:"myButton",children:"Submit "})]}),Object(d.jsx)("pre",{children:t.map((function(t,n){return Object(d.jsxs)("li",{className:"myList",children:[n+1,".",t.name,",",t.roll,Object(d.jsx)(f.a,{color:"secondary",variant:"contained",onClick:function(){return e.fRemove(n)},className:"myButton",children:"Delete"}),Object(d.jsx)(f.a,{color:"primary",variant:"",onClick:function(){return e.fEdit(n)},className:"myButton",children:"Edit"})]},n)}))})]})}}]),n}(a.Component),h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),h()}},[[42,1,2]]]);
//# sourceMappingURL=main.7eb422b1.chunk.js.map