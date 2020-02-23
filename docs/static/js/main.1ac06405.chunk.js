(this["webpackJsonpgroupify-web"]=this["webpackJsonpgroupify-web"]||[]).push([[0],{11:function(t,e,n){t.exports=n(19)},16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(10),l=n.n(i);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(1),c=n.n(s),o=n(3),u=n(4),h=n(5),p=n(7),f=n(6),v=n(2),d=n(8);n(18);function y(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("b",null,"> Groupify Alpha")),r.a.createElement("h2",null,"A Spotify app for people with friends."),r.a.createElement("h6",null,'Alpha Version "will literally break if a single thing goes wrong". ',r.a.createElement("a",{href:"https://github.com/wenjalan/Groupify"},"GitHub")))}var b=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(p.a)(this,Object(f.a)(e).call(this,t))).handleClick=n.handleClick.bind(Object(v.a)(n)),n}return Object(d.a)(e,t),Object(h.a)(e,[{key:"handleClick",value:function(){this.props.onCreateParty()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("button",{onClick:this.handleClick},"START THE PARTY"))}}]),e}(r.a.Component);function g(t){var e=t.guests;return null==e?r.a.createElement("li",null,"waiting..."):e.map((function(t){return r.a.createElement("li",null,t)}))}var m=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(p.a)(this,Object(f.a)(e).call(this,t))).handleClick=n.handleClick.bind(Object(v.a)(n)),n.loadInviteLink=n.loadInviteLink.bind(Object(v.a)(n)),n.loadGuestList=n.loadGuestList.bind(Object(v.a)(n)),n.state={inviteLink:"loading..."},n}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(o.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"loading..."==this.state.inviteLink&&(e=setInterval(this.loadInviteLink,5e3),this.setState({interval:e})),n=setInterval(this.loadGuestList,5e3),this.setState({interval2:n});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval),clearInterval(this.state.interval2)}},{key:"loadInviteLink",value:function(){var t=Object(o.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.getPartyInvite();case 2:null!=(e=t.sent)&&(clearInterval(this.state.interval),this.setState({inviteLink:e}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadGuestList",value:function(){var t=Object(o.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("refreshing guest list..."),t.next=3,this.props.getGuestList();case 3:e=t.sent,this.setState({guests:e});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleClick",value:function(){this.props.onCreatePlaylist()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"> Let's Get Groovin'"),r.a.createElement("h2",null,"Current Party:"),r.a.createElement(g,{guests:this.state.guests}),r.a.createElement("h3",null,"Invite Link: ",r.a.createElement("a",null,this.state.inviteLink)),r.a.createElement("button",{onClick:this.handleClick},"EVERYONE'S READY"))}}]),e}(r.a.Component),k=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(p.a)(this,Object(f.a)(e).call(this,t))).state={playlistLink:t.playlistLink},n}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"> Done."),r.a.createElement("h3",null,this.state.playlistLink))}}]),e}(r.a.Component),j="http://24.16.67.60:1000/api",E=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(p.a)(this,Object(f.a)(e).call(this,t))).state={stage:0,partyId:-1,playlistLink:"null",partyInvite:"hold on"},n.handleClick=n.handleClick.bind(Object(v.a)(n)),n.createParty=n.createParty.bind(Object(v.a)(n)),n.getPartyInvite=n.getPartyInvite.bind(Object(v.a)(n)),n.createPlaylist=n.createPlaylist.bind(Object(v.a)(n)),n.getGuestList=n.getGuestList.bind(Object(v.a)(n)),n}return Object(d.a)(e,t),Object(h.a)(e,[{key:"createParty",value:function(){var t=Object(o.a)(c.a.mark((function t(){var e,n,a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("requesting create party from service..."),j+"/create",t.next=4,fetch("http://24.16.67.60:1000/api/create",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log("error occurred:",t)}));case 4:e=t.sent,n=e.authUrl,console.log("got auth url:",n),a=n.search("&state=")+7,r=n.substring(a,a+5),window.open(n),this.setState({partyId:r,stage:1}),console.log("set party id to",r);case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getPartyInvite",value:function(){var t=Object(o.a)(c.a.mark((function t(){var e,n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=j+"/add?party="+this.state.partyId,console.log("getting join party url from service..."),t.next=4,fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error("error:"+t),null}));case 4:if(null!=(n=t.sent)){t.next=10;break}return console.log("party not found"),t.abrupt("return",null);case 10:return a=n.authUrl,console.log("got url:"+a),t.abrupt("return",a);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getGuestList",value:function(){var t=Object(o.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=j+"/party?id="+this.state.partyId,t.next=3,fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.log("error:",t)}));case 3:return n=t.sent,t.abrupt("return",n.users);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"createPlaylist",value:function(){var t=Object(o.a)(c.a.mark((function t(){var e,n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("creating playlist..."),e=j+"/make?party="+this.state.partyId,t.next=4,fetch(e,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).catch((function(t){console.error("error:"+t)}));case 4:if(null!=(n=t.sent)){t.next=8;break}return console.error("couldn't retrieve url from service:",n),t.abrupt("return",null);case 8:return a=n.playlistUrl,console.log("got playlist url:",a),this.setState({playlistLink:a,stage:2}),t.abrupt("return",a);case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleClick",value:function(){this.setState((function(t){return{stage:(t.stage+1)%3}}))}},{key:"render",value:function(){return 0==this.state.stage?r.a.createElement("div",null,r.a.createElement(b,{onCreateParty:this.createParty})):1==this.state.stage?r.a.createElement("div",null,r.a.createElement(m,{onCreatePlaylist:this.createPlaylist,getPartyInvite:this.getPartyInvite,getGuestList:this.getGuestList})):2==this.state.stage?r.a.createElement("div",null,r.a.createElement(k,{playlistLink:this.state.playlistLink})):r.a.createElement("div",null,r.a.createElement("h2",null,"whoops, something went wrong"))}}]),e}(r.a.Component);l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.1ac06405.chunk.js.map