// Strage Controller

// Item Controller
const ItemCtrl = (function(){
 // Item Constructor
 const Item = function(id,name,calories){
  this.id = id;
  this.name = name;
  this.calories = calories
 }

 // Data Structure / State
 const data = {
  items:[
    {id:0,name:'Steak Dinner',calories:1200},
    {id:1,name:'Cookie',calories:400}, 
    {id:2,name:'Eggs',calories:300}
  ],
  currentItem:null,
  totalCalories:0
 }

 // Public Methods
 return{
  getItems:function(){
    return data.items;
  },
  addItem:function(name,calories){
    let ID;
    // Create ID
    if(data.items.length > 0){
      ID = data.items[data.items.length-1].id + 1;
    }else{
      ID = 0
    }

    // Calories to number
     calories = parseInt(calories)

     // Create new item 
     newItem = new Item(ID,name,calories);

     // Add to items array
     data.items.push(newItem)
     
     return newItem;
  },
  logData: function(){
    return data;
  }
 }
})();


// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemLists:'#item-list',
    addBtn:'.add-btn',
    itemName:'#item-name',
    itemCalories:'#item-calories',
  }
 
  // Public Methods
  return{
    populateItemList: function(items){
      let html = ``;

      items.forEach(function(item){
        html+=`
        <li class="collection-item" id="item-${item.id}">
           <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
           <a href="#" class="secondary-content">
             <i class="edit-item fa fa-pencil"></i>
           </a>
        </li>`
      })

      // Insert list items
      document.querySelector(UISelectors.itemLists).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name : document.querySelector(UISelectors.itemName).value,
        calories : document.querySelector(UISelectors.itemCalories).value
      }
    },
    getSelectors: function(){
      return UISelectors
    }
  }
})();


// App Controller
const App = (function(ItemCtrl,UICtrl){
  // Load event listeners
  const loadEventListeners = function (){
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors()

    // Add item Event
    document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSumbit)
  }

  //Add item submit
  const itemAddSumbit = function(e){

    // Get form input from UI Controller
    const input = UICtrl.getItemInput()
    
    // Check for name and calories
    if(input.name!==''&&  input.calories!==''){
      // Add İtem
      const newItem = ItemCtrl.addItem(input.name,input.calories);
    }


    e.preventDefault();
  }


 // Public methods
return {
  init: function(){
    // Fetch items from data structure
    const items = ItemCtrl.getItems();
    
    // Populate list with items
    UICtrl.populateItemList(items);

    // Load event listeners
    loadEventListeners();
  }
}

})(ItemCtrl,UICtrl);

// Initializing App.
App.init()