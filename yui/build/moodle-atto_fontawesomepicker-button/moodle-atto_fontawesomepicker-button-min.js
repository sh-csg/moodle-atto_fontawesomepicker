YUI.add("moodle-atto_fontawesomepicker-button",function(e,t){e.namespace("M.atto_fontawesomepicker").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){var t=this.get("icons"),n=[],r=0;e.Array.each(t,function(e){r<20&&(n.push({text:'<i class="'+e+' fa-2x" aria-hidden="true"></i>',callbackArgs:e}),r++)});for(var i=0;i<n.length%3;i++)n.push({text:"",callbackArgs:null});this.addToolbarMenu({icon:"ed/font-awesome-brands",iconComponent:"atto_fontawesomepicker",overlayWidth:"4",globalItemConfig:{callback:this._addfontawesomeicon},items:n})},_addfontawesomeicon:function(e,t){t&&(document.execCommand("insertText",!1,"["+t.replace("fa ","")+" fa-pull-left fa-2x]"),this.markUpdated())}},{ATTRS:{icons:{value:{}}}})},"@VERSION@");
