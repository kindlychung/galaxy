define([],function(){function a(j,h){var p=/(-?[0-9\.]+)/g,k=j.toString().toLowerCase()||"",g=h.toString().toLowerCase()||"",l=String.fromCharCode(0),n=k.replace(p,l+"$1"+l).split(l),e=g.replace(p,l+"$1"+l).split(l),d=(new Date(k)).getTime(),o=d?(new Date(g)).getTime():null;if(o){if(d<o){return -1}else{if(d>o){return 1}}}var m,f;for(var i=0,c=Math.max(n.length,e.length);i<c;i++){m=parseFloat(n[i])||n[i];f=parseFloat(e[i])||e[i];if(m<f){return -1}else{if(m>f){return 1}}}return 0}return a});