import { ON_SELECTED_IMAGE_CHANGE } from "../actions";

const shoppingInitialState = {
  items: [
    {
      id: 2321312,
      name: "Smartphone Apple iPhone 7 128GB",
      images: [
        {
          url:
            "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
          selected: true
        },
        {
          url:
            "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_2_c.jpg?v=2347575274",
          selected: false
        },
        {
          url:
            "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_3_c.jpg?v=318433138",
          selected: false
        },
        {
          url:
            "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_4_c.jpg?v=33273730",
          selected: false
        }
      ],
      price: {
        value: 3509.1,
        installments: 10,
        installmentValue: 389.9
      },
      selectedImage:
        "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg"
    },
    {
      id: 9971,
      name: "Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana",
      images: [
        {
          url:
            "http://mthumbs.buscape.com.br/tv/smart-tv-samsung-serie-4-un32j4300ag-32-polegadas-led-plana_600x600-PU95547_1.jpg",
          selected: true
        },
        {
          url:
            "http://thumbs.buscape.com.br/__400x400-PU95547_2_c.jpg?v=3988579075",
          selected: false
        },
        {
          url:
            "http://thumbs.buscape.com.br/__400x400-PU95547_4_c.jpg?v=4208003525",
          selected: false
        },
        {
          url:
            "http://thumbs.buscape.com.br/__231312400x400-PU95547_5_c.jpg?v=1473261122",
          selected: false
        }
      ],
      price: {
        value: 1139.9,
        installments: 10,
        installmentValue: 134.11
      },
      selectedImage:
        "http://mthumbs.buscape.com.br/tv/smart-tv-samsung-serie-4-un32j4300ag-32-polegadas-led-plana_600x600-PU95547_1.jpg"
    },
    {
      id: 6717131,
      name: "Câmera Digital Canon EOS Rebel T5i 18.0 Megapixels",
      images: [
        {
          url:
            "http://mthumbs.buscape.com.br/camera-digital/canon-eos-rebel-t5i-18-0-megapixels_600x600-PU7bf7b_1.jpg",
          selected: true
        }
      ],
      price: {
        value: 1999.2,
        installments: 10,
        installmentValue: 235.2
      },
      selectedImage:
        "http://mthumbs.buscape.com.br/camera-digital/canon-eos-rebel-t5i-18-0-megapixels_600x600-PU7bf7b_1.jpg"
    },
    {
      id: 6717132,
      name:
        "Lenovo IdeaPad 310 80UH0004BR Intel Core i7-6500U 2.5 GHz 8192 MB 1024 GB",
      images: [
        {
          url:
            "http://mthumbs.buscape.com.br/notebook/lenovo-ideapad-310-80uh0004br-intel-core-i7-6500u-2-5-ghz-8192-mb-1024-gb_600x600-PU98e6e_1.jpg",
          selected: true
        }
      ],
      price: {
        value: 2599.0,
        installments: 10,
        installmentValue: 259.9
      },
      selectedImage:
        "http://mthumbs.buscape.com.br/notebook/lenovo-ideapad-310-80uh0004br-intel-core-i7-6500u-2-5-ghz-8192-mb-1024-gb_600x600-PU98e6e_1.jpg"
    }
  ]
};

const shoppingReducer = (state = shoppingInitialState, action) => {
  switch (action.type) {
    case ON_SELECTED_IMAGE_CHANGE:
      const { id, url } = action.payload;
      const { items } = state;

      const product = items.find(product => product.id === id);

      const parsedImages = product.images.map(image => ({
        ...image,
        selected: image.url === url
      }));

      const parsedItems = items.map(item => ({
        ...item,
        selectedImage: item.id === id ? url : item.selectedImage,
        images: item.id === id ? parsedImages : item.images
      }));

      return {
        ...state,
        items: parsedItems
      };

    default:
      return state;
  }
};

export default shoppingReducer;
