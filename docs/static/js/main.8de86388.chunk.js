(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(2),o=n.n(c),s=(n(14),n(3)),r=n(4),l=n(6),h=n(5),u=n(7),m=(n(15),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={chosenChoice:null,newChoice:null,choices:[],alert:!1},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.enterKeyListener()}},{key:"choiceList",value:function(){var e=[],t=1,n=!0,a=!1,c=void 0;try{for(var o,s=this.state.choices[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var r=o.value,l=t===this.state.chosenChoice?{color:"green"}:{color:"black"};e.push(i.a.createElement("li",{key:t,style:l,className:"list-group-item"},t,". ",r)),t++}}catch(h){a=!0,c=h}finally{try{n||null==s.return||s.return()}finally{if(a)throw c}}return i.a.createElement("ol",{className:"list-group"},e)}},{key:"newChoice",value:function(){var e=this;return i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"text",className:"form-control",placeholder:"New Option",value:this.state.newChoice,onChange:this.newChoiceChange.bind(this),onSubmit:this.addChoice.bind(this),id:"newChoice"}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e.addChoice()}},"Add")))}},{key:"newChoiceChange",value:function(e){var t=e.target.value;this.setState({newChoice:t})}},{key:"enterKeyListener",value:function(){var e=this;document.getElementById("newChoice").addEventListener("keyup",function(t){13===t.keyCode&&(t.preventDefault(),e.addChoice())})}},{key:"addChoice",value:function(){if(null!==this.state.newChoice&&""!==this.state.newChoice){var e=this.state.newChoice,t=this.state.choices;t.push(e),this.setState({newChoice:"",choices:t})}}},{key:"roll",value:function(){var e=Math.ceil(Math.random()*this.numChoices);this.setState({chosenChoice:e,alert:!0})}},{key:"alert",value:function(){return this.numChoices<1?i.a.createElement("div",{className:"alert alert-success",role:"alert"},"Please enter an option"):i.a.createElement("div",{className:"alert alert-success",role:"alert"},"The dice has chosen. You must take choice \n          ".concat(this.state.chosenChoice,":\n          ").concat(this.state.choices[this.state.chosenChoice-1],"\n        "))}},{key:"reset",value:function(){this.setState({alert:!1,choices:[],newChoice:""})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"DiceLife"),i.a.createElement("br",null),i.a.createElement("div",{className:"container-fluid"},this.choiceList()),i.a.createElement("div",{className:"container-fluid"},this.newChoice()),i.a.createElement("br",null),this.state.alert&&this.alert(),i.a.createElement("div",{style:{paddingLeft:"2em",paddingRight:"2em"}},i.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){return e.roll()}},"Roll")),i.a.createElement("br",null),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.reset()}},"Reset")))}},{key:"numChoices",get:function(){return this.state.choices.length}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.8de86388.chunk.js.map