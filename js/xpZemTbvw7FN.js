function vTurbChangePlayer(){!vTurbOriginalPlayerIsMobile&&vTurbDeviceIsMobile||vTurbOriginalPlayerIsMobile&&!vTurbDeviceIsMobile?(vTurbPlayer=vTurbAlternativePlayer,vTurbSrcId=vTurbPlayer.id):vTurbPlayer=vTurbOriginalPlayer;var e=document.getElementById(`vid_${vTurbOriginalPlayer.id}`);e&&e.remove();var r=document.getElementById(`scr_${vTurbOriginalPlayer.id}`);r&&r.setAttribute("id",`scr_${vTurbSrcId}`)}function vTurbCreatSmartvdsElements(){var e,r,t;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||(window,e=document,r=e.getElementById(`scr_${vTurbSrcId}`),(t=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,r.parentElement.insertBefore(t,r)):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`scr_${vTurbSrcId}`),(t=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,t.style.position="relative",t.style.width="100%",t.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,r.parentElement.insertBefore(t,r)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`vid_${vTurbPlayer.id}`),(t=e.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.objectFit="cover",t.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,r.appendChild(t)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`vid_${vTurbPlayer.id}`),(t=e.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.backdropFilter="blur(5px)",t.style.webkitBackdropFilter="blur(5px)",r.appendChild(t)}(document))}function vTurbLoadSmrtvds(){var e,r,t,a;e=window,r=document,e.smrtvds||(t=e.smrtvds=function(){t.callMethod?t.callMethod.apply(t,arguments):t.queue.push(arguments)},e._smrtvds||(e._smrtvds=t),t.push=t,t.loaded=!0,t.version="1.1",t.queue=[],(a=r.createElement("script")).async=!0,a.src=`https://cdn.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,r.getElementsByTagName("head")[0].appendChild(a)),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options)}function vTurbSmrtvds(){vTurbCreatSmartvdsElements(),vTurbLoadSmrtvds()}var vTurbOriginalPlayer={"id":"65fcc7f4a4cd2f0008c14def","org_id":"78d4b413-1baa-4af8-a4f7-c73364f17f12","name":"teste","device_type":"desktop","video_aspect_ratio":"56.25","thumbnail_key":"78d4b413-1baa-4af8-a4f7-c73364f17f12/players/65fcc7f4a4cd2f0008c14def/thumbnail.jpg","cover_key":"78d4b413-1baa-4af8-a4f7-c73364f17f12/players/65fcc7f4a4cd2f0008c14def/cover.jpg","version":"v1","video_id":"65fcc7d5cf52b70008781d75","options":{"autoplay":"smartplay","smart_autoplay_template":"image","theme":"#0068FF","foreground_color":"#FFFFFF","video":{"width":1920,"height":1080},"cdn":"cdn.converteai.net","displays":{"big_play":!1,"play_pause":!1,"backward":!1,"forward":!1,"volume":!1,"volume_bar":!0,"time":!1,"fullscreen":!1,"seekbar":!1,"seekbar_time":!0,"speed_control":!1},"callAction":[{"id":"callaction_65fcc7f4a4cd2f0008c14def_0","type":"below_button","btnText":"ACCEDER AL SAFESPACE","position":"bc","link":"https://pay.hotmart.com/Y91884349K?checkoutMode=10","range":{"start":680,"finish":940},"color":"#1890FF","show_visit_returns":!1,"colors":{"text":"#FFFFFF","background":"#1890FF","text_hover":"#FFFFFF","background_hover":"#1890FF"},"size":"sm"}],"pixels":[],"thumbs":[],"headlines":[],"turbos":[],"smart_autoplay_elements":[{"id":"smart_autoplay_element_65fcc7f4a4cd2f0008c14def_0","height":1037.0916337392591,"width":1037.0916337392591,"x":441.67300380228136,"y":43.78378378378378,"order":1,"opacity":1,"rotation":0,"type":"image","properties":{"alt":"Smart AutoPlay","src":"https://cdn.converteai.net/78d4b413-1baa-4af8-a4f7-c73364f17f12/2024/03/21/65fcc8e5d267b30001fa5f90.png"}}],"mini_hooks":!1,"mini_hooks_elements":[],"resume":!1,"fake_bar":!0,"headline":!1,"turbo":!1,"turbo_speed":1,"turbo_auto_test":!1,"smartplay_options":{"top_text":"Seu v\xeddeo j\xe1 come\xe7ou","bottom_text":"Clique para ouvir","foreground_color":"#FFFFFF","background_color":"rgba(8,93,138,0.73)","start_at":0,"end_at":880,"animation":{"animation":"pulse","properties":{"speed":6}},"custom_preview":null},"fake_bar_options":{"height":10,"alpha":2,"vbar_height":!0,"vbar_end":!0,"vbar_network":!0,"vbar_color":null}}},vTurbSrcId="65fcc7f4a4cd2f0008c14def",vTurbPlayer=vTurbOriginalPlayer,vTurbDeviceIsMobile=window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),vTurbOriginalPlayerIsMobile="mobile"===vTurbOriginalPlayer.device_type;vTurbDeviceIsMobile=vTurbDeviceIsMobile&&vTurbDeviceIsMobile[0],vTurbSmrtvds();