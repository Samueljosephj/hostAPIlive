const mongoose = require ("mongoose");
const productSchema = new mongoose.Schema({

id:{
  type:String,
},


  name:{
      type:String,
      required : true,
    },

    company:{
  type:String,
  required : true,
},

price:{
  type:Number,
  required : true,

},

colors:{
  type:Array,
  required : true,
},

image:{
  type:String,
  // required : true,

},

 description:{
    type:String,
    // required : true,

  },


category:{
  type:String,
  // required : true,

},
featured :{
  type:Boolean,
  default: false


},

stock:{
  type:Number
},

reviews :{
  type: Number
},


stars:{
  type: Number
},


image :{
  type: Array,
  id:{
    type:String,
    width: Number,
    height: Number,
    url:String,
    filename:String,
    size:Number,
    type:String
  },
  id:{
    type:String,
    width: Number,
    height: Number,
    url:String,
    filename:String,
    size:Number,
    type:String
  },id:{
    type:String,
    width: Number,
    height: Number,
    url:String,
    filename:String,
    size:Number,
    type:String
  },id:{
    type:String,
    width: Number,
    height: Number,
    url:String,
    filename:String,
    size:Number,
    type:String
  }


},






shipping :{
  type: Boolean,
    default: false

},

});

module.exports = mongoose.model("Product", productSchema);
