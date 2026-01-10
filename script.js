/* =========================
   PRODUCT DATABASE
========================= */
const data = {
    men: [

          { title: "Men Shirt", price: 899, img: "https://tse4.mm.bing.net/th?q=men+shirt" },
        { title: "Men Shirt", price: 999, img: "https://tse1.mm.bing.net/th?q=formal+men+shirt" },
        { title: "Men Shirt", price: 849, img: "https://tse1.mm.bing.net/th?q=casual+men+shirt" },
        { title: "Men Shirt", price: 1299, img: "https://tse2.mm.bing.net/th?q=designer+shirt+men" },

        { title: "Men T-Shirt", price: 549, img: "https://tse3.mm.bing.net/th?q=men+tshirt" },
        { title: "Men T-Shirt", price: 699, img: "https://tse3.mm.bing.net/th?q=men+casual+tshirt" },
        { title: "Men T-Shirt", price: 499, img: "https://tse1.mm.bing.net/th?q=men+oversize+tshirt" },
        { title: "Men T-Shirt", price: 599, img: "https://tse1.mm.bing.net/th?q=graphic+tshirt+men" },

        { title: "Men Jeans", price: 1499, img: "https://tse3.mm.bing.net/th?q=men+jeans" },
        { title: "Men Jeans", price: 1599, img: "https://tse1.mm.bing.net/th?q=denim+jeans+men" },
        { title: "Men Jeans", price: 1299, img: "https://tse3.mm.bing.net/th?q=skinny+jeans+men" },
        { title: "Men Jeans", price: 1399, img: "https://tse1.mm.bing.net/th?q=men+straight+jeans" },

        { title: "Men Hoodie", price: 1299, img: "https://tse1.mm.bing.net/th?q=men+hoodie" },
        { title: "Men Hoodie", price: 1399, img: "https://tse1.mm.bing.net/th?q=winter+men+hoodie" },
        { title: "Men Hoodie", price: 1599, img: "https://tse1.mm.bing.net/th?q=thick+hoodie+men" },
        { title: "Men Hoodie", price: 1499, img: "https://tse4.mm.bing.net/th?q=zipper+hoodie+men" },

        { title: "Men Jacket", price: 1999, img: "https://tse4.mm.bing.net/th?q=men+leather+jacket" },
        { title: "Men Jacket", price: 2499, img: "https://tse4.mm.bing.net/th?q=men+bomber+jacket" },
        { title: "Men Jacket", price: 2999, img: "https://tse3.mm.bing.net/th?q=men+winter+jacket" },
        { title: "Men Jacket", price: 3499, img: "https://tse3.mm.bing.net/th?q=men+sleek+jacket" },

        { title: "Men Cargo", price: 1199, img: "https://tse3.mm.bing.net/th?q=men+cargo+pants" },
        { title: "Men Cargo", price: 1399, img: "https://tse2.mm.bing.net/th?q=baggy+cargo+men" },
        { title: "Men Cargo", price: 1299, img: "https://tse4.mm.bing.net/th?q=fashion+cargo+men" },
        { title: "Men Cargo", price: 1499, img: "https://tse4.mm.bing.net/th?q=men+military+cargo" },

        { title: "Men Shorts", price: 599, img: "https://tse4.mm.bing.net/th?q=men+shorts" },
        { title: "Men Shorts", price: 699, img: "https://tse3.mm.bing.net/th?q=men+sport+shorts" },
        { title: "Men Shorts", price: 499, img: "https://tse1.mm.bing.net/th?q=cotton+shorts+men" },
        { title: "Men Shorts", price: 799, img: "https://tse4.mm.bing.net/th?q=men+running+shorts" },

        { title: "Men Kurta", price: 899, img: "https://tse2.mm.bing.net/th?q=men+kurta" },
        { title: "Men Kurta", price: 1499, img: "https://tse3.mm.bing.net/th?q=designer+kurta+men" },
        { title: "Men Kurta", price: 1299, img: "https://tse1.mm.bing.net/th?q=embroidered+kurta+men" },
        { title: "Men Kurta", price: 1999, img: "https://tse2.mm.bing.net/th?q=wedding+kurta+men" },

        { title: "Men Suit", price: 4999, img: "https://tse1.mm.bing.net/th?q=men+formal+suit" },
        { title: "Men Suit", price: 6999, img: "https://tse1.mm.bing.net/th?q=men+3+piece+suit" },
        { title: "Men Suit", price: 8999, img: "https://tse1.mm.bing.net/th?q=groom+suit+men" },
        { title: "Men Suit", price: 11999, img: "https://tse4.mm.bing.net/th?q=designer+suit+men" },

        { title: "Men Shoes", price: 1899, img: "https://tse4.mm.bing.net/th?q=men+formal+shoes" },
        { title: "Men Shoes", price: 2499, img: "https://tse1.mm.bing.net/th?q=men+leather+shoes" },
        { title: "Men Sandal", price: 899, img: "https://tse3.mm.bing.net/th?q=men+sandals" },
        { title: "Men Sandal", price: 1099, img: "https://tse4.mm.bing.net/th?q=men+comfort+sandals" },

        { title: "Men Polo T-Shirt", price: 649, img: "https://tse4.mm.bing.net/th?q=men+polo+tshirt" },
        { title: "Men Polo T-Shirt", price: 749, img: "https://tse1.mm.bing.net/th?q=branded+polo+tshirt+men" },
        { title: "Men Printed Shirt", price: 999, img: "https://tse3.mm.bing.net/th?q=printed+shirt+men" },
        { title: "Men Printed Shirt", price: 1099, img: "https://tse1.mm.bing.net/th?q=designer+printed+shirt+men" },
        { title: "Men Linen Shirt", price: 1299, img: "https://tse3.mm.bing.net/th?q=linen+shirt+men" },
        { title: "Men Cotton Shirt", price: 899, img: "https://tse4.mm.bing.net/th?q=cotton+shirt+men" },
        { title: "Men Overshirt", price: 1699, img: "https://tse1.mm.bing.net/th?q=overshirt+men" },
        { title: "Men Tracksuit", price: 1499, img: "https://tse1.mm.bing.net/th?q=tracksuit+men" },
        { title: "Men Tracksuit", price: 1999, img: "https://tse1.mm.bing.net/th?q=athletic+tracksuit+men" },
        { title: "Men Gym Shorts", price: 599, img: "https://tse3.mm.bing.net/th?q=gym+shorts+men" },
        { title: "Men Tank Top", price: 449, img: "https://tse1.mm.bing.net/th?q=men+tank+top" },
        { title: "Men Tank Top", price: 499, img: "https://tse2.mm.bing.net/th?q=mens+sleeveless+gym+shirt" },
        { title: "Men Sweatshirt", price: 1299, img: "https://tse4.mm.bing.net/th?q=men+sweatshirt" },
        { title: "Men Windbreaker", price: 1999, img: "https://tse3.mm.bing.net/th?q=men+windbreaker" },
        { title: "Men Running Shoes", price: 2199, img: "https://tse1.mm.bing.net/th?q=running+shoes+men" },
        { title: "Men Sneakers", price: 2499, img: "https://tse4.mm.bing.net/th?q=sneakers+men" },
        { title: "Men Crocs", price: 799, img: "https://tse3.mm.bing.net/th?q=men+crocs" },
        { title: "Men Flip Flops", price: 399, img: "https://tse2.mm.bing.net/th?q=men+flip+flops" },
        { title: "Men Sunglasses", price: 1199, img: "https://tse3.mm.bing.net/th?q=men+sunglasses" },
        { title: "Men Cap", price: 499, img: "https://tse2.mm.bing.net/th?q=men+cap" },
        { title: "Men Shirt", price: 899, img: "https://tse4.mm.bing.net/th?q=men+shirt" },
        { title: "Men Shirt", price: 999, img: "https://tse1.mm.bing.net/th?q=formal+men+shirt" },
        { title: "Men T-Shirt", price: 549, img: "https://tse3.mm.bing.net/th?q=men+tshirt" },
        { title: "Men T-Shirt", price: 699, img: "https://tse3.mm.bing.net/th?q=men+casual+tshirt" },
        { title: "Men T-Shirt", price: 499, img: "https://tse1.mm.bing.net/th?q=men+oversize+tshirt" },
        { title: "Men Jeans", price: 1499, img: "https://tse3.mm.bing.net/th?q=men+jeans" },
        { title: "Men Jeans", price: 1599, img: "https://tse1.mm.bing.net/th?q=denim+jeans+men" },
        { title: "Men Jeans", price: 1299, img: "https://tse3.mm.bing.net/th?q=skinny+jeans+men" },
        { title: "Men Hoodie", price: 1299, img: "https://tse1.mm.bing.net/th?q=men+hoodie" },
        { title: "Men Hoodie", price: 1399, img: "https://tse1.mm.bing.net/th?q=winter+men+hoodie" },
        { title: "Men Jacket", price: 1999, img: "https://tse4.mm.bing.net/th?q=men+leather+jacket" },
        { title: "Men Jacket", price: 2499, img: "https://tse4.mm.bing.net/th?q=men+bomber+jacket" },
        { title: "Men Cargo", price: 1199, img: "https://tse3.mm.bing.net/th?q=men+cargo+pants" },
        { title: "Men Track Pants", price: 799, img: "https://tse4.mm.bing.net/th?q=men+track+pants" },
        { title: "Men Shorts", price: 599, img: "https://tse4.mm.bing.net/th?q=men+shorts" },
        { title: "Men Kurta", price: 899, img: "https://tse2.mm.bing.net/th?q=men+kurta" },
        { title: "Men Suit", price: 4999, img: "https://tse1.mm.bing.net/th?q=men+formal+suit" },
        { title: "Men Suit", price: 6999, img: "https://tse1.mm.bing.net/th?q=men+3+piece+suit" },
        { title: "Men Shoes", price: 1899, img: "https://tse4.mm.bing.net/th?q=men+formal+shoes" },
        { title: "Men Sandal", price: 899, img: "https://tse3.mm.bing.net/th?q=men+sandals" },

        { title: "Men Shirt", price: 899, img: "https://tse4.mm.bing.net/th?q=men+shirt" },
        { title: "Men Shirt", price: 999, img: "https://tse1.mm.bing.net/th?q=formal+men+shirt" },
        { title: "Men Shirt", price: 849, img: "https://tse1.mm.bing.net/th?q=casual+men+shirt" },
        { title: "Men Shirt", price: 1299, img: "https://tse2.mm.bing.net/th?q=designer+shirt+men" },

        { title: "Men T-Shirt", price: 549, img: "https://tse3.mm.bing.net/th?q=men+tshirt" },
        { title: "Men T-Shirt", price: 699, img: "https://tse3.mm.bing.net/th?q=men+casual+tshirt" },
        { title: "Men T-Shirt", price: 499, img: "https://tse1.mm.bing.net/th?q=men+oversize+tshirt" },
        { title: "Men T-Shirt", price: 599, img: "https://tse1.mm.bing.net/th?q=graphic+tshirt+men" },

        { title: "Men Jeans", price: 1499, img: "https://tse3.mm.bing.net/th?q=men+jeans" },
        { title: "Men Jeans", price: 1599, img: "https://tse1.mm.bing.net/th?q=denim+jeans+men" },
        { title: "Men Jeans", price: 1299, img: "https://tse3.mm.bing.net/th?q=skinny+jeans+men" },
        { title: "Men Jeans", price: 1399, img: "https://tse1.mm.bing.net/th?q=men+straight+jeans" },

        { title: "Men Hoodie", price: 1299, img: "https://tse1.mm.bing.net/th?q=men+hoodie" },
        { title: "Men Hoodie", price: 1399, img: "https://tse1.mm.bing.net/th?q=winter+men+hoodie" },
        { title: "Men Hoodie", price: 1599, img: "https://tse1.mm.bing.net/th?q=thick+hoodie+men" },
        { title: "Men Hoodie", price: 1499, img: "https://tse4.mm.bing.net/th?q=zipper+hoodie+men" },

        { title: "Men Jacket", price: 1999, img: "https://tse4.mm.bing.net/th?q=men+leather+jacket" },
        { title: "Men Jacket", price: 2499, img: "https://tse4.mm.bing.net/th?q=men+bomber+jacket" },
        { title: "Men Jacket", price: 2999, img: "https://tse3.mm.bing.net/th?q=men+winter+jacket" },
        { title: "Men Jacket", price: 3499, img: "https://tse3.mm.bing.net/th?q=men+sleek+jacket" },

        { title: "Men Cargo", price: 1199, img: "https://tse3.mm.bing.net/th?q=men+cargo+pants" },
        { title: "Men Cargo", price: 1399, img: "https://tse2.mm.bing.net/th?q=baggy+cargo+men" },
        { title: "Men Cargo", price: 1299, img: "https://tse4.mm.bing.net/th?q=fashion+cargo+men" },
        { title: "Men Cargo", price: 1499, img: "https://tse4.mm.bing.net/th?q=men+military+cargo" },

        { title: "Men Shorts", price: 599, img: "https://tse4.mm.bing.net/th?q=men+shorts" },
        { title: "Men Shorts", price: 699, img: "https://tse3.mm.bing.net/th?q=men+sport+shorts" },
        { title: "Men Shorts", price: 499, img: "https://tse1.mm.bing.net/th?q=cotton+shorts+men" },
        { title: "Men Shorts", price: 799, img: "https://tse4.mm.bing.net/th?q=men+running+shorts" },

        { title: "Men Kurta", price: 899, img: "https://tse2.mm.bing.net/th?q=men+kurta" },
        { title: "Men Kurta", price: 1499, img: "https://tse3.mm.bing.net/th?q=designer+kurta+men" },
        { title: "Men Kurta", price: 1299, img: "https://tse1.mm.bing.net/th?q=embroidered+kurta+men" },
        { title: "Men Kurta", price: 1999, img: "https://tse2.mm.bing.net/th?q=wedding+kurta+men" },

        { title: "Men Suit", price: 4999, img: "https://tse1.mm.bing.net/th?q=men+formal+suit" },
        { title: "Men Suit", price: 6999, img: "https://tse1.mm.bing.net/th?q=men+3+piece+suit" },
        { title: "Men Suit", price: 8999, img: "https://tse1.mm.bing.net/th?q=groom+suit+men" },
        { title: "Men Suit", price: 11999, img: "https://tse4.mm.bing.net/th?q=designer+suit+men" },

        { title: "Men Shoes", price: 1899, img: "https://tse4.mm.bing.net/th?q=men+formal+shoes" },
        { title: "Men Shoes", price: 2499, img: "https://tse1.mm.bing.net/th?q=men+leather+shoes" },
        { title: "Men Sandal", price: 899, img: "https://tse3.mm.bing.net/th?q=men+sandals" },
        { title: "Men Sandal", price: 1099, img: "https://tse4.mm.bing.net/th?q=men+comfort+sandals" },

        { title: "Men Polo T-Shirt", price: 649, img: "https://tse4.mm.bing.net/th?q=men+polo+tshirt" },
        { title: "Men Polo T-Shirt", price: 749, img: "https://tse1.mm.bing.net/th?q=branded+polo+tshirt+men" },
        { title: "Men Printed Shirt", price: 999, img: "https://tse3.mm.bing.net/th?q=printed+shirt+men" },
        { title: "Men Printed Shirt", price: 1099, img: "https://tse1.mm.bing.net/th?q=designer+printed+shirt+men" },
        { title: "Men Linen Shirt", price: 1299, img: "https://tse3.mm.bing.net/th?q=linen+shirt+men" },
        { title: "Men Cotton Shirt", price: 899, img: "https://tse4.mm.bing.net/th?q=cotton+shirt+men" },
        { title: "Men Overshirt", price: 1699, img: "https://tse1.mm.bing.net/th?q=overshirt+men" },
        { title: "Men Tracksuit", price: 1499, img: "https://tse1.mm.bing.net/th?q=tracksuit+men" },
        { title: "Men Tracksuit", price: 1999, img: "https://tse1.mm.bing.net/th?q=athletic+tracksuit+men" },
        { title: "Men Gym Shorts", price: 599, img: "https://tse3.mm.bing.net/th?q=gym+shorts+men" },
        { title: "Men Tank Top", price: 449, img: "https://tse1.mm.bing.net/th?q=men+tank+top" },
        { title: "Men Tank Top", price: 499, img: "https://tse2.mm.bing.net/th?q=mens+sleeveless+gym+shirt" },
        { title: "Men Sweatshirt", price: 1299, img: "https://tse4.mm.bing.net/th?q=men+sweatshirt" },
        { title: "Men Windbreaker", price: 1999, img: "https://tse3.mm.bing.net/th?q=men+windbreaker" },
        { title: "Men Running Shoes", price: 2199, img: "https://tse1.mm.bing.net/th?q=running+shoes+men" },
        { title: "Men Sneakers", price: 2499, img: "https://tse4.mm.bing.net/th?q=sneakers+men" },
        { title: "Men Crocs", price: 799, img: "https://tse3.mm.bing.net/th?q=men+crocs" },
        { title: "Men Flip Flops", price: 399, img: "https://tse2.mm.bing.net/th?q=men+flip+flops" },
        { title: "Men Sunglasses", price: 1199, img: "https://tse3.mm.bing.net/th?q=men+sunglasses" },
        { title: "Men Cap", price: 499, img: "https://tse2.mm.bing.net/th?q=men+cap" },



    ],

    women: [

        
        { title: "Women Saree", price: 999, img: "https://tse3.mm.bing.net/th?q=women+saree" },
        { title: "Women Saree", price: 2599, img: "https://tse2.mm.bing.net/th?q=silk+saree" },
        { title: "Women Saree", price: 3999, img: "https://tse2.mm.bing.net/th?q=designer+saree" },
        { title: "Women Saree", price: 2999, img: "https://tse4.mm.bing.net/th?q=chiffon+saree" },

        { title: "Women Kurti", price: 899, img: "https://tse3.mm.bing.net/th?q=women+kurti" },
        { title: "Women Kurti", price: 1199, img: "https://tse4.mm.bing.net/th?q=women+designer+kurti" },
        { title: "Women Kurti", price: 1599, img: "https://tse3.mm.bing.net/th?q=embroidered+kurti" },
        { title: "Women Kurti", price: 1899, img: "https://tse4.mm.bing.net/th?q=fancy+kurti" },

        { title: "Women Top", price: 499, img: "https://tse4.mm.bing.net/th?q=women+top" },
        { title: "Women Top", price: 699, img: "https://tse4.mm.bing.net/th?q=women+crop+top" },
        { title: "Women Top", price: 599, img: "https://tse2.mm.bing.net/th?q=fashion+top+women" },
        { title: "Women Top", price: 499, img: "https://tse4.mm.bing.net/th?q=cotton+top+women" },

        { title: "Women Skirt", price: 799, img: "https://tse1.mm.bing.net/th?q=women+skirt" },
        { title: "Women Skirt", price: 999, img: "https://tse1.mm.bing.net/th?q=party+skirt+women" },
        { title: "Women Jeans", price: 1399, img: "https://tse4.mm.bing.net/th?q=women+jeans" },
        { title: "Women Jeans", price: 1599, img: "https://tse3.mm.bing.net/th?q=skinny+jeans+women" },

        { title: "Women Hoodie", price: 1299, img: "https://tse3.mm.bing.net/th?q=women+hoodie" },
        { title: "Women Hoodie", price: 1599, img: "https://tse2.mm.bing.net/th?q=winter+hoodie+women" },
        { title: "Women Jacket", price: 1999, img: "https://tse1.mm.bing.net/th?q=women+jacket" },
        { title: "Women Jacket", price: 2499, img: "https://tse3.mm.bing.net/th?q=leather+jacket+women" },

        { title: "Women Suit", price: 2999, img: "https://tse1.mm.bing.net/th?q=women+suit+set" },
        { title: "Women Suit", price: 3999, img: "https://tse2.mm.bing.net/th?q=designer+suit+women" },
        { title: "Women Lehenga", price: 4999, img: "https://tse2.mm.bing.net/th?q=women+lehenga" },
        { title: "Women Lehenga", price: 6999, img: "https://tse4.mm.bing.net/th?q=wedding+lehenga" },

        { title: "Women Shoes", price: 1799, img: "https://tse4.mm.bing.net/th?q=women+heels" },
        { title: "Women Shoes", price: 2299, img: "https://tse3.mm.bing.net/th?q=women+fashion+heels" },
        { title: "Women Sandals", price: 899, img: "https://tse4.mm.bing.net/th?q=women+sandals" },
        { title: "Women Sandals", price: 999, img: "https://tse2.mm.bing.net/th?q=women+flat+sandals" },

        { title: "Women Handbag", price: 1599, img: "https://tse4.mm.bing.net/th?q=women+handbag" },
        { title: "Women Handbag", price: 2599, img: "https://tse1.mm.bing.net/th?q=designer+handbag+women" },
        { title: "Women Nightwear", price: 799, img: "https://tse2.mm.bing.net/th?q=women+nightwear" },
        { title: "Women Nightwear", price: 999, img: "https://tse3.mm.bing.net/th?q=pajama+set+women" },


        { title: "Women Western Dress", price: 1699, img: "https://tse1.mm.bing.net/th?q=women+western+dress+blue" },
        { title: "Women Western Dress", price: 1899, img: "https://tse3.mm.bing.net/th?q=women+western+dress+red" },
        { title: "Women Party Dress", price: 2299, img: "https://tse4.mm.bing.net/th?q=women+party+dress+sparkle" },
        { title: "Women Party Dress", price: 2599, img: "https://tse2.mm.bing.net/th?q=women+evening+dress+long" },

        { title: "Women Saree", price: 3499, img: "https://tse4.mm.bing.net/th?q=women+saree+fancy" },
        { title: "Women Saree", price: 3999, img: "https://tse3.mm.bing.net/th?q=women+banarasi+saree" },
        { title: "Women Silk Saree", price: 4599, img: "https://tse3.mm.bing.net/th?q=silk+saree+women+wedding" },
        { title: "Women Organza Saree", price: 2399, img: "https://tse2.mm.bing.net/th?q=organza+saree+women" },
        { title: "Women Dress", price: 1199, img: "https://tse3.mm.bing.net/th?q=women+western+dress" },
        { title: "Women Dress", price: 1499, img: "https://tse1.mm.bing.net/th?q=women+party+dress" },
        { title: "Women Saree", price: 999, img: "https://tse3.mm.bing.net/th?q=women+saree" },
        { title: "Women Saree", price: 2599, img: "https://tse2.mm.bing.net/th?q=silk+saree" },
        { title: "Women Kurti", price: 899, img: "https://tse3.mm.bing.net/th?q=women+kurti" },
        { title: "Women Kurti", price: 1199, img: "https://tse4.mm.bing.net/th?q=women+designer+kurti" },
        { title: "Women Jeans", price: 1399, img: "https://tse4.mm.bing.net/th?q=women+jeans" },
        { title: "Women Skirt", price: 799, img: "https://tse1.mm.bing.net/th?q=women+skirt" },
        { title: "Women Top", price: 499, img: "https://tse4.mm.bing.net/th?q=women+top" },
        { title: "Women Top", price: 699, img: "https://tse4.mm.bing.net/th?q=women+crop+top" },
        { title: "Women Hoodie", price: 1299, img: "https://tse3.mm.bing.net/th?q=women+hoodie" },
        { title: "Women Jacket", price: 1999, img: "https://tse1.mm.bing.net/th?q=women+jacket" },
        { title: "Women Suit", price: 2999, img: "https://tse1.mm.bing.net/th?q=women+suit+set" },
        { title: "Women Lehenga", price: 4999, img: "https://tse2.mm.bing.net/th?q=women+lehenga" },
        { title: "Women Sandals", price: 899, img: "https://tse4.mm.bing.net/th?q=women+sandals" },
        { title: "Women Shoes", price: 1799, img: "https://tse4.mm.bing.net/th?q=women+heels" },
        { title: "Women Nightwear", price: 799, img: "https://tse2.mm.bing.net/th?q=women+nightwear" },
        { title: "Women Handbag", price: 1599, img: "https://tse4.mm.bing.net/th?q=women+handbag" },
        { title: "Women Scarf", price: 399, img: "https://tse3.mm.bing.net/th?q=women+scarf" },
        { title: "Women Frock", price: 999, img: "https://tse1.mm.bing.net/th?q=women+frock" },


        { title: "Women Dress", price: 1199, img: "https://tse3.mm.bing.net/th?q=women+western+dress" },
        { title: "Women Dress", price: 1499, img: "https://tse1.mm.bing.net/th?q=women+party+dress" },
        { title: "Women Dress", price: 1999, img: "https://tse3.mm.bing.net/th?q=designer+dress+women" },
        { title: "Women Dress", price: 999, img: "https://tse1.mm.bing.net/th?q=casual+dress+women" },

        { title: "Women Saree", price: 999, img: "https://tse3.mm.bing.net/th?q=women+saree" },
        { title: "Women Saree", price: 2599, img: "https://tse2.mm.bing.net/th?q=silk+saree" },
        { title: "Women Saree", price: 3999, img: "https://tse2.mm.bing.net/th?q=designer+saree" },
        { title: "Women Saree", price: 2999, img: "https://tse4.mm.bing.net/th?q=chiffon+saree" },

        { title: "Women Kurti", price: 899, img: "https://tse3.mm.bing.net/th?q=women+kurti" },
        { title: "Women Kurti", price: 1199, img: "https://tse4.mm.bing.net/th?q=women+designer+kurti" },
        { title: "Women Kurti", price: 1599, img: "https://tse3.mm.bing.net/th?q=embroidered+kurti" },
        { title: "Women Kurti", price: 1899, img: "https://tse4.mm.bing.net/th?q=fancy+kurti" },

        { title: "Women Top", price: 499, img: "https://tse4.mm.bing.net/th?q=women+top" },
        { title: "Women Top", price: 699, img: "https://tse4.mm.bing.net/th?q=women+crop+top" },
        { title: "Women Top", price: 599, img: "https://tse2.mm.bing.net/th?q=fashion+top+women" },
        { title: "Women Top", price: 499, img: "https://tse4.mm.bing.net/th?q=cotton+top+women" },

        { title: "Women Skirt", price: 799, img: "https://tse1.mm.bing.net/th?q=women+skirt" },
        { title: "Women Skirt", price: 999, img: "https://tse1.mm.bing.net/th?q=party+skirt+women" },
        { title: "Women Jeans", price: 1399, img: "https://tse4.mm.bing.net/th?q=women+jeans" },
        { title: "Women Jeans", price: 1599, img: "https://tse3.mm.bing.net/th?q=skinny+jeans+women" },

        { title: "Women Hoodie", price: 1299, img: "https://tse3.mm.bing.net/th?q=women+hoodie" },
        { title: "Women Hoodie", price: 1599, img: "https://tse2.mm.bing.net/th?q=winter+hoodie+women" },
        { title: "Women Jacket", price: 1999, img: "https://tse1.mm.bing.net/th?q=women+jacket" },
        { title: "Women Jacket", price: 2499, img: "https://tse3.mm.bing.net/th?q=leather+jacket+women" },

        { title: "Women Suit", price: 2999, img: "https://tse1.mm.bing.net/th?q=women+suit+set" },
        { title: "Women Suit", price: 3999, img: "https://tse2.mm.bing.net/th?q=designer+suit+women" },
        { title: "Women Lehenga", price: 4999, img: "https://tse2.mm.bing.net/th?q=women+lehenga" },
        { title: "Women Lehenga", price: 6999, img: "https://tse4.mm.bing.net/th?q=wedding+lehenga" },

        { title: "Women Shoes", price: 1799, img: "https://tse4.mm.bing.net/th?q=women+heels" },
        { title: "Women Shoes", price: 2299, img: "https://tse3.mm.bing.net/th?q=women+fashion+heels" },
        { title: "Women Sandals", price: 899, img: "https://tse4.mm.bing.net/th?q=women+sandals" },
        { title: "Women Sandals", price: 999, img: "https://tse2.mm.bing.net/th?q=women+flat+sandals" },

        { title: "Women Handbag", price: 1599, img: "https://tse4.mm.bing.net/th?q=women+handbag" },
        { title: "Women Handbag", price: 2599, img: "https://tse1.mm.bing.net/th?q=designer+handbag+women" },
        { title: "Women Nightwear", price: 799, img: "https://tse2.mm.bing.net/th?q=women+nightwear" },
        { title: "Women Nightwear", price: 999, img: "https://tse3.mm.bing.net/th?q=pajama+set+women" },


        { title: "Women Western Dress", price: 1699, img: "https://tse1.mm.bing.net/th?q=women+western+dress+blue" },
        { title: "Women Western Dress", price: 1899, img: "https://tse3.mm.bing.net/th?q=women+western+dress+red" },
        { title: "Women Party Dress", price: 2299, img: "https://tse4.mm.bing.net/th?q=women+party+dress+sparkle" },
        { title: "Women Party Dress", price: 2599, img: "https://tse2.mm.bing.net/th?q=women+evening+dress+long" },

        { title: "Women Saree", price: 3499, img: "https://tse4.mm.bing.net/th?q=women+saree+fancy" },
        { title: "Women Saree", price: 3999, img: "https://tse3.mm.bing.net/th?q=women+banarasi+saree" },
        { title: "Women Silk Saree", price: 4599, img: "https://tse3.mm.bing.net/th?q=silk+saree+women+wedding" },
        { title: "Women Organza Saree", price: 2399, img: "https://tse2.mm.bing.net/th?q=organza+saree+women" },

        { title: "Women Kurti Set", price: 1799, img: "https://tse3.mm.bing.net/th?q=kurti+set+women" },
        { title: "Women Kurti Set", price: 2099, img: "https://tse1.mm.bing.net/th?q=designer+kurti+set+women" },
        { title: "Women Anarkali", price: 2899, img: "https://tse2.mm.bing.net/th?q=anarkali+kurti+women" },
        { title: "Women Anarkali", price: 3499, img: "https://tse3.mm.bing.net/th?q=anarkali+gown+women" },

        { title: "Women Top", price: 699, img: "https://tse4.mm.bing.net/th?q=women+fashion+top" },
        { title: "Women Top", price: 799, img: "https://tse4.mm.bing.net/th?q=women+crop+top+casual" },
        { title: "Women Blouse", price: 999, img: "https://tse3.mm.bing.net/th?q=stylish+blouse+women" },
        { title: "Women Blouse", price: 1299, img: "https://tse2.mm.bing.net/th?q=party+blouse+women" },

        { title: "Women Handbag", price: 2099, img: "https://tse4.mm.bing.net/th?q=women+handbag+fashion" },
        { title: "Women Shoulder Bag", price: 2599, img: "https://tse2.mm.bing.net/th?q=women+shoulder+bag" },
        { title: "Women Sneakers", price: 1999, img: "https://tse1.mm.bing.net/th?q=women+sneakers+white" },
        { title: "Women Heels", price: 2699, img: "https://tse3.mm.bing.net/th?q=women+heels+fashion" }



    ],

    kids: [

           { title: "Kids Sweater", price: 799, img: "https://tse4.mm.bing.net/th?q=kids+sweater" },
        { title: "Kids Sweater", price: 899, img: "https://tse3.mm.bing.net/th?q=winter+sweater+kids" },
        { title: "Kids Jacket", price: 999, img: "https://tse1.mm.bing.net/th?q=kids+jacket" },
        { title: "Kids Jacket", price: 1299, img: "https://tse3.mm.bing.net/th?q=winter+jacket+kids" },

        { title: "Kids Track Pants", price: 549, img: "https://tse3.mm.bing.net/th?q=kids+track+pants" },
        { title: "Kids Track Pants", price: 649, img: "https://tse4.mm.bing.net/th?q=sport+track+pants+kids" },
        { title: "Kids Sports Shoes", price: 1199, img: "https://tse1.mm.bing.net/th?q=kids+sports+shoes" },
        { title: "Kids Sports Shoes", price: 1399, img: "https://tse3.mm.bing.net/th?q=running+shoes+kids" },

        { title: "Kids Pajama", price: 499, img: "https://tse1.mm.bing.net/th?q=kids+pajama" },
        { title: "Kids Pajama", price: 599, img: "https://tse4.mm.bing.net/th?q=pajama+kids" },
        { title: "Kids Backpack", price: 899, img: "https://tse1.mm.bing.net/th?q=kids+bag" },
        { title: "Kids Backpack", price: 1099, img: "https://tse3.mm.bing.net/th?q=school+bag+kids" },

        { title: "Kids Toys", price: 499, img: "https://tse4.mm.bing.net/th?q=kids+toys" },
        { title: "Kids Toys", price: 899, img: "https://tse3.mm.bing.net/th?q=cute+toy+kids" },


        { title: "Kids Polo T-Shirt", price: 349, img: "https://tse1.mm.bing.net/th?q=kids+polo+tshirt+boys" },
        { title: "Kids Polo T-Shirt", price: 399, img: "https://tse2.mm.bing.net/th?q=kids+polo+tshirt+girls" },
        { title: "Kids Cartoon T-Shirt", price: 449, img: "https://tse2.mm.bing.net/th?q=cartoon+tshirt+kids" },
        { title: "Kids Cartoon Hoodie", price: 649, img: "https://tse1.mm.bing.net/th?q=cartoon+hoodie+kids" },

        { title: "Kids Ethnic Kurta", price: 799, img: "https://tse4.mm.bing.net/th?q=kids+kurta+set" },
        { title: "Kids Ethnic Kurta", price: 999, img: "https://tse3.mm.bing.net/th?q=kids+kurta+ethnic" },
        { title: "Kids Lehenga", price: 1499, img: "https://tse1.mm.bing.net/th?q=kids+lehenga" },
        { title: "Kids Lehenga", price: 1799, img: "https://tse2.mm.bing.net/th?q=kids+lehenga+party" },

        { title: "Kids Joggers", price: 549, img: "https://tse3.mm.bing.net/th?q=kids+joggers+pants" },
        { title: "Kids Track Suit", price: 999, img: "https://tse4.mm.bing.net/th?q=kids+tracksuit" },
        { title: "Kids Track Suit", price: 1199, img: "https://tse2.mm.bing.net/th?q=kids+sport+tracksuit" },
        { title: "Kids Sweatshirt", price: 749, img: "https://tse3.mm.bing.net/th?q=kids+sweatshirt+cute" },

        { title: "Kids Sneakers", price: 999, img: "https://tse1.mm.bing.net/th?q=kids+sneakers" },
        { title: "Kids Sneakers", price: 1199, img: "https://tse4.mm.bing.net/th?q=kids+white+sneakers" },
        { title: "Kids Sandal", price: 499, img: "https://tse1.mm.bing.net/th?q=kids+sandals+fashion" },
        { title: "Kids Sandal", price: 599, img: "https://tse1.mm.bing.net/th?q=kids+sandals+party" },
        { title: "Kids T-Shirt", price: 299, img: "https://tse4.mm.bing.net/th?q=kids+tshirt" },
        { title: "Kids Shirt", price: 399, img: "https://tse3.mm.bing.net/th?q=kids+shirt" },
        { title: "Kids Hoodie", price: 599, img: "https://tse2.mm.bing.net/th?q=kids+hoodie" },
        { title: "Kids Jeans", price: 699, img: "https://tse1.mm.bing.net/th?q=kids+jeans" },
        { title: "Kids Shorts", price: 399, img: "https://tse4.mm.bing.net/th?q=kids+shorts" },
        { title: "Kids Dress", price: 699, img: "https://tse2.mm.bing.net/th?q=kids+dress" },
        { title: "Kids Frock", price: 799, img: "https://tse4.mm.bing.net/th?q=kids+frock" },
        { title: "Kids Suit", price: 1499, img: "https://tse3.mm.bing.net/th?q=kids+suit" },
        { title: "Kids Shoes", price: 999, img: "https://tse1.mm.bing.net/th?q=kids+shoes" },
        { title: "Kids Sandals", price: 699, img: "https://tse1.mm.bing.net/th?q=kids+sandals" },
        { title: "Kids Pajama", price: 499, img: "https://tse1.mm.bing.net/th?q=kids+pajama" },
        { title: "Kids Cap", price: 199, img: "https://tse3.mm.bing.net/th?q=kids+cap" },
        { title: "Kids Kurta", price: 599, img: "https://tse1.mm.bing.net/th?q=kids+kurta" },
        { title: "Kids Nightwear", price: 499, img: "https://tse1.mm.bing.net/th?q=kids+nightwear" },
        { title: "Kids Jacket", price: 999, img: "https://tse1.mm.bing.net/th?q=kids+jacket" },
        { title: "Kids Sweater", price: 799, img: "https://tse4.mm.bing.net/th?q=kids+sweater" },
        { title: "Kids Track Pants", price: 549, img: "https://tse3.mm.bing.net/th?q=kids+track+pants" },
        { title: "Kids Sports Shoes", price: 1199, img: "https://tse1.mm.bing.net/th?q=kids+sports+shoes" },
        { title: "Kids Backpack", price: 899, img: "https://tse1.mm.bing.net/th?q=kids+bag" },
        { title: "Kids Toys", price: 499, img: "https://tse4.mm.bing.net/th?q=kids+toys" },


        { title: "Kids T-Shirt", price: 299, img: "https://tse4.mm.bing.net/th?q=kids+tshirt" },
        { title: "Kids T-Shirt", price: 349, img: "https://tse1.mm.bing.net/th?q=cute+tshirt+kids" },
        { title: "Kids T-Shirt", price: 399, img: "https://tse3.mm.bing.net/th?q=printed+tshirt+kids" },
        { title: "Kids Shirt", price: 399, img: "https://tse3.mm.bing.net/th?q=kids+shirt" },

        { title: "Kids Shirt", price: 499, img: "https://tse2.mm.bing.net/th?q=formal+shirt+kids" },
        { title: "Kids Shirt", price: 599, img: "https://tse1.mm.bing.net/th?q=cotton+shirt+kids" },
        { title: "Kids Hoodie", price: 599, img: "https://tse2.mm.bing.net/th?q=kids+hoodie" },
        { title: "Kids Hoodie", price: 699, img: "https://tse2.mm.bing.net/th?q=winter+hoodie+kids" },

        { title: "Kids Jeans", price: 699, img: "https://tse1.mm.bing.net/th?q=kids+jeans" },
        { title: "Kids Jeans", price: 849, img: "https://tse4.mm.bing.net/th?q=denim+jeans+kids" },
        { title: "Kids Shorts", price: 399, img: "https://tse4.mm.bing.net/th?q=kids+shorts" },
        { title: "Kids Shorts", price: 499, img: "https://tse1.mm.bing.net/th?q=cotton+shorts+kids" },

        { title: "Kids Dress", price: 699, img: "https://tse2.mm.bing.net/th?q=kids+dress" },
        { title: "Kids Dress", price: 899, img: "https://tse4.mm.bing.net/th?q=party+dress+kids" },
        { title: "Kids Frock", price: 799, img: "https://tse4.mm.bing.net/th?q=kids+frock" },
        { title: "Kids Frock", price: 999, img: "https://tse3.mm.bing.net/th?q=fancy+frock+kids" },

        { title: "Kids Suit", price: 1499, img: "https://tse3.mm.bing.net/th?q=kids+suit" },
        { title: "Kids Suit", price: 1999, img: "https://tse3.mm.bing.net/th?q=groom+suit+kids" },
        { title: "Kids Nightwear", price: 499, img: "https://tse1.mm.bing.net/th?q=kids+nightwear" },
        { title: "Kids Nightwear", price: 599, img: "https://tse2.mm.bing.net/th?q=pajama+set+kids" },

        { title: "Kids Shoes", price: 999, img: "https://tse1.mm.bing.net/th?q=kids+shoes" },
        { title: "Kids Shoes", price: 1299, img: "https://tse1.mm.bing.net/th?q=kids+sport+shoes" },
        { title: "Kids Sandals", price: 699, img: "https://tse1.mm.bing.net/th?q=kids+sandals" },
        { title: "Kids Sandals", price: 799, img: "https://tse3.mm.bing.net/th?q=cute+sandals+kids" },

        { title: "Kids Sweater", price: 799, img: "https://tse4.mm.bing.net/th?q=kids+sweater" },
        { title: "Kids Sweater", price: 899, img: "https://tse3.mm.bing.net/th?q=winter+sweater+kids" },
        { title: "Kids Jacket", price: 999, img: "https://tse1.mm.bing.net/th?q=kids+jacket" },
        { title: "Kids Jacket", price: 1299, img: "https://tse3.mm.bing.net/th?q=winter+jacket+kids" },

        { title: "Kids Track Pants", price: 549, img: "https://tse3.mm.bing.net/th?q=kids+track+pants" },
        { title: "Kids Track Pants", price: 649, img: "https://tse4.mm.bing.net/th?q=sport+track+pants+kids" },
        { title: "Kids Sports Shoes", price: 1199, img: "https://tse1.mm.bing.net/th?q=kids+sports+shoes" },
        { title: "Kids Sports Shoes", price: 1399, img: "https://tse3.mm.bing.net/th?q=running+shoes+kids" },

        { title: "Kids Pajama", price: 499, img: "https://tse1.mm.bing.net/th?q=kids+pajama" },
        { title: "Kids Pajama", price: 599, img: "https://tse4.mm.bing.net/th?q=pajama+kids" },
        { title: "Kids Backpack", price: 899, img: "https://tse1.mm.bing.net/th?q=kids+bag" },
        { title: "Kids Backpack", price: 1099, img: "https://tse3.mm.bing.net/th?q=school+bag+kids" },

        { title: "Kids Toys", price: 499, img: "https://tse4.mm.bing.net/th?q=kids+toys" },
        { title: "Kids Toys", price: 899, img: "https://tse3.mm.bing.net/th?q=cute+toy+kids" },


        { title: "Kids Polo T-Shirt", price: 349, img: "https://tse1.mm.bing.net/th?q=kids+polo+tshirt+boys" },
        { title: "Kids Polo T-Shirt", price: 399, img: "https://tse2.mm.bing.net/th?q=kids+polo+tshirt+girls" },
        { title: "Kids Cartoon T-Shirt", price: 449, img: "https://tse2.mm.bing.net/th?q=cartoon+tshirt+kids" },
        { title: "Kids Cartoon Hoodie", price: 649, img: "https://tse1.mm.bing.net/th?q=cartoon+hoodie+kids" },

        { title: "Kids Ethnic Kurta", price: 799, img: "https://tse4.mm.bing.net/th?q=kids+kurta+set" },
        { title: "Kids Ethnic Kurta", price: 999, img: "https://tse3.mm.bing.net/th?q=kids+kurta+ethnic" },
        { title: "Kids Lehenga", price: 1499, img: "https://tse1.mm.bing.net/th?q=kids+lehenga" },
        { title: "Kids Lehenga", price: 1799, img: "https://tse2.mm.bing.net/th?q=kids+lehenga+party" },

        { title: "Kids Joggers", price: 549, img: "https://tse3.mm.bing.net/th?q=kids+joggers+pants" },
        { title: "Kids Track Suit", price: 999, img: "https://tse4.mm.bing.net/th?q=kids+tracksuit" },
        { title: "Kids Track Suit", price: 1199, img: "https://tse2.mm.bing.net/th?q=kids+sport+tracksuit" },
        { title: "Kids Sweatshirt", price: 749, img: "https://tse3.mm.bing.net/th?q=kids+sweatshirt+cute" },

        { title: "Kids Sneakers", price: 999, img: "https://tse1.mm.bing.net/th?q=kids+sneakers" },
        { title: "Kids Sneakers", price: 1199, img: "https://tse4.mm.bing.net/th?q=kids+white+sneakers" },
        { title: "Kids Sandal", price: 499, img: "https://tse1.mm.bing.net/th?q=kids+sandals+fashion" },
        { title: "Kids Sandal", price: 599, img: "https://tse1.mm.bing.net/th?q=kids+sandals+party" },

        { title: "Kids Sweater", price: 899, img: "https://tse1.mm.bing.net/th?q=kids+winter+sweater" },
        { title: "Kids Jumpsuit", price: 1299, img: "https://tse2.mm.bing.net/th?q=kids+jumpsuit+fashion" },
        { title: "Kids Jacket", price: 1499, img: "https://tse4.mm.bing.net/th?q=kids+winter+jacket" },
        { title: "Kids Backpack", price: 1199, img: "https://tse3.mm.bing.net/th?q=kids+backpack+cartoon" }



    ],

    electronics: [

          { title: "Router", price: 1599, img: "https://tse4.mm.bing.net/th?q=wifi+router" },
        { title: "Speaker System", price: 5999, img: "https://tse4.mm.bing.net/th?q=speaker+system" },
        { title: "Monitor", price: 10999, img: "https://tse4.mm.bing.net/th?q=monitor" },
        { title: "Pendrive", price: 499, img: "https://tse4.mm.bing.net/th?q=pendrive" },
        { title: "External HDD", price: 5999, img: "https://tse4.mm.bing.net/th?q=external+hdd" },
        { title: "Drone", price: 15999, img: "https://tse1.mm.bing.net/th?q=drone" },


        { title: "Smartphone", price: 11999, img: "https://tse4.mm.bing.net/th?q=smartphone" },
        { title: "Smartphone", price: 15999, img: "https://tse1.mm.bing.net/th?q=android+smartphone" },
        { title: "Smartphone", price: 19999, img: "https://tse3.mm.bing.net/th?q=gaming+smartphone" },
        { title: "Smartphone", price: 24999, img: "https://tse1.mm.bing.net/th?q=5g+smartphone" },

        { title: "Laptop", price: 45999, img: "https://tse4.mm.bing.net/th?q=laptop" },
        { title: "Laptop", price: 65999, img: "https://tse1.mm.bing.net/th?q=thin+laptop" },
        { title: "Gaming Laptop", price: 75999, img: "https://tse3.mm.bing.net/th?q=gaming+laptop" },
        { title: "Gaming Laptop", price: 89999, img: "https://tse1.mm.bing.net/th?q=gaming+rgb+laptop" },

        { title: "Tablet", price: 15999, img: "https://tse4.mm.bing.net/th?q=tablet" },
        { title: "Tablet", price: 21999, img: "https://tse4.mm.bing.net/th?q=android+tablet" },
        { title: "Tablet", price: 28999, img: "https://tse4.mm.bing.net/th?q=ipad+tablet" },
        { title: "Camera", price: 34999, img: "https://tse3.mm.bing.net/th?q=camera" },

        { title: "Camera", price: 54999, img: "https://tse1.mm.bing.net/th?q=dslr+camera" },
        { title: "Camera", price: 69999, img: "https://tse3.mm.bing.net/th?q=mirrorless+camera" },
        { title: "Smart Watch", price: 2499, img: "https://tse4.mm.bing.net/th?q=smartwatch" },
        { title: "Smart Watch", price: 3999, img: "https://tse3.mm.bing.net/th?q=amoled+watch" },

        { title: "Earbuds", price: 1799, img: "https://tse3.mm.bing.net/th?q=earbuds" },
        { title: "Earbuds", price: 2499, img: "https://tse1.mm.bing.net/th?q=noise+cancelling+earbuds" },
        { title: "Headphones", price: 1499, img: "https://tse3.mm.bing.net/th?q=headphones" },
        { title: "Headphones", price: 2999, img: "https://tse3.mm.bing.net/th?q=gaming+headphones" },

        { title: "TV", price: 29999, img: "https://tse3.mm.bing.net/th?q=smart+tv" },
        { title: "TV", price: 39999, img: "https://tse2.mm.bing.net/th?q=4k+tv" },
        { title: "Bluetooth Speaker", price: 1299, img: "https://tse3.mm.bing.net/th?q=bluetooth+speaker" },
        { title: "Bluetooth Speaker", price: 1999, img: "https://tse2.mm.bing.net/th?q=portable+bluetooth+speaker" },

        { title: "Keyboard", price: 899, img: "https://tse1.mm.bing.net/th?q=keyboard" },
        { title: "Keyboard", price: 1499, img: "https://tse4.mm.bing.net/th?q=mechanical+keyboard" },
        { title: "Mouse", price: 599, img: "https://tse4.mm.bing.net/th?q=computer+mouse" },
        { title: "Mouse", price: 999, img: "https://tse1.mm.bing.net/th?q=gaming+mouse" },

        { title: "Charger", price: 699, img: "https://tse3.mm.bing.net/th?q=mobile+charger" },
        { title: "Charger", price: 1499, img: "https://tse1.mm.bing.net/th?q=fast+charger" },
        { title: "Power Bank", price: 1199, img: "https://tse1.mm.bing.net/th?q=powerbank" },
        { title: "Power Bank", price: 1799, img: "https://tse4.mm.bing.net/th?q=fast+charging+powerbank" },

        { title: "Router", price: 1599, img: "https://tse4.mm.bing.net/th?q=wifi+router" },
        { title: "Router", price: 2599, img: "https://tse2.mm.bing.net/th?q=dual+band+router" },
        { title: "Monitor", price: 10999, img: "https://tse4.mm.bing.net/th?q=monitor" },
        { title: "Monitor", price: 18999, img: "https://tse1.mm.bing.net/th?q=gaming+monitor" },

        { title: "Pendrive", price: 499, img: "https://tse4.mm.bing.net/th?q=pendrive" },
        { title: "Pendrive", price: 899, img: "https://tse3.mm.bing.net/th?q=usb+pendrive" },
        { title: "External HDD", price: 5999, img: "https://tse4.mm.bing.net/th?q=external+hdd" },
        { title: "Drone", price: 15999, img: "https://tse1.mm.bing.net/th?q=drone" },


        { title: "Smartphone 5G", price: 27999, img: "https://tse1.mm.bing.net/th?q=5g+smartphone+android" },
        { title: "Smartphone Pro", price: 34999, img: "https://tse3.mm.bing.net/th?q=smartphone+pro+edition" },
        { title: "Smartphone Plus", price: 22999, img: "https://tse1.mm.bing.net/th?q=smartphone+plus+model" },
        { title: "Gaming Smartphone", price: 39999, img: "https://tse3.mm.bing.net/th?q=gaming+smartphone+rgb" },
        { title: "Smartphone", price: 11999, img: "https://tse4.mm.bing.net/th?q=smartphone" },
        { title: "Laptop", price: 45999, img: "https://tse4.mm.bing.net/th?q=laptop" },
        { title: "Gaming Laptop", price: 75999, img: "https://tse3.mm.bing.net/th?q=gaming+laptop" },
        { title: "Tablet", price: 15999, img: "https://tse4.mm.bing.net/th?q=tablet" },
        { title: "Camera", price: 34999, img: "https://tse3.mm.bing.net/th?q=camera" },
        { title: "Smart Watch", price: 2499, img: "https://tse4.mm.bing.net/th?q=smartwatch" },
        { title: "Earbuds", price: 1799, img: "https://tse3.mm.bing.net/th?q=earbuds" },
        { title: "Headphones", price: 1499, img: "https://tse3.mm.bing.net/th?q=headphones" },
        { title: "TV", price: 29999, img: "https://tse3.mm.bing.net/th?q=smart+tv" },
        { title: "Bluetooth Speaker", price: 1299, img: "https://tse3.mm.bing.net/th?q=bluetooth+speaker" },
        { title: "Keyboard", price: 899, img: "https://tse1.mm.bing.net/th?q=keyboard" },
        { title: "Mouse", price: 599, img: "https://tse4.mm.bing.net/th?q=computer+mouse" },
        { title: "Charger", price: 699, img: "https://tse3.mm.bing.net/th?q=mobile+charger" },
        { title: "Power Bank", price: 1199, img: "https://tse1.mm.bing.net/th?q=powerbank" },
        { title: "Router", price: 1599, img: "https://tse4.mm.bing.net/th?q=wifi+router" },
        { title: "Speaker System", price: 5999, img: "https://tse4.mm.bing.net/th?q=speaker+system" },
        { title: "Monitor", price: 10999, img: "https://tse4.mm.bing.net/th?q=monitor" },
        { title: "Pendrive", price: 499, img: "https://tse4.mm.bing.net/th?q=pendrive" },
        { title: "External HDD", price: 5999, img: "https://tse4.mm.bing.net/th?q=external+hdd" },
        { title: "Drone", price: 15999, img: "https://tse1.mm.bing.net/th?q=drone" },


        { title: "Smartphone", price: 11999, img: "https://tse4.mm.bing.net/th?q=smartphone" },
        { title: "Smartphone", price: 15999, img: "https://tse1.mm.bing.net/th?q=android+smartphone" },
        { title: "Smartphone", price: 19999, img: "https://tse3.mm.bing.net/th?q=gaming+smartphone" },
        { title: "Smartphone", price: 24999, img: "https://tse1.mm.bing.net/th?q=5g+smartphone" },

        { title: "Laptop", price: 45999, img: "https://tse4.mm.bing.net/th?q=laptop" },
        { title: "Laptop", price: 65999, img: "https://tse1.mm.bing.net/th?q=thin+laptop" },
        { title: "Gaming Laptop", price: 75999, img: "https://tse3.mm.bing.net/th?q=gaming+laptop" },
        { title: "Gaming Laptop", price: 89999, img: "https://tse1.mm.bing.net/th?q=gaming+rgb+laptop" },

        { title: "Tablet", price: 15999, img: "https://tse4.mm.bing.net/th?q=tablet" },
        { title: "Tablet", price: 21999, img: "https://tse4.mm.bing.net/th?q=android+tablet" },
        { title: "Tablet", price: 28999, img: "https://tse4.mm.bing.net/th?q=ipad+tablet" },
        { title: "Camera", price: 34999, img: "https://tse3.mm.bing.net/th?q=camera" },

        { title: "Camera", price: 54999, img: "https://tse1.mm.bing.net/th?q=dslr+camera" },
        { title: "Camera", price: 69999, img: "https://tse3.mm.bing.net/th?q=mirrorless+camera" },
        { title: "Smart Watch", price: 2499, img: "https://tse4.mm.bing.net/th?q=smartwatch" },
        { title: "Smart Watch", price: 3999, img: "https://tse3.mm.bing.net/th?q=amoled+watch" },

        { title: "Earbuds", price: 1799, img: "https://tse3.mm.bing.net/th?q=earbuds" },
        { title: "Earbuds", price: 2499, img: "https://tse1.mm.bing.net/th?q=noise+cancelling+earbuds" },
        { title: "Headphones", price: 1499, img: "https://tse3.mm.bing.net/th?q=headphones" },
        { title: "Headphones", price: 2999, img: "https://tse3.mm.bing.net/th?q=gaming+headphones" },

        { title: "TV", price: 29999, img: "https://tse3.mm.bing.net/th?q=smart+tv" },
        { title: "TV", price: 39999, img: "https://tse2.mm.bing.net/th?q=4k+tv" },
        { title: "Bluetooth Speaker", price: 1299, img: "https://tse3.mm.bing.net/th?q=bluetooth+speaker" },
        { title: "Bluetooth Speaker", price: 1999, img: "https://tse2.mm.bing.net/th?q=portable+bluetooth+speaker" },

        { title: "Keyboard", price: 899, img: "https://tse1.mm.bing.net/th?q=keyboard" },
        { title: "Keyboard", price: 1499, img: "https://tse4.mm.bing.net/th?q=mechanical+keyboard" },
        { title: "Mouse", price: 599, img: "https://tse4.mm.bing.net/th?q=computer+mouse" },
        { title: "Mouse", price: 999, img: "https://tse1.mm.bing.net/th?q=gaming+mouse" },

        { title: "Charger", price: 699, img: "https://tse3.mm.bing.net/th?q=mobile+charger" },
        { title: "Charger", price: 1499, img: "https://tse1.mm.bing.net/th?q=fast+charger" },
        { title: "Power Bank", price: 1199, img: "https://tse1.mm.bing.net/th?q=powerbank" },
        { title: "Power Bank", price: 1799, img: "https://tse4.mm.bing.net/th?q=fast+charging+powerbank" },

        { title: "Router", price: 1599, img: "https://tse4.mm.bing.net/th?q=wifi+router" },
        { title: "Router", price: 2599, img: "https://tse2.mm.bing.net/th?q=dual+band+router" },
        { title: "Monitor", price: 10999, img: "https://tse4.mm.bing.net/th?q=monitor" },
        { title: "Monitor", price: 18999, img: "https://tse1.mm.bing.net/th?q=gaming+monitor" },

        { title: "Pendrive", price: 499, img: "https://tse4.mm.bing.net/th?q=pendrive" },
        { title: "Pendrive", price: 899, img: "https://tse3.mm.bing.net/th?q=usb+pendrive" },
        { title: "External HDD", price: 5999, img: "https://tse4.mm.bing.net/th?q=external+hdd" },
        { title: "Drone", price: 15999, img: "https://tse1.mm.bing.net/th?q=drone" },


        { title: "Smartphone 5G", price: 27999, img: "https://tse1.mm.bing.net/th?q=5g+smartphone+android" },
        { title: "Smartphone Pro", price: 34999, img: "https://tse3.mm.bing.net/th?q=smartphone+pro+edition" },
        { title: "Smartphone Plus", price: 22999, img: "https://tse1.mm.bing.net/th?q=smartphone+plus+model" },
        { title: "Gaming Smartphone", price: 39999, img: "https://tse3.mm.bing.net/th?q=gaming+smartphone+rgb" },

        { title: "Laptop Slim", price: 52999, img: "https://tse2.mm.bing.net/th?q=slim+laptop+windows" },
        { title: "Laptop Ultra", price: 74999, img: "https://tse1.mm.bing.net/th?q=ultrabook+laptop" },
        { title: "Laptop Business", price: 59999, img: "https://tse3.mm.bing.net/th?q=business+laptop" },
        { title: "Laptop Student", price: 36999, img: "https://tse4.mm.bing.net/th?q=student+laptop+brand" },

        { title: "Gaming Monitor", price: 21999, img: "https://tse1.mm.bing.net/th?q=gaming+monitor+144hz" },
        { title: "LED Monitor", price: 13999, img: "https://tse1.mm.bing.net/th?q=led+monitor" },
        { title: "Smart TV 4K", price: 49999, img: "https://tse3.mm.bing.net/th?q=4k+smart+tv" },
        { title: "QLED TV", price: 69999, img: "https://tse3.mm.bing.net/th?q=qled+tv" },

        { title: "Bluetooth Earphones", price: 1299, img: "https://tse2.mm.bing.net/th?q=bluetooth+earphones" },
        { title: "Wireless Headset", price: 2499, img: "https://tse3.mm.bing.net/th?q=wireless+headset+gaming" },
        { title: "Neckband Earphones", price: 1499, img: "https://tse1.mm.bing.net/th?q=neckband+earphones" },
        { title: "Wireless Speaker", price: 2299, img: "https://tse4.mm.bing.net/th?q=wireless+speaker+portable" },

        { title: "Portable Projector", price: 15999, img: "https://tse2.mm.bing.net/th?q=portable+projector+mini" },
        { title: "Smart Projector", price: 24999, img: "https://tse1.mm.bing.net/th?q=smart+projector+home" },
        { title: "VR Headset", price: 29999, img: "https://tse4.mm.bing.net/th?q=vr+headset+gaming" },
        { title: "Drone Pro", price: 25999, img: "https://tse3.mm.bing.net/th?q=professional+drone+camera" }


    ],


};


let currentCat = "men";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let popupItem = null;

/* data = your 240 products here */

let limit = 60; // initial load

function render() {
  const box = document.getElementById("products");
  box.innerHTML = "";

  let list = [];

  if (currentCat === "all-product") {
    list = [
      ...data.men,
      ...data.women,
      ...data.kids,
      ...data.electronics
    ].slice(0, limit);
  } else {
    list = data[currentCat];
  }

  list.forEach((p, i) => {
    box.innerHTML += `
      <div class="card" onclick="openProduct('${currentCat}', ${i})">
        <img loading="lazy" src="${p.img}">
        <h4>${p.title}</h4>
        <p>₹${p.price}</p>
      </div>
    `;
  });

  if (currentCat === "all-product" && limit < 240) {
    box.innerHTML += `<button onclick="loadMore()" class="loadBtn">Load More</button>`;
  }
}


function loadMore(){
  limit += 60;
  render();
}
