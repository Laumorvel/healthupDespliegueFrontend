"use strict";(self.webpackChunkhealthup=self.webpackChunkhealthup||[]).push([[80],{1080:(Z,l,i)=>{i.r(l),i.d(l,{ContactUsModule:()=>y});var m=i(9808),c=i(5358),r=i(2382),p=i(5226),u=i.n(p),t=i(1223),d=i(9103),f=i(410);function g(o,a){if(1&o&&(t.TgZ(0,"span",13),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.error," ")}}function h(o,a){if(1&o&&(t.TgZ(0,"span",13),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.emailError," ")}}function x(o,a){if(1&o&&(t.TgZ(0,"span",13),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.mssgError," ")}}const C=[{path:"",component:(()=>{class o{constructor(e,n,s){this.fb=e,this.validatorService=n,this.authService=s,this.correcto=!1,this.miFormulario=this.fb.group({name:[,[r.kI.required,r.kI.pattern(this.validatorService.namePattern)]],email:[,[r.kI.required,r.kI.pattern(this.validatorService.emailPattern)]],mssg:[,[r.kI.required]],phone:[],companyName:[]})}ngOnInit(){this.miFormulario.reset({name:"",email:"",mssg:"",phone:"",companyName:""})}submitFormulario(){this.authService.newMensaje(this.miFormulario.value).subscribe({next:n=>{u().fire("Success","Your message was successfully sent","success")},error:n=>{u().fire("Error",n.error.message,"error")}}),this.miFormulario.reset()}campoNoValido(e){var n,s;return(null===(n=this.miFormulario.get(e))||void 0===n?void 0:n.invalid)&&(null===(s=this.miFormulario.get(e))||void 0===s?void 0:s.touched)}get error(){var e;return(null===(e=this.miFormulario.get("name"))||void 0===e?void 0:e.errors).required?"Field required":""}get mssgError(){var e;return(null===(e=this.miFormulario.get("mssg"))||void 0===e?void 0:e.errors).required?"Field required":""}get emailError(){var e;const n=null===(e=this.miFormulario.get("email"))||void 0===e?void 0:e.errors;return n.required?"Field required":n.pattern?"An email was expected":""}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.qu),t.Y36(d.o),t.Y36(f.u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-contact-us"]],decls:19,vars:5,consts:[[1,"get-in-touch"],[1,"title"],["autocomplete","off",1,"contact-form","row",3,"formGroup","ngSubmit"],[1,"form-field","col-lg-6"],["placeholder","Name","id","name","formControlName","name","type","text","required","",1,"input-text","js-input"],["class","form-text text-danger",4,"ngIf"],["placeholder","Email","id","email","formControlName","email","type","email","required","",1,"input-text","js-input"],["placeholder","Company name","id","company","type","text","formControlName","companyName",1,"input-text","js-input"],["placeholder","Phone number","id","phone","type","tel","formControlName","phone",1,"input-text","js-input"],[1,"form-field","col-lg-12"],["placeholder","Message","id","message","type","text","required","","formControlName","mssg",1,"input-text","js-input"],[1,"form-field","col-lg-12","text-center"],["type","submit","value","Submit",1,"submit-btn",3,"disabled"],[1,"form-text","text-danger"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0),t.TgZ(1,"h1",1),t._uU(2,"Get in touch"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return n.submitFormulario()}),t.TgZ(4,"div",3),t._UZ(5,"input",4),t.YNc(6,g,2,1,"span",5),t.qZA(),t.TgZ(7,"div",3),t._UZ(8,"input",6),t.YNc(9,h,2,1,"span",5),t.qZA(),t.TgZ(10,"div",3),t._UZ(11,"input",7),t.qZA(),t.TgZ(12,"div",3),t._UZ(13,"input",8),t.qZA(),t.TgZ(14,"div",9),t._UZ(15,"input",10),t.YNc(16,x,2,1,"span",5),t.qZA(),t.TgZ(17,"div",11),t._UZ(18,"input",12),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("formGroup",n.miFormulario),t.xp6(3),t.Q6J("ngIf",n.campoNoValido("name")),t.xp6(3),t.Q6J("ngIf",n.campoNoValido("email")),t.xp6(7),t.Q6J("ngIf",n.campoNoValido("mssg")),t.xp6(2),t.Q6J("disabled",n.miFormulario.invalid))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.Q7,m.O5],styles:['@import"https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script&family=Roboto+Serif:wght@100&family=Satisfy&family=Yellowtail&display=swap";.get-in-touch[_ngcontent-%COMP%]{max-width:800px;margin:50px auto;position:relative}.get-in-touch[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center;letter-spacing:3px;font-size:3.2em;font-family:Satisfy,cursive;font-weight:700;text-shadow:4px 4px 2px #fef9c7}.contact-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{position:relative;margin:32px 0}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{display:block;width:100%;height:36px;border-width:0 0 2px 0;border-color:#fce181;font-size:18px;line-height:26px;font-weight:400}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus{outline:none}.contact-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]:focus + .label[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   .input-text.not-empty[_ngcontent-%COMP%] + .label[_ngcontent-%COMP%]{transform:translateY(-24px)}.contact-form[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{position:absolute;left:20px;bottom:11px;font-size:18px;line-height:26px;font-weight:400;cursor:text;transition:transform .2s ease-in-out}.contact-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{display:inline-block;text-transform:uppercase;letter-spacing:2px;font-size:16px;padding:8px 16px;border:none;width:200px;cursor:pointer}']}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(C)],c.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,v,r.UX,r.u5]]}),o})()}}]);