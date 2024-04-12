const menu = [
    {
      id: 1,
      title: "Panquecas",
      category: "manha",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `Panquecas de trigo integral, feitas com ovos orgânicos e xarope de bordo puro.`,
    },
    {
      id: 2,
      title: "Combo ao Molho",
      category: "almoço",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `Combo de Hamburguer, batatas fritas e molho de salada.`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `Leite batido com chocolate, chantilly e cerejas no topo.`,
    },
    {
      id: 4,
      title: "Café da manhã country",
      category: "manha",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Ovos fritos, bacon, torradas e suco de laranja fresco.`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "almoço",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Sonho Oreo",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Delicioso shake de Oreo, com um toque de baunilha e coberto com chantilly.`,
    },
    {
      id: 7,
      title: "Transbordamento de Bacon",
      category: "manha",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `Um café da manhã recheado com bacon crocante, ovos fritos e torradas quentinhas.`,
    },
    {
      id: 8,
      title: "Clássico Americano",
      category: "almoço",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `Um hambúrguer clássico com queijo cheddar, alface, tomate e nosso molho especial.`,
    },
    {
      id: 9,
      title: "Companheiro de Quarentena",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `Um shake de chocolate com um toque de menta, perfeito para relaxar em casa.`,
    },
    {
      id: 10,
      title: "Bife de Bisão",
      category: "jantar",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `Um suculento bife de bisão, servido com batatas assadas e uma salada fresca.`,
    }
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["Todas"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "Todas") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
