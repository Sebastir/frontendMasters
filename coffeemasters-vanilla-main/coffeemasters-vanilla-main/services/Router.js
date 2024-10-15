const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const url = link.getAttribute('href');
        //const url2 = link.href;
        Router.go(url);
      })
    })

    // Event Handler for URL changes
    window.addEventListener('popstate', event => {
      Router.go(event.state.route, false);;
    })
    //Check initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory=true) => {
    console.log(`Going to ${route}`)

    if(addToHistory) {
      history.pushState({ route }, null, route)
    }
    let pageElement = null;

    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page")
        break;

      case "/order":
        pageElement = document.createElement("order-page")
        break;
      default:
      if(route.startsWith("/product-")) {
        pageElement = Document.createElement("details-page");

        const paramId = route.substring(route.lastIndexOf("-")+1);
        pageElement.dataset.id = paramId
      }
    }
      if(pageElement) {
    //document.querySelector('main').children[0].remove();
    // document.querySelector('main').innerHTML = "";
      const cache = document.querySelector('main');
      cache.innerHTML = "";
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  }
}

export default Router;
