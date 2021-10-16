
window.addEventListener("load", () => {
  	var sidemenu = document.querySelector("#menu-main-nav");
  	if (sidemenu!=null) {
		var parents = sidemenu.querySelectorAll(".menu-item-has-children");
		for (var p in parents) {
			if(typeof parents[p].tagName != "undefined") {
				var submenu = parents[p].querySelector(".sub-menu");
				submenu.style.display = "none";
				submenu._collapsed = true;
				var toggler = document.createElement("a");
				toggler.style.float = "left";
				toggler.style.marginRight = "10px";
				parents[p].prepend(toggler);
				toggler.href = "javascript:;";
				toggler.innerHTML = "[v]";
				toggler.addEventListener("click", function() {
					console.clear();
					this.submenu._collapsed = !this.submenu._collapsed;
					this.submenu.style.display = this.submenu._collapsed ? "none" : "block";
					this.toggler.innerHTML = this.submenu._collapsed ? "[v]" : "[>]";
					console.log(this.submenu.innerText);
				}.bind({submenu:submenu, toggler:toggler}));
			}
		}  		
  	}
});

