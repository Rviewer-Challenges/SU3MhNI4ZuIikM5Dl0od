/*! main.js | Huro | Deply. 2022-2023 */"use strict";initPageLoader(),$(document).ready((function(){switchLayouts(),"development"===env&&changeDemoImages(),initBgImages(),feather.replace(),setActivelink(),updateSidebarNaver(),initMobileNavbar(),initMobileNavbarHamburger(),$(".main-sidebar, .sidebar-block").length&&(initSidebar(),$("[data-sidebar-open]").length&&openSidebar(),window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1024px)").matches&&window.matchMedia("(orientation: landscape)").matches&&(closeSidebarPanel(),$(".main-sidebar, .sidebar-brand").removeClass("is-bordered")),$(window).on("resize",(function(){window.matchMedia("(min-width: 768px)").matches&&window.matchMedia("(max-width: 1024px)").matches&&window.matchMedia("(orientation: landscape)").matches&&(closeSidebarPanel(),$(".main-sidebar, .sidebar-brand").removeClass("is-bordered"))}))),$(".view-wrapper").hasClass("is-webapp")&&initWebapp(),initCollapsibleMenu(),initStuckHeader(),initNavbarDropdowns(),initDropdowns(),initMobileDropdowns(),adjustDropdowns(),initChosenSelects(),initTabs(),initTabbedWidgets(),initHSelect(),initComboBox(),initImageComboBox(),initUserComboBox(),initStackedComboBox(),initBigComboBox(),initAccordion(),initAnimatedModals(),initHModals(),initPanels(),initSmallTextTip(),initTextTip(),initMediumTextTip(),initAnimatedCheckboxes(),initCustomTextFilter(),initTextFilter(),initAdvancedFlexTable(),initSingleAccordion(),initCollapse(),initPlayers(),initSearch(),initDarkMode()}));;/*! components.js | Deply. 2022-2023 */"use strict";var notyf;$(document).ready((function(){if(notyf=new Notyf({duration:2e3,position:{x:"right",y:"bottom"},types:[{type:"warning",background:themeColors.warning,icon:{className:"fas fa-hand-paper",tagName:"i",text:""}},{type:"info",background:themeColors.info,icon:{className:"fas fa-info-circle",tagName:"i",text:""}},{type:"primary",background:themeColors.primary,icon:{className:"fas fa-car-crash",tagName:"i",text:""}},{type:"accent",background:themeColors.accent,icon:{className:"fas fa-car-crash",tagName:"i",text:""}},{type:"purple",background:themeColors.purple,icon:{className:"fas fa-check",tagName:"i",text:""}},{type:"blue",background:themeColors.blue,icon:{className:"fas fa-check",tagName:"i",text:""}},{type:"green",background:themeColors.green,icon:{className:"fas fa-check",tagName:"i",text:""}},{type:"orange",background:themeColors.orange,icon:{className:"fas fa-check",tagName:"i",text:""}}]}),$(".toast-trigger").length&&($("#success-toast-demo").on("click",(function(){notyf.success("Your changes have been successfully saved!")})),$("#error-toast-demo").on("click",(function(){notyf.error("Looks like something went wrong, try again later.")})),$("#info-toast-demo").on("click",(function(){notyf.open({type:"info",message:"This is some useful information that you might need."})})),$("#warning-toast-demo").on("click",(function(){notyf.open({type:"warning",message:"Please be careful when driving back to home."})})),$("#purple-toast-demo").on("click",(function(){notyf.open({type:"purple",message:"This is a nice looking purple toast notification."})})),$("#blue-toast-demo").on("click",(function(){notyf.open({type:"blue",message:"This is a nice looking blue toast notification."})})),$("#green-toast-demo").on("click",(function(){notyf.open({type:"green",message:"This is a nice looking green toast notification."})})),$("#orange-toast-demo").on("click",(function(){notyf.open({type:"orange",message:"This is a nice looking orange toast notification."})})),$("#primary-toast-demo").on("click",(function(){$("body").hasClass("is-dark")?notyf.open({type:"accent",message:"Please be careful when driving back to home."}):notyf.open({type:"primary",message:"Please be careful when driving back to home."})}))),FilePond.registerPlugin(FilePondPluginImagePreview,FilePondPluginImageExifOrientation,FilePondPluginFileValidateSize,FilePondPluginImageEdit),$(".filepond").length&&FilePond.create(document.querySelector(".filepond")),$(".filepond-2-grid").length&&FilePond.create(document.querySelector(".filepond-2-grid")),$(".filepond-3-grid").length&&FilePond.create(document.querySelector(".filepond-3-grid")),$(".profile-filepond").length&&FilePond.create(document.querySelector(".profile-filepond"),{labelIdle:'<i class="lnil lnil-cloud-upload"></>',imagePreviewHeight:140,imageCropAspectRatio:"1:1",imageResizeTargetWidth:140,imageResizeTargetHeight:140,stylePanelLayout:"compact circle",styleLoadIndicatorPosition:"center bottom",styleProgressIndicatorPosition:"right bottom",styleButtonRemoveItemPosition:"left bottom",styleButtonProcessItemPosition:"right bottom"}),$(".profile-filepond-small").length&&FilePond.create(document.querySelector(".profile-filepond-small"),{labelIdle:'<i class="lnil lnil-cloud-upload"></>',imagePreviewHeight:110,imageCropAspectRatio:"1:1",imageResizeTargetWidth:110,imageResizeTargetHeight:110,stylePanelLayout:"compact circle",styleLoadIndicatorPosition:"center bottom",styleProgressIndicatorPosition:"right bottom",styleButtonRemoveItemPosition:"left bottom",styleButtonProcessItemPosition:"right bottom"}),$(".profile-filepond-tiny").length&&FilePond.create(document.querySelector(".profile-filepond-tiny"),{labelIdle:'<i class="lnil lnil-cloud-upload"></>',imagePreviewHeight:80,imageCropAspectRatio:"1:1",imageResizeTargetWidth:80,imageResizeTargetHeight:80,stylePanelLayout:"compact circle",styleLoadIndicatorPosition:"center bottom",styleProgressIndicatorPosition:"right bottom",styleButtonRemoveItemPosition:"left bottom",styleButtonProcessItemPosition:"right bottom"}),$(".square-filepond").length&&FilePond.create(document.querySelector(".square-filepond"),{labelIdle:'<i class="lnil lnil-plus"></>',imagePreviewHeight:140,imageCropAspectRatio:"1:1",imageResizeTargetWidth:140,imageResizeTargetHeight:140,stylePanelLayout:"compact circle",styleLoadIndicatorPosition:"center bottom",styleProgressIndicatorPosition:"right bottom",styleButtonRemoveItemPosition:"left bottom",styleButtonProcessItemPosition:"right bottom"}),$(".square-filepond-small").length&&FilePond.create(document.querySelector(".square-filepond-small"),{labelIdle:'<i class="lnil lnil-plus"></>',imagePreviewHeight:110,imageCropAspectRatio:"1:1",imageResizeTargetWidth:110,imageResizeTargetHeight:110,stylePanelLayout:"compact circle",styleLoadIndicatorPosition:"center bottom",styleProgressIndicatorPosition:"right bottom",styleButtonRemoveItemPosition:"left bottom",styleButtonProcessItemPosition:"right bottom"}),$(".square-filepond-tiny").length&&FilePond.create(document.querySelector(".square-filepond-tiny"),{labelIdle:'<i class="lnil lnil-plus"></>',imagePreviewHeight:80,imageCropAspectRatio:"1:1",imageResizeTargetWidth:80,imageResizeTargetHeight:80,stylePanelLayout:"compact circle",styleLoadIndicatorPosition:"center bottom",styleProgressIndicatorPosition:"right bottom",styleButtonRemoveItemPosition:"left bottom",styleButtonProcessItemPosition:"right bottom"}),$("#lightgallery").length&&lightGallery(document.getElementById("lightgallery")),$("#videogallery").length&&lightGallery(document.getElementById("videogallery")),$("#pickaday-datepicker").length)new Pikaday({field:document.getElementById("pickaday-datepicker"),format:"D MMM YYYY",onSelect:function(){}});if($("#bulma-datepicker-1").length&&bulmaCalendar.attach("#bulma-datepicker-1",{color:themeColors.primary,lang:"en"}),$("#bulma-datepicker-2").length&&bulmaCalendar.attach("#bulma-datepicker-2",{displayMode:"dialog",startDate:new Date("02/11/2018"),minDate:"01/01/2018",maxDate:"12/31/2018",color:themeColors.primary,lang:"en"}),$("#bulma-datepicker-3").length&&bulmaCalendar.attach("#bulma-datepicker-3",{displayMode:"inline",startDate:new Date("02/11/2018"),minDate:"01/01/2018",maxDate:"12/31/2018",color:themeColors.primary,lang:"en"}),$("#bulma-datepicker-4").length&&bulmaCalendar.attach("#bulma-datepicker-4",{color:themeColors.primary,lang:"en"}),$("#bulma-datepicker-5").length&&bulmaCalendar.attach("#bulma-datepicker-5",{color:themeColors.primary,lang:"en"}),$("#bulma-datepicker-6").length&&bulmaCalendar.attach("#bulma-datepicker-6",{color:themeColors.primary,lang:"en"}),$("#bulma-datepicker-7").length&&bulmaCalendar.attach("#bulma-datepicker-7",{color:themeColors.primary,lang:"en"}),$("#choices-text-remove-button").length)new Choices(document.getElementById("choices-text-remove-button"),{delimiter:",",editItems:!0,removeItemButton:!0});if($("#choices-multiple-remove-button").length)new Choices("#choices-multiple-remove-button",{removeItemButton:!0});if($("#autocomplete-demo-simple").length){$("#autocomplete-demo-simple").easyAutocomplete({url:"assets/data/user.json",getValue:"name",template:{type:"custom",method:function(e,t){return'\n                        <div class="template-wrapper">\n                            <div class="entry-text">\n                                <span>'+e+"</span>\n                            </div>\n                        </div>\n                    "}},highlightPhrase:!1,list:{maxNumberOfElements:5,showAnimation:{type:"fade",time:400,callback:function(){}},match:{enabled:!0},onChooseEvent:function(){}}})}if($("#autocomplete-demo-subtext").length){$("#autocomplete-demo-subtext").easyAutocomplete({url:"assets/data/user.json",getValue:"name",template:{type:"custom",method:function(e,t){return'\n                        <div class="template-wrapper">\n                            <div class="entry-text">\n                                <span>'+e+"</span>\n                                <span>"+t.location+"</span>\n                            </div>\n                        </div>\n                    "}},highlightPhrase:!1,list:{maxNumberOfElements:5,showAnimation:{type:"fade",time:400,callback:function(){}},match:{enabled:!0},onChooseEvent:function(){}}})}if($("#autocomplete-demo-advanced").length){$("#autocomplete-demo-advanced").easyAutocomplete({url:"assets/data/user.json",getValue:"name",template:{type:"custom",method:function(e,t){return'\n                        <div class="template-wrapper">\n                            <div class="avatar-wrapper">\n                                <img class="autocpl-avatar" src="'+t.pic+'">\n                                <img class="avatar-badge" src="'+t.badge+'">\n                            </div>\n                            <div class="entry-text">\n                                <span>'+e+"</span>\n                                <span>"+t.location+"</span>\n                            </div>\n                        </div>\n                    "}},highlightPhrase:!1,list:{maxNumberOfElements:5,showAnimation:{type:"fade",time:400,callback:function(){}},match:{enabled:!0},onChooseEvent:function(){}}})}if($(".noui-base-slider").length)for(var e=document.getElementsByClassName("noui-base-slider"),t=0;t<e.length;t++)noUiSlider.create(e[t],{start:[10,90],connect:!0,orientation:"horizontal",range:{min:0,max:100}});if($(".noui-vertical-slider").length){var o=document.getElementsByClassName("noui-vertical-slider");for(t=0;t<o.length;t++)noUiSlider.create(o[t],{start:[10,90],connect:!0,orientation:"vertical",range:{min:0,max:100}})}if($("#noui-range-slider").length){var a=document.getElementById("noui-range-slider");noUiSlider.create(a,{start:[20],connect:[!0,!1],range:{min:0,max:100}})}if($(".noui-tooltip-slider").length){var n=document.getElementsByClassName("noui-tooltip-slider");for(t=0;t<n.length;t++){var i=Math.floor(101*Math.random());noUiSlider.create(n[t],{start:[i],connect:[!0,!1],tooltips:[!0],range:{min:0,max:100}})}}if($("#summernote").length&&$("#summernote").summernote({placeholder:"Hello stand alone ui",tabsize:2,height:250,minHeight:null,maxHeight:null,focus:!0,toolbar:[["style",["style"]],["font",["bold","underline","clear"]],["para",["ul","ol","paragraph"]],["table",["table"]],["insert",["link","picture","video"]],["view",["codeview","help"]]]}),$("#sun-editor").length)SUNEDITOR.create(document.getElementById("sun-editor")||"sun-editor",{width:"100%",height:250,placeholder:"Write your text here..."});if($("#sun-editor-balloon").length)SUNEDITOR.create(document.getElementById("sun-editor-balloon")||"sun-editor-balloon",{width:"100%",height:250,placeholder:"Write your text here...",mode:"balloon-always"});if($("#video-player").length){var l=document.querySelector("audio[controls], video[controls]");new MediaPlayer(l,{prefix:"media",lang:{play:"play",pause:"pause",mute:"mute",unmute:"unmute",volume:"volume",currentTime:"current time",remainingTime:"remaining time",enterFullscreen:"enter fullscreen",leaveFullscreen:"leave fullscreen",download:"download"},svgs:{play:"#symbol-play",pause:"#symbol-pause",mute:"#symbol-mute",unmute:"#symbol-unmute",volume:"#symbol-volume",currentTime:"#symbol-currentTime",remainingTime:"#symbol-remainingTime",enterFullscreen:"#symbol-enterFullscreen",leaveFullscreen:"#symbol-leaveFullscreen",download:"#symbol-download"},timeDir:"ltr",volumeDir:"ltr"})}$("#alertify-demo-1").length&&$("#alertify-demo-1").on("click",(function(){initConfirm("Standard Alert","Are you sure you want to perfom this action? You won't be able to recover or to revert it.",!1,!1,"Delete","Cancel")})),$("#alertify-demo-2").length&&$("#alertify-demo-2").on("click",(function(){initConfirm("Custom Alert","You can pass a callback function as a callback parameter to define what happens after the confirm button is clicked.",!1,!1,"Callback","Cancel",(function(e){alert("The callback was executed!")}))})),$(".circle-chart-wrapper").length&&$(".circle-chart-wrapper").each((function(){var e=$(this),t=e.attr("data-completion");e.find(".circle-chart__circle").attr("stroke-dasharray",t+",100")})),$("#show-demo-loaders").length&&$("#show-demo-loaders").on("click",(function(){var e=$(this);e.addClass("is-loading no-click"),$(".has-loader").addClass("has-loader-active"),setTimeout((function(){$(".has-loader").removeClass("has-loader-active"),e.removeClass("is-loading no-click")}),3e3)}))}));;/*! popover.js | Deply. 2022-2023 */"use strict";$(document).ready((function(){$('*[data-toggle="popover"]').each((function(){var a=$(this).attr("data-pop-mode"),n=$(this).attr("data-pop-title"),s=$(this).attr("data-pop-content"),i=$(this).attr("data-pop-position"),o=$(this).attr("data-pop-width"),e=$(this).attr("data-pop-avatar"),t=$(this).attr("data-pop-icon"),p=$(this).attr("data-pop-iconbg"),r="",l="";null!=e&&null!=e?r='\n                    <div class="h-avatar is-small">\n                        <img class="avatar" src="'+e+'" alt="">\n                    </div>\n                ':null!=t&&null!=t&&(l='\n                    <div class="h-icon is-small is-'+p+'">\n                        <i class="'+t+'"></i>\n                    </div>\n                '),$(this).webuiPopover({trigger:a,width:o,animation:"pop",placement:i,style:"default",content:function(){return'\n                        <div class="popover-head">\n                            '+r+"\n                            "+l+'\n                            <h4 class="dark-inverted">'+n+'</h4>\n                        </div>\n                        <div class="popover-body">\n                            <p>'+s+"</p>\n                        </div>\n                    "}})})),$("*[data-user-popover]").each((function(){var a=$(this),n=$(this).attr("data-user-popover"),s=feather.icons.mail.toSvg(),i=feather.icons.phone.toSvg(),o=feather.icons["more-horizontal"].toSvg();$.ajax({url:"assets/data/user.json",dataType:"json",success:function(e){a.webuiPopover({trigger:"hover",placement:"auto",width:300,padding:!1,offsetLeft:0,offsetTop:20,animation:"pop",style:"profile",cache:!1,content:function(){if(setTimeout((function(){$(".loader-overlay").removeClass("is-active")}),500),null!=e[n].pic)var a='\n                                    <div class="profile-popover-block">\n\n                                        <div class="loader-overlay is-active">\n                                            <div class="loader is-loading"></div>\n                                        </div>\n\n                                        <div class="profile-popover-wrapper">\n                                            <div class="popover-avatar">\n                                                <img class="avatar" src="'+e[n].pic+'">\n                                                <img class="badge" src="'+e[n].badge+'">\n                                            </div>\n                                            <div class="popover-meta">\n                                                <span class="user-meta">\n                                                    <span class="username">'+e[n].name+'</span>\n                                                    <span class="location">'+e[n].location+'</span>\n                                                </span>\n                                                <span class="job-title">'+e[n].position+'</span>\n                                                <span class="bio">'+e[n].bio+'</span>\n                                            </div>\n                                        </div>\n                                        <div class="popover-actions">\n                                            <a class="popover-icon">\n                                                '+i+'\n                                            </a>\n                                            <a class="popover-icon">\n                                                '+s+'\n                                            </a>\n                                            <a class="popover-icon">\n                                                '+o+"\n                                            </a>\n                                        </div>\n                                    </div>\n                                ";else{var t=new Array("is-danger","is-info","is-primary","is-success","is-warning","is-h-purple","is-h-blue","is-h-green","is-h-orange","is-h-red","is-h-green"),p=t.length;a='\n\n                                    <div class="profile-popover-block">\n\n                                        <div class="loader-overlay is-active">\n                                            <div class="loader is-loading"></div>\n                                        </div>\n\n                                        <div class="profile-popover-wrapper">\n                                            <div class="popover-fake-avatar '+t[Math.floor(Math.random()*p)]+'">\n                                                <div class="fake-avatar">\n                                                    <span>'+e[n].initials+'</span>\n                                                </div>\n                                                <img class="badge" src="'+e[n].badge+'">\n                                            </div>\n                                            <div class="popover-meta">\n                                                <span class="user-meta">\n                                                    <span class="username">'+e[n].name+'</span>\n                                                    <span class="location">'+e[n].location+'</span>\n                                                </span>\n                                                <span class="job-title">'+e[n].position+'</span>\n                                                <span class="bio">'+e[n].bio+'</span>\n                                            </div>\n                                        </div>\n                                        <div class="popover-actions">\n                                            <a class="popover-icon">\n                                                '+i+'\n                                            </a>\n                                            <a class="popover-icon">\n                                                '+s+'\n                                            </a>\n                                            <a class="popover-icon">\n                                                '+o+"\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                "}return a}})}})}))}));;/*! widgets.js | Deply. 2022-2023 */"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}$(document).ready((function(){if($("#gauge-holder").length){var e=bb.generate({data:{columns:[["data",91.4]],type:"gauge",onclick:function(e,t){console.log("onclick",e,t)},onover:function(e,t){console.log("onover",e,t)},onout:function(e,t){console.log("onout",e,t)}},gauge:{},color:{pattern:[themeColors.accent,themeColors.secondary,themeColors.orange,themeColors.purple],threshold:{values:[30,60,90,100]}},size:{height:120},padding:{bottom:20},legend:{show:!1,position:"inset"},bindto:"#gauge-holder"});setTimeout((function(){e.load({columns:[["data",10]]})}),1e3),setTimeout((function(){e.load({columns:[["data",50]]})}),2e3),setTimeout((function(){e.load({columns:[["data",70]]})}),3e3),setTimeout((function(){e.load({columns:[["data",0]]})}),4e3),setTimeout((function(){e.load({columns:[["data",100]]})}),5e3)}if($("#trend-chart").length){var t={series:[{name:"series1",data:[31,40,28,51,42,109,100]}],chart:{height:"200px",width:"100%",type:"line",toolbar:{show:!1}},colors:[themeColors.accent,themeColors.purple,themeColors.orange],grid:{show:!1,padding:{left:-20,right:0}},padding:{bottom:0,left:0,right:0},legend:{show:!1,position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"],labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{show:!1,offsetX:-40}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}};new ApexCharts(document.querySelector("#trend-chart"),t).render()}if($(".social-buttons-widget .inner-button").on("click",(function(){$(this).closest(".social-buttons-widget").find(".inner-button").removeClass("is-active"),$(this).addClass("is-active")})),$("#line-stats-widget-chart").length){var r={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[themeColors.accent],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(e){return"$"+e}}}};new ApexCharts(document.querySelector("#line-stats-widget-chart"),r).render()}if($("#area-stats-widget-chart").length){var o={series:[{name:"Returning",data:[318.42,407.16,284.12,517,452.45,1209.34,1010.11]},{name:"Newcomers",data:[112.42,324.45,457.5,312.75,342.45,527.56,414.75]},{name:"Abandonned",data:[787.89,534.46,365.78,107.45,145.78,54.42,27.12]}],chart:{height:250,type:"area",offsetY:-10,toolbar:{show:!1}},colors:[themeColors.accent,themeColors.info,themeColors.orange],legend:{position:"bottom",horizontalAlign:"center",show:!1},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-09-19T00:00:00.000Z","2020-09-20T01:30:00.000Z","2020-09-21T02:30:00.000Z","2020-09-22T03:30:00.000Z","2020-09-23T04:30:00.000Z","2020-09-24T05:30:00.000Z","2020-09-25T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"},y:{formatter:function(e){return"$"+e}}}};new ApexCharts(document.querySelector("#area-stats-widget-chart"),o).render()}if($(".spark-tile-widget").length){Apex.grid={padding:{right:0,left:0}},Apex.dataLabels={enabled:!1};var a=function(e){for(var t,r,o=e.slice(),a=o.length;0!==a;)r=Math.floor(Math.random()*a),t=o[a-=1],o[a]=o[r],o[r]=t;return o},s=[472,454,547,385,562,247,652,318,379,391,622,515,355,415,358,271,932,534,615,278,546,435,192,465];if($("#widget-spark-1").length){var l={chart:{id:"sparklineWidget1",group:"sparklines",type:"area",height:130,sparkline:{enabled:!0}},colors:[themeColors.orange],stroke:{width:[2],curve:"straight"},fill:{opacity:1},series:[{name:"Total Sales",data:a(s)}],labels:[].concat(_toConsumableArray(Array(24).keys())).map((function(e){return"2020-10-0"+(e+1)})),yaxis:{min:0},xaxis:{type:"datetime"},title:{text:"Total Sales",offsetX:5,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title",color:themeColors.lightText}},subtitle:{text:"9,374",offsetX:5,style:{fontSize:"24px",fontWeight:"600",cssClass:"apexcharts-yaxis-title"}}};new ApexCharts(document.querySelector("#widget-spark-1"),l).render()}if($("#widget-spark-2").length){var i={chart:{id:"sparklineWidget2",group:"sparklines",type:"area",height:130,sparkline:{enabled:!0}},colors:[themeColors.info],stroke:{width:[2],curve:"straight"},fill:{opacity:1},series:[{name:"Total Profit",data:a(s)}],labels:[].concat(_toConsumableArray(Array(24).keys())).map((function(e){return"2020-10-0"+(e+1)})),yaxis:{min:0},xaxis:{type:"datetime"},title:{text:"Total Profit",offsetX:5,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title",color:themeColors.lightText}},subtitle:{text:"$24,273.31",offsetX:5,style:{fontSize:"24px",fontWeight:"600",cssClass:"apexcharts-yaxis-title"}}};new ApexCharts(document.querySelector("#widget-spark-2"),i).render()}if($("#widget-spark-3").length){var n={chart:{id:"sparklineWidget3",group:"sparklines",type:"area",height:130,sparkline:{enabled:!0}},colors:[themeColors.accent],stroke:{width:[2],curve:"straight"},fill:{opacity:1},series:[{name:"Total Orders",data:a(s)}],labels:[].concat(_toConsumableArray(Array(24).keys())).map((function(e){return"2020-10-0"+(e+1)})),xaxis:{type:"datetime"},yaxis:{min:0},title:{text:"Total Orders",offsetX:5,style:{fontSize:"24px",cssClass:"apexcharts-yaxis-title",color:themeColors.lightText}},subtitle:{text:"4,361",offsetX:5,style:{fontSize:"24px",fontWeight:"600",cssClass:"apexcharts-yaxis-title"}}};new ApexCharts(document.querySelector("#widget-spark-3"),n).render()}if($("#widget-spark-4").length){var d={chart:{id:"sparklineWidget3",group:"sparklines",type:"area",height:130,sparkline:{enabled:!0}},colors:[themeColors.green],stroke:{width:[2],curve:"straight"},fill:{opacity:1},series:[{name:"Consolidated Profit",data:a(s)}],labels:[].concat(_toConsumableArray(Array(24).keys())).map((function(e){return"2020-10-0"+(e+1)})),xaxis:{type:"datetime"},yaxis:{min:0},title:{text:"Consolidated Profit",offsetX:5,style:{fontSize:"24px",fontWeight:"500",cssClass:"apexcharts-yaxis-title",color:themeColors.lightText}},subtitle:{text:"$16,264.37",offsetX:5,style:{fontSize:"24px",fontWeight:"600",cssClass:"apexcharts-yaxis-title"}}};new ApexCharts(document.querySelector("#widget-spark-4"),d).render()}}if($("#flex-stat-circle").length){var h={series:[65],chart:{height:130,type:"radialBar",offsetX:-10,toolbar:{show:!1}},colors:[themeColors.purple],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!1,fontSize:"12px",fontWeight:400,offsetY:5,color:themeColors.lightText},value:{show:!0,fontWeight:600,fontFamily:"Roboto, sans-serif",color:themeColors.purple,fontSize:"16px",offsetY:5}}}},labels:["Progress"]};new ApexCharts(document.querySelector("#flex-stat-circle"),h).render()}if($("#flex-stat-radial").length){var c={series:[65],chart:{height:160,type:"radialBar",offsetX:-15,offsetY:-10,toolbar:{show:!1}},colors:[themeColors.info,themeColors.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:themeColors.lightText,show:!1},value:{offsetY:5,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["(30 days)"]};new ApexCharts(document.querySelector("#flex-stat-radial"),c).render()}if($(".chart-group").length){if($("#widget-group-radial-1").length){var p={series:[31],chart:{height:80,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[themeColors.info],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]};new ApexCharts(document.querySelector("#widget-group-radial-1"),p).render()}if($("#widget-group-radial-2").length){var g={series:[53],chart:{height:80,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[themeColors.orange],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]};new ApexCharts(document.querySelector("#widget-group-radial-2"),g).render()}if($("#widget-group-radial-3").length){var u={series:[84],chart:{height:80,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[themeColors.green],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]};new ApexCharts(document.querySelector("#widget-group-radial-3"),u).render()}if($("#widget-group-radial-4").length){var f={series:[57],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[themeColors.accent],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]};new ApexCharts(document.querySelector("#widget-group-radial-4"),f).render()}if($("#widget-group-radial-5").length){var y={series:[36],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[themeColors.orange],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]};new ApexCharts(document.querySelector("#widget-group-radial-5"),y).render()}if($("#widget-group-radial-6").length){var m={series:[88],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[themeColors.green],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]};new ApexCharts(document.querySelector("#widget-group-radial-6"),m).render()}}}));;