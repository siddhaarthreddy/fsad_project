import margheritaPizza from '../Images/Margherita.jpeg'
import veggieParadise from '../Images/Veggie Paradise.jpeg';
import chickenDominator from '../Images/Chicken Dominator.jpeg';
import chickenPepperoni from '../Images/Chicken Pepperoni.jpeg';
import paneerMakhani from '../Images/Paneer makhani.jpeg';
import farmhouse from '../Images/Farmhouse.jpeg';
import nonVegSupreme from '../Images/Non Veg Supreme.jpeg';
import garlicBreadsticks from '../Images/Garlic Breadsticks.jpeg';
import chickenWings from '../Images/Chicken Wings.jpeg';
import pepsi from '../Images/Pepsi.jpeg';
import chocoLavaCake from '../Images/Choco Lava Cake.jpeg';
import butterscotchMousse from '../Images/Butterscotch Mousse Cake.jpeg';
import mealFor2 from '../Images/MealFor2.jpeg';
import familyFeast from '../Images/Familyfest.jpeg';
export const restaurantMenus = {
  "Pizza Hut": {
    categories: [
      { name: "Veg Pizzas", type: "vegetarian" },
      { name: "Non-Veg Pizzas", type: "non-vegetarian" },
      { name: "Sides & Drinks", type: "both" },
      { name: "Desserts", type: "vegetarian" },
      { name: "Meal Combos", type: "both" }
    ],
    items: {
      "Veg Pizzas": [
        { id: "p1", name: "Margherita", price: "₹199", description: "Classic delight with 100% real mozzarella cheese", image: margheritaPizza  },
        { id: "p2", name: "Veggie Paradise", price: "₹299", description: "Golden corn, black olives, capsicum, red paprika" ,  image:veggieParadise},
        { id: "p3", name: "Paneer Makhani", price: "₹349", description: "Flavorful twist of spicy makhani sauce with paneer" , image: paneerMakhani },
        { id: "p4", name: "Farmhouse", price: "₹329", description: "Delightful combination of onion, capsicum, tomato & mushroom" , image: farmhouse }
      ],
      "Non-Veg Pizzas": [
        { id: "p5", name: "Chicken Dominator", price: "₹399", description: "Loaded with double pepper barbecue chicken, peri-peri chicken & chicken tikka" ,image: chickenDominator},
        { id: "p6", name: "Chicken Pepperoni", price: "₹429", description: "Classic American favorite with spicy pepperoni", image: chickenPepperoni  },
        { id: "p7", name: "Non Veg Supreme", price: "₹459", description: "Loaded with chicken tikka, chicken sausage, pepperoni & more" , image: nonVegSupreme }
      ],
      "Sides & Drinks": [
        { id: "s1", name: "Garlic Breadsticks", price: "₹99", description: "The endearing aroma of freshly baked breadsticks", image: garlicBreadsticks },
        { id: "s2", name: "Chicken Wings (6 pcs)", price: "₹249", description: "Juicy chicken wings with hot & spicy glaze", image: chickenWings },
        { id: "s3", name: "Pepsi (500ml)", price: "₹60", description: "Refreshing carbonated drink", image: pepsi }
      ],
      "Desserts": [
        { id: "d1", name: "Choco Lava Cake", price: "₹129", description: "Chocolate lovers delight with oozing chocolate inside", image: chocoLavaCake },
        { id: "d2", name: "Butterscotch Mousse Cake", price: "₹149", description: "Creamy butterscotch flavored mousse cake", image: butterscotchMousse }
      ],
      "Meal Combos": [
        { id: "m1", name: "Meal for 2", price: "₹599", description: "2 medium pizzas + 2 garlic bread + 2 pepsi cans", originalPrice: "₹799", image: mealFor2 },
        { id: "m2", name: "Family Feast", price: "₹999", description: "2 large pizzas + 1 garlic bread + 1 chicken wings + 4 pepsi cans", originalPrice: "₹1299", image: familyFeast }
      ]
    }
  },
  "Amritsar dhaba": {
    categories: [
      { name: "Biryani Specials", type: "both" },
      { name: "Tandoori Items", type: "non-vegetarian" },
      { name: "North Indian Curries", type: "both" },
      { name: "Breads", type: "vegetarian" },
      { name: "Thali Meals", type: "both" }
    ],
    items: {
      "Biryani Specials": [
        { id: "b1", name: "Chicken Dum Biryani", price: "₹299", description: "Authentic Hyderabadi style dum cooked biryani" },
        { id: "b2", name: "Mutton Biryani", price: "₹399", description: "Fragrant basmati rice cooked with tender mutton pieces" },
        { id: "b3", name: "Veg Biryani", price: "₹199", description: "Flavorful biryani with mixed vegetables" }
      ],
      "Tandoori Items": [
        { id: "t1", name: "Tandoori Chicken (Full)", price: "₹499", description: "Succulent chicken marinated in spices & cooked in tandoor" },
        { id: "t2", name: "Chicken Tikka", price: "₹349", description: "Boneless chicken pieces marinated in spices & grilled" },
        { id: "t3", name: "Paneer Tikka", price: "₹299", description: "Cubes of paneer marinated & grilled to perfection" }
      ],
      "North Indian Curries": [
        { id: "c1", name: "Butter Chicken", price: "₹349", description: "Tender chicken in rich tomato & butter gravy" },
        { id: "c2", name: "Dal Makhani", price: "₹199", description: "Black lentils slow cooked with butter & cream" },
        { id: "c3", name: "Palak Paneer", price: "₹249", description: "Soft paneer cubes in creamy spinach gravy" }
      ],
      "Breads": [
        { id: "br1", name: "Butter Naan", price: "₹49", description: "Soft leavened bread brushed with butter" },
        { id: "br2", name: "Lachha Paratha", price: "₹59", description: "Flaky layered whole wheat bread" },
        { id: "br3", name: "Garlic Naan", price: "₹69", description: "Naan flavored with garlic & coriander" }
      ],
      "Thali Meals": [
        { id: "th1", name: "Veg Thali", price: "₹249", description: "2 sabzi, dal, rice, 2 roti, papad, pickle, dessert" },
        { id: "th2", name: "Non-Veg Thali", price: "₹349", description: "1 non-veg curry, dal, rice, 2 roti, salad, dessert" }
      ]
    }
  },
  "Farm Villa Restaurant": {
    categories: [
      { name: "Pasta Specials", type: "both" },
      { name: "Chinese Starters", type: "both" },
      { name: "North Indian", type: "both" },
      { name: "Rice & Noodles", type: "both" },
      { name: "Soups", type: "both" }
    ],
    items: {
      "Pasta Specials": [
        { id: "ps1", name: "Creamy Alfredo Pasta", price: "₹249", description: "Pasta in rich creamy alfredo sauce" },
        { id: "ps2", name: "Arrabbiata Pasta", price: "₹229", description: "Spicy tomato based pasta with herbs" },
        { id: "ps3", name: "Cheese Burst Pasta", price: "₹279", description: "Pasta loaded with extra cheese" }
      ],
      "Chinese Starters": [
        { id: "cs1", name: "Chilli Chicken", price: "₹299", description: "Crispy chicken tossed in spicy sauce" },
        { id: "cs2", name: "Veg Manchurian", price: "₹199", description: "Fried veg balls in tangy sauce" },
        { id: "cs3", name: "Dragon Chicken", price: "₹349", description: "Spicy fried chicken with schezwan sauce" }
      ],
      "North Indian": [
        { id: "ni1", name: "Shahi Paneer", price: "₹279", description: "Paneer in rich mughlai gravy" },
        { id: "ni2", name: "Kadhai Chicken", price: "₹329", description: "Chicken cooked with bell peppers & spices" },
        { id: "ni3", name: "Dal Tadka", price: "₹179", description: "Tempered yellow lentils" }
      ],
      "Rice & Noodles": [
        { id: "rn1", name: "Veg Fried Rice", price: "₹199", description: "Stir fried rice with vegetables" },
        { id: "rn2", name: "Chicken Hakka Noodles", price: "₹249", description: "Stir fried noodles with chicken" },
        { id: "rn3", name: "Egg Fried Rice", price: "₹219", description: "Fried rice with scrambled eggs" }
      ],
      "Soups": [
        { id: "s1", name: "Hot & Sour Soup", price: "₹129", description: "Spicy and tangy soup" },
        { id: "s2", name: "Sweet Corn Soup", price: "₹119", description: "Creamy sweet corn soup" }
      ]
    }
  },
  "Kitchen 213": {
    categories: [
      { name: "Chinese Specials", type: "both" },
      { name: "Biryani", type: "both" },
      { name: "Starters", type: "both" },
      { name: "Rice Bowls", type: "both" },
      { name: "Combos", type: "both" }
    ],
    items: {
      "Chinese Specials": [
        { id: "ch1", name: "Schezwan Chicken", price: "₹349", description: "Spicy schezwan style chicken" },
        { id: "ch2", name: "Honey Chilli Potato", price: "₹199", description: "Crispy potatoes in sweet & spicy sauce" },
        { id: "ch3", name: "Veg Noodles", price: "₹179", description: "Stir fried noodles with vegetables" }
      ],
      "Biryani": [
        { id: "bi1", name: "Chicken 65 Biryani", price: "₹299", description: "Spicy chicken 65 flavored biryani" },
        { id: "bi2", name: "Prawn Biryani", price: "₹399", description: "Fragrant biryani with juicy prawns" },
        { id: "bi3", name: "Paneer Biryani", price: "₹249", description: "Vegetarian biryani with paneer cubes" }
      ],
      "Starters": [
        { id: "st1", name: "Crispy Corn", price: "₹169", description: "Fried corn tossed in spices" },
        { id: "st2", name: "Chicken Lollipop (6 pcs)", price: "₹299", description: "Spicy fried chicken wings" },
        { id: "st3", name: "Spring Rolls (4 pcs)", price: "₹179", description: "Crispy vegetable spring rolls" }
      ],
      "Rice Bowls": [
        { id: "rb1", name: "Chicken Rice Bowl", price: "₹249", description: "Rice topped with chicken curry" },
        { id: "rb2", name: "Veg Rice Bowl", price: "₹199", description: "Rice with mixed vegetable curry" }
      ],
      "Combos": [
        { id: "co1", name: "Chinese Combo", price: "₹499", description: "1 starter + 1 main course + 1 rice/noodles" },
        { id: "co2", name: "Biryani Combo", price: "₹399", description: "1 biryani + 1 starter + 1 drink" }
      ]
    }
  },
  "Dosa Plaza": {
    categories: [
      { name: "Dosa Specials", type: "vegetarian" },
      { name: "Uttapam", type: "vegetarian" },
      { name: "South Indian Meals", type: "vegetarian" },
      { name: "Idli & Vada", type: "vegetarian" },
      { name: "Beverages", type: "vegetarian" }
    ],
    items: {
      "Dosa Specials": [
        { id: "d1", name: "Masala Dosa", price: "₹129", description: "Crispy dosa with potato filling" },
        { id: "d2", name: "Paneer Dosa", price: "₹179", description: "Dosa stuffed with spiced paneer" },
        { id: "d3", name: "Rava Onion Dosa", price: "₹149", description: "Semolina dosa with onion topping" },
        { id: "d4", name: "Paper Roast", price: "₹199", description: "Extra thin and crispy dosa" }
      ],
      "Uttapam": [
        { id: "u1", name: "Onion Uttapam", price: "₹139", description: "Thick pancake with onion topping" },
        { id: "u2", name: "Tomato Uttapam", price: "₹139", description: "Uttapam with fresh tomatoes" },
        { id: "u3", name: "Mix Veg Uttapam", price: "₹159", description: "With onion, tomato, capsicum" }
      ],
      "South Indian Meals": [
        { id: "m1", name: "Mini Meals", price: "₹199", description: "2 dosa/idli/vada, sambar, chutney" },
        { id: "m2", name: "Full Meals", price: "₹299", description: "Rice, 3 curries, papad, dessert" }
      ],
      "Idli & Vada": [
        { id: "iv1", name: "Idli (2 pcs)", price: "₹59", description: "Steamed rice cakes" },
        { id: "iv2", name: "Vada (2 pcs)", price: "₹69", description: "Crispy lentil donuts" },
        { id: "iv3", name: "Idli Vada Combo", price: "₹119", description: "2 idli + 2 vada with chutney & sambar" }
      ],
      "Beverages": [
        { id: "b1", name: "Filter Coffee", price: "₹49", description: "Traditional South Indian coffee" },
        { id: "b2", name: "Badam Milk", price: "₹69", description: "Almond flavored milk" }
      ]
    }
  },
  "The Belgian Waffle Co.": {
    categories: [
      { name: "Sweet Waffles", type: "vegetarian" },
      { name: "Savory Waffles", type: "vegetarian" },
      { name: "Desserts", type: "vegetarian" },
      { name: "Beverages", type: "vegetarian" },
      { name: "Combos", type: "vegetarian" }
    ],
    items: {
      "Sweet Waffles": [
        { id: "sw1", name: "Classic Belgian", price: "₹179", description: "Traditional waffle with maple syrup" },
        { id: "sw2", name: "Nutella Waffle", price: "₹229", description: "Waffle topped with Nutella" },
        { id: "sw3", name: "Berry Blast", price: "₹249", description: "With mixed berries & cream" }
      ],
      "Savory Waffles": [
        { id: "sv1", name: "Cheese & Herb", price: "₹199", description: "Savory waffle with cheese & herbs" },
        { id: "sv2", name: "Mexican Waffle", price: "₹219", description: "With jalapeños & salsa" }
      ],
      "Desserts": [
        { id: "d1", name: "Chocolate Fondue", price: "₹299", description: "With fruits & marshmallows" },
        { id: "d2", name: "Red Velvet Waffle", price: "₹249", description: "Red velvet flavored waffle" }
      ],
      "Beverages": [
        { id: "b1", name: "Hot Chocolate", price: "₹149", description: "Rich chocolate drink" },
        { id: "b2", name: "Iced Tea", price: "₹99", description: "Refreshing lemon iced tea" }
      ],
      "Combos": [
        { id: "c1", name: "Waffle + Coffee", price: "₹249", description: "1 waffle + 1 hot beverage" },
        { id: "c2", name: "Dessert Combo", price: "₹399", description: "2 waffles + 2 drinks" }
      ]
    }
  },
  "Brown Burger Co.": {
    categories: [
      { name: "Signature Burgers", type: "both" },
      { name: "Chicken Burgers", type: "non-vegetarian" },
      { name: "Veg Burgers", type: "vegetarian" },
      { name: "Sides", type: "both" },
      { name: "Shakes", type: "vegetarian" }
    ],
    items: {
      "Signature Burgers": [
        { id: "sb1", name: "The Big Brown", price: "₹299", description: "Double patty with cheese & special sauce" },
        { id: "sb2", name: "Bacon Cheese", price: "₹349", description: "With crispy bacon strips" }
      ],
      "Chicken Burgers": [
        { id: "cb1", name: "Spicy Chicken", price: "₹249", description: "Spicy fried chicken patty" },
        { id: "cb2", name: "BBQ Chicken", price: "₹269", description: "Grilled chicken with BBQ sauce" }
      ],
      "Veg Burgers": [
        { id: "vb1", name: "Aloo Tikki", price: "₹179", description: "Classic potato patty burger" },
        { id: "vb2", name: "Paneer Burger", price: "₹219", description: "With grilled paneer patty" }
      ],
      "Sides": [
        { id: "s1", name: "French Fries", price: "₹99", description: "Crispy golden fries" },
        { id: "s2", name: "Cheesy Fries", price: "₹149", description: "Fries loaded with cheese" }
      ],
      "Shakes": [
        { id: "sh1", name: "Chocolate Shake", price: "₹179", description: "Thick chocolate milkshake" },
        { id: "sh2", name: "Oreo Shake", price: "₹199", description: "Crushed Oreo milkshake" }
      ]
    }
  },
  "Dalmia Fastfood": {
    categories: [
      { name: "Pav Bhaji", type: "vegetarian" },
      { name: "Sandwiches", type: "vegetarian" },
      { name: "Frankies", type: "both" },
      { name: "Snacks", type: "vegetarian" },
      { name: "Beverages", type: "vegetarian" }
    ],
    items: {
      "Pav Bhaji": [
        { id: "pb1", name: "Special Pav Bhaji", price: "₹129", description: "Buttery pav with spicy bhaji" },
        { id: "pb2", name: "Cheese Pav Bhaji", price: "₹149", description: "With extra cheese topping" }
      ],
      "Sandwiches": [
        { id: "s1", name: "Grilled Cheese", price: "₹99", description: "Toasted sandwich with cheese" },
        { id: "s2", name: "Veg Club Sandwich", price: "₹119", description: "Triple decker sandwich" }
      ],
      "Frankies": [
        { id: "f1", name: "Veg Frankie", price: "₹79", description: "Wrap with potato filling" },
        { id: "f2", name: "Chicken Frankie", price: "₹99", description: "With spicy chicken filling" }
      ],
      "Snacks": [
        { id: "sn1", name: "Samosa (2 pcs)", price: "₹49", description: "Spicy potato stuffed pastry" },
        { id: "sn2", name: "Vada Pav", price: "₹39", description: "Mumbai's favorite street food" }
      ],
      "Beverages": [
        { id: "b1", name: "Masala Chai", price: "₹29", description: "Spiced Indian tea" },
        { id: "b2", name: "Cold Coffee", price: "₹59", description: "Iced coffee with milk" }
      ]
    }
  },
  "Baskin Robbins": {
    categories: [
      { name: "Ice Cream Scoops", type: "vegetarian" },
      { name: "Sundaes", type: "vegetarian" },
      { name: "Ice Cream Cakes", type: "vegetarian" },
      { name: "Shakes", type: "vegetarian" },
      { name: "Combos", type: "vegetarian" }
    ],
    items: {
      "Ice Cream Scoops": [
        { id: "i1", name: "Chocolate", price: "₹129", description: "Rich chocolate flavor" },
        { id: "i2", name: "Strawberry", price: "₹129", description: "Fresh strawberry flavor" },
        { id: "i3", name: "Pralines & Cream", price: "₹149", description: "Caramel with pecan pieces" }
      ],
      "Sundaes": [
        { id: "s1", name: "Hot Chocolate Fudge", price: "₹199", description: "With chocolate sauce & nuts" },
        { id: "s2", name: "Strawberry Blast", price: "₹189", description: "With fresh strawberries" }
      ],
      "Ice Cream Cakes": [
        { id: "c1", name: "Chocolate Fantasy", price: "₹799", description: "Half pound chocolate cake" },
        { id: "c2", name: "Oreo Dream", price: "₹899", description: "With Oreo cookie pieces" }
      ],
      "Shakes": [
        { id: "sh1", name: "Mango Shake", price: "₹179", description: "Fresh mango milkshake" },
        { id: "sh2", name: "Cookies & Cream", price: "₹199", description: "Oreo cookie milkshake" }
      ],
      "Combos": [
        { id: "co1", name: "Double Scoop Combo", price: "₹249", description: "2 scoops + 1 topping" },
        { id: "co2", name: "Sundae Combo", price: "₹299", description: "1 sundae + 1 drink" }
      ]
    }
  },
  "Cafe Coffee Day": {
    categories: [
      { name: "Hot Coffee", type: "vegetarian" },
      { name: "Cold Coffee", type: "vegetarian" },
      { name: "Tea", type: "vegetarian" },
      { name: "Snacks", type: "vegetarian" },
      { name: "Combos", type: "vegetarian" }
    ],
    items: {
      "Hot Coffee": [
        { id: "hc1", name: "Cappuccino", price: "₹129", description: "Espresso with steamed milk foam" },
        { id: "hc2", name: "Cafe Latte", price: "₹139", description: "Espresso with lots of steamed milk" }
      ],
      "Cold Coffee": [
        { id: "cc1", name: "Iced Americano", price: "₹119", description: "Chilled espresso with water" },
        { id: "cc2", name: "Cold Brew", price: "₹149", description: "Slow steeped coffee" }
      ],
      "Tea": [
        { id: "t1", name: "Masala Chai", price: "₹79", description: "Spiced Indian tea" },
        { id: "t2", name: "Green Tea", price: "₹89", description: "Healthy green tea" }
      ],
      "Snacks": [
        { id: "s1", name: "Chocolate Brownie", price: "₹99", description: "Warm chocolate brownie" },
        { id: "s2", name: "Garlic Bread", price: "₹109", description: "Toasted garlic bread" }
      ],
      "Combos": [
        { id: "co1", name: "Coffee + Snack", price: "₹199", description: "1 coffee + 1 snack" },
        { id: "co2", name: "Breakfast Combo", price: "₹249", description: "Coffee + sandwich" }
      ]
    }
  },
  "Apna Fal": {
    categories: [
      { name: "Fresh Juices", type: "vegetarian" },
      { name: "Smoothies", type: "vegetarian" },
      { name: "Salads", type: "vegetarian" },
      { name: "Healthy Bowls", type: "vegetarian" },
      { name: "Detox Drinks", type: "vegetarian" }
    ],
    items: {
      "Fresh Juices": [
        { id: "j1", name: "Orange Juice", price: "₹99", description: "Freshly squeezed orange juice" },
        { id: "j2", name: "Watermelon Juice", price: "₹89", description: "Refreshing watermelon juice" }
      ],
      "Smoothies": [
        { id: "s1", name: "Berry Blast", price: "₹149", description: "Mixed berry smoothie" },
        { id: "s2", name: "Mango Banana", price: "₹129", description: "Tropical fruit smoothie" }
      ],
      "Salads": [
        { id: "sa1", name: "Greek Salad", price: "₹199", description: "With feta cheese & olives" },
        { id: "sa2", name: "Fruit Salad", price: "₹179", description: "Seasonal fresh fruits" }
      ],
      "Healthy Bowls": [
        { id: "h1", name: "Acai Bowl", price: "₹249", description: "With granola & berries" },
        { id: "h2", name: "Oats Bowl", price: "₹169", description: "Healthy oats with fruits" }
      ],
      "Detox Drinks": [
        { id: "d1", name: "Green Detox", price: "₹129", description: "Kale, spinach & apple" },
        { id: "d2", name: "Liver Cleanse", price: "₹139", description: "Beetroot & carrot juice" }
      ]
    }
  },
  "N K Omlette": {
    categories: [
      { name: "Omelettes", type: "vegetarian" },
      { name: "Egg Dishes", type: "vegetarian" },
      { name: "Sandwiches", type: "vegetarian" },
      { name: "Breads", type: "vegetarian" },
      { name: "Beverages", type: "vegetarian" }
    ],
    items: {
      "Omelettes": [
        { id: "o1", name: "Masala Omelette", price: "₹79", description: "Spiced Indian style omelette" },
        { id: "o2", name: "Cheese Omelette", price: "₹99", description: "With melted cheese" }
      ],
      "Egg Dishes": [
        { id: "e1", name: "Egg Bhurji", price: "₹109", description: "Spicy scrambled eggs" },
        { id: "e2", name: "Boiled Eggs (2 pcs)", price: "₹59", description: "Soft or hard boiled" }
      ],
      "Sandwiches": [
        { id: "s1", name: "Egg Sandwich", price: "₹89", description: "With boiled egg slices" },
        { id: "s2", name: "Omlette Sandwich", price: "₹99", description: "Whole omelette in bread" }
      ],
      "Breads": [
        { id: "b1", name: "Butter Toast", price: "₹49", description: "Toasted bread with butter" },
        { id: "b2", name: "Garlic Bread", price: "₹69", description: "Toasted garlic flavored bread" }
      ],
      "Beverages": [
        { id: "be1", name: "Tea", price: "₹29", description: "Regular milk tea" },
        { id: "be2", name: "Coffee", price: "₹39", description: "Hot milk coffee" }
      ]
    }
  },
  "Saawariya Pavbhaji": {
    categories: [
      { name: "Pav Bhaji Varieties", type: "vegetarian" },
      { name: "Mumbai Street Food", type: "vegetarian" },
      { name: "Frankies", type: "vegetarian" },
      { name: "Snacks", type: "vegetarian" },
      { name: "Thali Meals", type: "vegetarian" }
    ],
    items: {
      "Pav Bhaji Varieties": [
        { id: "p1", name: "Special Pav Bhaji", price: "₹129", description: "With extra butter" },
        { id: "p2", name: "Cheese Pav Bhaji", price: "₹149", description: "Loaded with cheese" },
        { id: "p3", name: "Jain Pav Bhaji", price: "₹139", description: "Without onion & garlic" }
      ],
      "Mumbai Street Food": [
        { id: "m1", name: "Vada Pav", price: "₹39", description: "Mumbai's signature snack" },
        { id: "m2", name: "Misal Pav", price: "₹89", description: "Spicy curry with bread" }
      ],
      "Frankies": [
        { id: "f1", name: "Veg Frankie", price: "₹79", description: "Wrap with potato filling" },
        { id: "f2", name: "Paneer Frankie", price: "₹99", description: "With spicy paneer" }
      ],
      "Snacks": [
        { id: "s1", name: "Samosa (2 pcs)", price: "₹49", description: "Spicy potato stuffed" },
        { id: "s2", name: "Bread Pakora", price: "₹59", description: "Fried bread snack" }
      ],
      "Thali Meals": [
        { id: "t1", name: "Pav Bhaji Thali", price: "₹199", description: "Pav bhaji + salad + drink" },
        { id: "t2", name: "Street Food Thali", price: "₹249", description: "Vada pav + misal + frankie" }
      ]
    }
  },
  "Burger Station": {
    categories: [
      { name: "Classic Burgers", type: "both" },
      { name: "Premium Burgers", type: "both" },
      { name: "Chicken Burgers", type: "non-vegetarian" },
      { name: "Sides", type: "both" },
      { name: "Beverages", type: "vegetarian" }
    ],
    items: {
      "Classic Burgers": [
        { id: "c1", name: "Veg Burger", price: "₹79", description: "With veg patty & veggies" },
        { id: "c2", name: "Chicken Burger", price: "₹99", description: "With chicken patty" }
      ],
      "Premium Burgers": [
        { id: "p1", name: "Double Cheese", price: "₹149", description: "With double cheese slices" },
        { id: "p2", name: "Bacon Burger", price: "₹179", description: "With crispy bacon" }
      ],
      "Chicken Burgers": [
        { id: "ch1", name: "Spicy Chicken", price: "₹129", description: "With spicy chicken patty" },
        { id: "ch2", name: "Grilled Chicken", price: "₹139", description: "Healthy grilled option" }
      ],
      "Sides": [
        { id: "s1", name: "French Fries", price: "₹69", description: "Classic potato fries" },
        { id: "s2", name: "Onion Rings", price: "₹89", description: "Crispy fried onion rings" }
      ],
      "Beverages": [
        { id: "b1", name: "Cold Drink", price: "₹49", description: "Pepsi/Mirinda" },
        { id: "b2", name: "Iced Tea", price: "₹59", description: "Lemon flavored iced tea" }
      ]
    }
  }
};