(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ekqd:function(e,t,c){"use strict";c.r(t),c.d(t,"ProjectModule",(function(){return l}));var o=c("ofXK"),r=c("tyNb"),n=c("fXoL"),s=c("+qrf");function i(e,t){if(1&e){const e=n.Nb();n.Mb(0,"section"),n.Mb(1,"h4"),n.jc(2),n.Lb(),n.Mb(3,"pre"),n.jc(4),n.Xb(5,"json"),n.Lb(),n.Mb(6,"button",3),n.Ub("click",(function(){n.ec(e);const t=n.Wb();return t.onDeleteClick(t.project)})),n.jc(7,"\u{1f5d1} Delete project"),n.Lb(),n.Lb()}if(2&e){const e=n.Wb();n.zb(2),n.lc("Project file for: ",e.project.name,""),n.zb(2),n.kc(n.Yb(5,2,e.project))}}function b(e,t){if(1&e&&(n.Mb(0,"p"),n.jc(1," Project deleted. "),n.Lb(),n.Mb(2,"i"),n.jc(3),n.Lb()),2&e){const e=n.Wb();n.zb(3),n.kc(e.message)}}const p=function(){return["../../"]},u=[{path:"",component:(()=>{class e{constructor(e,t){this.route=e,this.projectsService=t,this.route.params.subscribe(e=>{this.projectId=e.projectId,this.projectsService.getProjectById$(this.projectId).subscribe(e=>this.project=e,e=>this.message=e.message)})}ngOnInit(){}onDeleteClick(e){this.projectsService.deleteProject$(e).subscribe(()=>{this.project=null,this.projectId=""})}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(r.a),n.Jb(s.a))},e.\u0275cmp=n.Db({type:e,selectors:[["ab-project"]],decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["empty",""],[3,"routerLink"],[3,"click"]],template:function(e,t){if(1&e&&(n.hc(0,i,8,4,"section",0),n.hc(1,b,4,1,"ng-template",null,1,n.ic),n.Mb(3,"div"),n.Mb(4,"a",2),n.jc(5," Back to projects "),n.Lb(),n.Lb()),2&e){const e=n.dc(2);n.Zb("ngIf",t.project)("ngIfElse",e),n.zb(4),n.Zb("routerLink",n.ac(3,p))}},directives:[o.j,r.b],pipes:[o.e],styles:[""]}),e})()}];let j=(()=>{class e{}return e.\u0275mod=n.Hb({type:e}),e.\u0275inj=n.Gb({factory:function(t){return new(t||e)},imports:[[r.c.forChild(u)],r.c]}),e})(),l=(()=>{class e{}return e.\u0275mod=n.Hb({type:e}),e.\u0275inj=n.Gb({factory:function(t){return new(t||e)},imports:[[o.b,j]]}),e})()}}]);