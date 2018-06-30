/*! Built with http://stenciljs.com */
App.loadBundle("w8fkr4ps",["exports","./chunk-c1d9906c.js"],function(e,i){var t=window.App.h,s={goalNumberOfSuccesses:3,initialGameTimer:5},n={goalNumberOfSuccesses:5,initialGameTimer:6},l={goalNumberOfSuccesses:7,initialGameTimer:7},a={buttonLabel:"Yay!",heading:"You Won!",text:"Congratulations on successfully helping your Dragon find a happy life!"},u={buttonLabel:"Try again!",heading:"Oh noes!",text:"Unfortunately, you didn't do so well this time…"},o=function(){function e(){this.feedingClass="",this.generalCluesDisabled=!0,this.resultButtonLabel="",this.resultHeading="",this.resultText="",this.specificCluesDisabled=!0,this.clueTimer=0,this.feedTimer=0,this.gameTimer=0,this.goalNumberOfSuccesses=0,this.initialFeedTimer=2,this.initialGameTimer=0,this.initialNumberOfClues=3,this.isRunning=!1,this.remainingClues=0,this.successesUntilVictory=0}return e.prototype.componentDidLoad=function(){var e=this;this.setDifficulty(s),this.dialog=new i.MDCDialog(document.querySelector("#game-over-dialog")),this.dialog.listen("MDCDialog:accept",function(){e.resetGame()}),this.dialog.listen("MDCDialog:cancel",function(){e.resetGame()})},e.prototype.render=function(){return t("section",{class:"app-home"},t("section",{class:"difficulty-controls"},t("button",{class:"mdc-button",onClick:this.setDifficulty.bind(this,s),disabled:this.isRunning},"Easy"),t("button",{class:"mdc-button",onClick:this.setDifficulty.bind(this,n),disabled:this.isRunning},"Medium"),t("button",{class:"mdc-button",onClick:this.setDifficulty.bind(this,l),disabled:this.isRunning},"Hard")),t("section",{class:"game-controls"},t("button",{class:"mdc-button mdc-button--raised",onClick:this.playOrPause.bind(this)},this.isRunning?"Pause":"Start"),t("button",{class:"mdc-button",onClick:this.resetGame.bind(this),disabled:this.isRunning},"Reset")),t("p",null,"Game time left: ",t("b",null,this.gameTimer)),t("p",{class:this.isFeedingAllowed()?"warning":""},"Feeder time left: ",t("b",null,this.feedTimer)),t("p",null,t("button",{class:"mdc-button mdc-button--raised",onClick:this.feed.bind(this),disabled:!this.isFeedingAllowed()},"Feed!")),t("p",null,"Number of successes left:"," ",t("b",null,this.successesUntilVictory)),t("p",null,t("button",{class:"mdc-button mdc-button--raised",onClick:this.logSuccess.bind(this),disabled:!this.isRunning},"Log success")),t("section",null,t("p",null,"Remaining clues: ",t("b",null,this.remainingClues)),t("p",null,t("button",{class:"mdc-button mdc-button--raised",onClick:this.useGeneralClue.bind(this),disabled:!this.isGeneralClueAllowed()},"Use general clue")),t("p",null,t("button",{class:"mdc-button mdc-button--raised",onClick:this.useSpecificClue.bind(this),disabled:!this.isSpecificClueAllowed()},"Use specific clue"))),t("p",null,"Rules version: 0.3"),t("aside",{id:"game-over-dialog",class:"mdc-dialog",role:"alertdialog","aria-labelledby":"my-mdc-dialog-label","aria-describedby":"my-mdc-dialog-description"},t("div",{class:"mdc-dialog__surface"},t("header",{class:"mdc-dialog__header"},t("h2",{class:"mdc-dialog__header__title"},this.resultHeading)),t("section",{class:"mdc-dialog__body"},this.resultText),t("footer",{class:"mdc-dialog__footer"},t("button",{type:"button",class:"mdc-button mdc-button--raised mdc-dialog__footer__button mdc-dialog__footer__button--accept"},this.resultButtonLabel))),t("div",{class:"mdc-dialog__backdrop"})))},e.prototype.isFeedingAllowed=function(){return this.isRunning&&this.feedTimer<=30},e.prototype.isGeneralClueAllowed=function(){return this.isRunning&&this.remainingClues>=1},e.prototype.isSpecificClueAllowed=function(){return this.isRunning&&this.remainingClues>=2},e.prototype.resetGame=function(){clearInterval(this.intervalHandle),this.isRunning=!1,this.gameTimer=60*this.initialGameTimer,this.feedTimer=60*this.initialFeedTimer,this.successesUntilVictory=this.goalNumberOfSuccesses,this.remainingClues=this.initialNumberOfClues},e.prototype.setDifficulty=function(e){this.initialGameTimer=e.initialGameTimer,this.goalNumberOfSuccesses=e.goalNumberOfSuccesses,this.resetGame()},e.prototype.startGame=function(){var e=this;this.isRunning=!0,this.clueTimer<1&&this.setClueTimer(),this.intervalHandle=setInterval(function(){e.gameTimer-=1,e.feedTimer-=1,e.clueTimer-=1,e.clueTimer<1&&(e.remainingClues+=1,e.setClueTimer()),(e.feedTimer<1||e.gameTimer<1)&&(e.isRunning=!1,clearInterval(e.intervalHandle),e.gameOver(u))},1e3)},e.prototype.pauseGame=function(){clearInterval(this.intervalHandle),this.isRunning=!1},e.prototype.playOrPause=function(){this.isRunning?this.pauseGame():this.startGame()},e.prototype.feed=function(){this.feedTimer=this.initialFeedTimer-this.feedTimer},e.prototype.logSuccess=function(){this.successesUntilVictory-=1,this.successesUntilVictory<1&&(clearInterval(this.intervalHandle),this.isRunning=!1,this.gameOver(a))},e.prototype.useGeneralClue=function(){this.remainingClues-=1},e.prototype.useSpecificClue=function(){this.remainingClues-=2},e.prototype.setClueTimer=function(){this.clueTimer=Math.round(5*Math.random()+15)},e.prototype.gameOver=function(e){this.resultHeading=e.heading,this.resultText=e.text,this.resultButtonLabel=e.buttonLabel,this.dialog.show()},Object.defineProperty(e,"is",{get:function(){return"app-home"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{clueTimer:{state:!0},dialog:{state:!0},feedingClass:{state:!0},feedTimer:{state:!0},gameTimer:{state:!0},generalCluesDisabled:{state:!0},goalNumberOfSuccesses:{state:!0},htmlElement:{elementRef:!0},initialFeedTimer:{state:!0},initialGameTimer:{state:!0},initialNumberOfClues:{state:!0},intervalHandle:{state:!0},isFeedingAllowed:{method:!0},isGeneralClueAllowed:{method:!0},isRunning:{state:!0},isSpecificClueAllowed:{method:!0},remainingClues:{state:!0},resultButtonLabel:{state:!0},resultHeading:{state:!0},resultText:{state:!0},specificCluesDisabled:{state:!0},successesUntilVictory:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".mdc-dialog{display:-webkit-box;display:-ms-flexbox;display:flex;position:fixed;top:0;left:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;visibility:hidden;z-index:5}.mdc-dialog__backdrop{background-color:rgba(0,0,0,.87);background-color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));position:fixed;top:0;left:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;opacity:0;z-index:-1}.mdc-dialog__surface{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-background,#fff);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:calc(100% - 30px);min-width:640px;max-width:865px;-webkit-transform:translateY(150px) scale(.8);transform:translateY(150px) scale(.8);border-radius:2px;opacity:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:24px 24px 0}.mdc-dialog[dir=rtl] .mdc-dialog__header,[dir=rtl] .mdc-dialog .mdc-dialog__header{text-align:right}.mdc-dialog__header__empty{padding:0}.mdc-dialog__header__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0}.mdc-dialog__body{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54));font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;margin-top:20px;padding:0 24px 24px}.mdc-dialog__body--scrollable{max-height:195px;border-top:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);overflow-x:auto;overflow-y:scroll;-webkit-overflow-scrolling:touch}.mdc-dialog__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:8px}.mdc-dialog__footer__button{margin-left:0;margin-right:8px}.mdc-dialog__footer__button[dir=rtl],[dir=rtl] .mdc-dialog__footer__button{margin-left:8px;margin-right:0}.mdc-dialog__footer__button:last-child{margin-left:0;margin-right:0}.mdc-dialog__footer__button:last-child[dir=rtl],[dir=rtl] .mdc-dialog__footer__button:last-child{margin-left:0;margin-right:0}.mdc-dialog__action:not(:disabled){color:#018786;color:var(--mdc-theme-secondary,#018786)}\@media (max-width:640px){.mdc-dialog,.mdc-dialog__surface{min-width:280px}.mdc-dialog__body{line-height:24px}}.mdc-dialog--animating{visibility:visible}.mdc-dialog--animating .mdc-dialog__backdrop{-webkit-transition:opacity 120ms 0s cubic-bezier(0,0,.2,1);transition:opacity 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-dialog--animating .mdc-dialog__surface{-webkit-transition:opacity 120ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 120ms 0s cubic-bezier(0,0,.2,1);transition:opacity 120ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 120ms 0s cubic-bezier(0,0,.2,1);transition:opacity 120ms 0s cubic-bezier(0,0,.2,1),transform 120ms 0s cubic-bezier(0,0,.2,1);transition:opacity 120ms 0s cubic-bezier(0,0,.2,1),transform 120ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-dialog--open{visibility:visible}.mdc-dialog--open .mdc-dialog__backdrop{opacity:.3}.mdc-dialog--open .mdc-dialog__surface{-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1);opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}.app-home{padding:66px 10px 10px}.warning{color:red}.difficulty-controls,.game-controls{margin-top:1em;margin-bottom:1em}"},enumerable:!0,configurable:!0}),e}();e.AppHome=o,Object.defineProperty(e,"__esModule",{value:!0})});