(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(t,e,a){t.exports=a(465)},211:function(t,e,a){},269:function(t,e){},271:function(t,e){},303:function(t,e){},333:function(t,e,a){},347:function(t,e,a){},465:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),i=a(9),o=a.n(i),r=(a(211),a(60)),c=a(61),l=a(65),u=a(62),h=a(64),f=(a(98),a(20)),d=(a(216),a(204)),m=(a(219),a(10)),p=(a(222),a(51)),b=a(23),_=(a(133),a(41)),g=(a(229),a(96)),y=a(74),S=a.n(y),k=(a(333),a(464),a(203)),E=(a(347),{blockchain:"eos",protocol:"http",host:"api.kylin.eosbeijing.one",port:8880,chainId:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"}),v="sihaiyijia11";Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var a in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?e[a]:("00"+e[a]).substr((""+e[a]).length)));return t};var w=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).fetchSlotRecord=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a.eosjs.getTableRows({json:!0,code:v,scope:v,table:"record",limit:20,lower_bound:t}).then(function(t){if(t.rows.length>0){t.more&&a.setState({history_record_data:[]});for(var e=a.state.history_record_data,s=0;s<t.rows.length;s++)e.push({key:e.length,txtime:new Date(1e3*t.rows[s].time).Format("MM/dd hh:mm:ss"),account:t.rows[s].player,quantity:t.rows[s].quantity,payout:t.rows[s].win});a.setState({history_record_data:e}),!1===t.more&&a.setState({data_records:a.state.history_record_data.sort(a.sortRecordData)})}t.more?setTimeout(a.fetchSlotRecord(t.rows[t.rows.length-1].id+1),1e3):(setTimeout(a.fetchSlotRecord,1e3),a.setState({history_record_data:[]}))}).catch(function(t){console.error(t),setTimeout(a.fetchSlotRecord,2e3),a.setState({history_record_data:[]})})},a.sortRecordData=function(t,e){return e.key-t.key},a.componentDidMount=function(){a.eosjs=S()({httpEndpoint:"".concat(E.protocol,"://").concat(E.host,":").concat(E.port),chainId:E.chainId}),a.fetchSlotRecord()},a.state={data_records:[],history_record_data:[]},a.eosjs=null,a.sortRecordData=a.sortRecordData.bind(Object(b.a)(Object(b.a)(a))),a.fetchSlotRecord=a.fetchSlotRecord.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"tb-records-bet"},n.a.createElement(k.a,{loading:this.state.data_records.length<=0,columns:[{key:"txtime",dataIndex:"txtime",title:"Time",align:"center",width:"25%"},{key:"account",dataIndex:"account",title:"Player",align:"center",width:"25%"},{key:"quantity",dataIndex:"quantity",title:"EOS",align:"center",width:"25%"},{key:"payout",dataIndex:"payout",title:"Payout",align:"center",width:"25%"}],dataSource:this.state.data_records,pagination:!1,scroll:{y:480}}))}}]),e}(s.Component),O=g.a.Header,j=g.a.Content,N=_.a.Option,x={blockchain:"eos",protocol:"http",host:"api.kylin.eosbeijing.one",port:8880,chainId:"5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191"},C="sihaiyijia11",T=["Tai-King","Sai-King","Tai-Seven7","Sai-Seven7","Tai-Blink","Sai-Blink","Tai-Watermelon","Sai-Watermelon","Tai-Bell","Sai-Bell","Tai-Pumpkin","Sai-Pumpkin","Tai-Orange","Sai-Orange","Tai-Apple","Sai-Apple","...","Waiting"],R=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).init=function(){a.eosjs=S()({httpEndpoint:"".concat(x.protocol,"://").concat(x.host,":").concat(x.port),chainId:x.chainId}),document.addEventListener("scatterLoaded",function(t){if(a.scatter=window.scatter,window.scatter=null,a.scatter&&a.scatter.identity){var e=a.scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});a.setState({player_account:e.name}),a.setState({is_login:!0}),a.getPlayerAsset()}})},a.playerLoginLogout=function(){null!==a.scatter?a.state.is_login&&a.scatter&&a.scatter.identity?a.scatter.forgetIdentity().then(function(){a.setState({is_login:!1}),a.setState({player_account:"Login"}),a.setState({player_asset:{eos:"0.0000 EOS",tpt:"0.0000 TPT",otc:"0.0000 OTC"}})}):a.state.is_login||!a.scatter||a.scatter.identity||a.scatter.getIdentity({accounts:[x]}).then(function(){var t=a.scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});a.setState({player_account:t.name}),a.setState({is_login:!0}),a.getPlayerAsset()}):p.a.info("Must Install Scatter First")},a.getPlayerAsset=function(){a.state.is_login&&"Login"!==a.state.player_account&&a.eosjs.getTableRows({json:!0,code:"eosio.token",scope:a.state.player_account,table:"accounts"}).then(function(t){if(a.state.is_login&&t.rows[0]){var e=a.state.player_asset;e.eos=t.rows[0].balance,a.setState({player_asset:e})}}).catch(function(t){console.error(t)})},a.changeChip=function(t){a.setState({chip:t}),a.setState({bet_asset:.1}),a.setState({fruit_asset:{king:0,seven7:0,blink_double:0,watermelon:0,bell:0,pumpkin:0,orange:0,apple:0}})},a.changeBetAsset=function(t){a.setState({bet_asset:t})},a.setBetAssetDouble=function(){var t=a.state.bet_asset;2*t<=2e3&&a.setState({bet_asset:2*t})},a.setBetAssetHalf=function(){var t=a.state.bet_asset;t/2>=.1&&a.setState({bet_asset:t/2})},a.setBetAssetMax=function(){a.setState({bet_asset:2e3})},a.setBetAssetMin=function(){a.setState({bet_asset:.1})},a.betStart=function(){if(a.state.is_login&&"Login"!==a.state.player_account){var t=0,e=a.getUUID(8,10),s="uid:"+e;if(0!==a.state.fruit_asset.king&&(t+=a.state.fruit_asset.king,s=s+";0:"+1e4*a.state.fruit_asset.king),0!==a.state.fruit_asset.seven7&&(t+=a.state.fruit_asset.seven7,s=s+";1:"+1e4*a.state.fruit_asset.seven7),0!==a.state.fruit_asset.blink_double&&(t+=a.state.fruit_asset.blink_double,s=s+";2:"+1e4*a.state.fruit_asset.blink_double),0!==a.state.fruit_asset.watermelon&&(t+=a.state.fruit_asset.watermelon,s=s+";3:"+1e4*a.state.fruit_asset.watermelon),0!==a.state.fruit_asset.bell&&(t+=a.state.fruit_asset.bell,s=s+";4:"+1e4*a.state.fruit_asset.bell),0!==a.state.fruit_asset.pumpkin&&(t+=a.state.fruit_asset.pumpkin,s=s+";5:"+1e4*a.state.fruit_asset.pumpkin),0!==a.state.fruit_asset.orange&&(t+=a.state.fruit_asset.orange,s=s+";6:"+1e4*a.state.fruit_asset.orange),0!==a.state.fruit_asset.apple&&(t+=a.state.fruit_asset.apple,s=s+";7:"+1e4*a.state.fruit_asset.apple),0!==t)if(t>1*a.state.player_asset.eos.split(" ")[0])p.a.info("Overdrawn Balance");else a.scatter.eos(x,S.a,{}).transfer({from:a.state.player_account,to:C,quantity:Number(t).toFixed(4)+" EOS",memo:s}).then(function(t){p.a.success("Slot Bet Success"),a.setState({slot_result_index:17}),a.getPlayerAsset(),a.fetchSlotResult(1*e)}).catch(function(t){p.a.error(t.message)});else p.a.warning("Must Select a Slot")}else p.a.warning("Please Login First")},a.getUUID=function(t,e){var a,s,n="1123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=[];if(e=e||n.length,t)for(a=0;a<t;a++)i[a]=n[0|Math.random()*e];else for(i[8]=i[13]=i[18]=i[23]="-",i[14]="4",a=0;a<36;a++)i[a]||(s=0|16*Math.random(),i[a]=n[19===a?3&s|8:s]);return i.join("")},a.fetchSlotResult=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a.eosjs.getTableRows({json:!0,code:C,scope:C,table:"record",lower_bound:e}).then(function(e){if(e.rows[0]){for(var s=e.rows.length,n=s-1;n>=0;n--)if(e.rows[n].uuid===t){a.setState({slot_result_index:1*e.rows[n].result});break}n<0&&(e.more?a.fetchSlotResult(t,e.rows[s-1].id):a.fetchSlotResult(t))}}).catch(function(e){console.error(e),setTimeout(a.fetchSlotResult(t),1e3)})},a.chooseFruitA=function(){console.log("King");var t=a.state.bet_asset,e=a.state.fruit_asset;e.king?e.king*=2:e.king=t,a.setState({fruit_asset:e})},a.chooseFruitB=function(){console.log("Seven7");var t=a.state.bet_asset,e=a.state.fruit_asset;e.seven7?e.seven7*=2:e.seven7=t,a.setState({fruit_asset:e})},a.chooseFruitC=function(){console.log("Blink_double");var t=a.state.bet_asset,e=a.state.fruit_asset;e.blink_double?e.blink_double*=2:e.blink_double=t,a.setState({fruit_asset:e})},a.chooseFruitD=function(){console.log("Watermelon");var t=a.state.bet_asset,e=a.state.fruit_asset;e.watermelon?e.watermelon*=2:e.watermelon=t,a.setState({fruit_asset:e})},a.chooseFruitE=function(){console.log("Bell");var t=a.state.bet_asset,e=a.state.fruit_asset;e.bell?e.bell*=2:e.bell=t,a.setState({fruit_asset:e})},a.chooseFruitF=function(){console.log("Pumpkin");var t=a.state.bet_asset,e=a.state.fruit_asset;e.pumpkin?e.pumpkin*=2:e.pumpkin=t,a.setState({fruit_asset:e})},a.chooseFruitG=function(){console.log("Orange");var t=a.state.bet_asset,e=a.state.fruit_asset;e.orange?e.orange*=2:e.orange=t,a.setState({fruit_asset:e})},a.chooseFruitH=function(){console.log("Apple");var t=a.state.bet_asset,e=a.state.fruit_asset;e.apple?e.apple*=2:e.apple=t,a.setState({fruit_asset:e})},a.state={fruit_asset:{king:0,seven7:0,blink_double:0,watermelon:0,bell:0,pumpkin:0,orange:0,apple:0},player_asset:{eos:"0.0000 EOS",tpt:"0.0000 TPT",otc:"0.0000 OTC"},bet_asset:.1,chip:"EOS",is_login:!1,player_account:"Login",slot_result_index:16},a.eosjs=null,a.scatter=null,a.init=a.init.bind(Object(b.a)(Object(b.a)(a))),a.getPlayerAsset=a.getPlayerAsset.bind(Object(b.a)(Object(b.a)(a))),a.getUUID=a.getUUID.bind(Object(b.a)(Object(b.a)(a))),a.fetchSlotResult=a.fetchSlotResult.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g.a,{className:"layout"},n.a.createElement(O,null,n.a.createElement("a",{href:"#",onClick:this.playerLoginLogout.bind(this),className:"login-logout"},!0===this.state.is_login?n.a.createElement("span",null,n.a.createElement(m.a,{type:"user"})," ",this.state.player_account):n.a.createElement("span",null,n.a.createElement(m.a,{type:"login"})," ",this.state.player_account)),n.a.createElement("span",{className:"player-asset"},"Asset: ",this.state.player_asset.eos),n.a.createElement("span",{className:"player-asset"},",\xa0\xa0\xa0\xa0",this.state.player_asset.tpt),n.a.createElement("span",{className:"player-asset"},",\xa0\xa0\xa0\xa0",this.state.player_asset.otc)),n.a.createElement(j,null,n.a.createElement("div",{className:"dice-result"},'Slots Result Is "',T[this.state.slot_result_index],'"'),n.a.createElement("div",{className:"dice-input-box"},n.a.createElement("div",{className:"chip"},n.a.createElement(_.a,{defaultValue:this.state.chip,onChange:this.changeChip.bind(this)},n.a.createElement(N,{value:"EOS"},"EOS"),n.a.createElement(N,{value:"TPT"},"TPT"),n.a.createElement(N,{value:"OTC"},"OTC"))),n.a.createElement("div",{className:"asset-input-box"},n.a.createElement(d.a,{min:.1,max:2e3,defaultValue:.1,precision:4,step:.5,onChange:this.changeBetAsset.bind(this),className:"asset-input",value:this.state.bet_asset}),n.a.createElement(f.a,{className:"asset-multiple",onClick:this.setBetAssetDouble.bind(this)},"2x"),n.a.createElement(f.a,{className:"asset-multiple",onClick:this.setBetAssetHalf.bind(this)},"1/2"),n.a.createElement(f.a,{className:"min-max",onClick:this.setBetAssetMax.bind(this)},"Max"),n.a.createElement(f.a,{className:"min-max",onClick:this.setBetAssetMin.bind(this)},"Min"))),n.a.createElement("div",{className:"fruits-box"},n.a.createElement("span",{className:"fruit-quantity"},this.state.fruit_asset.king),n.a.createElement("span",{className:"fruit-quantity"},this.state.fruit_asset.seven7),n.a.createElement("span",{className:"fruit-quantity"},this.state.fruit_asset.blink_double),n.a.createElement("span",{className:"fruit-quantity"},this.state.fruit_asset.watermelon),n.a.createElement("span",{className:"fruit-quantity"},this.state.fruit_asset.bell),n.a.createElement("span",{className:"fruit-quantity"},this.state.fruit_asset.pumpkin),n.a.createElement("span",{className:"fruit-quantity"},this.state.fruit_asset.orange),n.a.createElement("span",{className:"fruit-quantity"},this.state.fruit_asset.apple),n.a.createElement(f.a,{className:"fruit-btn",onClick:this.chooseFruitA.bind(this)},"King"),n.a.createElement(f.a,{className:"fruit-btn",onClick:this.chooseFruitB.bind(this)},"Seven7"),n.a.createElement(f.a,{className:"fruit-btn",onClick:this.chooseFruitC.bind(this)},"Blink"),n.a.createElement(f.a,{className:"fruit-btn",onClick:this.chooseFruitD.bind(this)},"Watermelon"),n.a.createElement(f.a,{className:"fruit-btn",onClick:this.chooseFruitE.bind(this)},"Bell"),n.a.createElement(f.a,{className:"fruit-btn",onClick:this.chooseFruitF.bind(this)},"Pumpkin"),n.a.createElement(f.a,{className:"fruit-btn",onClick:this.chooseFruitG.bind(this)},"Orange"),n.a.createElement(f.a,{className:"fruit-btn",onClick:this.chooseFruitH.bind(this)},"Apple")),n.a.createElement("div",{className:"bet-start"},n.a.createElement(f.a,{size:"large",type:"primary",onClick:this.betStart.bind(this)},"Let's Start")),n.a.createElement(w,null))))}}]),e}(s.Component),B=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(R,null))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[206,2,1]]]);
//# sourceMappingURL=main.1515d4e6.chunk.js.map