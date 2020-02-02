/* flatpickr v4.5.7,, @license MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).flatpickr=t()}(this,function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},t=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],n={_disable:[],_enable:[],allowInput:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enable:[],enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},a={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year"},i=function(e){return("0"+e).slice(-2)},o=function(e){return!0===e?1:0};function r(e,t,n){var a;return void 0===n&&(n=!1),function(){var i=this,o=arguments;null!==a&&clearTimeout(a),a=window.setTimeout(function(){a=null,n||e.apply(i,o)},t),n&&!a&&e.apply(i,o)}}var l=function(e){return e instanceof Array?e:[e]};function c(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function d(e,t,n){var a=window.document.createElement(e);return t=t||"",n=n||"",a.className=t,void 0!==n&&(a.textContent=n),a}function s(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function u(e,t){var n=d("div","numInputWrapper"),a=d("input","numInput "+e),i=d("span","arrowUp"),o=d("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number":(a.type="text",a.pattern="\\d*"),void 0!==t)for(var r in t)a.setAttribute(r,t[r]);return n.appendChild(a),n.appendChild(i),n.appendChild(o),n}var f=function(){},m=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},g={D:f,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours(parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*o(new RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t){var n=parseInt(t);return new Date(e.getFullYear(),0,2+7*(n-1),0,0,0,0)},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours(parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:f,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:f,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},p={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},h={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[h.w(e,t,n)]},F:function(e,t,n){return m(h.n(e,t,n)-1,!1,t)},G:function(e,t,n){return i(h.h(e,t,n))},H:function(e){return i(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[o(e.getHours()>11)]},M:function(e,t){return m(e.getMonth(),!0,t)},S:function(e){return i(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return e.getFullYear()},d:function(e){return i(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return i(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return i(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},v=function(e){var t=e.config,i=void 0===t?n:t,o=e.l10n,r=void 0===o?a:o;return function(e,t,n){var a=n||r;return void 0!==i.formatDate?i.formatDate(e,t,a):t.split("").map(function(t,n,o){return h[t]&&"\\"!==o[n-1]?h[t](e,a,i):"\\"!==t?t:""}).join("")}},D=function(e){var t=e.config,i=void 0===t?n:t,o=e.l10n,r=void 0===o?a:o;return function(e,t,a,o){if(0===e||e){var l,c=o||r,d=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var s=t||(i||n).dateFormat,u=String(e).trim();if("today"===u)l=new Date,a=!0;else if(/Z$/.test(u)||/GMT$/.test(u))l=new Date(e);else if(i&&i.parseDate)l=i.parseDate(e,s);else{l=i&&i.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var f=void 0,m=[],h=0,v=0,D="";h<s.length;h++){var w=s[h],b="\\"===w,y="\\"===s[h-1]||b;if(p[w]&&!y){D+=p[w];var C=new RegExp(D).exec(e);C&&(f=!0)&&m["Y"!==w?"push":"unshift"]({fn:g[w],val:C[++v]})}else b||(D+=".");m.forEach(function(e){var t=e.fn,n=e.val;return l=t(l,n,c)||l})}l=f?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===a&&l.setHours(0,0,0,0),l;i.errorHandler(new Error("Invalid date provided: "+d))}}};function w(e,t,n){return void 0===n&&(n=!0),!1!==n?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var b=function(e,t,n){return e>Math.min(t,n)&&e<Math.max(t,n)},y={DAY:864e5};"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var a=function(t){t&&Object.keys(t).forEach(function(n){return e[n]=t[n]})},i=0,o=t;i<o.length;i++){a(o[i])}return e});var C=300;function M(n,f){var g={config:e({},E.defaultConfig),l10n:a};function h(e){return e.bind(g)}function M(){var e=g.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame(function(){if(void 0!==g.calendarContainer&&(g.calendarContainer.style.visibility="hidden",g.calendarContainer.style.display="block"),void 0!==g.daysContainer){var t=(g.days.offsetWidth+1)*e.showMonths;g.daysContainer.style.width=t+"px",g.calendarContainer.style.width=t+(void 0!==g.weekWrapper?g.weekWrapper.offsetWidth:0)+"px",g.calendarContainer.style.removeProperty("visibility"),g.calendarContainer.style.removeProperty("display")}})}function x(e){0===g.selectedDates.length&&ne(),void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=e.target;void 0!==g.amPM&&e.target===g.amPM&&(g.amPM.textContent=g.l10n.amPM[o(g.amPM.textContent===g.l10n.amPM[0])]);var a=parseFloat(n.getAttribute("min")),r=parseFloat(n.getAttribute("max")),l=parseFloat(n.getAttribute("step")),c=parseInt(n.value,10),d=e.delta||(t?38===e.which?1:-1:0),s=c+l*d;if(void 0!==n.value&&2===n.value.length){var u=n===g.hourElement,f=n===g.minuteElement;s<a?(s=r+s+o(!u)+(o(u)&&o(!g.amPM)),f&&Y(void 0,-1,g.hourElement)):s>r&&(s=n===g.hourElement?s-r-o(!g.amPM):a,f&&Y(void 0,1,g.hourElement)),g.amPM&&u&&(1===l?s+c===23:Math.abs(s-c)>l)&&(g.amPM.textContent=g.l10n.amPM[o(g.amPM.textContent===g.l10n.amPM[0])]),n.value=i(s)}}(e);var t=g._input.value;T(),ve(),g._input.value!==t&&g._debouncedChange()}function T(){if(void 0!==g.hourElement&&void 0!==g.minuteElement){var e,t,n=(parseInt(g.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(g.minuteElement.value,10)||0)%60,i=void 0!==g.secondElement?(parseInt(g.secondElement.value,10)||0)%60:0;void 0!==g.amPM&&(e=n,t=g.amPM.textContent,n=e%12+12*o(t===g.l10n.amPM[1]));var r=void 0!==g.config.minTime||g.config.minDate&&g.minDateHasTime&&g.latestSelectedDateObj&&0===w(g.latestSelectedDateObj,g.config.minDate,!0);if(void 0!==g.config.maxTime||g.config.maxDate&&g.maxDateHasTime&&g.latestSelectedDateObj&&0===w(g.latestSelectedDateObj,g.config.maxDate,!0)){var l=void 0!==g.config.maxTime?g.config.maxTime:g.config.maxDate;(n=Math.min(n,l.getHours()))===l.getHours()&&(a=Math.min(a,l.getMinutes())),a===l.getMinutes()&&(i=Math.min(i,l.getSeconds()))}if(r){var c=void 0!==g.config.minTime?g.config.minTime:g.config.minDate;(n=Math.max(n,c.getHours()))===c.getHours()&&(a=Math.max(a,c.getMinutes())),a===c.getMinutes()&&(i=Math.max(i,c.getSeconds()))}O(n,a,i)}}function k(e){var t=e||g.latestSelectedDateObj;t&&O(t.getHours(),t.getMinutes(),t.getSeconds())}function I(){var e=g.config.defaultHour,t=g.config.defaultMinute,n=g.config.defaultSeconds;if(void 0!==g.config.minDate){var a=g.config.minDate.getHours(),i=g.config.minDate.getMinutes();(e=Math.max(e,a))===a&&(t=Math.max(i,t)),e===a&&t===i&&(n=g.config.minDate.getSeconds())}if(void 0!==g.config.maxDate){var o=g.config.maxDate.getHours(),r=g.config.maxDate.getMinutes();(e=Math.min(e,o))===o&&(t=Math.min(r,t)),e===o&&t===r&&(n=g.config.maxDate.getSeconds())}O(e,t,n)}function O(e,t,n){void 0!==g.latestSelectedDateObj&&g.latestSelectedDateObj.setHours(e%24,t,n||0,0),g.hourElement&&g.minuteElement&&!g.isMobile&&(g.hourElement.value=i(g.config.time_24hr?e:(12+e)%12+12*o(e%12==0)),g.minuteElement.value=i(t),void 0!==g.amPM&&(g.amPM.textContent=g.l10n.amPM[o(e>=12)]),void 0!==g.secondElement&&(g.secondElement.value=i(n)))}function S(e){var t=parseInt(e.target.value)+(e.delta||0);(t/1e3>1||"Enter"===e.key&&!/[^\d]/.test(t.toString()))&&V(t)}function _(e,t,n,a){return t instanceof Array?t.forEach(function(t){return _(e,t,n,a)}):e instanceof Array?e.forEach(function(e){return _(e,t,n,a)}):(e.addEventListener(t,n,a),void g._handlers.push({element:e,event:t,handler:n,options:a}))}function N(e){return function(t){1===t.which&&e(t)}}function F(){fe("onChange")}function P(e){var t=void 0!==e?g.parseDate(e):g.latestSelectedDateObj||(g.config.minDate&&g.config.minDate>g.now?g.config.minDate:g.config.maxDate&&g.config.maxDate<g.now?g.config.maxDate:g.now);try{void 0!==t&&(g.currentYear=t.getFullYear(),g.currentMonth=t.getMonth())}catch(e){e.message="Invalid date supplied: "+t,g.config.errorHandler(e)}g.redraw()}function A(e){~e.target.className.indexOf("arrow")&&Y(e,e.target.classList.contains("arrowUp")?1:-1)}function Y(e,t,n){var a=e&&e.target,i=n||a&&a.parentNode&&a.parentNode.firstChild,o=me("increment");o.delta=t,i&&i.dispatchEvent(o)}function j(e,t,n,a){var i=Z(t,!0),o=d("span","flatpickr-day "+e,t.getDate().toString());return o.dateObj=t,o.$i=a,o.setAttribute("aria-label",g.formatDate(t,g.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===w(t,g.now)&&(g.todayDateElem=o,o.classList.add("today"),o.setAttribute("aria-current","date")),i?(o.tabIndex=-1,ge(t)&&(o.classList.add("selected"),g.selectedDateElem=o,"range"===g.config.mode&&(c(o,"startRange",g.selectedDates[0]&&0===w(t,g.selectedDates[0],!0)),c(o,"endRange",g.selectedDates[1]&&0===w(t,g.selectedDates[1],!0)),"nextMonthDay"===e&&o.classList.add("inRange")))):o.classList.add("disabled"),"range"===g.config.mode&&function(e){return!("range"!==g.config.mode||g.selectedDates.length<2)&&w(e,g.selectedDates[0])>=0&&w(e,g.selectedDates[1])<=0}(t)&&!ge(t)&&o.classList.add("inRange"),g.weekNumbers&&1===g.config.showMonths&&"prevMonthDay"!==e&&n%7==1&&g.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+g.config.getWeek(t)+"</span>"),fe("onDayCreate",o),o}function H(e){e.focus(),"range"===g.config.mode&&ee(e)}function L(e){for(var t=e>0?0:g.config.showMonths-1,n=e>0?g.config.showMonths:-1,a=t;a!=n;a+=e)for(var i=g.daysContainer.children[a],o=e>0?0:i.children.length-1,r=e>0?i.children.length:-1,l=o;l!=r;l+=e){var c=i.children[l];if(-1===c.className.indexOf("hidden")&&Z(c.dateObj))return c}}function W(e,t){var n=Q(document.activeElement||document.body),a=void 0!==e?e:n?document.activeElement:void 0!==g.selectedDateElem&&Q(g.selectedDateElem)?g.selectedDateElem:void 0!==g.todayDateElem&&Q(g.todayDateElem)?g.todayDateElem:L(t>0?1:-1);return void 0===a?g._input.focus():n?void function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():g.currentMonth,a=t>0?g.config.showMonths:-1,i=t>0?1:-1,o=n-g.currentMonth;o!=a;o+=i)for(var r=g.daysContainer.children[o],l=n-g.currentMonth===o?e.$i+t:t<0?r.children.length-1:0,c=r.children.length,d=l;d>=0&&d<c&&d!=(t>0?c:-1);d+=i){var s=r.children[d];if(-1===s.className.indexOf("hidden")&&Z(s.dateObj)&&Math.abs(e.$i-d)>=Math.abs(t))return H(s)}g.changeMonth(i),W(L(i),0)}(a,t):H(a)}function R(e,t){for(var n=(new Date(e,t,1).getDay()-g.l10n.firstDayOfWeek+7)%7,a=g.utils.getDaysInMonth((t-1+12)%12),i=g.utils.getDaysInMonth(t),o=window.document.createDocumentFragment(),r=g.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",c=r?"nextMonthDay hidden":"nextMonthDay",s=a+1-n,u=0;s<=a;s++,u++)o.appendChild(j(l,new Date(e,t-1,s),s,u));for(s=1;s<=i;s++,u++)o.appendChild(j("",new Date(e,t,s),s,u));for(var f=i+1;f<=42-n&&(1===g.config.showMonths||u%7!=0);f++,u++)o.appendChild(j(c,new Date(e,t+1,f%i),f,u));var m=d("div","dayContainer");return m.appendChild(o),m}function B(){if(void 0!==g.daysContainer){s(g.daysContainer),g.weekNumbers&&s(g.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<g.config.showMonths;t++){var n=new Date(g.currentYear,g.currentMonth,1);n.setMonth(g.currentMonth+t),e.appendChild(R(n.getFullYear(),n.getMonth()))}g.daysContainer.appendChild(e),g.days=g.daysContainer.firstChild,"range"===g.config.mode&&1===g.selectedDates.length&&ee()}}function K(){var e=d("div","flatpickr-month"),t=window.document.createDocumentFragment(),n=d("span","cur-month"),a=u("cur-year",{tabindex:"-1"}),i=a.getElementsByTagName("input")[0];i.setAttribute("aria-label",g.l10n.yearAriaLabel),g.config.minDate&&i.setAttribute("min",g.config.minDate.getFullYear().toString()),g.config.maxDate&&(i.setAttribute("max",g.config.maxDate.getFullYear().toString()),i.disabled=!!g.config.minDate&&g.config.minDate.getFullYear()===g.config.maxDate.getFullYear());var o=d("div","flatpickr-current-month");return o.appendChild(n),o.appendChild(a),t.appendChild(o),e.appendChild(t),{container:e,yearElement:i,monthElement:n}}function J(){s(g.monthNav),g.monthNav.appendChild(g.prevMonthNav),g.config.showMonths&&(g.yearElements=[],g.monthElements=[]);for(var e=g.config.showMonths;e--;){var t=K();g.yearElements.push(t.yearElement),g.monthElements.push(t.monthElement),g.monthNav.appendChild(t.container)}g.monthNav.appendChild(g.nextMonthNav)}function U(){g.weekdayContainer?s(g.weekdayContainer):g.weekdayContainer=d("div","flatpickr-weekdays");for(var e=g.config.showMonths;e--;){var t=d("div","flatpickr-weekdaycontainer");g.weekdayContainer.appendChild(t)}return q(),g.weekdayContainer}function q(){var e=g.l10n.firstDayOfWeek,t=g.l10n.weekdays.shorthand.slice();e>0&&e<t.length&&(t=t.splice(e,t.length).concat(t.splice(0,e)));for(var n=g.config.showMonths;n--;)g.weekdayContainer.children[n].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+t.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}function $(e,t){void 0===t&&(t=!0);var n=t?e:e-g.currentMonth;n<0&&!0===g._hidePrevMonthArrow||n>0&&!0===g._hideNextMonthArrow||(g.currentMonth+=n,(g.currentMonth<0||g.currentMonth>11)&&(g.currentYear+=g.currentMonth>11?1:-1,g.currentMonth=(g.currentMonth+12)%12,fe("onYearChange")),B(),fe("onMonthChange"),pe())}function z(e){return!(!g.config.appendTo||!g.config.appendTo.contains(e))||g.calendarContainer.contains(e)}function G(e){if(g.isOpen&&!g.config.inline){var t="function"==typeof(r=e).composedPath?r.composedPath()[0]:r.target,n=z(t),a=t===g.input||t===g.altInput||g.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(g.input)||~e.path.indexOf(g.altInput)),i="blur"===e.type?a&&e.relatedTarget&&!z(e.relatedTarget):!a&&!n&&!z(e.relatedTarget),o=!g.config.ignoredFocusElements.some(function(e){return e.contains(t)});i&&o&&(g.close(),"range"===g.config.mode&&1===g.selectedDates.length&&(g.clear(!1),g.redraw()))}var r}function V(e){if(!(!e||g.config.minDate&&e<g.config.minDate.getFullYear()||g.config.maxDate&&e>g.config.maxDate.getFullYear())){var t=e,n=g.currentYear!==t;g.currentYear=t||g.currentYear,g.config.maxDate&&g.currentYear===g.config.maxDate.getFullYear()?g.currentMonth=Math.min(g.config.maxDate.getMonth(),g.currentMonth):g.config.minDate&&g.currentYear===g.config.minDate.getFullYear()&&(g.currentMonth=Math.max(g.config.minDate.getMonth(),g.currentMonth)),n&&(g.redraw(),fe("onYearChange"))}}function Z(e,t){void 0===t&&(t=!0);var n=g.parseDate(e,void 0,t);if(g.config.minDate&&n&&w(n,g.config.minDate,void 0!==t?t:!g.minDateHasTime)<0||g.config.maxDate&&n&&w(n,g.config.maxDate,void 0!==t?t:!g.maxDateHasTime)>0)return!1;if(0===g.config.enable.length&&0===g.config.disable.length)return!0;if(void 0===n)return!1;for(var a=g.config.enable.length>0,i=a?g.config.enable:g.config.disable,o=0,r=void 0;o<i.length;o++){if("function"==typeof(r=i[o])&&r(n))return a;if(r instanceof Date&&void 0!==n&&r.getTime()===n.getTime())return a;if("string"==typeof r&&void 0!==n){var l=g.parseDate(r,void 0,!0);return l&&l.getTime()===n.getTime()?a:!a}if("object"==typeof r&&void 0!==n&&r.from&&r.to&&n.getTime()>=r.from.getTime()&&n.getTime()<=r.to.getTime())return a}return!a}function Q(e){return void 0!==g.daysContainer&&(-1===e.className.indexOf("hidden")&&g.daysContainer.contains(e))}function X(e){var t=e.target===g._input,n=g.config.allowInput,a=g.isOpen&&(!n||!t),i=g.config.inline&&t&&!n;if(13===e.keyCode&&t){if(n)return g.setDate(g._input.value,!0,e.target===g.altInput?g.config.altFormat:g.config.dateFormat),e.target.blur();g.open()}else if(z(e.target)||a||i){var o=!!g.timeContainer&&g.timeContainer.contains(e.target);switch(e.keyCode){case 13:o?(x(),le()):ce(e);break;case 27:e.preventDefault(),le();break;case 8:case 46:t&&!g.config.allowInput&&(e.preventDefault(),g.clear());break;case 37:case 39:if(o)g.hourElement&&g.hourElement.focus();else if(e.preventDefault(),void 0!==g.daysContainer&&(!1===n||document.activeElement&&Q(document.activeElement))){var r=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),$(r),W(L(1),0)):W(void 0,r)}break;case 38:case 40:e.preventDefault();var l=40===e.keyCode?1:-1;g.daysContainer&&void 0!==e.target.$i||e.target===g.input?e.ctrlKey?(e.stopPropagation(),V(g.currentYear-l),W(L(1),0)):o||W(void 0,7*l):g.config.enableTime&&(!o&&g.hourElement&&g.hourElement.focus(),x(e),g._debouncedChange());break;case 9:if(o){var c=[g.hourElement,g.minuteElement,g.secondElement,g.amPM].filter(function(e){return e}),d=c.indexOf(e.target);if(-1!==d){var s=c[d+(e.shiftKey?-1:1)];void 0!==s?(e.preventDefault(),s.focus()):e.shiftKey&&(e.preventDefault(),g._input.focus())}}}}if(void 0!==g.amPM&&e.target===g.amPM)switch(e.key){case g.l10n.amPM[0].charAt(0):case g.l10n.amPM[0].charAt(0).toLowerCase():g.amPM.textContent=g.l10n.amPM[0],T(),ve();break;case g.l10n.amPM[1].charAt(0):case g.l10n.amPM[1].charAt(0).toLowerCase():g.amPM.textContent=g.l10n.amPM[1],T(),ve()}fe("onKeyDown",e)}function ee(e){if(1===g.selectedDates.length&&(!e||e.classList.contains("flatpickr-day")&&!e.classList.contains("disabled"))){for(var t=e?e.dateObj.getTime():g.days.firstElementChild.dateObj.getTime(),n=g.parseDate(g.selectedDates[0],void 0,!0).getTime(),a=Math.min(t,g.selectedDates[0].getTime()),i=Math.max(t,g.selectedDates[0].getTime()),o=g.daysContainer.lastChild.lastChild.dateObj.getTime(),r=!1,l=0,c=0,d=a;d<o;d+=y.DAY)Z(new Date(d),!0)||(r=r||d>a&&d<i,d<n&&(!l||d>l)?l=d:d>n&&(!c||d<c)&&(c=d));for(var s=0;s<g.config.showMonths;s++)for(var u=g.daysContainer.children[s],f=g.daysContainer.children[s-1],m=function(a,i){var o=u.children[a],d=o.dateObj.getTime(),m=l>0&&d<l||c>0&&d>c;return m?(o.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(e){o.classList.remove(e)}),"continue"):r&&!m?"continue":(["startRange","inRange","endRange","notAllowed"].forEach(function(e){o.classList.remove(e)}),void(void 0!==e&&(e.classList.add(t<g.selectedDates[0].getTime()?"startRange":"endRange"),!u.contains(e)&&s>0&&f&&f.lastChild.dateObj.getTime()>=d||(n<t&&d===n?o.classList.add("startRange"):n>t&&d===n&&o.classList.add("endRange"),d>=l&&(0===c||d<=c)&&b(d,n,t)&&o.classList.add("inRange")))))},p=0,h=u.children.length;p<h;p++)m(p)}}function te(){!g.isOpen||g.config.static||g.config.inline||oe()}function ne(){g.setDate(void 0!==g.config.minDate?new Date(g.config.minDate.getTime()):new Date,!1),I(),ve()}function ae(e){return function(t){var n=g.config["_"+e+"Date"]=g.parseDate(t,g.config.dateFormat),a=g.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(g["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),g.selectedDates&&(g.selectedDates=g.selectedDates.filter(function(e){return Z(e)}),g.selectedDates.length||"min"!==e||k(n),ve()),g.daysContainer&&(re(),void 0!==n?g.currentYearElement[e]=n.getFullYear().toString():g.currentYearElement.removeAttribute(e),g.currentYearElement.disabled=!!a&&void 0!==n&&a.getFullYear()===n.getFullYear())}}function ie(){"object"!=typeof g.config.locale&&void 0===E.l10ns[g.config.locale]&&g.config.errorHandler(new Error("flatpickr: invalid locale "+g.config.locale)),g.l10n=e({},E.l10ns.default,"object"==typeof g.config.locale?g.config.locale:"default"!==g.config.locale?E.l10ns[g.config.locale]:void 0),p.K="("+g.l10n.amPM[0]+"|"+g.l10n.amPM[1]+"|"+g.l10n.amPM[0].toLowerCase()+"|"+g.l10n.amPM[1].toLowerCase()+")",g.formatDate=v(g),g.parseDate=D({config:g.config,l10n:g.l10n})}function oe(e){if(void 0!==g.calendarContainer){fe("onPreCalendarPosition");var t=e||g._positionElement,n=Array.prototype.reduce.call(g.calendarContainer.children,function(e,t){return e+t.offsetHeight},0),a=g.calendarContainer.offsetWidth,i=g.config.position.split(" "),o=i[0],r=i.length>1?i[1]:null,l=t.getBoundingClientRect(),d=window.innerHeight-l.bottom,s="above"===o||"below"!==o&&d<n&&l.top>n,u=window.pageYOffset+l.top+(s?-n-2:t.offsetHeight+2);if(c(g.calendarContainer,"arrowTop",!s),c(g.calendarContainer,"arrowBottom",s),!g.config.inline){var f=window.pageXOffset+l.left-(null!=r&&"center"===r?(a-l.width)/2:0),m=window.document.body.offsetWidth-l.right,p=f+a>window.document.body.offsetWidth,h=m+a>window.document.body.offsetWidth;if(c(g.calendarContainer,"rightMost",p),!g.config.static)if(g.calendarContainer.style.top=u+"px",p)if(h){var v=document.styleSheets[0];if(void 0===v)return;var D=window.document.body.offsetWidth,w=Math.max(0,D/2-a/2),b=v.cssRules.length,y="{left:"+l.left+"px;right:auto;}";c(g.calendarContainer,"rightMost",!1),c(g.calendarContainer,"centerMost",!0),v.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+y,b),g.calendarContainer.style.left=w+"px",g.calendarContainer.style.right="auto"}else g.calendarContainer.style.left="auto",g.calendarContainer.style.right=m+"px";else g.calendarContainer.style.left=f+"px",g.calendarContainer.style.right="auto"}}}function re(){g.config.noCalendar||g.isMobile||(pe(),B())}function le(){g._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(g.close,0):g.close()}function ce(e){e.preventDefault(),e.stopPropagation();var t=function e(t,n){return n(t)?t:t.parentNode?e(t.parentNode,n):void 0}(e.target,function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("disabled")&&!e.classList.contains("notAllowed")});if(void 0!==t){var n=t,a=g.latestSelectedDateObj=new Date(n.dateObj.getTime()),i=(a.getMonth()<g.currentMonth||a.getMonth()>g.currentMonth+g.config.showMonths-1)&&"range"!==g.config.mode;if(g.selectedDateElem=n,"single"===g.config.mode)g.selectedDates=[a];else if("multiple"===g.config.mode){var o=ge(a);o?g.selectedDates.splice(parseInt(o),1):g.selectedDates.push(a)}else"range"===g.config.mode&&(2===g.selectedDates.length&&g.clear(!1,!1),g.latestSelectedDateObj=a,g.selectedDates.push(a),0!==w(a,g.selectedDates[0],!0)&&g.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()}));if(T(),i){var r=g.currentYear!==a.getFullYear();g.currentYear=a.getFullYear(),g.currentMonth=a.getMonth(),r&&fe("onYearChange"),fe("onMonthChange")}if(pe(),B(),ve(),g.config.enableTime&&setTimeout(function(){return g.showTimeInput=!0},50),i||"range"===g.config.mode||1!==g.config.showMonths?void 0!==g.selectedDateElem&&void 0===g.hourElement&&g.selectedDateElem&&g.selectedDateElem.focus():H(n),void 0!==g.hourElement&&void 0!==g.hourElement&&g.hourElement.focus(),g.config.closeOnSelect){var l="single"===g.config.mode&&!g.config.enableTime,c="range"===g.config.mode&&2===g.selectedDates.length&&!g.config.enableTime;(l||c)&&le()}F()}}g.parseDate=D({config:g.config,l10n:g.l10n}),g._handlers=[],g._bind=_,g._setHoursFromDate=k,g._positionCalendar=oe,g.changeMonth=$,g.changeYear=V,g.clear=function(e,t){void 0===e&&(e=!0);void 0===t&&(t=!0);g.input.value="",void 0!==g.altInput&&(g.altInput.value="");void 0!==g.mobileInput&&(g.mobileInput.value="");g.selectedDates=[],g.latestSelectedDateObj=void 0,!0===t&&(g.currentYear=g._initialDate.getFullYear(),g.currentMonth=g._initialDate.getMonth());g.showTimeInput=!1,!0===g.config.enableTime&&I();g.redraw(),e&&fe("onChange")},g.close=function(){g.isOpen=!1,g.isMobile||(void 0!==g.calendarContainer&&g.calendarContainer.classList.remove("open"),void 0!==g._input&&g._input.classList.remove("active"));fe("onClose")},g._createElement=d,g.destroy=function(){void 0!==g.config&&fe("onDestroy");for(var e=g._handlers.length;e--;){var t=g._handlers[e];t.element.removeEventListener(t.event,t.handler,t.options)}if(g._handlers=[],g.mobileInput)g.mobileInput.parentNode&&g.mobileInput.parentNode.removeChild(g.mobileInput),g.mobileInput=void 0;else if(g.calendarContainer&&g.calendarContainer.parentNode)if(g.config.static&&g.calendarContainer.parentNode){var n=g.calendarContainer.parentNode;if(n.lastChild&&n.removeChild(n.lastChild),n.parentNode){for(;n.firstChild;)n.parentNode.insertBefore(n.firstChild,n);n.parentNode.removeChild(n)}}else g.calendarContainer.parentNode.removeChild(g.calendarContainer);g.altInput&&(g.input.type="text",g.altInput.parentNode&&g.altInput.parentNode.removeChild(g.altInput),delete g.altInput);g.input&&(g.input.type=g.input._type,g.input.classList.remove("flatpickr-input"),g.input.removeAttribute("readonly"),g.input.value="");["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(e){try{delete g[e]}catch(e){}})},g.isEnabled=Z,g.jumpToDate=P,g.open=function(e,t){void 0===t&&(t=g._positionElement);if(!0===g.isMobile)return e&&(e.preventDefault(),e.target&&e.target.blur()),void 0!==g.mobileInput&&(g.mobileInput.focus(),g.mobileInput.click()),void fe("onOpen");if(g._input.disabled||g.config.inline)return;var n=g.isOpen;g.isOpen=!0,n||(g.calendarContainer.classList.add("open"),g._input.classList.add("active"),fe("onOpen"),oe(t));!0===g.config.enableTime&&!0===g.config.noCalendar&&(0===g.selectedDates.length&&ne(),!1!==g.config.allowInput||void 0!==e&&g.timeContainer.contains(e.relatedTarget)||setTimeout(function(){return g.hourElement.select()},50))},g.redraw=re,g.set=function(e,n){null!==e&&"object"==typeof e?Object.assign(g.config,e):(g.config[e]=n,void 0!==de[e]?de[e].forEach(function(e){return e()}):t.indexOf(e)>-1&&(g.config[e]=l(n)));g.redraw(),ve(!1)},g.setDate=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=g.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return g.clear(t);se(e,n),g.showTimeInput=g.selectedDates.length>0,g.latestSelectedDateObj=g.selectedDates[0],g.redraw(),P(),k(),ve(t),t&&fe("onChange")},g.toggle=function(e){if(!0===g.isOpen)return g.close();g.open(e)};var de={locale:[ie,q],showMonths:[J,M,U]};function se(e,t){var n=[];if(e instanceof Array)n=e.map(function(e){return g.parseDate(e,t)});else if(e instanceof Date||"number"==typeof e)n=[g.parseDate(e,t)];else if("string"==typeof e)switch(g.config.mode){case"single":case"time":n=[g.parseDate(e,t)];break;case"multiple":n=e.split(g.config.conjunction).map(function(e){return g.parseDate(e,t)});break;case"range":n=e.split(g.l10n.rangeSeparator).map(function(e){return g.parseDate(e,t)})}else g.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));g.selectedDates=n.filter(function(e){return e instanceof Date&&Z(e,!1)}),"range"===g.config.mode&&g.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()})}function ue(e){return e.slice().map(function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?g.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:g.parseDate(e.from,void 0),to:g.parseDate(e.to,void 0)}:e}).filter(function(e){return e})}function fe(e,t){if(void 0!==g.config){var n=g.config[e];if(void 0!==n&&n.length>0)for(var a=0;n[a]&&a<n.length;a++)n[a](g.selectedDates,g.input.value,g,t);"onChange"===e&&(g.input.dispatchEvent(me("change")),g.input.dispatchEvent(me("input")))}}function me(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function ge(e){for(var t=0;t<g.selectedDates.length;t++)if(0===w(g.selectedDates[t],e))return""+t;return!1}function pe(){g.config.noCalendar||g.isMobile||!g.monthNav||(g.yearElements.forEach(function(e,t){var n=new Date(g.currentYear,g.currentMonth,1);n.setMonth(g.currentMonth+t),g.monthElements[t].textContent=m(n.getMonth(),g.config.shorthandCurrentMonth,g.l10n)+" ",e.value=n.getFullYear().toString()}),g._hidePrevMonthArrow=void 0!==g.config.minDate&&(g.currentYear===g.config.minDate.getFullYear()?g.currentMonth<=g.config.minDate.getMonth():g.currentYear<g.config.minDate.getFullYear()),g._hideNextMonthArrow=void 0!==g.config.maxDate&&(g.currentYear===g.config.maxDate.getFullYear()?g.currentMonth+1>g.config.maxDate.getMonth():g.currentYear>g.config.maxDate.getFullYear()))}function he(e){return g.selectedDates.map(function(t){return g.formatDate(t,e)}).filter(function(e,t,n){return"range"!==g.config.mode||g.config.enableTime||n.indexOf(e)===t}).join("range"!==g.config.mode?g.config.conjunction:g.l10n.rangeSeparator)}function ve(e){if(void 0===e&&(e=!0),0===g.selectedDates.length)return g.clear(e);void 0!==g.mobileInput&&g.mobileFormatStr&&(g.mobileInput.value=void 0!==g.latestSelectedDateObj?g.formatDate(g.latestSelectedDateObj,g.mobileFormatStr):""),g.input.value=he(g.config.dateFormat),void 0!==g.altInput&&(g.altInput.value=he(g.config.altFormat)),!1!==e&&fe("onValueUpdate")}function De(e){e.preventDefault();var t=g.prevMonthNav.contains(e.target),n=g.nextMonthNav.contains(e.target);t||n?$(t?-1:1):g.yearElements.indexOf(e.target)>=0?e.target.select():e.target.classList.contains("arrowUp")?g.changeYear(g.currentYear+1):e.target.classList.contains("arrowDown")&&g.changeYear(g.currentYear-1)}return function(){g.element=g.input=n,g.isOpen=!1,function(){var a=["wrap","weekNumbers","allowInput","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=e({},f,JSON.parse(JSON.stringify(n.dataset||{}))),o={};g.config.parseDate=i.parseDate,g.config.formatDate=i.formatDate,Object.defineProperty(g.config,"enable",{get:function(){return g.config._enable},set:function(e){g.config._enable=ue(e)}}),Object.defineProperty(g.config,"disable",{get:function(){return g.config._disable},set:function(e){g.config._disable=ue(e)}});var r="time"===i.mode;i.dateFormat||!i.enableTime&&!r||(o.dateFormat=i.noCalendar||r?"H:i"+(i.enableSeconds?":S":""):E.defaultConfig.dateFormat+" H:i"+(i.enableSeconds?":S":"")),i.altInput&&(i.enableTime||r)&&!i.altFormat&&(o.altFormat=i.noCalendar||r?"h:i"+(i.enableSeconds?":S K":" K"):E.defaultConfig.altFormat+" h:i"+(i.enableSeconds?":S":"")+" K"),Object.defineProperty(g.config,"minDate",{get:function(){return g.config._minDate},set:ae("min")}),Object.defineProperty(g.config,"maxDate",{get:function(){return g.config._maxDate},set:ae("max")});var c=function(e){return function(t){g.config["min"===e?"_minTime":"_maxTime"]=g.parseDate(t,"H:i")}};Object.defineProperty(g.config,"minTime",{get:function(){return g.config._minTime},set:c("min")}),Object.defineProperty(g.config,"maxTime",{get:function(){return g.config._maxTime},set:c("max")}),"time"===i.mode&&(g.config.noCalendar=!0,g.config.enableTime=!0),Object.assign(g.config,o,i);for(var d=0;d<a.length;d++)g.config[a[d]]=!0===g.config[a[d]]||"true"===g.config[a[d]];t.filter(function(e){return void 0!==g.config[e]}).forEach(function(e){g.config[e]=l(g.config[e]||[]).map(h)}),g.isMobile=!g.config.disableMobile&&!g.config.inline&&"single"===g.config.mode&&!g.config.disable.length&&!g.config.enable.length&&!g.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var d=0;d<g.config.plugins.length;d++){var s=g.config.plugins[d](g)||{};for(var u in s)t.indexOf(u)>-1?g.config[u]=l(s[u]).map(h).concat(g.config[u]):void 0===i[u]&&(g.config[u]=s[u])}fe("onParseConfig")}(),ie(),g.input=g.config.wrap?n.querySelector("[data-input]"):n,g.input?(g.input._type=g.input.type,g.input.type="text",g.input.classList.add("flatpickr-input"),g._input=g.input,g.config.altInput&&(g.altInput=d(g.input.nodeName,g.input.className+" "+g.config.altInputClass),g._input=g.altInput,g.altInput.placeholder=g.input.placeholder,g.altInput.disabled=g.input.disabled,g.altInput.required=g.input.required,g.altInput.tabIndex=g.input.tabIndex,g.altInput.type="text",g.input.setAttribute("type","hidden"),!g.config.static&&g.input.parentNode&&g.input.parentNode.insertBefore(g.altInput,g.input.nextSibling)),g.config.allowInput||g._input.setAttribute("readonly","readonly"),g._positionElement=g.config.positionElement||g._input):g.config.errorHandler(new Error("Invalid input element specified")),function(){g.selectedDates=[],g.now=g.parseDate(g.config.now)||new Date;var e=g.config.defaultDate||("INPUT"!==g.input.nodeName&&"TEXTAREA"!==g.input.nodeName||!g.input.placeholder||g.input.value!==g.input.placeholder?g.input.value:null);e&&se(e,g.config.dateFormat),g._initialDate=g.selectedDates.length>0?g.selectedDates[0]:g.config.minDate&&g.config.minDate.getTime()>g.now.getTime()?g.config.minDate:g.config.maxDate&&g.config.maxDate.getTime()<g.now.getTime()?g.config.maxDate:g.now,g.currentYear=g._initialDate.getFullYear(),g.currentMonth=g._initialDate.getMonth(),g.selectedDates.length>0&&(g.latestSelectedDateObj=g.selectedDates[0]),void 0!==g.config.minTime&&(g.config.minTime=g.parseDate(g.config.minTime,"H:i")),void 0!==g.config.maxTime&&(g.config.maxTime=g.parseDate(g.config.maxTime,"H:i")),g.minDateHasTime=!!g.config.minDate&&(g.config.minDate.getHours()>0||g.config.minDate.getMinutes()>0||g.config.minDate.getSeconds()>0),g.maxDateHasTime=!!g.config.maxDate&&(g.config.maxDate.getHours()>0||g.config.maxDate.getMinutes()>0||g.config.maxDate.getSeconds()>0),Object.defineProperty(g,"showTimeInput",{get:function(){return g._showTimeInput},set:function(e){g._showTimeInput=e,g.calendarContainer&&c(g.calendarContainer,"showTimeInput",e),g.isOpen&&oe()}})}(),g.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=g.currentMonth),void 0===t&&(t=g.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:g.l10n.daysInMonth[e]}},g.isMobile||function(){var e=window.document.createDocumentFragment();if(g.calendarContainer=d("div","flatpickr-calendar"),g.calendarContainer.tabIndex=-1,!g.config.noCalendar){if(e.appendChild((g.monthNav=d("div","flatpickr-months"),g.yearElements=[],g.monthElements=[],g.prevMonthNav=d("span","flatpickr-prev-month"),g.prevMonthNav.innerHTML=g.config.prevArrow,g.nextMonthNav=d("span","flatpickr-next-month"),g.nextMonthNav.innerHTML=g.config.nextArrow,J(),Object.defineProperty(g,"_hidePrevMonthArrow",{get:function(){return g.__hidePrevMonthArrow},set:function(e){g.__hidePrevMonthArrow!==e&&(c(g.prevMonthNav,"disabled",e),g.__hidePrevMonthArrow=e)}}),Object.defineProperty(g,"_hideNextMonthArrow",{get:function(){return g.__hideNextMonthArrow},set:function(e){g.__hideNextMonthArrow!==e&&(c(g.nextMonthNav,"disabled",e),g.__hideNextMonthArrow=e)}}),g.currentYearElement=g.yearElements[0],pe(),g.monthNav)),g.innerContainer=d("div","flatpickr-innerContainer"),g.config.weekNumbers){var t=function(){g.calendarContainer.classList.add("hasWeeks");var e=d("div","flatpickr-weekwrapper");e.appendChild(d("span","flatpickr-weekday",g.l10n.weekAbbreviation));var t=d("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,a=t.weekNumbers;g.innerContainer.appendChild(n),g.weekNumbers=a,g.weekWrapper=n}g.rContainer=d("div","flatpickr-rContainer"),g.rContainer.appendChild(U()),g.daysContainer||(g.daysContainer=d("div","flatpickr-days"),g.daysContainer.tabIndex=-1),B(),g.rContainer.appendChild(g.daysContainer),g.innerContainer.appendChild(g.rContainer),e.appendChild(g.innerContainer)}g.config.enableTime&&e.appendChild(function(){g.calendarContainer.classList.add("hasTime"),g.config.noCalendar&&g.calendarContainer.classList.add("noCalendar"),g.timeContainer=d("div","flatpickr-time"),g.timeContainer.tabIndex=-1;var e=d("span","flatpickr-time-separator",":"),t=u("flatpickr-hour");g.hourElement=t.getElementsByTagName("input")[0];var n=u("flatpickr-minute");if(g.minuteElement=n.getElementsByTagName("input")[0],g.hourElement.tabIndex=g.minuteElement.tabIndex=-1,g.hourElement.value=i(g.latestSelectedDateObj?g.latestSelectedDateObj.getHours():g.config.time_24hr?g.config.defaultHour:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(g.config.defaultHour)),g.minuteElement.value=i(g.latestSelectedDateObj?g.latestSelectedDateObj.getMinutes():g.config.defaultMinute),g.hourElement.setAttribute("step",g.config.hourIncrement.toString()),g.minuteElement.setAttribute("step",g.config.minuteIncrement.toString()),g.hourElement.setAttribute("min",g.config.time_24hr?"0":"1"),g.hourElement.setAttribute("max",g.config.time_24hr?"23":"12"),g.minuteElement.setAttribute("min","0"),g.minuteElement.setAttribute("max","59"),g.timeContainer.appendChild(t),g.timeContainer.appendChild(e),g.timeContainer.appendChild(n),g.config.time_24hr&&g.timeContainer.classList.add("time24hr"),g.config.enableSeconds){g.timeContainer.classList.add("hasSeconds");var a=u("flatpickr-second");g.secondElement=a.getElementsByTagName("input")[0],g.secondElement.value=i(g.latestSelectedDateObj?g.latestSelectedDateObj.getSeconds():g.config.defaultSeconds),g.secondElement.setAttribute("step",g.minuteElement.getAttribute("step")),g.secondElement.setAttribute("min","0"),g.secondElement.setAttribute("max","59"),g.timeContainer.appendChild(d("span","flatpickr-time-separator",":")),g.timeContainer.appendChild(a)}return g.config.time_24hr||(g.amPM=d("span","flatpickr-am-pm",g.l10n.amPM[o((g.latestSelectedDateObj?g.hourElement.value:g.config.defaultHour)>11)]),g.amPM.title=g.l10n.toggleTitle,g.amPM.tabIndex=-1,g.timeContainer.appendChild(g.amPM)),g.timeContainer}()),c(g.calendarContainer,"rangeMode","range"===g.config.mode),c(g.calendarContainer,"animate",!0===g.config.animate),c(g.calendarContainer,"multiMonth",g.config.showMonths>1),g.calendarContainer.appendChild(e);var r=void 0!==g.config.appendTo&&void 0!==g.config.appendTo.nodeType;if((g.config.inline||g.config.static)&&(g.calendarContainer.classList.add(g.config.inline?"inline":"static"),g.config.inline&&(!r&&g.element.parentNode?g.element.parentNode.insertBefore(g.calendarContainer,g._input.nextSibling):void 0!==g.config.appendTo&&g.config.appendTo.appendChild(g.calendarContainer)),g.config.static)){var l=d("div","flatpickr-wrapper");g.element.parentNode&&g.element.parentNode.insertBefore(l,g.element),l.appendChild(g.element),g.altInput&&l.appendChild(g.altInput),l.appendChild(g.calendarContainer)}g.config.static||g.config.inline||(void 0!==g.config.appendTo?g.config.appendTo:window.document.body).appendChild(g.calendarContainer)}(),function(){if(g.config.wrap&&["open","close","toggle","clear"].forEach(function(e){Array.prototype.forEach.call(g.element.querySelectorAll("[data-"+e+"]"),function(t){return _(t,"click",g[e])})}),g.isMobile)!function(){var e=g.config.enableTime?g.config.noCalendar?"time":"datetime-local":"date";g.mobileInput=d("input",g.input.className+" flatpickr-mobile"),g.mobileInput.step=g.input.getAttribute("step")||"any",g.mobileInput.tabIndex=1,g.mobileInput.type=e,g.mobileInput.disabled=g.input.disabled,g.mobileInput.required=g.input.required,g.mobileInput.placeholder=g.input.placeholder,g.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",g.selectedDates.length>0&&(g.mobileInput.defaultValue=g.mobileInput.value=g.formatDate(g.selectedDates[0],g.mobileFormatStr)),g.config.minDate&&(g.mobileInput.min=g.formatDate(g.config.minDate,"Y-m-d")),g.config.maxDate&&(g.mobileInput.max=g.formatDate(g.config.maxDate,"Y-m-d")),g.input.type="hidden",void 0!==g.altInput&&(g.altInput.type="hidden");try{g.input.parentNode&&g.input.parentNode.insertBefore(g.mobileInput,g.input.nextSibling)}catch(e){}_(g.mobileInput,"change",function(e){g.setDate(e.target.value,!1,g.mobileFormatStr),fe("onChange"),fe("onClose")})}();else{var e=r(te,50);g._debouncedChange=r(F,C),g.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&_(g.daysContainer,"mouseover",function(e){"range"===g.config.mode&&ee(e.target)}),_(window.document.body,"keydown",X),g.config.static||_(g._input,"keydown",X),g.config.inline||g.config.static||_(window,"resize",e),void 0!==window.ontouchstart?_(window.document,"click",G):_(window.document,"mousedown",N(G)),_(window.document,"focus",G,{capture:!0}),!0===g.config.clickOpens&&(_(g._input,"focus",g.open),_(g._input,"mousedown",N(g.open))),void 0!==g.daysContainer&&(_(g.monthNav,"mousedown",N(De)),_(g.monthNav,["keyup","increment"],S),_(g.daysContainer,"mousedown",N(ce))),void 0!==g.timeContainer&&void 0!==g.minuteElement&&void 0!==g.hourElement&&(_(g.timeContainer,["increment"],x),_(g.timeContainer,"blur",x,{capture:!0}),_(g.timeContainer,"mousedown",N(A)),_([g.hourElement,g.minuteElement],["focus","click"],function(e){return e.target.select()}),void 0!==g.secondElement&&_(g.secondElement,"focus",function(){return g.secondElement&&g.secondElement.select()}),void 0!==g.amPM&&_(g.amPM,"mousedown",N(function(e){x(e),F()})))}}(),(g.selectedDates.length||g.config.noCalendar)&&(g.config.enableTime&&k(g.config.noCalendar?g.latestSelectedDateObj||g.config.minDate:void 0),ve(!1)),M(),g.showTimeInput=g.selectedDates.length>0||g.config.noCalendar;var a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!g.isMobile&&a&&oe(),fe("onReady")}(),g}function x(e,t){for(var n=Array.prototype.slice.call(e).filter(function(e){return e instanceof HTMLElement}),a=[],i=0;i<n.length;i++){var o=n[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=M(o,t||{}),a.push(o._flatpickr)}catch(e){console.error(e)}}return 1===a.length?a[0]:a}"undefined"!=typeof HTMLElement&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return x(this,e)},HTMLElement.prototype.flatpickr=function(e){return x([this],e)});var E=function(e,t){return"string"==typeof e?x(window.document.querySelectorAll(e),t):e instanceof Node?x([e],t):x(e,t)};return E.defaultConfig=n,E.l10ns={en:e({},a),default:e({},a)},E.localize=function(t){E.l10ns.default=e({},E.l10ns.default,t)},E.setDefaults=function(t){E.defaultConfig=e({},E.defaultConfig,t)},E.parseDate=D({}),E.formatDate=v({}),E.compareDates=w,"undefined"!=typeof jQuery&&(jQuery.fn.flatpickr=function(e){return x(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=E),E});
// Ion.RangeSlider, 2.3.0, © Denis Ineshin, 2010 - 2018, IonDen.com, Build date: 2018-12-12 00:00:37
!function(i){!jQuery&&"function"==typeof define&&define.amd?define(["jquery"],function(t){return i(t,document,window,navigator)}):jQuery||"object"!=typeof exports?i(jQuery,document,window,navigator):i(require("jquery"),document,window,navigator)}(function(a,c,l,t,_){"use strict";var i,s,o=0,e=(i=t.userAgent,s=/msie\s\d+/i,0<i.search(s)&&s.exec(i).toString().split(" ")[1]<9&&(a("html").addClass("lt-ie9"),!0));Function.prototype.bind||(Function.prototype.bind=function(o){var e=this,h=[].slice;if("function"!=typeof e)throw new TypeError;var r=h.call(arguments,1),n=function(){if(this instanceof n){var t=function(){};t.prototype=e.prototype;var i=new t,s=e.apply(i,r.concat(h.call(arguments)));return Object(s)===s?s:i}return e.apply(o,r.concat(h.call(arguments)))};return n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,i){var s;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),e=o.length>>>0;if(0===e)return-1;var h=+i||0;if(Math.abs(h)===1/0&&(h=0),e<=h)return-1;for(s=Math.max(0<=h?h:e-Math.abs(h),0);s<e;){if(s in o&&o[s]===t)return s;s++}return-1});var h=function(t,i,s){this.VERSION="2.3.0",this.input=t,this.plugin_count=s,this.current_plugin=0,this.calc_count=0,this.update_tm=0,this.old_from=0,this.old_to=0,this.old_min_interval=null,this.raf_id=null,this.dragging=!1,this.force_redraw=!1,this.no_diapason=!1,this.has_tab_index=!0,this.is_key=!1,this.is_update=!1,this.is_start=!0,this.is_finish=!1,this.is_active=!1,this.is_resize=!1,this.is_click=!1,i=i||{},this.$cache={win:a(l),body:a(c.body),input:a(t),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,edge:null,grid:null,grid_labels:[]},this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single_fake:0,p_single_real:0,p_from_fake:0,p_from_real:0,p_to_fake:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]},this.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from_fake:0,p_from_left:0,p_to_fake:0,p_to_left:0,p_single_fake:0,p_single_left:0};var o,e,h,r=this.$cache.input,n=r.prop("value");for(h in o={skin:"flat",type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,force_edges:!1,keyboard:!0,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" — ",input_values_separator:";",disable:!1,block:!1,extra_classes:"",scope:null,onStart:null,onChange:null,onFinish:null,onUpdate:null},"INPUT"!==r[0].nodeName&&console&&console.warn&&console.warn("Base element should be <input>!",r[0]),(e={skin:r.data("skin"),type:r.data("type"),min:r.data("min"),max:r.data("max"),from:r.data("from"),to:r.data("to"),step:r.data("step"),min_interval:r.data("minInterval"),max_interval:r.data("maxInterval"),drag_interval:r.data("dragInterval"),values:r.data("values"),from_fixed:r.data("fromFixed"),from_min:r.data("fromMin"),from_max:r.data("fromMax"),from_shadow:r.data("fromShadow"),to_fixed:r.data("toFixed"),to_min:r.data("toMin"),to_max:r.data("toMax"),to_shadow:r.data("toShadow"),prettify_enabled:r.data("prettifyEnabled"),prettify_separator:r.data("prettifySeparator"),force_edges:r.data("forceEdges"),keyboard:r.data("keyboard"),grid:r.data("grid"),grid_margin:r.data("gridMargin"),grid_num:r.data("gridNum"),grid_snap:r.data("gridSnap"),hide_min_max:r.data("hideMinMax"),hide_from_to:r.data("hideFromTo"),prefix:r.data("prefix"),postfix:r.data("postfix"),max_postfix:r.data("maxPostfix"),decorate_both:r.data("decorateBoth"),values_separator:r.data("valuesSeparator"),input_values_separator:r.data("inputValuesSeparator"),disable:r.data("disable"),block:r.data("block"),extra_classes:r.data("extraClasses")}).values=e.values&&e.values.split(","),e)e.hasOwnProperty(h)&&(e[h]!==_&&""!==e[h]||delete e[h]);n!==_&&""!==n&&((n=n.split(e.input_values_separator||i.input_values_separator||";"))[0]&&n[0]==+n[0]&&(n[0]=+n[0]),n[1]&&n[1]==+n[1]&&(n[1]=+n[1]),i&&i.values&&i.values.length?(o.from=n[0]&&i.values.indexOf(n[0]),o.to=n[1]&&i.values.indexOf(n[1])):(o.from=n[0]&&+n[0],o.to=n[1]&&+n[1])),a.extend(o,i),a.extend(o,e),this.options=o,this.update_check={},this.validate(),this.result={input:this.$cache.input,slider:null,min:this.options.min,max:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null},this.init()};h.prototype={init:function(t){this.no_diapason=!1,this.coords.p_step=this.convertToPercent(this.options.step,!0),this.target="base",this.toggleInput(),this.append(),this.setMinMax(),t?(this.force_redraw=!0,this.calc(!0),this.callOnUpdate()):(this.force_redraw=!0,this.calc(!0),this.callOnStart()),this.updateScene()},append:function(){var t='<span class="irs irs--'+this.options.skin+" js-irs-"+this.plugin_count+" "+this.options.extra_classes+'"></span>';this.$cache.input.before(t),this.$cache.input.prop("readonly",!0),this.$cache.cont=this.$cache.input.prev(),this.result.slider=this.$cache.cont,this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'),this.$cache.rs=this.$cache.cont.find(".irs"),this.$cache.min=this.$cache.cont.find(".irs-min"),this.$cache.max=this.$cache.cont.find(".irs-max"),this.$cache.from=this.$cache.cont.find(".irs-from"),this.$cache.to=this.$cache.cont.find(".irs-to"),this.$cache.single=this.$cache.cont.find(".irs-single"),this.$cache.line=this.$cache.cont.find(".irs-line"),this.$cache.grid=this.$cache.cont.find(".irs-grid"),"single"===this.options.type?(this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.edge=this.$cache.cont.find(".irs-bar-edge"),this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.s_from=this.$cache.cont.find(".from"),this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to"),this.setTopHandler()),this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none"),this.appendGrid(),this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.input[0].disabled=!1,this.removeDisableMask(),this.bindEvents()),this.options.disable||(this.options.block?this.appendDisableMask():this.removeDisableMask()),this.options.drag_interval&&(this.$cache.bar[0].style.cursor="ew-resize")},setTopHandler:function(){var t=this.options.min,i=this.options.max,s=this.options.from,o=this.options.to;t<s&&o===i?this.$cache.s_from.addClass("type_last"):o<i&&this.$cache.s_to.addClass("type_last")},changeLevel:function(t){switch(t){case"single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single_fake),this.$cache.s_single.addClass("state_hover");break;case"from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.$cache.s_from.addClass("state_hover"),this.$cache.s_from.addClass("type_last"),this.$cache.s_to.removeClass("type_last");break;case"to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to_fake),this.$cache.s_to.addClass("state_hover"),this.$cache.s_to.addClass("type_last"),this.$cache.s_from.removeClass("type_last");break;case"both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.coords.p_gap_right=this.toFixed(this.coords.p_to_fake-this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}},appendDisableMask:function(){this.$cache.cont.append('<span class="irs-disable-mask"></span>'),this.$cache.cont.addClass("irs-disabled")},removeDisableMask:function(){this.$cache.cont.remove(".irs-disable-mask"),this.$cache.cont.removeClass("irs-disabled")},remove:function(){this.$cache.cont.remove(),this.$cache.cont=null,this.$cache.line.off("keydown.irs_"+this.plugin_count),this.$cache.body.off("touchmove.irs_"+this.plugin_count),this.$cache.body.off("mousemove.irs_"+this.plugin_count),this.$cache.win.off("touchend.irs_"+this.plugin_count),this.$cache.win.off("mouseup.irs_"+this.plugin_count),e&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count)),this.$cache.grid_labels=[],this.coords.big=[],this.coords.big_w=[],this.coords.big_p=[],this.coords.big_x=[],cancelAnimationFrame(this.raf_id)},bindEvents:function(){this.no_diapason||(this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.body.on("mousemove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.line.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("focus.irs_"+this.plugin_count,this.pointerFocus.bind(this)),this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),"single"===this.options.type?(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.edge.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),this.options.keyboard&&this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard")),e&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this))))},pointerFocus:function(t){var i,s;this.target||(i=(s="single"===this.options.type?this.$cache.single:this.$cache.from).offset().left,i+=s.width()/2-1,this.pointerClick("single",{preventDefault:function(){},pageX:i}))},pointerMove:function(t){if(this.dragging){var i=t.pageX||t.originalEvent.touches&&t.originalEvent.touches[0].pageX;this.coords.x_pointer=i-this.coords.x_gap,this.calc()}},pointerUp:function(t){this.current_plugin===this.plugin_count&&this.is_active&&(this.is_active=!1,this.$cache.cont.find(".state_hover").removeClass("state_hover"),this.force_redraw=!0,e&&a("*").prop("unselectable",!1),this.updateScene(),this.restoreOriginalMinInterval(),(a.contains(this.$cache.cont[0],t.target)||this.dragging)&&this.callOnFinish(),this.dragging=!1)},pointerDown:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&("both"===t&&this.setTempMinInterval(),t||(t=this.target||"from"),this.current_plugin=this.plugin_count,this.target=t,this.is_active=!0,this.dragging=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=s-this.coords.x_gap,this.calcPointerPercent(),this.changeLevel(t),e&&a("*").prop("unselectable",!0),this.$cache.line.trigger("focus"),this.updateScene())},pointerClick:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&(this.current_plugin=this.plugin_count,this.target=t,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(s-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(t,i){if(!(this.current_plugin!==this.plugin_count||i.altKey||i.ctrlKey||i.shiftKey||i.metaKey)){switch(i.which){case 83:case 65:case 40:case 37:i.preventDefault(),this.moveByKey(!1);break;case 87:case 68:case 38:case 39:i.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(t){var i=this.coords.p_pointer,s=(this.options.max-this.options.min)/100;s=this.options.step/s,t?i+=s:i-=s,this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*i),this.is_key=!0,this.calc()},setMinMax:function(){if(this.options){if(this.options.hide_min_max)return this.$cache.min[0].style.display="none",void(this.$cache.max[0].style.display="none");if(this.options.values.length)this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else{var t=this._prettify(this.options.min),i=this._prettify(this.options.max);this.result.min_pretty=t,this.result.max_pretty=i,this.$cache.min.html(this.decorate(t,this.options.min)),this.$cache.max.html(this.decorate(i,this.options.max))}this.labels.w_min=this.$cache.min.outerWidth(!1),this.labels.w_max=this.$cache.max.outerWidth(!1)}},setTempMinInterval:function(){var t=this.result.to-this.result.from;null===this.old_min_interval&&(this.old_min_interval=this.options.min_interval),this.options.min_interval=t},restoreOriginalMinInterval:function(){null!==this.old_min_interval&&(this.options.min_interval=this.old_min_interval,this.old_min_interval=null)},calc:function(t){if(this.options&&(this.calc_count++,(10===this.calc_count||t)&&(this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.calcHandlePercent()),this.coords.w_rs)){this.calcPointerPercent();var i=this.getHandleX();switch("both"===this.target&&(this.coords.p_gap=0,i=this.getHandleX()),"click"===this.target&&(this.coords.p_gap=this.coords.p_handle/2,i=this.getHandleX(),this.options.drag_interval?this.target="both_one":this.target=this.chooseHandle(i)),this.target){case"base":var s=(this.options.max-this.options.min)/100,o=(this.result.from-this.options.min)/s,e=(this.result.to-this.options.min)/s;this.coords.p_single_real=this.toFixed(o),this.coords.p_from_real=this.toFixed(o),this.coords.p_to_real=this.toFixed(e),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real),this.target=null;break;case"single":if(this.options.from_fixed)break;this.coords.p_single_real=this.convertToRealPercent(i),this.coords.p_single_real=this.calcWithStep(this.coords.p_single_real),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);break;case"from":if(this.options.from_fixed)break;this.coords.p_from_real=this.convertToRealPercent(i),this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_real=this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);break;case"to":if(this.options.to_fixed)break;this.coords.p_to_real=this.convertToRealPercent(i),this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both":if(this.options.from_fixed||this.options.to_fixed)break;i=this.toFixed(i+.001*this.coords.p_handle),this.coords.p_from_real=this.convertToRealPercent(i)-this.coords.p_gap_left,this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.convertToRealPercent(i)+this.coords.p_gap_right,this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both_one":if(this.options.from_fixed||this.options.to_fixed)break;var h=this.convertToRealPercent(i),r=this.result.from_percent,n=this.result.to_percent-r,a=n/2,c=h-a,l=h+a;c<0&&(l=(c=0)+n),100<l&&(c=(l=100)-n),this.coords.p_from_real=this.calcWithStep(c),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.calcWithStep(l),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real)}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single_fake,this.result.from_percent=this.coords.p_single_real,this.result.from=this.convertToValue(this.coords.p_single_real),this.result.from_pretty=this._prettify(this.result.from),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from_fake+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to_fake-this.coords.p_from_fake),this.result.from_percent=this.coords.p_from_real,this.result.from=this.convertToValue(this.coords.p_from_real),this.result.from_pretty=this._prettify(this.result.from),this.result.to_percent=this.coords.p_to_real,this.result.to=this.convertToValue(this.coords.p_to_real),this.result.to_pretty=this._prettify(this.result.to),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to])),this.calcMinMax(),this.calcLabels()}},calcPointerPercent:function(){this.coords.w_rs?(this.coords.x_pointer<0||isNaN(this.coords.x_pointer)?this.coords.x_pointer=0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},convertToRealPercent:function(t){return t/(100-this.coords.p_handle)*100},convertToFakePercent:function(t){return t/100*(100-this.coords.p_handle)},getHandleX:function(){var t=100-this.coords.p_handle,i=this.toFixed(this.coords.p_pointer-this.coords.p_gap);return i<0?i=0:t<i&&(i=t),i},calcHandlePercent:function(){"single"===this.options.type?this.coords.w_handle=this.$cache.s_single.outerWidth(!1):this.coords.w_handle=this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100)},chooseHandle:function(t){return"single"===this.options.type?"single":this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2<=t?this.options.to_fixed?"from":"to":this.options.from_fixed?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single_fake+this.coords.p_handle/2-this.labels.p_single_fake/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from_fake=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=this.coords.p_from_fake+this.coords.p_handle/2-this.labels.p_from_fake/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from_fake),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to_fake=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to_fake+this.coords.p_handle/2-this.labels.p_to_fake/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=this.checkEdges(this.labels.p_to_left,this.labels.p_to_fake),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to_fake)/2-this.labels.p_single_fake/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake))},updateScene:function(){this.raf_id&&(cancelAnimationFrame(this.raf_id),this.raf_id=null),clearTimeout(this.update_tm),this.update_tm=null,this.options&&(this.drawHandles(),this.is_active?this.raf_id=requestAnimationFrame(this.updateScene.bind(this)):this.update_tm=setTimeout(this.updateScene.bind(this),300))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0),(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)&&(this.setMinMax(),this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow()),this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)&&((this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key)&&(this.drawLabels(),this.$cache.bar[0].style.left=this.coords.p_bar_x+"%",this.$cache.bar[0].style.width=this.coords.p_bar_w+"%","single"===this.options.type?(this.$cache.bar[0].style.left=0,this.$cache.bar[0].style.width=this.coords.p_bar_w+this.coords.p_bar_x+"%",this.$cache.s_single[0].style.left=this.coords.p_single_fake+"%"):(this.$cache.s_from[0].style.left=this.coords.p_from_fake+"%",this.$cache.s_to[0].style.left=this.coords.p_to_fake+"%",(this.old_from!==this.result.from||this.force_redraw)&&(this.$cache.from[0].style.left=this.labels.p_from_left+"%"),(this.old_to!==this.result.to||this.force_redraw)&&(this.$cache.to[0].style.left=this.labels.p_to_left+"%")),this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.writeToInput(),this.old_from===this.result.from&&this.old_to===this.result.to||this.is_start||(this.$cache.input.trigger("change"),this.$cache.input.trigger("input")),this.old_from=this.result.from,this.old_to=this.result.to,this.is_resize||this.is_update||this.is_start||this.is_finish||this.callOnChange(),(this.is_key||this.is_click)&&(this.is_key=!1,this.is_click=!1,this.callOnFinish()),this.is_update=!1,this.is_resize=!1,this.is_finish=!1),this.is_start=!1,this.is_key=!1,this.is_click=!1,this.force_redraw=!1))},drawLabels:function(){if(this.options){var t,i,s,o,e,h=this.options.values.length,r=this.options.p_values;if(!this.options.hide_from_to)if("single"===this.options.type)t=h?this.decorate(r[this.result.from]):(o=this._prettify(this.result.from),this.decorate(o,this.result.from)),this.$cache.single.html(t),this.calcLabels(),this.labels.p_single_left<this.labels.p_min+1?this.$cache.min[0].style.visibility="hidden":this.$cache.min[0].style.visibility="visible",this.labels.p_single_left+this.labels.p_single_fake>100-this.labels.p_max-1?this.$cache.max[0].style.visibility="hidden":this.$cache.max[0].style.visibility="visible";else{s=h?(this.options.decorate_both?(t=this.decorate(r[this.result.from]),t+=this.options.values_separator,t+=this.decorate(r[this.result.to])):t=this.decorate(r[this.result.from]+this.options.values_separator+r[this.result.to]),i=this.decorate(r[this.result.from]),this.decorate(r[this.result.to])):(o=this._prettify(this.result.from),e=this._prettify(this.result.to),this.options.decorate_both?(t=this.decorate(o,this.result.from),t+=this.options.values_separator,t+=this.decorate(e,this.result.to)):t=this.decorate(o+this.options.values_separator+e,this.result.to),i=this.decorate(o,this.result.from),this.decorate(e,this.result.to)),this.$cache.single.html(t),this.$cache.from.html(i),this.$cache.to.html(s),this.calcLabels();var n=Math.min(this.labels.p_single_left,this.labels.p_from_left),a=this.labels.p_single_left+this.labels.p_single_fake,c=this.labels.p_to_left+this.labels.p_to_fake,l=Math.max(a,c);this.labels.p_from_left+this.labels.p_from_fake>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",l=this.result.from===this.result.to?("from"===this.target?this.$cache.from[0].style.visibility="visible":"to"===this.target?this.$cache.to[0].style.visibility="visible":this.target||(this.$cache.from[0].style.visibility="visible"),this.$cache.single[0].style.visibility="hidden",c):(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",Math.max(a,c))):(this.$cache.from[0].style.visibility="visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden"),n<this.labels.p_min+1?this.$cache.min[0].style.visibility="hidden":this.$cache.min[0].style.visibility="visible",l>100-this.labels.p_max-1?this.$cache.max[0].style.visibility="hidden":this.$cache.max[0].style.visibility="visible"}}},drawShadow:function(){var t,i,s,o,e=this.options,h=this.$cache,r="number"==typeof e.from_min&&!isNaN(e.from_min),n="number"==typeof e.from_max&&!isNaN(e.from_max),a="number"==typeof e.to_min&&!isNaN(e.to_min),c="number"==typeof e.to_max&&!isNaN(e.to_max);"single"===e.type?e.from_shadow&&(r||n)?(t=this.convertToPercent(r?e.from_min:e.min),i=this.convertToPercent(n?e.from_max:e.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),i=this.toFixed(i-this.coords.p_handle/100*i),t+=this.coords.p_handle/2,h.shad_single[0].style.display="block",h.shad_single[0].style.left=t+"%",h.shad_single[0].style.width=i+"%"):h.shad_single[0].style.display="none":(e.from_shadow&&(r||n)?(t=this.convertToPercent(r?e.from_min:e.min),i=this.convertToPercent(n?e.from_max:e.max)-t,t=this.toFixed(t-this.coords.p_handle/100*t),i=this.toFixed(i-this.coords.p_handle/100*i),t+=this.coords.p_handle/2,h.shad_from[0].style.display="block",h.shad_from[0].style.left=t+"%",h.shad_from[0].style.width=i+"%"):h.shad_from[0].style.display="none",e.to_shadow&&(a||c)?(s=this.convertToPercent(a?e.to_min:e.min),o=this.convertToPercent(c?e.to_max:e.max)-s,s=this.toFixed(s-this.coords.p_handle/100*s),o=this.toFixed(o-this.coords.p_handle/100*o),s+=this.coords.p_handle/2,h.shad_to[0].style.display="block",h.shad_to[0].style.left=s+"%",h.shad_to[0].style.width=o+"%"):h.shad_to[0].style.display="none")},writeToInput:function(){"single"===this.options.type?(this.options.values.length?this.$cache.input.prop("value",this.result.from_value):this.$cache.input.prop("value",this.result.from),this.$cache.input.data("from",this.result.from)):(this.options.values.length?this.$cache.input.prop("value",this.result.from_value+this.options.input_values_separator+this.result.to_value):this.$cache.input.prop("value",this.result.from+this.options.input_values_separator+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",this.result.to))},callOnStart:function(){this.writeToInput(),this.options.onStart&&"function"==typeof this.options.onStart&&(this.options.scope?this.options.onStart.call(this.options.scope,this.result):this.options.onStart(this.result))},callOnChange:function(){this.writeToInput(),this.options.onChange&&"function"==typeof this.options.onChange&&(this.options.scope?this.options.onChange.call(this.options.scope,this.result):this.options.onChange(this.result))},callOnFinish:function(){this.writeToInput(),this.options.onFinish&&"function"==typeof this.options.onFinish&&(this.options.scope?this.options.onFinish.call(this.options.scope,this.result):this.options.onFinish(this.result))},callOnUpdate:function(){this.writeToInput(),this.options.onUpdate&&"function"==typeof this.options.onUpdate&&(this.options.scope?this.options.onUpdate.call(this.options.scope,this.result):this.options.onUpdate(this.result))},toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input"),this.has_tab_index?this.$cache.input.prop("tabindex",-1):this.$cache.input.removeProp("tabindex"),this.has_tab_index=!this.has_tab_index},convertToPercent:function(t,i){var s,o=this.options.max-this.options.min,e=o/100;return o?(s=(i?t:t-this.options.min)/e,this.toFixed(s)):(this.no_diapason=!0,0)},convertToValue:function(t){var i,s,o=this.options.min,e=this.options.max,h=o.toString().split(".")[1],r=e.toString().split(".")[1],n=0,a=0;if(0===t)return this.options.min;if(100===t)return this.options.max;h&&(n=i=h.length),r&&(n=s=r.length),i&&s&&(n=s<=i?i:s),o<0&&(o=+(o+(a=Math.abs(o))).toFixed(n),e=+(e+a).toFixed(n));var c,l=(e-o)/100*t+o,_=this.options.step.toString().split(".")[1];return l=_?+l.toFixed(_.length):(l/=this.options.step,+(l*=this.options.step).toFixed(0)),a&&(l-=a),(c=_?+l.toFixed(_.length):this.toFixed(l))<this.options.min?c=this.options.min:c>this.options.max&&(c=this.options.max),c},calcWithStep:function(t){var i=Math.round(t/this.coords.p_step)*this.coords.p_step;return 100<i&&(i=100),100===t&&(i=100),this.toFixed(i)},checkMinInterval:function(t,i,s){var o,e,h=this.options;return h.min_interval?(o=this.convertToValue(t),e=this.convertToValue(i),"from"===s?e-o<h.min_interval&&(o=e-h.min_interval):o-e<h.min_interval&&(o=e+h.min_interval),this.convertToPercent(o)):t},checkMaxInterval:function(t,i,s){var o,e,h=this.options;return h.max_interval?(o=this.convertToValue(t),e=this.convertToValue(i),"from"===s?e-o>h.max_interval&&(o=e-h.max_interval):o-e>h.max_interval&&(o=e+h.max_interval),this.convertToPercent(o)):t},checkDiapason:function(t,i,s){var o=this.convertToValue(t),e=this.options;return"number"!=typeof i&&(i=e.min),"number"!=typeof s&&(s=e.max),o<i&&(o=i),s<o&&(o=s),this.convertToPercent(o)},toFixed:function(t){return+(t=t.toFixed(20))},_prettify:function(t){return this.options.prettify_enabled?this.options.prettify&&"function"==typeof this.options.prettify?this.options.prettify(t):this.prettify(t):t},prettify:function(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1"+this.options.prettify_separator)},checkEdges:function(t,i){return this.options.force_edges&&(t<0?t=0:100-i<t&&(t=100-i)),this.toFixed(t)},validate:function(){var t,i,s=this.options,o=this.result,e=s.values,h=e.length;if("string"==typeof s.min&&(s.min=+s.min),"string"==typeof s.max&&(s.max=+s.max),"string"==typeof s.from&&(s.from=+s.from),"string"==typeof s.to&&(s.to=+s.to),"string"==typeof s.step&&(s.step=+s.step),"string"==typeof s.from_min&&(s.from_min=+s.from_min),"string"==typeof s.from_max&&(s.from_max=+s.from_max),"string"==typeof s.to_min&&(s.to_min=+s.to_min),"string"==typeof s.to_max&&(s.to_max=+s.to_max),"string"==typeof s.grid_num&&(s.grid_num=+s.grid_num),s.max<s.min&&(s.max=s.min),h)for(s.p_values=[],s.min=0,s.max=h-1,s.step=1,s.grid_num=s.max,s.grid_snap=!0,i=0;i<h;i++)t=+e[i],t=isNaN(t)?e[i]:(e[i]=t,this._prettify(t)),s.p_values.push(t);("number"!=typeof s.from||isNaN(s.from))&&(s.from=s.min),("number"!=typeof s.to||isNaN(s.to))&&(s.to=s.max),"single"===s.type?(s.from<s.min&&(s.from=s.min),s.from>s.max&&(s.from=s.max)):(s.from<s.min&&(s.from=s.min),s.from>s.max&&(s.from=s.max),s.to<s.min&&(s.to=s.min),s.to>s.max&&(s.to=s.max),this.update_check.from&&(this.update_check.from!==s.from&&s.from>s.to&&(s.from=s.to),this.update_check.to!==s.to&&s.to<s.from&&(s.to=s.from)),s.from>s.to&&(s.from=s.to),s.to<s.from&&(s.to=s.from)),("number"!=typeof s.step||isNaN(s.step)||!s.step||s.step<0)&&(s.step=1),"number"==typeof s.from_min&&s.from<s.from_min&&(s.from=s.from_min),"number"==typeof s.from_max&&s.from>s.from_max&&(s.from=s.from_max),"number"==typeof s.to_min&&s.to<s.to_min&&(s.to=s.to_min),"number"==typeof s.to_max&&s.from>s.to_max&&(s.to=s.to_max),o&&(o.min!==s.min&&(o.min=s.min),o.max!==s.max&&(o.max=s.max),(o.from<o.min||o.from>o.max)&&(o.from=s.from),(o.to<o.min||o.to>o.max)&&(o.to=s.to)),("number"!=typeof s.min_interval||isNaN(s.min_interval)||!s.min_interval||s.min_interval<0)&&(s.min_interval=0),("number"!=typeof s.max_interval||isNaN(s.max_interval)||!s.max_interval||s.max_interval<0)&&(s.max_interval=0),s.min_interval&&s.min_interval>s.max-s.min&&(s.min_interval=s.max-s.min),s.max_interval&&s.max_interval>s.max-s.min&&(s.max_interval=s.max-s.min)},decorate:function(t,i){var s="",o=this.options;return o.prefix&&(s+=o.prefix),s+=t,o.max_postfix&&(o.values.length&&t===o.p_values[o.max]?(s+=o.max_postfix,o.postfix&&(s+=" ")):i===o.max&&(s+=o.max_postfix,o.postfix&&(s+=" "))),o.postfix&&(s+=o.postfix),s},updateFrom:function(){this.result.from=this.options.from,this.result.from_percent=this.convertToPercent(this.result.from),this.result.from_pretty=this._prettify(this.result.from),this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to,this.result.to_percent=this.convertToPercent(this.result.to),this.result.to_pretty=this._prettify(this.result.to),this.options.values&&(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min,this.result.max=this.options.max,this.updateFrom(),this.updateTo()},appendGrid:function(){if(this.options.grid){var t,i,s,o,e,h,r=this.options,n=r.max-r.min,a=r.grid_num,c=0,l=4,_="";for(this.calcGridMargin(),r.grid_snap&&(a=n/r.step),50<a&&(a=50),s=this.toFixed(100/a),4<a&&(l=3),7<a&&(l=2),14<a&&(l=1),28<a&&(l=0),t=0;t<a+1;t++){for(o=l,100<(c=this.toFixed(s*t))&&(c=100),e=((this.coords.big[t]=c)-s*(t-1))/(o+1),i=1;i<=o&&0!==c;i++)_+='<span class="irs-grid-pol small" style="left: '+this.toFixed(c-e*i)+'%"></span>';_+='<span class="irs-grid-pol" style="left: '+c+'%"></span>',h=this.convertToValue(c),_+='<span class="irs-grid-text js-grid-text-'+t+'" style="left: '+c+'%">'+(h=r.values.length?r.p_values[h]:this._prettify(h))+"</span>"}this.coords.big_num=Math.ceil(a+1),this.$cache.cont.addClass("irs-with-grid"),this.$cache.grid.html(_),this.cacheGridLabels()}},cacheGridLabels:function(){var t,i,s=this.coords.big_num;for(i=0;i<s;i++)t=this.$cache.grid.find(".js-grid-text-"+i),this.$cache.grid_labels.push(t);this.calcGridLabels()},calcGridLabels:function(){var t,i,s=[],o=[],e=this.coords.big_num;for(t=0;t<e;t++)this.coords.big_w[t]=this.$cache.grid_labels[t].outerWidth(!1),this.coords.big_p[t]=this.toFixed(this.coords.big_w[t]/this.coords.w_rs*100),this.coords.big_x[t]=this.toFixed(this.coords.big_p[t]/2),s[t]=this.toFixed(this.coords.big[t]-this.coords.big_x[t]),o[t]=this.toFixed(s[t]+this.coords.big_p[t]);for(this.options.force_edges&&(s[0]<-this.coords.grid_gap&&(s[0]=-this.coords.grid_gap,o[0]=this.toFixed(s[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),o[e-1]>100+this.coords.grid_gap&&(o[e-1]=100+this.coords.grid_gap,s[e-1]=this.toFixed(o[e-1]-this.coords.big_p[e-1]),this.coords.big_x[e-1]=this.toFixed(this.coords.big_p[e-1]-this.coords.grid_gap))),this.calcGridCollision(2,s,o),this.calcGridCollision(4,s,o),t=0;t<e;t++)i=this.$cache.grid_labels[t][0],this.coords.big_x[t]!==Number.POSITIVE_INFINITY&&(i.style.marginLeft=-this.coords.big_x[t]+"%")},calcGridCollision:function(t,i,s){var o,e,h,r=this.coords.big_num;for(o=0;o<r&&!(r<=(e=o+t/2));o+=t)h=this.$cache.grid_labels[e][0],s[o]<=i[e]?h.style.visibility="visible":h.style.visibility="hidden"},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&("single"===this.options.type?this.coords.w_handle=this.$cache.s_single.outerWidth(!1):this.coords.w_handle=this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(t){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.update_check.from=this.result.from,this.update_check.to=this.result.to,this.options=a.extend(this.options,t),this.validate(),this.updateResult(t),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop("readonly",!1),a.data(this.input,"ionRangeSlider",null),this.remove(),this.input=null,this.options=null)}},a.fn.ionRangeSlider=function(t){return this.each(function(){a.data(this,"ionRangeSlider")||a.data(this,"ionRangeSlider",new h(this,t,o++))})},function(){for(var h=0,t=["ms","moz","webkit","o"],i=0;i<t.length&&!l.requestAnimationFrame;++i)l.requestAnimationFrame=l[t[i]+"RequestAnimationFrame"],l.cancelAnimationFrame=l[t[i]+"CancelAnimationFrame"]||l[t[i]+"CancelRequestAnimationFrame"];l.requestAnimationFrame||(l.requestAnimationFrame=function(t,i){var s=(new Date).getTime(),o=Math.max(0,16-(s-h)),e=l.setTimeout(function(){t(s+o)},o);return h=s+o,e}),l.cancelAnimationFrame||(l.cancelAnimationFrame=function(t){clearTimeout(t)})}()});

"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();(function(){var ImagePicker,ImagePickerOption,both_array_are_equal,sanitized_options,indexOf=[].indexOf;jQuery.fn.extend({imagepicker:function(){var opts=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.each(function(){var select;if((select=jQuery(this)).data("picker")&&select.data("picker").destroy(),select.data("picker",new ImagePicker(this,sanitized_options(opts))),null!=opts.initialized)return opts.initialized.call(select.data("picker"))})}}),sanitized_options=function(opts){var default_options;return default_options={hide_select:!0,show_label:!1,initialized:void 0,changed:void 0,clicked:void 0,selected:void 0,limit:void 0,limit_reached:void 0,font_awesome:!1},jQuery.extend(default_options,opts)},both_array_are_equal=function(a,b){var i,j,len,x;if(!a||!b||a.length!==b.length)return!1;for(a=a.slice(0),b=b.slice(0),a.sort(),b.sort(),i=j=0,len=a.length;j<len;i=++j)if(x=a[i],b[i]!==x)return!1;return!0},ImagePicker=function(){function ImagePicker(select_element){var opts1=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,ImagePicker),this.sync_picker_with_select=this.sync_picker_with_select.bind(this),this.opts=opts1,this.select=jQuery(select_element),this.multiple="multiple"===this.select.attr("multiple"),null!=this.select.data("limit")&&(this.opts.limit=parseInt(this.select.data("limit"))),this.build_and_append_picker()}return _createClass(ImagePicker,[{key:"destroy",value:function(){var j,len,ref;for(j=0,len=(ref=this.picker_options).length;j<len;j++)ref[j].destroy();return this.picker.remove(),this.select.off("change",this.sync_picker_with_select),this.select.removeData("picker"),this.select.show()}},{key:"build_and_append_picker",value:function(){return this.opts.hide_select&&this.select.hide(),this.select.on("change",this.sync_picker_with_select),null!=this.picker&&this.picker.remove(),this.create_picker(),this.select.after(this.picker),this.sync_picker_with_select()}},{key:"sync_picker_with_select",value:function(){var j,len,option,ref,results;for(results=[],j=0,len=(ref=this.picker_options).length;j<len;j++)(option=ref[j]).is_selected()?results.push(option.mark_as_selected()):results.push(option.unmark_as_selected());return results}},{key:"create_picker",value:function(){return this.picker=jQuery("<ul class='thumbnails image_picker_selector'></ul>"),this.picker_options=[],this.recursively_parse_option_groups(this.select,this.picker),this.picker}},{key:"recursively_parse_option_groups",value:function(scoped_dom,target_container){var container,j,k,len,len1,option,option_group,ref,ref1,results;for(j=0,len=(ref=scoped_dom.children("optgroup")).length;j<len;j++)option_group=ref[j],option_group=jQuery(option_group),(container=jQuery("<ul></ul>")).append(jQuery("<li class='group_title'>"+option_group.attr("label")+"</li>")),target_container.append(jQuery("<li class='group'>").append(container)),this.recursively_parse_option_groups(option_group,container);for(ref1=function(){var l,len1,ref1,results1;for(results1=[],l=0,len1=(ref1=scoped_dom.children("option")).length;l<len1;l++)option=ref1[l],results1.push(new ImagePickerOption(option,this,this.opts));return results1}.call(this),results=[],k=0,len1=ref1.length;k<len1;k++)option=ref1[k],this.picker_options.push(option),option.has_image()&&results.push(target_container.append(option.node));return results}},{key:"has_implicit_blanks",value:function(){var option;return function(){var j,len,ref,results;for(results=[],j=0,len=(ref=this.picker_options).length;j<len;j++)(option=ref[j]).is_blank()&&!option.has_image()&&results.push(option);return results}.call(this).length>0}},{key:"selected_values",value:function(){return this.multiple?this.select.val()||[]:[this.select.val()]}},{key:"toggle",value:function(imagepicker_option,original_event){var new_values,old_values,selected_value;if(old_values=this.selected_values(),selected_value=imagepicker_option.value().toString(),this.multiple?indexOf.call(this.selected_values(),selected_value)>=0?((new_values=this.selected_values()).splice(jQuery.inArray(selected_value,old_values),1),this.select.val([]),this.select.val(new_values)):null!=this.opts.limit&&this.selected_values().length>=this.opts.limit?null!=this.opts.limit_reached&&this.opts.limit_reached.call(this.select):this.select.val(this.selected_values().concat(selected_value)):this.has_implicit_blanks()&&imagepicker_option.is_selected()?this.select.val(""):this.select.val(selected_value),!both_array_are_equal(old_values,this.selected_values())&&(this.select.change(),null!=this.opts.changed))return this.opts.changed.call(this.select,old_values,this.selected_values(),original_event)}}]),ImagePicker}(),ImagePickerOption=function(){function ImagePickerOption(option_element,picker){var opts1=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};_classCallCheck(this,ImagePickerOption),this.clicked=this.clicked.bind(this),this.picker=picker,this.opts=opts1,this.option=jQuery(option_element),this.create_node()}return _createClass(ImagePickerOption,[{key:"destroy",value:function(){return this.node.find(".thumbnail").off("click",this.clicked)}},{key:"has_image",value:function(){return null!=this.option.data("img-src")}},{key:"is_blank",value:function(){return!(null!=this.value()&&""!==this.value())}},{key:"is_selected",value:function(){var select_value;return select_value=this.picker.select.val(),this.picker.multiple?jQuery.inArray(this.value(),select_value)>=0:this.value()===select_value}},{key:"mark_as_selected",value:function(){return this.node.find(".thumbnail").addClass("selected")}},{key:"unmark_as_selected",value:function(){return this.node.find(".thumbnail").removeClass("selected")}},{key:"value",value:function(){return this.option.val()}},{key:"label",value:function(){return this.option.data("img-label")?this.option.data("img-label"):this.option.text()}},{key:"clicked",value:function(event){if(this.picker.toggle(this,event),null!=this.opts.clicked&&this.opts.clicked.call(this.picker.select,this,event),null!=this.opts.selected&&this.is_selected())return this.opts.selected.call(this.picker.select,this,event)}},{key:"create_node",value:function(){var image,imgAlt,imgClass,thumbnail;return this.node=jQuery("<li/>"),this.option.data("font_awesome")?(image=jQuery("<i>")).attr("class","fa-fw "+this.option.data("img-src")):(image=jQuery("<img class='image_picker_image'/>")).attr("src",this.option.data("img-src")),thumbnail=jQuery("<div class='thumbnail'>"),(imgClass=this.option.data("img-class"))&&(this.node.addClass(imgClass),image.addClass(imgClass),thumbnail.addClass(imgClass)),(imgAlt=this.option.data("img-alt"))&&image.attr("alt",imgAlt),thumbnail.on("click",this.clicked),thumbnail.append(image),this.opts.show_label&&thumbnail.append(jQuery("<p/>").html(this.label())),this.node.append(thumbnail),this.node}}]),ImagePickerOption}()}).call(void 0);

/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});

/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return function(){function b(a){return a.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g,"")}a.validator.addMethod("maxWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length<=d},a.validator.format("Please enter {0} words or less.")),a.validator.addMethod("minWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length>=d},a.validator.format("Please enter at least {0} words.")),a.validator.addMethod("rangeWords",function(a,c,d){var e=b(a),f=/\b\w+\b/g;return this.optional(c)||e.match(f).length>=d[0]&&e.match(f).length<=d[1]},a.validator.format("Please enter between {0} and {1} words."))}(),a.validator.addMethod("abaRoutingNumber",function(a){var b=0,c=a.split(""),d=c.length;if(9!==d)return!1;for(var e=0;e<d;e+=3)b+=3*parseInt(c[e],10)+7*parseInt(c[e+1],10)+parseInt(c[e+2],10);return 0!==b&&b%10===0},"Please enter a valid routing number."),a.validator.addMethod("accept",function(b,c,d){var e,f,g,h="string"==typeof d?d.replace(/\s/g,""):"image/*",i=this.optional(c);if(i)return i;if("file"===a(c).attr("type")&&(h=h.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g,"\\$&").replace(/,/g,"|").replace(/\/\*/g,"/.*"),c.files&&c.files.length))for(g=new RegExp(".?("+h+")$","i"),e=0;e<c.files.length;e++)if(f=c.files[e],!f.type.match(g))return!1;return!0},a.validator.format("Please enter a value with a valid mimetype.")),a.validator.addMethod("alphanumeric",function(a,b){return this.optional(b)||/^\w+$/i.test(a)},"Letters, numbers, and underscores only please"),a.validator.addMethod("bankaccountNL",function(a,b){if(this.optional(b))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a))return!1;var c,d,e,f=a.replace(/ /g,""),g=0,h=f.length;for(c=0;c<h;c++)d=h-c,e=f.substring(c,c+1),g+=d*e;return g%11===0},"Please specify a valid bank account number"),a.validator.addMethod("bankorgiroaccountNL",function(b,c){return this.optional(c)||a.validator.methods.bankaccountNL.call(this,b,c)||a.validator.methods.giroaccountNL.call(this,b,c)},"Please specify a valid bank or giro account number"),a.validator.addMethod("bic",function(a,b){return this.optional(b)||/^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a.toUpperCase())},"Please specify a valid BIC code"),a.validator.addMethod("cifES",function(a,b){"use strict";function c(a){return a%2===0}if(this.optional(b))return!0;var d,e,f,g,h=new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),i=a.substring(0,1),j=a.substring(1,8),k=a.substring(8,9),l=0,m=0,n=0;if(9!==a.length||!h.test(a))return!1;for(d=0;d<j.length;d++)e=parseInt(j[d],10),c(d)?(e*=2,n+=e<10?e:e-9):m+=e;return l=m+n,f=(10-l.toString().substr(-1)).toString(),f=parseInt(f,10)>9?"0":f,g="JABCDEFGHI".substr(f,1).toString(),i.match(/[ABEH]/)?k===f:i.match(/[KPQS]/)?k===g:k===f||k===g},"Please specify a valid CIF number."),a.validator.addMethod("cnhBR",function(a){if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;var b,c,d,e,f,g,h=0,i=0;if(b=a.charAt(0),new Array(12).join(b)===a)return!1;for(e=0,f=9,g=0;e<9;++e,--f)h+=+(a.charAt(e)*f);for(c=h%11,c>=10&&(c=0,i=2),h=0,e=0,f=1,g=0;e<9;++e,++f)h+=+(a.charAt(e)*f);return d=h%11,d>=10?d=0:d-=i,String(c).concat(d)===a.substr(-2)},"Please specify a valid CNH number"),a.validator.addMethod("cnpjBR",function(a,b){"use strict";if(this.optional(b))return!0;if(a=a.replace(/[^\d]+/g,""),14!==a.length)return!1;if("00000000000000"===a||"11111111111111"===a||"22222222222222"===a||"33333333333333"===a||"44444444444444"===a||"55555555555555"===a||"66666666666666"===a||"77777777777777"===a||"88888888888888"===a||"99999999999999"===a)return!1;for(var c=a.length-2,d=a.substring(0,c),e=a.substring(c),f=0,g=c-7,h=c;h>=1;h--)f+=d.charAt(c-h)*g--,g<2&&(g=9);var i=f%11<2?0:11-f%11;if(i!==parseInt(e.charAt(0),10))return!1;c+=1,d=a.substring(0,c),f=0,g=c-7;for(var j=c;j>=1;j--)f+=d.charAt(c-j)*g--,g<2&&(g=9);return i=f%11<2?0:11-f%11,i===parseInt(e.charAt(1),10)},"Please specify a CNPJ value number"),a.validator.addMethod("cpfBR",function(a,b){"use strict";if(this.optional(b))return!0;if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;var c,d,e,f,g=0;if(c=parseInt(a.substring(9,10),10),d=parseInt(a.substring(10,11),10),e=function(a,b){var c=10*a%11;return 10!==c&&11!==c||(c=0),c===b},""===a||"00000000000"===a||"11111111111"===a||"22222222222"===a||"33333333333"===a||"44444444444"===a||"55555555555"===a||"66666666666"===a||"77777777777"===a||"88888888888"===a||"99999999999"===a)return!1;for(f=1;f<=9;f++)g+=parseInt(a.substring(f-1,f),10)*(11-f);if(e(g,c)){for(g=0,f=1;f<=10;f++)g+=parseInt(a.substring(f-1,f),10)*(12-f);return e(g,d)}return!1},"Please specify a valid CPF number"),a.validator.addMethod("creditcard",function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},"Please enter a valid credit card number."),a.validator.addMethod("creditcardtypes",function(a,b,c){if(/[^0-9\-]+/.test(a))return!1;a=a.replace(/\D/g,"");var d=0;return c.mastercard&&(d|=1),c.visa&&(d|=2),c.amex&&(d|=4),c.dinersclub&&(d|=8),c.enroute&&(d|=16),c.discover&&(d|=32),c.jcb&&(d|=64),c.unknown&&(d|=128),c.all&&(d=255),1&d&&(/^(5[12345])/.test(a)||/^(2[234567])/.test(a))?16===a.length:2&d&&/^(4)/.test(a)?16===a.length:4&d&&/^(3[47])/.test(a)?15===a.length:8&d&&/^(3(0[012345]|[68]))/.test(a)?14===a.length:16&d&&/^(2(014|149))/.test(a)?15===a.length:32&d&&/^(6011)/.test(a)?16===a.length:64&d&&/^(3)/.test(a)?16===a.length:64&d&&/^(2131|1800)/.test(a)?15===a.length:!!(128&d)},"Please enter a valid credit card number."),a.validator.addMethod("currency",function(a,b,c){var d,e="string"==typeof c,f=e?c:c[0],g=!!e||c[1];return f=f.replace(/,/g,""),f=g?f+"]":f+"]?",d="^["+f+"([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$",d=new RegExp(d),this.optional(b)||d.test(a)},"Please specify a valid currency"),a.validator.addMethod("dateFA",function(a,b){return this.optional(b)||/^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)},a.validator.messages.date),a.validator.addMethod("dateITA",function(a,b){var c,d,e,f,g,h=!1,i=/^\d{1,2}\/\d{1,2}\/\d{4}$/;return i.test(a)?(c=a.split("/"),d=parseInt(c[0],10),e=parseInt(c[1],10),f=parseInt(c[2],10),g=new Date(Date.UTC(f,e-1,d,12,0,0,0)),h=g.getUTCFullYear()===f&&g.getUTCMonth()===e-1&&g.getUTCDate()===d):h=!1,this.optional(b)||h},a.validator.messages.date),a.validator.addMethod("dateNL",function(a,b){return this.optional(b)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)},a.validator.messages.date),a.validator.addMethod("extension",function(a,b,c){return c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(b)||a.match(new RegExp("\\.("+c+")$","i"))},a.validator.format("Please enter a value with a valid extension.")),a.validator.addMethod("giroaccountNL",function(a,b){return this.optional(b)||/^[0-9]{1,7}$/.test(a)},"Please specify a valid giro account number"),a.validator.addMethod("greaterThan",function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-greaterThan-blur").length&&e.addClass("validate-greaterThan-blur").on("blur.validate-greaterThan",function(){a(c).valid()}),b>e.val()},"Please enter a greater value."),a.validator.addMethod("greaterThanEqual",function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-greaterThanEqual-blur").length&&e.addClass("validate-greaterThanEqual-blur").on("blur.validate-greaterThanEqual",function(){a(c).valid()}),b>=e.val()},"Please enter a greater value."),a.validator.addMethod("iban",function(a,b){if(this.optional(b))return!0;var c,d,e,f,g,h,i,j,k,l=a.replace(/ /g,"").toUpperCase(),m="",n=!0,o="",p="",q=5;if(l.length<q)return!1;if(c=l.substring(0,2),h={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},g=h[c],"undefined"!=typeof g&&(i=new RegExp("^[A-Z]{2}\\d{2}"+g+"$",""),!i.test(l)))return!1;for(d=l.substring(4,l.length)+l.substring(0,4),j=0;j<d.length;j++)e=d.charAt(j),"0"!==e&&(n=!1),n||(m+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));for(k=0;k<m.length;k++)f=m.charAt(k),p=""+o+f,o=p%97;return 1===o},"Please specify a valid IBAN"),a.validator.addMethod("integer",function(a,b){return this.optional(b)||/^-?\d+$/.test(a)},"A positive or negative non-decimal number please"),a.validator.addMethod("ipv4",function(a,b){return this.optional(b)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)},"Please enter a valid IP v4 address."),a.validator.addMethod("ipv6",function(a,b){return this.optional(b)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)},"Please enter a valid IP v6 address."),a.validator.addMethod("lessThan",function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-lessThan-blur").length&&e.addClass("validate-lessThan-blur").on("blur.validate-lessThan",function(){a(c).valid()}),b<e.val()},"Please enter a lesser value."),a.validator.addMethod("lessThanEqual",function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-lessThanEqual-blur").length&&e.addClass("validate-lessThanEqual-blur").on("blur.validate-lessThanEqual",function(){a(c).valid()}),b<=e.val()},"Please enter a lesser value."),a.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please"),a.validator.addMethod("letterswithbasicpunc",function(a,b){return this.optional(b)||/^[a-z\-.,()'"\s]+$/i.test(a)},"Letters or punctuation only please"),a.validator.addMethod("maxfiles",function(b,c,d){return!!this.optional(c)||!("file"===a(c).attr("type")&&c.files&&c.files.length>d)},a.validator.format("Please select no more than {0} files.")),a.validator.addMethod("maxsize",function(b,c,d){if(this.optional(c))return!0;if("file"===a(c).attr("type")&&c.files&&c.files.length)for(var e=0;e<c.files.length;e++)if(c.files[e].size>d)return!1;return!0},a.validator.format("File size must not exceed {0} bytes each.")),a.validator.addMethod("maxsizetotal",function(b,c,d){if(this.optional(c))return!0;if("file"===a(c).attr("type")&&c.files&&c.files.length)for(var e=0,f=0;f<c.files.length;f++)if(e+=c.files[f].size,e>d)return!1;return!0},a.validator.format("Total size of all files must not exceed {0} bytes.")),a.validator.addMethod("mobileNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid mobile number"),a.validator.addMethod("mobileRU",function(a,b){var c=a.replace(/\(|\)|\s+|-/g,"");return this.optional(b)||c.length>9&&/^((\+7|7|8)+([0-9]){10})$/.test(c)},"Please specify a valid mobile number"),a.validator.addMethod("mobileUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),a.validator.addMethod("netmask",function(a,b){return this.optional(b)||/^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(a)},"Please enter a valid netmask."),a.validator.addMethod("nieES",function(a,b){"use strict";if(this.optional(b))return!0;var c,d=new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi),e="TRWAGMYFPDXBNJZSQVHLCKET",f=a.substr(a.length-1).toUpperCase();return a=a.toString().toUpperCase(),!(a.length>10||a.length<9||!d.test(a))&&(a=a.replace(/^[X]/,"0").replace(/^[Y]/,"1").replace(/^[Z]/,"2"),c=9===a.length?a.substr(0,8):a.substr(0,9),e.charAt(parseInt(c,10)%23)===f)},"Please specify a valid NIE number."),a.validator.addMethod("nifES",function(a,b){"use strict";return!!this.optional(b)||(a=a.toUpperCase(),!!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")&&(/^[0-9]{8}[A-Z]{1}$/.test(a)?"TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,0)%23)===a.charAt(8):!!/^[KLM]{1}/.test(a)&&a[8]==="TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,1)%23)))},"Please specify a valid NIF number."),a.validator.addMethod("nipPL",function(a){"use strict";if(a=a.replace(/[^0-9]/g,""),10!==a.length)return!1;for(var b=[6,5,7,2,3,4,5,6,7],c=0,d=0;d<9;d++)c+=b[d]*a[d];var e=c%11,f=10===e?0:e;return f===parseInt(a[9],10)},"Please specify a valid NIP number."),a.validator.addMethod("nisBR",function(a){var b,c,d,e,f,g=0;if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;for(c=parseInt(a.substring(10,11),10),b=parseInt(a.substring(0,10),10),e=2;e<12;e++)f=e,10===e&&(f=2),11===e&&(f=3),g+=b%10*f,b=parseInt(b/10,10);return d=g%11,d=d>1?11-d:0,c===d},"Please specify a valid NIS/PIS number"),a.validator.addMethod("notEqualTo",function(b,c,d){return this.optional(c)||!a.validator.methods.equalTo.call(this,b,c,d)},"Please enter a different value, values must not be the same."),a.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please"),a.validator.addMethod("pattern",function(a,b,c){return!!this.optional(b)||("string"==typeof c&&(c=new RegExp("^(?:"+c+")$")),c.test(a))},"Invalid format."),a.validator.addMethod("phoneNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid phone number."),a.validator.addMethod("phonePL",function(a,b){a=a.replace(/\s+/g,"");var c=/^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;return this.optional(b)||c.test(a)},"Please specify a valid phone number"),a.validator.addMethod("phonesUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),a.validator.addMethod("phoneUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),a.validator.addMethod("phoneUS",function(a,b){return a=a.replace(/\s+/g,""),this.optional(b)||a.length>9&&a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number"),a.validator.addMethod("postalcodeBR",function(a,b){return this.optional(b)||/^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)},"Informe um CEP válido."),a.validator.addMethod("postalCodeCA",function(a,b){return this.optional(b)||/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeIT",function(a,b){return this.optional(b)||/^\d{5}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeNL",function(a,b){return this.optional(b)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postcodeUK",function(a,b){return this.optional(b)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)},"Please specify a valid UK postcode"),a.validator.addMethod("require_from_group",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_req_grp")?f.data("valid_req_grp"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length>=d[0];return f.data("valid_req_grp",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),h},a.validator.format("Please fill at least {0} of these fields.")),a.validator.addMethod("skip_or_fill_minimum",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_skip")?f.data("valid_skip"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length,i=0===h||h>=d[0];return f.data("valid_skip",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),i},a.validator.format("Please either skip these fields or fill at least {0} of them.")),a.validator.addMethod("stateUS",function(a,b,c){var d,e="undefined"==typeof c,f=!e&&"undefined"!=typeof c.caseSensitive&&c.caseSensitive,g=!e&&"undefined"!=typeof c.includeTerritories&&c.includeTerritories,h=!e&&"undefined"!=typeof c.includeMilitary&&c.includeMilitary;return d=g||h?g&&h?"^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":g?"^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":"^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$":"^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$",d=f?new RegExp(d):new RegExp(d,"i"),this.optional(b)||d.test(a)},"Please specify a valid state"),a.validator.addMethod("strippedminlength",function(b,c,d){return a(b).text().length>=d},a.validator.format("Please enter at least {0} characters")),a.validator.addMethod("time",function(a,b){return this.optional(b)||/^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)},"Please enter a valid time, between 00:00 and 23:59"),a.validator.addMethod("time12h",function(a,b){return this.optional(b)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)},"Please enter a valid time in 12-hour am/pm format"),a.validator.addMethod("url2",function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},a.validator.messages.url),a.validator.addMethod("vinUS",function(a){if(17!==a.length)return!1;var b,c,d,e,f,g,h=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],i=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],j=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],k=0;for(b=0;b<17;b++){if(e=j[b],d=a.slice(b,b+1),8===b&&(g=d),isNaN(d)){for(c=0;c<h.length;c++)if(d.toUpperCase()===h[c]){d=i[c],d*=e,isNaN(g)&&8===c&&(g=h[c]);break}}else d*=e;k+=d}return f=k%11,10===f&&(f="X"),f===g},"The specified vehicle identification number (VIN) is invalid."),a.validator.addMethod("zipcodeUS",function(a,b){return this.optional(b)||/^\d{5}(-\d{4})?$/.test(a)},"The specified US ZIP Code is invalid"),a.validator.addMethod("ziprange",function(a,b){return this.optional(b)||/^90[2-5]\d\{2\}-\d{4}$/.test(a)},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"),a});

(function ($) {

	var WidgetPafeFormBuilderHandlerDate = function ($scope, $) {

        var $elements = $scope.find('.elementor-date-field');

		if (!$elements.length) {
			return;
		}

		var addDatePicker = function addDatePicker($element) {
			if ($($element).hasClass('elementor-use-native')) {
				return;
			}
			var options = {
				minDate: $($element).attr('min') || null,
				maxDate: $($element).attr('max') || null,
				dateFormat: $($element).attr('data-date-format') || null,
				defaultDate: $($element).attr('data-pafe-form-builder-value') || null,
				allowInput: true
			};
			$element.flatpickr(options);
		};

		$.each($elements, function (i, $element) {
			addDatePicker($element);
		});

    };

    var WidgetPafeFormBuilderHandlerTime = function ($scope, $) {

	    var $elements = $scope.find('.elementor-time-field');

		if (!$elements.length) {
			return;
		}

		var addTimePicker = function addTimePicker($element) {
			if ($($element).hasClass('elementor-use-native')) {
				return;
			}
			$element.flatpickr({
				noCalendar: true,
				enableTime: true,
				allowInput: true,
				defaultDate: $($element).attr('data-pafe-form-builder-value') || null,
			});
		};
		$.each($elements, function (i, $element) {
			addTimePicker($element);
		});

	};

	function pafeCalculatedFieldsForm() {
        $(document).find('[data-pafe-form-builder-calculated-fields]').each(function(){
            var $fieldWidget = $(this).closest('.elementor-element'),
            	$fieldCurrent = $(this),
            	formID = $fieldCurrent.data('pafe-form-builder-form-id');
                calculation = $fieldCurrent.data('pafe-form-builder-calculated-fields');

            if (calculation.indexOf('field id') == -1) {

	            // Loop qua tat ca field trong form
	            $('[name^="form_fields"][data-pafe-form-builder-form-id="' + formID + '"]').each(function(){

	                if ($(this).attr('id') != undefined) {
	                    var fieldName = $(this).attr('name').replace('[]','').replace('form_fields[','').replace(']',''),
	                        $fieldSelector = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + ']"]'),
	                        fieldType = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + ']"]').attr('type');

	                    if($fieldSelector.length > 0) {

	                        if (fieldType == 'radio' || fieldType == 'checkbox') {
	                            var fieldValue = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + ']"]:checked').val();
	                        } else {
	                            var fieldValue = $fieldSelector.val().trim();
	                        }

	                        if (fieldValue == undefined) {
	                            fieldValue = 0;
	                        } else {
	                            fieldValue = parseInt( fieldValue );
	                            if (isNaN(fieldValue)) {
	                                fieldValue = 0;
	                            }
	                        }

	                        window[fieldName] = parseInt( fieldValue );
	                    }

	                    if (fieldName.indexOf('[]') !== -1) {
	                        fieldName = fieldName.replace('[]','');
	                        var $fieldSelectorMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]');
	                        if($fieldSelectorMultiple.length > 0) {
	                            fieldTypeMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]').attr('type');
	                            var fieldValueMultiple = $fieldSelectorMultiple.val(),
	                                fieldValueMultiple = [];

	                            if (fieldTypeMultiple == 'checkbox') {
	                                $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]:checked').each(function (index,element) {
	                                    fieldValueMultiple.push($(this).val());
	                                });
	                            } else {
	                                fieldValueMultiple = $fieldSelectorMultiple.val();
	                                if (fieldValueMultiple == null) {
	                                    var fieldValueMultiple = [];
	                                }
	                            }

	                            fieldValueMultipleTotal = 0;

	                            for (var j = 0; j < fieldValueMultiple.length; j++) {
	                                fieldValue = parseInt( fieldValueMultiple[j] );
	                                if (isNaN(fieldValue)) {
	                                    fieldValue = 0;
	                                }
	                                fieldValueMultipleTotal += fieldValue;
	                            }

	                            window[fieldName] = fieldValueMultipleTotal;
	                        }
	                    }
	                }
	            });

            } else {
            	var fieldNameArray = calculation.match(/\"(.*?)\"/g);
            	for (var j = 0; j<fieldNameArray.length; j++) {
            		var fieldNameSlug = fieldNameArray[j].replace('"','').replace('"',''),
            			$fieldSelectorExist = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name^="form_fields[' + fieldNameSlug + ']"]'),
                        $fieldSelector = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldNameSlug + ']"]');

                    if($fieldSelectorExist.length > 0) {  

                    	var fieldName = $fieldSelectorExist.attr('name').replace('[]','').replace('form_fields[','').replace(']',''),
	                        fieldType = $fieldSelectorExist.attr('type');

	                    if($fieldSelector.length > 0) {

	                        if (fieldType == 'radio' || fieldType == 'checkbox') {
	                            var fieldValue = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + ']"]:checked').val();
	                        } else {
	                            var fieldValue = $fieldSelector.val().trim();
	                        }

	                        if (fieldValue == undefined) {
	                            fieldValue = 0;
	                        } else {
	                            fieldValue = parseInt( fieldValue );
	                            if (isNaN(fieldValue)) {
	                                fieldValue = 0;
	                            }
	                        }

	                        window[fieldName] = parseInt( fieldValue );
	                    }

	                    if (fieldName.indexOf('[]') !== -1) {
	                        fieldName = fieldName.replace('[]','');
	                        var $fieldSelectorMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]');
	                        if($fieldSelectorMultiple.length > 0) {
	                            fieldTypeMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]').attr('type');
	                            var fieldValueMultiple = $fieldSelectorMultiple.val(),
	                                fieldValueMultiple = [];

	                            if (fieldTypeMultiple == 'checkbox') {
	                                $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]:checked').each(function (index,element) {
	                                    fieldValueMultiple.push($(this).val());
	                                });
	                            } else {
	                                fieldValueMultiple = $fieldSelectorMultiple.val();
	                                if (fieldValueMultiple == null) {
	                                    var fieldValueMultiple = [];
	                                }
	                            }

	                            fieldValueMultipleTotal = 0;

	                            for (var j = 0; j < fieldValueMultiple.length; j++) {
	                                fieldValue = parseInt( fieldValueMultiple[j] );
	                                if (isNaN(fieldValue)) {
	                                    fieldValue = 0;
	                                }
	                                fieldValueMultipleTotal += fieldValue;
	                            }

	                            window[fieldName] = fieldValueMultipleTotal;
	                        }
	                    }
                    }
            	}
            }

            var calculation = calculation.replace(/\[field id=/g, '').replace(/\"]/g, '').replace(/\"/g, '');

            var totalFieldContent = eval(calculation);
        		$fieldWidget.find('.pafe-calculated-fields-form__value').html(totalFieldContent);
            	$fieldCurrent.val(totalFieldContent);
            
        });
    }

	var WidgetPafeFormBuilderHandlerRangeSlider = function ($scope, $) {

	    var $elements = $scope.find('[data-pafe-form-builder-range-slider]');

		if (!$elements.length) {
			return;
		}

		$.each($elements, function (i, $element) {
			var optionsString = $($element).data('pafe-form-builder-range-slider');
	        var options = {};
			var items = optionsString.split(',');
			for (var j = 0; j < items.length; j++) {
			    var current = items[j].trim().split(':');
			    if (current[0] != undefined && current[1] != undefined) {
			    	var current1 = current[1].trim().replace('"','').replace('"','');
			    	if (current1 == "false" || current1 == "true") {
			    		if (current1 == "false") {
			    			options[current[0]] = false;
			    		} else {
			    			options[current[0]] = true;
			    		}
			    	} else {
			    		options[current[0]] = current1;
			    	}
			    }
			}

			options.onStart = function (data) {
	            //pafeConditionalLogicFormCheck();
	            pafeCalculatedFieldsForm();
	        };

			$($element).ionRangeSlider(options);
		});

	};

	var WidgetPafeFormBuilderHandlerImageSelect = function ($scope, $) {

	    var $elements = $scope.find('[data-pafe-form-builder-image-select]');

		if (!$elements.length) {
			return;
		}

		$.each($elements, function (i, $element) {
			
			var gallery = $($element).data('pafe-form-builder-image-select'),
                $options = $($element).find('option');

            $($element).closest('.elementor-field').addClass('pafe-image-select-field');
            
            $options.each(function(index,element){
                var imageURL = gallery[index]['url'],
                    optionsContent = $(this).html();

                $(this).attr('data-img-src',imageURL);
                $($element).imagepicker({show_label: true});
            });

		});

	};

	var WidgetPafeFormBuilderHandlerStripe = function ($scope, $) {

	    var $elements = $scope.find('[data-pafe-form-builder-stripe]');

		if (!$elements.length) {
			return;
		}

		$.each($elements, function (i, $element) {

			// Create a Stripe client
			var stripPk = $('[data-pafe-stripe]').data('pafe-stripe');
			var stripe = Stripe(stripPk);

			// Create an instance of Elements
			var elements = stripe.elements();

			// Custom styling can be passed to options when creating an Element.
			// (Note that this demo uses a wider set of styles than the guide below.)
			var style = {
			  base: {
			    color: '#32325d',
			    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			    fontSmoothing: 'antialiased',
			    fontSize: '16px',
			    '::placeholder': {
			      color: '#aab7c4'
			    }
			  },
			  invalid: {
			    color: '#fa755a',
			    iconColor: '#fa755a'
			  }
			};

			// Create an instance of the card Element
			var card = elements.create('card', { style: style });

			// Add an instance of the card Element into the `card-element` <div>
			card.mount($element);

			var formIdStripe = $($element).data('pafe-form-builder-form-id');

			$(document).on('click','[data-pafe-form-builder-submit-form-id]',function(){
				if ( $(this).data('pafe-form-builder-stripe-submit') != undefined ) {
			    	var formID = $(this).data('pafe-form-builder-submit-form-id'),
			    		$fields = $(document).find('[data-pafe-form-builder-form-id='+ formID +']'),
			    		requiredText = $(this).data('pafe-form-builder-required-text'),
			    		fieldsOj = [],
			    		error = 0,
			    		formData = new FormData();

					$fields.each(function(){
						if ( $(this).data('pafe-form-builder-stripe') == undefined && $(this).data('pafe-form-builder-html') == undefined ) {
							if ( !$(this)[0].checkValidity() && $(this).closest('.elementor-widget').css('display') != 'none' ) {
								if ($(this).css('display') == 'none' || $(this).data('pafe-form-builder-image-select') != undefined) {
									$(this).closest('.elementor-field-group').find('[data-pafe-form-builder-required]').html(requiredText);
								} else {
									if ($(this).data('pafe-form-builder-image-select') == undefined) {
										$(this)[0].reportValidity();
									}
								}
								error++;
							} else {

								$(this).closest('.elementor-field-group').find('[data-pafe-form-builder-required]').html('');
								
								var fieldType = $(this).attr('type'),
									fieldName = $(this).attr('name');

								if (fieldType == 'file') { 
									if($(this).hasClass('error')) {
										error++;
									} else {

										fieldName = $(this).attr('id').replace('form-field-','');

										$.each($(this)[0].files, function(i, file){
											formData.append( fieldName + '[]', file);
										});

										var fieldItem = {};
										fieldItem['label'] = $(this).closest('.elementor-field-group').find('.elementor-field-label').html();
										fieldItem['name'] = fieldName;
										fieldItem['value'] = '';
										fieldItem['upload'] = 1;

										if($(this).data('attach-files') != undefined) {
											fieldItem['attach-files'] = 1;
										}

										fieldsOj.push(fieldItem);

									}

								} else {
									if (fieldName.indexOf('[]') !== -1) {
					                    var fieldValueMultiple = [];

					                    if (fieldType == 'checkbox') {
					                        $(document).find('[name="'+ fieldName + '"]:checked').each(function () {
					                            fieldValueMultiple.push($(this).val());
					                        });
					                    } else {
					                        fieldValueMultiple = $(this).val();
					                        if (fieldValueMultiple == null) {
					                            var fieldValueMultiple = [];
					                        }
					                    }

					                    fieldValue = '';

					                    for (var j = 0; j < fieldValueMultiple.length; j++) {
					                    	fieldValue += fieldValueMultiple[j];
					                    	if (j != fieldValueMultiple.length - 1) {
					                    		fieldValue += ',';
					                    	}
					                    }
									} else {
										if (fieldType == 'radio' || fieldType == 'checkbox') {
						                    var fieldValue = $(document).find('[name="'+ fieldName +'"]:checked').val();
						                } else {
						                	if ($(this).data('pafe-form-builder-calculated-fields') != undefined) {
						                		var fieldValue = $(this).siblings('.pafe-calculated-fields-form').text();
						                	} else {
						                		var fieldValue = $(this).val().trim();
						                	}
						                }
									}
									
									if (fieldValue != undefined) {
										var fieldItem = {};
										fieldItem['label'] = $(this).closest('.elementor-field-group').find('.elementor-field-label').html();
										fieldItem['name'] = fieldName.replace('[]','').replace('form_fields[','').replace(']','');
										fieldItem['value'] = fieldValue;
										fieldsOj.push(fieldItem);
									}
								}
							}
						}
					});

					if (error == 0) {

						stripe.createToken(card).then(function(result) {
							if (result.error) {
								// Inform the user if there was an error
								//var errorElement = document.getElementById('card-errors');
								//errorElement.textContent = result.error.message;
							} else {
								var $submit = $(document).find('[data-pafe-form-builder-submit-form-id="' + formID + '"]');
								$(document).find('[data-pafe-form-builder-form-id="' + formID + '"]').closest('.elementor-element').css({'opacity' : 0.45});
								$submit.closest('.elementor-element').css({'opacity' : 0.45});
								$submit.closest('.elementor-element').addClass('elementor-form-waiting');

								var $parent = $(document).find('[data-pafe-form-builder-submit-form-id="' + formID + '"]').closest('.elementor-element');
								$parent.find('.elementor-message').removeClass('visible');

								var amount = 0;

								if ($submit.data('pafe-form-builder-stripe-amount') != undefined) {
									amount = $submit.data('pafe-form-builder-stripe-amount');
								} else {
									if ($submit.data('pafe-form-builder-stripe-amount-field') != undefined) {
										var stripeAmountFieldName = $submit.data('pafe-form-builder-stripe-amount-field').replace('[field id="','').replace('"]','');
										amount = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + stripeAmountFieldName + ']"]').val();
									}
								}

								var description = '';

								if ($submit.data('pafe-form-builder-stripe-customer-info-field') != undefined) {
									var customerInfoFieldName = $submit.data('pafe-form-builder-stripe-customer-info-field').replace('[field id="','').replace('"]','');
									description = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + customerInfoFieldName + ']"]').val();
								}

								var data = {
									'action': 'pafe_ajax_form_builder',
									'post_id': $(document).find('input[name="post_id"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').eq(0).closest('[data-elementor-id]').data('elementor-id'),
									'form_id': $(document).find('input[name="form_id"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val(),
									'fields' : fieldsOj,
									'stripeToken': result.token.id,
									'amount' : amount,
									'description' : description,
								};

								formData.append("action", "pafe_ajax_form_builder");
								formData.append("post_id", $(document).find('input[name="post_id"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').eq(0).closest('[data-elementor-id]').data('elementor-id'));
								formData.append("form_id", $(document).find('input[name="form_id"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val());
								formData.append("fields", JSON.stringify(fieldsOj));
								formData.append("referrer", window.location.href);
								formData.append("remote_ip",$(document).find('input[name="remote_ip"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val());
								formData.append("stripeToken", result.token.id);
								formData.append("amount", amount);
								formData.append("description", description);

								if ($submit.data('pafe-form-builder-submit-post-edit') != undefined) {
									formData.append("edit", $submit.data('pafe-form-builder-submit-post-edit'));
								}

								if ($submit.data('pafe-form-builder-submit-recaptcha') != undefined) {
									var recaptchaSiteKey = $submit.data('pafe-form-builder-submit-recaptcha');
									grecaptcha.ready(function() {
							            grecaptcha.execute(recaptchaSiteKey, {action: 'create_comment'}).then(function(token) {
							            	formData.append("recaptcha",token);

							            	$.ajax({
												url: $('[data-pafe-ajax-url]').data('pafe-ajax-url'),
												type: 'POST',
												data: formData,
												processData: false,
												contentType: false,
												success: function (response) {
													$(document).find('[data-pafe-form-builder-form-id="' + formID + '"]').closest('.elementor-element').css({'opacity' : 1});
										        	$parent.css({'opacity' : 1});
													$parent.removeClass('elementor-form-waiting');
													var response = response.trim();

													if (response.indexOf(',') !== -1) {
														var responseArray = response.split(',');

														$parent.find('.elementor-message').each(function(){
															if (responseArray[3] != '') {
												        		var html = $(this).html().replace('[post_url]','<a href="' + responseArray[3] + '">' + responseArray[3] + '</a>');
												        		$(this).html(html);
												        	}
														});

														if (responseArray[0] == 'succeeded') {
											        		$parent.find('.pafe-form-builder-alert--stripe .elementor-message-success').addClass('visible');
											        	}

											        	if (responseArray[0] == 'pending') {
											        		$parent.find('.pafe-form-builder-alert--stripe .elementor-help-inline').addClass('visible');
											        	}

											        	if (responseArray[0] == 'failed') {
											        		$parent.find('.pafe-form-builder-alert--stripe .elementor-message-danger').addClass('visible');
											        	}

											        	if (responseArray[1] != '') {
											        		$parent.find('.pafe-form-builder-alert--mail .elementor-message-success').addClass('visible');
											        	} else {
											        		$parent.find('.pafe-form-builder-alert--mail .elementor-message-danger').addClass('visible');
											        	}

											        	var fieldItemStripePaymentStatus = {};

											        	fieldItemStripePaymentStatus['label'] = 'payment_status';
														fieldItemStripePaymentStatus['name'] = 'payment_status';
														fieldItemStripePaymentStatus['value'] = responseArray[0];
														fieldsOj.push(fieldItemStripePaymentStatus);

														var fieldItemStripePaymentID = {};

														fieldItemStripePaymentID['label'] = 'payment_id';
														fieldItemStripePaymentID['name'] = 'payment_id';
														fieldItemStripePaymentID['value'] = responseArray[2];
														fieldsOj.push(fieldItemStripePaymentID);

														var $wrapper = $submit.closest('[data-pafe-form-google-sheets-connector]');

														if ($wrapper.data('pafe-form-google-sheets-connector') != undefined) {
															var row = '',
																fieldList = $wrapper.data('pafe-form-google-sheets-connector-field-list'),
																columnArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
																fieldColumns = [];

															for (var i = 0; i < fieldList.length; i++) {
												            	fieldColumns.push(getIndexColumn(fieldList[i]['pafe_form_google_sheets_connector_field_column'])); 
													        }

															for (var z = 0; z < (Math.max.apply(null, fieldColumns) + 1); z++) {
																var value = '';

															 	for (var i = 0; i < fieldList.length; i++) {
														            var fieldID = fieldList[i]['pafe_form_google_sheets_connector_field_id'],
														            	fieldColumn = fieldList[i]['pafe_form_google_sheets_connector_field_column'];

													            	if (z == getIndexColumn(fieldColumn)) {
													            		for(var j=0; j < fieldsOj.length; ++j) {
													            			if (fieldsOj[j].name == fieldID) {
													            				value = fieldsOj[j].value;
													            			}
														        		}
													            	}  
														        }

														        row += '"'+value+'",';
													        }
														   
														    // Submission
														    row = row.slice(0, -1);
														    // Config
														    var gs_sid = $wrapper.data('pafe-form-google-sheets-connector'); // Enter your Google Sheet ID here
														    var gs_clid = $wrapper.data('pafe-form-google-sheets-connector-clid');; // Enter your API Client ID here
														    var gs_clis = $wrapper.data('pafe-form-google-sheets-connector-clis');; // Enter your API Client Secret here
														    var gs_rtok = $wrapper.data('pafe-form-google-sheets-connector-rtok');; // Enter your OAuth Refresh Token here
														    var gs_atok = false;
														    var gs_url = 'https://sheets.googleapis.com/v4/spreadsheets/'+gs_sid+'/values/A1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED';
														    var gs_body = '{"majorDimension":"ROWS", "values":[['+row+']]}';

														    // HTTP Request Token Refresh
														    var xhr = new XMLHttpRequest();
														    xhr.open('POST', 'https://www.googleapis.com/oauth2/v4/token?client_id='+gs_clid+'&client_secret='+gs_clis+'&refresh_token='+gs_rtok+'&grant_type=refresh_token');
														    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
														    xhr.onload = function() {           
														        var response = JSON.parse(xhr.responseText);
														        var gs_atok = response.access_token;            
																// HTTP Request Append Data
														        if(gs_atok) {
														            var xxhr = new XMLHttpRequest();
														            xxhr.open('POST', gs_url);
														            xxhr.setRequestHeader('Content-length', gs_body.length);
														            xxhr.setRequestHeader('Content-type', 'application/json');
														            xxhr.setRequestHeader('Authorization', 'OAuth ' + gs_atok );
														            xxhr.send(gs_body);
														        }            
														    };
														    xhr.send();
														}

											        }

											        // Redirect
									        		if ($(document).find('input[name="redirect"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
									        			var href = $(document).find('input[name="redirect"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val().trim();
									        			if (response.indexOf(',') !== -1) {
															if (responseArray[3] != '' && href=='[post_url]') {
																window.location.href = responseArray[3];
															} else {
																window.location.href = href;
															}

															if (responseArray[4] != '') {
																window.location.href = responseArray[4];
															}
														}
									        		}

									        		// Popup
									        		if ($(document).find('[data-pafe-form-builder-popup][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
									        			$(document).find('[data-pafe-form-builder-popup][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
					        						}

					        						if ($(document).find('[data-pafe-form-builder-popup-open][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
									        			$(document).find('[data-pafe-form-builder-popup-open][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
					        						}

					        						if ($(document).find('[data-pafe-form-builder-popup-close][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
									        			$(document).find('[data-pafe-form-builder-popup-close][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
					        						}
												}
											});
							            });
							        });
						        } else {

									$.ajax({
										url: $('[data-pafe-ajax-url]').data('pafe-ajax-url'),
										type: 'POST',
										data: formData,
										processData: false,
										contentType: false,
										success: function (response) {
											$(document).find('[data-pafe-form-builder-form-id="' + formID + '"]').closest('.elementor-element').css({'opacity' : 1});
								        	$parent.css({'opacity' : 1});
											$parent.removeClass('elementor-form-waiting');
											var response = response.trim();

											if (response.indexOf(',') !== -1) {
												var responseArray = response.split(',');

												$parent.find('.elementor-message').each(function(){
													if (responseArray[3] != '') {
										        		var html = $(this).html().replace('[post_url]','<a href="' + responseArray[3] + '">' + responseArray[3] + '</a>');
										        		$(this).html(html);
										        	}
												});

												if (responseArray[0] == 'succeeded') {
									        		$parent.find('.pafe-form-builder-alert--stripe .elementor-message-success').addClass('visible');
									        	}

									        	if (responseArray[0] == 'pending') {
									        		$parent.find('.pafe-form-builder-alert--stripe .elementor-help-inline').addClass('visible');
									        	}

									        	if (responseArray[0] == 'failed') {
									        		$parent.find('.pafe-form-builder-alert--stripe .elementor-message-danger').addClass('visible');
									        	}

									        	if (responseArray[1] != '') {
									        		$parent.find('.pafe-form-builder-alert--mail .elementor-message-success').addClass('visible');
									        	} else {
									        		$parent.find('.pafe-form-builder-alert--mail .elementor-message-danger').addClass('visible');
									        	}

									        	var fieldItemStripePaymentStatus = {};

									        	fieldItemStripePaymentStatus['label'] = 'payment_status';
												fieldItemStripePaymentStatus['name'] = 'payment_status';
												fieldItemStripePaymentStatus['value'] = responseArray[0];
												fieldsOj.push(fieldItemStripePaymentStatus);

												var fieldItemStripePaymentID = {};

												fieldItemStripePaymentID['label'] = 'payment_id';
												fieldItemStripePaymentID['name'] = 'payment_id';
												fieldItemStripePaymentID['value'] = responseArray[2];
												fieldsOj.push(fieldItemStripePaymentID);

												var $wrapper = $submit.closest('[data-pafe-form-google-sheets-connector]');

												if ($wrapper.data('pafe-form-google-sheets-connector') != undefined) {
													var row = '',
														fieldList = $wrapper.data('pafe-form-google-sheets-connector-field-list'),
														columnArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
														fieldColumns = [];

													for (var i = 0; i < fieldList.length; i++) {
										            	fieldColumns.push(getIndexColumn(fieldList[i]['pafe_form_google_sheets_connector_field_column'])); 
											        }

													for (var z = 0; z < (Math.max.apply(null, fieldColumns) + 1); z++) {
														var value = '';

													 	for (var i = 0; i < fieldList.length; i++) {
												            var fieldID = fieldList[i]['pafe_form_google_sheets_connector_field_id'],
												            	fieldColumn = fieldList[i]['pafe_form_google_sheets_connector_field_column'];

											            	if (z == getIndexColumn(fieldColumn)) {
											            		for(var j=0; j < fieldsOj.length; ++j) {
											            			if (fieldsOj[j].name == fieldID) {
											            				value = fieldsOj[j].value;
											            			}
												        		}
											            	}  
												        }

												        row += '"'+value+'",';
											        }
												   
												    // Submission
												    row = row.slice(0, -1);

												    // Config
												    var gs_sid = $wrapper.data('pafe-form-google-sheets-connector'); // Enter your Google Sheet ID here
												    var gs_clid = $wrapper.data('pafe-form-google-sheets-connector-clid');; // Enter your API Client ID here
												    var gs_clis = $wrapper.data('pafe-form-google-sheets-connector-clis');; // Enter your API Client Secret here
												    var gs_rtok = $wrapper.data('pafe-form-google-sheets-connector-rtok');; // Enter your OAuth Refresh Token here
												    var gs_atok = false;
												    var gs_url = 'https://sheets.googleapis.com/v4/spreadsheets/'+gs_sid+'/values/A1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED';
												    var gs_body = '{"majorDimension":"ROWS", "values":[['+row+']]}';

												    // HTTP Request Token Refresh
												    var xhr = new XMLHttpRequest();
												    xhr.open('POST', 'https://www.googleapis.com/oauth2/v4/token?client_id='+gs_clid+'&client_secret='+gs_clis+'&refresh_token='+gs_rtok+'&grant_type=refresh_token');
												    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
												    xhr.onload = function() {           
												        var response = JSON.parse(xhr.responseText);
												        var gs_atok = response.access_token;            
														// HTTP Request Append Data
												        if(gs_atok) {
												            var xxhr = new XMLHttpRequest();
												            xxhr.open('POST', gs_url);
												            xxhr.setRequestHeader('Content-length', gs_body.length);
												            xxhr.setRequestHeader('Content-type', 'application/json');
												            xxhr.setRequestHeader('Authorization', 'OAuth ' + gs_atok );
												            xxhr.send(gs_body);
												        }            
												    };
												    xhr.send();
												}

									        }

									        // Redirect
							        		if ($(document).find('input[name="redirect"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
							        			var href = $(document).find('input[name="redirect"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val().trim();
							        			if (response.indexOf(',') !== -1) {
													if (responseArray[3] != '' && href=='[post_url]') {
														window.location.href = responseArray[3];
													} else {
														window.location.href = href;
													}

													if (responseArray[4] != '') {
														window.location.href = responseArray[4];
													}
												}
							        		}

							        		// Popup
							        		if ($(document).find('[data-pafe-form-builder-popup][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
							        			$(document).find('[data-pafe-form-builder-popup][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
			        						}

			        						if ($(document).find('[data-pafe-form-builder-popup-open][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
							        			$(document).find('[data-pafe-form-builder-popup-open][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
			        						}

			        						if ($(document).find('[data-pafe-form-builder-popup-close][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
							        			$(document).find('[data-pafe-form-builder-popup-close][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
			        						}
										},
										error: function () {
											$(document).find('[data-pafe-form-builder-form-id="' + formID + '"]').closest('.elementor-element').css({'opacity' : 1});
								        	$parent.css({'opacity' : 1});
											$parent.removeClass('elementor-form-waiting');
											$parent.find('.pafe-form-builder-alert--stripe .elementor-message-danger').addClass('visible');
										},

									});
								}

							}
						});

					}
				}
		    });

		});

	};

	$(window).on('elementor/frontend/init', function () {

        elementorFrontend.hooks.addAction('frontend/element_ready/pafe-form-builder-field.default', WidgetPafeFormBuilderHandlerDate);
        elementorFrontend.hooks.addAction('frontend/element_ready/pafe-form-builder-field.default', WidgetPafeFormBuilderHandlerTime);
        elementorFrontend.hooks.addAction('frontend/element_ready/pafe-form-builder-field.default', WidgetPafeFormBuilderHandlerRangeSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/pafe-form-builder-field.default', WidgetPafeFormBuilderHandlerImageSelect);
        elementorFrontend.hooks.addAction('frontend/element_ready/pafe-form-builder-field.default', WidgetPafeFormBuilderHandlerStripe);

    });

    function getIndexColumn(column) {
		var columnArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

		var columnFirstWord = column.slice(0,1).toUpperCase(),
			columnSecondWord = column.slice(1,2).toUpperCase(),
			index = 0;
		  
		if(columnSecondWord == '') {
		  index = columnArray.indexOf(columnFirstWord);
		} else {
		  index = (columnArray.indexOf(columnFirstWord) + 1)*26 + columnArray.indexOf(columnSecondWord);
		}

		return index;
	}

})(jQuery);

jQuery(document).ready(function( $ ) {

	function getIndexColumn(column) {
		var columnArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

		var columnFirstWord = column.slice(0,1).toUpperCase(),
			columnSecondWord = column.slice(1,2).toUpperCase(),
			index = 0;
		  
		if(columnSecondWord == '') {
		  index = columnArray.indexOf(columnFirstWord);
		} else {
		  index = (columnArray.indexOf(columnFirstWord) + 1)*26 + columnArray.indexOf(columnSecondWord);
		}

		return index;
	}

	$(document).on('change','[name="upload_field"]',function(){
		var $form = $(this).closest('form');

		var $input = $(this),
			extension = $input.data('accept');

		if (extension == undefined) {
			extension = 'jpg,jpeg,png,gif,pdf,doc,docx,ppt,pptx,odt,avi,ogg,m4a,mov,mp3,mp4,mpg,wav,wmv';
		}

		if (extension != undefined) {
			if (extension.trim() == '') {
				extension = 'jpg,jpeg,png,gif,pdf,doc,docx,ppt,pptx,odt,avi,ogg,m4a,mov,mp3,mp4,mpg,wav,wmv';
			}
		}

		$form.validate({
			rules: {
				'upload_field': {
					extension: extension,
					maxsize: parseInt( $input.data('maxsize') ) * 1048576,
				}
			},
							  
		    messages:{
		        'upload_field': {
		        	extension: $input.data('types-message'),
		        	maxsize: $input.data('maxsize-message'),
		        }

		    }
	    });

		$form.submit(function (ev) {
    		ev.preventDefault();
	    });
		$form.trigger('submit');
	});
	
	$(document).on('click','[data-pafe-form-builder-submit-form-id]',function(){
		if ( $(this).data('pafe-form-builder-stripe-submit') == undefined ) {
	    	var formID = $(this).data('pafe-form-builder-submit-form-id'),
	    		$fields = $(document).find('[data-pafe-form-builder-form-id='+ formID +']'),
	    		requiredText = $(this).data('pafe-form-builder-required-text'),
	    		fieldsOj = [],
	    		error = 0
	    		formData = new FormData();

			$fields.each(function(){
				if ( $(this).data('pafe-form-builder-stripe') == undefined && $(this).data('pafe-form-builder-html') == undefined ) {
					if ( !$(this)[0].checkValidity() && $(this).closest('.elementor-widget').css('display') != 'none' && $(this).data('pafe-form-builder-honeypot') == undefined) {
						if ($(this).css('display') == 'none' || $(this).closest('div').css('display') == 'none' || $(this).data('pafe-form-builder-image-select') != undefined) {
							$(this).closest('.elementor-field-group').find('[data-pafe-form-builder-required]').html(requiredText);
						} else {
							if ($(this).data('pafe-form-builder-image-select') == undefined) {
								$(this)[0].reportValidity();
							}
						}
						error++;
					} else {

						$(this).closest('.elementor-field-group').find('[data-pafe-form-builder-required]').html('');

						var fieldType = $(this).attr('type'),
							fieldName = $(this).attr('name');

						if (fieldType == 'file') { 
							if($(this).hasClass('error')) {
								error++;
							} else {

								fieldName = $(this).attr('id').replace('form-field-','');

								$.each($(this)[0].files, function(i, file){
									formData.append( fieldName + '[]', file);
								});

								var fieldItem = {};
								fieldItem['label'] = $(this).closest('.elementor-field-group').find('.elementor-field-label').html();
								fieldItem['name'] = fieldName;
								fieldItem['value'] = '';
								fieldItem['upload'] = 1;

								if($(this).data('attach-files') != undefined) {
									fieldItem['attach-files'] = 1;
								}
								
								fieldsOj.push(fieldItem);

							}

							// [ Fix alert
						} else {
							if (fieldName.indexOf('[]') !== -1) {
			                    var fieldValueMultiple = [];

			                    if (fieldType == 'checkbox') {
			                        $(document).find('[name="'+ fieldName + '"]:checked').each(function () {
			                            fieldValueMultiple.push($(this).val());
			                        });
			                    } else {
			                        fieldValueMultiple = $(this).val();
			                        if (fieldValueMultiple == null) {
			                            var fieldValueMultiple = [];
			                        }
			                    }

			                    fieldValue = '';

			                    for (var j = 0; j < fieldValueMultiple.length; j++) {
			                    	fieldValue += fieldValueMultiple[j];
			                    	if (j != fieldValueMultiple.length - 1) {
			                    		fieldValue += ',';
			                    	}
			                    }
							} else {
								if (fieldType == 'radio' || fieldType == 'checkbox') {
				                    var fieldValue = $(document).find('[name="'+ fieldName +'"]:checked').val();
				                } else {
				                	if ($(this).data('pafe-form-builder-calculated-fields') != undefined) {
				                		var fieldValue = $(this).siblings('.pafe-calculated-fields-form').text();
				                	} else {
				                		var fieldValue = $(this).val().trim();
				                	}
				                }
							}
							
							if (fieldValue != undefined) {
								var fieldItem = {};
								fieldItem['label'] = $(this).closest('.elementor-field-group').find('.elementor-field-label').html();
								fieldItem['name'] = fieldName.replace('[]','').replace('form_fields[','').replace(']','');
								fieldItem['value'] = fieldValue;
								fieldsOj.push(fieldItem);
							}
						}
						
					}
				}
			});

			if (error == 0) {

				$(document).find('[data-pafe-form-builder-form-id="' + formID + '"]').closest('.elementor-element').css({'opacity' : 0.45});
				$(this).closest('.elementor-element').css({'opacity' : 0.45});
				$(this).closest('.elementor-element').addClass('elementor-form-waiting');

				formData.append("action", "pafe_ajax_form_builder");
				formData.append("post_id", $(document).find('input[name="post_id"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').eq(0).closest('[data-elementor-id]').data('elementor-id'));
				formData.append("form_id", $(document).find('input[name="form_id"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val());
				formData.append("fields", JSON.stringify(fieldsOj));
				formData.append("referrer", window.location.href);
				formData.append("remote_ip",$(document).find('input[name="remote_ip"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val());

				if ($(this).data('pafe-form-builder-submit-post-edit') != undefined) {
					formData.append("edit", $(this).data('pafe-form-builder-submit-post-edit'));
				}

				if ($(this).data('pafe-form-builder-submit-recaptcha') != undefined) {
					var recaptchaSiteKey = $(this).data('pafe-form-builder-submit-recaptcha');

					grecaptcha.ready(function() {
			            grecaptcha.execute(recaptchaSiteKey, {action: 'create_comment'}).then(function(token) {
			                formData.append("recaptcha",token);

			                var $parent = $(document).find('[data-pafe-form-builder-submit-form-id="' + formID + '"]').closest('.elementor-element');
							$parent.find('.elementor-message').removeClass('visible');

							var $submit = $(document).find('[data-pafe-form-builder-submit-form-id="' + formID + '"]');

							$.ajax({
								url: $('[data-pafe-ajax-url]').data('pafe-ajax-url'),
								type: 'POST',
								data: formData,
								processData: false,
								contentType: false,
								success: function (response) {
									$parent.css({'opacity' : 1});
									$parent.removeClass('elementor-form-waiting');
									if (response.trim() != '') {
						        		$parent.find('.elementor-message-success').addClass('visible');
						        	} else {
						        		$parent.find('.elementor-message-danger').addClass('visible');
					        		}

					        		if (response.indexOf(',') !== -1) {
										var responseArray = response.split(',');

										$parent.find('.elementor-message').each(function(){
											if (responseArray[3] != '') {
								        		var html = $(this).html().replace('[post_url]','<a href="' + responseArray[3] + '">' + responseArray[3] + '</a>');
								        		$(this).html(html);
								        	}
										});
									}

					        		var $wrapper = $submit.closest('[data-pafe-form-google-sheets-connector]');

									if ($wrapper.data('pafe-form-google-sheets-connector') != undefined) {
										var row = '',
											fieldList = $wrapper.data('pafe-form-google-sheets-connector-field-list'),
											columnArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
											fieldColumns = [];

										for (var i = 0; i < fieldList.length; i++) {
							            	fieldColumns.push(getIndexColumn(fieldList[i]['pafe_form_google_sheets_connector_field_column'])); 
								        }

										for (var z = 0; z < (Math.max.apply(null, fieldColumns) + 1); z++) {
											var value = '';

										 	for (var i = 0; i < fieldList.length; i++) {
									            var fieldID = fieldList[i]['pafe_form_google_sheets_connector_field_id'],
									            	fieldColumn = fieldList[i]['pafe_form_google_sheets_connector_field_column'];

								            	if (z == getIndexColumn(fieldColumn)) {
								            		for(var j=0; j < fieldsOj.length; ++j) {
								            			if (fieldsOj[j].name == fieldID) {
								            				value = fieldsOj[j].value;
								            			}
									        		}
								            	}  
									        }

									        row += '"'+value+'",';
								        }
									   
									    // Submission
									    row = row.slice(0, -1);
									    // Config
									    var gs_sid = $wrapper.data('pafe-form-google-sheets-connector'); // Enter your Google Sheet ID here
									    var gs_clid = $wrapper.data('pafe-form-google-sheets-connector-clid');; // Enter your API Client ID here
									    var gs_clis = $wrapper.data('pafe-form-google-sheets-connector-clis');; // Enter your API Client Secret here
									    var gs_rtok = $wrapper.data('pafe-form-google-sheets-connector-rtok');; // Enter your OAuth Refresh Token here
									    var gs_atok = false;
									    var gs_url = 'https://sheets.googleapis.com/v4/spreadsheets/'+gs_sid+'/values/A1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED';
									    var gs_body = '{"majorDimension":"ROWS", "values":[['+row+']]}';

									    // HTTP Request Token Refresh
									    var xhr = new XMLHttpRequest();
									    xhr.open('POST', 'https://www.googleapis.com/oauth2/v4/token?client_id='+gs_clid+'&client_secret='+gs_clis+'&refresh_token='+gs_rtok+'&grant_type=refresh_token');
									    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
									    xhr.onload = function() {           
									        var response = JSON.parse(xhr.responseText);
									        var gs_atok = response.access_token;            
											// HTTP Request Append Data
									        if(gs_atok) {
									            var xxhr = new XMLHttpRequest();
									            xxhr.open('POST', gs_url);
									            xxhr.setRequestHeader('Content-length', gs_body.length);
									            xxhr.setRequestHeader('Content-type', 'application/json');
									            xxhr.setRequestHeader('Authorization', 'OAuth ' + gs_atok );
									            xxhr.send(gs_body);
									        }            
									    };
									    xhr.send();
									}

					        		// Redirect
					        		if ($(document).find('input[name="redirect"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
					        			var href = $(document).find('input[name="redirect"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val().trim();
					        			if (response.indexOf(',') !== -1) {
											if (responseArray[3] != '' && href=='[post_url]') {
												window.location.href = responseArray[3];
											} else {
												window.location.href = href;
											}

											if (responseArray[4] != '') {
												window.location.href = responseArray[4];
											}
										}
					        		}

					        		// Popup
					        		if ($(document).find('[data-pafe-form-builder-popup][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
					        			$(document).find('[data-pafe-form-builder-popup][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
	        						}

	        						if ($(document).find('[data-pafe-form-builder-popup-open][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
					        			$(document).find('[data-pafe-form-builder-popup-open][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
	        						}

	        						if ($(document).find('[data-pafe-form-builder-popup-close][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
					        			$(document).find('[data-pafe-form-builder-popup-close][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
	        						}
								}
							});
			            });
			        }); 
		        } else {

					var $parent = $(document).find('[data-pafe-form-builder-submit-form-id="' + formID + '"]').closest('.elementor-element');
					$parent.find('.elementor-message').removeClass('visible');

					var $submit = $(document).find('[data-pafe-form-builder-submit-form-id="' + formID + '"]');

					$.ajax({
						url: $('[data-pafe-ajax-url]').data('pafe-ajax-url'),
						type: 'POST',
						data: formData,
						processData: false,
						contentType: false,
						success: function (response) {
							$parent.css({'opacity' : 1});
							$parent.removeClass('elementor-form-waiting');
							if (response.trim() != '') {
				        		$parent.find('.elementor-message-success').addClass('visible');
				        	} else {
				        		$parent.find('.elementor-message-danger').addClass('visible');
			        		}

			        		if (response.indexOf(',') !== -1) {
								var responseArray = response.split(',');

								$parent.find('.elementor-message').each(function(){
									if (responseArray[3] != '') {
						        		var html = $(this).html().replace('[post_url]','<a href="' + responseArray[3] + '">' + responseArray[3] + '</a>');
						        		$(this).html(html);
						        	}
								});
							}

			        		var $wrapper = $submit.closest('[data-pafe-form-google-sheets-connector]');

							if ($wrapper.data('pafe-form-google-sheets-connector') != undefined) {
								var row = '',
									fieldList = $wrapper.data('pafe-form-google-sheets-connector-field-list'),
									columnArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
									fieldColumns = [];

								for (var i = 0; i < fieldList.length; i++) {
					            	fieldColumns.push(getIndexColumn(fieldList[i]['pafe_form_google_sheets_connector_field_column'])); 
						        }

								for (var z = 0; z < (Math.max.apply(null, fieldColumns) + 1); z++) {
									var value = '';

								 	for (var i = 0; i < fieldList.length; i++) {
							            var fieldID = fieldList[i]['pafe_form_google_sheets_connector_field_id'],
							            	fieldColumn = fieldList[i]['pafe_form_google_sheets_connector_field_column'];
							            	
						            	if (z == getIndexColumn(fieldColumn)) {
						            		for(var j=0; j < fieldsOj.length; ++j) {
						            			if (fieldsOj[j].name == fieldID) {
						            				value = fieldsOj[j].value;
						            			}
							        		}

						            	}  
							        }

							        row += '"'+value+'",';
						        }
							   
							    // Submission
							    row = row.slice(0, -1);
							    // Config
							    var gs_sid = $wrapper.data('pafe-form-google-sheets-connector'); // Enter your Google Sheet ID here
							    var gs_clid = $wrapper.data('pafe-form-google-sheets-connector-clid');; // Enter your API Client ID here
							    var gs_clis = $wrapper.data('pafe-form-google-sheets-connector-clis');; // Enter your API Client Secret here
							    var gs_rtok = $wrapper.data('pafe-form-google-sheets-connector-rtok');; // Enter your OAuth Refresh Token here
							    var gs_atok = false;
							    var gs_url = 'https://sheets.googleapis.com/v4/spreadsheets/'+gs_sid+'/values/A1:append?includeValuesInResponse=false&insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED';
							    var gs_body = '{"majorDimension":"ROWS", "values":[['+row+']]}';

							    // HTTP Request Token Refresh
							    var xhr = new XMLHttpRequest();
							    xhr.open('POST', 'https://www.googleapis.com/oauth2/v4/token?client_id='+gs_clid+'&client_secret='+gs_clis+'&refresh_token='+gs_rtok+'&grant_type=refresh_token');
							    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
							    xhr.onload = function() {           
							        var response = JSON.parse(xhr.responseText);
							        var gs_atok = response.access_token;            
									// HTTP Request Append Data
							        if(gs_atok) {
							            var xxhr = new XMLHttpRequest();
							            xxhr.open('POST', gs_url);
							            xxhr.setRequestHeader('Content-length', gs_body.length);
							            xxhr.setRequestHeader('Content-type', 'application/json');
							            xxhr.setRequestHeader('Authorization', 'OAuth ' + gs_atok );
							            xxhr.send(gs_body);
							        }            
							    };
							    xhr.send();
							}

			        		// Redirect
			        		if ($(document).find('input[name="redirect"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
			        			var href = $(document).find('input[name="redirect"][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').val().trim();
			        			if (response.indexOf(',') !== -1) {
									if (responseArray[3] != '' && href=='[post_url]') {
										window.location.href = responseArray[3];
									} else {
										window.location.href = href;
									}

									if (responseArray[4] != '') {
										window.location.href = responseArray[4];
									}
								}
			        		}

			        		// Popup
			        		if ($(document).find('[data-pafe-form-builder-popup][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
			        			$(document).find('[data-pafe-form-builder-popup][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
    						}

    						if ($(document).find('[data-pafe-form-builder-popup-open][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
			        			$(document).find('[data-pafe-form-builder-popup-open][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
    						}

    						if ($(document).find('[data-pafe-form-builder-popup-close][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').length != 0) {
			        			$(document).find('[data-pafe-form-builder-popup-close][data-pafe-form-builder-hidden-form-id="'+ formID +'"]').trigger('click');
    						}
						}
					});
				} // recaptcha

			}
		}
    });

});

jQuery(document).ready(function($) {

    function pafeConditionalLogicFormCheck($conditionalsSeclector) {
        $conditionalsSeclector.each(function(){
            var $fieldGroup = $(this), 
				notField = $(this).data('pafe-form-builder-conditional-logic-not-field'),
				speed = $fieldGroup.data('pafe-form-builder-conditional-logic-speed'),
                easing = $fieldGroup.data('pafe-form-builder-conditional-logic-easing'),
                conditionals = $fieldGroup.data('pafe-form-builder-conditional-logic'),
                showAction = true;

			if (notField != undefined) {
				var $fieldWidget = $(this),
	            	popupLength = $fieldWidget.closest('.elementor-location-popup').length,
	            	$fieldCurrent = $(this),
	            	formID = $fieldCurrent.data('pafe-form-builder-conditional-logic-not-field-form-id');

			} else {
				var $fieldWidget = $(this).closest('.elementor-element'),
	            	popupLength = $fieldWidget.closest('.elementor-location-popup').length,
	            	$fieldCurrent = $fieldGroup.find('[data-pafe-form-builder-form-id]'),
	            	formID = $fieldCurrent.data('pafe-form-builder-form-id');
            }

            if (JSON.stringify(conditionals).indexOf('pafe') !== -1 && JSON.stringify(conditionals).indexOf('show') == -1) {
            	showAction = false;
            }

            if (notField != undefined) {
				showAction = true;
			}

            // Loop qua tat ca field trong form
            //$(document).find('[name^="form_fields"][data-pafe-form-builder-form-id="' + formID + '"]').each(function(){
                //if ($(this).attr('id') != undefined) {

                	if (notField != undefined) {
						var fieldName = 1;
					} else {
						var fieldName = $fieldCurrent.attr('name').replace('[]','').replace('form_fields[','').replace(']','');
            		}

                    var error = 0,
                        conditionalsCount = 0,
                        conditionalsAndOr = '',
                        indexConditonalRight = -1,
                        setValue = '';

                    for (var i = 0; i < conditionals.length; i++) {
                    	if (notField != undefined) {
							var show = 1;
						} else {
							var show = $fieldCurrent.attr('name').replace('form_fields[','').replace('[]','').replace(']','');
            			}

                        var fieldIf = conditionals[i]['pafe_conditional_logic_form_if'].trim(),
                            comparison = conditionals[i]['pafe_conditional_logic_form_comparison_operators'],
                            value = conditionals[i]['pafe_conditional_logic_form_value'],
                            type = conditionals[i]['pafe_conditional_logic_form_type'],
                            errorCurrent = error;

                        if (type == 'number') {
                            value = parseInt( value );
                        }

                        if(fieldName == show) {
                            conditionalsCount++;
                            conditionalsAndOr = conditionals[i]['pafe_conditional_logic_form_and_or_operators'];
                            if(fieldIf != '') {
                                var $fieldIfSelector = $(document).find('[name="form_fields[' + fieldIf + ']"][data-pafe-form-builder-form-id="' + formID + '"]'),
                                    fieldIfType = $fieldIfSelector.attr('type');

                                if($fieldIfSelector.length > 0) {

                                    if (fieldIfType == 'radio' || fieldIfType == 'checkbox') {
                                        var fieldIfValue = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + ']"]:checked').val();
                                    } else {
                                        var fieldIfValue = $fieldIfSelector.val().trim();
                                    }
                                    
                                    if (fieldIfValue != undefined && fieldIfValue.indexOf(';') !== -1) {
                                        fieldIfValue = fieldIfValue.split(';');
                                        fieldIfValue = fieldIfValue[0];
                                    }

                                    if (type == 'number') {
                                        if (fieldIfValue == undefined) {
                                            fieldIfValue = 0;
                                        } else {
                                            fieldIfValue = parseInt( fieldIfValue );
                                            if (isNaN(fieldIfValue)) {
                                                fieldIfValue = 0;
                                            }
                                        }
                                    }

                                    if(comparison == 'not-empty') {
                                        if (fieldIfValue == '' || fieldIfValue == 0) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == 'empty') {
                                        if (fieldIfValue != '' || fieldIfValue != 0) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == '=') {
                                        if (fieldIfValue != value) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == '!=') {
                                        if (fieldIfValue == value) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == '>') {
                                        if (fieldIfValue <= value) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == '>=') {
                                        if (fieldIfValue < value) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == '<') {
                                        if (fieldIfValue >= value) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == '<=') {
                                        if (fieldIfValue > value) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == 'checked') {
                                        if (!$fieldIfSelector.prop('checked')) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == 'unchecked') {
                                        if ($fieldIfSelector.prop('checked')) {
                                            error += 1;
                                        }
                                    }
                                }

                                var $fieldIfSelectorMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + '][]"]');
                                if($fieldIfSelectorMultiple.length > 0) {
                                    fieldIfTypeMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + '][]"]').attr('type');
                                    var fieldIfValueMultiple = $fieldIfSelectorMultiple.val(),
                                        fieldIfValueMultiple = [];

                                    if (fieldIfTypeMultiple == 'checkbox') {
                                        $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + '][]"]:checked').each(function () {
                                            fieldIfValueMultiple[i++] = $(this).val();
                                        });
                                    } else {
                                        fieldIfValueMultiple = $fieldIfSelectorMultiple.val();
                                        if (fieldIfValueMultiple == null) {
                                            var fieldIfValueMultiple = [];
                                        }
                                    }

                                    if(comparison == 'not-empty') {
                                        if (fieldIfValueMultiple.length == 0) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == 'empty') {
                                        if (fieldIfValueMultiple.length > 0) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == '=' || comparison == '!=' || comparison == '>' || comparison == '>=' || comparison == '<' || comparison == '<=') {
                                        if (fieldIfValueMultiple.length == 0) {
                                            error += 1;
                                        }
                                    }
                                    if(comparison == '=') {
                                        for (var j = 0; j < fieldIfValueMultiple.length; j++) {
                                            if (fieldIfValueMultiple[j] != value) {
                                                error += 1;
                                            }
                                        }
                                    }
                                    if(comparison == '!=') {
                                        for (var j = 0; j < fieldIfValueMultiple.length; j++) {
                                            if (fieldIfValueMultiple[j] == value) {
                                                error += 1;
                                            }
                                        }
                                    }
                                    if(comparison == '>') {
                                        for (var j = 0; j < fieldIfValueMultiple.length; j++) {
                                            if (fieldIfValueMultiple[j] <= value) {
                                                error += 1;
                                            }
                                        }
                                    }
                                    if(comparison == '>=') {
                                        for (var j = 0; j < fieldIfValueMultiple.length; j++) {
                                            if (fieldIfValueMultiple[j] < value) {
                                                error += 1;
                                            }
                                        }
                                    }
                                    if(comparison == '<') {
                                        for (var j = 0; j < fieldIfValueMultiple.length; j++) {
                                            if (fieldIfValueMultiple[j] >= value) {
                                                error += 1;
                                            }
                                        }
                                    }
                                    if(comparison == '<=') {
                                        for (var j = 0; j < fieldIfValueMultiple.length; j++) {
                                            if (fieldIfValueMultiple[j] > value) {
                                                error += 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        var $setValueForSelector = $fieldCurrent;

                        if (errorCurrent == error) {
                        	if (conditionals[i]['pafe_conditional_logic_form_set_value'] != undefined && conditionals[i]['pafe_conditional_logic_form_action'].indexOf('set_value') !== -1 ) {
                        		setValue = conditionals[i]['pafe_conditional_logic_form_set_value'];
                        		
                        		if (conditionals[i]['pafe_conditional_logic_form_set_value_for'] != undefined && conditionals[i]['pafe_conditional_logic_form_set_value_for'] != '') {
                        			var $setValueForSelector = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name^="form_fields[' + conditionals[i]['pafe_conditional_logic_form_set_value_for'] + ']"]');
                        			//console.log(conditionals[i]['pafe_conditional_logic_form_set_value_for']);

                        		} else {
                        			var $setValueForSelector = $fieldCurrent;
                        			var setValueForThis = true;
                        		}
                        	}
                        }
                    }

                    var checkSelect = $(this).find('option:first');

                    var checkRadioCheckbox = false;

                    if ($setValueForSelector.attr('type') == 'radio' || $setValueForSelector.attr('type') == 'checkbox') {
                    	checkRadioCheckbox = true;
                    }

                    var defaultValue = $(this).data('pafe-form-builder-default-value');

                    if (conditionalsAndOr == 'or') {
                        if (conditionalsCount > error) {
                        	if (popupLength > 0) {
                        		if($(this).attr('type') != 'hidden') {
                        			$fieldWidget.show();
                        		}

                        		if (checkRadioCheckbox && $(this).data('checked') != undefined && !$(this).hasClass('pafe-checked')) {
                					$(this).prop('checked', true).addClass('pafe-checked');
                				}
                    			
                    			if (setValue != '' && checkRadioCheckbox && !$(this).hasClass('pafe-checked-setvalue')) {
                    				if (setValue == $setValueForSelector.val()) {
                    					$setValueForSelector.prop('checked', true).addClass('pafe-checked-setvalue');
                    				}

                    				if (setValue == 'unchecked' || setValue == 'checked') {
                    					if (setValue == 'unchecked') {
	                    					$setValueForSelector.prop('checked', false).addClass('pafe-checked-setvalue');
	                					} else {
	                						$setValueForSelector.prop('checked', true).addClass('pafe-checked-setvalue');
	                					}
                					} else {
	                    				if (setValue == $setValueForSelector.val()) {
	                    					$setValueForSelector.prop('checked', true).addClass('pafe-checked-setvalue');
	                    				}
                    				}
                        		}

                        		if (setValue != '' && !checkRadioCheckbox) {
                        			$setValueForSelector.val(setValue);
                        		}
                        	} else {
                        		if($(this).attr('type') != 'hidden') {
                        			$fieldWidget.slideDown(speed,easing);
                    			}

                    			if (checkRadioCheckbox && $setValueForSelector.data('checked') != undefined && !$setValueForSelector.hasClass('pafe-checked')) {
                					$(this).prop('checked', true).addClass('pafe-checked');
                				}
                    			
                    			if (setValue != '' && checkRadioCheckbox && !$(this).hasClass('pafe-checked-setvalue')) {
                    				if (setValue == $setValueForSelector.val()) {
                    					$setValueForSelector.prop('checked', true).addClass('pafe-checked-setvalue');
                    				}

                    				if (setValue == 'unchecked' || setValue == 'checked') {
                    					if (setValue == 'unchecked') {
	                    					$setValueForSelector.prop('checked', false).addClass('pafe-checked-setvalue');
	                					} else {
	                						$setValueForSelector.prop('checked', true).addClass('pafe-checked-setvalue');
	                					}
                					} else {
	                    				if (setValue == $setValueForSelector.val()) {
	                    					$setValueForSelector.prop('checked', true).addClass('pafe-checked-setvalue');
	                    				}
                    				}
                        		}

                        		if (setValue != '' && !checkRadioCheckbox) {
                        			$setValueForSelector.val(setValue);
                        		}
                        	} 
                        } else {
                            if (popupLength > 0) {
                            	if (showAction) {
                            		$fieldWidget.hide();
                            	}

                            	if (notField == undefined) {
	                            	if (defaultValue != undefined && defaultValue != '') {
	                            		$(this).val(defaultValue);
	                            	} else {
	                            		if (checkSelect.length != 0) {
		                    				$(this).val((checkSelect.val()));
		                    			} else {
											if (checkRadioCheckbox) {
		                    					$(this).prop('checked', false).removeClass('pafe-checked').removeClass('pafe-checked-setvalue');
		                    				} else {
		                    					$(this).val('');
		                    				}
		                    			}
	                            	}
                            	}
                    			
                        	} else {
                        		if (showAction) {
                    				$fieldWidget.slideUp(speed,easing);
                				}
                    			
                    			if (notField == undefined) {
	                            	if (defaultValue != undefined && defaultValue != '') {
	                            		$(this).val(defaultValue);
	                            	} else {
	                            		if (checkSelect.length != 0) {
		                    				$(this).val((checkSelect.val()));
		                    			} else {
		                    				if (checkRadioCheckbox) {
		                    					$(this).prop('checked', false).removeClass('pafe-checked').removeClass('pafe-checked-setvalue');
		                    				} else {
		                    					$(this).val('');
		                    				}
											
		                    			}
	                            	}
                            	}
                        	}
                        }
                    } 

                    if (conditionalsAndOr == 'and') {
                        if (error == 0) {
                            if (popupLength > 0) {
                            	if($(this).attr('type') != 'hidden') {
                        			$fieldWidget.show();
                    			}

                        		if (checkRadioCheckbox && $(this).data('checked') != undefined && !$(this).hasClass('pafe-checked')) {
                					$(this).prop('checked', true).addClass('pafe-checked');
                				}
                    			
                    			if (setValue != '' && checkRadioCheckbox && !$(this).hasClass('pafe-checked-setvalue')) {
                    				if (setValue == $(this).val()) {
                    					$(this).prop('checked', true).addClass('pafe-checked-setvalue');
                    				}
                        		}

                        		if (setValue != '' && !checkRadioCheckbox) {
                        			$(this).val(setValue);
                        		}
                        	} else {
                        		if($(this).attr('type') != 'hidden') {
                        			$fieldWidget.slideDown(speed,easing);
                    			}
                    			
                    			if (checkRadioCheckbox && $(this).data('checked') != undefined && !$(this).hasClass('pafe-checked')) {
                					$(this).prop('checked', true).addClass('pafe-checked');
                				}
                    			
                    			if (setValue != '' && checkRadioCheckbox && !$(this).hasClass('pafe-checked-setvalue')) {
                    				if (setValue == $(this).val()) {
                    					$(this).prop('checked', true).addClass('pafe-checked-setvalue');
                    				}
                        		}

                        		if (setValue != '' && !checkRadioCheckbox) {
                        			$(this).val(setValue);
                        		}
                        	}
                        } else {
                            if (popupLength > 0) {
                    			if (showAction) {
                            		$fieldWidget.hide();
                            	}
                            	
                            	if (notField == undefined) {
	                            	if (defaultValue != undefined && defaultValue != '') {
	                            		$(this).val(defaultValue);
	                            	} else {
	                            		if (checkSelect.length != 0) {
		                    				$(this).val((checkSelect.val()));
		                    			} else {
											if (checkRadioCheckbox) {
		                    					$(this).prop('checked', false).removeClass('pafe-checked').removeClass('pafe-checked-setvalue');
		                    				} else {
		                    					$(this).val('');
		                    				}
		                    			}
	                            	}
                            	}
                        	} else {
                    			if (showAction) {
                    				$fieldWidget.slideUp(speed,easing);
                				}

                				if (notField == undefined) {
	                            	if (defaultValue != undefined && defaultValue != '') {
	                            		$(this).val(defaultValue);
	                            	} else {
	                            		if (checkSelect.length != 0) {
		                    				$(this).val((checkSelect.val()));
		                    			} else {
											if (checkRadioCheckbox) {
		                    					$(this).prop('checked', false).removeClass('pafe-checked').removeClass('pafe-checked-setvalue');
		                    				} else {
		                    					$(this).val('');
		                    				}
		                    			}
	                            	}
                            	}
                        	}
                        }
                    }

                    pafeCalculatedFieldsForm('');
                //}
            //});
			
			if ($(this).hasClass('elementor-button')) {

	            var formID = $(this).data('pafe-form-builder-submit-form-id'),
	            	errorSubmit = 0,
	                conditionalsCountSubmit = 0,
	                conditionalsAndOrSubmit = '';

	            for (var i = 0; i < conditionals.length; i++) {
	                var fieldIf = conditionals[i]['pafe_conditional_logic_form_if'].trim(),
	                    comparison = conditionals[i]['pafe_conditional_logic_form_comparison_operators'],
	                    value = conditionals[i]['pafe_conditional_logic_form_value'],
	                    type = conditionals[i]['pafe_conditional_logic_form_type'];

	                if (type == 'number') {
	                    value = parseInt( value );
	                }

	                    conditionalsCountSubmit++;
	                    conditionalsAndOrSubmit = conditionals[i]['pafe_conditional_logic_form_and_or_operators'];
	                    if(fieldIf != '') {
	                        var $fieldIfSelector = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + ']"]'),
	                            fieldIfType = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + ']"]').attr('type');

	                        if($fieldIfSelector.length > 0) {

	                            if (fieldIfType == 'radio') {
	                                var fieldIfValue = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + ']"]:checked').val();
	                            } else {
	                                var fieldIfValue = $fieldIfSelector.val().trim();
	                            }
	                            
	                            if (fieldIfValue != undefined && fieldIfValue.indexOf(';') !== -1) {
	                                fieldIfValue = fieldIfValue.split(';');
	                                fieldIfValue = fieldIfValue[0];
	                            }

	                            if (type == 'number') {
	                                if (fieldIfValue == undefined) {
	                                    fieldIfValue = 0;
	                                } else {
	                                    fieldIfValue = parseInt( fieldIfValue );
	                                    if (isNaN(fieldIfValue)) {
	                                        fieldIfValue = 0;
	                                    }
	                                }
	                            }

	                            if(comparison == 'not-empty') {
	                                if (fieldIfValue == '' || fieldIfValue == 0) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == 'empty') {
	                                if (fieldIfValue != '' || fieldIfValue != 0) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == '=') {
	                                if (fieldIfValue != value) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == '!=') {
	                                if (fieldIfValue == value) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == '>') {
	                                if (fieldIfValue <= value) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == '>=') {
	                                if (fieldIfValue < value) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == '<') {
	                                if (fieldIfValue >= value) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == '<=') {
	                                if (fieldIfValue > value) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == 'checked') {
	                                if (!$fieldIfSelector.prop('checked')) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == 'unchecked') {
	                                if ($fieldIfSelector.prop('checked')) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                        }

	                        var $fieldIfSelectorMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + '][]"]');
	                        if($fieldIfSelectorMultiple.length > 0) {
	                            fieldIfTypeMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + '][]"]').attr('type');
	                            var fieldIfValueMultiple = $fieldIfSelectorMultiple.val(),
	                                fieldIfValueMultiple = [];

	                            if (fieldIfTypeMultiple == 'checkbox') {
	                                $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldIf + '][]"]:checked').each(function () {
	                                    fieldIfValueMultiple[i++] = $(this).val();
	                                });
	                            } else {
	                                fieldIfValueMultiple = $fieldIfSelectorMultiple.val();
	                                if (fieldIfValueMultiple == null) {
	                                    var fieldIfValueMultiple = [];
	                                }
	                            }

	                            if(comparison == 'not-empty') {
	                                if (fieldIfValueMultiple.length == 0) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == 'empty') {
	                                if (fieldIfValueMultiple.length > 0) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == '=' || comparison == '!=' || comparison == '>' || comparison == '>=' || comparison == '<' || comparison == '<=') {
	                                if (fieldIfValueMultiple.length == 0) {
	                                    errorSubmit += 1;
	                                }
	                            }
	                            if(comparison == '=') {
	                                for (var j = 0; j < fieldIfValueMultiple.length; j++) {
	                                    if (fieldIfValueMultiple[j] != value) {
	                                        errorSubmit += 1;
	                                    }
	                                }
	                            }
	                            if(comparison == '!=') {
	                                for (var j = 0; j < fieldIfValueMultiple.length; j++) {
	                                    if (fieldIfValueMultiple[j] == value) {
	                                        errorSubmit += 1;
	                                    }
	                                }
	                            }
	                            if(comparison == '>') {
	                                for (var j = 0; j < fieldIfValueMultiple.length; j++) {
	                                    if (fieldIfValueMultiple[j] <= value) {
	                                        errorSubmit += 1;
	                                    }
	                                }
	                            }
	                            if(comparison == '>=') {
	                                for (var j = 0; j < fieldIfValueMultiple.length; j++) {
	                                    if (fieldIfValueMultiple[j] < value) {
	                                        errorSubmit += 1;
	                                    }
	                                }
	                            }
	                            if(comparison == '<') {
	                                for (var j = 0; j < fieldIfValueMultiple.length; j++) {
	                                    if (fieldIfValueMultiple[j] >= value) {
	                                        errorSubmit += 1;
	                                    }
	                                }
	                            }
	                            if(comparison == '<=') {
	                                for (var j = 0; j < fieldIfValueMultiple.length; j++) {
	                                    if (fieldIfValueMultiple[j] > value) {
	                                        errorSubmit += 1;
	                                    }
	                                }
	                            }
	                        }
	                    }
	            }

	            if (conditionalsAndOrSubmit == 'or') {
	                if (conditionalsCountSubmit > errorSubmit) {
	                    if (popupLength > 0) {
	                    	if($(this).attr('type') != 'hidden') {
                    			$fieldWidget.show();
                			}
                    	} else {
                    		if($(this).attr('type') != 'hidden') {
                    			$fieldWidget.slideDown(speed,easing);
                			}
                    	}
	                } else {
	                    if (popupLength > 0) {
                			$fieldWidget.hide();
                    	} else {
                			$fieldWidget.slideUp(speed,easing);
                    	}
	                }
	            } 

	            if (conditionalsAndOrSubmit == 'and') {
	                if (error == 0) {
	                    if (popupLength > 0) {
	                    	if($(this).attr('type') != 'hidden') {
                    			$fieldWidget.show();
                			}
                    	} else {
                    		if($(this).attr('type') != 'hidden') {
                    			$fieldWidget.slideDown(speed,easing);
                			}
                    	}
	                } else {
	                    if (popupLength > 0) {
                			$fieldWidget.hide();
                    	} else {
                			$fieldWidget.slideUp(speed,easing);
                    	}
	                }
	            }
            }

        });
    }

    var $conditionals = $(document).find('body:not(.elementor-editor-active) [data-pafe-form-builder-conditional-logic]');
	if ($conditionals.length > 0) {
		pafeConditionalLogicFormCheck($conditionals);
	}

	$(document).on('keyup change','[data-pafe-form-builder-form-id]', function(){
		var conditionalsIf = '"pafe_conditional_logic_form_if":"' + $(this).attr('name').replace('[]','').replace('form_fields[','').replace(']','') + '"';
		var $conditionals = $(document).find("[data-pafe-form-builder-conditional-logic*='" + conditionalsIf +"']");
		if ($conditionals.length > 0) {
			pafeConditionalLogicFormCheck($conditionals);
		}
	});

	function pafeCalculatedFieldsForm(fieldNameElement) {
		var selector = '[data-pafe-form-builder-calculated-fields]';
		if (fieldNameElement != '') {
			selector = '[data-pafe-form-builder-calculated-fields*='+ fieldNameElement +']';
		}

        $(document).find(selector).each(function(){
            var $fieldWidget = $(this).closest('.elementor-element'),
            	$fieldCurrent = $(this),
            	formID = $fieldCurrent.data('pafe-form-builder-form-id');
                calculation = $fieldCurrent.data('pafe-form-builder-calculated-fields');

            if (calculation.indexOf('field id') == -1) {

	            // Loop qua tat ca field trong form
	            $(document).find('[name^="form_fields"][data-pafe-form-builder-form-id="' + formID + '"]').each(function(){

	                if ($(this).attr('id') != undefined) {
	                    var fieldName = $(this).attr('name').replace('[]','').replace('form_fields[','').replace(']',''),
	                        $fieldSelector = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + ']"]'),
	                        fieldType = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + ']"]').attr('type');

	                    if($fieldSelector.length > 0) {

	                        if (fieldType == 'radio' || fieldType == 'checkbox') {
	                            var fieldValue = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + ']"]:checked').val();
	                        } else {
	                            var fieldValue = $fieldSelector.val().trim();
	                        }

	                        if (fieldValue == undefined) {
	                            fieldValue = 0;
	                        } else {
	                            fieldValue = parseInt( fieldValue );
	                            if (isNaN(fieldValue)) {
	                                fieldValue = 0;
	                            }
	                        }

	                        window[fieldName] = parseInt( fieldValue );
	                    }

	                    if (fieldName.indexOf('[]') !== -1) {
	                        fieldName = fieldName.replace('[]','');
	                        var $fieldSelectorMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]');
	                        if($fieldSelectorMultiple.length > 0) {
	                            fieldTypeMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]').attr('type');
	                            var fieldValueMultiple = [];

	                            if (fieldTypeMultiple == 'checkbox') {
	                                $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]:checked').each(function (index,element) {
	                                    fieldValueMultiple.push($(this).val());
	                                });
	                            } else {
	                                fieldValueMultiple = $fieldSelectorMultiple.val();
	                                if (fieldValueMultiple == null) {
	                                    var fieldValueMultiple = [];
	                                }
	                            }

	                            fieldValueMultipleTotal = 0;

	                            for (var j = 0; j < fieldValueMultiple.length; j++) {
	                                fieldValue = parseInt( fieldValueMultiple[j] );
	                                if (isNaN(fieldValue)) {
	                                    fieldValue = 0;
	                                }
	                                fieldValueMultipleTotal += fieldValue;
	                            }

	                            window[fieldName] = fieldValueMultipleTotal;
	                        }
	                    }
	                }
	            });

            } else {
            	var fieldNameArray = calculation.match(/\"(.*?)\"/g);
            	for (var jx = 0; jx<fieldNameArray.length; jx++) {
            		var fieldNameSlug = fieldNameArray[jx].replace('"','').replace('"',''),
            			$fieldSelectorExist = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name^="form_fields[' + fieldNameSlug + ']"]'),
                        $fieldSelector = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldNameSlug + ']"]');

                    if($fieldSelectorExist.length > 0) {  

                    	var fieldName = $fieldSelectorExist.attr('name').replace('form_fields[','').replace(']',''),
	                        fieldType = $fieldSelectorExist.attr('type');

	                    if($fieldSelector.length > 0) {

	                        if (fieldType == 'radio' || fieldType == 'checkbox') {
	                            var fieldValue = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + ']"]:checked').val();
	                        } else {
	                            var fieldValue = $fieldSelector.val().trim();
	                        }

	                        if (fieldValue == undefined) {
	                            fieldValue = 0;
	                        } else {
	                            fieldValue = parseInt( fieldValue );
	                            if (isNaN(fieldValue)) {
	                                fieldValue = 0;
	                            }
	                        }

	                        window[fieldName] = parseInt( fieldValue );
	                    }

	                    if (fieldName.indexOf('[]') !== -1) {
	                        fieldName = fieldName.replace('[]','');
	                        var $fieldSelectorMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]');
	                        if($fieldSelectorMultiple.length > 0) {
	                            fieldTypeMultiple = $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]').attr('type');
	                            var fieldValueMultiple = [];

	                            if (fieldTypeMultiple == 'checkbox') {
	                                $(document).find('[data-pafe-form-builder-form-id="' + formID + '"][name="form_fields[' + fieldName + '][]"]:checked').each(function (index,element) {
	                                    fieldValueMultiple.push($(this).val());
	                                });
	                            } else {
	                                fieldValueMultiple = $fieldSelectorMultiple.val();
	                                if (fieldValueMultiple == null) {
	                                    var fieldValueMultiple = [];
	                                }
	                            }

	                            fieldValueMultipleTotal = 0;

	                            for (var j = 0; j < fieldValueMultiple.length; j++) {
	                                fieldValue = parseInt( fieldValueMultiple[j] );
	                                if (isNaN(fieldValue)) {
	                                    fieldValue = 0;
	                                }
	                                fieldValueMultipleTotal += fieldValue;
	                            }

	                            window[fieldName] = fieldValueMultipleTotal;
	                        }
	                    }
                    }
            	}
            }

            var calculation = calculation.replace(/\[field id=/g, '').replace(/\"]/g, '').replace(/\"/g, '');

            var totalFieldContent = eval(calculation);
        		$fieldWidget.find('.pafe-calculated-fields-form__value').html(totalFieldContent);
            	$fieldCurrent.val(totalFieldContent);
            
            var fieldNameCalc = $(this).attr('name').replace('[]','').replace('form_fields[','').replace(']','');
			pafeCalculatedFieldsForm(fieldNameCalc);

        });
    }

    pafeCalculatedFieldsForm('');

	$(document).on('keyup change','[data-pafe-form-builder-form-id]', function(){
		var fieldName = $(this).attr('name').replace('[]','').replace('form_fields[','').replace(']','');
		pafeCalculatedFieldsForm(fieldName);
	});

	function IDGenerator() {
	 
		 this.length = 8;
		 this.timestamp = +new Date;
		 
		 var _getRandomInt = function( min, max ) {
			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
		 }
		 
		 this.generate = function() {
			 var ts = this.timestamp.toString();
			 var parts = ts.split( "" ).reverse();
			 var id = "";
			 
			 for( var i = 0; i < this.length; ++i ) {
				var index = _getRandomInt( 0, parts.length - 1 );
				id += parts[index];	 
			 }
			 
			 return id;
		 }

		 
	 }

	$(document).on('keyup change','[data-pafe-form-builder-image-upload]', function(){

		var $label = $(this).closest('label'),
			$widget = $(this).closest('.elementor-element');

		$.each($(this)[0].files, function(i, file){
			var imgPath = file.name,
				extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
			if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
				if (typeof(FileReader) != "undefined") {

					if($label.attr('multiple') != 'multiple') {
						$label.hide(0);
					}

					var unique = new IDGenerator(),
						uniqueID = unique.generate();
				    var reader = new FileReader();
				    reader.onload = function(e) {
						image = new Image();
						image.src = e.target.result;
						$label.before('<div class="pafe-form-builder-image-upload-placeholder pafe-form-builder-image-upload-uploading" style="background-image:url('+e.target.result+')" data-pafe-form-builder-image-upload-placeholder="'+ uniqueID +'"><input type="text" style="display:none;" data-pafe-form-builder-image-upload-item><span class="pafe-form-builder-image-upload-button pafe-form-builder-image-upload-button--remove" data-pafe-form-builder-image-upload-button-remove><i class="fa fa-times" aria-hidden="true"></i></span><span class="pafe-form-builder-image-upload-button pafe-form-builder-image-upload-button--uploading" data-pafe-form-builder-image-upload-button-uploading><i class="fa fa-spinner fa-spin"></i></span></div>');
				    }
				    reader.readAsDataURL(file);

					var formData = new FormData();
					formData.append( 'upload', file);

					$.ajax({
					    url: $('[data-pafe-form-builder-tinymce-upload]').data('pafe-form-builder-tinymce-upload'),
					    type: "POST",
					    data: formData,
					    processData: false,
					    contentType: false,
					    success: function (response) {
							var obj = JSON.parse(response);
							var imageItem = $(document).find('[data-pafe-form-builder-image-upload-placeholder="' + uniqueID + '"]');
							if (imageItem.length == 1) {
								imageItem.removeClass('pafe-form-builder-image-upload-uploading').addClass('pafe-form-builder-image-upload-uploaded');
					    		imageItem.find('input').attr('value',obj.location);

					    		var imageUploadedURL = '';
					    		var $imageUploaded = $widget.find('[data-pafe-form-builder-image-upload-placeholder]:not(.pafe-form-builder-image-upload-delete) [data-pafe-form-builder-image-upload-item]');

								$imageUploaded.each(function(){
									imageUploadedURL += $(this).val() + ',';
								});

								imageUploadedURL = imageUploadedURL.replace(/.$/,"");

								$widget.find('[data-pafe-form-builder-form-id]').attr('value',imageUploadedURL);
							}
					    }
					});
				} else {
				  	alert("Your browser does not support");
				}
			}
		});
	});

	$(document).on('click','[data-pafe-form-builder-image-upload-button-remove]', function(){
		var $placeholder = $(this).closest('.pafe-form-builder-image-upload-placeholder');
		$placeholder.css({'display':'none'});
		$placeholder.addClass('pafe-form-builder-image-upload-delete');

		var $widget = $(this).closest('.elementor-element');
		var $imageUploaded = $widget.find('[data-pafe-form-builder-image-upload-placeholder]:not(.pafe-form-builder-image-upload-delete) [data-pafe-form-builder-image-upload-item]');
		var imageUploadedURL = '';
		var $label = $widget.find('[data-pafe-form-builder-image-upload-label]');

		if ($imageUploaded.length == 0) {
			$label.show(0);
		}

		$imageUploaded.each(function(){
			imageUploadedURL += $(this).val() + ',';
		});

		imageUploadedURL = imageUploadedURL.replace(/.$/,"");

		$widget.find('[data-pafe-form-builder-form-id]').attr('value',imageUploadedURL);
	});

	$('[data-pafe-form-builder-form-id][type="hidden"]').each(function(){
		$(this).closest('.elementor-widget-pafe-form-builder-field').addClass('elementor-widget-pafe-form-builder-field-hidden');
	});
});