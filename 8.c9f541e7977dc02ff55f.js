(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0B1/":function(t,e,a){"use strict";a.r(e),a.d(e,"ProjectsModule",(function(){return F}));var b=a("ofXK"),c=a("PCNd"),n=a("tyNb"),s=a("GbAS"),i=a("fXoL"),o=a("cplz"),r=a("nXCA"),l=a("zkvF"),d=a("qzOI");let u=(()=>{class t{constructor(){this.userFormat="dd/MM/yyyy",this.botFormat="yyyy/MM/dd"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["ab-date-time"]],inputs:{date:"date",userFormat:"userFormat",botFormat:"botFormat"},decls:4,vars:8,consts:[[3,"dateTime"]],template:function(t,e){1&t&&(i.Mb(0,"time",0),i.Vb(1,"date"),i.lc(2),i.Vb(3,"date"),i.Lb()),2&t&&(i.bc("dateTime",i.Xb(1,2,e.date,e.botFormat)),i.xb(2),i.mc(i.Xb(3,5,e.date,e.userFormat)))},pipes:[b.d],styles:[""]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["ab-dates"]],inputs:{start:"start",end:"end"},decls:7,vars:2,consts:[[3,"date"]],template:function(t,e){1&t&&(i.Mb(0,"span"),i.Mb(1,"i"),i.lc(2," \u27fc "),i.Ib(3,"ab-date-time",0),i.lc(4," - "),i.Ib(5,"ab-date-time",0),i.lc(6," \u27fb "),i.Lb(),i.Lb()),2&t&&(i.xb(3),i.ac("date",e.start),i.xb(2),i.ac("date",e.end))},directives:[u],styles:[""]}),t})();var h=a("olyB"),L=a("d6BX");let f=(()=>{class t{constructor(t){this.util=t}transform(t,...e){return this.util.getFechaColoquial(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(l.a))},t.\u0275pipe=i.Gb({name:"timeAgo",type:t,pure:!0}),t})();function M(t,e){if(1&t&&(i.Mb(0,"header"),i.Mb(1,"h2"),i.lc(2),i.Lb(),i.Mb(3,"p"),i.lc(4),i.Lb(),i.Mb(5,"p"),i.Ib(6,"ab-dates",3),i.Lb(),i.Lb()),2&t){const t=i.Ub();i.xb(2),i.nc(" ",t.project.title," "),i.xb(2),i.mc(t.project.description),i.xb(2),i.ac("start",t.project.start)("end",t.project.end)}}function m(t,e){1&t&&i.Ib(0,"ab-no-data-yet")}function v(t,e){if(1&t&&i.Ib(0,"ab-label-value",12),2&t){const t=e.$implicit;i.bc("value",t.done?"Hecho":"Pendiente"),i.ac("label",t.title)("isOk",t.done)}}function g(t,e){if(1&t&&(i.Ib(0,"ab-label-value",12),i.Vb(1,"number")),2&t){const t=e.$implicit;i.cc("value","",i.Wb(1,3,t.amount)," \u20ac"),i.ac("label",t.title)("isOk","Ingreso"===t.type)}}function j(t,e){if(1&t&&(i.Kb(0),i.Mb(1,"aside"),i.Mb(2,"header"),i.Mb(3,"h3"),i.lc(4,"Datos"),i.Lb(),i.Lb(),i.Ib(5,"ab-label-value",4),i.Vb(6,"timeAgo"),i.Ib(7,"ab-label-value",5),i.Vb(8,"timeAgo"),i.Ib(9,"ab-label-value",6),i.Vb(10,"number"),i.Ib(11,"ab-label-value",7),i.Vb(12,"number"),i.Ib(13,"ab-label-value",8),i.Vb(14,"number"),i.Ib(15,"ab-label-value",9),i.Vb(16,"number"),i.Ib(17,"ab-label-value",10),i.Vb(18,"number"),i.Lb(),i.Mb(19,"section"),i.Mb(20,"aside"),i.Mb(21,"header"),i.Mb(22,"h3"),i.lc(23,"Tareas"),i.Lb(),i.Lb(),i.jc(24,v,1,3,"ab-label-value",11),i.Lb(),i.Mb(25,"aside"),i.Mb(26,"header"),i.Mb(27,"h3"),i.lc(28,"Transacciones"),i.Lb(),i.Lb(),i.jc(29,g,2,5,"ab-label-value",11),i.Lb(),i.Lb(),i.Mb(30,"footer"),i.Mb(31,"nav"),i.Mb(32,"ul"),i.Mb(33,"li"),i.Mb(34,"a"),i.Mb(35,"i"),i.lc(36,"Cancelar Proyecto"),i.Lb(),i.Lb(),i.Lb(),i.Mb(37,"li"),i.Mb(38,"a"),i.Mb(39,"i"),i.lc(40,"Borrar Proyecto"),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Jb()),2&t){const t=i.Ub();i.xb(5),i.bc("value",i.Wb(6,13,t.projectView.start)),i.xb(2),i.bc("value",i.Wb(8,15,t.projectView.end)),i.xb(2),i.cc("value","",i.Wb(10,17,t.projectView.budget)," \u20ac"),i.xb(2),i.cc("value","",i.Wb(12,19,t.projectView.totalExpenses)," \u20ac"),i.ac("isOk",!1),i.xb(2),i.cc("value","",i.Wb(14,21,t.projectView.totalIncomes)," \u20ac"),i.ac("isOk",!0),i.xb(2),i.cc("value","",i.Wb(16,23,t.projectView.profit)," \u20ac"),i.ac("isOk",t.projectView.profit>0),i.xb(2),i.cc("value","",i.Wb(18,25,t.projectView.balance)," \u20ac"),i.ac("isOk",t.projectView.balance>0),i.xb(7),i.ac("ngForOf",t.tasks),i.xb(5),i.ac("ngForOf",t.transactions)}}let y=(()=>{class t{constructor(t,e,a,b){this.activatedRoute=t,this.dataService=e,this.logicService=a,this.utilService=b,this.loaded=!1,this.onProjectLoaded={next:t=>{this.project=t,this.utilService.setDocumentTitle(this.project.title),this.dataService.getTransactions$().subscribe(this.onTransactionsLoaded)}},this.onTransactionsLoaded={next:t=>{this.transactions=this.logicService.filterTransactionsByProjectId(t,this.projectSlug),this.dataService.getTasks$().subscribe(this.onTasksLoaded)}},this.onTasksLoaded={next:t=>{null===t&&(t=s.a),this.tasks=this.logicService.filterTasksByProjectId(t,this.projectSlug),this.projectView=this.logicService.composeProjectView(this.project,this.transactions),this.loaded=!0}}}ngOnInit(){this.projectSlug=this.activatedRoute.snapshot.params.id,this.loadData()}loadData(){this.dataService.getProject$(this.projectSlug).subscribe(this.onProjectLoaded)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(n.a),i.Hb(o.a),i.Hb(r.a),i.Hb(l.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["ng-component"]],decls:6,vars:3,consts:[[4,"ngIf"],["noDataYet",""],[4,"ngIf","ngIfElse"],[3,"start","end"],["label","Inicio",3,"value"],["label","Fin",3,"value"],["label","Presupuesto",3,"value"],["label","Gastos",3,"value","isOk"],["label","Ingresos",3,"value","isOk"],["label","Beneficio",3,"value","isOk"],["label","Saldo",3,"value","isOk"],[3,"label","value","isOk",4,"ngFor","ngForOf"],[3,"label","value","isOk"]],template:function(t,e){if(1&t&&(i.Mb(0,"ab-article"),i.jc(1,M,7,4,"header",0),i.Mb(2,"main"),i.jc(3,m,1,0,"ng-template",null,1,i.kc),i.jc(5,j,41,27,"ng-container",2),i.Lb(),i.Lb()),2&t){const t=i.gc(4);i.xb(1),i.ac("ngIf",e.loaded),i.xb(4),i.ac("ngIf",e.loaded)("ngIfElse",t)}},directives:[d.a,b.l,p,h.a,L.a,b.k],pipes:[f,b.e],styles:[""]}),t})();function I(t,e){1&t&&i.Ib(0,"ab-no-data-yet")}function x(t,e){1&t&&(i.Mb(0,"sup"),i.lc(1,"*"),i.Lb())}const V=function(t){return[t]};function w(t,e){if(1&t&&(i.Mb(0,"tr"),i.Mb(1,"td"),i.Mb(2,"a",3),i.lc(3),i.Lb(),i.Lb(),i.Mb(4,"td"),i.lc(5),i.Vb(6,"date"),i.Lb(),i.Mb(7,"td"),i.lc(8),i.Vb(9,"date"),i.Lb(),i.Mb(10,"td"),i.lc(11),i.Vb(12,"number"),i.Lb(),i.Mb(13,"td"),i.lc(14),i.Vb(15,"number"),i.Lb(),i.Mb(16,"td"),i.lc(17),i.Vb(18,"number"),i.Lb(),i.Mb(19,"td"),i.lc(20),i.Vb(21,"number"),i.Lb(),i.Mb(22,"td"),i.lc(23),i.Vb(24,"number"),i.jc(25,x,2,0,"sup",4),i.Lb(),i.Lb()),2&t){const t=e.$implicit;i.xb(2),i.ac("routerLink",i.dc(26,V,t.id)),i.xb(1),i.mc(t.title),i.xb(2),i.nc(" ",i.Xb(6,10,t.start,"dd/MM/yyyy")," "),i.xb(3),i.nc(" ",i.Xb(9,13,t.end,"dd/MM/yyyy")," "),i.xb(3),i.nc(" ",i.Wb(12,16,t.budget)," \u20ac "),i.xb(3),i.nc(" ",i.Wb(15,18,t.totalExpenses)," \u20ac "),i.xb(3),i.nc(" ",i.Wb(18,20,t.totalIncomes)," \u20ac "),i.xb(3),i.nc(" ",i.Wb(21,22,t.profit)," \u20ac "),i.xb(3),i.nc(" ",i.Wb(24,24,t.balance)," \u20ac "),i.xb(2),i.ac("ngIf",t.balance<0)}}function k(t,e){if(1&t&&(i.Kb(0),i.Mb(1,"table"),i.Mb(2,"thead"),i.Mb(3,"tr"),i.Mb(4,"th"),i.lc(5," Proyecto "),i.Lb(),i.Mb(6,"th"),i.lc(7," Inicio "),i.Lb(),i.Mb(8,"th"),i.lc(9," Fin "),i.Lb(),i.Mb(10,"th"),i.lc(11," Presupuesto "),i.Lb(),i.Mb(12,"th"),i.lc(13," Gastos "),i.Lb(),i.Mb(14,"th"),i.lc(15," Ingresos "),i.Lb(),i.Mb(16,"th"),i.lc(17," Beneficio "),i.Lb(),i.Mb(18,"th"),i.lc(19," Saldo "),i.Lb(),i.Lb(),i.Lb(),i.Mb(20,"tbody"),i.jc(21,w,26,28,"tr",2),i.Lb(),i.Lb(),i.Jb()),2&t){const t=i.Ub();i.xb(21),i.ac("ngForOf",t.projectViews)}}const O=[{path:"",component:(()=>{class t{constructor(t,e){this.dataService=t,this.logicService=e,this.projectViews=[],this.loaded=!1,this.onProjectsLoaded={next:t=>{this.projects=t,this.dataService.getTransactions$().subscribe(this.onTransactionsLoaded)}},this.onTransactionsLoaded={next:t=>{this.transactions=t,this.setDataViews()}},this.loadData()}ngOnInit(){this.loadData()}loadData(){this.dataService.getProjects$().subscribe(this.onProjectsLoaded)}setDataViews(){this.projectViews=this.logicService.composeProjectViews(this.projects,this.transactions),this.loaded=!0}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(o.a),i.Hb(r.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["ng-component"]],decls:8,vars:2,consts:[["noDataYet",""],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[3,"routerLink"],[4,"ngIf"]],template:function(t,e){if(1&t&&(i.Mb(0,"ab-article"),i.Mb(1,"header"),i.Mb(2,"h2"),i.lc(3," Lista de proyectos "),i.Lb(),i.Lb(),i.Mb(4,"main"),i.jc(5,I,1,0,"ng-template",null,0,i.kc),i.jc(7,k,22,1,"ng-container",1),i.Lb(),i.Lb()),2&t){const t=i.gc(6);i.xb(7),i.ac("ngIf",e.loaded)("ngIfElse",t)}},directives:[d.a,b.l,h.a,b.k,n.d],pipes:[b.d,b.e],styles:[""]}),t})()},{path:"new",loadChildren:()=>a.e(7).then(a.bind(null,"lccA")).then(t=>t.NewProjectModule),data:{title:"Nuevo proyecto"}},{path:":id",component:y}];let S=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(O)],n.e]}),t})(),F=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[b.b,S,c.a]]}),t})()}}]);