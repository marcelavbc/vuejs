const items =
    [{
        id: 1,
        name: "Wine - Pinot Noir Latour",
        price: "6.18",
        category: "Jewelery",
        description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl."
    }, {
        id: 2,
        name: "Temperature Recording Station",
        price: "6.21",
        category: "Computers",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend."
    }, {
        id: 3,
        name: "Gherkin - Sour",
        price: "6.46",
        category: "Kids",
        description: "Suspendisse accumsan tortor quis turpis."
    }, {
        id: 4,
        name: "Fudge - Cream Fudge",
        price: "8.24",
        category: "Music",
        description: "Integer tincidunt ante vel ipsum."
    }, {
        id: 5,
        name: "Muffin - Mix - Creme Brule 15l",
        price: "4.11",
        category: "Electronics",
        description: "In sagittis dui vel nisl. Duis ac nibh."
    }, {
        id: 6,
        name: "Southern Comfort",
        price: "5.94",
        category: "Games",
        description: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
    }, {
        id: 7,
        name: "Sproutsmustard Cress",
        price: "5.69",
        category: "Movies",
        description: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum."
    }, {
        id: 8,
        name: "Dried Cranberries",
        price: "4.25",
        category: "Industrial",
        description: "Maecenas pulvinar lobortis est."
    }, {
        id: 9,
        name: "Asparagus - Mexican",
        price: "8.05",
        category: "Industrial",
        description: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
    }, {
        id: 10,
        name: "Wine - Chateauneuf Du Pape",
        price: "7.03",
        category: "Shoes",
        description: "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci."
    }, {
        id: 11,
        name: "Wiberg Super Cure",
        price: "0.39",
        category: "Computers",
        description: "In congue."
    }, {
        id: 12,
        name: "Lettuce Romaine Chopped",
        price: "1.34",
        category: "Movies",
        description: "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
    }, {
        id: 13,
        name: "Soup - French Onion, Dry",
        price: "2.80",
        category: "Beauty",
        description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
    }, {
        id: 14,
        name: "7up Diet, 355 Ml",
        price: "6.12",
        category: "Outdoors",
        description: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti."
    }, {
        id: 15,
        name: "Cabbage Roll",
        price: "4.15",
        category: "Outdoors",
        description: "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
    }, {
        id: 16,
        name: "Irish Cream - Baileys",
        price: "7.93",
        category: "Music",
        description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    }, {
        id: 17,
        name: "Water - Mineral, Carbonated",
        price: "7.57",
        category: "Clothing",
        description: "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
    }, {
        id: 18,
        name: "Soup V8 Roasted Red Pepper",
        price: "9.60",
        category: "Sports",
        description: "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
    }, {
        id: 19,
        name: "Longos - Grilled Salmon With Bbq",
        price: "5.14",
        category: "Clothing",
        description: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
    }, {
        id: 20,
        name: "Oneshot Automatic Soap System",
        price: "5.47",
        category: "Baby",
        description: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    }, {
        id: 21,
        name: "Langers - Cranberry Cocktail",
        price: "7.33",
        category: "Sports",
        description: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."
    }, {
        id: 22,
        name: "Rabbit - Whole",
        price: "6.49",
        category: "Kids",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."
    }, {
        id: 23,
        name: "Wine - Riesling Dr. Pauly",
        price: "4.05",
        category: "Home",
        description: "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet."
    }, {
        id: 24,
        name: "Snails - Large Canned",
        price: "6.55",
        category: "Computers",
        description: "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
    }, {
        id: 25,
        name: "Energy Drink",
        price: "2.83",
        category: "Beauty",
        description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor."
    }, {
        id: 26,
        name: "Tea - Lemon Scented",
        price: "9.50",
        category: "Home",
        description: "Cras in purus eu magna vulputate luctus."
    }, {
        id: 27,
        name: "Bread - English Muffin",
        price: "1.34",
        category: "Tools",
        description: "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
    }, {
        id: 28,
        name: "Seedlings - Buckwheat, Organic",
        price: "6.38",
        category: "Beauty",
        description: "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    }, {
        id: 29,
        name: "Soup - Tomato Mush. Florentine",
        price: "0.82",
        category: "Music",
        description: "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
    }, {
        id: 30,
        name: "Burger Veggie",
        price: "3.79",
        category: "Tools",
        description: "Nulla justo."
    }, {
        id: 31,
        name: "Wine - Rioja Campo Viejo",
        price: "5.19",
        category: "Outdoors",
        description: "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede."
    }, {
        id: 32,
        name: "Clams - Bay",
        price: "1.76",
        category: "Outdoors",
        description: "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis."
    }, {
        id: 33,
        name: "Wine - Penfolds Koonuga Hill",
        price: "3.54",
        category: "Clothing",
        description: "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis."
    }, {
        id: 34,
        name: "Creme De Banane - Marie",
        price: "5.73",
        category: "Books",
        description: "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis."
    }, {
        id: 35,
        name: "Cocoa Powder - Natural",
        price: "2.75",
        category: "Jewelery",
        description: "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }, {
        id: 36,
        name: "Wine - Dubouef Macon - Villages",
        price: "2.08",
        category: "Kids",
        description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl."
    }, {
        id: 37,
        name: "Corn - On The Cob",
        price: "1.39",
        category: "Home",
        description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
    }, {
        id: 38,
        name: "Gatorade - Orange",
        price: "3.91",
        category: "Books",
        description: "Donec vitae nisi."
    }, {
        id: 39,
        name: "Tomatoes - Yellow Hot House",
        price: "3.90",
        category: "Industrial",
        description: "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
    }, {
        id: 40,
        name: "Broom And Brush Rack Black",
        price: "6.62",
        category: "Books",
        description: "Proin at turpis a pede posuere nonummy. Integer non velit."
    }, {
        id: 41,
        name: "Cranberry Foccacia",
        price: "1.90",
        category: "Toys",
        description: "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat."
    }, {
        id: 42,
        name: "Pancetta",
        price: "8.42",
        category: "Movies",
        description: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
    }, {
        id: 43,
        name: "Oregano - Fresh",
        price: "8.78",
        category: "Electronics",
        description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi."
    }, {
        id: 44,
        name: "Bagelers",
        price: "6.88",
        category: "Books",
        description: "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue."
    }, {
        id: 45,
        name: "Sauce - Alfredo",
        price: "8.50",
        category: "Tools",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices."
    }, {
        id: 46,
        name: "Raisin - Dark",
        price: "0.74",
        category: "Kids",
        description: "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }, {
        id: 47,
        name: "Snapple Lemon Tea",
        price: "2.13",
        category: "Movies",
        description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam."
    }, {
        id: 48,
        name: "Pasta - Lasagna Noodle, Frozen",
        price: "0.55",
        category: "Beauty",
        description: "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    }, {
        id: 49,
        name: "Bay Leaf",
        price: "3.24",
        category: "Garden",
        description: "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst."
    }, {
        id: 50,
        name: "Flour - Whole Wheat",
        price: "7.24",
        category: "Games",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue."
    }
    ]

export default items