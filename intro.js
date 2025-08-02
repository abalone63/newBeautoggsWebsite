 document.addEventListener("DOMContentLoaded", (e) => {
     var tl = gsap.timeline();
     /*gsap.set("header", {
         //opacity: 0,
         //scaleY: 6,
         height: "100vh",
         //duration: 2
     });
     gsap.set(".members, nav", {
         opacity: 0,
         //duration: 2
     });*/
     /*tl.from(".shipContainer", {
         opacity: 0,
         duration: 1.2
     });
     tl.fromTo(".shipContainer", {
         margin: "0 20%",
         left: "0",
         right: "0",
         bottom: "10%"
     }, {
         margin: "auto",
         top: "0",
         right: "auto",
         bottom: "auto",
         width: "0",
         opacity: 0,
         ease: "power1.inout",
         duration: 2
     }, 2);*/
     tl.from(".banner", {
         opacity: 0,
         scale: 0,
         transformOrigin: "0 0",
         duration: 1
     });
     tl.from("header", {
         height: "100vh",
         duration: 1.5
     })
     tl.from(".members, nav", {
         opacity: 0,
         duration: 1
     });
 });
