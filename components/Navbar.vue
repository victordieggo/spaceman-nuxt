<script>
export default {
  props: ['items'],

  data() {
    return {
      isActive: 'is-active',
      isAnimating: 'is-animating',
      toggleClass: 'navBar-toggle',
    }
  },

  render() {
    const generateNavItems = (items) => {
      let navItems = [];
      items.forEach((item) => {
        if (item.children) {
          navItems.push(
            <li class="navBar-menuItem navBar-menuItem--hasChildren">
              <n-link class="navBar-menuItem-link" to={item.route} event="disabled" nativeOnClick={()=> this.submenuHandler(event.currentTarget)}>
                {item.text}
              </n-link>
              <ul class="navBar-subMenu">
                {generateNavItems(item.children)}
              </ul>
            </li>
          );
        } else {
          navItems.push(
            <li class="navBar-menuItem">
              <n-link class="navBar-menuItem-link" to={item.route} nativeOnClick={this.toggleNavbar}>
                {item.text}
              </n-link>
            </li>
          );
        }
      });

      return navItems;
    };

    return (
      <nav class="navBar" role="navigation">
        <button class="navBar-btn navBar-toggle u-md-show" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleNavbar}></button>
        <ul class="navBar-menu">
          {generateNavItems(this.items)}
        </ul>
      </nav>
    )
  },

  methods: {
    toggleExpanded(element) {
      const ariaExpanded = element.getAttribute('aria-expanded');
      if (!ariaExpanded) return;
      element.setAttribute('aria-expanded', ariaExpanded == 'false' ? 'true' : 'false');
    },

    getActiveItems(context) {
      return context.querySelectorAll('.is-active');
    },

    disableActiveItems(element) {
      Array.prototype.forEach.call(this.getActiveItems(element.parentNode), (activeItem) => {
        if (activeItem != element) {
          this.toggleSubmenu(activeItem.firstElementChild);
        }
      });
    },

    toggleNavbar() {
      if (window.innerWidth > 840) return;
      const navBar = this.$el;
      if (navBar.classList.contains(this.isAnimating)) return;
      document.body.classList.toggle('navBar-disableScroll');
      navBar.classList.add(this.isAnimating);
      navBar.classList.toggle(this.isActive);

      const overlayClass = 'navBar-overlay';
      const navOverlay = navBar.querySelector('.' + overlayClass);

      ['webkitAnimationEnd', 'animationend'].forEach((animationEvent) => {
        navBar.addEventListener(animationEvent, () => navBar.classList.remove(this.isAnimating));
        if (navOverlay) {
          navOverlay.addEventListener(animationEvent, () => navBar.removeChild(navOverlay));
        }
      });

      if (!navOverlay) {
        const newOverlay = document.createElement('div');
        newOverlay.className = [overlayClass, this.toggleClass].join(' ');
        newOverlay.onclick = () => {};
        newOverlay.addEventListener('click', this.toggleNavbar)
        navBar.appendChild(newOverlay);
      }

      const triggers = document.querySelectorAll('.' + this.toggleClass);
      Array.prototype.forEach.call(triggers, (trigger) => this.toggleExpanded(trigger));
    },

    toggleSubmenu(element) {
      element.parentNode.classList.toggle(this.isActive);
      this.toggleExpanded(element);
    },

    submenuHandler(element) {
      this.toggleSubmenu(element);
      this.disableActiveItems(element.parentNode);
    },
  },

  mounted() {
    document.addEventListener('click', (event) => {
      const targetParent = event.target.parentNode;
      if (targetParent.classList.contains('navBar-menuItem--hasChildren')) {
        return;
      }

      if (window.innerWidth < 840) {
        return;
      }

      this.disableActiveItems(this.$el);
    });

    document.addEventListener('keyup', (event) => {
      const key = event.keyCode;
      Array.prototype.forEach.call(this.getActiveItems(this.$el), (activeItem) => {
        if (key == 27 || key == 9 && !activeItem.contains(event.target)) {
          this.toggleSubmenu(activeItem.firstElementChild);
        }
      });
    });
  }
}
</script>
