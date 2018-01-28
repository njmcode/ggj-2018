!function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.EVT_MESSAGE_RECEIVED="EVT_MESSAGE_RECEIVED",e.EVT_CHOICES_RECEIVED="EVT_CHOICES_RECEIVED",e.EVT_SEND_INITIAL_PHOTOS="EVT_SEND_INITIAL_PHOTOS",e.EVT_CHOICE_SELECTED="EVT_CHOICE_SELECTED",e.EVT_PUZZLE_SUCCESS="EVT_PUZZLE_SUCCESS",e.EVT_PUZZLE_DATA_SENT="EVT_PUZZLE_DATA_SENT",e.EVT_PUZZLE_FAIL="EVT_PUZZLE_FAIL",e.EVT_ADVANCE_GAME_STATE="EVT_ADVANCE_GAME_STATE",e.EVT_TAB_NOTIFY="EVT_TAB_NOTIFY",e.EVT_PUZZLE_FIRST_OPEN="EVT_PUZZLE_FIRST_OPEN",e.EVT_FAILGAME="EVT_FAILGAME"},function(t,e){t.exports={hidden:"shared__main__hidden_116d0f"}},function(t,e){t.exports={winBlue:"#2b0081",appWrapper:"app__style__appWrapper_51bd3e",appHeader:"app__style__appHeader_320435",closeBut:"app__style__closeBut_d04839",tabNav:"app__style__tabNav_1038d3",activeTab:"app__style__activeTab_d5cd6c",visibleTab:"app__style__visibleTab_b40f2e",tabNotify:"app__style__tabNotify_f5199c",appTabWindow:"app__style__appTabWindow_d994a7",appTabWrapper:"app__style__appTabWrapper_c83871",activeContent:"app__style__activeContent_cc741e",appFooter:"app__style__appFooter_413425"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CHAT_B=e.CHAT_A=void 0;var n=a(0),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(n),o=e.CHAT_A="agentA",s=e.CHAT_B="agentB";e.default={chapters:{intro1:[{chat:o,text:"*** INCOMING TRANSMISSION... ***"},{chat:o,text:"Agent 045, you have now been activated. Please respond."},{chat:o,choices:[{text:"Uh, I think you have the wrong number",goto:"activated"},{text:"This is Agent 045, waiting command",goto:"activated"}]}],activated:[{chat:o,text:"Ah good, you’re there. We have a situation here that we need you immediate assistance with."},{chat:o,text:"We’ve been locked out of remote access points in your area that we need reconnected to asap."},{chat:o,text:"We need you to locate the access points, get pass the encryption software, and wire through the information packs directly via uplink."},{chat:o,text:"Unfortunately due to the hack, we don’t have exact geolocations, only images of the locations in question, but they’re all near by and should be easy enough to find, given your familiarity with the area."},{chat:o,choices:[{text:'What do you mean by "the hack"?',goto:"noquestions"},{text:"What is this?!",goto:"noquestions"}]}],noquestions:[{chat:o,text:"We don’t have time for questions right now Agent 045, please get the information packets as soon as possible. The security of the entire world is at stake."},{chat:o,text:"Check your Media tab, there you’ll find the 5 remote access points we need you to reconnect to command.",event:i.EVT_SEND_INITIAL_PHOTOS},{chat:o,text:"When you find an access point, look for our logo, you’ll find a password that you need to input to corresponding photo."},{chat:o,text:"We’ll contact you again when you’ve reached access point 1."},{chat:o,choices:[{text:"O...k?",goto:null},{text:"Understood command, over and out",goto:null}]}],tutorial:[{chat:o,text:"Well done Agent 045, this is excellent."},{chat:o,text:"Now you just have to decode the access to enable us to download the package."},{chat:o,text:"It should be extremely straightforward for someone of your elite skill set."},{chat:o,text:"Simply slides the blocks into the right location and we should be granted access."}],firstpuzzlecomplete:[{chat:o,text:"Perfect Agent 045, now please send the information packed to us over your secure network connection."}],firstpuzzlesent:[{chat:o,text:"Fantastic work Agent 045, please proceed to the next package for more information.",event:i.EVT_FIRST_NEWS_ARTICLE}],strangepackage:[{choices:[{text:"What is this text about?",goto:"donotread"},{text:"Sir, this packet is quite odd…",goto:"donotread"}]}],donotread:[{chat:o,text:"Agent 045, are you READING the highly CLASSIFIED information in these packets?!"},{chat:o,text:"Because we need you to access the files to send them to us, you’ll inherently gain access, but I am stressing that these are HIGHLY CLASSIFIED FILES."},{chat:o,text:"DO NOT READ THEM UNDER ANY CIRCUMSTANCES."},{chat:o,text:"IT IS A FEDERAL OFFENCE TO READ THESE FILES WITHOUT THE CORRECT LEVEL OF AUTHORISATION."},{chat:o,text:"Do no read the files, just send them straight to us, understand? That’s a command soldier."},{chat:o,choices:[{text:"Understood sir. ",goto:null},{text:"Or what?",goto:"yourownrisk"}]}],yourownrisk:[{chat:o,text:"…"},{chat:o,text:"Well, I guess there’s nothing we can do, we need those files."},{chat:o,text:"Read them at your own risk, just send them to us. We’ll sort that issue once we get this resolved."},{chat:s,text:"Agent 045. Do not trust Agent B."},{chat:s,choices:[{text:"What do you mean?",goto:"thewarning"},{text:"I have no idea what you’re talking about.",goto:"thewarning"}]}],thewarning:[{chat:s,text:"You’ve been warned."},{chat:s,choices:[{text:"Wait! I want to know what’s going on!",goto:null},{text:"I don’t know you, be gone scum.",event:i.EVT_SECOND_NEWS_ARTICLE,goto:null}]}],readfile:[{chat:s,text:"Read the file."},{chat:s,text:"Do you see the kind of information you’re dealing with here."},{chat:s,text:"Do you really trust this kind of information with Agent B?"},{chat:s,text:"Do you even know who they are?"},{chat:s,choices:[{text:"Well who are you then?",goto:"foolish"},{text:"Do you know who they are?",goto:"foolish"}]}],foolish:[{chat:s,text:"Don’t be foolish."},{chat:s,text:"Keep your wits about you."},{chat:s,text:"Don’t blindly do what they tell you too."},{chat:s,text:"Don’t tell them about our conversation."},{chat:o,text:"What was that?"},{chat:o,text:"Keep your wits about you."},{chat:o,text:"Did you do something?"},{chat:o,choices:[{text:"What do you mean?",goto:"oddsignal"}]}],oddsignal:[{chat:o,text:" I picked up an odd signal there."},{chat:o,text:"It was very faint, but I thought I saw…"},{chat:o,text:"Maybe it was nothing. Did you see anything strange?"},{chat:o,choices:[{text:"Nothing on this end.",goto:"wisechoice"},{text:"Do you mean Agent R?",goto:"unwisechoice"}]}],wisechoice:[{chat:o,text:" Ok. Just let me know if you anything comes up."},{chat:s,text:"If you continue with this, I can share an extra information pack with you."},{chat:s,text:"Keep up the pretense."},{chat:s,choices:[{text:"Who are you?",goto:"goingon"},{text:"What’s going on?",event:i.EVT_THIRD_NEWS_ARTICLE,goto:"goingon"}]}],goingon:[{chat:s,text:" That’s not important right now. The safety of the world is at stake, just make it to the packets and I’ll tell you what to do from there. "}],unwisechoice:[{chat:o,text:" Agent R?! DO NOT ENGAGE, I repeat, DO NOT ENGAGE with Agent R! They are not to be trusted! "},{chat:o,text:"Do not engage them under any circumstances. They are the enemy."},{chat:s,text:"What have you done! Do you want to destroy us all?!"},{chat:s,text:"If you do as Agent B says, we’re all doomed!"},{chat:s,choices:[{text:"How am I meant to trust you?",goto:"trust"},{text:"Why?!",goto:"trust"}]}],trust:[{chat:s,text:" There’s no time to explain right now, you just have to trust me."},{chat:s,text:" Get to the next info packet. Act as normal."},{chat:s,text:" If you’re interested in saving the planet, you’ll do as I say.",event:i.EVT_THIRD_NEWS_ARTICLE}],helloagents:[{chat:s,text:"Agent B: So, here you are."},{chat:s,text:"Agent R: I guess you found me."},{chat:s,text:"Agent B: We’ve tracked you Agent R. You’ve nowhere to hide."},{chat:s,text:"Agent R: We won’t let you get a hold of the info packet."},{chat:s,choices:[{text:"You’re damn right!",goto:"agentb1"},{text:"I don’t think so.",goto:"agentr1"}]}],agentb1:[{chat:s,text:"Agent B: Ha!"},{chat:s,text:"Agent R: 045… I thought you were better than this."},{chat:s,text:"Agent R: You’re signing your own death warrant."},{chat:s,text:"Agent B: Don’t be ridiculous."},{chat:s,text:"Agent B: Get to the last info point Agent 045."},{chat:s,text:"Agent B: Then we can annihilate this scum."},{chat:s,text:"Agent R: There’s still time."},{chat:s,text:"Agent R: I hope that when the time comes, you’ll make the right choice."},{chat:s,text:"Agent B: Idiot. "}],agentr1:[{chat:s,text:"Agent B: Excuse me??"},{chat:s,text:"Agent R: I think you heard them B."},{chat:s,text:"Agent R: They won’t be helping you anymore."},{chat:s,text:"Agent B: Are you an idiot?!"},{chat:s,text:"Agent B: You’ll be helping a physcopath!"},{chat:s,text:"Agent B: This will start world war 3!"},{chat:s,text:"Agent R: Don’t waste your breath B. They’ve made their choice."},{chat:s,text:"Agent R: We won’t start a war, we’ll be ending it."},{chat:s,text:"Agent B: I beg of you, please. You still have time to change your mind."},{chat:s,text:"Agent B: When the time comes, send the pack to me."},{chat:s,text:"Agent B: Idiot.",event:i.EVT_FOURTH_NEWS_ARTICLE}],bluepacket:[{chat:s,text:"Agent B: Well done Agent 045, you’ve made the correct decision."},{chat:s,text:"Agent R: Oh god. What have you done."},{chat:s,text:"Agent B: Exactly what he was meant to, R."},{chat:s,text:"Agent B: I hope you’ve enjoyed your time on this earth."},{chat:s,text:"Agent B: You will be rewarded Agent 045."},{chat:s,text:"Agent R: You’ve doomed us all.",event:i.EVT_FIFTHB_NEWS_ARTICLE}],redpacket:[{chat:s,text:"Agent R: Well done Agent 045, you’ve made the correct decision."},{chat:s,text:"Agent B: Oh god. What have you done."},{chat:s,text:"Agent R: Exactly what he was meant to, R."},{chat:s,text:"Agent R: I hope you’ve enjoyed your time on this earth."},{chat:s,text:"Agent R: You will be rewarded Agent 045."},{chat:s,text:"Agent B: You’ve doomed us all.",event:i.EVT_FIFTHR_NEWS_ARTICLE}],failstate1:[{chat:o,text:"045! Be very careful, you’ll get locked out if you try to hack the access point incorrectly."}],failstate2:[{chat:o,text:"Agent. This is your last warning. DO NOT FAIL AGAIN."}],failstate3:[{chat:o,text:"You’ve proven yourself unable to handle this mission. You will not be contacted again.",event:i.EVT_FAILGAME}]}}},function(t,e){t.exports={chatBlue:"#d1d1ff",chatGreen:"#d1ffd1",chatRed:"#ffd1d1",conversationPanel:"chat__chat__conversationPanel_982aae",msgPanel:"chat__chat__msgPanel_128da4",msg:"chat__chat__msg_40734c",reveal:"chat__chat__reveal_91caa2",agentA:"chat__chat__agentA_b11783",agentB:"chat__chat__agentB_1dd93a",player:"chat__chat__player_ecf56e",choicePanel:"chat__chat__choicePanel_29a146",choiceButton:"chat__chat__choiceButton_913795"}},function(t,e){t.exports={mediaPanel:"media__media__mediaPanel_b4417a",mediaList:"media__media__mediaList_437845",imageThumbnail:"media__media__imageThumbnail_cfdc06",unavailable:"media__media__unavailable_405d0b",mediaDetail:"media__media__mediaDetail_de48e3",formRow:"media__media__formRow_c89747"}},function(t,e,a){"use strict";a(1),a(7);var n=a(8),i=function(t){return t&&t.__esModule?t:{default:t}}(n);console.log("Kick off");var o=new i.default;document.querySelector("#splash-inner button").addEventListener("click",function(t){document.querySelector("#splash-inner").style.display="none",setTimeout(function(){o.start()},1e3)})},function(t,e,a){t.exports=a.p+"/manifest.json"},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=a(9),r=a(10),c=n(r),l=a(2),u=n(l),h=a(11),d=n(h),f=a(12),p=n(f),_=a(14),v=n(_),g=a(16),y=n(g),m=a(3),E=a(0),b=function(){function t(){i(this,t),this.initialTabId="ChatA",this.appEl=document.body,this.tabData=[{id:"ChatA",label:"???",visible:!0,module:new v.default(m.CHAT_A)},{id:"ChatB",label:"???",visible:!1,module:new v.default(m.CHAT_B)},{id:"Media",label:"Media",visible:!1,module:new y.default}],this.tabDataIds=this.tabData.map(function(t){return t.id}),this.emitter=new d.default,this.gamestate=new p.default(this.emitter),window.emitter=this.emitter}return o(t,[{key:"start",value:function(){var t=this;this.el=(0,s.dom)(c.default),this.appEl.innerHTML="",this.appEl.appendChild(this.el),this.closeButEl=this.el.querySelector("."+u.default.closeBut),this.closeButEl.addEventListener("click",function(t){window.location.reload()}),this.navEl=this.el.querySelector("."+u.default.tabNav),this.contentEl=this.el.querySelector("."+u.default.appTabWindow),this.tabData.forEach(function(e,a){var n=document.createElement("button");if(n.textContent=e.id,n.dataset.tabId=e.id,e.visible&&n.classList.add(u.default.visibleTab),n.addEventListener("click",function(e){var a=e.srcElement;t.setActiveTab(a.dataset.tabId)}),t.navEl.appendChild(n),e._navEl=n,!e.module)return!1;var i=document.createElement("div");i.classList.add(u.default.appTabWrapper);var o=(0,s.dom)(e.module.template);i.appendChild(o),t.contentEl.appendChild(i),e._wrapEl=i,e._contentEl=o,e.module.init(e.id,o,t.emitter)}),this.emitter.bind(E.EVT_TAB_NOTIFY,function(e){e!==t.activeTab&&t.setTabNotification(e)},this),this.setActiveTab(this.initialTabId),this.gamestate.init()}},{key:"setActiveTab",value:function(t){var e=this.tabDataIds.indexOf(t);return!(-1===e||!this.tabData[e].visible)&&(this.tabData.forEach(function(e){var a=e.id===t?"add":"remove";e._navEl.classList[a](u.default.activeTab),e._wrapEl.classList[a](u.default.activeContent),e.id===t&&e._navEl.classList.remove(u.default.tabNotify)}),this.activeTab=t,!0)}},{key:"setTabVisibility",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.tabDataIds.indexOf(t);if(-1===a)return!1;var n=e?"add":"remove";this.tabData[a]._navEl.classList[n](u.default.visibleTab),this.tabData[a]._wrapEl.classList[n](u.default.visibleContent),this.tabData[a].visible=e}},{key:"setTabNotification",value:function(t){if(t===this.activeTab)return!1;var e=this.tabDataIds.indexOf(t);if(-1===e)return!1;this.setTabVisibility(t,!0),this.tabData[e]._navEl.classList.add(u.default.tabNotify)}}]),t}();e.default=b},function(t,e,a){"use strict";function n(t){var e=document.createElement("template");return e.innerHTML=t,e.content.firstElementChild}Object.defineProperty(e,"__esModule",{value:!0}),e.dom=n},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default='\n<div id="main" class="'+i.default.appWrapper+'">\n  <header class="'+i.default.appHeader+'">\n    <h1>ISeekU v1.0.3a</h1>\n    <button class="'+i.default.closeBut+'">X</button>\n  </header>\n  <nav class="'+i.default.tabNav+'">\n  </nav>\n  <div class="'+i.default.appTabWindow+'">\n    \x3c!-- render tab contents here --\x3e\n  </div>\n  <footer class="'+i.default.appFooter+'">\n    Ready\n  </footer>\n</div>'},function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=function(){function t(){n(this,t),this.events={}}return i(t,[{key:"bind",value:function(t,e,a){return t in this.events||(this.events[t]=[]),this.events[t].push(e.bind(a)),e}},{key:"unbind",value:function(t,e){if(!(t in this.events))return!1;var a=this.events[t].indexOf(e);if(-1===a)return!1;this.events[t][a]=void 0}},{key:"dispatch",value:function(t){if(!(t in this.events))return!1;for(var e=arguments.length,a=Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];for(var i=0,o=this.events[t].length;i<o;i++){var s;(s=this.events[t])[i].apply(s,a)}}},{key:"unbindAll",value:function(){this.events={}}}]),t}();e.default=o},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(13),c=n(r),l=a(3),u=n(l),h=a(0),d=function(){function t(e){var a;o(this,t),this.emitter=e,this.reader=new c.default(u.default),this.initialChapter="intro1",this.choiceHistory=[],this.puzzleAttemptsLeft=3,this.totalPuzzles=9,this.puzzleStatus=[];for(var n=0;n<this.totalPuzzles;n++)this.puzzleStatus.push({puzzleID:0,isComplete:!1,isSent:!1});this.eventBindings=(a={},i(a,h.EVT_CHOICE_SELECTED,"handlePlayerDecision"),i(a,h.EVT_PUZZLE_FIRST_OPEN,"handleFirstPuzzleOpen"),i(a,h.EVT_PUZZLE_SUCCESS,"handlePuzzleSuccess"),i(a,h.EVT_PUZZLE_DATA_SENT,"handlePuzzleDataSent"),i(a,h.EVT_PUZZLE_FAIL,"handlePuzzleFail"),i(a,h.EVT_SEND_INITIAL_PHOTOS,"handleFirstPhotos"),i(a,h.EVT_ADVANCE_GAME_STATE,"advance"),i(a,h.EVT_FAILGAME,"handleGameOver"),a)}return s(t,[{key:"init",value:function(){for(var t in this.eventBindings)this.emitter.bind(t,this[this.eventBindings[t]],this);this.reader.init(this.initialChapter),this.advance()}},{key:"advance",value:function(){var t=this,e=this.reader.getNextMsg();e&&(e.event&&(console.info("GameState:event bound to message",e.event),this.emitter.dispatch(e.event)),e.choices?this.emitter.dispatch(h.EVT_CHOICES_RECEIVED,e):setTimeout(function(){t.emitter.dispatch(h.EVT_MESSAGE_RECEIVED,e),t.advance()},1e3))}},{key:"getCompletedPuzzleCount",value:function(){return this.puzzleStatus.filter(function(t){return t.isComplete}).length}},{key:"getSentPuzzleDataCount",value:function(){return this.puzzleStatus.filter(function(t){return t.isComplete&&t.isSent}).length}},{key:"handlePlayerDecision",value:function(t){this.choiceHistory.push(t),this.reader.startChapter(t.goto),this.advance()}},{key:"handleFirstPhotos",value:function(){console.log("handleFirstPhotos"),this.emitter.dispatch(h.EVT_TAB_NOTIFY,"Media")}},{key:"handleFirstPuzzleOpen",value:function(){this.reader.startChapter("tutorial"),this.advance()}},{key:"handlePuzzleSuccess",value:function(t){this.puzzleStatus[t].isComplete=!0,1===this.getCompletedPuzzleCount()&&(this.reader.startChapter("firstpuzzlecomplete"),this.advance())}},{key:"handlePuzzleDataSent",value:function(t){this.puzzleStatus[t].isSent=!0,1===this.getSentPuzzleDataCount()&&(this.reader.startChapter("firstpuzzlesent"),this.advance())}},{key:"handlePuzzleFail",value:function(t){this.puzzleAttemptsLeft--,this.puzzleAttemptsLeft>1?(this.reader.startChapter("failstate1"),this.advance()):this.puzzleAttemptsLeft>0?(this.reader.startChapter("failstate2"),this.advance()):0===this.puzzleAttemptsLeft&&(this.reader.startChapter("failstate3"),this.advance())}},{key:"handleGameOver",value:function(){console.log("GAME OVER")}}]),t}();e.default=d},function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=function(){function t(e){n(this,t),this.script=e,console.log("ScriptReader",this.script)}return i(t,[{key:"init",value:function(t){this.currentChapter=null,this.currentChapterId=null,this.chapterLength=0,this.currentChapterMsgIdx=-1,t&&this.startChapter(t)}},{key:"startChapter",value:function(t){return null!==t&&(t in this.script.chapters?(this.currentChapter=this.script.chapters[t],this.currentChapterId=t,this.chapterLength=this.currentChapter.length,void(this.currentChapterMsgIdx=-1)):(console.warn("ScriptReader: invalid chapter id",t),!1))}},{key:"getNextMsg",value:function(){return this.currentChapter&&this.currentChapterMsgIdx!==this.chapterLength-1?(this.currentChapterMsgIdx++,this.currentChapter[this.currentChapterMsgIdx]):(console.info("ScriptReader: no further messages in chapter",this.currentChapterId),!1)}}]),t}();e.default=o},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=a(15),r=n(s),c=a(0),l=a(4),u=n(l),h=function(){function t(e){i(this,t),this.chatID=e,this.template=r.default}return o(t,[{key:"init",value:function(t,e,a){this.id=t,this.emitter=a,this.messageLog=[],this.convoPanelEl=e.querySelector("."+u.default.conversationPanel)||e,this.msgPanelEl=e.querySelector("."+u.default.msgPanel),this.choicePanelEl=e.querySelector("."+u.default.choicePanel),this.emitter.bind(c.EVT_MESSAGE_RECEIVED,this.handleIncomingMessage,this),this.emitter.bind(c.EVT_CHOICES_RECEIVED,this.handleIncomingMessage,this)}},{key:"handleIncomingMessage",value:function(t){if(t.chat!==this.chatID)return!1;t.choices?this.displayChoices(t.choices):this.displayMessage(t),this.emitter.dispatch(c.EVT_TAB_NOTIFY,this.id)}},{key:"displayMessage",value:function(t){this.clearChoices();var e=document.createElement("div");e.classList.add(u.default.msg,t.isPlayer?u.default.player:u.default[t.chat]),e.textContent=t.text,this.msgPanelEl.appendChild(e),this.messageLog.push(t),this.convoPanelEl.scrollTop=this.msgPanelEl.scrollHeight}},{key:"displayChoices",value:function(t){var e=this;this.clearChoices(),t.forEach(function(t){var a=document.createElement("button");a.classList.add(u.default.choiceButton),a.setAttribute("type","button"),a.textContent=t.text,a.addEventListener("click",function(){e.displayMessage({chat:e.chatID,text:t.text,isPlayer:!0}),e.clearChoices(),e.emitter.dispatch(c.EVT_CHOICE_SELECTED,t)}),e.choicePanelEl.appendChild(a)}),this.convoPanelEl.offsetHeight<this.msgPanelEl.scrollHeight&&(this.convoPanelEl.scrollTop=this.convoPanelEl.scrollHeight)}},{key:"clearChoices",value:function(){this.choicePanelEl.innerHTML=""}}]),t}();e.default=h},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default='\n<div class="'+i.default.conversationPanel+'">\n    <div class="'+i.default.msgPanel+'"></div>\n    <div class="'+i.default.choicePanel+'"></div>\n</div>\n'},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=a(5),r=n(s),c=a(1),l=a(17),u=n(l),h=a(18),d=n(h),f=function(){function t(){i(this,t),this.template=u.default}return o(t,[{key:"init",value:function(t,e,a){var n=this;this.id=t,this.emitter=a,this.mediaPanel=e.querySelector("."+r.default.mediaPanel)||e,this.mediaDetail=e.querySelector("."+r.default.mediaDetail),this.mediaDetail.querySelector("#detail-cancel").addEventListener("click",function(){n.closeDetails()}),this.mediaDetail.querySelector("#detail-submit").addEventListener("click",function(){n.checkPasscode()}),setTimeout(function(){n.releasePhoto(0),n.releasePhoto(1)},0)}},{key:"releasePhoto",value:function(t){var e=this;if(!(t>=d.default.length)){var a=this.mediaPanel.querySelector('[data-index="'+t+'"]'),n=document.createElement("img");n.src=d.default[t],n.addEventListener("click",function(){e.expandPhoto(n)}),a.classList.remove(r.default.unavailable),a.appendChild(n)}}},{key:"expandPhoto",value:function(t){this.mediaDetail.insertBefore(t.cloneNode(!1),this.mediaDetail.firstChild),this.mediaDetail.classList.remove(c.hidden)}},{key:"closeDetails",value:function(){this.mediaDetail.removeChild(this.mediaDetail.firstChild),this.mediaDetail.classList.add(c.hidden)}},{key:"checkPasscode",value:function(){this.closeDetails()}}]),t}();e.default=f},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var n=a(5),i=function(t){return t&&t.__esModule?t:{default:t}}(n),o=a(1),s="",r=0;r<9;r++)s+='<div data-index="'+r+'" class="'+i.default.imageThumbnail+" "+i.default.unavailable+'"></div>';e.default='\n<div class="'+i.default.mediaPanel+'">\n    <div class="'+i.default.mediaList+'">'+s+'</div>\n    <div class="'+i.default.mediaDetail+" "+o.hidden+'">\n        <div class="'+i.default.formRow+'">\n            <label>Passcode:</label>\n            <input type="text" name="passcode">\n        </div>\n        <div class="'+i.default.formRow+'">\n            <button id="detail-submit" type="button">Enter</button>\n            <button id="detail-cancel" type="button">Cancel</button>\n        </div>\n    </div>\n</div>\n'},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(19),o=n(i),s=a(20),r=n(s),c=a(21),l=n(c),u=a(22),h=n(u),d=a(23),f=n(d);e.default=[o.default,r.default,l.default,h.default,f.default]},function(t,e,a){t.exports=a.p+"assets/39e3bf07418437d0ac0f0eed58c3c1f5.jpg"},function(t,e,a){t.exports=a.p+"assets/d1ca928fb6bf6590e987636528bc2d57.jpg"},function(t,e,a){t.exports=a.p+"assets/7d1dcda134565bb3865c195aaae3f876.jpg"},function(t,e,a){t.exports=a.p+"assets/6bf32f35b5a054497897c1fe848b7932.jpg"},function(t,e,a){t.exports=a.p+"assets/39d2614c41346f19b5f0e1133488a150.jpg"}]);
//# sourceMappingURL=index.bundle.js.map