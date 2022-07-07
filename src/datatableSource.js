export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const productRows = [
  {
    id: 1,
    name: "Versace Men Shorts",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 123,
    status: "active",
    price: "$200.00",
  },
  {
    id: 2,
    name: "Gucci Slippers",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 22,
    status: "active",
    price: "$1,600.00",
  },
  {
    id: 3,
    name: "Patek Phillipe",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 12,
    status: "active",
    price: "$260.00",
  },
  {
    id: 4,
    name: "Casio",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 54,
    status: "active",
    price: "$2,000.00",
  },
  {
    id: 5,
    name: "Nike Air Pro",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 45,
    status: "active",
    price: "$890.00",
  },
  {
    id: 6,
    name: "Nike Jordan",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 54,
    status: "active",
    price: "$290.00",
  },
  {
    id: 7,
    name: "Tasmanian Jeans",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 32,
    status: "active",
    price: "$205.00",
  },
  {
    id: 8,
    name: "Fendi Belt",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 24,
    status: "active",
    price: "$200.00",
  },
  {
    id: 9,
    name: "Nike Band",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 65,
    status: "active",
    price: "$200.00",
  },
  {
    id: 10,
    name: "Fendi Socks",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 78,
    status: "active",
    price: "$200.00",
  },
  {
    id: 11,
    name: "Georgio Armani Sweat Pants",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 44,
    status: "active",
    price: "$200.00",
  },
  {
    id: 12,
    name: "Gucci Jacket",
    img: "https://images.freeimages.com/images/large-previews/9c3/chronograph-watch-1-1536741.jpg",
    stock: 21,
    status: "active",
    price: "$200.00",
  },
];
