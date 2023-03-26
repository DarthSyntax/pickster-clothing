import { create } from 'zustand';
export const useStore = create((set) => ({
  data: null,
  categoryItems: null,
  token: null,
  user: null,
  cart: [],
  addToCart: (item) => {
    set((state) => ({
      cart: [...state.cart, item],
    }));
  },

  increment: (item) => {
    set((state) => ({
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      }),
    }));
  },

  decrement: (item) => {
    set((state) => ({
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      }),
    }));
  },

  setToken: (user, token) => {
    set({ token: token });
    set({ user: user });
  },

  fetchData: async () => {
    const res = await fetch('https://kv64f05aq3.execute-api.us-east-2.amazonaws.com/beta/items', {
      method: 'GET', 
      headers: {
      'Content-Type': 'application/json',
    },
    });
    const data = await res.json();
    const categories = [];
    const categoryItems = [];
    console.log(data);
    data.body.Items.forEach((item) => {
      if (!categories.includes(item.category)) categories.push(item.category);
    });

    categories.forEach((item, index) => {
      categoryItems.push(
        data.body.Items.find((item) => item.category === categories[index])
      );
    });

    set({ categoryItems: categoryItems });
    set({ data: data.body.Items });
  },
}));
