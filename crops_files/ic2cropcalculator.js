/*
versions
1.0 - начальный релиз
1.1 - исправлена дата, добавлены тиры
1.2 - удалён лишний сбивающий текст
1.3 - добавлен фильтр "Макс. тир для родителей"
1.4 - в список выбора растения (в ячейке "хотим получить") добавлена информация о тире (tier)
1.5 - добавлена поддержка Opera 38 и Internet Explorer 11
*/

var C_DATA = [
{"id":0,"name":"weed","rus":"","tier":0,"stats":{"che":0,"foo":0,"def":1,"col":0,"wee":5},"attributes":"Weed Bad","mod":""},
{"id":1,"name":"wheat","rus":"","tier":1,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":2},"attributes":"Yellow Food Wheat","mod":""},
{"id":2,"name":"pumpkin","rus":"","tier":1,"stats":{"che":0,"foo":1,"def":0,"col":3,"wee":1},"attributes":"Orange Decoration Stem","mod":""},
{"id":3,"name":"melon","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":2,"wee":0},"attributes":"Green Food Stem","mod":""},
{"id":4,"name":"dandelion","rus":"","tier":2,"stats":{"che":1,"foo":1,"def":0,"col":5,"wee":1},"attributes":"Yellow Flower","mod":""},
{"id":5,"name":"rose","rus":"","tier":2,"stats":{"che":1,"foo":1,"def":0,"col":5,"wee":1},"attributes":"Red Flower Rose","mod":""},
{"id":6,"name":"blackthorn","rus":"","tier":2,"stats":{"che":1,"foo":1,"def":0,"col":5,"wee":1},"attributes":"Black Flower Rose","mod":""},
{"id":7,"name":"tulip","rus":"","tier":2,"stats":{"che":1,"foo":1,"def":0,"col":5,"wee":1},"attributes":"Purple Flower Tulip","mod":""},
{"id":8,"name":"cyazint","rus":"","tier":2,"stats":{"che":1,"foo":1,"def":0,"col":5,"wee":1},"attributes":"Blue Flower","mod":""},
{"id":9,"name":"venomilia","rus":"","tier":3,"stats":{"che":3,"foo":1,"def":3,"col":3,"wee":3},"attributes":"Purple Flower Tulip Poison","mod":""},
{"id":10,"name":"reed","rus":"","tier":2,"stats":{"che":0,"foo":0,"def":1,"col":0,"wee":2},"attributes":"Reed","mod":""},
{"id":11,"name":"stickreed","rus":"","tier":4,"stats":{"che":2,"foo":0,"def":1,"col":0,"wee":1},"attributes":"Reed Resin","mod":""},
{"id":12,"name":"cocoa","rus":"","tier":3,"stats":{"che":1,"foo":3,"def":0,"col":4,"wee":0},"attributes":"Brown Food Stem","mod":""},
{"id":13,"name":"ferru","rus":"","tier":6,"stats":{"che":2,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Gray Leaves Metal","mod":""},
{"id":14,"name":"aurelia","rus":"","tier":8,"stats":{"che":2,"foo":0,"def":0,"col":2,"wee":0},"attributes":"Gold Leaves Metal","mod":""},
{"id":15,"name":"redwheat","rus":"","tier":6,"stats":{"che":3,"foo":0,"def":0,"col":2,"wee":0},"attributes":"Red Redstone Wheat","mod":""},
{"id":16,"name":"netherWart","rus":"","tier":5,"stats":{"che":4,"foo":2,"def":0,"col":2,"wee":1},"attributes":"Red Nether Ingredient Soulsand","mod":""},
{"id":17,"name":"terraWart","rus":"","tier":5,"stats":{"che":2,"foo":4,"def":0,"col":3,"wee":0},"attributes":"Blue Aether Consumable Snow","mod":""},
{"id":18,"name":"coffee","rus":"","tier":7,"stats":{"che":1,"foo":4,"def":1,"col":2,"wee":0},"attributes":"Leaves Ingredient Beans","mod":""},
{"id":19,"name":"hops","rus":"","tier":5,"stats":{"che":2,"foo":2,"def":0,"col":1,"wee":1},"attributes":"Green Ingredient Wheat","mod":""},
{"id":20,"name":"carrots","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":2},"attributes":"Orange Food Carrots","mod":""},
{"id":21,"name":"potato","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":2},"attributes":"Yellow Food Potato","mod":""},
{"id":22,"name":"redMushroom","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":4},"attributes":"Red Food Mushroom","mod":""},
{"id":23,"name":"brownMushroom","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":4},"attributes":"Brown Food Mushroom","mod":""},
{"id":24,"name":"eatingplant","rus":"","tier":6,"stats":{"che":1,"foo":1,"def":3,"col":1,"wee":4},"attributes":"Bad Food","mod":""},
{"id":25,"name":"cyprium","rus":"","tier":6,"stats":{"che":2,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Orange Leaves Metal","mod":""},
{"id":26,"name":"stagnium","rus":"","tier":6,"stats":{"che":2,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Shiny Leaves Metal","mod":""},
{"id":27,"name":"plumbiscus","rus":"","tier":6,"stats":{"che":2,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Dense Leaves Metal","mod":""},
{"id":28,"name":"shining","rus":"","tier":8,"stats":{"che":2,"foo":0,"def":0,"col":2,"wee":0},"attributes":"Silver Leaves Metal","mod":""},
{"id":29,"name":"Knightly Oreberry","rus":"","tier":8,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Knightly Metal","mod":""},
{"id":30,"name":"Moss","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Green Climbable","mod":""},
{"id":31,"name":"Space Plant","rus":"","tier":13,"stats":{"che":8,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Alien Space Radiation Transform","mod":""},
{"id":32,"name":"Magical Nightshade","rus":"","tier":13,"stats":{"che":0,"foo":0,"def":0,"col":12,"wee":0},"attributes":"Berry Primordial Magic Unique","mod":""},
{"id":33,"name":"Red Stonelilly","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Red Stone Fire","mod":""},
{"id":34,"name":"Black Stonelilly","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Black Stone Dark","mod":""},
{"id":35,"name":"Gray Stonelilly","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Gray Stone Metal","mod":""},
{"id":36,"name":"White Stonelilly","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"White Stone Shiny","mod":""},
{"id":37,"name":"Yellow Stonelilly","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Yellow Stone Alien","mod":""},
{"id":38,"name":"Nether Stonelilly","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Nether Stone Evil","mod":""},
{"id":39,"name":"Garnydinia","rus":"","tier":7,"stats":{"che":4,"foo":0,"def":2,"col":4,"wee":0},"attributes":"Shiny Crystal Red Yellow Metal","mod":""},
{"id":40,"name":"Blightberry","rus":"","tier":4,"stats":{"che":1,"foo":3,"def":4,"col":4,"wee":0},"attributes":"Berry Toxic Bad Green Nether Addictive","mod":""},
{"id":41,"name":"Duskberry","rus":"","tier":4,"stats":{"che":1,"foo":3,"def":4,"col":4,"wee":0},"attributes":"Berry Toxic Bad Gray Nether Addictive","mod":""},
{"id":42,"name":"Skyberry","rus":"","tier":4,"stats":{"che":1,"foo":3,"def":4,"col":4,"wee":0},"attributes":"Berry Toxic Bad Blue Nether Addictive","mod":""},
{"id":43,"name":"Stingberry","rus":"","tier":4,"stats":{"che":1,"foo":3,"def":4,"col":4,"wee":0},"attributes":"Berry Toxic Bad Green Nether Addictive","mod":""},
{"id":44,"name":"Thornvines","rus":"","tier":3,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Nether Climbable Bad","mod":""},
{"id":45,"name":"Blue Glowshroom","rus":"","tier":3,"stats":{"che":1,"foo":3,"def":0,"col":4,"wee":0},"attributes":"Food Mushroom Ingredient Nether","mod":""},
{"id":46,"name":"Green Glowshroom","rus":"","tier":3,"stats":{"che":1,"foo":3,"def":0,"col":4,"wee":0},"attributes":"Food Mushroom Ingredient Nether","mod":""},
{"id":47,"name":"Purple Glowshroom","rus":"","tier":3,"stats":{"che":1,"foo":3,"def":0,"col":4,"wee":0},"attributes":"Food Mushroom Ingredient Nether","mod":""},
{"id":48,"name":"Saguaro Cactus","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Green Food Cactus","mod":""},
{"id":49,"name":"Glowshroom","rus":"","tier":3,"stats":{"che":1,"foo":3,"def":0,"col":4,"wee":0},"attributes":"Food Mushroom Ingredient Nether","mod":""},
{"id":50,"name":"Cotton","rus":"","tier":3,"stats":{"che":4,"foo":4,"def":0,"col":0,"wee":2},"attributes":"White Cotton","mod":""},
{"id":51,"name":"Iron Oreberry","rus":"","tier":5,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Gray Metal","mod":""},
{"id":52,"name":"Gold Oreberry","rus":"","tier":5,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Gold Metal","mod":""},
{"id":53,"name":"Copper Oreberry","rus":"","tier":5,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Copper Metal Shiny","mod":""},
{"id":54,"name":"Tin Oreberry","rus":"","tier":4,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Tin Metal Shiny","mod":""},
{"id":55,"name":"Aluminium Oreberry","rus":"","tier":5,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Aluminium Metal Aluminum","mod":""},
{"id":56,"name":"Essence Berry","rus":"","tier":5,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Essence Undead","mod":""},
{"id":57,"name":"Ardite Berry","rus":"","tier":7,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Ardite Metal Orange","mod":""},
{"id":58,"name":"Cobalt Berry","rus":"","tier":7,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Cobalt Metal Blue","mod":""},
{"id":59,"name":"Berry","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":4,"wee":0},"attributes":"Berry Food Red Ingredient","mod":""},
{"id":60,"name":"Flowering Vines","rus":"","tier":3,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Green Tendrilly Flower","mod":""},
{"id":61,"name":"Ivy","rus":"","tier":2,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Green Tendrilly Flower Bad Poison","mod":""},
{"id":62,"name":"Eyebulb","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Nether Evil Bad","mod":""},
{"id":63,"name":"Glowing Earth Coral","rus":"","tier":5,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Water Light Shiny","mod":""},
{"id":64,"name":"Glowflower","rus":"","tier":3,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Nether Light Shiny","mod":""},
{"id":65,"name":"Turnip","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":2},"attributes":"Food Purple Carrots","mod":""},
{"id":66,"name":"Wild Carrots","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":2},"attributes":"Food White Carrots","mod":""},
{"id":67,"name":"Primordial Berry","rus":"","tier":16,"stats":{"che":0,"foo":0,"def":0,"col":12,"wee":0},"attributes":"Berry Primordial Magic Unique","mod":""},
{"id":68,"name":"Magic Metal Berry","rus":"","tier":7,"stats":{"che":3,"foo":0,"def":4,"col":1,"wee":0},"attributes":"OreBerry Magic Metal Thaumium Void","mod":""},
{"id":69,"name":"Shimmerleaf","rus":"","tier":5,"stats":{"che":2,"foo":0,"def":0,"col":2,"wee":0},"attributes":"Magic Silver Toxic","mod":""},
{"id":70,"name":"Cinderpearl","rus":"","tier":5,"stats":{"che":2,"foo":0,"def":0,"col":2,"wee":0},"attributes":"Magic Blaze Nether","mod":""},
{"id":71,"name":"Glint Weed","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Orange Flower Magic","mod":""},
{"id":72,"name":"Spanish Moss","rus":"","tier":7,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Green Climbable Magic","mod":""},
{"id":73,"name":"Belladonna","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Purple Flower Toxic Ingredient","mod":""},
{"id":74,"name":"Mandragora","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Flower Magic Bad Toxic Ingredient","mod":""},
{"id":75,"name":"Snowbell","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"White Flower Ice Toxic Ingredient","mod":""},
{"id":76,"name":"Wolf's Bane","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Flower Toxic Purple Ingredient","mod":""},
{"id":77,"name":"Artichoke","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Flower Water Blue Ingredient","mod":""},
{"id":78,"name":"Ember Moss","rus":"","tier":7,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Fire Ingredient Bad Climbable","mod":""},
{"id":79,"name":"Garlic","rus":"","tier":3,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Food Ingredient Healing","mod":""},
{"id":80,"name":"Barley","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":2},"attributes":"Green Food Wheat","mod":""},
{"id":81,"name":"Vines","rus":"","tier":2,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Green Tendrilly","mod":""},
{"id":82,"name":"Grass","rus":"","tier":0,"stats":{"che":0,"foo":0,"def":0,"col":3,"wee":4},"attributes":"Green Bad","mod":""},
{"id":83,"name":"Cactus","rus":"","tier":3,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Green Cactus","mod":""},
{"id":84,"name":"Waterlilly","rus":"","tier":2,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Blue Water Green","mod":""},
{"id":85,"name":"Papyrus","rus":"","tier":5,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"White Paper","mod":""},
{"id":86,"name":"Goldfish Plant","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Nether Fish Food Bad Water","mod":""},
{"id":87,"name":"Sugar Beet","rus":"","tier":4,"stats":{"che":0,"foo":4,"def":0,"col":0,"wee":2},"attributes":"Food White Ingredient","mod":""},
{"id":88,"name":"Huckleberry","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":4,"wee":0},"attributes":"Berry Food Purple Leaves","mod":""},
{"id":89,"name":"Strawberry","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":4,"wee":0},"attributes":"Berry Food Red","mod":""},
{"id":90,"name":"Maloberry","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":4,"wee":0},"attributes":"Berry Food Yellow","mod":""},
{"id":91,"name":"Blackberry","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":4,"wee":0},"attributes":"Berry Food Black","mod":""},
{"id":92,"name":"Blueberry","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":4,"wee":0},"attributes":"Berry Food Blue","mod":""},
{"id":93,"name":"Raspberry","rus":"","tier":2,"stats":{"che":0,"foo":4,"def":0,"col":4,"wee":0},"attributes":"Berry Food Red","mod":""},
{"id":94,"name":"Oak Bonsai","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Tree Bonsai Leavy Food","mod":""},
{"id":95,"name":"Spruce Bonsai","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Tree Bonsai Leavy","mod":""},
{"id":96,"name":"Birch Bonsai","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Tree Bonsai Leavy","mod":""},
{"id":97,"name":"Jungle Bonsai","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Tree Bonsai Leavy","mod":""},
{"id":98,"name":"Acacia Bonsai","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Tree Bonsai Leavy","mod":""},
{"id":99,"name":"Dark Oak Bonsai","rus":"","tier":1,"stats":{"che":0,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Tree Bonsai Leavy Dark","mod":""},
{"id":100,"name":"Hemp","rus":"","tier":2,"stats":{"che":0,"foo":0,"def":0,"col":4,"wee":0},"attributes":"Green Soil Orange","mod":""},
{"id":124,"name":"Indigo","rus":"","tier":2,"stats":{"che":1,"foo":1,"def":0,"col":4,"wee":0},"attributes":"Flower Blue Ingredient","mod":""},
{"id":125,"name":"Flax","rus":"","tier":2,"stats":{"che":1,"foo":1,"def":2,"col":0,"wee":1},"attributes":"Silk Tendrilly Addictive","mod":""},
{"id":126,"name":"Oilberries","rus":"","tier":9,"stats":{"che":6,"foo":1,"def":2,"col":1,"wee":12},"attributes":"Fire Dark Reed Rotten Coal Oil","mod":""},
{"id":127,"name":"Bobsyeruncleranks","rus":"","tier":11,"stats":{"che":4,"foo":0,"def":8,"col":2,"wee":9},"attributes":"Shiny Tendrilly Emerald Berylium Crystal","mod":""},
{"id":128,"name":"Diareed","rus":"","tier":12,"stats":{"che":5,"foo":0,"def":10,"col":2,"wee":10},"attributes":"Fire Shiny Reed Coal Diamond Crystal","mod":""},
{"id":129,"name":"Withereed","rus":"","tier":8,"stats":{"che":2,"foo":0,"def":4,"col":1,"wee":3},"attributes":"Fire Undead Reed Coal Rotten Wither","mod":""},
{"id":130,"name":"Blazereed","rus":"","tier":6,"stats":{"che":0,"foo":4,"def":1,"col":0,"wee":0},"attributes":"Fire Blaze Reed Sulfur","mod":""},
{"id":131,"name":"Eggplant","rus":"","tier":6,"stats":{"che":0,"foo":4,"def":1,"col":0,"wee":0},"attributes":"Chicken Egg Food Feather Flower Addictive","mod":""},
{"id":132,"name":"Corium","rus":"","tier":6,"stats":{"che":0,"foo":2,"def":3,"col":1,"wee":0},"attributes":"Cow Silk Tendrilly","mod":""},
{"id":133,"name":"Corpseplant","rus":"","tier":5,"stats":{"che":0,"foo":2,"def":1,"col":0,"wee":3},"attributes":"Toxic Undead Tendrilly Food Rotten","mod":""},
{"id":134,"name":"Creeperweed","rus":"","tier":7,"stats":{"che":3,"foo":0,"def":5,"col":1,"wee":3},"attributes":"Creeper Tendrilly Explosive Fire Sulfur Saltpeter Coal","mod":""},
{"id":135,"name":"Enderbloom","rus":"","tier":10,"stats":{"che":5,"foo":0,"def":2,"col":1,"wee":6},"attributes":"Ender Flower Shiny","mod":""},
{"id":136,"name":"Meatrose","rus":"","tier":7,"stats":{"che":0,"foo":4,"def":1,"col":3,"wee":0},"attributes":"Food Flower Cow Fish Chicken Pig","mod":""},
{"id":137,"name":"Milkwart","rus":"","tier":6,"stats":{"che":0,"foo":3,"def":0,"col":1,"wee":0},"attributes":"Food Milk Cow","mod":""},
{"id":138,"name":"Slimeplant","rus":"","tier":6,"stats":{"che":3,"foo":0,"def":0,"col":0,"wee":2},"attributes":"Slime Bouncy Sticky Bush","mod":""},
{"id":139,"name":"Spidernip","rus":"","tier":4,"stats":{"che":2,"foo":1,"def":4,"col":1,"wee":3},"attributes":"Toxic Silk Spider Flower Ingredient Addictive","mod":""},
{"id":140,"name":"Tearstalks","rus":"","tier":8,"stats":{"che":1,"foo":2,"def":0,"col":0,"wee":0},"attributes":"Healing Nether Ingredient Reed Ghast","mod":""},
{"id":141,"name":"Tine","rus":"","tier":5,"stats":{"che":2,"foo":0,"def":3,"col":0,"wee":0},"attributes":"Shiny Metal Pine Tin Bush","mod":""},
{"id":142,"name":"Coppon","rus":"","tier":6,"stats":{"che":2,"foo":0,"def":1,"col":1,"wee":1},"attributes":"Shiny Metal Cotton Copper Bush","mod":""},
{"id":143,"name":"Brown Mushrooms","rus":"","tier":1,"stats":{"che":0,"foo":2,"def":0,"col":0,"wee":2},"attributes":"Food Mushroom Ingredient","mod":""},
{"id":144,"name":"Red Mushrooms","rus":"","tier":1,"stats":{"che":0,"foo":1,"def":3,"col":0,"wee":2},"attributes":"Toxic Mushroom Ingredient","mod":""},
{"id":145,"name":"Argentia","rus":"","tier":7,"stats":{"che":2,"foo":0,"def":1,"col":0,"wee":0},"attributes":"Shiny Metal Silver Reed","mod":""},
{"id":146,"name":"Plumbilia","rus":"","tier":6,"stats":{"che":2,"foo":0,"def":3,"col":1,"wee":1},"attributes":"Heavy Metal Lead Reed","mod":""},
{"id":147,"name":"Steeleafranks","rus":"","tier":10,"stats":{"che":3,"foo":0,"def":7,"col":2,"wee":8},"attributes":"Metal Tendrilly Iron","mod":""},
{"id":148,"name":"Liveroots","rus":"","tier":8,"stats":{"che":2,"foo":0,"def":5,"col":2,"wee":6},"attributes":"Wood Tendrilly","mod":""},
{"id":149,"name":"Trollplant","rus":"","tier":6,"stats":{"che":0,"foo":0,"def":5,"col":2,"wee":8},"attributes":"Troll Bad Scrap","mod":""},
{"id":150,"name":"Lazulia","rus":"","tier":7,"stats":{"che":4,"foo":2,"def":5,"col":7,"wee":4},"attributes":"Shiny Bad Crystal Lapis","mod":""},
{"id":151,"name":"Glowheat","rus":"","tier":10,"stats":{"che":3,"foo":3,"def":3,"col":5,"wee":4},"attributes":"Light Shiny Crystal","mod":""},
{"id":153,"name":"Fertilia","rus":"","tier":3,"stats":{"che":2,"foo":3,"def":5,"col":4,"wee":8},"attributes":"Growth Healing Flower","mod":""},
{"id":154,"name":"Bauxia","rus":"","tier":6,"stats":{"che":5,"foo":0,"def":2,"col":3,"wee":3},"attributes":"Metal Aluminium Reed Aluminium","mod":""},
{"id":155,"name":"Titania","rus":"","tier":9,"stats":{"che":5,"foo":0,"def":3,"col":3,"wee":1},"attributes":"Metal Heavy Reed Titanium","mod":""},
{"id":156,"name":"Reactoria","rus":"","tier":12,"stats":{"che":4,"foo":0,"def":1,"col":2,"wee":1},"attributes":"Radioactive Metal Danger Uranium","mod":""},
{"id":157,"name":"God of Thunder","rus":"","tier":9,"stats":{"che":3,"foo":0,"def":5,"col":1,"wee":2},"attributes":"Radioactive Metal Coal Thorium","mod":""},
{"id":158,"name":"Transformium","rus":"","tier":12,"stats":{"che":6,"foo":2,"def":1,"col":6,"wee":1},"attributes":"Transform Coal Reed","mod":""},
{"id":159,"name":"Starwart","rus":"","tier":12,"stats":{"che":2,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Wither Nether Undead Netherstar","mod":""},
{"id":160,"name":"Zomplant","rus":"","tier":3,"stats":{"che":1,"foo":3,"def":4,"col":2,"wee":6},"attributes":"Zombie Rotten Undead","mod":""},
{"id":161,"name":"Nickelback","rus":"","tier":5,"stats":{"che":3,"foo":0,"def":1,"col":2,"wee":2},"attributes":"Metal Fire Alloy","mod":""},
{"id":162,"name":"Galvania","rus":"","tier":6,"stats":{"che":3,"foo":0,"def":2,"col":2,"wee":3},"attributes":"Metal Alloy Bush","mod":""},
{"id":163,"name":"Evil Ore","rus":"","tier":8,"stats":{"che":4,"foo":0,"def":2,"col":1,"wee":3},"attributes":"Crystal Fire Nether","mod":""},
{"id":164,"name":"Olivia","rus":"","tier":2,"stats":{"che":1,"foo":0,"def":1,"col":4,"wee":0},"attributes":"Crystal Shiny Processing Olivine","mod":""},
{"id":165,"name":"Sapphirum","rus":"","tier":4,"stats":{"che":1,"foo":0,"def":1,"col":5,"wee":0},"attributes":"Crystal Shiny Metal Sapphire","mod":""},
{"id":166,"name":"Pyrolusium","rus":"","tier":12,"stats":{"che":1,"foo":0,"def":1,"col":1,"wee":0},"attributes":"Metal Clean Bush Manganese","mod":""},
{"id":167,"name":"Scheelinium","rus":"","tier":12,"stats":{"che":3,"foo":0,"def":1,"col":1,"wee":0},"attributes":"Metal Hard Bush Tungsten","mod":""},
{"id":168,"name":"Platina","rus":"","tier":11,"stats":{"che":3,"foo":0,"def":0,"col":3,"wee":0},"attributes":"Metal Shiny Reed Platinum","mod":""},
{"id":169,"name":"Quantaria","rus":"","tier":12,"stats":{"che":4,"foo":0,"def":0,"col":1,"wee":0},"attributes":"Metal Iridium Reed","mod":""},
{"id":170,"name":"Stargatium","rus":"","tier":12,"stats":{"che":4,"foo":0,"def":0,"col":2,"wee":0},"attributes":"Metal Heavy Alien Naquadah","mod":""},
{"id":171,"name":"Lemon","rus":"","tier":4,"stats":{"che":1,"foo":1,"def":0,"col":2,"wee":0},"attributes":"Food Yellow Sour","mod":""},
{"id":172,"name":"Chilly","rus":"","tier":4,"stats":{"che":1,"foo":1,"def":0,"col":2,"wee":0},"attributes":"Food Red Spicy","mod":""},
{"id":173,"name":"Tomato","rus":"","tier":4,"stats":{"che":1,"foo":1,"def":0,"col":2,"wee":0},"attributes":"Food Red","mod":""},
{"id":174,"name":"Grape","rus":"","tier":4,"stats":{"che":1,"foo":1,"def":0,"col":2,"wee":0},"attributes":"Food Purple","mod":""},
{"id":175,"name":"Onion","rus":"","tier":4,"stats":{"che":1,"foo":1,"def":0,"col":2,"wee":0},"attributes":"Food Brown","mod":""},
{"id":176,"name":"Cucumber","rus":"","tier":4,"stats":{"che":1,"foo":1,"def":0,"col":2,"wee":0},"attributes":"Food Green","mod":""},
{"id":177,"name":"Tea","rus":"","tier":4,"stats":{"che":1,"foo":1,"def":0,"col":2,"wee":0},"attributes":"Food Green Ingredient","mod":""},
{"id":178,"name":"Rape","rus":"","tier":4,"stats":{"che":1,"foo":1,"def":0,"col":2,"wee":0},"attributes":"Food Yellow Oil","mod":""},
{"id":179,"name":"Salty Root","rus":"","tier":4,"stats":{"che":0,"foo":0,"def":0,"col":0,"wee":0},"attributes":"Salt Gray Root Hydrophobic","mod":""}
];
var crops = new Array(C_DATA.length);

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}

// возвращает целое число, характеризующее возможность мутации
// ноль - означает, что мутация не возможна
function calculateRatioFor(newCrop, oldCrop) // calculateRatioFor(a, b)
{
	if (newCrop.id === oldCrop.id) {
		return 500;
	}
	var value = 0;
	var stats = ["che", "foo", "def", "col", "wee"];
	for (var i = 0; i < 5; i++)
	{
		var stat = stats[i];
		var delta = Math.abs(newCrop.stats[stat] - oldCrop.stats[stat]);
		value = value - delta + 2;
    }
	var attrNew = newCrop.attributes; //"Yellow Food Wheat"
	var attrOld = oldCrop.attributes;
	attrNew = attrNew.split(' ');
	attrOld = attrOld.split(' ');
    attrNew.forEach(function(attributeNew){
		attrOld.forEach(function(attributeOld){
			if (attributeNew.toLowerCase() == attributeOld.toLowerCase()) {
				value = value + 5;
			}
		});
	});
    var diff = newCrop.tier - oldCrop.tier;
    if (diff > 1) {
      value = value - 2 * diff;
    }
    if (diff < -3) {
      value = value + diff;
    }
    return Math.max(value, 0);
}

/* cropParents - родители, минимум 2
   out: массив, у которого каждое значение большее нуля означает возможную мутацию
*/
function getRatios(cropParents){
	var ratios = [];
    //var total = 0;
    for (var i = 0; i < crops.length; i++)
    {
		var newСrop = crops[i];
		var total = 0;
		cropParents.forEach(function(oldCrop){
			total = total + calculateRatioFor(newСrop, oldCrop);
		});
		ratios[i] = total;
	}
	return ratios;
}

function getCropById(id) {
    return crops.find(function(crop) {
        return crop.id === id;
    });
}

/**
 * все возможные рейтинги, которые даёт родитель B
 */
function calculateRatiosFor(b) {
    return crops.map(function(a) {
        return calculateRatioFor(a, b);
    });
}

/**
 * шанс появления растения A из растения B
 */
function calculateProbabilityFor(a, b) {
    var ratios = calculateRatiosFor(b);
    var sum = ratios.reduce(function(m, n) { return m + n; }, 0); // обычная сумма всех рейтингов
    return calculateRatioFor(a, b) / sum; // вероятность появления растения A из растения B
}

/**
 * с какой вероятностью может появиться растение A из каждого из известных
 */
function calculateProbabilitiesFor(a) {
    return crops.map(function(b) {
        return calculateProbabilityFor(a, b);
    });
}

function sort_crops_by_name(){
	crops = C_DATA;
	crops.sort(function(x,y){
		return x.name.localeCompare(y.name);
	});
	$('#total_crops').text(crops.length);
}
function alignedOptionText(spaceAvailble, beforeTab, afterTab) {
    var spaces = "";
	var n = spaceAvailble - beforeTab.length;
    for (var i = 0; i < n; ++i) {
		spaces = spaces + '&nbsp;';
	}
    return beforeTab + spaces + afterTab;
}

function arrayTable(rows, cols, defaultValue){
	// создаём строки
	var newArray = new Array(rows);
	for(var i=0; i < rows; i++) {
		// создаём столбцы
		newArray[i] = new Array(cols);
		//инициализируем ячейки значением
		for(var j=0; j < cols; j++) {
			newArray[i][j] = defaultValue;
		}
	}
	return newArray;
}

function max_prob(){
	var W = arrayTable(crops.length, crops.length, 99999);
	for (var i = 0; i < crops.length; i++){
		var ratings = calculateProbabilitiesFor(crops[i]);
		for (var j = 0; i < crops.length; i++) {
			if (i != j){
				W[i][j] = 1 / ratings[j]; //Math.floor(ratings[j] * 10000) / 100;
			}
		}
	}

	for (var k = 0; k < crops.length; k++){
		for (var i = 0; i < crops.length; i++){
			for (var j = 0; j < crops.length; j++){
				W[i][j] = Math.min(W[i][j], W[i][k] + W[k][j]);
			}
		}
	}
	$('#test').text(W);
}

sort_crops_by_name();

$(function() {
    function refreshTarget() {
        var $target = $('#target');
		var $target_1 = $('#target_1');
		var $target_2 = $('#target_2');
		var $target_3 = $('#target_3');
		var $target_4 = $('#target_4');
        $target.empty();
		$target_1.empty();
		$target_2.empty();
		$target_3.empty();
		$target_4.empty();

		$target_1.append($('<option>').attr('value', 0).text('---'));
		$target_2.append($('<option>').attr('value', 0).text('---'));
		$target_3.append($('<option>').attr('value', 0).text('---'));
		$target_4.append($('<option>').attr('value', 0).text('---'));
		
        crops.forEach(function(crop) {
			var name = crop.name;
			var t = alignedOptionText(20, name, crop.tier); 
            $target.append($('<option>').attr('value', crop.id).append(t));
			$target_1.append($('<option>').attr('value', crop.id).text(name));
			$target_2.append($('<option>').attr('value', crop.id).text(name));
			$target_3.append($('<option>').attr('value', crop.id).text(name));
			$target_4.append($('<option>').attr('value', crop.id).text(name));
        });
    }
    refreshTarget(); // заполнение списка вариантами

	// 1 часть
    function refreshResult() {
        var targetId = parseInt($('#target').val(), 10);
		var max_tier = parseInt($('#parent_tier').val(), 10);
        var ratings = calculateProbabilitiesFor(getCropById(targetId));
		var sortedProps = [];
		for (var i = 0; i < crops.length; i++) {
			sortedProps[i] = {};
			sortedProps[i].name = crops[i].name;
			sortedProps[i].rating = ratings[i];
			sortedProps[i].attributes = crops[i].attributes;
			sortedProps[i].mod = crops[i].mod;
			sortedProps[i].tier = crops[i].tier;
		}
        //var sortedProps = props;
		sortedProps.sort(function(x, y) {
			if (x.rating < y.rating) {
				return 1;
			}
			if (x.rating > y.rating) {
				return -1;
			}
			// a must be equal to b
			return 0;
		});
		var check_tier = $('#check_tier').prop('checked');
		if (check_tier === true){
			var test_text = '. Был применён фильтр для отсеивания родителй выше ' + max_tier + ' уровня';
			
			$('#test').text(test_text);
		}
		else{
			$('#test').text('');
		}
        var $tbody = $('#result table tbody');
        $tbody.empty();
		var prob_count = 0;
		for (var i = 0; i < sortedProps.length; i++) {
			var prop = sortedProps[i];
			if (prop.rating > 0){
				if ((check_tier === false) || (prop.tier <= max_tier)) {
					prob_count = prob_count + 1;
					var $tr = $('<tr>');
					$tr.append($('<td>').text(prop.name));
					$tr.append($('<td>').text(Math.floor(prop.rating * 10000) / 100 + " %"));
					$tr.append($('<td>').text(prop.tier));
					$tr.append($('<td>').text(prop.mod));
					$tr.append($('<td>').text(prop.attributes));
					$tbody.append($tr);
				}
			}
			else{
				break;
			}
        }
		$('#prob_count').text(prob_count);
    }
    $('#target').change(refreshResult);
	$('#parent_tier').change(refreshResult);
	$(':checkbox').click(refreshResult);

	// 2 часть
	function show_calculateRatioFor(){
        var $tbody = $('#calculateRatioFor table tbody');
        $tbody.empty();
		
		var targetId_1 = parseInt($('#target_1').val(), 10);
		var targetId_2 = parseInt($('#target_2').val(), 10);
		var targetId_3 = parseInt($('#target_3').val(), 10);
		var targetId_4 = parseInt($('#target_4').val(), 10);
		var roditeli = [];
		var roditeli_count = 0;
		if (targetId_1 != 0) {
			roditeli[roditeli_count] = getCropById(targetId_1);
			roditeli_count = roditeli_count + 1;
		}
		if (targetId_2 != 0) {
			roditeli[roditeli_count] = getCropById(targetId_2);
			roditeli_count = roditeli_count + 1;
		}
		if (targetId_3 != 0) {
			roditeli[roditeli_count] = getCropById(targetId_3);
			roditeli_count = roditeli_count + 1;
		}
		if (targetId_4 != 0) {
			roditeli[roditeli_count] = getCropById(targetId_4);
			roditeli_count = roditeli_count + 1;
		}

		if (roditeli_count > 1){
			var ratios = getRatios(roditeli);
			var total = ratios.reduce(function(m, n) { return m + n; }, 0);

			var r = [];
			for (var i = 0; i < crops.length; i++) {
				r[i] = {};
				r[i].name = crops[i].name;
				r[i].rating = ratios[i];
				r[i].tier = crops[i].tier;
			}
			var sr = r.sort(function(x, y){
				if (x.rating < y.rating){
					return 1;
				}
				if (x.rating > y.rating){
					return -1;
				}
				return 0;
			});
			var variants = 0;
			var $tr = $('<tr>');
			$tr.append($('<th>').text('№ п/п'));
			$tr.append($('<th>').text('Культура'));
			$tr.append($('<th>').text('Абс. величина шанса'));
			$tr.append($('<th>').text('Вероятность, %'));
			$tr.append($('<th>').text('Tier'));
			$tbody.append($tr);
			for (var i = 0; i < crops.length; i++) {
				if (sr[i].rating > 0){
					var $tr = $('<tr>');
					$tr.append($('<td>').text(i + 1));
					$tr.append($('<td>').text(sr[i].name));
					$tr.append($('<td>').text(sr[i].rating));
					$tr.append($('<td>').text(Math.floor(sr[i].rating * 10000 / total) / 100 + '%'));
					$tr.append($('<td>').text(sr[i].tier));
					$tbody.append($tr);
					variants = variants + 1;
				}
				else break;
			}
			$('#info_text').empty();
			var txt = 'Вот, что может вырасти (вариантов: <span>' + variants + '</span>):';
			$('#info_text').append(txt);
		}
		else{
			$('#info_text').text('');
		}
		
		//$tbody.append($tr);
	}
	$('#target_1').change(show_calculateRatioFor);
	$('#target_2').change(show_calculateRatioFor);
	$('#target_3').change(show_calculateRatioFor);
	$('#target_4').change(show_calculateRatioFor);
	//show_calculateRatioFor();

    refreshResult(); // отображение таблицы с вероятностями
	//max_prob();
});

//});
