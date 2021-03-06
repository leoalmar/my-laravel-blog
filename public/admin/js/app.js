/*
 * angular-auto-validate - v1.18.17 - 2015-09-21
 * https://github.com/jonsamwell/angular-auto-validate
 * Copyright (c) 2015 Jon Samwell (http://www.jonsamwell.com)
 */
!function(a,b){"use strict";function c(){var a={},c=!0,d=!0,e=!0,f=function(a){var b;return a&&0!==a.length?(b=a.toLowerCase(),a=!("f"===b||"0"===b||"false"===b)):a=!1,a},g=function(a,b){var c;return void 0!==a&&(c=a.attr(b)||a.attr("data-"+b)),c},h=function(a,b){var c;return void 0!==a&&(c=void 0!==a.attr(b)||void 0!==a.attr("data-"+b)),c},i=function(a,b){return f(g(a,b))},j=function(a){return c&&!i(a,"disable-valid-styling")},k=function(a){return d&&!i(a,"disable-invalid-styling")};this.enable=function(a){e=a},this.isEnabled=function(){return e},this.setDefaultElementModifier=function(b){if(void 0===a[b])throw new Error("Element modifier not registered: "+b);this.defaultElementModifier=b},this.registerDomModifier=function(b,c){a[b]=c},this.setErrorMessageResolver=function(a){this.errorMessageResolver=a},this.getErrorMessage=function(a,c){var d;if(void 0===this.errorMessageResolver)throw new Error("Please set an error message resolver via the setErrorMessageResolver function before attempting to resolve an error message.");return h(c,"disable-validation-message")?(d=b.injector(["ng"]).get("$q").defer(),d.resolve(""),d.promise):this.errorMessageResolver(a,c)},this.setValidElementStyling=function(a){c=a},this.setInvalidElementStyling=function(a){d=a},this.getDomModifier=function(b){var c=(void 0!==b?b.attr("element-modifier"):this.defaultElementModifier)||(void 0!==b?b.attr("data-element-modifier"):this.defaultElementModifier)||this.defaultElementModifier;if(void 0===c)throw new Error("Please set a default dom modifier via the setDefaultElementModifier method on the validator class.");return a[c]},this.makeValid=function(a){j(a)?this.getDomModifier(a).makeValid(a):this.makeDefault(a)},this.makeInvalid=function(a,b){k(a)?this.getDomModifier(a).makeInvalid(a,b):this.makeDefault(a)},this.makeDefault=function(a){var b=this.getDomModifier(a);b.makeDefault&&b.makeDefault(a)},this.defaultFormValidationOptions={forceValidation:!1,disabled:!1,validateNonVisibleControls:!1,removeExternalValidationErrorsOnSubmit:!0,validateOnFormSubmit:!1},this.$get=[function(){return this}]}function d(a){var c=function(a){b.forEach(a.find("span"),function(a){a=b.element(a),(a.hasClass("error-msg")||a.hasClass("form-control-feedback")||a.hasClass("control-feedback"))&&a.remove()}),a.removeClass("has-success has-error has-feedback")},d=function(a,b){for(var c,d=a,e=0;10>=e;e+=1){if(void 0!==d&&d.hasClass(b)){c=d;break}void 0!==d&&(d=d.parent())}return c},e=function(a,c){for(var d,f=0;f<a.children.length&&(d=a.children[f],void 0===d||!b.element(d).hasClass(c))&&!(void 0!==d.children&&(d=e(d,c),d.length>0));f+=1);return b.element(d)},f=function(a){return d(a,"form-group")},g=function(a){return e(a,"input-group")},h=function(a,b){a[0].parentNode.insertBefore(b[0],a[0].nextSibling)},i=!1,j=function(a){i=a},k=function(d){var e,j=f(d);if(j){if(c(j),e=g(j[0]),j.addClass("has-success "+(e.length>0?"":"has-feedback")),i){var k='<span class="glyphicon glyphicon-ok form-control-feedback"></span>';e.length>0&&(k=k.replace("form-",""),k='<span class="input-group-addon control-feedback">'+k+"</span"),h(d,b.element(k))}}else a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")},l=function(d,e){var j,k=f(d),l=b.element('<span class="help-block has-error error-msg">'+e+"</span>");if(k){if(c(k),j=g(k[0]),k.addClass("has-error "+(j.length>0?"":"has-feedback")),h(j.length>0?j:m(d),l),i){var n='<span class="glyphicon glyphicon-remove form-control-feedback"></span>';j.length>0&&(n=n.replace("form-",""),n='<span class="input-group-addon control-feedback">'+n+"</span"),h(m(d),b.element(n))}}else a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")},m=function(a){var b=a,c=a[0].type?a[0].type.toLowerCase():"";return"checkbox"!==c&&"radio"!==c||"label"!==a.parent()[0].nodeName.toLowerCase()||(b=a.parent()),b},n=function(b){var d=f(b);d?c(d):a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")};return{makeValid:k,makeInvalid:l,makeDefault:n,enableValidationStateIcons:j,key:"bs3"}}function e(a){var c=function(c,d,e){d=b.isUndefined(d)?0:d,e=b.isUndefined(e)?!0:e;var f=0;return function(){var b=this,g=arguments;f+=1;var h=function(a){return function(){return a===f?c.apply(b,g):void 0}}(f);return a(h,d,e)}};return{debounce:c}}function f(a,c){var d,e="en-gb",f="js/angular-auto-validate/dist/lang",g=function(a){return d=c.get("{0}/jcs-auto-validate_{1}.json".format(f,a.toLowerCase()))},h=function(a){f=a},i=function(c,f){var h=a.defer();return f=f||g,e=c.toLowerCase(),void 0===b.autoValidate.errorMessages[e]?(d=f(c),d.then(function(a){d=void 0,b.autoValidate.errorMessages[e]=a.data,h.resolve(b.autoValidate.errorMessages[e])},function(a){b.autoValidate.errorMessages[e]={defaultMsg:"Loading culture failed!"},d=null,h.reject(a)})):h.resolve(b.autoValidate.errorMessages[e]),h.promise},j=function(c){var f=a.defer();return c=void 0===c?e:c.toLowerCase(),void 0!==d?d.then(function(){f.resolve(b.autoValidate.errorMessages[c])},function(a){f.reject(a)}):f.resolve(b.autoValidate.errorMessages[c]),f.promise},k=function(a,b){var c;return b&&(a+="-err-type",c=b.attr("ng-"+a),void 0===c&&(c=b.attr("data-ng-"+a)||b.attr(a)),c&&(c=c.replace(/[\W]/g,""))),c},l=function(c,f){var g,h,i,j=a.defer(),m=[];if(void 0!==d)d.then(function(){l(c,f).then(function(a){j.resolve(a)})});else{if(g=b.autoValidate.errorMessages[e][c],i=k(c,f),i&&(g=b.autoValidate.errorMessages[e][i]),void 0===g&&(g=b.autoValidate.errorMessages[e].defaultMsg.format(c)),f&&f.attr)try{h=f.attr("ng-"+c),void 0===h&&(h=f.attr("data-ng-"+c)||f.attr(c)),m.push(h||""),g=g.format(m)}catch(n){}j.resolve(g)}return j.promise};return{setI18nFileRootPath:h,setCulture:i,getErrorMessages:j,resolve:l}}function g(){var a=function(a,c){b.forEach(a.find("small"),function(a){b.element(a).hasClass("error")&&b.element(a).remove()}),c.removeClass("error")},c=function(a){for(var b=a,c=0;3>=c&&(void 0===b||!b.hasClass("columns")&&!b.hasClass("column"));c+=1)void 0!==b&&(b=b.parent());return b},d=function(b){var d=c(b);a(d&&d.length>0?d:b,b)},e=function(d,e){var f,g=c(d);a(g||d,d),d.addClass("error"),g&&(f=b.element('<small class="error">'+e+"</small>"),g.append(f))},f=function(a){d(a)};return{makeValid:d,makeInvalid:e,makeDefault:f,key:"foundation5"}}function h(){var a=function(a){return a[0].offsetWidth>0&&a[0].offsetHeight>0};return{isElementVisible:a}}function i(a,c){var d=["input","textarea","select","form"],e=function(a){return c.isElementVisible(a)},f=function(c){var d,e=b.element(c).controller("form");return d=void 0!==e&&null!==e?e.autoValidateFormOptions:a.defaultFormValidationOptions},g=function(a,b,c){var f,g,h,i=a&&a.length>0,j=i&&"#comment"===a[0].nodeName.toLowerCase();return i&&j===!1&&(f=e(a)||b.validateNonVisibleControls,g=d.indexOf(a[0].nodeName.toLowerCase())>-1||a[0].hasAttribute("register-custom-form-control"),h=b.validateOnFormSubmit===!1||b.validateOnFormSubmit===!0&&c===!0),i&&!j&&f&&g&&h},h=function(c,d,e){var h,i=!0,j=e||f(d),k=c.$pristine===!1||j.forceValidation,l=function(a){var c,d=!0;return b.forEach(a,function(a,b){d&&a&&(d=!1,c=b)}),c};return j.disabled===!1&&(j.forceValidation||g(d,j,j.formController.$submitted)&&c&&k)&&(i=!c.$invalid,j.removeExternalValidationErrorsOnSubmit&&c.removeAllExternalValidation&&c.removeAllExternalValidation(),i?a.makeValid(d):(h=l(c.$errors||c.$error),void 0===h?i=!0:a.getErrorMessage(h,d).then(function(b){a.makeInvalid(d,b)}))),i},i=function(b){a.makeDefault(b)},j=function(a){b.forEach(a[0].all||a[0].elements||a[0],function(a){var c,d=b.element(a);c=d.controller("ngModel"),void 0!==c&&("form"===d[0].nodeName.toLowerCase()?j(d):c.$setPristine())})},k=function(a){var c,d=!0,e=a?b.element(a).controller("form"):void 0,i=function(a,c,i){var j,l,m,n;if(a=b.element(a),j=a.controller("ngModel"),void 0!==j&&(c||g(a,i,e.$submitted)))if("form"===a[0].nodeName.toLowerCase())k(a);else{m=f(a),n=m.forceValidation,m.forceValidation=c;try{l=h(j,a,m),d=d&&l}finally{m.forceValidation=n}}};return void 0===a||void 0!==e&&e.autoValidateFormOptions.disabled?void 0!==a:(c=b.copy(e.autoValidateFormOptions),c.forceValidation=!0,b.forEach(a[0].all||a[0].elements||a[0],function(a){i(a,!0,c)}),a[0].customHTMLFormControlsCollection&&b.forEach(a[0].customHTMLFormControlsCollection,function(a){i(a,!0,c)}),d)},l=function(b,c,d){c?a.getErrorMessage(c,b).then(function(c){a.makeInvalid(b,c)}):a.makeInvalid(b,d)};return{setElementValidationError:l,validateElement:h,validateForm:k,resetElement:i,resetForm:j}}function j(a,b){return void 0!==a&&null!==a||void 0===b?"false"!==a:b}function k(a,c,d){var e=a.autoValidateFormOptions=a.autoValidateFormOptions||b.copy(c.defaultFormValidationOptions);e.formController=a,e.forceValidation=!1,e.disabled=!c.isEnabled()||j(d.disableDynamicValidation,e.disabled),e.validateNonVisibleControls=j(d.validateNonVisibleControls,e.validateNonVisibleControls),e.validateOnFormSubmit=j(d.validateOnFormSubmit,e.validateOnFormSubmit),e.removeExternalValidationErrorsOnSubmit=void 0===d.removeExternalValidationErrorsOnSubmit?e.removeExternalValidationErrorsOnSubmit:j(d.removeExternalValidationErrorsOnSubmit,e.removeExternalValidationErrorsOnSubmit),c.isEnabled()===!1&&"false"===d.disableDynamicValidation&&(e.disabled=!1)}function l(a){return{restrict:"E",link:function(b,c){function d(){a.resetForm(c),e.$setPristine&&e.$setPristine(),e.$setUntouched&&e.$setUntouched()}var e=c.controller("form");void 0!==e&&e.autoValidateFormOptions&&e.autoValidateFormOptions.disabled===!1&&(c.on("reset",d),b.$on("$destroy",function(){c.off("reset",d)}))}}}function m(){var a=function(a){for(var c=a,d=0;50>=d&&(void 0===c||"form"!==c.nodeName.toLowerCase());d+=1)void 0!==c&&(c=b.element(c).parent()[0]);return c};return{restrict:"A",link:function(b,c){var d=a(c.parent()[0]);d&&(d.customHTMLFormControlsCollection=d.customHTMLFormControlsCollection||[],d.customHTMLFormControlsCollection.push(c[0]))}}}function n(a,b,c){return a[0].compile=function(a,d){var e=b(d.ngSubmit),f="true"===d.ngSubmitForce;return function(a,b){function d(d){a.$apply(function(){void 0!==i&&null!==i&&i.autoValidateFormOptions&&i.autoValidateFormOptions.disabled===!0?e(a,{$event:d}):(void 0===i.$setSubmitted&&(i.$submitted=!0),(c.validateForm(b)||f===!0)&&e(a,{$event:d}))})}function g(){b[0].reset?b[0].reset():c.resetForm(b)}var h,i=b.controller("form");i&&i.autoValidateFormOptions&&(i.autoValidateFormOptions.resetForm=g,void 0!==i.$name&&""!==i.$name&&(h=a.$on("form:"+i.$name+":reset",g))),b.on("submit",d),a.$on("$destroy",function(){b.off("submit",d),h&&h()})}},a}function o(a){a.decorator("ngSubmitDirective",n)}function p(a,b,c,d){a.setErrorMessageResolver(b.resolve),a.registerDomModifier(c.key,c),a.registerDomModifier(d.key,d),a.setDefaultElementModifier(c.key)}b.module("jcs-autoValidate",[]),b.module("jcs-autoValidate").provider("validator",c),d.$inject=["$log"],b.module("jcs-autoValidate").factory("bootstrap3ElementModifier",d),e.$inject=["$timeout"],b.module("jcs-autoValidate").factory("jcs-debounce",e),"format"in a.prototype||(a.prototype.format=function(){var a=arguments;return this.replace(/{(\d+)}/g,function(b,c){return void 0!==typeof a[c]?a[c]:b})}),b.autoValidate=b.autoValidate||{errorMessages:{}},b.autoValidate.errorMessages["en-us"]=b.autoValidate.errorMessages["en-gb"]={defaultMsg:"Please add error message for {0}",email:"Please enter a valid email address",minlength:"Please enter at least {0} characters",maxlength:"You have entered more than the maximum {0} characters",min:"Please enter the minimum number of {0}",max:"Please enter the maximum number of {0}",required:"This field is required",date:"Please enter a valid date",pattern:"Please ensure the entered information adheres to this pattern {0}",number:"Please enter a valid number",url:"Please enter a valid URL in the format of http(s)://www.google.com"},f.$inject=["$q","$http"],b.module("jcs-autoValidate").factory("defaultErrorMessageResolver",f),b.module("jcs-autoValidate").factory("foundation5ElementModifier",g),i.$inject=["validator","jcs-elementUtils"],b.module("jcs-autoValidate").factory("jcs-elementUtils",h),b.module("jcs-autoValidate").factory("validationManager",i),b.module("jcs-autoValidate").directive("form",["validator",function(a){return{restrict:"E",require:"form",priority:9999,compile:function(){return{pre:function(b,c,d,e){k(e,a,d)}}}}}]),b.module("jcs-autoValidate").directive("ngForm",["validator",function(a){return{restrict:"EA",require:"form",priority:9999,compile:function(){return{pre:function(b,c,d,e){k(e,a,d)}}}}}]),l.$inject=["validationManager"],b.module("jcs-autoValidate").directive("form",l),b.module("jcs-autoValidate").directive("registerCustomFormControl",m),n.$inject=["$delegate","$parse","validationManager"],o.$inject=["$provide"],b.module("jcs-autoValidate").config(o),b.module("jcs-autoValidate").config(["$provide",function(a){a.decorator("ngModelDirective",["$timeout","$delegate","validationManager","jcs-debounce",function(a,c,d,e){var f=c[0],g=f.link||f.compile;return f.compile=function(a){var c=b.version.major>=1&&b.version.minor>=3,f=g;return c&&b.isFunction(g)&&(f=g(a)),{pre:function(a,g,h,i){var j=i[0],k=i[1],l=void 0===h.ngModelOptions?void 0:a.$eval(h.ngModelOptions),m=j.$setValidity,n=j.$setPristine,o=e.debounce(function(){var a=void 0!==k&&null!==k?k.autoValidateFormOptions:void 0;d.validateElement(j,g,a)},100);return void 0===h.formnovalidate&&void 0!==k&&null!==k&&k.autoValidateFormOptions&&k.autoValidateFormOptions.disabled===!1&&(c&&void 0!==l&&void 0!==l.updateOn&&""!==l.updateOn?(g.on(l.updateOn,function(){o()}),a.$on("$destroy",function(){g.off(l.updateOn)})):j.$setValidity=function(a,b){m.call(j,a,b),o()},j.$setPristine=function(){n.call(j),d.resetElement(g)},j.autoValidated=!0),j.setExternalValidation=function(a,b,c){if(c){var e=j.$error||j.$errors;e[a]=!1}j.externalErrors=j.externalErrors||{},j.externalErrors[a]=!1,d.setElementValidationError(g,a,b)},j.removeExternalValidation=function(a,b){if(b){var c=j.$error||j.$errors;delete c[a]}j.externalErrors&&delete j.externalErrors[a],d.resetElement(g)},j.removeAllExternalValidation=function(){if(j.externalErrors){var a=j.$error||j.$errors;b.forEach(j.externalErrors,function(b,c){delete a[c]}),j.externalErrors={},d.resetElement(g)}},k&&(k.setExternalValidation=function(a,b,c,d){var e=!1;return k[a]&&(k[a].setExternalValidation(b,c,d),e=!0),e},k.removeExternalValidation=function(a,b,c,d){var e=!1;return k[a]&&(k[a].removeExternalValidation(b,d),e=!0),e}),f.pre?f.pre.apply(this,arguments):this},post:function(a,b,c,d){return f.post?f.post.apply(this,arguments):f.apply(this,arguments)}}},c}])}]),p.$inject=["validator","defaultErrorMessageResolver","bootstrap3ElementModifier","foundation5ElementModifier"],b.module("jcs-autoValidate").run(p)}(String,angular);
!function(a,b){"function"==typeof define&&define.amd?define(["angular"],b):b(angular)}(this,function(a){function b(a){return{restrict:"A",require:["ckeditor","ngModel"],controller:["$scope","$element","$attrs","$parse","$q",c],link:function(b,c,e,f){var g=f[0],h=f[1];g.ready().then(function(){["dataReady","change","blur","saveSnapshot"].forEach(function(a){g.$on(a,function(){h.$setViewValue(g.instance.getData()||"")})}),g.instance.setReadOnly(!!e.readonly),e.$observe("readonly",function(a){g.instance.setReadOnly(!!a)}),d(function(){a(e.ready)(b)})}),h.$render=function(){g.ready().then(function(){g.instance.setData(h.$viewValue||"")})}}}}function c(a,b,c,e,f){var g,h=e(c.ckeditor)(a)||{},i=b[0];g=this.instance=i.hasAttribute("contenteditable")&&"true"==i.getAttribute("contenteditable").toLowerCase()?CKEDITOR.inline(i,h):CKEDITOR.replace(i,h),this.$on=function(b,c){function e(){var a=arguments;d(function(){f.apply(null,a)})}function f(){var b=arguments;a.$apply(function(){c.apply(null,b)})}return g.on(b,e),function(){g.removeListener(b,f)}},this.ready=function(){if(this.readyDefer)return this.readyDefer.promise;var a=this.readyDefer=f.defer();return"ready"===this.instance.status?a.resolve():this.$on("instanceReady",a.resolve),a.promise},a.$on("$destroy",function(){g.destroy(!1)})}a.module("ckeditor",[]).directive("ckeditor",["$parse",b]);var d=window&&window.setImmediate?window.setImmediate:function(a){setTimeout(a,0)}});
//# sourceMappingURL=angular-ckeditor.min.map
!function(r){"use strict";r.module("ngPassword",[]).directive("matchPassword",function(){function r(r,s,a,e){var o=e[1],t=e[0],n=o[a.matchPassword];t.$validators?t.$validators.passwordMatch=function(r){return r===n.$modelValue}:(t.$parsers.push(function(r){return t.$setValidity("passwordMatch",r===n.$viewValue),r}),n.$parsers.push(function(r){return t.$setValidity("passwordMatch",r===t.$viewValue),r}))}var s=["^ngModel","^form"];return{restrict:"A",require:s,link:r}}),r.module("angular.password",["ngPassword"]),r.module("angular-password",["ngPassword"]),"object"==typeof module&&"function"!=typeof define&&(module.exports=r.module("ngPassword"))}(angular);

/**
 * angular-strap
 * @version v2.3.3 - 2015-09-24
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(e,t,n){'use strict';function a(e,n,a,o,i,r){function s(e,n){return angular.element((n||t).querySelectorAll(e))}function l(e){return u[e]?u[e]:u[e]=n.get(e,{cache:r}).then(function(e){return e.data})}this.compile=function(t){t.template&&/\.html$/.test(t.template)&&(console.warn('Deprecated use of `template` option to pass a file. Please use the `templateUrl` option instead.'),t.templateUrl=t.template,t.template='');var n=t.templateUrl,r=t.template||'',u=t.controller,c=t.controllerAs,d=angular.copy(t.resolve||{}),f=angular.copy(t.locals||{}),p=t.transformTemplate||angular.identity,g=t.bindToController;return angular.forEach(d,function(e,t){angular.isString(e)?d[t]=a.get(e):d[t]=a.invoke(e)}),angular.extend(d,f),n?d.$template=l(n):d.$template=e.when(r),t.contentTemplate&&(d.$template=e.all([d.$template,l(t.contentTemplate)]).then(function(e){var n=angular.element(e[0]),a=s('[ng-bind="content"]',n[0]).removeAttr('ng-bind').html(e[1]);return t.templateUrl||a.next().remove(),n[0].outerHTML})),e.all(d).then(function(e){var n=p(e.$template);t.html&&(n=n.replace(/ng-bind="/gi,'ng-bind-html="'));var a=angular.element('<div>').html(n.trim()).contents(),r=o(a);return{locals:e,element:a,link:function(t){if(e.$scope=t,u){var n=i(u,e,!0);g&&angular.extend(n.instance,e);var o=angular.isObject(n)?n:n();a.data('$ngControllerController',o),a.children().data('$ngControllerController',o),c&&(t[c]=o)}return r.apply(null,arguments)}}})};var u={}}angular.module('mgcrea.ngStrap.typeahead',['mgcrea.ngStrap.tooltip','mgcrea.ngStrap.helpers.parseOptions']).provider('$typeahead',function(){var e=this.defaults={animation:'am-fade',prefixClass:'typeahead',prefixEvent:'$typeahead',placement:'bottom-left',templateUrl:'typeahead/typeahead.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,minLength:1,filter:'bsAsyncFilter',limit:6,autoSelect:!1,comparator:'',trimValue:!0};this.$get=['$window','$rootScope','$tooltip','$$rAF','$timeout',function(t,n,a,o,i){function r(t,n,r){var l={},u=angular.extend({},e,r);l=a(t,u);var c=r.scope,d=l.$scope;d.$resetMatches=function(){d.$matches=[],d.$activeIndex=u.autoSelect?0:-1},d.$resetMatches(),d.$activate=function(e){d.$$postDigest(function(){l.activate(e)})},d.$select=function(e,t){d.$$postDigest(function(){l.select(e)})},d.$isVisible=function(){return l.$isVisible()},l.update=function(e){d.$matches=e,d.$activeIndex>=e.length&&(d.$activeIndex=u.autoSelect?0:-1),s(d),o(l.$applyPlacement)},l.activate=function(e){d.$activeIndex=e},l.select=function(e){if(-1!==e){var t=d.$matches[e].value;n.$setViewValue(t),n.$render(),d.$resetMatches(),c&&c.$digest(),d.$emit(u.prefixEvent+'.select',t,e,l)}},l.$isVisible=function(){return u.minLength&&n?d.$matches.length&&angular.isString(n.$viewValue)&&n.$viewValue.length>=u.minLength:!!d.$matches.length},l.$getIndex=function(e){var t=d.$matches.length,n=t;if(t){for(n=t;n--&&d.$matches[n].value!==e;);if(!(0>n))return n}},l.$onMouseDown=function(e){e.preventDefault(),e.stopPropagation()},l.$onKeyDown=function(e){/(38|40|13)/.test(e.keyCode)&&(!l.$isVisible()||13===e.keyCode&&-1===d.$activeIndex||(e.preventDefault(),e.stopPropagation()),13===e.keyCode&&d.$matches.length?l.select(d.$activeIndex):38===e.keyCode&&d.$activeIndex>0?d.$activeIndex--:40===e.keyCode&&d.$activeIndex<d.$matches.length-1?d.$activeIndex++:angular.isUndefined(d.$activeIndex)&&(d.$activeIndex=0),d.$digest())};var f=l.show;l.show=function(){f(),i(function(){l.$element&&l.$element.on('mousedown',l.$onMouseDown),u.keyboard&&t&&t.on('keydown',l.$onKeyDown)},0,!1)};var p=l.hide;return l.hide=function(){l.$element&&l.$element.off('mousedown',l.$onMouseDown),u.keyboard&&t&&t.off('keydown',l.$onKeyDown),u.autoSelect||l.activate(-1),p()},l}function s(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}angular.element(t.document.body);return r.defaults=e,r}]}).filter('bsAsyncFilter',['$filter',function(e){return function(t,n,a){return t&&angular.isFunction(t.then)?t.then(function(t){return e('filter')(t,n,a)}):e('filter')(t,n,a)}}]).directive('bsTypeahead',['$window','$parse','$q','$typeahead','$parseOptions',function(e,t,n,a,o){var i=a.defaults;return{restrict:'EAC',require:'ngModel',link:function(e,t,n,r){var s={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','filter','limit','minLength','watchOptions','selectMode','autoSelect','comparator','id','prefixEvent','prefixClass'],function(e){angular.isDefined(n[e])&&(s[e]=n[e])});var l=/^(false|0|)$/i;angular.forEach(['html','container','trimValue'],function(e){angular.isDefined(n[e])&&l.test(n[e])&&(s[e]=!1)}),t.attr('autocomplete')||t.attr('autocomplete','off');var u=s.filter||i.filter,c=s.limit||i.limit,d=s.comparator||i.comparator,f=n.bsOptions;u&&(f+=' | '+u+':$viewValue'),d&&(f+=':'+d),c&&(f+=' | limitTo:'+c);var p=o(f),g=a(t,r,s);if(s.watchOptions){var m=p.$match[7].replace(/\|.+/,'').replace(/\(.*\)/g,'').trim();e.$watchCollection(m,function(t,n){p.valuesFn(e,r).then(function(e){g.update(e),r.$render()})})}e.$watch(n.ngModel,function(t,n){e.$modelValue=t,p.valuesFn(e,r).then(function(e){if(s.selectMode&&!e.length&&t.length>0)return void r.$setViewValue(r.$viewValue.substring(0,r.$viewValue.length-1));e.length>c&&(e=e.slice(0,c));var n=g.$isVisible();n&&g.update(e),(1!==e.length||e[0].value!==t)&&(!n&&g.update(e),r.$render())})}),r.$formatters.push(function(e){var t=p.displayValue(e);return t?t:e&&'object'!=typeof e?e:''}),r.$render=function(){if(r.$isEmpty(r.$viewValue))return t.val('');var e=g.$getIndex(r.$modelValue),n=angular.isDefined(e)?g.$scope.$matches[e].label:r.$viewValue;n=angular.isObject(n)?p.displayValue(n):n;var a=n?n.toString().replace(/<(?:.|\n)*?>/gm,''):'';t.val(s.trimValue===!1?a:a.trim())},e.$on('$destroy',function(){g&&g.destroy(),s=null,g=null})}}}]),angular.module('mgcrea.ngStrap.tooltip',['mgcrea.ngStrap.core','mgcrea.ngStrap.helpers.dimensions']).provider('$tooltip',function(){var e=this.defaults={animation:'am-fade',customClass:'',prefixClass:'tooltip',prefixEvent:'tooltip',container:!1,target:!1,placement:'top',templateUrl:'tooltip/tooltip.tpl.html',template:'',contentTemplate:!1,trigger:'hover focus',keyboard:!1,html:!1,show:!1,title:'',type:'',delay:0,autoClose:!1,bsEnabled:!0,viewport:{selector:'body',padding:0}};this.$get=['$window','$rootScope','$bsCompiler','$q','$templateCache','$http','$animate','$sce','dimensions','$$rAF','$timeout',function(n,a,o,i,r,s,l,u,c,d,f){function p(i,r){function s(){I.$emit(V.prefixEvent+'.show',F)}function p(){if(I.$emit(V.prefixEvent+'.hide',F),R===j){if(z&&'focus'===V.trigger)return i[0].blur();A()}}function v(){var e=V.trigger.split(' ');angular.forEach(e,function(e){'click'===e?i.on('click',F.toggle):'manual'!==e&&(i.on('hover'===e?'mouseenter':'focus',F.enter),i.on('hover'===e?'mouseleave':'blur',F.leave),'button'===N&&'hover'!==e&&i.on($?'touchstart':'mousedown',F.$onFocusElementMouseDown))})}function w(){for(var e=V.trigger.split(' '),t=e.length;t--;){var n=e[t];'click'===n?i.off('click',F.toggle):'manual'!==n&&(i.off('hover'===n?'mouseenter':'focus',F.enter),i.off('hover'===n?'mouseleave':'blur',F.leave),'button'===N&&'hover'!==n&&i.off($?'touchstart':'mousedown',F.$onFocusElementMouseDown))}}function y(){'focus'!==V.trigger?R.on('keyup',F.$onKeyUp):i.on('keyup',F.$onFocusKeyUp)}function b(){'focus'!==V.trigger?R.off('keyup',F.$onKeyUp):i.off('keyup',F.$onFocusKeyUp)}function D(){f(function(){R.on('click',S),h.on('click',F.hide),K=!0},0,!1)}function k(){K&&(R.off('click',S),h.off('click',F.hide),K=!1)}function S(e){e.stopPropagation()}function x(e){e=e||V.target||i;var a=e[0],o='BODY'===a.tagName,r=a.getBoundingClientRect(),s={};for(var l in r)s[l]=r[l];null===s.width&&(s=angular.extend({},s,{width:r.right-r.left,height:r.bottom-r.top}));var u=o?{top:0,left:0}:c.offset(a),d={scroll:o?t.documentElement.scrollTop||t.body.scrollTop:e.prop('scrollTop')||0},f=o?{width:t.documentElement.clientWidth,height:n.innerHeight}:null;return angular.extend({},s,d,f,u)}function T(e,t,n,a){var o,i=e.split('-');switch(i[0]){case'right':o={top:t.top+t.height/2-a/2,left:t.left+t.width};break;case'bottom':o={top:t.top+t.height,left:t.left+t.width/2-n/2};break;case'left':o={top:t.top+t.height/2-a/2,left:t.left-n};break;default:o={top:t.top-a,left:t.left+t.width/2-n/2}}if(!i[1])return o;if('top'===i[0]||'bottom'===i[0])switch(i[1]){case'left':o.left=t.left;break;case'right':o.left=t.left+t.width-n}else if('left'===i[0]||'right'===i[0])switch(i[1]){case'top':o.top=t.top-a;break;case'bottom':o.top=t.top+t.height}return o}function C(e,t){var n=R[0],a=n.offsetWidth,o=n.offsetHeight,i=parseInt(c.css(n,'margin-top'),10),r=parseInt(c.css(n,'margin-left'),10);isNaN(i)&&(i=0),isNaN(r)&&(r=0),e.top=e.top+i,e.left=e.left+r,c.setOffset(n,angular.extend({using:function(e){R.css({top:Math.round(e.top)+'px',left:Math.round(e.left)+'px',right:''})}},e),0);var s=n.offsetWidth,l=n.offsetHeight;if('top'===t&&l!==o&&(e.top=e.top+o-l),!/top-left|top-right|bottom-left|bottom-right/.test(t)){var u=E(t,e,s,l);if(u.left?e.left+=u.left:e.top+=u.top,c.setOffset(n,e),/top|right|bottom|left/.test(t)){var d=/top|bottom/.test(t),f=d?2*u.left-a+s:2*u.top-o+l,p=d?'offsetWidth':'offsetHeight';M(f,n[p],d)}}}function E(e,t,n,a){var o={top:0,left:0};if(!F.$viewport)return o;var i=V.viewport&&V.viewport.padding||0,r=x(F.$viewport);if(/right|left/.test(e)){var s=t.top-i-r.scroll,l=t.top+i-r.scroll+a;s<r.top?o.top=r.top-s:l>r.top+r.height&&(o.top=r.top+r.height-l)}else{var u=t.left-i,c=t.left+i+n;u<r.left?o.left=r.left-u:c>r.right&&(o.left=r.left+r.width-c)}return o}function M(e,t,n){var a=m('.tooltip-arrow, .arrow',R[0]);a.css(n?'left':'top',50*(1-e/t)+'%').css(n?'top':'left','')}function A(){clearTimeout(H),F.$isShown&&null!==R&&(V.autoClose&&k(),V.keyboard&&b()),q&&(q.$destroy(),q=null),R&&(R.remove(),R=F.$element=null)}var F={},V=F.$options=angular.extend({},e,r),O=F.$promise=o.compile(V),I=F.$scope=V.scope&&V.scope.$new()||a.$new(),N=i[0].nodeName.toLowerCase();if(V.delay&&angular.isString(V.delay)){var P=V.delay.split(',').map(parseFloat);V.delay=P.length>1?{show:P[0],hide:P[1]}:P[0]}F.$id=V.id||i.attr('id')||'',V.title&&(I.title=u.trustAsHtml(V.title)),I.$setEnabled=function(e){I.$$postDigest(function(){F.setEnabled(e)})},I.$hide=function(){I.$$postDigest(function(){F.hide()})},I.$show=function(){I.$$postDigest(function(){F.show()})},I.$toggle=function(){I.$$postDigest(function(){F.toggle()})},F.$isShown=I.$isShown=!1;var H,L,U,R,Y,q;O.then(function(e){U=e,F.init()}),F.init=function(){V.delay&&angular.isNumber(V.delay)&&(V.delay={show:V.delay,hide:V.delay}),'self'===V.container?Y=i:angular.isElement(V.container)?Y=V.container:V.container&&(Y=m(V.container)),v(),V.target&&(V.target=angular.isElement(V.target)?V.target:m(V.target)),V.show&&I.$$postDigest(function(){'focus'===V.trigger?i[0].focus():F.show()})},F.destroy=function(){w(),A(),I.$destroy()},F.enter=function(){return clearTimeout(H),L='in',V.delay&&V.delay.show?void(H=setTimeout(function(){'in'===L&&F.show()},V.delay.show)):F.show()},F.show=function(){if(V.bsEnabled&&!F.$isShown){I.$emit(V.prefixEvent+'.show.before',F);var e,t;V.container?(e=Y,t=Y[0].lastChild?angular.element(Y[0].lastChild):null):(e=null,t=i),R&&A(),q=F.$scope.$new(),R=F.$element=U.link(q,function(e,t){}),R.css({top:'-9999px',left:'-9999px',right:'auto',display:'block',visibility:'hidden'}),V.animation&&R.addClass(V.animation),V.type&&R.addClass(V.prefixClass+'-'+V.type),V.customClass&&R.addClass(V.customClass),t?t.after(R):e.prepend(R),F.$isShown=I.$isShown=!0,g(I),F.$applyPlacement(),angular.version.minor<=2?l.enter(R,e,t,s):l.enter(R,e,t).then(s),g(I),d(function(){R&&R.css({visibility:'visible'})}),V.keyboard&&('focus'!==V.trigger&&F.focus(),y()),V.autoClose&&D()}},F.leave=function(){return clearTimeout(H),L='out',V.delay&&V.delay.hide?void(H=setTimeout(function(){'out'===L&&F.hide()},V.delay.hide)):F.hide()};var z,j;F.hide=function(e){F.$isShown&&(I.$emit(V.prefixEvent+'.hide.before',F),z=e,j=R,angular.version.minor<=2?l.leave(R,p):l.leave(R).then(p),F.$isShown=I.$isShown=!1,g(I),V.keyboard&&null!==R&&b(),V.autoClose&&null!==R&&k())},F.toggle=function(){F.$isShown?F.leave():F.enter()},F.focus=function(){R[0].focus()},F.setEnabled=function(e){V.bsEnabled=e},F.setViewport=function(e){V.viewport=e},F.$applyPlacement=function(){if(R){var t=V.placement,n=/\s?auto?\s?/i,a=n.test(t);a&&(t=t.replace(n,'')||e.placement),R.addClass(V.placement);var o=x(),i=R.prop('offsetWidth'),r=R.prop('offsetHeight');if(F.$viewport=V.viewport&&m(V.viewport.selector||V.viewport),a){var s=t,l=x(F.$viewport);s.indexOf('bottom')>=0&&o.bottom+r>l.bottom?t=s.replace('bottom','top'):s.indexOf('top')>=0&&o.top-r<l.top&&(t=s.replace('top','bottom')),('right'===s||'bottom-left'===s||'top-left'===s)&&o.right+i>l.width?t='right'===s?'left':t.replace('left','right'):('left'===s||'bottom-right'===s||'top-right'===s)&&o.left-i<l.left&&(t='left'===s?'right':t.replace('right','left')),R.removeClass(s).addClass(t)}var u=T(t,o,i,r);C(u,t)}},F.$onKeyUp=function(e){27===e.which&&F.$isShown&&(F.hide(),e.stopPropagation())},F.$onFocusKeyUp=function(e){27===e.which&&(i[0].blur(),e.stopPropagation())},F.$onFocusElementMouseDown=function(e){e.preventDefault(),e.stopPropagation(),F.$isShown?i[0].blur():i[0].focus()};var K=!1;return F}function g(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}function m(e,n){return angular.element((n||t).querySelectorAll(e))}var $=(String.prototype.trim,'createTouch'in n.document),h=angular.element(n.document);return p}]}).directive('bsTooltip',['$window','$location','$sce','$tooltip','$$rAF',function(e,t,n,a,o){return{restrict:'EAC',scope:!0,link:function(e,t,i,r){var s={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','contentTemplate','placement','container','delay','trigger','html','animation','backdropAnimation','type','customClass','id'],function(e){angular.isDefined(i[e])&&(s[e]=i[e])});var l=/^(false|0|)$/i;angular.forEach(['html','container'],function(e){angular.isDefined(i[e])&&l.test(i[e])&&(s[e]=!1)});var u=t.attr('data-target');angular.isDefined(u)&&(l.test(u)?s.target=!1:s.target=u),e.hasOwnProperty('title')||(e.title=''),i.$observe('title',function(t){if(angular.isDefined(t)||!e.hasOwnProperty('title')){var a=e.title;e.title=n.trustAsHtml(t),angular.isDefined(a)&&o(function(){c&&c.$applyPlacement()})}}),i.bsTooltip&&e.$watch(i.bsTooltip,function(t,n){angular.isObject(t)?angular.extend(e,t):e.title=t,angular.isDefined(n)&&o(function(){c&&c.$applyPlacement()})},!0),i.bsShow&&e.$watch(i.bsShow,function(e,t){c&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(tooltip),?/i)),e===!0?c.show():c.hide())}),i.bsEnabled&&e.$watch(i.bsEnabled,function(e,t){c&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|1|,?(tooltip),?/i)),e===!1?c.setEnabled(!1):c.setEnabled(!0))}),i.viewport&&e.$watch(i.viewport,function(e){c&&angular.isDefined(e)&&c.setViewport(e)});var c=a(t,s);e.$on('$destroy',function(){c&&c.destroy(),s=null,c=null})}}}]),angular.module('mgcrea.ngStrap.timepicker',['mgcrea.ngStrap.helpers.dateParser','mgcrea.ngStrap.helpers.dateFormatter','mgcrea.ngStrap.tooltip']).provider('$timepicker',function(){var e=this.defaults={animation:'am-fade',prefixClass:'timepicker',placement:'bottom-left',templateUrl:'timepicker/timepicker.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,useNative:!0,timeType:'date',timeFormat:'shortTime',timezone:null,modelTimeFormat:null,autoclose:!1,minTime:-(1/0),maxTime:+(1/0),length:5,hourStep:1,minuteStep:5,secondStep:5,roundDisplay:!1,iconUp:'glyphicon glyphicon-chevron-up',iconDown:'glyphicon glyphicon-chevron-down',arrowBehavior:'pager'};this.$get=['$window','$document','$rootScope','$sce','$dateFormatter','$tooltip','$timeout',function(t,n,a,o,i,r,s){function l(t,n,a){function o(e){var t=6e4*g.minuteStep;return new Date(Math.floor(e.getTime()/t)*t)}function l(e,n){var a=e+n;if(t[0].createTextRange){var o=t[0].createTextRange();o.collapse(!0),o.moveStart('character',e),o.moveEnd('character',a),o.select()}else t[0].setSelectionRange?t[0].setSelectionRange(e,a):angular.isUndefined(t[0].selectionStart)&&(t[0].selectionStart=e,t[0].selectionEnd=a)}function d(){t[0].focus()}var f=r(t,angular.extend({},e,a)),p=a.scope,g=f.$options,m=f.$scope,$=g.lang,h=function(e,t,n){return i.formatDate(e,t,$,n)},v=0,w=g.roundDisplay?o(new Date):new Date,y=n.$dateValue||w,b={hour:y.getHours(),meridian:y.getHours()<12,minute:y.getMinutes(),second:y.getSeconds(),millisecond:y.getMilliseconds()},D=i.getDatetimeFormat(g.timeFormat,$),k=i.hoursFormat(D),S=i.timeSeparator(D),x=i.minutesFormat(D),T=i.secondsFormat(D),C=i.showSeconds(D),E=i.showAM(D);m.$iconUp=g.iconUp,m.$iconDown=g.iconDown,m.$select=function(e,t){f.select(e,t)},m.$moveIndex=function(e,t){f.$moveIndex(e,t)},m.$switchMeridian=function(e){f.switchMeridian(e)},f.update=function(e){angular.isDate(e)&&!isNaN(e.getTime())?(f.$date=e,angular.extend(b,{hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()}),f.$build()):f.$isBuilt||f.$build()},f.select=function(e,t,a){(!n.$dateValue||isNaN(n.$dateValue.getTime()))&&(n.$dateValue=new Date(1970,0,1)),angular.isDate(e)||(e=new Date(e)),0===t?n.$dateValue.setHours(e.getHours()):1===t?n.$dateValue.setMinutes(e.getMinutes()):2===t&&n.$dateValue.setSeconds(e.getSeconds()),n.$setViewValue(angular.copy(n.$dateValue)),n.$render(),g.autoclose&&!a&&s(function(){f.hide(!0)})},f.switchMeridian=function(e){if(n.$dateValue&&!isNaN(n.$dateValue.getTime())){var t=(e||n.$dateValue).getHours();n.$dateValue.setHours(12>t?t+12:t-12),n.$setViewValue(angular.copy(n.$dateValue)),n.$render()}},f.$build=function(){var e,t,n=m.midIndex=parseInt(g.length/2,10),a=[];for(e=0;e<g.length;e++)t=new Date(1970,0,1,b.hour-(n-e)*g.hourStep),a.push({date:t,label:h(t,k),selected:f.$date&&f.$isSelected(t,0),disabled:f.$isDisabled(t,0)});var o,i=[];for(e=0;e<g.length;e++)o=new Date(1970,0,1,0,b.minute-(n-e)*g.minuteStep),i.push({date:o,label:h(o,x),selected:f.$date&&f.$isSelected(o,1),disabled:f.$isDisabled(o,1)});var r,s=[];for(e=0;e<g.length;e++)r=new Date(1970,0,1,0,0,b.second-(n-e)*g.secondStep),s.push({date:r,label:h(r,T),selected:f.$date&&f.$isSelected(r,2),disabled:f.$isDisabled(r,2)});var l=[];for(e=0;e<g.length;e++)C?l.push([a[e],i[e],s[e]]):l.push([a[e],i[e]]);m.rows=l,m.showSeconds=C,m.showAM=E,m.isAM=(f.$date||a[n].date).getHours()<12,m.timeSeparator=S,f.$isBuilt=!0},f.$isSelected=function(e,t){return f.$date?0===t?e.getHours()===f.$date.getHours():1===t?e.getMinutes()===f.$date.getMinutes():2===t?e.getSeconds()===f.$date.getSeconds():void 0:!1},f.$isDisabled=function(e,t){var n;return 0===t?n=e.getTime()+6e4*b.minute+1e3*b.second:1===t?n=e.getTime()+36e5*b.hour+1e3*b.second:2===t&&(n=e.getTime()+36e5*b.hour+6e4*b.minute),n<1*g.minTime||n>1*g.maxTime},m.$arrowAction=function(e,t){'picker'===g.arrowBehavior?f.$setTimeByStep(e,t):f.$moveIndex(e,t)},f.$setTimeByStep=function(e,t){var n=new Date(f.$date||y),a=n.getHours(),o=n.getMinutes(),i=n.getSeconds();0===t?n.setHours(a-parseInt(g.hourStep,10)*e):1===t?n.setMinutes(o-parseInt(g.minuteStep,10)*e):2===t&&n.setSeconds(i-parseInt(g.secondStep,10)*e),f.select(n,t,!0)},f.$moveIndex=function(e,t){var n;0===t?(n=new Date(1970,0,1,b.hour+e*g.length,b.minute,b.second),angular.extend(b,{hour:n.getHours()})):1===t?(n=new Date(1970,0,1,b.hour,b.minute+e*g.length*g.minuteStep,b.second),angular.extend(b,{minute:n.getMinutes()})):2===t&&(n=new Date(1970,0,1,b.hour,b.minute,b.second+e*g.length*g.secondStep),angular.extend(b,{second:n.getSeconds()})),f.$build()},f.$onMouseDown=function(e){if('input'!==e.target.nodeName.toLowerCase()&&e.preventDefault(),e.stopPropagation(),c){var t=angular.element(e.target);'button'!==t[0].nodeName.toLowerCase()&&(t=t.parent()),t.triggerHandler('click')}},f.$onKeyDown=function(e){if(/(38|37|39|40|13)/.test(e.keyCode)&&!e.shiftKey&&!e.altKey){if(e.preventDefault(),e.stopPropagation(),13===e.keyCode)return void f.hide(!0);var t=new Date(f.$date),n=t.getHours(),a=h(t,k).length,o=t.getMinutes(),i=h(t,x).length,r=t.getSeconds(),s=h(t,T).length,u=1,c=/(37|39)/.test(e.keyCode),d=2+1*C+1*E;c&&(37===e.keyCode?v=1>v?d-1:v-1:39===e.keyCode&&(v=d-1>v?v+1:0));var m=[0,a],$=0;38===e.keyCode&&($=-1),40===e.keyCode&&($=1);var w=2===v&&C,y=2===v&&!C||3===v&&C;0===v?(t.setHours(n+$*parseInt(g.hourStep,10)),a=h(t,k).length,m=[0,a]):1===v?(t.setMinutes(o+$*parseInt(g.minuteStep,10)),i=h(t,x).length,m=[a+u,i]):w?(t.setSeconds(r+$*parseInt(g.secondStep,10)),s=h(t,T).length,m=[a+u+i+u,s]):y&&(c||f.switchMeridian(),m=[a+u+i+u+(s+u)*C,2]),f.select(t,v,!0),l(m[0],m[1]),p.$digest()}};var M=f.init;f.init=function(){return u&&g.useNative?(t.prop('type','time'),void t.css('-webkit-appearance','textfield')):(c&&(t.prop('type','text'),t.attr('readonly','true'),t.on('click',d)),void M())};var A=f.destroy;f.destroy=function(){u&&g.useNative&&t.off('click',d),A()};var F=f.show;f.show=function(){!c&&t.attr('readonly')||t.attr('disabled')||(F(),s(function(){f.$element&&f.$element.on(c?'touchstart':'mousedown',f.$onMouseDown),g.keyboard&&t&&t.on('keydown',f.$onKeyDown)},0,!1))};var V=f.hide;return f.hide=function(e){f.$isShown&&(f.$element&&f.$element.off(c?'touchstart':'mousedown',f.$onMouseDown),g.keyboard&&t&&t.off('keydown',f.$onKeyDown),V(e))},f}var u=/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent),c='createTouch'in t.document&&u;return e.lang||(e.lang=i.getDefaultLocale()),l.defaults=e,l}]}).directive('bsTimepicker',['$window','$parse','$q','$dateFormatter','$dateParser','$timepicker',function(e,t,a,o,i,r){var s=r.defaults,l=/(ip(a|o)d|iphone|android)/gi.test(e.navigator.userAgent);return{restrict:'EAC',require:'ngModel',link:function(e,t,a,u){function c(e){if(angular.isDate(e)){var t=isNaN(f.minTime)||new Date(e.getTime()).setFullYear(1970,0,1)>=f.minTime,n=isNaN(f.maxTime)||new Date(e.getTime()).setFullYear(1970,0,1)<=f.maxTime,a=t&&n;u.$setValidity('date',a),u.$setValidity('min',t),u.$setValidity('max',n),a&&(u.$dateValue=e)}}function d(){return!u.$dateValue||isNaN(u.$dateValue.getTime())?'':$(u.$dateValue,f.timeFormat)}var f={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','autoclose','timeType','timeFormat','timezone','modelTimeFormat','useNative','hourStep','minuteStep','secondStep','length','arrowBehavior','iconUp','iconDown','roundDisplay','id','prefixClass','prefixEvent'],function(e){angular.isDefined(a[e])&&(f[e]=a[e])});var p=/^(false|0|)$/i;angular.forEach(['html','container','autoclose','useNative','roundDisplay'],function(e){angular.isDefined(a[e])&&p.test(a[e])&&(f[e]=!1)}),a.bsShow&&e.$watch(a.bsShow,function(e,t){g&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(timepicker),?/i)),e===!0?g.show():g.hide())}),l&&(f.useNative||s.useNative)&&(f.timeFormat='HH:mm');var g=r(t,u,f);f=g.$options;var m=f.lang,$=function(e,t,n){return o.formatDate(e,t,m,n)},h=i({format:f.timeFormat,lang:m});angular.forEach(['minTime','maxTime'],function(e){angular.isDefined(a[e])&&a.$observe(e,function(t){g.$options[e]=h.getTimeForAttribute(e,t),!isNaN(g.$options[e])&&g.$build(),c(u.$dateValue)})}),e.$watch(a.ngModel,function(e,t){g.update(u.$dateValue)},!0),u.$parsers.unshift(function(e){var t;if(!e)return u.$setValidity('date',!0),null;var a=angular.isDate(e)?e:h.parse(e,u.$dateValue);return!a||isNaN(a.getTime())?(u.$setValidity('date',!1),n):(c(a),'string'===f.timeType?(t=h.timezoneOffsetAdjust(a,f.timezone,!0),$(t,f.modelTimeFormat||f.timeFormat)):(t=h.timezoneOffsetAdjust(u.$dateValue,f.timezone,!0),'number'===f.timeType?t.getTime():'unix'===f.timeType?t.getTime()/1e3:'iso'===f.timeType?t.toISOString():new Date(t)))}),u.$formatters.push(function(e){var t;return t=angular.isUndefined(e)||null===e?NaN:angular.isDate(e)?e:'string'===f.timeType?h.parse(e,null,f.modelTimeFormat):'unix'===f.timeType?new Date(1e3*e):new Date(e),u.$dateValue=h.timezoneOffsetAdjust(t,f.timezone),d()}),u.$render=function(){t.val(d())},e.$on('$destroy',function(){g&&g.destroy(),f=null,g=null})}}}]),angular.module('mgcrea.ngStrap.tab',[]).provider('$tab',function(){var e=this.defaults={animation:'am-fade',template:'tab/tab.tpl.html',navClass:'nav-tabs',activeClass:'active'},t=this.controller=function(t,n,a){var o=this;o.$options=angular.copy(e),angular.forEach(['animation','navClass','activeClass'],function(e){angular.isDefined(a[e])&&(o.$options[e]=a[e])}),t.$navClass=o.$options.navClass,t.$activeClass=o.$options.activeClass,o.$panes=t.$panes=[],o.$activePaneChangeListeners=o.$viewChangeListeners=[],o.$push=function(e){angular.isUndefined(o.$panes.$active)&&t.$setActive(e.name||0),o.$panes.push(e)},o.$remove=function(e){var t,n=o.$panes.indexOf(e),a=o.$panes.$active;t=angular.isString(a)?o.$panes.map(function(e){return e.name}).indexOf(a):o.$panes.$active,o.$panes.splice(n,1),t>n?t--:n===t&&t===o.$panes.length&&t--,t>=0&&t<o.$panes.length?o.$setActive(o.$panes[t].name||t):o.$setActive()},o.$setActive=t.$setActive=function(e){o.$panes.$active=e,o.$activePaneChangeListeners.forEach(function(e){e()})},o.$isActive=t.$isActive=function(e,t){return o.$panes.$active===e.name||o.$panes.$active===t}};this.$get=function(){var n={};return n.defaults=e,n.controller=t,n}}).directive('bsTabs',['$window','$animate','$tab','$parse',function(e,t,n,a){var o=n.defaults;return{require:['?ngModel','bsTabs'],transclude:!0,scope:!0,controller:['$scope','$element','$attrs',n.controller],templateUrl:function(e,t){return t.template||o.template},link:function(e,t,n,o){var i=o[0],r=o[1];if(i&&(r.$activePaneChangeListeners.push(function(){i.$setViewValue(r.$panes.$active)}),i.$formatters.push(function(e){return r.$setActive(e),e})),n.bsActivePane){var s=a(n.bsActivePane);r.$activePaneChangeListeners.push(function(){s.assign(e,r.$panes.$active)}),e.$watch(n.bsActivePane,function(e,t){r.$setActive(e)},!0)}}}}]).directive('bsPane',['$window','$animate','$sce',function(e,t,n){return{require:['^?ngModel','^bsTabs'],scope:!0,link:function(e,a,o,i){function r(){var n=s.$panes.indexOf(e);t[s.$isActive(e,n)?'addClass':'removeClass'](a,s.$options.activeClass)}var s=(i[0],i[1]);a.addClass('tab-pane'),o.$observe('title',function(t,a){e.title=n.trustAsHtml(t)}),e.name=o.name,s.$options.animation&&a.addClass(s.$options.animation),o.$observe('disabled',function(t,n){e.disabled=e.$eval(t)}),s.$push(e),e.$on('$destroy',function(){s.$remove(e)}),s.$activePaneChangeListeners.push(function(){r()}),r()}}}]),angular.module('mgcrea.ngStrap.select',['mgcrea.ngStrap.tooltip','mgcrea.ngStrap.helpers.parseOptions']).provider('$select',function(){var e=this.defaults={animation:'am-fade',prefixClass:'select',prefixEvent:'$select',placement:'bottom-left',templateUrl:'select/select.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,multiple:!1,allNoneButtons:!1,sort:!0,caretHtml:'&nbsp;<span class="caret"></span>',placeholder:'Choose among the following...',allText:'All',noneText:'None',maxLength:3,maxLengthHtml:'selected',iconCheckmark:'glyphicon glyphicon-ok'};this.$get=['$window','$document','$rootScope','$tooltip','$timeout',function(t,n,a,o,i){function r(a,r,s){var u={},c=angular.extend({},e,s);u=o(a,c);var d=u.$scope;d.$matches=[],c.multiple?d.$activeIndex=[]:d.$activeIndex=-1,d.$isMultiple=c.multiple,d.$showAllNoneButtons=c.allNoneButtons&&c.multiple,d.$iconCheckmark=c.iconCheckmark,d.$allText=c.allText,d.$noneText=c.noneText,d.$activate=function(e){d.$$postDigest(function(){u.activate(e)})},d.$select=function(e,t){d.$$postDigest(function(){u.select(e)})},d.$isVisible=function(){return u.$isVisible()},d.$isActive=function(e){return u.$isActive(e)},d.$selectAll=function(){for(var e=0;e<d.$matches.length;e++)d.$isActive(e)||d.$select(e)},d.$selectNone=function(){for(var e=0;e<d.$matches.length;e++)d.$isActive(e)&&d.$select(e)},u.update=function(e){d.$matches=e,u.$updateActiveIndex()},u.activate=function(e){return c.multiple?(u.$isActive(e)?d.$activeIndex.splice(d.$activeIndex.indexOf(e),1):d.$activeIndex.push(e),c.sort&&d.$activeIndex.sort(function(e,t){return e-t})):d.$activeIndex=e,d.$activeIndex},u.select=function(e){var t=d.$matches[e].value;d.$apply(function(){u.activate(e),c.multiple?r.$setViewValue(d.$activeIndex.map(function(e){return angular.isUndefined(d.$matches[e])?null:d.$matches[e].value})):(r.$setViewValue(t),u.hide())}),d.$emit(c.prefixEvent+'.select',t,e,u)},u.$updateActiveIndex=function(){r.$modelValue&&d.$matches.length?c.multiple&&angular.isArray(r.$modelValue)?d.$activeIndex=r.$modelValue.map(function(e){return u.$getIndex(e)}):d.$activeIndex=u.$getIndex(r.$modelValue):d.$activeIndex>=d.$matches.length?d.$activeIndex=c.multiple?[]:0:r.$modelValue||c.multiple||(d.$activeIndex=-1)},u.$isVisible=function(){return c.minLength&&r?d.$matches.length&&r.$viewValue.length>=c.minLength:d.$matches.length},u.$isActive=function(e){return c.multiple?-1!==d.$activeIndex.indexOf(e):d.$activeIndex===e},u.$getIndex=function(e){var t=d.$matches.length,n=t;if(t){for(n=t;n--&&d.$matches[n].value!==e;);if(!(0>n))return n}},u.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),l){var t=angular.element(e.target);t.triggerHandler('click')}},u.$onKeyDown=function(e){return/(9|13|38|40)/.test(e.keyCode)?(9!==e.keyCode&&(e.preventDefault(),e.stopPropagation()),c.multiple&&9===e.keyCode?u.hide():c.multiple||13!==e.keyCode&&9!==e.keyCode?void(c.multiple||(38===e.keyCode&&d.$activeIndex>0?d.$activeIndex--:38===e.keyCode&&d.$activeIndex<0?d.$activeIndex=d.$matches.length-1:40===e.keyCode&&d.$activeIndex<d.$matches.length-1?d.$activeIndex++:angular.isUndefined(d.$activeIndex)&&(d.$activeIndex=0),d.$digest())):u.select(d.$activeIndex)):void 0},u.$isIE=function(){var e=t.navigator.userAgent;return e.indexOf('MSIE ')>0||e.indexOf('Trident/')>0||e.indexOf('Edge/')>0},u.$selectScrollFix=function(e){'UL'===n[0].activeElement.tagName&&(e.preventDefault(),e.stopImmediatePropagation(),e.target.focus())};var f=u.show;u.show=function(){f(),c.multiple&&u.$element.addClass('select-multiple'),i(function(){u.$element.on(l?'touchstart':'mousedown',u.$onMouseDown),c.keyboard&&a.on('keydown',u.$onKeyDown)},0,!1)};var p=u.hide;return u.hide=function(){c.multiple||r.$modelValue||(d.$activeIndex=-1),u.$element.off(l?'touchstart':'mousedown',u.$onMouseDown),c.keyboard&&a.off('keydown',u.$onKeyDown),p(!0)},u}var s=(angular.element(t.document.body),/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)),l='createTouch'in t.document&&s;return r.defaults=e,r}]}).directive('bsSelect',['$window','$parse','$q','$select','$parseOptions',function(e,t,n,a,o){var i=a.defaults;return{restrict:'EAC',require:'ngModel',link:function(e,t,n,r){var s={scope:e,placeholder:i.placeholder};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','placeholder','allNoneButtons','maxLength','maxLengthHtml','allText','noneText','iconCheckmark','autoClose','id','sort','caretHtml','prefixClass','prefixEvent'],function(e){angular.isDefined(n[e])&&(s[e]=n[e])});var l=/^(false|0|)$/i;angular.forEach(['html','container','allNoneButtons','sort'],function(e){angular.isDefined(n[e])&&l.test(n[e])&&(s[e]=!1)});var u=t.attr('data-multiple');if(angular.isDefined(u)&&(l.test(u)?s.multiple=!1:s.multiple=u),'select'===t[0].nodeName.toLowerCase()){var c=t;c.css('display','none'),t=angular.element('<button type="button" class="btn btn-default"></button>'),c.after(t)}var d=o(n.bsOptions),f=a(t,r,s);f.$isIE()&&t[0].addEventListener('blur',f.$selectScrollFix);var p=d.$match[7].replace(/\|.+/,'').trim();e.$watchCollection(p,function(t,n){d.valuesFn(e,r).then(function(e){f.update(e),r.$render()})}),e.$watch(n.ngModel,function(e,t){f.$updateActiveIndex(),r.$render()},!0),r.$render=function(){var e,n;s.multiple&&angular.isArray(r.$modelValue)?(e=r.$modelValue.map(function(e){
return n=f.$getIndex(e),angular.isDefined(n)?f.$scope.$matches[n].label:!1}).filter(angular.isDefined),e=e.length>(s.maxLength||i.maxLength)?e.length+' '+(s.maxLengthHtml||i.maxLengthHtml):e.join(', ')):(n=f.$getIndex(r.$modelValue),e=angular.isDefined(n)?f.$scope.$matches[n].label:!1),t.html((e?e:s.placeholder)+(s.caretHtml?s.caretHtml:i.caretHtml))},s.multiple&&(r.$isEmpty=function(e){return!e||0===e.length}),e.$on('$destroy',function(){f&&f.destroy(),s=null,f=null})}}}]),angular.module('mgcrea.ngStrap.scrollspy',['mgcrea.ngStrap.helpers.debounce','mgcrea.ngStrap.helpers.dimensions']).provider('$scrollspy',function(){var e=this.$$spies={},n=this.defaults={debounce:150,throttle:100,offset:100};this.$get=['$window','$document','$rootScope','dimensions','debounce','throttle',function(a,o,i,r,s,l){function u(e,t){return e[0].nodeName&&e[0].nodeName.toLowerCase()===t.toLowerCase()}function c(o){var c=angular.extend({},n,o);c.element||(c.element=p);var g=u(c.element,'body'),m=g?d:c.element,$=g?'window':c.id;if(e[$])return e[$].$$count++,e[$];var h,v,w,y,b,D,k,S,x={},T=x.$trackedElements=[],C=[];return x.init=function(){this.$$count=1,y=s(this.checkPosition,c.debounce),b=l(this.checkPosition,c.throttle),m.on('click',this.checkPositionWithEventLoop),d.on('resize',y),m.on('scroll',b),D=s(this.checkOffsets,c.debounce),h=i.$on('$viewContentLoaded',D),v=i.$on('$includeContentLoaded',D),D(),$&&(e[$]=x)},x.destroy=function(){this.$$count--,this.$$count>0||(m.off('click',this.checkPositionWithEventLoop),d.off('resize',y),m.off('scroll',b),h(),v(),$&&delete e[$])},x.checkPosition=function(){if(C.length){if(S=(g?a.pageYOffset:m.prop('scrollTop'))||0,k=Math.max(a.innerHeight,f.prop('clientHeight')),S<C[0].offsetTop&&w!==C[0].target)return x.$activateElement(C[0]);for(var e=C.length;e--;)if(!angular.isUndefined(C[e].offsetTop)&&null!==C[e].offsetTop&&w!==C[e].target&&!(S<C[e].offsetTop||C[e+1]&&S>C[e+1].offsetTop))return x.$activateElement(C[e])}},x.checkPositionWithEventLoop=function(){setTimeout(x.checkPosition,1)},x.$activateElement=function(e){if(w){var t=x.$getTrackedElement(w);t&&(t.source.removeClass('active'),u(t.source,'li')&&u(t.source.parent().parent(),'li')&&t.source.parent().parent().removeClass('active'))}w=e.target,e.source.addClass('active'),u(e.source,'li')&&u(e.source.parent().parent(),'li')&&e.source.parent().parent().addClass('active')},x.$getTrackedElement=function(e){return T.filter(function(t){return t.target===e})[0]},x.checkOffsets=function(){angular.forEach(T,function(e){var n=t.querySelector(e.target);e.offsetTop=n?r.offset(n).top:null,c.offset&&null!==e.offsetTop&&(e.offsetTop-=1*c.offset)}),C=T.filter(function(e){return null!==e.offsetTop}).sort(function(e,t){return e.offsetTop-t.offsetTop}),y()},x.trackElement=function(e,t){T.push({target:e,source:t})},x.untrackElement=function(e,t){for(var n,a=T.length;a--;)if(T[a].target===e&&T[a].source===t){n=a;break}T=T.splice(n,1)},x.activate=function(e){T[e].addClass('active')},x.init(),x}var d=angular.element(a),f=angular.element(o.prop('documentElement')),p=angular.element(a.document.body);return c}]}).directive('bsScrollspy',['$rootScope','debounce','dimensions','$scrollspy',function(e,t,n,a){return{restrict:'EAC',link:function(e,t,n){var o={scope:e};angular.forEach(['offset','target'],function(e){angular.isDefined(n[e])&&(o[e]=n[e])});var i=a(o);i.trackElement(o.target,t),e.$on('$destroy',function(){i&&(i.untrackElement(o.target,t),i.destroy()),o=null,i=null})}}}]).directive('bsScrollspyList',['$rootScope','debounce','dimensions','$scrollspy',function(e,t,n,a){return{restrict:'A',compile:function(e,t){var n=e[0].querySelectorAll('li > a[href]');angular.forEach(n,function(e){var t=angular.element(e);t.parent().attr('bs-scrollspy','').attr('data-target',t.attr('href'))})}}}]),angular.module('mgcrea.ngStrap.popover',['mgcrea.ngStrap.tooltip']).provider('$popover',function(){var e=this.defaults={animation:'am-fade',customClass:'',container:!1,target:!1,placement:'right',templateUrl:'popover/popover.tpl.html',contentTemplate:!1,trigger:'click',keyboard:!0,html:!1,title:'',content:'',delay:0,autoClose:!1};this.$get=['$tooltip',function(t){function n(n,a){var o=angular.extend({},e,a),i=t(n,o);return o.content&&(i.$scope.content=o.content),i}return n}]}).directive('bsPopover',['$window','$sce','$popover',function(e,t,n){var a=e.requestAnimationFrame||e.setTimeout;return{restrict:'EAC',scope:!0,link:function(e,o,i){var r={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','contentTemplate','placement','container','delay','trigger','html','animation','customClass','autoClose','id','prefixClass','prefixEvent'],function(e){angular.isDefined(i[e])&&(r[e]=i[e])});var s=/^(false|0|)$/i;angular.forEach(['html','container','autoClose'],function(e){angular.isDefined(i[e])&&s.test(i[e])&&(r[e]=!1)});var l=o.attr('data-target');angular.isDefined(l)&&(s.test(l)?r.target=!1:r.target=l),angular.forEach(['title','content'],function(n){i[n]&&i.$observe(n,function(o,i){e[n]=t.trustAsHtml(o),angular.isDefined(i)&&a(function(){u&&u.$applyPlacement()})})}),i.bsPopover&&e.$watch(i.bsPopover,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t,angular.isDefined(n)&&a(function(){u&&u.$applyPlacement()})},!0),i.bsShow&&e.$watch(i.bsShow,function(e,t){u&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(popover),?/i)),e===!0?u.show():u.hide())}),i.viewport&&e.$watch(i.viewport,function(e){u&&angular.isDefined(e)&&u.setViewport(e)});var u=n(o,r);e.$on('$destroy',function(){u&&u.destroy(),r=null,u=null})}}}]),angular.module('mgcrea.ngStrap.navbar',[]).provider('$navbar',function(){var e=this.defaults={activeClass:'active',routeAttr:'data-match-route',strict:!1};this.$get=function(){return{defaults:e}}}).directive('bsNavbar',['$window','$location','$navbar',function(e,t,n){var a=n.defaults;return{restrict:'A',link:function(e,n,o,i){var r=angular.copy(a);angular.forEach(Object.keys(a),function(e){angular.isDefined(o[e])&&(r[e]=o[e])}),e.$watch(function(){return t.path()},function(e,t){var a=n[0].querySelectorAll('li['+r.routeAttr+']');angular.forEach(a,function(t){var n=angular.element(t),a=n.attr(r.routeAttr).replace('/','\\/');r.strict&&(a='^'+a+'$');var o=new RegExp(a,'i');o.test(e)?n.addClass(r.activeClass):n.removeClass(r.activeClass)})})}}}]),angular.module('mgcrea.ngStrap.modal',['mgcrea.ngStrap.core','mgcrea.ngStrap.helpers.dimensions']).provider('$modal',function(){var e=this.defaults={animation:'am-fade',backdropAnimation:'am-fade',prefixClass:'modal',prefixEvent:'modal',placement:'top',templateUrl:'modal/modal.tpl.html',template:'',contentTemplate:!1,container:!1,element:null,backdrop:!0,keyboard:!0,html:!1,show:!0};this.$get=['$window','$rootScope','$bsCompiler','$animate','$timeout','$sce','dimensions',function(n,a,o,i,r,s,l){function u(t){function n(){k.$emit(b.prefixEvent+'.show',y)}function r(){k.$emit(b.prefixEvent+'.hide',y),g.removeClass(b.prefixClass+'-open'),b.animation&&g.removeClass(b.prefixClass+'-with-'+b.animation)}function l(){b.backdrop&&(x.on('click',h),C.on('click',h),C.on('wheel',v))}function u(){b.backdrop&&(x.off('click',h),C.off('click',h),C.off('wheel',v))}function m(){b.keyboard&&x.on('keyup',y.$onKeyUp)}function $(){b.keyboard&&x.off('keyup',y.$onKeyUp)}function h(e){e.target===e.currentTarget&&('static'===b.backdrop?y.focus():y.hide())}function v(e){e.preventDefault()}function w(){y.$isShown&&null!==x&&(u(),$()),T&&(T.$destroy(),T=null),x&&(x.remove(),x=y.$element=null)}var y={},b=y.$options=angular.extend({},e,t),D=y.$promise=o.compile(b),k=y.$scope=b.scope&&b.scope.$new()||a.$new();b.element||b.container||(b.container='body'),y.$id=b.id||b.element&&b.element.attr('id')||'',f(['title','content'],function(e){b[e]&&(k[e]=s.trustAsHtml(b[e]))}),k.$hide=function(){k.$$postDigest(function(){y.hide()})},k.$show=function(){k.$$postDigest(function(){y.show()})},k.$toggle=function(){k.$$postDigest(function(){y.toggle()})},y.$isShown=k.$isShown=!1;var S,x,T,C=angular.element('<div class="'+b.prefixClass+'-backdrop"/>');return C.css({position:'fixed',top:'0px',left:'0px',bottom:'0px',right:'0px','z-index':1038}),D.then(function(e){S=e,y.init()}),y.init=function(){b.show&&k.$$postDigest(function(){y.show()})},y.destroy=function(){w(),C&&(C.remove(),C=null),k.$destroy()},y.show=function(){if(!y.$isShown){var e,t;if(angular.isElement(b.container)?(e=b.container,t=b.container[0].lastChild?angular.element(b.container[0].lastChild):null):b.container?(e=d(b.container),t=e[0]&&e[0].lastChild?angular.element(e[0].lastChild):null):(e=null,t=b.element),x&&w(),T=y.$scope.$new(),x=y.$element=S.link(T,function(e,t){}),!k.$emit(b.prefixEvent+'.show.before',y).defaultPrevented){x.css({display:'block'}).addClass(b.placement),b.animation&&(b.backdrop&&C.addClass(b.backdropAnimation),x.addClass(b.animation)),b.backdrop&&i.enter(C,g,null),angular.version.minor<=2?i.enter(x,e,t,n):i.enter(x,e,t).then(n),y.$isShown=k.$isShown=!0,c(k);var a=x[0];p(function(){a.focus()}),g.addClass(b.prefixClass+'-open'),b.animation&&g.addClass(b.prefixClass+'-with-'+b.animation),l(),m()}}},y.hide=function(){y.$isShown&&(k.$emit(b.prefixEvent+'.hide.before',y).defaultPrevented||(angular.version.minor<=2?i.leave(x,r):i.leave(x).then(r),b.backdrop&&i.leave(C),y.$isShown=k.$isShown=!1,c(k),u(),$()))},y.toggle=function(){y.$isShown?y.hide():y.show()},y.focus=function(){x[0].focus()},y.$onKeyUp=function(e){27===e.which&&y.$isShown&&(y.hide(),e.stopPropagation())},y}function c(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}function d(e,n){return angular.element((n||t).querySelectorAll(e))}var f=angular.forEach,p=(String.prototype.trim,n.requestAnimationFrame||n.setTimeout),g=angular.element(n.document.body);return u}]}).directive('bsModal',['$window','$sce','$modal',function(e,t,n){return{restrict:'EAC',scope:!0,link:function(e,a,o,i){var r={scope:e,element:a,show:!1};angular.forEach(['template','templateUrl','controller','controllerAs','contentTemplate','placement','backdrop','keyboard','html','container','animation','backdropAnimation','id','prefixEvent','prefixClass'],function(e){angular.isDefined(o[e])&&(r[e]=o[e])});var s=/^(false|0|)$/i;angular.forEach(['backdrop','keyboard','html','container'],function(e){angular.isDefined(o[e])&&s.test(o[e])&&(r[e]=!1)}),angular.forEach(['title','content'],function(n){o[n]&&o.$observe(n,function(a,o){e[n]=t.trustAsHtml(a)})}),o.bsModal&&e.$watch(o.bsModal,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var l=n(r);a.on(o.trigger||'click',l.toggle),e.$on('$destroy',function(){l&&l.destroy(),r=null,l=null})}}}]),angular.version.minor<3&&angular.version.dot<14&&angular.module('ng').factory('$$rAF',['$window','$timeout',function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame,a=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,o=!!n,i=o?function(e){var t=n(e);return function(){a(t)}}:function(e){var n=t(e,16.66,!1);return function(){t.cancel(n)}};return i.supported=o,i}]),angular.module('mgcrea.ngStrap.helpers.parseOptions',[]).provider('$parseOptions',function(){var e=this.defaults={regexp:/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/};this.$get=['$parse','$q',function(t,n){function a(a,o){function i(e,t){return e.map(function(e,n){var a,o,i={};return i[c]=e,a=u(t,i),o=p(t,i),{label:a,value:o,index:n}})}var r={},s=angular.extend({},e,o);r.$values=[];var l,u,c,d,f,p,g;return r.init=function(){r.$match=l=a.match(s.regexp),u=t(l[2]||l[1]),c=l[4]||l[6],d=l[5],f=t(l[3]||''),p=t(l[2]?l[1]:c),g=t(l[7])},r.valuesFn=function(e,t){return n.when(g(e,t)).then(function(t){return angular.isArray(t)||(t=[]),r.$values=t.length?i(t,e):[],r.$values})},r.displayValue=function(e){var t={};return t[c]=e,u(t)},r.init(),r}return a}]}),angular.module('mgcrea.ngStrap.helpers.dimensions',[]).factory('dimensions',['$document','$window',function(t,n){var a=(angular.element,{}),o=a.nodeName=function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()};a.css=function(t,n,a){var o;return o=t.currentStyle?t.currentStyle[n]:e.getComputedStyle?e.getComputedStyle(t)[n]:t.style[n],a===!0?parseFloat(o)||0:o},a.offset=function(t){var n=t.getBoundingClientRect(),a=t.ownerDocument;return{width:n.width||t.offsetWidth,height:n.height||t.offsetHeight,top:n.top+(e.pageYOffset||a.documentElement.scrollTop)-(a.documentElement.clientTop||0),left:n.left+(e.pageXOffset||a.documentElement.scrollLeft)-(a.documentElement.clientLeft||0)}},a.setOffset=function(e,t,n){var o,i,r,s,l,u,c,d=a.css(e,'position'),f=angular.element(e),p={};'static'===d&&(e.style.position='relative'),l=a.offset(e),r=a.css(e,'top'),u=a.css(e,'left'),c=('absolute'===d||'fixed'===d)&&(r+u).indexOf('auto')>-1,c?(o=a.position(e),s=o.top,i=o.left):(s=parseFloat(r)||0,i=parseFloat(u)||0),angular.isFunction(t)&&(t=t.call(e,n,l)),null!==t.top&&(p.top=t.top-l.top+s),null!==t.left&&(p.left=t.left-l.left+i),'using'in t?t.using.call(f,p):f.css({top:p.top+'px',left:p.left+'px'})},a.position=function(e){var t,n,r={top:0,left:0};return'fixed'===a.css(e,'position')?n=e.getBoundingClientRect():(t=i(e),n=a.offset(e),o(t,'html')||(r=a.offset(t)),r.top+=a.css(t,'borderTopWidth',!0),r.left+=a.css(t,'borderLeftWidth',!0)),{width:e.offsetWidth,height:e.offsetHeight,top:n.top-r.top-a.css(e,'marginTop',!0),left:n.left-r.left-a.css(e,'marginLeft',!0)}};var i=function(e){var t=e.ownerDocument,n=e.offsetParent||t;if(o(n,'#document'))return t.documentElement;for(;n&&!o(n,'html')&&'static'===a.css(n,'position');)n=n.offsetParent;return n||t.documentElement};return a.height=function(e,t){var n=e.offsetHeight;return t?n+=a.css(e,'marginTop',!0)+a.css(e,'marginBottom',!0):n-=a.css(e,'paddingTop',!0)+a.css(e,'paddingBottom',!0)+a.css(e,'borderTopWidth',!0)+a.css(e,'borderBottomWidth',!0),n},a.width=function(e,t){var n=e.offsetWidth;return t?n+=a.css(e,'marginLeft',!0)+a.css(e,'marginRight',!0):n-=a.css(e,'paddingLeft',!0)+a.css(e,'paddingRight',!0)+a.css(e,'borderLeftWidth',!0)+a.css(e,'borderRightWidth',!0),n},a}]),angular.module('mgcrea.ngStrap.helpers.debounce',[]).factory('debounce',['$timeout',function(e){return function(t,n,a){var o=null;return function(){var i=this,r=arguments,s=a&&!o;return o&&e.cancel(o),o=e(function(){o=null,a||t.apply(i,r)},n,!1),s&&t.apply(i,r),o}}}]).factory('throttle',['$timeout',function(e){return function(t,n,a){var o=null;return a||(a={}),function(){var i=this,r=arguments;o||(a.leading!==!1&&t.apply(i,r),o=e(function(){o=null,a.trailing!==!1&&t.apply(i,r)},n,!1))}}}]),angular.module('mgcrea.ngStrap.helpers.dateParser',[]).provider('$dateParser',['$localeProvider',function(e){function t(){this.year=1970,this.month=0,this.day=1,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0}function n(){}function a(e){return!isNaN(parseFloat(e))&&isFinite(e)}function o(e,t){for(var n=e.length,a=t.toString().toLowerCase(),o=0;n>o;o++)if(e[o].toLowerCase()===a)return o;return-1}t.prototype.setMilliseconds=function(e){this.milliseconds=e},t.prototype.setSeconds=function(e){this.seconds=e},t.prototype.setMinutes=function(e){this.minutes=e},t.prototype.setHours=function(e){this.hours=e},t.prototype.getHours=function(){return this.hours},t.prototype.setDate=function(e){this.day=e},t.prototype.setMonth=function(e){this.month=e},t.prototype.setFullYear=function(e){this.year=e},t.prototype.fromDate=function(e){return this.year=e.getFullYear(),this.month=e.getMonth(),this.day=e.getDate(),this.hours=e.getHours(),this.minutes=e.getMinutes(),this.seconds=e.getSeconds(),this.milliseconds=e.getMilliseconds(),this},t.prototype.toDate=function(){return new Date(this.year,this.month,this.day,this.hours,this.minutes,this.seconds,this.milliseconds)};var i=t.prototype,r=this.defaults={format:'shortDate',strict:!1};this.$get=['$locale','dateFilter',function(e,s){var l=function(l){function u(e){var t,n=Object.keys(h),a=[],o=[],i=e;for(t=0;t<n.length;t++)if(e.split(n[t]).length>1){var r=i.search(n[t]);e=e.split(n[t]).join(''),h[n[t]]&&(a[r]=h[n[t]])}return angular.forEach(a,function(e){e&&o.push(e)}),o}function c(e){return e.replace(/\//g,'[\\/]').replace('/-/g','[-]').replace(/\./g,'[.]').replace(/\\s/g,'[\\s]')}function d(e){var t,n=Object.keys($),a=e;for(t=0;t<n.length;t++)a=a.split(n[t]).join('${'+t+'}');for(t=0;t<n.length;t++)a=a.split('${'+t+'}').join('('+$[n[t]]+')');return e=c(e),new RegExp('^'+a+'$',['i'])}var f,p,g=angular.extend({},r,l),m={},$={sss:'[0-9]{3}',ss:'[0-5][0-9]',s:g.strict?'[1-5]?[0-9]':'[0-9]|[0-5][0-9]',mm:'[0-5][0-9]',m:g.strict?'[1-5]?[0-9]':'[0-9]|[0-5][0-9]',HH:'[01][0-9]|2[0-3]',H:g.strict?'1?[0-9]|2[0-3]':'[01]?[0-9]|2[0-3]',hh:'[0][1-9]|[1][012]',h:g.strict?'[1-9]|1[012]':'0?[1-9]|1[012]',a:'AM|PM',EEEE:e.DATETIME_FORMATS.DAY.join('|'),EEE:e.DATETIME_FORMATS.SHORTDAY.join('|'),dd:'0[1-9]|[12][0-9]|3[01]',d:g.strict?'[1-9]|[1-2][0-9]|3[01]':'0?[1-9]|[1-2][0-9]|3[01]',MMMM:e.DATETIME_FORMATS.MONTH.join('|'),MMM:e.DATETIME_FORMATS.SHORTMONTH.join('|'),MM:'0[1-9]|1[012]',M:g.strict?'[1-9]|1[012]':'0?[1-9]|1[012]',yyyy:'[1]{1}[0-9]{3}|[2]{1}[0-9]{3}',yy:'[0-9]{2}',y:g.strict?'-?(0|[1-9][0-9]{0,3})':'-?0*[0-9]{1,4}'},h={sss:i.setMilliseconds,ss:i.setSeconds,s:i.setSeconds,mm:i.setMinutes,m:i.setMinutes,HH:i.setHours,H:i.setHours,hh:i.setHours,h:i.setHours,EEEE:n,EEE:n,dd:i.setDate,d:i.setDate,a:function(e){var t=this.getHours()%12;return this.setHours(e.match(/pm/i)?t+12:t)},MMMM:function(t){return this.setMonth(o(e.DATETIME_FORMATS.MONTH,t))},MMM:function(t){return this.setMonth(o(e.DATETIME_FORMATS.SHORTMONTH,t))},MM:function(e){return this.setMonth(1*e-1)},M:function(e){return this.setMonth(1*e-1)},yyyy:i.setFullYear,yy:function(e){return this.setFullYear(2e3+1*e)},y:function(e){return 50>=1*e&&2===e.length?this.setFullYear(2e3+1*e):this.setFullYear(1*e)}};return m.init=function(){m.$format=e.DATETIME_FORMATS[g.format]||g.format,f=d(m.$format),p=u(m.$format)},m.isValid=function(e){return angular.isDate(e)?!isNaN(e.getTime()):f.test(e)},m.parse=function(n,a,o,i){o&&(o=e.DATETIME_FORMATS[o]||o),angular.isDate(n)&&(n=s(n,o||m.$format,i));var r=o?d(o):f,l=o?u(o):p,c=r.exec(n);if(!c)return!1;for(var g=a&&!isNaN(a.getTime())?(new t).fromDate(a):(new t).fromDate(new Date(1970,0,1,0)),$=0;$<c.length-1;$++)l[$]&&l[$].call(g,c[$+1]);var h=g.toDate();return parseInt(g.day,10)!==h.getDate()?!1:h},m.getDateForAttribute=function(e,t){var n;if('today'===t){var o=new Date;n=new Date(o.getFullYear(),o.getMonth(),o.getDate()+('maxDate'===e?1:0),0,0,0,'minDate'===e?0:-1)}else n=angular.isString(t)&&t.match(/^".+"$/)?new Date(t.substr(1,t.length-2)):a(t)?new Date(parseInt(t,10)):angular.isString(t)&&0===t.length?'minDate'===e?-(1/0):+(1/0):new Date(t);return n},m.getTimeForAttribute=function(e,t){var n;return n='now'===t?(new Date).setFullYear(1970,0,1):angular.isString(t)&&t.match(/^".+"$/)?new Date(t.substr(1,t.length-2)).setFullYear(1970,0,1):a(t)?new Date(parseInt(t,10)).setFullYear(1970,0,1):angular.isString(t)&&0===t.length?'minTime'===e?-(1/0):+(1/0):m.parse(t,new Date(1970,0,1,0))},m.daylightSavingAdjust=function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},m.timezoneOffsetAdjust=function(e,t,n){return e?(t&&'UTC'===t&&(e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+(n?-1:1)*e.getTimezoneOffset())),e):null},m.init(),m};return l}]}]),angular.module('mgcrea.ngStrap.helpers.dateFormatter',[]).service('$dateFormatter',['$locale','dateFilter',function(e,t){function n(e){return/(h+)([:\.])?(m+)([:\.])?(s*)[ ]?(a?)/i.exec(e).slice(1)}this.getDefaultLocale=function(){return e.id},this.getDatetimeFormat=function(t,n){return e.DATETIME_FORMATS[t]||t},this.weekdaysShort=function(t){return e.DATETIME_FORMATS.SHORTDAY},this.hoursFormat=function(e){return n(e)[0]},this.minutesFormat=function(e){return n(e)[2]},this.secondsFormat=function(e){return n(e)[4]},this.timeSeparator=function(e){return n(e)[1]},this.showSeconds=function(e){return!!n(e)[4]},this.showAM=function(e){return!!n(e)[5]},this.formatDate=function(e,n,a,o){return t(e,n,o)}}]),angular.module('mgcrea.ngStrap.core',[]).service('$bsCompiler',a),a.$inject=['$q','$http','$injector','$compile','$controller','$templateCache'],angular.module('mgcrea.ngStrap.dropdown',['mgcrea.ngStrap.tooltip']).provider('$dropdown',function(){var e=this.defaults={animation:'am-fade',prefixClass:'dropdown',prefixEvent:'dropdown',placement:'bottom-left',templateUrl:'dropdown/dropdown.tpl.html',trigger:'click',container:!1,keyboard:!0,html:!1,delay:0};this.$get=['$window','$rootScope','$tooltip','$timeout',function(t,n,a,o){function i(t,i){function l(e){return e.target!==t[0]?e.target!==t[0]&&u.hide():void 0}var u={},c=angular.extend({},e,i);u.$scope=c.scope&&c.scope.$new()||n.$new();u=a(t,c);var d=t.parent();u.$onKeyDown=function(e){if(/(38|40)/.test(e.keyCode)){e.preventDefault(),e.stopPropagation();var t=angular.element(u.$element[0].querySelectorAll('li:not(.divider) a'));if(t.length){var n;angular.forEach(t,function(e,t){s&&s.call(e,':focus')&&(n=t)}),38===e.keyCode&&n>0?n--:40===e.keyCode&&n<t.length-1?n++:angular.isUndefined(n)&&(n=0),t.eq(n)[0].focus()}}};var f=u.show;u.show=function(){f(),o(function(){c.keyboard&&u.$element&&u.$element.on('keydown',u.$onKeyDown),r.on('click',l)},0,!1),d.hasClass('dropdown')&&d.addClass('open')};var p=u.hide;u.hide=function(){u.$isShown&&(c.keyboard&&u.$element&&u.$element.off('keydown',u.$onKeyDown),r.off('click',l),d.hasClass('dropdown')&&d.removeClass('open'),p())};var g=u.destroy;return u.destroy=function(){r.off('click',l),g()},u}var r=angular.element(t.document.body),s=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector;return i}]}).directive('bsDropdown',['$window','$sce','$dropdown',function(e,t,n){return{restrict:'EAC',scope:!0,link:function(e,t,a,o){var i={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','id'],function(e){angular.isDefined(a[e])&&(i[e]=a[e])});var r=/^(false|0|)$/i;angular.forEach(['html','container'],function(e){angular.isDefined(a[e])&&r.test(a[e])&&(i[e]=!1)}),a.bsDropdown&&e.$watch(a.bsDropdown,function(t,n){e.content=t},!0),a.bsShow&&e.$watch(a.bsShow,function(e,t){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(dropdown),?/i)),e===!0?s.show():s.hide())});var s=n(t,i);e.$on('$destroy',function(){s&&s.destroy(),i=null,s=null})}}}]),angular.module('mgcrea.ngStrap.datepicker',['mgcrea.ngStrap.helpers.dateParser','mgcrea.ngStrap.helpers.dateFormatter','mgcrea.ngStrap.tooltip']).provider('$datepicker',function(){var e=this.defaults={animation:'am-fade',prefixClass:'datepicker',placement:'bottom-left',templateUrl:'datepicker/datepicker.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,useNative:!1,dateType:'date',dateFormat:'shortDate',timezone:null,modelDateFormat:null,dayFormat:'dd',monthFormat:'MMM',yearFormat:'yyyy',monthTitleFormat:'MMMM yyyy',yearTitleFormat:'yyyy',strictFormat:!1,autoclose:!1,minDate:-(1/0),maxDate:+(1/0),startView:0,minView:0,startWeek:0,daysOfWeekDisabled:'',iconLeft:'glyphicon glyphicon-chevron-left',iconRight:'glyphicon glyphicon-chevron-right'};this.$get=['$window','$document','$rootScope','$sce','$dateFormatter','datepickerViews','$tooltip','$timeout',function(t,n,a,o,i,r,s,l){function u(t,n,a){function o(e){e.selected=u.$isSelected(e.date)}function i(){t[0].focus()}var u=s(t,angular.extend({},e,a)),f=a.scope,p=u.$options,g=u.$scope;p.startView&&(p.startView-=p.minView);var m=r(u);u.$views=m.views;var $=m.viewDate;g.$mode=p.startView,g.$iconLeft=p.iconLeft,g.$iconRight=p.iconRight;var h=u.$views[g.$mode];g.$select=function(e){u.select(e)},g.$selectPane=function(e){u.$selectPane(e)},g.$toggleMode=function(){u.setMode((g.$mode+1)%u.$views.length)},u.update=function(e){angular.isDate(e)&&!isNaN(e.getTime())&&(u.$date=e,h.update.call(h,e)),u.$build(!0)},u.updateDisabledDates=function(e){p.disabledDateRanges=e;for(var t=0,n=g.rows.length;n>t;t++)angular.forEach(g.rows[t],u.$setDisabledEl)},u.select=function(e,t){angular.isDate(n.$dateValue)||(n.$dateValue=new Date(e)),!g.$mode||t?(n.$setViewValue(angular.copy(e)),n.$render(),p.autoclose&&!t&&l(function(){u.hide(!0)})):(angular.extend($,{year:e.getFullYear(),month:e.getMonth(),date:e.getDate()}),u.setMode(g.$mode-1),u.$build())},u.setMode=function(e){g.$mode=e,h=u.$views[g.$mode],u.$build()},u.$build=function(e){e===!0&&h.built||(e!==!1||h.built)&&h.build.call(h)},u.$updateSelected=function(){for(var e=0,t=g.rows.length;t>e;e++)angular.forEach(g.rows[e],o)},u.$isSelected=function(e){return h.isSelected(e)},u.$setDisabledEl=function(e){e.disabled=h.isDisabled(e.date)},u.$selectPane=function(e){var t=h.steps,n=new Date(Date.UTC($.year+(t.year||0)*e,$.month+(t.month||0)*e,1));angular.extend($,{year:n.getUTCFullYear(),month:n.getUTCMonth(),date:n.getUTCDate()}),u.$build()},u.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),d){var t=angular.element(e.target);'button'!==t[0].nodeName.toLowerCase()&&(t=t.parent()),t.triggerHandler('click')}},u.$onKeyDown=function(e){if(/(38|37|39|40|13)/.test(e.keyCode)&&!e.shiftKey&&!e.altKey){if(e.preventDefault(),e.stopPropagation(),13===e.keyCode)return g.$mode?g.$apply(function(){u.setMode(g.$mode-1)}):u.hide(!0);h.onKeyDown(e),f.$digest()}};var v=u.init;u.init=function(){return c&&p.useNative?(t.prop('type','date'),void t.css('-webkit-appearance','textfield')):(d&&(t.prop('type','text'),t.attr('readonly','true'),t.on('click',i)),void v())};var w=u.destroy;u.destroy=function(){c&&p.useNative&&t.off('click',i),w()};var y=u.show;u.show=function(){!d&&t.attr('readonly')||t.attr('disabled')||(y(),l(function(){u.$isShown&&(u.$element.on(d?'touchstart':'mousedown',u.$onMouseDown),p.keyboard&&t.on('keydown',u.$onKeyDown))},0,!1))};var b=u.hide;return u.hide=function(e){u.$isShown&&(u.$element.off(d?'touchstart':'mousedown',u.$onMouseDown),p.keyboard&&t.off('keydown',u.$onKeyDown),b(e))},u}var c=(angular.element(t.document.body),/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)),d='createTouch'in t.document&&c;return e.lang||(e.lang=i.getDefaultLocale()),u.defaults=e,u}]}).directive('bsDatepicker',['$window','$parse','$q','$dateFormatter','$dateParser','$datepicker',function(e,t,n,a,o,i){var r=(i.defaults,/(ip(a|o)d|iphone|android)/gi.test(e.navigator.userAgent));return{restrict:'EAC',require:'ngModel',link:function(e,t,n,s){function l(e){return e&&e.length?e:null}function u(e){if(angular.isDate(e)){var t=isNaN(p.$options.minDate)||e.getTime()>=p.$options.minDate,n=isNaN(p.$options.maxDate)||e.getTime()<=p.$options.maxDate,a=t&&n;s.$setValidity('date',a),s.$setValidity('min',t),s.$setValidity('max',n),a&&(s.$dateValue=e)}}function c(){return!s.$dateValue||isNaN(s.$dateValue.getTime())?'':m(s.$dateValue,d.dateFormat)}var d={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','html','animation','autoclose','dateType','dateFormat','timezone','modelDateFormat','dayFormat','strictFormat','startWeek','startDate','useNative','lang','startView','minView','iconLeft','iconRight','daysOfWeekDisabled','id','prefixClass','prefixEvent'],function(e){angular.isDefined(n[e])&&(d[e]=n[e])});var f=/^(false|0|)$/i;angular.forEach(['html','container','autoclose','useNative'],function(e){angular.isDefined(n[e])&&f.test(n[e])&&(d[e]=!1)}),n.bsShow&&e.$watch(n.bsShow,function(e,t){p&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(datepicker),?/i)),e===!0?p.show():p.hide())});var p=i(t,s,d);d=p.$options,r&&d.useNative&&(d.dateFormat='yyyy-MM-dd');var g=d.lang,m=function(e,t){return a.formatDate(e,t,g)},$=o({format:d.dateFormat,lang:g,strict:d.strictFormat});angular.forEach(['minDate','maxDate'],function(e){angular.isDefined(n[e])&&n.$observe(e,function(t){p.$options[e]=$.getDateForAttribute(e,t),!isNaN(p.$options[e])&&p.$build(!1),u(s.$dateValue)})}),e.$watch(n.ngModel,function(e,t){p.update(s.$dateValue)},!0),angular.isDefined(n.disabledDates)&&e.$watch(n.disabledDates,function(e,t){e=l(e),t=l(t),e&&p.updateDisabledDates(e)}),s.$parsers.unshift(function(e){var t;if(!e)return s.$setValidity('date',!0),null;var n=$.parse(e,s.$dateValue);return!n||isNaN(n.getTime())?void s.$setValidity('date',!1):(u(n),'string'===d.dateType?(t=$.timezoneOffsetAdjust(n,d.timezone,!0),m(t,d.modelDateFormat||d.dateFormat)):(t=$.timezoneOffsetAdjust(s.$dateValue,d.timezone,!0),'number'===d.dateType?t.getTime():'unix'===d.dateType?t.getTime()/1e3:'iso'===d.dateType?t.toISOString():new Date(t)))}),s.$formatters.push(function(e){var t;return t=angular.isUndefined(e)||null===e?NaN:angular.isDate(e)?e:'string'===d.dateType?$.parse(e,null,d.modelDateFormat):'unix'===d.dateType?new Date(1e3*e):new Date(e),s.$dateValue=$.timezoneOffsetAdjust(t,d.timezone),c()}),s.$render=function(){t.val(c())},e.$on('$destroy',function(){p&&p.destroy(),d=null,p=null})}}}]).provider('datepickerViews',function(){function e(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n}function t(e,t){return(e%t+t)%t}this.defaults={dayFormat:'dd',daySplit:7};this.$get=['$dateFormatter','$dateParser','$sce',function(n,a,o){return function(i){var r=i.$scope,s=i.$options,l=s.lang,u=function(e,t){return n.formatDate(e,t,l)},c=a({format:s.dateFormat,lang:l,strict:s.strictFormat}),d=n.weekdaysShort(l),f=d.slice(s.startWeek).concat(d.slice(0,s.startWeek)),p=o.trustAsHtml('<th class="dow text-center">'+f.join('</th><th class="dow text-center">')+'</th>'),g=i.$date||(s.startDate?c.getDateForAttribute('startDate',s.startDate):new Date),m={year:g.getFullYear(),month:g.getMonth(),date:g.getDate()},$=[{format:s.dayFormat,split:7,steps:{month:1},update:function(e,t){!this.built||t||e.getFullYear()!==m.year||e.getMonth()!==m.month?(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build()):(e.getDate()!==m.date||1===e.getDate())&&(m.date=i.$date.getDate(),i.$updateSelected())},build:function(){var n=new Date(m.year,m.month,1),a=n.getTimezoneOffset(),o=new Date(+n-864e5*t(n.getDay()-s.startWeek,7)),l=o.getTimezoneOffset(),d=c.timezoneOffsetAdjust(new Date,s.timezone).toDateString();l!==a&&(o=new Date(+o+6e4*(l-a)));for(var f,g=[],$=0;42>$;$++)f=c.daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth(),o.getDate()+$)),g.push({date:f,isToday:f.toDateString()===d,label:u(f,this.format),selected:i.$date&&this.isSelected(f),muted:f.getMonth()!==m.month,disabled:this.isDisabled(f)});r.title=u(n,s.monthTitleFormat),r.showLabels=!0,r.labels=p,r.rows=e(g,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()&&e.getMonth()===i.$date.getMonth()&&e.getDate()===i.$date.getDate()},isDisabled:function(e){var t=e.getTime();if(t<s.minDate||t>s.maxDate)return!0;if(-1!==s.daysOfWeekDisabled.indexOf(e.getDay()))return!0;if(s.disabledDateRanges)for(var n=0;n<s.disabledDateRanges.length;n++)if(t>=s.disabledDateRanges[n].start&&t<=s.disabledDateRanges[n].end)return!0;return!1},onKeyDown:function(e){if(i.$date){var t,n=i.$date.getTime();37===e.keyCode?t=new Date(n-864e5):38===e.keyCode?t=new Date(n-6048e5):39===e.keyCode?t=new Date(n+864e5):40===e.keyCode&&(t=new Date(n+6048e5)),this.isDisabled(t)||i.select(t,!0)}}},{name:'month',format:s.monthFormat,split:4,steps:{year:1},update:function(e,t){this.built&&e.getFullYear()===m.year?e.getMonth()!==m.month&&(angular.extend(m,{month:i.$date.getMonth(),date:i.$date.getDate()}),i.$updateSelected()):(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build())},build:function(){for(var t,n=(new Date(m.year,0,1),[]),a=0;12>a;a++)t=new Date(m.year,a,1),
n.push({date:t,label:u(t,this.format),selected:i.$isSelected(t),disabled:this.isDisabled(t)});r.title=u(t,s.yearTitleFormat),r.showLabels=!1,r.rows=e(n,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()&&e.getMonth()===i.$date.getMonth()},isDisabled:function(e){var t=+new Date(e.getFullYear(),e.getMonth()+1,0);return t<s.minDate||e.getTime()>s.maxDate},onKeyDown:function(e){if(i.$date){var t=i.$date.getMonth(),n=new Date(i.$date);37===e.keyCode?n.setMonth(t-1):38===e.keyCode?n.setMonth(t-4):39===e.keyCode?n.setMonth(t+1):40===e.keyCode&&n.setMonth(t+4),this.isDisabled(n)||i.select(n,!0)}}},{name:'year',format:s.yearFormat,split:4,steps:{year:12},update:function(e,t){!this.built||t||parseInt(e.getFullYear()/20,10)!==parseInt(m.year/20,10)?(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build()):e.getFullYear()!==m.year&&(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$updateSelected())},build:function(){for(var t,n=m.year-m.year%(3*this.split),a=[],o=0;12>o;o++)t=new Date(n+o,0,1),a.push({date:t,label:u(t,this.format),selected:i.$isSelected(t),disabled:this.isDisabled(t)});r.title=a[0].label+'-'+a[a.length-1].label,r.showLabels=!1,r.rows=e(a,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()},isDisabled:function(e){var t=+new Date(e.getFullYear()+1,0,0);return t<s.minDate||e.getTime()>s.maxDate},onKeyDown:function(e){if(i.$date){var t=i.$date.getFullYear(),n=new Date(i.$date);37===e.keyCode?n.setYear(t-1):38===e.keyCode?n.setYear(t-4):39===e.keyCode?n.setYear(t+1):40===e.keyCode&&n.setYear(t+4),this.isDisabled(n)||i.select(n,!0)}}}];return{views:s.minView?Array.prototype.slice.call($,s.minView):$,viewDate:m}}}]}),angular.module('mgcrea.ngStrap.collapse',[]).provider('$collapse',function(){var e=this.defaults={animation:'am-collapse',disallowToggle:!1,activeClass:'in',startCollapsed:!1,allowMultiple:!1},t=this.controller=function(t,n,a){function o(e){for(var t=l.$targets.$active,n=0;n<t.length;n++)e<t[n]&&(t[n]=t[n]-1),t[n]===l.$targets.length&&(t[n]=l.$targets.length-1)}function i(e){var t=l.$targets.$active;return-1===t.indexOf(e)?!1:!0}function r(e){var t=l.$targets.$active.indexOf(e);-1!==t&&l.$targets.$active.splice(t,1)}function s(e){l.$options.allowMultiple||l.$targets.$active.splice(0,1),-1===l.$targets.$active.indexOf(e)&&l.$targets.$active.push(e)}var l=this;l.$options=angular.copy(e),angular.forEach(['animation','disallowToggle','activeClass','startCollapsed','allowMultiple'],function(e){angular.isDefined(a[e])&&(l.$options[e]=a[e])});var u=/^(false|0|)$/i;angular.forEach(['disallowToggle','startCollapsed','allowMultiple'],function(e){angular.isDefined(a[e])&&u.test(a[e])&&(l.$options[e]=!1)}),l.$toggles=[],l.$targets=[],l.$viewChangeListeners=[],l.$registerToggle=function(e){l.$toggles.push(e)},l.$registerTarget=function(e){l.$targets.push(e)},l.$unregisterToggle=function(e){var t=l.$toggles.indexOf(e);l.$toggles.splice(t,1)},l.$unregisterTarget=function(e){var t=l.$targets.indexOf(e);l.$targets.splice(t,1),l.$options.allowMultiple&&r(e),o(t),l.$viewChangeListeners.forEach(function(e){e()})},l.$targets.$active=l.$options.startCollapsed?[]:[0],l.$setActive=t.$setActive=function(e){angular.isArray(e)?l.$targets.$active=e:l.$options.disallowToggle?s(e):i(e)?r(e):s(e),l.$viewChangeListeners.forEach(function(e){e()})},l.$activeIndexes=function(){return l.$options.allowMultiple?l.$targets.$active:1===l.$targets.$active.length?l.$targets.$active[0]:-1}};this.$get=function(){var n={};return n.defaults=e,n.controller=t,n}}).directive('bsCollapse',['$window','$animate','$collapse',function(e,t,n){n.defaults;return{require:['?ngModel','bsCollapse'],controller:['$scope','$element','$attrs',n.controller],link:function(e,t,n,a){var o=a[0],i=a[1];o&&(i.$viewChangeListeners.push(function(){o.$setViewValue(i.$activeIndexes())}),o.$formatters.push(function(e){if(angular.isArray(e))i.$setActive(e);else{var t=i.$activeIndexes();angular.isArray(t)?-1===t.indexOf(1*e)&&i.$setActive(1*e):t!==1*e&&i.$setActive(1*e)}return e}))}}}]).directive('bsCollapseToggle',function(){return{require:['^?ngModel','^bsCollapse'],link:function(e,t,n,a){var o=(a[0],a[1]);t.attr('data-toggle','collapse'),o.$registerToggle(t),e.$on('$destroy',function(){o.$unregisterToggle(t)}),t.on('click',function(){var a=n.bsCollapseToggle&&'bs-collapse-toggle'!==n.bsCollapseToggle?n.bsCollapseToggle:o.$toggles.indexOf(t);o.$setActive(1*a),e.$apply()})}}}).directive('bsCollapseTarget',['$animate',function(e){return{require:['^?ngModel','^bsCollapse'],link:function(t,n,a,o){function i(){var t=r.$targets.indexOf(n),a=r.$activeIndexes(),o='removeClass';angular.isArray(a)?-1!==a.indexOf(t)&&(o='addClass'):t===a&&(o='addClass'),e[o](n,r.$options.activeClass)}var r=(o[0],o[1]);n.addClass('collapse'),r.$options.animation&&n.addClass(r.$options.animation),r.$registerTarget(n),t.$on('$destroy',function(){r.$unregisterTarget(n)}),r.$viewChangeListeners.push(function(){i()}),i()}}}]),angular.module('mgcrea.ngStrap.button',[]).provider('$button',function(){var e=this.defaults={activeClass:'active',toggleEvent:'click'};this.$get=function(){return{defaults:e}}}).directive('bsCheckboxGroup',function(){return{restrict:'A',require:'ngModel',compile:function(e,t){e.attr('data-toggle','buttons'),e.removeAttr('ng-model');var n=e[0].querySelectorAll('input[type="checkbox"]');angular.forEach(n,function(e){var n=angular.element(e);n.attr('bs-checkbox',''),n.attr('ng-model',t.ngModel+'.'+n.attr('value'))})}}}).directive('bsCheckbox',['$button','$$rAF',function(e,t){var n=e.defaults,a=/^(true|false|\d+)$/;return{restrict:'A',require:'ngModel',link:function(e,o,i,r){var s=n,l='INPUT'===o[0].nodeName,u=l?o.parent():o,c=angular.isDefined(i.trueValue)?i.trueValue:!0;a.test(i.trueValue)&&(c=e.$eval(i.trueValue));var d=angular.isDefined(i.falseValue)?i.falseValue:!1;a.test(i.falseValue)&&(d=e.$eval(i.falseValue));var f='boolean'!=typeof c||'boolean'!=typeof d;f&&(r.$parsers.push(function(e){return e?c:d}),r.$formatters.push(function(e){return angular.equals(e,c)}),e.$watch(i.ngModel,function(e,t){r.$render()})),r.$render=function(){var e=angular.equals(r.$modelValue,c);t(function(){l&&(o[0].checked=e),u.toggleClass(s.activeClass,e)})},o.bind(s.toggleEvent,function(){e.$apply(function(){l||r.$setViewValue(!u.hasClass('active')),f||r.$render()})})}}}]).directive('bsRadioGroup',function(){return{restrict:'A',require:'ngModel',compile:function(e,t){e.attr('data-toggle','buttons'),e.removeAttr('ng-model');var n=e[0].querySelectorAll('input[type="radio"]');angular.forEach(n,function(e){angular.element(e).attr('bs-radio',''),angular.element(e).attr('ng-model',t.ngModel)})}}}).directive('bsRadio',['$button','$$rAF',function(e,t){var n=e.defaults,a=/^(true|false|\d+)$/;return{restrict:'A',require:'ngModel',link:function(e,o,i,r){var s,l=n,u='INPUT'===o[0].nodeName,c=u?o.parent():o;i.$observe('value',function(t){s=a.test(t)?e.$eval(t):t,r.$render()}),r.$render=function(){var e=angular.equals(r.$modelValue,s);t(function(){u&&(o[0].checked=e),c.toggleClass(l.activeClass,e)})},o.bind(l.toggleEvent,function(){e.$apply(function(){r.$setViewValue(s),r.$render()})})}}}]),angular.module('mgcrea.ngStrap.aside',['mgcrea.ngStrap.modal']).provider('$aside',function(){var e=this.defaults={animation:'am-fade-and-slide-right',prefixClass:'aside',prefixEvent:'aside',placement:'right',templateUrl:'aside/aside.tpl.html',contentTemplate:!1,container:!1,element:null,backdrop:!0,keyboard:!0,html:!1,show:!0};this.$get=['$modal',function(t){function n(n){var a={},o=angular.extend({},e,n);return a=t(o)}return n}]}).directive('bsAside',['$window','$sce','$aside',function(e,t,n){e.requestAnimationFrame||e.setTimeout;return{restrict:'EAC',scope:!0,link:function(e,a,o,i){var r={scope:e,element:a,show:!1};angular.forEach(['template','templateUrl','controller','controllerAs','contentTemplate','placement','backdrop','keyboard','html','container','animation'],function(e){angular.isDefined(o[e])&&(r[e]=o[e])});var s=/^(false|0|)$/i;angular.forEach(['backdrop','keyboard','html','container'],function(e){angular.isDefined(o[e])&&s.test(o[e])&&(r[e]=!1)}),angular.forEach(['title','content'],function(n){o[n]&&o.$observe(n,function(a,o){e[n]=t.trustAsHtml(a)})}),o.bsAside&&e.$watch(o.bsAside,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var l=n(r);a.on(o.trigger||'click',l.toggle),e.$on('$destroy',function(){l&&l.destroy(),r=null,l=null})}}}]),angular.module('mgcrea.ngStrap.alert',['mgcrea.ngStrap.modal']).provider('$alert',function(){var e=this.defaults={animation:'am-fade',prefixClass:'alert',prefixEvent:'alert',placement:null,templateUrl:'alert/alert.tpl.html',container:!1,element:null,backdrop:!1,keyboard:!0,show:!0,duration:!1,type:!1,dismissable:!0};this.$get=['$modal','$timeout',function(t,n){function a(a){var o={},i=angular.extend({},e,a);o=t(i),o.$scope.dismissable=!!i.dismissable,i.type&&(o.$scope.type=i.type);var r=o.show;return i.duration&&(o.show=function(){r(),n(function(){o.hide()},1e3*i.duration)}),o}return a}]}).directive('bsAlert',['$window','$sce','$alert',function(e,t,n){e.requestAnimationFrame||e.setTimeout;return{restrict:'EAC',scope:!0,link:function(e,a,o,i){var r={scope:e,element:a,show:!1};angular.forEach(['template','templateUrl','controller','controllerAs','placement','keyboard','html','container','animation','duration','dismissable'],function(e){angular.isDefined(o[e])&&(r[e]=o[e])});var s=/^(false|0|)$/i;angular.forEach(['keyboard','html','container','dismissable'],function(e){angular.isDefined(o[e])&&s.test(o[e])&&(r[e]=!1)}),e.hasOwnProperty('title')||(e.title=''),angular.forEach(['title','content','type'],function(n){o[n]&&o.$observe(n,function(a,o){e[n]=t.trustAsHtml(a)})}),o.bsAlert&&e.$watch(o.bsAlert,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var l=n(r);a.on(o.trigger||'click',l.toggle),e.$on('$destroy',function(){l&&l.destroy(),r=null,l=null})}}}]),angular.module('mgcrea.ngStrap.affix',['mgcrea.ngStrap.helpers.dimensions','mgcrea.ngStrap.helpers.debounce']).provider('$affix',function(){var e=this.defaults={offsetTop:'auto',inlineStyles:!0};this.$get=['$window','debounce','dimensions',function(t,n,a){function o(o,s){function l(e,t,n){var a=u(),o=c();return v>=a?'top':null!==e&&a+e<=t.top?'middle':null!==w&&t.top+n+$>=o-w?'bottom':'middle'}function u(){return p[0]===t?t.pageYOffset:p[0].scrollTop}function c(){return p[0]===t?t.document.body.scrollHeight:p[0].scrollHeight}var d={},f=angular.extend({},e,s),p=f.target,g='affix affix-top affix-bottom',m=!1,$=0,h=0,v=0,w=0,y=null,b=null,D=o.parent();if(f.offsetParent)if(f.offsetParent.match(/^\d+$/))for(var k=0;k<1*f.offsetParent-1;k++)D=D.parent();else D=angular.element(f.offsetParent);return d.init=function(){this.$parseOffsets(),h=a.offset(o[0]).top+$,m=!o[0].style.width,p.on('scroll',this.checkPosition),p.on('click',this.checkPositionWithEventLoop),r.on('resize',this.$debouncedOnResize),this.checkPosition(),this.checkPositionWithEventLoop()},d.destroy=function(){p.off('scroll',this.checkPosition),p.off('click',this.checkPositionWithEventLoop),r.off('resize',this.$debouncedOnResize)},d.checkPositionWithEventLoop=function(){setTimeout(d.checkPosition,1)},d.checkPosition=function(){var e=u(),t=a.offset(o[0]),n=a.height(o[0]),r=l(b,t,n);y!==r&&(y=r,'top'===r?(b=null,m&&o.css('width',''),f.inlineStyles&&(o.css('position',f.offsetParent?'':'relative'),o.css('top',''))):'bottom'===r?(b=f.offsetUnpin?-(1*f.offsetUnpin):t.top-e,m&&o.css('width',''),f.inlineStyles&&(o.css('position',f.offsetParent?'':'relative'),o.css('top',f.offsetParent?'':i[0].offsetHeight-w-n-h+'px'))):(b=null,m&&o.css('width',o[0].offsetWidth+'px'),f.inlineStyles&&(o.css('position','fixed'),o.css('top',$+'px'))),o.removeClass(g).addClass('affix'+('middle'!==r?'-'+r:'')))},d.$onResize=function(){d.$parseOffsets(),d.checkPosition()},d.$debouncedOnResize=n(d.$onResize,50),d.$parseOffsets=function(){var e=o.css('position');f.inlineStyles&&o.css('position',f.offsetParent?'':'relative'),f.offsetTop&&('auto'===f.offsetTop&&(f.offsetTop='+0'),f.offsetTop.match(/^[-+]\d+$/)?($=1*-f.offsetTop,v=f.offsetParent?a.offset(D[0]).top+1*f.offsetTop:a.offset(o[0]).top-a.css(o[0],'marginTop',!0)+1*f.offsetTop):v=1*f.offsetTop),f.offsetBottom&&(w=f.offsetParent&&f.offsetBottom.match(/^[-+]\d+$/)?c()-(a.offset(D[0]).top+a.height(D[0]))+1*f.offsetBottom+1:1*f.offsetBottom),f.inlineStyles&&o.css('position',e)},d.init(),d}var i=angular.element(t.document.body),r=angular.element(t);return o}]}).directive('bsAffix',['$affix','$window',function(e,t){return{restrict:'EAC',require:'^?bsAffixTarget',link:function(n,a,o,i){var r={scope:n,target:i?i.$element:angular.element(t)};angular.forEach(['offsetTop','offsetBottom','offsetParent','offsetUnpin','inlineStyles'],function(e){if(angular.isDefined(o[e])){var t=o[e];/true/i.test(t)&&(t=!0),/false/i.test(t)&&(t=!1),r[e]=t}});var s=e(a,r);n.$on('$destroy',function(){s&&s.destroy(),r=null,s=null})}}}]).directive('bsAffixTarget',function(){return{controller:['$element',function(e){this.$element=e}]}}),angular.module('mgcrea.ngStrap',['mgcrea.ngStrap.modal','mgcrea.ngStrap.aside','mgcrea.ngStrap.alert','mgcrea.ngStrap.button','mgcrea.ngStrap.select','mgcrea.ngStrap.datepicker','mgcrea.ngStrap.timepicker','mgcrea.ngStrap.navbar','mgcrea.ngStrap.tooltip','mgcrea.ngStrap.popover','mgcrea.ngStrap.dropdown','mgcrea.ngStrap.typeahead','mgcrea.ngStrap.scrollspy','mgcrea.ngStrap.affix','mgcrea.ngStrap.tab','mgcrea.ngStrap.collapse'])}(window,document);
//# sourceMappingURL=angular-strap.min.js.map
/**
 * angular-strap
 * @version v2.3.3 - 2015-09-24
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(t,e,n){'use strict';angular.module('mgcrea.ngStrap.alert').run(['$templateCache',function(t){t.put('alert/alert.tpl.html','<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>')}]),angular.module('mgcrea.ngStrap.aside').run(['$templateCache',function(t){t.put('aside/aside.tpl.html','<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')}]),angular.module('mgcrea.ngStrap.datepicker').run(['$templateCache',function(t){t.put('datepicker/datepicker.tpl.html','<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-if="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>')}]),angular.module('mgcrea.ngStrap.dropdown').run(['$templateCache',function(t){t.put('dropdown/dropdown.tpl.html','<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>')}]),angular.module('mgcrea.ngStrap.modal').run(['$templateCache',function(t){t.put('modal/modal.tpl.html','<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')}]),angular.module('mgcrea.ngStrap.popover').run(['$templateCache',function(t){t.put('popover/popover.tpl.html','<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>')}]),angular.module('mgcrea.ngStrap.select').run(['$templateCache',function(t){t.put('select/select.tpl.html','<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>')}]),angular.module('mgcrea.ngStrap.tab').run(['$templateCache',function(t){t.put('tab/tab.tpl.html','<ul class="nav" ng-class="$navClass" role="tablist"><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled && $setActive($pane.name || $index)" data-index="{{ $index }}" ng-bind-html="$pane.title" aria-controls="$pane.title"></a></li></ul><div ng-transclude class="tab-content"></div>')}]),angular.module('mgcrea.ngStrap.timepicker').run(['$templateCache',function(t){t.put('timepicker/timepicker.tpl.html','<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 2)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="showSeconds && row[2].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[2].selected}" ng-click="$select(row[2].date, 2)" ng-disabled="row[2].disabled"><span ng-class="{\'text-muted\': row[2].muted}" ng-bind="row[2].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 2)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>')}]),angular.module('mgcrea.ngStrap.tooltip').run(['$templateCache',function(t){t.put('tooltip/tooltip.tpl.html','<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>')}]),angular.module('mgcrea.ngStrap.typeahead').run(['$templateCache',function(t){t.put('typeahead/typeahead.tpl.html','<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>')}])}(window,document);
/**
 * angular-strap
 * @version v2.3.3 - 2015-09-24
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';angular.module('mgcrea.ngStrap.helpers.dimensions',[]).factory('dimensions',['$document','$window',function(t,e){var o=(angular.element,{}),n=o.nodeName=function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()};o.css=function(t,e,o){var n;return n=t.currentStyle?t.currentStyle[e]:window.getComputedStyle?window.getComputedStyle(t)[e]:t.style[e],o===!0?parseFloat(n)||0:n},o.offset=function(t){var e=t.getBoundingClientRect(),o=t.ownerDocument;return{width:e.width||t.offsetWidth,height:e.height||t.offsetHeight,top:e.top+(window.pageYOffset||o.documentElement.scrollTop)-(o.documentElement.clientTop||0),left:e.left+(window.pageXOffset||o.documentElement.scrollLeft)-(o.documentElement.clientLeft||0)}},o.setOffset=function(t,e,n){var s,i,r,f,c,l,d,a=o.css(t,'position'),u=angular.element(t),p={};'static'===a&&(t.style.position='relative'),c=o.offset(t),r=o.css(t,'top'),l=o.css(t,'left'),d=('absolute'===a||'fixed'===a)&&(r+l).indexOf('auto')>-1,d?(s=o.position(t),f=s.top,i=s.left):(f=parseFloat(r)||0,i=parseFloat(l)||0),angular.isFunction(e)&&(e=e.call(t,n,c)),null!==e.top&&(p.top=e.top-c.top+f),null!==e.left&&(p.left=e.left-c.left+i),'using'in e?e.using.call(u,p):u.css({top:p.top+'px',left:p.left+'px'})},o.position=function(t){var e,i,r={top:0,left:0};return'fixed'===o.css(t,'position')?i=t.getBoundingClientRect():(e=s(t),i=o.offset(t),n(e,'html')||(r=o.offset(e)),r.top+=o.css(e,'borderTopWidth',!0),r.left+=o.css(e,'borderLeftWidth',!0)),{width:t.offsetWidth,height:t.offsetHeight,top:i.top-r.top-o.css(t,'marginTop',!0),left:i.left-r.left-o.css(t,'marginLeft',!0)}};var s=function(t){var e=t.ownerDocument,s=t.offsetParent||e;if(n(s,'#document'))return e.documentElement;for(;s&&!n(s,'html')&&'static'===o.css(s,'position');)s=s.offsetParent;return s||e.documentElement};return o.height=function(t,e){var n=t.offsetHeight;return e?n+=o.css(t,'marginTop',!0)+o.css(t,'marginBottom',!0):n-=o.css(t,'paddingTop',!0)+o.css(t,'paddingBottom',!0)+o.css(t,'borderTopWidth',!0)+o.css(t,'borderBottomWidth',!0),n},o.width=function(t,e){var n=t.offsetWidth;return e?n+=o.css(t,'marginLeft',!0)+o.css(t,'marginRight',!0):n-=o.css(t,'paddingLeft',!0)+o.css(t,'paddingRight',!0)+o.css(t,'borderLeftWidth',!0)+o.css(t,'borderRightWidth',!0),n},o}]);
//# sourceMappingURL=../modules/dimensions.min.js.map
"use strict";(function(){var mod=angular.module("slugifier",[]);var charmap={" ":" ","¡":"!","¢":"c","£":"lb","¥":"yen","¦":"|","§":"SS","¨":'"',"©":"(c)","ª":"a","«":"<<","¬":"not","":"-","®":"(R)","°":"^0","±":"+/-","²":"^2","³":"^3","´":"'","µ":"u","¶":"P","·":".","¸":",","¹":"^1","º":"o","»":">>","¼":" 1/4 ","½":" 1/2 ","¾":" 3/4 ","¿":"?","À":"`A","Á":"'A","Â":"^A","Ã":"~A","Ä":'"A',"Å":"A","Æ":"AE","Ç":"C","È":"`E","É":"'E","Ê":"^E","Ë":'"E',"Ì":"`I","Í":"'I","Î":"^I","Ï":'"I',"Ð":"D","Ñ":"~N","Ò":"`O","Ó":"'O","Ô":"^O","Õ":"~O","Ö":'"O',"×":"x","Ø":"O","Ù":"`U","Ú":"'U","Û":"^U","Ü":'"U',"Ý":"'Y","Þ":"Th","ß":"ss","à":"`a","á":"'a","â":"^a","ã":"~a","ä":'"a',"å":"a","æ":"ae","ç":"c","è":"`e","é":"'e","ê":"^e","ë":'"e',"ì":"`i","í":"'i","î":"^i","ï":'"i',"ð":"d","ñ":"~n","ò":"`o","ó":"'o","ô":"^o","õ":"~o","ö":'"o',"÷":":","ø":"o","ù":"`u","ú":"'u","û":"^u","ü":'"u',"ý":"'y","þ":"th","ÿ":'"y',"Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"'C","ć":"'c","Ĉ":"^C","ĉ":"^c","Ċ":"C","ċ":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"^G","ĝ":"^g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"^H","ĥ":"^h","Ħ":"H","ħ":"h","Ĩ":"~I","ĩ":"~i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"^J","ĵ":"^j","Ķ":"K","ķ":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"L","ł":"l","Ń":"'N","ń":"'n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"'n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":'"O',"ő":'"o',"Œ":"OE","œ":"oe","Ŕ":"'R","ŕ":"'r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","Ś":"'S","ś":"'s","Ŝ":"^S","ŝ":"^s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","Ũ":"~U","ũ":"~u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":'"U',"ű":'"u',"Ų":"U","ų":"u","Ŵ":"^W","ŵ":"^w","Ŷ":"^Y","ŷ":"^y","Ÿ":'"Y',"Ź":"'Z","ź":"'z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s"};function _slugify(s){if(!s){return""}var ascii=[];var ch,cp;for(var i=0;i<s.length;i++){if((cp=s.charCodeAt(i))<384){ch=String.fromCharCode(cp);ascii.push(charmap[ch]||ch)}}s=ascii.join("");s=s.replace(/[^\w\s-]/g,"").trim().toLowerCase();return s.replace(/[-\s]+/g,"-")}mod.factory("Slug",function(){return{slugify:_slugify}});mod.directive("slug",["Slug",function(Slug){return{restrict:"E",scope:{to:"="},transclude:true,replace:true,template:"<div ng-transclude></div>",link:function(scope,elem,attrs){if(!attrs.from){throw"must set attribute 'from'"}scope.$parent.$watch(attrs.from,function(val){scope.to=Slug.slugify(val)})}}}]);mod.filter("slugify",function(Slug){return function(input){return Slug.slugify(input)}})})();
/*!
 * angular-ui-mask
 * https://github.com/angular-ui/ui-mask
 * Version: 1.4.1 - 2015-08-04T04:31:00.148Z
 * License: MIT
 */
!function(){"use strict";angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/},clearOnBlur:!0}).directive("uiMask",["uiMaskConfig","$parse",function(e,n){function t(e){return e===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(e.type||e.href||~e.tabIndex)}return{priority:100,require:"ngModel",restrict:"A",compile:function(){var i=e;return function(e,r,u,a){function o(e){return angular.isDefined(e)?(k(e),H?(h(),d(),!0):f()):f()}function l(e){angular.isDefined(e)&&(P=e,H&&M())}function s(e){return H?(j=v(e||""),T=p(j),a.$setValidity("mask",T),T&&j.length?m(j):void 0):e}function c(e){return H?(j=v(e||""),T=p(j),a.$viewValue=j.length?m(j):"",a.$setValidity("mask",T),""===j&&u.required&&a.$setValidity("required",!a.$error.required),T?j:void 0):e}function f(){return H=!1,g(),angular.isDefined(K)?r.attr("placeholder",K):r.removeAttr("placeholder"),angular.isDefined(N)?r.attr("maxlength",N):r.removeAttr("maxlength"),r.val(a.$modelValue),a.$viewValue=a.$modelValue,!1}function h(){j=B=v(a.$modelValue||""),z=Z=m(j),T=p(j);var e=T&&j.length?z:"";u.maxlength&&r.attr("maxlength",2*E[E.length-1]),angular.isDefined(u.uiMaskPlaceholder)||r.attr("placeholder",P),r.val(e),a.$viewValue=e,a.$setValidity("mask",T)}function d(){I||(r.bind("blur",y),r.bind("mousedown mouseup",x),r.bind("input keyup click focus",M),r.bind("paste",w),I=!0)}function g(){I&&(r.unbind("blur",y),r.unbind("mousedown",x),r.unbind("mouseup",x),r.unbind("input",M),r.unbind("keyup",M),r.unbind("click",M),r.unbind("focus",M),r.unbind("paste",w),I=!1)}function p(e){return e.length?e.length>=q:!0}function v(e){var n="",t=_.slice();return e=e.toString(),angular.forEach(R,function(n){e=e.replace(n,"")}),angular.forEach(e.split(""),function(e){t.length&&t[0].test(e)&&(n+=e,t.shift())}),n}function m(e){var n="",t=E.slice();return angular.forEach(P.split(""),function(i,r){e.length&&r===t[0]?(n+=e.charAt(0)||"_",e=e.substr(1),t.shift()):n+=i}),n}function b(e){var n=angular.isDefined(u.uiMaskPlaceholder)?u.uiMaskPlaceholder:u.placeholder;return"undefined"!=typeof n&&n[e]?n[e]:"_"}function $(){return P.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function k(e){var n=0;if(E=[],_=[],P="","string"==typeof e){q=0;var t=!1,i=0,r=e.split("");angular.forEach(r,function(e,r){W.maskDefinitions[e]?(E.push(n),P+=b(r-i),_.push(W.maskDefinitions[e]),n++,t||q++):"?"===e?(t=!0,i++):(P+=e,n++)})}E.push(E.slice().pop()+1),R=$(),H=E.length>1?!0:!1}function y(){W.clearOnBlur&&(C=0,F=0,T&&0!==j.length||(z="",r.val(""),e.$apply(function(){a.$setViewValue("")})))}function x(e){"mousedown"===e.type?r.bind("mouseout",V):r.unbind("mouseout",V)}function V(){F=S(this),r.unbind("mouseout",V)}function w(){D(this,r.val().length)}function M(e){e=e||{};var n=e.which,t=e.type;if(16!==n&&91!==n){var i,u=r.val(),o=Z,l=v(u),s=B,c=A(this)||0,f=C||0,h=c-f,d=E[0],g=E[l.length]||E.slice().shift(),p=F||0,b=S(this)>0,$=p>0,k=u.length>o.length||p&&u.length>o.length-p,y=u.length<o.length||p&&u.length===o.length-p,x=n>=37&&40>=n&&e.shiftKey,V=37===n,w=8===n||"keyup"!==t&&y&&-1===h,M=46===n||"keyup"!==t&&y&&0===h&&!$,_=(V||w||"click"===t)&&c>d;if(F=S(this),!x&&(!b||"click"!==t&&"keyup"!==t)){if("input"===t&&y&&!$&&l===s){for(;w&&c>d&&!O(c);)c--;for(;M&&g>c&&-1===E.indexOf(c);)c++;var P=E.indexOf(c);l=l.substring(0,P)+l.substring(P+1)}for(i=m(l),Z=i,B=l,r.val(i),a.$setViewValue(l),k&&d>=c&&(c=d+1),_&&c--,c=c>g?g:d>c?d:c;!O(c)&&c>d&&g>c;)c+=_?-1:1;(_&&g>c||k&&!O(f))&&c++,C=c,D(this,c)}}}function O(e){return E.indexOf(e)>-1}function A(e){if(!e)return 0;if(void 0!==e.selectionStart)return e.selectionStart;if(document.selection&&t(r[0])){e.focus();var n=document.selection.createRange();return n.moveStart("character",e.value?-e.value.length:0),n.text.length}return 0}function D(e,n){if(!e)return 0;if(0!==e.offsetWidth&&0!==e.offsetHeight)if(e.setSelectionRange)t(r[0])&&(e.focus(),e.setSelectionRange(n,n));else if(e.createTextRange){var i=e.createTextRange();i.collapse(!0),i.moveEnd("character",n),i.moveStart("character",n),i.select()}}function S(e){return e?void 0!==e.selectionStart?e.selectionEnd-e.selectionStart:document.selection?document.selection.createRange().text.length:0:0}var E,_,P,R,q,j,z,T,Z,B,C,F,H=!1,I=!1,K=u.placeholder,N=u.maxlength,W={};u.uiOptions?(W=e.$eval("["+u.uiOptions+"]"),angular.isObject(W[0])&&(W=function(e,n){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0===n[t]?n[t]=angular.copy(e[t]):angular.extend(n[t],e[t]));return n}(i,W[0]))):W=i,u.$observe("uiMask",o),angular.isDefined(u.uiMaskPlaceholder)?u.$observe("uiMaskPlaceholder",l):u.$observe("placeholder",l);var G=!1;u.$observe("modelViewValue",function(e){"true"===e&&(G=!0)}),e.$watch(u.ngModel,function(t){if(G&&t){var i=n(u.ngModel);i.assign(e,a.$viewValue)}}),a.$formatters.push(s),a.$parsers.push(c),r.bind("mousedown mouseup",x),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var n=Object(this),t=n.length>>>0;if(0===t)return-1;var i=0;if(arguments.length>1&&(i=Number(arguments[1]),i!==i?i=0:0!==i&&1/0!==i&&i!==-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=t)return-1;for(var r=i>=0?i:Math.max(t-Math.abs(i),0);t>r;r++)if(r in n&&n[r]===e)return r;return-1})}}}}])}();
/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);
/**
 * angular-ui-sortable - This directive allows you to jQueryUI Sortable.
 * @version v0.13.4 - 2015-06-07
 * @link http://angular-ui.github.com
 * @license MIT
 */

!function(a,b,c){"use strict";b.module("ui.sortable",[]).value("uiSortableConfig",{}).directive("uiSortable",["uiSortableConfig","$timeout","$log",function(a,d,e){return{require:"?ngModel",scope:{ngModel:"=",uiSortable:"="},link:function(f,g,h,i){function j(a,b){return b&&"function"==typeof b?function(){a.apply(this,arguments),b.apply(this,arguments)}:a}function k(a){var b=a.data("ui-sortable");return b&&"object"==typeof b&&"ui-sortable"===b.widgetFullName?b:null}function l(a,b){var c=a.sortable("option","helper");return"clone"===c||"function"==typeof c&&b.item.sortable.isCustomHelperUsed()}function m(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))}function n(a,b){for(var c=null,d=0;d<a.length;d++){var e=a[d];if(e.element[0]===b[0]){c=e.scope;break}}return c}function o(a,b){b.item.sortable._destroy()}var p,q={},r={"ui-floating":c},s={receive:null,remove:null,start:null,stop:null,update:null},t={helper:null};return b.extend(q,r,a,f.uiSortable),b.element.fn&&b.element.fn.jquery?(i?(f.$watch("ngModel.length",function(){d(function(){k(g)&&g.sortable("refresh")},0,!1)}),s.start=function(a,d){if("auto"===q["ui-floating"]){var e=d.item.siblings(),f=k(b.element(a.target));f.floating=m(e)}d.item.sortable={model:i.$modelValue[d.item.index()],index:d.item.index(),source:d.item.parent(),sourceModel:i.$modelValue,cancel:function(){d.item.sortable._isCanceled=!0},isCanceled:function(){return d.item.sortable._isCanceled},isCustomHelperUsed:function(){return!!d.item.sortable._isCustomHelperUsed},_isCanceled:!1,_isCustomHelperUsed:d.item.sortable._isCustomHelperUsed,_destroy:function(){b.forEach(d.item.sortable,function(a,b){d.item.sortable[b]=c})}}},s.activate=function(a,c){p=g.contents();var d=g.sortable("option","placeholder");if(d&&d.element&&"function"==typeof d.element){var e=d.element();e=b.element(e);var h=g.find('[class="'+e.attr("class")+'"]:not([ng-repeat], [data-ng-repeat])');p=p.not(h)}var i=c.item.sortable._connectedSortables||[];i.push({element:g,scope:f}),c.item.sortable._connectedSortables=i},s.update=function(a,b){if(!b.item.sortable.received){b.item.sortable.dropindex=b.item.index();var c=b.item.parent();b.item.sortable.droptarget=c;var d=n(b.item.sortable._connectedSortables,c);b.item.sortable.droptargetModel=d.ngModel,g.sortable("cancel")}l(g,b)&&!b.item.sortable.received&&"parent"===g.sortable("option","appendTo")&&(p=p.not(p.last())),p.appendTo(g),b.item.sortable.received&&(p=null),b.item.sortable.received&&!b.item.sortable.isCanceled()&&f.$apply(function(){i.$modelValue.splice(b.item.sortable.dropindex,0,b.item.sortable.moved)})},s.stop=function(a,b){!b.item.sortable.received&&"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()?f.$apply(function(){i.$modelValue.splice(b.item.sortable.dropindex,0,i.$modelValue.splice(b.item.sortable.index,1)[0])}):"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()||l(g,b)||p.appendTo(g),p=null},s.receive=function(a,b){b.item.sortable.received=!0},s.remove=function(a,b){"dropindex"in b.item.sortable||(g.sortable("cancel"),b.item.sortable.cancel()),b.item.sortable.isCanceled()||f.$apply(function(){b.item.sortable.moved=i.$modelValue.splice(b.item.sortable.index,1)[0]})},t.helper=function(a){return a&&"function"==typeof a?function(b,c){var d=a.apply(this,arguments);return c.sortable._isCustomHelperUsed=c!==d,d}:a},f.$watch("uiSortable",function(a){var c=k(g);c&&b.forEach(a,function(a,b){return b in r?("ui-floating"!==b||a!==!1&&a!==!0||(c.floating=a),void(q[b]=a)):(s[b]?("stop"===b&&(a=j(a,function(){f.$apply()}),a=j(a,o)),a=j(s[b],a)):t[b]&&(a=t[b](a)),q[b]=a,void g.sortable("option",b,a))})},!0),b.forEach(s,function(a,b){q[b]=j(a,q[b]),"stop"===b&&(q[b]=j(q[b],o))})):e.info("ui.sortable: ngModel not provided!",g),void g.sortable(q)):void e.error("ui.sortable: jQuery should be included before AngularJS!")}}}])}(window,window.angular);

angular.module('dashboard',[
	'ngSanitize',
	'ngAnimate',
	'jcs-autoValidate',
	'ngPassword',
	
	'ui.router',
	'ui.mask',
	'ui.sortable',
	'mgcrea.ngStrap',

	'factories.general',
	'directives.general',
	'filters.general',

	'services.users',
	'services.permissions',

	'controller.home',
	'controller.users',						
	'controller.roles'						
])

.config(function($httpProvider, $stateProvider, $urlRouterProvider, $modalProvider){
	
	/**
	 * This function is used for the most of routes.
	 * Will be responsible to check if the user is logged.
	 *  
	 * @return object
	 */
	function generalResolver(){
		return {
			check : function($rootScope) {
				return $rootScope.check();
			}
		};
	}

	/**
	 * This variable is used to add the propertie to all routes
	 * 
	 * @type Object
	 */
	var configRoutes = {
		cache : false
	};

	/**
	 * Routes array
	 * 
	 * @type Array
	 */
	var routes = [
	    {
	    	name : 'login',
			url: "/login",
			templateUrl: "view/admin.login.index",
			controller: "LoginCtrl",
			breadcrumbs : false
		},
		{
	        name: 'home',
	        url: '/',
			controller: "HomeCtrl",
			templateUrl: "view/admin.home.index",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Home' }]
	    },
		{
			name : "users",
			url: "/users",
			controller: "UsersCtrl",
			templateUrl: "view/admin.users.index",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Users' }],
			add_button : { state : "user", text : "Add User" }
		},
		{
			name : "user",
			url: "/users/user/:id",
			controller: "UserCtrl",
			templateUrl: "view/admin.users.user",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Users', state : "users" },{ label : 'User data' }]
		},
		{
			name : "roles",
			url: "/roles",
			controller: "RolesCtrl",
			templateUrl: "view/admin.roles.index",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Roles' }],
			add_button : { state : "role", text : "Add Role" }
		},
		{
			name : "role",
			url: "/roles/role/:id",
			controller: "RoleCtrl",
			templateUrl: "view/admin.roles.role",
			resolve: generalResolver(),
			breadcrumbs : [{ label : 'Roles', state : "roles" },{ label : 'Role data' }]
		}
	];

	for(i in routes){
    	$stateProvider.state( angular.extend(routes[i], configRoutes) );
	}

	$urlRouterProvider.otherwise(function(){
		return '/';
	});

	$httpProvider.interceptors.push('HttpInterceptor');


	angular.extend($modalProvider.defaults, {
		animation: 'am-fade-and-scale',
		placement: 'center'
	});


})

.run(function($rootScope,$state,$stateParams,$modal,$http,$q,$timeout,$parse,$modal,validator,defaultErrorMessageResolver,UsersService) {

    

    validator.setValidElementStyling(false);
    
	/*
	 * Angular Auto Validate errors messages config
	 */
	angular.autoValidate.errorMessages = {}; // fix the bug to search the JSON file with messages
	defaultErrorMessageResolver.setI18nFileRootPath('admin/js/angular-auto-validate/lang/');
    defaultErrorMessageResolver.setCulture('en-us');

    $rootScope.responseErrorValidate = function(form,response){


    	var responsePrefix = 'response';

    	var error = response.error;

		defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
			error.forEach(function(element, index, array){
	        	errorMessages[responsePrefix+element.field] = element.message;
	        });		
		});

		error.forEach(function(element, index, array){
			eval("form."+element.field+".$validators."+responsePrefix+element.field+" = function(){return false;};");
	        eval("form."+element.field+".$validate();");			
		});

		if(response.focus || response.select){
			if(response.focus){
				$("[name="+response.focus+"]").focus();
			}else{
				$("[name="+response.select+"]").select();						
			}
		}

		error.forEach(function(element, index, array){
			eval("form."+element.field+".$validators."+responsePrefix+element.field+" = function(){return true;};");
		});

    };


    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.breadcrumbs = false;
    $rootScope.manualActiveMenu = false;

    $rootScope.user = false;

    /*
     * Header menu items configuration
     */
    $rootScope.sideMenu = {
    	"home" : {
    		label : "Home",
    		icon : "home",
    		sref : "home",
    		activeState : ['home']
    	},
    	"users" : {
    		label : "Users",
    		icon : "users",
    		sref : "users",
    		activeState : ['users'],
    		permissions : ["admin.users."]
    	},
    	"roles" : {
    		label : "Roles",
    		icon : "puzzle-piece",
    		sref : "roles",
    		activeState : ['roles'],
    		permissions : ["admin.roles."]
    	},
    };

    /*
     * Function used for add active class to activate menu based on first position of route name
     */
    $rootScope.activeMenu = function(item){

    	var names = $state.current.name.split('.');

    	for ( i in item.activeState ){    		
    		if ( item.activeState[i] == names[0] ){
    			return true;
    		} 
    	}
    	return false;
    };

    $rootScope.check = function(){
    	UsersService.check().then(function(data){
			$rootScope.user = data.data.user;
		});
		return true;
    };

    $rootScope.hasAccess = function(item){

    	if(!item.permissions) return true;

    	var roles = $rootScope.user.roles;

    	var permissions = [];

    	for(i in roles){

	    	for( permission in roles[i].permissions){

				for (k in item.permissions) {
					
					var p = item.permissions[k];
					
					var last_char = p.charAt(p.length - 1);

					if(last_char == "."){
				
						if( permission.search(p) === 0) return true;

					}else if(permission == p){					

						return true;
					}
				}
			}	    	
    	}

    	return false;
    };

    $rootScope.logout = function(){

    	UsersService
    		.logout()
    		.then(function(data){
    	
    			$rootScope.user = false;
    			$state.go("login");
		    
			},function(){
		    	return false;
			});
    };
	
    // Called when the OK button at Modal is clicked
    $rootScope.modal = function(params){

    	$rootScope.params = params;

    	var templateUrl = 'view/admin.modal.' + (params.type || 'default');

		var config = {
			title: params.title,
    		templateUrl: templateUrl, 
    		show: true,
    		html: true,
    		content: params.content,
    		scope: $rootScope
    	};

    	var modal = $modal(config);

    	$rootScope.modal.hide = function() {
    		modal.$promise.then(modal.hide);
    	};
    	
    };







	$rootScope.getImage = function(image, width, height, effects) {

    	var file = image.split('.');
    	var size = (width && height) ? width+"x"+height : "";
    	var effects = (effects) ? "-" + effects.join('-') : "";
    	var path = "/img/"+file[0]+"-image("+size+effects+")."+file[1];

    	return path;
    };

})

































$(document).ready(function(){

	
	 
});



angular.module('controller.banners',[])

.controller("BannersCtrl",function($rootScope,$scope,$state,$timeout,BannersService){

	$scope.loading = false;
	$scope.banners = false;
	
	$scope.sortableOptions = {
		stop: function(e, ui) { 
			//$timeout(function(){
				var ids = $scope.banners.map(function(e,index){
					return e.id;
				});
				BannersService.saveOrder(ids);				
			//});
		},
		axis: 'y'
	};

  	function getBanners(){

		$scope.loading = true;

		BannersService.resource.query(function(data){
			$scope.banners = data;
			$scope.loading = false;
	    });  		
  	}

  	$timeout(function(){
	  	getBanners();
  	});

    $scope.delete = function(params){

    	var banner = new BannersService.resource();

    	banner.$delete({id:params.banner.id},function(){
    		$scope.banners.splice(params.index,1);
    	});
    };

})

.controller("BannerCtrl",function($rootScope,$scope,$state,$stateParams,$timeout,BannersService,Add,fileReader){

	$scope.add = Add;

	$scope.banner = !Add ? false : new BannersService.resource();

	$scope.fileURL = false;	
	$scope.loading = false;

    $scope.getFile = function () {
        fileReader
        	.readAsDataUrl($scope.file, $scope)
            .then(function(result) {
            	var fileName = $scope.file.name.split('.');
				var extension = fileName.pop().toLowerCase();

				if( extension == "jpeg" || extension == "jpg" || extension == "bmp" || extension == "png" || extension == "gif" ){
            		$scope.banner.image = result;
				}
            });
    };
	
	$scope.save = function(form){
		$scope.loading = true;
		if($scope.add){
			$scope.banner.$save(function() {
				$scope.loading = false;
				$state.go("banners",{reload: true});
			});
		}else{
			$scope.banner.$update(function(data) {
				$scope.loading = false;
				$scope.fileURL = data.image;
				delete data.image;
				$state.go("banners",{reload: true});
			});
		}
	};

	if(!Add){
		$scope.banner = BannersService.resource.get( { id:$stateParams.id },function(data){
			$scope.fileURL = data.image;
			delete data.image;
	        return data;
	    });		
	}

})









angular.module('controller.home',[])

.controller("HomeCtrl",function($rootScope,$scope,$state,$stateParams,$http){


})
angular.module('controller.roles',['services.roles'])

.controller("RolesCtrl",function($rootScope,$scope,$state,RolesService){

	$scope.roles = [];

	$scope.roles = RolesService.resource.query(function(data){
    	$scope.roles = data;
    });

    $scope.delete = function(data){   	
    	data.role.$delete({id:data.role.id},function(){
    		$scope.roles.splice(data.index,1);
    		$rootScope.modal.hide();
    	});
    };

})

.controller("RoleCtrl",function($rootScope,$scope,$state,$stateParams,RolesService){

	$scope.loading = false;

	$scope.add = ($stateParams.id == ""); // Check if the page is Creating ou Updating resource

	if($scope.add)
	{
		$scope.role = new RolesService.resource();
	}
	else
	{
		$scope.role = RolesService.resource.get({ id:$stateParams.id }, function(data){
	        return data;
	    });
	}
	
	$scope.save = function(form){
		
		$scope.loading = true;

		if($scope.add){
			// Creating
			$scope.role.$save(function(data) {
				$scope.loading = false;
				$state.go("roles",null,{reload: true});
			});
		
		}else{
			// Updating
			$scope.role.$update(function(data) {
				$scope.loading = false;
				$state.go("roles",null,{reload: true});
			});
		
		}
	};


})



angular.module('controller.users',[])

.controller("LoginCtrl", function($rootScope,$scope,$state,$stateParams,UsersService,defaultErrorMessageResolver){

	$scope.user = false;

	$scope.submitForm = function(form){

		$scope.loading = true;

		UsersService.authenticate($scope.user).then(function(data){

			var response = data.data;

			if(response.success){
				$state.go("home",null,{reload: true});
			}else{
				$scope.loading = false;
				$rootScope.responseErrorValidate(form,response);				
			}

		},function(){
			$scope.loading = false;
		});
	};
})

.controller("UsersCtrl",function($rootScope,$scope,$state,UsersService){

	$scope.users = [];

	$scope.users = UsersService.resource.query(function(data){
    	$scope.users = data;
    });

    $scope.delete = function(data){
    	data.user.$delete({id:data.user.id},function(){
    		$scope.users.splice(data.index,1);
    		$rootScope.modal.hide();
    	});
    };

})

.controller("UserCtrl",function($rootScope,$scope,$state,$stateParams,$timeout,UsersService,fileReader){

	$scope.form = {};
	$scope.loading = false;

	$scope.add = ($stateParams.id == ""); // Check if the page is Creating ou Updating resource

	$timeout(function(){
		
	},1);

	if($scope.add)
	{
		$scope.user = new UsersService.resource();
	}
	else
	{
		$scope.user = UsersService.resource.get({ id:$stateParams.id }, function(data){
	        return data;
	    });
	}
	
	$scope.save = function(form){
		
		$scope.loading = true;

		if($scope.add){
			// Creating
			$scope.user.$save(function(data) {
				$scope.loading = false;
				$state.go("users",null,{reload: true});
			});
		
		}else{
			// Updating
			$scope.user.$update(function(data) {
				$scope.loading = false;
				$state.go("users",null,{reload: true});
			});
		
		}
	};


})

.controller("PermissionsCtrl",function($rootScope,$scope,$state,$stateParams,PermissionsService){

	$scope.user = false;
	
	$scope.groups = [];

	$rootScope.manualActiveMenu = $rootScope.sideMenu["users"];
    $rootScope.breadcrumbs = [
        { state : "users", label : 'Usuários' }        
    ];



	$scope.hasGroup = function(id){

		var user_groups = $scope.user.user_groups;

		for(i in user_groups){
			if(user_groups[i].id == id) return true;
		}

		return false;
	};

	$scope.switchGroup = function(id){

		var action = $scope.groups[id] ? 1 : 0; // If the checkbox is checked returns true
		var data = PermissionsService.saveGroup($scope.user.user.id,id,action);
	};

	$scope.user = PermissionsService.resource.get( { id:$stateParams.id },function(data){

		$rootScope.breadcrumbs.push({label : data.user.first_name+' '+data.user.last_name+' - Permissões'});

        return data;
    });

})


















angular.module('services.banners', ['ngResource'])

.factory('BannersService', function ($resource,$http){

	var URL = "/admin/banners";

	var service = {};

	service.resource = $resource(URL+'/:id', { id: '@_id' }, {
		/*
		query: {
			method: 'GET', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
		*/
		save: {
			method: 'POST', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
		update: {
			method: 'PUT', 
		    params: {id: '@id'}, 
		    headers: {'Content-Type': 'multipart/form-data'}
		}
	});

	service.saveOrder = function(orders) {
		return $http.post(URL + '/order', orders).then(function (status) {
			return status.data;		
		});
	};	

	

	return service;
})









angular.module('services.permissions', ['ngResource'])

.factory('PermissionsService', function ($resource,$http){

	var URL = "/admin/permissions";

	var service = {};

	service.resource = $resource(URL+'/:id', { id: '@_id' }, {
		save: {
			method: 'POST', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
		update: {
			method: 'PUT', 
		    params: {id: '@id'}, 
		    headers: {'Content-Type': 'multipart/form-data'}
		}
	});

	service.saveGroup = function(user_id,group_id,action) {
		
		return $http.put(URL + '/' + user_id, { group_id : group_id, action : action }).then(function (status) {
			return status.data;		
		});
	};	

	return service;
})
angular.module('services.roles', ['ngResource'])

.factory('RolesService', function ($resource){

	var URL = "/admin/roles";

	var service = {};

	service.resource = $resource(URL+'/:id', { id: '@_id' }, {
		save: {
			method: 'POST', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
		update: {
			method: 'PUT', 
		    params: {id: '@id'}, 
		    headers: {'Content-Type': 'multipart/form-data'}
		}
	});

	return service;

})

angular.module('services.users', ['ngResource'])

.factory('UsersService', function ($resource,$http){

	var URL = "/admin/users";

	var service = {};

	service.resource = $resource(URL+'/:id', { id: '@_id' }, {
		save: {
			method: 'POST', 
		    headers: {'Content-Type': 'multipart/form-data'},
		    url : URL
		},
		update: {
			method: 'PUT', 
		    params: {id: '@id'}, 
		    headers: {'Content-Type': 'multipart/form-data'}
		}
	});

	service.logout = function() {
		return $http.get('/admin/logout');
	};

	service.authenticate = function(user) {
		return $http.post('/admin/authenticate', user);
	};

	service.check = function() {
		return $http.get('/admin/check', {});
	};

	return service;

})

angular.module('factories.general',[])

.factory('HttpInterceptor',function($q,$rootScope) {
    return {
        request: function(config) {
            // do something on success
            return config;
        },
        response: function(response) {
            // do something on success
            return response;
        },
        'responseError': function(rejection) {
            // do something on error
            if(rejection.status === 401){
                $rootScope.$state.go('login');         
            }

            if(rejection.status === 403){
                return rejection;
            }


            return $q.reject(rejection);
         }
    };
})

.factory("fileReader", function($q, $log){
 
    var onLoad = function(reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.resolve(reader.result);
            });
        };
    };

    var onError = function (reader, deferred, scope) {
        return function () {
            scope.$apply(function () {
                deferred.reject(reader.result);
            });
        };
    };

    var onProgress = function(reader, scope) {
        return function (event) {
            scope.$broadcast("fileProgress",
                {
                    total: event.total,
                    loaded: event.loaded
                });
        };
    };

    var getReader = function(deferred, scope) {
        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        reader.onprogress = onProgress(reader, scope);
        return reader;
    };

    var readAsDataURL = function (file, scope) {
        var deferred = $q.defer();
         
        var reader = getReader(deferred, scope);   

        reader.readAsDataURL(file);
         
        return deferred.promise;
    };

    return {
        readAsDataUrl: readAsDataURL  
    };
})

angular.module('directives.general',[])

.directive('unique', function ($http,$timeout,$q) {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: {
			url: "@uniqueUrl",
			resource: "=uniqueResource"
		},
		link: function (scope, element, attrs, ctrl) {

			element.on('blur',unique);
			element.on('change',unique);
			element.bind("keyup",unique);

			var resource = scope.resource;

			function unique(){

				var value = $(this).val();

				$http.post(scope.url,{						
					id : resource.id || 0,
					value : value
				}).then(function (results) {
                    ctrl.$setValidity('uniqueUser', results.data.success);
                });
			}
			/*
			ctrl.$asyncValidators.unique = function (modelValue) {

				var deferred = $q.defer();

                if ( unique() ) {
                    deferred.resolve(); //It's unique
                } else {
                    deferred.reject(); //Add unique to $errors
                }

				return deferred.promise;
            };	
			*/
		}
	};
})

.directive("ngFileSelect",function(){
	return {
		link: function($scope,el){
			el.bind("change", function(e){
				$scope.file = (e.srcElement || e.target).files[0] || false;
				if($scope.file) $scope.getFile();
			})
		}
	}
})

.directive('focus', function($timeout) {
	return {
		scope : {
			trigger : '@focus'
		},
		link : function(scope, element) {

			scope.$watch('trigger', function(value) {

				if (value === "true") {

					$timeout(function() {

						if(element[0].value == ""){
							element[0].focus();
						}else{
							element[0].select();
						}

					});
				}
			});
		}
	};
})

/**
 * ckeditor Directive
 * @Author Zhang Shimin, the number of images
 */
.directive('ckeditor', function() {
    return {
        require : '?ngModel',
        link : function(scope, element, attrs, ngModel) {
       	
            var ckeditor = CKEDITOR.replace(element[0], {
				height : 200,
			    language: 'pt-br',
			    pasteFromWordRemoveFontStyles : false,
			    toolbar : [
					{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
					{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-','Center', '-', 'RemoveFormat' ] },
					{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', /*'BidiLtr', 'BidiRtl', 'Language'*/ ] },
					{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
					{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
					{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
			    	{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
					{ name: 'youtube', items: [ 'Youtube' ] },  
					{ name: 'iframe', items: [ 'Iframe' ] },  
			    	{ name: 'document', items:[ 'Source' ] },
			    	{ name: 'blocks', items:[ 'ShowBlocks' ] },
			    	{ name: 'tools', items: [ 'Maximize' /*,'About'*/ ] }
				],
				skin : 'moono',
				allowedContent : true,
				removeFormatAttributes : ''
			});
            if (!ngModel) {
                return;
            }
            ckeditor.on('instanceReady', function() {
                ckeditor.setData(ngModel.$viewValue);
            });
            ckeditor.on('pasteState', function() {
                scope.$apply(function() {
                    ngModel.$setViewValue(ckeditor.getData());
                });
            });
            ngModel.$render = function(value) {
                ckeditor.setData(ngModel.$viewValue);
            };
        }
    };
})







angular.module('filters.general',[])

.filter("url",function(){
	return function(input){


		return input;
	};
});
//# sourceMappingURL=app.js.map
